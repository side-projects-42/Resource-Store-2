[Yahoo! UI Library](http://developer.yahoo.com/yui/ "Yahoo! UI Library")
========================================================================

### editor  <span class="subtitle">3.2.0</span>

[Yahoo! UI Library](./index.html "Yahoo! UI Library") &gt; [editor](./module_editor.html "editor") &gt; Plugin.EditorBase

Search:

 

Filters <span class="classopts"> Show Private</span> <span class="classopts"> Show Protected</span> <span class="classopts"> Show Deprecated</span>

Class **Plugin.EditorBase** <span class="extends"> - extends [Base](Base.html "Base") </span>
---------------------------------------------------------------------------------------------

Base class for Editor. Handles the business logic of Editor, no GUI involved only utility methods and events.

### Constructor

**Plugin.EditorBase** `                                     (                                     )                                 `

### Properties

#### <span id="property__keyUpTimer">\_keyUpTimer</span> - `private object`

The Y.later handle to determine if there is an active timer running.

------------------------------------------------------------------------

#### <span id="property_frame">frame</span> - `object`

Internal reference to the Y.Frame instance

------------------------------------------------------------------------

#### <span id="property_NAME">NAME</span> - `static object`

The Class Name: editorBase

------------------------------------------------------------------------

#### <span id="property_NC_KEYS">NC\_KEYS</span> - `static Object`

Hash table of keys to fire a nodeChange event for.

------------------------------------------------------------------------

#### <span id="property_STRINGS">STRINGS</span> - `static object`

Editor Strings

------------------------------------------------------------------------

#### <span id="property_STRINGS.title">STRINGS.title</span> - `static object`

Title of frame document: Rich Text Editor

------------------------------------------------------------------------

#### <span id="property_USE">USE</span> - `static Array`

The default modules to use inside the Frame

------------------------------------------------------------------------

### Methods

#### <span id="method__afterFrameReady">\_afterFrameReady</span>

`                                          private                                                                                                                            void                                             _afterFrameReady                                            (                                             )                                         `

After frame ready, bind mousedown & keyup listeners

------------------------------------------------------------------------

#### <span id="method__defNodeChangeFn">\_defNodeChangeFn</span>

`                                          private                                                                                                                            void                                             _defNodeChangeFn                                            (                                                                                                                                                                    e                                                                                                                                                   )                                         `

The default handler for the nodeChange event.

Parameters:  
`e                                                         <Event>                                                         ` <span property="yui:description"> The event</span>

------------------------------------------------------------------------

#### <span id="method__onFrameKeyDown">\_onFrameKeyDown</span>

`                                          private                                                                                                                            void                                             _onFrameKeyDown                                            (                                             )                                         `

Fires nodeChange event

------------------------------------------------------------------------

#### <span id="method__onFrameKeyUp">\_onFrameKeyUp</span>

`                                          private                                                                                                                            void                                             _onFrameKeyUp                                            (                                             )                                         `

Fires nodeChange event via \_onKeyUpTimer on a timer for performance

------------------------------------------------------------------------

#### <span id="method__onFrameMouseDown">\_onFrameMouseDown</span>

`                                          private                                                                                                                            void                                             _onFrameMouseDown                                            (                                             )                                         `

Fires nodeChange event

------------------------------------------------------------------------

#### <span id="method__onKeyUpTimer">\_onKeyUpTimer</span>

`                                          private                                                                                                                            void                                             _onKeyUpTimer                                            (                                                                                                                                                                    fromTimer                                                                                                                                                   )                                         `

Fires nodeChange event from \_onKeyUpTimer on a timer for performance

Parameters:  
`fromTimer                                                         <Boolean>                                                         ` <span property="yui:description"> If it's from the timer, kill the \_keyUpTimer property</span>

------------------------------------------------------------------------

#### <span id="method_execCommand">execCommand</span>

`                                                                                                                                                                    Node/NodeList                                             execCommand                                            (                                                                                                                                                                    cmd                                                                                                                                                               ,                                                           val                                                                                                                                                   )                                         `

Pass through to the frame.execCommand method

Parameters:  
`cmd                                                         <String>                                                         ` <span property="yui:description"> The command to pass: inserthtml, insertimage, bold</span>

`val                                                         <String>                                                         ` <span property="yui:description"> The optional value of the command: Helvetica</span>

<!-- -->

Returns: `                                                             Node/NodeList                                                     `  
The Node or Nodelist affected by the command. Only returns on override commands, not browser defined commands.

------------------------------------------------------------------------

#### <span id="method_focus">focus</span>

`                                                                                                                                                                    EditorBase                                             focus                                            (                                             )                                         `

Focus the contentWindow of the iframe

**Chainable:** This method is chainable.

------------------------------------------------------------------------

#### <span id="method_getContent">getContent</span>

`                                                                                                                                                                    String                                             getContent                                            (                                             )                                         `

(Un)Filters the content of the Editor, cleaning YUI related code. //TODO better filtering

Returns: `                                                             String                                                     `  
The filtered content of the Editor

------------------------------------------------------------------------

#### <span id="method_getInstance">getInstance</span>

`                                                                                                                                                                    YUI                                             getInstance                                            (                                             )                                         `

Get the YUI instance of the frame

Returns: `                                                             YUI                                                     `  
The YUI instance bound to the frame.

------------------------------------------------------------------------

#### <span id="method_render">render</span>

`                                                                                                                                                                    EditorBase                                             render                                            (                                                                                                                                                                    node                                                                                                                                                   )                                         `

Renders the Y.Frame to the passed node.

Parameters:  
`node                                                         <Selector/HTMLElement/Node>                                                         ` <span property="yui:description"> The node to append the Editor to</span>

**Chainable:** This method is chainable.

------------------------------------------------------------------------

### Events

#### <span id="event_contentChange">contentChange</span>

`                                                                                                                                                                        contentChange                                              (                                                                                                                                                                    event                                                                                                                                                   )                                          `

Fires when the value for the configuration attribute 'content' is changed. You can listen for the event using the [on](Attribute.html#method_on) method if you wish to be notified before the attribute's value has changed, or using the [after](Event.Target.html#method_after) method if you wish to be notified after the attribute's value has changed.

Parameters:  
`event                                                                 <Event.Facade>                                                             ` <span property="yui:description">An Event Facade object with the following attribute specific properties added: </span>

prevVal  
The value of the attribute, prior to it being set

newVal  
The value the attribute is to be set to

attrName  
The name of the attribute being set

subAttrName  
If setting a property within the attribute's value, the name of the sub-attribute property being set

------------------------------------------------------------------------

#### <span id="event_dirChange">dirChange</span>

`                                                                                                                                                                        dirChange                                              (                                                                                                                                                                    event                                                                                                                                                   )                                          `

Fires when the value for the configuration attribute 'dir' is changed. You can listen for the event using the [on](Attribute.html#method_on) method if you wish to be notified before the attribute's value has changed, or using the [after](Event.Target.html#method_after) method if you wish to be notified after the attribute's value has changed.

Parameters:  
`event                                                                 <Event.Facade>                                                             ` <span property="yui:description">An Event Facade object with the following attribute specific properties added: </span>

prevVal  
The value of the attribute, prior to it being set

newVal  
The value the attribute is to be set to

attrName  
The name of the attribute being set

subAttrName  
If setting a property within the attribute's value, the name of the sub-attribute property being set

------------------------------------------------------------------------

#### <span id="event_nodeChange">nodeChange</span>

`                                                                                                                                                                        nodeChange                                              (                                                                                                                                                                    event                                                                                                                                                   )                                          `

Fired from mouseup & keyup.

Parameters:  
`event                                                                 <Event.Facade>                                                             ` <span property="yui:description"> An Event Facade object with the following specific property added: </span>

node  
The node currently being interacted with

------------------------------------------------------------------------

### Configuration Attributes

#### <span id="config_content">content</span> `- object`

The content to load into the Editor Frame

------------------------------------------------------------------------

#### <span id="config_dir">dir</span> `- object`

The value of the dir attribute on the HTML element of the frame. Default: ltr

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

-   [\_keyUpTimer](#property__keyUpTimer "_keyUpTimer")
-   [frame](#property_frame "frame")
-   [NAME](#property_NAME "NAME")
-   [NC\_KEYS](#property_NC_KEYS "NC_KEYS")
-   [STRINGS](#property_STRINGS "STRINGS")
-   [STRINGS.title](#property_STRINGS.title "STRINGS.title")
-   [USE](#property_USE "USE")

#### Methods

-   [\_afterFrameReady](#method__afterFrameReady "_afterFrameReady")
-   [\_defNodeChangeFn](#method__defNodeChangeFn "_defNodeChangeFn")
-   [\_onFrameKeyDown](#method__onFrameKeyDown "_onFrameKeyDown")
-   [\_onFrameKeyUp](#method__onFrameKeyUp "_onFrameKeyUp")
-   [\_onFrameMouseDown](#method__onFrameMouseDown "_onFrameMouseDown")
-   [\_onKeyUpTimer](#method__onKeyUpTimer "_onKeyUpTimer")
-   [execCommand](#method_execCommand "execCommand")
-   [focus](#method_focus "focus")
-   [getContent](#method_getContent "getContent")
-   [getInstance](#method_getInstance "getInstance")
-   [render](#method_render "render")

#### Events

-   [contentChange](#event_contentChange "contentChange")
-   [dirChange](#event_dirChange "dirChange")
-   [nodeChange](#event_nodeChange "nodeChange")

#### Configuration Attributes

-   [content](#config_content "content")
-   [dir](#config_dir "dir")

------------------------------------------------------------------------

Copyright © 2010 Yahoo! Inc. All rights reserved.
