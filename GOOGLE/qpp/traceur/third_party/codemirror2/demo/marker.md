CodeMirror: Breakpoint demo
===========================

CodeMirror.fromTextArea(document.getElementById(“code”), { lineNumbers: true, onGutterClick: function(cm, n) { var info = cm.lineInfo(n); if (info.markerText) cm.clearMarker(n); else cm.setMarker(n, “&lt;span style=”&quot;color:" \#900"="“&gt;● %N%”); } });

Click the line-number gutter to add or remove ‘breakpoints’.
