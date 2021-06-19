CodeMirror: Autocomplete Demo

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">Autocomplete</a>

Autocomplete Demo
-----------------

function getCompletions(token, context) { var found = \[\], start = token.string; function maybeAdd(str) { if (str.indexOf(start) == 0) found.push(str); } function gatherCompletions(obj) { if (typeof obj == “string”) forEach(stringProps, maybeAdd); else if (obj instanceof Array) forEach(arrayProps, maybeAdd); else if (obj instanceof Function) forEach(funcProps, maybeAdd); for (var name in obj) maybeAdd(name); } if (context) { // If this is a property, see if it belongs to some object we can // find in the current environment. var obj = context.pop(), base; if (obj.className == “js-variable”) base = window\[obj.string\]; else if (obj.className == “js-string”) base = "“; else if (obj.className ==”js-atom") base = 1; while (base != null && context.length) base = base\[context.pop().string\]; if (base != null) gatherCompletions(base); } else { // If not, just look in the window object and any local scope // (reading into JS mode internals to get at the local variables) for (var v = token.state.localVars; v; v = v.next) maybeAdd(v.name); gatherCompletions(window); forEach(keywords, maybeAdd); } return found; }

Press **ctrl-space** to activate autocompletion. Built on top of the [`show-hint`](../doc/manual.html#addon_show-hint) and [`javascript-hint`](../doc/manual.html#addon_javascript-hint) addons.
