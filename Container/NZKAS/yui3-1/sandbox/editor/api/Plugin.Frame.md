[Yahoo! UI Library](http://developer.yahoo.com/yui/ "Yahoo! UI Library")
========================================================================

### editor  <span class="subtitle">3.2.0</span>

[Yahoo! UI Library](./index.html "Yahoo! UI Library") &gt; [editor](./module_editor.html "editor") &gt; Plugin.Frame

Search:

 

Filters <span class="classopts"> Show Private</span> <span class="classopts"> Show Protected</span> <span class="classopts"> Show Deprecated</span>

Class **Plugin.Frame** <span class="extends"> - extends [Base](Base.html "Base") </span>
----------------------------------------------------------------------------------------

Creates a wrapper around an iframe. It loads the content either from a local file or from script and creates a local YUI instance bound to that new window and document.

### Constructor

**Plugin.Frame** `                                     (                                     )                                 `

### Properties

#### <span id="property__iframe">\_iframe</span> - `private Node`

Internal Node reference to the iFrame or the window

------------------------------------------------------------------------

#### <span id="property__instance">\_instance</span> - `private YUI`

Internal reference to the YUI instance bound to the iFrame or window

------------------------------------------------------------------------

#### <span id="property__ready">\_ready</span> - `private Boolean`

Internal reference set when the content is ready.

------------------------------------------------------------------------

#### <span id="property__rendered">\_rendered</span> - `private Boolean`

Internal reference set when render is called.

------------------------------------------------------------------------

#### <span id="property_DOC_TYPE">DOC\_TYPE</span> - `static String`

The DOCTYPE to prepend to the new document when created. Should match the one on the page being served.

------------------------------------------------------------------------

#### <span id="property_HTML">HTML</span> - `static String`

The template string used to create the iframe

------------------------------------------------------------------------

#### <span id="property_META">META</span> - `static String`

The meta-tag for Content-Type to add to the dynamic document

------------------------------------------------------------------------

#### <span id="property_NAME">NAME</span> - `static String`

The name of the class (frame)

------------------------------------------------------------------------

#### <span id="property_PAGE_HTML">PAGE\_HTML</span> - `static String`

The template used to create the page when created dynamically.

------------------------------------------------------------------------

### Methods

#### <span id="method__create">\_create</span>

`                                          private                                                                                                                            Object                                             _create                                            (                                             )                                         `

Create the iframe or Window and get references to the Document & Window

Returns: `                                                             Object                                                     `  
Hash table containing references to the new Document & Window

------------------------------------------------------------------------

#### <span id="method__defReadyFn">\_defReadyFn</span>

`                                          private                                                                                                                            void                                             _defReadyFn                                            (                                             )                                         `

Binds DOM events, sets the iframe to visible and fires the ready event

------------------------------------------------------------------------

#### <span id="method__getHTML">\_getHTML</span>

`                                          private                                                                                                                            String                                             _getHTML                                            (                                                                                                                                                                    html                                                                                                                                                   )                                         `

Get the content from the iframe

Parameters:  
`html                                                         <String>                                                         ` <span property="yui:description"> The raw HTML from the body of the iframe.</span>

------------------------------------------------------------------------

#### <span id="method__instanceLoaded">\_instanceLoaded</span>

`                                          private                                                                                                                            void                                             _instanceLoaded                                            (                                                                                                                                                                    inst                                                                                                                                                   )                                         `

Called from the first YUI instance that sets up the internal instance. This loads the content into the window/frame and attaches the contentready event.

Parameters:  
`inst                                                         <YUI>                                                         ` <span property="yui:description"> The internal YUI instance bound to the frame/window</span>

------------------------------------------------------------------------

#### <span id="method__onContentReady">\_onContentReady</span>

`                                          private                                                                                                                            void                                             _onContentReady                                            (                                             )                                         `

Called once the content is available in the frame/window and calls the final use call on the internal instance so that the modules are loaded properly.

------------------------------------------------------------------------

#### <span id="method__onDomEvent">\_onDomEvent</span>

`                                          private                                                                                                                            void                                             _onDomEvent                                            (                                                                                                                                                                    e                                                                                                                                                   )                                         `

Generic handler for all DOM events fired by the iframe or window. This handler takes the current EventFacade and augments it to fire on the Frame host. It adds two new properties to the EventFacade called frameX and frameY which adds the scroll and xy position of the iframe to the original pageX and pageY of the event so external nodes can be positioned over the frame.

Parameters:  
`e                                                         <Event.Facade>                                                         ` <span property="yui:description"></span>

------------------------------------------------------------------------

#### <span id="method__resolveBaseHref">\_resolveBaseHref</span>

`                                          private                                                                                                                            String                                             _resolveBaseHref                                            (                                                                                                                                                                    href                                                                                                                                                   )                                         `

Resolves the basehref of the page the frame is created on. Only applies to dynamic content.

Parameters:  
`href                                                         <String>                                                         ` <span property="yui:description"> The new value to use, if empty it will be resolved from the current url.</span>

------------------------------------------------------------------------

#### <span id="method__resolveWinDoc">\_resolveWinDoc</span>

`                                          private                                                                                                                            Object                                             _resolveWinDoc                                            (                                                                                                                                                                    c                                                                                                                                                   )                                         `

Resolves the document and window from an iframe or window instance

Parameters:  
`c                                                         <Object>                                                         ` <span property="yui:description"> The YUI Config to add the window and document to</span>

<!-- -->

Returns: `                                                             Object                                                     `  
Object hash of window and document references, if a YUI config was passed, it is returned.

------------------------------------------------------------------------

#### <span id="method__setHTML">\_setHTML</span>

`                                          private                                                                                                                            String                                             _setHTML                                            (                                                                                                                                                                    html                                                                                                                                                   )                                         `

Set the content of the iframe

Parameters:  
`html                                                         <String>                                                         ` <span property="yui:description"> The raw HTML to set the body of the iframe to.</span>

------------------------------------------------------------------------

#### <span id="method_delegate">delegate</span>

`                                                                                                                                                                    EventHandle                                             delegate                                            (                                                                                                                                                                    type                                                                                                                                                               ,                                                           fn                                                                                                                                                               ,                                                           cont                                                                                                                                                               ,                                                           sel                                                                                                                                                   )                                         `

A delegate method passed to the instance's delegate method

Parameters:  
`type                                                         <String>                                                         ` <span property="yui:description"> The type of event to listen for</span>

`fn                                                         <Function>                                                         ` <span property="yui:description"> The method to attach</span>

`cont                                                         <String>                                                         ` <span property="yui:description"> The container to act as a delegate, if no "sel" passed, the body is assumed as the container.</span>

`sel                                                         <String>                                                         ` <span property="yui:description"> The selector to match in the event (optional)</span>

<!-- -->

Returns: `                                                             EventHandle                                                     `  
The Event handle returned from Y.delegate

------------------------------------------------------------------------

#### <span id="method_focus">focus</span>

`                                                                                                                                                                    void                                             focus                                            (                                             )                                         `

Set the focus to the iframe

------------------------------------------------------------------------

#### <span id="method_getInstance">getInstance</span>

`                                                                                                                                                                    YUI                                             getInstance                                            (                                             )                                         `

Get a reference to the internal YUI instance.

Returns: `                                                             YUI                                                     `  
The internal YUI instance

------------------------------------------------------------------------

#### <span id="method_render">render</span>

`                                                                                                                                                                    Y.Frame                                             render                                            (                                                                                                                                                                    node                                                                                                                                                   )                                         `

Render the iframe into the container config option or open the window.

Parameters:  
`node                                                         <String/HTMLElement/Node>                                                         ` <span property="yui:description"> The node to render to</span>

**Chainable:** This method is chainable.

------------------------------------------------------------------------

#### <span id="method_use">use</span>

`                                                                                                                                                                    void                                             use                                            (                                             )                                         `

This is a scoped version of the normal YUI.use method & is bound to this frame/window. At setup, the inst.use method is mapped to this method.

------------------------------------------------------------------------

### Events

#### <span id="event_basehrefChange">basehrefChange</span>

`                                                                                                                                                                        basehrefChange                                              (                                                                                                                                                                    event                                                                                                                                                   )                                          `

Fires when the value for the configuration attribute 'basehref' is changed. You can listen for the event using the [on](Attribute.html#method_on) method if you wish to be notified before the attribute's value has changed, or using the [after](Event.Target.html#method_after) method if you wish to be notified after the attribute's value has changed.

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

#### <span id="event_containerChange">containerChange</span>

`                                                                                                                                                                        containerChange                                              (                                                                                                                                                                    event                                                                                                                                                   )                                          `

Fires when the value for the configuration attribute 'container' is changed. You can listen for the event using the [on](Attribute.html#method_on) method if you wish to be notified before the attribute's value has changed, or using the [after](Event.Target.html#method_after) method if you wish to be notified after the attribute's value has changed.

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

#### <span id="event_designModeChange">designModeChange</span>

`                                                                                                                                                                        designModeChange                                              (                                                                                                                                                                    event                                                                                                                                                   )                                          `

Fires when the value for the configuration attribute 'designMode' is changed. You can listen for the event using the [on](Attribute.html#method_on) method if you wish to be notified before the attribute's value has changed, or using the [after](Event.Target.html#method_after) method if you wish to be notified after the attribute's value has changed.

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

#### <span id="event_idChange">idChange</span>

`                                                                                                                                                                        idChange                                              (                                                                                                                                                                    event                                                                                                                                                   )                                          `

Fires when the value for the configuration attribute 'id' is changed. You can listen for the event using the [on](Attribute.html#method_on) method if you wish to be notified before the attribute's value has changed, or using the [after](Event.Target.html#method_after) method if you wish to be notified after the attribute's value has changed.

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

#### <span id="event_langChange">langChange</span>

`                                                                                                                                                                        langChange                                              (                                                                                                                                                                    event                                                                                                                                                   )                                          `

Fires when the value for the configuration attribute 'lang' is changed. You can listen for the event using the [on](Attribute.html#method_on) method if you wish to be notified before the attribute's value has changed, or using the [after](Event.Target.html#method_after) method if you wish to be notified after the attribute's value has changed.

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

#### <span id="event_srcChange">srcChange</span>

`                                                                                                                                                                        srcChange                                              (                                                                                                                                                                    event                                                                                                                                                   )                                          `

Fires when the value for the configuration attribute 'src' is changed. You can listen for the event using the [on](Attribute.html#method_on) method if you wish to be notified before the attribute's value has changed, or using the [after](Event.Target.html#method_after) method if you wish to be notified after the attribute's value has changed.

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

#### <span id="event_titleChange">titleChange</span>

`                                                                                                                                                                        titleChange                                              (                                                                                                                                                                    event                                                                                                                                                   )                                          `

Fires when the value for the configuration attribute 'title' is changed. You can listen for the event using the [on](Attribute.html#method_on) method if you wish to be notified before the attribute's value has changed, or using the [after](Event.Target.html#method_after) method if you wish to be notified after the attribute's value has changed.

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

#### <span id="event_useChange">useChange</span>

`                                                                                                                                                                        useChange                                              (                                                                                                                                                                    event                                                                                                                                                   )                                          `

Fires when the value for the configuration attribute 'use' is changed. You can listen for the event using the [on](Attribute.html#method_on) method if you wish to be notified before the attribute's value has changed, or using the [after](Event.Target.html#method_after) method if you wish to be notified after the attribute's value has changed.

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

### Configuration Attributes

#### <span id="config_basehref">basehref</span> `- String`

The base href to use in the iframe.

------------------------------------------------------------------------

#### <span id="config_container">container</span> `- String/HTMLElement/Node`

The container to append the iFrame to on render.

------------------------------------------------------------------------

#### <span id="config_content">content</span> `- String`

The string to inject into the body of the new frame/window.

------------------------------------------------------------------------

#### <span id="config_designMode">designMode</span> `- writeonce Boolean`

Should designMode be turned on after creation.

------------------------------------------------------------------------

#### <span id="config_dir">dir</span> `- String`

The default text direction for this new frame. Default: ltr

------------------------------------------------------------------------

#### <span id="config_id">id</span> `- writeonce String`

Set the id of the new Node. (optional)

------------------------------------------------------------------------

#### <span id="config_lang">lang</span> `- String`

The default language. Default: en-US

------------------------------------------------------------------------

#### <span id="config_src">src</span> `- String`

The src of the iframe/window. Defaults to javascript:;

------------------------------------------------------------------------

#### <span id="config_title">title</span> `- String`

The title to give the blank page.

------------------------------------------------------------------------

#### <span id="config_use">use</span> `- writeonce Array`

Array of modules to include in the scoped YUI instance at render time. Default: \['none', 'selector-css2'\]

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

-   [\_iframe](#property__iframe "_iframe")
-   [\_instance](#property__instance "_instance")
-   [\_ready](#property__ready "_ready")
-   [\_rendered](#property__rendered "_rendered")
-   [DOC\_TYPE](#property_DOC_TYPE "DOC_TYPE")
-   [HTML](#property_HTML "HTML")
-   [META](#property_META "META")
-   [NAME](#property_NAME "NAME")
-   [PAGE\_HTML](#property_PAGE_HTML "PAGE_HTML")

#### Methods

-   [\_create](#method__create "_create")
-   [\_defReadyFn](#method__defReadyFn "_defReadyFn")
-   [\_getHTML](#method__getHTML "_getHTML")
-   [\_instanceLoaded](#method__instanceLoaded "_instanceLoaded")
-   [\_onContentReady](#method__onContentReady "_onContentReady")
-   [\_onDomEvent](#method__onDomEvent "_onDomEvent")
-   [\_resolveBaseHref](#method__resolveBaseHref "_resolveBaseHref")
-   [\_resolveWinDoc](#method__resolveWinDoc "_resolveWinDoc")
-   [\_setHTML](#method__setHTML "_setHTML")
-   [delegate](#method_delegate "delegate")
-   [focus](#method_focus "focus")
-   [getInstance](#method_getInstance "getInstance")
-   [render](#method_render "render")
-   [use](#method_use "use")

#### Events

-   [basehrefChange](#event_basehrefChange "basehrefChange")
-   [containerChange](#event_containerChange "containerChange")
-   [contentChange](#event_contentChange "contentChange")
-   [designModeChange](#event_designModeChange "designModeChange")
-   [dirChange](#event_dirChange "dirChange")
-   [idChange](#event_idChange "idChange")
-   [langChange](#event_langChange "langChange")
-   [srcChange](#event_srcChange "srcChange")
-   [titleChange](#event_titleChange "titleChange")
-   [useChange](#event_useChange "useChange")

#### Configuration Attributes

-   [basehref](#config_basehref "basehref")
-   [container](#config_container "container")
-   [content](#config_content "content")
-   [designMode](#config_designMode "designMode")
-   [dir](#config_dir "dir")
-   [id](#config_id "id")
-   [lang](#config_lang "lang")
-   [src](#config_src "src")
-   [title](#config_title "title")
-   [use](#config_use "use")

------------------------------------------------------------------------

Copyright © 2010 Yahoo! Inc. All rights reserved.
