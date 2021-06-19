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

### **Autocomplete** makes coding tasks fun again

    var capitalDb = {
        Indonesia: 'Jakarta',
        Germany: 'Berlin',
        Norway: 'Oslo'
    };

    var constants = [3.1415926535, 2.7182818284];

    // Property completion: type "capitalDb." and press Ctrl+Space.


    // Array inferencing: type "constants[0]." and press Ctrl+Space
    // to list possible number conversion (e.g "toFixed").



    /**
     * Find the greatest common divisor of two numbers.
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    function gcd(a, b) {
        return (b === 0) ? a : gcd(b, a % b);
    }

    // Function signature: type "gc" and press Ctrl+Space


Autocompletion (press `Ctrl+Space`) is provided via a [type inferencer](https://github.com/scripted-editor/scripted/wiki/Architecture#wiki-Inferencing), part of _Content Assist_ module of [Scripted](https://github.com/scripted-editor/scripted/blob/master/README.md), hooked into the editor based on [Eclipse Orion](http://wiki.eclipse.org/Orion).

The type inferencer supports both **static code analysis** and JSDoc-style **type annotation**.

Esprima is created and mantained by [Ariya Hidayat](http://ariya.ofilabs.com/about).

- [@Esprima](http://twitter.com/esprima)
- [GitHub](https://github.com/ariya/esprima)
