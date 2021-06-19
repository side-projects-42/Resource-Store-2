CodeMirror: Autoresize Demo

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">Autoresize</a>

Autoresize Demo
---------------

.CodeMirror { border: 1px solid \#eee; height: auto; } .CodeMirror-scroll { overflow-y: hidden; overflow-x: auto; }

By setting a few CSS properties, and giving the [`viewportMargin`](../doc/manual.html#option_viewportMargin) a value of `Infinity`, CodeMirror can be made to automatically resize to fit its content.
