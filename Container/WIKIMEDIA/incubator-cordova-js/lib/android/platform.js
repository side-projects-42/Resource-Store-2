module.exports = {
  id: "android",
  initialize: function () {
    var channel = require("cordova/channel"),
      cordova = require("cordova"),
      exec = require("cordova/exec");

    // Inject a listener for the backbutton on the document.
    var backButtonChannel = cordova.addDocumentEventHandler("backbutton", {
      onSubscribe: function () {
        // If we just attached the first handler, let native know we need to override the back button.
        if (this.numHandlers === 1) {
          exec(null, null, "App", "overrideBackbutton", [true]);
        }
      },
      onUnsubscribe: function () {
        // If we just detached the last handler, let native know we no longer override the back button.
        if (this.numHandlers === 0) {
          exec(null, null, "App", "overrideBackbutton", [false]);
        }
      },
    });

    // Add hardware MENU and SEARCH button handlers
    cordova.addDocumentEventHandler("menubutton");
    cordova.addDocumentEventHandler("searchbutton");

    // Figure out if we need to shim-in localStorage and WebSQL
    // support from the native side.
    var storage = require("cordova/plugin/android/storage");

    // First patch WebSQL if necessary
    if (typeof window.openDatabase == "undefined") {
      // Not defined, create an openDatabase function for all to use!
      window.openDatabase = storage.openDatabase;
    } else {
      // Defined, but some Android devices will throw a SECURITY_ERR -
      // so we wrap the whole thing in a try-catch and shim in our own
      // if the device has Android bug 16175.
      var originalOpenDatabase = window.openDatabase;
      window.openDatabase = function (name, version, desc, size) {
        var db = null;
        try {
          db = originalOpenDatabase(name, version, desc, size);
        } catch (ex) {
          if (ex.code === 18) {
            db = null;
          } else {
            throw ex;
          }
        }

        if (db === null) {
          return storage.openDatabase(name, version, desc, size);
        } else {
          return db;
        }
      };
    }

    // Patch localStorage if necessary
    if (
      typeof window.localStorage == "undefined" ||
      window.localStorage === null
    ) {
      window.localStorage = new storage.CupcakeLocalStorage();
    }

    // Let native code know we are all done on the JS side.
    // Native code will then un-hide the WebView.
    channel.join(
      function () {
        exec(null, null, "App", "show", []);
      },
      [channel.onCordovaReady]
    );
  },
  objects: {
    cordova: {
      children: {
        JSCallback: {
          path: "cordova/plugin/android/callback",
        },
        JSCallbackPolling: {
          path: "cordova/plugin/android/polling",
        },
      },
    },
    navigator: {
      children: {
        app: {
          path: "cordova/plugin/android/app",
        },
      },
    },
    File: {
      // exists natively on Android WebView, override
      path: "cordova/plugin/File",
    },
    FileReader: {
      // exists natively on Android WebView, override
      path: "cordova/plugin/FileReader",
    },
    FileError: {
      //exists natively on Android WebView on Android 4.x
      path: "cordova/plugin/FileError",
    },
    MediaError: {
      // exists natively on Android WebView on Android 4.x
      path: "cordova/plugin/MediaError",
    },
  },
  merges: {
    device: {
      path: "cordova/plugin/android/device",
    },
    navigator: {
      children: {
        notification: {
          path: "cordova/plugin/android/notification",
        },
      },
    },
  },
};
