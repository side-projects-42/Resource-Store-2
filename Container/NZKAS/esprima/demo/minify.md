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

### **Minify and Obfuscate** to cover your tracks

    // Straightforward bubble sorting...

    function bubbleSort    (list) {
    var items = list.slice(0), swapped =false,
            p,   q;
       for ( p= 1;p <   items.length; ++p) {
           for (q=0; q < items.length -    p; ++q) {
            if (items[q + 1  ] < items[q]) {
                swapped =true;
            let temp = items[q];
             items[q] = items[ q+1]; items[q+1] = temp;
                }
          }
            if (!swapped)
            break;
        }
           return items;
    }

Ready.

Shorten variable names Remove unreachable branches Remove unused variable definitions Fold (literal) constants Eliminate dead code

Minification reduces the size of the code without affecting its execution. Further compression is achieved by compacting the syntax tree, shortening variable names, and removing other unnecessary clutter.

Minification is carried out using [escodegen](https://github.com/Constellation/escodegen) and [esmangle](https://github.com/Constellation/esmangle) projects.

Esprima is created and mantained by [Ariya Hidayat](http://ariya.ofilabs.com/about).

- [@Esprima](http://twitter.com/esprima)
- [GitHub](https://github.com/ariya/esprima)
