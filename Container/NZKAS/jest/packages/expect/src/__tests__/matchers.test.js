/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const {stringify} = require('jest-matcher-utils');
const jestExpect = require('../');
const Immutable = require('immutable');
const chalk = require('chalk');
const chalkEnabled = chalk.enabled;

beforeAll(() => {
  chalk.enabled = true;
});

afterAll(() => {
  chalk.enabled = chalkEnabled;
});

it('should throw if passed two arguments', () => {
  expect(() => jestExpect('foo', 'bar')).toThrow(
    new Error('Expect takes at most one argument.'),
  );
});

describe('.rejects', () => {
  it('should reject', async () => {
    await jestExpect(Promise.reject(4)).rejects.toBe(4);
    await jestExpect(Promise.reject(4)).rejects.not.toBe(5);
    await jestExpect(Promise.reject(4.2)).rejects.toBeCloseTo(4.2, 5);
    await jestExpect(Promise.reject(3)).rejects.not.toBeCloseTo(4.2, 5);
    await jestExpect(Promise.reject({a: 1, b: 2})).rejects.toMatchObject({
      a: 1,
    });
    await jestExpect(Promise.reject({a: 1, b: 2})).rejects.not.toMatchObject({
      c: 1,
    });
    await jestExpect(
      Promise.reject(new Error('rejectMessage')),
    ).rejects.toMatchObject({message: 'rejectMessage'});
    await jestExpect(Promise.reject(new Error())).rejects.toThrow();
  });

  it('should reject with toThrow', async () => {
    async function fn() {
      throw new Error('some error');
    }
    await jestExpect(fn()).rejects.toThrow('some error');
  });

  ['a', [1], () => {}, {a: 1}].forEach(value => {
    it(`fails non-promise value ${stringify(value)} synchronously`, () => {
      let error;
      try {
        jestExpect(value).rejects.toBe(111);
      } catch (e) {
        error = e;
      }
      expect(error).toBeDefined();
    });

    it(`fails non-promise value ${stringify(value)}`, async () => {
      let error;
      try {
        await jestExpect(value).rejects.toBeDefined();
      } catch (e) {
        error = e;
      }
      expect(error).toBeDefined();
      expect(error.message).toMatchSnapshot();
    });
  });

  [4, null, true, undefined].forEach(value => {
    it(`fails non-promise value ${stringify(value)} synchronously`, () => {
      let error;
      try {
        jestExpect(value).rejects.not.toBe(111);
      } catch (e) {
        error = e;
      }
      expect(error).toBeDefined();
    });

    it(`fails non-promise value ${stringify(value)}`, async () => {
      let error;
      try {
        await jestExpect(value).rejects.not.toBeDefined();
      } catch (e) {
        error = e;
      }
      expect(error).toBeDefined();
      expect(error.message).toMatchSnapshot();
    });
  });

  it('fails for promise that resolves', async () => {
    let error;
    try {
      await jestExpect(Promise.resolve(4)).rejects.toBe(4);
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined();
    expect(error.message).toMatchSnapshot();
  });
});

describe('.resolves', () => {
  it('should resolve', async () => {
    await jestExpect(Promise.resolve(4)).resolves.toBe(4);
    await jestExpect(Promise.resolve(4)).resolves.not.toBe(5);
    await jestExpect(Promise.resolve(4.2)).resolves.toBeCloseTo(4.2, 5);
    await jestExpect(Promise.resolve(3)).resolves.not.toBeCloseTo(4.2, 5);
    await jestExpect(Promise.resolve({a: 1, b: 2})).resolves.toMatchObject({
      a: 1,
    });
    await jestExpect(Promise.resolve({a: 1, b: 2})).resolves.not.toMatchObject({
      c: 1,
    });
    await jestExpect(
      Promise.resolve(() => {
        throw new Error();
      }),
    ).resolves.toThrow();
  });

  ['a', [1], () => {}, {a: 1}].forEach(value => {
    it(`fails non-promise value ${stringify(value)} synchronously`, () => {
      let error;
      try {
        jestExpect(value).resolves.toBeDefined();
      } catch (e) {
        error = e;
      }
      expect(error).toBeDefined();
      expect(error.message).toMatchSnapshot();
    });

    it(`fails non-promise value ${stringify(value)}`, async () => {
      let error;
      try {
        await jestExpect(value).resolves.toBeDefined();
      } catch (e) {
        error = e;
      }
      expect(error).toBeDefined();
      expect(error.message).toMatchSnapshot();
    });
  });

  [4, null, true, undefined].forEach(value => {
    it(`fails non-promise value ${stringify(value)} synchronously`, () => {
      let error;
      try {
        jestExpect(value).resolves.not.toBeDefined();
      } catch (e) {
        error = e;
      }
      expect(error).toBeDefined();
      expect(error.message).toMatchSnapshot();
    });

    it(`fails non-promise value ${stringify(value)}`, async () => {
      let error;
      try {
        await jestExpect(value).resolves.not.toBeDefined();
      } catch (e) {
        error = e;
      }
      expect(error).toBeDefined();
      expect(error.message).toMatchSnapshot();
    });
  });

  it('fails for promise that rejects', async () => {
    let error;
    try {
      await jestExpect(Promise.reject(4)).resolves.toBe(4);
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined();
    expect(error.message).toMatchSnapshot();
  });
});

describe('.toBe()', () => {
  it('does not throw', () => {
    jestExpect('a').not.toBe('b');
    jestExpect('a').toBe('a');
    jestExpect(1).not.toBe(2);
    jestExpect(1).toBe(1);
    jestExpect(null).not.toBe(undefined);
    jestExpect(null).toBe(null);
    jestExpect(undefined).toBe(undefined);
    jestExpect(NaN).toBe(NaN);
  });

  [
    [1, 2],
    [true, false],
    [{}, {}],
    [{a: 1}, {a: 1}],
    [{a: 1}, {a: 5}],
    ['abc', 'cde'],
    ['with \ntrailing space', 'without trailing space'],
    [[], []],
    [null, undefined],
    [-0, +0],
  ].forEach(([a, b]) => {
    it(`fails for: ${stringify(a)} and ${stringify(b)}`, () => {
      expect(() => jestExpect(a).toBe(b)).toThrowErrorMatchingSnapshot();
    });
  });

  [false, 1, 'a', undefined, null, {}, []].forEach(v => {
    it(`fails for '${stringify(v)}' with '.not'`, () => {
      expect(() => jestExpect(v).not.toBe(v)).toThrowErrorMatchingSnapshot();
    });
  });

  it('does not crash on circular references', () => {
    const obj = {};
    obj.circular = obj;

    expect(() => jestExpect(obj).toBe({})).toThrowErrorMatchingSnapshot();
  });

  test('assertion error matcherResult property contains matcher name, expected and actual values', () => {
    const actual = {a: 1};
    const expected = {a: 2};
    try {
      jestExpect(actual).toBe(expected);
    } catch (error) {
      expect(error.matcherResult).toEqual(
        expect.objectContaining({
          actual,
          expected,
          name: 'toBe',
        }),
      );
    }
  });
});

describe('.toStrictEqual()', () => {
  class TestClassA {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  }

  class TestClassB {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  }

  const TestClassC = class Child extends TestClassA {
    constructor(a, b) {
      super(a, b);
    }
  };

  const TestClassD = class Child extends TestClassB {
    constructor(a, b) {
      super(a, b);
    }
  };

  it('does not ignore keys with undefined values', () => {
    expect({
      a: undefined,
      b: 2,
    }).not.toStrictEqual({b: 2});
  });

  it('does not ignore keys with undefined values inside an array', () => {
    expect([{a: undefined}]).not.toStrictEqual([{}]);
  });

  it('does not ignore keys with undefined values deep inside an object', () => {
    expect([{a: [{a: undefined}]}]).not.toStrictEqual([{a: [{}]}]);
  });

  it('passes when comparing same type', () => {
    expect({
      test: new TestClassA(1, 2),
    }).toStrictEqual({test: new TestClassA(1, 2)});
  });

  it('matches the expected snapshot when it fails', () => {
    expect(() =>
      jestExpect({
        test: 2,
      }).toStrictEqual({test: new TestClassA(1, 2)}),
    ).toThrowErrorMatchingSnapshot();

    expect(() =>
      jestExpect({
        test: new TestClassA(1, 2),
      }).not.toStrictEqual({test: new TestClassA(1, 2)}),
    ).toThrowErrorMatchingSnapshot();
  });

  it('does not pass for different types', () => {
    expect({
      test: new TestClassA(1, 2),
    }).not.toStrictEqual({test: new TestClassB(1, 2)});
  });

  it('does not simply compare constructor names', () => {
    const c = new TestClassC(1, 2);
    const d = new TestClassD(1, 2);
    expect(c.constructor.name).toEqual(d.constructor.name);
    expect({test: c}).not.toStrictEqual({test: d});
  });

  /* eslint-disable no-sparse-arrays */
  it('passes for matching sparse arrays', () => {
    expect([, 1]).toStrictEqual([, 1]);
  });

  it('does not pass when sparseness of arrays do not match', () => {
    expect([, 1]).not.toStrictEqual([undefined, 1]);
    expect([undefined, 1]).not.toStrictEqual([, 1]);
    expect([, , , 1]).not.toStrictEqual([, 1]);
  });

  it('does not pass when equally sparse arrays have different values', () => {
    expect([, 1]).not.toStrictEqual([, 2]);
  });
  /* eslint-enable */
});

describe('.toEqual()', () => {
  [
    [true, false],
    [1, 2],
    [0, -0],
    [0, Number.MIN_VALUE], // issues/7941
    [Number.MIN_VALUE, 0],
    [{a: 5}, {b: 6}],
    ['banana', 'apple'],
    [null, undefined],
    [[1], [2]],
    [[1, 2], [2, 1]],
    [Immutable.List([1]), Immutable.List([2])],
    [Immutable.List([1, 2]), Immutable.List([2, 1])],
    [new Map(), new Set()],
    [new Set([1, 2]), new Set()],
    [new Set([1, 2]), new Set([1, 2, 3])],
    [new Set([[1], [2]]), new Set([[1], [2], [3]])],
    [new Set([[1], [2]]), new Set([[1], [2], [2]])],
    [
      new Set([new Set([1]), new Set([2])]),
      new Set([new Set([1]), new Set([3])]),
    ],
    [Immutable.Set([1, 2]), Immutable.Set()],
    [Immutable.Set([1, 2]), Immutable.Set([1, 2, 3])],
    [Immutable.OrderedSet([1, 2]), Immutable.OrderedSet([2, 1])],
    [new Map([[1, 'one'], [2, 'two']]), new Map([[1, 'one']])],
    [new Map([['a', 0]]), new Map([['b', 0]])],
    [new Map([['v', 1]]), new Map([['v', 2]])],
    [new Map([[['v'], 1]]), new Map([[['v'], 2]])],
    [
      new Map([[[1], new Map([[[1], 'one']])]]),
      new Map([[[1], new Map([[[1], 'two']])]]),
    ],
    [Immutable.Map({a: 0}), Immutable.Map({b: 0})],
    [Immutable.Map({v: 1}), Immutable.Map({v: 2})],
    [
      Immutable.OrderedMap()
        .set(1, 'one')
        .set(2, 'two'),
      Immutable.OrderedMap()
        .set(2, 'two')
        .set(1, 'one'),
    ],
    [
      Immutable.Map({1: Immutable.Map({2: {a: 99}})}),
      Immutable.Map({1: Immutable.Map({2: {a: 11}})}),
    ],
    [{a: 1, b: 2}, jestExpect.objectContaining({a: 2})],
    [false, jestExpect.objectContaining({a: 2})],
    [[1, 3], jestExpect.arrayContaining([1, 2])],
    [1, jestExpect.arrayContaining([1, 2])],
    ['abd', jestExpect.stringContaining('bc')],
    ['abd', jestExpect.stringMatching(/bc/i)],
    [undefined, jestExpect.anything()],
    [undefined, jestExpect.any(Function)],
    [
      'Eve',
      {
        asymmetricMatch: function asymmetricMatch(who) {
          return who === 'Alice' || who === 'Bob';
        },
      },
    ],
    [
      {
        target: {
          nodeType: 1,
          value: 'a',
        },
      },
      {
        target: {
          nodeType: 1,
          value: 'b',
        },
      },
    ],
    [
      {
        nodeName: 'div',
        nodeType: 1,
      },
      {
        nodeName: 'p',
        nodeType: 1,
      },
    ],
  ].forEach(([a, b]) => {
    test(`{pass: false} expect(${stringify(a)}).toEqual(${stringify(
      b,
    )})`, () => {
      expect(() => jestExpect(a).toEqual(b)).toThrowErrorMatchingSnapshot();
    });
  });

  [
    [true, true],
    [1, 1],
    [NaN, NaN],
    // eslint-disable-next-line no-new-wrappers
    [0, new Number(0)],
    // eslint-disable-next-line no-new-wrappers
    [new Number(0), 0],
    ['abc', 'abc'],
    // eslint-disable-next-line no-new-wrappers
    [new String('abc'), 'abc'],
    // eslint-disable-next-line no-new-wrappers
    ['abc', new String('abc')],
    [[1], [1]],
    [[1, 2], [1, 2]],
    [Immutable.List([1]), Immutable.List([1])],
    [Immutable.List([1, 2]), Immutable.List([1, 2])],
    [{}, {}],
    [{a: 99}, {a: 99}],
    [new Set(), new Set()],
    [new Set([1, 2]), new Set([1, 2])],
    [new Set([1, 2]), new Set([2, 1])],
    [new Set([[1], [2]]), new Set([[2], [1]])],
    [
      new Set([new Set([[1]]), new Set([[2]])]),
      new Set([new Set([[2]]), new Set([[1]])]),
    ],
    [new Set([[1], [2], [3], [3]]), new Set([[3], [3], [2], [1]])],
    [new Set([{a: 1}, {b: 2}]), new Set([{b: 2}, {a: 1}])],
    [Immutable.Set(), Immutable.Set()],
    [Immutable.Set([1, 2]), Immutable.Set([1, 2])],
    [Immutable.Set([1, 2]), Immutable.Set([2, 1])],
    [Immutable.OrderedSet(), Immutable.OrderedSet()],
    [Immutable.OrderedSet([1, 2]), Immutable.OrderedSet([1, 2])],
    [new Map(), new Map()],
    [new Map([[1, 'one'], [2, 'two']]), new Map([[1, 'one'], [2, 'two']])],
    [new Map([[1, 'one'], [2, 'two']]), new Map([[2, 'two'], [1, 'one']])],
    [
      new Map([[[1], 'one'], [[2], 'two'], [[3], 'three'], [[3], 'four']]),
      new Map([[[3], 'three'], [[3], 'four'], [[2], 'two'], [[1], 'one']]),
    ],
    [
      new Map([[[1], new Map([[[1], 'one']])], [[2], new Map([[[2], 'two']])]]),
      new Map([[[2], new Map([[[2], 'two']])], [[1], new Map([[[1], 'one']])]]),
    ],
    [
      new Map([[[1], 'one'], [[2], 'two']]),
      new Map([[[2], 'two'], [[1], 'one']]),
    ],
    [
      new Map([[{a: 1}, 'one'], [{b: 2}, 'two']]),
      new Map([[{b: 2}, 'two'], [{a: 1}, 'one']]),
    ],
    [
      new Map([[1, ['one']], [2, ['two']]]),
      new Map([[2, ['two']], [1, ['one']]]),
    ],
    [Immutable.Map(), Immutable.Map()],
    [
      Immutable.Map()
        .set(1, 'one')
        .set(2, 'two'),
      Immutable.Map()
        .set(1, 'one')
        .set(2, 'two'),
    ],
    [
      Immutable.Map()
        .set(1, 'one')
        .set(2, 'two'),
      Immutable.Map()
        .set(2, 'two')
        .set(1, 'one'),
    ],
    [
      Immutable.OrderedMap()
        .set(1, 'one')
        .set(2, 'two'),
      Immutable.OrderedMap()
        .set(1, 'one')
        .set(2, 'two'),
    ],
    [
      Immutable.Map({1: Immutable.Map({2: {a: 99}})}),
      Immutable.Map({1: Immutable.Map({2: {a: 99}})}),
    ],
    [{a: 1, b: 2}, jestExpect.objectContaining({a: 1})],
    [[1, 2, 3], jestExpect.arrayContaining([2, 3])],
    ['abcd', jestExpect.stringContaining('bc')],
    ['abcd', jestExpect.stringMatching('bc')],
    [true, jestExpect.anything()],
    [() => {}, jestExpect.any(Function)],
    [
      {
        a: 1,
        b: function b() {},
        c: true,
      },
      {
        a: 1,
        b: jestExpect.any(Function),
        c: jestExpect.anything(),
      },
    ],
    [
      'Alice',
      {
        asymmetricMatch: function asymmetricMatch(who) {
          return who === 'Alice' || who === 'Bob';
        },
      },
    ],
    [
      {
        nodeName: 'div',
        nodeType: 1,
      },
      {
        nodeName: 'div',
        nodeType: 1,
      },
    ],
  ].forEach(([a, b]) => {
    test(`{pass: false} expect(${stringify(a)}).not.toEqual(${stringify(
      b,
    )})`, () => {
      expect(() => jestExpect(a).not.toEqual(b)).toThrowErrorMatchingSnapshot();
    });
  });

  test('assertion error matcherResult property contains matcher name, expected and actual values', () => {
    const actual = {a: 1};
    const expected = {a: 2};
    try {
      jestExpect(actual).toEqual(expected);
    } catch (error) {
      expect(error.matcherResult).toEqual(
        expect.objectContaining({
          actual,
          expected,
          name: 'toEqual',
        }),
      );
    }
  });

  test('failure message matches the expected snapshot', () => {
    expect(() =>
      jestExpect({a: 1}).toEqual({a: 2}),
    ).toThrowErrorMatchingSnapshot();

    expect(() =>
      jestExpect({a: 1}).not.toEqual({a: 1}),
    ).toThrowErrorMatchingSnapshot();
  });

  test('symbol based keys in arrays are processed correctly', () => {
    const mySymbol = Symbol('test');
    const actual1 = [];
    actual1[mySymbol] = 3;
    const actual2 = [];
    actual2[mySymbol] = 4;
    const expected = [];
    expected[mySymbol] = 3;

    expect(actual1).toEqual(expected);
    expect(actual2).not.toEqual(expected);
  });

  test('non-enumerable members should be skipped during equal', () => {
    const actual = {
      x: 3,
    };
    Object.defineProperty(actual, 'test', {
      enumerable: false,
      value: 5,
    });
    expect(actual).toEqual({x: 3});
  });

  test('non-enumerable symbolic members should be skipped during equal', () => {
    const actual = {
      x: 3,
    };
    const mySymbol = Symbol('test');
    Object.defineProperty(actual, mySymbol, {
      enumerable: false,
      value: 5,
    });
    expect(actual).toEqual({x: 3});
  });

  describe('cyclic object equality', () => {
    test('properties with the same circularity are equal', () => {
      const a = {};
      a.x = a;
      const b = {};
      b.x = b;
      expect(a).toEqual(b);
      expect(b).toEqual(a);

      const c = {};
      c.x = a;
      const d = {};
      d.x = b;
      expect(c).toEqual(d);
      expect(d).toEqual(c);
    });

    test('properties with different circularity are not equal', () => {
      const a = {};
      a.x = {y: a};
      const b = {};
      const bx = {};
      b.x = bx;
      bx.y = bx;
      expect(a).not.toEqual(b);
      expect(b).not.toEqual(a);

      const c = {};
      c.x = a;
      const d = {};
      d.x = b;
      expect(c).not.toEqual(d);
      expect(d).not.toEqual(c);
    });

    test('are not equal if circularity is not on the same property', () => {
      const a = {};
      const b = {};
      a.a = a;
      b.a = {};
      b.a.a = a;
      expect(a).not.toEqual(b);
      expect(b).not.toEqual(a);

      const c = {};
      c.x = {x: c};
      const d = {};
      d.x = d;
      expect(c).not.toEqual(d);
      expect(d).not.toEqual(c);
    });
  });
});

describe('.toBeInstanceOf()', () => {
  class A {}
  class B {}
  class C extends B {}

  class HasStaticNameMethod {
    constructor() {}
    static name() {}
  }

  function DefinesNameProp() {}
  Object.defineProperty(DefinesNameProp, 'name', {
    configurable: true,
    enumerable: false,
    value: '',
    writable: true,
  });

  [
    [new Map(), Map],
    [[], Array],
    [new A(), A],
    [new C(), B], // subclass
    [new HasStaticNameMethod(), HasStaticNameMethod],
  ].forEach(([a, b]) => {
    test(`passing ${stringify(a)} and ${stringify(b)}`, () => {
      expect(() =>
        jestExpect(a).not.toBeInstanceOf(b),
      ).toThrowErrorMatchingSnapshot();

      jestExpect(a).toBeInstanceOf(b);
    });
  });

  [
    ['a', String],
    [1, Number],
    [true, Boolean],
    [new A(), B],
    [Object.create(null), A],
    [undefined, String],
    [null, String],
    [/\w+/, function() {}],
    [new DefinesNameProp(), RegExp],
  ].forEach(([a, b]) => {
    test(`failing ${stringify(a)} and ${stringify(b)}`, () => {
      expect(() =>
        jestExpect(a).toBeInstanceOf(b),
      ).toThrowErrorMatchingSnapshot();

      jestExpect(a).not.toBeInstanceOf(b);
    });
  });

  it('throws if constructor is not a function', () => {
    expect(() =>
      jestExpect({}).toBeInstanceOf(4),
    ).toThrowErrorMatchingSnapshot();
  });
});

describe('.toBeTruthy(), .toBeFalsy()', () => {
  it('does not accept arguments', () => {
    expect(() => jestExpect(0).toBeTruthy(null)).toThrowErrorMatchingSnapshot();

    expect(() =>
      jestExpect(0).not.toBeFalsy(null),
    ).toThrowErrorMatchingSnapshot();
  });

  [{}, [], true, 1, 'a', 0.5, new Map(), () => {}, Infinity].forEach(v => {
    test(`'${stringify(v)}' is truthy`, () => {
      jestExpect(v).toBeTruthy();
      jestExpect(v).not.toBeFalsy();

      expect(() =>
        jestExpect(v).not.toBeTruthy(),
      ).toThrowErrorMatchingSnapshot();

      expect(() => jestExpect(v).toBeFalsy()).toThrowErrorMatchingSnapshot();
    });
  });

  [false, null, NaN, 0, '', undefined].forEach(v => {
    test(`'${stringify(v)}' is falsy`, () => {
      jestExpect(v).toBeFalsy();
      jestExpect(v).not.toBeTruthy();

      expect(() => jestExpect(v).toBeTruthy()).toThrowErrorMatchingSnapshot();

      expect(() =>
        jestExpect(v).not.toBeFalsy(),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});

describe('.toBeNaN()', () => {
  it('{pass: true} expect(NaN).toBeNaN()', () => {
    [NaN, Math.sqrt(-1), Infinity - Infinity, 0 / 0].forEach(v => {
      jestExpect(v).toBeNaN();

      expect(() => jestExpect(v).not.toBeNaN()).toThrowErrorMatchingSnapshot();
    });
  });

  it('throws', () => {
    [1, '', null, undefined, {}, [], 0.2, 0, Infinity, -Infinity].forEach(v => {
      expect(() => jestExpect(v).toBeNaN()).toThrowErrorMatchingSnapshot();

      jestExpect(v).not.toBeNaN();
    });
  });
});

describe('.toBeNull()', () => {
  [{}, [], true, 1, 'a', 0.5, new Map(), () => {}, Infinity].forEach(v => {
    test(`fails for '${stringify(v)}'`, () => {
      jestExpect(v).not.toBeNull();

      expect(() => jestExpect(v).toBeNull()).toThrowErrorMatchingSnapshot();
    });
  });

  it('fails for null with .not', () => {
    expect(() =>
      jestExpect(null).not.toBeNull(),
    ).toThrowErrorMatchingSnapshot();
  });

  it('pass for null', () => {
    jestExpect(null).toBeNull();
  });
});

describe('.toBeDefined(), .toBeUndefined()', () => {
  [{}, [], true, 1, 'a', 0.5, new Map(), () => {}, Infinity].forEach(v => {
    test(`'${stringify(v)}' is defined`, () => {
      jestExpect(v).toBeDefined();
      jestExpect(v).not.toBeUndefined();

      expect(() =>
        jestExpect(v).not.toBeDefined(),
      ).toThrowErrorMatchingSnapshot();

      expect(() =>
        jestExpect(v).toBeUndefined(),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  test('undefined is undefined', () => {
    jestExpect(undefined).toBeUndefined();
    jestExpect(undefined).not.toBeDefined();

    expect(() =>
      jestExpect(undefined).toBeDefined(),
    ).toThrowErrorMatchingSnapshot();

    expect(() =>
      jestExpect(undefined).not.toBeUndefined(),
    ).toThrowErrorMatchingSnapshot();
  });
});

describe(
  '.toBeGreaterThan(), .toBeLessThan(), ' +
    '.toBeGreaterThanOrEqual(), .toBeLessThanOrEqual()',
  () => {
    [
      [1, 2],
      [-Infinity, Infinity],
      [Number.MIN_VALUE, Number.MAX_VALUE],
      [0x11, 0x22],
      [0b11, 0b111],
      [0o11, 0o22],
      [0.1, 0.2],
    ].forEach(([small, big]) => {
      it(`{pass: true} expect(${small}).toBeLessThan(${big})`, () => {
        jestExpect(small).toBeLessThan(big);
      });

      it(`{pass: false} expect(${big}).toBeLessThan(${small})`, () => {
        jestExpect(big).not.toBeLessThan(small);
      });

      it(`{pass: true} expect(${big}).toBeGreaterThan(${small})`, () => {
        jestExpect(big).toBeGreaterThan(small);
      });

      it(`{pass: false} expect(${small}).toBeGreaterThan(${big})`, () => {
        jestExpect(small).not.toBeGreaterThan(big);
      });

      it(`{pass: true} expect(${small}).toBeLessThanOrEqual(${big})`, () => {
        jestExpect(small).toBeLessThanOrEqual(big);
      });

      it(`{pass: false} expect(${big}).toBeLessThanOrEqual(${small})`, () => {
        jestExpect(big).not.toBeLessThanOrEqual(small);
      });

      it(`{pass: true} expect(${big}).toBeGreaterThanOrEqual(${small})`, () => {
        jestExpect(big).toBeGreaterThanOrEqual(small);
      });

      it(`{pass: false} expect(${small}).toBeGreaterThanOrEqual(${big})`, () => {
        jestExpect(small).not.toBeGreaterThanOrEqual(big);
      });

      it(`throws: [${small}, ${big}]`, () => {
        expect(() =>
          jestExpect(small).toBeGreaterThan(big),
        ).toThrowErrorMatchingSnapshot();

        expect(() =>
          jestExpect(small).not.toBeLessThan(big),
        ).toThrowErrorMatchingSnapshot();

        expect(() =>
          jestExpect(big).not.toBeGreaterThan(small),
        ).toThrowErrorMatchingSnapshot();

        expect(() =>
          jestExpect(big).toBeLessThan(small),
        ).toThrowErrorMatchingSnapshot();

        expect(() =>
          jestExpect(small).toBeGreaterThanOrEqual(big),
        ).toThrowErrorMatchingSnapshot();

        expect(() =>
          jestExpect(small).not.toBeLessThanOrEqual(big),
        ).toThrowErrorMatchingSnapshot();

        expect(() =>
          jestExpect(big).not.toBeGreaterThanOrEqual(small),
        ).toThrowErrorMatchingSnapshot();

        expect(() =>
          jestExpect(big).toBeLessThanOrEqual(small),
        ).toThrowErrorMatchingSnapshot();
      });
    });

    [
      [1, 1],
      [Number.MIN_VALUE, Number.MIN_VALUE],
      [Number.MAX_VALUE, Number.MAX_VALUE],
      [Infinity, Infinity],
      [-Infinity, -Infinity],
    ].forEach(([n1, n2]) => {
      test(`equal numbers: [${n1}, ${n2}]`, () => {
        jestExpect(n1).toBeGreaterThanOrEqual(n2);
        jestExpect(n1).toBeLessThanOrEqual(n2);

        expect(() =>
          jestExpect(n1).not.toBeGreaterThanOrEqual(n2),
        ).toThrowErrorMatchingSnapshot();

        expect(() =>
          jestExpect(n1).not.toBeLessThanOrEqual(n2),
        ).toThrowErrorMatchingSnapshot();
      });
    });
  },
);

describe('.toContain(), .toContainEqual()', () => {
  const typedArray = new Int8Array(2);
  typedArray[0] = 0;
  typedArray[1] = 1;

  test('iterable', () => {
    // different node versions print iterable differently, so we can't
    // use snapshots here.
    const iterable = {
      *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
      },
    };

    jestExpect(iterable).toContain(2);
    jestExpect(iterable).toContainEqual(2);
    expect(() => jestExpect(iterable).not.toContain(1)).toThrowError(
      'toContain',
    );
    expect(() => jestExpect(iterable).not.toContainEqual(1)).toThrowError(
      'toContainEqual',
    );
  });

  [
    [[1, 2, 3, 4], 1],
    [['a', 'b', 'c', 'd'], 'a'],
    [[undefined, null], null],
    [[undefined, null], undefined],
    [[Symbol.for('a')], Symbol.for('a')],
    ['abcdef', 'abc'],
    ['11112111', '2'],
    [new Set(['abc', 'def']), 'abc'],
    [typedArray, 1],
  ].forEach(([list, v]) => {
    it(`'${stringify(list)}' contains '${stringify(v)}'`, () => {
      jestExpect(list).toContain(v);

      expect(() =>
        jestExpect(list).not.toContain(v),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  [
    [[1, 2, 3], 4],
    [[null, undefined], 1],
    [[{}, []], []],
    [[{}, []], {}],
  ].forEach(([list, v]) => {
    it(`'${stringify(list)}' does not contain '${stringify(v)}'`, () => {
      jestExpect(list).not.toContain(v);

      expect(() =>
        jestExpect(list).toContain(v),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  test('error cases', () => {
    expect(() => jestExpect(null).toContain(1)).toThrowErrorMatchingSnapshot();
  });

  [
    [[1, 2, 3, 4], 1],
    [['a', 'b', 'c', 'd'], 'a'],
    [[undefined, null], null],
    [[undefined, null], undefined],
    [[Symbol.for('a')], Symbol.for('a')],
    [[{a: 'b'}, {a: 'c'}], {a: 'b'}],
    [new Set([1, 2, 3, 4]), 1],
    [typedArray, 1],
  ].forEach(([list, v]) => {
    it(`'${stringify(list)}' contains a value equal to '${stringify(
      v,
    )}'`, () => {
      jestExpect(list).toContainEqual(v);
      expect(() =>
        jestExpect(list).not.toContainEqual(v),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  [[[{a: 'b'}, {a: 'c'}], {a: 'd'}]].forEach(([list, v]) => {
    it(`'${stringify(list)}' does not contain a value equal to'${stringify(
      v,
    )}'`, () => {
      jestExpect(list).not.toContainEqual(v);

      expect(() =>
        jestExpect(list).toContainEqual(v),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  test('error cases for toContainEqual', () => {
    expect(() =>
      jestExpect(null).toContainEqual(1),
    ).toThrowErrorMatchingSnapshot();
  });
});

describe('.toBeCloseTo()', () => {
  [
    [0, 0],
    [0, 0.001],
    [1.23, 1.229],
    [1.23, 1.226],
    [1.23, 1.225],
    [1.23, 1.234],
  ].forEach(([n1, n2]) => {
    it(`{pass: true} expect(${n1})toBeCloseTo( ${n2})`, () => {
      jestExpect(n1).toBeCloseTo(n2);

      expect(() =>
        jestExpect(n1).not.toBeCloseTo(n2),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  [[0, 0.01], [1, 1.23], [1.23, 1.2249999]].forEach(([n1, n2]) => {
    it(`throws: [${n1}, ${n2}]`, () => {
      expect(() =>
        jestExpect(n1).toBeCloseTo(n2),
      ).toThrowErrorMatchingSnapshot();

      jestExpect(n1).not.toBeCloseTo(n2);
    });
  });

  [[Infinity, Infinity], [-Infinity, -Infinity]].forEach(([n1, n2]) => {
    it(`{pass: true} expect(${n1})toBeCloseTo( ${n2})`, () => {
      jestExpect(n1).toBeCloseTo(n2);

      expect(() =>
        jestExpect(n1).not.toBeCloseTo(n2),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  [[Infinity, -Infinity], [Infinity, 1.23], [-Infinity, -1.23]].forEach(
    ([n1, n2]) => {
      it(`{pass: false} expect(${n1})toBeCloseTo( ${n2})`, () => {
        jestExpect(n1).not.toBeCloseTo(n2);

        expect(() =>
          jestExpect(n1).toBeCloseTo(n2),
        ).toThrowErrorMatchingSnapshot();
      });
    },
  );

  [[0, 0.1, 0], [0, 0.0001, 3], [0, 0.000004, 5]].forEach(([n1, n2, p]) => {
    it(`accepts an optional precision argument: [${n1}, ${n2}, ${p}]`, () => {
      jestExpect(n1).toBeCloseTo(n2, p);

      expect(() =>
        jestExpect(n1).not.toBeCloseTo(n2, p),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  describe('throws: Matcher error', () => {
    test('promise empty isNot false received', () => {
      const precision = 3;
      const expected = 0;
      const received = '';
      expect(() => {
        jestExpect(received).toBeCloseTo(expected, precision);
      }).toThrowErrorMatchingSnapshot();
    });

    test('promise empty isNot true expected', () => {
      const received = 0.1;
      // expected is undefined
      expect(() => {
        jestExpect(received).not.toBeCloseTo();
      }).toThrowErrorMatchingSnapshot();
    });

    test('promise rejects isNot false expected', () => {
      const expected = '0';
      const received = Promise.reject(0.01);
      return expect(
        jestExpect(received).rejects.toBeCloseTo(expected),
      ).rejects.toThrowErrorMatchingSnapshot();
    });

    test('promise rejects isNot true received', () => {
      const expected = 0;
      const received = Promise.reject(Symbol('0.1'));
      return expect(
        jestExpect(received).rejects.not.toBeCloseTo(expected),
      ).rejects.toThrowErrorMatchingSnapshot();
    });

    test('promise resolves isNot false received', () => {
      const precision = 3;
      const expected = 0;
      const received = Promise.resolve(false);
      return expect(
        jestExpect(received).resolves.toBeCloseTo(expected, precision),
      ).rejects.toThrowErrorMatchingSnapshot();
    });

    test('promise resolves isNot true expected', () => {
      const precision = 3;
      const expected = null;
      const received = Promise.resolve(0.1);
      expect(
        jestExpect(received).resolves.not.toBeCloseTo(expected, precision),
      ).rejects.toThrowErrorMatchingSnapshot();
    });
  });
});

describe('.toMatch()', () => {
  [['foo', 'foo'], ['Foo bar', /^foo/i]].forEach(([n1, n2]) => {
    it(`{pass: true} expect(${n1}).toMatch(${n2})`, () => {
      jestExpect(n1).toMatch(n2);

      expect(() =>
        jestExpect(n1).not.toMatch(n2),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  [['bar', 'foo'], ['bar', /foo/]].forEach(([n1, n2]) => {
    it(`throws: [${n1}, ${n2}]`, () => {
      expect(() => jestExpect(n1).toMatch(n2)).toThrowErrorMatchingSnapshot();
    });
  });

  [
    [1, 'foo'],
    [{}, 'foo'],
    [[], 'foo'],
    [true, 'foo'],
    [/foo/i, 'foo'],
    [() => {}, 'foo'],
    [undefined, 'foo'],
  ].forEach(([n1, n2]) => {
    it(
      'throws if non String actual value passed:' +
        ` [${stringify(n1)}, ${stringify(n2)}]`,
      () => {
        expect(() => jestExpect(n1).toMatch(n2)).toThrowErrorMatchingSnapshot();
      },
    );
  });

  [
    ['foo', 1],
    ['foo', {}],
    ['foo', []],
    ['foo', true],
    ['foo', () => {}],
    ['foo', undefined],
  ].forEach(([n1, n2]) => {
    it(
      `throws if non String/RegExp expected value passed:` +
        ` [${stringify(n1)}, ${stringify(n2)}]`,
      () => {
        expect(() => jestExpect(n1).toMatch(n2)).toThrowErrorMatchingSnapshot();
      },
    );
  });

  it('escapes strings properly', () => {
    jestExpect('this?: throws').toMatch('this?: throws');
  });
});

describe('.toHaveLength', () => {
  [[[1, 2], 2], [[], 0], [['a', 'b'], 2], ['abc', 3], ['', 0]].forEach(
    ([received, length]) => {
      test(`{pass: true} expect(${stringify(
        received,
      )}).toHaveLength(${length})`, () => {
        jestExpect(received).toHaveLength(length);
        expect(() =>
          jestExpect(received).not.toHaveLength(length),
        ).toThrowErrorMatchingSnapshot();
      });
    },
  );

  [[[1, 2], 3], [[], 1], [['a', 'b'], 99], ['abc', 66], ['', 1]].forEach(
    ([received, length]) => {
      test(`{pass: false} expect(${stringify(
        received,
      )}).toHaveLength(${length})`, () => {
        jestExpect(received).not.toHaveLength(length);
        expect(() =>
          jestExpect(received).toHaveLength(length),
        ).toThrowErrorMatchingSnapshot();
      });
    },
  );

  test('error cases', () => {
    expect(() =>
      jestExpect({a: 9}).toHaveLength(1),
    ).toThrowErrorMatchingSnapshot();
    expect(() => jestExpect(0).toHaveLength(1)).toThrowErrorMatchingSnapshot();
    expect(() =>
      jestExpect(undefined).not.toHaveLength(1),
    ).toThrowErrorMatchingSnapshot();
  });

  describe('matcher error expected length', () => {
    test('not number', () => {
      const expected = '3';
      const received = 'abc';
      expect(() => {
        jestExpect(received).not.toHaveLength(expected);
      }).toThrowErrorMatchingSnapshot();
    });

    test('number Infinity', () => {
      const expected = Infinity;
      const received = Promise.reject('abc');
      return expect(
        jestExpect(received).rejects.toHaveLength(expected),
      ).rejects.toThrowErrorMatchingSnapshot();
    });

    test('number NaN', () => {
      const expected = NaN;
      const received = Promise.reject('abc');
      return expect(
        jestExpect(received).rejects.not.toHaveLength(expected),
      ).rejects.toThrowErrorMatchingSnapshot();
    });

    test('number float', () => {
      const expected = 0.5;
      const received = Promise.resolve('abc');
      return expect(
        jestExpect(received).resolves.toHaveLength(expected),
      ).rejects.toThrowErrorMatchingSnapshot();
    });

    test('number negative integer', () => {
      const expected = -3;
      const received = Promise.resolve('abc');
      return expect(
        jestExpect(received).resolves.not.toHaveLength(expected),
      ).rejects.toThrowErrorMatchingSnapshot();
    });
  });
});

describe('.toHaveProperty()', () => {
  class Foo {
    get a() {
      return undefined;
    }
    get b() {
      return 'b';
    }
    set setter(val) {
      this.val = val;
    }
  }

  class Foo2 extends Foo {
    get c() {
      return 'c';
    }
  }
  const foo2 = new Foo2();
  foo2.setter = true;

  function E(nodeName) {
    this.nodeName = nodeName.toUpperCase();
  }
  E.prototype.nodeType = 1;

  const memoized = function() {};
  memoized.memo = [];

  [
    [{a: {b: {c: {d: 1}}}}, 'a.b.c.d', 1],
    [{a: {b: {c: {d: 1}}}}, ['a', 'b', 'c', 'd'], 1],
    [{'a.b.c.d': 1}, ['a.b.c.d'], 1],
    [{a: {b: [1, 2, 3]}}, ['a', 'b', 1], 2],
    [{a: 0}, 'a', 0],
    [{a: {b: undefined}}, 'a.b', undefined],
    [{a: {b: {c: 5}}}, 'a.b', {c: 5}],
    [Object.assign(Object.create(null), {property: 1}), 'property', 1],
    [new Foo(), 'a', undefined],
    [new Foo(), 'b', 'b'],
    [new Foo(), 'setter', undefined],
    [foo2, 'a', undefined],
    [foo2, 'c', 'c'],
    [foo2, 'val', true],
    [new E('div'), 'nodeType', 1],
    ['', 'length', 0],
    [memoized, 'memo', []],
  ].forEach(([obj, keyPath, value]) => {
    test(`{pass: true} expect(${stringify(
      obj,
    )}).toHaveProperty('${keyPath}', ${stringify(value)})`, () => {
      jestExpect(obj).toHaveProperty(keyPath, value);
      expect(() =>
        jestExpect(obj).not.toHaveProperty(keyPath, value),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  [
    [{a: {b: {c: {d: 1}}}}, 'a.b.ttt.d', 1],
    [{a: {b: {c: {d: 1}}}}, 'a.b.c.d', 2],
    [{'a.b.c.d': 1}, 'a.b.c.d', 2],
    [{'a.b.c.d': 1}, ['a.b.c.d'], 2],
    [{a: {b: {c: {d: 1}}}}, ['a', 'b', 'c', 'd'], 2],
    [{a: {b: {c: {}}}}, 'a.b.c.d', 1],
    [{a: 1}, 'a.b.c.d', 5],
    [{}, 'a', 'test'],
    [{a: {b: 3}}, 'a.b', undefined],
    [1, 'a.b.c', 'test'],
    ['abc', 'a.b.c', {a: 5}],
    [{a: {b: {c: 5}}}, 'a.b', {c: 4}],
    [new Foo(), 'a', 'a'],
    [new Foo(), 'b', undefined],
    // [{a: {}}, 'a.b', undefined], // wait until Jest 25
  ].forEach(([obj, keyPath, value]) => {
    test(`{pass: false} expect(${stringify(
      obj,
    )}).toHaveProperty('${keyPath}', ${stringify(value)})`, () => {
      expect(() =>
        jestExpect(obj).toHaveProperty(keyPath, value),
      ).toThrowErrorMatchingSnapshot();
      jestExpect(obj).not.toHaveProperty(keyPath, value);
    });
  });

  [
    [{a: {b: {c: {d: 1}}}}, 'a.b.c.d'],
    [{a: {b: {c: {d: 1}}}}, ['a', 'b', 'c', 'd']],
    [{'a.b.c.d': 1}, ['a.b.c.d']],
    [{a: {b: [1, 2, 3]}}, ['a', 'b', 1]],
    [{a: 0}, 'a'],
    [{a: {b: undefined}}, 'a.b'],
  ].forEach(([obj, keyPath]) => {
    test(`{pass: true} expect(${stringify(
      obj,
    )}).toHaveProperty('${keyPath}')`, () => {
      jestExpect(obj).toHaveProperty(keyPath);
      expect(() =>
        jestExpect(obj).not.toHaveProperty(keyPath),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  [
    [{a: {b: {c: {}}}}, 'a.b.c.d'],
    [{a: 1}, 'a.b.c.d'],
    [{}, 'a'],
    [1, 'a.b.c'],
    ['abc', 'a.b.c'],
    [false, 'key'],
    [0, 'key'],
    ['', 'key'],
    [Symbol(), 'key'],
    [Object.assign(Object.create(null), {key: 1}), 'not'],
  ].forEach(([obj, keyPath]) => {
    test(`{pass: false} expect(${stringify(
      obj,
    )}).toHaveProperty('${keyPath}')`, () => {
      expect(() =>
        jestExpect(obj).toHaveProperty(keyPath),
      ).toThrowErrorMatchingSnapshot();
      jestExpect(obj).not.toHaveProperty(keyPath);
    });
  });

  [
    [null, 'a.b'],
    [undefined, 'a'],
    [{a: {b: {}}}, undefined],
    [{a: {b: {}}}, null],
    [{a: {b: {}}}, 1],
    [{}, []], // Residue: pass must be initialized
  ].forEach(([obj, keyPath]) => {
    test(`{error} expect(${stringify(
      obj,
    )}).toHaveProperty('${keyPath}')`, () => {
      expect(() =>
        jestExpect(obj).toHaveProperty(keyPath),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});

describe('toMatchObject()', () => {
  class Foo {
    get a() {
      return undefined;
    }
    get b() {
      return 'b';
    }
  }

  [
    [{a: 'b', c: 'd'}, {a: 'b'}],
    [{a: 'b', c: 'd'}, {a: 'b', c: 'd'}],
    [{a: 'b', t: {x: {r: 'r'}, z: 'z'}}, {a: 'b', t: {z: 'z'}}],
    [{a: 'b', t: {x: {r: 'r'}, z: 'z'}}, {t: {x: {r: 'r'}}}],
    [{a: [3, 4, 5], b: 'b'}, {a: [3, 4, 5]}],
    [{a: [3, 4, 5, 'v'], b: 'b'}, {a: [3, 4, 5, 'v']}],
    [{a: 1, c: 2}, {a: jestExpect.any(Number)}],
    [{a: {x: 'x', y: 'y'}}, {a: {x: jestExpect.any(String)}}],
    [new Set([1, 2]), new Set([1, 2])],
    [new Set([1, 2]), new Set([2, 1])],
    [new Date('2015-11-30'), new Date('2015-11-30')],
    [{a: new Date('2015-11-30'), b: 'b'}, {a: new Date('2015-11-30')}],
    [{a: null, b: 'b'}, {a: null}],
    [{a: undefined, b: 'b'}, {a: undefined}],
    [{a: [{a: 'a', b: 'b'}]}, {a: [{a: 'a'}]}],
    [[1, 2], [1, 2]],
    [{a: undefined}, {a: undefined}],
    [[], []],
    [new Error('foo'), new Error('foo')],
    [new Error('bar'), {message: 'bar'}],
    [new Foo(), {a: undefined, b: 'b'}],
    [Object.assign(Object.create(null), {a: 'b'}), {a: 'b'}],
  ].forEach(([n1, n2]) => {
    it(`{pass: true} expect(${stringify(n1)}).toMatchObject(${stringify(
      n2,
    )})`, () => {
      jestExpect(n1).toMatchObject(n2);
      expect(() =>
        jestExpect(n1).not.toMatchObject(n2),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  [
    [{a: 'b', c: 'd'}, {e: 'b'}],
    [{a: 'b', c: 'd'}, {a: 'b!', c: 'd'}],
    [{a: 'a', c: 'd'}, {a: jestExpect.any(Number)}],
    [{a: 'b', t: {x: {r: 'r'}, z: 'z'}}, {a: 'b', t: {z: [3]}}],
    [{a: 'b', t: {x: {r: 'r'}, z: 'z'}}, {t: {l: {r: 'r'}}}],
    [{a: [3, 4, 5], b: 'b'}, {a: [3, 4, 5, 6]}],
    [{a: [3, 4, 5], b: 'b'}, {a: [3, 4]}],
    [{a: [3, 4, 'v'], b: 'b'}, {a: ['v']}],
    [{a: [3, 4, 5], b: 'b'}, {a: {b: 4}}],
    [{a: [3, 4, 5], b: 'b'}, {a: {b: jestExpect.any(String)}}],
    [[1, 2], [1, 3]],
    [[0], [-0]],
    [new Set([1, 2]), new Set([2])],
    [new Date('2015-11-30'), new Date('2015-10-10')],
    [{a: new Date('2015-11-30'), b: 'b'}, {a: new Date('2015-10-10')}],
    [{a: null, b: 'b'}, {a: '4'}],
    [{a: null, b: 'b'}, {a: undefined}],
    [{a: undefined}, {a: null}],
    [{a: [{a: 'a', b: 'b'}]}, {a: [{a: 'c'}]}],
    [{a: 1, b: 1, c: 1, d: {e: {f: 555}}}, {d: {e: {f: 222}}}],
    [{}, {a: undefined}],
    [[1, 2, 3], [2, 3, 1]],
    [[1, 2, 3], [1, 2, 2]],
    [new Error('foo'), new Error('bar')],
    [Object.assign(Object.create(null), {a: 'b'}), {c: 'd'}],
  ].forEach(([n1, n2]) => {
    it(`{pass: false} expect(${stringify(n1)}).toMatchObject(${stringify(
      n2,
    )})`, () => {
      jestExpect(n1).not.toMatchObject(n2);
      expect(() =>
        jestExpect(n1).toMatchObject(n2),
      ).toThrowErrorMatchingSnapshot();
    });
  });

  [
    [null, {}],
    [4, {}],
    ['44', {}],
    [true, {}],
    [undefined, {}],
    [{}, null],
    [{}, 4],
    [{}, 'some string'],
    [{}, true],
    [{}, undefined],
  ].forEach(([n1, n2]) => {
    it(`throws expect(${stringify(n1)}).toMatchObject(${stringify(
      n2,
    )})`, () => {
      expect(() =>
        jestExpect(n1).toMatchObject(n2),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
