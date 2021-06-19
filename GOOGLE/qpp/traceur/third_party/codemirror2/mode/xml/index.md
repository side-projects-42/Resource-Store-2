CodeMirror: XML mode
====================

&lt;html style=“color: green”&gt; &lt;!– this is a comment –&gt; &lt;head&gt; &lt;title&gt;HTML Example&lt;/title&gt; &lt;/head&gt; &lt;body&gt; The indentation tries to be &lt;em&gt;somewhat “do what I mean”&lt;/em&gt;… but might not match your style. &lt;/body&gt; &lt;/html&gt;

The XML mode supports two configuration parameters:

`htmlMode (boolean)`  
This switches the mode to parse HTML instead of XML. This means attributes do not have to be quoted, and some elements (such as `br`) do not require a closing tag.

`alignCDATA (boolean)`  
Setting this to true will force the opening tag of CDATA blocks to not be indented.

**MIME types defined:** `application/xml`, `text/html`.
