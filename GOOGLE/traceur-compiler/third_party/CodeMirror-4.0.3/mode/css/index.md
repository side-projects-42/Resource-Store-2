CodeMirror: CSS mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">CSS</a>

CSS mode
--------

/\* Some example CSS \*/ <span class="citation" data-cites="import">@import</span> url(“something.css”); body { margin: 0; padding: 3em 6em; font-family: tahoma, arial, sans-serif; color: \#000; } \#navigation a { font-weight: bold; text-decoration: none !important; } h1 { font-size: 2.5em; } h2 { font-size: 1.7em; } h1:before, h2:before { content: “::”; } code { font-family: courier, monospace; font-size: 80%; color: \#418A8A; }

**MIME types defined:** `text/css`, `text/x-scss` ([demo](scss.html)), `text/x-less` ([demo](less.html)).

**Parsing/Highlighting Tests:** [normal](../../test/index.html#css_*), [verbose](../../test/index.html#verbose,css_*).
