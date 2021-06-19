CodeMirror

[<img src="doc/logo.png" id="logo" />](http://codemirror.net)

-   <a href="#description" class="active">Home</a>
-   [Manual](doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Features](#features)
-   [Community](#community)
-   [Browser support](#browsersupport)

**CodeMirror** is a versatile text editor implemented in JavaScript for the browser. It is specialized for editing code, and comes with a number of language modes and addons that implement more advanced editing functionality.

A rich [programming API](doc/manual.html#api) and a CSS [theming](doc/manual.html#styling) system are available for customizing CodeMirror to fit your application, and extending it with new functionality.

This is CodeMirror
------------------

Other demos… Autocompletion Code folding Themes Mixed language modes Bi-directional text Variable font sizes Search interface Vim bindings Emacs bindings Sublime Text bindings Tern integration Merge/diff interface Full-screen editor

<a href="http://codemirror.net/codemirror.zip" class="bigbutton left">DOWNLOAD LATEST RELEASE</a>

**version 4.0** ([Release notes](doc/releases.html))

or use the [minification helper](doc/compress.html)

<span class="bigbutton right" onclick="document.getElementById('paypal').submit();">DONATE WITH PAYPAL</span>

or <span class="quasilink" onclick="document.getElementById('bankinfo').style.display = 'block';">Bank</span>, [Gittip](https://www.gittip.com/marijnh), [Flattr](https://flattr.com/profile/marijnh)

<span id="bankinfo_close" onclick="document.getElementById('bankinfo').style.display = '';">×</span> Bank: *Rabobank*  
Country: *Netherlands*  
SWIFT: *RABONL2U*  
Account: *147850770*  
Name: *Marijn Haverbeke*  
IBAN: *NL26 RABO 0147 8507 70*

Purchase [commercial support](http://codemirror.com)

Features
--------

-   Support for [over 60 languages](mode/index.html) out of the box
-   A powerful, [composable](mode/htmlmixed/index.html) language mode [system](doc/manual.html#modeapi)
-   [Autocompletion](doc/manual.html#addon_show-hint) ([XML](demo/xmlcomplete.html))
-   [Code folding](doc/manual.html#addon_foldcode)
-   [Configurable](doc/manual.html#option_extraKeys) keybindings
-   [Vim](demo/vim.html), [Emacs](demo/emacs.html), and [Sublime Text](demo/sublime.html) bindings
-   [Search and replace](doc/manual.html#addon_search) interface
-   [Bracket](doc/manual.html#addon_matchbrackets) and [tag](doc/manual.html#addon_matchtags) matching
-   Support for [split views](demo/buffers.html)
-   [Linter integration](doc/manual.html#addon_lint)
-   [Mixing font sizes and styles](demo/variableheight.html)
-   [Various themes](demo/theme.html)
-   Able to [resize to fit content](demo/resize.html)
-   [Inline](doc/manual.html#mark_replacedWith) and [block](doc/manual.html#addLineWidget) widgets
-   Programmable [gutters](demo/marker.html)
-   Making ranges of text [styled, read-only, or atomic](doc/manual.html#markText)
-   [Bi-directional text](demo/bidi.html) support
-   Many other [methods](doc/manual.html#api) and [addons](doc/manual.html#addons)…

Community
---------

CodeMirror is an open-source project shared under an [MIT license](LICENSE). It is the editor used in the dev tools for both [Firefox](https://hacks.mozilla.org/2013/11/firefox-developer-tools-episode-27-edit-as-html-codemirror-more/) and [Chrome](https://developers.google.com/chrome-developer-tools/), [Light Table](http://www.lighttable.com/), [Adobe Brackets](http://brackets.io/), [Bitbucket](http://blog.bitbucket.org/2013/05/14/edit-your-code-in-the-cloud-with-bitbucket/), and [many other projects](doc/realworld.html).

Development and bug tracking happens on [github](https://github.com/marijnh/CodeMirror/) ([alternate git repository](http://marijnhaverbeke.nl/git/codemirror)). Please [read these pointers](http://codemirror.net/doc/reporting.html) before submitting a bug. Use pull requests to submit patches. All contributions must be released under the same MIT license that CodeMirror uses.

Discussion around the project is done on a [mailing list](http://groups.google.com/group/codemirror). There is also the [codemirror-announce](http://groups.google.com/group/codemirror-announce) list, which is only used for major announcements (such as new versions). If needed, you can contact [the maintainer](mailto:marijnh@gmail.com) directly.

A list of CodeMirror-related software that is not part of the main distribution is maintained on [our wiki](https://github.com/marijnh/CodeMirror/wiki/CodeMirror-addons). Feel free to add your project.

Browser support
---------------

The *desktop* versions of the following browsers, in *standards mode* (HTML5 `<!doctype html>` recommended) are supported:

<table><tbody><tr class="odd"><td>Firefox</td><td>version 3 and up</td></tr><tr class="even"><td>Chrome</td><td>any version</td></tr><tr class="odd"><td>Safari</td><td>version 5.2 and up</td></tr><tr class="even"><td>Internet Explorer</td><td>version 8 and up</td></tr><tr class="odd"><td>Opera</td><td>version 9 and up</td></tr></tbody></table>

Modern mobile browsers tend to partly work. Bug reports and patches for mobile support are welcome, but the maintainer does not have the time or budget to actually work on it himself.
