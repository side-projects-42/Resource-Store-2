<span class="logo-braces">{ }</span> [CodeMirror](http://codemirror.net/)
=========================================================================

    /* User manual and
       reference guide */

Overview
--------

CodeMirror is a code-editor component that can be embedded in Web pages. The code library provides *only* the editor component, no accompanying buttons, auto-completion, or other IDE functionality. It does provide a rich API on top of which such functionality can be straightforwardly implemented. See the [add-ons](#addons) included in the distribution, and the [CodeMirror UI](https://github.com/jagthedrummer/codemirror-ui) project, for reusable implementations of extra features.

CodeMirror works with language-specific modes. Modes are JavaScript programs that help color (and optionally indent) text written in a given language. The distribution comes with a number of modes (see the `mode/` directory), and it isn't hard to [write new ones](#modeapi) for other languages.

Basic Usage
-----------

The easiest way to use CodeMirror is to simply load the script and style sheet found under `lib/` in the distribution, plus a mode script from one of the `mode/` directories and a theme stylesheet from `theme/`. (See also [the compression helper](compress.html).) For example:

    <script src="lib/codemirror.js"></script>
    <link rel="stylesheet" href="../lib/codemirror.css">
    <script src="mode/javascript/javascript.js"></script>

Having done this, an editor instance can be created like this:

    var myCodeMirror = CodeMirror(document.body);

The editor will be appended to the document body, will start empty, and will use the mode that we loaded. To have more control over the new editor, a configuration object can be passed to `CodeMirror` as a second argument:

    var myCodeMirror = CodeMirror(document.body, {
      value: "function myScript(){return 100;}\n",
      mode:  "javascript"
    });

This will initialize the editor with a piece of code already in it, and explicitly tell it to use the JavaScript mode (which is useful when multiple modes are loaded). See [below](#config) for a full discussion of the configuration options that CodeMirror accepts.

In cases where you don't want to append the editor to an element, and need more control over the way it is inserted, the first argument to the `CodeMirror` function can also be a function that, when given a DOM element, inserts it into the document somewhere. This could be used to, for example, replace a textarea with a real editor:

    var myCodeMirror = CodeMirror(function(elt) {
      myTextArea.parentNode.replaceChild(elt, myTextArea);
    }, {value: myTextArea.value});

However, for this use case, which is a common way to use CodeMirror, the library provides a much more powerful shortcut:

    var myCodeMirror = CodeMirror.fromTextArea(myTextArea);

This will, among other things, ensure that the textarea's value is updated when the form (if it is part of a form) is submitted. See the [API reference](#fromTextArea) for a full description of this method.

Configuration
-------------

Both the `CodeMirror` function and its `fromTextArea` method take as second (optional) argument an object containing configuration options. Any option not supplied like this will be taken from `CodeMirror.defaults`, an object containing the default options. You can update this object to change the defaults on your page.

Options are not checked in any way, so setting bogus option values is bound to lead to odd errors.

These are the supported options:

`value (string)`  
The starting value of the editor.

`mode (string or object)`  
The mode to use. When not given, this will default to the first mode that was loaded. It may be a string, which either simply names the mode or is a [MIME](http://en.wikipedia.org/wiki/MIME) type associated with the mode. Alternatively, it may be an object containing configuration options for the mode, with a `name` property that names the mode (for example `{name: "javascript", json: true}`). The demo pages for each mode contain information about what configuration parameters the mode supports. You can ask CodeMirror which modes and MIME types are loaded with the `CodeMirror.listModes` and `CodeMirror.listMIMEs` functions.

`theme (string)`  
The theme to style the editor with. You must make sure the CSS file defining the corresponding `.cm-s-[name]` styles is loaded (see the [`theme`](../theme/) directory in the distribution). The default is `"default"`, for which colors are included in `codemirror.css`. It is possible to use multiple theming classes at once—for example `"foo bar"` will assign both the `cm-s-foo` and the `cm-s-bar` classes to the editor.

`indentUnit (integer)`  
How many spaces a block (whatever that means in the edited language) should be indented. The default is 2.

`smartIndent (boolean)`  
Whether to use the context-sensitive indentation that the mode provides (or just indent the same as the line before). Defaults to true.

`tabSize (integer)`  
The width of a tab character. Defaults to 4.

`indentWithTabs (boolean)`  
Whether, when indenting, the first N\*`tabSize` spaces should be replaced by N tabs. Default is false.

`electricChars (boolean)`  
Configures whether the editor should re-indent the current line when a character is typed that might change its proper indentation (only works if the mode supports indentation). Default is true.

`autoClearEmptyLines (boolean)`  
When turned on (default is off), this will clear automatically clear lines consisting only of whitespace when the cursor leaves them. This is mostly useful to prevent auto indentation from introducing trailing whitespace in a file.

`keyMap (string)`  
Configures the keymap to use. The default is `"default"`, which is the only keymap defined in `codemirror.js` itself. Extra keymaps are found in the [`keymap`](../keymap/) directory. See the [section on keymaps](#keymaps) for more information.

`extraKeys (object)`  
Can be used to specify extra keybindings for the editor, alongside the ones defined by [`keyMap`](#option_keyMap). Should be either null, or a valid [keymap](#keymaps) value.

`lineWrapping (boolean)`  
Whether CodeMirror should scroll or wrap for long lines. Defaults to `false` (scroll).

`lineNumbers (boolean)`  
Whether to show line numbers to the left of the editor.

`firstLineNumber (integer)`  
At which number to start counting lines. Default is 1.

`gutter (boolean)`  
Can be used to force a 'gutter' (empty space on the left of the editor) to be shown even when no line numbers are active. This is useful for setting [markers](#setMarker).

`fixedGutter (boolean)`  
When enabled (off by default), this will make the gutter stay visible when the document is scrolled horizontally.

`readOnly (boolean)`  
This disables editing of the editor content by the user. If the special value `"nocursor"` is given (instead of simply `true`), focusing of the editor is also disallowed.

`onChange (function)`  
When given, this function will be called every time the content of the editor is changed. It will be given the editor instance as first argument, and an `{from, to, text, next}` object containing information about the changes that occurred as second argument. `from` and `to` are the positions (in the pre-change coordinate system) where the change started and ended (for example, it might be `{ch:0, line:18}` if the position is at the beginning of line \#19). `text` is an array of strings representing the text that replaced the changed range (split by line). If multiple changes happened during a single operation, the object will have a `next` property pointing to another change object (which may point to another, etc).

`onCursorActivity (function)`  
Will be called when the cursor or selection moves, or any change is made to the editor content.

`onGutterClick (function)`  
When given, will be called whenever the editor gutter (the line-number area) is clicked. Will be given the editor instance as first argument, the (zero-based) number of the line that was clicked as second argument, and the raw `mousedown` event object as third argument.

`onFocus, onBlur (function)`  
The given functions will be called whenever the editor is focused or unfocused.

`onScroll (function)`  
When given, will be called whenever the editor is scrolled.

`onHighlightComplete (function)`  
Whenever the editor's content has been fully highlighted, this function (if given) will be called. It'll be given a single argument, the editor instance.

`onUpdate (function)`  
Will be called whenever CodeMirror updates its DOM display.

`matchBrackets (boolean)`  
Determines whether brackets are matched whenever the cursor is moved next to a bracket.

`workTime, workDelay (number)`  
Highlighting is done by a pseudo background-thread that will work for `workTime` milliseconds, and then use timeout to sleep for `workDelay` milliseconds. The defaults are 200 and 300, you can change these options to make the highlighting more or less aggressive.

`pollInterval (number)`  
Indicates how quickly CodeMirror should poll its input textarea for changes. Most input is captured by events, but some things, like IME input on some browsers, doesn't generate events that allow CodeMirror to properly detect it. Thus, it polls. Default is 100 milliseconds.

`undoDepth (integer)`  
The maximum number of undo levels that the editor stores. Defaults to 40.

`tabindex (integer)`  
The [tab index](http://www.w3.org/TR/html401/interact/forms.html#adef-tabindex) to assign to the editor. If not given, no tab index will be assigned.

`autofocus (boolean)`  
Can be used to make CodeMirror focus itself on initialization. Defaults to off. When [`fromTextArea`](#fromTextArea) is used, and no explicit value is given for this option, it will inherit the setting from the textarea's `autofocus` attribute.

`dragDrop (boolean)`  
Controls whether drag-and-drop is enabled. On by default.

`onDragEvent (function)`  
When given, this will be called when the editor is handling a `dragenter`, `dragover`, or `drop` event. It will be passed the editor instance and the event object as arguments. The callback can choose to handle the event itself, in which case it should return `true` to indicate that CodeMirror should not do anything further.

`onKeyEvent (function)`  
This provides a rather low-level hook into CodeMirror's key handling. If provided, this function will be called on every `keydown`, `keyup`, and `keypress` event that CodeMirror captures. It will be passed two arguments, the editor instance and the key event. This key event is pretty much the raw key event, except that a `stop()` method is always added to it. You could feed it to, for example, `jQuery.Event` to further normalize it.  
This function can inspect the key event, and handle it if it wants to. It may return true to tell CodeMirror to ignore the event. Be wary that, on some browsers, stopping a `keydown` does not stop the `keypress` from firing, whereas on others it does. If you respond to an event, you should probably inspect its `type` property and only do something when it is `keydown` (or `keypress` for actions that need character data).

Keymaps
-------

Keymaps are ways to associate keys with functionality. A keymap is an object mapping strings that identify the keys to functions that implement their functionality.

Keys are identified either by name or by character. The `CodeMirror.keyNames` object defines names for common keys and associates them with their key codes. Examples of names defined here are `Enter`, `F5`, and `Q`. These can be prefixed with `Shift-`, `Cmd-`, `Ctrl-`, and `Alt-` (in that order!) to specify a modifier. So for example, `Shift-Ctrl-Space` would be a valid key identifier.

Alternatively, a character can be specified directly by surrounding it in single quotes, for example `'$'` or `'q'`. Due to limitations in the way browsers fire key events, these may not be prefixed with modifiers.

The `CodeMirror.keyMap` object associates keymaps with names. User code and keymap definitions can assign extra properties to this object. Anywhere where a keymap is expected, a string can be given, which will be looked up in this object. It also contains the `"default"` keymap holding the default bindings.

The values of properties in keymaps can be either functions of a single argument (the CodeMirror instance), or strings. Such strings refer to properties of the `CodeMirror.commands` object, which defines a number of common commands that are used by the default keybindings, and maps them to functions. A key handler function may throw `CodeMirror.Pass` to indicate that it has decided not to handle the key, and other handlers (or the default behavior) should be given a turn.

Keys mapped to command names that start with the characters `"go"` (which should be used for cursor-movement actions) will be fired even when an extra `Shift` modifier is present (i.e. `"Up":     "goLineUp"` matches both up and shift-up). This is used to easily implement shift-selection.

Keymaps can defer to each other by defining a `fallthrough` property. This indicates that when a key is not found in the map itself, one or more other maps should be searched. It can hold either a single keymap or an array of keymaps.

When a keymap contains a `nofallthrough` property set to `true`, keys matched against that map will be ignored if they don't match any of the bindings in the map (no further child maps will be tried, and the default effect of inserting a character will not occur).

Customized Styling
------------------

Up to a certain extent, CodeMirror's look can be changed by modifying style sheet files. The style sheets supplied by modes simply provide the colors for that mode, and can be adapted in a very straightforward way. To style the editor itself, it is possible to alter or override the styles defined in [`codemirror.css`](../lib/codemirror.css).

Some care must be taken there, since a lot of the rules in this file are necessary to have CodeMirror function properly. Adjusting colors should be safe, of course, and with some care a lot of other things can be changed as well. The CSS classes defined in this file serve the following roles:

`CodeMirror`  
The outer element of the editor. This should be used for borders and positioning. Can also be used to set styles that should hold for everything inside the editor (such as font and font size), or to set a background.

`CodeMirror-scroll`  
This determines whether the editor scrolls (`overflow:       auto` + fixed height). By default, it does. Giving this `height: auto; overflow: visible;` will cause the editor to resize to fit its content.

`CodeMirror-focused`  
Whenever the editor is focused, the top element gets this class. This is used to hide the cursor and give the selection a different color when the editor is not focused.

`CodeMirror-gutter`  
Use this for giving a background or a border to the editor gutter. Don't set any padding here, use `CodeMirror-gutter-text` for that. By default, the gutter is 'fluid', meaning it will adjust its width to the maximum line number or line marker width. You can also set a fixed width if you want.

`CodeMirror-gutter-text`  
Used to style the actual line numbers. For the numbers to line up, you must make sure that the font in the gutter is the same as the one in the rest of the editor, so you should probably only set font style and size in the `CodeMirror` class.

`CodeMirror-lines`  
The visible lines. If this has vertical padding, `CodeMirror-gutter` should have the same padding.

`CodeMirror-cursor`  
The cursor is a block element that is absolutely positioned. You can make it look whichever way you want.

`CodeMirror-selected`  
The selection is represented by `span` elements with this class.

`CodeMirror-matchingbracket`, `CodeMirror-nonmatchingbracket`  
These are used to style matched (or unmatched) brackets.

The actual lines, as well as the cursor, are represented by `pre` elements. By default no text styling (such as bold) that might change line height is applied. If you do want such effects, you'll have to give `CodeMirror pre` a fixed height.

If your page's style sheets do funky things to all `div` or `pre` elements (you probably shouldn't do that), you'll have to define rules to cancel these effects out again for elements under the `CodeMirror` class.

Themes are also simply CSS files, which define colors for various syntactic elements. See the files in the [`theme`](../theme/) directory.

Programming API
---------------

A lot of CodeMirror features are only available through its API. This has the disadvantage that you need to do work to enable them, and the advantage that CodeMirror will fit seamlessly into your application.

Whenever points in the document are represented, the API uses objects with `line` and `ch` properties. Both are zero-based. CodeMirror makes sure to 'clip' any positions passed by client code so that they fit inside the document, so you shouldn't worry too much about sanitizing your coordinates. If you give `ch` a value of `null`, or don't specify it, it will be replaced with the length of the specified line.

`getValue() → string`  
Get the current editor content.

`setValue(string)`  
Set the editor content.

`getSelection() → string`  
Get the currently selected code.

`replaceSelection(string)`  
Replace the selection with the given string.

`focus()`  
Give the editor focus.

`scrollTo(x, y)`  
Scroll the editor to a given (pixel) position. Both arguments may be left as `null` or `undefined` to have no effect.

`getScrollInfo()`  
Get an `{x, y, width, height}` object that represents the current scroll position and scrollable area size of the editor.

`setOption(option, value)`  
Change the configuration of the editor. `option` should the name of an [option](#config), and `value` should be a valid value for that option.

`getOption(option) → value`  
Retrieves the current value of the given option for this editor instance.

`cursorCoords(start, mode) → object`  
Returns an `{x, y, yBot}` object containing the coordinates of the cursor. If `mode` is `"local"`, they will be relative to the top-left corner of the editable document. If it is `"page"` or not given, they are relative to the top-left corner of the page. `yBot` is the coordinate of the bottom of the cursor. `start` is a boolean indicating whether you want the start or the end of the selection.

`charCoords(pos, mode) → object`  
Like `cursorCoords`, but returns the position of an arbitrary characters. `pos` should be a `{line, ch}` object.

`coordsChar(object) → pos`  
Given an `{x, y}` object (in page coordinates), returns the `{line, ch}` position that corresponds to it.

`undo()`  
Undo one edit (if any undo events are stored).

`redo()`  
Redo one undone edit.

`historySize() → object`  
Returns an object with `{undo, redo}` properties, both of which hold integers, indicating the amount of stored undo and redo operations.

`clearHistory()`  
Clears the editor's undo history.

`indentLine(line, dir)`  
Reset the given line's indentation to the indentation prescribed by the mode. If the second argument is given, indentation will be increased (if `dir` is true) or decreased (if false) by an [indent unit](#option_indentUnit) instead.

`getTokenAt(pos) → object`  
Retrieves information about the token the current mode found before the given position (a `{line, ch}` object). The returned object has the following properties:

`start`  
The character (on the given line) at which the token starts.

`end`  
The character at which the token ends.

`string`  
The token's string.

`className`  
The class the mode assigned to the token. (Can be null when no class was assigned.)

`state`  
The mode's state at the end of this token.

`markText(from, to, className) → object`  
Can be used to mark a range of text with a specific CSS class name. `from` and `to` should be `{line, ch}` objects. The method will return an object with two methods, `clear()`, which removes the mark, and `find()`, which returns a `{from,       to}` (both document positions), indicating the current position of the marked range.

`setBookmark(pos) → object`  
Inserts a bookmark, a handle that follows the text around it as it is being edited, at the given position. A bookmark has two methods `find()` and `clear()`. The first returns the current position of the bookmark, if it is still in the document, and the second explicitly removes the bookmark.

`findMarksAt(pos) → array`  
Returns an array of all the bookmarks and marked ranges present at the given position.

`setMarker(line, text, className) → lineHandle`  
Add a gutter marker for the given line. Gutter markers are shown in the line-number area (instead of the number for this line). Both `text` and `className` are optional. Setting `text` to a Unicode character like ● tends to give a nice effect. To put a picture in the gutter, set `text` to a space and `className` to something that sets a background image. If you specify `text`, the given text (which may contain HTML) will, by default, replace the line number for that line. If this is not what you want, you can include the string `%N%` in the text, which will be replaced by the line number.

`clearMarker(line)`  
Clears a marker created with `setMarker`. `line` can be either a number or a handle returned by `setMarker` (since a number may now refer to a different line if something was added or deleted).

`setLineClass(line, className, backgroundClassName) → lineHandle`  
Set a CSS class name for the given line. `line` can be a number or a line handle (as returned by `setMarker` or this function). `className` will be used to style the text for the line, and `backgroundClassName` to style its background (which lies behind the selection). Pass `null` to clear the classes for a line.

`hideLine(line) → lineHandle`  
Hide the given line (either by number or by handle). Hidden lines don't show up in the editor, and their numbers are skipped when [line numbers](#option_lineNumbers) are enabled. Deleting a region around them does delete them, and coping a region around will include them in the copied text.

`showLine(line) → lineHandle`  
The inverse of `hideLine`—re-shows a previously hidden line, by number or by handle.

`onDeleteLine(line, func)`  
Register a function that should be called when the line is deleted from the document.

`lineInfo(line) → object`  
Returns the line number, text content, and marker status of the given line, which can be either a number or a handle returned by `setMarker`. The returned object has the structure `{line, handle, text, markerText, markerClass,       lineClass, bgClass}`.

`getLineHandle(num) → lineHandle`  
Fetches the line handle for the given line number.

`addWidget(pos, node, scrollIntoView)`  
Puts `node`, which should be an absolutely positioned DOM node, into the editor, positioned right below the given `{line, ch}` position. When `scrollIntoView` is true, the editor will ensure that the entire node is visible (if possible). To remove the widget again, simply use DOM methods (move it somewhere else, or call `removeChild` on its parent).

`matchBrackets()`  
Force matching-bracket-highlighting to happen.

`lineCount() → number`  
Get the number of lines in the editor.

`getCursor(start) → object`  
`start` is a boolean indicating whether the start or the end of the selection must be retrieved. If it is not given, the current cursor pos, i.e. the side of the selection that would move if you pressed an arrow key, is chosen. A `{line, ch}` object will be returned.

`somethingSelected() → boolean`  
Return true if any text is selected.

`setCursor(pos)`  
Set the cursor position. You can either pass a single `{line, ch}` object, or the line and the character as two separate parameters.

`setSelection(start, end)`  
Set the selection range. `start` and `end` should be `{line, ch}` objects.

`getLine(n) → string`  
Get the content of line `n`.

`setLine(n, text)`  
Set the content of line `n`.

`removeLine(n)`  
Remove the given line from the document.

`getRange(from, to) → string`  
Get the text between the given points in the editor, which should be `{line, ch}` objects.

`replaceRange(string, from, to)`  
Replace the part of the document between `from` and `to` with the given string. `from` and `to` must be `{line, ch}` objects. `to` can be left off to simply insert the string at position `from`.

`posFromIndex(index) → object`  
Calculates and returns a `{line, ch}` object for a zero-based `index` who's value is relative to the start of the editor's text. If the `index` is out of range of the text then the returned object is clipped to start or end of the text respectively.

`indexFromPos(object) → number`  
The reverse of [`posFromIndex`](#posFromIndex).

The following are more low-level methods:

`operation(func) → result`  
CodeMirror internally buffers changes and only updates its DOM structure after it has finished performing some operation. If you need to perform a lot of operations on a CodeMirror instance, you can call this method with a function argument. It will call the function, buffering up all changes, and only doing the expensive update after the function returns. This can be a lot faster. The return value from this method will be the return value of your function.

`compoundChange(func) → result`  
Will call the given function (and return its result), combining all changes made while that function executes into a single undo event.

`refresh()`  
If your code does something to change the size of the editor element (window resizes are already listened for), or unhides it, you should probably follow up by calling this method to ensure CodeMirror is still looking as intended.

`getInputField() → textarea`  
Returns the hidden textarea used to read input.

`getWrapperElement() → node`  
Returns the DOM node that represents the editor. Remove this from your tree to delete an editor instance.

`getScrollerElement() → node`  
Returns the DOM node that is responsible for the sizing and the scrolling of the editor. You can change the `height` and `width` styles of this element to resize an editor. (You might have to call the [`refresh`](#refresh) method afterwards.)

`getGutterElement() → node`  
Fetches the DOM node that represents the editor gutter.

`getStateAfter(line) → state`  
Returns the mode's parser state, if any, at the end of the given line number. If no line number is given, the state at the end of the document is returned. This can be useful for storing parsing errors in the state, or getting other kinds of contextual information for a line.

Finally, the `CodeMirror` object itself has a method `fromTextArea`. This takes a textarea DOM node as first argument and an optional configuration object as second. It will replace the textarea with a CodeMirror instance, and wire up the form of that textarea (if any) to make sure the editor contents are put into the textarea when the form is submitted. A CodeMirror instance created this way has two additional methods:

`save()`  
Copy the content of the editor into the textarea.

`toTextArea()`  
Remove the editor, and restore the original textarea (with the editor's current content).

`getTextArea() → textarea`  
Returns the textarea that the instance was based on.

If you want to define extra methods in terms of the CodeMirror API, it is possible to use `CodeMirror.defineExtension(name, value)`. This will cause the given value (usually a method) to be added to all CodeMirror instances created from then on.

Add-ons
-------

The `lib/util` directory in the distribution contains a number of reusable components that implement extra editor functionality. In brief, they are:

[`dialog.js`](../lib/util/dialog.js)  
Provides a very simple way to query users for text input. Adds an `openDialog` method to CodeMirror instances, which can be called with an HTML fragment that provides the prompt (should include an `input` tag), and a callback function that is called when text has been entered. Depends on `lib/util/dialog.css`.

[`searchcursor.js`](../lib/util/searchcursor.js)  
Adds the `getSearchCursor(query, start, caseFold) →       cursor` method to CodeMirror instances, which can be used to implement search/replace functionality. `query` can be a regular expression or a string (only strings will match across lines—if they contain newlines). `start` provides the starting position of the search. It can be a `{line, ch}` object, or can be left off to default to the start of the document. `caseFold` is only relevant when matching a string. It will cause the search to be case-insensitive. A search cursor has the following methods:

`findNext(), findPrevious() → boolean`  
Search forward or backward from the current position. The return value indicates whether a match was found. If matching a regular expression, the return value will be the array returned by the `match` method, in case you want to extract matched groups.

`from(), to() → object`  
These are only valid when the last call to `findNext` or `findPrevious` did not return false. They will return `{line, ch}` objects pointing at the start and end of the match.

`replace(text)`  
Replaces the currently found match with the given text and adjusts the cursor position to reflect the replacement.

[`search.js`](../lib/util/search.js)  
Implements the search commands. CodeMirror has keys bound to these by default, but will not do anything with them unless an implementation is provided. Depends on `searchcursor.js`, and will make use of [`openDialog`](#util_dialog) when available to make prompting for search queries less ugly.

[`foldcode.js`](../lib/util/foldcode.js)  
Helps with code folding. See [the demo](../demo/folding.html) for an example. Call `CodeMirror.newFoldFunction` with a range-finder helper function to create a function that will, when applied to a CodeMirror instance and a line number, attempt to fold or unfold the block starting at the given line. A range-finder is a language-specific function that also takes an instance and a line number, and returns an end line for the block, or null if no block is started on that line. This file provides `CodeMirror.braceRangeFinder`, which finds blocks in brace languages (JavaScript, C, Java, etc), `CodeMirror.indentRangeFinder`, for languages where indentation determines block structure (Python, Haskell), and `CodeMirror.tagRangeFinder`, for XML-style languages.

[`runmode.js`](../lib/util/runmode.js)  
Can be used to run a CodeMirror mode over text without actually opening an editor instance. See [the demo](../demo/runmode.html) for an example.

[`overlay.js`](../lib/util/overlay.js)  
Mode combinator that can be used to extend a mode with an 'overlay' — a secondary mode is run over the stream, along with the base mode, and can color specific pieces of text without interfering with the base mode. Defines `CodeMirror.overlayMode`, which is used to create such a mode. See [this demo](../demo/mustache.html) for a detailed example.

[`multiplex.js`](../lib/util/multiplex.js)  
Mode combinator that can be used to easily 'multiplex' between several modes. Defines `CodeMirror.multiplexingMode` which, when given as first argument a mode object, and as other arguments any number of `{open, close, mode [, delimStyle]}` objects, will return a mode object that starts parsing using the mode passed as first argument, but will switch to another mode as soon as it encounters a string that occurs in one of the `open` fields of the passed objects. When in a sub-mode, it will go back to the top mode again when the `close` string is encountered. When `delimStyle` is specified, it will be the token style returned for the delimiter tokens. The outer mode will not see the content between the delimiters. See [this demo](../demo/multiplex.html) for an example.

[`simple-hint.js`](../lib/util/simple-hint.js)  
Provides a framework for showing autocompletion hints. Defines `CodeMirror.simpleHint`, which takes a CodeMirror instance and a hinting function, and pops up a widget that allows the user to select a completion. Hinting functions are function that take an editor instance, and return a `{list, from, to}` object, where `list` is an array of strings (the completions), and `from` and `to` give the start and end of the token that is being completed. Depends on `lib/util/simple-hint.css`.

[`javascript-hint.js`](../lib/util/javascript-hint.js)  
Defines `CodeMirror.javascriptHint` and `CodeMirror.coffeescriptHint`, which are simple hinting functions for the JavaScript and CoffeeScript modes.

[`match-highlighter.js`](../lib/util/match-highlighter.js)  
Adds a `matchHighlight` method to CodeMirror instances that can be called (typically from a [`onCursorActivity`](#option_onCursorActivity) handler) to highlight all instances of a currently selected word with the a classname given as a first argument to the method. Depends on the [`searchcursor`](#util_searchcursor) add-on. Demo [here](../demo/matchhighlighter.html).

[`closetag.js`](../lib/util/closetag.js)  
Provides utility functions for adding automatic tag closing to XML modes. See the [demo](../demo/closetag.html).

[`loadmode.js`](../lib/util/loadmode.js)  
Defines a `CodeMirror.requireMode(modename,       callback)` function that will try to load a given mode and call the callback when it succeeded. You'll have to set `CodeMirror.modeURL` to a string that mode paths can be constructed from, for example `"mode/%N/%N.js"`—the `%N`'s will be replaced with the mode name. Also defines `CodeMirror.autoLoadMode(instance, mode)`, which will ensure the given mode is loaded and cause the given editor instance to refresh its mode when the loading succeeded. See the [demo](../demo/loadmode.html).

Writing CodeMirror Modes
------------------------

Modes typically consist of a single JavaScript file. This file defines, in the simplest case, a lexer (tokenizer) for your language—a function that takes a character stream as input, advances it past a token, and returns a style for that token. More advanced modes can also handle indentation for the language.

The mode script should call `CodeMirror.defineMode` to register itself with CodeMirror. This function takes two arguments. The first should be the name of the mode, for which you should use a lowercase string, preferably one that is also the name of the files that define the mode (i.e. `"xml"` is defined `xml.js`). The second argument should be a function that, given a CodeMirror configuration object (the thing passed to the `CodeMirror` function) and an optional mode configuration object (as in the [`mode`](#option_mode) option), returns a mode object.

Typically, you should use this second argument to `defineMode` as your module scope function (modes should not leak anything into the global scope!), i.e. write your whole mode inside this function.

The main responsibility of a mode script is *parsing* the content of the editor. Depending on the language and the amount of functionality desired, this can be done in really easy or extremely complicated ways. Some parsers can be stateless, meaning that they look at one element (*token*) of the code at a time, with no memory of what came before. Most, however, will need to remember something. This is done by using a *state object*, which is an object that is always passed when reading a token, and which can be mutated by the tokenizer.

Modes that use a state must define a `startState` method on their mode object. This is a function of no arguments that produces a state object to be used at the start of a document.

The most important part of a mode object is its `token(stream, state)` method. All modes must define this method. It should read one token from the stream it is given as an argument, optionally update its state, and return a style string, or `null` for tokens that do not have to be styled. For your styles, you can either use the 'standard' ones defined in the themes (without the `cm-` prefix), or define your own and have people include a custom CSS file for your mode.

The stream object encapsulates a line of code (tokens may never span lines) and our current position in that line. It has the following API:

`eol() → boolean`  
Returns true only if the stream is at the end of the line.

`sol() → boolean`  
Returns true only if the stream is at the start of the line.

`peek() → character`  
Returns the next character in the stream without advancing it. Will return `undefined` at the end of the line.

`next() → character`  
Returns the next character in the stream and advances it. Also returns `undefined` when no more characters are available.

`eat(match) → character`  
`match` can be a character, a regular expression, or a function that takes a character and returns a boolean. If the next character in the stream 'matches' the given argument, it is consumed and returned. Otherwise, `undefined` is returned.

`eatWhile(match) → boolean`  
Repeatedly calls `eat` with the given argument, until it fails. Returns true if any characters were eaten.

`eatSpace() → boolean`  
Shortcut for `eatWhile` when matching white-space.

`skipToEnd()`  
Moves the position to the end of the line.

`skipTo(ch) → boolean`  
Skips to the next occurrence of the given character, if found on the current line (doesn't advance the stream if the character does not occur on the line). Returns true if the character was found.

`match(pattern, consume, caseFold) → boolean`  
Act like a multi-character `eat`—if `consume` is true or not given—or a look-ahead that doesn't update the stream position—if it is false. `pattern` can be either a string or a regular expression starting with `^`. When it is a string, `caseFold` can be set to true to make the match case-insensitive. When successfully matching a regular expression, the returned value will be the array returned by `match`, in case you need to extract matched groups.

`backUp(n)`  
Backs up the stream `n` characters. Backing it up further than the start of the current token will cause things to break, so be careful.

`column() → integer`  
Returns the column (taking into account tabs) at which the current token starts. Can be used to find out whether a token starts a new line.

`indentation() → integer`  
Tells you how far the current line has been indented, in spaces. Corrects for tab characters.

`current() → string`  
Get the string between the start of the current token and the current stream position.

By default, blank lines are simply skipped when tokenizing a document. For languages that have significant blank lines, you can define a `blankLine(state)` method on your mode that will get called whenever a blank line is passed over, so that it can update the parser state.

Because state object are mutated, and CodeMirror needs to keep valid versions of a state around so that it can restart a parse at any line, copies must be made of state objects. The default algorithm used is that a new state object is created, which gets all the properties of the old object. Any properties which hold arrays get a copy of these arrays (since arrays tend to be used as mutable stacks). When this is not correct, for example because a mode mutates non-array properties of its state object, a mode object should define a `copyState` method, which is given a state and should return a safe copy of that state.

By default, CodeMirror will stop re-parsing a document as soon as it encounters a few lines that were highlighted the same in the old parse as in the new one. It is possible to provide an explicit way to test whether a state is equivalent to another one, which CodeMirror will use (instead of the unchanged-lines heuristic) to decide when to stop highlighting. You do this by providing a `compareStates` method on your mode object, which takes two state arguments and returns a boolean indicating whether they are equivalent. See the XML mode, which uses this to provide reliable highlighting of bad closing tags, as an example.

If you want your mode to provide smart indentation (though the [`indentLine`](#indentLine) method and the `indentAuto` and `newlineAndIndent` commands, which keys can be [bound](#option_extraKeys) to), you must define an `indent(state, textAfter)` method on your mode object.

The indentation method should inspect the given state object, and optionally the `textAfter` string, which contains the text on the line that is being indented, and return an integer, the amount of spaces to indent. It should usually take the [`indentUnit`](#option_indentUnit) option into account.

Finally, a mode may define an `electricChars` property, which should hold a string containing all the characters that should trigger the behaviour described for the [`electricChars`](#option_electricChars) option.

So, to summarize, a mode *must* provide a `token` method, and it *may* provide `startState`, `copyState`, `compareStates`, and `indent` methods. For an example of a trivial mode, see the [diff mode](../mode/diff/diff.js), for a more involved example, see the [C-like mode](../mode/clike/clike.js).

Sometimes, it is useful for modes to *nest*—to have one mode delegate work to another mode. An example of this kind of mode is the [mixed-mode HTML mode](../mode/htmlmixed/htmlmixed.js). To implement such nesting, it is usually necessary to create mode objects and copy states yourself. To create a mode object, there are `CodeMirror.getMode(options,     parserConfig)`, where the first argument is a configuration object as passed to the mode constructor function, and the second argument is a mode specification as in the [`mode`](#option_mode) option. To copy a state object, call `CodeMirror.copyState(mode, state)`, where `mode` is the mode that created the given state.

To make indentation work properly in a nested parser, it is advisable to give the `startState` method of modes that are intended to be nested an optional argument that provides the base indentation for the block of code. The JavaScript and CSS parser do this, for example, to allow JavaScript and CSS code inside the mixed-mode HTML mode to be properly indented.

Finally, it is possible to associate your mode, or a certain configuration of your mode, with a [MIME](http://en.wikipedia.org/wiki/MIME) type. For example, the JavaScript mode associates itself with `text/javascript`, and its JSON variant with `application/json`. To do this, call `CodeMirror.defineMIME(mime, modeSpec)`, where `modeSpec` can be a string or object specifying a mode, as in the [`mode`](#option_mode) option.

Contents
--------

-   [Overview](#overview)
-   [Basic Usage](#usage)
-   [Configuration](#config)
-   [Keymaps](#keymaps)
-   [Customized Styling](#styling)
-   [Programming API](#api)
-   [Add-ons](#addons)
-   [Writing CodeMirror Modes](#modeapi)

 
