CodeMirror: Breakpoint demo
===========================

CodeMirror.fromTextArea(document.getElementById("code"), { lineNumbers: true, onGutterClick: function(cm, n) { var info = cm.lineInfo(n); if (info.markerText) cm.clearMarker(n); else cm.setMarker(n, "<span style="\&quot;color:" #900\"="">●</span> %N%"); } });

Click the line-number gutter to add or remove 'breakpoints'.
