Android Native Tests
====================

These tests are designed to verify Android native features and other Android specific features.

Initial Setup
-------------

Before running the tests, they need to be set up.

1.  Copy cordova-x.y.z.jar into libs directory

To run from command line:

1.  Build by entering `ant debug install`
2.  Run tests by clicking on “CordovaTest” icon on device

To run from Eclipse:

1.  Import Android project into Eclipse
2.  Ensure Project properties “Java Build Path” includes the lib/cordova-x.y.z.jar
3.  Create run configuration if not already created
4.  Run tests

Automatic Runs
--------------

Once you have installed the test, you can launch and run the tests automatically with the below command:

    adb shell am instrument -w org.apache.cordova.test/android.test.InstrumentationTestRunner

(Optionally, you can also run in Eclipse)
