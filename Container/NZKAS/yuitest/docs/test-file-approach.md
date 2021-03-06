Test File Approach
------------------

YUI Test was created with the goal of allowing you to write tests in any way you want, allowing you to mimic other testing environments or tools. Even so, there is a general format for test files that works best in YUI Test.

The best way to organize your tests are in standalone JavaScript files. It's generally a good idea to have one test JavaScript file associated with each source JavaScript file. For example, the source file foo.js might have an associated foo\_test.js (you might also have the tests in a separate directory).

Each test file should be setup with the following:

1.  Creation of test suites and/or test cases for the source.
2.  Add the test suites and/or test cases to `YUITest.TestRunner`.

It's also usually a good idea to wrap the contents of this file in an instantly invoked function to prevent leaking into the global scope. Here's a good general format for a test file:

    (function(){
        
        //define local version of YUITest based on what's available.
        var YUITest         = this.YUITest || require("yuitest");
        
        var testCase = new YUITest.TestCase({
        
            //test case details

        });
        
        YUITest.TestRunner.add(testCase);
    })();

The second line is used to allow your tests to be run either in a web browser or in Node.js.
