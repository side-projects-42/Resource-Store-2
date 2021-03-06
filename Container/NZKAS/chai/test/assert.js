describe("assert", function () {
  var assert = chai.assert;

  it("assert", function () {
    var foo = "bar";
    assert(foo == "bar", "expected foo to equal `bar`");

    err(function () {
      assert(foo == "baz", "expected foo to equal `bar`");
    }, "expected foo to equal `bar`");
  });

  it("fail", function () {
    chai
      .expect(function () {
        assert.fail();
      })
      .to.throw(chai.AssertionError);
  });

  it("isTrue", function () {
    assert.isTrue(true);

    err(function () {
      assert.isTrue(false);
    }, "expected false to be true");

    err(function () {
      assert.isTrue(1);
    }, "expected 1 to be true");

    err(function () {
      assert.isTrue("test");
    }, "expected 'test' to be true");
  });

  it("ok", function () {
    assert.ok(true);
    assert.ok(1);
    assert.ok("test");

    err(function () {
      assert.ok(false);
    }, "expected false to be truthy");

    err(function () {
      assert.ok(0);
    }, "expected 0 to be truthy");

    err(function () {
      assert.ok("");
    }, "expected '' to be truthy");
  });

  it("notOk", function () {
    assert.notOk(false);
    assert.notOk(0);
    assert.notOk("");

    err(function () {
      assert.notOk(true);
    }, "expected true to be falsy");

    err(function () {
      assert.notOk(1);
    }, "expected 1 to be falsy");

    err(function () {
      assert.notOk("test");
    }, "expected 'test' to be falsy");
  });

  it("isFalse", function () {
    assert.isFalse(false);

    err(function () {
      assert.isFalse(true);
    }, "expected true to be false");

    err(function () {
      assert.isFalse(0);
    }, "expected 0 to be false");
  });

  it("equal", function () {
    var foo;
    assert.equal(foo, undefined);
  });

  it("typeof / notTypeOf", function () {
    assert.typeOf("test", "string");
    assert.typeOf(true, "boolean");
    assert.typeOf(5, "number");

    err(function () {
      assert.typeOf(5, "string");
    }, "expected 5 to be a string");
  });

  it("notTypeOf", function () {
    assert.notTypeOf("test", "number");

    err(function () {
      assert.notTypeOf(5, "number");
    }, "expected 5 not to be a number");
  });

  it("instanceOf", function () {
    function Foo() {}
    assert.instanceOf(new Foo(), Foo);

    err(function () {
      assert.instanceOf(5, Foo);
    }, "expected 5 to be an instance of Foo");

    function CrashyObject() {}
    CrashyObject.prototype.inspect = function () {
      throw new Error("Arg's inspect() called even though the test passed");
    };
    assert.instanceOf(new CrashyObject(), CrashyObject);
  });

  it("notInstanceOf", function () {
    function Foo() {}
    assert.notInstanceOf(new Foo(), String);

    err(function () {
      assert.notInstanceOf(new Foo(), Foo);
    }, "expected {} to not be an instance of Foo");
  });

  it("isObject", function () {
    function Foo() {}
    assert.isObject({});
    assert.isObject(new Foo());

    err(function () {
      assert.isObject(true);
    }, "expected true to be an object");

    err(function () {
      assert.isObject(Foo);
    }, "expected [Function: Foo] to be an object");

    err(function () {
      assert.isObject("foo");
    }, "expected 'foo' to be an object");
  });

  it("isNotObject", function () {
    function Foo() {}
    assert.isNotObject(5);

    err(function () {
      assert.isNotObject({});
    }, "expected {} not to be an object");
  });

  it("notEqual", function () {
    assert.notEqual(3, 4);

    err(function () {
      assert.notEqual(5, 5);
    }, "expected 5 to not equal 5");
  });

  it("strictEqual", function () {
    assert.strictEqual("foo", "foo");

    err(function () {
      assert.strictEqual("5", 5);
    }, "expected '5' to equal 5");
  });

  it("notStrictEqual", function () {
    assert.notStrictEqual(5, "5");

    err(function () {
      assert.notStrictEqual(5, 5);
    }, "expected 5 to not equal 5");
  });

  it("deepEqual", function () {
    assert.deepEqual({ tea: "chai" }, { tea: "chai" });

    err(function () {
      assert.deepEqual({ tea: "chai" }, { tea: "black" });
    }, "expected { tea: 'chai' } to deeply equal { tea: 'black' }");

    var obja = Object.create({ tea: "chai" }),
      objb = Object.create({ tea: "chai" });

    assert.deepEqual(obja, objb);

    var obj1 = Object.create({ tea: "chai" }),
      obj2 = Object.create({ tea: "black" });

    err(function () {
      assert.deepEqual(obj1, obj2);
    }, "expected { tea: 'chai' } to deeply equal { tea: 'black' }");
  });

  it("deepEqual (ordering)", function () {
    var a = { a: "b", c: "d" },
      b = { c: "d", a: "b" };
    assert.deepEqual(a, b);
  });

  it("deepEqual /regexp/", function () {
    assert.deepEqual(/a/, /a/);
    assert.notDeepEqual(/a/, /b/);
    assert.notDeepEqual(/a/, {});
    assert.deepEqual(/a/g, /a/g);
    assert.notDeepEqual(/a/g, /b/g);
    assert.deepEqual(/a/i, /a/i);
    assert.notDeepEqual(/a/i, /b/i);
    assert.deepEqual(/a/m, /a/m);
    assert.notDeepEqual(/a/m, /b/m);
  });

  it("deepEqual (Date)", function () {
    var a = new Date(1, 2, 3),
      b = new Date(4, 5, 6);
    assert.deepEqual(a, a);
    assert.notDeepEqual(a, b);
    assert.notDeepEqual(a, {});
  });

  it("deepEqual (circular)", function () {
    var circularObject = {},
      secondCircularObject = {};
    circularObject.field = circularObject;
    secondCircularObject.field = secondCircularObject;

    assert.deepEqual(circularObject, secondCircularObject);

    err(function () {
      secondCircularObject.field2 = secondCircularObject;
      assert.deepEqual(circularObject, secondCircularObject);
    }, "expected { field: [Circular] } to deeply equal { Object (field, field2) }");
  });

  it("notDeepEqual", function () {
    assert.notDeepEqual({ tea: "jasmine" }, { tea: "chai" });

    err(function () {
      assert.notDeepEqual({ tea: "chai" }, { tea: "chai" });
    }, "expected { tea: 'chai' } to not deeply equal { tea: 'chai' }");
  });

  it("notDeepEqual (circular)", function () {
    var circularObject = {},
      secondCircularObject = { tea: "jasmine" };
    circularObject.field = circularObject;
    secondCircularObject.field = secondCircularObject;

    assert.notDeepEqual(circularObject, secondCircularObject);

    err(function () {
      delete secondCircularObject.tea;
      assert.notDeepEqual(circularObject, secondCircularObject);
    }, "expected { field: [Circular] } to not deeply equal { field: [Circular] }");
  });

  it("isNull", function () {
    assert.isNull(null);

    err(function () {
      assert.isNull(undefined);
    }, "expected undefined to equal null");
  });

  it("isNotNull", function () {
    assert.isNotNull(undefined);

    err(function () {
      assert.isNotNull(null);
    }, "expected null to not equal null");
  });

  it("isUndefined", function () {
    assert.isUndefined(undefined);

    err(function () {
      assert.isUndefined(null);
    }, "expected null to equal undefined");
  });

  it("isDefined", function () {
    assert.isDefined(null);

    err(function () {
      assert.isDefined(undefined);
    }, "expected undefined to not equal undefined");
  });

  it("isFunction", function () {
    var func = function () {};
    assert.isFunction(func);

    err(function () {
      assert.isFunction({});
    }, "expected {} to be a function");
  });

  it("isNotFunction", function () {
    assert.isNotFunction(5);

    err(function () {
      assert.isNotFunction(function () {});
    }, "expected [Function] not to be a function");
  });

  it("isArray", function () {
    assert.isArray([]);
    assert.isArray(new Array());

    err(function () {
      assert.isArray({});
    }, "expected {} to be an array");
  });

  it("isNotArray", function () {
    assert.isNotArray(3);

    err(function () {
      assert.isNotArray([]);
    }, "expected [] not to be an array");

    err(function () {
      assert.isNotArray(new Array());
    }, "expected [] not to be an array");
  });

  it("isString", function () {
    assert.isString("Foo");
    assert.isString(new String("foo"));

    err(function () {
      assert.isString(1);
    }, "expected 1 to be a string");
  });

  it("isNotString", function () {
    assert.isNotString(3);
    assert.isNotString(["hello"]);

    err(function () {
      assert.isNotString("hello");
    }, "expected 'hello' not to be a string");
  });

  it("isNumber", function () {
    assert.isNumber(1);
    assert.isNumber(Number("3"));

    err(function () {
      assert.isNumber("1");
    }, "expected '1' to be a number");
  });

  it("isNotNumber", function () {
    assert.isNotNumber("hello");
    assert.isNotNumber([5]);

    err(function () {
      assert.isNotNumber(4);
    }, "expected 4 not to be a number");
  });

  it("isBoolean", function () {
    assert.isBoolean(true);
    assert.isBoolean(false);

    err(function () {
      assert.isBoolean("1");
    }, "expected '1' to be a boolean");
  });

  it("isNotBoolean", function () {
    assert.isNotBoolean("true");

    err(function () {
      assert.isNotBoolean(true);
    }, "expected true not to be a boolean");

    err(function () {
      assert.isNotBoolean(false);
    }, "expected false not to be a boolean");
  });

  it("include", function () {
    assert.include("foobar", "bar");
    assert.include([1, 2, 3], 3);

    err(function () {
      assert.include("foobar", "baz");
    }, "expected 'foobar' to contain 'baz'");

    err(function () {
      assert.include(undefined, "bar");
    }, "expected an array or string");
  });

  it("notInclude", function () {
    assert.notInclude("foobar", "baz");
    assert.notInclude([1, 2, 3], 4);

    err(function () {
      assert.notInclude("foobar", "bar");
    }, "expected 'foobar' to not contain 'bar'");

    err(function () {
      assert.notInclude(undefined, "bar");
    }, "expected an array or string");
  });

  it("lengthOf", function () {
    assert.lengthOf([1, 2, 3], 3);
    assert.lengthOf("foobar", 6);

    err(function () {
      assert.lengthOf("foobar", 5);
    }, "expected 'foobar' to have a length of 5 but got 6");

    err(function () {
      assert.lengthOf(1, 5);
    }, "expected 1 to have a property 'length'");
  });

  it("match", function () {
    assert.match("foobar", /^foo/);
    assert.notMatch("foobar", /^bar/);

    err(function () {
      assert.match("foobar", /^bar/i);
    }, "expected 'foobar' to match /^bar/i");

    err(function () {
      assert.notMatch("foobar", /^foo/i);
    }, "expected 'foobar' not to match /^foo/i");
  });

  it("property", function () {
    var obj = { foo: { bar: "baz" } };
    var simpleObj = { foo: "bar" };
    assert.property(obj, "foo");
    assert.deepProperty(obj, "foo.bar");
    assert.notProperty(obj, "baz");
    assert.notProperty(obj, "foo.bar");
    assert.notDeepProperty(obj, "foo.baz");
    assert.deepPropertyVal(obj, "foo.bar", "baz");
    assert.deepPropertyNotVal(obj, "foo.bar", "flow");

    err(function () {
      assert.property(obj, "baz");
    }, "expected { foo: { bar: 'baz' } } to have a property 'baz'");

    err(function () {
      assert.deepProperty(obj, "foo.baz");
    }, "expected { foo: { bar: 'baz' } } to have a deep property 'foo.baz'");

    err(function () {
      assert.notProperty(obj, "foo");
    }, "expected { foo: { bar: 'baz' } } to not have property 'foo'");

    err(function () {
      assert.notDeepProperty(obj, "foo.bar");
    }, "expected { foo: { bar: 'baz' } } to not have deep property 'foo.bar'");

    err(function () {
      assert.propertyVal(simpleObj, "foo", "ball");
    }, "expected { foo: 'bar' } to have a property 'foo' of 'ball', but got 'bar'");

    err(function () {
      assert.deepPropertyVal(obj, "foo.bar", "ball");
    }, "expected { foo: { bar: 'baz' } } to have a deep property 'foo.bar' of 'ball', but got 'baz'");

    err(function () {
      assert.propertyNotVal(simpleObj, "foo", "bar");
    }, "expected { foo: 'bar' } to not have a property 'foo' of 'bar'");

    err(function () {
      assert.deepPropertyNotVal(obj, "foo.bar", "baz");
    }, "expected { foo: { bar: 'baz' } } to not have a deep property 'foo.bar' of 'baz'");
  });

  it("throws", function () {
    assert.throws(function () {
      throw new Error("foo");
    });
    assert.throws(function () {
      throw new Error("bar");
    }, "bar");
    assert.throws(function () {
      throw new Error("bar");
    }, /bar/);
    assert.throws(function () {
      throw new Error("bar");
    }, Error);
    assert.throws(
      function () {
        throw new Error("bar");
      },
      Error,
      "bar"
    );

    err(function () {
      assert.throws(function () {
        throw new Error("foo");
      }, TypeError);
    }, "expected [Function] to throw 'TypeError' but 'Error: foo' was thrown");

    err(function () {
      assert.throws(function () {
        throw new Error("foo");
      }, "bar");
    }, "expected [Function] to throw error including 'bar' but got 'foo'");

    err(function () {
      assert.throws(
        function () {
          throw new Error("foo");
        },
        Error,
        "bar"
      );
    }, "expected [Function] to throw error including 'bar' but got 'foo'");

    err(function () {
      assert.throws(
        function () {
          throw new Error("foo");
        },
        TypeError,
        "bar"
      );
    }, "expected [Function] to throw 'TypeError' but 'Error: foo' was thrown");

    err(function () {
      assert.throws(function () {});
    }, "expected [Function] to throw an error");

    err(function () {
      assert.throws(function () {
        throw new Error("");
      }, "bar");
    }, "expected [Function] to throw error including 'bar' but got ''");

    err(function () {
      assert.throws(function () {
        throw new Error("");
      }, /bar/);
    }, "expected [Function] to throw error matching /bar/ but got ''");
  });

  it("doesNotThrow", function () {
    function CustomError(message) {
      this.name = "CustomError";
      this.message = message;
    }
    CustomError.prototype = Error.prototype;

    assert.doesNotThrow(function () {});
    assert.doesNotThrow(function () {}, "foo");

    err(function () {
      assert.doesNotThrow(function () {
        throw new Error("foo");
      });
    }, "expected [Function] to not throw an error but 'Error: foo' was thrown");

    err(function () {
      assert.doesNotThrow(function () {
        throw new CustomError("foo");
      });
    }, "expected [Function] to not throw an error but 'CustomError: foo' was thrown");
  });

  it("ifError", function () {
    assert.ifError(false);
    assert.ifError(null);
    assert.ifError(undefined);

    err(function () {
      assert.ifError("foo");
    }, "expected 'foo' to be falsy");
  });

  it("operator", function () {
    assert.operator(1, "<", 2);
    assert.operator(2, ">", 1);
    assert.operator(1, "==", 1);
    assert.operator(1, "<=", 1);
    assert.operator(1, ">=", 1);
    assert.operator(1, "!=", 2);
    assert.operator(1, "!==", 2);

    err(function () {
      assert.operator(1, "=", 2);
    }, 'Invalid operator "="');

    err(function () {
      assert.operator(2, "<", 1);
    }, "expected 2 to be < 1");

    err(function () {
      assert.operator(1, ">", 2);
    }, "expected 1 to be > 2");

    err(function () {
      assert.operator(1, "==", 2);
    }, "expected 1 to be == 2");

    err(function () {
      assert.operator(2, "<=", 1);
    }, "expected 2 to be <= 1");

    err(function () {
      assert.operator(1, ">=", 2);
    }, "expected 1 to be >= 2");

    err(function () {
      assert.operator(1, "!=", 1);
    }, "expected 1 to be != 1");

    err(function () {
      assert.operator(1, "!==", "1");
    }, "expected 1 to be !== '1'");
  });

  it("closeTo", function () {
    assert.closeTo(1.5, 1.0, 0.5);
    assert.closeTo(10, 20, 20);
    assert.closeTo(-10, 20, 30);

    err(function () {
      assert.closeTo(2, 1.0, 0.5);
    }, "expected 2 to be close to 1 +/- 0.5");

    err(function () {
      assert.closeTo(-10, 20, 29);
    }, "expected -10 to be close to 20 +/- 29");
  });

  it("members", function () {
    assert.includeMembers([1, 2, 3], [2, 3]);
    assert.includeMembers([1, 2, 3], []);
    assert.includeMembers([1, 2, 3], [3]);

    err(function () {
      assert.includeMembers([5, 6], [7, 8]);
    }, "expected [ 5, 6 ] to be a superset of [ 7, 8 ]");

    err(function () {
      assert.includeMembers([5, 6], [5, 6, 0]);
    }, "expected [ 5, 6 ] to be a superset of [ 5, 6, 0 ]");
  });

  it("memberEquals", function () {
    assert.sameMembers([], []);
    assert.sameMembers([1, 2, 3], [3, 2, 1]);
    assert.sameMembers([4, 2], [4, 2]);

    err(function () {
      assert.sameMembers([], [1, 2]);
    }, "expected [] to have the same members as [ 1, 2 ]");

    err(function () {
      assert.sameMembers([1, 54], [6, 1, 54]);
    }, "expected [ 1, 54 ] to have the same members as [ 6, 1, 54 ]");
  });
});
