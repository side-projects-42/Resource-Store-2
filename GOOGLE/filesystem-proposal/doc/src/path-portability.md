<span id="Differences-Boost">Differences from Boost Filesystem</span>
---------------------------------------------------------------------

In the Boost library, class `path` solves portability needs via facilities to handle narrow (i.e. `char`) character strings with encodings other than the operating system’s native encoding. That caused unfortunate interface clutter, so the Library Working Group asked that the clutter be removed from class `path`. Instead, proposal [N3398, String Interoperation Library](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2012/n3398.html), provides general facilities that handle some use cases and some helper functions have been added to the Filesystem Library.

Otherwise, the proposal is very similar to the Boost library. Indeed, the proposed wording is generated from the same source as the Boost library’s reference documentation.

<span id="Path-portability">Path portability</span>
---------------------------------------------------

Moving code from a tidy environment where narrow character strings are always UTF-8 encoded to an environment where the narrow character encoding differs can be a daunting experience.  Filenames can become unrecognizable to a human or to a file system. The same problem also applies to other encodings, although UTF-8 is so ubiquitous it deserves special consideration.

One of the design objectives of the Filesystem Library is to ease this problem. The solution centers around the constructors for class `path`:

<table><colgroup><col style="width: 100%" /></colgroup><tbody><tr class="odd"><td><h3 id="recommendations-for-portable-use-of-class-path-constructors">Recommendations for portable use of class <code>path</code> constructors</h3><ul><li>For narrow (i.e. <code>char</code>) strings that are not composed entirely of 7-bit ASCII characters, if the encoding is fixed (e.g. UTF-8) rather than changing when the native encoding changes, do one of two things:<ul><li>Convert the narrow string data to <code>u16string</code> or <code> u32string</code>, so that encoding never changes.</li><li>Tell the constructor (or a helper) what the actual narrow string encoding is, so that the default native encoding will be overridden.<br />
 </li></ul></li><li>Use <code>char</code> string literals (<code>“an”</code>) only for strings composed entirely of 7-bit ASCII characters. Use <code>char16_t</code> literals (<code>u“äñ”</code>) for strings that include non-ASCII characters within the 16-bit Unicode Basic Multilingual Plane (BMP), or <code>char32_t</code> literals (<code>U“𠃰”</code>) for strings that include Unicode characters above the BMP.</li></ul></td></tr></tbody></table>

<span id="Revision-history">Revision history</span>
---------------------------------------------------

<span style="background-color: #ffff99">Nxxxx=12-xxxx</span>, Filesystem Library Proposal (Revision 4). Changes include:

-   The [Path portability](#Path-portability) section was added.

------------------------------------------------------------------------

Recommendations for portable use of narrow (i.e. `char`) character strings
--------------------------------------------------------------------------

Narrow (i.e. `char`) character strings that contain anything other than 7-bit ASCII characters are inherently non-portable for creating and observing paths, because the encoding of narrow strings is system dependent.

-   Do not use `char` string literals (`"an"`) to create a `path` unless the literal is composed entirely of 7-bit ASCII characters.

    Instead, use `char32_t` string literals (`U"äñ𠃰"`), as these are always safe.

    It is also OK to use `char16_t` string literals (`u"äñ"`) if all characters are within the 16-bit Unicode Basic Multilingual Plane (BMP) and there is no issue with combining characters, but non-experts can ignore this approach.  
     

-   For narrow (i.e. `char`) strings that are not composed entirely of 7-bit ASCII characters, if the encoding is fixed (e.g. UTF-8) rather than changing when the native encoding changes, do one of two things:
    -   Convert the narrow string data to `u16string` or `u32string`, so that encoding never changes.
    -   Tell the constructor (or a helper) what the actual narrow string encoding is, so that the default native encoding will be overridden.  
         
-   Do not use the string() or generic\_string() observers. Instead use the u16string(), u32string(), generic\_u16string(), or generic\_u32string() observers.  
     

 

 

------------------------------------------------------------------------

 

*Add an additional native format observer:*

> `string u8string() const;`

*Add an additional generic format observer:*

> `string generic_u8string() const;`
