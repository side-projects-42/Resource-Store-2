var obj = {
  method: function (...args) {
    return {
      self: this,
      args: args,
    };
  },
};

var result = {
  obj: obj,
  result: obj["meth" + "od"](0, ...[1, 2], 3),
};

// ----------------------------------------------------------------------------

assertEquals(result.obj, result.result.self);
assertArrayEquals([0, 1, 2, 3], result.result.args);
