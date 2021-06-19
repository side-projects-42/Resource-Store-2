CodeMirror: Jade Templating Mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">Jade Templating Mode</a>

Jade Templating Mode
--------------------

doctype 5 html head title= “Jade Templating CodeMirror Mode Example” link(rel=‘stylesheet’, href=‘/css/bootstrap.min.css’) link(rel=‘stylesheet’, href=‘/css/index.css’) script(type=‘text/javascript’, src=‘/js/jquery-1.9.1.min.js’) script(type=‘text/javascript’, src=‘/js/bootstrap.min.js’) body div.header h1 Welcome to this Example div.spots if locals.spots each spot in spots div.spot.well div if spot.logo img.img-rounded.logo(src=spot.logo) else img.img-rounded.logo(src=“img/placeholder.png”) h3 a(href=spot.hash) \#\#{spot.hash} if spot.title span.title \#{spot.title} if spot.desc div \#{spot.desc} else h3 There are no spots currently available.

### The Jade Templating Mode

Created by Drew Bratcher. Managed as part of an Adobe Brackets extension at <a href="https://github.com/dbratcher/brackets-jade" class="uri">https://github.com/dbratcher/brackets-jade</a>.

**MIME type defined:** `text/x-jade`.
