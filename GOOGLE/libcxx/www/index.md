[LLVM Home](http://llvm.org/)

libc++ Info [About](/index.html)

Quick Links [cfe-dev](http://lists.cs.uiuc.edu/mailman/listinfo/cfe-dev) [cfe-commits](http://lists.cs.uiuc.edu/mailman/listinfo/cfe-commits) [Bug Reports](http://llvm.org/bugs/) [Browse SVN](http://llvm.org/svn/llvm-project/libcxx/trunk/) [Browse ViewVC](http://llvm.org/viewvc/llvm-project/libcxx/trunk/)

“libc++” C++ Standard Library
=============================

libc++ is a new implementation of the C++ standard library, targeting C++11.

All of the code in libc++ is [dual licensed](http://llvm.org/docs/DeveloperPolicy.html#license) under the MIT license and the UIUC License (a BSD-like license).

Features and Goals
------------------

-   Correctness as defined by the C++11 standard.
-   Fast execution.
-   Minimal memory use.
-   Fast compile times.
-   ABI compatibility with gcc’s libstdc++ for some low-level features such as exception objects, rtti and memory allocation.
-   Extensive unit tests.

Why a new C++ Standard Library for C++11?
-----------------------------------------

After its initial introduction, many people have asked “why start a new library instead of contributing to an existing library?” (like Apache’s libstdcxx, GNU’s libstdc++, STLport, etc). There are many contributing reasons, but some of the major ones are:

-   From years of experience (including having implemented the standard library before), we’ve learned many things about implementing the standard containers which require ABI breakage and fundamental changes to how they are implemented. For example, it is generally accepted that building std::string using the “short string optimization” instead of using Copy On Write (COW) is a superior approach for multicore machines (particularly in C++11, which has rvalue references). Breaking ABI compatibility with old versions of the library was determined to be critical to achieving the performance goals of libc++.

-   Mainline libstdc++ has switched to GPL3, a license which the developers of libc++ cannot use. libstdc++ 4.2 (the last GPL2 version) could be independently extended to support C++11, but this would be a fork of the codebase (which is often seen as worse for a project than starting a new independent one). Another problem with libstdc++ is that it is tightly integrated with G++ development, tending to be tied fairly closely to the matching version of G++.

-   STLport and the Apache libstdcxx library are two other popular candidates, but both lack C++11 support. Our experience (and the experience of libstdc++ developers) is that adding support for C++11 (in particular rvalue references and move-only types) requires changes to almost every class and function, essentially amounting to a rewrite. Faced with a rewrite, we decided to start from scratch and evaluate every design decision from first principles based on experience.

    Further, both projects are apparently abandoned: STLport 5.2.1 was released in Oct’08, and STDCXX 4.2.1 in May’08.

Platform Support
----------------

libc++ is known to work on the following platforms, using g++-4.2 and clang (lack of C++11 language support disables some functionality).

-   Mac OS X i386
-   Mac OS X x86\_64

Current Status
--------------

libc++ is a 100% complete C++11 implementation on Apple’s OS X.

Ports to other platforms are underway. Here are recent test results for [Windows](results.Windows.html) and [Linux](results.Linux.html).

Get it and get involved!
------------------------

First please review our [Developer’s Policy](http://llvm.org/docs/DeveloperPolicy.html).

To check out the code, use:

-   `svn co http://llvm.org/svn/llvm-project/libcxx/trunk libcxx`

On Mac OS 10.7 (Lion) and later, the easiest way to get this library is to install Xcode 4.2 or later. However if you want to install tip-of-trunk from here (getting the bleeding edge), read on. However, be warned that Mac OS 10.7 will not boot without a valid copy of `libc++.1.dylib` in `/usr/lib`.

Next:

-   `cd libcxx/lib`
-   `export TRIPLE=-apple-`
-   `./buildit`
-   `ln -sf libc++.1.dylib libc++.dylib`

That should result in a libc++.1.dylib and libc++.dylib. The safest thing to do is to use it from where your libcxx is installed instead of replacing these in your Mac OS.

To use your system-installed libc++ with clang you can:

-   `clang++ -stdlib=libc++ test.cpp`
-   `clang++ -std=c++11 -stdlib=libc++ test.cpp`

To use your tip-of-trunk libc++ on Mac OS with clang you can:

-   `export DYLD_LIBRARY_PATH=<path-to-libcxx>/lib`
-   `clang++ -std=c++11 -stdlib=libc++ -nostdinc++             -I<path-to-libcxx>/include -L<path-to-libcxx>/lib             test.cpp`

To run the libc++ test suite (recommended):

`cd libcxx/test`

`./testit`

-   You can alter the command line options `testit` uses with `export OPTIONS="whatever you need"`

### Notes

Building libc++ with `-fno-rtti` is not supported. However linking against it with `-fno-rtti` is supported.

Send discussions to the ([clang mailing list](http://lists.cs.uiuc.edu/mailman/listinfo/cfe-dev)).

Design Documents
----------------

-   [`<atomic>`](atomic_design.html)
-   [`<type_traits>`](type_traits_design.html)
-   [Excellent notes by Marshall Clow](http://marshall.calepin.co/llvmclang-and-standard-libraries-on-mac-os-x.html)
