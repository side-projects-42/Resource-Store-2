CodeMirror: C-like mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">C-like</a>

C-like mode
-----------

/\* C demo code \*/ \#include \#include \#include \#include \#include \#include \#include typedef struct { void\* arg\_socket; zmq\_msg\_t\* arg\_msg; char\* arg\_string; unsigned long arg\_len; int arg\_int, arg\_command; int signal\_fd; int pad; void\* context; sem\_t sem; } acl\_zmq\_context; \#define p(X) (context-&gt;arg\_\#\#X) void\* zmq\_thread(void\* context\_pointer) { acl\_zmq\_context\* context = (acl\_zmq\_context\*)context\_pointer; char ok = ‘K’, err = ‘X’; int res; while (1) { while ((res = sem\_wait(&context-&gt;sem)) == EINTR); if (res) {write(context-&gt;signal\_fd, &err, 1); goto cleanup;} switch(p(command)) { case 0: goto cleanup; case 1: p(socket) = zmq\_socket(context-&gt;context, p(int)); break; case 2: p(int) = zmq\_close(p(socket)); break; case 3: p(int) = zmq\_bind(p(socket), p(string)); break; case 4: p(int) = zmq\_connect(p(socket), p(string)); break; case 5: p(int) = zmq\_getsockopt(p(socket), p(int), (void\*)p(string), &p(len)); break; case 6: p(int) = zmq\_setsockopt(p(socket), p(int), (void\*)p(string), p(len)); break; case 7: p(int) = zmq\_send(p(socket), p(msg), p(int)); break; case 8: p(int) = zmq\_recv(p(socket), p(msg), p(int)); break; case 9: p(int) = zmq\_poll(p(socket), p(int), p(len)); break; } p(command) = errno; write(context-&gt;signal\_fd, &ok, 1); } cleanup: close(context-&gt;signal\_fd); free(context\_pointer); return 0; } void\* zmq\_thread\_init(void\* zmq\_context, int signal\_fd) { acl\_zmq\_context\* context = malloc(sizeof(acl\_zmq\_context)); pthread\_t thread; context-&gt;context = zmq\_context; context-&gt;signal\_fd = signal\_fd; sem\_init(&context-&gt;sem, 1, 0); pthread\_create(&thread, 0, &zmq\_thread, context); pthread\_detach(thread); return context; }

C++ example
-----------

\#include \#include “mystuff/util.h” namespace { enum Enum { VAL1, VAL2, VAL3 }; char32\_t unicode\_string = U“\\U0010FFFF”; string raw\_string = R“delim(anything you want)delim”; int Helper(const MyType& param) { return 0; } } // namespace class ForwardDec; template class Class : public BaseClass { const MyType member\_; public: const MyType& Method() const { return member\_; } void Method2(MyType\* value); } template void Class::Method2(MyType\* value) { std::out &lt;&lt; 1 &gt;&gt; method(); value-&gt;Method3(member\_); member\_ = value; }

Java example
------------

import com.demo.util.MyType; import com.demo.util.MyInterface; public enum Enum { VAL1, VAL2, VAL3 } public class Class implements MyInterface { public static final MyType member; private class InnerClass { public int zero() { return 0; } } <span class="citation" data-cites="Override">@Override</span> public MyType method() { return member; } public void method2(MyType value) { method(); value.method3(); member = value; } }

Simple mode that tries to handle C-like languages as well as it can. Takes two configuration parameters: `keywords`, an object whose property names are the keywords in the language, and `useCPP`, which determines whether C preprocessor directives are recognized.

**MIME types defined:** `text/x-csrc` (C code), `text/x-c++src` (C++ code), `text/x-java` (Java code), `text/x-csharp` (C\#).
