CodeMirror: Any Word Completion Demo

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">Any Word Completion</a>

Any Word Completion Demo
------------------------

(function() { “use strict”; var WORD = /\[\\w$\]+/g, RANGE = 500; CodeMirror.registerHelper(“hint”, “anyword”, function(editor, options) { var word = options && options.word || WORD; var range = options && options.range || RANGE; var cur = editor.getCursor(), curLine = editor.getLine(cur.line); var start = cur.ch, end = start; while (end &lt; curLine.length && word.test(curLine.charAt(end))) ++end; while (start && word.test(curLine.charAt(start - 1))) –start; var curWord = start != end && curLine.slice(start, end); var list = \[\], seen = {}; function scan(dir) { var line = cur.line, end = Math.min(Math.max(line + dir \* range, editor.firstLine()), editor.lastLine()) + dir; for (; line != end; line += dir) { var text = editor.getLine(line), m; word.lastIndex = 0; while (m = word.exec(text)) { if ((!curWord || m\[0\].indexOf(curWord) == 0) && !seen.hasOwnProperty(m\[0\])) { seen\[m\[0\]\] = true; list.push(m\[0\]); } } } } scan(-1); scan(1); return {list: list, from: CodeMirror.Pos(cur.line, start), to: CodeMirror.Pos(cur.line, end)}; }); })();

Press **ctrl-space** to activate autocompletion. The completion uses the [anyword-hint.js](../doc/manual.html#addon_anyword-hint) module, which simply looks at nearby words in the buffer and completes to those.
