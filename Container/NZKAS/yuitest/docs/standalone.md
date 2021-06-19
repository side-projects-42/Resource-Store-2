YUI Test Standalone Library
---------------------------

YUI Test is a testing framework for browser-based JavaScript solutions. Using YUI Test, you can easily add unit testing to your JavaScript solutions. While not a direct port from any specific xUnit framework, YUI Test does derive some characteristics from [nUnit](http://www.nunit.org/) and [JUnit](http://www.junit.org/).

YUI Test features:

-   Rapid creation of **test cases** through simple syntax.
-   Advanced **failure detection** for methods that throw errors.
-   Grouping of related test cases using **test suites**.
-   **Mock objects** for writing tests without external dependencies.
-   **Asynchronous tests** for testing events and Ajax communication.
-   **DOM Event simulation** in all A-grade browsers (through [Event](../event/)).

#### On This Page:

-   [Getting Started](#start)
-   [Using Test Cases](#testcases)
-   [Assertions](#assertions)
-   [Mock Objects](#mockobjects)
-   [Asynchronous Tests](#asynctests)
-   [Test Suites](#testsuites)
-   [Context Data](#context-data)
-   [Running Tests](#running-tests)
-   [Viewing Results](#viewing-results)
-   [Test Reporting](#test-reporting)
-   [YUI on Mobile Devices](#mobile)
-   [Support & Community](#support)
-   [Filing Bugs and Feature Requests](#filingbugs)

### Using Test Cases

The basis of YUI Test is the `YUITest.TestCase` object. A `TestCase` object is created by using the `YUITest.TestCase` constructor and passing in an object containing methods and other information with which to initialize the test case. Typically, the argument is an object literal, for example:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        //traditional test names
        testSomething : function () {
            //...
        },

        testSomethingElse : function () {
            //...
        }
    });

In this example, a simple test case is created named "TestCase Name". The `name` property is automatically applied to the test case so that it can be distinguished from other test cases that may be run during the same cycle. The two methods in this example are tests methods ( `testSomething()` and `testSomethingElse())`, which means that they are methods designed to test a specific piece of functional code. Test methods are indicatd by their name, either using the traditional manner of prepending the word `test` to the method name, or using a "friendly name," which is a sentence containing the word "should" that describes the test's purpose. For example:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        //friendly test names
        "Something should happen here" : function () {
            //...
        },

        "Something else should happen here" : function () {
            //...
        }
    });

Regardless of the naming convention used for test names, each should contain one or more [assertions](#assertions) that test data for validity.

#### setUp() and tearDown()

As each test method is called, it may be necessary to setup information before it's run and then potentially clean up that information after the test is run. The `setUp()` method is run before each and every test in the test case and likewise the `tearDown()` method is run after each test is run. These methods should be used in conjunction to create objects before a test is run and free up memory after the test is run. For example:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        //---------------------------------------------
        // Setup and tear down
        //---------------------------------------------
        
        setUp : function () {
            this.data = { name : "Nicholas", age : 28 };
        },

        tearDown : function () {
            delete this.data;
        },

        //---------------------------------------------
        // Tests
        //---------------------------------------------

        testName: function () {
            YUITest.Assert.areEqual("Nicholas", this.data.name, "Name should be 'Nicholas'");
        },

        testAge: function () {
            YUITest.Assert.areEqual(28, this.data.age, "Age should be 28");
        }    
    });

In this example, a `setUp()` method creates a data object with some basic information. Each property of the data object is checked with a different test, `testName()` tests the value of `data.name` while `testAge()` tests the value of `data.age`. Afterwards, the data object is deleted to free up the memory. Real-world implementations will have more complex tests, of course, but they should follow the basic pattern you see in the above code.

**Note:** Both `setUp()` and `tearDown()` are optional methods and are only used when defined.

#### init() and destroy()

Sometimes you may need to initialize some data before all test are run in a single test case. The `init()` method is run once before the tests start to run (also before the first call to `setUp()`. Likewise, the `destroy()` method is run just once after every test has been executed (and after the last `tearDown()` call). For example:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        //---------------------------------------------
        // init and destroy
        //---------------------------------------------
        
        init : function () {
            this.data = { name : "Nicholas", age : 28 };
        },

        destroy : function () {
            delete this.data;
        },

        //---------------------------------------------
        // Tests
        //---------------------------------------------

        testName: function () {
            YUITest.Assert.areEqual("Nicholas", this.data.name, "Name should be 'Nicholas'");
        },

        testAge: function () {
            YUITest.Assert.areEqual(28, this.data.age, "Age should be 28");
        }    
    });

In this example, a `init()` method creates a data object with some basic information. Each property of the data object is checked with a different test, `testName()` tests the value of `data.name` while `testAge()` tests the value of `data.age`. Afterwards, the data object is deleted to free up the memory using `destroy()`. Unlike the previous example using `setUp()` and `tearDown()`, both tests are running on the same object.

**Note:** Both `init()` and `destroy()` are optional methods and are only used when defined. You can use `init()` and `destroy()` together with `setUp()` and `tearDown()` for maximum amount of control over test data.

#### Ignoring Tests

There may be times when you want to ignore a test (perhaps the test is invalid for your purposes or the functionality is being re-engineered and so it shouldn't be tested at this time). To specify tests to ignore, use the `_should.ignore` property and name each test to skip as a property whose value is set to `true`:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        //---------------------------------------------
        // Special instructions
        //---------------------------------------------
        
        _should: {
            ignore: {
                testName: true //ignore this test
            }
        },

        //---------------------------------------------
        // Setup and tear down
        //---------------------------------------------

        setUp : function () {
            this.data = { name : "Nicholas", age : 28 };
        },
        
        tearDown : function () {
            delete this.data;
        },
      
        //---------------------------------------------
        // Tests
        //---------------------------------------------        

        testName: function () {
            YUITest.Assert.areEqual("Nicholas", this.data.name, "Name should be 'Nicholas'");
        },

        testAge: function () {
            YUITest.Assert.areEqual(28, this.data.age, "Age should be 28");
        }

    });

Here the `testName()` method will be ignored when the test case is run. This is accomplished by first defining the special `_should` property and within it, an `ignore` property. The ignore property is an object containing name-value pairs representing the names of the tests to ignore. By defining a property named "testName" and setting its value to `true`, it says that the method named "testName" should not be executed.

#### Intentional Errors

There may be a time that a test throws an error that was expected. For instance, perhaps you're testing a function that should throw an error if invalid data is passed in. A thrown error in this case can signify that the test has passed. To indicate that a test should throw an error, use the `_should.error` property. For example:

    function sortArray(array) {
        if (array instanceof Array){
            array.sort();
        } else {
            throw new TypeError("Expected an array");
        }
    }

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        //---------------------------------------------
        // Special instructions
        //---------------------------------------------
        
        _should: {
            error: {
                testSortArray: true //this test should throw an error
            }
        },

        //---------------------------------------------
        // Tests
        //---------------------------------------------        

        testSortArray: function () {
            sortArray(12);  //this should throw an error
        }

    });

In this example, a test case is created to test the standalone `sortArray()` function, which simply accepts an array and calls its `sort()` method. But if the argument is not an array, an error is thrown. When `testSortArray()` is called, it throws an error because a number is passed into `sortArray()`. Since the `_should.error` object has a property called "testSortArray" set to `true`, this indicates that `testSortArray()` should pass only if an error is thrown.

It is possible to be more specific about the error that should be thrown. By setting a property in `_should.error` to a string, you can specify that only a specific error message can be construed as a passed test. Here's an example:

    function sortArray(array) {
        if (array instanceof Array){
            array.sort();
        } else {
            throw new TypeError("Expected an array");
        }
    }

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        //---------------------------------------------
        // Special instructions
        //---------------------------------------------
        
        _should: {
            error: {
                testSortArray: "Expected an array"
            }
        },

        //---------------------------------------------
        // Tests
        //---------------------------------------------        

        testSortArray: function () {
            sortArray(12);  //this should throw an error
        }

    });

In this example, the `testSortArray()` test will only pass if the error that is thrown has a message of "Expected an array". If a different error occurs within the course of executing `testSortArray()`, then the test will fail due to an unexpected error.

If you're unsure of the message but know the type of error that will be thrown, you can specify the error constructor for the error you're expecting to occur:

    function sortArray(array) {
        if (array instanceof Array){
            array.sort();
        } else {
            throw new TypeError("Expected an array");
        }
    }

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        //---------------------------------------------
        // Special instructions
        //---------------------------------------------
        
        _should: {
            error: {
                testSortArray: TypeError
            }
        },

        //---------------------------------------------
        // Tests
        //---------------------------------------------        

        testSortArray: function () {
            sortArray(12);  //this should throw an error
        }

    });

In this example, the test will pass if a `TypeError` gets thrown; if any other type of error is thrown, the test will fail. A word of caution: `TypeError` is the most frequently thrown error by browsers, so specifying a `TypeError` as expected may give false passes.

To narrow the margin of error between checking for an error message and checking the error type, you can create a specific error object and set that in the `_should.error` property, such as:

    function sortArray(array) {
        if (array instanceof Array){
            array.sort();
        } else {
            throw new TypeError("Expected an array");
        }
    }

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        //---------------------------------------------
        // Special instructions
        //---------------------------------------------
        
        _should: {
            error: {
                testSortArray: new TypeError("Expected an array")
            }
        },

        //---------------------------------------------
        // Tests
        //---------------------------------------------        

        testSortArray: function () {
            sortArray(12);  //this should throw an error
        }

    });

