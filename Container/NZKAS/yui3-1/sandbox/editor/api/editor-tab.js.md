[Yahoo! UI Library](http://developer.yahoo.com/yui/ "Yahoo! UI Library")
========================================================================

### editor  <span class="subtitle">3.2.0</span>

[Yahoo! UI Library](./index.html "Yahoo! UI Library") &gt; [editor](./module_editor.html "editor") &gt; editor-tab.js (source view)

Search:

 

Filters <span class="classopts"> Show Private</span> <span class="classopts"> Show Protected</span> <span class="classopts"> Show Deprecated</span>

    YUI.add('editor-tab', function(Y) {
        /**
         * Handles tab and shift-tab indent/outdent support.
         * @module editor
         * @submodule editor-tab
         */     
        /**
         * Handles tab and shift-tab indent/outdent support.
         * @class EditorTab
         * @constructor
         * @extends Base
         * @namespace Plugin
         */
        
        var EditorTab = function() {
            EditorTab.superclass.constructor.apply(this, arguments);
        }, HOST = 'host';

        Y.extend(EditorTab, Y.Base, {
            /**
            * Listener for host's nodeChange event and captures the tabkey interaction.
            * @private
            * @method _onNodeChange
            * @param {Event} e The Event facade passed from the host.
            */
            _onNodeChange: function(e) {
                var action = 'indent';

                if (e.changedType === 'tab') {
                    if (!e.changedNode.test('li, li *')) {
                        e.changedEvent.halt();
                        e.preventDefault();
                        if (e.changedEvent.shiftKey) {
                            action = 'outdent';
                        }

                        Y.log('Overriding TAB to ' + action, 'info', 'editorTab');
                        this.get(HOST).execCommand(action, '');
                    }
                }
            },
            initializer: function() {
                this.get(HOST).on('nodeChange', Y.bind(this._onNodeChange, this));
            }
        }, {
            /**
            * editorTab
            * @property NAME
            * @static
            */
            NAME: 'editorTab',
            /**
            * tab
            * @property NS
            * @static
            */
            NS: 'tab',
            ATTRS: {
                host: {
                    value: false
                }
            }
        });


        Y.namespace('Plugin');

        Y.Plugin.EditorTab = EditorTab;
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
