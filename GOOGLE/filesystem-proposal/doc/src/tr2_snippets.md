$id frontmatter=

<table><tbody><tr class="odd"><td>Document number:  </td><td><span style="background-color: #ffff99">D3461=12-0151</span></td></tr><tr class="even"><td>Date:</td><td>2012-10-15</td></tr><tr class="odd"><td>Project:</td><td>Programming Language C++</td></tr><tr class="even"><td>Reply-to:</td><td>Beman Dawes &lt;bdawes at acm dot org&gt;</td></tr></tbody></table>

Filesystem Library Proposal (Revision 4) <span style="background-color: #ffff99">DRAFT</span>
=============================================================================================

[Introduction](#Introduction)  
[Library background](#Library-background)  
[Differences from Boost Filesystem](#Differences-Boost)  
[Revision history](#Revision-history)  
[TODO](#TODO)  
[Proposed Wording Table of Contents](#TOC)  
[Proposed Wording](#Proposed-Wording)  
[Acknowledgements](#Acknowledgements)  
[References](#References)

<span id="Introduction">Introduction</span>
-------------------------------------------

This paper proposes a filesystem library component suitable for a *C++ Standard Library Technical Specification* or for the *C++ Standard Library*. The proposed library is based on the [Boost Filesystem Library](http://www.boost.org/libs/filesystem), version 3. Proposed wording is provided. A [TODO](#TODO) list identifies remaining work to be done.

The proposal is a pure addition; no existing standard library headers are modified.  No existing code is broken by this proposal, assuming the usual namespace discipline caveats. No special compiler or runtime support is required, although C++11 features are used where appropriate. The entire library is in a namespace within namespace `std`.

<span id="Library-background">Library background</span>
-------------------------------------------------------

The Boost version of the library has been in widespread use for ten years. The Dinkumware version of the library, based on [N1975](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2006/n1975.html) (equivalent to version 2 of the Boost library), ships with Microsoft Visual C++ 2012.

The motivation and scope for a filesystem library were described in [N1975](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2006/n1975.html), and are not repeated here.

<span id="Differences-Boost">Differences from Boost Filesystem</span>
---------------------------------------------------------------------

In the Boost library, class `path` has facilities to handle narrow (i.e. `char`) character strings with encodings other than the operating system's native encoding. These facilities have been removed from the Filesystem library proposal. Instead, proposal [N3398, String Interoperation Library](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2012/n3398.html), provides general facilities that also handle the class `path` use cases.

Otherwise, the proposal is very similar to the Boost library. Indeed, the proposed wording is generated from the same source as the Boost library's reference documentation.

<span id="Revision-history">Revision history</span>
---------------------------------------------------

<span style="background-color: #ffff99">Nxxxx</span><span style="background-color: #ffff99">=12-xxxx</span>, Filesystem Library Proposal (Revision 4). Changes include:

-   Editorial: corrections reported by Jens Maurer.
-   Editorial: cleanup of operating system references.
-   Editorial: change document HTML encoding to `charset=utf-8`.
-   Reintroduce `codecvt` facilities to class `path`;  relatively minimal compared to the Boost design, touching far fewer signatures, avoiding locale dependencies, and providing explicit support for UTF-8. Provide UTF-8 conversion example.
-   Add `operator string_type() const;` to class `path`. Microsoft and Dinkumware are already shipping this in their implementations. It provides a reasonable level of interoperation with standard library file steam constructors and opens without modifying existing standard library classes or headers.

[N3399=12-0089](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2012/n3399.html), Filesystem Library Proposal (Revision 3). Changes include:

-   Numerous corrections and improvements to the standardese of the proposed wording, based on comments and suggestions from the Filesystem Study Group, particularly Daniel Krügler and Robert Stewart.
-   Add `path::operator+=` and `concat` functions to tack on things like suffixes or numbers. Suggested by Ed Smith-Rowland and others.
-   Add section tags and section numbers, per LWG discussion in Kona.
-   Minimize use of trademarked names. Enclose uses in green highlighted boxes to facilitate discussion. Apply footnote required by ISO/IEC directives.
-   Introduce a definition for "operating system dependent", and then use it to replace "implementation defined behavior" wherever the operating system's rules determine behavior.
-   Replace uses of  const string return types with non-const string return types, per LWG discussion in Kona.
-   Remove permission for implementations to return const string& in certain cases, per LWG discussion in Kona.
-   Remove path inserter and extractor dependency on Boost quoted manip (Issue 7).
-   Replace use of `time_t` with `file_time_type`, a typedef for `std::chrono::system_clock::time_point`, per LWG discussion in Kona.
-   More consistent semantics and descriptions for return values from operational functions with `error_code&` arguments that encounter an error.
-   `recursive_directory_iterator` specifications are now given in terms of behavior only. Private "for exposition only" members have been removed.
-   `recursive_directory_iterator` functions ` no_push_pending()` and `no_push()` have been renamed ` recursion_pending()` and `disable_recursion_pending()`. Option constant name `recurse` has been renamed ` follow_directory_symlinks`.  These are responses to a request from Ed Smith-Rowland to improve clarity by reducing negative logic.
-   A `recursive_directory_iterator` option ` skip_permission_denied` has been added to skip directories with permission denied, responding to several user requests.
-   `symlink_option` has been renamed ` directory_options`, since it has become more general and now covers both `follow_directory_symlinks` and `skip_permission_denied` options. 
-   Add missing semantics for `copy_directory`.
-   Change template parameters for `path::string` and `path::generic_string` to the same as `std::basic_string` in response to comments from the FSG.
-   Remove `initial_path()` operational function. The functionality as currently specified is trivial for a user to duplicate using ` current_path()`. The original spec for `initial_path()` required support from the runtime library. That doesn't appear to be practical, and without it the motivation for the function is too weak for standardization.
-   Remove required changes to `<fstream>` header. The LWG does not wish to require modifications existing headers. Also, the Dinkumware/Microsoft version of the library has come up with a clever way to make class `path` work with the existing `<fstream>` classes constructors and open functions.
-   Remove `directory_entry` as a `Source` in \[path.req\]. It was Boost specific and is inappropriate for the standard library.
-   Change name of `recursive_directory_iterator::level()` to ` depth()`.
-   Change `enum file_type` to `enum class file_type`, simplify constant names, supply explicit values for constant names; per FSG discussions.
-   Change name of `copy_directory` function to ` create_directory` to more clearly reflect semantics per FSG discussions.
-   Major upgrade to `copy_options` in response to FSG discussions..
-   Major functionality upgrades to `copy()`and ` file_copy()` per FSG discussions.
-   Add path member function `replace_filename()`, suggested by Robert Stewart and others.
-   Add C++11 features to both the proposal and the Boost implementation and test suite:
    -   R-value reference move semantics.
    -   `noexcept`.
    -   `constexpr`.
    -   Scoped enums.
    -   Range-based for statement support.
    -   New character types.
    -   Replace explicit codecvt manipulation with a reference to `<cuchar>` conversion facilities.

[N3365=12-0055](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2012/n3365.html), Filesystem Library Proposal (Revision 2). Changes include:

-   Namespaces changed to `std::tbd::filesystem` per discussion in Kona.
-   Removed references to Boost within the proposed wording.
-   Minor fixes to the proposed wording.
-   Added Issue 7: How should class path inserter and extractor be specified?
-   Marked up all issues to reflect Kona LWG discussions.

[N3335=12-0025](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2012/n3335.html), Filesystem Library for C++11/TR2 (Revision 1). Changes include:

-   Regenerated the proposed wording from the Boost Filesystem library reference documentation, using an automated process. This process reduces the likelihood of inadvertent discrepancies between descriptions.
-   An Issues list was added, seeded with issues raised by the LWG review of N3239 at the Bloomington meeting, and private communications from LWG members.
-   Namespace changed to `files` as an experiment. Made this issue number 1 so the LWG can pass judgment.
-   New functions were added, suggested by David Svoboda, to generate canonical paths and manage permissions.
-   More C++11 functionality was applied. This process is still incomplete, however.
-   Added proposed changes to header &lt;fstream&gt;. The previous paper had inadvertently supplied the wrong wording.
-   Continued the general cleanup of wording.

[N3239 = 11-0009](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2011/n3239.html), Filesystem Library Update for TR2 (Preliminary), reflected changes made to the Boost library version 3 since the previously accepted committee paper:

-   A single class `path` handles all aspects of internationalization, replacing the previous template and its `path` and `wpath` instantiations. Character types `char`, `wchar_t`, `char16_t`, and `char32_t` are supported. This is a major simplification of the path abstraction, particularly for functions that take path arguments. This change was based on a suggestion by Peter Dimov.
-   Several operational functions have been added, including much better symlink support, the ability to resize a file, and the ability to generate a unique path.
-   Support for error reporting via `error_code` is now uniform throughout the operations functions.
-   Several functions have been renamed, based on feedback from users.

[N1975 = 06-0045](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2006/n1975.html), Filesystem Library Proposal for TR2 (Revision 3), was adopted by the committee in April, 2006, at the Berlin meeting. Shortly afterward the Library Working Group set aside work on TR2 to concentrate on C++0x.

<span id="TODO">TODO</span>
---------------------------

-   At Portland meeting, review trademarked names with Filesystem Study Group and project editor.
-   Ion Todirel suggests "Would be nice if path::append was variadic, to improve usability".
-   Ion Todirel: Would be nice to have a make\_relative. Need to review similar suggestions.
-   Dinkumware/Microsoft report slightly different results for Decomposition table. Rerun table. Check discrepancies.
-   Review Nick Stoughton's email for suggestions, action items.
-   Review Filesystem Study Group reflector messages for unresolved comments, particularly in the area of Permissions.
-   Review and resolve any pending issues in the GitHub issues list.

Proposed Wording <span id="TOC">Table of Contents</span>
--------------------------------------------------------

[1 Filesystem Library](#Filesystem%20Library)  
[1.1 Definitions](#Definitions)  
   [1.1.1 absolute path](#Absolute-path)  
   [1.1.2 canonical path](#canonical-path)  
   [1.1.3 directory](#directory)  
   [1.1.4 file](#file)  
   [1.1.5 file system](#file-system)  
   [1.1.6 file system race](#file-system-race)  
   [1.1.7 filename](#filename)  
   [1.1.8 hard link](#hard-link)  
   [1.1.9 link](#link)  
   [1.1.10 native pathname format](#fs.def.native)  
   [1.1.11 NTCTS](#NTCTS)  
   [1.1.12 operating system dependent behavior](#operating%20system%20dependent)  
   [1.1.13 parent directory](#fs.def.parent)  
   [1.1.14 path](#path)  
   [1.1.15 pathname](#fs.def.pathname)  
   [1.1.16 pathname resolution](#fs.def.pathres)  
   [1.1.17 relative path](#Relative-path)  
   [1.1.18 symbolic link](#symbolic-link)  
[1.2 Conformance](#Conformance)  
   [1.2.1 ISO/IEC 9945 conformance](#fs.conform.9945)  
   [1.2.2 Operating system dependent behavior conformance](#fs.conform.os)  
[1.3 Requirements](#fs.req)  
[1.4 Header `<filesystem>` synopsis](#Header-filesystem-synopsis)  
[1.5 Error reporting](#Error-reporting)  
[1.6 Class `path`](#class-path)  
   [1.6.1 Generic pathname format grammar](#path.generic)  
   [1.6.2 `path` conversions](#path-Conversions)  
      [1.6.2.1 `path` argument format conversions](#path-Conversions-to-native-format)  
      [1.6.2.2 `path` type and encoding conversions](#path.arg.convert)  
   [1.6.3 `path` Requirements](#path-Requirements)  
   [1.6.4 `path` constructors](#path-constructors)  
   [1.6.5 `path` assignments](#path-assignments)  
   [1.6.6 `path` appends](#path-appends)  
   [1.6.7 `path` concatenation](#path-concatenation)  
   [1.6.8 `path` modifiers](#path-modifiers)  
   [1.6.9 `path` native format observers](#path-native-format-observers)  
   [1.6.10 `path` generic format observers](#path-generic-format-observers)  
   [1.6.11 `path` compare](#path-compare)  
   [1.6.12 `path` decomposition](#path-decomposition)  
   [1.6.13 `path` query](#path-query)  
   [1.6.14 `path` iterators](#path-iterators)  
   [1.6.15 `path` non-member functions](#path-non-member-functions)  
   [1.6.16 `path` inserter and extractor](#path-inserter-extractor)  
[1.7 Class `filesystem_error`](#Class-filesystem_error)  
   [1.7.1 `filesystem_error` members](#filesystem_error-members)  
[1.8 Enum class file\_type](#Enum-file_type)  
[1.9 Enum class copy\_options](#enum.copy_options)  
[1.10 Enum perms](#Enum-perms)  
[1.11 Class file\_status](#file_status)  
   [1.11.1 `file_status` constructors](#file_status-constructors)  
   [1.11.2 `file_status` observers](#file_status-observers)  
   [1.11.3 `file_status` modifiers](#file_status-modifiers)  
[1.12 Class `directory_entry`](#Class-directory_entry)  
   [1.12.1 `directory_entry ` constructors](#directory_entry-constructors)  
   [1.12.2 `directory_entry ` modifiers](#directory_entry-modifiers)  
   [1.12.3 `directory_entry` observers](#directory_entry-observers)  
[1.13 Class `directory_iterator`](#Class-directory_iterator)  
   [1.13.1 `directory_iterator` members](#directory_iterator-members)  
   [1.13.2 ` directory_iterator` non-member functions](#directory_iterator-non-member-functions)  
[1.14 Class ` recursive_directory_iterator`](#Class-recursive_directory_iterator)  
   [1.14.1 ` recursive_directory_iterator` members](#directory_iterator-members)  
   [1.14.2 `recursive_directory_iterator` non-member functions](#rec.dir.itr.nonmembers)  
[1.15 Operational functions](#Operational-functions)  

<span id="Proposed-Wording">Proposed Wording</span>
---------------------------------------------------

Gray-shaded italic text is commentary on the proposal. It is not to be added to the working paper.

Green shaded text in rectangular boxes calls attention to examples and notes intended to illuminate differences in behavior between operating systems. Trademarked names are used, as permitted by [ISO/IEC Directives](#ISO-Drafting), Part2, section 6.6.3 *Use of trade names and trademarks*. It is the belief of the proposal author that these examples and notes add considerable clarity, and should be retained.

<span style="font-style: italic; background-color: #e0e0e0">Start of proposed wording:</span>

<span id="Filesystem Library">Filesystem Library</span> \[filesystem\]
======================================================================

This clause describes components that perform operations on file systems and their components, such as paths, regular files, and directories.

ISO/IEC 9945 contains provisions which, through referenced in this text, constitute provisions of this clause. At the time of publication, the editions indicated were valid. All standards are subject to revision, and parties to agreements based on this clause are encouraged to investigate the possibility of applying the most recent editions of the standard indicated below. Members of IEC and ISO maintain registers of currently valid International Standards.

-   ISO/IEC 9945:2003, *Portable Operating System Interface (POSIX*®*), part 1 (Base Definitions) and part 2 (System Interfaces)*, both as corrected by their respective 2004 Correction 1 documents.

This clause mentions commercially available operating systems for purposes of exposition. <sup>[\[footnote\]](#footnote)</sup>

*<span style="background-color: #e0e0e0">This footnote is required by ISO/IEC Directives, Part2, section 6.6.3 Use of trade names and trademarks:</span>*

<sup>\[<span id="footnote">footnote</span>\]</sup> POSIX® is a registered trademark of The IEEE. MAC OS® is a registered trademark of Apple Inc. Windows® is a registered trademark of Microsoft Corporation. This information is given for the convenience of users of this document and does not constitute an endorsement by ISO or IEC of these products.

<span style="background-color: #e0e0e0">*End of footnote.*</span>

$endid $id wording\_suffix=

<span style="font-style: italic; background-color: #e0e0e0">End of Proposed wording.</span>

------------------------------------------------------------------------

$endid $id backmatter= $endid
