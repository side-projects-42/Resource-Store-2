CodeMirror: Tern Demo

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">Tern</a>

Tern Demo
---------

// Use ctrl-space to complete something // Put the cursor in or after an expression, press ctrl-i to // find its type var foo = \[“array”, “of”, “strings”\]; var bar = foo.slice(0, 2).join("“).split(”a“)\[0\]; // Works for locally defined types too. function CTor() { this.size = 10; } CTor.prototype.hallo =”hallo“; var baz = new CTor; baz. // You can press ctrl-q when the cursor is on a variable name to // rename it. Try it with CTor… // When the cursor is in an argument list, the arguments are // shown below the editor. \[1\].reduce( ); // And a little more advanced code… (function(exports) { exports.randomElt = function(arr) { return arr\[Math.floor(arr.length \* Math.random())\]; }; exports.strList =”foo“.split(”"); exports.intList = exports.strList.map(function(s) { return s.charCodeAt(0); }); })(window.myMod = {}); var randomStr = myMod.randomElt(myMod.strList); var randomInt = myMod.randomElt(myMod.intList);

Demonstrates integration of [Tern](http://ternjs.net/) and CodeMirror. The following keys are bound:

Ctrl-Space  
Autocomplete

Ctrl-I  
Find type at cursor

Alt-.  
Jump to definition (Alt-, to jump back)

Ctrl-Q  
Rename variable

Ctrl-.  
Select all occurrences of a variable

Documentation is sparse for now. See the top of the [script](../addon/tern/tern.js) for a rough API overview.