Using this code, the `testSortArray()` method will only pass if a `TypeError` object is thrown with a message of "Expected an array"; if any other type of error occurs, then the test fails due to an unexpected error.

**Note:** If a test is marked as expecting an error, the test will fail unless that specific error is thrown. If the test completes without an error being thrown, then it fails.

### Assertions

Test methods use assertions to check the validity of a particular action or function. An assertion method tests (asserts) that a condition is valid; if not, it throws an error that causes the test to fail. If all assertions pass within a test method, it is said that the test has passed. The simplest assertion is `YUITest.Assert()`, which takes two arguments: a condition to test and a message. If the condition is *not* true, then an assertion error is thrown with the specified message. For example:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        testUsingAsserts : function () {                            
            YUITest.Assert(value == 5, "The value should be five.");
            YUITest.Assert(flag, "Flag should be true.");
        }
    });

In this example, `testUsingAsserts()` will fail if `value` is not equal to 5 of `flag` is not set to `true`. The `YUITest.Assert()` method may be all that you need, but there are advanced options available. The `YUITest.Assert` object contains several assertion methods that can be used to validate data.

Topics covered in this section include:

-   [Equality Assertions](#equality)
-   [Sameness Assertions](#sameness)
-   [Data Type Assertions](#datatypes)
-   [Special Value Assertions](#specialvalues)
-   [Forced Failures](#forcedfailures)

#### Equality Assertions

The simplest assertions are `areEqual()` and `areNotEqual()`. Both methods accept three arguments: the expected value, the actual value, and an optional failure message (a default one is generated if this argument is omitted). For example:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        testEqualityAsserts : function () {
            
            YUITest.Assert.areEqual(5, 5);     //passes
            YUITest.Assert.areEqual(5, "5");     //passes
            YUITest.Assert.areNotEqual(5, 6);  //passes
            YUITest.Assert.areEqual(5, 6, "Five was expected."); //fails
        }
    });

These methods use the double equals (`==`) operator to determine if two values are equal, so type coercion may occur. This means that the string `"5"` and the number `5` are considered equal because the double equals sign converts the number to a string before doing the comparison. If you don't want values to be converted for comparison purposes, use the sameness assertions instead.

#### Sameness Assertions

The sameness assertions are `areSame()` and `areNotSame()`, and these accept the same three arguments as the equality assertions: the expected value, the actual value, and an optional failure message. Unlike the equality assertions, these methods use the triple equals operator (`===`) for comparisions, assuring that no type coercion will occur. For example:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        testSamenessAsserts : function () {
            YUITest.Assert.areSame(5, 5);      //passes
            YUITest.Assert.areSame(5, "5");    //fails
            YUITest.Assert.areNotSame(5, 6);   //passes
            YUITest.Assert.areNotSame(5, "5"); //passes
            YUITest.Assert.areSame(5, 6, "Five was expected."); //fails
        }
    });

**Note:** Even though this example shows multiple assertions failing, a test will stop as soon as one assertion fails, causing all others to be skipped.

#### Data Type Assertions

There may be times when some data should be of a particular type. To aid in this case, there are several methods that test the data type of variables. Each of these methods accepts two arguments: the data to test and an optional failure message. The data type assertions are as follows:

-   `isArray()` - passes only if the value is an instance of `Array`.
-   `isBoolean()` - passes only if the value is a Boolean.
-   `isFunction()` - passes only if the value is a function.
-   `isNumber()` - passes only if the value is a number.
-   `isObject()` - passes only if the value is an object or a function.
-   `isString()` - passes only if the value is a string.

These are used as in the following example:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        testDataTypeAsserts : function () {            
            YUITest.Assert.isString("Hello world");     //passes
            YUITest.Assert.isNumber(1);                 //passes
            YUITest.Assert.isArray([]);                 //passes
            YUITest.Assert.isObject([]);                //passes
            YUITest.Assert.isFunction(function(){});    //passes
            YUITest.Assert.isBoolean(true);             //passes
            YUITest.Assert.isObject(function(){});      //passes

            YUITest.Assert.isNumber("1", "Value should be a number.");  //fails
            YUITest.Assert.isString(1, "Value should be a string.");    //fails
        }
    });

