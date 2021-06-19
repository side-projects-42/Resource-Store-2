// Tests taken from https://mths.be/codepointat

assert.equal(String.prototype.codePointAt.length, 1);

// String that starts with a BMP symbol
assert.equal("abc\uD834\uDF06def".codePointAt(""), 0x61);
assert.equal("abc\uD834\uDF06def".codePointAt("_"), 0x61);
assert.equal("abc\uD834\uDF06def".codePointAt(), 0x61);
assert.equal("abc\uD834\uDF06def".codePointAt(-Infinity), undefined);
assert.equal("abc\uD834\uDF06def".codePointAt(-1), undefined);
assert.equal("abc\uD834\uDF06def".codePointAt(-0), 0x61);
assert.equal("abc\uD834\uDF06def".codePointAt(0), 0x61);
assert.equal("abc\uD834\uDF06def".codePointAt(3), 0x1d306);
assert.equal("abc\uD834\uDF06def".codePointAt(4), 0xdf06);
assert.equal("abc\uD834\uDF06def".codePointAt(5), 0x64);
assert.equal("abc\uD834\uDF06def".codePointAt(42), undefined);
assert.equal("abc\uD834\uDF06def".codePointAt(Infinity), undefined);
assert.equal("abc\uD834\uDF06def".codePointAt(Infinity), undefined);
assert.equal("abc\uD834\uDF06def".codePointAt(NaN), 0x61);
assert.equal("abc\uD834\uDF06def".codePointAt(false), 0x61);
assert.equal("abc\uD834\uDF06def".codePointAt(null), 0x61);
assert.equal("abc\uD834\uDF06def".codePointAt(undefined), 0x61);

// String that starts with an astral symbol
assert.equal("\uD834\uDF06def".codePointAt(""), 0x1d306);
assert.equal("\uD834\uDF06def".codePointAt("1"), 0xdf06);
assert.equal("\uD834\uDF06def".codePointAt("_"), 0x1d306);
assert.equal("\uD834\uDF06def".codePointAt(), 0x1d306);
assert.equal("\uD834\uDF06def".codePointAt(-1), undefined);
assert.equal("\uD834\uDF06def".codePointAt(-0), 0x1d306);
assert.equal("\uD834\uDF06def".codePointAt(0), 0x1d306);
assert.equal("\uD834\uDF06def".codePointAt(1), 0xdf06);
assert.equal("\uD834\uDF06def".codePointAt(42), undefined);
assert.equal("\uD834\uDF06def".codePointAt(false), 0x1d306);
assert.equal("\uD834\uDF06def".codePointAt(null), 0x1d306);
assert.equal("\uD834\uDF06def".codePointAt(undefined), 0x1d306);

// Lone high surrogates
assert.equal("\uD834abc".codePointAt(""), 0xd834);
assert.equal("\uD834abc".codePointAt("_"), 0xd834);
assert.equal("\uD834abc".codePointAt(), 0xd834);
assert.equal("\uD834abc".codePointAt(-1), undefined);
assert.equal("\uD834abc".codePointAt(-0), 0xd834);
assert.equal("\uD834abc".codePointAt(0), 0xd834);
assert.equal("\uD834abc".codePointAt(false), 0xd834);
assert.equal("\uD834abc".codePointAt(NaN), 0xd834);
assert.equal("\uD834abc".codePointAt(null), 0xd834);
assert.equal("\uD834abc".codePointAt(undefined), 0xd834);

// Lone low surrogates
assert.equal("\uDF06abc".codePointAt(""), 0xdf06);
assert.equal("\uDF06abc".codePointAt("_"), 0xdf06);
assert.equal("\uDF06abc".codePointAt(), 0xdf06);
assert.equal("\uDF06abc".codePointAt(-1), undefined);
assert.equal("\uDF06abc".codePointAt(-0), 0xdf06);
assert.equal("\uDF06abc".codePointAt(0), 0xdf06);
assert.equal("\uDF06abc".codePointAt(false), 0xdf06);
assert.equal("\uDF06abc".codePointAt(NaN), 0xdf06);
assert.equal("\uDF06abc".codePointAt(null), 0xdf06);
assert.equal("\uDF06abc".codePointAt(undefined), 0xdf06);

assert.throw(function () {
  String.prototype.codePointAt.call(undefined);
}, TypeError);
assert.throw(function () {
  String.prototype.codePointAt.call(undefined, 4);
}, TypeError);
assert.throw(function () {
  String.prototype.codePointAt.call(null);
}, TypeError);
assert.throw(function () {
  String.prototype.codePointAt.call(null, 4);
}, TypeError);
assert.equal(String.prototype.codePointAt.call(42, 0), 0x34);
assert.equal(String.prototype.codePointAt.call(42, 1), 0x32);
assert.equal(
  String.prototype.codePointAt.call(
    {
      toString: function () {
        return "abc";
      },
    },
    2
  ),
  0x63
);

assert.throw(function () {
  String.prototype.codePointAt.apply(undefined);
}, TypeError);
assert.throw(function () {
  String.prototype.codePointAt.apply(undefined, [4]);
}, TypeError);
assert.throw(function () {
  String.prototype.codePointAt.apply(null);
}, TypeError);
assert.throw(function () {
  String.prototype.codePointAt.apply(null, [4]);
}, TypeError);
assert.equal(String.prototype.codePointAt.apply(42, [0]), 0x34);
assert.equal(String.prototype.codePointAt.apply(42, [1]), 0x32);
assert.equal(
  String.prototype.codePointAt.apply(
    {
      toString: function () {
        return "abc";
      },
    },
    [2]
  ),
  0x63
);
