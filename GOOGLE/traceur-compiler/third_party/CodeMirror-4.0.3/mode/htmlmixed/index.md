CodeMirror: HTML mixed mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">HTML mixed</a>

HTML mixed mode
---------------

Mixed HTML Example
==================

The HTML mixed mode depends on the XML, JavaScript, and CSS modes.

It takes an optional mode configuration option, `scriptTypes`, which can be used to add custom behavior for specific `<script type="...">` tags. If given, it should hold an array of `{matches, mode}` objects, where `matches` is a string or regexp that matches the script type, and `mode` is either `null`, for script types that should stay in HTML mode, or a [mode spec](../../doc/manual.html#option_mode) corresponding to the mode that should be used for the script.

**MIME types defined:** `text/html` (redefined, only takes effect if you load this parser after the XML parser).
