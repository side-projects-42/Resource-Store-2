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

### **Syntax Validator** checks for mistakes and errors

    return 42; // Return statement not inside a function

    function f() {
      'use strict';

      // No more octal
      var x = 042;

      // Duplicate property
      var y = { x: 1, x: 2 };

      // With statement can't be used
      with (z) {}

    }

No result yet.

Unlike a typical code linter, this syntax validator does **not** care about coding styles and formatting.

If there is a syntax error, the sign ![](data:image/gif;base64,R0lGODlhEAAQANUAAP7bc//egf/ij/7ijv/jl/7kl//mnv7lnv/uwf7CTP7DTf7DT/7IW//Na/7Na//NbP7QdP/dmbltAIJNAF03AMSAJMSCLKqASa2DS6uBSquCSrGHTq6ETbCHT7WKUrKIUcCVXL+UXMOYX8GWXsSZYMiib6+ETbOIUcOXX86uhd3Muf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAACsALAAAAAAQABAAAAZowJVwSCwaj0ihikRSJYcoBEL0XKlGkcjImQQhJBREKFnyICoThKeE/AAW6AXgdPyUAgrLJBEo0YsbAQyDhAEdRRwDDw8OaA4NDQImRBgFEJdglxAEGEQZKQcHBqOkKRpFF6mqq1WtrUEAOw==) will be shown in the left-side gutter. Placing the mouse cursor over that sign will reveal the complete error description.

For a command-line usage, check `esvalidate` from [Esprima package](https://npmjs.org/package/esprima) (for Node.js). There is also a plugin for [Grunt](http://gruntjs.com/) called [grunt-jsvalidate](https://github.com/ariya/grunt-jsvalidate). Ant users can take a look at an exemplary [Ant task](https://github.com/ariya/ant-javascript-validate) for syntax validation.

Esprima is created and mantained by [Ariya Hidayat](http://ariya.ofilabs.com/about).

- [@Esprima](http://twitter.com/esprima)
- [GitHub](https://github.com/ariya/esprima)
