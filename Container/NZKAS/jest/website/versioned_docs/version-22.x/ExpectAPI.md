When you’re writing tests, you often need to check that values meet certain conditions. `expect` gives you access to a number of “matchers” that let you validate different things.

For additional Jest matchers maintained by the Jest Community check out [`jest-extended`](https://github.com/jest-community/jest-extended).

## Methods

---

## Reference

### `expect(value)`

The `expect` function is used every time you want to test a value. You will rarely call `expect` by itself. Instead, you will use `expect` along with a “matcher” function to assert something about a value.

It’s easier to understand this with an example. Let’s say you have a method `bestLaCroixFlavor()` which is supposed to return the string `'grapefruit'`. Here’s how you would test that:

    test('the best flavor is grapefruit', () => {
      expect(bestLaCroixFlavor()).toBe('grapefruit');
    });

In this case, `toBe` is the matcher function. There are a lot of different matcher functions, documented below, to help you test different things.

The argument to `expect` should be the value that your code produces, and any argument to the matcher should be the correct value. If you mix them up, your tests will still work, but the error messages on failing tests will look strange.

### `expect.extend(matchers)`

You can use `expect.extend` to add your own matchers to Jest. For example, let’s say that you’re testing a number theory library and you’re frequently asserting that numbers are divisible by other numbers. You could abstract that into a `toBeDivisibleBy` matcher:

    expect.extend({
      toBeDivisibleBy(received, argument) {
        const pass = received % argument == 0;
        if (pass) {
          return {
            message: () =>
              `expected ${received} not to be divisible by ${argument}`,
            pass: true,
          };
        } else {
          return {
            message: () => `expected ${received} to be divisible by ${argument}`,
            pass: false,
          };
        }
      },
    });

    test('even and odd numbers', () => {
      expect(100).toBeDivisibleBy(2);
      expect(101).not.toBeDivisibleBy(2);
    });

_Note_: In TypeScript, when using `@types/jest` for example, you can declare the new `toBeWithinRange` matcher like this:

    declare global {
      namespace jest {
        interface Matchers<R> {
          toBeWithinRange(a: number, b: number): R;
        }
      }
    }

Matchers should return an object with two keys. `pass` indicates whether there was a match or not, and `message` provides a function with no arguments that returns an error message in case of failure. Thus, when `pass` is false, `message` should return the error message for when `expect(x).yourMatcher()` fails. And when `pass` is true, `message` should return the error message for when `expect(x).not.yourMatcher()` fails.

These helper functions and properties can be found on `this` inside a custom matcher:

#### `this.isNot`

A boolean to let you know this matcher was called with the negated `.not` modifier allowing you to flip your assertion.

#### `this.equals(a, b)`

This is a deep-equality function that will return `true` if two objects have the same values (recursively).

#### `this.expand`

A boolean to let you know this matcher was called with an `expand` option. When Jest is called with the `--expand` flag, `this.expand` can be used to determine if Jest is expected to show full diffs and errors.

#### `this.utils`

There are a number of helpful tools exposed on `this.utils` primarily consisting of the exports from [`jest-matcher-utils`](https://github.com/facebook/jest/tree/master/packages/jest-matcher-utils).

The most useful ones are `matcherHint`, `printExpected` and `printReceived` to format the error messages nicely. For example, take a look at the implementation for the `toBe` matcher:

    const diff = require('jest-diff');
    expect.extend({
      toBe(received, expected) {
        const pass = Object.is(received, expected);

        const message = pass
          ? () =>
              this.utils.matcherHint('.not.toBe') +
              '\n\n' +
              `Expected value to not be (using Object.is):\n` +
              `  ${this.utils.printExpected(expected)}\n` +
              `Received:\n` +
              `  ${this.utils.printReceived(received)}`
          : () => {
              const diffString = diff(expected, received, {
                expand: this.expand,
              });
              return (
                this.utils.matcherHint('.toBe') +
                '\n\n' +
                `Expected value to be (using Object.is):\n` +
                `  ${this.utils.printExpected(expected)}\n` +
                `Received:\n` +
                `  ${this.utils.printReceived(received)}` +
                (diffString ? `\n\nDifference:\n\n${diffString}` : '')
              );
            };

        return {actual: received, message, pass};
      },
    });

This will print something like this:

      expect(received).toBe(expected)

        Expected value to be (using Object.is):
          "banana"
        Received:
          "apple"

When an assertion fails, the error message should give as much signal as necessary to the user so they can resolve their issue quickly. You should craft a precise failure message to make sure users of your custom assertions have a good developer experience.

### `expect.anything()`

`expect.anything()` matches anything but `null` or `undefined`. You can use it inside `toEqual` or `toBeCalledWith` instead of a literal value. For example, if you want to check that a mock function is called with a non-null argument:

    test('map calls its argument with a non-null argument', () => {
      const mock = jest.fn();
      [1].map((x) => mock(x));
      expect(mock).toBeCalledWith(expect.anything());
    });

### `expect.any(constructor)`

`expect.any(constructor)` matches anything that was created with the given constructor. You can use it inside `toEqual` or `toBeCalledWith` instead of a literal value. For example, if you want to check that a mock function is called with a number:

    function randocall(fn) {
      return fn(Math.floor(Math.random() * 6 + 1));
    }

    test('randocall calls its callback with a number', () => {
      const mock = jest.fn();
      randocall(mock);
      expect(mock).toBeCalledWith(expect.any(Number));
    });

### `expect.arrayContaining(array)`

`expect.arrayContaining(array)` matches a received array which contains all of the elements in the expected array. That is, the expected array is a **subset** of the received array. Therefore, it matches a received array which contains elements that are **not** in the expected array.

You can use it instead of a literal value:

- in `toEqual` or `toBeCalledWith`
- to match a property in `objectContaining` or `toMatchObject`

  describe('arrayContaining', () => { const expected = ['Alice', 'Bob']; it('matches even if received contains additional elements', () => { expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected)); }); it('does not match if received does not contain expected elements', () => { expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected)); }); });

  describe('Beware of a misunderstanding! A sequence of dice rolls', () => { const expected = [1, 2, 3, 4, 5, 6]; it('matches even with an unexpected number 7', () => { expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual( expect.arrayContaining(expected), ); }); it('does not match without an expected number 2', () => { expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual( expect.arrayContaining(expected), ); }); });

