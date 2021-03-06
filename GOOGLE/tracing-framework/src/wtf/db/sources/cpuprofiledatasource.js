/**
 * Copyright 2013 Google, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/**
 * @fileoverview Chrome cpu profile trace event source.
 *
 * @author rsturgell@google.com (Ryan Sturgell)
 */

goog.provide("wtf.db.sources.CpuProfileDataSource");

goog.require("wtf.data.EventFlag");
goog.require("wtf.data.ScriptContextInfo");
goog.require("wtf.db.DataSource");
goog.require("wtf.db.EventType");
goog.require("wtf.db.PresentationHint");
goog.require("wtf.db.Unit");
goog.require("wtf.io.Blob");
goog.require("wtf.io.DataFormat");
goog.require("wtf.io.ReadTransport");
goog.require("wtf.util");

/**
 * Data source that consumes data from a .cpuprofile file generated by the
 * chrome devtools sampling profiler.
 *
 * @param {!wtf.db.Database} db Target database.
 * @param {!wtf.db.DataSourceInfo} sourceInfo Data source info.
 * @param {!wtf.io.ReadTransport} transport Streaming read transport.
 *     Ownership is transferred to the trace source and the stream will be
 *     disposed at the same time.
 * @constructor
 * @extends {wtf.db.DataSource}
 */
wtf.db.sources.CpuProfileDataSource = function (db, sourceInfo, transport) {
  goog.base(this, db, sourceInfo);

  /**
   * Read transport.
   * This instance owns the stream and will dispose it at the same time.
   * @type {!wtf.io.ReadTransport}
   * @private
   */
  this.transport_ = transport;
  this.registerDisposable(this.transport_);

  /**
   * The currently set zone, if any.
   * @type {!wtf.db.Zone}
   * @private
   */
  this.zone_ = db.getDefaultZone();

  /**
   * All received blob parts.
   * They'll be stitched up at the end.
   * @type {!Array.<!wtf.io.Blob>}
   * @private
   */
  this.blobParts_ = [];

  // We gather all the blobs and process at the end, because this format can't
  // handle incremental loading.
  this.transport_.setPreferredFormat(wtf.io.DataFormat.BLOB);

  this.transport_.addListener(
    wtf.io.ReadTransport.EventType.RECEIVE_DATA,
    this.dataReceived_,
    this
  );
  this.transport_.addListener(
    wtf.io.ReadTransport.EventType.ERROR,
    this.transportErrored_,
    this
  );
  this.transport_.addListener(
    wtf.io.ReadTransport.EventType.END,
    this.transportEnded_,
    this
  );
};
goog.inherits(wtf.db.sources.CpuProfileDataSource, wtf.db.DataSource);

/**
 * @override
 */
wtf.db.sources.CpuProfileDataSource.prototype.start = function () {
  var deferred = goog.base(this, "start");

  // Start streaming data in.
  this.transport_.resume();
  return deferred;
};

/**
 * Handles stream data received events.
 * @param {!wtf.io.BlobData} data Blob data.
 * @private
 */
wtf.db.sources.CpuProfileDataSource.prototype.dataReceived_ = function (data) {
  this.blobParts_.push(data);
};

/**
 * Handles stream error events.
 * @param {!Error} e Error.
 * @private
 */
wtf.db.sources.CpuProfileDataSource.prototype.transportErrored_ = function (e) {
  this.error("Error loading trace data", e.toString());
};

/**
 * Handles stream end events.
 * @private
 */
wtf.db.sources.CpuProfileDataSource.prototype.transportEnded_ = function () {
  // Stitch together all the input parts.
  var blob = wtf.io.Blob.create(this.blobParts_);

  // Grab an ArrayBuffer that we can work with.
  blob.readAsArrayBuffer(this.process_, this);
};

/**
 * Processes a single large array buffer.
 * @param {ArrayBuffer} buffer Input array buffer.
 * @private
 */
wtf.db.sources.CpuProfileDataSource.prototype.process_ = function (buffer) {
  if (!buffer) {
    // Failed!
    this.error("Error reading data", "Array buffer could not be allocated.");
    return;
  }

  // Process everything.
  this.processData_(new Uint8Array(buffer));

  // Done!
  this.end();
};

/**
 * Processes the full buffer.
 * @param {!Uint8Array} buffer Data buffer.
 * @private
 */
