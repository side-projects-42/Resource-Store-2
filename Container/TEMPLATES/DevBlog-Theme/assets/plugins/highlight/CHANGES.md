Version 9.12.0
--------------

New language:

-   *MikroTik* RouterOS Scripting language by [Ivan Dementev](https://github.com/DiVAN1x).

New style:

-   *VisualStudio 2015 Dark* by [Nicolas LLOBERA](https://github.com/Nicolas01)

Improvements:

-   *Crystal* updated with new keywords and syntaxes by [Tsuyusato Kitsune](https://github.com/MakeNowJust).
-   *Julia* updated to the modern definitions by [Alex Arslan](https://github.com/ararslan).
-   *julia-repl* added by [Morten Piibeleht](https://github.com/mortenpi).
-   [Stanislav Belov](https://github.com/4ppl) wrote a new definition for *1C*, replacing the one that has not been updated for more than 8 years. The new version supports syntax for versions 7.7 and 8.
-   [Nicolas LLOBERA](https://github.com/Nicolas01) improved C\# definition fixing edge cases with function titles detection and added highlighting of `[Attributes]`.
-   [nnnik](https://github.com/nnnik) provided a few correctness fixes for *Autohotkey*.
-   [Martin Clausen](https://github.com/maacl) made annotation collections in *Clojure* to look consistently with other kinds.
-   [Alejandro Alonso](https://github.com/Azoy) updated *Swift* keywords.

Version 9.11.0
--------------

New languages:

-   *Shell* by [Tsuyusato Kitsune](https://github.com/MakeNowJust)
-   *jboss-cli* by [Raphaël Parrëe](https://github.com/rparree)

Improvements:

-   \[Joël Porquet\] has [greatly improved the definition of *makefile*](https://github.com/isagalaev/highlight.js/commit/5b3e0e68bfaae282faff6697d6a490567fa9d44b).
-   *C++* class titles are now highlighted as in other languages with classes.
-   [Jordi Petit](https://github.com/jordi-petit) added rarely used `or`, `and` and `not` keywords to *C++*.
-   [Pieter Vantorre](https://github.com/NuclearCookie) fixed highlighting of negative floating point values.

Version 9.10.0
--------------

Apologies for missing the previous release cycle. Some thing just can’t be automated… Anyway, we’re back!

New languages:

-   *Hy* by [Sergey Sobko](https://github.com/profitware)
-   *Leaf* by [Hale Chan](https://github.com/halechan)
-   *N1QL* by [Andres Täht](https://github.com/andrestaht) and [Rene Saarsoo](https://github.com/nene)

Improvements:

-   *Rust* got updated with new keywords by [Kasper Andersen](https://github.com/kasma1990) and then significantly modernized even more by [Eduard-Mihai Burtescu](https://github.com/eddyb) (yes, <span class="citation" data-cites="eddyb">@eddyb</span>, Rust core team member!)
-   *Python* updated with f-literals by [Philipp A](https://github.com/flying-sheep).
-   *YAML* updated with unquoted strings support.
-   *Gauss* updated with new keywords by [Matt Evans](https://github.com/matthewevans).
-   *Lua* updated with new keywords by [Joe Blow](https://github.com/mossarelli).
-   *Kotlin* updated with new keywords by [Philipp Hauer](https://github.com/phauer).
-   *TypeScript* got highlighting of function params and updated keywords by [Ike Ku](https://github.com/dempfi).
-   *Scheme* now correctly handles \`-quoted lists thanks to [Guannan Wei](https://github.com/Kraks).
-   [Sam Wu](https://github.com/samsam2310) fixed handling of `<<` in *C++* defines.

Version 9.9.0
-------------

New languages

-   *LLVM* by [Michael Rodler](https://github.com/f0rki)

Improvements:

-   *TypeScript* updated with annotations and param lists inside constructors, by [Raphael Parree](https://github.com/rparree).
-   *CoffeeScript* updated with new keywords and fixed to recognize JavaScript in \`\`\`, thanks to thanks to [Geoffrey Booth](https://github.com/GeoffreyBooth).
-   Compiler directives in *Delphi* are now correctly highlighted as “meta”.

Version 9.8.0 “New York”
------------------------

This version is the second one that deserved a name. Because I’m in New York, and the release isn’t missing the deadline only because it’s still Tuesday on West Coast.

New languages:

-   *Clean* by [Camil Staps](https://github.com/camilstaps)
-   *Flix* by [Magnus Madsen](https://github.com/magnus-madsen)

Improvements:

-   [Kenton Hamaluik](https://github.com/FuzzyWuzzie) did a comprehensive update for *Haxe*.
-   New commands for *PowerShell* from [Nicolas Le Gall](https://github.com/darkitty).
-   [Jan T. Sott](https://github.com/idleberg) updated *NSIS*.
-   *Java* and *Swift* support unicode characters in identifiers thanks to [Alexander Lichter](https://github.com/manniL).

Version 9.7.0
-------------

A comprehensive bugfix release. This is one of the best things about highlight.js: even boring things keep getting better (even if slow).

-   VHDL updated with PSL keywords and uses more consistent styling.
-   Nested C-style comments no longer break highlighting in many languages.
-   JavaScript updated with `=>` functions, highlighted object attributes and parsing within template string substitution blocks (`${...}`).
-   Fixed another corner case with self-closing `<tag/>` in JSX.
-   Added `HEALTHCHECK` directive in Docker.
-   Delphi updated with new Free Pascal keywords.
-   Fixed digit separator parsing in C++.
-   C\# updated with new keywords and fixed to allow multiple identifiers within generics `<...>`.
-   Fixed another slow regex in Less.

Version 9.6.0
-------------

New languages:

-   *ABNF* and *EBNF* by [Alex McKibben](https://github.com/mckibbenta)
-   *Awk* by [Matthew Daly](https://github.com/matthewbdaly)
-   *SubUnit* by [Sergey Bronnikov](https://github.com/ligurio)

New styles:

-   *Atom One* in both Dark and Light variants by [Daniel Gamage](https://github.com/danielgamage)

Plus, a few smaller updates for *Lasso*, *Elixir*, *C++* and *SQL*.

Version 9.5.0
-------------

New languages:

-   *Excel* by [Victor Zhou](https://github.com/OiCMudkips)
-   *Linden Scripting Language* by [Builder’s Brewery](https://github.com/buildersbrewery)
-   *TAP* (Test Anything Protocol) by [Sergey Bronnikov](https://github.com/ligurio)
-   *Pony* by [Joe Eli McIlvain](https://github.com/jemc)
-   *Coq* by [Stephan Boyer](https://github.com/boyers)
-   *dsconfig* and *LDIF* by [Jacob Childress](https://github.com/braveulysses)

New styles:

-   *Ocean Dark* by [Gavin Siu](https://github.com/gavsiu)

Notable changes:

-   [Minh Nguyễn](https://github.com/1ec5) added more built-ins to Objective C.
-   [Jeremy Hull](https://github.com/sourrust) fixed corner cases in C++ preprocessor directives and Diff comments.
-   [Victor Zhou](https://github.com/OiCMudkips) added support for digit separators in C++ numbers.

Version 9.4.0
-------------

New languages:

-   *PureBASIC* by [Tristano Ajmone](https://github.com/tajmone)
-   *BNF* by [Oleg Efimov](https://github.com/sannis)
-   *Ada* by [Lars Schulna](https://github.com/captain-hanuta)

New styles:

-   *PureBASIC* by [Tristano Ajmone](https://github.com/tajmone)

Improvements to existing languages and styles:

-   We now highlight function declarations in Go.
-   [Taisuke Fujimoto](https://github.com/temp-impl) contributed very convoluted rules for raw and interpolated strings in C\#.
-   [Boone Severson](https://github.com/BooneJS) updated Verilog to comply with IEEE 1800-2012 SystemVerilog.
-   [Victor Zhou](https://github.com/OiCMudkips) improved rules for comments and strings in PowerShell files.
-   [Janis Voigtländer](https://github.com/jvoigtlaender) updated the definition of Elm to version 0.17 of the languages. Elm is now featured on the front page of <a href="https://highlightjs.org" class="uri">https://highlightjs.org</a>.
-   Special variable `$this` is highlighted as a keyword in PHP.
-   `usize` and `isize` are now highlighted in Rust.
-   Fixed labels and directives in x86 assembler.

Version 9.3.0
-------------

New languages:

-   *Tagger Script* by [Philipp Wolfer](https://github.com/phw)
-   *MoonScript* by [Billy Quith](https://github.com/billyquith)

New styles:

-   *xt256* by [Herbert Shin](https://github.com/initbar)

Improvements to existing languages and styles:

-   More robust handling of unquoted HTML tag attributes
-   Relevance tuning for QML which was unnecessary eager at seizing other languages’ code
-   Improve GAMS language parsing
-   Fixed a bunch of bugs around selectors in Less
-   Kotlin’s got a new definition for annotations, updated keywords and other minor improvements
-   Added `move` to Rust keywords
-   Markdown now recognizes \`\`\`-fenced code blocks
-   Improved detection of function declarations in C++ and C\#

Version 9.2.0
-------------

New languages:

-   *QML* by [John Foster](https://github.com/jf990)
-   *HTMLBars* by [Michael Johnston](https://github.com/lastobelus)
-   *CSP* by [Taras](https://github.com/oxdef)
-   *Maxima* by [Robert Dodier](https://github.com/robert-dodier)

New styles:

-   *Gruvbox* by [Qeole](https://github.com/Qeole)
-   *Dracula* by [Denis Ciccale](https://github.com/dciccale)

Improvements to existing languages and styles:

-   We now correctly handle JSX with arbitrary node tree depth.
-   Argument list for `(lambda)` in Scheme is no longer highlighted as a function call.
-   Stylus syntax doesn’t break on valid CSS.
-   More correct handling of comments and strings and other improvements for VimScript.
-   More subtle work on the default style.
-   We now use anonymous modules for AMD.
-   `macro_rules!` is now recognized as a built-in in Rust.

Version 9.1.0
-------------

New languages:

-   *Stan* by [Brendan Rocks](http://brendanrocks.com)
-   *BASIC* by [Raphaël Assénat](https://github.com/raphnet)
-   *GAUSS* by [Matt Evans](https://github.com/matthewevans)
-   *DTS* by [Martin Braun](https://github.com/mbr0wn)
-   *Arduino* by [Stefania Mellai](https://github.com/smellai)

New Styles:

-   *Arduino Light* by [Stefania Mellai](https://github.com/smellai)

Improvements to existing languages and styles:

-   Handle return type annotations in Python
-   Allow shebang headers in Javascript
-   Support strings in Rust meta
-   Recognize `struct` as a class-level definition in Rust
-   Recognize b-prefixed chars and strings in Rust
-   Better numbers handling in Verilog

Version 9.0.0
-------------

The new major version brings a reworked styling system. Highlight.js now defines a limited set of highlightable classes giving a consistent result across all the styles and languages. You can read a more detailed explanation and background in the [tracking issue](https://github.com/isagalaev/highlight.js/issues/348) that started this long process back in May.

This change is backwards incompatible for those who uses highlight.js with a custom stylesheet. The [new style guide](http://highlightjs.readthedocs.org/en/latest/style-guide.html) explains how to write styles in this new world.

Bundled themes have also suffered a significant amount of improvements and may look different in places, but all the things now consistent and make more sense. Among others, the Default style has got a refresh and will probably be tweaked some more in next releases. Please do give your feedback in our [issue tracker](https://github.com/isagalaev/highlight.js/issues).

New languages in this release:

-   *Caché Object Script* by [Nikita Savchenko](https://github.com/ZitRos)
-   *YAML* by [Stefan Wienert](https://github.com/zealot128)
-   *MIPS Assembler* by [Nebuleon Fumika](https://github.com/Nebuleon)
-   *HSP* by [prince](https://github.com/prince-0203)

Improvements to existing languages and styles:

-   ECMAScript 6 modules import now do not require closing semicolon.
-   ECMAScript 6 classes constructors now highlighted.
-   Template string support for Typescript, as for ECMAScript 6.
-   Scala case classes params highlight fixed.
-   Built-in names introduced in Julia v0.4 added by [Kenta Sato](https://github.com/bicycle1885).
-   Refreshed Default style.

Other notable changes:

-   [Web workers support](https://github.com/isagalaev/highlight.js#web-workers) added bu [Jan Kühle](https://github.com/frigus02).
-   We now have tests for compressed browser builds as well.
-   The building tool chain has been switched to node.js 4.x. and is now shamelessly uses ES6 features all over the place, courtesy of [Jeremy Hull](https://github.com/sourrust).
-   License added to non-compressed browser build.

Version 8.9.1
-------------

Some last-minute changes reverted due to strange bug with minified browser build:

-   Scala case classes params highlight fixed
-   ECMAScript 6 modules import now do not require closing semicolon
-   ECMAScript 6 classes constructors now highlighted
-   Template string support for Typescript, as for ECMAScript 6
-   License added to not minified browser build

Version 8.9.0
-------------

New languages:

-   *crmsh* by [Kristoffer Gronlund](https://github.com/krig)
-   *SQF* by [Soren Enevoldsen](https://github.com/senevoldsen90)

Notable fixes and improvements to existing languages:

-   Added `abstract` and `namespace` keywords to TypeScript by [Daniel Rosenwasser](https://github.com/DanielRosenwasser)
-   Added `label` support to Dockerfile by [Ladislav Prskavec](https://github.com/abtris)
-   Crystal highlighting improved by [Tsuyusato Kitsune](https://github.com/MakeNowJust)
-   Missing Swift keywords added by [Nate Cook](https://github.com/natecook1000)
-   Improve detection of C block comments
-   <s>Scala case classes params highlight fixed</s>
-   <s>ECMAScript 6 modules import now do not require closing semicolon</s>
-   <s>ECMAScript 6 classes constructors now highlighted</s>
-   <s>Template string support for Typescript, as for ECMAScript 6</s>

Other notable changes:

-   <s>License added to not minified browser build</s>

Version 8.8.0
-------------

New languages:

-   *Golo* by [Philippe Charrière](https://github.com/k33g)
-   *GAMS* by [Stefan Bechert](https://github.com/b-pos465)
-   *IRPF90* by [Anthony Scemama](https://github.com/scemama)
-   *Access logs* by [Oleg Efimov](https://github.com/sannis)
-   *Crystal* by [Tsuyusato Kitsune](https://github.com/MakeNowJust)

Notable fixes and improvements to existing languages:

-   JavaScript highlighting no longer fails with ES6 default parameters
-   Added keywords `async` and `await` to Python
-   PHP heredoc support improved
-   Allow preprocessor directives within C++ functions

Other notable changes:

-   Change versions to X.Y.Z SemVer-compatible format
-   Added ability to build all targets at once

Version 8.7
-----------

New languages:

-   *Zephir* by [Oleg Efimov](https://github.com/sannis)
-   *Elm* by [Janis Voigtländer](https://github.com/jvoigtlaender)
-   *XQuery* by [Dirk Kirsten](https://github.com/dirkk)
-   *Mojolicious* by [Dotan Dimet](https://github.com/dotandimet)
-   *AutoIt* by Manh Tuan from [J2TeaM](https://github.com/J2TeaM)
-   *Toml* (ini extension) by [Guillaume Gomez](https://github.com/GuillaumeGomez)

New styles:

-   *Hopscotch* by [Jan T. Sott](https://github.com/idleberg)
-   *Grayscale* by [MY Sun](https://github.com/simonmysun)

Notable fixes and improvements to existing languages:

-   Fix encoding of images when copied over in certain builds
-   Fix incorrect highlighting of the word “bug” in comments
-   Treat decorators different from matrix multiplication in Python
-   Fix traits inheritance highlighting in Rust
-   Fix incorrect document
-   Oracle keywords added to SQL language definition by [Vadimtro](https://github.com/Vadimtro)
-   Postgres keywords added to SQL language definition by [Benjamin Auder](https://github.com/ghost)
-   Fix registers in x86asm being highlighted as a hex number
-   Fix highlighting for numbers with a leading decimal point
-   Correctly highlight numbers and strings inside of C/C++ macros
-   C/C++ functions now support pointer, reference, and move returns

Version 8.6
-----------

New languages:

-   *C/AL* by [Kenneth Fuglsang](https://github.com/kfuglsang)
-   *DNS zone file* by [Tim Schumacher](https://github.com/enko)
-   *Ceylon* by [Lucas Werkmeister](https://github.com/lucaswerkmeister)
-   *OpenSCAD* by [Dan Panzarella](https://github.com/pzl)
-   *Inform7* by [Bruno Dias](https://github.com/sequitur)
-   *armasm* by [Dan Panzarella](https://github.com/pzl)
-   *TP* by [Jay Strybis](https://github.com/unreal)

New styles:

-   *Atelier Cave*, *Atelier Estuary*, *Atelier Plateau* and *Atelier Savanna* by [Bram de Haan](https://github.com/atelierbram)
-   *Github Gist* by [Louis Barranqueiro](https://github.com/LouisBarranqueiro)

Notable fixes and improvements to existing languages:

-   Multi-line raw strings from C++11 are now supported
-   Fix class names with dashes in HAML
-   The `async` keyword from ES6/7 is now supported
-   TypeScript functions handle type and parameter complexity better
-   We unified phpdoc/javadoc/yardoc etc modes across all languages
-   CSS .class selectors relevance was dropped to prevent wrong language detection
-   Images is now included to CDN build
-   Release process is now automated

Version 8.5
-----------

New languages:

-   *pf.conf* by [Peter Piwowarski](https://github.com/oldlaptop)
-   *Julia* by [Kenta Sato](https://github.com/bicycle1885)
-   *Prolog* by [Raivo Laanemets](https://github.com/rla)
-   *Docker* by [Alexis Hénaut](https://github.com/AlexisNo)
-   *Fortran* by [Anthony Scemama](https://github.com/scemama) and [Thomas Applencourt](https://github.com/TApplencourt)
-   *Kotlin* by [Sergey Mashkov](https://github.com/cy6erGn0m)

New styles:

-   *Agate* by [Taufik Nurrohman](https://github.com/tovic)
-   *Darcula* by \[JetBrains\]\[\]
-   *Atelier Sulphurpool* by [Bram de Haan](https://github.com/atelierbram)
-   *Android Studio* by [Pedro Oliveira](https://github.com/kanytu)

Notable fixes and improvements to existing languages:

-   ES6 features in JavaScript are better supported now by [Gu Yiling](https://github.com/Justineo).
-   Swift now recognizes body-less method definitions.
-   Single expression functions `def foo, do: ...` now work in Elixir.
-   More uniform detection of built-in classes in Objective C.
-   Fixes for number literals and processor directives in Rust.
-   HTML `<script>` tag now allows any language, not just JavaScript.
-   Multi-line comments are supported now in MatLab.

Version 8.4
-----------

We’ve got the new [demo page](https://highlightjs.org/static/demo/)! The obvious new feature is the new look, but apart from that it’s got smarter: by presenting languages in groups it avoids running 10000 highlighting attempts after first load which was slowing it down and giving bad overall impression. It is now also being generated from test code snippets so the authors of new languages don’t have to update both tests and the demo page with the same thing.

Other notable changes:

-   The `template_comment` class is gone in favor of the more general `comment`.
-   Number parsing unified and improved across languages.
-   C++, Java and C\# now use unified grammar to highlight titles in function/method definitions.
-   The browser build is now usable as an AMD module, there’s no separate build target for that anymore.
-   OCaml has got a [comprehensive overhaul](https://github.com/isagalaev/highlight.js/pull/608#issue-46190207) by [Mickaël Delahaye](https://github.com/polazarus).
-   Clojure’s data structures and literals are now highlighted outside of lists and we can now highlight Clojure’s REPL sessions.

New languages:

-   *AspectJ* by [Hakan Özler](https://github.com/ozlerhakan)
-   *STEP Part 21* by [Adam Joseph Cook](https://github.com/adamjcook)
-   *SML* derived by [Edwin Dalorzo](https://github.com/edalorzo) from OCaml definition
-   *Mercury* by [mucaho](https://github.com/mucaho)
-   *Smali* by [Dennis Titze](https://github.com/titze)
-   *Verilog* by [Jon Evans](https://github.com/craftyjon)
-   *Stata* by [Brian Quistorff](https://github.com/bquistorff)

Version 8.3
-----------

We streamlined our tool chain, it is now based entirely on node.js instead of being a mix of node.js, Python and Java. The build script options and arguments remained the same, and we’ve noted all the changes in the [documentation](http://highlightjs.readthedocs.org/en/latest/building-testing.html). Apart from reducing complexity, the new build script is also faster from not having to start Java machine repeatedly. The credits for the work go to [Jeremy Hull](https://github.com/sourrust).

Some notable fixes:

-   PHP and JavaScript mixed in HTML now live happily with each other.
-   JavaScript regexes now understand ES6 flags “u” and “y”.
-   `throw` keyword is no longer detected as a method name in Java.
-   Fixed parsing of numbers and symbols in Clojure thanks to [input from Ivan Kleshnin](http://kalnitsky.org.ua/).

New languages in this release:

-   *Less* by [Max Mikhailov](https://github.com/seven-phases-max)
-   *Stylus* by [Bryant Williams](https://github.com/scien)
-   *Tcl* by [Radek Liska](https://github.com/Nindaleth)
-   *Puppet* by [Jose Molina Colmenero](https://github.com/Moliholy)
-   *Processing* by [Erik Paluka](https://github.com/paluka)
-   *Twig* templates by [Luke Holder](https://github.com/lukeholder)
-   *PowerShell* by [David Mohundro](https://github.com/drmohundro), based on [the work of Nicholas Blumhardt](https://github.com/OctopusDeploy/Library/blob/master/app/shared/presentation/highlighting/powershell.js)
-   *XL* by [Christophe de Dinechin](https://github.com/c3d)
-   *LiveScript* by [Taneli Vatanen](https://github.com/Daiz-) and [Jen Evers-Corvina](https://github.com/sevvie)
-   *ERB* (Ruby in HTML) by [Lucas Mazza](https://github.com/lucasmazza)
-   *Roboconf* by [Vincent Zurczak](https://github.com/vincent-zurczak)

Version 8.2
-----------

We’ve finally got [real tests](https://github.com/isagalaev/highlight.js/tree/master/test) and [continuous testing on Travis](https://travis-ci.org/isagalaev/highlight.js) thanks to [Jeremy Hull](https://github.com/sourrust) and [Chris Eidhof](https://github.com/chriseidhof). The tests designed to cover everything: language detection, correct parsing of individual language features and various special cases. This is a very important change that gives us confidence in extending language definitions and refactoring library core.

We’re going to redesign the old [demo/test suite](https://highlightjs.org/static/test.html) into an interactive demo web app. If you’re confident front-end developer or designer and want to help us with it, drop a comment into [the issue](https://github.com/isagalaev/highlight.js/issues/542) on GitHub.

As usually there’s a handful of new languages in this release:

-   *Groovy* by [Guillaume Laforge](https://github.com/glaforge)
-   *Dart* by [Maxim Dikun](https://github.com/dikmax)
-   *Dust* by [Michael Allen](https://github.com/bfui)
-   *Scheme* by [JP Verkamp](https://github.com/jpverkamp)
-   *G-Code* by [Adam Joseph Cook](https://github.com/adamjcook)
-   *Q* from Kx Systems by [Sergey Vidyuk](https://github.com/sv)

Other improvements:

-   [Erik Osheim](https://github.com/non) heavily reworked Scala definitions making it richer.
-   [Lucas Mazza](https://github.com/lucasmazza) fixed Ruby hashes highlighting
-   Lisp variants (Lisp, Clojure and Scheme) are unified in regard to naming the first symbol in parentheses: it’s “keyword” in general case and also “built\_in” for built-in functions in Clojure and Scheme.

Version 8.1
-----------

New languages:

-   *Gherkin* by [Sam Pikesley](https://github.com/pikesley)
-   *Elixir* by [Josh Adams](https://github.com/knewter)
-   *NSIS* by [Jan T. Sott](https://github.com/idleberg)
-   *VIM script* by [Jun Yang](https://github.com/harttle)
-   *Protocol Buffers* by [Dan Tao](https://github.com/dtao)
-   *Nix* by [Domen Kožar](https://github.com/iElectric)
-   *x86asm* by [innocenat](https://github.com/innocenat)
-   *Cap’n Proto* and *Thrift* by [Oleg Efimov](https://github.com/sannis)
-   *Monkey* by [Arthur Bikmullin](https://github.com/devolonter)
-   *TypeScript* by [Panu Horsmalahti](https://github.com/panuhorsmalahti)
-   *Nimrod* by [Flaviu Tamas](https://github.com/flaviut)
-   *Gradle* by [Damian Mee](https://github.com/chester1000)
-   *Haxe* by [Christopher Kaster](http://christopher.kaster.ws)
-   *Swift* by [Chris Eidhof](https://github.com/chriseidhof) and [Nate Cook](https://github.com/natecook1000)

New styles:

-   *Kimbie*, light and dark variants by [Jan T. Sott](https://github.com/idleberg)
-   *Color brewer* by [Fabrício Tavares de Oliveira](https://github.com/fabriciotav)
-   *Codepen.io embed* by [Justin Perry](https://github.com/ourmaninamsterdam)
-   *Hybrid* by [Nic West](https://github.com/nicwest)

Other improvements:

-   The README is heavily reworked and brought up to date by [Jeremy Hull](https://github.com/sourrust).
-   Added [`listLanguages()`](http://highlightjs.readthedocs.org/en/latest/api.html#listlanguages) method in the API.
-   Improved C/C++/C\# detection.
-   Added a bunch of new language aliases, documented the existing ones. Thanks to [Sindre Sorhus](https://github.com/sindresorhus) for background research.
-   Added phrasal English words to boost relevance in comments.
-   Many improvements to SQL definition made by [Heiko August](https://github.com/auge8472), [Nikolay Lisienko](https://github.com/neor-ru) and [Travis Odom](https://github.com/Burstaholic).
-   The shorter `lang-` prefix for language names in HTML classes supported alongside `language-`. Thanks to [Jeff Escalante](https://github.com/jenius).
-   Ruby’s got support for interactive console sessions. Thanks to [Pascal Hurni](https://github.com/phurni).
-   Added built-in functions for R language. Thanks to [Artem A. Klevtsov](https://github.com/unikum).
-   Rust’s got definition for lifetime parameters and improved string syntax. Thanks to [Roman Shmatov](https://github.com/shmatov).
-   Various improvements to Objective-C definition by [Matt Diephouse](https://github.com/mdiep).
-   Fixed highlighting of generics in Java.

Version 8.0
-----------

This new major release is quite a big overhaul bringing both new features and some backwards incompatible changes. However, chances are that the majority of users won’t be affected by the latter: the basic scenario described in the README is left intact.

Here’s what did change in an incompatible way:

-   We’re now prefixing all classes located in [CSS classes reference](http://highlightjs.readthedocs.org/en/latest/css-classes-reference.html) with `hljs-`, by default, because some class names would collide with other people’s stylesheets. If you were using an older version, you might still want the previous behavior, but still want to upgrade. To suppress this new behavior, you would initialize like so:

        <script type="text/javascript">
          hljs.configure({classPrefix: ''});
          hljs.initHighlightingOnLoad();
        </script>

-   `tabReplace` and `useBR` that were used in different places are also unified into the global options object and are to be set using `configure(options)`. This function is documented in our [API docs](http://highlightjs.readthedocs.org/en/latest/api.html). Also note that these parameters are gone from `highlightBlock` and `fixMarkup` which are now also rely on `configure`.

-   We removed public-facing (though undocumented) object `hljs.LANGUAGES` which was used to register languages with the library in favor of two new methods: `registerLanguage` and `getLanguage`. Both are documented in our [API docs](http://highlightjs.readthedocs.org/en/latest/api.html).

-   Result returned from `highlight` and `highlightAuto` no longer contains two separate attributes contributing to relevance score, `relevance` and `keyword_count`. They are now unified in `relevance`.

Another technically compatible change that nonetheless might need attention:

-   The structure of the NPM package was refactored, so if you had installed it locally, you’ll have to update your paths. The usual `require('highlight.js')` works as before. This is contributed by [Dmitry Smolin](https://github.com/dimsmol).

New features:

-   Languages now can be recognized by multiple names like “js” for JavaScript or “html” for, well, HTML (which earlier insisted on calling it “xml”). These aliases can be specified in the class attribute of the code container in your HTML as well as in various API calls. For now there are only a few very common aliases but we’ll expand it in the future. All of them are listed in the [class reference](http://highlightjs.readthedocs.org/en/latest/css-classes-reference.html).

-   Language detection can now be restricted to a subset of languages relevant in a given context — a web page or even a single highlighting call. This is especially useful for node.js build that includes all the known languages. Another example is a StackOverflow-style site where users specify languages as tags rather than in the markdown-formatted code snippets. This is documented in the [API reference](http://highlightjs.readthedocs.org/en/latest/api.html) (see methods `highlightAuto` and `configure`).

-   Language definition syntax streamlined with [variants](https://groups.google.com/d/topic/highlightjs/VoGC9-1p5vk/discussion) and [beginKeywords](https://github.com/isagalaev/highlight.js/commit/6c7fdea002eb3949577a85b3f7930137c7c3038d).

New languages and styles:

-   *Oxygene* by [Carlo Kok](https://github.com/carlokok)
-   *Mathematica* by [Daniel Kvasnička](https://github.com/dkvasnicka)
-   *Autohotkey* by [Seongwon Lee](https://github.com/dlimpid)
-   *Atelier* family of styles in 10 variants by [Bram de Haan](https://github.com/atelierbram)
-   *Paraíso* styles by [Jan T. Sott](https://github.com/idleberg)

Miscellaneous improvements:

-   Highlighting `=>` prompts in Clojure.
-   [Jeremy Hull](https://github.com/sourrust) fixed a lot of styles for consistency.
-   Finally, highlighting PHP and HTML [mixed in peculiar ways](https://twitter.com/highlightjs/status/408890903017689088).
-   Objective C and C\# now properly highlight titles in method definition.
-   Big overhaul of relevance counting for a number of languages. Please do report bugs about mis-detection of non-trivial code snippets!

Version 7.5
-----------

A catch-up release dealing with some of the accumulated contributions. This one is probably will be the last before the 8.0 which will be slightly backwards incompatible regarding some advanced use-cases.

One outstanding change in this version is the addition of 6 languages to the [hosted script](/soft/highlight/en/download/): Markdown, ObjectiveC, CoffeeScript, Apache, Nginx and Makefile. It now weighs about 6K more but we’re going to keep it under 30K.

New languages:

-   OCaml by [Mehdi Dogguy](https://github.com/mehdid) and [Nicolas Braud-Santoni](https://github.com/nbraud)
-   [LiveCode Server](http://livecode.com/developers/guides/server/) by [Ralf Bitter](https://github.com/revig)
-   Scilab by [Sylvestre Ledru](https://github.com/sylvestre)
-   basic support for Makefile by [Ivan Sagalaev](https://github.com/isagalaev)

Improvements:

-   Ruby’s got support for characters like `?A`, `?1`, `?\012` etc. and `%r{..}` regexps.
-   Clojure now allows a function call in the beginning of s-expressions `(($filter "myCount") (arr 1 2 3 4 5))`.
-   Haskell’s got new keywords and now recognizes more things like pragmas, preprocessors, modules, containers, FFIs etc. Thanks to [Zena Treep](https://github.com/treep) for the implementation and to [Jeremy Hull](https://github.com/sourrust) for guiding it.
-   Miscellaneous fixes in PHP, Brainfuck, SCSS, Asciidoc, CMake, Python and F\#.

New core developers
-------------------

The latest long period of almost complete inactivity in the project coincided with growing interest to it led to a decision that now seems completely obvious: we need more core developers.

So without further ado let me welcome to the core team two long-time contributors: [Jeremy Hull](https://github.com/sourrust) and [Oleg Efimov](https://github.com/sannis).

Hope now we’ll be able to work through stuff faster!

P.S. The historical commit is [here](http://roudakov.ru/) for the record.

Version 7.4
-----------

This long overdue version is a snapshot of the current source tree with all the changes that happened during the past year. Sorry for taking so long!

Along with the changes in code highlight.js has finally got its new home at <a href="http://highlightjs.org/" class="uri">http://highlightjs.org/</a>, moving from its cradle on Software Maniacs which it outgrew a long time ago. Be sure to report any bugs about the site to <a href="mailto:info@highlightjs.org" class="uri">mailto:info@highlightjs.org</a>.

On to what’s new…

New languages:

-   Handlebars templates by [Robin Ward](https://github.com/eviltrout)
-   Oracle Rules Language by [Jason Jacobson](https://github.com/jayce7)
-   F\# by [Joans Follesø](https://github.com/follesoe)
-   AsciiDoc and Haml by [Dan Allen](https://github.com/mojavelinux)
-   Lasso by [Eric Knibbe](https://github.com/EricFromCanada)
-   SCSS by [Kurt Emch](https://github.com/kemch)
-   VB.NET by [Poren Chiang](https://github.com/rschiang)
-   Mizar by [Kelley van Evert](https://github.com/kelleyvanevert)

New style themes:

-   Monokai Sublime by [noformnocontent](http://nn.mit-license.org/)
-   Railscasts by [Damien White](https://github.com/visoft)
-   Obsidian by [Alexander Marenin](https://github.com/ioncreature)
-   Docco by [Simon Madine](https://github.com/thingsinjars)
-   Mono Blue by [Ivan Sagalaev](https://github.com/isagalaev) (uses a single color hue for everything)
-   Foundation by [Dan Allen](https://github.com/mojavelinux)

Other notable changes:

-   Corrected many corner cases in CSS.
-   Dropped Python 2 version of the build tool.
-   Implemented building for the AMD format.
-   Updated Rust keywords (thanks to [Dmitry Medvinsky](https://github.com/dmedvinsky)).
-   Literal regexes can now be used in language definitions.
-   CoffeeScript highlighting is now significantly more robust and rich due to input from [Cédric Néhémie](https://github.com/abe33).

Version 7.3
-----------

-   Since this version highlight.js no longer works in IE version 8 and older. It’s made it possible to reduce the library size and dramatically improve code readability and made it easier to maintain. Time to go forward!

-   New languages: AppleScript (by [Nathan Grigg](https://github.com/nathan11g) and [Dr. Drang](https://github.com/drdrang)) and Brainfuck (by [Evgeny Stepanischev](https://github.com/bolknote)).

-   Improvements to existing languages:

    -   interpreter prompt in Python (`>>>` and `...`)
    -   @-properties and classes in CoffeeScript
    -   E4X in JavaScript (by [Oleg Efimov](https://github.com/Sannis))
    -   new keywords in Perl (by [Kirk Kimmel](https://github.com/kimmel))
    -   big Ruby syntax update (by [Vasily Polovnyov](https://github.com/vast))
    -   small fixes in Bash

-   Also Oleg Efimov did a great job of moving all the docs for language and style developers and contributors from the old wiki under the source code in the “docs” directory. Now these docs are nicely presented at <a href="http://highlightjs.readthedocs.org/" class="uri">http://highlightjs.readthedocs.org/</a>.

Version 7.2
-----------

A regular bug-fix release without any significant new features. Enjoy!

Version 7.1
-----------

A Summer crop:

-   [Marc Fornos](https://github.com/mfornos) made the definition for Clojure along with the matching style Rainbow (which, of course, works for other languages too).
-   CoffeeScript support continues to improve getting support for regular expressions.
-   Yoshihide Jimbo ported to highlight.js [five Tomorrow styles](http://jmblog.github.com/color-themes-for-highlightjs/) from the [project by Chris Kempson](https://github.com/ChrisKempson/Tomorrow-Theme).
-   Thanks to [Casey Duncun](https://github.com/caseman) the library can now be built in the popular [AMD format](http://requirejs.org/docs/whyamd.html).
-   And last but not least, we’ve got a fair number of correctness and consistency fixes, including a pretty significant refactoring of Ruby.

Version 7.0
-----------

The reason for the new major version update is a global change of keyword syntax which resulted in the library getting smaller once again. For example, the hosted build is 2K less than at the previous version while supporting two new languages.

Notable changes:

-   The library now works not only in a browser but also with [node.js](http://nodejs.org/). It is installable with `npm install highlight.js`. [API](http://softwaremaniacs.org/wiki/doku.php/highlight.js:api) docs are available on our wiki.

-   The new unique feature (apparently) among syntax highlighters is highlighting *HTTP* headers and an arbitrary language in the request body. The most useful languages here are *XML* and *JSON* both of which highlight.js does support. Here’s [the detailed post](http://bazaar.launchpad.net/~isagalaev/+junk/highlight/annotate/342/src/wp_highlight.js.php) about the feature.

-   Two new style themes: a dark “south” *[Pojoaque](http://web-cms-designs.com/ftopict-10-pojoaque-style-for-highlight-js-code-highlighter.html)* by Jason Tate and an emulation of*XCode* IDE by [Angel Olloqui](https://github.com/angelolloqui).

-   Three new languages: *D* by [Aleksandar Ružičić](https://github.com/raleksandar), *R* by [Joe Cheng](https://github.com/seejohnrun) and *GLSL* by [Sergey Tikhomirov](https://github.com/tikhomirov).

-   *Nginx* syntax has become a million times smaller and more universal thanks to remaking it in a more generic manner that doesn’t require listing all the directives in the known universe.

-   Function titles are now highlighted in *PHP*.

-   *Haskell* and *VHDL* were significantly reworked to be more rich and correct by their respective maintainers [Jeremy Hull](https://github.com/sourrust) and [Igor Kalnitsky](http://kalnitsky.org.ua/).

And last but not least, many bugs have been fixed around correctness and language detection.

Overall highlight.js currently supports 51 languages and 20 style themes.

Version 6.2
-----------

A lot of things happened in highlight.js since the last version! We’ve got nine new contributors, the discussion group came alive, and the main branch on GitHub now counts more than 350 followers. Here are most significant results coming from all this activity:

-   5 (five!) new languages: Rust, ActionScript, CoffeeScript, MatLab and experimental support for markdown. Thanks go to [Andrey Vlasovskikh](https://github.com/vlasovskikh), [Alexander Myadzel](https://github.com/myadzel), [Dmytrii Nagirniak](https://github.com/dnagir), [Oleg Efimov](https://github.com/Sannis), [Denis Bardadym](https://github.com/btd) and [John Crepezzi](https://github.com/seejohnrun).

-   2 new style themes: Monokai by [Luigi Maselli](http://grigio.org/) and stylistic imitation of another well-known highlighter Google Code Prettify by [Aahan Krish](http://anton.kovalyov.net/).

-   A vast number of [correctness fixes and code refactorings](https://github.com/isagalaev/highlight.js/commits/), mostly made by [Oleg Efimov](https://github.com/Sannis) and [Evgeny Stepanischev](https://github.com/bolknote).

Version 6.1 — Solarized
-----------------------

[Jeremy Hull](https://github.com/sourrust) has implemented my dream feature — a port of [Solarized](http://ethanschoonover.com/solarized) style theme famous for being based on the intricate color theory to achieve correct contrast and color perception. It is now available for highlight.js in both variants — light and dark.

This version also adds a new original style Arta. Its author pumbur maintains a [heavily modified fork of highlight.js](https://github.com/pumbur/highlight.js) on GitHub.

Version 6.0
-----------

New major version of the highlighter has been built on a significantly refactored syntax. Due to this it’s even smaller than the previous one while supporting more languages!

New languages are:

-   Haskell by [Jeremy Hull](https://github.com/sourrust)
-   Erlang in two varieties — module and REPL — made collectively by [Nikolay Zakharov](http://desh.su/), [Dmitry Kovega](https://github.com/arhibot) and [Sergey Ignatov](https://github.com/ignatov)
-   Objective C by [Valerii Hiora](https://github.com/vhbit)
-   Vala by [Antono Vasiljev](https://github.com/antono)
-   Go by [Stephan Kountso](https://github.com/steplg)

Also this version is marginally faster and fixes a number of small long-standing bugs.

Developer overview of the new language syntax is available in a [blog post about recent beta release](http://softwaremaniacs.org/blog/2011/04/25/highlight-js-60-beta/en/).

P.S. New version is not yet available on a Yandex CDN, so for now you have to download [your own copy](/soft/highlight/en/download/).

Version 5.14
------------

Fixed bugs in HTML/XML detection and relevance introduced in previous refactoring.

Also test.html now shows the second best result of language detection by relevance.

Version 5.13
------------

Past weekend began with a couple of simple additions for existing languages but ended up in a big code refactoring bringing along nice improvements for language developers.

### For users

-   Description of C++ has got new keywords from the upcoming [C++ 0x](http://ru.wikipedia.org/wiki/C%2B%2B0x) standard.
-   Description of HTML has got new tags from [HTML 5](http://en.wikipedia.org/wiki/HTML5).
-   CSS-styles have been unified to use consistent padding and also have lost pop-outs with names of detected languages.
-   [Igor Kalnitsky](http://kalnitsky.org.ua/) has sent two new language descriptions: CMake & VHDL.

This makes total number of languages supported by highlight.js to reach 35.

Bug fixes:

-   Custom classes on `<pre>` tags are not being overridden anymore
-   More correct highlighting of code blocks inside non-`<pre>` containers: highlighter now doesn’t insist on replacing them with its own container and just replaces the contents.
-   Small fixes in browser compatibility and heuristics.

### For developers

The most significant change is the ability to include language submodes right under `contains` instead of defining explicit named submodes in the main array:

    contains: [
      'string',
      'number',
      {begin: '\\n', end: hljs.IMMEDIATE_RE}
    ]

This is useful for auxiliary modes needed only in one place to define parsing. Note that such modes often don’t have `className` and hence won’t generate a separate `<span>` in the resulting markup. This is similar in effect to `noMarkup: true`. All existing languages have been refactored accordingly.

Test file test.html has at last become a real test. Now it not only puts the detected language name under the code snippet but also tests if it matches the expected one. Test summary is displayed right above all language snippets.

CDN
---

Fine people at [Yandex](http://yandex.com/) agreed to host highlight.js on their big fast servers. [Link up](http://softwaremaniacs.org/soft/highlight/en/download/)!

Version 5.10 — “Paris”.
-----------------------

Though I’m on a vacation in Paris, I decided to release a new version with a couple of small fixes:

-   Tomas Vitvar discovered that TAB replacement doesn’t always work when used with custom markup in code
-   SQL parsing is even more rigid now and doesn’t step over SmallTalk in tests

Version 5.9
-----------

A long-awaited version is finally released.

New languages:

-   Andrew Fedorov made a definition for Lua
-   a long-time highlight.js contributor [Peter Leonov](http://kung-fu-tzu.ru/) made a definition for Nginx config
-   [Vladimir Moskva](http://fulc.ru/) made a definition for TeX

Fixes for existing languages:

-   [Loren Segal](http://gnuu.org/) reworked the Ruby definition and added highlighting for [YARD](http://yardoc.org/) inline documentation
-   the definition of SQL has become more solid and now it shouldn’t be overly greedy when it comes to language detection

The highlighter has become more usable as a library allowing to do highlighting from initialization code of JS frameworks and in ajax methods (see. readme.eng.txt).

Also this version drops support for the [WordPress](http://wordpress.org/) plugin. Everyone is welcome to [pick up its maintenance](http://bazaar.launchpad.net/~isagalaev/+junk/highlight/annotate/342/src/wp_highlight.js.php) if needed.

Version 5.8
-----------

-   Jan Berkel has contributed a definition for Scala. +1 to hotness!
-   All CSS-styles are rewritten to work only inside `<pre>` tags to avoid conflicts with host site styles.

Version 5.7.
------------

Fixed escaping of quotes in VBScript strings.

Version 5.5
-----------

This version brings a small change: now .ini-files allow digits, underscores and square brackets in key names.

Version 5.4
-----------

Fixed small but upsetting bug in the packer which caused incorrect highlighting of explicitly specified languages. Thanks to Andrew Fedorov for precise diagnostics!

Version 5.3
-----------

The version to fulfil old promises.

The most significant change is that highlight.js now preserves custom user markup in code along with its own highlighting markup. This means that now it’s possible to use, say, links in code. Thanks to [Vladimir Dolzhenko](http://dolzhenko.blogspot.com/) for the [initial proposal](http://roudakov.ru/) and for making a proof-of-concept patch.

Also in this version:

-   [Vasily Polovnyov](http://vasily.polovnyov.ru/) has sent a GitHub-like style and has implemented support for CSS @-rules and Ruby symbols.
-   Yura Zaripov has sent two styles: Brown Paper and School Book.
-   Oleg Volchkov has sent a definition for [Parser 3](http://www.parser.ru/).

Version 5.2
-----------

-   at last it’s possible to replace indentation TABs with something sensible (e.g. 2 or 4 spaces)
-   new keywords and built-ins for 1C by Sergey Baranov
-   a couple of small fixes to Apache highlighting

Version 5.1
-----------

This is one of those nice version consisting entirely of new and shiny contributions!

-   [Vladimir Ermakov](http://vehq.ru/about/) created highlighting for AVR Assembler
-   [Ruslan Keba](http://rukeba.com/) created highlighting for Apache config file. Also his original visual style for it is now available for all highlight.js languages under the name “Magula”.
-   [Shuen-Huei Guan](http://drakeguan.org/) (aka Drake) sent new keywords for RenderMan languages. Also thanks go to [Konstantin Evdokimenko](http://k-evdokimenko.moikrug.ru/) for his advice on the matter.

Version 5.0
-----------

The main change in the new major version of highlight.js is a mechanism for packing several languages along with the library itself into a single compressed file. Now sites using several languages will load considerably faster because the library won’t dynamically include additional files while loading.

Also this version fixes a long-standing bug with Javascript highlighting that couldn’t distinguish between regular expressions and division operations.

And as usually there were a couple of minor correctness fixes.

Great thanks to all contributors! Keep using highlight.js.

Version 4.3
-----------

This version comes with two contributions from [Jason Diamond](http://jason.diamond.name/weblog/):

-   language definition for C\# (yes! it was a long-missed thing!)
-   Visual Studio-like highlighting style

Plus there are a couple of minor bug fixes for parsing HTML and XML attributes.

Version 4.2
-----------

The biggest news is highlighting for Lisp, courtesy of Vasily Polovnyov. It’s somewhat experimental meaning that for highlighting “keywords” it doesn’t use any pre-defined set of a Lisp dialect. Instead it tries to highlight first word in parentheses wherever it makes sense. I’d like to ask people programming in Lisp to confirm if it’s a good idea and send feedback to [the forum](http://softwaremaniacs.org/forum/viewforum.php?id=6).

Other changes:

-   Smalltalk was excluded from DEFAULT\_LANGUAGES to save traffic
-   [Vladimir Epifanov](http://voldmar.ya.ru/) has implemented javascript style switcher for test.html
-   comments now allowed inside Ruby function definition
-   [MEL](http://en.wikipedia.org/wiki/Maya_Embedded_Language) language from [Shuen-Huei Guan](http://drakeguan.org/)
-   whitespace now allowed between `<pre>` and `<code>`
-   better auto-detection of C++ and PHP
-   HTML allows embedded VBScript (`<% .. %>`)

Version 4.1
-----------

Languages:

-   Bash from Vah
-   DOS bat-files from Alexander Makarov (Sam)
-   Diff files from Vasily Polovnyov
-   Ini files from myself though initial idea was from Sam

Styles:

-   Zenburn from Vladimir Epifanov, this is an imitation of a [well-known theme for Vim](http://en.wikipedia.org/wiki/Zenburn).
-   Ascetic from myself, as a realization of ideals of non-flashy highlighting: just one color in only three gradations :-)

In other news. [One small bug](http://softwaremaniacs.org/forum/viewtopic.php?id=1823) was fixed, built-in keywords were added for Python and C++ which improved auto-detection for the latter (it was shame that [my wife’s blog](http://alenacpp.blogspot.com/) had issues with it from time to time). And lastly thanks go to Sam for getting rid of my stylistic comments in code that were getting in the way of [JSMin](http://code.google.com/p/jsmin-php/).

Version 4.0
-----------

New major version is a result of vast refactoring and of many contributions.

Visible new features:

-   Highlighting of embedded languages. Currently is implemented highlighting of Javascript and CSS inside HTML.
-   Bundled 5 ready-made style themes!

Invisible new features:

-   Highlight.js no longer pollutes global namespace. Only one object and one function for backward compatibility.
-   Performance is further increased by about 15%.

Changing of a major version number caused by a new format of language definition files. If you use some third-party language files they should be updated.

Version 3.5
-----------

A very nice version in my opinion fixing a number of small bugs and slightly increased speed in a couple of corner cases. Thanks to everybody who reports bugs in he [forum](http://softwaremaniacs.org/forum/viewforum.php?id=6) and by email!

There is also a new language — XML. A custom XML formerly was detected as HTML and didn’t highlight custom tags. In this version I tried to make custom XML to be detected and highlighted by its own rules. Which by the way include such things as CDATA sections and processing instructions (`<? ... ?>`).

Version 3.3
-----------

[Vladimir Gubarkov](http://xonixx.blogspot.com/) has provided an interesting and useful addition. File export.html contains a little program that shows and allows to copy and paste an HTML code generated by the highlighter for any code snippet. This can be useful in situations when one can’t use the script itself on a site.

Version 3.2 consists completely of contributions:
-------------------------------------------------

-   Vladimir Gubarkov has described SmallTalk
-   Yuri Ivanov has described 1C
-   Peter Leonov has packaged the highlighter as a Firefox extension
-   Vladimir Ermakov has compiled a mod for phpBB

Many thanks to you all!

Version 3.1
-----------

Three new languages are available: Django templates, SQL and Axapta. The latter two are sent by [Dmitri Roudakov](http://roudakov.ru/). However I’ve almost entirely rewrote an SQL definition but I’d never started it be it from the ground up :-)

The engine itself has got a long awaited feature of grouping keywords (“keyword”, “built-in function”, “literal”). No more hacks!

Version 3.0
-----------

It is major mainly because now highlight.js has grown large and has become modular. Now when you pass it a list of languages to highlight it will dynamically load into a browser only those languages.

Also:

-   Konstantin Evdokimenko of [RibKit](http://ribkit.sourceforge.net/) project has created a highlighting for RenderMan Shading Language and RenderMan Interface Bytestream. Yay for more languages!
-   Heuristics for C++ and HTML got better.
-   I’ve implemented (at last) a correct handling of backslash escapes in C-like languages.

There is also a small backwards incompatible change in the new version. The function initHighlighting that was used to initialize highlighting instead of initHighlightingOnLoad a long time ago no longer works. If you by chance still use it — replace it with the new one.

Version 2.9
-----------

Highlight.js is a parser, not just a couple of regular expressions. That said I’m glad to announce that in the new version 2.9 has support for:

-   in-string substitutions for Ruby – `#{...}`
-   strings from from numeric symbol codes (like \#XX) for Delphi

Version 2.8
-----------

A maintenance release with more tuned heuristics. Fully backwards compatible.

Version 2.7
-----------

-   Nikita Ledyaev presents highlighting for VBScript, yay!
-   A couple of bugs with escaping in strings were fixed thanks to Mickle
-   Ongoing tuning of heuristics

Fixed bugs were rather unpleasant so I encourage everyone to upgrade!

Version 2.4
-----------

-   Peter Leonov provides another improved highlighting for Perl
-   Javascript gets a new kind of keywords — “literals”. These are the words “true”, “false” and “null”

Also highlight.js homepage now lists sites that use the library. Feel free to add your site by [dropping me a message](mailto:Maniac@SoftwareManiacs.Org) until I find the time to build a submit form.

Version 2.3
-----------

This version fixes IE breakage in previous version. My apologies to all who have already downloaded that one!

Version 2.2
-----------

-   added highlighting for Javascript
-   at last fixed parsing of Delphi’s escaped apostrophes in strings
-   in Ruby fixed highlighting of keywords ‘def’ and ‘class’, same for ‘sub’ in Perl

Version 2.0
-----------

-   Ruby support by [Anton Kovalyov](http://anton.kovalyov.net/)
-   speed increased by orders of magnitude due to new way of parsing
-   this same way allows now correct highlighting of keywords in some tricky places (like keyword “End” at the end of Delphi classes)

Version 1.0
-----------

Version 1.0 of javascript syntax highlighter is released!

It’s the first version available with English description. Feel free to post your comments and question to [highlight.js forum](http://softwaremaniacs.org/forum/viewforum.php?id=6). And don’t be afraid if you find there some fancy Cyrillic letters – it’s for Russian users too :-)