In addition to these specific data type assertions, there are two generic data type assertions.

The `isTypeOf()` method tests the string returned when the `typeof` operator is applied to a value. This method accepts three arguments: the type that the value should be ("string", "number", "boolean", "undefined", "object", or "function"), the value to test, and an optional failure message. For example:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        testTypeOf : function () {
            
            YUITest.Assert.isTypeOf("string", "Hello world");   //passes
            YUITest.Assert.isTypeOf("number", 1);               //passes
            YUITest.Assert.isTypeOf("boolean", true);           //passes
            YUITest.Assert.isTypeOf("number", 1.5);             //passes
            YUITest.Assert.isTypeOf("function", function(){});  //passes
            YUITest.Assert.isTypeOf("object", {});              //passes
            YUITest.Assert.isTypeOf("undefined", this.blah);    //passes
            
            YUITest.Assert.isTypeOf("number", "Hello world", "Value should be a number."); //fails
            
        }
    });

If you need to test object types instead of simple data types, you can also use the `isInstanceOf()` assertion, which accepts three arguments: the constructor function to test for, the value to test, and an optional failure message. This assertion uses the `instanceof` operator to determine if it should pass or fail. Example:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        testInstanceOf : function () {
            YUITest.Assert.isInstanceOf(Object, {});    //passes
            YUITest.Assert.isInstanceOf(Array, []);     //passes            
            YUITest.Assert.isInstanceOf(Object, []);     //passes            
            YUITest.Assert.isInstanceOf(Function, function(){});  //passes
            YUITest.Assert.isInstanceOf(Object, function(){});  //passes
            
            YUITest.Assert.isTypeOf(Array, {}, "Value should be an array."); //fails
            
        }
    });

#### Special Value Assertions

There are numerous special values in JavaScript that may occur in code. These include `true`, `false`, `NaN`, `null`, and `undefined`. There are a number of assertions designed to test for these values specifically:

-   `isFalse()` - passes if the value is `false`.
-   `isTrue()` - passes if the value is `true`.
-   `isNaN()` - passes if the value is `NaN`.
-   `isNotNaN()` - passes if the value is not `NaN`.
-   `isNull()` - passes if the value is `null`.
-   `isNotNull()` - passes if the value is not `null`.
-   `isUndefined()` - passes if the value is `undefined`.
-   `isNotUndefined()` - passes if the value is not `undefined`.

Each of these methods accepts two arguments: the value to test and an optional failure message. All of the assertions expect the exact value (no type cohersion occurs), so for example calling `isFalse(0)` will fail.

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        testSpecialValues : function () {                            
            YUITest.Assert.isFalse(false);      //passes
            YUITest.Assert.isTrue(true);        //passes            
            YUITest.Assert.isNaN(NaN);          //passes            
            YUITest.Assert.isNaN(5 / "5");      //passes
            YUITest.Assert.isNotNaN(5);         //passes
            YUITest.Assert.isNull(null);        //passes
            YUITest.Assert.isNotNull(undefined);    //passes
            YUITest.Assert.isUndefined(undefined);  //passes
            YUITest.Assert.isNotUndefined(null);    //passes
            
            YUITest.Assert.isUndefined({}, "Value should be undefined."); //fails
            
        }
    });

#### Forced Failures

While most tests fail as a result of an assertion, there may be times when you want to force a test to fail or create your own assertion method. To do this, use the `fail()` method to force a test method to fail immediately:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        testForceFail : function () {
            YUITest.Assert.fail();  //causes the test to fail
        }
    });

