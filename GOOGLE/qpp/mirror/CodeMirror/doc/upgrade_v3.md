<span class="logo-braces">{ }</span> [CodeMirror](http://codemirror.net/)
=========================================================================

<img src="baboon.png" alt="logo" class="logo" />

    /* Upgrading to
       version 3 */

Version 3 does not depart too much from 2.x API, and sites that use CodeMirror in a very simple way might be able to upgrade without trouble. But it does introduce a number of incompatibilities. Please at least skim this text before upgrading.

Note that **version 3 drops full support for Internet Explorer 7**. The editor will mostly work on that browser, but it’ll be significantly glitchy.

DOM structure
-------------

This one is the most likely to cause problems. The internal structure of the editor has changed quite a lot, mostly to implement a new scrolling model.

Editor height is now set on the outer wrapper element (CSS class `CodeMirror`), not on the scroller element (`CodeMirror-scroll`).

Other nodes were moved, dropped, and added. If you have any code that makes assumptions about the internal DOM structure of the editor, you’ll have to re-test it and probably update it to work with v3.

See the [styling section](manual.html#styling) of the manual for more information.

Gutter model
------------

In CodeMirror 2.x, there was a single gutter, and line markers created with `setMarker` would have to somehow coexist with the line numbers (if present). Version 3 allows you to specify an array of gutters, [by class name](manual.html#option_gutters), use [`setGutterMarker`](manual.html#setGutterMarker) to add or remove markers in individual gutters, and clear whole gutters with [`clearGutter`](manual.html#clearGutter). Gutter markers are now specified as DOM nodes, rather than HTML snippets.

The gutters no longer horizontally scrolls along with the content. The `fixedGutter` option was removed (since it is now the only behavior).

    <style>
      /* Define a gutter style */
      .note-gutter { width: 3em; background: cyan; }
    </style>
    <script>
      // Create an instance with two gutters -- line numbers and notes
      var cm = new CodeMirror(document.body, {
        gutters: ["note-gutter", "CodeMirror-linenumbers"],
        lineNumbers: true
      });
      // Add a note to line 0
      cm.setGutterMarker(0, "note-gutter", document.createTextNode("hi"));
    </script>

Event handling
--------------

Most of the `onXYZ` options have been removed. The same effect is now obtained by calling the [`on`](manual.html#on) method with a string identifying the event type. Multiple handlers can now be registered (and individually unregistered) for an event, and objects such as line handlers now also expose events. See [the full list here](manual.html#events).

(The `onKeyEvent` and `onDragEvent` options, which act more as hooks than as event handlers, are still there in their old form.)

    cm.on("change", function(cm, change) {
      console.log("something changed! (" + change.origin + ")");
    });

markText method arguments
-------------------------

The [`markText`](manual.html#markText) method (which has gained some interesting new features, such as creating atomic and read-only spans, or replacing spans with widgets) no longer takes the CSS class name as a separate argument, but makes it an optional field in the options object instead.

    // Style first ten lines, and forbid the cursor from entering them
    cm.markText({line: 0, ch: 0}, {line: 10, ch: 0}, {
      className: "magic-text",
      inclusiveLeft: true,
      atomic: true
    });

Line folding
------------

The interface for hiding lines has been removed. [`markText`](manual.html#markText) can now be used to do the same in a more flexible and powerful way.

The [folding script](../demo/folding.html) has been updated to use the new interface, and should now be more robust.

    // Fold a range, replacing it with the text "??"
    var range = cm.markText({line: 4, ch: 2}, {line: 8, ch: 1}, {
      replacedWith: document.createTextNode("??"),
      // Auto-unfold when cursor moves into the range
      clearOnEnter: true
    });
    // Get notified when auto-unfolding
    CodeMirror.on(range, "clear", function() {
      console.log("boom");
    });

Line CSS classes
----------------

The `setLineClass` method has been replaced by [`addLineClass`](manual.html#addLineClass) and [`removeLineClass`](manual.html#removeLineClass), which allow more modular control over the classes attached to a line.

    var marked = cm.addLineClass(10, "background", "highlighted-line");
    setTimeout(function() {
      cm.removeLineClass(marked, "background", "highlighted-line");
    });

Position properties
-------------------

All methods that take or return objects that represent screen positions now use `{left, top, bottom, right}` properties (not always all of them) instead of the `{x, y, yBot}` used by some methods in v2.x.

Affected methods are [`cursorCoords`](manual.html#cursorCoords), [`charCoords`](manual.html#charCoords), [`coordsChar`](manual.html#coordsChar), and [`getScrollInfo`](manual.html#getScrollInfo).

Bracket matching no longer in core
----------------------------------

The [`matchBrackets`](manual.html#addon_matchbrackets) option is no longer defined in the core editor. Load `addon/edit/matchbrackets.js` to enable it.

Mode management
---------------

The `CodeMirror.listModes` and `CodeMirror.listMIMEs` functions, used for listing defined modes, are gone. You are now encouraged to simply inspect `CodeMirror.modes` (mapping mode names to mode constructors) and `CodeMirror.mimeModes` (mapping MIME strings to mode specs).

New features
------------

Some more reasons to upgrade to version 3.

-   Bi-directional text support. CodeMirror will now mostly do the right thing when editing Arabic or Hebrew text.
-   Arbitrary line heights. Using fonts with different heights inside the editor (whether off by one pixel or fifty) is now supported and handled gracefully.
-   In-line widgets. See [the demo](../demo/widget.html) and [the docs](manual.html#addLineWidget).
-   Defining custom options with [`CodeMirror.defineOption`](manual.html#defineOption).

Contents
--------

-   [DOM structure](#dom)
-   [Gutter model](#gutters)
-   [Event handling](#events)
-   [Line folding](#folding)
-   [markText method arguments](#marktext)
-   [Line CSS classes](#lineclass)
-   [Position properties](#positions)
-   [Bracket matching](#matchbrackets)
-   [Mode management](#modes)
-   [New features](#new)
