/*!
 * Attach chai to global
 */

global.chai = require("chai");

/*!
 * Provide check for fail function.
 */

global.err = function (fn, msg) {
  try {
    fn();
    throw new chai.AssertionError("Expected an error");
  } catch (err) {
    if ("string" === typeof msg) {
      chai.expect(err.message).to.equal(msg);
    } else {
      chai.expect(err.message).to.match(msg);
    }
  }
};