### `expect.assertions(number)`

`expect.assertions(number)` verifies that a certain number of assertions are called during a test. This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.

For example, let’s say that we have a function `doAsync` that receives two callbacks `callback1` and `callback2`, it will asynchronously call both of them in an unknown order. We can test this with:

    test('doAsync calls both callbacks', () => {
      expect.assertions(2);
      function callback1(data) {
        expect(data).toBeTruthy();
      }
      function callback2(data) {
        expect(data).toBeTruthy();
      }

      doAsync(callback1, callback2);
    });

The `expect.assertions(2)` call ensures that both callbacks actually get called.

### `expect.hasAssertions()`

`expect.hasAssertions()` verifies that at least one assertion is called during a test. This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.

For example, let’s say that we have a few functions that all deal with state. `prepareState` calls a callback with a state object, `validateState` runs on that state object, and `waitOnState` returns a promise that waits until all `prepareState` callbacks complete. We can test this with:

    test('prepareState prepares a valid state', () => {
      expect.hasAssertions();
      prepareState((state) => {
        expect(validateState(state)).toBeTruthy();
      });
      return waitOnState();
    });

The `expect.hasAssertions()` call ensures that the `prepareState` callback actually gets called.

### `expect.objectContaining(object)`

`expect.objectContaining(object)` matches any received object that recursively matches the expected properties. That is, the expected object is a **subset** of the received object. Therefore, it matches a received object which contains properties that are **not** in the expected object.

Instead of literal property values in the expected object, you can use matchers, `expect.anything()`, and so on.

For example, let’s say that we expect an `onPress` function to be called with an `Event` object, and all we need to verify is that the event has `event.x` and `event.y` properties. We can do that with:

    test('onPress gets called with the right thing', () => {
      const onPress = jest.fn();
      simulatePresses(onPress);
      expect(onPress).toBeCalledWith(
        expect.objectContaining({
          x: expect.any(Number),
          y: expect.any(Number),
        }),
      );
    });

### `expect.stringContaining(string)`

##### available in Jest **19.0.0+**

`expect.stringContaining(string)` matches any received string that contains the exact expected string.

### `expect.stringMatching(regexp)`

