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

### **Function Instrumentation** traces and reveals what is being called

    Array.prototype.swap = function (i, j) {
        var k = this[i]; this[i] = this[j]; this[j] = k;
    }

    function bubbleSort(list) {
        var items = list.slice(0), swapped = false, p, q;
        for (p = 1; p < items.length; ++p) {
            for (q = 0; q < items.length - p; ++q) {
                if (items[q + 1] < items[q]) {
                    items.swap(q, q + 1);
                    swapped =true;
                }
            }
            if (!swapped) break;
        }
        return items;
    }

    var N = 100, data = []; while (N > 0) data.push(N--);
    bubbleSort(data);

Ready.

Pressing **Run** button will execute (using `eval`) the code with some extra instrumentation injected to track the execution. Placing the mouse cursor on the indicator next to every function will show the number of calls for that particular function.

Warning: **Never run untrusted code!**

Esprima is created and mantained by [Ariya Hidayat](http://ariya.ofilabs.com/about).

- [@Esprima](http://twitter.com/esprima)
- [GitHub](https://github.com/ariya/esprima)
