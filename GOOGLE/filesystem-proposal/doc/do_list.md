Boost Filesystem Do List 24 June 2010
=====================================

Beta 1 comments
---------------

-   Zach Laine:

>     The descriptions for portable_name() and portable_directory_name()
>     appear to be at odds.
>
>     portable_name() : ... && (name is "." or "..", and the first character
>     not a period or hyphen)
>
>     portable_directory_name(): ... && (name is "." or ".."  or contains no periods)
>
>     Should portable_name() be "... && (name is "." or "..", or contains no
>     periods) && (first character not a hyphen)"?  Maybe I'm missing
>     something?

-   Scott McMurray - treat as Wish List:

>     - uncomplete(p, base)
>
>     My pet request.  It may be useful to simplify other functions as well,
>     since there's no current way to go from an absolute path to a relative
>     one, meaning that most functions need to handle relative ones even
>     when that might not be natural.  With this functionality,
>     preconditions requiring absolute paths would be less onerous.
>
>        Precondition: p.is_absolute() && base.is_absolute()
>
>        Effects: Extracts a path, rp, from p relative to base such that
>     canonical(p) == complete(rp, base).  Any ".." path elements in rp form
>     a prefix.
>
>        Returns: The extracted path.
>
>        Postconditions: For the returned path, rp, rp.is_relative() ==
>     (p.root_name() == b.root_name()).
>
>     [Notes: This function simplifies paths by omitting context.  It is
>     particularly useful for serializing paths such that it can be usefully
>     moved between hosts where the context may be different, such as inside
>     source control trees.  It can also be helpful for display to users,
>     such as in shells where paths are often shown relative to $HOME.
>
>     In the presence of symlinks, the result of this function may differ
>     between implementations, as some may expand symlinks that others may
>     not.  The simplest implementation uses canonical to expand both p and
>     base, then removes the common prefix and prepends the requisite ".."
>     elements.  Smarter implementations will avoid expanding symlinks
>     unnecessarily.  No implementation is expected to discover new symlinks
>     to return paths with fewer elements.]

Docs
----

-   Reorganize files - delete examples that no longer apply.
-   Should minimal.css be changed to used relative font sizes? See [http://www.w3schools.com/CSS/pr\_font\_font-size.asp\\](http://www.w3schools.com/CSS/pr_font_font-size.asp/)
-   Document behavior of path::replace\_extension has change WRT argument w/o a dot.
-   Document leading //: no longer treated specially. But is that really correct?
-   Behavior of root\_path() has been changed. Change needs to be propagated to trunk?
-   Regenerate path decomposition table.

Code
----

### All

-   Move semantics.
-   Use BOOST\_DELETED, BOOST\_DEFAULTED, where appropriate.
-   Other C++0x features.

### Class path

-   Windows, POSIX, conversions for char16\_t, char32\_t for C++0x compilers.
-   Add Windows Alternate Data Stream test cases. See http://en.wikipedia.org/wiki/NTFS Features.
-   Add test case: relational operators on paths differing only in trailing separator. Rationale?
-   Provide the name check functions for more character types? Templatize? take a path argument?
-   Add codepage 936/950/etc test cases.
-   Should UDT’s be supported?
-   Should path iteration to a separator result in:  
    – the actual separator used  
    – the preferred separator  
    – the generic separator &lt;– makes it easier to write portable code  
    – a dot

### Operations

-   Would complete(), system\_complete() be clearer if renamed absolute(), absolute\_system() (or absolute\_native())?
-   Review all operations.cpp code for race conditions similar to \#2925. Fix or document.
-   Enable all BOOST\_FILESYSTEM\_NO\_DEPRECATED code.
-   rename and remove names are problems. If users says “using namespace boost::filesystem”  
    and some header included stdio, there is just too much chance of silent error.
-   create\_directories error handling needs work.
-   Fold convenience.hpp into operations.hpp
-   Two argument recursive\_directory\_iterator ctor isn’t recognizing throws(). Would it be better to fold into a single two argument ctor with default?
-   Add the push\_directory class from tools/release/required\_files.cpp

### Miscellaneous

-   *Regular* classes need hash functions.

------------------------------------------------------------------------

� Copyright Beman Dawes, 2010

Distributed under the Boost Software License, Version 1.0. See [www.boost.org/LICENSE\_1\_0.txt](http://www.boost.org/LICENSE_1_0.txt)
