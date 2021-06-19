var exec = require("cordova/exec"),
  Camera = require("cordova/plugin/CameraConstants");

var cameraExport = {};

// Tack on the Camera Constants to the base camera plugin.
for (var key in Camera) {
  cameraExport[key] = Camera[key];
}

/**
 * Gets a picture from source defined by "options.sourceType", and returns the
 * image as defined by the "options.destinationType" option.

 * The defaults are sourceType=CAMERA and destinationType=FILE_URI.
 *
 * @param {Function} successCallback
 * @param {Function} errorCallback
 * @param {Object} options
 */
cameraExport.getPicture = function (successCallback, errorCallback, options) {
  // successCallback required
  if (typeof successCallback != "function") {
    console.log("Camera Error: successCallback is not a function");
    return;
  }

  // errorCallback optional
  if (errorCallback && typeof errorCallback != "function") {
    console.log("Camera Error: errorCallback is not a function");
    return;
  }

  var quality = 50;
  if (options && typeof options.quality == "number") {
    quality = options.quality;
  } else if (options && typeof options.quality == "string") {
    var qlity = parseInt(options.quality, 10);
    if (isNaN(qlity) === false) {
      quality = qlity.valueOf();
    }
  }

  var destinationType = Camera.DestinationType.FILE_URI;
  if (typeof options.destinationType == "number") {
    destinationType = options.destinationType;
  }

  var sourceType = Camera.PictureSourceType.CAMERA;
  if (typeof options.sourceType == "number") {
    sourceType = options.sourceType;
  }

  var targetWidth = -1;
  if (typeof options.targetWidth == "number") {
    targetWidth = options.targetWidth;
  } else if (typeof options.targetWidth == "string") {
    var width = parseInt(options.targetWidth, 10);
    if (isNaN(width) === false) {
      targetWidth = width.valueOf();
    }
  }

  var targetHeight = -1;
  if (typeof options.targetHeight == "number") {
    targetHeight = options.targetHeight;
  } else if (typeof options.targetHeight == "string") {
    var height = parseInt(options.targetHeight, 10);
    if (isNaN(height) === false) {
      targetHeight = height.valueOf();
    }
  }

  var encodingType = Camera.EncodingType.JPEG;
  if (typeof options.encodingType == "number") {
    encodingType = options.encodingType;
  }

  var mediaType = Camera.MediaType.PICTURE;
  if (typeof options.mediaType == "number") {
    mediaType = options.mediaType;
  }
  var allowEdit = false;
  if (typeof options.allowEdit == "boolean") {
    allowEdit = options.allowEdit;
  } else if (typeof options.allowEdit == "number") {
    allowEdit = options.allowEdit <= 0 ? false : true;
  }
  var correctOrientation = false;
  if (typeof options.correctOrientation == "boolean") {
    correctOrientation = options.correctOrientation;
  } else if (typeof options.correctOrientation == "number") {
    correctOrientation = options.correctOrientation <= 0 ? false : true;
  }
  var saveToPhotoAlbum = false;
  if (typeof options.saveToPhotoAlbum == "boolean") {
    saveToPhotoAlbum = options.saveToPhotoAlbum;
  } else if (typeof options.saveToPhotoAlbum == "number") {
    saveToPhotoAlbum = options.saveToPhotoAlbum <= 0 ? false : true;
  }
  var popoverOptions = null;
  if (typeof options.popoverOptions == "object") {
    popoverOptions = options.popoverOptions;
  }

  var args = [
    quality,
    destinationType,
    sourceType,
    targetWidth,
    targetHeight,
    encodingType,
    mediaType,
    allowEdit,
    correctOrientation,
    saveToPhotoAlbum,
    popoverOptions,
  ];

  exec(successCallback, errorCallback, "Camera", "takePicture", args);
};

cameraExport.cleanup = function (successCallback, errorCallback) {
  exec(successCallback, errorCallback, "Camera", "cleanup", []);
};

module.exports = cameraExport;
