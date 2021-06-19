CodeMirror: Vim bindings demo

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">Vim bindings</a>

Vim bindings demo
-----------------

\#include “syscalls.h” /\* getchar: simple buffered version \*/ int getchar(void) { static char buf\[BUFSIZ\]; static char \*bufp = buf; static int n = 0; if (n == 0) { /\* buffer is empty \*/ n = read(0, buf, sizeof buf); bufp = buf; } return (–n &gt;= 0) ? (unsigned char) \*bufp++ : EOF; }

I am another file! You can yank from my neighbor and paste here.

The vim keybindings are enabled by including [keymap/vim.js](../keymap/vim.js) and setting the `keyMap` option to `"vim"`. Because CodeMirror’s internal API is quite different from Vim, they are only a loose approximation of actual vim bindings, though.
