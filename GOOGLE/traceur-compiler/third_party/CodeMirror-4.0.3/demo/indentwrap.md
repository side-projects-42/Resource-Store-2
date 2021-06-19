CodeMirror: Indented wrapped line demo

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">Indented wrapped line</a>

Indented wrapped line demo
--------------------------

Overview
--------

CodeMirror is a code-editor component that can be embedded in Web pages. The core library provides *only* the editor component, no accompanying buttons, auto-completion, or other IDE functionality. It does provide a rich API on top of which such functionality can be straightforwardly implemented. See the [add-ons](#addons) included in the distribution, and the [CodeMirror UI](https://github.com/jagthedrummer/codemirror-ui) project, for reusable implementations of extra features.

CodeMirror works with language-specific modes. Modes are JavaScript programs that help color (and optionally indent) text written in a given language. The distribution comes with a number of modes (see the [`mode/`](../mode/) directory), and it isn’t hard to [write new ones](#modeapi) for other languages.

This page uses a hack on top of the `"renderLine"` event to make wrapped text line up with the base indentation of the line.
