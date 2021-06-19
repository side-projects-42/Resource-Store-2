[Yahoo! UI Library](http://developer.yahoo.com/yui/ "Yahoo! UI Library")
========================================================================

### editor  <span class="subtitle">3.2.0</span>

[Yahoo! UI Library](./index.html "Yahoo! UI Library") &gt; [editor](./module_editor.html "editor") &gt; Plugin.ExecCommand

Search:

 

Filters <span class="classopts"> Show Private</span> <span class="classopts"> Show Protected</span> <span class="classopts"> Show Deprecated</span>

Class **Plugin.ExecCommand** <span class="extends"> - extends [Base](Base.html "Base") </span>
----------------------------------------------------------------------------------------------

Plugin for the frame module to handle execCommands for Editor

### Constructor

**Plugin.ExecCommand** `                                     (                                     )                                 `

### Properties

#### <span id="property__inst">\_inst</span> - `private object`

An internal reference to the instance of the frame plugged into.

------------------------------------------------------------------------

#### <span id="property_COMMANDS">COMMANDS</span> - `static object`

Static object literal of execCommand overrides

------------------------------------------------------------------------

#### <span id="property_NAME">NAME</span> - `static object`

execCommand

------------------------------------------------------------------------

#### <span id="property_NS">NS</span> - `static object`

exec

------------------------------------------------------------------------

### Methods

#### <span id="method__command">\_command</span>

`                                          private                                                                                                                            void                                             _command                                            (                                                                                                                                                                    action                                                                                                                                                               ,                                                           value                                                                                                                                                   )                                         `

The private version of execCommand that doesn't filter for overrides.

Parameters:  
`action                                                         <String>                                                         ` <span property="yui:description"> The action to perform (bold, italic, fontname)</span>

`value                                                         <String>                                                         ` <span property="yui:description"> The optional value (helvetica)</span>

------------------------------------------------------------------------

#### <span id="method_command">command</span>

`                                                                                                                                                                    Node/NodeList                                             command                                            (                                                                                                                                                                    action                                                                                                                                                               ,                                                           value                                                                                                                                                   )                                         `

Execute a command on the frame's document.

Parameters:  
`action                                                         <String>                                                         ` <span property="yui:description"> The action to perform (bold, italic, fontname)</span>

`value                                                         <String>                                                         ` <span property="yui:description"> The optional value (helvetica)</span>

<!-- -->

Returns: `                                                             Node/NodeList                                                     `  
Should return the Node/Nodelist affected

------------------------------------------------------------------------

#### <span id="method_COMMANDS.addclass">COMMANDS.addclass</span>

`                                                                                   static                                                                                   NodeList                                             COMMANDS.addclass                                            (                                                                                                                                                                    cmd                                                                                                                                                               ,                                                           cls                                                                                                                                                   )                                         `

Add a class to all of the elements in the selection

Parameters:  
`cmd                                                         <String>                                                         ` <span property="yui:description"> The command executed: addclass</span>

`cls                                                         <String>                                                         ` <span property="yui:description"> The className to add</span>

<!-- -->

Returns: `                                                             NodeList                                                     `  
NodeList of the items touched by this command.

------------------------------------------------------------------------

#### <span id="method_COMMANDS.createlink">COMMANDS.createlink</span>

`                                                                                   static                                                                                   Node                                             COMMANDS.createlink                                            (                                                                                                                                                                    cmd                                                                                                                                                   )                                         `

Override for the createlink method from the [CreateLinkBase](Plugin.CreateLinkBase.html) plugin.

Parameters:  
`cmd                                                         <String>                                                         ` <span property="yui:description"> The command executed: createlink</span>

<!-- -->

Returns: `                                                             Node                                                     `  
Node instance of the item touched by this command.

------------------------------------------------------------------------

#### <span id="method_COMMANDS.inserthtml">COMMANDS.inserthtml</span>

`                                                                                   static                                                                                   Node                                             COMMANDS.inserthtml                                            (                                                                                                                                                                    cmd                                                                                                                                                               ,                                                           html                                                                                                                                                   )                                         `

Inserts the provided HTML at the cursor, should be a single element.

Parameters:  
`cmd                                                         <String>                                                         ` <span property="yui:description"> The command executed: inserthtml</span>

`html                                                         <String>                                                         ` <span property="yui:description"> The html to insert</span>

<!-- -->

Returns: `                                                             Node                                                     `  
Node instance of the item touched by this command.

------------------------------------------------------------------------

#### <span id="method_COMMANDS.insertimage">COMMANDS.insertimage</span>

`                                                                                   static                                                                                   Node                                             COMMANDS.insertimage                                            (                                                                                                                                                                    cmd                                                                                                                                                               ,                                                           img                                                                                                                                                   )                                         `

Inserts an image at the cursor position

Parameters:  
`cmd                                                         <String>                                                         ` <span property="yui:description"> The command executed: insertimage</span>

`img                                                         <String>                                                         ` <span property="yui:description"> The url of the image to be inserted</span>

<!-- -->

Returns: `                                                             Node                                                     `  
Node instance of the item touched by this command.

------------------------------------------------------------------------

#### <span id="method_COMMANDS.insertorderedlist">COMMANDS.insertorderedlist</span>

`                                                                                   static                                                                                   Node                                             COMMANDS.insertorderedlist                                            (                                                                                                                                                                    cmd                                                                                                                                                   )                                         `

Override for the insertorderedlist method from the [EditorLists](Plugin.EditorLists.html) plugin.

Parameters:  
`cmd                                                         <String>                                                         ` <span property="yui:description"> The command executed: insertorderedlist</span>

<!-- -->

Returns: `                                                             Node                                                     `  
Node instance of the item touched by this command.

------------------------------------------------------------------------

#### <span id="method_COMMANDS.insertunorderedlist">COMMANDS.insertunorderedlist</span>

`                                                                                   static                                                                                   Node                                             COMMANDS.insertunorderedlist                                            (                                                                                                                                                                    cmd                                                                                                                                                   )                                         `

Override for the insertunorderedlist method from the [EditorLists](Plugin.EditorLists.html) plugin.

Parameters:  
`cmd                                                         <String>                                                         ` <span property="yui:description"> The command executed: insertunorderedlist</span>

<!-- -->

Returns: `                                                             Node                                                     `  
Node instance of the item touched by this command.

------------------------------------------------------------------------

#### <span id="method_COMMANDS.removeclass">COMMANDS.removeclass</span>

`                                                                                   static                                                                                   NodeList                                             COMMANDS.removeclass                                            (                                                                                                                                                                    cmd                                                                                                                                                               ,                                                           cls                                                                                                                                                   )                                         `

Remove a class from all of the elements in the selection

Parameters:  
`cmd                                                         <String>                                                         ` <span property="yui:description"> The command executed: removeclass</span>

`cls                                                         <String>                                                         ` <span property="yui:description"> The className to remove</span>

<!-- -->

Returns: `                                                             NodeList                                                     `  
NodeList of the items touched by this command.

------------------------------------------------------------------------

#### <span id="method_COMMANDS.wrap">COMMANDS.wrap</span>

`                                                                                   static                                                                                   NodeList                                             COMMANDS.wrap                                            (                                                                                                                                                                    cmd                                                                                                                                                               ,                                                           tag                                                                                                                                                   )                                         `

Wraps the content with a new element of type (tag)

Parameters:  
`cmd                                                         <String>                                                         ` <span property="yui:description"> The command executed: wrap</span>

`tag                                                         <String>                                                         ` <span property="yui:description"> The tag to wrap the selection with</span>

<!-- -->

Returns: `                                                             NodeList                                                     `  
NodeList of the items touched by this command.

------------------------------------------------------------------------

#### <span id="method_getInstance">getInstance</span>

`                                                                                                                                                                    YUI                                             getInstance                                            (                                             )                                         `

Get's the instance of YUI bound to the parent frame

Returns: `                                                             YUI                                                     `  
The YUI instance bound to the parent frame

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

-   [\_inst](#property__inst "_inst")
-   [COMMANDS](#property_COMMANDS "COMMANDS")
-   [NAME](#property_NAME "NAME")
-   [NS](#property_NS "NS")

#### Methods

-   [\_command](#method__command "_command")
-   [command](#method_command "command")
-   [COMMANDS.addclass](#method_COMMANDS.addclass "COMMANDS.addclass")
-   [COMMANDS.createlink](#method_COMMANDS.createlink "COMMANDS.createlink")
-   [COMMANDS.inserthtml](#method_COMMANDS.inserthtml "COMMANDS.inserthtml")
-   [COMMANDS.insertimage](#method_COMMANDS.insertimage "COMMANDS.insertimage")
-   [COMMANDS.insertorderedlist](#method_COMMANDS.insertorderedlist "COMMANDS.insertorderedlist")
-   [COMMANDS.insertunorderedlist](#method_COMMANDS.insertunorderedlist "COMMANDS.insertunorderedlist")
-   [COMMANDS.removeclass](#method_COMMANDS.removeclass "COMMANDS.removeclass")
-   [COMMANDS.wrap](#method_COMMANDS.wrap "COMMANDS.wrap")
-   [getInstance](#method_getInstance "getInstance")

------------------------------------------------------------------------

Copyright © 2010 Yahoo! Inc. All rights reserved.
