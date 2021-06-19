CodeMirror: Search/Replace Demo

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">Search/Replace</a>

Search/Replace Demo
-------------------

`indentWithTabs: boolean`  
Whether, when indenting, the first N\*`tabSize` spaces should be replaced by N tabs. Default is false.

`electricChars: boolean`  
Configures whether the editor should re-indent the current line when a character is typed that might change its proper indentation (only works if the mode supports indentation). Default is true.

`specialChars: RegExp`  
A regular expression used to determine which characters should be replaced by a special [placeholder](#option_specialCharPlaceholder). Mostly useful for non-printing special characters. The default is `/[\u0000-\u0019\u00ad\u200b\u2028\u2029\ufeff]/`.

`specialCharPlaceholder: function(char) → Element`  
A function that, given a special character identified by the [`specialChars`](#option_specialChars) option, produces a DOM node that is used to represent the character. By default, a red dot (<span style="color: red">•</span>) is shown, with a title tooltip to indicate the character code.

`rtlMoveVisually: boolean`  
Determines whether horizontal cursor movement through right-to-left (Arabic, Hebrew) text is visual (pressing the left arrow moves the cursor left) or logical (pressing the left arrow moves to the next lower index in the string, which is visually right in right-to-left text). The default is `false` on Windows, and `true` on other platforms.

Demonstration of primitive search/replace functionality. The keybindings (which can be overridden by custom keymaps) are:

Ctrl-F / Cmd-F  
Start searching

Ctrl-G / Cmd-G  
Find next

Shift-Ctrl-G / Shift-Cmd-G  
Find previous

Shift-Ctrl-F / Cmd-Option-F  
Replace

Shift-Ctrl-R / Shift-Cmd-Option-F  
Replace all

Searching is enabled by including [addon/search/search.js](../addon/search/search.js) and [addon/search/searchcursor.js](../addon/search/searchcursor.js). For good-looking input dialogs, you also want to include [addon/dialog/dialog.js](../addon/dialog/dialog.js) and [addon/dialog/dialog.css](../addon/dialog/dialog.css).
