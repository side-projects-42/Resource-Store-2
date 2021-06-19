CodeMirror: Visible tabs demo

[<img src="../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../index.html)
-   [Manual](../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   <a href="#" class="active">Visible tabs</a>

Visible tabs demo
-----------------

\#include “syscalls.h” /\* getchar: simple buffered version \*/ int getchar(void) { static char buf\[BUFSIZ\]; static char \*bufp = buf; static int n = 0; if (n == 0) { /\* buffer is empty \*/ n = read(0, buf, sizeof buf); bufp = buf; } return (–n &gt;= 0) ? (unsigned char) \*bufp++ : EOF; }

Tabs inside the editor are spans with the class `cm-tab`, and can be styled.
