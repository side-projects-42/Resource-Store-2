CodeMirror: Breakpoint demo
===========================

var editor = CodeMirror.fromTextArea(document.getElementById(“code”), { lineNumbers: true, gutters: \[“CodeMirror-linenumbers”, “breakpoints”\] }); editor.on(“gutterClick”, function(cm, n) { var info = cm.lineInfo(n); cm.setGutterMarker(n, “breakpoints”, info.markers ? null : makeMarker()); }); function makeMarker() { var marker = document.createElement(“div”); marker.innerHTML = “●”; marker.className = “breakpoint”; return marker; }

Click the line-number gutter to add or remove ‘breakpoints’.
