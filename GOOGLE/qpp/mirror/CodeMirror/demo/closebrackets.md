CodeMirror: Closebrackets Demo
==============================

Type a bracket like ‘\[’, ‘(’, ‘{’, ‘"’, or ’’’ and [the addon](../doc/manual.html#addon_closebrackets) will auto-close it. Type the closing variant when directly in front of a matching character and it will overwrite it.

If you backspace over a starting bracket while inside empty brackets (e.g. `{|}`), it will delete the closing bracket for you.

(function() { var DEFAULT\_BRACKETS = “()\[\]{}’’\\”\\"“; CodeMirror.defineOption(”autoCloseBrackets“, false, function(cm, val, old) { var wasOn = old && old != CodeMirror.Init; if (val && !wasOn) cm.addKeyMap(buildKeymap(typeof val ==”string" ? val : DEFAULT\_BRACKETS)); else if (!val && wasOn) cm.removeKeyMap(“autoCloseBrackets”); }); function buildKeymap(pairs) { var map = {name : “autoCloseBrackets”}; for (var i = 0; i &lt; pairs.length; i += 2) (function(left, right) { function maybeOverwrite(cm) { var cur = cm.getCursor(), ahead = cm.getRange(cur, CodeMirror.Pos(cur.line, cur.ch + 1)); if (ahead != right) return CodeMirror.Pass; else cm.execCommand(“goCharRight”); } map\[“’” + left + “‘“\] = function(cm) { if (left == right && maybeOverwrite(cm) != CodeMirror.Pass) return; var cur = cm.getCursor(), ahead = CodeMirror.Pos(cur.line, cur.ch + 1); cm.replaceSelection(left + right, {head: ahead, anchor: ahead}); }; if (left != right) map\[”’” + right + “’”\] = maybeOverwrite; })(pairs.charAt(i), pairs.charAt(i + 1)); return map; } })();
