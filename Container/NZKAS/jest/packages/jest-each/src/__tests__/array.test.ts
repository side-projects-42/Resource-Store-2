/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import pretty from 'pretty-format';
import each from '../';

const noop = () => {};
const expectFunction = expect.any(Function);

const get = (object, lensPath) =>
  lensPath.reduce((acc, key) => acc[key], object);

const getGlobalTestMocks = () => {
  const globals: any = {
    describe: jest.fn(),
    fdescribe: jest.fn(),
    fit: jest.fn(),
    it: jest.fn(),
    test: jest.fn(),
    xdescribe: jest.fn(),
    xit: jest.fn(),
    xtest: jest.fn(),
  };
  globals.test.only = jest.fn();
  globals.test.skip = jest.fn();
  globals.it.only = jest.fn();
  globals.it.skip = jest.fn();
  globals.describe.only = jest.fn();
  globals.describe.skip = jest.fn();
  return globals;
};

describe('jest-each', () => {
  [
    ['test'],
    ['test', 'only'],
    ['it'],
    ['fit'],
    ['it', 'only'],
    ['describe'],
    ['fdescribe'],
    ['describe', 'only'],
  ].forEach(keyPath => {
    describe(`.${keyPath.join('.')}`, () => {
      test('throws an error when not called with an array', () => {
        const globalTestMocks = getGlobalTestMocks();
        const eachObject = each.withGlobal(globalTestMocks)(undefined);
        const testFunction = get(eachObject, keyPath);

        testFunction('expected string', noop);
        const globalMock = get(globalTestMocks, keyPath);

        expect(() =>
          globalMock.mock.calls[0][1](),
        ).toThrowErrorMatchingSnapshot();
      });

      test('throws an error when called with an empty array', () => {
        const globalTestMocks = getGlobalTestMocks();
        const eachObject = each.withGlobal(globalTestMocks)([]);
        const testFunction = get(eachObject, keyPath);

        testFunction('expected string', noop);
        const globalMock = get(globalTestMocks, keyPath);

        expect(() =>
          globalMock.mock.calls[0][1](),
        ).toThrowErrorMatchingSnapshot();
      });

      test('calls global with given title', () => {
        const globalTestMocks = getGlobalTestMocks();
        const eachObject = each.withGlobal(globalTestMocks)([[]]);
        const testFunction = get(eachObject, keyPath);
        testFunction('expected string', noop);

        const globalMock = get(globalTestMocks, keyPath);
        expect(globalMock).toHaveBeenCalledTimes(1);
        expect(globalMock).toHaveBeenCalledWith(
          'expected string',
          expectFunction,
          undefined,
        );
      });

      test('calls global with given title when multiple tests cases exist', () => {
        const globalTestMocks = getGlobalTestMocks();
        const eachObject = each.withGlobal(globalTestMocks)([[], []]);
        const testFunction = get(eachObject, keyPath);
        testFunction('expected string', noop);

        const globalMock = get(globalTestMocks, keyPath);
        expect(globalMock).toHaveBeenCalledTimes(2);
        expect(globalMock).toHaveBeenCalledWith(
          'expected string',
          expectFunction,
          undefined,
        );
        expect(globalMock).toHaveBeenCalledWith(
          'expected string',
          expectFunction,
          undefined,
        );
      });

      test('calls global with title containing param values when using printf format', () => {
        const globalTestMocks = getGlobalTestMocks();
        const eachObject = each.withGlobal(globalTestMocks)([
          [
            'hello',
            1,
            null,
            undefined,
            1.2,
            {foo: 'bar'},
            () => {},
            [],
            Infinity,
            NaN,
          ],
          [
            'world',
            1,
            null,
            undefined,
            1.2,
            {baz: 'qux'},
            () => {},
            [],
            Infinity,
            NaN,
          ],
        ]);
        const testFunction = get(eachObject, keyPath);
        testFunction('expected string: %s %d %s %s %d %j %s %j %d %d %#', noop);

        const globalMock = get(globalTestMocks, keyPath);
        expect(globalMock).toHaveBeenCalledTimes(2);
        expect(globalMock).toHaveBeenCalledWith(
          `expected string: hello 1 null undefined 1.2 ${JSON.stringify({
            foo: 'bar',
          })} () => {} [] Infinity NaN 0`,
          expectFunction,
          undefined,
        );
        expect(globalMock).toHaveBeenCalledWith(
          `expected string: world 1 null undefined 1.2 ${JSON.stringify({
            baz: 'qux',
          })} () => {} [] Infinity NaN 1`,
          expectFunction,
          undefined,
        );
      });

      test('does not call global test with title containing more param values than sprintf placeholders', () => {
        const globalTestMocks = getGlobalTestMocks();
        const eachObject = each.withGlobal(globalTestMocks)([
          ['hello', 1, 2, 3, 4, 5],
          ['world', 1, 2, 3, 4, 5],
        ]);
        const testFunction = get(eachObject, keyPath);
        testFunction('expected string: %s', noop);

        const globalMock = get(globalTestMocks, keyPath);
        expect(globalMock).toHaveBeenCalledTimes(2);
        expect(globalMock).toHaveBeenCalledWith(
          'expected string: hello',
          expectFunction,
          undefined,
        );
        expect(globalMock).toHaveBeenCalledWith(
          'expected string: world',
          expectFunction,
          undefined,
        );
      });

      test('calls global test title with %p placeholder injected at the correct positions', () => {
        const globalTestMocks = getGlobalTestMocks();
        const eachObject = each.withGlobal(globalTestMocks)([
          ['string1', 'pretty1', 'string2', 'pretty2'],
          ['string1', 'pretty1', 'string2', 'pretty2'],
        ]);
        const testFunction = get(eachObject, keyPath);
        testFunction('expected string: %s %p %s %p', noop);

        const globalMock = get(globalTestMocks, keyPath);
        expect(globalMock).toHaveBeenCalledTimes(2);
        expect(globalMock).toHaveBeenCalledWith(
          `expected string: string1 ${pretty('pretty1')} string2 ${pretty(
            'pretty2',
          )}`,
          expectFunction,
          undefined,
        );
        expect(globalMock).toHaveBeenCalledWith(
          `expected string: string1 ${pretty('pretty1')} string2 ${pretty(
            'pretty2',
          )}`,
          expectFunction,
          undefined,
        );
      });

      test('does not calls global test title with %p placeholder when no data is supplied at given position', () => {
        const globalTestMocks = getGlobalTestMocks();
        const eachObject = each.withGlobal(globalTestMocks)([
          ['string1', 'pretty1', 'string2'],
          ['string1', 'pretty1', 'string2'],
        ]);
        const testFunction = get(eachObject, keyPath);
        testFunction('expected string: %s %p %s %p', noop);

        const globalMock = get(globalTestMocks, keyPath);
        expect(globalMock).toHaveBeenCalledTimes(2);
        expect(globalMock).toHaveBeenCalledWith(
          `expected string: string1 ${pretty('pretty1')} string2 %p`,
          expectFunction,
          undefined,
        );
        expect(globalMock).toHaveBeenCalledWith(
          `expected string: string1 ${pretty('pretty1')} string2 %p`,
          expectFunction,
          undefined,
        );
      });

      test('calls global with cb function containing all parameters of each test case when given 1d array', () => {
        const globalTestMocks = getGlobalTestMocks();
        const testCallBack = jest.fn();
        const eachObject = each.withGlobal(globalTestMocks)(['hello', 'world']);
        const testFunction = get(eachObject, keyPath);
        testFunction('expected string', testCallBack);

        const globalMock = get(globalTestMocks, keyPath);

        globalMock.mock.calls[0][1]();
        expect(testCallBack).toHaveBeenCalledTimes(1);
        expect(testCallBack).toHaveBeenCalledWith('hello');

        globalMock.mock.calls[1][1]();
        expect(testCallBack).toHaveBeenCalledTimes(2);
        expect(testCallBack).toHaveBeenCalledWith('world');
      });

      test('calls global with cb function containing all parameters of each test case 2d array', () => {
        const globalTestMocks = getGlobalTestMocks();
        const testCallBack = jest.fn();
        const eachObject = each.withGlobal(globalTestMocks)([
          ['hello', 'world'],
          ['joe', 'bloggs'],
        ]);
        const testFunction = get(eachObject, keyPath);
        testFunction('expected string', testCallBack);

        const globalMock = get(globalTestMocks, keyPath);

        globalMock.mock.calls[0][1]();
        expect(testCallBack).toHaveBeenCalledTimes(1);
        expect(testCallBack).toHaveBeenCalledWith('hello', 'world');

        globalMock.mock.calls[1][1]();
        expect(testCallBack).toHaveBeenCalledTimes(2);
        expect(testCallBack).toHaveBeenCalledWith('joe', 'bloggs');
      });

      test('calls global with given timeout', () => {
        const globalTestMocks = getGlobalTestMocks();
        const eachObject = each.withGlobal(globalTestMocks)([['hello']]);

        const testFunction = get(eachObject, keyPath);
        testFunction('some test', noop, 10000);
        const globalMock = get(globalTestMocks, keyPath);
        expect(globalMock).toHaveBeenCalledWith(
          'some test',
          expect.any(Function),
          10000,
        );
      });
    });
  });

  describe('done callback', () => {
    test.each([
      [['test']],
      [['test', 'only']],
      [['it']],
      [['fit']],
      [['it', 'only']],
    ])(
      'calls %O with done when cb function has more args than params of given test row',
      keyPath => {
        const globalTestMocks = getGlobalTestMocks();
        const eachObject = each.withGlobal(globalTestMocks)([['hello']]);

        const testFunction = get(eachObject, keyPath);
        testFunction('expected string', (hello, done) => {
          expect(hello).toBe('hello');
          expect(done).toBe('DONE');
        });
        get(globalTestMocks, keyPath).mock.calls[0][1]('DONE');
      },
    );

    test.each([[['describe']], [['fdescribe']], [['describe', 'only']]])(
      'does not call %O with done when test function has more args than params of given test row',
      keyPath => {
        const globalTestMocks = getGlobalTestMocks();
        const eachObject = each.withGlobal(globalTestMocks)([['hello']]);

        const testFunction = get(eachObject, keyPath);
        testFunction('expected string', function(hello, done) {
          expect(hello).toBe('hello');
          expect(arguments.length).toBe(1);
          expect(done).toBe(undefined);
        });
        get(globalTestMocks, keyPath).mock.calls[0][1]('DONE');
      },
    );
  });

  [
    ['xtest'],
    ['test', 'skip'],
    ['xit'],
    ['it', 'skip'],
    ['xdescribe'],
    ['describe', 'skip'],
  ].forEach(keyPath => {
    describe(`.${keyPath.join('.')}`, () => {
      test('calls global with given title', () => {
        const globalTestMocks = getGlobalTestMocks();
        const eachObject = each.withGlobal(globalTestMocks)([[]]);
        const testFunction = get(eachObject, keyPath);
        testFunction('expected string', noop);

        const globalMock = get(globalTestMocks, keyPath);
        expect(globalMock).toHaveBeenCalledTimes(1);
        expect(globalMock).toHaveBeenCalledWith(
          'expected string',
          expectFunction,
          undefined,
        );
      });

      test('calls global with given title when multiple tests cases exist', () => {
        const globalTestMocks = getGlobalTestMocks();
        const eachObject = each.withGlobal(globalTestMocks)([[], []]);
        const testFunction = get(eachObject, keyPath);
        testFunction('expected string', noop);

        const globalMock = get(globalTestMocks, keyPath);
        expect(globalMock).toHaveBeenCalledTimes(2);
        expect(globalMock).toHaveBeenCalledWith(
          'expected string',
          expectFunction,
          undefined,
        );
      });

      test('calls global with title containing param values when using sprintf format', () => {
        const globalTestMocks = getGlobalTestMocks();
        const eachObject = each.withGlobal(globalTestMocks)([
          ['hello', 1],
          ['world', 2],
        ]);
        const testFunction = get(eachObject, keyPath);
        testFunction('expected string: %s %s', () => {});

        const globalMock = get(globalTestMocks, keyPath);
        expect(globalMock).toHaveBeenCalledTimes(2);
        expect(globalMock).toHaveBeenCalledWith(
          'expected string: hello 1',
          expectFunction,
          undefined,
        );
        expect(globalMock).toHaveBeenCalledWith(
          'expected string: world 2',
          expectFunction,
          undefined,
        );
      });
    });
  });
});
