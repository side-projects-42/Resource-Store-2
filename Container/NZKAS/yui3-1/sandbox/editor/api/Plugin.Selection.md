[Yahoo! UI Library](http://developer.yahoo.com/yui/ "Yahoo! UI Library")
========================================================================

### editor  <span class="subtitle">3.2.0</span>

[Yahoo! UI Library](./index.html "Yahoo! UI Library") &gt; [editor](./module_editor.html "editor") &gt; Plugin.Selection

Search:

 

Filters <span class="classopts"> Show Private</span> <span class="classopts"> Show Protected</span> <span class="classopts"> Show Deprecated</span>

Class **Plugin.Selection** <span class="extends"> </span>
---------------------------------------------------------

Wraps some common Selection/Range functionality into a simple object

### Constructor

**Plugin.Selection** `                                     (                                     )                                 `

### Properties

#### <span id="property__selection">\_selection</span> - `private object`

The actual Selection/Range object

------------------------------------------------------------------------

#### <span id="property_ALL">ALL</span> - `static object`

The selector to use when looking for Nodes to cache the value of: \[style\],font\[face\]

------------------------------------------------------------------------

#### <span id="property_anchorNode">anchorNode</span> - `Node`

A Node instance of the parentNode of the anchorNode of the range

------------------------------------------------------------------------

#### <span id="property_anchorOffset">anchorOffset</span> - `Number`

The offset from the range object

------------------------------------------------------------------------

#### <span id="property_anchorTextNode">anchorTextNode</span> - `Node`

A Node instance of the actual textNode of the range.

------------------------------------------------------------------------

#### <span id="property_DEFAULT_TAG">DEFAULT\_TAG</span> - `static object`

The default tag to use when creating elements: span

------------------------------------------------------------------------

#### <span id="property_focusNode">focusNode</span> - `Node`

A Node instance of the parentNode of the focusNode of the range

------------------------------------------------------------------------

#### <span id="property_focusOffset">focusOffset</span> - `Number`

The offset from the range object

------------------------------------------------------------------------

#### <span id="property_focusTextNode">focusTextNode</span> - `Node`

A Node instance of the actual textNode of the range.

------------------------------------------------------------------------

#### <span id="property_isCollapsed">isCollapsed</span> - `Boolean`

Flag to show if the range is collapsed or not

------------------------------------------------------------------------

#### <span id="property_text">text</span> - `String`

Range text value

------------------------------------------------------------------------

#### <span id="property_TMP">TMP</span> - `static object`

The temporary fontname applied to a selection to retrieve their values: yui-tmp

------------------------------------------------------------------------

### Methods

#### <span id="method__swap">\_swap</span>

`                                          private                                                                                                                            HTMLElement                                             _swap                                            (                                                                                                                                                                    n                                                                                                                                                               ,                                                           tag                                                                                                                                                   )                                         `

Swap an element, with another element

Parameters:  
`n                                                         <HTMLElement>                                                         ` <span property="yui:description"> The node to swap</span>

`tag                                                         <String>                                                         ` <span property="yui:description"> The tag to use when creating the new element.</span>

<!-- -->

Returns: `                                                             HTMLElement                                                     `  
The new node

------------------------------------------------------------------------

#### <span id="method__wrap">\_wrap</span>

`                                          private                                                                                                                            HTMLElement                                             _wrap                                            (                                                                                                                                                                    n                                                                                                                                                               ,                                                           tag                                                                                                                                                   )                                         `

Wrap an element, with another element

Parameters:  
`n                                                         <HTMLElement>                                                         ` <span property="yui:description"> The node to wrap</span>

`tag                                                         <String>                                                         ` <span property="yui:description"> The tag to use when creating the new element.</span>

<!-- -->

Returns: `                                                             HTMLElement                                                     `  
The wrapped node

------------------------------------------------------------------------

#### <span id="method_createRange">createRange</span>

`                                                                                                                                                                    RangeObject                                             createRange                                            (                                             )                                         `

Wrapper for the different range creation methods.

------------------------------------------------------------------------

#### <span id="method_filter">filter</span>

`                                                                                   static                                                                                   void                                             filter                                            (                                             )                                         `

Performs a prefilter on all nodes in the editor. Looks for nodes with a style: fontFamily or font face It then creates a dynamic class assigns it and removed the property. This is so that we don't lose the fontFamily when selecting nodes.

------------------------------------------------------------------------

#### <span id="method_getCursor">getCursor</span>

`                                                                                                                                                                    Node                                             getCursor                                            (                                             )                                         `

Get the placeholder in the DOM at the current cursor position: NOT FINISHED

------------------------------------------------------------------------

#### <span id="method_getSelected">getSelected</span>

`                                                                                                                                                                    NodeList                                             getSelected                                            (                                             )                                         `

Get all the nodes in the current selection. This method will actually perform a filter first. Then it calls doc.execCommand('fontname', null, 'yui-tmp') to touch all nodes in the selection. The it compiles a list of all nodes affected by the execCommand and builds a NodeList to return.

Returns: `                                                             NodeList                                                     `  
A NodeList of all items in the selection.

------------------------------------------------------------------------

#### <span id="method_insertAtCursor">insertAtCursor</span>

`                                                                                                                                                                    Node                                             insertAtCursor                                            (                                                                                                                                                                    html                                                                                                                                                               ,                                                           node                                                                                                                                                               ,                                                           offset                                                                                                                                                               ,                                                           collapse                                                                                                                                                   )                                         `

Insert HTML at the current cursor position, this method gives you control over the text node to insert into and the offset where to put it.

Parameters:  
`html                                                         <String>                                                         ` <span property="yui:description"> The HTML to insert.</span>

`node                                                         <Node>                                                         ` <span property="yui:description"> The text node to break when inserting.</span>

`offset                                                         <Number>                                                         ` <span property="yui:description"> The left offset of the text node to break and insert the new content.</span>

`collapse                                                         <Boolean>                                                         ` <span property="yui:description"> Should the range be collapsed after insertion. default: false</span>

<!-- -->

Returns: `                                                             Node                                                     `  
The inserted Node.

------------------------------------------------------------------------

#### <span id="method_insertContent">insertContent</span>

`                                                                                                                                                                    Node                                             insertContent                                            (                                                                                                                                                                    html                                                                                                                                                   )                                         `

Insert HTML at the current cursor position and return a Node instance of the newly inserted element.

Parameters:  
`html                                                         <String>                                                         ` <span property="yui:description"> The HTML to insert.</span>

<!-- -->

Returns: `                                                             Node                                                     `  
The inserted Node.

------------------------------------------------------------------------

#### <span id="method_remove">remove</span>

`                                                                                                                                                                    Y.Selection                                             remove                                            (                                             )                                         `

Destroy the range.

**Chainable:** This method is chainable.

------------------------------------------------------------------------

#### <span id="method_replace">replace</span>

`                                                                                                                                                                    Node                                             replace                                            (                                                                                                                                                                    se                                                                                                                                                               ,                                                           re                                                                                                                                                               ,                                                           node                                                                                                                                                   )                                         `

Find and replace a string inside a text node and replace it with HTML focusing the node after to allow you to continue to type.

Parameters:  
`se                                                         <String>                                                         ` <span property="yui:description"> The string to search for.</span>

`re                                                         <String>                                                         ` <span property="yui:description"> The string of HTML to replace it with.</span>

`node                                                         <Node>                                                         ` <span property="yui:description"> A Node instance of the text node to interact with.</span>

<!-- -->

Returns: `                                                             Node                                                     `  
The node inserted.

------------------------------------------------------------------------

#### <span id="method_resolve">resolve</span>

`                                                                                   static                                                                                   Node                                             resolve                                            (                                                                                                                                                                    n                                                                                                                                                   )                                         `

Resolve a node from the selection object and return a Node instance

Parameters:  
`n                                                         <HTMLElement>                                                         ` <span property="yui:description"> The HTMLElement to resolve. Might be a TextNode, gives parentNode.</span>

<!-- -->

Returns: `                                                             Node                                                     `  
The Resolved node

------------------------------------------------------------------------

#### <span id="method_selectNode">selectNode</span>

`                                                                                                                                                                    Y.Selection                                             selectNode                                            (                                                                                                                                                                    node                                                                                                                                                               ,                                                           collapse                                                                                                                                                   )                                         `

Select a Node (hilighting it).

Parameters:  
`node                                                         <Node>                                                         ` <span property="yui:description"> The node to select</span>

`collapse                                                         <Boolean>                                                         ` <span property="yui:description"> Should the range be collapsed after insertion. default: false</span>

**Chainable:** This method is chainable.

------------------------------------------------------------------------

#### <span id="method_setCursor">setCursor</span>

`                                                                                                                                                                    Node                                             setCursor                                            (                                             )                                         `

Put a placeholder in the DOM at the current cursor position: NOT FINISHED

------------------------------------------------------------------------

#### <span id="method_toString">toString</span>

`                                                                                                                                                                    String                                             toString                                            (                                             )                                         `

Generic toString for logging.

------------------------------------------------------------------------

#### <span id="method_unfilter">unfilter</span>

`                                                                                   static                                                                                   String                                             unfilter                                            (                                             )                                         `

Undoes what filter does enough to return the HTML from the Editor, then re-applies the filter.

Returns: `                                                             String                                                     `  
The filtered HTML

------------------------------------------------------------------------

#### <span id="method_wrapContent">wrapContent</span>

`                                                                                                                                                                    NodeList                                             wrapContent                                            (                                                                                                                                                                    tag                                                                                                                                                   )                                         `

Get all elements inside a selection and wrap them with a new element and return a NodeList of all elements touched.

Parameters:  
`tag                                                         <String>                                                         ` <span property="yui:description"> The tag to wrap all selected items with.</span>

<!-- -->

Returns: `                                                             NodeList                                                     `  
A NodeList of all items in the selection.

------------------------------------------------------------------------

#### Modules

-   [editor](module_editor.html "editor")

#### Classes

-   [Plugin.CreateLinkBase](Plugin.CreateLinkBase.html "Plugin.CreateLinkBase")
-   [Plugin.EditorBase](Plugin.EditorBase.html "Plugin.EditorBase")
-   [Plugin.EditorLists](Plugin.EditorLists.html "Plugin.EditorLists")
-   [Plugin.EditorTab](Plugin.EditorTab.html "Plugin.EditorTab")
-   [Plugin.ExecCommand](Plugin.ExecCommand.html "Plugin.ExecCommand")
-   [Plugin.Frame](Plugin.Frame.html "Plugin.Frame")
-   [Plugin.Selection](Plugin.Selection.html "Plugin.Selection")

#### Files

-   [createlink-base.js](createlink-base.js.html "createlink-base.js")
-   [editor-base.js](editor-base.js.html "editor-base.js")
-   [editor-tab.js](editor-tab.js.html "editor-tab.js")
-   [exec-command.js](exec-command.js.html "exec-command.js")
-   [frame.js](frame.js.html "frame.js")
-   [lists.js](lists.js.html "lists.js")
-   [selection.js](selection.js.html "selection.js")

#### Properties

-   [\_selection](#property__selection "_selection")
-   [ALL](#property_ALL "ALL")
-   [anchorNode](#property_anchorNode "anchorNode")
-   [anchorOffset](#property_anchorOffset "anchorOffset")
-   [anchorTextNode](#property_anchorTextNode "anchorTextNode")
-   [DEFAULT\_TAG](#property_DEFAULT_TAG "DEFAULT_TAG")
-   [focusNode](#property_focusNode "focusNode")
-   [focusOffset](#property_focusOffset "focusOffset")
-   [focusTextNode](#property_focusTextNode "focusTextNode")
-   [isCollapsed](#property_isCollapsed "isCollapsed")
-   [text](#property_text "text")
-   [TMP](#property_TMP "TMP")

#### Methods

-   [\_swap](#method__swap "_swap")
-   [\_wrap](#method__wrap "_wrap")
-   [createRange](#method_createRange "createRange")
-   [filter](#method_filter "filter")
-   [getCursor](#method_getCursor "getCursor")
-   [getSelected](#method_getSelected "getSelected")
-   [insertAtCursor](#method_insertAtCursor "insertAtCursor")
-   [insertContent](#method_insertContent "insertContent")
-   [remove](#method_remove "remove")
-   [replace](#method_replace "replace")
-   [resolve](#method_resolve "resolve")
-   [selectNode](#method_selectNode "selectNode")
-   [setCursor](#method_setCursor "setCursor")
-   [toString](#method_toString "toString")
-   [unfilter](#method_unfilter "unfilter")
-   [wrapContent](#method_wrapContent "wrapContent")

------------------------------------------------------------------------

Copyright © 2010 Yahoo! Inc. All rights reserved.
