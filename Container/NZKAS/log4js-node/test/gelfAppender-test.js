"use strict";
var vows = require("vows"),
  assert = require("assert"),
  sandbox = require("sandboxed-module"),
  log4js = require("../lib/log4js"),
  realLayouts = require("../lib/layouts"),
  setupLogging = function (options, category, compressedLength) {
    var fakeDgram = {
        sent: false,
        socket: {
          packetLength: 0,
          closed: false,
          close: function () {
            this.closed = true;
          },
          send: function (pkt, offset, pktLength, port, host) {
            fakeDgram.sent = true;
            this.packet = pkt;
            this.offset = offset;
            this.packetLength = pktLength;
            this.port = port;
            this.host = host;
          },
        },
        createSocket: function (type) {
          this.type = type;
          return this.socket;
        },
      },
      fakeZlib = {
        gzip: function (objectToCompress, callback) {
          fakeZlib.uncompressed = objectToCompress;
          if (this.shouldError) {
            callback({ stack: "oh noes" });
            return;
          }

          if (compressedLength) {
            callback(null, { length: compressedLength });
          } else {
            callback(null, "I've been compressed");
          }
        },
      },
      exitHandler,
      fakeConsole = {
        error: function (message) {
          this.message = message;
        },
      },
      fakeLayouts = {
        layout: function (type, options) {
          this.type = type;
          this.options = options;
          return realLayouts.messagePassThroughLayout;
        },
        messagePassThroughLayout: realLayouts.messagePassThroughLayout,
      },
      appender = sandbox.require("../lib/appenders/gelf", {
        requires: {
          dgram: fakeDgram,
          zlib: fakeZlib,
          "../layouts": fakeLayouts,
        },
        globals: {
          process: {
            on: function (evt, handler) {
              if (evt === "exit") {
                exitHandler = handler;
              }
            },
          },
          console: fakeConsole,
        },
      });

    log4js.clearAppenders();
    log4js.addAppender(
      appender.configure(options || {}),
      category || "gelf-test"
    );
    return {
      dgram: fakeDgram,
      compress: fakeZlib,
      exitHandler: exitHandler,
      console: fakeConsole,
      layouts: fakeLayouts,
      logger: log4js.getLogger(category || "gelf-test"),
    };
  };

vows
  .describe("log4js gelfAppender")
  .addBatch({
    "with default gelfAppender settings": {
      topic: function () {
        var setup = setupLogging();
        setup.logger.info("This is a test");
        return setup;
      },
      "the dgram packet": {
        topic: function (setup) {
          return setup.dgram;
        },
        "should be sent via udp to the localhost gelf server": function (
          dgram
        ) {
          assert.equal(dgram.type, "udp4");
          assert.equal(dgram.socket.host, "localhost");
          assert.equal(dgram.socket.port, 12201);
          assert.equal(dgram.socket.offset, 0);
          assert.ok(dgram.socket.packetLength > 0, "Received blank message");
        },
        "should be compressed": function (dgram) {
          assert.equal(dgram.socket.packet, "I've been compressed");
        },
      },
      "the uncompressed log message": {
        topic: function (setup) {
          var message = JSON.parse(setup.compress.uncompressed);
          return message;
        },
        "should be in the gelf format": function (message) {
          assert.equal(message.version, "1.1");
          assert.equal(message.host, require("os").hostname());
          assert.equal(message.level, 6); //INFO
          assert.equal(message.short_message, "This is a test");
        },
      },
    },
    "with a message longer than 8k": {
      topic: function () {
        var setup = setupLogging(undefined, undefined, 10240);
        setup.logger.info("Blah.");
        return setup;
      },
      "the dgram packet": {
        topic: function (setup) {
          return setup.dgram;
        },
        "should not be sent": function (dgram) {
          assert.equal(dgram.sent, false);
        },
      },
    },
    "with non-default options": {
      topic: function () {
        var setup = setupLogging({
          host: "somewhere",
          port: 12345,
          hostname: "cheese",
          facility: "nonsense",
        });
        setup.logger.debug("Just testing.");
        return setup;
      },
      "the dgram packet": {
        topic: function (setup) {
          return setup.dgram;
        },
        "should pick up the options": function (dgram) {
          assert.equal(dgram.socket.host, "somewhere");
          assert.equal(dgram.socket.port, 12345);
        },
      },
      "the uncompressed packet": {
        topic: function (setup) {
          var message = JSON.parse(setup.compress.uncompressed);
          return message;
        },
        "should pick up the options": function (message) {
          assert.equal(message.host, "cheese");
          assert.equal(message._facility, "nonsense");
        },
      },
    },

    "on process.exit": {
      topic: function () {
        var setup = setupLogging();
        setup.exitHandler();
        return setup;
      },
      "should close open sockets": function (setup) {
        assert.isTrue(setup.dgram.socket.closed);
      },
    },

    "on zlib error": {
      topic: function () {
        var setup = setupLogging();
        setup.compress.shouldError = true;
        setup.logger.info("whatever");
        return setup;
      },
      "should output to console.error": function (setup) {
        assert.equal(setup.console.message, "oh noes");
      },
    },

    "with layout in configuration": {
      topic: function () {
        var setup = setupLogging({
          layout: {
            type: "madeuplayout",
            earlgrey: "yes, please",
          },
        });
        return setup;
      },
      "should pass options to layout": function (setup) {
        assert.equal(setup.layouts.type, "madeuplayout");
        assert.equal(setup.layouts.options.earlgrey, "yes, please");
      },
    },

    "with custom fields options": {
      topic: function () {
        var setup = setupLogging({
          host: "somewhere",
          port: 12345,
          hostname: "cheese",
          facility: "nonsense",
          customFields: {
            _every1: "Hello every one",
            _every2: "Hello every two",
          },
        });
        var myFields = {
          GELF: true,
          _every2: "Overwritten!",
          _myField: "This is my field!",
        };
        setup.logger.debug(myFields, "Just testing.");
        return setup;
      },
      "the dgram packet": {
        topic: function (setup) {
          return setup.dgram;
        },
        "should pick up the options": function (dgram) {
          assert.equal(dgram.socket.host, "somewhere");
          assert.equal(dgram.socket.port, 12345);
        },
      },
      "the uncompressed packet": {
        topic: function (setup) {
          var message = JSON.parse(setup.compress.uncompressed);
          return message;
        },
        "should pick up the options": function (message) {
          assert.equal(message.host, "cheese");
          assert.equal(message._facility, "nonsense");
          assert.equal(message._every1, "Hello every one"); // the default value
          assert.equal(message._every2, "Overwritten!"); // the overwritten value
          assert.equal(message._myField, "This is my field!"); // the value for this message only
          assert.equal(message.short_message, "Just testing."); // skip the field object
        },
      },
    },
  })
  .export(module);
