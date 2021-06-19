<span class="logo-braces">{ }</span> [CodeMirror](http://codemirror.net/)
=========================================================================

    /* Upgrading to v2.2
     */

There are a few things in the 2.2 release that require some care when upgrading.

No more default.css
-------------------

The default theme is now included in [`codemirror.css`](../lib/codemirror.css), so you do not have to included it separately anymore. (It was tiny, so even if you're not using it, the extra data overhead is negligible.)

Different key customization
---------------------------

CodeMirror has moved to a system where [keymaps](manual.html#option_keyMap) are used to bind behavior to keys. This means [custom bindings](../demo/emacs.html) are now possible.

Three options that influenced key behavior, `tabMode`, `enterMode`, and `smartHome`, are no longer supported. Instead, you can provide custom bindings to influence the way these keys act. This is done through the new [`extraKeys`](manual.html#option_extraKeys) option, which can hold an object mapping key names to functionality. A simple example would be:

      extraKeys: {
        "Ctrl-S": function(instance) { saveText(instance.getValue()); },
        "Ctrl-/": "undo"
      }

Keys can be mapped either to functions, which will be given the editor instance as argument, or to strings, which are mapped through functions through the `CodeMirror.commands` table, which contains all the built-in editing commands, and can be inspected and extended by external code.

By default, the `Home` key is bound to the `"goLineStartSmart"` command, which moves the cursor to the first non-whitespace character on the line. You can set do this to make it always go to the very start instead:

      extraKeys: {"Home": "goLineStart"}

Similarly, `Enter` is bound to `"newlineAndIndent"` by default. You can bind it to something else to get different behavior. To disable special handling completely and only get a newline character inserted, you can bind it to `false`:

      extraKeys: {"Enter": false}

The same works for `Tab`. If you don't want CodeMirror to handle it, bind it to `false`. The default behaviour is to indent the current line more (`"indentMore"` command), and indent it less when shift is held (`"indentLess"`). There are also `"indentAuto"` (smart indent) and `"insertTab"` commands provided for alternate behaviors. Or you can write your own handler function to do something different altogether.

Tabs
----

Handling of tabs changed completely. The display width of tabs can now be set with the `tabSize` option, and tabs can be [styled](../demo/visibletabs.html) by setting CSS rules for the `cm-tab` class.

The default width for tabs is now 4, as opposed to the 8 that is hard-wired into browsers. If you are relying on 8-space tabs, make sure you explicitly set `tabSize: 8` in your options.
