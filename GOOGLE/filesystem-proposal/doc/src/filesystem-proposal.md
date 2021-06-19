<table><tbody><tr class="odd"><td>Document number:  </td><td><span style="background-color: #FFFF99">D3461=12-0151</span></td></tr><tr class="even"><td>Date:</td><td>2012-10-15</td></tr><tr class="odd"><td>Project:</td><td>Programming Language C++</td></tr><tr class="even"><td>Reply-to:</td><td>Beman Dawes &lt;bdawes at acm dot org&gt;</td></tr></tbody></table>

Filesystem Library Proposal (Revision 4) <span style="background-color: #FFFF99">DRAFT</span>
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

<span style="background-color: #FFFF99">Nxxxx</span><span style="background-color: #FFFF99">=12-xxxx</span>, Filesystem Library Proposal (Revision 4). Changes include:

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
-   `recursive_directory_iterator` functions `   no_push_pending()` and `no_push()` have been renamed `   recursion_pending()` and `disable_recursion_pending()`. Option constant name `recurse` has been renamed `   follow_directory_symlinks`.  These are responses to a request from Ed Smith-Rowland to improve clarity by reducing negative logic.
-   A `recursive_directory_iterator` option `   skip_permission_denied` has been added to skip directories with permission denied, responding to several user requests.
-   `symlink_option` has been renamed `   directory_options`, since it has become more general and now covers both `follow_directory_symlinks` and `skip_permission_denied` options. 
-   Add missing semantics for `copy_directory`.
-   Change template parameters for `path::string` and `path::generic_string` to the same as `std::basic_string` in response to comments from the FSG.
-   Remove `initial_path()` operational function. The functionality as currently specified is trivial for a user to duplicate using `   current_path()`. The original spec for `initial_path()` required support from the runtime library. That doesn't appear to be practical, and without it the motivation for the function is too weak for standardization.
-   Remove required changes to `<fstream>` header. The LWG does not wish to require modifications existing headers. Also, the Dinkumware/Microsoft version of the library has come up with a clever way to make class `path` work with the existing `<fstream>` classes constructors and open functions.
-   Remove `directory_entry` as a `Source` in \[path.req\]. It was Boost specific and is inappropriate for the standard library.
-   Change name of `recursive_directory_iterator::level()` to `   depth()`.
-   Change `enum file_type` to `enum class file_type`, simplify constant names, supply explicit values for constant names; per FSG discussions.
-   Change name of `copy_directory` function to `   create_directory` to more clearly reflect semantics per FSG discussions.
-   Major upgrade to `copy_options` in response to FSG discussions..
-   Major functionality upgrades to `copy()`and `   file_copy()` per FSG discussions.
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

<span style="font-style: italic; background-color: #E0E0E0">Start of proposed wording:</span>

1 <span id="Filesystem Library">Filesystem Library</span> \[filesystem\]
========================================================================

This clause describes components that perform operations on file systems and their components, such as paths, regular files, and directories.

ISO/IEC 9945 contains provisions which, through referenced in this text, constitute provisions of this clause. At the time of publication, the editions indicated were valid. All standards are subject to revision, and parties to agreements based on this clause are encouraged to investigate the possibility of applying the most recent editions of the standard indicated below. Members of IEC and ISO maintain registers of currently valid International Standards.

-   ISO/IEC 9945:2003, *Portable Operating System Interface (POSIX*®*), part 1 (Base Definitions) and part 2 (System Interfaces)*, both as corrected by their respective 2004 Correction 1 documents.

