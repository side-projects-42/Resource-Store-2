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

### **Source Rewrite** cleans up and reformats everything

        // Messy code with confusing and inconsistent indentations

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
           return items; alert("Finish");
    }

Ready.

Indent with: tab 2 spaces 4 spaces

String literal quotes: single (') double (") automatic

Rewriting is a two-step process: parse the code to get the syntax tree and then **regenerate** a new code from the syntax tree following the specified formatting.

**Note:** Only syntatically valid input is accepted.

Code regeneration is carried out using [escodegen project](https://github.com/Constellation/escodegen).

Esprima is created and mantained by [Ariya Hidayat](http://ariya.ofilabs.com/about).

- [@Esprima](http://twitter.com/esprima)
- [GitHub](https://github.com/ariya/esprima)