In this case, the `testForceFail()` method does nothing but force the method to fail. Optionally, you can pass in a message to `fail()` which will be displayed as the failure message:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        testForceFail : function () {
            YUITest.Assert.fail("I decided this should fail.");
        }
    });

When the failure of this method is reported, the message "I decided this should fail." will be reported.

### Mock Objects

Mock objects are used to eliminate test dependencies on other objects. In complex software systems, there's often multiple object that have dependence on one another to do their job. Perhaps part of your code relies on the `XMLHttpRequest` object to get more information; if you're running the test without a network connection, you can't really be sure if the test is failing because of your error or because the network connection is down. In reality, you just want to be sure that the correct data was passed to the `open()` and `send()` methods because you can assume that, after that point, the `XMLHttpRequest` object works as expected. This is the perfect case for using a mock object.

To create a mock object, use the `YUITest.Mock()` method to create a new object and then use `YUITest.Mock.expect()` to define expectations for that object. Expectations define which methods you're expecting to call, what the arguments should be, and what the expected result is. When you believe all of the appropriate methods have been called, you call `YUITest.Mock.verify()` on the mock object to check that everything happened as it should. For example:

    //code being tested
    function logToServer(message, xhr){
        xhr.open("get", "/log.php?msg=" + encodeURIComponent(message), true);
        xhr.send(null);
    }

    //test case for testing the above function
    var testCase = new YUITest.TestCase({

        name: "logToServer Tests",
        
        testPassingDataToXhr : function () {
            var mockXhr = YUITest.Mock();
            
            //I expect the open() method to be called with the given arguments
            YUITest.Mock.expect(mockXhr, {
                method: "open",
                args: ["get", "/log.php?msg=hi", true]                            
            });
            
            //I expect the send() method to be called with the given arguments
            YUITest.Mock.expect(mockXhr, {
                method: "send",
                args: [null]                            
            });
            
            //now call the function
            logToServer("hi", mockXhr);
            
            //verify the expectations were met
            YUITest.Mock.verify(mockXhr);                            
        }
    });

In this code, a mock `XMLHttpRequest` object is created to aid in testing. The mock object defines two expectations: that the `open()` method will be called with a given set of arguments and that the `send()` method will be called with a given set of arguments. This is done by using `YUITest.Mock.expect()` and passing in the mock object as well as some information about the expectation. The `method` property indicates the method name that will be called and the `args` property is an array of arguments that should be passed into the method. Each argument is compared against the actual arguments using the identically equal (`===`) operator, and if any of the arguments doesn't match, an assertion failure is thrown when the method is called (it "fails fast" to allow easier debugging).

The call to `YUITest.Mock.verify()` is the final step in making sure that all expectations have been met. It's at this stage that the mock object checks to see that all methods have been called. If `open()` was called but `send()` was not, then an assertion failure is thrown and the test fails. It's very important to call `YUITest.Mock.verify()` to test all expectations; failing to do so can lead to false passes when the test should actually fail.

In order to use mock objects, your code must be able to swap in and out objects that it uses. For example, a hardcoded reference to `XMLHttpRequest` in your code would prevent you from using a mock object in its place. It's sometimes necessary to refactor code in such a way that referenced objects are passed in rather than hardcoded so that mock objects can be used.

Note that you can use assertions and mock objects together; either will correctly indicate a test failure.

#### Special Argument Values

There may be times when you don't necessarily care about a specific argument's value. Since you must always specify the correct number of arguments being passed in, you still need to indicate that an argument is expected. There are several special values you can use as placeholders for real values. These values do a minimum amount of data validation:

-   `YUITest.Mock.Value.Any` - any value is valid regardless of type.
-   `YUITest.Mock.Value.String` - any string value is valid.
-   `YUITest.Mock.Value.Number` - any number value is valid.
-   `YUITest.Mock.Value.Boolean` - any Boolean value is valid.
-   `YUITest.Mock.Value.Object` - any non-`null` object value is valid.
-   `YUITest.Mock.Value.Function` - any function value is valid.

Each of these special values can be used in the `args` property of an expectation, such as:

    YUITest.Mock.expect(mockXhr, {
        method: "open",
        args: [YUITest.Mock.Value.String, "/log.php?msg=hi", YUITest.Mock.Value.Boolean]                            
    });                

The expecation here will allow any string value as the first argument and any Boolean value as the last argument. These special values should be used with care as they can let invalid values through if they are too general. The `YUITest.Mock.Value.Any` special value should be used only if you're absolutely sure that the argument doesn't matter.

#### Property Expectations

Since it's not possible to create property getters and setters in all browsers, creating a true cross-browser property expectation isn't feasible. YUI Test mock objects allow you to specify a property name and it's expected value when `YUITest.Mock.verify()` is called. This isn't a true property expectation but rather an expectation that the property will have a certain value at the end of the test. You can specify a property expectation like this:

    //expect that the status property will be set to 404
    YUITest.Mock.expect(mockXhr, {
        property: "status",
        value: 404                            
    });                

This example indicates that the `status` property of the mock object should be set to 404 before the test is completed. When `YUITest.Mock.verify()` is called on `mockXhr`, it will check the property and throw an assertion failure if it has not been set appropriately.

### Asynchronous Tests

YUI Test allows you to pause a currently running test and resume either after a set amount of time or at another designated time. The `TestCase` object has a method called `wait()`. When `wait()` is called, the test immediately exits (meaning that any code after that point will be ignored) and waits for a signal to resume the test.

