CodeMirror: merge view demo

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">merge view</a>

merge view demo
---------------

The [`merge`](../doc/manual.html#addon_merge) addon provides an interface for displaying and merging diffs, either <span class="clicky" onclick="initUI(2)">two-way</span> or <span class="clicky" onclick="initUI(3)">three-way</span>. The left (or center) pane is editable, and the differences with the other pane(s) are <span class="clicky" onclick="toggleDifferences()">optionally</span> shown live as you edit it.

This addon depends on the [google-diff-match-patch](https://code.google.com/p/google-diff-match-patch/) library to compute the diffs.
