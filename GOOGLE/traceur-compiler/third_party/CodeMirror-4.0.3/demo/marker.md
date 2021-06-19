CodeMirror: Breakpoint Demo

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">Breakpoint</a>

Breakpoint Demo
---------------

var editor = CodeMirror.fromTextArea(document.getElementById(“code”), { lineNumbers: true, gutters: \[“CodeMirror-linenumbers”, “breakpoints”\] }); editor.on(“gutterClick”, function(cm, n) { var info = cm.lineInfo(n); cm.setGutterMarker(n, “breakpoints”, info.gutterMarkers ? null : makeMarker()); }); function makeMarker() { var marker = document.createElement(“div”); marker.style.color = “\#822”; marker.innerHTML = “●”; return marker; }

Click the line-number gutter to add or remove ‘breakpoints’.