A test may be resumed after a certain amount of time by passing in two arguments to `wait()`: a function to execute and the number of milliseconds to wait before executing the function (similar to using `setTimeout()`). The function passed in as the first argument will be executed as part of the current test (in the same scope) after the specified amount of time. For example:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        //---------------------------------------------
        // Setup and tear down
        //---------------------------------------------
        
        setUp : function () {
            this.data = { name : "Nicholas", age : 29 };
        },

        tearDown : function () {
            delete this.data;
        },

        //---------------------------------------------
        // Tests
        //---------------------------------------------

        testAsync: function () {
            YUITest.Assert.areEqual("Nicholas", this.data.name, "Name should be 'Nicholas'");
            
            //wait 1000 milliseconds and then run this function
            this.wait(function(){
                YUITest.Assert.areEqual(29, this.data.age, "Age should be 29");
            
            }, 1000);   
        }  
    });

In this code, the `testAsync()` function does one assertion, then waits 1000 milliseconds before performing another assertion. The function passed into `wait()` is still in the scope of the original test, so it has access to `this.data` just as the original part of the test does. Timed waits are helpful in situations when there are no events to indicate when the test should resume.

If you want a test to wait until a specific event occurs before resuming, the `wait()` method can be called with a timeout argument (the number of milliseconds to wait before considering the test a failure). At that point, testing will resume only when the `resume()` method is called. The `resume()` method accepts a single argument, which is a function to run when the test resumes. This function should specify additional assertions. If `resume()` isn't called before the timeout expires, then the test fails. The following tests to see if the `Anim` object has performed its animation completely:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        //---------------------------------------------
        // Tests
        //---------------------------------------------

        testAnimation : function (){
            
            //animate width to 400px
            var myAnim = new Y.Anim({
                node: '#testDiv', 
                to: { 
                    width: 400
                },
                duration: 3
            });
            
            var test = this; 
            
            //assign oncomplete handler
            myAnim.on("end", function(){
            
                //tell the TestRunner to resume
                test.resume(function(){
                
                    YUITest.Assert.areEqual(myAnim.get("node").get("offsetWidth"), 400, "Width of the DIV should be 400.");
                
                });
            
            });

            //start the animation
            myAnim.run();
            
            //wait until something happens
            this.wait(3100);
        
        }  
    });

In this example, an `Anim` object is used to animate the width of an element to 400 pixels. When the animation is complete, the `end` event is fired, so that is where the `resume()` method is called. The function passed into `resume()` simply tests that the final width of the element is indeed 400 pixels. Once the event handler is set up, the animation begins. In order to allow enough time for the animation to complete, the `wait()` method is called with a timeout of 3.1 seconds (just longer than the 3 seconds needed to complete the animation). At that point, testing stops until the animation completes and `resume()` is called or until 3100 milliseconds have passed.

### Test Suites

For large web applications, you'll probably have many test cases that should be run during a testing phase. A test suite helps to handle multiple test cases by grouping them together into functional units that can be run together. To create new test suite, use the `YUITest.TestSuite` constructor and pass in the name of the test suite. The name you pass in is for logging purposes and allows you to discern which `TestSuite` instance currently running. For example:

    //create the test suite
    var suite = new YUITest.TestSuite("TestSuite Name");

    //add test cases
    suite.add(new YUITest.TestCase({
        //...
    }));
    suite.add(new YUITest.TestCase({
        //...
    }));
    suite.add(new YUITest.TestCase({
        //...
    }));

Here, a test suite is created and three test cases are added to it using the `add()` method. The test suite now contains all of the information to run a series of tests.

It's also possible to add other multiple `TestSuite` instances together under a parent `TestSuite` using the same `add()` method:

    //create a test suite
    var suite = new YUITest.TestSuite("TestSuite Name");

    //add a test case
    suite.add(new YUITest.TestCase({
        //...
    });

    //create another suite
    var anotherSuite = new YUITest.TestSuite("test_suite_name");

    //add a test case
    anotherSuite.add(new YUITest.TestCase({
        //...
    });

    //add the second suite to the first
    suite.add(anotherSuite);

By grouping test suites together under a parent test suite you can more effectively manage testing of particular aspects of an application.

Test suites may also have `setUp()` and `tearDown()` methods. A test suite's `setUp()` method is called before the first test in the first test case is executed (prior to the test case's `setUp()` method); a test suite's `tearDown()` method executes after all tests in all test cases/suites have been executed (after the last test case's `tearDown()` method). To specify these methods, pass an object literal into the `YUITest.TestSuite` constructor:

    //create a test suite
    var suite = new YUITest.TestSuite({
        name : "TestSuite Name",
        
        setUp : function () {
            //test-suite-level setup 
        },
        
        tearDown: function () {
            //test-suite-level teardown
        }
    });

Test suite `setUp()` and `tearDown()` may be helpful in setting up global objects that are necessary for a multitude of tests and test cases.

### Context Data

Managing data amongst test suites and test cases can be difficult, which is why YUI Test has a concept called context data. When the test runner starts to execute, it creates an empty object. The object is passed in as an argument to every `init()`, `destroy()`, `setUp()`, `tearDown()`, and every test function. Because the same object is passed into each method (it "visits" each method), you have the opportunity to add, remove, or change data on the object that other tests might need. This is an advanced piece of functionality that may not be necessary for every group of tests, but allows powerful data sharing where necessary. Example:

    var testCase = new YUITest.TestCase({

        name: "TestCase Name",
        
        init: function(data){
            data.foo = "bar";
        },
        
        testValueOfFoo : function (data) {
            YUITest.Assert.areEqual("bar", data.foo);
        }
    });

