var exec = require("cordova/exec");

/**
 * Provides access to notifications on the device.
 */

module.exports = {
  /**
   * Open a native alert dialog, with a customizable title and button text.
   *
   * @param {String} message              Message to print in the body of the alert
   * @param {Function} completeCallback   The callback that is called when user clicks on a button.
   * @param {String} title                Title of the alert dialog (default: Alert)
   * @param {String} buttonLabel          Label of the close button (default: OK)
   */
  alert: function (message, completeCallback, title, buttonLabel) {
    var _title = title || "Alert";
    var _buttonLabel = buttonLabel || "OK";
    exec(completeCallback, null, "Notification", "alert", [
      message,
      _title,
      _buttonLabel,
    ]);
  },

  /**
   * Open a native confirm dialog, with a customizable title and button text.
   * The result that the user selects is returned to the result callback.
   *
   * @param {String} message              Message to print in the body of the alert
   * @param {Function} resultCallback     The callback that is called when user clicks on a button.
   * @param {String} title                Title of the alert dialog (default: Confirm)
   * @param {String} buttonLabels         Comma separated list of the labels of the buttons (default: 'OK,Cancel')
   */
  confirm: function (message, resultCallback, title, buttonLabels) {
    var _title = title || "Confirm";
    var _buttonLabels = buttonLabels || "OK,Cancel";
    exec(resultCallback, null, "Notification", "confirm", [
      message,
      _title,
      _buttonLabels,
    ]);
  },

  /**
   * Causes the device to vibrate.
   *
   * @param {Integer} mills       The number of milliseconds to vibrate for.
   */
  vibrate: function (mills) {
    exec(null, null, "Notification", "vibrate", [mills]);
  },

  /**
   * Causes the device to beep.
   * On Android, the default notification ringtone is played "count" times.
   *
   * @param {Integer} count       The number of beeps.
   */
  beep: function (count) {
    exec(null, null, "Notification", "beep", [count]);
  },
};
