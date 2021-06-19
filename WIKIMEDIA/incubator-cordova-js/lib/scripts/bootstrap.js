(function (context) {
  var channel = require("cordova/channel"),
    _self = {
      boot: function () {
        /**
         * Create all cordova objects once page has fully loaded and native side is ready.
         */
        channel.join(
          function () {
            var builder = require("cordova/builder"),
              base = require("cordova/common"),
              platform = require("cordova/platform");

            // Drop the common globals into the window object, but be nice and don't overwrite anything.
            builder.build(base.objects).intoButDontClobber(window);

            // Drop the platform-specific globals into the window object
            // and clobber any existing object.
            builder.build(platform.objects).intoAndClobber(window);

            // Merge the platform-specific overrides/enhancements into
            // the window object.
            if (typeof platform.merges !== "undefined") {
              builder.build(platform.merges).intoAndMerge(window);
            }

            // Call the platform-specific initialization
            platform.initialize();

            // Fire event to notify that all objects are created
            channel.onCordovaReady.fire();

            // Fire onDeviceReady event once all constructors have run and
            // cordova info has been received from native side.
            channel.join(function () {
              require("cordova").fireDocumentEvent("deviceready");
            }, channel.deviceReadyChannelsArray);
          },
          [channel.onDOMContentLoaded, channel.onNativeReady]
        );
      },
    };

  // boot up once native side is ready
  channel.onNativeReady.subscribeOnce(_self.boot);

  // _nativeReady is global variable that the native side can set
  // to signify that the native code is ready. It is a global since
  // it may be called before any cordova JS is ready.
  if (window._nativeReady) {
    channel.onNativeReady.fire();
  }
})(window);
