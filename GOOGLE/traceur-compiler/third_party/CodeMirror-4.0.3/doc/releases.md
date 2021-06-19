CodeMirror: Release History

[<img src="logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#v3" class="active">Version 3.x</a>
-   [Version 2.x](#v2)
-   [Version 0.x](#v1)

Release notes and version history
---------------------------------

Version 4.x
-----------

20-03-2014: [Version 4.0](http://codemirror.net/codemirror-4.0.zip):

This is a new major version of CodeMirror. There are a few **incompatible** changes in the API. Upgrade with care, and read the [upgrading guide](upgrade_v4.html).

-   Multiple selections (ctrl-click, alt-drag, [API](manual.html#setSelections)).
-   Sublime Text [bindings](../demo/sublime.html).
-   [Module loader shims](manual.html#modloader) wrapped around all modules.
-   Selection [undo](manual.html#command_undoSelection)/[redo](manual.html#command_redoSelection).
-   Improved character measuring (faster, handles wrapped lines more robustly).
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/3.23.0...4.0.3).

Version 3.x
-----------

21-02-2014: [Version 3.22](http://codemirror.net/codemirror-3.22.zip):

-   Adds the [`findMarks`](manual.html#findMarks) method.
-   New addons: [rulers](manual.html#addon_rulers), markdown-fold, yaml-lint.
-   New theme: [mdn-like](../demo/theme.html?mdn-like).
-   New mode: [Solr](../mode/solr/index.html).
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/3.21.0...3.22.0).

16-01-2014: [Version 3.21](http://codemirror.net/codemirror-3.21.zip):

-   Auto-indenting a block will no longer add trailing whitespace to blank lines.
-   Marking text has a new option [`clearWhenEmpty`](manual.html#markText) to control auto-removal.
-   Several bugfixes in the handling of bidirectional text.
-   The [XML](../mode/xml/index.html) and [CSS](../mode/css/index.html) modes were largely rewritten. [LESS](../mode/css/less.html) support was added to the CSS mode.
-   The OCaml mode was moved to an [mllike](../mode/mllike/index.html) mode, F\# support added.
-   Make it possible to fetch multiple applicable helper values with [`getHelpers`](manual.html#getHelpers), and to register helpers matched on predicates with [`registerGlobalHelper`](manual.html#registerGlobalHelper).
-   New theme [pastel-on-dark](../demo/theme.html?pastel-on-dark).
-   Better ECMAScript 6 support in [JavaScript](../mode/javascript/index.html) mode.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/3.20.0...3.21.0).

21-11-2013: [Version 3.20](http://codemirror.net/codemirror-3.20.zip):

-   New modes: [Julia](../mode/julia/index.html) and [PEG.js](../mode/pegjs/index.html).
-   Support ECMAScript 6 in the [JavaScript mode](../mode/javascript/index.html).
-   Improved indentation for the [CoffeeScript mode](../mode/coffeescript/index.html).
-   Make non-printable-character representation [configurable](manual.html#option_specialChars).
-   Add ‘notification’ functionality to [dialog](manual.html#addon_dialog) addon.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/3.19.0...3.20.0).

21-10-2013: [Version 3.19](http://codemirror.net/codemirror-3.19.zip):

-   New modes: [Eiffel](../mode/eiffel/index.html), [Gherkin](../mode/gherkin/index.html), [MSSQL dialect](../mode/sql/?mime=text/x-mssql).
-   New addons: [hardwrap](manual.html#addon_hardwrap), [sql-hint](manual.html#addon_sql-hint).
-   New theme: [MBO](../demo/theme.html?mbo).
-   Add [support](manual.html#token_style_line) for line-level styling from mode tokenizers.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/3.18.0...3.19.0).

23-09-2013: [Version 3.18](http://codemirror.net/codemirror-3.18.zip):

Emergency release to fix a problem in 3.17 where `.setOption("lineNumbers", false)` would raise an error.

23-09-2013: [Version 3.17](http://codemirror.net/codemirror-3.17.zip):

-   New modes: [Fortran](../mode/fortran/index.html), [Octave](../mode/octave/index.html) (Matlab), [TOML](../mode/toml/index.html), and [DTD](../mode/dtd/index.html).
-   New addons: [`css-lint`](../addon/lint/css-lint.js), [`css-hint`](manual.html#addon_css-hint).
-   Improve resilience to CSS ‘frameworks’ that globally mess up `box-sizing`.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/3.16.0...3.17.0).

21-08-2013: [Version 3.16](http://codemirror.net/codemirror-3.16.zip):

-   The whole codebase is now under a single [license](../LICENSE) file.
-   The project page was overhauled and redesigned.
-   New themes: [Paraiso](../demo/theme.html?paraiso-dark) ([light](../demo/theme.html?paraiso-light)), [The Matrix](../demo/theme.html?the-matrix).
-   Improved interaction between themes and [active-line](manual.html#addon_active-line)/[matchbrackets](manual.html#addon_matchbrackets) addons.
-   New [folding](manual.html#addon_foldcode) function `CodeMirror.fold.comment`.
-   Added [fullscreen](manual.html#addon_fullscreen) addon.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/3.15.0...3.16.0).

29-07-2013: [Version 3.15](http://codemirror.net/codemirror-3.15.zip):

-   New modes: [Jade](../mode/jade/index.html), [Nginx](../mode/nginx/index.html).
-   New addons: [Tern](../demo/tern.html), [matchtags](manual.html#addon_matchtags), and [foldgutter](manual.html#addon_foldgutter).
-   Introduced [*helper*](manual.html#getHelper) concept ([context](https://groups.google.com/forum/#!msg/codemirror/cOc0xvUUEUU/nLrX1-qnidgJ)).
-   New method: [`getModeAt`](manual.html#getModeAt).
-   New themes: base16 [dark](../demo/theme.html?base16-dark)/[light](../demo/theme.html?base16-light), 3024 [dark](../demo/theme.html?3024-night)/[light](../demo/theme.html?3024-day), [tomorrow-night](../demo/theme.html?tomorrow-night-eighties).
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/3.14.0...3.15.0).

20-06-2013: [Version 3.14](http://codemirror.net/codemirror-3.14.zip):

-   New addons: [trailing space highlight](manual.html#addon_trailingspace), [XML completion](manual.html#addon_xml-hint) (rewritten), and [diff merging](manual.html#addon_merge).
-   [`markText`](manual.html#markText) and [`addLineWidget`](manual.html#addLineWidget) now take a `handleMouseEvents` option.
-   New methods: [`lineAtHeight`](manual.html#lineAtHeight), [`getTokenTypeAt`](manual.html#getTokenTypeAt).
-   More precise cleanness-tracking using [`changeGeneration`](manual.html#changeGeneration) and [`isClean`](manual.html#isClean).
-   Many extensions to [Emacs](../demo/emacs.html) mode (prefixes, more navigation units, and more).
-   New events [`"keyHandled"`](manual.html#event_keyHandled) and [`"inputRead"`](manual.html#event_inputRead).
-   Various improvements to [Ruby](../mode/ruby/index.html), [Smarty](../mode/smarty/index.html), [SQL](../mode/sql/index.html), and [Vim](../demo/vim.html) modes.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/3.13.0...3.14.0).

20-05-2013: [Version 3.13](http://codemirror.net/codemirror-3.13.zip):

-   New modes: [COBOL](../mode/cobol/index.html) and [HAML](../mode/haml/index.html).
-   New options: [`cursorScrollMargin`](manual.html#option_cursorScrollMargin) and [`coverGutterNextToScrollbar`](manual.html#option_coverGutterNextToScrollbar).
-   New addon: [commenting](manual.html#addon_comment).
-   More features added to the [Vim keymap](../demo/vim.html).
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.12...3.13.0).

19-04-2013: [Version 3.12](http://codemirror.net/codemirror-3.12.zip):

-   New mode: [GNU assembler](../mode/gas/index.html).
-   New options: [`maxHighlightLength`](manual.html#option_maxHighlightLength) and [`historyEventDelay`](manual.html#option_historyEventDelay).
-   Added [`addToHistory`](manual.html#mark_addToHistory) option for `markText`.
-   Various fixes to JavaScript tokenization and indentation corner cases.
-   Further improvements to the vim mode.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.11...v3.12).

20-03-2013: [Version 3.11](http://codemirror.net/codemirror-3.11.zip):

-   **Removed code:** `collapserange`, `formatting`, and `simple-hint` addons. `plsql` and `mysql` modes (use [`sql`](../mode/sql/index.html) mode).
-   **Moved code:** the range-finding functions for folding now have [their own files](../addon/fold/).
-   **Changed interface:** the [`continuecomment`](manual.html#addon_continuecomment) addon now exposes an option, rather than a command.
-   New modes: [SCSS](../mode/css/scss.html), [Tcl](../mode/tcl/index.html), [LiveScript](../mode/livescript/index.html), and [mIRC](../mode/mirc/index.html).
-   New addons: [`placeholder`](../demo/placeholder.html), [HTML completion](../demo/html5complete.html).
-   New methods: [`hasFocus`](manual.html#hasFocus), [`defaultCharWidth`](manual.html#defaultCharWidth).
-   New events: [`beforeCursorEnter`](manual.html#event_beforeCursorEnter), [`renderLine`](manual.html#event_renderLine).
-   Many improvements to the [`show-hint`](manual.html#addon_show-hint) completion dialog addon.
-   Tweak behavior of by-word cursor motion.
-   Further improvements to the [vim mode](../demo/vim.html).
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.1...v3.11).

21-02-2013: [Version 3.1](http://codemirror.net/codemirror-3.1.zip):

-   **Incompatible:** key handlers may now *return*, rather than *throw* `CodeMirror.Pass` to signal they didn’t handle the key.
-   Make documents a [first-class construct](manual.html#api_doc), support split views and subviews.
-   Add a [new module](manual.html#addon_show-hint) for showing completion hints. Deprecate `simple-hint.js`.
-   Extend [htmlmixed mode](../mode/htmlmixed/index.html) to allow custom handling of script types.
-   Support an `insertLeft` option to [`setBookmark`](manual.html#setBookmark).
-   Add an [`eachLine`](manual.html#eachLine) method to iterate over a document.
-   New addon modules: [selection marking](../demo/markselection.html), [linting](../demo/lint.html), and [automatic bracket closing](../demo/closebrackets.html).
-   Add [`"beforeChange"`](manual.html#event_beforeChange) and [`"beforeSelectionChange"`](manual.html#event_beforeSelectionChange) events.
-   Add [`"hide"`](manual.html#event_hide) and [`"unhide"`](manual.html#event_unhide) events to marked ranges.
-   Fix [`coordsChar`](manual.html#coordsChar)’s interpretation of its argument to match the documentation.
-   New modes: [Turtle](../mode/turtle/index.html) and [Q](../mode/q/index.html).
-   Further improvements to the [vim mode](../demo/vim.html).
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.01...v3.1).

25-01-2013: [Version 3.02](http://codemirror.net/codemirror-3.02.zip):

Single-bugfix release. Fixes a problem that prevents CodeMirror instances from being garbage-collected after they become unused.

21-01-2013: [Version 3.01](http://codemirror.net/codemirror-3.01.zip):

-   Move all add-ons into an organized directory structure under [`/addon`](../addon/). **You might have to adjust your paths.**
-   New modes: [D](../mode/d/index.html), [Sass](../mode/sass/index.html), [APL](../mode/apl/index.html), [SQL](../mode/sql/index.html) (configurable), and [Asterisk](../mode/asterisk/index.html).
-   Several bugfixes in right-to-left text support.
-   Add [`rtlMoveVisually`](manual.html#option_rtlMoveVisually) option.
-   Improvements to vim keymap.
-   Add built-in (lightweight) [overlay mode](manual.html#addOverlay) support.
-   Support `showIfHidden` option for [line widgets](manual.html#addLineWidget).
-   Add simple [Python hinter](manual.html#addon_python-hint).
-   Bring back the [`fixedGutter`](manual.html#option_fixedGutter) option.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.0...v3.01).

10-12-2012: [Version 3.0](http://codemirror.net/codemirror-3.0.zip):

**New major version**. Only partially backwards-compatible. See the [upgrading guide](upgrade_v3.html) for more information. Changes since release candidate 2:

-   Rewritten VIM mode.
-   Fix a few minor scrolling and sizing issues.
-   Work around Safari segfault when dragging.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.0rc2...v3.0).

20-11-2012: [Version 3.0, release candidate 2](http://codemirror.net/codemirror-3.0rc2.zip):

-   New mode: [HTTP](../mode/http/index.html).
-   Improved handling of selection anchor position.
-   Improve IE performance on longer lines.
-   Reduce gutter glitches during horiz. scrolling.
-   Add [`addKeyMap`](manual.html#addKeyMap) and [`removeKeyMap`](manual.html#removeKeyMap) methods.
-   Rewrite `formatting` and `closetag` add-ons.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.0rc1...v3.0rc2).

20-11-2012: [Version 3.0, release candidate 1](http://codemirror.net/codemirror-3.0rc1.zip):

-   New theme: [Solarized](../demo/theme.html?solarized%20light).
-   Introduce [`addLineClass`](manual.html#addLineClass) and [`removeLineClass`](manual.html#removeLineClass), drop `setLineClass`.
-   Add a *lot* of new [options for marked text](manual.html#markText) (read-only, atomic, collapsed, widget replacement).
-   Remove the old code folding interface in favour of these new ranges.
-   Add [`isClean`](manual.html#isClean)/[`markClean`](manual.html#markClean) methods.
-   Remove `compoundChange` method, use better undo-event-combining heuristic.
-   Improve scrolling performance smoothness.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.0beta2...v3.0rc1).

22-10-2012: [Version 3.0, beta 2](http://codemirror.net/codemirror-3.0beta2.zip):

-   Fix page-based coordinate computation.
-   Fix firing of [`gutterClick`](manual.html#event_gutterClick) event.
-   Add [`cursorHeight`](manual.html#option_cursorHeight) option.
-   Fix bi-directional text regression.
-   Add [`viewportMargin`](manual.html#option_viewportMargin) option.
-   Directly handle mousewheel events (again, hopefully better).
-   Make vertical cursor movement more robust (through widgets, big line gaps).
-   Add [`flattenSpans`](manual.html#option_flattenSpans) option.
-   Many optimizations. Poor responsiveness should be fixed.
-   Initialization in hidden state works again.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.0beta1...v3.0beta2).

19-09-2012: [Version 3.0, beta 1](http://codemirror.net/codemirror-3.0beta1.zip):

-   Bi-directional text support.
-   More powerful gutter model.
-   Support for arbitrary text/widget height.
-   In-line widgets.
-   Generalized event handling.

Version 2.x
-----------

21-01-2013: [Version 2.38](http://codemirror.net/codemirror-2.38.zip):

Integrate some bugfixes, enhancements to the vim keymap, and new modes ([D](../mode/d/index.html), [Sass](../mode/sass/index.html), [APL](../mode/apl/index.html)) from the v3 branch.

20-12-2012: [Version 2.37](http://codemirror.net/codemirror-2.37.zip):

-   New mode: [SQL](../mode/sql/index.html) (will replace [plsql](../mode/plsql/index.html) and [mysql](../mode/mysql/index.html) modes).
-   Further work on the new VIM mode.
-   Fix Cmd/Ctrl keys on recent Operas on OS X.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v2.36...v2.37).

20-11-2012: [Version 2.36](http://codemirror.net/codemirror-2.36.zip):

-   New mode: [Z80 assembly](../mode/z80/index.html).
-   New theme: [Twilight](../demo/theme.html?twilight).
-   Add command-line compression helper.
-   Make [`scrollIntoView`](manual.html#scrollIntoView) public.
-   Add [`defaultTextHeight`](manual.html#defaultTextHeight) method.
-   Various extensions to the vim keymap.
-   Make [PHP mode](../mode/php/index.html) build on [mixed HTML mode](../mode/htmlmixed/index.html).
-   Add [comment-continuing](manual.html#addon_continuecomment) add-on.
-   Full [list of patches](../https://github.com/marijnh/CodeMirror/compare/v2.35...v2.36).

22-10-2012: [Version 2.35](http://codemirror.net/codemirror-2.35.zip):

-   New (sub) mode: [TypeScript](../mode/javascript/typescript.html).
-   Don’t overwrite (insert key) when pasting.
-   Fix several bugs in [`markText`](manual.html#markText)/undo interaction.
-   Better indentation of JavaScript code without semicolons.
-   Add [`defineInitHook`](manual.html#defineInitHook) function.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v2.34...v2.35).

19-09-2012: [Version 2.34](http://codemirror.net/codemirror-2.34.zip):

-   New mode: [Common Lisp](../mode/commonlisp/index.html).
-   Fix right-click select-all on most browsers.
-   Change the way highlighting happens:  
      Saves memory and CPU cycles.  
      `compareStates` is no longer needed.  
      `onHighlightComplete` no longer works.
-   Integrate mode (Markdown, XQuery, CSS, sTex) tests in central testsuite.
-   Add a [`CodeMirror.version`](manual.html#version) property.
-   More robust handling of nested modes in [formatting](../demo/formatting.html) and [closetag](../demo/closetag.html) plug-ins.
-   Un/redo now preserves [marked text](manual.html#markText) and bookmarks.
-   [Full list](https://github.com/marijnh/CodeMirror/compare/v2.33...v2.34) of patches.

23-08-2012: [Version 2.33](http://codemirror.net/codemirror-2.33.zip):

-   New mode: [Sieve](../mode/sieve/index.html).
-   New [`getViewPort`](manual.html#getViewport) and [`onViewportChange`](manual.html#option_onViewportChange) API.
-   [Configurable](manual.html#option_cursorBlinkRate) cursor blink rate.
-   Make binding a key to `false` disabling handling (again).
-   Show non-printing characters as red dots.
-   More tweaks to the scrolling model.
-   Expanded testsuite. Basic linter added.
-   Remove most uses of `innerHTML`. Remove `CodeMirror.htmlEscape`.
-   [Full list](https://github.com/marijnh/CodeMirror/compare/v2.32...v2.33) of patches.

23-07-2012: [Version 2.32](http://codemirror.net/codemirror-2.32.zip):

Emergency fix for a bug where an editor with line wrapping on IE will break when there is *no* scrollbar.

20-07-2012: [Version 2.31](http://codemirror.net/codemirror-2.31.zip):

-   New modes: [OCaml](../mode/ocaml/index.html), [Haxe](../mode/haxe/index.html), and [VB.NET](../mode/vb/index.html).
-   Several fixes to the new scrolling model.
-   Add a [`setSize`](manual.html#setSize) method for programmatic resizing.
-   Add [`getHistory`](manual.html#getHistory) and [`setHistory`](manual.html#setHistory) methods.
-   Allow custom line separator string in [`getValue`](manual.html#getValue) and [`getRange`](manual.html#getRange).
-   Support double- and triple-click drag, double-clicking whitespace.
-   And more… [(all patches)](https://github.com/marijnh/CodeMirror/compare/v2.3...v2.31)

22-06-2012: [Version 2.3](http://codemirror.net/codemirror-2.3.zip):

-   **New scrollbar implementation**. Should flicker less. Changes DOM structure of the editor.
-   New theme: [vibrant-ink](../demo/theme.html?vibrant-ink).
-   Many extensions to the VIM keymap (including text objects).
-   Add [mode-multiplexing](../demo/multiplex.html) utility script.
-   Fix bug where right-click paste works in read-only mode.
-   Add a [`getScrollInfo`](manual.html#getScrollInfo) method.
-   Lots of other [fixes](https://github.com/marijnh/CodeMirror/compare/v2.25...v2.3).

23-05-2012: [Version 2.25](http://codemirror.net/codemirror-2.25.zip):

-   New mode: [Erlang](../mode/erlang/index.html).
-   **Remove xmlpure mode** (use [xml.js](../mode/xml/index.html)).
-   Fix line-wrapping in Opera.
-   Fix X Windows middle-click paste in Chrome.
-   Fix bug that broke pasting of huge documents.
-   Fix backspace and tab key repeat in Opera.

23-04-2012: [Version 2.24](http://codemirror.net/codemirror-2.24.zip):

-   **Drop support for Internet Explorer 6**.
-   New modes: [Shell](../mode/shell/index.html), [Tiki wiki](../mode/tiki/index.html), [Pig Latin](../mode/pig/index.html).
-   New themes: [Ambiance](../demo/theme.html?ambiance), [Blackboard](../demo/theme.html?blackboard).
-   More control over drag/drop with [`dragDrop`](manual.html#option_dragDrop) and [`onDragEvent`](manual.html#option_onDragEvent) options.
-   Make HTML mode a bit less pedantic.
-   Add [`compoundChange`](manual.html#compoundChange) API method.
-   Several fixes in undo history and line hiding.
-   Remove (broken) support for `catchall` in key maps, add `nofallthrough` boolean field instead.

26-03-2012: [Version 2.23](http://codemirror.net/codemirror-2.23.zip):

-   Change **default binding for tab** [\[more\]](javascript:void(document.getElementById('tabbinding').style.display='')) Starting in 2.23, these bindings are default:
    -   Tab: Insert tab character
    -   Shift-tab: Reset line indentation to default
    -   Ctrl/Cmd-\[: Reduce line indentation (old tab behaviour)
    -   Ctrl/Cmd-\]: Increase line indentation (old shift-tab behaviour)
-   New modes: [XQuery](../mode/xquery/index.html) and [VBScript](../mode/vbscript/index.html).
-   Two new themes: [lesser-dark](../mode/less/index.html) and [xq-dark](../mode/xquery/index.html).
-   Differentiate between background and text styles in [`setLineClass`](manual.html#setLineClass).
-   Fix drag-and-drop in IE9+.
-   Extend [`charCoords`](manual.html#charCoords) and [`cursorCoords`](manual.html#cursorCoords) with a `mode` argument.
-   Add [`autofocus`](manual.html#option_autofocus) option.
-   Add [`findMarksAt`](manual.html#findMarksAt) method.

27-02-2012: [Version 2.22](http://codemirror.net/codemirror-2.22.zip):

-   Allow [key handlers](manual.html#keymaps) to pass up events, allow binding characters.
-   Add [`autoClearEmptyLines`](manual.html#option_autoClearEmptyLines) option.
-   Properly use tab stops when rendering tabs.
-   Make PHP mode more robust.
-   Support indentation blocks in [code folder](manual.html#addon_foldcode).
-   Add a script for [highlighting instances of the selection](manual.html#addon_match-highlighter).
-   New [.properties](../mode/properties/index.html) mode.
-   Fix many bugs.

27-01-2012: [Version 2.21](http://codemirror.net/codemirror-2.21.zip):

-   Added [LESS](../mode/less/index.html), [MySQL](../mode/mysql/index.html), [Go](../mode/go/index.html), and [Verilog](../mode/verilog/index.html) modes.
-   Add [`smartIndent`](manual.html#option_smartIndent) option.
-   Support a cursor in [`readOnly`](manual.html#option_readOnly)-mode.
-   Support assigning multiple styles to a token.
-   Use a new approach to drawing the selection.
-   Add [`scrollTo`](manual.html#scrollTo) method.
-   Allow undo/redo events to span non-adjacent lines.
-   Lots and lots of bugfixes.

20-12-2011: [Version 2.2](http://codemirror.net/codemirror-2.2.zip):

-   Slightly incompatible API changes. Read [this](upgrade_v2.2.html).
-   New approach to [binding](manual.html#option_extraKeys) keys, support for [custom bindings](manual.html#option_keyMap).
-   Support for overwrite (insert).
-   [Custom-width](manual.html#option_tabSize) and [stylable](../demo/visibletabs.html) tabs.
-   Moved more code into [add-on scripts](manual.html#addons).
-   Support for sane vertical cursor movement in wrapped lines.
-   More reliable handling of editing [marked text](manual.html#markText).
-   Add minimal [emacs](../demo/emacs.html) and [vim](../demo/vim.html) bindings.
-   Rename `coordsFromIndex` to [`posFromIndex`](manual.html#posFromIndex), add [`indexFromPos`](manual.html#indexFromPos) method.

21-11-2011: [Version 2.18](http://codemirror.net/codemirror-2.18.zip):

Fixes `TextMarker.clear`, which is broken in 2.17.

21-11-2011: [Version 2.17](http://codemirror.net/codemirror-2.17.zip):

-   Add support for [line wrapping](manual.html#option_lineWrapping) and [code folding](manual.html#hideLine).
-   Add [Github-style Markdown](../mode/gfm/index.html) mode.
-   Add [Monokai](../theme/monokai.css) and [Rubyblue](../theme/rubyblue.css) themes.
-   Add [`setBookmark`](manual.html#setBookmark) method.
-   Move some of the demo code into reusable components under [`lib/util`](../addon/).
-   Make screen-coord-finding code faster and more reliable.
-   Fix drag-and-drop in Firefox.
-   Improve support for IME.
-   Speed up content rendering.
-   Fix browser’s built-in search in Webkit.
-   Make double- and triple-click work in IE.
-   Various fixes to modes.

27-10-2011: [Version 2.16](http://codemirror.net/codemirror-2.16.zip):

-   Add [Perl](../mode/perl/index.html), [Rust](../mode/rust/index.html), [TiddlyWiki](../mode/tiddlywiki/index.html), and [Groovy](../mode/groovy/index.html) modes.
-   Dragging text inside the editor now moves, rather than copies.
-   Add a [`coordsFromIndex`](manual.html#coordsFromIndex) method.
-   **API change**: `setValue` now no longer clears history. Use [`clearHistory`](manual.html#clearHistory) for that.
-   **API change**: [`markText`](manual.html#markText) now returns an object with `clear` and `find` methods. Marked text is now more robust when edited.
-   Fix editing code with tabs in Internet Explorer.

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

22-02-2011: [Version 2.0 beta 2](https://github.com/marijnh/codemirror/tree/beta2):

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

Version 0.x
-----------

28-03-2011: [Version 1.0](http://codemirror.net/codemirror-1.0.zip):

-   Fix error when debug history overflows.
-   Refine handling of C\# verbatim strings.
-   Fix some issues with JavaScript indentation.

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
