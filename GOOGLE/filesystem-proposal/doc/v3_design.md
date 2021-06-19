<table><tbody><tr class="odd"><td><a href="../../../index.htm"><img src="../../../boost.png" alt="boost.png (6897 bytes)" width="300" height="86" /></a></td><td>Filesystem Version 3<br />
Design</td></tr></tbody></table>

<table><tbody><tr class="odd"><td><a href="index.htm">Filesystem Home</a>    <a href="release_history.html">Releases</a>    <a href="reference.html">Reference</a>    <a href="tutorial.html">Tutorial</a>    <a href="faq.htm">FAQ</a>    <a href="portability_guide.htm">Portability</a>    <a href="v3.html">V3 Intro</a>    <a href="v3_design.html">V3 Design</a>    <a href="deprecated.html">Deprecated</a>   </td></tr></tbody></table>

<table><tbody><tr class="odd"><td style="text-align: center;"><em><strong>Contents</strong></em></td></tr><tr class="even"><td style="text-align: center;"><a href="#Introduction">Introduction</a><br />
<a href="#Problem">Problem</a><br />
<a href="#Solution">Solution</a><br />
<a href="#Details">Details</a><br />
<a href="#Other-changes">Other changes</a><br />
<a href="#Acknowledgements">Acknowledgements</a></td></tr></tbody></table>

**Caution:** This page documents thinking early in the V3 development process, and is intended to serve historical purposes. It is not updated to reflect the current state of the library.

<span id="Introduction">Introduction</span>
-------------------------------------------

During the review of Boost.Filesystem.V2 (Internationalization), Peter Dimov suggested that the` basic_path` class template was unwieldy, and that a single path type that accommodated multiple character types and encodings would be more flexible. Although I wasn't willing to stop development at that time to explore how this idea might be implemented, or to break from the pattern for Internationalization used the C++ standard library, I've often thought about Peter's suggestion. With the advent of C++0x `char16_t` and `char32_t` character types, the `basic_path` class template approach becomes even more unwieldy, so it is time to revisit the problem in light of Peter's suggestion.

**<span id="Problem">Problem</span>**
-------------------------------------

With Filesystem.V2, a path argument to a user defined function that is to accommodate multiple character types and encodings must be written as a template. Do-the-right-thing overloads or template metaprogramming must be employed to allow arguments to be written as string literals. Here's what it looks like:

>     template<class Path>
>     void foo( const Path & p );
>
>     inline void foo( const path & p )
>     {
>       return foo<path>( p );
>     }
>     inline void foo( const wpath & p )
>     {
>       return foo<wpath>( p );
>     }

That's really ugly for such a simple need, and there would be a combinatorial explosion if the function took multiple Path arguments and each could be either narrow or wide. It gets even worse if the C++0x `char16_t` and ` char32_t` types are to be supported.

<span id="Solution">Solution</span>
-----------------------------------

Overview:

-   A single, non-template, `class path`.
-   Each member function is a template accommodating the various applicable character types, including user-defined character types.
-   Hold the path internally in a string of the type used by the operating system API; `std::string` for POSIX, `std::wstring` for Windows.

The signatures presented in [Problem](#Problem) collapse to simply:

>     void foo( const path & p );

That's a signification reduction in code complexity. Specification becomes simpler, too. I believe it will be far easier to teach, and result in much more flexible user code.

Other benefits:

-   All the polymorphism still occurs at compile time.
-   Efficiency is increased, in that conversions of the encoding, if required, only occur once at the time of creation, not each time the path is used.
-   The size of the implementation code drops approximately in half and becomes much more readable.

Possible problems:

-   The combination of member function templates and implicit constructors can result in unclear error messages when the user makes simple commonplace coding errors. This should be much less of a problem with C++ concepts, but in the meantime work continues to restrict over aggressive templates via enable\_if/disable\_if.

<span id="Details">Details</span>
---------------------------------

***Encoding*** ***Conversions***

***Host system***

***char string path arguments***

***wide string path arguments***

Systems with `char` as the native API path character type (i.e. POSIX-like systems)

No conversion.

Conversion occurs, performed by the current path locale's `codecvt` facet.

Systems with `wchar_t` as the native API path character type (i.e. Windows-like systems).

Conversion occurs, performed by the current path locale's `codecvt` facet.

No conversion.

When a class path function argument type matches the the operating system's API argument type for paths, no conversion is performed rather than conversion to a specified encoding such as one of the Unicode encodings. This avoids unintended consequences, etc.

<span id="Other-changes">Other changes</span>
---------------------------------------------

**Uniform hybrid error handling:** The hybrid error handling idiom has been consistently applied to all applicable functions.

<span id="Acknowledgements">Acknowledgements</span>
---------------------------------------------------

Peter Dimov suggested the idea of a single path class that could cope with multiple character types and encodings. Walter Landry contributed both the design and implementation of the copy\_any, copy\_directory, copy\_symlink, and read\_symlink functions.

------------------------------------------------------------------------

Revised 20 March, 2012

© Copyright Beman Dawes, 2008

Use, modification, and distribution are subject to the Boost Software License, Version 1.0. See [www.boost.org/LICENSE\_1\_0.txt](http://www.boost.org/LICENSE_1_0.txt)