This clause mentions commercially available operating systems for purposes of exposition. <sup>[\[footnote\]](#footnote)</sup>

*<span style="background-color: #E0E0E0">This footnote is required by ISO/IEC Directives, Part2, section 6.6.3 Use of trade names and trademarks:</span>*

<sup>\[<span id="footnote">footnote</span>\]</sup> POSIX® is a registered trademark of The IEEE. MAC OS® is a registered trademark of Apple Inc. Windows® is a registered trademark of Microsoft Corporation. This information is given for the convenience of users of this document and does not constitute an endorsement by ISO or IEC of these products.

<span style="background-color: #E0E0E0">*End of footnote.*</span>

1.1 <span id="Definitions">Definitions</span> \[fs.definitions\]
----------------------------------------------------------------

The following definitions shall apply throughout this clause:

### 1.1.1 <span id="Absolute-path">absolute path</span> \[fs.def.absolute-path\]

A path that unambiguously identifies the location of a file without reference to an additional starting location. The elements of a path that determine if it is absolute are operating system dependent.

### 1.1.2 <span id="canonical-path">canonical path</span> \[fs.def.cannonical-path\]

An absolute path that has no elements that are symbolic links, and no dot or dot-dot elements (\[[path.generic](#path.generic)\]).

### 1.1.3 <span id="directory">directory</span> \[fs.def.directory\]

A file within a file system that acts as a container of directory entries that contain information about other files, possibly including other directory files.

### 1.1.4 <span id="file">file</span> \[fs.def.file\]

An object within a file system that holds user or system data. Files can be written to, or read from, or both. A file has certain attributes, including type. File types include regular files and directories. Other types of files, such as symbolic links, may be supported by the implementation.

### 1.1.5 <span id="file-system">file system</span> \[fs.def.filesystem\]

A collection of files and certain of their attributes.

### 1.1.6 <span id="file-system-race">file system race</span> \[fs.def.race\]

The condition that occurs when multiple threads, processes, or computers interleave access and modification of the same object within a file system.

### 1.1.7 <span id="filename">filename</span> \[fs.def.filename\]

The name of a file. Filenames dot  and dot-dot  have special meaning. The following characteristics of filenames are operating system dependent:

-   The permitted characters. \[*Example*: Some operating systems prohibit the ASCII control characters (0x00-0x1F) in filenames. *--end example*\].

-   Filenames that are not permitted.

-   Filenames that have special meaning.

-   Case awareness and sensitivity during path resolution.

-   Special rules that may apply to file types other than regular files, such as directories.

### 1.1.8 <span id="hard-link">hard link</span> \[fs.def.hardlink\]

A link (\[fs.def.link\]) to an existing file. Some file systems support multiple hard links to a file. If the last hard link to a file is removed, the file itself is removed.

> \[*Note:* A hard link can be thought of as a shared-ownership smart pointer to a file. *-- end note*\]

### 1.1.9 <span id="link">link</span> \[fs.def.link\]

A directory entry object that associates a filename with a file. A link is either a hard link (\[fs.def.hardlink\]) or a symbolic link (\[fs.def.symlink\]).

### 1.1.10 native pathname format \[<span id="fs.def.native">fs.def.native</span>\]

The operating system dependent pathname format accepted by the host operating system.

### 1.1.11 <span id="NTCTS">NTCTS</span> \[<span id="fs.def.ntcts">fs.def.ntcts</span>\]

Acronym for "null-terminated character-type sequence". Describes a sequence of values of a given encoded character type terminated by that type's null character. If the encoded character type is `charT`, the null character can be constructed by `charT()`. <span style="background-color: #E0E0E0">*This is an expansion of the definition in chapter 17; that definition is very hard to parse. A request for clarification has been sent to the project editor.*</span>

### 1.1.12 <span id="operating system dependent">operating system dependent</span> behavior \[fs.def.osdep\]

Behavior that is dependent upon the behavior and characteristics of an operating system. See \[fs.conform.os\].

### 1.1.13 parent directory \[<span id="fs.def.parent">fs.def.parent</span>\]

When discussing a given directory, the directory that both contains a directory entry for the given directory and is represented by the pathname dot-dot in the given directory.

When discussing other types of files, a directory containing a directory entry for the file under discussion.

This concept does not apply to dot and dot-dot.

### 1.1.14 <span id="path">path</span> \[fs.def.path\]

A sequence of elements that identify the location of a file within a filesystem. The elements are the *root-name<sub>opt</sub>*, *root-directory<sub>opt</sub>*, and an optional sequence of filenames.

### 1.1.15 pathname \[<span id="fs.def.pathname">fs.def.pathname</span>\]

A character string that represents the name of a path. Pathnames are formatted according to the generic pathname format grammar (\[[path.generic](#path.generic)\]) or an operating system dependent native pathname format.

### 1.1.16 pathname resolution \[<span id="fs.def.pathres">fs.def.pathres</span>\]

Pathname resolution is the operating system dependent mechanism for resolving a pathname to a particular file in a file hierarchy. There may be multiple pathnames that resolve to the same file.  \[*Example:* The ISO/IEC 9945 POSIX standard specifies the mechanism in section 4.11, Pathname resolution. *--end example\]*

### 1.1.17 <span id="Relative-path">relative path</span> \[fs.def.relative-path\]

A path that is not absolute, and so only unambiguously identifies the location of a file when resolved relative to an implied starting location. The elements of a path that determine if it is relative are operating system dependent.  \[*Note:* Paths `"."` and `".."` are relative paths. *--end note*\]

### 1.1.18 <span id="symbolic-link">symbolic link</span> \[fs.def.symlink\]

A link (\[fs.def.link\]) with the property that when the file is encountered during pathname resolution, a string stored by the file is used to modify the pathname resolution.

> \[*Note:* Symbolic links are often called symlinks. A symbolic link can be thought of as a raw pointer to a file. If the file pointed to does not exist, the symbolic link is said to be a "dangling" symbolic link. *-- end note*\]

1.2 <span id="Conformance">Conformance</span> \[fs.conformance\]
----------------------------------------------------------------

### 1.2.1 ISO/IEC 9945 conformance \[<span id="fs.conform.9945">fs.conform.9945</span>\]

Some behavior is specified by reference to ISO/IEC 9945. How such behavior is actually implemented is unspecified.

> \[*Note:* This constitutes an "as if" rule allowing implementations to call native operating system or other API's. *--end note*\]

Implementations are encouraged to provide such behavior as it is defined by ISO/IEC 9945. Implementations shall document any behavior that differs from the behavior defined by ISO/IEC 9945. Implementations that do not support exact ISO/IEC 9945 behavior are encouraged to provide behavior as close to ISO/IEC 9945 behavior as is reasonable given the limitations of actual operating systems and file systems. If an implementation cannot provide any reasonable behavior, the implementation shall report an error in an implementation-defined manner.

> \[*Note:* Such errors might be reported by an \#error directive, a ` static_assert`, a `filesystem_error` exception, a special return value, or some other manner. *--end note*\]

Implementations are not required to provide behavior that is not supported by a particular file system.

> \[*Example:* The [FAT file system](http://en.wikipedia.org/wiki/FAT_filesystem) used by some memory cards, camera memory, and floppy discs does not support hard links, symlinks, and many other features of more capable file systems, so implementations are not required to support those features on the FAT file system. *-- end example*\]

The behavior of functions described in this clause may differ from their specification in the presence of [file system races](#file-system-race) (\[fs.def.race\]). No diagnostic is required.

If the possibility of a file system race would make it unreliable for a program to test for a precondition before calling a function described herein, *Requires* is not specified for the function.

> \[*Note:* As a design practice, preconditions are not specified when it is unreasonable for a program to detect them prior to calling the function. *-- end note*\]

### 1.2.2 Operating system dependent behavior conformance \[<span id="fs.conform.os">fs.conform.os</span>\]

Some behavior is specified as being operating system dependent (\[fs.def.osdep\]). The operating system an implementation is dependent upon is implementation defined.

It is permissible for an implementation to be dependent upon an operating system emulator rather than the actual underlying operating system.

1.3 Requirements \[<span id="fs.req">fs.req</span>\]
----------------------------------------------------

Throughout this clause, `char`, `wchar_t`, `char16_t`, and `char32_t` are collectively called *encoded character types*.

Template parameters named `charT` shall be one of the encoded character types.

Template parameters named `InputIterator` shall meet the C++ standard library input iterator requirements (\[input.iterators\]) and shall have a value type that is one of the encoded character types.

> \[*Note:* Use of an encoded character type implies an associated encoding. Since `signed char` and `unsigned char` have no implied encoding, they are not included as permitted types. *--end note*\]
>
> <span style="background-color: #E0E0E0">*To permit UDT types would require providing a way to specify type and encoding conversion mechanisms. That might be worth considering in the future if some form of a String Interoperability proposal is accepted, but as it stands now would involve exposing numerous implementation details so is not proposed here.*</span>

1.4 <span id="Header-filesystem-synopsis">Header `<filesystem>` synopsis</span> \[filesystem.synopsis\]
-------------------------------------------------------------------------------------------------------

    namespace std { namespace tbd { namespace filesystem {

        class path;
        
        void swap(path& lhs, path& rhs) noexcept;
        size_t hash_value(const path& p) noexcept;

        bool operator==(const path& lhs, const path& rhs) noexcept;
        bool operator!=(const path& lhs, const path& rhs) noexcept;
        bool operator< (const path& lhs, const path& rhs) noexcept;
        bool operator<=(const path& lhs, const path& rhs) noexcept;
        bool operator> (const path& lhs, const path& rhs) noexcept;
        bool operator>=(const path& lhs, const path& rhs) noexcept;

        path operator/ (const path& lhs, const path& rhs);

        template <class charT, class traits>
        basic_ostream<charT, traits>&
        operator<<(basic_ostream<charT, traits>& os, const path& p);

        template <class charT, class traits>
        basic_istream<charT, traits>&
        operator>>(basic_istream<charT, traits>& is, path& p);

        path::codecvt_type* native() noexcept;
        path::codecvt_type* utf8() noexcept;

        class filesystem_error;      
        class directory_entry;

        class directory_iterator;

        // enable c++11 range-based for statements
        const directory_iterator& begin(const directory_iterator& iter) noexcept;
        directory_iterator end(const directory_iterator&) noexcept;

        class recursive_directory_iterator;

        // enable c++11 range-based for statements
        const recursive_directory_iterator& begin(const recursive_directory_iterator& iter) noexcept;
        recursive_directory_iterator end(const recursive_directory_iterator&) noexcept;

        enum class file_type;  // [enum.file_type]

        enum perms
        {
          no_perms,
          owner_read, owner_write, owner_exe, owner_all,
          group_read, group_write, group_exe, group_all,
          others_read, others_write, others_exe, others_all, all_all,
          set_uid_on_exe, set_gid_on_exe, sticky_bit,
          perms_mask, perms_not_known,
          add_perms, remove_perms, symlink_perms
        };

        class file_status;

        struct space_info  // returned by space function
        {
          uintmax_t capacity;
          uintmax_t free; 
          uintmax_t available; // free space available to a non-privileged process
        };

        enum class copy_options;  // [enum.copy_options]

        enum class directory_options
        {
          none,
          follow_directory_symlink,
          skip_permission_denied
        };

        typedef chrono::time_point<unspecified-trivial-clock>  file_time_type;

        // operational functions

        path         absolute(const path& p, const path& base=current_path());

        path         canonical(const path& p, const path& base = current_path());
        path         canonical(const path& p, error_code& ec);
        path         canonical(const path& p, const path& base, error_code& ec);

        void         copy(const path& from, const path& to);
        void         copy(const path& from, const path& to, error_code& ec) noexcept;

        void         copy_file(const path& from, const path& to);
        void         copy_file(const path& from, const path& to, error_code& ec) noexcept;
        void         copy_file(const path& from, const path& to, copy_options option);
        void         copy_file(const path& from, const path& to, copy_options option,
                               error_code& ec) noexcept;

        void         copy_symlink(const path& existing_symlink, const path& new_symlink);
        void         copy_symlink(const path& existing_symlink, const path& new_symlink,
                                  error_code& ec) noexcept;

        bool         create_directories(const path& p);
        bool         create_directories(const path& p, error_code& ec) noexcept;

        bool         create_directory(const path& p);
        bool         create_directory(const path& p, error_code& ec) noexcept;

        void         create_directory(const path& p, const path& attributes);
        void         create_directory(const path& p, const path& attributes, error_code& ec) noexcept;

        void         create_directory_symlink(const path& to, const path& new_symlink);
        void         create_directory_symlink(const path& to, const path& new_symlink,
                                              error_code& ec) noexcept;

        void         create_hard_link(const path& to, const path& new_hard_link);
        void         create_hard_link(const path& to, const path& new_hard_link,
                                      error_code& ec) noexcept;

        void         create_symlink(const path& to, const path& new_symlink);
        void         create_symlink(const path& to, const path& new_symlink,
                                    error_code& ec) noexcept;

        path         current_path();
        path         current_path(error_code& ec);
        void         current_path(const path& p);
        void         current_path(const path& p, error_code& ec) noexcept;

        bool         exists(file_status s) noexcept;
        bool         exists(const path& p);
        bool         exists(const path& p, error_code& ec) noexcept;

        bool         equivalent(const path& p1, const path& p2);
        bool         equivalent(const path& p1, const path& p2, error_code& ec) noexcept;

        uintmax_t    file_size(const path& p);
        uintmax_t    file_size(const path& p, error_code& ec) noexcept;

        uintmax_t    hard_link_count(const path& p);
        uintmax_t    hard_link_count(const path& p, error_code& ec) noexcept;

        bool         is_block_file(file_status s) noexcept;
        bool         is_block_file(const path& p,);
        bool         is_block_file(const path& p, error_code& ec) noexcept;

        bool         is_character_file(file_status s) noexcept;
        bool         is_character_file(const path& p,);
        bool         is_character_file(const path& p, error_code& ec) noexcept;

        bool         is_directory(file_status s) noexcept;
        bool         is_directory(const path& p);
        bool         is_directory(const path& p, error_code& ec) noexcept;

        bool         is_empty(const path& p);
        bool         is_empty(const path& p, error_code& ec) noexcept;

        bool         is_fifo(file_status s) noexcept;
        bool         is_fifo(const path& p,);
        bool         is_fifo(const path& p, error_code& ec) noexcept;

        bool         is_other(file_status s) noexcept;
        bool         is_other(const path& p,);
        bool         is_other(const path& p, error_code& ec) noexcept;

        bool         is_regular_file(file_status s) noexcept; 
        bool         is_regular_file(const path& p);
        bool         is_regular_file(const path& p, error_code& ec) noexcept;

        bool         is_socket(file_status s) noexcept;
        bool         is_socket(const path& p,);
        bool         is_socket(const path& p, error_code& ec) noexcept;

        bool         is_symlink(file_status s) noexcept;
        bool         is_symlink(const path& p);
        bool         is_symlink(const path& p, error_code& ec) noexcept;

        file_time_type  last_write_time(const path& p);
        file_time_type  last_write_time(const path& p, error_code& ec) noexcept;
        void         last_write_time(const path& p, file_time_type new_time);
        void         last_write_time(const path& p, file_time_type new_time,
                                     error_code& ec) noexcept;

        path         read_symlink(const path& p);
        path         read_symlink(const path& p, error_code& ec);

        bool         remove(const path& p);
        bool         remove(const path& p, error_code& ec) noexcept;

        uintmax_t    remove_all(const path& p);
        uintmax_t    remove_all(const path& p, error_code& ec) noexcept;

        void         rename(const path& from, const path& to);
        void         rename(const path& from, const path& to, error_code& ec) noexcept;

        void         resize_file(const path& p, uintmax_t size);
        void         resize_file(const path& p, uintmax_t size, error_code& ec) noexcept;

        space_info   space(const path& p);
        space_info   space(const path& p, error_code& ec) noexcept;

        file_status  status(const path& p);
        file_status  status(const path& p, error_code& ec) noexcept;

        bool         status_known(file_status s) noexcept;

        file_status  symlink_status(const path& p);
        file_status  symlink_status(const path& p, error_code& ec) noexcept;

        path         system_complete(const path& p);
        path         system_complete(const path& p, error_code& ec);

        path         temp_directory_path();
        path         temp_directory_path(error_code& ec);

        path         unique_path(const path& model="%%%%-%%%%-%%%%-%%%%");
        path         unique_path(const path& model, error_code& ec);

    } } }  // namespaces std::tbd::filesystem

***`unspecified-trivial-clock`*** is an unspecified type provided by the implementation that satisfies the `TrivialClock` requirements (\[time.clock.req\]) and that is capable of representing and measuring file time values.

1.5 <span id="Error-reporting">Error reporting</span> \[fs.err.report\]
-----------------------------------------------------------------------

Filesystem library functions often provide two overloads, one that throws an exception to report file system errors, and another that sets an `error_code`.

> \[*Note:* This supports two common use cases:
>
> -   Uses where file system errors are truly exceptional and indicate a serious failure. Throwing an exception is the most appropriate response. This is the preferred default for most everyday programming.  
>      
> -   Uses where file system system errors are routine and do not necessarily represent failure. Returning an error code is the most appropriate response. This allows application specific error handling, including simply ignoring the error.
>
> *--end note*\]

Functions **not** having an argument of type `error_code&` report errors as follows, unless otherwise specified:

-   When a call by the implementation to an operating system or other underlying API results in an error that prevents the function from meeting its specifications, an exception of type `filesystem_error` shall be thrown. For functions with a single path argument, that argument shall be passed to the `filesystem_error` constructor with a single path argument.  For functions with two path arguments, the first of these arguments shall be passed to the `filesystem_error` constructor as the `path1` argument, and the second shall be passed as the `path2` argument.  
     
-   Failure to allocate storage is reported by throwing an exception as described in the C++ standard, 17.6.4.10 \[res.on.exception.handling\].  
     
-   Destructors throw nothing.

Functions having an argument of type `error_code&` report errors as follows, unless otherwise specified:

-   If a call by the implementation to an operating system or other underlying API results in an error that prevents the function from meeting its specifications, the `error_code&` argument is set as appropriate appropriate for the specific error. Otherwise, `clear()` is called on the `error_code&` argument.

1.6 <span id="class-path">Class `path` \[class.path\]</span>
------------------------------------------------------------

An object of class `path` represents a [path](#class-path), and contains a [pathname](#fs.def.pathname) Such an object is concerned only with the lexical and syntactic aspects of a path. The path does not necessarily exist in external storage, and the pathname is not necessarily valid for the current operating system or for a particular file system.

>     namespace std { namespace tbd { namespace filesystem {
>
>           class path
>           {
>           public:
>             typedef see below                      value_type;
>             typedef basic_string<value_type>       string_type;
>             static constexpr value_type            preferred_separator = see below;
>
>             typedef std::codecvt<value_type, char, std::mbstate_t>  codecvt_type;
>             typedef codecvt_type* (*codecvt_func)() noexcept;  
>
>             // constructors and destructor
>             path() = default;
>             path(const path&) = default;
>             path(path&&) noexcept = default;
>
>             template <class Source>
>               path(Source const& source, codecvt_func cvt=codecvt());
>
>             template <class InputIterator>
>               path(InputIterator begin, InputIterator end);
>
>            ~path() = default;
>
>             // assignments
>             path& operator=(const path&) = default;
>             path& operator=(path&&) noexcept = default;
>
>             template <class Source>
>               path& operator=(Source const& source);
>
>             template <class InputIterator>
>               path& assign(InputIterator begin, InputIterator end);
>
>             // appends
>             path& operator/=(const path& p);
>
>             template <class Source>
>               path& operator/=(Source const& source);
>
>             template <class InputIterator>
>               path& append(InputIterator begin, InputIterator end);
>
>             // concatenation
>             path& operator+=(const path& x);
>             path& operator+=(const string_type& x);
>             path& operator+=(const value_type* x);
>             path& operator+=(value_type x);
>             template <class Source>
>               path& operator+=(Source const& x);
>             template <class charT>
>               path& operator+=(charT x);
>             template <class InputIterator>
>               path& concat(InputIterator begin, InputIterator end);
>             template <class InputIterator>
>               path& concat(InputIterator begin, InputIterator end);
>             
>             // modifiers
>             void  clear() noexcept;
>             path& make_preferred();
>             path& remove_filename();
>             path& replace_filename(const path& replacement);
>             path& replace_extension(const path& replacement = path());
>             void  swap(path& rhs) noexcept;
>
>             // native format observers
>             const string_type&  native() const noexcept;  // native format, encoding
>             const value_type*   c_str() const noexcept;   // native().c_str()
>             operator string_type() const;
>
>             template <class charT, class traits= char_traits<charT>,
>                       class Allocator = allocator<charT> >
>             basic_string<charT, traits, Allocator>
>               string(const Allocator& a = Allocator()) const;
>             template <class charT, class traits= char_traits<charT>,
>                       class Allocator = allocator<charT> >
>             basic_string<charT, traits, Allocator>
>               string(codecvt_func cvt, const Allocator& a = Allocator()) const;
>
>             wstring   wstring() const;
>             string    u8string() const;
>             u16string u16string() const;
>             u32string u32string() const;
>
>             // generic format observers
>             template <class charT, class traits= char_traits<charT>,
>                       class Allocator = allocator<charT> >
>             basic_string<charT, traits, Allocator>
>               generic_string(const Allocator& a = Allocator()) const;
>             template <class charT, class traits= char_traits<charT>,
>                       class Allocator = allocator<charT> >
>             basic_string<charT, traits, Allocator>
>               generic_string(codecvt_func cvt, const Allocator& a = Allocator()) const;
>
>             wstring   generic_wstring() const;
>             string    generic_u8string() const;
>             u16string generic_u16string() const;
>             u32string generic_u32string() const;
>
>             // compare
>             int  compare(const path& p) const noexcept;
>             int  compare(const string& s) const;
>             int  compare(const value_type* s) const;
>
>             // decomposition
>             path root_name() const;
>             path root_directory() const;
>             path root_path() const;
>             path relative_path() const;
>             path parent_path() const;
>             path filename() const;
>             path stem() const;
>             path extension() const;
>
>             // query
>             bool empty() const noexcept;
>             bool has_root_name() const;
>             bool has_root_directory() const;
>             bool has_root_path() const;
>             bool has_relative_path() const;
>             bool has_parent_path() const;
>             bool has_filename() const;
>             bool has_stem() const;
>             bool has_extension() const;
>             bool is_absolute() const;
>             bool is_relative() const;
>
>             // iterators
>             class iterator;
>             typedef iterator const_iterator;
>
>             iterator begin() const;
>             iterator end() const;
>
>
>             // imbued codecvt facet
>             static codecvt_func codecvt() noexcept;
>             static codecvt_func codecvt(codecvt_func func) noexcept;
>           private:
>             string_type pathname;  // exposition only
>           };
>
>     } } }  // namespaces std::tbd::filesystem

`value_type` is a `typedef` for the operating system dependent encoded character type used to represent pathnames.

The value of <span id="preferred_separator">`preferred_separator`</span> is the operating system dependent *preferred-separator* character (\[path.generic\]).

> <table><tbody><tr class="odd"><td>[<em>Example:</em> For POSIX based operating systems, <code>value_type</code> is <code>char</code> and <code>       preferred_separator</code> is the slash character (/).  For Windows based operating systems, <code>value_type</code> is <code>wchar_t</code> and <code>       preferred_separator</code> is the backslash character (\).  <em>--end example</em>]</td></tr></tbody></table>
>
### 1.6.1 Generic pathname format grammar \[<span id="path.generic">path.generic</span>\]

*pathname:  
            root-name root-directory<sub>opt</sub> relative-path<sub>opt  
              </sub> root-directory relative-path<sub>opt  
              </sub> relative-path*

*root-name:  
           * An operating system dependent name that identifies the starting location for absolute paths.

> > \[*Note:* Many operating systems define a name beginning with two *directory-separator* characters as a *root-name* that identifies network or other resource locations. Some operating systems define a single letter followed by a colon as a drive specifier - a *root-name* identifying a specific device such as a disc drive. *--end note*\]

*root-directory:  
            directory-separator  
  
relative-path:  
            filename  
            relative-path directory-separator  
            relative-path directory-separator filename  
  
filename:  
            name  
            dot  
            dot-dot  
  
name:  
           * A sequence of characters other than *directory-separator* characters.

> <table><tbody><tr class="odd"><td>[<em>Note:</em> Operating systems often place restrictions on the characters that may be used in a <em>filename</em>. For wide portability, users may wish to limit <em>filename</em> characters to the POSIX Portable Filename Character Set:<br />
> <br />
> <code>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z       a b c d e f g h i j k l m n o p q r s t u v w x y z       0 1 2 3 4 5 6 7 8 9 . _ -              </code> <em>--end note</em>]</td></tr></tbody></table>
>
*dot:  
           * The filename consisting solely of a single period character (.).  
  
*dot-dot:  
           * The filename consisting solely of two period characters (..).  
  
*directory-separator:  
            slash`       `slash directory-separator  
            preferred-separator  
            preferred-separator directory-separator  
  
preferred-separator:  
           * An operating system dependent directory separator character. May be a synonym for *slash*.  
  
*slash:  
          * The slash character (/).

Multiple successive *directory-separator* characters are considered to be the same as one *directory-separator* character.

The filename *dot* is treated as a reference to the current directory. The filename *dot-dot* is treated as a reference to the parent directory. Specific filenames may have special meanings for a particular operating system.

### 1.6.2 <span id="path-Conversions">`path` conversions</span> \[path.cvt\]

#### 1.6.2.1 <span id="path-Conversions-to-native-format">`path` argument format conversions</span> \[path.fmt.cvt\]

> <table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td>[<em>Note:</em> The format conversions described in this section are never applied on POSIX or Windows based operating systems:<ul><li>The generic format is acceptable as a native path.</li><li>There is no need to distinguish between native format and generic format arguments.</li><li>Paths for regular files and paths for directories share the same syntax.</li></ul><p> <em>-- end note</em>]</p></td></tr></tbody></table>
>
Member functions arguments that take character sequences representing paths may use the generic pathname format grammar (\[[path.generic](#path.generic)\]) or the [native pathname format](#fs.def.native). If and only if such arguments are in the generic format and the generic format is not acceptable to the operating system as a native path, conversion to native format shall be performed during the processing of the argument.

> \[*Note:* Some operating systems may have no unambiguous way to distinguish between native format and generic format arguments. This is by design as it simplifies use for operating systems that do not require disambiguation. An implementation for an operating system where disambiguation is required is permitted as an extension to distinguish between the formats. *-- end note*\]

If the native format requires paths for regular files to be formatted differently from paths for directories, the path shall be treated as a directory path if last element is *directory-separator*, otherwise it shall be treated as a regular file path.

#### 1.6.2.2 `path` type and encoding conversions \[<span id="path.arg.convert">path.type.cvt</span>\]

For member function arguments that take character sequences representing paths and for member functions returning strings, value type and encoding conversion is performed if the value type of the argument or return differs from ` path::value_type` <span class="underline">or either type is `char`</span>. Encoding and method of conversion for the argument <span class="underline">to be converted from</span> or the return value <span class="underline">to be converted to</span> is determined by its value type:

> -   `char`: <span class="underline">Conversion is performed by calling the `codecvt` facet determined by calling the returned value of the either the `cvt` argument if present or calling `path::codecvt()` if not present. The encoding of the argument being converted from or the return value being converted to is determined by the called `codecvt` facet.</span>
>
>     \[*Note:* <s>The intent is to supply the same behavior</s> <span class="underline">These conversion rules result in default behavior that is the same</span> as other C and C++ standard library functions that perform file operations using narrow character strings to identify paths. Changing this <span class="underline">default</span> behavior would be surprising and break much existing code. *--end note*\]  
>       
>     *<span style="background-color: #E0E0E0">The native encoding for narrow character paths varies considerably:</span>*
>
>     -   *<span style="background-color: #E0E0E0">Apple OS X always uses UTF-8.</span>*
>
>     -   *<span style="background-color: #E0E0E0">On some POSIX based operating systems, the encoding is determined by `locale("")`;</span>*
>     -   *<span style="background-color: #E0E0E0">On Windows based operating systems, the encoding is determined by testing `AreFileApisANSI()`; if true, the `CP_ACP` codepage is used, otherwise the `CP_OEMCP` codepage is used. </span>*  
>          
>
> -   `wchar_t`: Encoding is the implementation's native wide character set. <span class="underline">Conversion method is unspecified.</span>  
>      
>
> -   `char16_t`: Encoding is UTF-16. <span class="underline">Conversion method is unspecified.</span>  
>      
>
> -   `char32_t`: Encoding is UTF-32. <span class="underline">Conversion method is unspecified.</span>
>
<span style="background-color: #E8FFE8">\[</span>*<span style="background-color: #E8FFE8">Example:</span>*

<span style="background-color: #E8FFE8">In a program intended for use with a variety of systems, </span>` std::string name`<span style="background-color: #E8FFE8"> has been given a value by a database that stores string values as UTF-8. The program needs to create a directory named with the value of </span>` name`<span style="background-color: #E8FFE8">. Because not all systems encode narrow strings as UTF-8, the programmer needs to explicitly identify the encoding if the program is to be portable:</span>

>     create_directory(path(name, utf8));

<span style="background-color: #E8FFE8">On Windows-like systems, which often default to native encodings other than UTF-8, a conversion from UTF-8 to UTF-16 is done and all is well because this is a lossless conversion.</span>

<span style="background-color: #E8FFE8">On POSIX-like systems configured to use UTF-8 as the default native encoding, no conversion is necessary and none occurs.</span>

<span style="background-color: #E8FFE8">On POSIX-like systems configured to use some encoding other than UTF-8 as the default native encoding, a conversion is done from UTF-8 to the native encoding. Depending on the native encoding, this may be a </span><span style="background-color: #E8FFE8">lossy</span><span style="background-color: #E8FFE8"> conversion.</span>

<span style="background-color: #E8FFE8">What if most of the calls to </span> <span style="background-color: #E8FFE8">filesystem</span><span style="background-color: #E8FFE8"> functions use UTF-8? Calling the static function </span>` path::codecvt(utf8)`<span style="background-color: #E8FFE8"> will set </span>`path::codecvt()`<span style="background-color: #E8FFE8">, the default encoding, to UTF-8. Then it is no long required to explicitly identify the narrow character encoding in the UTF-8 cases, so the programmer can just write:</span>

> <span style="background-color: #E8FFE8">`create_directory(name`</span>``<span style="background-color: #E8FFE8">`);`</span>

<span style="background-color: #E8FFE8">Since </span>` path::codecvt()`<span style="background-color: #E8FFE8">is</span><span style="background-color: #E8FFE8"> static, it must be used with care to avoid confusion and </span>` path(p, native)`<span style="background-color: #E8FFE8"> must be used if </span>`p`<span style="background-color: #E8FFE8"> is a char based string that is not UTF-8 encoded.</span>

*<span style="background-color: #E8FFE8">--end example</span>*<span style="background-color: #E8FFE8">\]</span>

### 1.6.3 <span id="path-Requirements">`path` Requirements</span> \[path.req\]

In addition to the \[fs.req\] requirements, function template parameters named `Source` shall be one of:

-   `basic_string<charT, traits, Allocator>`. The type `   charT` shall be an encoded character type (\[fs.req\]).  A function argument `Source const&` `source` shall have an effective range \[`source.begin()`, `source.end()`).

-   A type meeting the input iterator requirements that iterates over a NTCTS. The value type shall be an encoded character type. A function argument `   Source const&` `source` shall have an effective range  \[`source`, `end`) where `end` is the first iterator value with an element value equal to `iterator_traits<Source>::value_type()`.

-   A character array that after array-to-pointer decay results in a pointer to a NTCTS. The value type shall be an encoded character type. A function argument `Source const&` `source` shall have an effective range \[`source`, `end`) where `   end` is the first iterator value with an element value equal to `iterator_traits<decay<Source>::type>::value_type()`.

> \[*Note:* See [path conversions](#path-Conversions) (\[path.cvt\]) for how these value types and their encodings convert to `   path::value_type` and its encoding. *-- end note*\]

### 1.6.4 <span id="path-constructors">` path` constructors</span> \[path.construct\]

    template <class Source>
      path(Source const& source);

    template <class InputIterator>
      path(InputIterator begin, InputIterator end);

> *Effects:* Stores the effective range of `source` (\[[path.req](#path-Requirements)\]) or the range \[`begin`,`end`) in `pathname`, converting format and encoding if required (\[[path.arg.convert](#path.arg.convert)\]).

### 1.6.5 <span id="path-assignments">` path` assignments</span> \[path.assign\]

    template <class Source>
      path& operator=(Source const& source);
      template <class InputIterator>
      path& assign(InputIterator begin, InputIterator end);

> *Effects:* Stores the effective range of `source` (\[[path.req](#path-Requirements)\]) or the range \[`begin`,`end`) in `pathname`, converting format and encoding if required (\[[path.arg.convert](#path.arg.convert)\]).
>
> *Returns:* `*this`

### 1.6.6 <span id="path-appends">` path` appends</span> \[path.append\]

The append operations use `   operator/=` to denote their semantic effect of appending *preferred-separator* when needed.

    path& operator/=(const path& p);

> *Effects:*
>
> > Appends `path::preferred_separator` to `pathname`, converting format and encoding if required (\[[path.arg.convert](#path.arg.convert)\]), unless:
> >
> > -   an added separator would be redundant, or
> > -   would change an relative path to an absolute path, or
> > -   `p.empty()`, or
> > -   `*p.native().cbegin()` is a directory separator.
> >
> > Then appends `p.native()` to `pathname`.
>
> *Returns:* `*this`

    template <class Source>
      path& operator/=(Source const & source);
      template <class InputIterator>
      path& append(InputIterator begin, InputIterator end);

> *Effects:*
>
> > Appends `path::preferred_separator` to `pathname`, converting format and encoding if required (\[[path.arg.convert](#path.arg.convert)\]), unless:
> >
> > -   an added separator would be redundant, or
> > -   would change an relative path to an absolute path, or
> > -   `p.empty()`, or
> > -   `*p.native().cbegin()` is a separator.
> >
> > Appends the effective range of `source` (\[[path.req](#path-Requirements)\]) or the range \[`begin`,`end`) to `pathname`, converting format and encoding if required (\[[path.arg.convert](#path.arg.convert)\]).
>
> *Returns:* `*this`

### 1.6.7 <span id="path-concatenation">`path` concatenation</span> \[path.concat\]

    path& operator+=(const path& x);
    path& operator+=(const string_type& x);
    path& operator+=(const value_type* x);
    path& operator+=(value_type x);
    template <class Source>
      path& operator+=(Source const& x);
    template <class charT>
      path& operator+=(charT x);
    template <class InputIterator>
      path& concat(InputIterator begin, InputIterator end);
    template <class InputIterator>
      path& concat(InputIterator begin, InputIterator end);

> *Postcondition:* `native() == prior_native + effective-argument`, where `prior_native` is `native()` prior to the call to `operator+=`, and `effective-argument` is:
>
> -   `x.native()` if `x` is present and is `const path&`, otherwise
> -   the effective range `source` (\[[path.req](#path-Requirements)\]), if `source` is present, otherwise,
> -   the range \[`begin`,`end`), if `begin` and `end` are present, otherwise,
> -   `x`.
>
> If the value type of `effective-argument` would not be `path::value_type`, the actual argument or argument range is first converted (\[[path.arg.convert](#path.arg.convert)\]) so that `effective-argument` has value type `path::value_type`.
>
> *Returns:* `*this`

### 1.6.8 <span id="path-modifiers">` path` modifiers</span> \[path.modifiers\]

    void clear() noexcept;

> *Postcondition:* `this->empty()` is true.

    path& make_preferred();

> *Effects:* Each *directory-separator* is converted to *preferred-separator*.
>
> *Returns:* `*this`
>
> \[*Example:*
>
> >     path p("foo/bar");
> >     std::cout << p << '\n';
> >     p.make_preferred();
> >     std::cout << p << '\n';
>
> On an operating system where *preferred-separator* is the same as *directory-separator*, the output is:
>
> >     "foo/bar"
> >     "foo/bar"
>
> On an operating system where *preferred-separator* is a backslash, the output is:
>
> >     "foo/bar"
> >     "foo\bar"
>
> *-- end example*\]

    path& remove_filename();

> *Postcondition:* `!has_filename()`.
>
> *Returns:* `*this`.
>
> \[*Example:*
>
> >     std::cout << path("/foo").remove_filename();  // outputs "/"
> >     std::cout << path("/").remove_filename();     // outputs ""
>
> *--end example*\]

    path& replace_filename(const path& replacement);

> *Effects:*
>
> > `remove_filename();     operator/=(replacement);`
>
> *Returns:* `*this`.
>
> \[*Example:*
>
> >     std::cout << path("/foo").replace_filename("bar");  // outputs "/bar"
> >     std::cout << path("/").replace_filename("bar");     // outputs "bar"
>
> *--end example*\]

    path& replace_extension(const path& replacement = path());

> *Effects:*
>
> -   Any existing `extension()` is removed from the stored path, then
> -   If `replacement` is not empty and does not begin with a dot character, a dot character is appended to the stored path, then
> -   `replacement` is appended to the stored path.
>
> *Returns:* `*this`

    void swap(path& rhs) noexcept;

> *Effects:* Swaps the contents of the two paths.
>
> *Complexity:* constant time.
>
> *See \[c++std-filesystem-44\] from Daniel Krügler for `noexcept` rationale.*

### 1.6.9 <span id="path-native-format-observers">`path` native format observers</span> \[path.native.obs\]

The string returned by all native format observers is in the [native pathname format](#fs.def.native).

    const string_type&  native() const noexcept;

> *Returns:* `pathname`.

    const value_type* c_str() const noexcept;

> *Returns:* `pathname.c_str()`.

    operator string_type() const;

> *Returns:* `pathname`.
>
> \[*Note:* Conversion to `string_type` is provided so that an object of class `path` can be given as an argument to existing standard library file stream constructors and open functions. This provides basic interoperability without the need to modify existing standard library classes or headers. *--end note*\]
>
> *<span style="background-color: #E0E0E0">Implementations of the standard library for systems where string\_type is wstring, such as Windows, are encouraged to provide an extension to existing standard library file stream constructors and open functions that adds overloads that accept wstrings for file names. Microsoft and Dinkumware already provide such an extension. </span>*

    template <class charT, class traits = char_traits<charT>,
              class Allocator = allocator<charT> >
    basic_string<charT, traits, Allocator>
      string(const Allocator& a = Allocator()) const;
    template <class charT, class traits= char_traits<charT>,
              class Allocator = allocator<charT> >
    basic_string<charT, traits, Allocator>
      string(codecvt_func cvt, const Allocator& a = Allocator()) const;

> *Returns:* `pathname`.
>
> *Remarks:* All memory allocation, including for the return value, shall be performed by `a`. Conversion, if any, is specified by \[[path.cvt](#path-Conversions)\]).

    string string() const;
    wstring wstring() const;
    string u8string() const;
    u16string u16string() const;
    u32string u32string() const; 

> *Returns:* `pathname`.
>
> *Remarks:* Conversion, if any, is performed as specified by \[[path.cvt](#path-Conversions)\].

### 1.6.10 <span id="path-generic-format-observers">`path` generic format observers</span> \[path.generic.obs\]

Generic format observer functions return strings formatted according to the generic pathname format (\[[path.generic](#path.generic)\]). The forward slash (`'/'`) character is used as the *directory-separator* character.

> \[*Example:* On an operating system that uses backslash as its preferred-separator,  `path("foo\\bar").generic_string()` returns `"foo/bar"`. *-- end example*\]

    template <class charT, class traits = char_traits<charT>,
              class Allocator = allocator<charT> >
    basic_string<charT, traits, Allocator>
      generic_string(const Allocator& a = Allocator()) const;
    template <class charT, class traits= char_traits<charT>,
              class Allocator = allocator<charT> >
    basic_string<charT, traits, Allocator>
      generic_string(codecvt_func cvt, const Allocator& a = Allocator()) const;

> *Returns:* `pathname`, reformatted according to the generic pathname format (\[[path.generic](#path.generic)\]).
>
> *Remarks:* All memory allocation, including for the return value, shall be performed by `a`. Conversion, if any, is specified by \[[path.cvt](#path-Conversions)\].

    string generic_string() const;
    wstring generic_wstring() const;
    string generic_u8string() const;
    u16string generic_u16string() const;
    u32string generic_u32string() const; 

> *Returns:* `pathname`, reformatted according to the generic pathname format (\[[path.generic](#path.generic)\]).
>
> *Remarks:*  Conversion, if any, is specified by \[[path.cvt](#path-Conversions)\].

### 1.6.11 <span id="path-compare">`path` compare</span> \[path.compare\]

    int compare(const path& p) const noexcept;

> *Returns:* A value less than 0 if `native()` for the elements of `*this` are lexicographically less than `native()` for the elements of `p`, otherwise a value greater than 0 if `native()` for the elements of `*this` are lexicographically greater than `native()` for the elements of `p`, otherwise 0.
>
> Remark: The elements are determined as if by iteration over the half-open range \[`begin()`, `end()`) for `*this` and  `p`.

    int compare(const string& s) const

> *Returns:* `compare(path(s))`.

    int compare(const value_type* s) const

> *Returns:* `compare(path(s))`.

### 1.6.12 <span id="path-decomposition">`path` decomposition</span> \[path.decompose\]

    path root_name() const;

> *Returns:* *root-name,* if `pathname` includes *root-name*, otherwise `path()`.

    path root_directory() const;

> *Returns:* *root-directory*, if `pathname` includes *root-directory*, otherwise `path()`.
>
> If *root-directory* is composed of *slash name*, *slash* is excluded from the returned string.

    path root_path() const;

> *Returns:* `root_name() / root_directory()`

    path relative_path() const;

> *Returns:* A `path` composed from `pathname`, if `!empty()`, beginning with the first *filename* after *root-path*. Otherwise, `path()`.

    path parent_path() const;

> *Returns:* `(empty() || begin() == --end()) ? path() : pp`, where `pp` is constructed as if by starting with an empty `path` and successively applying `operator/=` for each element in the range `begin()`, `--end()`.

    path filename() const;

> *Returns:* `empty() ? path() : *--end()`
>
> \[*Example:*
>
> >     std::cout << path("/foo/bar.txt").filename(); // outputs "bar.txt"
> >     std::cout << path("/").filename();            // outputs "/"
> >     std::cout << path(".").filename();            // outputs "."
> >     std::cout << path("..").filename();           // outputs ".."
>
> *--end example*\]

    path stem() const;

> *Returns:* if `filename()` contains a character but does not consist solely of one or to two periods, returns the substring of `filename()` starting at its beginning and ending with the character before the last period. Otherwise, returns `filename()`.
>
> \[*Example:*
>
> >     std::cout << path("/foo/bar.txt").stem(); // outputs "bar"
> >     path p = "foo.bar.baz.tar";
> >     for (; !p.extension().empty(); p = p.stem())
> >       std::cout << p.extension() << '\n';
> >       // outputs: .tar
> >       //          .baz
> >       //          .bar
>
> *--end example*\]

    path extension() const;

> *Returns:* if `filename()` contains a period but does not consist solely of one or to two periods, returns the substring of `filename()` starting at the rightmost period and for the remainder of the path. Otherwise, returns an empty `path` object.
>
> *Remarks:* Implementations are permitted to define additional behavior for file systems which append additional elements to extensions, such as alternate data streams or partitioned dataset names.
>
> \[*Example:*
>
> >     std::cout << path("/foo/bar.txt").extension(); // outputs ".txt"
>
> *--end example*\]
>
> \[*Note: * The period is included in the return value so that it is possible to distinguish between no extension and an empty extension. Also note that for a path `p`, `p.stem()+p.extension() == p`. *-- end note*\]

### 1.6.13 <span id="path-query">`path` query</span> \[path.query\]

    bool empty() const noexcept;

> *Returns:* `m_pathname.empty()`.

    bool has_root_path() const;

> *Returns:* `!root_path().empty()`

    bool has_root_name() const;

> *Returns:* `!root_name().empty()`

    bool has_root_directory() const;

> *Returns:* `!root_directory().empty()`

    bool has_relative_path() const;

> *Returns:* `!relative_path().empty()`

    bool has_parent_path() const;

> *Returns:* `!parent_path().empty()`

    bool has_filename() const;

> *Returns:* `!filename().empty()`

    bool has_stem() const;

> *Returns:* `!stem().empty()`

    bool has_extension() const;

> *Returns:* `!extension().empty()`

    bool is_absolute() const;

> *Returns:* `true` if the elements of `root_path()` uniquely identify a file system location, else `false`.

> <table><tbody><tr class="odd"><td>[<em>Example:</em> <code>path("/").is_absolute()</code> is <code>true</code> for POSIX based operating systems, and <code>false</code> for Windows based operating systems.  <em>--end example</em>]</td></tr></tbody></table>
>
    bool is_relative() const;

> *Returns:* `!is_absolute()`.

### 1.6.14 <span id="path-iterators">` path` iterators</span> \[path.itr\]

Path iterators iterate over the elements of the stored pathname.

A `path::iterator` is a constant iterator satisfying all the requirements of a bidirectional iterator (C++ Std, 24.1.4 Bidirectional iterators \[lib.bidirectional.iterators\]). Its `value_type` is `path`.

Calling any non-const member function of a `path` object invalidates all iterators referring to elements of that object.

The forward traversal order is as follows:

-   The *root-name* element, if present.
-   The *root-directory* element, if present, in the generic format. *\[note:* the generic format is required to ensure lexicographical comparison works correctly. *-- end note*\]
-   Each successive *filename* element, if present.
-   *Dot*, if one or more trailing non-root *slash* characters are present.

The backward traversal order is the reverse of forward traversal.

    iterator begin() const;

> *Returns:* An iterator for the first present element in the traversal list above. If no elements are present, the end iterator.

    iterator end() const;

> *Returns:* The end iterator.

### 1.6.15 <span id="path-non-member-functions">`path` non-member functions</span> \[path.non-member\]

    void swap(path& lhs, path& rhs) noexcept;

> *Effects:* `lhs.swap(rhs)`.

    size_t hash_value (const path& p) noexcept;

> *Returns:* A hash value for the path `p`. If for two paths, `p1 == p2` then `hash_value(p1) == hash_value(p2)`.

    bool operator< (const path& lhs, const path& rhs) noexcept;

> *Returns:* `return lhs.compare(rhs) < 0`.

    bool operator<=(const path& lhs, const path& rhs) noexcept;

> *Returns:* `!(rhs < lhs)`.

    bool operator> (const path& lhs, const path& rhs) noexcept;

> *Returns:* `rhs < lhs`.

    bool operator>=(const path& lhs, const path& rhs) noexcept;

> *Returns:* `!(lhs < rhs)`.

    bool operator==(const path& lhs, const path& rhs) noexcept;

> *Returns:* `!(lhs < rhs) && !(rhs < lhs)`.
>
> \[*Note:* <span id="Path-equality">Path equality</span> and path equivalence have different semantics.
>
> Equality is determined by the `path` non-member `operator==`, which considers the two path's lexical representations only. Thus `path("foo") == "bar"` is never `true`.
>
> Equivalence is determined by the [`equivalent()`](#equivalent) non-member function, which determines if two paths [resolve](#class-path) to the same file system entity. Thus `equivalent("foo", "bar")` will be `true` when both paths resolve to the same file.
>
> Programmers wishing to determine if two paths are "the same" must decide if "the same" means "the same representation" or "resolve to the same actual file", and choose the appropriate function accordingly. *-- end note*\]

    bool operator!=(const path& lhs, const path& rhs) noexcept;

> *Returns:* `!(lhs == rhs)`.

    path operator/ (const path& lhs, const path& rhs);

> *Returns:* `path(lhs) /= rhs`.

### 1.6.16 `path` <span id="path-inserter-extractor">inserter and extractor</span> \[path.io\]

    template <class charT, class traits>
    basic_ostream<charT, traits>&
    operator<<(basic_ostream<charT, traits>& os, const path& p);

> *Effects:* `os << p.string<charT, traits>()`.
>
> \[*Note:* Pathnames containing spaces require special handling by the user to avoid truncation when read by the extractor. *--end note*\]
>
> <span style="background-color: #E0E0E0">*The Boost inserter outputs quoted strings, which are recognized as such by the extractor. There is a sentiment within the Filesystem Study Group that supplying a quoted and/or escaped string manipulator as a string extension would be a better solution than a path specific feature. See proposal [N3431](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2012/n3431.html), Quoted Strings Library Proposal.*</span>
>
> *Returns:* `os`

    template <class charT, class traits>
    basic_istream<charT, traits>&
    operator>>(basic_istream<charT, traits>& is, path& p);

> *Effects: *
>
> >     basic_string<charT, traits> tmp;
> >     is >> tmp;
> >     p = tmp;
>
> *Returns:* `is`

### 1.6.17 `path` codecvt facets \[path.facets\]

    path::codecvt_type* native() noexcept;

> *Returns:* The address of a `codecvt` facet for the native narrow character encoding.

    path::codecvt_type* utf8() noexcept;

> *Returns:* The address of a `codecvt` facet for UTF-8, without byte-order marker, narrow character encoding.

1.7 <span id="Class-filesystem_error">Class `filesystem_error` \[class.filesystem\_error\]</span>
-------------------------------------------------------------------------------------------------

    namespace std { namespace tbd { namespace filesystem {

          class filesystem_error : public system_error
          {
          public:
            filesystem_error(const string& what_arg, error_code ec);
            filesystem_error(const string& what_arg,
              const path& p1, error_code ec);
            filesystem_error(const string& what_arg,
              const path& p1, const path& p2, error_code ec);

            const path& path1() const noexcept;
            const path& path2() const noexcept;
            const char* what() const noexcept;
          };
    } } }  // namespaces std::tbd::filesystem

The class template `filesystem_error` defines the type of objects thrown as exceptions to report file system errors from functions described in this clause.

### 1.7.1 <span id="filesystem_error-members">`filesystem_error` members</span> \[filesystem\_error.members\]

Constructors are provided that store zero, one, or two paths associated with an error.

    filesystem_error(const string& what_arg, error_code ec);

> *Postcondition:*
>
> <table><tbody><tr class="odd"><td><strong>Expression</strong></td><td><strong>Value</strong></td></tr><tr class="even"><td><code>       runtime_error::what()</code></td><td><code>what_arg.c_str()</code></td></tr><tr class="odd"><td><code>code()</code></td><td><code>ec</code></td></tr><tr class="even"><td><code>path1().empty()</code></td><td><code>true</code></td></tr><tr class="odd"><td><code>path2().empty()</code></td><td><code>true</code></td></tr></tbody></table>
>
    filesystem_error(const string& what_arg, const path& p1, error_code ec);

> *Postcondition:*
>
> <table><tbody><tr class="odd"><td><strong>Expression</strong></td><td><strong>Value</strong></td></tr><tr class="even"><td><code>       runtime_error::what()</code></td><td><code>what_arg.c_str()</code></td></tr><tr class="odd"><td><code>code()</code></td><td><code>ec</code></td></tr><tr class="even"><td><code>path1()</code></td><td>Reference to stored copy of <code>p1</code></td></tr><tr class="odd"><td><code>path2().empty()</code></td><td><code>true</code></td></tr></tbody></table>
>
    filesystem_error(const string& what_arg, const path& p1, const path& p2, error_code ec);

> *Postcondition:*
>
> <table><tbody><tr class="odd"><td><strong>Expression</strong></td><td><strong>Value</strong></td></tr><tr class="even"><td><code>       runtime_error::what()</code></td><td><span class="underline"><code>w</code></span><code>hat_arg.c_str()</code></td></tr><tr class="odd"><td><code>code()</code></td><td><code>ec</code></td></tr><tr class="even"><td><code>path1()</code></td><td>Reference to stored copy of <code>p1</code></td></tr><tr class="odd"><td><code>path2()</code></td><td>Reference to stored copy of <code>p2</code></td></tr></tbody></table>
>
    const path& path1() const noexcept;

> *Returns:* Reference to copy of `p1` stored by the constructor, or, if none, an empty path.

    const path& path2() const noexcept;

> *Returns:* Reference to copy of `p2` stored by the constructor, or, if none, an empty path.

    const char* what() const noexcept;

> *Returns:* A string containing `runtime_error::what()`. The exact format is unspecified. Implementations are encouraged but not required to include `path1.native_string()`if not empty, `path2.native_string()`if not empty, and `system_error::what()` strings in the returned string.

1.8 <span id="Enum-file_type">Enum class file\_type</span> \[enum.file\_type\]
------------------------------------------------------------------------------

This enum class specifies constants used to identify file types.

<table><tbody><tr class="odd"><td><strong>Constant Name</strong></td><td><strong>Value</strong></td><td><strong>Meaning</strong></td></tr><tr class="even"><td><code>none</code></td><td><code>0</code></td><td>The type of the file has not been determined or an error occurred while trying to determine the type.</td></tr><tr class="odd"><td><code>not_found</code></td><td><code>-1</code></td><td>Pseudo-type indicating the file was not found. [<em>Note:</em> The file not being found is not considered an error while determining the type of a file. <em>--end note</em>]</td></tr><tr class="even"><td><code>regular</code></td><td><code>1</code></td><td>Regular file</td></tr><tr class="odd"><td><code>directory</code></td><td><code>2</code></td><td>Directory file</td></tr><tr class="even"><td><code>symlink</code></td><td><code>3</code></td><td>Symbolic link file</td></tr><tr class="odd"><td><code>block</code></td><td><code>4</code></td><td>Block special file</td></tr><tr class="even"><td><code>character</code></td><td><code>5</code></td><td>Character special file</td></tr><tr class="odd"><td><code>fifo</code></td><td><code>6</code></td><td>FIFO or pipe file</td></tr><tr class="even"><td><code>socket</code></td><td><code>7</code></td><td>Socket file</td></tr><tr class="odd"><td><code>unknown</code></td><td><code>8</code></td><td>The file does exist, but is of an operating system dependent type not covered by any of the other cases or the process does not have permission to query the file type</td></tr></tbody></table>

1.9 Enum class copy\_options \[<span id="enum.copy_options">enum.copy\_options</span>\]
---------------------------------------------------------------------------------------

This enumeration specifies bitmask constants used to control the semantics of copy operations.  The constants are specified in option groups. Constant `none` is shown in each option group for purposes of exposition; implementations shall provide only a single definition.  Calling a Filesystem library function with more than a single constant for an option group results in undefined behavior.

**Option group controlling `copy_file` effects for existing target files**

**Constant**

**Value**

**Meaning**

`none`

`0`

(Default) Error; file already exists.

`skip_existing`

`1`

Do not overwrite existing file, do not report an error.

`overwrite_existing`

`2`

Overwrite the existing file.

`update_existing`

`4`

Overwrite the existing file if it is older than the replacement file.

**Option group controlling `copy` effects for sub-directories**

**Constant**

**Value**

**Meaning**

`none`

`0`

(Default) Do not copy sub-directories.

`recursive`

`8`

Recursively copy sub-directories and their contents.

**Option group controlling `copy` effects  symbolic link actions**

**Constant**

**Value**

**Meaning**

`none`

`0`

(Default) Follow symbolic links.

`copy_symlinks`

`16`

Copy symbolic links as symbolic links rather than copying the files that they point to.

`skip_symlinks`

`32`

Ignore symbolic links.

**Option group controlling `copy` effects choosing the form of copying**

**Constant**

**Value**

**Meaning**

`none`

`0`

(Default) Copy content.

`directories_only`

`64`

Copy directory structure only, do not copy non-directory files.

`create_symlinks`

`128`

Make symbolic links instead of copies of files. The source path shall be an absolute path unless the destination path is in the current directory.

`create_hard_links`

`256`

Make hard links instead of copies of files.

1.10 <span id="Enum-perms">Enum perms</span> \[enum.perms\]
-----------------------------------------------------------

This enumeration specifies bitmask constants used to identify file permissions. *<span style="background-color: #E0E0E0">ISO/</span><span style="background-color: #E0E0E0">IEC</span><span style="background-color: #E0E0E0"> 9945 (POSIX) specifies actual values, and those values have been adopted here because they are very familiar and ingrained for many users.</span>*

<table><colgroup><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /></colgroup><tbody><tr class="odd"><td><strong>Name</strong></td><td style="text-align: center;"><strong>Value<br />
(octal)</strong></td><td style="text-align: center;"><strong>ISO/IEC 9945<br />
macro</strong></td><td><strong>Definition or notes</strong></td></tr><tr class="even"><td><p><code>no_perms</code></p></td><td style="text-align: center;"><code>0</code></td><td style="text-align: center;"></td><td>There are no permissions set for the file. Note: <code>   file_type::not_found</code> is <code>no_perms</code> rather than <code>perms_not_known</code></td></tr><tr class="odd"><td><code>owner_read</code></td><td style="text-align: center;"><code>0400</code></td><td style="text-align: center;"><code>S_IRUSR</code></td><td>Read permission, owner</td></tr><tr class="even"><td><code>owner_write</code></td><td style="text-align: center;"><code>0200</code></td><td style="text-align: center;"><code>S_IWUSR</code></td><td>Write permission, owner</td></tr><tr class="odd"><td><code>owner_exe</code></td><td style="text-align: center;"><code>0100</code></td><td style="text-align: center;"><code>S_IXUSR</code></td><td>Execute/search permission, owner</td></tr><tr class="even"><td><code>owner_all</code></td><td style="text-align: center;"><code>0700</code></td><td style="text-align: center;"><code>S_IRWXU</code></td><td>Read, write, execute/search by owner; <code>owner_read | owner_write | owner_exe</code></td></tr><tr class="odd"><td><code>group_read</code></td><td style="text-align: center;"><code>040</code></td><td style="text-align: center;"><code>S_IRGRP</code></td><td>Read permission, group</td></tr><tr class="even"><td><code>group_write</code></td><td style="text-align: center;"><code>020</code></td><td style="text-align: center;"><code>S_IWGRP</code></td><td>Write permission, group</td></tr><tr class="odd"><td><code>group_exe</code></td><td style="text-align: center;"><code>010</code></td><td style="text-align: center;"><code>S_IXGRP</code></td><td>Execute/search permission, group</td></tr><tr class="even"><td><code>group_all</code></td><td style="text-align: center;"><code>070</code></td><td style="text-align: center;"><code>S_IRWXG</code></td><td>Read, write, execute/search by group; <code>group_read | group_write | group_exe</code></td></tr><tr class="odd"><td><code>others_read</code></td><td style="text-align: center;"><code>04</code></td><td style="text-align: center;"><code>S_IROTH</code></td><td>Read permission, others</td></tr><tr class="even"><td><code>others_write</code></td><td style="text-align: center;"><code>02</code></td><td style="text-align: center;"><code>S_IWOTH</code></td><td>Write permission, others</td></tr><tr class="odd"><td><code>others_exe</code></td><td style="text-align: center;"><code>01</code></td><td style="text-align: center;"><code>S_IXOTH</code></td><td>Execute/search permission, others</td></tr><tr class="even"><td><code>others_all</code></td><td style="text-align: center;"><code>07</code></td><td style="text-align: center;"><code>S_IRWXO</code></td><td>Read, write, execute/search by others; <code>others_read | others_write | others_exe</code></td></tr><tr class="odd"><td><code>all_all</code></td><td style="text-align: center;"><code>0777</code></td><td style="text-align: center;"></td><td><code>owner_all | group_all | others_all</code></td></tr><tr class="even"><td><code>set_uid_on_exe</code></td><td style="text-align: center;"><code>04000</code></td><td style="text-align: center;"><code>S_ISUID</code></td><td>Set-user-ID on execution</td></tr><tr class="odd"><td><code>set_gid_on_exe</code></td><td style="text-align: center;"><code>02000</code></td><td style="text-align: center;"><code>S_ISGID</code></td><td>Set-group-ID on execution</td></tr><tr class="even"><td><code>sticky_bit </code></td><td style="text-align: center;"><code>01000</code></td><td style="text-align: center;"><code>S_ISVTX</code></td><td>Operating system dependent. Inherently non-portable, even between ISO/IEC 9945 operating systems.</td></tr><tr class="odd"><td><code>perms_mask</code></td><td style="text-align: center;"><code>07777</code></td><td style="text-align: center;"> </td><td><code>all_all | set_uid_on_exe | set_gid_on_exe | sticky_bit</code></td></tr><tr class="even"><td><code>perms_not_known</code></td><td style="text-align: center;"><code>0xFFFF</code></td><td style="text-align: center;"></td><td>The permissions are not known, such as when a <code>file_status</code> object is created without specifying the permissions</td></tr><tr class="odd"><td><p><code>add_perms</code></p></td><td style="text-align: center;"><code>0x1000</code></td><td style="text-align: center;"></td><td><p><code>permissions()</code> adds the argument permission bits to the file's current bits</p></td></tr><tr class="even"><td><code>remove_perms</code></td><td style="text-align: center;"><code>0x2000</code></td><td style="text-align: center;"></td><td><code>permissions()</code> removes the argument permission bits from the file's current bits</td></tr><tr class="odd"><td><code>symlink_perms</code></td><td style="text-align: center;"><code>0x4000</code></td><td style="text-align: center;"></td><td><span style="background-color: #E8FFE8">ISO-9945/POSIX </span> <code>   permissions()</code><span style="background-color: #E8FFE8"> resolves symlinks unless </span> <code>symlink_perms</code><span style="background-color: #E8FFE8"> is specified. Meaningless on Windows as </span> <code>   permissions()</code><span style="background-color: #E8FFE8"> never resolves symlinks. Meaningless on Mac OS X and some other BSD systems as </span> <code>   permissions()</code><span style="background-color: #E8FFE8"> always resolves symlinks. Get over it.</span></td></tr></tbody></table>

*<span style="background-color: #E0E0E0">Windows: All permissions except write are currently ignored. There is only a single write permission; setting write permission for owner, group, or others sets write permission for all, and removing write permission for owner, group, or others removes write permission for all. The Cygwin users guide has extensive discussion of the problems involved. Input from security experts is needed.</span>*

1.11 <span id="file_status">Class file\_status</span> \[class.file\_status\]
----------------------------------------------------------------------------

    namespace std { namespace tbd { namespace filesystem {

          class file_status
          {
          public:

            // constructors
            explicit file_status(file_type ft = file_type::none,
                                 perms prms = perms_not_known) noexcept;
            file_status(const file_status&) noexcept = default;
            file_status(file_status&&) noexcept = default;
           ~file_status() = default;

            file_status& operator=(const file_status&) noexcept = default;
            file_status& operator=(file_status&&) noexcept = default;

            // observers
            file_type  type() const noexcept;
            perms      permissions() const noexcept;

            // modifiers
            void       type(file_type ft) noexcept;
            void       permissions(perms prms) noexcept;
          };
    } } }  // namespaces std::tbd::filesystem

An object of type `file_status` stores information about the type and permissions of a file.

### 1.11.1 <span id="file_status-constructors">`file_status` constructors</span> \[file\_status.cons\]

    explicit file_status() noexcept;

> *Postconditions:* `type() == file_type::none`, `permissions() == perms_not_known`.

    explicit file_status(file_type ft, perms prms = perms_not_known) noexcept;

> *Postconditions:* `type() == ft`, `permissions() == prms`.

### 1.11.2 <span id="file_status-observers">`file_status` observers</span> \[file\_status.obs\]

    file_type type() const noexcept;

> *Returns:* The value of `type()` specified by the *postconditions* of the most recent call to a constructor, operator=, or `type(file_type)` function.

    perms permissions() const noexcept;

> *Returns:* The value of `permissions()` specified by the *postconditions* of the most recent call to a constructor, operator=, or `permissions(perms)` function.

### 1.11.3 <span id="file_status-modifiers">`file_status` modifiers</span> \[file\_status.mods\]

    void type(file_type ft) noexcept;

> *Postconditions:* `type() == ft`.

    void permissions(perms prms) noexcept;

> *Postconditions:* `permissions() == prms`.

1.12 <span id="Class-directory_entry">Class `directory_entry`</span> \[class.directory\_entry\]
-----------------------------------------------------------------------------------------------

    namespace std { namespace tbd { namespace filesystem {

          class directory_entry
          {
          public:

            // constructors and destructor
            directory_entry() = default;
            directory_entry(const directory_entry&) = default;
            directory_entry(directory_entry&&) noexcept = default;
            explicit directory_entry(const path& p, file_status st=file_status(),
              file_status symlink_st=file_status());
           ~directory_entry() = default; 

            // modifiers
            directory_entry& operator=(const directory_entry&) = default;
            directory_entry& operator=(directory_entry&&) noexcept = default;
            void assign(const path& p, file_status st=file_status(),
              file_status symlink_st=file_status());
            void replace_filename(const path& p, file_status st=file_status(),
              file_status symlink_st=file_status());

            // observers
            const path&  path() const noexcept;
            file_status  status() const;
            file_status  status(error_code& ec) const noexcept;
            file_status  symlink_status() const;
            file_status  symlink_status(error_code& ec) const noexcept;

            bool operator< (const directory_entry& rhs) const noexcept;
            bool operator==(const directory_entry& rhs) const noexcept; 
            bool operator!=(const directory_entry& rhs) const noexcept; 
            bool operator< (const directory_entry& rhs) const noexcept;
            bool operator<=(const directory_entry& rhs) const noexcept;
            bool operator> (const directory_entry& rhs) const noexcept;
            bool operator>=(const directory_entry& rhs) const noexcept;
          private:
            path                 m_path;           // for exposition only
            mutable file_status  m_status;         // for exposition only; stat()-like
            mutable file_status  m_symlink_status; // for exposition only; lstat()-like
          };

    } } }  // namespaces std::tbd::filesystem

A `directory_entry` object stores a `path object`, a `file_status` object for non-symbolic link status, and a `file_status` object for symbolic link status. The `file_status` objects act as value caches.

> \[*Note:* Because `status()`on a pathname may be a relatively expensive operation, some operating systems provide status information as a byproduct of directory iteration. Caching such status information can result in significant time savings. Cached and non-cached results may differ in the presence of file system races. *-- end note*\]

### 1.12.1 <span id="directory_entry-constructors">`directory_entry `constructors</span> \[directory\_entry.cons\]

    explicit directory_entry(const path& p, file_status st=file_status(),
                             file_status symlink_st=file_status());

> *Postcondition:*
>
> <table><tbody><tr class="odd"><td><strong>Expression</strong></td><td><strong>Value</strong></td></tr><tr class="even"><td><code>path()</code></td><td><code>p</code></td></tr><tr class="odd"><td><code>status()</code></td><td><code>st</code></td></tr><tr class="even"><td><code>symlink_status()</code></td><td><code>symlink_st</code></td></tr></tbody></table>
>
### 1.12.2 <span id="directory_entry-modifiers">`directory_entry `modifiers</span> \[directory\_entry.mods\]

    void assign(const path& p, file_status st=file_status(),
                file_status symlink_st=file_status());

> *Postcondition:*
>
> <table><tbody><tr class="odd"><td><strong>Expression</strong></td><td><strong>Value</strong></td></tr><tr class="even"><td><code>path()</code></td><td><code>p</code></td></tr><tr class="odd"><td><code>status()</code></td><td><code>st</code></td></tr><tr class="even"><td><code>symlink_status()</code></td><td><code>symlink_st</code></td></tr></tbody></table>
>
    void replace_filename(const path& p, file_status st=file_status(),
                          file_status symlink_st=file_status());

> *Postcondition:*
>
> <table><tbody><tr class="odd"><td><strong>Expression</strong></td><td><strong>Value</strong></td></tr><tr class="even"><td><code>path()</code></td><td><code>path().branch() / s</code></td></tr><tr class="odd"><td><code>status()</code></td><td><code>st</code></td></tr><tr class="even"><td><code>symlink_status()</code></td><td><code>symlink_st</code></td></tr></tbody></table>
>
### 1.12.3 <span id="directory_entry-observers">`directory_entry` observers</span> \[directory\_entry.obs\]

    const path& path() const noexcept;

> *Returns:* `m_path`

    file_status status() const;
    file_status status(error_code& ec) const noexcept;

> *Effects:* As if,
>
> >     if (!status_known(m_status))
> >     {
> >       if (status_known(m_symlink_status) && !is_symlink(m_symlink_status))
> >         { m_status = m_symlink_status; }
> >       else { m_status = status(m_path[, ec]); }
> >     }
>
> *Returns:* `m_status`
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    file_status  symlink_status() const;
    file_status  symlink_status(error_code& ec) const noexcept;

> *Effects:* As if,
>
> >     if (!status_known(m_symlink_status))
> >     {
> >       m_symlink_status = symlink_status(m_path[, ec]);
> >     }
>
> *Returns:* `m_symlink_status`
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    bool operator==(const directory_entry& rhs) const noexcept;

> *Returns:* `m_path == rhs.m_path`.

    bool operator!=(const directory_entry& rhs) const noexcept;

> *Returns:* `m_path != rhs.m_path`.

    bool operator< (const directory_entry& rhs) const noexcept;

> *Returns:* `m_path < rhs.m_path`.

    bool operator<=(const directory_entry& rhs) const noexcept;

> *Returns:* `m_path <= rhs.m_path`.

    bool operator> (const directory_entry& rhs) const noexcept;

> *Returns:* `m_path > rhs.m_path`.

    bool operator>=(const directory_entry& rhs) const noexcept;

> *Returns:* `m_path >= rhs.m_path`.

1.13 <span id="Class-directory_iterator">Class `directory_iterator` \[class.directory\_iterator\]</span>
--------------------------------------------------------------------------------------------------------

An object of type `directory_iterator` provides an iterator for a sequence of `directory_entry` elements representing the files in a directory.  \[*Note:* For iteration into sub-directories,  see class `recursive_directory_iterator` (\[class.rec.dir.itr\]). *--end note*\]

    namespace std { namespace tbd { namespace filesystem {

          class directory_iterator :
            public iterator<input_iterator_tag, directory_entry>
          {
          public:
            // member functions
            directory_iterator() noexcept;
            explicit directory_iterator(const path& p);
            directory_iterator(const path& p, error_code& ec) noexcept;
            directory_iterator(const directory_iterator&) = default;
            directory_iterator(directory_iterator&&) = default;
           ~directory_iterator() = default;

            directory_iterator& operator=(const directory_iterator&) = default;
            directory_iterator& operator=(directory_iterator&&) = default;

            const directory_entry& operator*() const;
            const directory_entry* operator->() const;
            directory_iterator&    operator++();
            directory_iterator&    increment(error_code& ec) noexcept;

            // other members as required by
            //  C++ Std, 24.1.1 Input iterators [input.iterators]
          };

    } } }  // namespaces std::tbd::filesystem

`directory_iterator` satisfies the requirements of an input iterator (\[input.iterators\]).

If an iterator of type `directory_iterator` is advanced past the last directory element, that iterator shall become equal to the end iterator value. The `directory_iterator` default constructor shall create an iterator equal to the end iterator value, and this shall be the only valid iterator for the end condition.

The result of `operator*` on an end iterator is undefined behavior. For any other iterator value a `const directory_entry&` is returned. The result of `operator->` on an end iterator is undefined behavior. For any other iterator value a `const directory_entry*` is returned.

Two end iterators are always equal. An end iterator shall not be equal to a non-end iterator.

> *<span style="background-color: #E0E0E0">The above wording is based on the Standard Library's istream\_iterator wording.</span>*

The result of calling the `path()` member of the `directory_entry` object obtained by dereferencing a `directory_iterator` is a reference to a `path` object composed of the directory argument from which the iterator was constructed with filename of the directory entry appended as if by `operator/=`.

Directory iteration shall not yield directory entries for the current (*dot*) and parent (*dot-dot*) directories.

The order of directory entries obtained by dereferencing successive increments of a `directory_iterator` is unspecified.

> \[*Note:* Programs performing directory iteration may wish to test if the path obtained by dereferencing a directory iterator actually exists. It could be a symbolic link to a non-existent file. Programs recursively walking directory trees for purposes of removing and renaming entries may wish to avoid following symbolic links.
>
> If a file is removed from or added to a directory after the construction of a `directory_iterator` for the directory, it is unspecified whether or not subsequently incrementing the iterator will ever result in an iterator referencing the removed or added directory entry. See ISO/IEC 9945 `readdir_r()`. *--end note*\]

### 1.13.1 <span id="directory_iterator-members">`directory_iterator` members</span> \[directory\_iterator.members\]

`directory_iterator()  noexcept;`

> *Effects:* Constructs the end iterator.

    explicit directory_iterator(const path& p);
    directory_iterator(const path& p, error_code& ec) noexcept;

> *Effects:* For the directory that `p` resolves to, constructs an iterator for the first element in a sequence of `directory_entry` elements representing the files in the directory, if any; otherwise the end iterator.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> \[*Note:* To iterate over the current directory, use `directory_iterator(".")` rather than `directory_iterator("")`. *-- end note*\]

    directory_iterator& operator++();
    directory_iterator& increment(error_code& ec) noexcept;

> *Effects:* As specified by the C++ Standard, 24.1.1 Input iterators \[input.iterators\]
>
> *Returns:* `*this`.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

### 1.13.2 <span id="directory_iterator-non-member-functions">`directory_iterator` non-member functions</span> \[directory\_iterator.nonmembers\]

These functions enable use of `directory_iterator` with C++11 range-based for statements.

    const directory_iterator& begin(const directory_iterator& iter) noexcept;

> *Returns:* `iter`.

    directory_iterator end(const directory_iterator&) noexcept;

> *Returns:* `directory_iterator()`.

1.14 <span id="Class-recursive_directory_iterator">Class `recursive_directory_iterator` \[class.rec.dir.itr\]</span>
--------------------------------------------------------------------------------------------------------------------

An object of type `recursive_directory_iterator` provides an iterator for a sequence of `directory_entry` elements representing the files in a directory and its sub-directories.

    namespace std { namespace tbd { namespace filesystem {

          class recursive_directory_iterator :
            public iterator<input_iterator_tag, directory_entry>
          {
          public:

            // constructors and destructor
            recursive_directory_iterator() noexcept;
            recursive_directory_iterator(const recursive_directory_iterator&) = default;
            explicit recursive_directory_iterator(const path& p,
              directory_options options = directory_options::none);
            recursive_directory_iterator(const path& p,
              directory_options options, error_code& ec) noexcept;
            recursive_directory_iterator(const path& p, error_code& ec) noexcept;
            recursive_directory_iterator(directory_iterator&&) = default;
           ~recursive_directory_iterator() = default;

            // observers
            directory_options  options() const;
            int                depth() const;
            bool               recursion_pending() const;

            // modifiers
            recursive_directory_iterator& operator=(const directory_iterator&) = default;
            recursive_directory_iterator& operator=(directory_iterator&&) = default;

            recursive_directory_iterator& operator++();
            recursive_directory_iterator& increment(error_code& ec);

            void pop();
            void disable_recursion_pending();

            // ... other members as required for Input iterators [input.iterators]
          };

    } } }  // namespaces std::tbd::filesystem

The behavior of a `recursive_directory_iterator` is the same as a `directory_iterator` unless otherwise specified.

### 1.14.1 `recursive_directory_iterator` members \[<span id="rec.dir.itr.members">rec.dir.itr.members</span>\]

    recursive_directory_iterator() noexcept;

> *Effects:* Constructs the end iterator.

    explicit recursive_directory_iterator(const path& p,
      directory_options options = directory_options::none);
    recursive_directory_iterator(const path& p, directory_options options, error_code& ec);
    recursive_directory_iterator(const path& p, error_code& ec);

> *Effects:*  Constructs a iterator representing the first entry in the directory `p` resolves to, if any; otherwise, the end iterator.
>
> *Postcondition:* `options() == options` for the signatures with a ` directory_options` argument, otherwise `options() ==  directory_options::none`.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> \[*Note:* To iterate over the current directory, use `recursive_directory_iterator(".")` rather than `recursive_directory_iterator("")`. *-- end note*\]
>
> \[*Note:* By default, `recursive_directory_iterator` does not follow directory symlinks. To follow directory symlinks, specify `options` as ` directory_options::follow_directory_symlink` *-- end note*\]

    directory_options options() const;

> *Requires:* `*this != recursive_directory_iterator()`.
>
> *Returns:* The value of the constructor `options` argument, if present, otherwise `directory_options::none`.
>
> *Throws:* Nothing.

    int depth() const;

> *Requires:* `*this != recursive_directory_iterator()`.
>
> *Returns:* The current depth of the directory tree being traversed. \[*Note:* The initial directory is depth 0, its immediate subdirectories are depth 1, and so forth. *-- end note*\]
>
> *Throws:* Nothing.

    bool recursion_pending() const;

> *Requires:* `*this != recursive_directory_iterator()`.
>
> *Returns:* `true` if `disable_recursion_pending()` has not been called subsequent to the prior construction or increment operation, otherwise `false`.
>
> *Throws:* Nothing.

    recursive_directory_iterator& operator++();
    recursive_directory_iterator& increment(error_code& ec);

> *Requires:* `*this != recursive_directory_iterator()`.
>
> *Effects:* As specified by the C++ Standard, 24.1.1 Input iterators \[input.iterators\], except that:
>
> -   If there are no more entries at this depth, then if `depth()!= 0` iteration over the parent directory resumes; otherwise `*this = recursive_directory_iterator()`.
>
> -   Otherwise if `recursion_pending() && is_directory(this->status())  && (!is_symlink(this->symlink_status()) || (options() &  directory_options::follow_directory_symlink) != 0)` then directory `(*this)->path()` is recursively iterated into.
>
> *Returns:* `*this`.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    void pop();

> *Requires:* `*this != recursive_directory_iterator()`.
>
> *Effects:* If `depth() == 0`, set `*this` to `recursive_directory_iterator()`. Otherwise, cease iteration of the directory currently being iterated over, and continue iteration over the parent directory.

    void disable_recursion_pending();

> *Requires:* `*this != recursive_directory_iterator()`.
>
> *Postcondition:* `recursion_pending() == false`.
>
> \[*Note:* `disable_recursion_pending``()` is used to prevent unwanted recursion into a directory. *--end note*\]

### 1.14.2 `recursive_directory_iterator` non-member functions \[<span id="rec.dir.itr.nonmembers">rec.dir.itr.nonmembers</span>\]

These functions enable use of `recursive_directory_iterator` with C++11 range-based for statements.

    const recursive_directory_iterator& begin(const recursive_directory_iterator& iter) noexcept;

> *Returns:* `iter`.

    recursive_directory_iterator end(const recursive_directory_iterator&) noexcept;

> *Returns:* `recursive_directory_iterator()`.

1.15 <span id="Operational-functions">Operational functions</span> \[fs.op.funcs\]
----------------------------------------------------------------------------------

Operational functions query or modify files, including directories, in external storage.

\[*Note:* Because hardware failures, network failures, [file system races](#file-system-race), and many other kinds of errors occur frequently in file system operations, users should be aware that any filesystem operational function, no matter how apparently innocuous, may encounter an error. See [Error reporting](#Error-reporting). *-- end note*\]

    path absolute(const path& p, const path& base=current_path());

> *Returns:* An [absolute path](#Absolute-path) composed according to the following table
>
> <table><tbody><tr class="odd"><td style="text-align: center;"> </td><td style="text-align: center;"><strong><code>p.has_root_directory()</code></strong></td><td style="text-align: center;"><strong><code>!p.has_root_directory()</code></strong></td></tr><tr class="even"><td style="text-align: center;"><strong><code>p.has_root_name()</code></strong></td><td style="text-align: center;"><code>return p</code></td><td style="text-align: center;"><code>return p.root_name() / absolute(base).root_directory()       / absolute(base).relative_path() / p.relative_path()</code></td></tr><tr class="odd"><td style="text-align: center;"><strong><code>!p.has_root_name()</code></strong></td><td style="text-align: center;"><code>return absolute(base).root_name()       / p</code></td><td style="text-align: center;"><code>return absolute(base) / p</code></td></tr></tbody></table>
>
> \[*Note:* For the returned path, `rp,` `rp.is_absolute()` is true. *-- end note*\]
>
> *Throws:* If `base.is_absolute()` is true, throws only if memory allocation fails.

    path canonical(const path& p, const path& base = current_path());
    path canonical(const path& p, error_code& ec);
    path canonical(const path& p, const path& base, error_code& ec);

> *Overview:* Converts `p`, which must exist, to an absolute path that has no symbolic link, `"."`, or `".."` elements.
>
> *Returns:* A path that refers to the same file system object as `absolute(p,base)`. For the overload without a `base` argument, `base` is `current_path()`. Signatures with argument `ec` return `path()` if an error occurs.
>
> *Throws:*  As specified in [Error reporting](#Error-reporting).
>
> *Remarks:* `!exists(p)` is an error.
>
> \[*Note:* Canonical pathnames allow security checking of a path (e.g. does this path live in /home/goodguy or /home/badguy?)  *-- end note*\]

    void copy(const path& from, const path& to);
    void copy(const path& from, const path& to, error_code& ec) noexcept;

> *Effects:* `copy(from, to, copy_options::none[, ec])`.

    void copy(const path& from, const path& to, copy_options options);
    void copy(const path& from, const path& to, copy_options options, error_code& ec) noexcept;

> *Precondition:* At most one constant from each option group (\[[enum.copy\_options](#enum.copy_options)\]) is present in `options`.
>
> *Effects:*
>
> > Before the first use of `f` and `t`:
> >
> > -   If `(options & copy_options::create_symlinks) || (options &        copy_options::skip_symlinks)`, then `auto f =        symlink_status(from)` and if needed `auto t = symlink_status(to)`.
> > -   Otherwise, `auto f = status(from)` and if needed `auto        t = status(to)`.
> >
> > Report an error as specified in [Error reporting](#Error-reporting) if:
> >
> > -   `!exists(f)`.
> > -   `equivalent(f, t)`.
> > -   `is_other(f) || is_other(t)`.
> > -   `is_directory(f) && is_regular_file(t)`.
> >
> > If `is_symlink_file(f)`, then:
> >
> > -   If `options & copy_options::skip_symlinks`, then return.
> > -   Otherwise if `!exists(t)`, then `copy_symlink(from,        to, options)`.
> > -   Otherwise report an error as specified in [Error reporting](#Error-reporting).
> >
> > Otherwise if `is_regular_file(f)`, then:
> >
> > -   If `options & copy_options::structure_only`, then return.
> > -   Otherwise if `options & copy_options::create_symlinks`, then create a symbolic link to the source file.
> > -   Otherwise if `options & copy_options::create_hard_links`, then create a hard link to the source file.
> > -   Otherwise:
> >     -   If `is_directory(t)`, then `copy_file(from, to/from.filename(),          options)`.
> >     -   Otherwise, `copy_file(from, to, options)`.

> > Otherwise if `is_directory(f) && ((options &    copy_options::recursive) || !(options & copy_options::unspecified))` then:
> >
> > -   If  `!exists(t)`, then `create_directory(to,        from)`.
> > -   Then, iterate over the files in `from`, as if by `for        (directory_entry& x : directory_iterator(from))`, and for each iteration `copy(x.path(), to/x.path().filename(), options |        copy_options::unspecified)`.
> >
> > Otherwise no effects.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> *Remarks:* For the signature with argument `ec`, any Filesystem library functions called by the implementation shall have an `   error_code` argument if applicable.
>
> \[*Example:* Given this directory structure:
>
>     /dir1
>       file1
>       file2
>       dir2
>         file3
>
> Calling `copy("/dir1", "/dir3")` would result in:
>
>     /dir1
>       file1
>       file2
>       dir2
>         file3
>     /dir3
>       file1
>       file2
>
> Alternatively, calling `copy("/dir1", "/dir3",    copy_options::recursive)` would result in:
>
>     /dir1
>       file1
>       file2
>       dir2
>         file3  
>     /dir3
>       file1
>       file2
>       dir2
>         file3
>
> *-- end example*\]

    bool copy_file(const path& from, const path& to);
    bool copy_file(const path& from, const path& to, error_code& ec) noexcept;

> *Returns:* `copy_file(from, to, copy_options::none`*\[*`, ec`*\]*`)`.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    bool copy_file(const path& from, const path& to, copy_options options);
    bool copy_file(const path& from, const path& to, copy_options options,
                   error_code& ec) noexcept;

> *Precondition:* At most one constant from each `copy_options` option group (\[[enum.copy\_options](#enum.copy_options)\]) is present in `options`.
>
> *Effects:*
>
> > If  `exists(to) &&` `!(options & (copy_options::skip    | copy_options::overwrite | copy_options::update))` report a file already exists error as specified in [Error reporting](#Error-reporting).
> >
> > If `!exists(to) || (options & copy_options::overwrite) || ((options & copy_options::update)    && last_write_time(from) > last_write_time(to)) || !(options & (copy_options::skip    | copy_options::overwrite | copy_options::update))` copy the contents and attributes of the file `from` resolves to the file `to` resolves to.
>
> *Returns*: `true` if the `from` file was copied, otherwise `false`. The signature with argument `ec` return `false` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> *Complexity:* At most one direct or indirect invocation of `   status(to)`.

    void copy_symlink(const path& existing_symlink, const path& new_symlink);
    void copy_symlink(const path& existing_symlink, const path& new_symlink,
                      error_code& ec) noexcept;

> *Effects:* `function(read_symlink(existing_symlink`*\[*`, ec`*\]*`), new_symlink`*\[*`, ec`*\]*`)`, where *`function`* is `create_symlink` or `   create_directory_symlink`, as appropriate.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    bool create_directories(const path& p);
    bool create_directories(const path& p, error_code& ec) noexcept;

> *Effects:* Establishes the postcondition by calling `   create_directory()` for any element of `p` that does not exist.
>
> *Postcondition:* `is_directory(p)`
>
> *Returns:* `true` if a new directory was created, otherwise `   false`. The signature with argument `ec` returns false if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> *Complexity:* *O(n+1)* where *n* is the number of elements of `p` that do not exist.

    bool create_directory(const path& p);
    bool create_directory(const path& p, error_code& ec) noexcept;

> *Effects:* Establishes the postcondition by attempting to create the directory `p` resolves to, as if by ISO/IEC 9945 `   mkdir()` with a second argument of S\_IRWXU|S\_IRWXG|S\_IRWXO. Creation failure because `p` resolves to an existing directory shall not be treated as an error.
>
> *Postcondition:* `is_directory(p)`
>
> *Returns:* `true` if a new directory was created, otherwise `false`. The signature with argument `ec` returns false if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    bool create_directory(const path& p, const path& existing_p);
    bool create_directory(const path& p, const path& existing_p, error_code& ec) noexcept;

> *Effects:* Establishes the postcondition by attempting to create the directory `p` resolves to, with attributes copied from directory `existing_p`. The set of attributes copied is operating system dependent. Creation failure because `p` resolves to an existing directory shall not be treated as an error.
>
> > <table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><p>[<em>Note:</em> For POSIX based operating systems the attributes are those copied by native API <code>stat(existing_p.c_str(), &amp;attributes_stat)</code> followed by <code>mkdir(p.c_str(), attributes_stat.st_mode)</code>.  For Windows based operating systems the attributes are those copied by native API <code>CreateDirectoryExW(existing_p.c_str(), p.c_str(), 0)</code>.  <em>--end note</em>]</p></td></tr></tbody></table>
> >
> *Postcondition:* `is_directory(p)`
>
> *Returns:* `true` if a new directory was created, otherwise `false`. The signature with argument `ec` returns false if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    void create_directory_symlink(const path& to, const path& new_symlink);
    void create_directory_symlink(const path& to, const path& new_symlink,
                                  error_code& ec) noexcept;

> *Effects:* Establishes the postcondition, as if by ISO/IEC 9945 `symlink()`.
>
> *Postcondition:* `new_symlink` resolves to a symbolic link file that contains an unspecified representation of `to`.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> \[*Note:* Some operating systems require symlink creation to identify that the link is to a directory. Portable code should use `create_directory_symlink()` to create directory symlinks rather than `create_symlink()` *-- end note*\]
>
> \[*Note:* Some operating systems do not support symbolic links at all or support them only for regular files. Some file systems do not support symbolic links regardless of the operating system - the FAT file system used on memory cards and flash drives, for example. *-- end note*\]

    void create_hard_link(const path& to, const path& new_hard_link);
    void create_hard_link(const path& to, const path& new_hard_link,
                                          error_code& ec) noexcept;

> *Effects:* Establishes the postcondition, as if by ISO/IEC 9945 `link()`.
>
> *Postcondition:*
>
> -    `exists(to) &&      exists(``new_hard_link``) && equivalent(to,            ``new_hard_link``)`
> -   The contents of the file or directory `to` resolves to are unchanged.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> \[*Note:* Some operating systems do not support hard links at all or support them only for regular files. Some file systems do not support hard links regardless of the operating system - the FAT file system used on memory cards and flash drives, for example. Some file systems limit the number of links per file. *-- end note*\]

    void create_symlink(const path& to, const path& new_symlink);
    void create_symlink(const path& to, const path& new_symlink,
                        error_code& ec) noexcept;

> *Effects:* Establishes the postcondition, as if by ISO/IEC 9945 `symlink()`.
>
> *Postcondition:* `new_symlink` resolves to a symbolic link file that contains an unspecified representation of `to`.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> \[*Note:* Some operating systems do not support symbolic links at all or support them only for regular files. Some file systems do not support symbolic links regardless of the operating system - the FAT system used on memory cards and flash drives, for example. *-- end note*\]

    path current_path();
    path current_path(error_code& ec);

> *Returns:* The absolute path of the current working directory, obtained as if by ISO/IEC 9945 `getcwd()`. The signature with argument `ec` returns `path()` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> *Remarks:* The current working directory is the directory, associated with the process, that is used as the starting location in pathname resolution for relative paths.
>
> \[*Note:* The `current_path()` name was chosen to emphasize that the return is a path, not just a single directory name.
>
> The current path as returned by many operating systems is a dangerous global variable. It may be changed unexpectedly by a third-party or system library functions, or by another thread.  *-- end note*\]

    void current_path(const path& p);
    void current_path(const path& p, error_code& ec) noexcept;

> *Effects:* Establishes the postcondition, as if by ISO/IEC 9945 `chdir()`.
>
> *Postcondition:* `equivalent(p, current_path())`.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> \[*Note:* The current path for many operating systems is a dangerous global state. It may be changed unexpectedly by a third-party or system library functions, or by another thread.  *-- end note*\]

    bool exists(file_status s) noexcept;

> *Returns:* `status_known(s) && s.type() !=    file_type::not_found`

    bool exists(const path& p);
    bool exists(const path& p, error_code& ec) noexcept;

> *Returns:* `exists(status(p))` or `exists(status(p, ec))`, respectively. The signature with argument `ec` returns `false` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    bool equivalent(const path& p1, const path& p2);
    bool equivalent(const path& p1, const path& p2, error_code& ec) noexcept;

> *Effects:* Determines `file_status s1` and `s2`, as if by `status(p1)` and  `status(p2)`, respectively.
>
> *Returns:* `true`, if `sf1 ==    sf2` and `p1` and `p2` resolve to the same file system entity, else `false`. The signature with argument `ec` returns `false` if an error occurs.
>
> > Two paths are considered to resolve to the same file system entity if two candidate entities reside on the same device at the same location. This is determined as if by the values of the ISO/IEC 9945 `stat` structure`,` obtained as if by `stat()` for the two paths, having equal `st_dev` values and equal `st_ino` values.
> >
> > *<span style="background-color: #E0E0E0">\[Note: ISO/IEC 9945 requires that "st\_dev must be unique within a Local Area Network". Conservative ISO/IEC 9945 implementations may also wish to check for equal `st_size` and `st_mtime` values. Windows implementations may use `GetFileInformationByHandle()` as a surrogate for `stat()`, and consider "same" to be equal values for `dwVolumeSerialNumber`, `nFileIndexHigh`, `nFileIndexLow`, `nFileSizeHigh`, `nFileSizeLow`, `ftLastWriteTime.dwLowDateTime`, and `ftLastWriteTime.dwHighDateTime`. -- end note\]</span>*
>
> *Throws:* `filesystem_error` if `(!exists(s1) && !exists(s2)) || (is_other(s1) && is_other(s2))`, otherwise as specified in [Error reporting](#Error-reporting).

    uintmax_t file_size(const path& p);
    uintmax_t file_size(const path& p, error_code& ec) noexcept;

> *Returns:* If `exists(p) && is_regular_file(p)`, the size in bytes of the file `p` resolves to, determined as if by the value of the ISO/IEC 9945 `stat` structure member `st_size` obtained as if by ISO/IEC 9945 `stat()`. Otherwise, `static_cast<uintmax_t>(-1)`. The signature with argument `ec` returns `static_cast<uintmax_t>(-1)` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    uintmax_t hard_link_count(const path& p);
    uintmax_t hard_link_count(const path& p, error_code& ec) noexcept;

> *Returns:* The number of hard links for `p`. The signature with argument `ec` returns `static_cast<uintmax_t>(-1)` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    bool is_block_file(file_status s) noexcept;

> *Returns:* `s.type() == file_type::block`

    bool is_block_file(const path& p);
    bool is_block_file(const path& p, error_code& ec) noexcept;

> *Returns:* `is_block_file(status(p))` or `   is_block_file(status(p, ec))`, respectively. The signature with argument `   ec` returns `false` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    bool is_character_file(file_status s) noexcept;

> *Returns:* `s.type() == file_type::character`

    bool is_character_file(const path& p);
    bool is_character_file(const path& p, error_code& ec) noexcept;

> *Returns:* `is_character_file(status(p))` or `is_character_file(status(p, ec))`, respectively. The signature with argument `ec` returns `false` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    bool is_directory(file_status s) noexcept;

> *Returns:* `s.type() == file_type::directory`

    bool is_directory(const path& p);
    bool is_directory(const path& p, error_code& ec) noexcept;

> *Returns:* `is_directory(status(p))` or `   is_directory(status(p, ec))`, respectively. The signature with argument `   ec` returns `false` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    bool is_empty(const path& p);
    bool is_empty(const path& p, error_code& ec) noexcept;

> *Effects:* Determines `file_status s`, as if by `status(p, ec)`.
>
> *Returns:* `is_directory(s)          ? directory_iterator(p) == directory_iterator()          : file_size(p) == 0;`
>
> > The signature with argument `ec` returns `false` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    bool is_fifo(file_status s) noexcept;

> *Returns:* `s.type() == file_type::fifo`

    bool is_fifo(const path& p);
    bool is_fifo(const path& p, error_code& ec) noexcept;

> *Returns:* `is_fifo(status(p))` or `is_fifo(status(p,    ec))`, respectively. The signature with argument `ec` returns `   false` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    bool is_other(file_status s) noexcept;

> *Returns:* `return exists(s) && !is_regular_file(s) && !is_directory(s) && !is_symlink(s)`

    bool is_other(const path& p);
    bool is_other(const path& p, error_code& ec) noexcept;

> *Returns:* `is_other(status(p))` or `is_other(status(p, ec))`, respectively. The signature with argument `ec` returns `false` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    bool is_regular_file(file_status s) noexcept;

> *Returns:* `s.type() == file_type::regular`.

    bool is_regular_file(const path& p);

> *Returns:* `is_regular_file(status(p))`.
>
> *Throws:* `filesystem_error` if `status(p)` would throw `filesystem_error.`

    bool is_regular_file(const path& p, error_code& ec) noexcept;

> *Effects:* Sets `ec` as if by `status(p, ec)`. \[*Note:* `   file_type::none`, `file_type::not_found` and `   file_type::unknown` cases set `ec` to error values. To distinguish between cases, call the `status` function directly. *-- end note*\]
>
> *Returns:* `is_regular_file(status(p, ec))`. Returns `   false` if an error occurs.

    bool is_socket(file_status s) noexcept;

> *Returns:* `s.type() == file_type::socket`

    bool is_socket(const path& p);
    bool is_socket(const path& p, error_code& ec) noexcept;

> *Returns:* `is_socket(status(p))` or `   is_socket(status(p, ec))`, respectively. The signature with argument `   ec` returns `false` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    bool is_symlink(file_status s) noexcept;

> *Returns:* `s.type() == file_type::symlink`

    bool is_symlink(const path& p);
    bool is_symlink(const path& p, error_code& ec) noexcept;

> *Returns:* `is_symlink(symlink_status(p))` or `is_symlink(symlink_status(p, ec))`, respectively. The signature with argument `ec` returns `false` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    file_time_type last_write_time(const path& p);
    file_time_type last_write_time(const path& p, error_code& ec) noexcept;

> *Returns:* The time of last data modification of `p`, determined as if by the value of the ISO/IEC 9945 `stat` structure member `st_mtime`  obtained as if by ISO/IEC 9945 `stat()`. The signature with argument `ec` returns `static_cast<file_time_type>(-1)` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    void last_write_time(const path& p, file_time_type new_time);
    void last_write_time(const path& p, file_time_type new_time,
                         error_code& ec) noexcept;

> *Effects:* Sets the time of last data modification of the file resolved to by `p` to `new_time`, as if by ISO/IEC 9945 `stat()` followed by ISO/IEC 9945 [`utime()`](http://www.opengroup.org/onlinepubs/000095399/functions/utime.html).
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> \[*Note:* A postcondition of `last_write_time(p) == new_time` is not specified since it might not hold for file systems with coarse time granularity. *-- end note*\]

    void permissions(const path& p, perms prms);
    void permissions(const path& p, perms prms, error_code& ec) noexcept;

> *Requires:* `!((prms & add_perms) && (prms & remove_perms))`.
>
> *Effects:* Applies the effective permissions bits from `prms` to the file `p` resolves to, as if by ISO/IEC 9945 `fchmodat()`. The effective permission bits are determined as specified by the following table.
>
> <table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><strong>bits present in <code>prms</code></strong></td><td><strong>Effective bits applied</strong></td></tr><tr class="even"><td>Neither <code>add_perms</code> nor <code>remove_perms</code></td><td><code>prms &amp; perms_mask</code></td></tr><tr class="odd"><td><code>add_perms</code></td><td><p><code>status(p).permissions() | (prms &amp; perms_mask)</code></p></td></tr><tr class="even"><td><code>remove_perms</code></td><td><code>status(p)</code><code>.permissions() &amp; ~(prms &amp; perms_mask) </code></td></tr></tbody></table>
>
> \[*Note:* Conceptually permissions are viewed as bits, but the actual implementation may use some other mechanism. -- *end note*\]
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    path read_symlink(const path& p);
    path read_symlink(const path& p, error_code& ec);

> *Returns:*  If `p` resolves to a symbolic link, a `path` object containing the contents of that symbolic link. Otherwise `path()`. The signature with argument `ec` returns `path()` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting). \[*Note:* It is an error if `p` does not resolve to a symbolic link. *-- end note*\]

    bool remove(const path& p);
    bool remove(const path& p, error_code& ec) noexcept;

> *Effects:*  If `exists(symlink_status(p,ec))`, it is removed as if by ISO/IEC 9945 `remove()`.
>
> > \[*Note:* A symbolic link is itself removed, rather than the file it resolves to being removed. *-- end note*\]
>
> *Postcondition:* `!exists(symlink_status(p))`.
>
> *Returns:*  `false` if p did not exist in the first place, otherwise `true`. The signature with argument `ec` returns `false` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    uintmax_t remove_all(const path& p);
    uintmax_t remove_all(const path& p, error_code& ec) noexcept;

> *Effects:*  Recursively deletes the contents of p if it exists, then deletes file `p` itself, as if by ISO/IEC 9945 `remove()`.
>
> > \[*Note:* A symbolic link is itself removed, rather than the file it resolves to being removed. *-- end note*\]
>
> *Postcondition:* `!exists(p)`
>
> *Returns:* The number of files removed. The signature with argument `ec` returns `static_cast<uintmax_t>(-1)` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    void rename(const path& old_p, const path& new_p);
    void rename(const path& old_p, const path& new_p, error_code& ec) noexcept;

> *Effects:* Renames `old_p` to `new_p`, as if by ISO/IEC 9945 `rename()`.
>
> > \[*Note:* If `old_p` and `new_p` resolve to the same existing file, no action is taken. Otherwise, if `new_p` resolves to an existing non-directory file, it is removed, while if `new_p` resolves to an existing directory, it is removed if empty on ISO/IEC 9945 compliant operating systems but is an error on some other operating systems. A symbolic link is itself renamed, rather than the file it resolves to being renamed. *-- end note*\]
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    void resize_file(const path& p, uintmax_t new_size);
    void resize_file(const path& p, uintmax_t new_size, error_code& ec) noexcept;

> *Postcondition:* `file_size() == new_size`.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> *Remarks:* Achieves its postconditions as if by ISO/IEC 9945 `truncate()`.

    space_info space(const path& p);
    space_info space(const path& p, error_code& ec) noexcept;

> *Returns:* An object of type `space_info`. The value of the `space_info` object is determined as if by using ISO/IEC 9945 `statvfs()` to obtain a ISO/IEC 9945 struct `statvfs`, and then multiplying its `f_blocks`, `f_bfree`, and `f_bavail` members by its `f_frsize` member, and assigning the results to the `capacity`, `free`, and `available` members respectively. Any members for which the value cannot be determined shall be set to `static_cast<uintmax_t>(-1)`. For the signature with argument `ec`, all members are set to `   static_cast<uintmax_t>(-1)` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    file_status status(const path& p);

> *Effects:* As if:
>
> >     error_code ec;
> >     file_status result = status(p, ec);
> >     if (result == file_type::none)
> >       throw filesystem_error(implementation-supplied-message, p, ec);
> >     return result;
>
> *Returns:* See above.
>
> *Throws:* `filesystem_error`. \[*Note:* `result` values of `   file_status(file_type::not_found)` and `file_status(file_type::unknown)` are not considered failures and do not cause an exception to be thrown. *-- end note*\]

    file_status status(const path& p, error_code& ec) noexcept;

> *Effects:*
>
> > If possible, determines the attributes of the file `p` resolves to, as if by ISO/IEC 9945 `stat()`.
> >
> > If, during attribute determination, the underlying file system API reports an error, sets `ec` to indicate the specific error reported. Otherwise, `ec.clear()`.
> >
> > > \[*Note:* This allows users to inspect the specifics of underlying API errors even when the value returned by `status()` is not `       file_status(file_type::none)`.  *--end note*\]
>
> *Returns:*
>
> > If `ec != error_code()`:
> >
> > -   If the specific error indicates that `p` cannot be resolved because some element of the path does not exist, return `       file_status(file_type::not_found)`.<span style="font-style: italic; background-color: #E0E0E0"> \[</span>*<span style="background-color: #E0E0E0">Note: ISO/</span><span style="background-color: #E0E0E0">IEC</span><span style="background-color: #E0E0E0"> 9945 errors that indicate this are </span><span style="background-color: #E0E0E0">ENOENT</span><span style="background-color: #E0E0E0"> or </span><span style="background-color: #E0E0E0">ENOTDIR</span><span style="background-color: #E0E0E0">. Windows equivalents include </span><span style="background-color: #E0E0E0"> ERROR\_FILE\_NOT\_FOUND</span><span style="background-color: #E0E0E0">, </span><span style="background-color: #E0E0E0">ERROR\_PATH\_NOT\_FOUND</span><span style="background-color: #E0E0E0">, </span><span style="background-color: #E0E0E0">ERROR\_INVALID\_NAME</span><span style="background-color: #E0E0E0">, </span><span style="background-color: #E0E0E0">ERROR\_INVALID\_PARAMETER</span><span style="background-color: #E0E0E0">, </span><span style="background-color: #E0E0E0">ERROR\_BAD\_PATHNAME</span><span style="background-color: #E0E0E0">, and </span><span style="background-color: #E0E0E0">ERROR\_BAD\_NETPATH</span><span style="background-color: #E0E0E0">. -- end note</span>*<span style="font-style: italic; background-color: #E0E0E0">\]</span>  
> >      
> > -   Otherwise, if the specific error indicates that `p` can be resolved but the attributes cannot be determined, return `       file_status(file_type::unknown)`. <span style="font-style: italic; background-color: #E0E0E0">\[</span>*<span style="background-color: #E0E0E0">Note: For example, Windows </span><span style="background-color: #E0E0E0">ERROR\_SHARING\_VIOLATION</span><span style="background-color: #E0E0E0"> errors. For ISO/</span><span style="background-color: #E0E0E0">IEC</span><span style="background-color: #E0E0E0"> 9945, the case never arises. -- end note</span>*<span style="font-style: italic; background-color: #E0E0E0">\]</span>  
> >      
> > -   Otherwise, return `       file_status(file_type::none)`.
> >
> > > \[*Note:* These semantics distinguish between `p` being known not to exist, `p` existing but not being able to determine its attributes, and there being an error that prevents even knowing if `p` exists. These distinctions are important to some use cases. *--end note*\]
> >
> > Otherwise,
> >
> > -   If the attributes indicate a regular file, as if by ISO/IEC 9945 [S\_ISREG()](http://www.opengroup.org/onlinepubs/000095399/basedefs/sys/stat.h.html), return `       file_status(file_type::regular)`. \[*Note:* `       file_type::regular` implies appropriate `<fstream>` operations would succeed, assuming no hardware, permission, access, or file system race errors. Lack of `file_type::regular` does not necessarily imply `<fstream>` operations would fail on a directory. *-- end note*\]  
> >      
> > -   Otherwise, if the attributes indicate a directory, as if by ISO/IEC 9945 [S\_ISDIR()](http://www.opengroup.org/onlinepubs/000095399/basedefs/sys/stat.h.html), return `       file_status(file_type::directory)`. \[*Note:* `       file_type::directory` implies ` directory_iterator(p)`would succeed. *-- end note*\]  
> >      
> > -   Otherwise, if the attributes indicate a block special file, as if by ISO/IEC 9945 [S\_ISBLK()](http://www.opengroup.org/onlinepubs/000095399/basedefs/sys/stat.h.html), return `       file_status(file_type::block)`.  
> >      
> > -   Otherwise, if the attributes indicate a character special file, as if by ISO/IEC 9945 [S\_ISCHR()](http://www.opengroup.org/onlinepubs/000095399/basedefs/sys/stat.h.html), return `       file_status(file_type::character)`.  
> >      
> > -   Otherwise, if the attributes indicate a fifo or pipe file, as if by ISO/IEC 9945 [S\_ISFIFO()](http://www.opengroup.org/onlinepubs/000095399/basedefs/sys/stat.h.html), return `       file_status(file_type::fifo)`.  
> >      
> > -   Otherwise, if the attributes indicate a socket, as if by ISO/IEC 9945 [S\_ISSOCK()](http://www.opengroup.org/onlinepubs/000095399/basedefs/sys/stat.h.html), return `       file_status(file_type::socket)`.  
> >      
> > -   Otherwise, return `       file_status(file_type::unknown)`.
>
> *Remarks:* If a symbolic link is encountered during pathname resolution, pathname resolution continues using the contents of the symbolic link.

    bool status_known(file_status s) noexcept;

> *Returns:* `s.type() != file_type::none`

    file_status symlink_status(const path& p);
    file_status symlink_status(const path& p, error_code& ec) noexcept;

> *Effects:*  Same as [status()](#status), above, except that the attributes of `p` are determined as if by ISO/IEC 9945 `lstat()`.

> *Returns:* Same as [status()](#status), above, except that if the attributes indicate a symbolic link, as if by ISO/IEC 9945 <a href="http://www.opengroup.org/onlinepubs/000095399/basedefs/sys/stat.h.html" class="external">S_ISLNK()</a>, return `       file_status(file_type::symlink)`. The signature with argument `ec` returns `       file_status(file_type::none)` if an error occurs.
>
> *Remarks:* Pathname resolution terminates if `p` names a symbolic link.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).

    path system_complete(const path& p);
    path system_complete(const path& p, error_code& ec);

> *Effects:* Composes an absolute path from `p`, using the same rules used by the operating system to resolve a path passed as the filename argument to standard library open functions.
>
> *Returns:* The composed path. The signature with argument `ec` returns `path()` if an error occurs.
>
> *Postcondition:* For the returned path, `rp,` `rp.is_absolute()` is true.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> > <table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><p>[<em>Example:</em> For POSIX based operating systems, <code>system_complete(p)</code> has the same semantics as <code>complete(p, current_path())</code>.</p><p>For Windows based operating systems, <code>system_complete(p)</code> has the same semantics as <code>absolute(ph, current_path())</code> if <code>p.is_absolute() ||   !p.has_root_name()</code> or <code>p</code> and <code>base</code> have the same <code>root_name()</code>. Otherwise it acts like <code>absolute(p, kinky)</code>, where <code>kinky</code> is the current directory for the <code>p.root_name()</code> drive. This will be the current directory for that drive the last time it was set, and thus may be <strong>residue left over from a prior program</strong> run by the command processor! Although these semantics are useful, they are very error-prone. <em>-- end example</em>]</p></td></tr></tbody></table>
> >
    path temp_directory_path();
    path temp_directory_path(error_code& ec);

> *Returns:* An operating system dependent directory path suitable for temporary files. An error shall be reported if` !exists(p)    || !is_directory(p)`, where `p` is the path to be returned. The signature with argument `ec` returns `path()` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> *<span style="background-color: #E0E0E0">The `temp_directory_path()` name was chosen to emphasize that the return is a path, not just a single directory name.</span>*
>
> > <table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><p>[<em>Example:</em> For POSIX based operating systems, the path supplied by the first environment variable found in the list TMPDIR, TMP, TEMP, TEMPDIR. If none of these are found, <code>"/tmp"</code>.</p><p>For Windows based operating systems, the path reported by the <em>Windows</em> <code>GetTempPath</code> API function. <em>-- end example</em>]</p></td></tr></tbody></table>
> >
    path unique_path(const path& model="%%%%-%%%%-%%%%-%%%%");
    path unique_path(const path& model, error_code& ec);

> The `unique_path` function generates a name suitable for temporary files, including directories. The name is based on a model that uses the percent sign character to specify replacement by a random hexadecimal digit.
>
> \[*Note:* The more bits of randomness in the generated name, the less likelihood of prior existence or being guessed. Each replacement hexadecimal digit in the model adds four bits of randomness. The default model thus provides 64 bits of randomness. *--end note*\]
>
> *Returns:* A path identical to `model`, except that each occurrence of the percent sign character is replaced by a random hexadecimal digit character in the range 0-9, a-f. The signature with argument `ec` returns `path()` if an error occurs.
>
> *Throws:* As specified in [Error reporting](#Error-reporting).
>
> *Remarks:* Implementations are encouraged to obtain the required randomness via a [cryptographically secure pseudo-random number generator](http://en.wikipedia.org/wiki/Cryptographically_secure_pseudorandom_number_generator), such as one provided by the operating system. \[*Note*: Such generators may block until sufficient entropy develops. *--end note*\]
>
> \[*Example*:
>
> >     cout << unique_path("test-%%%%%%%%%%%.txt") << endl;
>
> Typical output would be `"test-0db7f2bf57a.txt"`. Because 11 hexadecimal output characters are specified, 44 bits of randomness are supplied.  *-- end example*\]

------------------------------------------------------------------------

<span style="font-style: italic; background-color: #E0E0E0">End of Proposed wording.</span>

------------------------------------------------------------------------

<span id="Acknowledgements">Acknowledgements</span>
---------------------------------------------------

This Filesystem Library is dedicated to my wife, Sonda, who provided the support necessary to see both a trial implementation and the proposal itself through to completion. She gave me the strength to continue after a difficult year of cancer treatment in the middle of it all.

Members of the C++ standards committee Filesystem Study Group contributed numerous comments, suggestions, and bug-fixes to the post-C++11 proposal for standardizing the library. Daniel Krügler and Robert Steward reviewed the text in great detail, and made major contributions to the standardization effort both in terms of fixes and suggested improvements.

Many people contributed technical comments, ideas, and suggestions to the Boost Filesystem Library. See <http://www.boost.org/libs/filesystem/doc/index.htm#Acknowledgements>.

Dietmar Kuehl contributed the original Boost Filesystem Library directory\_iterator design. Peter Dimov, Walter Landry, Rob Stewart, and Thomas Witt were particularly helpful in refining the library.

The create\_directories, extension, basename, and replace\_extension functions were developed by Vladimir Prus. The temp\_directory\_path function was contributed by Jeff Flinn. David Svoboda suggested the canonical function and provided psuedo-code. The Library Working Group requested the removal of explicit codecvt arguments, leading to the separation of string interoperability features into a separate library.

Howard Hinnant and John Maddock reviewed a draft of the version 2 proposal, and identified a number of mistakes or weaknesses, resulting in a more polished final document.

Peter Dimov suggested a single class path, with member templates to adapt to multiple string types. His idea became the basis for the version 3 path design.

<span id="References">References</span>
---------------------------------------

<table><tbody><tr class="odd"><td>[<span id="ISO_POSIX">ISO/IEC 9945</span>]</td><td>ISO/IEC 9945:2003, IEEE Std 1003.1-2001, and The Open Group Base Specifications, Issue 6. Also known as The Single Unix® Specification, Version 3. Available from each of the organizations involved in its creation. For example, read online or download from <a href="http://www.unix.org/single_unix_specification/">www.unix.org/single_unix_specification/</a>. The ISO JTC1/SC22/WG15 - POSIX homepage is <a href="http://www.open-std.org/jtc1/sc22/WG15/">www.open-std.org/jtc1/sc22/WG15/</a></td></tr><tr class="even"><td>[<span id="ISO-Drafting">ISO Drafting</span>]</td><td>ISO/IEC Directives, Part 2: Rules for the structure and drafting of International Standards. http://www.iso.org/iso/standards_development/processes_and_procedures/iso_iec_directives_and_iso_supplement.htm</td></tr><tr class="odd"><td>[Abrahams]</td><td>Dave Abrahams, Error and Exception Handling, <a href="http://www.boost.org/more/error_handling.html">www.boost.org/more/error_handling.html</a></td></tr></tbody></table>

------------------------------------------------------------------------
