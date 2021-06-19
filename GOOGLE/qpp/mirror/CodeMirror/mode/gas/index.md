CodeMirror: Gas mode
====================

.syntax unified .global main /\* \* A \* multi-line \* comment. \*/ @ A single line comment. main: push {sp, lr} ldr r0, =message bl puts mov r0, \#0 pop {sp, pc} message: .asciz "Hello world!  
"

Handles AT&T assembler syntax (more specifically this handles the GNU Assembler (gas) syntax.) It takes a single optional configuration parameter: `architecture`, which can be one of `"ARM"`, `"ARMv6"` or `"x86"`. Including the parameter adds syntax for the registers and special directives for the supplied architecture.

**MIME types defined:** `text/x-gas`
