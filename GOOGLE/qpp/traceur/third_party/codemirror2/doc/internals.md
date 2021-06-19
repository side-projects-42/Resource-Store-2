<span class="logo-braces">{ }</span> [CodeMirror](http://codemirror.net/)
=========================================================================

    /* (Re-) Implementing A Syntax-
       Highlighting Editor in JavaScript */

**Topic:** JavaScript, code editor implementation  
**Author:** Marijn Haverbeke  
**Date:** March 2nd 2011 (updated November 13th 2011)

This is a followup to my [Brutal Odyssey to the Dark Side of the DOM Tree](http://codemirror.net/story.html) story. That one describes the mind-bending process of implementing (what would become) CodeMirror 1. This one describes the internals of CodeMirror 2, a complete rewrite and rethink of the old code base. I wanted to give this piece another Hunter Thompson copycat subtitle, but somehow that would be out of place—the process this time around was one of straightforward engineering, requiring no serious mind-bending whatsoever.

So, what is wrong with CodeMirror 1? I'd estimate, by mailing list activity and general search-engine presence, that it has been integrated into about a thousand systems by now. The most prominent one, since a few weeks, being [Google code's project hosting](http://googlecode.blogspot.com/2011/01/make-quick-fixes-quicker-on-google.html). It works, and it's being used widely.

Still, I did not start replacing it because I was bored. CodeMirror 1 was heavily reliant on `designMode` or `contentEditable` (depending on the browser). Neither of these are well specified (HTML5 tries to [specify](http://www.w3.org/TR/html5/editing.html#contenteditable) their basics), and, more importantly, they tend to be one of the more obscure and buggy areas of browser functionality—CodeMirror, by using this functionality in a non-typical way, was constantly running up against browser bugs. WebKit wouldn't show an empty line at the end of the document, and in some releases would suddenly get unbearably slow. Firefox would show the cursor in the wrong place. Internet Explorer would insist on linkifying everything that looked like a URL or email address, a behaviour that can't be turned off. Some bugs I managed to work around (which was often a frustrating, painful process), others, such as the Firefox cursor placement, I gave up on, and had to tell user after user that they were known problems, but not something I could help.

Also, there is the fact that `designMode` (which seemed to be less buggy than `contentEditable` in Webkit and Firefox, and was thus used by CodeMirror 1 in those browsers) requires a frame. Frames are another tricky area. It takes some effort to prevent getting tripped up by domain restrictions, they don't initialize synchronously, behave strangely in response to the back button, and, on several browsers, can't be moved around the DOM without having them re-initialize. They did provide a very nice way to namespace the library, though—CodeMirror 1 could freely pollute the namespace inside the frame.

Finally, working with an editable document means working with selection in arbitrary DOM structures. Internet Explorer (8 and before) has an utterly different (and awkward) selection API than all of the other browsers, and even among the different implementations of `document.selection`, details about how exactly a selection is represented vary quite a bit. Add to that the fact that Opera's selection support tended to be very buggy until recently, and you can imagine why CodeMirror 1 contains 700 lines of selection-handling code.

And that brings us to the main issue with the CodeMirror 1 code base: The proportion of browser-bug-workarounds to real application code was getting dangerously high. By building on top of a few dodgy features, I put the system in a vulnerable position—any incompatibility and bugginess in these features, I had to paper over with my own code. Not only did I have to do some serious stunt-work to get it to work on older browsers (as detailed in the previous [story](http://codemirror.net/story.html)), things also kept breaking in newly released versions, requiring me to come up with *new* scary hacks in order to keep up. This was starting to lose its appeal.

General Approach
----------------

What CodeMirror 2 does is try to sidestep most of the hairy hacks that came up in version 1. I owe a lot to the [ACE](http://ace.ajax.org) editor for inspiration on how to approach this.

I absolutely did not want to be completely reliant on key events to generate my input. Every JavaScript programmer knows that key event information is horrible and incomplete. Some people (most awesomely Mihai Bazon with [Ymacs](http://ymacs.org)) have been able to build more or less functioning editors by directly reading key events, but it takes a lot of work (the kind of never-ending, fragile work I described earlier), and will never be able to properly support things like multi-keystoke international character input. <a href="#keymap" class="update">[see below for caveat]</a>

So what I do is focus a hidden textarea, and let the browser believe that the user is typing into that. What we show to the user is a DOM structure we built to represent his document. If this is updated quickly enough, and shows some kind of believable cursor, it feels like a real text-input control.

Another big win is that this DOM representation does not have to span the whole document. Some CodeMirror 1 users insisted that they needed to put a 30 thousand line XML document into CodeMirror. Putting all that into the DOM takes a while, especially since, for some reason, an editable DOM tree is slower than a normal one on most browsers. If we have full control over what we show, we must only ensure that the visible part of the document has been added, and can do the rest only when needed. (Fortunately, the `onscroll` event works almost the same on all browsers, and lends itself well to displaying things only as they are scrolled into view.)

Input
-----

ACE uses its hidden textarea only as a text input shim, and does all cursor movement and things like text deletion itself by directly handling key events. CodeMirror's way is to let the browser do its thing as much as possible, and not, for example, define its own set of key bindings. One way to do this would have been to have the whole document inside the hidden textarea, and after each key event update the display DOM to reflect what's in that textarea.

That'd be simple, but it is not realistic. For even medium-sized document the editor would be constantly munging huge strings, and get terribly slow. What CodeMirror 2 does is put the current selection, along with an extra line on the top and on the bottom, into the textarea.

This means that the arrow keys (and their ctrl-variations), home, end, etcetera, do not have to be handled specially. We just read the cursor position in the textarea, and update our cursor to match it. Also, copy and paste work pretty much for free, and people get their native key bindings, without any special work on my part. For example, I have emacs key bindings configured for Chrome and Firefox. There is no way for a script to detect this. <a href="#keymap" class="update">[no longer the case]</a>

Of course, since only a small part of the document sits in the textarea, keys like page up and ctrl-end won't do the right thing. CodeMirror is catching those events and handling them itself.

Selection
---------

Getting and setting the selection range of a textarea in modern browsers is trivial—you just use the `selectionStart` and `selectionEnd` properties. On IE you have to do some insane stuff with temporary ranges and compensating for the fact that moving the selection by a 'character' will treat \\r\\n as a single character, but even there it is possible to build functions that reliably set and get the selection range.

But consider this typical case: When I'm somewhere in my document, press shift, and press the up arrow, something gets selected. Then, if I, still holding shift, press the up arrow again, the top of my selection is adjusted. The selection remembers where its *head* and its *anchor* are, and moves the head when we shift-move. This is a generally accepted property of selections, and done right by every editing component built in the past twenty years.

But not something that the browser selection APIs expose.

Great. So when someone creates an 'upside-down' selection, the next time CodeMirror has to update the textarea, it'll re-create the selection as an 'upside-up' selection, with the anchor at the top, and the next cursor motion will behave in an unexpected way—our second up-arrow press in the example above will not do anything, since it is interpreted in exactly the same way as the first.

No problem. We'll just, ehm, detect that the selection is upside-down (you can tell by the way it was created), and then, when an upside-down selection is present, and a cursor-moving key is pressed in combination with shift, we quickly collapse the selection in the textarea to its start, allow the key to take effect, and then combine its new head with its old anchor to get the *real* selection.

In short, scary hacks could not be avoided entirely in CodeMirror 2.

And, the observant reader might ask, how do you even know that a key combo is a cursor-moving combo, if you claim you support any native key bindings? Well, we don't, but we can learn. The editor keeps a set known cursor-movement combos (initialized to the predictable defaults), and updates this set when it observes that pressing a certain key had (only) the effect of moving the cursor. This, of course, doesn't work if the first time the key is used was for extending an inverted selection, but it works most of the time.

Intelligent Updating
--------------------

One thing that always comes up when you have a complicated internal state that's reflected in some user-visible external representation (in this case, the displayed code and the textarea's content) is keeping the two in sync. The naive way is to just update the display every time you change your state, but this is not only error prone (you'll forget), it also easily leads to duplicate work on big, composite operations. Then you start passing around flags indicating whether the display should be updated in an attempt to be efficient again and, well, at that point you might as well give up completely.

I did go down that road, but then switched to a much simpler model: simply keep track of all the things that have been changed during an action, and then, only at the end, use this information to update the user-visible display.

CodeMirror uses a concept of *operations*, which start by calling a specific set-up function that clears the state and end by calling another function that reads this state and does the required updating. Most event handlers, and all the user-visible methods that change state are wrapped like this. There's a method called `operation` that accepts a function, and returns another function that wraps the given function as an operation.

It's trivial to extend this (as CodeMirror does) to detect nesting, and, when an operation is started inside an operation, simply increment the nesting count, and only do the updating when this count reaches zero again.

If we have a set of changed ranges and know the currently shown range, we can (with some awkward code to deal with the fact that changes can add and remove lines, so we're dealing with a changing coordinate system) construct a map of the ranges that were left intact. We can then compare this map with the part of the document that's currently visible (based on scroll offset and editor height) to determine whether something needs to be updated.

CodeMirror uses two update algorithms—a full refresh, where it just discards the whole part of the DOM that contains the edited text and rebuilds it, and a patch algorithm, where it uses the information about changed and intact ranges to update only the out-of-date parts of the DOM. When more than 30 percent (which is the current heuristic, might change) of the lines need to be updated, the full refresh is chosen (since it's faster to do than painstakingly finding and updating all the changed lines), in the other case it does the patching (so that, if you scroll a line or select another character, the whole screen doesn't have to be re-rendered). <span class="update">\[the full-refresh algorithm was dropped, it wasn't really faster than the patching one\]</span>

All updating uses `innerHTML` rather than direct DOM manipulation, since that still seems to be by far the fastest way to build documents. There's a per-line function that combines the highlighting, [marking](manual.html#markText), and selection info for that line into a snippet of HTML. The patch updater uses this to reset individual lines, the refresh updater builds an HTML chunk for the whole visible document at once, and then uses a single `innerHTML` update to do the refresh.

Parsers can be Simple
---------------------

When I wrote CodeMirror 1, I thought [interruptable parsers](http://codemirror.net/story.html#parser) were a hugely scary and complicated thing, and I used a bunch of heavyweight abstractions to keep this supposed complexity under control: parsers were [iterators](http://bob.pythonmac.org/archives/2005/07/06/iteration-in-javascript/) that consumed input from another iterator, and used funny closure-resetting tricks to copy and resume themselves.

This made for a rather nice system, in that parsers formed strictly separate modules, and could be composed in predictable ways. Unfortunately, it was quite slow (stacking three or four iterators on top of each other), and extremely intimidating to people not used to a functional programming style.

With a few small changes, however, we can keep all those advantages, but simplify the API and make the whole thing less indirect and inefficient. CodeMirror 2's [mode API](manual.html#modeapi) uses explicit state objects, and makes the parser/tokenizer a function that simply takes a state and a character stream abstraction, advances the stream one token, and returns the way the token should be styled. This state may be copied, optionally in a mode-defined way, in order to be able to continue a parse at a given point. Even someone who's never touched a lambda in his life can understand this approach. Additionally, far fewer objects are allocated in the course of parsing now.

The biggest speedup comes from the fact that the parsing no longer has to touch the DOM though. In CodeMirror 1, on an older browser, you could *see* the parser work its way through the document, managing some twenty lines in each 50-millisecond time slice it got. It was reading its input from the DOM, and updating the DOM as it went along, which any experienced JavaScript programmer will immediately spot as a recipe for slowness. In CodeMirror 2, the parser usually finishes the whole document in a single 100-millisecond time slice—it manages some 1500 lines during that time on Chrome. All it has to do is munge strings, so there is no real reason for it to be slow anymore.

What Gives?
-----------

Given all this, what can you expect from CodeMirror 2?

-   **Small.** the base library is some <span class="update">45k</span> when minified now, <span class="update">17k</span> when gzipped. It's smaller than its own logo.
-   **Lightweight.** CodeMirror 2 initializes very quickly, and does almost no work when it is not focused. This means you can treat it almost like a textarea, have multiple instances on a page without trouble.
-   **Huge document support.** Since highlighting is really fast, and no DOM structure is being built for non-visible content, you don't have to worry about locking up your browser when a user enters a megabyte-sized document.
-   **Extended API.** Some things kept coming up in the mailing list, such as marking pieces of text or lines, which were extremely hard to do with CodeMirror 1. The new version has proper support for these built in.
-   **Tab support.** Tabs inside editable documents were, for some reason, a no-go. At least six different people announced they were going to add tab support to CodeMirror 1, none survived (I mean, none delivered a working version). CodeMirror 2 no longer removes tabs from your document.
-   **Sane styling.** `iframe` nodes aren't really known for respecting document flow. Now that an editor instance is a plain `div` element, it is much easier to size it to fit the surrounding elements. You don't even have to make it scroll if you do not [want to](../demo/resize.html).

On the downside, a CodeMirror 2 instance is *not* a native editable component. Though it does its best to emulate such a component as much as possible, there is functionality that browsers just do not allow us to hook into. Doing select-all from the context menu, for example, is not currently detected by CodeMirror.

<span style="font-weight:
bold">\[Updates from November 13th 2011\]</span> Recently, I've made some changes to the codebase that cause some of the text above to no longer be current. I've left the text intact, but added markers at the passages that are now inaccurate. The new situation is described below.

Content Representation
----------------------

The original implementation of CodeMirror 2 represented the document as a flat array of line objects. This worked well—splicing arrays will require the part of the array after the splice to be moved, but this is basically just a simple `memmove` of a bunch of pointers, so it is cheap even for huge documents.

However, I recently added line wrapping and code folding (line collapsing, basically). Once lines start taking up a non-constant amount of vertical space, looking up a line by vertical position (which is needed when someone clicks the document, and to determine the visible part of the document during scrolling) can only be done with a linear scan through the whole array, summing up line heights as you go. Seeing how I've been going out of my way to make big documents fast, this is not acceptable.

The new representation is based on a B-tree. The leaves of the tree contain arrays of line objects, with a fixed minimum and maximum size, and the non-leaf nodes simply hold arrays of child nodes. Each node stores both the amount of lines that live below them and the vertical space taken up by these lines. This allows the tree to be indexed both by line number and by vertical position, and all access has logarithmic complexity in relation to the document size.

I gave line objects and tree nodes parent pointers, to the node above them. When a line has to update its height, it can simply walk these pointers to the top of the tree, adding or subtracting the difference in height from each node it encounters. The parent pointers also make it cheaper (in complexity terms, the difference is probably tiny in normal-sized documents) to find the current line number when given a line object. In the old approach, the whole document array had to be searched. Now, we can just walk up the tree and count the sizes of the nodes coming before us at each level.

I chose B-trees, not regular binary trees, mostly because they allow for very fast bulk insertions and deletions. When there is a big change to a document, it typically involves adding, deleting, or replacing a chunk of subsequent lines. In a regular balanced tree, all these inserts or deletes would have to be done separately, which could be really expensive. In a B-tree, to insert a chunk, you just walk down the tree once to find where it should go, insert them all in one shot, and then break up the node if needed. This breaking up might involve breaking up nodes further up, but only requires a single pass back up the tree. For deletion, I'm somewhat lax in keeping things balanced—I just collapse nodes into a leaf when their child count goes below a given number. This means that there are some weird editing patterns that may result in a seriously unbalanced tree, but even such an unbalanced tree will perform well, unless you spend a day making strangely repeating edits to a really big document.

Keymaps
-------

[Above](#approach), I claimed that directly catching key events for things like cursor movement is impractical because it requires some browser-specific kludges. I then proceeded to explain some awful [hacks](#selection) that were needed to make it possible for the selection changes to be detected through the textarea. In fact, the second hack is about as bad as the first.

On top of that, in the presence of user-configurable tab sizes and collapsed and wrapped lines, lining up cursor movement in the textarea with what's visible on the screen becomes a nightmare. Thus, I've decided to move to a model where the textarea's selection is no longer depended on.

So I moved to a model where all cursor movement is handled by my own code. This adds support for a goal column, proper interaction of cursor movement with collapsed lines, and makes it possible for vertical movement to move through wrapped lines properly, instead of just treating them like non-wrapped lines.

The key event handlers now translate the key event into a string, something like `Ctrl-Home` or `Shift-Cmd-R`, and use that string to look up an action to perform. To make keybinding customizable, this lookup goes through a [table](manual.html#option_keyMap), using a scheme that allows such tables to be chained together (for example, the default Mac bindings fall through to a table named 'emacsy', which defines basic Emacs-style bindings like `Ctrl-F`, and which is also used by the custom Emacs bindings).

A new option [`extraKeys`](manual.html#option_extraKeys) allows ad-hoc keybindings to be defined in a much nicer way than what was possible with the old [`onKeyEvent`](manual.html#option_onKeyEvent) callback. You simply provide an object mapping key identifiers to functions, instead of painstakingly looking at raw key events.

Built-in commands map to strings, rather than functions, for example `"goLineUp"` is the default action bound to the up arrow key. This allows new keymaps to refer to them without duplicating any code. New commands can be defined by assigning to the `CodeMirror.commands` object, which maps such commands to functions.

The hidden textarea now only holds the current selection, with no extra characters around it. This has a nice advantage: polling for input becomes much, much faster. If there's a big selection, this text does not have to be read from the textarea every time—when we poll, just noticing that something is still selected is enough to tell us that no new text was typed.

The reason that cheap polling is important is that many browsers do not fire useful events on IME (input method engine) input, which is the thing where people inputting a language like Japanese or Chinese use multiple keystrokes to create a character or sequence of characters. Most modern browsers fire `input` when the composing is finished, but many don't fire anything when the character is updated *during* composition. So we poll, whenever the editor is focused, to provide immediate updates of the display.

Contents
--------

-   [Introduction](#intro)
-   [General Approach](#approach)
-   [Input](#input)
-   [Selection](#selection)
-   [Intelligent Updating](#update)
-   [Parsing](#parse)
-   [What Gives?](#summary)
-   [Content Representation](#btree)
-   [Key Maps](#keymap)

 
