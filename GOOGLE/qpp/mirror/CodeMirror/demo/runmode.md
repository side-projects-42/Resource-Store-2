CodeMirror: Mode Runner Demo
============================

Enter your xml here and press the button below to display it as highlighted by the CodeMirror XML mode

Highlight!

Running a CodeMirror mode outside of the editor. The `CodeMirror.runMode` function, defined in `lib/runmode.js` takes the following arguments:

`text (string)`  
The document to run through the highlighter.

`mode (mode spec)`  
The mode to use (must be loaded as normal).

`output (function or DOM node)`  
If this is a function, it will be called for each token with two arguments, the token’s text and the token’s style class (may be `null` for unstyled tokens). If it is a DOM node, the tokens will be converted to `span` elements as in an editor, and inserted into the node (through `innerHTML`).
