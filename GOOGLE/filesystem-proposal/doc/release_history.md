<table><tbody><tr class="odd"><td><a href="../../../index.htm"><img src="../../../boost.png" alt="boost.png (6897 bytes)" width="300" height="86" /></a></td><td>Filesystem Release History</td></tr></tbody></table>

<table><tbody><tr class="odd"><td><a href="../../../index.htm">Boost Home</a>    <a href="index.htm">Library Home</a>    <a href="reference.html">Reference</a>    <a href="tutorial.html">Tutorial</a>    <a href="faq.htm">FAQ</a>    <a href="portability_guide.htm">Portability</a>    <a href="v3.html">V3 Intro</a>    <a href="v3_design.html">V3 Design</a>    <a href="deprecated.html">Deprecated</a>   </td></tr></tbody></table>

?
-

-   Class `path -` add C++11 "`=default`" special member functions where applicable.

-   Class `path -` add C++11 move construction and move assignment

-   Class `path -` Remove the permission to return either by const value or by const reference from observers, and always return by value. Eliminates subtle portability problems and bugs per discussion on the Boost mailing list and in the C++ committee's Library Working Group.

1.51.0
------

-   Add begin() and end() non-member functions for directory\_iterator and recursive\_directory\_iterator so that C++11 range-based for statements work. Suggested by feature requests [\#5896](https://svn.boost.org/trac/boost/ticket/5896) and [\#6521](https://svn.boost.org/trac/boost/ticket/6521), using the [\#5896](https://svn.boost.org/trac/boost/ticket/5896) approach.
-   Add range\_begin() and range\_end() non-member functions for directory\_iterator and recursive\_directory\_iterator so that [BOOST\_FOREACH](http://www.boost.org/libs/foreach/) works.
-   Fix a Linux fchmodat problem affecting symlink permissions reported during discussion of [\#6659](https://svn.boost.org/trac/boost/ticket/6659).
-   Fix [\#6659](https://svn.boost.org/trac/boost/ticket/6659) and [\#7051](https://svn.boost.org/trac/boost/ticket/7051), fchmodat supported only on Solaris 11. Fix for both Sun and GCC compilers.

1.50.0
------

-   Remove Filesystem Version 2 from the distribution. Version 3 is now the only distributed version. Those still using V2 are urged to migrate to V3 as soon as possible.
-   Add `constexpr value_type preferred_separator` to class path.
-   Fix [\#5118](https://svn.boost.org/trac/boost/ticket/5118), `replace_extension` doesn't work as specified in documentation. The documentation, implementation, and test cases have all had fixes applied. The documentation had failed to mention that any existing extension is removed. The behavior for simple cases has been reverted to the Version 2 behavior, but with corrections so that complex replacements now work. Two test cases from \#5118 have been added.
-   Fix [\#3737](http://svn.boost.org/trac/boost/ticket/3737), Boost.Filesystem does not compile on Windows Mobile. On Windows, &lt;sys/stat.h&gt; is no longer included.
-   Fix [\#4065](https://svn.boost.org/trac/boost/ticket/4065), Boost Filesystem lexicographic path comparison inconsistent. This required multiple source code bug fixes and code cleanup, correcting problems not related to lexicographical issues.
-   Add class path member function `compare` for consistency with std::string.
-   Tighten BOOST\_FILESYSTEM\_DYN\_LINK and BOOST\_FILESYSTEM\_STATIC\_LINK logic in filesystem/config.hpp so that one or the other is always defined, and both being defined is a \#error.
-   Fix [\#6690](http://svn.boost.org/trac/boost/ticket/6690) and [\#6737](http://svn.boost.org/trac/boost/ticket/6737), resolving static linking related problems with VC++ 8 through 11. Note that this fix may reintroduce codecvt thread safety problems [\#4889](http://svn.boost.org/trac/boost/ticket/4889), [\#6320](http://svn.boost.org/trac/boost/ticket/6320), for these compilers if static linking is used.
-   Add path::operator+= and concat functions to tack on things like suffixes or numbers. Suggested by Ed Smith-Rowland and others.
-   Fix [\#6809](http://svn.boost.org/trac/boost/ticket/6809), Implementation of filesystem::rename() method for MS Windows is wrong, by adding MOVEFILE\_COPY\_ALLOWED to deal with renames across drives, volumes, file systems. Fix has no effect on non-Windows systems.
-   Fix [\#6819](http://svn.boost.org/trac/boost/ticket/6819), A path operand with a source that was a one character array was treated as empty, even if it wasn't empty. Such arrays can occur in unions or in code using C variable length array idioms.
-   Fix [\#6932](http://svn.boost.org/trac/boost/ticket/6932), create\_directories throws exception even if error\_code is specified.

1.49.0
------

-   Fix [\#3714](https://svn.boost.org/trac/boost/ticket/3714), Added test cases and fixes for class path errors when assignment or append used self or portion of self as source.
-   Fix [\#4889](https://svn.boost.org/trac/boost/ticket/4889), [\#6320](https://svn.boost.org/trac/boost/ticket/6320), Locale codecvt\_facet not thread safe on Windows. Move Windows, Mac OS X, locale and codecvt facet back to namespace scope. POSIX except OS X uses local static initialization (IE lazy) to ensure exceptions are catchable if environmental variables are misconfigured and to avoid use of locale("") if not actually used.
-   Fix [\#5652](https://svn.boost.org/trac/boost/ticket/5652), recursive\_directory\_iterator fails on cyclic symbolic links. Thanks to Daniel Aarno for the patch.
-   Fix [\#5653](https://svn.boost.org/trac/boost/ticket/5653), recursive\_directory\_iterator(error\_code) can still throw filesystem\_error.
-   Fix [\#5900](https://svn.boost.org/trac/boost/ticket/5900), directory\_iterator access violation on Windows if error is thrown. Thanks to Andreas Eckleder for the patch.
-   Fix [\#5900 comment 2](https://svn.boost.org/trac/boost/ticket/5900#comment:2), a bug in director\_iterator construction with error\_code argument that caused increment to be called without the ec argument being passed.
-   Fix [\#5989](https://svn.boost.org/trac/boost/ticket/5900) by cleaning up test suite path\_test.cpp code even though the ticket itself was not a defect, and clarifying docs; iteration over a path yields generic format.
-   Fix [\#5592](https://svn.boost.org/trac/boost/ticket/5592), Change Windows codecvt processing from CP\_THREAD\_ACP to CP\_ACP.
-   Operations function fixes for PGI compiler, thanks to Noel Belcourt.
-   Relax permissions test to reflect reality, particularly on the Sandia test platforms.

1.48.0
------

-   Added operational function [canonical()](reference.html#canonical), suggested by David Svoboda, who also provided pseudo-code.
-   Added [hash\_value()](reference.html#hash_value) function for paths. (Daniel James)
-   Fix path inserter problem ([\#5764](https://svn.boost.org/trac/boost/ticket/5764)) reported for QNX6.3.2 host (gcc-3.3.5)
-   Fix problem of locale("") exception being thrown before main() starts on poorly configured (e.g. LANG="bad name") POSIX systems. Resolves the most serious aspect of tickets [\#4688](https://svn.boost.org/trac/boost/ticket/4688), [\#5100](https://svn.boost.org/trac/boost/ticket/5100), [\#5289](https://svn.boost.org/trac/boost/ticket/5289).

1.47.0
------

-   Program file\_status.cpp added (V3). See boost-root/libs/filesystem/v3/example. Useful both as an example and to explore how Boost.Filesystem treats various status errors.  Run "bjam" (NOT "bjam install") in the example directory to install in example/bin.

1.46.1
------

-   Fix fstream problem for STLPort masquerading as Dinkumware ([\#5217](https://svn.boost.org/trac/boost/ticket/5217)).

1.46.0
------

-   Version 3 of the library is now the default.
-   IBM vacpp: Workaround for compiler bug affecting iterator\_facade. ([\#4912](https://svn.boost.org/trac/boost/ticket/4912))
-   Verify, clarify, document that &lt;boost/config/user.hpp&gt; can be used to specify BOOST\_FILESYSTEM\_VERSION. ([\#4891](https://svn.boost.org/trac/boost/ticket/4891))
-   Replaced C-style assert with BOOST\_ASSERT.
-   Undeprecated unique\_path(). Instead, add a note mentioning the workaround for lack of thread safety and possible change to cwd. unique\_path() is just too convenient to deprecate!
-   Cleared several GCC warnings.
-   Changed V2 code to use BOOST\_THROW\_EXCEPTION.
-   Windows: Fix status() to report non-symlink reparse point correctly.
-   Add `symlink_option` to `recursive_directory_iterator`, allowing control over recursion into directory symlinks. Note that the default is changed to not recurse into directory symlinks.
-   [Reference](reference.html) documentation cleanup, including fixing missing and broken links, and adding missing functions.
-   Miscellaneous implementation code cleanup.

------------------------------------------------------------------------

Revised 17 July, 2012

� Copyright Beman Dawes, 2011

Use, modification, and distribution are subject to the Boost Software License, Version 1.0. See [www.boost.org/LICENSE\_1\_0.txt](http://www.boost.org/LICENSE_1_0.txt)
