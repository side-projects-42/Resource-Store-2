<span class="logo-braces">{ }</span> [CodeMirror](http://codemirror.net/)
=========================================================================

    /* In-browser code editing
       made bearable */

CodeMirror is a JavaScript component that provides a code editor in the browser. When a mode is available for the language you are coding in, it will color your code, and optionally help with indentation.

A [rich programming API](doc/manual.html) and a CSS theming system are available for customizing CodeMirror to fit your application, and extending it with new functionality.

Supported modes:
----------------

-   [C, C++, C\#](mode/clike/index.html)
-   [Clojure](mode/clojure/index.html)
-   [CoffeeScript](mode/coffeescript/index.html)
-   [CSS](mode/css/index.html)
-   [diff](mode/diff/index.html)
-   [ECL](mode/ecl/index.html)
-   [Erlang](mode/erlang/index.html)
-   [Go](mode/go/index.html)
-   [Groovy](mode/groovy/index.html)
-   [Haskell](mode/haskell/index.html)
-   [HTML embedded scripts](mode/htmlembedded/index.html)
-   [HTML mixed-mode](mode/htmlmixed/index.html)
-   [Java](mode/clike/index.html)
-   [JavaScript](mode/javascript/index.html)
-   [Jinja2](mode/jinja2/index.html)
-   [LESS](mode/less/index.html)
-   [Lua](mode/lua/index.html)
-   [Markdown](mode/markdown/index.html) ([Github-flavour](mode/gfm/index.html))
-   [MySQL](mode/mysql/index.html)
-   [NTriples](mode/ntriples/index.html)
-   [Pascal](mode/pascal/index.html)
-   [Perl](mode/perl/index.html)
-   [PHP](mode/php/index.html)
-   [Pig Latin](mode/pig/index.html)
-   [PL/SQL](mode/plsql/index.html)
-   [Properties files](mode/properties/index.html)
-   [Python](mode/python/index.html)
-   [R](mode/r/index.html)
-   RPM [spec](mode/rpm/spec/index.html) and [changelog](mode/rpm/changes/index.html)
-   [reStructuredText](mode/rst/index.html)
-   [Ruby](mode/ruby/index.html)
-   [Rust](mode/rust/index.html)
-   [Scala](mode/clike/scala.html)
-   [Scheme](mode/scheme/index.html)
-   [Shell](mode/shell/index.html)
-   [Smalltalk](mode/smalltalk/index.html)
-   [Smarty](mode/smarty/index.html)
-   [SPARQL](mode/sparql/index.html)
-   [sTeX, LaTeX](mode/stex/index.html)
-   [Tiddlywiki](mode/tiddlywiki/index.html)
-   [Tiki wiki](mode/tiki/index.html)
-   [VBScript](mode/vbscript/index.html)
-   [Velocity](mode/velocity/index.html)
-   [Verilog](mode/verilog/index.html)
-   [XML/HTML](mode/xml/index.html)
-   [XQuery](mode/xquery/index.html)
-   [YAML](mode/yaml/index.html)

Usage demos:
------------

-   [Autocompletion](demo/complete.html)
-   [Search/replace](demo/search.html)
-   [Code folding](demo/folding.html)
-   [Mode overlays](demo/mustache.html)
-   [Mode multiplexer](demo/multiplex.html)
-   [HTML editor with preview](demo/preview.html)
-   [Auto-resizing editor](demo/resize.html)
-   [Setting breakpoints](demo/marker.html)
-   [Highlighting the current line](demo/activeline.html)
-   [Highlighting selection matches](demo/matchhighlighter.html)
-   [Theming](demo/theme.html)
-   [Stand-alone highlighting](demo/runmode.html)
-   [Full-screen editing](demo/fullscreen.html)
-   [Mode auto-changing](demo/changemode.html)
-   [Visible tabs](demo/visibletabs.html)
-   [Autoformatting of code](demo/formatting.html)
-   [Emacs keybindings](demo/emacs.html)
-   [Vim keybindings](demo/vim.html)
-   [Automatic xml tag closing](demo/closetag.html)
-   [Lazy mode loading](demo/loadmode.html)

Real-world uses:
----------------

-   [jsbin.com](http://jsbin.com) (JS playground)
-   [Sage demo](http://buzzard.ups.edu/) (math system)
-   [sourceLair](http://www.sourcelair.com/) (online IDE)
-   [Eloquent JavaScript](http://eloquentjavascript.net/chapter1.html) (book)
-   [Mergely](http://www.mergely.com/) (interactive diffing)
-   [Paper.js](http://paperjs.org/) (graphics scripting)
-   [WeScheme](http://www.wescheme.org/) (learning tool)
-   [WebGL playground](http://webglplayground.net/)
-   [ql.io](http://ql.io/) (http API query helper)
-   [Elm language examples](http://elm-lang.org/Examples.elm)
-   [BlueGriffon](http://bluegriffon.org/) (HTML editor)
-   [JSHint](http://www.jshint.com/) (JS linter)
-   [kl1p](http://kl1p.com/cmtest/1) (paste service)
-   [SQLFiddle](http://sqlfiddle.com) (SQL playground)
-   [Go language tour](http://tour.golang.org)
-   [CSSDeck](http://cssdeck.com/) (CSS showcase)
-   [CKWNC](http://www.ckwnc.com/) (UML editor)
-   [sketchPatch Livecodelab](http://www.sketchpatch.net/labs/livecodelabIntro.html)
-   [The File Tree](https://thefiletree.com) (collab editor)
-   [Tributary](http://enjalot.com/tributary/2636296/sinwaves.js) (augmented editing)

Getting the code
----------------

All of CodeMirror is released under a [MIT-style](LICENSE) license. To get it, you can download the [latest release](http://codemirror.net/codemirror.zip) or the current [development snapshot](http://codemirror.net/codemirror2-latest.zip) as zip files. To create a custom minified script file, you can use the [compression API](doc/compress.html).

We use [git](http://git-scm.com/) for version control. The main repository can be fetched in this way:

    git clone http://marijnhaverbeke.nl/git/codemirror2

CodeMirror can also be found on GitHub at [marijnh/CodeMirror2](http://github.com/marijnh/CodeMirror2). If you plan to hack on the code and contribute patches, the best way to do it is to create a GitHub fork, and send pull requests.

Documentation
-------------

The [manual](doc/manual.html) is your first stop for learning how to use this library. It starts with a quick explanation of how to use the editor, and then describes the API in detail.

For those who want to learn more about the code, there is an [overview of the internals](doc/internals.html) available. The [source code](http://github.com/marijnh/CodeMirror2) itself is, for the most part, also well commented.

Support and bug reports
-----------------------

There is a [Google group](http://groups.google.com/group/codemirror) (a sort of mailing list/newsgroup thing) for discussion and news related to CodeMirror. When reporting a bug, [read this first](doc/reporting.html). If you have a [github](http://github.com) account, simply [open an issue there](http://github.com/marijnh/CodeMirror2/issues). Otherwise, post something to the [group](http://groups.google.com/group/codemirror), or e-mail me directly: [Marijn Haverbeke](mailto:marijnh@gmail.com).

Supported browsers
------------------

The following browsers are able to run CodeMirror:

-   Firefox 2 or higher
-   Chrome, any version
-   Safari 3 or higher
-   Internet Explorer 7 or higher in standards (**non-quirks**) mode
-   Opera 9 or higher (with some key-handling problems on OS X)

I am not actively testing against every new browser release, and vendors have a habit of introducing bugs all the time, so I am relying on the community to tell me when something breaks. See [here](#support) for information on how to contact me.

Commercial support
------------------

CodeMirror is developed and maintained by me, Marijn Haverbeke, in my own time. If your company is getting value out of CodeMirror, please consider purchasing a support contract.

-   You’ll be funding further work on CodeMirror.
-   You ensure that you get a quick response when you have a problem, even when I am otherwise busy.

CodeMirror support contracts exist in two forms—**basic** at €100 per month, and **premium** at €500 per month. [Contact me](mailto:marijnh@gmail.com) for further information.

<a href="http://codemirror.net/codemirror.zip" class="download">Download the latest release</a>

Support CodeMirror
------------------

-   Donate (<span class="quasilink" onclick="document.getElementById('paypal').submit();">Paypal</span> or <span class="quasilink" onclick="document.getElementById('bankinfo').style.display = 'block';">bank</span>)
-   Purchase [commercial support](#commercial)

Bank: *Rabobank*  
Country: *Netherlands*  
SWIFT: *RABONL2U*  
Account: *147850770*  
Name: *Marijn Haverbeke*  
IBAN: *NL26 RABO 0147 8507 70*

Reading material
----------------

-   [User manual](doc/manual.html)
-   [Browse the code](http://github.com/marijnh/CodeMirror2)

Releases
--------

22-06-2012: [Version 2.3](http://codemirror.net/codemirror-2.3.zip):

-   **New scrollbar implementation**. Should flicker less. Changes DOM structure of the editor.
-   New theme: [vibrant-ink](demo/theme.html?vibrant-ink).
-   Many extensions to the VIM keymap (including text objects).
-   Add [mode-multiplexing](demo/multiplex.html) utility script.
-   Fix bug where right-click paste works in read-only mode.
-   Add a [`getScrollInfo`](doc/manual.html#getScrollInfo) method.
-   Lots of other [fixes](https://github.com/marijnh/CodeMirror2/compare/v2.25...v2.3).

23-05-2012: [Version 2.25](http://codemirror.net/codemirror-2.25.zip):

-   New mode: [Erlang](mode/erlang/index.html).
-   **Remove xmlpure mode** (use [xml.js](mode/xml/index.html)).
-   Fix line-wrapping in Opera.
-   Fix X Windows middle-click paste in Chrome.
-   Fix bug that broke pasting of huge documents.
-   Fix backspace and tab key repeat in Opera.

23-04-2012: [Version 2.24](http://codemirror.net/codemirror-2.24.zip):

-   **Drop support for Internet Explorer 6**.
-   New modes: [Shell](mode/shell/index.html), [Tiki wiki](mode/tiki/index.html), [Pig Latin](mode/pig/index.html).
-   New themes: [Ambiance](demo/theme.html?ambiance), [Blackboard](demo/theme.html?blackboard).
-   More control over drag/drop with [`dragDrop`](doc/manual.html#option_dragDrop) and [`onDragEvent`](doc/manual.html#option_onDragEvent) options.
-   Make HTML mode a bit less pedantic.
-   Add [`compoundChange`](doc/manual.html#compoundChange) API method.
-   Several fixes in undo history and line hiding.
-   Remove (broken) support for `catchall` in key maps, add `nofallthrough` boolean field instead.

26-03-2012: [Version 2.23](http://codemirror.net/codemirror-2.23.zip):

-   Change **default binding for tab** [\[more\]](javascript:void(document.getElementById('tabbinding').style.display='')) Starting in 2.23, these bindings are default:
    -   Tab: Insert tab character
    -   Shift-tab: Reset line indentation to default
    -   Ctrl/Cmd-\[: Reduce line indentation (old tab behaviour)
    -   Ctrl/Cmd-\]: Increase line indentation (old shift-tab behaviour)
-   New modes: [XQuery](mode/xquery/index.html) and [VBScript](mode/vbscript/index.html).
-   Two new themes: [lesser-dark](mode/less/index.html) and [xq-dark](mode/xquery/index.html).
-   Differentiate between background and text styles in [`setLineClass`](doc/manual.html#setLineClass).
-   Fix drag-and-drop in IE9+.
-   Extend [`charCoords`](doc/manual.html#charCoords) and [`cursorCoords`](doc/manual.html#cursorCoords) with a `mode` argument.
-   Add [`autofocus`](doc/manual.html#option_autofocus) option.
-   Add [`findMarksAt`](doc/manual.html#findMarksAt) method.

27-02-2012: [Version 2.22](http://codemirror.net/codemirror-2.22.zip):

-   Allow [key handlers](doc/manual.html#keymaps) to pass up events, allow binding characters.
-   Add [`autoClearEmptyLines`](doc/manual.html#option_autoClearEmptyLines) option.
-   Properly use tab stops when rendering tabs.
-   Make PHP mode more robust.
-   Support indentation blocks in [code folder](doc/manual.html#util_foldcode).
-   Add a script for [highlighting instances of the selection](doc/manual.html#util_match-highlighter).
-   New [.properties](mode/properties/index.html) mode.
-   Fix many bugs.

27-01-2012: [Version 2.21](http://codemirror.net/codemirror-2.21.zip):

-   Added [LESS](mode/less/index.html), [MySQL](mode/mysql/index.html), [Go](mode/go/index.html), and [Verilog](mode/verilog/index.html) modes.
-   Add [`smartIndent`](doc/manual.html#option_smartIndent) option.
-   Support a cursor in [`readOnly`](doc/manual.html#option_readOnly)-mode.
-   Support assigning multiple styles to a token.
-   Use a new approach to drawing the selection.
-   Add [`scrollTo`](doc/manual.html#scrollTo) method.
-   Allow undo/redo events to span non-adjacent lines.
-   Lots and lots of bugfixes.

20-12-2011: [Version 2.2](http://codemirror.net/codemirror-2.2.zip):

-   Slightly incompatible API changes. Read [this](doc/upgrade_v2.2.html).
-   New approach to [binding](doc/manual.html#option_extraKeys) keys, support for [custom bindings](doc/manual.html#option_keyMap).
-   Support for overwrite (insert).
-   [Custom-width](doc/manual.html#option_tabSize) and [stylable](demo/visibletabs.html) tabs.
-   Moved more code into [add-on scripts](doc/manual.html#addons).
-   Support for sane vertical cursor movement in wrapped lines.
-   More reliable handling of editing [marked text](doc/manual.html#markText).
-   Add minimal [emacs](demo/emacs.html) and [vim](demo/vim.html) bindings.
-   Rename `coordsFromIndex` to [`posFromIndex`](doc/manual.html#posFromIndex), add [`indexFromPos`](doc/manual.html#indexFromPos) method.

21-11-2011: [Version 2.18](http://codemirror.net/codemirror-2.18.zip):

Fixes `TextMarker.clear`, which is broken in 2.17.

21-11-2011: [Version 2.17](http://codemirror.net/codemirror-2.17.zip):

-   Add support for [line wrapping](doc/manual.html#option_lineWrapping) and [code folding](doc/manual.html#hideLine).
-   Add [Github-style Markdown](mode/gfm/index.html) mode.
-   Add [Monokai](theme/monokai.css) and [Rubyblue](theme/rubyblue.css) themes.
-   Add [`setBookmark`](doc/manual.html#setBookmark) method.
-   Move some of the demo code into reusable components under [`lib/util`](lib/util/).
-   Make screen-coord-finding code faster and more reliable.
-   Fix drag-and-drop in Firefox.
-   Improve support for IME.
-   Speed up content rendering.
-   Fix browser’s built-in search in Webkit.
-   Make double- and triple-click work in IE.
-   Various fixes to modes.

27-10-2011: [Version 2.16](http://codemirror.net/codemirror-2.16.zip):

-   Add [Perl](mode/perl/index.html), [Rust](mode/rust/index.html), [TiddlyWiki](mode/tiddlywiki/index.html), and [Groovy](mode/groovy/index.html) modes.
-   Dragging text inside the editor now moves, rather than copies.
-   Add a [`coordsFromIndex`](doc/manual.html#coordsFromIndex) method.
-   **API change**: `setValue` now no longer clears history. Use [`clearHistory`](doc/manual.html#clearHistory) for that.
-   **API change**: [`markText`](doc/manual.html#markText) now returns an object with `clear` and `find` methods. Marked text is now more robust when edited.
-   Fix editing code with tabs in Internet Explorer.

[Older releases…](doc/oldrelease.html)

 
