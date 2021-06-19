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

### **Rename Refactoring** to assist search and replace

    // Array shuffling code from Underscore.js.

    _.shuffle = function(obj) {
        var shuffled = [], rand;
        each(obj, function(value, index, list) {
            rand = Math.floor(Math.random() * (index + 1));
            shuffled[index] = shuffled[rand];
            shuffled[rand] = value;
        });
        return shuffled;
    };

Ready.

When the cursor is placed on a variable or a function, changing the name will also rename all other **identical references**.

Identifier declaration is indicated by the sign ![](data:image/gif;base64,R0lGODlhEAAQANUAAP7bc//egf/ij/7ijv/jl/7kl//mnv7lnv/uwf7CTP7DTf7DT/7IW//Na/7Na//NbP7QdP/dmbltAIJNAF03AMSAJMSCLKqASa2DS6uBSquCSrGHTq6ETbCHT7WKUrKIUcCVXL+UXMOYX8GWXsSZYMiib6+ETbOIUcOXX86uhd3Muf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAACsALAAAAAAQABAAAAZowJVwSCwaj0ihikRSJYcoBEL0XKlGkcjImQQhJBREKFnyICoThKeE/AAW6AXgdPyUAgrLJBEo0YsbAQyDhAEdRRwDDw8OaA4NDQImRBgFEJdglxAEGEQZKQcHBqOkKRpFF6mqq1WtrUEAOw==) on the left-side gutter.

For scope analysis and reference lookup, two libraries [escope](https://github.com/Constellation/escope) and [esrefactor](https://github.com/ariya/esrefactor) are being used.

Esprima is created and mantained by [Ariya Hidayat](http://ariya.ofilabs.com/about).

- [@Esprima](http://twitter.com/esprima)
- [GitHub](https://github.com/ariya/esprima)
