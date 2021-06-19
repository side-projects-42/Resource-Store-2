[LLVM Home](http://llvm.org/)

libc++ Info [About](/index.html)

Quick Links [cfe-dev](http://lists.cs.uiuc.edu/mailman/listinfo/cfe-dev) [cfe-commits](http://lists.cs.uiuc.edu/mailman/listinfo/cfe-commits) [Bug Reports](http://llvm.org/bugs/) [Browse SVN](http://llvm.org/svn/llvm-project/libcxx/trunk/) [Browse ViewVC](http://llvm.org/viewvc/llvm-project/libcxx/trunk/)

&lt;atomic&gt; design
=====================

There are currently 3 designs under consideration. They differ in where most of the implmentation work is done. The functionality exposed to the customer should be identical (and conforming) for all three designs.

1.  [Minimal work for the library](atomic_design_a.html)
2.  [Something in between](atomic_design_b.html)
3.  [Minimal work for the front end](atomic_design_c.html)

With any design, the (back end) compiler writer should note:

> The decision to implement lock-free operations on any given type (or not) is an ABI-binding decision. One can not change from treating a type as not lock free, to lock free (or vice-versa) without breaking your ABI.
>
> Example:
>
> >     TU1.cc
> >     -----------
> >     extern atomic<long long> A;
> >     int foo() { return A.compare_exchange_strong(w, x); }
> >
> >     TU2.cc
> >     -----------
> >     extern atomic<long long> A;
> >     void bar() { return A.compare_exchange_strong(y, z); }

If only *one* of these calls to `compare_exchange_strong` is implemented with mutex-locked code, then that mutex-locked code will not be executed mutually exclusively of the one implemented in a lock-free manner.
