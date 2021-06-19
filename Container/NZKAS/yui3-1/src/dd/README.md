Drag and Drop
=============

The Drag and Drop Utility allows you to create a draggable interface efficiently, buffering you from browser-level abnormalities and enabling you to focus on the interesting logic surrounding your particular implementation. This component enables you to create a variety of standard draggable objects with just a few lines of code and then, using its extensive API, add your own specific implementation logic.

    YUI().use('dd-drag', function(Y) {
        var dd = new Y.DD.Drag({
            node: '#drag'
        });
    });

### File Structure and Module Info

Source Files: ddm-base.js ==&gt; Base DragDrop Manager ddm.js ==&gt; Adds shim support ddm-drop.js ==&gt; Adds Drop support drag.js ==&gt; Main drag class proxy.js ==&gt; Adds proxy support to Drag constrain.js ==&gt; Adds constrain support to drag scroll.js ==&gt; Adds scroll support to drag drop.js ==&gt; Drop Support dd-plugin.js ==&gt; Node plugin for Drag dd-drop-plugin.js ==&gt; Node plugin for Drop

Module Names: dd-ddm-base ==&gt; Base DragDrop Manager dd-ddm ==&gt; Adds shim support dd-ddm-drop ==&gt; Adds Drop support dd-drag ==&gt; Main drag class dd-proxy ==&gt; Adds proxy support to Drag dd-constrain ==&gt; Adds constrain support to drag dd-scroll ==&gt; Adds scroll support to drag dd-drop ==&gt; Drop Support dd-plugin ==&gt; Node plugin for Drag dd-drop-plugin ==&gt; Node plugin for Drop dd ==&gt; All Drag & Drop related code

Build Files: dd-ddm-base.js ==&gt; Base DragDrop Manager dd-ddm.js ==&gt; Adds shim support dd-ddm-drop.js ==&gt; Adds Drop support dd-drag.js ==&gt; Main drag class dd-proxy.js ==&gt; Adds proxy support to Drag dd-constrain.js ==&gt; Adds constrain support to drag dd-scroll.js ==&gt; Adds scroll support to drag dd-drop.js ==&gt; Drop Support dd-plugin.js ==&gt; Node plugin for Drag dd-drop-plugin.js ==&gt; Node plugin for Drop

Rollup File: dd.js ==&gt; dd-ddm-base, dd-ddm, dd-ddm-drop, dd-drag, dd-proxy, dd-constrain, dd-scroll, dd-drop, dd-plugin, dd-drop-plugin
