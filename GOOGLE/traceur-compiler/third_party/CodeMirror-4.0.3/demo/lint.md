CodeMirror: Linter Demo

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">Linter</a>

Linter Demo
-----------

var widgets = \[\] function updateHints() { editor.operation(function(){ for (var i = 0; i &lt; widgets.length; ++i) editor.removeLineWidget(widgets\[i\]); widgets.length = 0; JSHINT(editor.getValue()); for (var i = 0; i &lt; JSHINT.errors.length; ++i) { var err = JSHINT.errors\[i\]; if (!err) continue; var msg = document.createElement(“div”); var icon = msg.appendChild(document.createElement(“span”)); icon.innerHTML = “!!”; icon.className = “lint-error-icon”; msg.appendChild(document.createTextNode(err.reason)); msg.className = “lint-error”; widgets.push(editor.addLineWidget(err.line - 1, msg, {coverGutter: false, noHScroll: true})); } }); var info = editor.getScrollInfo(); var after = editor.charCoords({line: editor.getCursor().line + 1, ch: 0}, “local”).top; if (info.top + info.clientHeight &lt; after) editor.scrollTo(null, after - info.clientHeight + 3); }

\[ { \_id: “post 1”, “author”: “Bob”, “content”: “…”, “page\_views”: 5 }, { “\_id”: “post 2”, “author”: “Bob”, “content”: “…”, “page\_views”: 9 }, { “\_id”: “post 3”, “author”: “Bob”, “content”: “…”, “page\_views”: 8 } \]

<span class="citation" data-cites="charset">@charset</span> “UTF-8”; <span class="citation" data-cites="import">@import</span> url(“booya.css”) print, screen; <span class="citation" data-cites="import">@import</span> “whatup.css” screen; <span class="citation" data-cites="import">@import</span> “wicked.css”; /\*Error\*/ <span class="citation" data-cites="charset">@charset</span> “UTF-8”; <span class="citation" data-cites="namespace">@namespace</span> “http://www.w3.org/1999/xhtml”; <span class="citation" data-cites="namespace">@namespace</span> svg “http://www.w3.org/2000/svg”; /\*Warning: empty ruleset \*/ .foo { } h1 { font-weight: bold; } /\*Warning: qualified heading \*/ .foo h1 { font-weight: bold; } /\*Warning: adjoining classes \*/ .foo.bar { zoom: 1; } li.inline { width: 100%; /\*Warning: 100% can be problematic\*/ } li.last { display: inline; padding-left: 3px !important; padding-right: 3px; border-right: 0px; } <span class="citation" data-cites="media">@media</span> print { li.inline { color: black; } } <span class="citation" data-cites="page">@page</span> { margin: 10%; counter-increment: page; <span class="citation" data-cites="top-center">@top-center</span> { font-family: sans-serif; font-weight: bold; font-size: 2em; content: counter(page); } }
