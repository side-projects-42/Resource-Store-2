CodeMirror: TOML Mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">TOML Mode</a>

TOML Mode
---------

\# This is a TOML document. Boom. title = “TOML Example” \[owner\] name = “Tom Preston-Werner” organization = “GitHub” bio = “GitHub Cofounder & CEO\\nLikes tater tots and beer.” dob = 1979-05-27T07:32:00Z \# First class dates? Why not? \[database\] server = “192.168.1.1” ports = \[ 8001, 8001, 8002 \] connection\_max = 5000 enabled = true \[servers\] \# You can indent as you please. Tabs or spaces. TOML don’t care. \[servers.alpha\] ip = “10.0.0.1” dc = “eqdc10” \[servers.beta\] ip = “10.0.0.2” dc = “eqdc10” \[clients\] data = \[ \[“gamma”, “delta”\], \[1, 2\] \] \# Line breaks are OK when inside arrays hosts = \[ “alpha”, “omega” \]

### The TOML Mode

Created by Forbes Lindesay.

**MIME type defined:** `text/x-toml`.