CodeMirror: Full Screen Editing

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">Full Screen Editing</a>

Full Screen Editing
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

Demonstration of the [fullscreen](../doc/manual.html#addon_fullscreen) addon. Press **F11** when cursor is in the editor to toggle full screen editing. **Esc** can also be used to *exit* full screen editing.
