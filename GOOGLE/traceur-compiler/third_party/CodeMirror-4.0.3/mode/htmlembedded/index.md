CodeMirror: Html Embedded Scripts mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">Html Embedded Scripts</a>

Html Embedded Scripts mode
--------------------------

&lt;% function hello(who) { return “Hello” + who; } %&gt; This is an example of EJS (embedded javascript)

The program says &lt;%= hello(“world”) %&gt;.

Mode for html embedded scripts like JSP and ASP.NET. Depends on HtmlMixed which in turn depends on JavaScript, CSS and XML.  
Other dependancies include those of the scriping language chosen.

**MIME types defined:** `application/x-aspx` (ASP.NET), `application/x-ejs` (Embedded Javascript), `application/x-jsp` (JavaServer Pages)
