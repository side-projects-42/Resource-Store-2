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

### **Speed Comparison** keeps everything in perspective

Please wait...

**Warning:** Since each parser may have a different format for the syntax tree, the speed is not fully comparable (the cost of constructing different result is obviously varying). These tests exist only to ensure that Esprima parser is not ridiculously slow compare to other parsers.

More info on the parsers:  
[github.com/google/traceur-compiler](https://github.com/google/traceur-compiler)  
[github.com/mishoo/UglifyJS2](https://github.com/mishoo/UglifyJS2)  
[github.com/marijnh/acorn](https://github.com/marijnh/acorn)

Each parser produces the syntax tree with location marking in every syntax node.

**Note**: Esprima is not completely optimized for location tracking parsing yet. It still receives on-going, continuous performance tweaks.

Time measurement is carried out using [Benchmark.js](http://benchmarkjs.com)<span id="benchmarkjs-version"></span>.

Esprima is created and mantained by [Ariya Hidayat](http://ariya.ofilabs.com/about).

- [@Esprima](http://twitter.com/esprima)
- [GitHub](https://github.com/ariya/esprima)