wtf.db.sources.CpuProfileDataSource.prototype.processData_ = function (buffer) {
  var db = this.getDatabase();
  var eventTypeTable = db.getEventTypeTable();

  var json = wtf.util.convertUint8ArrayToAsciiString(buffer);
  var profile;
  try {
    // This is a pretty slow call for the potentially large cpu profiles we're
    // dealing with. Also error reporting from JSON.parse is terrible. Consider
    // doing an incremental parse.
    profile = goog.global.JSON.parse(json);
  } catch (e) {
    this.error("Could not parse profile.\n" + e);
    return;
  }

  // .cpuprofile files don't have any kind of version specified - try to
  // validate based on the presence of top-level properties.
  var requiredProps = ["head", "samples", "startTime", "endTime"];
  for (var i = 0; i < requiredProps.length; i++) {
    if (!profile.hasOwnProperty(requiredProps[i])) {
      this.error(
        'Could not parse profile - missing required property "' +
          requiredProps[i] +
          '"'
      );
      return;
    }
  }

  // Microseconds between samples (chrome can record at 1/ms or 10/ms).
  var timeDelta =
    (1e6 * (profile["endTime"] - profile["startTime"])) /
    profile["samples"].length;

  // TODO(rsturgell): Possible to fill in some useful context info?
  var contextInfo = new wtf.data.ScriptContextInfo();

  // For now just use bare presentation since we don't have frame events.
  // TODO(rsturgell): Generate fake frame and gc events.
  var presentationHints = 0;
  presentationHints |= wtf.db.PresentationHint.NO_RENDER_DATA;
  presentationHints |= wtf.db.PresentationHint.BARE;

  // Initialize the trace source.
  // Only call when all other parsing has been successful.
  if (
    !this.initialize(
      contextInfo,
      0,
      presentationHints,
      wtf.db.Unit.TIME_MILLISECONDS,
      {},
      0,
      0
    )
  ) {
    this.error("Unable to initialize data source", "File corrupt or invalid.");
    return;
  }

  // Setup some builtin event types.
  var leaveEventType = eventTypeTable.defineType(
    wtf.db.EventType.createInstance(
      "wtf.scope#leave()",
      wtf.data.EventFlag.BUILTIN | wtf.data.EventFlag.INTERNAL
    )
  );

  // profile.head is the root of a top-down profile tree. Each node has an id,
  // and the ids are referenced in the profile.samples array. reverseStacksById
  // is a lookup of id->node (which can then be traversed up using parent
  // pointers).
  var reverseStacksById = {};

  // The cpu profile includes gc time, but the gc node is a child of the root
  // so does not include stack information. We hold on to the reference so we
  // can detect it in the samples and artificially place it on top of the
  // current stack.
  var gcNode = null;

  // "idle" is another child of root and it means nothing is happening. Store
  // that off as well so we can ignore it later (better to show empty space in
  // the trace).
  var idleNode = null;

  var eventTypesByCallUID = {};

  function visit(node, parent, depth) {
    // Set up parent points for reverse stack traversal.
    node["parent"] = parent;
    // We need the depth for stack alignment in traverseStacks.
    node["depth"] = depth;
    var uid = node["callUID"];
    if (!eventTypesByCallUID[uid]) {
      var fnName = node["functionName"] || "(unknown)";
      // GCs are weird, see comment in the sample loop below.
      if (fnName == "(garbage collector)") {
        gcNode = node;
      } else if (fnName == "(idle)") {
        idleNode = node;
      }
      // fnName can be '(anonymous function)' and other special names, turn that
      // into a valid function name like '_anonymous_function_'.
      fnName = fnName.replace(/[^\.a-zA-Z_\$]/g, "_");
      eventTypesByCallUID[uid] = eventTypeTable.defineType(
        wtf.db.EventType.createScope(fnName)
      );
    }
    reverseStacksById[node["id"]] = node;
    node["children"].forEach(function (child) {
      visit(child, node, depth + 1);
    });
  }
  visit(profile["head"], null, 0);

  var eventList = this.zone_.getEventList();

  // This function takes a pair of profiler samples and infers a nested call
  // stack relationship. For example, a,b,c and d,b,c would be interpreted as a
  // single call to c, which makes a single call to b, which makes two calls:
  // one to a, and one to d. This may be wrong (c may have made TWO calls to b),
  // but it's the best we can do with sample information.
  function traverseStacks(prev, next, time) {
    // A list of enter events to execute in reverse order after all necessary
    // exit events have been emitted.
    var enters = [];
    // Terminate any excess scopes from prev.
    while (prev["depth"] > next["depth"]) {
      eventList.insert(leaveEventType, time);
      prev = prev["parent"];
    }
    // Enter any new level of scope from next.
    while (next["depth"] > prev["depth"]) {
      enters.push(next["callUID"]);
      next = next["parent"];
    }
    // At this point the stacks are the same depth and we need to traverse up
    // to where they join (which may be the root).
    while (prev != next) {
      eventList.insert(leaveEventType, time);
      enters.push(next["callUID"]);
      prev = prev["parent"];
      next = next["parent"];
    }
    // Now add all the scope enter events in reverse order.
    for (var i = enters.length - 1; i >= 0; i--) {
      eventList.insert(eventTypesByCallUID[enters[i]], time);
    }
  }

  // Insert event data.
  db.beginInsertingEvents(this);
  var root = profile["head"];
  var prev = root;
  var samples = profile["samples"];
  for (var i = 0; i < samples.length; i++) {
    var sampleId = samples[i];
    var stack = reverseStacksById[sampleId];
    if (stack == idleNode) {
      stack = root;
    } else if (stack == gcNode && prev != gcNode) {
      // SUPERHACK: Samples during gc don't have a stack, so we just kind of
      // hack it into the stack by assuming that the gc occurs within the
      // previous stack. So the gc node hops around the otherwise static tree
      // of stacks, which is kind of weird.
      stack["parent"] = prev;
      stack["depth"] = prev["depth"] + 1;
    }
    traverseStacks(prev, stack, i * timeDelta);
    prev = stack;
  }
  traverseStacks(prev, root, i * timeDelta);
  eventList.insert(leaveEventType, i * timeDelta);
  db.endInsertingEvents();
};
