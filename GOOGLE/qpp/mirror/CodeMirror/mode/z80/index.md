CodeMirror: Z80 assembly mode
=============================

\#include “ti83plus.inc” \#define progStart $9D95 .org progStart-2 .db $BB,$6D bcall(\_ClrLCDFull) ld HL, 0 ld (PenCol), HL ld HL, Message bcall(\_PutS) ; Displays the string bcall(\_NewLine) ret Message: .db “Hello world!”,0

**MIME type defined:** `text/x-z80`.
