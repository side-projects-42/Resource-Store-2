CodeMirror: Version 4 upgrade guide

[<img src="logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#upgrade" class="active">Upgrade guide</a>
-   [Multiple selections](#multisel)
-   [The beforeSelectionChange event](#beforeSelectionChange)
-   [replaceSelection and collapsing](#replaceSelection)
-   [change event data](#changeEvent)
-   [showIfHidden option to line widgets](#showIfHidden)
-   [Module loaders](#module)
-   [Mutating shared data structures](#shareddata)
-   [Deprecated interfaces dropped](#deprecated)

Upgrading to version 4
----------------------

**Note:** Version 4 hasn’t been released yet. The information here is provisional and might still change.

CodeMirror 4’s interface is *very* close version 3, but it does fix a few awkward details in a backwards-incompatible ways. At least skim the text below before upgrading.

Multiple selections
-------------------

The main new feature in version 4 is multiple selections. The single-selection variants of methods are still there, but now typically act only on the *primary* selection (usually the last one added).

The exception to this is [**`getSelection`**](manual.html#getSelection), which will now return the content of *all* selections (separated by newlines, or whatever `lineSep` parameter you passed it).

The beforeSelectionChange event
-------------------------------

This event still exists, but the object it is passed has a [completely new interface](manual.html#event_beforeSelectionChange), because such changes now concern multiple selections.

replaceSelection’s collapsing behavior
--------------------------------------

By default, [`replaceSelection`](manual.html#replaceSelection) would leave the newly inserted text selected. This is only rarely what you want, and also (slightly) more expensive in the new model, so the default was changed to `"end"`, meaning the old behavior must be explicitly specified by passing a second argument of `"around"`.

change event data
-----------------

Rather than forcing client code to follow `next` pointers from one change object to the next, the library will now simply fire multiple [`"change"`](manual.html#event_change) events. Existing code will probably continue to work unmodified.

showIfHidden option to line widgets
-----------------------------------

This option, which conceptually caused line widgets to be visible even if their line was hidden, was never really well-defined, and was buggy from the start. It would be a rather expensive feature, both in code complexity and run-time performance, to implement properly. It has been dropped entirely in 4.0.

Module loaders
--------------

All modules in the CodeMirror distribution are now wrapped in a shim function to make them compatible with both AMD ([requirejs](http://requirejs.org)) and CommonJS (as used by [node](http://nodejs.org/) and [browserify](http://browserify.org/)) module loaders. When neither of these is present, they fall back to simply using the global `CodeMirror` variable.

If you have a module loader present in your environment, CodeMirror will attempt to use it, and you might need to change the way you load CodeMirror modules.

Mutating shared data structures
-------------------------------

Data structures produced by the library should not be mutated unless explicitly allowed, in general. This is slightly more strict in 4.0 than it was in earlier versions, which copied the position objects returned by [`getCursor`](manual.html#getCursor) for nebulous, historic reasons. In 4.0, mutating these objects *will* corrupt your editor’s selection.

Deprecated interfaces dropped
-----------------------------

A few properties and methods that have been deprecated for a while are now gone. Most notably, the `onKeyEvent` and `onDragEvent` options (use the corresponding [events](manual.html#event_dom) instead).

Two silly methods, which were mostly there to stay close to the 0.x API, `setLine` and `removeLine` are now gone. Use the more flexible [`replaceRange`](manual.html#replaceRange) method instead.

The long names for folding and completing functions (`CodeMirror.braceRangeFinder`, `CodeMirror.javascriptHint`, etc) are also gone (use `CodeMirror.fold.brace`, `CodeMirror.hint.javascript`).

The `className` property in the return value of [`getTokenAt`](manual.html#getTokenAt), which has been superseded by the `type` property, is also no longer present.
