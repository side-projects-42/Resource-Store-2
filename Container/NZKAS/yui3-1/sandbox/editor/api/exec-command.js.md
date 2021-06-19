[Yahoo! UI Library](http://developer.yahoo.com/yui/ "Yahoo! UI Library")
========================================================================

### editor  <span class="subtitle">3.2.0</span>

[Yahoo! UI Library](./index.html "Yahoo! UI Library") &gt; [editor](./module_editor.html "editor") &gt; exec-command.js (source view)

Search:

 

Filters <span class="classopts"> Show Private</span> <span class="classopts"> Show Protected</span> <span class="classopts"> Show Deprecated</span>

    YUI.add('exec-command', function(Y) {

        /**
         * Plugin for the frame module to handle execCommands for Editor
         * @module editor
         * @submodule exec-command
         */     
        /**
         * Plugin for the frame module to handle execCommands for Editor
         * @class ExecCommand
         * @extends Base
         * @constructor
         * @namespace Plugin
         */
            var ExecCommand = function() {
                ExecCommand.superclass.constructor.apply(this, arguments);
            };

            Y.extend(ExecCommand, Y.Base, {
                /**
                * An internal reference to the instance of the frame plugged into.
                * @private
                * @property _inst
                */
                _inst: null,
                /**
                * Execute a command on the frame's document.
                * @method command
                * @param {String} action The action to perform (bold, italic, fontname)
                * @param {String} value The optional value (helvetica)
                * @return {Node/NodeList} Should return the Node/Nodelist affected
                */
                command: function(action, value) {
                    var fn = ExecCommand.COMMANDS[action];


                    Y.log('execCommand(' + action + '): "' + value + '"', 'info', 'exec-command');
                    if (fn) {
                        return fn.call(this, action, value);
                    } else {
                        return this._command(action, value);
                    }
                },
                /**
                * The private version of execCommand that doesn't filter for overrides.
                * @private
                * @method _command
                * @param {String} action The action to perform (bold, italic, fontname)
                * @param {String} value The optional value (helvetica)
                */
                _command: function(action, value) {
                    var inst = this.getInstance();
                    try {
                        Y.log('Internal execCommand(' + action + '): "' + value + '"', 'info', 'exec-command');
                        inst.config.doc.execCommand(action, false, value);
                    } catch (e) {
                        Y.log(e.message, 'error', 'exec-command');
                    }
                },
                /**
                * Get's the instance of YUI bound to the parent frame
                * @method getInstance
                * @return {YUI} The YUI instance bound to the parent frame
                */
                getInstance: function() {
                    if (!this._inst) {
                        this._inst = this.get('host').getInstance();
                    }
                    return this._inst;
                },
                initializer: function() {
                    Y.mix(this.get('host'), {
                        execCommand: function(action, value) {
                            return this.exec.command(action, value);
                        },
                        _execCommand: function(action, value) {
                            return this.exec._command(action, value);
                        }
                    });
                }
            }, {
                /**
                * execCommand
                * @property NAME
                * @static
                */
                NAME: 'execCommand',
                /**
                * exec
                * @property NS
                * @static
                */
                NS: 'exec',
                ATTRS: {
                    host: {
                        value: false
                    }
                },
                /**
                * Static object literal of execCommand overrides
                * @property COMMANDS
                * @static
                */
                COMMANDS: {
                    /**
                    * Wraps the content with a new element of type (tag)
                    * @method COMMANDS.wrap
                    * @static
                    * @param {String} cmd The command executed: wrap
                    * @param {String} tag The tag to wrap the selection with
                    * @return {NodeList} NodeList of the items touched by this command.
                    */
                    wrap: function(cmd, tag) {
                        var inst = this.getInstance();
                        return (new inst.Selection()).wrapContent(tag);
                    },
                    /**
                    * Inserts the provided HTML at the cursor, should be a single element.
                    * @method COMMANDS.inserthtml
                    * @static
                    * @param {String} cmd The command executed: inserthtml
                    * @param {String} html The html to insert
                    * @return {Node} Node instance of the item touched by this command.
                    */
                    inserthtml: function(cmd, html) {
                        var inst = this.getInstance();
                        return (new inst.Selection()).insertContent(html);
                    },
                    /**
                    * Inserts an image at the cursor position
                    * @method COMMANDS.insertimage
                    * @static
                    * @param {String} cmd The command executed: insertimage
                    * @param {String} img The url of the image to be inserted
                    * @return {Node} Node instance of the item touched by this command.
                    */
                    insertimage: function(cmd, img) {
                        return this.command('inserthtml', '<img src="' + img + '">');
                    },
                    /**
                    * Add a class to all of the elements in the selection
                    * @method COMMANDS.addclass
                    * @static
                    * @param {String} cmd The command executed: addclass
                    * @param {String} cls The className to add
                    * @return {NodeList} NodeList of the items touched by this command.
                    */
                    addclass: function(cmd, cls) {
                        var inst = this.getInstance();
                        return (new inst.Selection()).getSelected().addClass(cls);
                    },
                    /**
                    * Remove a class from all of the elements in the selection
                    * @method COMMANDS.removeclass
                    * @static
                    * @param {String} cmd The command executed: removeclass
                    * @param {String} cls The className to remove
                    * @return {NodeList} NodeList of the items touched by this command.
                    */
                    removeclass: function(cmd, cls) {
                        var inst = this.getInstance();
                        return (new inst.Selection()).getSelected().removeClass(cls);
                    },
                    bidi: function() {
                        var inst = this.getInstance(),
                            sel = new inst.Selection(),
                            blockItem, dir,
                            blocks = 'p,div,li,body'; //More??

                        if (sel.anchorNode) {
                            blockItem = sel.anchorNode;
                            if (!sel.anchorNode.test(blocks)) {
                                blockItem = sel.anchorNode.ancestor(blocks);
                            }
                            dir = blockItem.getAttribute('dir');
                            if (dir === '') {
                                dir = inst.one('html').getAttribute('dir');
                            }
                            if (dir === 'rtl') {
                                dir = 'ltr';
                            } else {
                                dir = 'rtl';
                            }
                            blockItem.setAttribute('dir', dir);
                        }
                        return blockItem;
                    },
                    backcolor: function(cmd, val) {
                        if (Y.UA.gecko || Y.UA.opera) {
                            cmd = 'hilitecolor';
                        }
                        if (!Y.UA.ie) {
                            this._command('styleWithCSS', 'true');
                        }
                        this._command(cmd, val);
                        if (!Y.UA.ie) {
                            this._command('styleWithCSS', false);
                        }
                    },
                    hilitecolor: function() {
                        ExecCommand.COMMANDS.backcolor.apply(this, arguments);
                    }
                }
            });

            Y.namespace('Plugin');
            Y.Plugin.ExecCommand = ExecCommand;

    }, '@VERSION@', { requires: [ 'frame' ], skinnable: false });

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
