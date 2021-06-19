CodeMirror: HAML mode
=====================

!!! \#content .left.column(title="title"){:href =&gt; "/hello", :test =&gt; "\#{hello}\_\#{world}"} %h2 Welcome to our site! %p= puts "HAML MODE" .right.column = render :partial =&gt; "sidebar" .container .row .span8 %h1.title= @page\_title %p.title= @page\_title %p / The same as HTML comment Hello multiline comment -\# haml comment This wont be displayed nor will this Date/Time: - now = DateTime.now %strong= now - if now &gt; DateTime.parse("December 31, 2006") = "Happy new " + "year!" %title = @title \\= @title

Title
=====

Title
=====

**MIME types defined:** `text/x-haml`.

**Parsing/Highlighting Tests:** [normal](../../test/index.html#haml_*), [verbose](../../test/index.html#verbose,haml_*).
