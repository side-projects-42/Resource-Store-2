In your test files, Jest puts each of these methods and objects into the global environment. You don’t have to require or import anything to use them.

## Methods

---

## Reference

### `afterAll(fn, timeout)`

Runs a function after all the tests in this file have completed. If the function returns a promise or is a generator, Jest waits for that promise to resolve before continuing.

Optionally, you can provide a `timeout` (in milliseconds) for specifying how long to wait before aborting. _Note: The default timeout is 5 seconds._

This is often useful if you want to clean up some global setup state that is shared across tests.

For example:

    const globalDatabase = makeGlobalDatabase();

    function cleanUpDatabase(db) {
      db.cleanUp();
    }

    afterAll(() => {
      cleanUpDatabase(globalDatabase);
    });

    test('can find things', () => {
      return globalDatabase.find('thing', {}, (results) => {
        expect(results.length).toBeGreaterThan(0);
      });
    });

    test('can insert a thing', () => {
      return globalDatabase.insert('thing', makeThing(), (response) => {
        expect(response.success).toBeTruthy();
      });
    });

Here the `afterAll` ensures that `cleanUpDatabase` is called after all tests run.

If `afterAll` is inside a `describe` block, it runs at the end of the describe block.

If you want to run some cleanup after every test instead of after all tests, use `afterEach` instead.

### `afterEach(fn, timeout)`

Runs a function after each one of the tests in this file completes. If the function returns a promise or is a generator, Jest waits for that promise to resolve before continuing.

Optionally, you can provide a `timeout` (in milliseconds) for specifying how long to wait before aborting. _Note: The default timeout is 5 seconds._

This is often useful if you want to clean up some temporary state that is created by each test.

For example:

    const globalDatabase = makeGlobalDatabase();

    function cleanUpDatabase(db) {
      db.cleanUp();
    }

    afterEach(() => {
      cleanUpDatabase(globalDatabase);
    });

    test('can find things', () => {
      return globalDatabase.find('thing', {}, (results) => {
        expect(results.length).toBeGreaterThan(0);
      });
    });

    test('can insert a thing', () => {
      return globalDatabase.insert('thing', makeThing(), (response) => {
        expect(response.success).toBeTruthy();
      });
    });

Here the `afterEach` ensures that `cleanUpDatabase` is called after each test runs.

If `afterEach` is inside a `describe` block, it only runs after the tests that are inside this describe block.

If you want to run some cleanup just once, after all of the tests run, use `afterAll` instead.

### `beforeAll(fn, timeout)`

Runs a function before any of the tests in this file run. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running tests.

Optionally, you can provide a `timeout` (in milliseconds) for specifying how long to wait before aborting. _Note: The default timeout is 5 seconds._

This is often useful if you want to set up some global state that will be used by many tests.

For example:

    const globalDatabase = makeGlobalDatabase();

    beforeAll(() => {
      // Clears the database and adds some testing data.
      // Jest will wait for this promise to resolve before running tests.
      return globalDatabase.clear().then(() => {
        return globalDatabase.insert({testData: 'foo'});
      });
    });

    // Since we only set up the database once in this example, it's important
    // that our tests don't modify it.
    test('can find things', () => {
      return globalDatabase.find('thing', {}, (results) => {
        expect(results.length).toBeGreaterThan(0);
      });
    });

Here the `beforeAll` ensures that the database is set up before tests run. If setup was synchronous, you could just do this without `beforeAll`. The key is that Jest will wait for a promise to resolve, so you can have asynchronous setup as well.

If `beforeAll` is inside a `describe` block, it runs at the beginning of the describe block.

If you want to run something before every test instead of before any test runs, use `beforeEach` instead.

### `beforeEach(fn, timeout)`

Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.

Optionally, you can provide a `timeout` (in milliseconds) for specifying how long to wait before aborting. _Note: The default timeout is 5 seconds._

This is often useful if you want to reset some global state that will be used by many tests.

For example:

    const globalDatabase = makeGlobalDatabase();

    beforeEach(() => {
      // Clears the database and adds some testing data.
      // Jest will wait for this promise to resolve before running tests.
      return globalDatabase.clear().then(() => {
        return globalDatabase.insert({testData: 'foo'});
      });
    });

    test('can find things', () => {
      return globalDatabase.find('thing', {}, (results) => {
        expect(results.length).toBeGreaterThan(0);
      });
    });

    test('can insert a thing', () => {
      return globalDatabase.insert('thing', makeThing(), (response) => {
        expect(response.success).toBeTruthy();
      });
    });

Here the `beforeEach` ensures that the database is reset for each test.

If `beforeEach` is inside a `describe` block, it runs for each test in the describe block.

If you only need to run some setup code once, before any tests run, use `beforeAll` instead.

### `describe(name, fn)`

