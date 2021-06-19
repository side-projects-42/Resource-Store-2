CodeMirror: Autoresize demo
===========================

.CodeMirror { border: 1px solid \#eee; height: auto; } .CodeMirror-scroll { overflow-y: hidden; overflow-x: auto; }

By setting a few CSS properties, and giving the [`viewportMargin`](../doc/manual.html#option_viewportMargin) a value of `Infinity`, CodeMirror can be made to automatically resize to fit its content.
