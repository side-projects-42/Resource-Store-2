// Options: --numeric-literals

(function () {
  assert.equal(0, 0b0);
  assert.equal(1, 0b1);
  assert.equal(3, 0b11);
  assert.equal(3, 0b011);
  assert.equal(0, 0b0);
  assert.equal(1, 0b1);
  assert.equal(3, 0b11);
  assert.equal(3, 0b011);

  assert.equal(0, 0o0);
  assert.equal(1, 0o1);
  assert.equal(7, 0o7);
  assert.equal(8, 0o10);
  assert.equal(8, 0o010);
  assert.equal(63, 0o77);
  assert.equal(0, 0o0);
  assert.equal(1, 0o1);
  assert.equal(7, 0o7);
  assert.equal(8, 0o10);
  assert.equal(8, 0o010);
  assert.equal(63, 0o77);

  var o = {
    0b0: 0,
    0b1: 1,
    0b10: 2,
    0b11: 3,
    0b0100: 4,
  };
  assert.deepEqual(["0", "1", "2", "3", "4"], Object.keys(o));

  var o = {
    0o0: 0,
    0o1: 1,
    0o7: 7,
    0o10: 8,
    0o011: 9,
  };
  assert.deepEqual(["0", "1", "7", "8", "9"], Object.keys(o));

  var o = {
    get 0b0() {},
    get 0b1() {},
    get 0b10() {},
    get 0b11() {},
    get 0b0100() {},
  };
  assert.deepEqual(["0", "1", "2", "3", "4"], Object.keys(o));

  var o = {
    set 0o0(v) {},
    set 0o1(v) {},
    set 0o7(v) {},
    set 0o10(v) {},
    set 0o011(v) {},
  };
  assert.deepEqual(["0", "1", "7", "8", "9"], Object.keys(o));

  var o = {
    0b0() {},
    0b1() {},
    0b10() {},
    0b11() {},
    0b0100() {},
  };
  assert.deepEqual(["0", "1", "2", "3", "4"], Object.keys(o));

  class C {
    0b0() {}
    get 0b1() {}
    set 0b10(v) {}
    static 0b11() {}
    static get 0b100() {}
    static set 0b101(v) {}

    0o6() {}
    get 0o7() {}
    set 0o10(v) {}
    static 0o11() {}
    static get 0o12() {}
    static set 0o13(v) {}
  }

  assert.isTrue(C.prototype.hasOwnProperty("0"));
  assert.isTrue(C.prototype.hasOwnProperty("1"));
  assert.isTrue(C.prototype.hasOwnProperty("2"));
  assert.isTrue(C.prototype.hasOwnProperty("6"));
  assert.isTrue(C.prototype.hasOwnProperty("7"));
  assert.isTrue(C.prototype.hasOwnProperty("8"));

  assert.isTrue(C.hasOwnProperty("3"));
  assert.isTrue(C.hasOwnProperty("4"));
  assert.isTrue(C.hasOwnProperty("5"));
  assert.isTrue(C.hasOwnProperty("9"));
  assert.isTrue(C.hasOwnProperty("10"));
  assert.isTrue(C.hasOwnProperty("11"));
})();