`describe(name, fn)` creates a block that groups together several related tests. For example, if you have a `myBeverage` object that is supposed to be delicious but not sour, you could test it with:

    const myBeverage = {
      delicious: true,
      sour: false,
    };

    describe('my beverage', () => {
      test('is delicious', () => {
        expect(myBeverage.delicious).toBeTruthy();
      });

      test('is not sour', () => {
        expect(myBeverage.sour).toBeFalsy();
      });
    });

This isn’t required - you can just write the `test` blocks directly at the top level. But this can be handy if you prefer your tests to be organized into groups.

You can also nest `describe` blocks if you have a hierarchy of tests:

    const binaryStringToNumber = (binString) => {
      if (!/^[01]+$/.test(binString)) {
        throw new CustomError('Not a binary number.');
      }

      return parseInt(binString, 2);
    };

    describe('binaryStringToNumber', () => {
      describe('given an invalid binary string', () => {
        test('composed of non-numbers throws CustomError', () => {
          expect(() => binaryStringToNumber('abc')).toThrowError(CustomError);
        });

        test('with extra whitespace throws CustomError', () => {
          expect(() => binaryStringToNumber('  100')).toThrowError(CustomError);
        });
      });

      describe('given a valid binary string', () => {
        test('returns the correct number', () => {
          expect(binaryStringToNumber('100')).toBe(4);
        });
      });
    });

### `describe.only(name, fn)`

Also under the alias: `fdescribe(name, fn)`

You can use `describe.only` if you want to run only one describe block:

    describe.only('my beverage', () => {
      test('is delicious', () => {
        expect(myBeverage.delicious).toBeTruthy();
      });

      test('is not sour', () => {
        expect(myBeverage.sour).toBeFalsy();
      });
    });

    describe('my other beverage', () => {
      // ... will be skipped
    });

### `describe.skip(name, fn)`

Also under the alias: `xdescribe(name, fn)`

You can use `describe.skip` if you do not want to run a particular describe block:

    describe('my beverage', () => {
      test('is delicious', () => {
        expect(myBeverage.delicious).toBeTruthy();
      });

      test('is not sour', () => {
        expect(myBeverage.sour).toBeFalsy();
      });
    });

    describe.skip('my other beverage', () => {
      // ... will be skipped
    });

### `test(name, fn, timeout)`

Also under the alias: `it(name, fn, timeout)`

All you need in a test file is the `test` method which runs a test. For example, let’s say there’s a function `inchesOfRain()` that should be zero. Your whole test could be:

    test('did not rain', () => {
      expect(inchesOfRain()).toBe(0);
    });

The first argument is the test name; the second argument is a function that contains the expectations to test. The third argument (optional) is `timeout` (in milliseconds) for specifying how long to wait before aborting. _Note: The default timeout is 5 seconds._

> Note: If a **promise is returned** from `test`, Jest will wait for the promise to resolve before letting the test complete. Jest will also wait if you **provide an argument to the test function**, usually called `done`. This could be handy when you want to test callbacks. See how to test async code [here](TestingAsyncCode.md#callbacks).

For example, let’s say `fetchBeverageList()` returns a promise that is supposed to resolve to a list that has `lemon` in it. You can test this with:

    test('has lemon in it', () => {
      return fetchBeverageList().then((list) => {
        expect(list).toContain('lemon');
      });
    });

Even though the call to `test` will return right away, the test doesn’t complete until the promise resolves as well.

### `test.only(name, fn, timeout)`

Also under the aliases: `it.only(name, fn, timeout)` or `fit(name, fn, timeout)`

When you are debugging a large test file, you will often only want to run a subset of tests. You can use `.only` to specify which tests are the only ones you want to run in that test file.

Optionally, you can provide a `timeout` (in milliseconds) for specifying how long to wait before aborting. _Note: The default timeout is 5 seconds._

For example, let’s say you had these tests:

    test.only('it is raining', () => {
      expect(inchesOfRain()).toBeGreaterThan(0);
    });

    test('it is not snowing', () => {
      expect(inchesOfSnow()).toBe(0);
    });

Only the “it is raining” test will run in that test file, since it is run with `test.only`.

Usually you wouldn’t check code using `test.only` into source control - you would use it just for debugging, and remove it once you have fixed the broken tests.

### `test.skip(name, fn)`

Also under the aliases: `it.skip(name, fn)` or `xit(name, fn)` or `xtest(name, fn)`

When you are maintaining a large codebase, you may sometimes find a test that is temporarily broken for some reason. If you want to skip running this test, but you don’t want to just delete this code, you can use `test.skip` to specify some tests to skip.

For example, let’s say you had these tests:

    test('it is raining', () => {
      expect(inchesOfRain()).toBeGreaterThan(0);
    });

    test.skip('it is not snowing', () => {
      expect(inchesOfSnow()).toBe(0);
    });

Only the “it is raining” test will run, since the other test is run with `test.skip`.

You could simply comment the test out, but it’s often a bit nicer to use `test.skip` because it will maintain indentation and syntax highlighting.