Context data persists even once a test case is completed, so it can be passed from test suites to test cases and persist to other test cases. For example:

    var testSuite = new YUITest.TestSuite({
        name: "Test Suite Name",
        
        setUp: function(data){
            data.topLevel = 1;
        }
    });

    testSuite.add(new YUITest.TestCase({

        name: "First Test Case",
        
        init: function(data){
            data.foo = "bar";
        },
        
        testValueOfFoo : function (data) {
            YUITest.Assert.areEqual("bar", data.foo);   //from init
        },
        
        testValueOfTopLevel: function(data){
            YUITest.Assert.areEqual(1, data.topLevel);  //from test suite
        }
    });

    testSuite.add(new YUITest.TestCase({

        name: "Second Test Case",
        
        testValueOfFoo : function (data) {
            YUITest.Assert.areEqual("bar", data.foo);   //from init in First Test Case
        },
        
        testValueOfTopLevel: function(data){
            YUITest.Assert.areEqual(1, data.topLevel);  //from test suite
        }
    });

### Running Tests

In order to run test cases and test suites, use the `YUITest.TestRunner` object. This object is a singleton that simply runs all of the tests in test cases and suites, reporting back on passes and failures. To determine which test cases/suites will be run, add them to the `YUITest.TestRunner` using the `add()` method. Then, to run the tests, call the `run()` method:

    //add the test cases and suites
    YUITest.TestRunner.add(testCase);
    YUITest.TestRunner.add(testSuite);

    //run all tests
    YUITest.TestRunner.run();

If at some point you decide not to run the tests that have already been added to the `TestRunner`, they can be removed by calling `clear()`:

    YUITest.TestRunner.clear();

Making this call removes all test cases and test suites that were added using the `add()` method.

#### TestRunner Events

The `YUITest.TestRunner` provides results and information about the process by publishing several events. These events can occur at four different points of interest: at the test level, at the test case level, at the test suite level, and at the `YUITest.TestRunner` level. The data available for each event depends completely on the type of event and the level at which the event occurs.

#### Test-Level Events

Test-level events occur during the execution of specific test methods. There are three test-level events:

-   `YUITest.TestRunner.TEST_PASS_EVENT` - occurs when the test passes.
-   `YUITest.TestRunner.TEST_FAIL_EVENT` - occurs when the test fails.
-   `YUITest.TestRunner.TEST_IGNORE_EVENT` - occurs when a test is ignored.

For each of these events, the event data object has three properties:

-   `type` - indicates the type of event that occurred.
-   `testCase` - the test case that is currently being run.
-   `testName` - the name of the test that was just executed or ignored.

For `YUITest.TestRunner.TEST_FAIL_EVENT`, an `error` property containing the error object that caused the test to fail.

#### TestCase-Level Events

There are two events that occur at the test case level:

-   `YUITest.TestRunner.TEST_CASE_BEGIN_EVENT` - occurs when the test case is next to be executed but before the first test is run.
-   `YUITest.TestRunner.TEST_CASE_COMPLETE_EVENT` - occurs when all tests in the test case have been executed or ignored.

For these two events, the event data object has three properties:

-   `type` - indicates the type of event that occurred.
-   `testCase` - the test case that is currently being run.

For `TEST_CASE_COMPLETE_EVENT`, an additional property called `results` is included. The `results` property is an object containing the aggregated results for all tests in the test case (it does not include information about tests that were ignored). Each test that was run has an entry in the `result` object where the property name is the name of the test method and the value is an object with two properties: `result`, which is either "pass" or "fail", and `message`, which is a text description of the result (simply "Test passed" when a test passed or the error message when a test fails). Additionally, the `failed` property indicates the number of tests that failed in the test case, the `passed` property indicates the number of tests that passed, and the `total` property indicates the total number of tests executed. A typical `results` object looks like this:

    {
        failed: 1,
        passed: 1,
        ignored: 0,
        total: 2,
        type: "testcase",
        name: "Test Case 0",

        test0: {
            result: "pass",
            message: "Test passed",
            type: "test",
            name: "test0"
        },
        
        test1: {
            result: "fail",
            message: "Assertion failed",
            type: "test",
            name: "test1"
        }
    }

The `TEST_CASE_COMPLETE_EVENT` provides this information for transparency into the testing process.

#### TestSuite-Level Events

There are two events that occur at the test suite level:

-   `YUITest.TestRunner.TEST_SUITE_BEGIN_EVENT` - occurs when the test suite is next to be executed but before the first test is run.
-   `YUITest.TestRunner.TEST_SUITE_COMPLETE_EVENT` - occurs when all tests in all test cases in the test suite have been executed or ignored.

For these two events, the event data object has three properties:

-   `type` - indicates the type of event that occurred.
-   `testSuite` - the test suite that is currently being run.

The `TEST_SUITE_COMPLETE_EVENT` also has a `results` property, which contains aggregated results for all of the test cases (and other test suites) it contains. Each test case and test suite contained within the main suite has an entry in the `results` object, forming a hierarchical structure of data. A typical `results` object may look like this:

    {    
        failed: 2,
        passed: 2,
        ignored: 0,
        total: 4,
        type: "testsuite",
        name: "Test Suite 0",

        testCase0: {
            failed: 1,
            passed: 1,
            ignored: 0,
            total: 2,
            type: "testcase",
            name: "testCase0",

            test0: {
                result: "pass",
                message: "Test passed."
                type: "test",
                name: "test0"
            },            
            test1: {
                result: "fail",
                message: "Assertion failed.",
                type: "test",
                name: "test1"
            }
        },
        testCase1: {
            failed: 1,
            passed: 1,
            ignored: 0,
            total: 2,
            type: "testcase",
            name: "testCase1",

            test0: {
                result: "pass",
                message: "Test passed.",
                type: "test",
                name: "test0"
            },            
            test1: {
                result: "fail",
                message: "Assertion failed.",
                type: "test",
                name: "test1"
            }
        }
    }   

This example shows the results for a test suite with two test cases, but there may be test suites contained within test suites. In that case, the hierarchy is built out accordingly, for example:

    {
        failed: 3,
        passed: 3,
        ignored: 0,
        total: 6,
        type: "testsuite",
        name: "Test Suite 0",

        testCase0: {
            failed: 1,
            passed: 1,
            ignored: 0,
            total: 2,
            type: "testcase",
            name: "testCase0",

            test0: {
                result: "pass",
                message: "Test passed.",
                type: "test",
                name: "test0"                
            },            
            test1: {
                result: "fail",
                message: "Assertion failed.",
                type: "test",
                name: "test1"                
            }
        },
        
        testCase1: {
            failed: 1,
            passed: 1,
            ignored: 0,
            total: 2,
            type: "testcase",
            name: "testCase1",

            test0: {
                result: "pass",
                message: "Test passed.",
                type: "test",
                name: "test0"                
            },            
            test1: {
                result: "fail",
                message: "Assertion failed.",
                type: "test",
                name: "test1"                
            }
        },
        
        testSuite0:{
            failed: 1,
            passed: 1,
            ignored: 0,
            total: 2,
            type: "testsuite",
            name: "testSuite0",        
        
            testCase2: {
                failed: 1,
                passed: 1,
                ignored: 0,
                total: 2,
                type: "testcase",
                name: "testCase2",

                test0: {
                    result: "pass",
                    message: "Test passed.",
                    type: "test",
                    name: "test0"
                },   
         
                test1: {
                    result: "fail",
                    message: "Assertion failed.",
                    type: "test",
                    name: "test1"
                }
            }
        }
    } 

In this code, the test suite contained another test suite named "testSuite0", which is included in the results along with its test cases. At each level, the results are aggregated so that you can tell how many tests passed or failed within each test case or test suite.

#### TestRunner-Level Events

There are two events that occur at the `YUITest.TestRunner` level:

-   `YUITest.TestRunner.BEGIN_EVENT` - occurs when testing is about to begin but before any tests are run.
-   `YUITest.TestRunner.COMPLETE_EVENT` - occurs when all tests in all test cases and test suites have been executed or ignored.

The data object for these events contain a `type` property, indicating the type of event that occurred. `COMPLETE_EVENT` also includes a `results` property that is formatted the same as the data returned from `TEST_SUITE_COMPLETE_EVENT` and contains rollup information for all test cases and tests suites that were added to the `TestRunner`.

#### Subscribing to Events

You can subscribe to particular events by calling the `subscribe()` method. Your event handler code should expect a single object to be passed in as an argument. This object provides information about the event that just occured. Minimally, the object has a `type` property that tells you which type of event occurred. Example:

    function handleTestFail(data){
        alert("Test named '" + data.testName + "' failed with message: '" + data.error.message + "'.");
    }

    var TestRunner = YUITest.TestRunner;
    TestRunner.subscribe(TestRunner.TEST_FAIL_EVENT, handleTestFail);
    TestRunner.run();

In this code, the `handleTestFail()` function is assigned as an event handler for `TEST_FAIL_EVENT`. You can also use a single event handler to subscribe to any number of events, using the event data object's `type` property to determine what to do:

    function handleTestResult(data){
        var TestRunner = YUITest.TestRunner;
        
        switch(data.type) {
            case TestRunner.TEST_FAIL_EVENT:
                alert("Test named '" + data.testName + "' failed with message: '" + data.error.message + "'.");
                break;
            case TestRunner.TEST_PASS_EVENT:
                alert("Test named '" + data.testName + "' passed.");
                break;
            case TestRunner.TEST_IGNORE_EVENT:
                alert("Test named '" + data.testName + "' was ignored.");
                break;
        }
        
    }

    TestRunner.subscribe(TestRunner.TEST_FAIL_EVENT, handleTestResult);
    TestRunner.subscribe(TestRunner.TEST_IGNORE_EVENT, handleTestResult);
    TestRunner.subscribe(TestRunner.TEST_PASS_EVENT, handleTestResult);
    TestRunner.run();

### Viewing Results

There are two ways to view test results. The first is to output test results to the Console component. To do so, you need only create a new Console instance; the result results will be posted to the logger automatically:

    YUI({ logInclude: { TestRunner: true } }).use("console", function(Y){

        //tests go here
        
        //initialize the console
        var yconsole = new Y.Console({
            newestOnTop: false                   
        });
        yconsole.render('#log');
        
        //run the tests
        YUITest.TestRunner.run();
    });

If you are using a browser that supports the `console` object (Firefox with Firebug installed, Safari 3+, Internet Explorer 8+, Chrome), then you can direct the test results onto the console. To do so, make sure that you've specified your `YUI` instance to use the console when logging:

        YUITest.TestRunner.run();

You can also extract the test result data using the `YUITest.TestRunner.getResults()` method. By default, this method returns an object representing the results of the tests that were just run (the method returns `null` if called while tests are still running). You can optionally specify a format in which the results should be returned. There are four possible formats:

-   `YUITest.TestFormat.XML` - YUI Test XML (default)
-   `YUITest.TestFormat.JSON` - JSON
-   `YUITest.TestFormat.JUnitXML` - JUnit XML
-   `YUITest.TestFormat.TAP` - [TAP](http://testanything.org/)

You can pass any of these into `YUITest.TestRunner.getResults()` to get a string with the test result information properly formatted. For example:

    YUI({ useBrowserConsole: true }).use("test", function(Y){

        //tests go here

        //get object of results
        var resultsObject = YUITest.TestRunner.getResult();

        //get XML results
        var resultsXML = YUITest.TestRunner.getResult(YUITest.TestFormat.XML);

    });                

The XML format outputs results in the following format:


    <report name="YUI Test Results" passed="5" failed="3" ignored="1" total="5">
      <testsuite name="yuisuite" passed="5" failed="0" ignored="0" total="5">
        <testcase name="Y.Anim" passed="5" failed="0" ignored="0" total="5">
          <test name="test_getEl" result="pass" message="Test passed" /> 
          <test name="test_isAnimated" result="pass" message="Test passed" /> 
          <test name="test_stop" result="pass" message="Test passed" /> 
          <test name="test_onStart" result="pass" message="Test passed" /> 
          <test name="test_endValue" result="pass" message="Test passed" /> 
        </testcase>
      </testsuite>
    </report>

The JSON format requires that a JSON serializer be available. The native `JSON` utility is used when available. Otherwise, you'll need to point `YUITest.Util.JSON` at an implementation containing the `stringify() method`. If you're using YUI 2.x, you can point to `YAHOO.lang.JSON`; if you're using YUI 3.x, you can point to `Y.JSON`; otherwise, you can use the [json2.js](http://json.org/json2.js) library. Results are output in a format that follows the object/array hierarchy of the results object, such as:

    {
        "passed": 5,
        "failed": 0,
        "ignored": 0,
        "total": 0,
        "type": "report",
        "name": "YUI Test Results",
        
        "yuisuite":{
            "passed": 5,
            "failed": 0,
            "ignored": 0,
            "total": 0,
            "type": "testsuite",
            "name": "yuisuite",
            
            "Y.Anim":{
                "passed": 5,
                "failed": 0,
                "ignored": 0,
                "total": 0,
                "type":"testcase",
                "name":"Y.Anim",
                
                "test_getEl":{
                    "result":"pass",
                    "message":"Test passed.",
                    "type":"test",
                    "name":"test_getEl"            
                },
                "test_isAnimated":{
                    "result":"pass",
                    "message":"Test passed.",
                    "type":"test",
                    "name":"test_isAnimated"            
                },
                "test_stop":{
                    "result":"pass",
                    "message":"Test passed.",
                    "type":"test",
                    "name":"test_stop"            
                },
                "test_onStart":{
                    "result":"pass",
                    "message":"Test passed.",
                    "type":"test",
                    "name":"test_onStart"            
                },
                "test_endValue":{
                    "result":"pass",
                    "message":"Test passed.",
                    "type":"test",
                    "name":"test_endValue"            
                }        
            }
        }
    }

The JUnit XML format outputs results in the following format:

    <?xml version="1.0" encoding="UTF-8" ?>
    <testsuites>
        <testsuite name="Y.Anim" failures="0" total="5" time="0.0060">
            <testcase name="test_getEl" time="0.0"></testcase>
            <testcase name="test_isAnimated" time="0.0010"></testcase>
            <testcase name="test_stop" time="0.0010"></testcase>
            <testcase name="test_onStart" time="0.0010"></testcase>
            <testcase name="test_endValue" time="0.0010"></testcase>
        </testsuite>  
    </testsuites>

Note that there isn't a direct mapping between YUI Test test suites and JUnit test suites, so some of the hierarchical information is lost.

The TAP format outputs results in the following format:

    1..5
    #Begin report YUI Test Results (0 failed of 5)
    #Begin testcase Y.Anim (0 failed of 5)
    ok 1 - testGetServiceFromUntrustedModule
    ok 2 - testGetServiceFromTrustedModule
    ok 3 - testGetServiceFromService
    ok 4 - testGetServiceMultipleTimesFromService
    ok 5 - testGetServiceMultipleTimesFromUntrustedModule
    #End testcase Y.Anim
    #End report YUI Test Results

The XML, JSON, and JUnit XML formats produce a string with no extra white space (white space and indentation shown here is for readability purposes only).

### Code Coverage Data

If you've instrumented the JavaScript to test using [YUI Test Coverage](coverage.html), then you can retrieve the coverage information by using the `YUITest.TestRunner.getCoverage()` method. By default, this method returns an object representing the coverage data of the tests that were just run (the method returns `null` if called while tests are still running). You can optionally specify a format in which the results should be returned. There are four possible formats:

-   `YUITest.CoverageFormat.JSON` - JSON
-   `YUITest.CoverageFormat.XdebugJSON` - JSON formatted Xdebug

You can pass any of these into `YUITest.TestRunner.getCoverage()` to get a string with the test result information properly formatted. As mentioned earlier, you need to ensure that `YUITest.Util.JSON` is pointing to a valid `JSON` object.

### Test Reporting

When all tests have been completed and the results object has been returned, you can post those results to a server using a `YUITest.Reporter` object. A `YUITest.Reporter` object creates a form that is POSTed to a specific URL with the following fields:

-   `results` - the serialized results object.
-   `useragent` - the user-agent string of the browser.
-   `timestamp` - the date and time that the report was sent.

You can create a new `YUITest.Reporter` object by passing in the URL to report to. The results object can then be passed into the `report()` method to submit the results:

    var reporter = new YUITest.Reporter("http://www.yourserver.com/path/to/target");
    reporter.report(results);

The form submission happens behind-the-scenes and will not cause your page to navigate away. This operation is one direction; the reporter does not get any content back from the server.

There are four predefined serialization formats for results objects:

-   `YUITest.TestFormat.XML` (default)
-   `YUITest.TestFormat.JSON`
-   `YUITest.TestFormat.JUnitXML`
-   `YUITest.TestFormat.TAP`

The format in which to submit the results can be specified in the `YUITest.Reporter` constructor by passing in the appropriate `YUITest.TestFormat` value (when no argument is specified, `YUITest.TestFormat.XML` is used:

    var reporter = new YUITest.Reporter("http://www.yourserver.com/path/to/target", YUITest.TestFormat.JSON);

#### Custom Fields

You can optionally specify additional fields to be sent with the results report by using the `addField()` method. This method accepts two arguments: a name and a value. Any field added using `addField()` is POSTed along with the default fields back to the server:

    reporter.addField("color", "blue");
    reporter.addField("message", "Hello world!");

Note that if you specify a field name that is the same as a default field, the custom field is ignored in favor of the default field.
