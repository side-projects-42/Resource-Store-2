CodeMirror: HAML mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">HAML</a>

HAML mode
---------

!!! \#content .left.column(title=“title”){:href =&gt; “/hello”, :test =&gt; “\#{hello}\_\#{world}”} %h2 Welcome to our site! %p= puts “HAML MODE” .right.column = render :partial =&gt; “sidebar” .container .row .span8 %h1.title= <span class="citation" data-cites="page">@page</span>\_title %p.title= <span class="citation" data-cites="page">@page</span>\_title %p / The same as HTML comment Hello multiline comment -\# haml comment This wont be displayed nor will this Date/Time: - now = DateTime.now %strong= now - if now &gt; DateTime.parse(“December 31, 2006”) = “Happy new” + “year!” %title = <span class="citation" data-cites="title">@title</span> \\= <span class="citation" data-cites="title">@title</span>

Title
=====

Title
=====

**MIME types defined:** `text/x-haml`.

**Parsing/Highlighting Tests:** [normal](../../test/index.html#haml_*), [verbose](../../test/index.html#verbose,haml_*).
