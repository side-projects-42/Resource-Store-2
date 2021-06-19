<span class="logo-braces">{ }</span> [CodeMirror](http://codemirror.net/)
=========================================================================

<img src="doc/baboon.png" alt="logo" class="logo" />

    /* In-browser code editing
       made bearable */

CodeMirror is a JavaScript component that provides a code editor in the browser. When a mode is available for the language you are coding in, it will color your code, and optionally help with indentation.

A [rich programming API](doc/manual.html) and a CSS theming system are available for customizing CodeMirror to fit your application, and extending it with new functionality.

Supported modes:
----------------

-   [C, C++, C\#](mode/clike/index.html)
-   [Clojure](mode/clojure/index.html)
-   [CoffeeScript](mode/coffeescript/index.html)
-   [Common Lisp](mode/commonlisp/index.html)
-   [CSS](mode/css/index.html)
-   [D](mode/d/index.html)
-   [diff](mode/diff/index.html)
-   [ECL](mode/ecl/index.html)
-   [Erlang](mode/erlang/index.html)
-   [Go](mode/go/index.html)
-   [Groovy](mode/groovy/index.html)
-   [Haskell](mode/haskell/index.html)
-   [Haxe](mode/haxe/index.html)
-   [HTML mixed-mode](mode/htmlmixed/index.html)
-   [HTTP](mode/http/index.html)
-   [Java](mode/clike/index.html)
-   [JavaScript](mode/javascript/index.html)
-   [LESS](mode/less/index.html)
-   [Lua](mode/lua/index.html)
-   [Markdown](mode/markdown/index.html) ([GitHub-flavour](mode/gfm/index.html))
-   [NTriples](mode/ntriples/index.html)
-   [OCaml](mode/ocaml/index.html)
-   [Pascal](mode/pascal/index.html)
-   [Perl](mode/perl/index.html)
-   [PHP](mode/php/index.html)
-   [Properties files](mode/properties/index.html)
-   [Python](mode/python/index.html)
-   [R](mode/r/index.html)
-   [reStructuredText](mode/rst/index.html)
-   [Ruby](mode/ruby/index.html)
-   [Rust](mode/rust/index.html)
-   [Sass](mode/sass/index.html)
-   [Scala](mode/clike/scala.html)
-   [Scheme](mode/scheme/index.html)
-   [Shell](mode/shell/index.html)
-   [Smalltalk](mode/smalltalk/index.html)
-   [Smarty](mode/smarty/index.html)
-   [SQL](mode/sql/index.html) (several dialects)
-   [SPARQL](mode/sparql/index.html)
-   [sTeX, LaTeX](mode/stex/index.html)
-   [Tcl](mode/tcl/index.html)
-   [VB.NET](mode/vb/index.html)
-   [VBScript](mode/vbscript/index.html)
-   [Velocity](mode/velocity/index.html)
-   [XML/HTML](mode/xml/index.html)
-   [XQuery](mode/xquery/index.html)
-   [YAML](mode/yaml/index.html)
-   [Z80](mode/z80/index.html)
-   [Full list…](doc/modes.html)

Usage demos:
------------

-   [Autocompletion](demo/complete.html) ([XML](demo/xmlcomplete.html))
-   [Search/replace](demo/search.html)
-   [Code folding](demo/folding.html)
-   [Bi-directional text](demo/bidi.html)
-   [Line widgets](demo/widget.html) (via JSHint)
-   [Split view](demo/buffers.html)
-   [Mode overlays](demo/mustache.html)
-   [Mode multiplexer](demo/multiplex.html)
-   [HTML editor with preview](demo/preview.html)
-   [Auto-resizing editor](demo/resize.html)
-   [Setting breakpoints](demo/marker.html)
-   [Highlighting the current line](demo/activeline.html)
-   [Highlighting selection matches](demo/matchhighlighter.html)
-   [Theming](demo/theme.html)
-   [Mixed font sizes](demo/variableheight.html)
-   [Stand-alone highlighting](demo/runmode.html)
-   [Full-screen editing](demo/fullscreen.html)
-   [Mode auto-changing](demo/changemode.html)
-   [Visible tabs](demo/visibletabs.html)
-   [Emacs keybindings](demo/emacs.html)
-   [Vim keybindings](demo/vim.html)
-   [Automatic xml tag closing](demo/closetag.html)
-   [Lazy mode loading](demo/loadmode.html)
-   [Document tree visualization](demo/btree.html)

Real-world uses:
----------------

-   [Light Table](http://www.chris-granger.com/2012/04/12/light-table---a-new-ide-concept/)
-   [Adobe Brackets](http://brackets.io)
-   [jsbin.com](http://jsbin.com)
-   [jsfiddle.net](http://jsfiddle.net)
-   [Bitbucket](http://blog.bitbucket.org/2013/05/14/edit-your-code-in-the-cloud-with-bitbucket/)
-   [Google Apps Script](https://script.google.com/)
-   [Eloquent JavaScript](http://eloquentjavascript.net/chapter1.html)
-   [Emmet](http://emmet.io)
-   [Prose.io](http://prose.io/)
-   [Upsource](https://upsource.jetbrains.com/#idea/view/923f30395f2603cd9f42a32bcafd13b6c28de0ff/plugins/groovy/src/org/jetbrains/plugins/groovy/intentions/style/ReplaceAbstractClassInstanceByMapIntention.java)
-   [Paper.js](http://paperjs.org/)
-   [Codev](http://codev.it/)
-   [Tributary](http://enjalot.com/tributary/2636296/sinwaves.js)
-   [WeScheme](http://www.wescheme.org/)
-   [Mergely](http://www.mergely.com/)
-   [WebGL playground](http://webglplayground.net/)
-   [The File Tree](https://thefiletree.com)
-   [JSHint](http://www.jshint.com/)
-   [SQLFiddle](http://sqlfiddle.com)
-   [CSSDeck](http://cssdeck.com/)
-   [sketchPatch Livecodelab](http://www.sketchpatch.net/labs/livecodelabIntro.html)
-   [NoTex](https://notex.ch)
-   [GitHub’s Android app](https://github.com/github/android)
-   [More…](doc/realworld.html)

Getting the code
----------------

All of CodeMirror is released under a [MIT-style](LICENSE) license. To get it, you can download the [latest release](http://codemirror.net/codemirror.zip) or the current [development snapshot](http://codemirror.net/codemirror-latest.zip) as zip files. To create a custom minified script file, you can use the [compression API](doc/compress.html).

We use [git](http://git-scm.com/) for version control. The main repository can be fetched in this way:

    git clone http://marijnhaverbeke.nl/git/codemirror

CodeMirror can also be found on GitHub at [marijnh/CodeMirror](http://github.com/marijnh/CodeMirror). If you plan to hack on the code and contribute patches, the best way to do it is to create a GitHub fork, and send pull requests.

Documentation
-------------

The [manual](doc/manual.html) is your first stop for learning how to use this library. It starts with a quick explanation of how to use the editor, and then describes the API in detail.

For those who want to learn more about the code, there is a [series of posts](http://marijnhaverbeke.nl/blog/#cm-internals) on CodeMirror on my blog, and the old [overview of the editor internals](doc/internals.html). The [source code](http://github.com/marijnh/CodeMirror) itself is, for the most part, also very readable.

Support and bug reports
-----------------------

Community discussion, questions, and informal bug reporting is done on the [CodeMirror Google group](http://groups.google.com/group/codemirror). There is a separate group, [CodeMirror-announce](http://groups.google.com/group/codemirror-announce), which is lower-volume, and is only used for major announcements—new versions and such. These will be cross-posted to both groups, so you don’t need to subscribe to both.

Though bug reports through e-mail are responded to, the preferred way to report bugs is to use the [GitHub issue tracker](http://github.com/marijnh/CodeMirror/issues). Before reporting a bug, [read these pointers](doc/reporting.html). Also, the issue tracker is for *bugs*, not requests for help.

When none of these seem fitting, you can simply [e-mail the maintainer](mailto:marijnh@gmail.com) directly.

Supported browsers
------------------

The following *desktop* browsers are able to run CodeMirror:

-   Firefox 3 or higher
-   Chrome, any version
-   Safari 5.2 or higher
-   Opera 9 or higher (with some key-handling problems on OS X)
-   Internet Explorer 8 or higher  
-   Internet Explorer 7 (standards mode) is usable, but buggy. It has a [z-index bug](http://therealcrisp.xs4all.nl/meuk/IE-zindexbug.html) that prevents CodeMirror from working properly.

Note that CodeMirror is only supported in **standards** mode. So not quirks mode, but *also* not the quasi-standards mode that IE gives you when you specify a transitional doctype. Simply using the HTML5-style `<!doctype html>` is recommended.

Mobile browsers mostly kind of work, but, because of limitations and their fundamentally different UI assumptions, show a lot of quirks that are hard to work around.

Commercial support
------------------

CodeMirror is developed and maintained by me, Marijn Haverbeke, in my own time. If your company is getting value out of CodeMirror, please consider purchasing a support contract.

-   You’ll be funding further work on CodeMirror.
-   You ensure that you get a quick response when you have a problem, even when I am otherwise busy.

CodeMirror support contracts exist in two forms—**basic** at €100 per month, and **premium** at €500 per month. [Contact me](mailto:marijnh@gmail.com) for further information.

<a href="http://codemirror.net/codemirror.zip" class="download">Download the latest release</a>

Support CodeMirror
------------------

-   Donate (<span class="quasilink" onclick="document.getElementById('paypal').submit();">Paypal</span>, <span class="quasilink" onclick="document.getElementById('bankinfo').style.display = 'block';">bank</span>, [Gittip](https://www.gittip.com/marijnh), or [Flattr](https://flattr.com/profile/marijnh))
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
-   [Browse the code](http://github.com/marijnh/CodeMirror)

Releases
--------

20-05-2013: [Version 3.13](http://codemirror.net/codemirror-3.13.zip):

-   New modes: [COBOL](mode/cobol/index.html) and [HAML](mode/haml/index.html).
-   New options: [`cursorScrollMargin`](doc/manual.html#option_cursorScrollMargin) and [`coverGutterNextToScrollbar`](doc/manual.html#option_coverGutterNextToScrollbar).
-   New addon: [commenting](doc/manual.html#addon_comment).
-   More features added to the [Vim keymap](demo/vim.html).
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.12...3.13.0).

19-04-2013: [Version 3.12](http://codemirror.net/codemirror-3.12.zip):

-   New mode: [GNU assembler](mode/gas/index.html).
-   New options: [`maxHighlightLength`](doc/manual.html#option_maxHighlightLength) and [`historyEventDelay`](doc/manual.html#option_historyEventDelay).
-   Added [`addToHistory`](doc/manual.html#mark_addToHistory) option for `markText`.
-   Various fixes to JavaScript tokenization and indentation corner cases.
-   Further improvements to the vim mode.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.11...v3.12).

20-03-2013: [Version 3.11](http://codemirror.net/codemirror-3.11.zip):

-   **Removed code:** `collapserange`, `formatting`, and `simple-hint` addons. `plsql` and `mysql` modes (use [`sql`](mode/sql/index.html) mode).
-   **Moved code:** the range-finding functions for folding now have [their own files](addon/fold/).
-   **Changed interface:** the [`continuecomment`](doc/manual.html#addon_continuecomment) addon now exposes an option, rather than a command.
-   New modes: [SCSS](mode/css/scss.html), [Tcl](mode/tcl/index.html), [LiveScript](mode/livescript/index.html), and [mIRC](mode/mirc/index.html).
-   New addons: [`placeholder`](demo/placeholder.html), [HTML completion](demo/html5complete.html).
-   New methods: [`hasFocus`](doc/manual.html#hasFocus), [`defaultCharWidth`](doc/manual.html#defaultCharWidth).
-   New events: [`beforeCursorEnter`](doc/manual.html#event_beforeCursorEnter), [`renderLine`](doc/manual.html#event_renderLine).
-   Many improvements to the [`show-hint`](doc/manual.html#addon_show-hint) completion dialog addon.
-   Tweak behavior of by-word cursor motion.
-   Further improvements to the [vim mode](demo/vim.html).
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.1...v3.11).

21-02-2013: [Version 3.1](http://codemirror.net/codemirror-3.1.zip):

-   **Incompatible:** key handlers may now *return*, rather than *throw* `CodeMirror.Pass` to signal they didn’t handle the key.
-   Make documents a [first-class construct](doc/manual.html#api_doc), support split views and subviews.
-   Add a [new module](doc/manual.html#addon_show-hint) for showing completion hints. Deprecate `simple-hint.js`.
-   Extend [htmlmixed mode](mode/htmlmixed/index.html) to allow custom handling of script types.
-   Support an `insertLeft` option to [`setBookmark`](doc/manual.html#setBookmark).
-   Add an [`eachLine`](doc/manual.html#eachLine) method to iterate over a document.
-   New addon modules: [selection marking](demo/markselection.html), [linting](demo/lint.html), and [automatic bracket closing](demo/closebrackets.html).
-   Add [`"beforeChange"`](doc/manual.html#event_beforeChange) and [`"beforeSelectionChange"`](doc/manual.html#event_beforeSelectionChange) events.
-   Add [`"hide"`](doc/manual.html#event_hide) and [`"unhide"`](doc/manual.html#event_unhide) events to marked ranges.
-   Fix [`coordsChar`](doc/manual.html#coordsChar)’s interpretation of its argument to match the documentation.
-   New modes: [Turtle](mode/turtle/index.html) and [Q](mode/q/index.html).
-   Further improvements to the [vim mode](demo/vim.html).
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.01...v3.1).

25-01-2013: [Version 3.02](http://codemirror.net/codemirror-3.02.zip):

Single-bugfix release. Fixes a problem that prevents CodeMirror instances from being garbage-collected after they become unused.

21-01-2013: [Version 3.01](http://codemirror.net/codemirror-3.01.zip):

-   Move all add-ons into an organized directory structure under [`/addon`](addon/). **You might have to adjust your paths.**
-   New modes: [D](mode/d/index.html), [Sass](mode/sass/index.html), [APL](mode/apl/index.html), [SQL](mode/sql/index.html) (configurable), and [Asterisk](mode/asterisk/index.html).
-   Several bugfixes in right-to-left text support.
-   Add [`rtlMoveVisually`](doc/manual.html#option_rtlMoveVisually) option.
-   Improvements to vim keymap.
-   Add built-in (lightweight) [overlay mode](doc/manual.html#addOverlay) support.
-   Support `showIfHidden` option for [line widgets](doc/manual.html#addLineWidget).
-   Add simple [Python hinter](doc/manual.html#addon_python-hint).
-   Bring back the [`fixedGutter`](doc/manual.html#option_fixedGutter) option.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.0...v3.01).

21-01-2013: [Version 2.38](http://codemirror.net/codemirror-2.38.zip):

Integrate some bugfixes, enhancements to the vim keymap, and new modes ([D](mode/d/index.html), [Sass](mode/sass/index.html), [APL](mode/apl/index.html)) from the v3 branch.

20-12-2012: [Version 2.37](http://codemirror.net/codemirror-2.37.zip):

-   New mode: [SQL](mode/sql/index.html) (will replace [plsql](mode/plsql/index.html) and [mysql](mode/mysql/index.html) modes).
-   Further work on the new VIM mode.
-   Fix Cmd/Ctrl keys on recent Operas on OS X.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v2.36...v2.37).

10-12-2012: [Version 3.0](http://codemirror.net/codemirror-3.0.zip):

**New major version**. Only partially backwards-compatible. See the [upgrading guide](doc/upgrade_v3.html) for more information. Changes since release candidate 2:

-   Rewritten VIM mode.
-   Fix a few minor scrolling and sizing issues.
-   Work around Safari segfault when dragging.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.0rc2...v3.0).

20-11-2012: [Version 3.0, release candidate 2](http://codemirror.net/codemirror-3.0rc2.zip):

-   New mode: [HTTP](mode/http/index.html).
-   Improved handling of selection anchor position.
-   Improve IE performance on longer lines.
-   Reduce gutter glitches during horiz. scrolling.
-   Add [`addKeyMap`](doc/manual.html#addKeyMap) and [`removeKeyMap`](doc/manual.html#removeKeyMap) methods.
-   Rewrite `formatting` and `closetag` add-ons.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v3.0rc1...v3.0rc2).

20-11-2012: [Version 2.36](http://codemirror.net/codemirror-2.36.zip):

-   New mode: [Z80 assembly](mode/z80/index.html).
-   New theme: [Twilight](demo/theme.html?twilight).
-   Add command-line compression helper.
-   Make [`scrollIntoView`](doc/manual.html#scrollIntoView) public.
-   Add [`defaultTextHeight`](doc/manual.html#defaultTextHeight) method.
-   Various extensions to the vim keymap.
-   Make [PHP mode](mode/php/index.html) build on [mixed HTML mode](mode/htmlmixed/index.html).
-   Add [comment-continuing](doc/manual.html#addon_continuecomment) add-on.
-   Full [list of patches](https://github.com/marijnh/CodeMirror/compare/v2.35...v2.36).

[Older releases…](doc/oldrelease.html)

 
