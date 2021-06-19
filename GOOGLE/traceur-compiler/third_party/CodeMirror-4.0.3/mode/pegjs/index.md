[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">PEG.js Mode</a>

PEG.js Mode
-----------

/\* \* Classic example grammar, which recognizes simple arithmetic expressions like \* “2\*(3+4)”. The parser generated from this grammar then computes their value. \*/ start = additive additive = left:multiplicative “+” right:additive { return left + right; } / multiplicative multiplicative = left:primary “\*” right:multiplicative { return left \* right; } / primary primary = integer / “(” additive:additive “)” { return additive; } integer “integer” = digits:\[0-9\]+ { return parseInt(digits.join(""), 10); } letter = \[a-z\]+

### The PEG.js Mode

Created by Forbes Lindesay.
