CodeMirror: Python mode
=======================

\# Literals 1234 0.0e101 .123 0b01010011100 0o01234567 0x0987654321abcdef 7 2147483647 3L 79228162514264337593543950336L 0x100000000L 79228162514264337593543950336 0xdeadbeef 3.14j 10.j 10j .001j 1e100j 3.14e-10j \# String Literals ‘For\\’’ “God\\”" ""“so loved the world”"" ’‘’that he gave his only begotten\\’ ’’’ ‘that whosoever believeth \\ in him’ ’’ \# Identifiers \_\_a\_\_ a.b a.b.c \# Operators + - \* / % & | ^ ~ &lt; &gt; == != &lt;= &gt;= &lt;&gt; &lt;&lt; &gt;&gt; // \*\* and or not in is \# Delimiters () \[\] {} , : \` = ; @ . \# Note that @ and . require the proper context. += -= \*= /= %= &= |= ^= //= &gt;&gt;= &lt;&lt;= \*\*= \# Keywords as assert break class continue def del elif else except finally for from global if import lambda pass raise return try while with yield \# Python 2 Keywords (otherwise Identifiers) exec print \# Python 3 Keywords (otherwise Identifiers) nonlocal \# Types bool classmethod complex dict enumerate float frozenset int list object property reversed set slice staticmethod str super tuple type \# Python 2 Types (otherwise Identifiers) basestring buffer file long unicode xrange \# Python 3 Types (otherwise Identifiers) bytearray bytes filter map memoryview open range zip \# Some Example code import os from package import ParentClass <span class="citation" data-cites="nonsenseDecorator">@nonsenseDecorator</span> def doesNothing(): pass class ExampleClass(ParentClass): <span class="citation" data-cites="staticmethod">@staticmethod</span> def example(inputStr): a = list(inputStr) a.reverse() return ’‘.join(a) def \_\_init\_\_(self, mixin = ’Hello’): self.mixin = mixin

Configuration Options:
----------------------

-   version - 2/3 - The version of Python to recognize. Default is 2.
-   singleLineStringErrors - true/false - If you have a single-line string that is not terminated at the end of the line, this will show subsequent lines as errors if true, otherwise it will consider the newline as the end of the string. Default is false.

**MIME types defined:** `text/x-python`.
