CodeMirror: Multiplexing Parser Demo
====================================

&lt;&lt; this is not

&gt;

&lt;&lt; multiline not html at all : &amp; &gt;&gt;

this is html again

Demonstration of a multiplexing mode, which, at certain boundary strings, switches to one or more inner modes. The out (HTML) mode does not get fed the content of the `<< >>` blocks. See the [manual](../doc/manual.html#util_multiplex) and the [source](../lib/util/multiplex.js) for more information.