`expect.stringMatching(regexp)` matches any received string that matches the expected regexp.

You can use it instead of a literal value:

- in `toEqual` or `toBeCalledWith`
- to match an element in `arrayContaining`
- to match a property in `objectContaining` or `toMatchObject`

This example also shows how you can nest multiple asymmetric matchers, with `expect.stringMatching` inside the `expect.arrayContaining`.

    describe('stringMatching in arrayContaining', () => {
      const expected = [
        expect.stringMatching(/^Alic/),
        expect.stringMatching(/^[BR]ob/),
      ];
      it('matches even if received contains additional elements', () => {
        expect(['Alicia', 'Roberto', 'Evelina']).toEqual(
          expect.arrayContaining(expected),
        );
      });
      it('does not match if received does not contain expected elements', () => {
        expect(['Roberto', 'Evelina']).not.toEqual(
          expect.arrayContaining(expected),
        );
      });
    });

### `expect.addSnapshotSerializer(serializer)`

You can call `expect.addSnapshotSerializer` to add a module that formats application-specific data structures.

For an individual test file, an added module precedes any modules from `snapshotSerializers` configuration, which precede the default snapshot serializers for built-in JavaScript types and for React elements. The last module added is the first module tested.

    import serializer from 'my-serializer-module';
    expect.addSnapshotSerializer(serializer);

    // affects expect(value).toMatchSnapshot() assertions in the test file

If you add a snapshot serializer in individual test files instead of to adding it to `snapshotSerializers` configuration:

