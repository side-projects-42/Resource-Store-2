CodeMirror: Lua mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">Lua</a>

Lua mode
--------

–\[\[ example useless code to show lua syntax highlighting this is multiline comment \]\] function blahblahblah(x) local table = { “asd” = 123, “x” = 0.34, } if x ~= 3 then print( x ) elseif x == “string” my\_custom\_function( 0x34 ) else unknown\_function( “some string” ) end –single line comment end function blablabla3() for k,v in ipairs( table ) do –abcde.. y=\[=\[ x=\[\[ x is a multi line string \]\] but its definition is iside a highest level string! \]=\] print(" \\“\\” ") s = math.sin( x ) end end

Loosely based on Franciszek Wawrzak’s [CodeMirror 1 mode](http://codemirror.net/1/contrib/lua). One configuration parameter is supported, `specials`, to which you can provide an array of strings to have those identifiers highlighted with the `lua-special` style.

**MIME types defined:** `text/x-lua`.
