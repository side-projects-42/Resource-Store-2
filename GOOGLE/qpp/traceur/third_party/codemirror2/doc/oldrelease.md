<span class="logo-braces">{ }</span> [CodeMirror](http://codemirror.net/)
=========================================================================

    /* Old release history */

26-09-2011: [Version 2.15](http://codemirror.net/codemirror-2.15.zip):

Fix bug that snuck into 2.14: Clicking the character that currently has the cursor didn’t re-focus the editor.

26-09-2011: [Version 2.14](http://codemirror.net/codemirror-2.14.zip):

-   Add [Clojure](../mode/clojure/index.html), [Pascal](../mode/pascal/index.html), [NTriples](../mode/ntriples/index.html), [Jinja2](../mode/jinja2/index.html), and [Markdown](../mode/markdown/index.html) modes.
-   Add [Cobalt](../theme/cobalt.css) and [Eclipse](../theme/eclipse.css) themes.
-   Add a [`fixedGutter`](manual.html#option_fixedGutter) option.
-   Fix bug with `setValue` breaking cursor movement.
-   Make gutter updates much more efficient.
-   Allow dragging of text out of the editor (on modern browsers).

23-08-2011: [Version 2.13](http://codemirror.net/codemirror-2.13.zip):

-   Add [Ruby](../mode/ruby/index.html), [R](../mode/r/index.html), [CoffeeScript](../mode/coffeescript/index.html), and [Velocity](../mode/velocity/index.html) modes.
-   Add [`getGutterElement`](manual.html#getGutterElement) to API.
-   Several fixes to scrolling and positioning.
-   Add [`smartHome`](manual.html#option_smartHome) option.
-   Add an experimental [pure XML](../mode/xmlpure/index.html) mode.

25-07-2011: [Version 2.12](http://codemirror.net/codemirror-2.12.zip):

-   Add a [SPARQL](../mode/sparql/index.html) mode.
-   Fix bug with cursor jumping around in an unfocused editor in IE.
-   Allow key and mouse events to bubble out of the editor. Ignore widget clicks.
-   Solve cursor flakiness after undo/redo.
-   Fix block-reindent ignoring the last few lines.
-   Fix parsing of multi-line attrs in XML mode.
-   Use `innerHTML` for HTML-escaping.
-   Some fixes to indentation in C-like mode.
-   Shrink horiz scrollbars when long lines removed.
-   Fix width feedback loop bug that caused the width of an inner DIV to shrink.

04-07-2011: [Version 2.11](http://codemirror.net/codemirror-2.11.zip):

-   Add a [Scheme mode](../mode/scheme/index.html).
-   Add a `replace` method to search cursors, for cursor-preserving replacements.
-   Make the [C-like mode](../mode/clike/index.html) mode more customizable.
-   Update XML mode to spot mismatched tags.
-   Add `getStateAfter` API and `compareState` mode API methods for finer-grained mode magic.
-   Add a `getScrollerElement` API method to manipulate the scrolling DIV.
-   Fix drag-and-drop for Firefox.
-   Add a C\# configuration for the [C-like mode](../mode/clike/index.html).
-   Add [full-screen editing](../demo/fullscreen.html) and [mode-changing](../demo/changemode.html) demos.

07-06-2011: [Version 2.1](http://codemirror.net/codemirror-2.1.zip):

Add a [theme](manual.html#option_theme) system ([demo](../demo/theme.html)). Note that this is not backwards-compatible—you’ll have to update your styles and modes!

07-06-2011: [Version 2.02](http://codemirror.net/codemirror-2.02.zip):

-   Add a [Lua mode](../mode/lua/index.html).
-   Fix reverse-searching for a regexp.
-   Empty lines can no longer break highlighting.
-   Rework scrolling model (the outer wrapper no longer does the scrolling).
-   Solve horizontal jittering on long lines.
-   Add [runmode.js](../demo/runmode.html).
-   Immediately re-highlight text when typing.
-   Fix problem with ‘sticking’ horizontal scrollbar.

26-05-2011: [Version 2.01](http://codemirror.net/codemirror-2.01.zip):

-   Add a [Smalltalk mode](../mode/smalltalk/index.html).
-   Add a [reStructuredText mode](../mode/rst/index.html).
-   Add a [Python mode](../mode/python/index.html).
-   Add a [PL/SQL mode](../mode/plsql/index.html).
-   `coordsChar` now works
-   Fix a problem where `onCursorActivity` interfered with `onChange`.
-   Fix a number of scrolling and mouse-click-position glitches.
-   Pass information about the changed lines to `onChange`.
-   Support cmd-up/down on OS X.
-   Add triple-click line selection.
-   Don’t handle shift when changing the selection through the API.
-   Support `"nocursor"` mode for `readOnly` option.
-   Add an `onHighlightComplete` option.
-   Fix the context menu for Firefox.

28-03-2011: [Version 2.0](http://codemirror.net/codemirror-2.0.zip):

CodeMirror 2 is a complete rewrite that’s faster, smaller, simpler to use, and less dependent on browser quirks. See [this](internals.html) and [this](http://groups.google.com/group/codemirror/browse_thread/thread/5a8e894024a9f580) for more information.

28-03-2011: [Version 1.0](http://codemirror.net/codemirror-1.0.zip):

-   Fix error when debug history overflows.
-   Refine handling of C\# verbatim strings.
-   Fix some issues with JavaScript indentation.

22-02-2011: [Version 2.0 beta 2](https://github.com/marijnh/codemirror2/tree/beta2):

Somewhat more mature API, lots of bugs shaken out.

17-02-2011: [Version 0.94](http://codemirror.net/codemirror-0.94.zip):

-   `tabMode: "spaces"` was modified slightly (now indents when something is selected).
-   Fixes a bug that would cause the selection code to break on some IE versions.
-   Disabling spell-check on WebKit browsers now works.

08-02-2011: [Version 2.0 beta 1](http://codemirror.net/):

CodeMirror 2 is a complete rewrite of CodeMirror, no longer depending on an editable frame.

19-01-2011: [Version 0.93](http://codemirror.net/codemirror-0.93.zip):

-   Added a [Regular Expression](contrib/regex/index.html) parser.
-   Fixes to the PHP parser.
-   Support for regular expression in search/replace.
-   Add `save` method to instances created with `fromTextArea`.
-   Add support for MS T-SQL in the SQL parser.
-   Support use of CSS classes for highlighting brackets.
-   Fix yet another hang with line-numbering in hidden editors.

17-12-2010: [Version 0.92](http://codemirror.net/codemirror-0.92.zip):

-   Make CodeMirror work in XHTML documents.
-   Fix bug in handling of backslashes in Python strings.
-   The `styleNumbers` option is now officially supported and documented.
-   `onLineNumberClick` option added.
-   More consistent names `onLoad` and `onCursorActivity` callbacks. Old names still work, but are deprecated.
-   Add a [Freemarker](contrib/freemarker/index.html) mode.

11-11-2010: [Version 0.91](http://codemirror.net/codemirror-0.91.zip):

-   Adds support for [Java](contrib/java).
-   Small additions to the [PHP](contrib/php) and [SQL](contrib/sql) parsers.
-   Work around various [Webkit](https://bugs.webkit.org/show_bug.cgi?id=47806) [issues](https://bugs.webkit.org/show_bug.cgi?id=23474).
-   Fix `toTextArea` to update the code in the textarea.
-   Add a `noScriptCaching` option (hack to ease development).
-   Make sub-modes of [HTML mixed](mixedtest.html) mode configurable.

02-10-2010: [Version 0.9](http://codemirror.net/codemirror-0.9.zip):

-   Add support for searching backwards.
-   There are now parsers for [Scheme](contrib/scheme/index.html), [XQuery](contrib/xquery/index.html), and [OmetaJS](contrib/ometa/index.html).
-   Makes `height: "dynamic"` more robust.
-   Fixes bug where paste did not work on OS X.
-   Add a `enterMode` and `electricChars` options to make indentation even more customizable.
-   Add `firstLineNumber` option.
-   Fix bad handling of `@media` rules by the CSS parser.
-   Take a new, more robust approach to working around the invisible-last-line bug in WebKit.

22-07-2010: [Version 0.8](http://codemirror.net/codemirror-0.8.zip):

-   Add a `cursorCoords` method to find the screen coordinates of the cursor.
-   A number of fixes and support for more syntax in the PHP parser.
-   Fix indentation problem with JSON-mode JS parser in Webkit.
-   Add a [minification](compress.html) UI.
-   Support a `height: dynamic` mode, where the editor’s height will adjust to the size of its content.
-   Better support for IME input mode.
-   Fix JavaScript parser getting confused when seeing a no-argument function call.
-   Have CSS parser see the difference between selectors and other identifiers.
-   Fix scrolling bug when pasting in a horizontally-scrolled editor.
-   Support `toTextArea` method in instances created with `fromTextArea`.
-   Work around new Opera cursor bug that causes the cursor to jump when pressing backspace at the end of a line.

27-04-2010: [Version 0.67](http://codemirror.net/codemirror-0.67.zip):

More consistent page-up/page-down behaviour across browsers. Fix some issues with hidden editors looping forever when line-numbers were enabled. Make PHP parser parse `"\\"` correctly. Have `jumpToLine` work on line handles, and add `cursorLine` function to fetch the line handle where the cursor currently is. Add new `setStylesheet` function to switch style-sheets in a running editor.

01-03-2010: [Version 0.66](http://codemirror.net/codemirror-0.66.zip):

Adds `removeLine` method to API. Introduces the [PLSQL parser](contrib/plsql/index.html). Marks XML errors by adding (rather than replacing) a CSS class, so that they can be disabled by modifying their style. Fixes several selection bugs, and a number of small glitches.

12-11-2009: [Version 0.65](http://codemirror.net/codemirror-0.65.zip):

Add support for having both line-wrapping and line-numbers turned on, make paren-highlighting style customisable (`markParen` and `unmarkParen` config options), work around a selection bug that Opera *re*introduced in version 10.

23-10-2009: [Version 0.64](http://codemirror.net/codemirror-0.64.zip):

Solves some issues introduced by the paste-handling changes from the previous release. Adds `setSpellcheck`, `setTextWrapping`, `setIndentUnit`, `setUndoDepth`, `setTabMode`, and `setLineNumbers` to customise a running editor. Introduces an [SQL](contrib/sql/index.html) parser. Fixes a few small problems in the [Python](contrib/python/index.html) parser. And, as usual, add workarounds for various newly discovered browser incompatibilities.

*31-08-2009*: [Version 0.63](http://codemirror.net/codemirror-0.63.zip):

Overhaul of paste-handling (less fragile), fixes for several serious IE8 issues (cursor jumping, end-of-document bugs) and a number of small problems.

*30-05-2009*: [Version 0.62](http://codemirror.net/codemirror-0.62.zip):

Introduces [Python](contrib/python/index.html) and [Lua](contrib/lua/index.html) parsers. Add `setParser` (on-the-fly mode changing) and `clearHistory` methods. Make parsing passes time-based instead of lines-based (see the `passTime` option).