- You make the dependency explicit instead of implicit.
- You avoid limits to configuration that might cause you to eject from [create-react-app](https://github.com/facebookincubator/create-react-app).

See [configuring Jest](Configuration.md#snapshotserializers-array-string) for more information.

### `.not`

If you know how to test something, `.not` lets you test its opposite. For example, this code tests that the best La Croix flavor is not coconut:

    test('the best flavor is not coconut', () => {
      expect(bestLaCroixFlavor()).not.toBe('coconut');
    });

### `.resolves`

##### available in Jest **20.0.0+**

Use `resolves` to unwrap the value of a fulfilled promise so any other matcher can be chained. If the promise is rejected the assertion fails.

For example, this code tests that the promise resolves and that the resulting value is `'lemon'`:

    test('resolves to lemon', () => {
      // make sure to add a return statement
      return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
    });

Note that, since you are still testing promises, the test is still asynchronous. Hence, you will need to [tell Jest to wait](TestingAsyncCode.md#promises) by returning the unwrapped assertion.

Alternatively, you can use `async/await` in combination with `.resolves`:

    test('resolves to lemon', async () => {
      await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
      await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus');
    });

### `.rejects`

##### available in Jest **20.0.0+**

Use `.rejects` to unwrap the reason of a rejected promise so any other matcher can be chained. If the promise is fulfilled the assertion fails.

For example, this code tests that the promise rejects with reason `'octopus'`:

    test('rejects to octopus', () => {
      // make sure to add a return statement
      return expect(Promise.reject(new Error('octopus'))).rejects.toThrow(
        'octopus',
      );
    });

Note that, since you are still testing promises, the test is still asynchronous. Hence, you will need to [tell Jest to wait](TestingAsyncCode.md#promises) by returning the unwrapped assertion.

Alternatively, you can use `async/await` in combination with `.rejects`.

    test('rejects to octopus', async () => {
      await expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus');
    });

### `.toBe(value)`

Use `.toBe` to compare primitive values or to check referential identity of object instances.

For example, this code will validate some properties of the `can` object:

    const can = {
      name: 'pamplemousse',
      ounces: 12,
    };

    describe('the can', () => {
      test('has 12 ounces', () => {
        expect(can.ounces).toBe(12);
      });

      test('has a sophisticated name', () => {
        expect(can.name).toBe('pamplemousse');
      });
    });

Don’t use `.toBe` with floating-point numbers. For example, due to rounding, in JavaScript `0.2 + 0.1` is not strictly equal to `0.3`. If you have floating point numbers, try `.toBeCloseTo` instead.

Although the `.toBe` matcher **checks** referential identity, it **reports** a deep comparison of values if the assertion fails. If differences between properties do not help you to understand why a test fails, especially if the report is large, then you might move the comparison into the `expect` function. For example, to assert whether or not elements are the same instance:

- rewrite `expect(received).toBe(expected)` as `expect(Object.is(received, expected)).toBe(true)`
- rewrite `expect(received).not.toBe(expected)` as `expect(Object.is(received, expected)).toBe(false)`

### `.toHaveBeenCalled()`

Also under the alias: `.toBeCalled()`

Use `.toHaveBeenCalled` to ensure that a mock function got called.

For example, let’s say you have a `drinkAll(drink, flavor)` function that takes a `drink` function and applies it to all available beverages. You might want to check that `drink` gets called for `'lemon'`, but not for `'octopus'`, because `'octopus'` flavor is really weird and why would anything be octopus-flavored? You can do that with this test suite:

    describe('drinkAll', () => {
      test('drinks something lemon-flavored', () => {
        const drink = jest.fn();
        drinkAll(drink, 'lemon');
        expect(drink).toHaveBeenCalled();
      });

      test('does not drink something octopus-flavored', () => {
        const drink = jest.fn();
        drinkAll(drink, 'octopus');
        expect(drink).not.toHaveBeenCalled();
      });
    });

### `.toHaveBeenCalledTimes(number)`

Use `.toHaveBeenCalledTimes` to ensure that a mock function got called exact number of times.

For example, let’s say you have a `drinkEach(drink, Array<flavor>)` function that takes a `drink` function and applies it to array of passed beverages. You might want to check that drink function was called exact number of times. You can do that with this test suite:

    test('drinkEach drinks each drink', () => {
      const drink = jest.fn();
      drinkEach(drink, ['lemon', 'octopus']);
      expect(drink).toHaveBeenCalledTimes(2);
    });

### `.toHaveBeenCalledWith(arg1, arg2, ...)`

Also under the alias: `.toBeCalledWith()`

Use `.toHaveBeenCalledWith` to ensure that a mock function was called with specific arguments.

For example, let’s say that you can register a beverage with a `register` function, and `applyToAll(f)` should apply the function `f` to all registered beverages. To make sure this works, you could write:

    test('registration applies correctly to orange La Croix', () => {
      const beverage = new LaCroix('orange');
      register(beverage);
      const f = jest.fn();
      applyToAll(f);
      expect(f).toHaveBeenCalledWith(beverage);
    });

### `.toHaveBeenLastCalledWith(arg1, arg2, ...)`

Also under the alias: `.lastCalledWith(arg1, arg2, ...)`

If you have a mock function, you can use `.toHaveBeenLastCalledWith` to test what arguments it was last called with. For example, let’s say you have a `applyToAllFlavors(f)` function that applies `f` to a bunch of flavors, and you want to ensure that when you call it, the last flavor it operates on is `'mango'`. You can write:

    test('applying to all flavors does mango last', () => {
      const drink = jest.fn();
      applyToAllFlavors(drink);
      expect(drink).toHaveBeenLastCalledWith('mango');
    });

### `.toBeCloseTo(number, numDigits)`

Using exact equality with floating point numbers is a bad idea. Rounding means that intuitive things fail. For example, this test fails:

    test('adding works sanely with simple decimals', () => {
      expect(0.2 + 0.1).toBe(0.3); // Fails!
    });

It fails because in JavaScript, `0.2 + 0.1` is actually `0.30000000000000004`. Sorry.

Instead, use `.toBeCloseTo`. Use `numDigits` to control how many digits after the decimal point to check. For example, if you want to be sure that `0.2 + 0.1` is equal to `0.3` with a precision of 5 decimal digits, you can use this test:

    test('adding works sanely with simple decimals', () => {
      expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
    });

The default for `numDigits` is 2, which has proved to be a good default in most cases.

### `.toBeDefined()`

Use `.toBeDefined` to check that a variable is not undefined. For example, if you just want to check that a function `fetchNewFlavorIdea()` returns _something_, you can write:

    test('there is a new flavor idea', () => {
      expect(fetchNewFlavorIdea()).toBeDefined();
    });

You could write `expect(fetchNewFlavorIdea()).not.toBe(undefined)`, but it’s better practice to avoid referring to `undefined` directly in your code.

### `.toBeFalsy()`

Use `.toBeFalsy` when you don’t care what a value is, you just want to ensure a value is false in a boolean context. For example, let’s say you have some application code that looks like:

    drinkSomeLaCroix();
    if (!getErrors()) {
      drinkMoreLaCroix();
    }

You may not care what `getErrors` returns, specifically - it might return `false`, `null`, or `0`, and your code would still work. So if you want to test there are no errors after drinking some La Croix, you could write:

    test('drinking La Croix does not lead to errors', () => {
      drinkSomeLaCroix();
      expect(getErrors()).toBeFalsy();
    });

In JavaScript, there are six falsy values: `false`, `0`, `''`, `null`, `undefined`, and `NaN`. Everything else is truthy.

### `.toBeGreaterThan(number)`

To compare floating point numbers, you can use `toBeGreaterThan`. For example, if you want to test that `ouncesPerCan()` returns a value of more than 10 ounces, write:

    test('ounces per can is more than 10', () => {
      expect(ouncesPerCan()).toBeGreaterThan(10);
    });

### `.toBeGreaterThanOrEqual(number)`

To compare floating point numbers, you can use `toBeGreaterThanOrEqual`. For example, if you want to test that `ouncesPerCan()` returns a value of at least 12 ounces, write:

    test('ounces per can is at least 12', () => {
      expect(ouncesPerCan()).toBeGreaterThanOrEqual(12);
    });

### `.toBeLessThan(number)`

To compare floating point numbers, you can use `toBeLessThan`. For example, if you want to test that `ouncesPerCan()` returns a value of less than 20 ounces, write:

    test('ounces per can is less than 20', () => {
      expect(ouncesPerCan()).toBeLessThan(20);
    });

### `.toBeLessThanOrEqual(number)`

To compare floating point numbers, you can use `toBeLessThanOrEqual`. For example, if you want to test that `ouncesPerCan()` returns a value of at most 12 ounces, write:

    test('ounces per can is at most 12', () => {
      expect(ouncesPerCan()).toBeLessThanOrEqual(12);
    });

### `.toBeInstanceOf(Class)`

Use `.toBeInstanceOf(Class)` to check that an object is an instance of a class. This matcher uses `instanceof` underneath.

    class A {}

    expect(new A()).toBeInstanceOf(A);
    expect(() => {}).toBeInstanceOf(Function);
    expect(new A()).toBeInstanceOf(Function); // throws

### `.toBeNull()`

`.toBeNull()` is the same as `.toBe(null)` but the error messages are a bit nicer. So use `.toBeNull()` when you want to check that something is null.

    function bloop() {
      return null;
    }

    test('bloop returns null', () => {
      expect(bloop()).toBeNull();
    });

### `.toBeTruthy()`

Use `.toBeTruthy` when you don’t care what a value is, you just want to ensure a value is true in a boolean context. For example, let’s say you have some application code that looks like:

    drinkSomeLaCroix();
    if (thirstInfo()) {
      drinkMoreLaCroix();
    }

You may not care what `thirstInfo` returns, specifically - it might return `true` or a complex object, and your code would still work. So if you just want to test that `thirstInfo` will be truthy after drinking some La Croix, you could write:

    test('drinking La Croix leads to having thirst info', () => {
      drinkSomeLaCroix();
      expect(thirstInfo()).toBeTruthy();
    });

In JavaScript, there are six falsy values: `false`, `0`, `''`, `null`, `undefined`, and `NaN`. Everything else is truthy.

### `.toBeUndefined()`

Use `.toBeUndefined` to check that a variable is undefined. For example, if you want to check that a function `bestDrinkForFlavor(flavor)` returns `undefined` for the `'octopus'` flavor, because there is no good octopus-flavored drink:

    test('the best drink for octopus flavor is undefined', () => {
      expect(bestDrinkForFlavor('octopus')).toBeUndefined();
    });

You could write `expect(bestDrinkForFlavor('octopus')).toBe(undefined)`, but it’s better practice to avoid referring to `undefined` directly in your code.

### `.toBeNaN()`

Use `.toBeNaN` when checking a value is `NaN`.

    test('passes when value is NaN', () => {
      expect(NaN).toBeNaN();
      expect(1).not.toBeNaN();
    });

### `.toContain(item)`

Use `.toContain` when you want to check that an item is in an array. For testing the items in the array, this uses `===`, a strict equality check. `.toContain` can also check whether a string is a substring of another string.

For example, if `getAllFlavors()` returns an array of flavors and you want to be sure that `lime` is in there, you can write:

    test('the flavor list contains lime', () => {
      expect(getAllFlavors()).toContain('lime');
    });

### `.toContainEqual(item)`

Use `.toContainEqual` when you want to check that an item with a specific structure and values is contained in an array. For testing the items in the array, this matcher recursively checks the equality of all fields, rather than checking for object identity.

    describe('my beverage', () => {
      test('is delicious and not sour', () => {
        const myBeverage = {delicious: true, sour: false};
        expect(myBeverages()).toContainEqual(myBeverage);
      });
    });

### `.toEqual(value)`

Use `.toEqual` to compare recursively all properties of object instances (also known as “deep” equality).

For example, `.toEqual` and `.toBe` behave differently in this test suite, so all the tests pass:

    const can1 = {
      flavor: 'grapefruit',
      ounces: 12,
    };
    const can2 = {
      flavor: 'grapefruit',
      ounces: 12,
    };

    describe('the La Croix cans on my desk', () => {
      test('have all the same properties', () => {
        expect(can1).toEqual(can2);
      });
      test('are not the exact same can', () => {
        expect(can1).not.toBe(can2);
      });
    });

> Note: `.toEqual` won’t perform a _deep equality_ check for two errors. Only the `message` property of an Error is considered for equality. It is recommended to use the `.toThrow` matcher for testing against errors.

If differences between properties do not help you to understand why a test fails, especially if the report is large, then you might move the comparison into the `expect` function. For example, use `equals` method of `Buffer` class to assert whether or not buffers contain the same content:

- rewrite `expect(received).toEqual(expected)` as `expect(received.equals(expected)).toBe(true)`
- rewrite `expect(received).not.toEqual(expected)` as `expect(received.equals(expected)).toBe(false)`

### `.toHaveLength(number)`

Use `.toHaveLength` to check that an object has a `.length` property and it is set to a certain numeric value.

This is especially useful for checking arrays or strings size.

    expect([1, 2, 3]).toHaveLength(3);
    expect('abc').toHaveLength(3);
    expect('').not.toHaveLength(5);

### `.toMatch(regexpOrString)`

Use `.toMatch` to check that a string matches a regular expression.

For example, you might not know what exactly `essayOnTheBestFlavor()` returns, but you know it’s a really long string, and the substring `grapefruit` should be in there somewhere. You can test this with:

    describe('an essay on the best flavor', () => {
      test('mentions grapefruit', () => {
        expect(essayOnTheBestFlavor()).toMatch(/grapefruit/);
        expect(essayOnTheBestFlavor()).toMatch(new RegExp('grapefruit'));
      });
    });

This matcher also accepts a string, which it will try to match:

    describe('grapefruits are healthy', () => {
      test('grapefruits are a fruit', () => {
        expect('grapefruits').toMatch('fruit');
      });
    });

### `.toMatchObject(object)`

Use `.toMatchObject` to check that a JavaScript object matches a subset of the properties of an object. It will match received objects with properties that are **not** in the expected object.

You can also pass an array of objects, in which case the method will return true only if each object in the received array matches (in the `toMatchObject` sense described above) the corresponding object in the expected array. This is useful if you want to check that two arrays match in their number of elements, as opposed to `arrayContaining`, which allows for extra elements in the received array.

You can match properties against values or against matchers.

    const houseForSale = {
      bath: true,
      bedrooms: 4,
      kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        area: 20,
        wallColor: 'white',
      },
    };
    const desiredHouse = {
      bath: true,
      kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        wallColor: expect.stringMatching(/white|yellow/),
      },
    };

    test('the house has my desired features', () => {
      expect(houseForSale).toMatchObject(desiredHouse);
    });

    describe('toMatchObject applied to arrays', () => {
      test('the number of elements must match exactly', () => {
        expect([{foo: 'bar'}, {baz: 1}]).toMatchObject([{foo: 'bar'}, {baz: 1}]);
      });

      // .arrayContaining "matches a received array which contains elements that
      // are *not* in the expected array"
      test('.toMatchObject does not allow extra elements', () => {
        expect([{foo: 'bar'}, {baz: 1}]).toMatchObject([{foo: 'bar'}]);
      });

      test('.toMatchObject is called for each elements, so extra object properties are okay', () => {
        expect([{foo: 'bar'}, {baz: 1, extra: 'quux'}]).toMatchObject([
          {foo: 'bar'},
          {baz: 1},
        ]);
      });
    });

### `.toHaveProperty(keyPath, value)`

Use `.toHaveProperty` to check if property at provided reference `keyPath` exists for an object. For checking deeply nested properties in an object you may use [dot notation](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Property_accessors) or an array containing the keyPath for deep references.

Optionally, you can provide a `value` to check if it’s equal to the value present at `keyPath` on the target object. This matcher uses ‘deep equality’ (like `toEqual()`) and recursively checks the equality of all fields.

The following example contains a `houseForSale` object with nested properties. We are using `toHaveProperty` to check for the existence and values of various properties in the object.

    // Object containing house features to be tested
    const houseForSale = {
      bath: true,
      bedrooms: 4,
      kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        area: 20,
        wallColor: 'white',
      },
    };

    test('this house has my desired features', () => {
      // Simple Referencing
      expect(houseForSale).toHaveProperty('bath');
      expect(houseForSale).toHaveProperty('bedrooms', 4);

      expect(houseForSale).not.toHaveProperty('pool');

      // Deep referencing using dot notation
      expect(houseForSale).toHaveProperty('kitchen.area', 20);
      expect(houseForSale).toHaveProperty('kitchen.amenities', [
        'oven',
        'stove',
        'washer',
      ]);

      expect(houseForSale).not.toHaveProperty('kitchen.open');

      // Deep referencing using an array containing the keyPath
      expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
      expect(houseForSale).toHaveProperty(
        ['kitchen', 'amenities'],
        ['oven', 'stove', 'washer'],
      );
      expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');

      expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);
    });

