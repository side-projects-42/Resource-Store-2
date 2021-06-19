var utils = require("cordova/utils"),
  exec = require("cordova/exec");

var mediaObjects = {};

/**
 * This class provides access to the device media, interfaces to both sound and video
 *
 * @constructor
 * @param src                   The file name or url to play
 * @param successCallback       The callback to be called when the file is done playing or recording.
 *                                  successCallback()
 * @param errorCallback         The callback to be called if there is an error.
 *                                  errorCallback(int errorCode) - OPTIONAL
 * @param statusCallback        The callback to be called when media status has changed.
 *                                  statusCallback(int statusCode) - OPTIONAL
 */
var Media = function (src, successCallback, errorCallback, statusCallback) {
  // successCallback optional
  if (successCallback && typeof successCallback !== "function") {
    console.log("Media Error: successCallback is not a function");
    return;
  }

  // errorCallback optional
  if (errorCallback && typeof errorCallback !== "function") {
    console.log("Media Error: errorCallback is not a function");
    return;
  }

  // statusCallback optional
  if (statusCallback && typeof statusCallback !== "function") {
    console.log("Media Error: statusCallback is not a function");
    return;
  }

  this.id = utils.createUUID();
  mediaObjects[this.id] = this;
  this.src = src;
  this.successCallback = successCallback;
  this.errorCallback = errorCallback;
  this.statusCallback = statusCallback;
  this._duration = -1;
  this._position = -1;
  exec(null, this.errorCallback, "Media", "create", [this.id, this.src]);
};

// Media messages
Media.MEDIA_STATE = 1;
Media.MEDIA_DURATION = 2;
Media.MEDIA_POSITION = 3;
Media.MEDIA_ERROR = 9;

// Media states
Media.MEDIA_NONE = 0;
Media.MEDIA_STARTING = 1;
Media.MEDIA_RUNNING = 2;
Media.MEDIA_PAUSED = 3;
Media.MEDIA_STOPPED = 4;
Media.MEDIA_MSG = ["None", "Starting", "Running", "Paused", "Stopped"];

// "static" function to return existing objs.
Media.get = function (id) {
  return mediaObjects[id];
};

/**
 * Start or resume playing audio file.
 */
Media.prototype.play = function (options) {
  exec(null, null, "Media", "startPlayingAudio", [this.id, this.src, options]);
};

/**
 * Stop playing audio file.
 */
Media.prototype.stop = function () {
  var me = this;
  exec(
    function () {
      me._position = 0;
    },
    this.errorCallback,
    "Media",
    "stopPlayingAudio",
    [this.id]
  );
};

/**
 * Seek or jump to a new time in the track..
 */
Media.prototype.seekTo = function (milliseconds) {
  var me = this;
  exec(
    function (p) {
      me._position = p;
    },
    this.errorCallback,
    "Media",
    "seekToAudio",
    [this.id, milliseconds]
  );
};

/**
 * Pause playing audio file.
 */
Media.prototype.pause = function () {
  exec(null, this.errorCallback, "Media", "pausePlayingAudio", [this.id]);
};

/**
 * Get duration of an audio file.
 * The duration is only set for audio that is playing, paused or stopped.
 *
 * @return      duration or -1 if not known.
 */
Media.prototype.getDuration = function () {
  return this._duration;
};

/**
 * Get position of audio.
 */
Media.prototype.getCurrentPosition = function (success, fail) {
  var me = this;
  exec(
    function (p) {
      me._position = p;
      success(p);
    },
    fail,
    "Media",
    "getCurrentPositionAudio",
    [this.id]
  );
};

/**
 * Start recording audio file.
 */
Media.prototype.startRecord = function () {
  exec(null, this.errorCallback, "Media", "startRecordingAudio", [
    this.id,
    this.src,
  ]);
};

/**
 * Stop recording audio file.
 */
Media.prototype.stopRecord = function () {
  exec(null, this.errorCallback, "Media", "stopRecordingAudio", [this.id]);
};

/**
 * Release the resources.
 */
Media.prototype.release = function () {
  exec(null, this.errorCallback, "Media", "release", [this.id]);
};

/**
 * Adjust the volume.
 */
Media.prototype.setVolume = function (volume) {
  exec(null, null, "Media", "setVolume", [this.id, volume]);
};

/**
 * Audio has status update.
 * PRIVATE
 *
 * @param id            The media object id (string)
 * @param status        The status code (int)
 * @param msg           The status message (string)
 */
Media.onStatus = function (id, msg, value) {
  var media = mediaObjects[id];
  // If state update
  if (msg === Media.MEDIA_STATE) {
    if (media.statusCallback) {
      media.statusCallback(value);
    }
    if (value === Media.MEDIA_STOPPED) {
      if (media.successCallback) {
        media.successCallback();
      }
    }
  } else if (msg === Media.MEDIA_DURATION) {
    media._duration = value;
  } else if (msg === Media.MEDIA_ERROR) {
    if (media.errorCallback) {
      // value should be a MediaError object when msg == MEDIA_ERROR
      media.errorCallback(value);
    }
  } else if (msg === Media.MEDIA_POSITION) {
    media._position = value;
  }
};

module.exports = Media;
