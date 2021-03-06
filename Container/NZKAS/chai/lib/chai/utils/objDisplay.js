/*!
 * Chai - flag utility
 * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var inspect = require("./inspect");

/**
 * ### .objDisplay (object)
 *
 * Determines if an object or an array matches
 * criteria to be inspected in-line for error
 * messages or should be truncated.
 *
 * @param {Mixed} javascript object to inspect
 * @name objDisplay
 * @api public
 */

module.exports = function (obj) {
  var str = inspect(obj),
    type = Object.prototype.toString.call(obj);

  if (str.length >= 40) {
    if (type === "[object Function]") {
      return !obj.name || obj.name === ""
        ? "[Function]"
        : "[Function: " + obj.name + "]";
    } else if (type === "[object Array]") {
      return "[ Array(" + obj.length + ") ]";
    } else if (type === "[object Object]") {
      var keys = Object.keys(obj),
        kstr =
          keys.length > 2
            ? keys.splice(0, 2).join(", ") + ", ..."
            : keys.join(", ");
      return "{ Object (" + kstr + ") }";
    } else {
      return str;
    }
  } else {
    return str;
  }
};
