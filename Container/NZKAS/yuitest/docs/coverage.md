YUI Test Coverage
-----------------

YUI Test Coverage is a code coverage tool for JavaScript. It is designed for use with the YUI Test JavaScript library to track the parts of your code that are being tested.

### What is Code Coverage?

Code coverage analysis is a process where code that is being tested is also tracked. Once all tests are complete, a code coverage report tells you which lines of code were executed during the test (some coverage tools also tell you which functions were called). In effect, you're seeing which parts of your code have been "covered" by the tests. You should always aim for a high code coverage rate (around 90%) to ensure that your code is being fully exercised.

### Installation

The YUI Test Coverage utility requires Java 5 (1.5) or higher. There are two JAR files:

-   `yuitest-coverage-x.y.z.jar` - used to instrument JavaScript code.
-   `yuitest-coverage-report-x.y.z.jar` - used to generate reports from the JSON code coverage output.

**IMPORTANT:** In order to use this tool, you'll need to use the following YUI Test versions:

-   YUI Test Standalone 1.0.0+
-   YUI Test for YUI 2.8.1+
-   YUI Test for YUI 3.1.1+

Other versions of YUI Test are not supported.

### General Usage

There are four steps to using YUI Test Coverage. These must be executed in order for coverage statistics to be generated.

#### Step 1 - Instrument Your Code

The first step is to instrument your JavaScript files using yuitest-coverage-x.y.z.jar. The coverage instrumenter uses a JavaScript parser to evaluate JavaScript code and insert code used to track coverage information. The use of a parser ensures that the instrumented code will still execute and not fundamentally change the structure of the original code.

There are two ways to instrument code: one file at a time or a directory at a time. To instrument a single file, use the following command:

    java -jar yuitest-coverage.jar -o <output_filename> <input_filename>

This command takes the `<input_filename>`, instruments it, and places the result in `<output_filename>`.

To instrument an entire directory, including subdirectories, use the following command:

    java -jar yuitest-coverage.jar -d -o <output_directory> <input_directory>

This command looks in `<input_directory>` and all of its subdirectories for files ending in `.js`. Those files are then instrumented and a mirror of the directory structure is created in `<output_directory>` with all of the instrumented JavaScript files.

#### Step 2 - Include Instrumented Code in Tests

In order to gather code coverage data, the instrumented code must be run through a series of tests. You can create YUI Test tests as normal, just be sure to include the instrumented JavaScript files instead of the originals. As the tests are executed, code coverage data is collected and stored by YUI Test.

#### Step 3 - Extract Code Coverage Data

When all tests have been concluded, you can retrieve the code coverage results in JSON format using:

-   **YUI Test Standalone:**  
    `YUITest.TestRunner.getCoverage(YUITest.CoverageFormat.JSON);`
-   **YUI Test for YUI 2.x:**  
    `YAHOO.tool.TestRunner.getCoverage(YAHOO.tool.CoverageFormat.JSON);`
-   **YUI Test for YUI 3.x:**  
    `Y.Test.Runner.getCoverage(Y.Coverage.Format.JSON);`

This JSON structure represents all of the coverage data for the tests. You can either manually take this data and save it to a file, or submit this data to a server.

#### Step 4 - Generate Coverage Report

With the JSON coverage data saved in a file, you can use the coverage report tool to generate a report, using the following command:

    java -jar yuitest-coverage-report.jar -o <output_directory> <input_filename>

This takes all of the coverage information from `<input_filename>` (oftentimes, the file contains data for more than one JavaScript file) and creates an HTML report in `<output_directory>`. You can then open `index.html` to view all of the results.

If you'd prefer to have LCOV formatted-files for import into other coverage tools, you can specify this using the `--format` option:

    java -jar yuitest-coverage-report.jar --format LCOV -o <output_directory> <input_filename>

This will output LCOV files into `<output_directory>`.

#### Note on Automation

If you're using the Selenium Driver, steps 3 and 4 are done automatically. The Selenium Driver looks for coverage data and, if available, extracts it and exports into the specified format.

### Command Line Interfaces

#### File Instrumenter

Used to instrument JavaScript files.

    Usage: java -jar yuitest-coverage-x.y.z.jar [options] [file|dir]

    Global Options
      -h, --help              Displays this information.
      --charset <charset>     Read the input file using <charset>.
      -d, --dir               Input and output (-o) are both directories.
      -v, --verbose           Display informational messages and warnings.
      -o <file|dir>           Place the output into <file|dir>. Defaults to stdout.

The options are:

-   The `--charset` option specifies the character set of the input files.
-   The `-d` or `--dir` option specifies that the input and output are directories rather than files.
-   The `-o` option specifies the output file or output directory for the instrumented code.
-   The `-v` or `--verbose` option specifies that additional debugging messages should be output to the console.

#### Coverage Report

Used to create reports from JSON coverage data.

    Usage: java -jar yuitest-coverage-report-x.y.z.jar [options] [file]

    Global Options
      -h, --help              Displays this information.
      --format <format>       Output reports in <format>. Defaults to HTML.
      -v, --verbose           Display informational messages and warnings.
      -o <file|dir>           Place the output into <file|dir>.

The options are:

-   The `--format` option specifies the coverage format to produce. Values are `LCOV`, `GCOV`, and `HTML` (default).
-   The `-o` option specifies the output directory for the report files.
-   The `-v` or `--verbose` option specifies that additional debugging messages should be output to the console.

### Troubleshooting

#### Unsupported Class Version Error

You may end up seeing an error such as:

    Exception in thread "main" java.lang.UnsupportedClassVersionError:
    com/yahoo/platform/yuitest/coverage/YUITestCoverage (Unsupported major.minor
    version 49.0)
        at java.lang.ClassLoader.defineClass0(Native Method)
        at java.lang.ClassLoader.defineClass(ClassLoader.java:537)
        at 
    java.security.SecureClassLoader.defineClass(SecureClassLoader.java:123)
        at java.net.URLClassLoader.defineClass(URLClassLoader.java:251)
        at java.net.URLClassLoader.access$100(URLClassLoader.java:55)
        at java.net.URLClassLoader$1.run(URLClassLoader.java:194)
        at java.security.AccessController.doPrivileged(Native Method)
        at java.net.URLClassLoader.findClass(URLClassLoader.java:187)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:289)
        at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:274)
        at java.lang.ClassLoader.loadClass(ClassLoader.java:235)
        at java.lang.ClassLoader.loadClassInternal(ClassLoader.java:302)

If you get this message, it means that you're using a version of Java older than 1.5. Upgrade your JDK/JRE to 1.5 and try again.
