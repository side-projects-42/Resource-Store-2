CodeMirror: Full Screen Editing
===============================

`indentWithTabs (boolean)`

Whether, when indenting, the first N\*8 spaces should be replaced by N tabs. Default is false.

`tabMode (string)`

Determines what happens when the user presses the tab key. Must be one of the following:

`"classic" (the default)`  
When nothing is selected, insert a tab. Otherwise, behave like the `"shift"` mode. (When shift is held, this behaves like the `"indent"` mode.)

`"shift"`  
Indent all selected lines by one [`indentUnit`](#option_indentUnit). If shift was held while pressing tab, un-indent all selected lines one unit.

`"indent"`  
Indent the line the ‘correctly’, based on its syntactic context. Only works if the mode [supports](#indent) it.

`"default"`  
Do not capture tab presses, let the browser apply its default behaviour (which usually means it skips to the next control).

`enterMode (string)`

Determines whether and how new lines are indented when the enter key is pressed. The following modes are supported:

`"indent" (the default)`  
Use the mode’s indentation rules to give the new line the correct indentation.

`"keep"`  
Indent the line the same as the previous line.

`"flat"`  
Do not indent the new line.

`enterMode (string)`

Determines whether and how new lines are indented when the enter key is pressed. The following modes are supported:

`"indent" (the default)`  
Use the mode’s indentation rules to give the new line the correct indentation.

`"keep"`  
Indent the line the same as the previous line.

`"flat"`  
Do not indent the new line.

`enterMode (string)`

Determines whether and how new lines are indented when the enter key is pressed. The following modes are supported:

`"indent" (the default)`  
Use the mode’s indentation rules to give the new line the correct indentation.

`"keep"`  
Indent the line the same as the previous line.

`"flat"`  
Do not indent the new line.

`enterMode (string)`

Determines whether and how new lines are indented when the enter key is pressed. The following modes are supported:

`"indent" (the default)`  
Use the mode’s indentation rules to give the new line the correct indentation.

`"keep"`  
Indent the line the same as the previous line.

`"flat"`  
Do not indent the new line.

Press **F11** when cursor is in the editor to toggle full screen editing. **Esc** can also be used to *exit* full screen editing.
