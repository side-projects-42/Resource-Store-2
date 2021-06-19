CodeMirror: Emacs bindings demo
===============================

\#include "syscalls.h" /\* getchar: simple buffered version \*/ int getchar(void) { static char buf\[BUFSIZ\]; static char \*bufp = buf; static int n = 0; if (n == 0) { /\* buffer is empty \*/ n = read(0, buf, sizeof buf); bufp = buf; } return (--n &gt;= 0) ? (unsigned char) \*bufp++ : EOF; }

The emacs keybindings are enabled by including [keymap/emacs.js](../keymap/emacs.js) and setting the `keyMap` option to `"emacs"`. Because CodeMirror's internal API is quite different from Emacs, they are only a loose approximation of actual emacs bindings, though.

Also note that a lot of browsers disallow certain keys from being captured. For example, Chrome blocks both Ctrl-W and Ctrl-N, with the result that idiomatic use of Emacs keys will constantly close your tab or open a new window.
