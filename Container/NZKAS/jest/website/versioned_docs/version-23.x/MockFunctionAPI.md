Mock functions are also known as “spies”, because they let you spy on the behavior of a function that is called indirectly by some other code, rather than just testing the output. You can create a mock function with `jest.fn()`. If no implementation is given, the mock function will return `undefined` when invoked.

## Methods

---

## Reference

### `mockFn.getMockName()`

Returns the mock name string set by calling `mockFn.mockName(value)`.

### `mockFn.mock.calls`

An array containing the call arguments of all calls that have been made to this mock function. Each item in the array is an array of arguments that were passed during the call.

For example: A mock function `f` that has been called twice, with the arguments `f('arg1', 'arg2')`, and then with the arguments `f('arg3', 'arg4')`, would have a `mock.calls` array that looks like this:

    [
      ['arg1', 'arg2'],
      ['arg3', 'arg4'],
    ];

### `mockFn.mock.results`

An array containing the results of all calls that have been made to this mock function. Each entry in this array is an object containing a boolean `isThrow` property, and a `value` property. `isThrow` is true if the call terminated due to a `throw`, or false if the call returned normally. The `value` property contains the value that was thrown or returned.

For example: A mock function `f` that has been called three times, returning `result1`, throwing an error, and then returning `result2`, would have a `mock.results` array that looks like this:

    [
      {
        isThrow: false,
        value: 'result1',
      },
      {
        isThrow: true,
        value: {
          /* Error instance */
        },
      },
      {
        isThrow: false,
        value: 'result2',
      },
    ];

### `mockFn.mock.instances`

An array that contains all the object instances that have been instantiated from this mock function using `new`.

For example: A mock function that has been instantiated twice would have the following `mock.instances` array:

    const mockFn = jest.fn();

    const a = new mockFn();
    const b = new mockFn();

    mockFn.mock.instances[0] === a; // true
    mockFn.mock.instances[1] === b; // true

### `mockFn.mockClear()`

