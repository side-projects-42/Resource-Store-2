<span class="logo-braces">{ }</span> [CodeMirror](http://codemirror.net/)
=========================================================================

<img src="baboon.png" alt="logo" class="logo" />

    /* User manual and
       reference guide */

Overview
--------

CodeMirror is a code-editor component that can be embedded in Web pages. The core library provides *only* the editor component, no accompanying buttons, auto-completion, or other IDE functionality. It does provide a rich API on top of which such functionality can be straightforwardly implemented. See the [add-ons](#addons) included in the distribution, and the [CodeMirror UI](https://github.com/jagthedrummer/codemirror-ui) project, for reusable implementations of extra features.

CodeMirror works with language-specific modes. Modes are JavaScript programs that help color (and optionally indent) text written in a given language. The distribution comes with a number of modes (see the [`mode/`](../mode/) directory), and it isn’t hard to [write new ones](#modeapi) for other languages.

Basic Usage
-----------

The easiest way to use CodeMirror is to simply load the script and style sheet found under `lib/` in the distribution, plus a mode script from one of the `mode/` directories. (See [the compression helper](compress.html) for an easy way to combine scripts.) For example:

    <script src="lib/codemirror.js"></script>
    <link rel="stylesheet" href="../lib/codemirror.css">
    <script src="mode/javascript/javascript.js"></script>

Having done this, an editor instance can be created like this:

    var myCodeMirror = CodeMirror(document.body);

The editor will be appended to the document body, will start empty, and will use the mode that we loaded. To have more control over the new editor, a configuration object can be passed to [`CodeMirror`](#CodeMirror) as a second argument:

    var myCodeMirror = CodeMirror(document.body, {
      value: "function myScript(){return 100;}\n",
      mode:  "javascript"
    });

This will initialize the editor with a piece of code already in it, and explicitly tell it to use the JavaScript mode (which is useful when multiple modes are loaded). See [below](#config) for a full discussion of the configuration options that CodeMirror accepts.

In cases where you don’t want to append the editor to an element, and need more control over the way it is inserted, the first argument to the `CodeMirror` function can also be a function that, when given a DOM element, inserts it into the document somewhere. This could be used to, for example, replace a textarea with a real editor:

    var myCodeMirror = CodeMirror(function(elt) {
      myTextArea.parentNode.replaceChild(elt, myTextArea);
    }, {value: myTextArea.value});

However, for this use case, which is a common way to use CodeMirror, the library provides a much more powerful shortcut:

    var myCodeMirror = CodeMirror.fromTextArea(myTextArea);

This will, among other things, ensure that the textarea’s value is updated with the editor’s contents when the form (if it is part of a form) is submitted. See the [API reference](#fromTextArea) for a full description of this method.

Configuration
-------------

Both the [`CodeMirror`](#CodeMirror) function and its `fromTextArea` method take as second (optional) argument an object containing configuration options. Any option not supplied like this will be taken from [`CodeMirror.defaults`](#defaults), an object containing the default options. You can update this object to change the defaults on your page.

Options are not checked in any way, so setting bogus option values is bound to lead to odd errors.

These are the supported options:

`value: string|CodeMirror.Doc`  
The starting value of the editor. Can be a string, or a [document object](#api_doc).

`mode: string|object`  
The mode to use. When not given, this will default to the first mode that was loaded. It may be a string, which either simply names the mode or is a [MIME](http://en.wikipedia.org/wiki/MIME) type associated with the mode. Alternatively, it may be an object containing configuration options for the mode, with a `name` property that names the mode (for example `{name: "javascript", json: true}`). The demo pages for each mode contain information about what configuration parameters the mode supports. You can ask CodeMirror which modes and MIME types have been defined by inspecting the `CodeMirror.modes` and `CodeMirror.mimeModes` objects. The first maps mode names to their constructors, and the second maps MIME types to mode specs.

`theme: string`  
The theme to style the editor with. You must make sure the CSS file defining the corresponding `.cm-s-[name]` styles is loaded (see the [`theme`](../theme/) directory in the distribution). The default is `"default"`, for which colors are included in `codemirror.css`. It is possible to use multiple theming classes at once—for example `"foo bar"` will assign both the `cm-s-foo` and the `cm-s-bar` classes to the editor.

`indentUnit: integer`  
How many spaces a block (whatever that means in the edited language) should be indented. The default is 2.

`smartIndent: boolean`  
Whether to use the context-sensitive indentation that the mode provides (or just indent the same as the line before). Defaults to true.

`tabSize: integer`  
The width of a tab character. Defaults to 4.

`indentWithTabs: boolean`  
Whether, when indenting, the first N\*`tabSize` spaces should be replaced by N tabs. Default is false.

`electricChars: boolean`  
Configures whether the editor should re-indent the current line when a character is typed that might change its proper indentation (only works if the mode supports indentation). Default is true.

`rtlMoveVisually: boolean`  
Determines whether horizontal cursor movement through right-to-left (Arabic, Hebrew) text is visual (pressing the left arrow moves the cursor left) or logical (pressing the left arrow moves to the next lower index in the string, which is visually right in right-to-left text). The default is `false` on Windows, and `true` on other platforms.

`keyMap: string`  
Configures the keymap to use. The default is `"default"`, which is the only keymap defined in `codemirror.js` itself. Extra keymaps are found in the [`keymap`](../keymap/) directory. See the [section on keymaps](#keymaps) for more information.

`extraKeys: object`  
Can be used to specify extra keybindings for the editor, alongside the ones defined by [`keyMap`](#option_keyMap). Should be either null, or a valid [keymap](#keymaps) value.

`lineWrapping: boolean`  
Whether CodeMirror should scroll or wrap for long lines. Defaults to `false` (scroll).

`lineNumbers: boolean`  
Whether to show line numbers to the left of the editor.

`firstLineNumber: integer`  
At which number to start counting lines. Default is 1.

`lineNumberFormatter: function(line: integer) →               string`  
A function used to format line numbers. The function is passed the line number, and should return a string that will be shown in the gutter.

`gutters: array<string>`  
Can be used to add extra gutters (beyond or instead of the line number gutter). Should be an array of CSS class names, each of which defines a `width` (and optionally a background), and which will be used to draw the background of the gutters. *May* include the `CodeMirror-linenumbers` class, in order to explicitly set the position of the line number gutter (it will default to be to the right of all other gutters). These class names are the keys passed to [`setGutterMarker`](#setGutterMarker).

`fixedGutter: boolean`  
Determines whether the gutter scrolls along with the content horizontally (false) or whether it stays fixed during horizontal scrolling (true, the default).

`coverGutterNextToScrollbar: boolean`  
When [`fixedGutter`](#option_fixedGutter) is on, and there is a horizontal scrollbar, by default the gutter will be visible to the left of this scrollbar. If this option is set to true, it will be covered by an element with class `CodeMirror-gutter-filler`.

`readOnly: boolean|string`  
This disables editing of the editor content by the user. If the special value `"nocursor"` is given (instead of simply `true`), focusing of the editor is also disallowed.

`showCursorWhenSelecting: boolean`  
Whether the cursor should be drawn when a selection is active. Defaults to false.

`undoDepth: integer`  
The maximum number of undo levels that the editor stores. Defaults to 40.

`historyEventDelay: integer`  
The period of inactivity (in milliseconds) that will cause a new history event to be started when typing or deleting. Defaults to 500.

`tabindex: integer`  
The [tab index](http://www.w3.org/TR/html401/interact/forms.html#adef-tabindex) to assign to the editor. If not given, no tab index will be assigned.

`autofocus: boolean`  
Can be used to make CodeMirror focus itself on initialization. Defaults to off. When [`fromTextArea`](#fromTextArea) is used, and no explicit value is given for this option, it will be set to true when either the source textarea is focused, or it has an `autofocus` attribute and no other element is focused.

Below this a few more specialized, low-level options are listed. These are only useful in very specific situations, you might want to skip them the first time you read this manual.

`dragDrop: boolean`  
Controls whether drag-and-drop is enabled. On by default.

`onDragEvent: function(instance: CodeMirror,               event: Event) → boolean`  
When given, this will be called when the editor is handling a `dragenter`, `dragover`, or `drop` event. It will be passed the editor instance and the event object as arguments. The callback can choose to handle the event itself, in which case it should return `true` to indicate that CodeMirror should not do anything further.

`onKeyEvent: function(instance: CodeMirror,               event: Event) → boolean`  
This provides a rather low-level hook into CodeMirror’s key handling. If provided, this function will be called on every `keydown`, `keyup`, and `keypress` event that CodeMirror captures. It will be passed two arguments, the editor instance and the key event. This key event is pretty much the raw key event, except that a `stop()` method is always added to it. You could feed it to, for example, `jQuery.Event` to further normalize it.  
This function can inspect the key event, and handle it if it wants to. It may return true to tell CodeMirror to ignore the event. Be wary that, on some browsers, stopping a `keydown` does not stop the `keypress` from firing, whereas on others it does. If you respond to an event, you should probably inspect its `type` property and only do something when it is `keydown` (or `keypress` for actions that need character data).

`cursorBlinkRate: number`  
Half-period in milliseconds used for cursor blinking. The default blink rate is 530ms.

`cursorScrollMargin: number`  
How much extra space to always keep above and below the cursor when approaching the top or bottom of the visible view in a scrollable document. Default is 0.

`cursorHeight: number`  
Determines the height of the cursor. Default is 1, meaning it spans the whole height of the line. For some fonts (and by some tastes) a smaller height (for example `0.85`), which causes the cursor to not reach all the way to the bottom of the line, looks better

`workTime, workDelay:               number`  
Highlighting is done by a pseudo background-thread that will work for `workTime` milliseconds, and then use timeout to sleep for `workDelay` milliseconds. The defaults are 200 and 300, you can change these options to make the highlighting more or less aggressive.

`workDelay: number`  
See [`workTime`](#option_workTime).

`pollInterval: number`  
Indicates how quickly CodeMirror should poll its input textarea for changes (when focused). Most input is captured by events, but some things, like IME input on some browsers, don’t generate events that allow CodeMirror to properly detect it. Thus, it polls. Default is 100 milliseconds.

`flattenSpans: boolean`  
By default, CodeMirror will combine adjacent tokens into a single span if they have the same class. This will result in a simpler DOM tree, and thus perform better. With some kinds of styling (such as rounded corners), this will change the way the document looks. You can set this option to false to disable this behavior.

`maxHighlightLength: number`  
When highlighting long lines, in order to stay responsive, the editor will give up and simply style the rest of the line as plain text when it reaches a certain position. The default is 10000. You can set this to `Infinity` to turn off this behavior.

`viewportMargin: integer`  
Specifies the amount of lines that are rendered above and below the part of the document that’s currently scrolled into view. This affects the amount of updates needed when scrolling, and the amount of work that such an update does. You should usually leave it at its default, 10. Can be set to `Infinity` to make sure the whole document is always rendered, and thus the browser’s text search works on it. This *will* have bad effects on performance of big documents.

Events
------

A CodeMirror instance emits a number of events, which allow client code to react to various situations. These are registered with the [`on`](#on) method (and removed with the [`off`](#off) method). These are the events that fire on the instance object. The name of the event is followed by the arguments that will be passed to the handler. The `instance` argument always refers to the editor instance.

`"change" (instance: CodeMirror, changeObj:               object)`  
Fires every time the content of the editor is changed. The `changeObj` is a `{from, to, text, removed, next}` object containing information about the changes that occurred as second argument. `from` and `to` are the positions (in the pre-change coordinate system) where the change started and ended (for example, it might be `{ch:0, line:18}` if the position is at the beginning of line \#19). `text` is an array of strings representing the text that replaced the changed range (split by line). `removed` is the text that used to be between `from` and `to`, which is overwritten by this change. If multiple changes happened during a single operation, the object will have a `next` property pointing to another change object (which may point to another, etc).

`"beforeChange" (instance: CodeMirror, changeObj:               object)`  
This event is fired before a change is applied, and its handler may choose to modify or cancel the change. The `changeObj` object has `from`, `to`, and `text` properties, as with the [`"change"`](#event_change) event, but never a `next` property, since this is fired for each individual change, and not batched per operation. It also has a `cancel()` method, which can be called to cancel the change, and, **if** the change isn’t coming from an undo or redo event, an `update(from, to, text)` method, which may be used to modify the change. Undo or redo changes can’t be modified, because they hold some metainformation for restoring old marked ranges that is only valid for that specific change. All three arguments to `update` are optional, and can be left off to leave the existing value for that field intact. **Note:** you may not do anything from a `"beforeChange"` handler that would cause changes to the document or its visualization. Doing so will, since this handler is called directly from the bowels of the CodeMirror implementation, probably cause the editor to become corrupted.

`"cursorActivity" (instance: CodeMirror)`  
Will be fired when the cursor or selection moves, or any change is made to the editor content.

`"beforeSelectionChange" (instance: CodeMirror,               selection: {head, anchor})`  
This event is fired before the selection is moved. Its handler may modify the resulting selection head and anchor. The `selection` parameter is an object with `head` and `anchor` properties holding `{line, ch}` objects, which the handler can read and update. Handlers for this event have the same restriction as [`"beforeChange"`](#event_beforeChange) handlers — they should not do anything to directly update the state of the editor.

`"viewportChange" (instance: CodeMirror, from:               number, to: number)`  
Fires whenever the [view port](#getViewport) of the editor changes (due to scrolling, editing, or any other factor). The `from` and `to` arguments give the new start and end of the viewport.

`"gutterClick" (instance: CodeMirror, line:               integer, gutter: string, clickEvent: Event)`  
Fires when the editor gutter (the line-number area) is clicked. Will pass the editor instance as first argument, the (zero-based) number of the line that was clicked as second argument, the CSS class of the gutter that was clicked as third argument, and the raw `mousedown` event object as fourth argument.

`"focus" (instance: CodeMirror)`  
Fires whenever the editor is focused.

`"blur" (instance: CodeMirror)`  
Fires whenever the editor is unfocused.

`"scroll" (instance: CodeMirror)`  
Fires when the editor is scrolled.

`"update" (instance: CodeMirror)`  
Will be fired whenever CodeMirror updates its DOM display.

`"renderLine" (instance: CodeMirror, line:               LineHandle, element: Element)`  
Fired whenever a line is (re-)rendered to the DOM. Fired right after the DOM element is built, *before* it is added to the document. The handler may mess with the style of the resulting element, or add event handlers, but should *not* try to change the state of the editor.

It is also possible to [register](#on) events on other objects. Use `CodeMirror.on(handle, "eventName", func)` to register handlers on objects that don’t have their own `on` method. Document objects (instances of [`CodeMirror.Doc`](#Doc)) emit the following events:

`"change" (doc: CodeMirror.Doc, changeObj:               object)`  
Fired whenever a change occurs to the document. `changeObj` has a similar type as the object passed to the editor’s [`"change"`](#event_change) event, but it never has a `next` property, because document change events are not batched (whereas editor change events are).

`"beforeChange" (doc: CodeMirror.Doc, change:               object)`  
See the [description of the same event](#event_beforeChange) on editor instances.

`"cursorActivity" (doc: CodeMirror.Doc)`  
Fired whenever the cursor or selection in this document changes.

`"beforeSelectionChange" (doc: CodeMirror.Doc,               selection: {head, anchor})`  
Equivalent to the [event by the same name](#event_beforeSelectionChange) as fired on editor instances.

Line handles (as returned by, for example, [`getLineHandle`](#getLineHandle)) support these events:

`"delete" ()`  
Will be fired when the line object is deleted. A line object is associated with the *start* of the line. Mostly useful when you need to find out when your [gutter markers](#setGutterMarker) on a given line are removed.

`"change" (line: LineHandle, changeObj:               object)`  
Fires when the line’s text content is changed in any way (but the line is not deleted outright). The `change` object is similar to the one passed to [change event](#event_change) on the editor object.

Marked range handles (`CodeMirror.TextMarker`), as returned by [`markText`](#markText) and [`setBookmark`](#setBookmark), emit the following events:

`"beforeCursorEnter" ()`  
Fired when the cursor enters the marked range. From this event handler, the editor state may be inspected but *not* modified, with the exception that the range on which the event fires may be cleared.

`"clear" ()`  
Fired when the range is cleared, either through cursor movement in combination with [`clearOnEnter`](#mark_clearOnEnter) or through a call to its `clear()` method. Will only be fired once per handle. Note that deleting the range through text editing does not fire this event, because an undo action might bring the range back into existence.

`"hide" ()`  
Fired when the last part of the marker is removed from the document by editing operations.

`"unhide" ()`  
Fired when, after the marker was removed by editing, a undo operation brought the marker back.

Line widgets (`CodeMirror.LineWidget`), returned by [`addLineWidget`](#addLineWidget), fire these events:

`"redraw" ()`  
Fired whenever the editor re-adds the widget to the DOM. This will happen once right after the widget is added (if it is scrolled into view), and then again whenever it is scrolled out of view and back in again, or when changes to the editor options or the line the widget is on require the widget to be redrawn.

Keymaps
-------

Keymaps are ways to associate keys with functionality. A keymap is an object mapping strings that identify the keys to functions that implement their functionality.

Keys are identified either by name or by character. The `CodeMirror.keyNames` object defines names for common keys and associates them with their key codes. Examples of names defined here are `Enter`, `F5`, and `Q`. These can be prefixed with `Shift-`, `Cmd-`, `Ctrl-`, and `Alt-` (in that order!) to specify a modifier. So for example, `Shift-Ctrl-Space` would be a valid key identifier.

Common example: map the Tab key to insert spaces instead of a tab character.

    {
      Tab: function(cm) {
        var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
        cm.replaceSelection(spaces, "end", "+input");
      }
    }

Alternatively, a character can be specified directly by surrounding it in single quotes, for example `'$'` or `'q'`. Due to limitations in the way browsers fire key events, these may not be prefixed with modifiers.

The `CodeMirror.keyMap` object associates keymaps with names. User code and keymap definitions can assign extra properties to this object. Anywhere where a keymap is expected, a string can be given, which will be looked up in this object. It also contains the `"default"` keymap holding the default bindings.

The values of properties in keymaps can be either functions of a single argument (the CodeMirror instance), strings, or `false`. Such strings refer to properties of the `CodeMirror.commands` object, which defines a number of common commands that are used by the default keybindings, and maps them to functions. If the property is set to `false`, CodeMirror leaves handling of the key up to the browser. A key handler function may return `CodeMirror.Pass` to indicate that it has decided not to handle the key, and other handlers (or the default behavior) should be given a turn.

Keys mapped to command names that start with the characters `"go"` (which should be used for cursor-movement actions) will be fired even when an extra `Shift` modifier is present (i.e. `"Up": "goLineUp"` matches both up and shift-up). This is used to easily implement shift-selection.

Keymaps can defer to each other by defining a `fallthrough` property. This indicates that when a key is not found in the map itself, one or more other maps should be searched. It can hold either a single keymap or an array of keymaps.

When a keymap contains a `nofallthrough` property set to `true`, keys matched against that map will be ignored if they don’t match any of the bindings in the map (no further child maps will be tried). When the `disableInput` property is set to `true`, the default effect of inserting a character will be suppressed when the keymap is active as the top-level map.

Customized Styling
------------------

Up to a certain extent, CodeMirror’s look can be changed by modifying style sheet files. The style sheets supplied by modes simply provide the colors for that mode, and can be adapted in a very straightforward way. To style the editor itself, it is possible to alter or override the styles defined in [`codemirror.css`](../lib/codemirror.css).

Some care must be taken there, since a lot of the rules in this file are necessary to have CodeMirror function properly. Adjusting colors should be safe, of course, and with some care a lot of other things can be changed as well. The CSS classes defined in this file serve the following roles:

`CodeMirror`  
The outer element of the editor. This should be used for the editor width, height, borders and positioning. Can also be used to set styles that should hold for everything inside the editor (such as font and font size), or to set a background.

`CodeMirror-scroll`  
Whether the editor scrolls (`overflow: auto` + fixed height). By default, it does. Setting the `CodeMirror` class to have `height: auto` and giving this class `overflow-x: auto; overflow-y: hidden;` will cause the editor to [resize to fit its content](../demo/resize.html).

`CodeMirror-focused`  
Whenever the editor is focused, the top element gets this class. This is used to hide the cursor and give the selection a different color when the editor is not focused.

`CodeMirror-gutters`  
This is the backdrop for all gutters. Use it to set the default gutter background color, and optionally add a border on the right of the gutters.

`CodeMirror-linenumbers`  
Use this for giving a background or width to the line number gutter.

`CodeMirror-linenumber`  
Used to style the actual individual line numbers. These won’t be children of the `CodeMirror-linenumbers` (plural) element, but rather will be absolutely positioned to overlay it. Use this to set alignment and text properties for the line numbers.

`CodeMirror-lines`  
The visible lines. This is where you specify vertical padding for the editor content.

`CodeMirror-cursor`  
The cursor is a block element that is absolutely positioned. You can make it look whichever way you want.

`CodeMirror-selected`  
The selection is represented by `span` elements with this class.

`CodeMirror-matchingbracket`, `CodeMirror-nonmatchingbracket`  
These are used to style matched (or unmatched) brackets.

If your page’s style sheets do funky things to all `div` or `pre` elements (you probably shouldn’t do that), you’ll have to define rules to cancel these effects out again for elements under the `CodeMirror` class.

Themes are also simply CSS files, which define colors for various syntactic elements. See the files in the [`theme`](../theme/) directory.

Programming API
---------------

A lot of CodeMirror features are only available through its API. Thus, you need to write code (or use [add-ons](#addons)) if you want to expose them to your users.

Whenever points in the document are represented, the API uses objects with `line` and `ch` properties. Both are zero-based. CodeMirror makes sure to ‘clip’ any positions passed by client code so that they fit inside the document, so you shouldn’t worry too much about sanitizing your coordinates. If you give `ch` a value of `null`, or don’t specify it, it will be replaced with the length of the specified line.

Methods prefixed with `doc.` can, unless otherwise specified, be called both on `CodeMirror` (editor) instances and `CodeMirror.Doc` instances. Methods prefixed with `cm.` are *only* available on `CodeMirror` instances.

### Constructor

Constructing an editor instance is done with the `CodeMirror(place: Element|fn(Element), ?option:             object)` constructor. If the `place` argument is a DOM element, the editor will be appended to it. If it is a function, it will be called, and is expected to place the editor into the document. `options` may be an element mapping [option names](#config) to values. The options that it doesn’t explicitly specify (or all options, if it is not passed) will be taken from [`CodeMirror.defaults`](#defaults).

Note that the options object passed to the constructor will be mutated when the instance’s options are [changed](#setOption), so you shouldn’t share such objects between instances.

See [`CodeMirror.fromTextArea`](#fromTextArea) for another way to construct an editor instance.

### Content manipulation methods

`doc.getValue(?separator: string) → string`  
Get the current editor content. You can pass it an optional argument to specify the string to be used to separate lines (defaults to `"\n"`).

`doc.setValue(content: string)`  
Set the editor content.

`doc.getRange(from: {line, ch}, to: {line, ch},               ?separator: string) → string`  
Get the text between the given points in the editor, which should be `{line, ch}` objects. An optional third argument can be given to indicate the line separator string to use (defaults to `"\n"`).

`doc.replaceRange(replacement: string, from:               {line, ch}, to: {line, ch})`  
Replace the part of the document between `from` and `to` with the given string. `from` and `to` must be `{line, ch}` objects. `to` can be left off to simply insert the string at position `from`.

`doc.getLine(n: integer) → string`  
Get the content of line `n`.

`doc.setLine(n: integer, text: string)`  
Set the content of line `n`.

`doc.removeLine(n: integer)`  
Remove the given line from the document.

`doc.lineCount() → integer`  
Get the number of lines in the editor.

`doc.firstLine() → integer`  
Get the first line of the editor. This will usually be zero but for [linked sub-views](#linkedDoc_from), or [documents](#api_doc) instantiated with a non-zero first line, it might return other values.

`doc.lastLine() → integer`  
Get the last line of the editor. This will usually be `doc.lineCount() - 1`, but for [linked sub-views](#linkedDoc_from), it might return other values.

`doc.getLineHandle(num: integer) →               LineHandle`  
Fetches the line handle for the given line number.

`doc.getLineNumber(handle: LineHandle) →               integer`  
Given a line handle, returns the current position of that line (or `null` when it is no longer in the document).

`doc.eachLine(f: (line: LineHandle))`  
`doc.eachLine(start: integer, end: integer, f:               (line: LineHandle))`  
Iterate over the whole document, or if `start` and `end` line numbers are given, the range from `start` up to (not including) `end`, and call `f` for each line, passing the line handle. This is a faster way to visit a range of line handlers than calling [`getLineHandle`](#getLineHandle) for each of them. Note that line handles have a `text` property containing the line’s content (as a string).

`doc.markClean()`  
Set the editor content as ‘clean’, a flag that it will retain until it is edited, and which will be set again when such an edit is undone again. Useful to track whether the content needs to be saved. This function is deprecated in favor of [`changeGeneration`](#changeGeneration), which allows multiple subsystems to track different notions of cleanness without interfering.

`doc.changeGeneration() → integer`  
Returns a number that can later be passed to [`isClean`](#isClean) to test whether any edits were made (and not undone) in the meantime.

`doc.isClean(?generation: integer) →               boolean`  
Returns whether the document is currently clean — not modified since initialization or the last call to [`markClean`](#markClean) if no argument is passed, or since the matching call to [`changeGeneration`](#changeGeneration) if a generation value is given.

### Cursor and selection methods

`doc.getSelection() → string`  
Get the currently selected code.

`doc.replaceSelection(replacement: string,               ?collapse: string)`  
Replace the selection with the given string. By default, the new selection will span the inserted text. The optional `collapse` argument can be used to change this—passing `"start"` or `"end"` will collapse the selection to the start or end of the inserted text.

`doc.getCursor(?start: string) → {line, ch}`  
`start` is a an optional string indicating which end of the selection to return. It may be `"start"`, `"end"`, `"head"` (the side of the selection that moves when you press shift+arrow), or `"anchor"` (the fixed side of the selection). Omitting the argument is the same as passing `"head"`. A `{line, ch}` object will be returned.

`doc.somethingSelected() → boolean`  
Return true if any text is selected.

`doc.setCursor(pos: {line, ch})`  
Set the cursor position. You can either pass a single `{line, ch}` object, or the line and the character as two separate parameters.

`doc.setSelection(anchor: {line, ch}, head:               {line, ch})`  
Set the selection range. `anchor` and `head` should be `{line, ch}` objects. `head` defaults to `anchor` when not given.

`doc.extendSelection(from: {line, ch}, ?to:               {line, ch})`  
Similar to [`setSelection`](#setSelection), but will, if shift is held or the [extending](#setExtending) flag is set, move the head of the selection while leaving the anchor at its current place. `pos2` is optional, and can be passed to ensure a region (for example a word or paragraph) will end up selected (in addition to whatever lies between that region and the current anchor).

`doc.setExtending(value: boolean)`  
Sets or clears the ‘extending’ flag, which acts similar to the shift key, in that it will cause cursor movement and calls to [`extendSelection`](#extendSelection) to leave the selection anchor in place.

`cm.hasFocus() → boolean`  
Tells you whether the editor currently has focus.

`cm.findPosH(start: {line, ch}, amount: integer,               unit: string, visually: boolean) → {line, ch, ?hitSide:               boolean}`  
Used to find the target position for horizontal cursor motion. `start` is a `{line, ch}` object, `amount` an integer (may be negative), and `unit` one of the string `"char"`, `"column"`, or `"word"`. Will return a position that is produced by moving `amount` times the distance specified by `unit`. When `visually` is true, motion in right-to-left text will be visual rather than logical. When the motion was clipped by hitting the end or start of the document, the returned value will have a `hitSide` property set to true.

`cm.findPosV(start: {line, ch}, amount: integer,               unit: string) → {line, ch, ?hitSide: boolean}`  
Similar to [`findPosH`](#findPosH), but used for vertical motion. `unit` may be `"line"` or `"page"`. The other arguments and the returned value have the same interpretation as they have in `findPosH`.

### Configuration methods

`cm.setOption(option: string, value: any)`  
Change the configuration of the editor. `option` should the name of an [option](#config), and `value` should be a valid value for that option.

`cm.getOption(option: string) → any`  
Retrieves the current value of the given option for this editor instance.

`cm.addKeyMap(map: object, bottom: boolean)`  
Attach an additional [keymap](#keymaps) to the editor. This is mostly useful for add-ons that need to register some key handlers without trampling on the [`extraKeys`](#option_extraKeys) option. Maps added in this way have a higher precedence than the `extraKeys` and [`keyMap`](#option_keyMap) options, and between them, the maps added earlier have a lower precedence than those added later, unless the `bottom` argument was passed, in which case they end up below other keymaps added with this method.

`cm.removeKeyMap(map: object)`  
Disable a keymap added with [`addKeyMap`](#addKeyMap). Either pass in the keymap object itself, or a string, which will be compared against the `name` property of the active keymaps.

`cm.addOverlay(mode: string|object, ?options:               object)`  
Enable a highlighting overlay. This is a stateless mini-mode that can be used to add extra highlighting. For example, the [search add-on](../demo/search.html) uses it to highlight the term that’s currently being searched. `mode` can be a [mode spec](#option_mode) or a mode object (an object with a [`token`](#token) method). The `options` parameter is optional. If given, it should be an object. Currently, only the `opaque` option is recognized. This defaults to off, but can be given to allow the overlay styling, when not `null`, to override the styling of the base mode entirely, instead of the two being applied together.

`cm.removeOverlay(mode: string|object)`  
Pass this the exact value passed for the `mode` parameter to [`addOverlay`](#addOverlay), or a string that corresponds to the `name` propery of that value, to remove an overlay again.

`cm.on(type: string, func: (...args))`  
Register an event handler for the given event type (a string) on the editor instance. There is also a `CodeMirror.on(object, type, func)` version that allows registering of events on any object.

`cm.off(type: string, func: (...args))`  
Remove an event handler on the editor instance. An equivalent `CodeMirror.off(object, type, func)` also exists.

### Document management methods

Each editor is associated with an instance of `CodeMirror.Doc`, its document. A document represents the editor content, plus a selection, an undo history, and a [mode](#option_mode). A document can only be associated with a single editor at a time. You can create new documents by calling the `CodeMirror.Doc(text, mode, firstLineNumber)` constructor. The last two arguments are optional and can be used to set a mode for the document and make it start at a line number other than 0, respectively.

`cm.getDoc() → Doc`  
Retrieve the currently active document from an editor.

`doc.getEditor() → CodeMirror`  
Retrieve the editor associated with a document. May return `null`.

`cm.swapDoc(doc: CodeMirror.Doc) → Doc`  
Attach a new document to the editor. Returns the old document, which is now no longer associated with an editor.

`doc.copy(copyHistory: boolean) → Doc`  
Create an identical copy of the given doc. When `copyHistory` is true, the history will also be copied. Can not be called directly on an editor.

`doc.linkedDoc(options: object) → Doc`  
Create a new document that’s linked to the target document. Linked documents will stay in sync (changes to one are also applied to the other) until [unlinked](#unlinkDoc). These are the options that are supported:

`sharedHist: boolean`  
When turned on, the linked copy will share an undo history with the original. Thus, something done in one of the two can be undone in the other, and vice versa.

`from: integer`  
`to: integer`  
Can be given to make the new document a subview of the original. Subviews only show a given range of lines. Note that line coordinates inside the subview will be consistent with those of the parent, so that for example a subview starting at line 10 will refer to its first line as line 10, not 0.

`mode: string|object`  
By default, the new document inherits the mode of the parent. This option can be set to a [mode spec](#option_mode) to give it a different mode.

`doc.unlinkDoc(doc: CodeMirror.Doc)`  
Break the link between two documents. After calling this, changes will no longer propagate between the documents, and, if they had a shared history, the history will become separate.

`doc.iterLinkedDocs(function: (doc:               CodeMirror.Doc, sharedHist: boolean))`  
Will call the given function for all documents linked to the target document. It will be passed two arguments, the linked document and a boolean indicating whether that document shares history with the target.

### History-related methods

`doc.undo()`  
Undo one edit (if any undo events are stored).

`doc.redo()`  
Redo one undone edit.

`doc.historySize() → {undo: integer, redo:               integer}`  
Returns an object with `{undo, redo}` properties, both of which hold integers, indicating the amount of stored undo and redo operations.

`doc.clearHistory()`  
Clears the editor’s undo history.

`doc.getHistory() → object`  
Get a (JSON-serializeable) representation of the undo history.

`doc.setHistory(history: object)`  
Replace the editor’s undo history with the one provided, which must be a value as returned by [`getHistory`](#getHistory). Note that this will have entirely undefined results if the editor content isn’t also the same as it was when `getHistory` was called.

### Text-marking methods

`doc.markText(from: {line, ch}, to: {line, ch},               ?options: object) → TextMarker`  
Can be used to mark a range of text with a specific CSS class name. `from` and `to` should be `{line, ch}` objects. The `options` parameter is optional. When given, it should be an object that may contain the following configuration options:

`className: string`  
Assigns a CSS class to the marked stretch of text.

`inclusiveLeft: boolean`  
Determines whether text inserted on the left of the marker will end up inside or outside of it.

`inclusiveRight: boolean`  
Like `inclusiveLeft`, but for the right side.

`atomic: boolean`  
Atomic ranges act as a single unit when cursor movement is concerned—i.e. it is impossible to place the cursor inside of them. In atomic ranges, `inclusiveLeft` and `inclusiveRight` have a different meaning—they will prevent the cursor from being placed respectively directly before and directly after the range.

`collapsed: boolean`  
Collapsed ranges do not show up in the display. Setting a range to be collapsed will automatically make it atomic.

`clearOnEnter: boolean`  
When enabled, will cause the mark to clear itself whenever the cursor enters its range. This is mostly useful for text-replacement widgets that need to ‘snap open’ when the user tries to edit them. The [`"clear"`](#event_clear) event fired on the range handle can be used to be notified when this happens.

`replacedWith: Element`  
Use a given node to display this range. Implies both collapsed and atomic. The given DOM node *must* be an inline element (as opposed to a block element).

`handleMouseEvents: boolean`  
When `replacedWith` is given, this determines whether the editor will capture mouse and drag events occurring in this widget. Default is false—the events will be left alone for the default browser handler, or specific handlers on the widget, to capture.

`readOnly: boolean`  
A read-only span can, as long as it is not cleared, not be modified except by calling [`setValue`](#setValue) to reset the whole document. *Note:* adding a read-only span currently clears the undo history of the editor, because existing undo events being partially nullified by read-only spans would corrupt the history (in the current implementation).

`addToHistory: boolean`  
When set to true (default is false), adding this marker will create an event in the undo history that can be individually undone (clearing the marker).

`startStyle: string`  
Can be used to specify an extra CSS class to be applied to the leftmost span that is part of the marker.

`endStyle: string`  
Equivalent to `startStyle`, but for the rightmost span.

`shared: boolean`  
When the target document is [linked](#linkedDoc) to other documents, you can set `shared` to true to make the marker appear in all documents. By default, a marker appears only in its target document.

The method will return an object that represents the marker (with constuctor `CodeMirror.TextMarker`), which exposes three methods: `clear()`, to remove the mark, `find()`, which returns a `{from, to}` object (both holding document positions), indicating the current position of the marked range, or `undefined` if the marker is no longer in the document, and finally `changed()`, which you can call if you’ve done something that might change the size of the marker (for example changing the content of a [`replacedWith`](#mark_replacedWith) node), and want to cheaply update the display.

`doc.setBookmark(pos: {line, ch}, ?options:               object) → TextMarker`  
Inserts a bookmark, a handle that follows the text around it as it is being edited, at the given position. A bookmark has two methods `find()` and `clear()`. The first returns the current position of the bookmark, if it is still in the document, and the second explicitly removes the bookmark. The options argument is optional. If given, the following properties are recognized:

`widget: Element`  
Can be used to display a DOM node at the current location of the bookmark (analogous to the [`replacedWith`](#mark_replacedWith) option to `markText`).

`insertLeft: boolean`  
By default, text typed when the cursor is on top of the bookmark will end up to the right of the bookmark. Set this option to true to make it go to the left instead.

`doc.findMarksAt(pos: {line, ch}) →               array<TextMarker>`  
Returns an array of all the bookmarks and marked ranges present at the given position.

`doc.getAllMarks() →               array<TextMarker>`  
Returns an array containing all marked ranges in the document.

### Widget, gutter, and decoration methods

`cm.setGutterMarker(line: integer|LineHandle,               gutterID: string, value: Element) → LineHandle`  
Sets the gutter marker for the given gutter (identified by its CSS class, see the [`gutters`](#option_gutters) option) to the given value. Value can be either `null`, to clear the marker, or a DOM element, to set it. The DOM element will be shown in the specified gutter next to the specified line.

`cm.clearGutter(gutterID: string)`  
Remove all gutter markers in the [gutter](#option_gutters) with the given ID.

`cm.addLineClass(line: integer|LineHandle, where:               string, class: string) → LineHandle`  
Set a CSS class name for the given line. `line` can be a number or a line handle. `where` determines to which element this class should be applied, can can be one of `"text"` (the text element, which lies in front of the selection), `"background"` (a background element that will be behind the selection), or `"wrap"` (the wrapper node that wraps all of the line’s elements, including gutter elements). `class` should be the name of the class to apply.

`cm.removeLineClass(line: integer|LineHandle,               where: string, class: string) → LineHandle`  
Remove a CSS class from a line. `line` can be a line handle or number. `where` should be one of `"text"`, `"background"`, or `"wrap"` (see [`addLineClass`](#addLineClass)). `class` can be left off to remove all classes for the specified node, or be a string to remove only a specific class.

`cm.lineInfo(line: integer|LineHandle) →               object`  
Returns the line number, text content, and marker status of the given line, which can be either a number or a line handle. The returned object has the structure `{line, handle, text, gutterMarkers, textClass, bgClass,               wrapClass, widgets}`, where `gutterMarkers` is an object mapping gutter IDs to marker elements, and `widgets` is an array of [line widgets](#addLineWidget) attached to this line, and the various class properties refer to classes added with [`addLineClass`](#addLineClass).

`cm.addWidget(pos: {line, ch}, node: Element,               scrollIntoView: boolean)`  
Puts `node`, which should be an absolutely positioned DOM node, into the editor, positioned right below the given `{line, ch}` position. When `scrollIntoView` is true, the editor will ensure that the entire node is visible (if possible). To remove the widget again, simply use DOM methods (move it somewhere else, or call `removeChild` on its parent).

`cm.addLineWidget(line: integer|LineHandle, node:               Element, ?options: object) → LineWidget`  
Adds a line widget, an element shown below a line, spanning the whole of the editor’s width, and moving the lines below it downwards. `line` should be either an integer or a line handle, and `node` should be a DOM node, which will be displayed below the given line. `options`, when given, should be an object that configures the behavior of the widget. The following options are supported (all default to false) →

`coverGutter: boolean`  
Whether the widget should cover the gutter.

`noHScroll: boolean`  
Whether the widget should stay fixed in the face of horizontal scrolling.

`above: boolean`  
Causes the widget to be placed above instead of below the text of the line.

`showIfHidden: boolean`  
When true, will cause the widget to be rendered even if the line it is associated with is hidden.

`handleMouseEvents: boolean`  
Determines whether the editor will capture mouse and drag events occurring in this widget. Default is false—the events will be left alone for the default browser handler, or specific handlers on the widget, to capture.

Note that the widget node will become a descendant of nodes with CodeMirror-specific CSS classes, and those classes might in some cases affect it. This method returns an object that represents the widget placement. It’ll have a `line` property pointing at the line handle that it is associated with, and the following methods:

`clear()`  
Removes the widget.

`changed()`  
Call this if you made some change to the widget’s DOM node that might affect its height. It’ll force CodeMirror to update the height of the line that contains the widget.

### Sizing, scrolling and positioning methods

`cm.setSize(width: number|string, height:               number|string)`  
Programatically set the size of the editor (overriding the applicable [CSS rules](#css-resize)). `width` and `height` height can be either numbers (interpreted as pixels) or CSS units (`"100%"`, for example). You can pass `null` for either of them to indicate that that dimension should not be changed.

`cm.scrollTo(x: number, y: number)`  
Scroll the editor to a given (pixel) position. Both arguments may be left as `null` or `undefined` to have no effect.

`cm.getScrollInfo() → {left, top, width, height,               clientWidth, clientHeight}`  
Get an `{left, top, width, height, clientWidth, clientHeight}` object that represents the current scroll position, the size of the scrollable area, and the size of the visible area (minus scrollbars).

`cm.scrollIntoView(pos: {line, ch}|{left, top,               right, bottom}, ?margin: number)`  
Scrolls the given element into view. `pos` may be either a `{line, ch}` position, referring to a given character, `null`, to refer to the cursor, or a `{left, top, right, bottom}` object, in editor-local coordinates. The `margin` parameter is optional. When given, it indicates the amount of pixels around the given area that should be made visible as well.

`cm.cursorCoords(where: boolean|{line, ch}, mode:               string) → {left, top, bottom}`  
Returns an `{left, top, bottom}` object containing the coordinates of the cursor position. If `mode` is `"local"`, they will be relative to the top-left corner of the editable document. If it is `"page"` or not given, they are relative to the top-left corner of the page. `where` can be a boolean indicating whether you want the start (`true`) or the end (`false`) of the selection, or, if a `{line, ch}` object is given, it specifies the precise position at which you want to measure.

`cm.charCoords(pos: {line, ch}, ?mode: string) →               {left, right, top, bottom}`  
Returns the position and dimensions of an arbitrary character. `pos` should be a `{line, ch}` object. This differs from `cursorCoords` in that it’ll give the size of the whole character, rather than just the position that the cursor would have when it would sit at that position.

`cm.coordsChar(object: {left, top}, ?mode:               string) → {line, ch}`  
Given an `{left, top}` object, returns the `{line, ch}` position that corresponds to it. The optional `mode` parameter determines relative to what the coordinates are interpreted. It may be `"window"`, `"page"` (the default), or `"local"`.

`cm.lineAtHeight(height: number, ?mode: string) →               number`  
Computes the line at the given pixel height. `mode` can be one of the same strings that [`coordsChar`](#coordsChar) accepts.

`cm.defaultTextHeight() → number`  
Returns the line height of the default font for the editor.

`cm.defaultCharWidth() → number`  
Returns the pixel width of an ‘x’ in the default font for the editor. (Note that for non-monospace fonts, this is mostly useless, and even for monospace fonts, non-ascii characters might have a different width).

`cm.getViewport() → {from: number, to:               number}`  
Returns a `{from, to}` object indicating the start (inclusive) and end (exclusive) of the currently rendered part of the document. In big documents, when most content is scrolled out of view, CodeMirror will only render the visible part, and a margin around it. See also the [`viewportChange`](#event_viewportChange) event.

`cm.refresh()`  
If your code does something to change the size of the editor element (window resizes are already listened for), or unhides it, you should probably follow up by calling this method to ensure CodeMirror is still looking as intended.

### Mode, state, and token-related methods

When writing language-aware functionality, it can often be useful to hook into the knowledge that the CodeMirror language mode has. See [the section on modes](#modeapi) for a more detailed description of how these work.

`doc.getMode() → object`  
Gets the mode object for the editor. Note that this is distinct from `getOption("mode")`, which gives you the mode specification, rather than the resolved, instantiated [mode object](#defineMode).

`cm.getTokenAt(pos: {line, ch}) → object`  
Retrieves information about the token the current mode found before the given position (a `{line, ch}` object). The returned object has the following properties:

`start`  
The character (on the given line) at which the token starts.

`end`  
The character at which the token ends.

`string`  
The token’s string.

`type`  
The token type the mode assigned to the token, such as `"keyword"` or `"comment"` (may also be null).

`state`  
The mode’s state at the end of this token.

`cm.getStateAfter(?line: integer) → object`  
Returns the mode’s parser state, if any, at the end of the given line number. If no line number is given, the state at the end of the document is returned. This can be useful for storing parsing errors in the state, or getting other kinds of contextual information for a line.

### Miscellaneous methods

`cm.operation(func: () → any) → any`  
CodeMirror internally buffers changes and only updates its DOM structure after it has finished performing some operation. If you need to perform a lot of operations on a CodeMirror instance, you can call this method with a function argument. It will call the function, buffering up all changes, and only doing the expensive update after the function returns. This can be a lot faster. The return value from this method will be the return value of your function.

`cm.indentLine(line: integer, ?dir:               string|integer)`  
Adjust the indentation of the given line. The second argument (which defaults to `"smart"`) may be one of:

`"prev"`  
Base indentation on the indentation of the previous line.

`"smart"`  
Use the mode’s smart indentation if available, behave like `"prev"` otherwise.

`"add"`  
Increase the indentation of the line by one [indent unit](#option_indentUnit).

`"subtract"`  
Reduce the indentation of the line.

`<integer>`  
Add (positive number) or reduce (negative number) the indentation by the given amount of spaces.

`cm.toggleOverwrite(?value: bool)`  
Switches between overwrite and normal insert mode (when not given an argument), or sets the overwrite mode to a specific state (when given an argument).

`doc.posFromIndex(index: integer) → {line,               ch}`  
Calculates and returns a `{line, ch}` object for a zero-based `index` who’s value is relative to the start of the editor’s text. If the `index` is out of range of the text then the returned object is clipped to start or end of the text respectively.

`doc.indexFromPos(object: {line, ch}) →               integer`  
The reverse of [`posFromIndex`](#posFromIndex).

`cm.focus()`  
Give the editor focus.

`cm.getInputField() → TextAreaElement`  
Returns the hidden textarea used to read input.

`cm.getWrapperElement() → Element`  
Returns the DOM node that represents the editor, and controls its size. Remove this from your tree to delete an editor instance.

`cm.getScrollerElement() → Element`  
Returns the DOM node that is responsible for the scrolling of the editor.

`cm.getGutterElement() → Element`  
Fetches the DOM node that contains the editor gutters.

### Static properties

The `CodeMirror` object itself provides several useful properties.

`CodeMirror.version: string`  
It contains a string that indicates the version of the library. For releases, this simply contains `"major.minor"` (for example `"2.33"`. For beta versions, `" B"` (space, capital B) is added at the end of the string, for development snapshots, `" +"` (space, plus) is added.

`CodeMirror.fromTextArea(textArea:               TextAreaElement, ?config: object)`  
The method provides another way to initialize an editor. It takes a textarea DOM node as first argument and an optional configuration object as second. It will replace the textarea with a CodeMirror instance, and wire up the form of that textarea (if any) to make sure the editor contents are put into the textarea when the form is submitted. A CodeMirror instance created this way has three additional methods:

`cm.save()`  
Copy the content of the editor into the textarea.

`cm.toTextArea()`  
Remove the editor, and restore the original textarea (with the editor’s current content).

`cm.getTextArea() → TextAreaElement`  
Returns the textarea that the instance was based on.

`CodeMirror.defaults: object`  
An object containing default values for all [options](#config). You can assign to its properties to modify defaults (though this won’t affect editors that have already been created).

`CodeMirror.defineExtension(name: string, value:               any)`  
If you want to define extra methods in terms of the CodeMirror API, it is possible to use `defineExtension`. This will cause the given value (usually a method) to be added to all CodeMirror instances created from then on.

`CodeMirror.defineDocExtension(name: string,               value: any)`  
Like [`defineExtension`](#defineExtenstion), but the method will be added to the interface for [`Doc`](#Doc) objects instead.

`CodeMirror.defineOption(name: string, default:               any, updateFunc: function)`  
Similarly, `defineOption` can be used to define new options for CodeMirror. The `updateFunc` will be called with the editor instance and the new value when an editor is initialized, and whenever the option is modified through [`setOption`](#setOption).

`CodeMirror.defineInitHook(func: function)`  
If your extention just needs to run some code whenever a CodeMirror instance is initialized, use `CodeMirror.defineInitHook`. Give it a function as its only argument, and from then on, that function will be called (with the instance as argument) whenever a new CodeMirror instance is initialized.

`CodeMirror.Pos(line: integer, ?ch:               integer)`  
A constructor for the `{line, ch}` objects that are used to represent positions in editor documents.

`CodeMirror.changeEnd(change: object) → {line,               ch}`  
Utility function that computes an end position from a change (an object with `from`, `to`, and `text` properties, as passed to various [event handlers](#event_change)). The returned position will be the end of the changed range, *after* the change is applied.

Add-ons
-------

The `addon` directory in the distribution contains a number of reusable components that implement extra editor functionality. In brief, they are:

[`dialog/dialog.js`](../addon/dialog/dialog.js)  
Provides a very simple way to query users for text input. Adds an `openDialog` method to CodeMirror instances, which can be called with an HTML fragment that provides the prompt (should include an `input` tag), and a callback function that is called when text has been entered. Depends on `addon/dialog/dialog.css`.

[`search/searchcursor.js`](../addon/search/searchcursor.js)  
Adds the `getSearchCursor(query, start, caseFold) → cursor` method to CodeMirror instances, which can be used to implement search/replace functionality. `query` can be a regular expression or a string (only strings will match across lines—if they contain newlines). `start` provides the starting position of the search. It can be a `{line, ch}` object, or can be left off to default to the start of the document. `caseFold` is only relevant when matching a string. It will cause the search to be case-insensitive. A search cursor has the following methods:

`findNext() → boolean`  
`findPrevious() → boolean`  
Search forward or backward from the current position. The return value indicates whether a match was found. If matching a regular expression, the return value will be the array returned by the `match` method, in case you want to extract matched groups.

`from() → {line, ch}`  
`to() → {line, ch}`  
These are only valid when the last call to `findNext` or `findPrevious` did not return false. They will return `{line, ch}` objects pointing at the start and end of the match.

`replace(text: string)`  
Replaces the currently found match with the given text and adjusts the cursor position to reflect the replacement.

[`search/search.js`](../addon/search/search.js)  
Implements the search commands. CodeMirror has keys bound to these by default, but will not do anything with them unless an implementation is provided. Depends on `searchcursor.js`, and will make use of [`openDialog`](#addon_dialog) when available to make prompting for search queries less ugly.

[`edit/matchbrackets.js`](../addon/edit/matchbrackets.js)  
Defines an option `matchBrackets` which, when set to true, causes matching brackets to be highlighted whenever the cursor is next to them. It also adds a method `matchBrackets` that forces this to happen once, and a method `findMatchingBracket` that can be used to run the bracket-finding algorithm that this uses internally.

[`edit/closebrackets.js`](../addon/edit/closebrackets.js)  
Defines an option `autoCloseBrackets` that will auto-close brackets and quotes when typed. By default, it’ll auto-close `()[]{}''""`, but you can pass it a string similar to that (containing pairs of matching characters), or an object with `pairs` and optionally `explode` properties to customize it. `explode` should be a similar string that gives the pairs of characters that, when enter is pressed between them, should have the second character also moved to its own line. [Demo here](../demo/closebrackets.html).

[`edit/trailingspace.js`](../addon/edit/trailingspace.js)  
Adds an option `showTrailingSpace` which, when enabled, adds the CSS class `cm-trailingspace` to stretches of whitespace at the end of lines. The [demo](../demo/trailingspace.html) has a nice squiggly underline style for this class.

[`comment/comment.js`](../addon/comment/comment.js)  
Addon for commenting and uncommenting code. Adds three methods to CodeMirror instances:

`lineComment(from: {line, ch}, to: {line,                   ch}, ?options: object)`  
Set the lines in the given range to be line comments. Will fall back to `blockComment` when no line comment style is defined for the mode.

`blockComment(from: {line, ch}, to: {line,                   ch}, ?options: object)`  
Wrap the code in the given range in a block comment. Will fall back to `lineComment` when no block comment style is defined for the mode.

`uncomment(from: {line, ch}, to: {line, ch},                   ?options: object) → boolean`  
Try to uncomment the given range. Returns `true` if a comment range was found and removed, `false` otherwise.

The `options` object accepted by these methods may have the following properties:

`blockCommentStart, blockCommentEnd, blockCommentLead,                   lineComment: string`  
Override the [comment string properties](#mode_comment) of the mode with custom comment strings.

`padding: string`  
A string that will be inserted after opening and before closing comment markers. Defaults to a single space.

`commentBlankLines: boolean`  
Whether, when adding line comments, to also comment lines that contain only whitespace.

`indent: boolean`  
When adding line comments and this is turned on, it will align the comment block to the current indentation of the first line of the block.

`fullLines: boolean`  
When block commenting, this controls whether the whole lines are indented, or only the precise range that is given. Defaults to `true`.

The addon also defines a `toggleComment` [command](#commands), which will try to uncomment the current selection, and if that fails, line-comments it.

[`fold/foldcode.js`](../addon/fold/foldcode.js)  
Helps with code folding. Add a `foldCode` method to editor instances, which will try to do a code fold starting at the given line, or unfold the fold that is already present. The method takes as first argument the position that should be folded (may be a line number or a [`Pos`](#Pos)), and as second argument either a range-finder function, or an options object, supporting the following properties:

`rangeFinder: fn(CodeMirror, Pos)`  
The function that is used to find foldable ranges. There are files in the [`addon/fold/`](../addon/fold/) directory providing `CodeMirror.braceRangeFinder`, which finds blocks in brace languages (JavaScript, C, Java, etc), `CodeMirror.indentRangeFinder`, for languages where indentation determines block structure (Python, Haskell), and `CodeMirror.tagRangeFinder`, for XML-style languages.

`widget: string|Element`  
The widget to show for folded ranges. Can be either a string, in which case it’ll become a span with class `CodeMirror-foldmarker`, or a DOM node.

`scanUp: boolean`  
When true (default is false), the addon will try to find foldable ranges on the lines above the current one if there isn’t an eligible one on the given line.

`minFoldSize: integer`  
The minimum amount of lines that a fold should span to be accepted. Defaults to 0, which also allows single-line folds.

See [the demo](../demo/folding.html) for an example.

[`runmode/runmode.js`](../addon/runmode/runmode.js)  
Can be used to run a CodeMirror mode over text without actually opening an editor instance. See [the demo](../demo/runmode.html) for an example. There are alternate versions of the file avaible for running [stand-alone](../addon/runmode/runmode-standalone.js) (without including all of CodeMirror) and for [running under node.js](../addon/runmode/runmode.node.js).

[`mode/overlay.js`](../addon/mode/overlay.js)  
Mode combinator that can be used to extend a mode with an ‘overlay’ — a secondary mode is run over the stream, along with the base mode, and can color specific pieces of text without interfering with the base mode. Defines `CodeMirror.overlayMode`, which is used to create such a mode. See [this demo](../demo/mustache.html) for a detailed example.

[`mode/multiplex.js`](../addon/mode/multiplex.js)  
Mode combinator that can be used to easily ‘multiplex’ between several modes. Defines `CodeMirror.multiplexingMode` which, when given as first argument a mode object, and as other arguments any number of `{open, close, mode [, delimStyle, innerStyle]}` objects, will return a mode object that starts parsing using the mode passed as first argument, but will switch to another mode as soon as it encounters a string that occurs in one of the `open` fields of the passed objects. When in a sub-mode, it will go back to the top mode again when the `close` string is encountered. Pass `"\n"` for `open` or `close` if you want to switch on a blank line.

-   When `delimStyle` is specified, it will be the token style returned for the delimiter tokens.
-   When `innerStyle` is specified, it will be the token style added for each inner mode token.

The outer mode will not see the content between the delimiters. See [this demo](../demo/multiplex.html) for an example.

[`hint/show-hint.js`](../addon/hint/show-hint.js)  
Provides a framework for showing autocompletion hints. Defines `CodeMirror.showHint`, which takes a CodeMirror instance, a hinting function, and optionally an options object, and pops up a widget that allows the user to select a completion. Hinting functions are function that take an editor instance and an optional options object, and return a `{list, from, to}` object, where `list` is an array of strings or objects (the completions), and `from` and `to` give the start and end of the token that is being completed. When completions aren’t simple strings, they should be objects with the folowing properties:

`text: string`  
The completion text. This is the only required property.

`displayText: string`  
The text that should be displayed in the menu.

`className: string`  
A CSS class name to apply to the completion’s line in the menu.

`render: fn(Element, self, data)`  
A method used to create the DOM structure for showing the completion by appending it to its first argument.

`hint: fn(CodeMirror, self, data)`  
A method used to actually apply the completion, instead of the default behavior.

The plugin understands the following options (the options object will also be passed along to the hinting function, which may understand additional options):

`async: boolean`  
When set to true, the hinting function’s signature should be `(cm, callback, ?options)`, and the completion interface will only be popped up when the hinting function calls the callback, passing it the object holding the completions.

`completeSingle: boolean`  
Determines whether, when only a single completion is available, it is completed without showing the dialog. Defaults to true.

`alignWithWord: boolean`  
Whether the pop-up should be horizontally aligned with the start of the word (true, default), or with the cursor (false).

`closeOnUnfocus: boolean`  
When enabled (which is the default), the pop-up will close when the editor is unfocused.

`customKeys: keymap`  
Allows you to provide a custom keymap of keys to be active when the pop-up is active. The handlers will be called with an extra argument, a handle to the completion menu, which has `moveFocus(n)`, `setFocus(n)`, `pick()`, and `close()` methods (see the source for details), that can be used to change the focused element, pick the current element or close the menu.

`extraKeys: keymap`  
Like `customKeys` above, but the bindings will be added to the set of default bindings, instead of replacing them.

The following events will be fired on the completions object during completion:

`"shown" ()`  
Fired when the pop-up is shown.

`"select" (completion, Element)`  
Fired when a completion is selected. Passed the completion value (string or object) and the DOM node that represents it in the menu.

`"close" ()`  
Fired when the completion is finished.

This addon depends styles from `addon/hint/show-hint.css`. Check out [the demo](../demo/complete.html) for an example.

[`hint/javascript-hint.js`](../addon/hint/javascript-hint.js)  
Defines a simple hinting function for JavaScript (`CodeMirror.javascriptHint`) and CoffeeScript (`CodeMirror.coffeescriptHint`) code. This will simply use the JavaScript environment that the editor runs in as a source of information about objects and their properties.

[`hint/xml-hint.js`](../addon/hint/xml-hint.js)  
Defines `CodeMirror.xmlHint`, which produces hints for XML tagnames, attribute names, and attribute values, guided by a `schemaInfo` option (a property of the second argument passed to the hinting function, or the third argument passed to `CodeMirror.showHint`).  
The schema info should be an object mapping tag names to information about these tags, with optionally a `"!top"` property containing a list of the names of valid top-level tags. The values of the properties should be objects with optional properties `children` (an array of valid child element names, omit to simply allow all tags to appear) and `attrs` (an object mapping attribute names to `null` for free-form attributes, and an array of valid values for restricted attributes). [Demo here.](../demo/xmlcomplete.html)

[`hint/html-hint.js`](../addon/hint/html-hint.js)  
Provides schema info to the [xml-hint](#addon_xml-hint) addon for HTML documents. Defines a schema object `CodeMirror.htmlSchema` that you can pass to as a `schemaInfo` option, and a `CodeMirror.htmlHint` hinting function that automatically calls `CodeMirror.xmlHint` with this schema data. See the [demo](../demo/html5complete.html).

[`hint/python-hint.js`](../addon/hint/python-hint.js)  
A very simple hinting function for Python code. Defines `CodeMirror.pythonHint`.

[`match-highlighter.js`](../addon/search/match-highlighter.js)  
Adds a `highlightSelectionMatches` option that can be enabled to highlight all instances of a currently selected word. Can be set either to true or to an object containing the following options: `minChars`, for the minimum amount of selected characters that triggers a highlight (default 2), `style`, for the style to be used to highlight the matches (default `"matchhighlight"`, which will correspond to CSS class `cm-matchhighlight`), and `showToken` which, when enabled, causes the current token to be highlighted when nothing is selected (defaults to off). Demo [here](../demo/matchhighlighter.html).

[`lint/lint.js`](../addon/lint/lint.js)  
Defines an interface component for showing linting warnings, with pluggable warning sources (see [`json-lint.js`](../addon/lint/json-lint.js) and [`javascript-lint.js`](../addon/lint/javascript-lint.js) in the same directory). Defines a `lintWith` option that can be set to a warning source (for example `CodeMirror.javascriptValidator`). Depends on `addon/lint/lint.css`. A demo can be found [here](../demo/lint.html).

[`selection/mark-selection.js`](../addon/selection/mark-selection.js)  
Causes the selected text to be marked with the CSS class `CodeMirror-selectedtext` when the `styleSelectedText` option is enabled. Useful to change the colour of the selection (in addition to the background), like in [this demo](../demo/markselection.html).

[`selection/active-line.js`](../addon/selection/active-line.js)  
Defines a `styleActiveLine` option that, when enabled, gives the wrapper of the active line the class `CodeMirror-activeline`, and adds a background with the class `CodeMirror-activeline-background`. is enabled. See the [demo](../demo/activeline.html).

[`edit/closetag.js`](../addon/edit/closetag.js)  
Provides utility functions for adding automatic tag closing to XML modes. See the [demo](../demo/closetag.html).

[`mode/loadmode.js`](../addon/mode/loadmode.js)  
Defines a `CodeMirror.requireMode(modename, callback)` function that will try to load a given mode and call the callback when it succeeded. You’ll have to set `CodeMirror.modeURL` to a string that mode paths can be constructed from, for example `"mode/%N/%N.js"`—the `%N`’s will be replaced with the mode name. Also defines `CodeMirror.autoLoadMode(instance, mode)`, which will ensure the given mode is loaded and cause the given editor instance to refresh its mode when the loading succeeded. See the [demo](../demo/loadmode.html).

[`edit/continuecomment.js`](../addon/edit/continuecomment.js)  
Adds an `continueComments` option, which can be set to true to have the editor prefix new lines inside C-like block comments with an asterisk when Enter is pressed. It can also be set to a string in order to bind this functionality to a specific key..

[`display/placeholder.js`](../addon/display/placeholder.js)  
Adds a `placeholder` option that can be used to make text appear in the editor when it is empty and not focused. Also gives the editor a `CodeMirror-empty` CSS class whenever it doesn’t contain any text. See [the demo](../demo/placeholder.html).

Writing CodeMirror Modes
------------------------

Modes typically consist of a single JavaScript file. This file defines, in the simplest case, a lexer (tokenizer) for your language—a function that takes a character stream as input, advances it past a token, and returns a style for that token. More advanced modes can also handle indentation for the language.

The mode script should call `CodeMirror.defineMode` to register itself with CodeMirror. This function takes two arguments. The first should be the name of the mode, for which you should use a lowercase string, preferably one that is also the name of the files that define the mode (i.e. `"xml"` is defined in `xml.js`). The second argument should be a function that, given a CodeMirror configuration object (the thing passed to the `CodeMirror` function) and an optional mode configuration object (as in the [`mode`](#option_mode) option), returns a mode object.

Typically, you should use this second argument to `defineMode` as your module scope function (modes should not leak anything into the global scope!), i.e. write your whole mode inside this function.

The main responsibility of a mode script is *parsing* the content of the editor. Depending on the language and the amount of functionality desired, this can be done in really easy or extremely complicated ways. Some parsers can be stateless, meaning that they look at one element (*token*) of the code at a time, with no memory of what came before. Most, however, will need to remember something. This is done by using a *state object*, which is an object that is always passed when reading a token, and which can be mutated by the tokenizer.

Modes that use a state must define a `startState` method on their mode object. This is a function of no arguments that produces a state object to be used at the start of a document.

The most important part of a mode object is its `token(stream, state)` method. All modes must define this method. It should read one token from the stream it is given as an argument, optionally update its state, and return a style string, or `null` for tokens that do not have to be styled. For your styles, you are encouraged to use the ‘standard’ names defined in the themes (without the `cm-` prefix). If that fails, it is also possible to come up with your own and write your own CSS theme file.

The stream object that’s passed to `token` encapsulates a line of code (tokens may never span lines) and our current position in that line. It has the following API:

`eol() → boolean`  
Returns true only if the stream is at the end of the line.

`sol() → boolean`  
Returns true only if the stream is at the start of the line.

`peek() → string`  
Returns the next character in the stream without advancing it. Will return an `null` at the end of the line.

`next() → string`  
Returns the next character in the stream and advances it. Also returns `null` when no more characters are available.

`eat(match: string|regexp|function(char: string)               → boolean) → string`  
`match` can be a character, a regular expression, or a function that takes a character and returns a boolean. If the next character in the stream ‘matches’ the given argument, it is consumed and returned. Otherwise, `undefined` is returned.

`eatWhile(match: string|regexp|function(char:               string) → boolean) → boolean`  
Repeatedly calls `eat` with the given argument, until it fails. Returns true if any characters were eaten.

`eatSpace() → boolean`  
Shortcut for `eatWhile` when matching white-space.

`skipToEnd()`  
Moves the position to the end of the line.

`skipTo(ch: string) → boolean`  
Skips to the next occurrence of the given character, if found on the current line (doesn’t advance the stream if the character does not occur on the line). Returns true if the character was found.

`match(pattern: string, ?consume: boolean,               ?caseFold: boolean) → boolean`  
`match(pattern: regexp, ?consume: boolean) →               array<string>`  
Act like a multi-character `eat`—if `consume` is true or not given—or a look-ahead that doesn’t update the stream position—if it is false. `pattern` can be either a string or a regular expression starting with `^`. When it is a string, `caseFold` can be set to true to make the match case-insensitive. When successfully matching a regular expression, the returned value will be the array returned by `match`, in case you need to extract matched groups.

`backUp(n: integer)`  
Backs up the stream `n` characters. Backing it up further than the start of the current token will cause things to break, so be careful.

`column() → integer`  
Returns the column (taking into account tabs) at which the current token starts.

`indentation() → integer`  
Tells you how far the current line has been indented, in spaces. Corrects for tab characters.

`current() → string`  
Get the string between the start of the current token and the current stream position.

By default, blank lines are simply skipped when tokenizing a document. For languages that have significant blank lines, you can define a `blankLine(state)` method on your mode that will get called whenever a blank line is passed over, so that it can update the parser state.

Because state object are mutated, and CodeMirror needs to keep valid versions of a state around so that it can restart a parse at any line, copies must be made of state objects. The default algorithm used is that a new state object is created, which gets all the properties of the old object. Any properties which hold arrays get a copy of these arrays (since arrays tend to be used as mutable stacks). When this is not correct, for example because a mode mutates non-array properties of its state object, a mode object should define a `copyState` method, which is given a state and should return a safe copy of that state.

If you want your mode to provide smart indentation (through the [`indentLine`](#indentLine) method and the `indentAuto` and `newlineAndIndent` commands, to which keys can be [bound](#option_extraKeys)), you must define an `indent(state, textAfter)` method on your mode object.

The indentation method should inspect the given state object, and optionally the `textAfter` string, which contains the text on the line that is being indented, and return an integer, the amount of spaces to indent. It should usually take the [`indentUnit`](#option_indentUnit) option into account. An indentation method may return `CodeMirror.Pass` to indicate that it could not come up with a precise indentation.

To work well with the [commenting addon](#addon_comment), a mode may define `lineComment` (string that starts a line comment), `blockCommentStart`, `blockCommentEnd` (strings that start and end block comments), and `blockCommentLead` (a string to put at the start of continued lines in a block comment). All of these are optional.

Finally, a mode may define an `electricChars` property, which should hold a string containing all the characters that should trigger the behaviour described for the [`electricChars`](#option_electricChars) option.

So, to summarize, a mode *must* provide a `token` method, and it *may* provide `startState`, `copyState`, and `indent` methods. For an example of a trivial mode, see the [diff mode](../mode/diff/diff.js), for a more involved example, see the [C-like mode](../mode/clike/clike.js).

Sometimes, it is useful for modes to *nest*—to have one mode delegate work to another mode. An example of this kind of mode is the [mixed-mode HTML mode](../mode/htmlmixed/htmlmixed.js). To implement such nesting, it is usually necessary to create mode objects and copy states yourself. To create a mode object, there are `CodeMirror.getMode(options, parserConfig)`, where the first argument is a configuration object as passed to the mode constructor function, and the second argument is a mode specification as in the [`mode`](#option_mode) option. To copy a state object, call `CodeMirror.copyState(mode, state)`, where `mode` is the mode that created the given state.

In a nested mode, it is recommended to add an extra methods, `innerMode` which, given a state object, returns a `{state, mode}` object with the inner mode and its state for the current position. These are used by utility scripts such as the [tag closer](#addon_closetag) to get context information. Use the `CodeMirror.innerMode` helper function to, starting from a mode and a state, recursively walk down to the innermost mode and state.

To make indentation work properly in a nested parser, it is advisable to give the `startState` method of modes that are intended to be nested an optional argument that provides the base indentation for the block of code. The JavaScript and CSS parser do this, for example, to allow JavaScript and CSS code inside the mixed-mode HTML mode to be properly indented.

It is possible, and encouraged, to associate your mode, or a certain configuration of your mode, with a [MIME](http://en.wikipedia.org/wiki/MIME) type. For example, the JavaScript mode associates itself with `text/javascript`, and its JSON variant with `application/json`. To do this, call `CodeMirror.defineMIME(mime, modeSpec)`, where `modeSpec` can be a string or object specifying a mode, as in the [`mode`](#option_mode) option.

Sometimes, it is useful to add or override mode object properties from external code. The `CodeMirror.extendMode` can be used to add properties to mode objects produced for a specific mode. Its first argument is the name of the mode, its second an object that specifies the properties that should be added. This is mostly useful to add utilities that can later be looked up through [`getMode`](#getMode).

Contents
--------

-   [Overview](#overview)
-   [Basic Usage](#usage)
-   [Configuration](#config)
-   [Events](#events)
-   [Keymaps](#keymaps)
-   [Customized Styling](#styling)
-   [Programming API](#api)
    -   [Constructor](#constructor)
    -   [Content manipulation](#api_content)
    -   [Selection](#api_selection)
    -   [Configuration](#api_configuration)
    -   [Document management](#api_doc)
    -   [History](#api_history)
    -   [Text-marking](#api_marker)
    -   [Widget, gutter, and decoration](#api_decoration)
    -   [Sizing, scrolling, and positioning](#api_sizing)
    -   [Mode, state, and tokens](#api_mode)
    -   [Miscellaneous methods](#api_misc)
    -   [Static properties](#api_static)
-   [Add-ons](#addons)
-   [Writing CodeMirror Modes](#modeapi)

 
