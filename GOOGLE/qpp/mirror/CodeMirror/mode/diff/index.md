CodeMirror: Diff mode
=====================

diff –git a/index.html b/index.html index c1d9156..7764744 100644 — a/index.html +++ b/index.html @@ -95,7 +95,8 @@ StringStream.prototype = {

diff –git a/lib/codemirror.js b/lib/codemirror.js index 04646a9..9a39cc7 100644 — a/lib/codemirror.js +++ b/lib/codemirror.js @@ -399,10 +399,16 @@ var CodeMirror = (function() { } function onMouseDown(e) { - var start = posFromMouse(e), last = start; + var start = posFromMouse(e), last = start, target = e.target(); if (!start) return; setCursor(start.line, start.ch, false); if (e.button() != 1) return; + if (target.parentNode == gutter) { + if (options.onGutterClick) + options.onGutterClick(indexOf(gutter.childNodes, target) + showingFrom); + return; + } + if (!focused) onFocus(); e.stop(); @@ -808,7 +814,7 @@ var CodeMirror = (function() { for (var i = showingFrom; i &lt; showingTo; ++i) { var marker = lines\[i\].gutterMarker; if (marker) html.push(’

’ + htmlEscape(marker.text) + ’

’); - else html.push("

" + (options.lineNumbers ? i + 1 : “\\u00a0”) + "

“); + else html.push(”

" + (options.lineNumbers ? i + options.firstLineNumber : “\\u00a0”) + "

“); } gutter.style.display =”none“; // TODO test whether this actually helps gutter.innerHTML = html.join(”“); @@ -1371,10 +1377,8 @@ var CodeMirror = (function() { if (option ==”parser“) setParser(value); else if (option ===”lineNumbers“) setLineNumbers(value); else if (option ===”gutter“) setGutter(value); - else if (option ===”readOnly“) options.readOnly = value; - else if (option ===”indentUnit“) {options.indentUnit = indentUnit = value; setParser(options.parser);} - else if (/^(?:enterMode|tabMode|indentWithTabs|readOnly|autoMatchBrackets|undoDepth)$/.test(option)) options\[option\] = value; - else throw new Error(”Can’t set option " + option); + else if (option === “indentUnit”) {options.indentUnit = value; setParser(options.parser);} + else options\[option\] = value; }, cursorCoords: cursorCoords, undo: operation(undo), @@ -1402,7 +1406,8 @@ var CodeMirror = (function() { replaceRange: operation(replaceRange), operation: function(f){return operation(f)();}, - refresh: function(){updateDisplay(\[{from: 0, to: lines.length}\]);} + refresh: function(){updateDisplay(\[{from: 0, to: lines.length}\]);}, + getInputField: function(){return input;} }; return instance; } @@ -1420,6 +1425,7 @@ var CodeMirror = (function() { readOnly: false, onChange: null, onCursorActivity: null, + onGutterClick: null, autoMatchBrackets: false, workTime: 200, workDelay: 300,

**MIME types defined:** `text/x-diff`.