Resets all information stored in the [`mockFn.mock.calls`](#mockfn-mock-calls) and [`mockFn.mock.instances`](#mockfn-mock-instances) arrays.

Often this is useful when you want to clean up a mock’s usage data between two assertions.

Beware that `mockClear` will replace `mockFn.mock`, not just [`mockFn.mock.calls`](#mockfn-mock-calls) and [`mockFn.mock.instances`](#mockfn-mock-instances). You should therefore avoid assigning `mockFn.mock` to other variables, temporary or not, to make sure you don’t access stale data.

The [`clearMocks`](configuration.html#clearmocks-boolean) configuration option is available to clear mocks automatically between tests.

### `mockFn.mockReset()`

Does everything that [`mockFn.mockClear()`](#mockfnmockclear) does, and also removes any mocked return values or implementations.

This is useful when you want to completely reset a _mock_ back to its initial state. (Note that resetting a _spy_ will result in a function with no return value).

Beware that `mockReset` will replace `mockFn.mock`, not just [`mockFn.mock.calls`](#mockfn-mock-calls) and [`mockFn.mock.instances`](#mockfn-mock-instances). You should therefore avoid assigning `mockFn.mock` to other variables, temporary or not, to make sure you don’t access stale data.

### `mockFn.mockRestore()`

Does everything that [`mockFn.mockReset()`](#mockfnmockreset) does, and also restores the original (non-mocked) implementation.

This is useful when you want to mock functions in certain test cases and restore the original implementation in others.

Beware that `mockFn.mockRestore` only works when mock was created with `jest.spyOn`. Thus you have to take care of restoration yourself when manually assigning `jest.fn()`.

The [`restoreMocks`](configuration.html#restoremocks-boolean) configuration option is available to restore mocks automatically between tests.

### `mockFn.mockImplementation(fn)`

Accepts a function that should be used as the implementation of the mock. The mock itself will still record all calls that go into and instances that come from itself – the only difference is that the implementation will also be executed when the mock is called.

_Note: `jest.fn(implementation)` is a shorthand for `jest.fn().mockImplementation(implementation)`._

For example:

    const mockFn = jest.fn().mockImplementation((scalar) => 42 + scalar);
    // or: jest.fn(scalar => 42 + scalar);

    const a = mockFn(0);
    const b = mockFn(1);

    a === 42; // true
    b === 43; // true

    mockFn.mock.calls[0][0] === 0; // true
    mockFn.mock.calls[1][0] === 1; // true

`mockImplementation` can also be used to mock class constructors:

    // SomeClass.js
    module.exports = class SomeClass {
      m(a, b) {}
    };

    // OtherModule.test.js
    jest.mock('./SomeClass'); // this happens automatically with automocking
    const SomeClass = require('./SomeClass');
    const mMock = jest.fn();
    SomeClass.mockImplementation(() => {
      return {
        m: mMock,
      };
    });

    const some = new SomeClass();
    some.m('a', 'b');
    console.log('Calls to m: ', mMock.mock.calls);

### `mockFn.mockImplementationOnce(fn)`

Accepts a function that will be used as an implementation of the mock for one call to the mocked function. Can be chained so that multiple function calls produce different results.

    const myMockFn = jest
      .fn()
      .mockImplementationOnce((cb) => cb(null, true))
      .mockImplementationOnce((cb) => cb(null, false));

    myMockFn((err, val) => console.log(val)); // true

    myMockFn((err, val) => console.log(val)); // false

When the mocked function runs out of implementations defined with mockImplementationOnce, it will execute the default implementation set with `jest.fn(() => defaultValue)` or `.mockImplementation(() => defaultValue)` if they were called:

    const myMockFn = jest
      .fn(() => 'default')
      .mockImplementationOnce(() => 'first call')
      .mockImplementationOnce(() => 'second call');

    // 'first call', 'second call', 'default', 'default'
    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());

### `mockFn.mockName(value)`

Accepts a string to use in test result output in place of “jest.fn()” to indicate which mock function is being referenced.

For example:

    const mockFn = jest.fn().mockName('mockedFunction');
    // mockFn();
    expect(mockFn).toHaveBeenCalled();

Will result in this error:

        expect(mockedFunction).toHaveBeenCalled()

        Expected mock function to have been called.

### `mockFn.mockReturnThis()`

Just a simple sugar function for:

    jest.fn(function () {
      return this;
    });

### `mockFn.mockReturnValue(value)`

Accepts a value that will be returned whenever the mock function is called.

    const mock = jest.fn();
    mock.mockReturnValue(42);
    mock(); // 42
    mock.mockReturnValue(43);
    mock(); // 43

### `mockFn.mockReturnValueOnce(value)`

Accepts a value that will be returned for one call to the mock function. Can be chained so that successive calls to the mock function return different values. When there are no more `mockReturnValueOnce` values to use, calls will return a value specified by `mockReturnValue`.

    const myMockFn = jest
      .fn()
      .mockReturnValue('default')
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call');

    // 'first call', 'second call', 'default', 'default'
    console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());

### `mockFn.mockResolvedValue(value)`

Simple sugar function for:

    jest.fn().mockImplementation(() => Promise.resolve(value));

Useful to mock async functions in async tests:

    test('async test', async () => {
      const asyncMock = jest.fn().mockResolvedValue(43);

      await asyncMock(); // 43
    });

### `mockFn.mockResolvedValueOnce(value)`

Simple sugar function for:

    jest.fn().mockImplementationOnce(() => Promise.resolve(value));

Useful to resolve different values over multiple async calls:

    test('async test', async () => {
      const asyncMock = jest
        .fn()
        .mockResolvedValue('default')
        .mockResolvedValueOnce('first call')
        .mockResolvedValueOnce('second call');

      await asyncMock(); // first call
      await asyncMock(); // second call
      await asyncMock(); // default
      await asyncMock(); // default
    });

### `mockFn.mockRejectedValue(value)`

Simple sugar function for:

    jest.fn().mockImplementation(() => Promise.reject(value));

Useful to create async mock functions that will always reject:

    test('async test', async () => {
      const asyncMock = jest.fn().mockRejectedValue(new Error('Async error'));

      await asyncMock(); // throws "Async error"
    });

### `mockFn.mockRejectedValueOnce(value)`

Simple sugar function for:

    jest.fn().mockImplementationOnce(() => Promise.reject(value));

Example usage:

    test('async test', async () => {
      const asyncMock = jest
        .fn()
        .mockResolvedValueOnce('first call')
        .mockRejectedValueOnce(new Error('Async error'));

      await asyncMock(); // first call
      await asyncMock(); // throws "Async error"
    });
