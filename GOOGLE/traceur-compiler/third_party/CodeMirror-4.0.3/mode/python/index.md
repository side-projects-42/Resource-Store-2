CodeMirror: Python mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">Python</a>

Python mode
-----------

\# Literals 1234 0.0e101 .123 0b01010011100 0o01234567 0x0987654321abcdef 7 2147483647 3L 79228162514264337593543950336L 0x100000000L 79228162514264337593543950336 0xdeadbeef 3.14j 10.j 10j .001j 1e100j 3.14e-10j \# String Literals ‘For\\’’ “God\\”" ""“so loved the world”"" ’‘’that he gave his only begotten\\’ ’’’ ‘that whosoever believeth \\ in him’ ’’ \# Identifiers \_\_a\_\_ a.b a.b.c \# Operators + - \* / % & | ^ ~ &lt; &gt; == != &lt;= &gt;= &lt;&gt; &lt;&lt; &gt;&gt; // \*\* and or not in is \# Delimiters () \[\] {} , : \` = ; @ . \# Note that @ and . require the proper context. += -= \*= /= %= &= |= ^= //= &gt;&gt;= &lt;&lt;= \*\*= \# Keywords as assert break class continue def del elif else except finally for from global if import lambda pass raise return try while with yield \# Python 2 Keywords (otherwise Identifiers) exec print \# Python 3 Keywords (otherwise Identifiers) nonlocal \# Types bool classmethod complex dict enumerate float frozenset int list object property reversed set slice staticmethod str super tuple type \# Python 2 Types (otherwise Identifiers) basestring buffer file long unicode xrange \# Python 3 Types (otherwise Identifiers) bytearray bytes filter map memoryview open range zip \# Some Example code import os from package import ParentClass <span class="citation" data-cites="nonsenseDecorator">@nonsenseDecorator</span> def doesNothing(): pass class ExampleClass(ParentClass): <span class="citation" data-cites="staticmethod">@staticmethod</span> def example(inputStr): a = list(inputStr) a.reverse() return ’‘.join(a) def \_\_init\_\_(self, mixin = ’Hello’): self.mixin = mixin

Cython mode
-----------

import numpy as np cimport cython from libc.math cimport sqrt <span class="citation" data-cites="cython.boundscheck">@cython.boundscheck</span>(False) <span class="citation" data-cites="cython.wraparound">@cython.wraparound</span>(False) def pairwise\_cython(double\[:, ::1\] X): cdef int M = X.shape\[0\] cdef int N = X.shape\[1\] cdef double tmp, d cdef double\[:, ::1\] D = np.empty((M, M), dtype=np.float64) for i in range(M): for j in range(M): d = 0.0 for k in range(N): tmp = X\[i, k\] - X\[j, k\] d += tmp \* tmp D\[i, j\] = sqrt(d) return np.asarray(D)

Configuration Options for Python mode:
--------------------------------------

-   version - 2/3 - The version of Python to recognize. Default is 2.
-   singleLineStringErrors - true/false - If you have a single-line string that is not terminated at the end of the line, this will show subsequent lines as errors if true, otherwise it will consider the newline as the end of the string. Default is false.
-   hangingIndent - int - If you want to write long arguments to a function starting on a new line, how much that line should be indented. Defaults to one normal indentation unit.

Advanced Configuration Options:
-------------------------------

Usefull for superset of python syntax like Enthought enaml, IPython magics and questionmark help

-   singleOperators - RegEx - Regular Expression for single operator matching, default :

        ^[\\+\\-\\*/%&|\\^~<>!]

-   singleDelimiters - RegEx - Regular Expression for single delimiter matching, default :

        ^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]

-   doubleOperators - RegEx - Regular Expression for double operators matching, default :

        ^((==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))

-   doubleDelimiters - RegEx - Regular Expressoin for double delimiters matching, default :

        ^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))

-   tripleDelimiters - RegEx - Regular Expression for triple delimiters matching, default :

        ^((//=)|(>>=)|(<<=)|(\\*\\*=))

-   identifiers - RegEx - Regular Expression for identifier, default :

        ^[_A-Za-z][_A-Za-z0-9]*

-   extra\_keywords - list of string - List of extra words ton consider as keywords
-   extra\_builtins - list of string - List of extra words ton consider as builtins

**MIME types defined:** `text/x-python` and `text/x-cython`.
