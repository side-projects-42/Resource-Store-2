[Yahoo! UI Library](http://developer.yahoo.com/yui/ "Yahoo! UI Library")
========================================================================

### editor  <span class="subtitle">3.2.0</span>

[Yahoo! UI Library](./index.html "Yahoo! UI Library") &gt; [editor](./module_editor.html "editor") &gt; lists.js (source view)

Search:

 

Filters <span class="classopts"> Show Private</span> <span class="classopts"> Show Protected</span> <span class="classopts"> Show Deprecated</span>

    YUI.add('editor-lists', function(Y) {
        /**
         * Handles list manipulation inside the Editor. Adds keyboard manipulation and execCommand support. Adds overrides for the <a href="Plugin.ExecCommand.html#method_COMMANDS.insertorderedlist">insertorderedlist</a> and <a href="Plugin.ExecCommand.html#method_COMMANDS.insertunorderedlist">insertunorderedlist</a> execCommands.
         * @module editor
         * @submodule editor-lists
         */     
        /**
         * Handles list manipulation inside the Editor. Adds keyboard manipulation and execCommand support. Adds overrides for the <a href="Plugin.ExecCommand.html#method_COMMANDS.insertorderedlist">insertorderedlist</a> and <a href="Plugin.ExecCommand.html#method_COMMANDS.insertunorderedlist">insertunorderedlist</a> execCommands.
         * @class EditorLists
         * @constructor
         * @extends Base
         * @namespace Plugin
         */
        
        var EditorLists = function() {
            EditorLists.superclass.constructor.apply(this, arguments);
        }, LI = 'li', OL = 'ol', UL = 'ul', HOST = 'host';

        Y.extend(EditorLists, Y.Base, {
            /**
            * Listener for host's nodeChange event and captures the tabkey interaction only when inside a list node.
            * @private
            * @method _onNodeChange
            * @param {Event} e The Event facade passed from the host.
            */
            _onNodeChange: function(e) {
                var inst = this.get(HOST).getInstance(), sel, li, 
                newLi, newList, sTab, par, moved = false, tag;

                if (Y.UA.ie && e.changedType === 'enter') {
                    e.changedEvent.halt();
                    e.preventDefault();
                    li = e.changedNode;
                    newLi = inst.Node.create('<' + LI + '>' + EditorLists.NON + '</' + LI + '>');
                        
                    if (!li.test(LI)) {
                        li = li.ancestor(LI);
                    }
                    li.insert(newLi, 'after');
                    
                    sel = new inst.Selection();
                    sel.selectNode(newLi.get('firstChild'));
                }
                if (e.changedType === 'tab') {
                    if (e.changedNode.test(LI + ', ' + LI + ' *')) {
                        Y.log('Overriding TAB to move lists around', 'info', 'editorLists');
                        e.changedEvent.halt();
                        e.preventDefault();
                        li = e.changedNode;
                        sTab = e.changedEvent.shiftKey;
                        par = li.ancestor(OL + ',' + UL);
                        tag = UL;


                        if (par.get('tagName').toLowerCase() === OL) {
                            tag = OL;
                        }
                        Y.log('ShiftKey: ' + sTab, 'info', 'editorLists');
                        
                        if (!li.test(LI)) {
                            li = li.ancestor(LI);
                        }
                        if (sTab) {
                            if (li.ancestor(LI)) {
                                Y.log('Shifting list up one level', 'info', 'editorLists');
                                li.ancestor(LI).insert(li, 'after');
                                moved = true;
                            }
                        } else {
                            //li.setStyle('border', '1px solid red');
                            if (li.previous(LI)) {
                                Y.log('Shifting list down one level', 'info', 'editorLists');
                                newList = inst.Node.create('<' + tag + '></' + tag + '>');
                                li.previous(LI).append(newList);
                                newList.append(li);
                                moved = true;
                            }
                        }
                    }
                    if (moved) {
                        li.all(EditorLists.REMOVE).remove();
                        if (Y.UA.ie) {
                            li = li.append(EditorLists.NON).one(EditorLists.NON_SEL);
                        }
                        //Selection here..
                        Y.log('Selecting the new node', 'info', 'editorLists');
                        (new inst.Selection()).selectNode(li, true, true);
                    }
                }
            },
            initializer: function() {
                this.get(HOST).on('nodeChange', Y.bind(this._onNodeChange, this));
            }
        }, {
            NON: '<span class="yui-non">&nbsp;</span>',
            NON_SEL: 'span.yui-non',
            /**
            * The items to removed from a list when a list item is moved, currently removes BR nodes
            * @property REMOVE
            * @static
            */
            REMOVE: 'br',
            /**
            * editorLists
            * @property NAME
            * @static
            */
            NAME: 'editorLists',
            /**
            * lists
            * @property NS
            * @static
            */
            NS: 'lists',
            ATTRS: {
                host: {
                    value: false
                }
            }
        });


        Y.namespace('Plugin');

        Y.Plugin.EditorLists = EditorLists;

        Y.mix(Y.Plugin.ExecCommand.COMMANDS, {
            /**
            * Override for the insertunorderedlist method from the <a href="Plugin.EditorLists.html">EditorLists</a> plugin.
            * @for ExecCommand
            * @method COMMANDS.insertunorderedlist
            * @static
            * @param {String} cmd The command executed: insertunorderedlist
            * @return {Node} Node instance of the item touched by this command.
            */
            insertunorderedlist: function(cmd) {
                var inst = this.get('host').getInstance(), out;
                this.get('host')._execCommand(cmd, '');
                out = (new inst.Selection()).getSelected();
                return out;
            },
            /**
            * Override for the insertorderedlist method from the <a href="Plugin.EditorLists.html">EditorLists</a> plugin.
            * @for ExecCommand
            * @method COMMANDS.insertorderedlist
            * @static
            * @param {String} cmd The command executed: insertorderedlist
            * @return {Node} Node instance of the item touched by this command.
            */
            insertorderedlist: function(cmd) {
                var inst = this.get('host').getInstance(), out;
                this.get('host')._execCommand(cmd, '');
                out = (new inst.Selection()).getSelected();
                return out;   
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
