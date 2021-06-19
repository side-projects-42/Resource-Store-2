[Yahoo! UI Library](http://developer.yahoo.com/yui/ "Yahoo! UI Library")
========================================================================

### editor  <span class="subtitle">3.2.0</span>

[Yahoo! UI Library](./index.html "Yahoo! UI Library") &gt; [editor](./module_editor.html "editor") &gt; createlink-base.js (source view)

Search:

 

Filters <span class="classopts"> Show Private</span> <span class="classopts"> Show Protected</span> <span class="classopts"> Show Deprecated</span>

    YUI.add('createlink-base', function(Y) {
        /**
         * Adds prompt style link creation. Adds an override for the <a href="Plugin.ExecCommand.html#method_COMMANDS.createlink">createlink execCommand</a>.
         * @module editor
         * @submodule createlink-base
         */     
        /**
         * Adds prompt style link creation. Adds an override for the <a href="Plugin.ExecCommand.html#method_COMMANDS.createlink">createlink execCommand</a>.
         * @class CreateLinkBase
         * @static
         * @namespace Plugin
         */
        
        var CreateLinkBase = {};
        /**
        * Strings used by the plugin
        * @property STRINGS
        * @static
        */
        CreateLinkBase.STRINGS = {
                /**
                * String used for the Prompt
                * @property PROMPT
                * @static
                */
                PROMPT: 'Please enter the URL for the link to point to:',
                /**
                * String used as the default value of the Prompt
                * @property DEFAULT
                * @static
                */
                DEFAULT: 'http://'
        };

        Y.namespace('Plugin');
        Y.Plugin.CreateLinkBase = CreateLinkBase;

        Y.mix(Y.Plugin.ExecCommand.COMMANDS, {
            /**
            * Override for the createlink method from the <a href="Plugin.CreateLinkBase.html">CreateLinkBase</a> plugin.
            * @for ExecCommand
            * @method COMMANDS.createlink
            * @static
            * @param {String} cmd The command executed: createlink
            * @return {Node} Node instance of the item touched by this command.
            */
            createlink: function(cmd) {
                var inst = this.get('host').getInstance(), out, a,
                    url = prompt(CreateLinkBase.STRINGS.PROMPT, CreateLinkBase.STRINGS.DEFAULT);

                if (url) {
                    Y.log('Adding link: ' + url, 'info', 'createLinkBase');
                    this.get('host')._execCommand(cmd, url);
                    out = (new inst.Selection()).getSelected();
                    a = out.item(0).one('a');
                    out.item(0).replace(a);
                }
                return a;
            }
        });

    });

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

------------------------------------------------------------------------

Copyright © 2010 Yahoo! Inc. All rights reserved.
