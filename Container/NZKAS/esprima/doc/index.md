- # [Esprima](../index.html)

- - [Demo](../demo/index.html)
  - Static Analysis
  - [Online Parsing](../demo/parse.html)
  - [Syntax Validator](../demo/validate.html)
  - [Operator Precedence](../demo/precedence.html)
  - [Regex Collector](../demo/collector.html)
  - Dynamic Tracing
  - [Function Instrumentation](../demo/functiontrace.html)
  - Code Transformation
  - [Source Rewrite](../demo/rewrite.html)
  - [Minifiy & Obfuscate](../demo/minify.html)
  - Editing Tools
  - [Identifier Highlight](../demo/highlight.html)
  - [Rename Refactoring](../demo/rename.html)
  - [Autocomplete](../demo/autocomplete.html)
- [Project](#)

  - [Git Repository](http://github.com/ariya/esprima)
  - [Continuous Integration](https://travis-ci.org/ariya/esprima)
  - [Mailing List](http://groups.google.com/group/esprima)
  - [Issue Tracker](http://issues.esprima.org/)
  - - QA
  - [Unit Tests](../test/index.html)
  - [Benchmarks Suite](../test/benchmarks.html)
  - [Compatibility Tests](../test/compat.html)
  - [Speed Comparison](../test/compare.html)
  - [Module Loading](../test/module.html)
  - [Coverage Analysis](../test/coverage.html)

- [Documentation](../doc/index.html)

### **Documentation** on using Esprima

#### Basic Usage

Esprima runs on web browsers (IE 6+, Firefox 1+, Safari 3+, Chrome 1+, Konqueror 4.6+, Opera 8+) as well as [Rhino](http://www.mozilla.org/rhino) and [Node.js](http://nodejs.org).

##### In a web browser

Just include the source file:

    <script src="esprima.js"></script>

The module `esprima` will be available as part of the global window object:

    var syntax = esprima.parse('var answer = 42');

Since Esprima supports [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) (Asynchronous Module Definition), it can be loaded via a module loader such as [RequireJS](http://requirejs.org):

    require(['esprima'], function (parser) {
        // Do something with parser, e.g.
        var syntax = parser.parse('var answer = 42');
        console.log(JSON.stringify(syntax, null, 4));
    });

Since Esprima is available as a [Bower](http://twitter.github.com/bower/) component, it can be installed with:

    bower install esprima

Obviously, it can be used with [Yeoman](http://yeoman.io/packagemanager.html) as well:

    yeoman install esprima

##### With Node.js

Esprima is available as a Node.js [package](https://npmjs.org/package/esprima), install it using npm:

    npm install esprima

Load the module with `require` and use it:

    var esprima = require('esprima');
    console.log(JSON.stringify(esprima.parse('var answer = 42'), null, 4));

##### With Rhino

Load the source file from another script:

    load('/path/to/esprima.js');

The module `esprima` will be available as part of the global object:

    var syntax = esprima.parse('42');
    print(JSON.stringify(syntax, null, 2));

##### Parsing Interface

Basic usage:

    esprima.parse(code, options);

The output of the parser is the syntax tree formatted in [JSON](http://www.json.org), see the following [Syntax Tree Format](#ast) section.

Available options so far (by default, every option **false**):

<table><thead><tr class="header"><th>Option</th><th>When set to true</th></tr></thead><tbody><tr class="odd"><td>loc</td><td>Nodes have line and column-based location info</td></tr><tr class="even"><td>range</td><td>Nodes have an index-based location range (array)</td></tr><tr class="odd"><td>raw</td><td>Literals have extra property which stores the verbatim source</td></tr><tr class="even"><td>tokens</td><td>An extra array containing all found tokens</td></tr><tr class="odd"><td>comment</td><td>An extra array containing all line and block comments</td></tr><tr class="even"><td>tolerant</td><td>An extra array containing all errors found, attempts to continue parsing when an error is encountered</td></tr></tbody></table>

The easiest way to see the different output based on various option settings is to use the [online parser demo](../demo/parse.html).

**Note**: In version &gt; 1.0, `raw` is ignored since literals always include the verbatim source.

#### Examples

##### Detect Nested Ternary Conditionals

The script `detectnestedternary.js` in the `examples/` subdirectory is using Esprima to look for a ternary conditional, i.e. [operator ?:](http://en.wikipedia.org/wiki/%3F:), which is immediately followed (in one of its code paths) by another ternary conditional. The script can be invoked from the command-line with Node.js:

    node detectnestedternary.js /some/path

An example code fragment which will be flagged by this script as having a nested ternary conditional:

    var str = (age < 1) ? "baby" :
        (age < 5) ? "toddler" :
        (age < 18) ? "child": "adult";

which will yield the following report:

      Line 1 : Nested ternary for "age < 1"
      Line 2 : Nested ternary for "age < 5"

##### Find Possible Boolean Traps

The script `findbooleantrap.js` in the `examples/` subdirectory is using Esprima to detect some possible cases of Boolean trap, i.e. the use of Boolean literal which may lead to ambiguities and lack of readability. The script can be invoked from command-line with Node.js:

    node findbooleantrap.js /some/path

It will search for all files (recursively) in the given path, try to parse each file, and then look for signs of Boolean traps:

- Literal used with a non-setter function (assumption: setter starts with the "set" prefix):
- Literal used with a function whose name may have a double-negative interpretation:
- Two different literals in a single function call:
- Multiple literals in a single function invocation:
- Ambiguous Boolean literal as the last argument:

For some more info, read also the blog post on [Boolean trap](http://ariya.ofilabs.com/2011/08/hall-of-api-shame-boolean-trap.html).

#### Syntax Tree Format

The output of the parser is expected to be compatible with Mozilla SpiderMonkey [Parser API](https://developer.mozilla.org/en/SpiderMonkey/Parser_API). The best way to understand various different constructs is the online [parser demo](../demo/parse.html) which shows the syntax tree (formatted with JSON.stringify) corresponding to the typed code. The simplest example is as follows. If the following code is executed:

    esprima.parse('var answer = 42;');

then the return value will be (JSON formatted):

    {
        type: 'Program',
        body: [
            {
                type: 'VariableDeclaration',
                declarations: [
                    {
                        type: 'AssignmentExpression',
                        operator: =,
                        left: {
                            type: 'Identifier',
                            name: 'answer'
                        },
                        right: {
                            type: 'Literal',
                            value: 42
                        }
                    }
                ]
            }
        ]
    }

#### Contribution Guide

##### Guidelines

Contributors are mandated to follow the guides described in the following sections. Any contribution which do not conform to the guides may be rejected.

#### Laundry list

Before creating [pull requests](http://help.github.com/pull-requests/), make sure the following applies.

There is a corresponding issue. If there is no issue yet, [create one](http://code.google.com/p/esprima/issues/entry) in the issue tracker.

The commit log links the corresponding issue (usually as the last line).

No functional regression. Run all [unit tests](#unittests).

No coverage regression. Run the [code coverage analysis](#coverage).

Each commit must be granular. Big changes should be splitted into smaller commits.

Write understandable code. No need to be too terse (or even obfuscated).

[JSLint](http://jslint.com) does not complain.

A new feature must be accompanied with unit tests. No compromise.

A new feature should not cause performance loss. Verify with the [benchmark tests](#benchmark).

Performance improvement should be backed up by actual conclusive speed-up in the benchmark suite.

#### Coding style

Indentation is 4 spaces.

Open curly brace is at the end of the line.

String literal uses single quote (') and not double quote (").

#### Commit message

Bad:

        Fix a problem with Firefox.

The above commit is too short and useless in the long term.

Good:

        Add support for labeled statement.

        It is covered in ECMAScript Language Specification Section 12.12.
        This also fixes parsing MooTools and JSLint code.

        Running the benchmarks suite show negligible performance loss.

        http://code.google.com/p/esprima/issues/detail?id=10
        http://code.google.com/p/esprima/issues/detail?id=15
        http://code.google.com/p/esprima/issues/detail?id=16

**Important aspects**:

- The first line is the short description, useful for per-line commit view and thus keep it under 80 characters.
- The next paragraphs should provide more explanation (if needed).
- Describe the testing situation (new unit/benchmark test, change in performance, etc).
- Put the link to the issues for cross-ref.

#### Baseline syntax tree as the expected result

The test suite contains a collection of a pair of code and its syntax tree. To generate the syntax tree suitably formatted for the test fixture, use the included helper script `tools/generate-test-fixture.js` (with Node.js), e.g.:

    node tools/generate-test-fixture.js "var answer = 42"

The syntax tree will be printed out to the console. This can be used in the test fixture.

##### Test Workflow

Before running the tests, prepare the tools via:

    npm install

#### Unit tests

Browser-based unit testing is available by opening `test/index.html` in the source tree. The online version is [esprima.org/test](http://esprima.org/test).

Command-line testing using Node.js:

    npm test

#### Code coverage test

Note: you need to use Node.js 0.6 or later version.

Install istanbul:

    sudo npm install -g istanbul

Run it in Esprima source tree:

    istanbul cover test/runner.js

To get the detailed report, open `coverage/lcov-report/index.html` file and choose `esprima.js` from the list.

#### Benchmark tests

Available by opening `test/benchmarks.html` in the source tree. The online version is [esprima.org/test/benchmarks.html](http://esprima.org/test/benchmarks.html).

Note: Because the corpus is fetched via XML HTTP Request, the benchmarks test needs to be served via a web server and not local file.

It is important to run this with various browsers to cover different JavaScript engines.

Command-line benchmark using Node.js:

    node test/benchmark.js

Command-line benchmark using V8 shell:

    /path/to/v8/shell test/benchmark.js

#### Speed comparison tests

Available by opening `test/compare.html`. The online version is [esprima.org/test/compare.html](http://esprima.org/test/compare.html).

Note: Because the corpus is fetched via XML HTTP Request, the benchmarks test needs to be served via a web server and not local file.

**Warning**: Since each parser has a different format for the syntax tree, the speed is not fully comparable (the cost of constructing different result is not taken into account). These tests exist only to ensure that Esprima parser is not ridiculously slow, e.g. one magnitude slower compare to other parsers.

#### License

Copyright (C) 2012, 2011 Ariya Hidayat and other contributors.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

**Contents**

1.  [Basic Usage](#usage)
2.  [Examples](#examples)
3.  [Syntax Tree Format](#ast)
4.  [Contribution Guide](#contribution)
5.  [License](#license)

Esprima is created and mantained by [Ariya Hidayat](http://ariya.ofilabs.com/about).

- [@Esprima](http://twitter.com/esprima)
- [GitHub](https://github.com/ariya/esprima)