### `.toMatchSnapshot(optionalString)`

This ensures that a value matches the most recent snapshot. Check out [the Snapshot Testing guide](SnapshotTesting.md) for more information.

You can also specify an optional snapshot name. Otherwise, the name is inferred from the test.

### `.toThrow(error)`

Also under the alias: `.toThrowError(error)`

Use `.toThrow` to test that a function throws when it is called. For example, if we want to test that `drinkFlavor('octopus')` throws, because octopus flavor is too disgusting to drink, we could write:

    test('throws on octopus', () => {
      expect(() => {
        drinkFlavor('octopus');
      }).toThrow();
    });

If you want to test that a specific error gets thrown, you can provide an argument to `toThrow`. The argument can be a string that should be contained in the error message, a class for the error, or a regex that should match the error message. For example, let’s say that `drinkFlavor` is coded like this:

    function drinkFlavor(flavor) {
      if (flavor == 'octopus') {
        throw new DisgustingFlavorError('yuck, octopus flavor');
      }
      // Do some other stuff
    }

We could test this error gets thrown in several ways:

    test('throws on octopus', () => {
      function drinkOctopus() {
        drinkFlavor('octopus');
      }

      // Test that the error message says "yuck" somewhere: these are equivalent
      expect(drinkOctopus).toThrowError(/yuck/);
      expect(drinkOctopus).toThrowError('yuck');

      // Test the exact error message
      expect(drinkOctopus).toThrowError(/^yuck, octopus flavor$/);

      // Test that we get a DisgustingFlavorError
      expect(drinkOctopus).toThrowError(DisgustingFlavorError);
    });

> Note: You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.

### `.toThrowErrorMatchingSnapshot()`

Use `.toThrowErrorMatchingSnapshot` to test that a function throws an error matching the most recent snapshot when it is called. For example, let’s say you have a `drinkFlavor` function that throws whenever the flavor is `'octopus'`, and is coded like this:

    function drinkFlavor(flavor) {
      if (flavor == 'octopus') {
        throw new DisgustingFlavorError('yuck, octopus flavor');
      }
      // Do some other stuff
    }

The test for this function will look this way:

    test('throws on octopus', () => {
      function drinkOctopus() {
        drinkFlavor('octopus');
      }

      expect(drinkOctopus).toThrowErrorMatchingSnapshot();
    });

And it will generate the following snapshot:

    exports[`drinking flavors throws on octopus 1`] = `"yuck, octopus flavor"`;

Check out [React Tree Snapshot Testing](https://jestjs.io/blog/2016/07/27/jest-14.html) for more information on snapshot testing.
