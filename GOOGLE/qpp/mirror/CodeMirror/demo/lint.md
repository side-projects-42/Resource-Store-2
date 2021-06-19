CodeMirror: Linter Demo
=======================

var widgets = \[\] function updateHints() { editor.operation(function(){ for (var i = 0; i &lt; widgets.length; ++i) editor.removeLineWidget(widgets\[i\]); widgets.length = 0; JSHINT(editor.getValue()); for (var i = 0; i &lt; JSHINT.errors.length; ++i) { var err = JSHINT.errors\[i\]; if (!err) continue; var msg = document.createElement(“div”); var icon = msg.appendChild(document.createElement(“span”)); icon.innerHTML = “!!”; icon.className = “lint-error-icon”; msg.appendChild(document.createTextNode(err.reason)); msg.className = “lint-error”; widgets.push(editor.addLineWidget(err.line - 1, msg, {coverGutter: false, noHScroll: true})); } }); var info = editor.getScrollInfo(); var after = editor.charCoords({line: editor.getCursor().line + 1, ch: 0}, “local”).top; if (info.top + info.clientHeight &lt; after) editor.scrollTo(null, after - info.clientHeight + 3); }

\[ { \_id: “post 1”, “author”: “Bob”, “content”: “…”, “page\_views”: 5 }, { “\_id”: “post 2”, “author”: “Bob”, “content”: “…”, “page\_views”: 9 }, { “\_id”: “post 3”, “author”: “Bob”, “content”: “…”, “page\_views”: 8 } \]
