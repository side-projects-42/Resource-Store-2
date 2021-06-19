[<img src="w3c_home" alt="W3C" width="72" height="48" />](http://www.w3.org/)

Selectors
=========

W3C Working Draft 15 December 2005
----------------------------------

This version:   
<http://www.w3.org/TR/2005/WD-css3-selectors-20051215>

Latest version:   
<http://www.w3.org/TR/css3-selectors>

Previous version:   
<http://www.w3.org/TR/2001/CR-css3-selectors-20011113>

<span id="editors-list"></span>Editors:   
<span class="fn">Daniel Glazman</span> (Invited Expert)

<a href="http://www.tantek.com/" class="url fn">Tantek Çelik</a> (Invited Expert)

<a href="mailto:ian@hixie.ch" class="url fn">Ian Hickson</a> (<span class="company">[Google](http://www.google.com/)</span>)

<span class="fn">Peter Linss</span> (former editor, <span class="company">[Netscape/AOL](http://www.netscape.com/)</span>)

<span class="fn">John Williams</span> (former editor, <span class="company">[Quark, Inc.](http://www.quark.com/)</span>)

[Copyright](http://www.w3.org/Consortium/Legal/ipr-notice#Copyright) © 2005 [W3C](http://www.w3.org/)<sup>®</sup> ([MIT](http://www.csail.mit.edu/), [ERCIM](http://www.ercim.org/), [Keio](http://www.keio.ac.jp/)), All Rights Reserved. W3C [liability](http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer), [trademark](http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks), [document use](http://www.w3.org/Consortium/Legal/copyright-documents) rules apply.

------------------------------------------------------------------------

<span id="abstract"></span>Abstract
-----------------------------------

*Selectors* are patterns that match against elements in a tree. Selectors have been optimized for use with HTML and XML, and are designed to be usable in performance-critical code.

CSS (Cascading Style Sheets) is a language for describing the rendering of HTML and XML documents on screen, on paper, in speech, etc. CSS uses Selectors for binding style properties to elements in the document. This document describes extensions to the selectors defined in CSS level 2. These extended selectors will be used by CSS level 3.

Selectors define the following function:

    expression ∗ element → boolean

That is, given an element and a selector, this specification defines whether that element matches the selector.

These expressions can also be used, for instance, to select a set of elements, or a single element from a set of elements, by evaluating the expression across all the elements in a subtree. STTS (Simple Tree Transformation Sheets), a language for transforming XML trees, uses this mechanism. [\[STTS\]](#refsSTTS)

<span id="status"></span>Status of this document
------------------------------------------------

*This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index at http://www.w3.org/TR/.](http://www.w3.org/TR/)*

This document describes the selectors that already exist in [CSS1](#refsCSS1) and [CSS2](#refsCSS21), and also proposes new selectors for CSS3 and other languages that may need them.

The CSS Working Group doesn't expect that all implementations of CSS3 will have to implement all selectors. Instead, there will probably be a small number of variants of CSS3, called profiles. For example, it may be that only a profile for interactive user agents will include all of the selectors.

This specification is a last call working draft for the the [CSS Working Group](http://www.w3.org/Style/CSS/members) ([Style Activity](/Style/)). This document is a revision of the [Candidate Recommendation dated 2001 November 13](http://www.w3.org/TR/2001/CR-css3-selectors-20011113/), and has incorporated implementation feedback received in the past few years. It is expected that this last call will proceed straight to Proposed Recommendation stage since it is believed that interoperability will be demonstrable.

All persons are encouraged to review and implement this specification and return comments to the ([archived](http://lists.w3.org/Archives/Public/www-style/)) public mailing list [www-style](http://www.w3.org/Mail/Lists.html#www-style) (see [instructions](http://www.w3.org/Mail/Request)). W3C Members can also send comments directly to the CSS Working Group. The deadline for comments is 14 January 2006.

This is still a draft document and may be updated, replaced, or obsoleted by other documents at any time. It is inappropriate to cite a W3C Working Draft as other than "work in progress".

This document may be available in [translation](http://www.w3.org/Style/css3-selectors-updates/translations). The English version of this specification is the only normative version.

<span id="contents">Table of contents</span>
--------------------------------------------

-   [1. Introduction](#context)
    -   [1.1. Dependencies](#dependencies)
    -   [1.2. Terminology](#terminology)
    -   [1.3. Changes from CSS2](#changesFromCSS2)
-   [2. Selectors](#selectors)
-   [3. Case sensitivity](#casesens)
-   [4. Selector syntax](#selector-syntax)
-   [5. Groups of selectors](#grouping)
-   [6. Simple selectors](#simple-selectors)
    -   [6.1. Type selectors](#type-selectors)
        -   [6.1.1. Type selectors and namespaces](#typenmsp)
    -   [6.2. Universal selector](#universal-selector)
        -   [6.2.1. Universal selector and namespaces](#univnmsp)
    -   [6.3. Attribute selectors](#attribute-selectors)
        -   [6.3.1. Representation of attributes and attributes values](#attribute-representation)
        -   [6.3.2. Substring matching attribute selectors](#attribute-substrings)
        -   [6.3.3. Attribute selectors and namespaces](#attrnmsp)
        -   [6.3.4. Default attribute values in DTDs](#def-values)
    -   [6.4. Class selectors](#class-html)
    -   [6.5. ID selectors](#id-selectors)
    -   [6.6. Pseudo-classes](#pseudo-classes)
        -   [6.6.1. Dynamic pseudo-classes](#dynamic-pseudos)
        -   [6.6.2. The :target pseudo-class](#target-pseudo)
        -   [6.6.3. The :lang() pseudo-class](#lang-pseudo)
        -   [6.6.4. UI element states pseudo-classes](#UIstates)
        -   [6.6.5. Structural pseudo-classes](#structural-pseudos)
            -   [:root pseudo-class](#root-pseudo)
            -   [:nth-child() pseudo-class](#nth-child-pseudo)
            -   [:nth-last-child()](#nth-last-child-pseudo)
            -   [:nth-of-type() pseudo-class](#nth-of-type-pseudo)
            -   [:nth-last-of-type()](#nth-last-of-type-pseudo)
            -   [:first-child pseudo-class](#first-child-pseudo)
            -   [:last-child pseudo-class](#last-child-pseudo)
            -   [:first-of-type pseudo-class](#first-of-type-pseudo)
            -   [:last-of-type pseudo-class](#last-of-type-pseudo)
            -   [:only-child pseudo-class](#only-child-pseudo)
            -   [:only-of-type pseudo-class](#only-of-type-pseudo)
            -   [:empty pseudo-class](#empty-pseudo)
        -   [6.6.7. The negation pseudo-class](#negation)
-   [7. Pseudo-elements](#pseudo-elements)
    -   [7.1. The ::first-line pseudo-element](#first-line)
    -   [7.2. The ::first-letter pseudo-element](#first-letter)
    -   [7.3. The ::selection pseudo-element](#UIfragments)
    -   [7.4. The ::before and ::after pseudo-elements](#gen-content)
-   [8. Combinators](#combinators)
    -   [8.1. Descendant combinators](#descendant-combinators)
    -   [8.2. Child combinators](#child-combinators)
    -   [8.3. Sibling combinators](#sibling-combinators)
        -   [8.3.1. Adjacent sibling combinator](#adjacent-sibling-combinators)
        -   [8.3.2. General sibling combinator](#general-sibling-combinators)
-   [9. Calculating a selector's specificity](#specificity)
-   [10. The grammar of Selectors](#w3cselgrammar)
    -   [10.1. Grammar](#grammar)
    -   [10.2. Lexical scanner](#lex)
-   [11. Namespaces and down-level clients](#downlevel)
-   [12. Profiles](#profiling)
-   [13. Conformance and requirements](#Conformance)
-   [14. Tests](#Tests)
-   [15. Acknowledgements](#ACKS)
-   [16. References](#references)

<span id="context">1. Introduction</span>
-----------------------------------------

### <span id="dependencies"></span>1.1. Dependencies

Some features of this specification are specific to CSS, or have particular limitations or rules specific to CSS. In this specification, these have been described in terms of CSS2.1. [\[CSS21\]](#refsCSS21)

### <span id="terminology"></span>1.2. Terminology

All of the text of this specification is normative except examples, notes, and sections explicitly marked as non-normative.

### <span id="changesFromCSS2"></span>1.3. Changes from CSS2

*This section is non-normative.*

The main differences between the selectors in CSS2 and those in Selectors are:

-   the list of basic definitions (selector, group of selectors, simple selector, etc.) has been changed; in particular, what was referred to in CSS2 as a simple selector is now called a sequence of simple selectors, and the term "simple selector" is now used for the components of this sequence
-   an optional namespace component is now allowed in type element selectors, the universal selector and attribute selectors
-   a [new combinator](#general-sibling-combinators) has been introduced
-   new simple selectors including substring matching attribute selectors, and new pseudo-classes
-   new pseudo-elements, and introduction of the "::" convention for pseudo-elements
-   the grammar has been rewritten
-   profiles to be added to specifications integrating Selectors and defining the set of selectors which is actually supported by each specification
-   Selectors are now a CSS3 Module and an independent specification; other specifications can now refer to this document independently of CSS
-   the specification now has its own test suite

<span id="selectors"></span>2. Selectors
----------------------------------------

*This section is non-normative, as it merely summarizes the following sections.*

A Selector represents a structure. This structure can be used as a condition (e.g. in a CSS rule) that determines which elements a selector matches in the document tree, or as a flat description of the HTML or XML fragment corresponding to that structure.

Selectors may range from simple element names to rich contextual representations.

The following table summarizes the Selector syntax:

<table><thead><tr class="header"><th>Pattern</th><th>Meaning</th><th>Described in section</th><th>First defined in CSS level</th></tr></thead><tbody><tr class="odd"><td>*</td><td>any element</td><td><a href="#universal-selector">Universal selector</a></td><td>2</td></tr><tr class="even"><td>E</td><td>an element of type E</td><td><a href="#type-selectors">Type selector</a></td><td>1</td></tr><tr class="odd"><td>E[foo]</td><td>an E element with a "foo" attribute</td><td><a href="#attribute-selectors">Attribute selectors</a></td><td>2</td></tr><tr class="even"><td>E[foo="bar"]</td><td>an E element whose "foo" attribute value is exactly equal to "bar"</td><td><a href="#attribute-selectors">Attribute selectors</a></td><td>2</td></tr><tr class="odd"><td>E[foo~="bar"]</td><td>an E element whose "foo" attribute value is a list of space-separated values, one of which is exactly equal to "bar"</td><td><a href="#attribute-selectors">Attribute selectors</a></td><td>2</td></tr><tr class="even"><td>E[foo^="bar"]</td><td>an E element whose "foo" attribute value begins exactly with the string "bar"</td><td><a href="#attribute-selectors">Attribute selectors</a></td><td>3</td></tr><tr class="odd"><td>E[foo$="bar"]</td><td>an E element whose "foo" attribute value ends exactly with the string "bar"</td><td><a href="#attribute-selectors">Attribute selectors</a></td><td>3</td></tr><tr class="even"><td>E[foo*="bar"]</td><td>an E element whose "foo" attribute value contains the substring "bar"</td><td><a href="#attribute-selectors">Attribute selectors</a></td><td>3</td></tr><tr class="odd"><td>E[hreflang|="en"]</td><td>an E element whose "hreflang" attribute has a hyphen-separated list of values beginning (from the left) with "en"</td><td><a href="#attribute-selectors">Attribute selectors</a></td><td>2</td></tr><tr class="even"><td>E:root</td><td>an E element, root of the document</td><td><a href="#structural-pseudos">Structural pseudo-classes</a></td><td>3</td></tr><tr class="odd"><td>E:nth-child(n)</td><td>an E element, the n-th child of its parent</td><td><a href="#structural-pseudos">Structural pseudo-classes</a></td><td>3</td></tr><tr class="even"><td>E:nth-last-child(n)</td><td>an E element, the n-th child of its parent, counting from the last one</td><td><a href="#structural-pseudos">Structural pseudo-classes</a></td><td>3</td></tr><tr class="odd"><td>E:nth-of-type(n)</td><td>an E element, the n-th sibling of its type</td><td><a href="#structural-pseudos">Structural pseudo-classes</a></td><td>3</td></tr><tr class="even"><td>E:nth-last-of-type(n)</td><td>an E element, the n-th sibling of its type, counting from the last one</td><td><a href="#structural-pseudos">Structural pseudo-classes</a></td><td>3</td></tr><tr class="odd"><td>E:first-child</td><td>an E element, first child of its parent</td><td><a href="#structural-pseudos">Structural pseudo-classes</a></td><td>2</td></tr><tr class="even"><td>E:last-child</td><td>an E element, last child of its parent</td><td><a href="#structural-pseudos">Structural pseudo-classes</a></td><td>3</td></tr><tr class="odd"><td>E:first-of-type</td><td>an E element, first sibling of its type</td><td><a href="#structural-pseudos">Structural pseudo-classes</a></td><td>3</td></tr><tr class="even"><td>E:last-of-type</td><td>an E element, last sibling of its type</td><td><a href="#structural-pseudos">Structural pseudo-classes</a></td><td>3</td></tr><tr class="odd"><td>E:only-child</td><td>an E element, only child of its parent</td><td><a href="#structural-pseudos">Structural pseudo-classes</a></td><td>3</td></tr><tr class="even"><td>E:only-of-type</td><td>an E element, only sibling of its type</td><td><a href="#structural-pseudos">Structural pseudo-classes</a></td><td>3</td></tr><tr class="odd"><td>E:empty</td><td>an E element that has no children (including text nodes)</td><td><a href="#structural-pseudos">Structural pseudo-classes</a></td><td>3</td></tr><tr class="even"><td>E:link<br />
E:visited</td><td>an E element being the source anchor of a hyperlink of which the target is not yet visited (:link) or already visited (:visited)</td><td><a href="#link">The link pseudo-classes</a></td><td>1</td></tr><tr class="odd"><td>E:active<br />
E:hover<br />
E:focus</td><td>an E element during certain user actions</td><td><a href="#useraction-pseudos">The user action pseudo-classes</a></td><td>1 and 2</td></tr><tr class="even"><td>E:target</td><td>an E element being the target of the referring URI</td><td><a href="#target-pseudo">The target pseudo-class</a></td><td>3</td></tr><tr class="odd"><td>E:lang(fr)</td><td>an element of type E in language "fr" (the document language specifies how language is determined)</td><td><a href="#lang-pseudo">The :lang() pseudo-class</a></td><td>2</td></tr><tr class="even"><td>E:enabled<br />
E:disabled</td><td>a user interface element E which is enabled or disabled</td><td><a href="#UIstates">The UI element states pseudo-classes</a></td><td>3</td></tr><tr class="odd"><td>E:checked</td><td>a user interface element E which is checked (for instance a radio-button or checkbox)</td><td><a href="#UIstates">The UI element states pseudo-classes</a></td><td>3</td></tr><tr class="even"><td>E::first-line</td><td>the first formatted line of an E element</td><td><a href="#first-line">The ::first-line pseudo-element</a></td><td>1</td></tr><tr class="odd"><td>E::first-letter</td><td>the first formatted letter of an E element</td><td><a href="#first-letter">The ::first-letter pseudo-element</a></td><td>1</td></tr><tr class="even"><td>E::selection</td><td>the portion of an E element that is currently selected/highlighted by the user</td><td><a href="#UIfragments">The UI element fragments pseudo-elements</a></td><td>3</td></tr><tr class="odd"><td>E::before</td><td>generated content before an E element</td><td><a href="#gen-content">The ::before pseudo-element</a></td><td>2</td></tr><tr class="even"><td>E::after</td><td>generated content after an E element</td><td><a href="#gen-content">The ::after pseudo-element</a></td><td>2</td></tr><tr class="odd"><td>E.warning</td><td>an E element whose class is "warning" (the document language specifies how class is determined).</td><td><a href="#class-html">Class selectors</a></td><td>1</td></tr><tr class="even"><td>E#myid</td><td>an E element with ID equal to "myid".</td><td><a href="#id-selectors">ID selectors</a></td><td>1</td></tr><tr class="odd"><td>E:not(s)</td><td>an E element that does not match simple selector s</td><td><a href="#negation">Negation pseudo-class</a></td><td>3</td></tr><tr class="even"><td>E F</td><td>an F element descendant of an E element</td><td><a href="#descendant-combinators">Descendant combinator</a></td><td>1</td></tr><tr class="odd"><td>E &gt; F</td><td>an F element child of an E element</td><td><a href="#child-combinators">Child combinator</a></td><td>2</td></tr><tr class="even"><td>E + F</td><td>an F element immediately preceded by an E element</td><td><a href="#adjacent-sibling-combinators">Adjacent sibling combinator</a></td><td>2</td></tr><tr class="odd"><td>E ~ F</td><td>an F element preceded by an E element</td><td><a href="#general-sibling-combinators">General sibling combinator</a></td><td>3</td></tr></tbody></table>

The meaning of each selector is derived from the table above by prepending "matches" to the contents of each cell in the "Meaning" column.

<span id="casesens">3. Case sensitivity</span>
----------------------------------------------

The case sensitivity of document language element names, attribute names, and attribute values in selectors depends on the document language. For example, in HTML, element names are case-insensitive, but in XML, they are case-sensitive.

<span id="selector-syntax">4. Selector syntax</span>
----------------------------------------------------

A <span id="selector">selector</span> is a chain of one or more [sequences of simple selectors](#sequence) separated by [combinators](#combinators).

A <span id="sequence">sequence of simple selectors</span> is a chain of [simple selectors](#simple-selectors-dfn) that are not separated by a [combinator](#combinators). It always begins with a [type selector](#type-selectors) or a [universal selector](#universal-selector). No other type selector or universal selector is allowed in the sequence.

A <span id="simple-selectors-dfn"></span>[simple selector](#simple-selectors) is either a [type selector](#type-selectors), [universal selector](#universal-selector), [attribute selector](#attribute-selectors), [class selector](#class-html), [ID selector](#id-selectors), [content selector](#content-selectors), or [pseudo-class](#pseudo-classes). One [pseudo-element](#pseudo-elements) may be appended to the last sequence of simple selectors.

Combinators are: white space, "greater-than sign" (U+003E, `>`), "plus sign" (U+002B, `+`) and "tilde" (U+007E, `~`). White space may appear between a combinator and the simple selectors around it. <span id="whitespace"></span>Only the characters "space" (U+0020), "tab" (U+0009), "line feed" (U+000A), "carriage return" (U+000D), and "form feed" (U+000C) can occur in white space. Other space-like characters, such as "em-space" (U+2003) and "ideographic space" (U+3000), are never part of white space.

The elements of a document tree that are represented by a selector are the <span id="subject"></span>subjects of the selector. A selector consisting of a single sequence of simple selectors represents any element satisfying its requirements. Prepending another sequence of simple selectors and a combinator to a sequence imposes additional matching constraints, so the subjects of a selector are always a subset of the elements represented by the last sequence of simple selectors.

An empty selector, containing no sequence of simple selectors and no pseudo-element, is an [invalid selector](#Conformance).

<span id="grouping">5. Groups of selectors</span>
-------------------------------------------------

When several selectors share the same declarations, they may be grouped into a comma-separated list. (A comma is U+002C.)

CSS examples:

In this example, we condense three rules with identical declarations into one. Thus,

    h1 { font-family: sans-serif }
    h2 { font-family: sans-serif }
    h3 { font-family: sans-serif }

is equivalent to:

    h1, h2, h3 { font-family: sans-serif }

**Warning**: the equivalence is true in this example because all the selectors are valid selectors. If just one of these selectors were invalid, the entire group of selectors would be invalid. This would invalidate the rule for all three heading elements, whereas in the former case only one of the three individual heading rules would be invalidated.

<span id="simple-selectors">6. Simple selectors</span>
------------------------------------------------------

### <span id="type-selectors">6.1. Type selector</span>

A type selector is the name of a document language element type. A type selector represents an instance of the element type in the document tree.

Example:

The following selector represents an `h1` element in the document tree:

    h1

#### <span id="typenmsp">6.1.1. Type selectors and namespaces</span>

Type selectors allow an optional namespace ([\[XMLNAMES\]](#refsXMLNAMES)) component. A namespace prefix that has been previously declared may be prepended to the element name separated by the namespace separator "vertical bar" (U+007C, `|`).

The namespace component may be left empty to indicate that the selector is only to represent elements with no declared namespace.

An asterisk may be used for the namespace prefix, indicating that the selector represents elements in any namespace (including elements with no namespace).

Element type selectors that have no namespace component (no namespace separator), represent elements without regard to the element's namespace (equivalent to "`*|`") unless a default namespace has been declared. If a default namespace has been declared, the selector will represent only elements in the default namespace.

A type selector containing a namespace prefix that has not been previously declared is an [invalid](#Conformance) selector. The mechanism for declaring a namespace prefix is left up to the language implementing Selectors. In CSS, such a mechanism is defined in the General Syntax module.

In a namespace-aware client, element type selectors will only match against the [local part](http://www.w3.org/TR/REC-xml-names/#NT-LocalPart) of the element's [qualified name](http://www.w3.org/TR/REC-xml-names/#ns-qualnames). See [below](#downlevel) for notes about matching behaviors in down-level clients.

In summary:

`ns|E`  
elements with name E in namespace ns

`*|E`  
elements with name E in any namespace, including those without any declared namespace

`|E`  
elements with name E without any declared namespace

`E`  
if no default namespace has been specified, this is equivalent to \*|E. Otherwise it is equivalent to ns|E where ns is the default namespace.

CSS examples:

    @namespace foo url(http://www.example.com);
     foo|h1 { color: blue }
     foo|* { color: yellow }
     |h1 { color: red }
     *|h1 { color: green }
     h1 { color: green }

The first rule will match only `h1` elements in the "http://www.example.com" namespace.

The second rule will match all elements in the "http://www.example.com" namespace.

The third rule will match only `h1` elements without any declared namespace.

The fourth rule will match `h1` elements in any namespace (including those without any declared namespace).

The last rule is equivalent to the fourth rule because no default namespace has been defined.

### <span id="universal-selector">6.2. Universal selector</span>

The universal selector, written "asterisk" (`*`), represents the qualified name of any element type. It represents any single element in the document tree in any namespace (including those without any declared namespace) if no default namespace has been specified. If a default namespace has been specified, see [Universal selector and Namespaces](#univnmsp) below.

If the universal selector is not the only component of a sequence of simple selectors, the `*` may be omitted.

Examples:

-   `*[hreflang|=en]` and `[hreflang|=en]` are equivalent,
-   `*.warning` and `.warning` are equivalent,
-   `*#myid` and `#myid` are equivalent.

**Note:** it is recommended that the `*`, representing the universal selector, not be omitted.

#### <span id="univnmsp">6.2.1. Universal selector and namespaces</span>

The universal selector allows an optional namespace component. It is used as follows:

`ns|*`  
all elements in namespace ns

`*|*`  
all elements

`|*`  
all elements without any declared namespace

`*`  
if no default namespace has been specified, this is equivalent to \*|\*. Otherwise it is equivalent to ns|\* where ns is the default namespace.

A universal selector containing a namespace prefix that has not been previously declared is an [invalid](#Conformance) selector. The mechanism for declaring a namespace prefix is left up to the language implementing Selectors. In CSS, such a mechanism is defined in the General Syntax module.

### <span id="attribute-selectors">6.3. Attribute selectors</span>

Selectors allow the representation of an element's attributes. When a selector is used as an expression to match against an element, attribute selectors must be considered to match an element if that element has an attribute that matches the attribute represented by the attribute selector.

#### <span id="attribute-representation">6.3.1. Attribute presence and values selectors</span>

CSS2 introduced four attribute selectors:

`[att]`   
Represents an element with the `att` attribute, whatever the value of the attribute.

`[att=val]`  
Represents an element with the `att` attribute whose value is exactly "val".

`[att~=val]`  
Represents an element with the `att` attribute whose value is a [whitespace](#whitespace)-separated list of words, one of which is exactly "val". If "val" contains whitespace, it will never represent anything (since the words are *separated* by spaces).

`[att|=val]`   
Represents an element with the `att` attribute, its value either being exactly "val" or beginning with "val" immediately followed by "-" (U+002D). This is primarily intended to allow language subcode matches (e.g., the `hreflang` attribute on the `link` element in HTML) as described in RFC 3066 ([\[RFC3066\]](#refsRFC3066)). For `lang` (or `xml:lang`) language subcode matching, please see [the `:lang` pseudo-class](#lang-pseudo).

Attribute values must be identifiers or strings. The case-sensitivity of attribute names and values in selectors depends on the document language.

Examples:

The following attribute selector represents an `h1` element that carries the `title` attribute, whatever its value:

    h1[title]

In the following example, the selector represents a `span` element whose `class` attribute has exactly the value "example":

    span[class="example"]

Multiple attribute selectors can be used to represent several attributes of an element, or several conditions on the same attribute. Here, the selector represents a `span` element whose `hello` attribute has exactly the value "Cleveland" and whose `goodbye` attribute has exactly the value "Columbus":

    span[hello="Cleveland"][goodbye="Columbus"]

The following selectors illustrate the differences between "=" and "~=". The first selector will represent, for example, the value "copyright copyleft copyeditor" on a `rel` attribute. The second selector will only represent an `a` element with an `href` attribute having the exact value "http://www.w3.org/".

    a[rel~="copyright"]
    a[href="http://www.w3.org/"]

The following selector represents a `link` element whose `hreflang` attribute is exactly "fr".

    link[hreflang=fr]

The following selector represents a `link` element for which the values of the `hreflang` attribute begins with "en", including "en", "en-US", and "en-cockney":

    link[hreflang|="en"]

Similarly, the following selectors represents a `DIALOGUE` element whenever it has one of two different values for an attribute `character`:

    DIALOGUE[character=romeo]
    DIALOGUE[character=juliet]

#### <span id="attribute-substrings"></span>6.3.2. Substring matching attribute selectors

Three additional attribute selectors are provided for matching substrings in the value of an attribute:

`[att^=val]`  
Represents an element with the `att` attribute whose value begins with the prefix "val".

`[att$=val]`   
Represents an element with the `att` attribute whose value ends with the suffix "val".

`[att*=val]`   
Represents an element with the `att` attribute whose value contains at least one instance of the substring "val".

Attribute values must be identifiers or strings. The case-sensitivity of attribute names in selectors depends on the document language.

Examples:

The following selector represents an HTML `object`, referencing an image:

    object[type^="image/"]

The following selector represents an HTML anchor `a` with an `href` attribute whose value ends with ".html".

    a[href$=".html"]

The following selector represents an HTML paragraph with a `title` attribute whose value contains the substring "hello"

    p[title*="hello"]

#### <span id="attrnmsp">6.3.3. Attribute selectors and namespaces</span>

Attribute selectors allow an optional namespace component to the attribute name. A namespace prefix that has been previously declared may be prepended to the attribute name separated by the namespace separator "vertical bar" (`|`). In keeping with the Namespaces in the XML recommendation, default namespaces do not apply to attributes, therefore attribute selectors without a namespace component apply only to attributes that have no declared namespace (equivalent to "`|attr`"). An asterisk may be used for the namespace prefix indicating that the selector is to match all attribute names without regard to the attribute's namespace.

An attribute selector with an attribute name containing a namespace prefix that has not been previously declared is an [invalid](#Conformance) selector. The mechanism for declaring a namespace prefix is left up to the language implementing Selectors. In CSS, such a mechanism is defined in the General Syntax module.

CSS examples:

    @namespace foo "http://www.example.com";
    [foo|att=val] { color: blue }
    [*|att] { color: yellow }
    [|att] { color: green }
    [att] { color: green }

The first rule will match only elements with the attribute `att` in the "http://www.example.com" namespace with the value "val".

The second rule will match only elements with the attribute `att` regardless of the namespace of the attribute (including no declared namespace).

The last two rules are equivalent and will match only elements with the attribute `att` where the attribute is not declared to be in a namespace.

#### <span id="def-values">6.3.4. Default attribute values in DTDs</span>

Attribute selectors represent explicitly set attribute values in the document tree. Default attribute values may be defined in a DTD or elsewhere, but cannot always be selected by attribute selectors. Selectors should be designed so that they work even if the default values are not included in the document tree.

More precisely, a UA is *not* required to read an "external subset" of the DTD but *is* required to look for default attribute values in the document's "internal subset." (See [\[XML10\]](#refsXML10) for definitions of these subsets.)

A UA that recognizes an XML namespace [\[XMLNAMES\]](#refsXMLNAMES) is not required to use its knowledge of that namespace to treat default attribute values as if they were present in the document. (For example, an XHTML UA is not required to use its built-in knowledge of the XHTML DTD.)

**Note:** Typically, implementations choose to ignore external subsets.

Example:

Consider an element EXAMPLE with an attribute "notation" that has a default value of "decimal". The DTD fragment might be

    <!ATTLIST EXAMPLE notation (decimal,octal) "decimal">

If the style sheet contains the rules

    EXAMPLE[notation=decimal] { /*... default property settings ...*/ }
    EXAMPLE[notation=octal]   { /*... other settings...*/ }

the first rule will not match elements whose "notation" attribute is set by default, i.e. not set explicitly. To catch all cases, the attribute selector for the default value must be dropped:

    EXAMPLE                   { /*... default property settings ...*/ }
    EXAMPLE[notation=octal]   { /*... other settings...*/ }

Here, because the selector `EXAMPLE[notation=octal]` is more specific than the tag selector alone, the style declarations in the second rule will override those in the first for elements that have a "notation" attribute value of "octal". Care has to be taken that all property declarations that are to apply only to the default case are overridden in the non-default cases' style rules.

### <span id="class-html">6.4. Class selectors</span>

Working with HTML, authors may use the period (U+002E, `.`) notation as an alternative to the `~=` notation when representing the `class` attribute. Thus, for HTML, `div.value` and `div[class~=value]` have the same meaning. The attribute value must immediately follow the "period" (`.`).

UAs may apply selectors using the period (.) notation in XML documents if the UA has namespace-specific knowledge that allows it to determine which attribute is the "class" attribute for the respective namespace. One such example of namespace-specific knowledge is the prose in the specification for a particular namespace (e.g. SVG 1.0 [\[SVG\]](#refsSVG) describes the [SVG "class" attribute](http://www.w3.org/TR/2001/PR-SVG-20010719/styling.html#ClassAttribute) and how a UA should interpret it, and similarly MathML 1.01 [\[MATH\]](#refsMATH) describes the [MathML "class" attribute](http://www.w3.org/1999/07/REC-MathML-19990707/chapter2.html#sec2.3.4).)

CSS examples:

We can assign style information to all elements with `class~="pastoral"` as follows:

    *.pastoral { color: green }  /* all elements with class~=pastoral */

or just

    .pastoral { color: green }  /* all elements with class~=pastoral */

The following assigns style only to H1 elements with `class~="pastoral"`:

    H1.pastoral { color: green }  /* H1 elements with class~=pastoral */

Given these rules, the first H1 instance below would not have green text, while the second would:

    <H1>Not green</H1>
    <H1 class="pastoral">Very green</H1>

To represent a subset of "class" values, each value must be preceded by a ".", in any order.

CSS example:

The following rule matches any P element whose "class" attribute has been assigned a list of [whitespace](#whitespace)-separated values that includes "pastoral" and "marine":

    p.pastoral.marine { color: green }

This rule matches when `class="pastoral blue aqua   marine"` but does not match for `class="pastoral   blue"`.

**Note:** Because CSS gives considerable power to the "class" attribute, authors could conceivably design their own "document language" based on elements with almost no associated presentation (such as DIV and SPAN in HTML) and assigning style information through the "class" attribute. Authors should avoid this practice since the structural elements of a document language often have recognized and accepted meanings and author-defined classes may not.

**Note:** If an element has multiple class attributes, their values must be concatenated with spaces between the values before searching for the class. As of this time the working group is not aware of any manner in which this situation can be reached, however, so this behavior is explicitly non-normative in this specification.

### <span id="id-selectors">6.5. ID selectors</span>

Document languages may contain attributes that are declared to be of type ID. What makes attributes of type ID special is that no two such attributes can have the same value in a document, regardless of the type of the elements that carry them; whatever the document language, an ID typed attribute can be used to uniquely identify its element. In HTML all ID attributes are named "id"; XML applications may name ID attributes differently, but the same restriction applies.

An ID-typed attribute of a document language allows authors to assign an identifier to one element instance in the document tree. W3C ID selectors represent an element instance based on its identifier. An ID selector contains a "number sign" (U+0023, `#`) immediately followed by the ID value, which must be an identifier.

Selectors does not specify how a UA knows the ID-typed attribute of an element. The UA may, e.g., read a document's DTD, have the information hard-coded or ask the user.

Examples:

The following ID selector represents an `h1` element whose ID-typed attribute has the value "chapter1":

    h1#chapter1

The following ID selector represents any element whose ID-typed attribute has the value "chapter1":

    #chapter1

The following selector represents any element whose ID-typed attribute has the value "z98y".

    *#z98y

**Note.** In XML 1.0 [\[XML10\]](#refsXML10), the information about which attribute contains an element's IDs is contained in a DTD or a schema. When parsing XML, UAs do not always read the DTD, and thus may not know what the ID of an element is (though a UA may have namespace-specific knowledge that allows it to determine which attribute is the ID attribute for that namespace). If a style sheet designer knows or suspects that a UA may not know what the ID of an element is, he should use normal attribute selectors instead: `[name=p371]` instead of `#p371`. Elements in XML 1.0 documents without a DTD do not have IDs at all.

If an element has multiple ID attributes, all of them must be treated as IDs for that element for the purposes of the ID selector. Such a situation could be reached using mixtures of xml:id, DOM3 Core, XML DTDs, and namespace-specific knowledge.

### <span id="pseudo-classes">6.6. Pseudo-classes</span>

The pseudo-class concept is introduced to permit selection based on information that lies outside of the document tree or that cannot be expressed using the other simple selectors.

A pseudo-class always consists of a "colon" (`:`) followed by the name of the pseudo-class and optionally by a value between parentheses.

Pseudo-classes are allowed in all sequences of simple selectors contained in a selector. Pseudo-classes are allowed anywhere in sequences of simple selectors, after the leading type selector or universal selector (possibly omitted). Pseudo-class names are case-insensitive. Some pseudo-classes are mutually exclusive, while others can be applied simultaneously to the same element. Pseudo-classes may be dynamic, in the sense that an element may acquire or lose a pseudo-class while a user interacts with the document.

#### <span id="dynamic-pseudos">6.6.1. Dynamic pseudo-classes</span>

Dynamic pseudo-classes classify elements on characteristics other than their name, attributes, or content, in principle characteristics that cannot be deduced from the document tree.

Dynamic pseudo-classes do not appear in the document source or document tree.

##### The <span id="link">link pseudo-classes: :link and :visited</span>

User agents commonly display unvisited links differently from previously visited ones. Selectors provides the pseudo-classes `:link` and `:visited` to distinguish them:

-   The `:link` pseudo-class applies to links that have not yet been visited.
-   The `:visited` pseudo-class applies once the link has been visited by the user.

After some amount of time, user agents may choose to return a visited link to the (unvisited) ':link' state.

The two states are mutually exclusive.

Example:

The following selector represents links carrying class `external` and already visited:

    a.external:visited

**Note:** It is possible for style sheet authors to abuse the :link and :visited pseudo-classes to determine which sites a user has visited without the user's consent.

UAs may therefore treat all links as unvisited links, or implement other measures to preserve the user's privacy while rendering visited and unvisited links differently.

##### The <span id="useraction-pseudos">user action pseudo-classes :hover, :active, and :focus</span>

Interactive user agents sometimes change the rendering in response to user actions. Selectors provides three pseudo-classes for the selection of an element the user is acting on.

-   The `:hover` pseudo-class applies while the user designates an element with a pointing device, but does not activate it. For example, a visual user agent could apply this pseudo-class when the cursor (mouse pointer) hovers over a box generated by the element. User agents not that do not support [interactive media](http://www.w3.org/TR/REC-CSS2/media.html#interactive-media-group) do not have to support this pseudo-class. Some conforming user agents that support [interactive media](http://www.w3.org/TR/REC-CSS2/media.html#interactive-media-group) may not be able to support this pseudo-class (e.g., a pen device that does not detect hovering).
-   The `:active` pseudo-class applies while an element is being activated by the user. For example, between the times the user presses the mouse button and releases it.
-   The `:focus` pseudo-class applies while an element has the focus (accepts keyboard or mouse events, or other forms of input).

There may be document language or implementation specific limits on which elements can become `:active` or acquire `:focus`.

These pseudo-classes are not mutually exclusive. An element may match several pseudo-classes at the same time.

Selectors doesn't define if the parent of an element that is ':active' or ':hover' is also in that state.

Examples:

    a:link    /* unvisited links */
    a:visited /* visited links */
    a:hover   /* user hovers */
    a:active  /* active links */

An example of combining dynamic pseudo-classes:

    a:focus
    a:focus:hover

The last selector matches `a` elements that are in the pseudo-class :focus and in the pseudo-class :hover.

**Note:** An element can be both ':visited' and ':active' (or ':link' and ':active').

#### <span id="target-pseudo">6.6.2. The target pseudo-class :target</span>

Some URIs refer to a location within a resource. This kind of URI ends with a "number sign" (\#) followed by an anchor identifier (called the fragment identifier).

URIs with fragment identifiers link to a certain element within the document, known as the target element. For instance, here is a URI pointing to an anchor named `section_2` in an HTML document:

    http://example.com/html/top.html#section_2

A target element can be represented by the `:target` pseudo-class. If the document's URI has no fragment identifier, then the document has no target element.

Example:

    p.note:target

This selector represents a `p` element of class `note` that is the target element of the referring URI.

CSS example:

Here, the `:target` pseudo-class is used to make the target element red and place an image before it, if there is one:

    *:target { color : red }
    *:target::before { content : url(target.png) }

#### <span id="lang-pseudo">6.6.3. The language pseudo-class :lang</span>

If the document language specifies how the human language of an element is determined, it is possible to write selectors that represent an element based on its language. For example, in HTML [\[HTML4\]](#refsHTML4), the language is determined by a combination of the `lang` attribute, the `meta` element, and possibly by information from the protocol (such as HTTP headers). XML uses an attribute called `xml:lang`, and there may be other document language-specific methods for determining the language.

The pseudo-class `:lang(C)` represents an element that is in language C. Whether an element is represented by a `:lang()` selector is based solely on the identifier C being either equal to, or a hyphen-separated substring of, the element's language value, in the same way as if performed by the ['|='](#attribute-representation) operator in attribute selectors. The identifier C does not have to be a valid language name.

C must not be empty. (If it is, the selector is invalid.)

**Note:** It is recommended that documents and protocols indicate language using codes from RFC 3066 [\[RFC3066\]](#refsRFC3066) or its successor, and by means of "xml:lang" attributes in the case of XML-based documents [\[XML10\]](#refsXML10). See ["FAQ: Two-letter or three-letter language codes."](http://www.w3.org/International/questions/qa-lang-2or3.html)

Examples:

The two following selectors represent an HTML document that is in Belgian, French, or German. The two next selectors represent `q` quotations in an arbitrary element in Belgian, French, or German.

    html:lang(fr-be)
    html:lang(de)
    :lang(fr-be) > q
    :lang(de) > q

#### <span id="UIstates">6.6.4. The UI element states pseudo-classes</span>

##### <span id="enableddisabled">The :enabled and :disabled pseudo-classes</span>

The `:enabled` pseudo-class allows authors to customize the look of user interface elements that are enabled — which the user can select or activate in some fashion (e.g. clicking on a button with a mouse). There is a need for such a pseudo-class because there is no way to programmatically specify the default appearance of say, an enabled `input` element without also specifying what it would look like when it was disabled.

Similar to `:enabled`, `:disabled` allows the author to specify precisely how a disabled or inactive user interface element should look.

Most elements will be neither enabled nor disabled. An element is enabled if the user can either activate it or transfer the focus to it. An element is disabled if it could be enabled, but the user cannot presently activate it or transfer focus to it.

##### <span id="checked">The :checked pseudo-class</span>

Radio and checkbox elements can be toggled by the user. Some menu items are "checked" when the user selects them. When such elements are toggled "on" the `:checked` pseudo-class applies. The `:checked` pseudo-class initially applies to such elements that have the HTML4 `selected` and `checked` attributes as described in [Section 17.2.1 of HTML4](http://www.w3.org/TR/REC-html40/interact/forms.html#h-17.2.1), but of course the user can toggle "off" such elements in which case the `:checked` pseudo-class would no longer apply. While the `:checked` pseudo-class is dynamic in nature, and is altered by user action, since it can also be based on the presence of the semantic HTML4 `selected` and `checked` attributes, it applies to all media.

##### <span id="indeterminate">The :indeterminate pseudo-class</span>

Radio and checkbox elements can be toggled by the user, but are sometimes in an indeterminate state, neither checked nor unchecked. This can be due to an element attribute, or DOM manipulation.

A future version of this specification may introduce an `:indeterminate` pseudo-class that applies to such elements.

#### <span id="structural-pseudos">6.6.5. Structural pseudo-classes</span>

Selectors introduces the concept of structural pseudo-classes to permit selection based on extra information that lies in the document tree but cannot be represented by other simple selectors or combinators.

Note that standalone pieces of PCDATA (text nodes in the DOM) are not counted when calculating the position of an element in the list of children of its parent. When calculating the position of an element in the list of children of its parent, the index numbering starts at 1.

##### <span id="root-pseudo">:root pseudo-class</span>

The `:root` pseudo-class represents an element that is the root of the document. In HTML 4, this is always the `HTML` element.

##### <span id="nth-child-pseudo">:nth-child() pseudo-class</span>

The `:nth-child(an`+b) pseudo-class notation represents an element that has a`n`+b-1 siblings **before** it in the document tree, for a given positive integer or zero value of `n`, and has a parent element. In other words, this matches the bth child of an element after all the children have been split into groups of a elements each. For example, this allows the selectors to address every other row in a table, and could be used to alternate the color of paragraph text in a cycle of four. The a and b values must be zero, negative integers or positive integers. The index of the first child of an element is 1.

In addition to this, `:nth-child()` can take '`odd`' and '`even`' as arguments instead. '`odd`' has the same signification as `2n+1`, and '`even`' has the same signification as `2n`.

Examples:

    tr:nth-child(2n+1) /* represents every odd row of an HTML table */
    tr:nth-child(odd)  /* same */
    tr:nth-child(2n)   /* represents every even row of an HTML table */
    tr:nth-child(even) /* same */

    /* Alternate paragraph colours in CSS */
    p:nth-child(4n+1) { color: navy; }
    p:nth-child(4n+2) { color: green; }
    p:nth-child(4n+3) { color: maroon; }
    p:nth-child(4n+4) { color: purple; }

When a=0, no repeating is used, so for example `:nth-child(0n+5)` matches only the fifth child. When a=0, the a`n` part need not be included, so the syntax simplifies to `:nth-child(b)` and the last example simplifies to `:nth-child(5)`.

Examples:

    foo:nth-child(0n+1)   /* represents an element foo, first child of its parent element */
    foo:nth-child(1)      /* same */

When a=1, the number may be omitted from the rule.

Examples:

The following selectors are therefore equivalent:

    bar:nth-child(1n+0)   /* represents all bar elements, specificity (0,1,1) */
    bar:nth-child(n+0)    /* same */
    bar:nth-child(n)      /* same */
    bar                   /* same but lower specificity (0,0,1) */

If b=0, then every ath element is picked. In such a case, the b part may be omitted.

Examples:

    tr:nth-child(2n+0) /* represents every even row of an HTML table */
    tr:nth-child(2n) /* same */

If both a and b are equal to zero, the pseudo-class represents no element in the document tree.

The value a can be negative, but only the positive values of a`n`+b, for `n`≥0, may represent an element in the document tree.

Example:

    html|tr:nth-child(-n+6)  /* represents the 6 first rows of XHTML tables */

When the value b is negative, the "+" character in the expression must be removed (it is effectively replaced by the "-" character indicating the negative value of b).

Examples:

    :nth-child(10n-1)  /* represents the 9th, 19th, 29th, etc, element */
    :nth-child(10n+9)  /* Same */
    :nth-child(10n+-1) /* Syntactically invalid, and would be ignored */

##### <span id="nth-last-child-pseudo">:nth-last-child() pseudo-class</span>

The `:nth-last-child(an+b)` pseudo-class notation represents an element that has a`n`+b-1 siblings **after** it in the document tree, for a given positive integer or zero value of `n`, and has a parent element. See `:nth-child()` pseudo-class for the syntax of its argument. It also accepts the '`even`' and '`odd`' values as arguments.

Examples:

    tr:nth-last-child(-n+2)    /* represents the two last rows of an HTML table */

    foo:nth-last-child(odd)    /* represents all odd foo elements in their parent element,
                                  counting from the last one */

##### <span id="nth-of-type-pseudo">:nth-of-type() pseudo-class</span>

The `:nth-of-type(an+b)` pseudo-class notation represents an element that has a`n`+b-1 siblings with the same element name **before** it in the document tree, for a given zero or positive integer value of `n`, and has a parent element. In other words, this matches the bth child of that type after all the children of that type have been split into groups of a elements each. See `:nth-child()` pseudo-class for the syntax of its argument. It also accepts the '`even`' and '`odd`' values.

CSS example:

This allows an author to alternate the position of floated images:

    img:nth-of-type(2n+1) { float: right; }
    img:nth-of-type(2n) { float: left; }

##### <span id="nth-last-of-type-pseudo">:nth-last-of-type() pseudo-class</span>

The `:nth-last-of-type(an+b)` pseudo-class notation represents an element that has a`n`+b-1 siblings with the same element name **after** it in the document tree, for a given zero or positive integer value of `n`, and has a parent element. See `:nth-child()` pseudo-class for the syntax of its argument. It also accepts the '`even`' and '`odd`' values.

Example:

To represent all `h2` children of an XHTML `body` except the first and last, one could use the following selector:

    body > h2:nth-of-type(n+2):nth-last-of-type(n+2)

In this case, one could also use `:not()`, although the selector ends up being just as long:

    body > h2:not(:first-of-type):not(:last-of-type)

##### <span id="first-child-pseudo">:first-child pseudo-class</span>

Same as `:nth-child(1)`. The `:first-child` pseudo-class represents an element that is the first child of some other element.

Examples:

The following selector represents a `p` element that is the first child of a `div` element:

    div > p:first-child

This selector can represent the `p` inside the `div` of the following fragment:

    <p> The last P before the note.</p>
    <div class="note">
       <p> The first P inside the note.</p>
    </div>

but cannot represent the second `p` in the following fragment:

    <p> The last P before the note.</p>
    <div class="note">
       <h2> Note </h2>
       <p> The first P inside the note.</p>
    </div>

The following two selectors are usually equivalent:

    * > a:first-child /* a is first child of any element */
    a:first-child /* Same (assuming a is not the root element) */

##### <span id="last-child-pseudo">:last-child pseudo-class</span>

Same as `:nth-last-child(1)`. The `:last-child` pseudo-class represents an element that is the last child of some other element.

Example:

The following selector represents a list item `li` that is the last child of an ordered list `ol`.

    ol > li:last-child

##### <span id="first-of-type-pseudo">:first-of-type pseudo-class</span>

Same as `:nth-of-type(1)`. The `:first-of-type` pseudo-class represents an element that is the first sibling of its type in the list of children of its parent element.

Example:

The following selector represents a definition title `dt` inside a definition list `dl`, this `dt` being the first of its type in the list of children of its parent element.

    dl dt:first-of-type

It is a valid description for the first two `dt` elements in the following example but not for the third one:

    <dl>
     <dt>gigogne</dt>
     <dd>
      <dl>
       <dt>fusée</dt>
       <dd>multistage rocket</dd>
       <dt>table</dt>
       <dd>nest of tables</dd>
      </dl>
     </dd>
    </dl>

##### <span id="last-of-type-pseudo">:last-of-type pseudo-class</span>

Same as `:nth-last-of-type(1)`. The `:last-of-type` pseudo-class represents an element that is the last sibling of its type in the list of children of its parent element.

Example:

The following selector represents the last data cell `td` of a table row.

    tr > td:last-of-type

##### <span id="only-child-pseudo">:only-child pseudo-class</span>

Represents an element that has a parent element and whose parent element has no other element children. Same as `:first-child:last-child` or `:nth-child(1):nth-last-child(1)`, but with a lower specificity.

##### <span id="only-of-type-pseudo">:only-of-type pseudo-class</span>

Represents an element that has a parent element and whose parent element has no other element children with the same element name. Same as `:first-of-type:last-of-type` or `:nth-of-type(1):nth-last-of-type(1)`, but with a lower specificity.

##### <span id="empty-pseudo"></span>:empty pseudo-class

The `:empty` pseudo-class represents an element that has no children at all. In terms of the DOM, only element nodes and text nodes (including CDATA nodes and entity references) whose data has a non-zero length must be considered as affecting emptiness; comments, PIs, and other nodes must not affect whether an element is considered empty or not.

Examples:

`p:empty` is a valid representation of the following fragment:

    <p></p>

`foo:empty` is not a valid representation for the following fragments:

    <foo>bar</foo>

    <foo><bar>bla</bar></foo>

    <foo>this is not <bar>:empty</bar></foo>

#### <span id="content-selectors">6.6.6. Blank</span>

This section intentionally left blank.

#### <span id="negation"></span>6.6.7. The negation pseudo-class

The negation pseudo-class, `:not(X)`, is a functional notation taking a [simple selector](#simple-selectors-dfn) (excluding the negation pseudo-class itself and pseudo-elements) as an argument. It represents an element that is not represented by the argument.

Examples:

The following CSS selector matches all `button` elements in an HTML document that are not disabled.

    button:not([DISABLED])

The following selector represents all but `FOO` elements.

    *:not(FOO)

The following group of selectors represents all HTML elements except links.

    html|*:not(:link):not(:visited)

Default namespace declarations do not affect the argument of the negation pseudo-class unless the argument is a universal selector or a type selector.

Examples:

Assuming that the default namespace is bound to "http://example.com/", the following selector represents all elements that are not in that namespace:

    *|*:not(*)

The following CSS selector matches any element being hovered, regardless of its namespace. In particular, it is not limited to only matching elements in the default namespace that are not being hovered, and elements not in the default namespace don't match the rule when they *are* being hovered.

    *|*:not(:hover)

**Note**: the :not() pseudo allows useless selectors to be written. For instance `:not(*|*)`, which represents no element at all, or `foo:not(bar)`, which is equivalent to `foo` but with a higher specificity.

### <span id="pseudo-elements">7. Pseudo-elements</span>

Pseudo-elements create abstractions about the document tree beyond those specified by the document language. For instance, document languages do not offer mechanisms to access the first letter or first line of an element's content. Pseudo-elements allow designers to refer to this otherwise inaccessible information. Pseudo-elements may also provide designers a way to refer to content that does not exist in the source document (e.g., the `::before` and `::after` pseudo-elements give access to generated content).

A pseudo-element is made of two colons (`::`) followed by the name of the pseudo-element.

This `::` notation is introduced by the current document in order to establish a discrimination between pseudo-classes and pseudo-elements. For compatibility with existing style sheets, user agents must also accept the previous one-colon notation for pseudo-elements introduced in CSS levels 1 and 2 (namely, `:first-line`, `:first-letter`, `:before` and `:after`). This compatibility is not allowed for the new pseudo-elements introduced in CSS level 3.

Only one pseudo-element may appear per selector, and if present it must appear after the sequence of simple selectors that represents the [subjects](#subject) of the selector. <span class="note">A future version of this specification may allow multiple pesudo-elements per selector.</span>

#### <span id="first-line">7.1. The ::first-line pseudo-element</span>

The `::first-line` pseudo-element describes the contents of the first formatted line of an element.

CSS example:

    p::first-line { text-transform: uppercase }

The above rule means "change the letters of the first line of every paragraph to uppercase".

The selector `p::first-line` does not match any real HTML element. It does match a pseudo-element that conforming user agents will insert at the beginning of every paragraph.

Note that the length of the first line depends on a number of factors, including the width of the page, the font size, etc. Thus, an ordinary HTML paragraph such as:

    <P>This is a somewhat long HTML 
    paragraph that will be broken into several 
    lines. The first line will be identified
    by a fictional tag sequence. The other lines 
    will be treated as ordinary lines in the 
    paragraph.</P>

the lines of which happen to be broken as follows:

    THIS IS A SOMEWHAT LONG HTML PARAGRAPH THAT
    will be broken into several lines. The first
    line will be identified by a fictional tag 
    sequence. The other lines will be treated as 
    ordinary lines in the paragraph.

This paragraph might be "rewritten" by user agents to include the *fictional tag sequence* for `::first-line`. This fictional tag sequence helps to show how properties are inherited.

    <P><P::first-line> This is a somewhat long HTML 
    paragraph that </P::first-line> will be broken into several
    lines. The first line will be identified 
    by a fictional tag sequence. The other lines 
    will be treated as ordinary lines in the 
    paragraph.</P>

If a pseudo-element breaks up a real element, the desired effect can often be described by a fictional tag sequence that closes and then re-opens the element. Thus, if we mark up the previous paragraph with a `span` element:

    <P><SPAN class="test"> This is a somewhat long HTML
    paragraph that will be broken into several
    lines.</SPAN> The first line will be identified
    by a fictional tag sequence. The other lines 
    will be treated as ordinary lines in the 
    paragraph.</P>

the user agent could simulate start and end tags for `span` when inserting the fictional tag sequence for `::first-line`.

    <P><P::first-line><SPAN class="test"> This is a
    somewhat long HTML
    paragraph that will </SPAN></P::first-line><SPAN class="test"> be
    broken into several
    lines.</SPAN> The first line will be identified
    by a fictional tag sequence. The other lines
    will be treated as ordinary lines in the 
    paragraph.</P>

In CSS, the `::first-line` pseudo-element can only be attached to a block-level element, an inline-block, a table-caption, or a table-cell.

<span id="first-formatted-line"></span>The "first formatted line" of an element may occur inside a block-level descendant in the same flow (i.e., a block-level descendant that is not positioned and not a float). E.g., the first line of the `div` in `<DIV><P>This line...</P></DIV>` is the first line of the `p` (assuming that both `p` and `div` are block-level).

The first line of a table-cell or inline-block cannot be the first formatted line of an ancestor element. Thus, in `<DIV><P STYLE="display: inline-block">Hello<BR>Goodbye</P> etcetera</DIV>` the first formatted line of the `div` is not the line "Hello".

Note that the first line of the `p` in this fragment: `<p><br>First...` doesn't contain any letters (assuming the default style for `br` in HTML 4). The word "First" is not on the first formatted line.

A UA should act as if the fictional start tags of the `::first-line` pseudo-elements were nested just inside the innermost enclosing block-level element. (Since CSS1 and CSS2 were silent on this case, authors should not rely on this behavior.) Here is an example. The fictional tag sequence for

    <DIV>
      <P>First paragraph</P>
      <P>Second paragraph</P>
    </DIV>

is

    <DIV>
      <P><DIV::first-line><P::first-line>First paragraph</P::first-line></DIV::first-line></P>
      <P><P::first-line>Second paragraph</P::first-line></P>
    </DIV>

The `::first-line` pseudo-element is similar to an inline-level element, but with certain restrictions. In CSS, the following properties apply to a `::first-line` pseudo-element: font properties, color property, background properties, 'word-spacing', 'letter-spacing', 'text-decoration', 'vertical-align', 'text-transform', 'line-height'. UAs may apply other properties as well.

#### <span id="first-letter">7.2. The ::first-letter pseudo-element</span>

The `::first-letter` pseudo-element represents the first letter of the first line of a block, if it is not preceded by any other content (such as images or inline tables) on its line. The ::first-letter pseudo-element may be used for "initial caps" and "drop caps", which are common typographical effects. This type of initial letter is similar to an inline-level element if its 'float' property is 'none'; otherwise, it is similar to a floated element.

In CSS, these are the properties that apply to `::first-letter` pseudo-elements: font properties, 'text-decoration', 'text-transform', 'letter-spacing', 'word-spacing' (when appropriate), 'line-height', 'float', 'vertical-align' (only if 'float' is 'none'), margin properties, padding properties, border properties, color property, background properties. UAs may apply other properties as well. To allow UAs to render a typographically correct drop cap or initial cap, the UA may choose a line-height, width and height based on the shape of the letter, unlike for normal elements.

Example:

This example shows a possible rendering of an initial cap. Note that the 'line-height' that is inherited by the `::first-letter` pseudo-element is 1.1, but the UA in this example has computed the height of the first letter differently, so that it doesn't cause any unnecessary space between the first two lines. Also note that the fictional start tag of the first letter is inside the span, and thus the font weight of the first letter is normal, not bold as the span:

    p { line-height: 1.1 }
    p::first-letter { font-size: 3em; font-weight: normal }
    span { font-weight: bold }
    ...
    <p><span>Het hemelsche</span> gerecht heeft zich ten lange lesten<br>
    Erbarremt over my en mijn benaeuwde vesten<br>
    En arme burgery, en op mijn volcx gebed<br>
    En dagelix geschrey de bange stad ontzet.

![Image illustrating the ::first-letter pseudo-element](initial-cap.png)

The following CSS will make a drop cap initial letter span about two lines:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
    <HTML>
     <HEAD>
      <TITLE>Drop cap initial letter</TITLE>
      <STYLE type="text/css">
       P               { font-size: 12pt; line-height: 1.2 }
       P::first-letter { font-size: 200%; font-weight: bold; float: left }
       SPAN            { text-transform: uppercase }
      </STYLE>
     </HEAD>
     <BODY>
      <P><SPAN>The first</SPAN> few words of an article
        in The Economist.</P>
     </BODY>
    </HTML>

This example might be formatted as follows:

![Image illustrating the combined effect of the ::first-letter and ::first-line pseudo-elements](first-letter.gif)

The <span class="index-inst" title="fictional tag
sequence">fictional tag sequence</span> is:

    <P>
    <SPAN>
    <P::first-letter>
    T
    </P::first-letter>he first
    </SPAN> 
    few words of an article in the Economist.
    </P>

Note that the `::first-letter` pseudo-element tags abut the content (i.e., the initial character), while the ::first-line pseudo-element start tag is inserted right after the start tag of the block element.

In order to achieve traditional drop caps formatting, user agents may approximate font sizes, for example to align baselines. Also, the glyph outline may be taken into account when formatting.

Punctuation (i.e, characters defined in Unicode in the "open" (Ps), "close" (Pe), "initial" (Pi). "final" (Pf) and "other" (Po) punctuation classes), that precedes or follows the first letter should be included. [\[UNICODE\]](#refsUNICODE)

![Quotes that precede the first letter should be included.](first-letter2.gif)

The `::first-letter` also applies if the first letter is in fact a digit, e.g., the "6" in "67 million dollars is a lot of money."

In CSS, the `::first-letter` pseudo-element applies to block, list-item, table-cell, table-caption, and inline-block elements. <span class="note">A future version of this specification may allow this pesudo-element to apply to more element types.</span>

The `::first-letter` pseudo-element can be used with all such elements that contain text, or that have a descendant in the same flow that contains text. A UA should act as if the fictional start tag of the ::first-letter pseudo-element is just before the first text of the element, even if that first text is in a descendant.

Example:

The fictional tag sequence for this HTMLfragment:

    <div>
    <p>The first text.

is:

    <div>
    <p><div::first-letter><p::first-letter>T</...></...>he first text.

The first letter of a table-cell or inline-block cannot be the first letter of an ancestor element. Thus, in `<DIV><P STYLE="display: inline-block">Hello<BR>Goodbye</P> etcetera</DIV>` the first letter of the `div` is not the letter "H". In fact, the `div` doesn't have a first letter.

The first letter must occur on the [first formatted line.](#first-formatted-line) For example, in this fragment: `<p><br>First...` the first line doesn't contain any letters and `::first-letter` doesn't match anything (assuming the default style for `br` in HTML 4). In particular, it does not match the "F" of "First."

In CSS, if an element is a list item ('display: list-item'), the `::first-letter` applies to the first letter in the principal box after the marker. UAs may ignore `::first-letter` on list items with 'list-style-position: inside'. If an element has `::before` or `::after` content, the `::first-letter` applies to the first letter of the element *including* that content.

Example:

After the rule 'p::before {content: "Note: "}', the selector 'p::first-letter' matches the "N" of "Note".

Some languages may have specific rules about how to treat certain letter combinations. In Dutch, for example, if the letter combination "ij" appears at the beginning of a word, both letters should be considered within the `::first-letter` pseudo-element.

If the letters that would form the ::first-letter are not in the same element, such as "'T" in `<p>'<em>T...`, the UA may create a ::first-letter pseudo-element from one of the elements, both elements, or simply not create a pseudo-element.

Similarly, if the first letter(s) of the block are not at the start of the line (for example due to bidirectional reordering), then the UA need not create the pseudo-element(s).

Example:

<span id="overlapping-example">The following example</span> illustrates how overlapping pseudo-elements may interact. The first letter of each P element will be green with a font size of '24pt'. The rest of the first formatted line will be 'blue' while the rest of the paragraph will be 'red'.

    p { color: red; font-size: 12pt }
    p::first-letter { color: green; font-size: 200% }
    p::first-line { color: blue }

    <P>Some text that ends up on two lines</P>

Assuming that a line break will occur before the word "ends", the <span class="index-inst" title="fictional tag sequence">fictional tag sequence</span> for this fragment might be:

    <P>
    <P::first-line>
    <P::first-letter> 
    S 
    </P::first-letter>ome text that 
    </P::first-line> 
    ends up on two lines 
    </P>

Note that the `::first-letter` element is inside the `::first-line` element. Properties set on `::first-line` are inherited by `::first-letter`, but are overridden if the same property is set on `::first-letter`.

#### <span id="UIfragments">7.3.</span> <span id="selection">The ::selection pseudo-element</span>

The `::selection` pseudo-element applies to the portion of a document that has been highlighted by the user. This also applies, for example, to selected text within an editable text field. This pseudo-element should not be confused with the `:checked` pseudo-class (which used to be named `:selected`)

Although the `::selection` pseudo-element is dynamic in nature, and is altered by user action, it is reasonable to expect that when a UA re-renders to a static medium (such as a printed page, see [\[CSS21\]](#refsCSS21)) which was originally rendered to a dynamic medium (like screen), the UA may wish to transfer the current `::selection` state to that other medium, and have all the appropriate formatting and rendering take effect as well. This is not required — UAs may omit the `::selection` pseudo-element for static media.

These are the CSS properties that apply to `::selection` pseudo-elements: color, background, cursor (optional), outline (optional). The computed value of the 'background-image' property on `::selection` may be ignored.

#### <span id="gen-content">7.4. The ::before and ::after pseudo-elements</span>

The `::before` and `::after` pseudo-elements can be used to describe generated content before or after an element's content. They are explained in CSS 2.1 [\[CSS21\]](#refsCSS21).

When the `::first-letter` and `::first-line` pseudo-elements are combined with `::before` and `::after`, they apply to the first letter or line of the element including the inserted text.

<span id="combinators">8. Combinators</span>
--------------------------------------------

### <span id="descendant-combinators">8.1. Descendant combinator</span>

At times, authors may want selectors to describe an element that is the descendant of another element in the document tree (e.g., "an `EM` element that is contained within an `H1` element"). Descendant combinators express such a relationship. A descendant combinator is [white space](#whitespace) that separates two sequences of simple selectors. A selector of the form "`A B`" represents an element `B` that is an arbitrary descendant of some ancestor element `A`.

Examples:

For example, consider the following selector:

    h1 em

It represents an `em` element being the descendant of an `h1` element. It is a correct and valid, but partial, description of the following fragment:

    <h1>This <span class="myclass">headline
    is <em>very</em> important</span></h1>

The following selector:

    div * p

represents a `p` element that is a grandchild or later descendant of a `div` element. Note the whitespace on either side of the "\*" is not part of the universal selector; the whitespace is a combinator indicating that the DIV must be the ancestor of some element, and that that element must be an ancestor of the P.

The following selector, which combines descendant combinators and [attribute selectors](#attribute-selectors), represents an element that (1) has the `href` attribute set and (2) is inside a `p` that is itself inside a `div`:

    div p *[href]

### <span id="child-combinators">8.2. Child combinators</span>

A child combinator describes a childhood relationship between two elements. A child combinator is made of the "greater-than sign" (`>`) character and separates two sequences of simple selectors.

Examples:

The following selector represents a `p` element that is child of `body`:

    body > p

The following example combines descendant combinators and child combinators.

    div ol>li p

It represents a `p` element that is a descendant of an `li` element; the `li` element must be the child of an `ol` element; the `ol` element must be a descendant of a `div`. Notice that the optional white space around the "&gt;" combinator has been left out.

For information on selecting the first child of an element, please see the section on the `:first-child` pseudo-class above.

### <span id="sibling-combinators">8.3. Sibling combinators</span>

There are two different sibling combinators: the adjacent sibling combinator and the general sibling combinator. In both cases, non-element nodes (e.g. text between elements) are ignored when considering adjacency of elements.

#### <span id="adjacent-sibling-combinators">8.3.1. Adjacent sibling combinator</span>

The adjacent sibling combinator is made of the "plus sign" (U+002B, `+`) character that separates two sequences of simple selectors. The elements represented by the two sequences share the same parent in the document tree and the element represented by the first sequence immediately precedes the element represented by the second one.

Examples:

The following selector represents a `p` element immediately following a `math` element:

    math + p

The following selector is conceptually similar to the one in the previous example, except that it adds an attribute selector — it adds a constraint to the `h1` element, that it must have `class="opener"`:

    h1.opener + h2

#### <span id="general-sibling-combinators">8.3.2. General sibling combinator</span>

The general sibling combinator is made of the "tilde" (U+007E, `~`) character that separates two sequences of simple selectors. The elements represented by the two sequences share the same parent in the document tree and the element represented by the first sequence precedes (not necessarily immediately) the element represented by the second one.

Example:

    h1 ~ pre

represents a `pre` element following an `h1`. It is a correct and valid, but partial, description of:

    <h1>Definition of the function a</h1>
    <p>Function a(x) has to be applied to all figures in the table.</p>
    <pre>function a(x) = 12x/13.5</pre>

<span id="specificity">9. Calculating a selector's specificity</span>
---------------------------------------------------------------------

A selector's specificity is calculated as follows:

-   count the number of ID selectors in the selector (= a)
-   count the number of class selectors, attributes selectors, and pseudo-classes in the selector (= b)
-   count the number of element names in the selector (= c)
-   ignore pseudo-elements

Selectors inside [the negation pseudo-class](#negation) are counted like any other, but the negation itself does not count as a pseudo-class.

Concatenating the three numbers a-b-c (in a number system with a large base) gives the specificity.

Examples:

    *               /* a=0 b=0 c=0 -> specificity =   0 */
    LI              /* a=0 b=0 c=1 -> specificity =   1 */
    UL LI           /* a=0 b=0 c=2 -> specificity =   2 */
    UL OL+LI        /* a=0 b=0 c=3 -> specificity =   3 */
    H1 + *[REL=up]  /* a=0 b=1 c=1 -> specificity =  11 */
    UL OL LI.red    /* a=0 b=1 c=3 -> specificity =  13 */
    LI.red.level    /* a=0 b=2 c=1 -> specificity =  21 */
    #x34y           /* a=1 b=0 c=0 -> specificity = 100 */
    #s12:not(FOO)   /* a=1 b=0 c=1 -> specificity = 101 */

**Note:** the specificity of the styles specified in an HTML `style` attribute is described in CSS 2.1. [\[CSS21\]](#refsCSS21).

<span id="w3cselgrammar">10. The grammar of Selectors</span>
------------------------------------------------------------

### <span id="grammar">10.1. Grammar</span>

The grammar below defines the syntax of Selectors. It is globally LL(1) and can be locally LL(2) (but note that most UA's should not use it directly, since it doesn't express the parsing conventions). The format of the productions is optimized for human consumption and some shorthand notations beyond Yacc (see [\[YACC\]](#refsYACC)) are used:

-   **\***: 0 or more
-   **+**: 1 or more
-   **?**: 0 or 1
-   **|**: separates alternatives
-   **\[ \]**: grouping

The productions are:

    selectors_group
      : selector [ COMMA S* selector ]*
      ;

    selector
      : simple_selector_sequence [ combinator simple_selector_sequence ]*
      ;

    combinator
      /* combinators can be surrounded by white space */
      : PLUS S* | GREATER S* | TILDE S* | S+
      ;

    simple_selector_sequence
      : [ type_selector | universal ]
        [ HASH | class | attrib | pseudo | negation ]*
      | [ HASH | class | attrib | pseudo | negation ]+
      ;

    type_selector
      : [ namespace_prefix ]? element_name
      ;

    namespace_prefix
      : [ IDENT | '*' ]? '|'
      ;

    element_name
      : IDENT
      ;

    universal
      : [ namespace_prefix ]? '*'
      ;

    class
      : '.' IDENT
      ;

    attrib
      : '[' S* [ namespace_prefix ]? IDENT S*
            [ [ PREFIXMATCH |
                SUFFIXMATCH |
                SUBSTRINGMATCH |
                '=' |
                INCLUDES |
                DASHMATCH ] S* [ IDENT | STRING ] S*
            ]? ']'
      ;

    pseudo
      /* '::' starts a pseudo-element, ':' a pseudo-class */
      /* Exceptions: :first-line, :first-letter, :before and :after. */
      /* Note that pseudo-elements are restricted to one per selector and */
      /* occur only in the last simple_selector_sequence. */
      : ':' ':'? [ IDENT | functional_pseudo ]
      ;

    functional_pseudo
      : FUNCTION S* expression ')'
      ;

    expression
      /* In CSS3, the expressions are identifiers, strings, */
      /* or of the form "an+b" */
      : [ [ PLUS | '-' | DIMENSION | NUMBER | STRING | IDENT ] S* ]+
      ;

    negation
      : NOT S* negation_arg S* ')'
      ;

    negation_arg
      : type_selector | universal | HASH | class | attrib | pseudo
      ;

### <span id="lex">10.2. Lexical scanner</span>

The following is the <span id="x3">tokenizer</span>, written in Flex (see [\[FLEX\]](#refsFLEX)) notation. The tokenizer is case-insensitive.

The two occurrences of "\\377" represent the highest character number that current versions of Flex can deal with (decimal 255). They should be read as "\\4177777" (decimal 1114111), which is the highest possible code point in Unicode/ISO-10646. [\[UNICODE\]](#refsUNICODE)

    %option case-insensitive

    ident     [-]?{nmstart}{nmchar}*
    name      {nmchar}+
    nmstart   [_a-z]|{nonascii}|{escape}
    nonascii  [^\0-\177]
    unicode   \\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?
    escape    {unicode}|\\[^\n\r\f0-9a-f]
    nmchar    [_a-z0-9-]|{nonascii}|{escape}
    num       [0-9]+|[0-9]*\.[0-9]+
    string    {string1}|{string2}
    string1   \"([^\n\r\f\\"]|\\{nl}|{nonascii}|{escape})*\"
    string2   \'([^\n\r\f\\']|\\{nl}|{nonascii}|{escape})*\'
    invalid   {invalid1}|{invalid2}
    invalid1  \"([^\n\r\f\\"]|\\{nl}|{nonascii}|{escape})*
    invalid2  \'([^\n\r\f\\']|\\{nl}|{nonascii}|{escape})*
    nl        \n|\r\n|\r|\f
    w         [ \t\r\n\f]*

    %%

    [ \t\r\n\f]+     return S;

    "~="             return INCLUDES;
    "|="             return DASHMATCH;
    "^="             return PREFIXMATCH;
    "$="             return SUFFIXMATCH;
    "*="             return SUBSTRINGMATCH;
    {ident}          return IDENT;
    {string}         return STRING;
    {ident}"("       return FUNCTION;
    {num}            return NUMBER;
    "#"{name}        return HASH;
    {w}"+"           return PLUS;
    {w}">"           return GREATER;
    {w}","           return COMMA;
    {w}"~"           return TILDE;
    ":not("          return NOT;
    @{ident}         return ATKEYWORD;
    {invalid}        return INVALID;
    {num}%           return PERCENTAGE;
    {num}{ident}     return DIMENSION;
    "<!--"           return CDO;
    "-->"            return CDC;

    "url("{w}{string}{w}")"                           return URI;
    "url("{w}([!#$%&*-~]|{nonascii}|{escape})*{w}")"  return URI;
    U\+[0-9a-f?]{1,6}(-[0-9a-f]{1,6})?                return UNICODE_RANGE;

    \/\*[^*]*\*+([^/*][^*]*\*+)*\/                    /* ignore comments */

    .                return *yytext;

<span id="downlevel">11. Namespaces and down-level clients</span>
-----------------------------------------------------------------

An important issue is the interaction of CSS selectors with XML documents in web clients that were produced prior to this document. Unfortunately, due to the fact that namespaces must be matched based on the URI which identifies the namespace, not the namespace prefix, some mechanism is required to identify namespaces in CSS by their URI as well. Without such a mechanism, it is impossible to construct a CSS style sheet which will properly match selectors in all cases against a random set of XML documents. However, given complete knowledge of the XML document to which a style sheet is to be applied, and a limited use of namespaces within the XML document, it is possible to construct a style sheet in which selectors would match elements and attributes correctly.

It should be noted that a down-level CSS client will (if it properly conforms to CSS forward compatible parsing rules) ignore all `@namespace` at-rules, as well as all style rules that make use of namespace qualified element type or attribute selectors. The syntax of delimiting namespace prefixes in CSS was deliberately chosen so that down-level CSS clients would ignore the style rules rather than possibly match them incorrectly.

The use of default namespaces in CSS makes it possible to write element type selectors that will function in both namespace aware CSS clients as well as down-level clients. It should be noted that down-level clients may incorrectly match selectors against XML elements in other namespaces.

The following are scenarios and examples in which it is possible to construct style sheets which would function properly in web clients that do not implement this proposal.

1.  The XML document does not use namespaces.

    -   In this case, it is obviously not necessary to declare or use namespaces in the style sheet. Standard CSS element type and attribute selectors will function adequately in a down-level client.
    -   In a CSS namespace aware client, the default behavior of element selectors matching without regard to namespace will function properly against all elements, since no namespaces are present. However, the use of specific element type selectors that match only elements that have no namespace ("`|name`") will guarantee that selectors will match only XML elements that do not have a declared namespace.

2.  The XML document defines a single, default namespace used throughout the document. No namespace prefixes are used in element names.

    -   In this case, a down-level client will function as if namespaces were not used in the XML document at all. Standard CSS element type and attribute selectors will match against all elements.

3.  The XML document does **not** use a default namespace, all namespace prefixes used are known to the style sheet author, and there is a direct mapping between namespace prefixes and namespace URIs. (A given prefix may only be mapped to one namespace URI throughout the XML document; there may be multiple prefixes mapped to the same URI).

    -   In this case, the down-level client will view and match element type and attribute selectors based on their fully qualified name, not the local part as outlined in the [Type selectors and Namespaces](#typenmsp) section. CSS selectors may be declared using an escaped colon "`\:`" to describe the fully qualified names, e.g. "`html\:h1`" will match `<html:h1>`. Selectors using the qualified name will only match XML elements that use the same prefix. Other namespace prefixes used in the XML that are mapped to the same URI will not match as expected unless additional CSS style rules are declared for them.
    -   Note that selectors declared in this fashion will *only* match in down-level clients. A CSS namespace aware client will match element type and attribute selectors based on the name's local part. Selectors declared with the fully qualified name will not match (unless there is no namespace prefix in the fully qualified name).

In other scenarios: when the namespace prefixes used in the XML are not known in advance by the style sheet author; or a combination of elements with no namespace are used in conjunction with elements using a default namespace; or the same namespace prefix is mapped to *different* namespace URIs within the same document, or in different documents; it is impossible to construct a CSS style sheet that will function properly against all elements in those documents, unless, the style sheet is written using a namespace URI syntax (as outlined in this document or similar) and the document is processed by a CSS and XML namespace aware client.

<span id="profiling">12. Profiles</span>
----------------------------------------

Each specification using Selectors must define the subset of W3C Selectors it allows and excludes, and describe the local meaning of all the components of that subset.

Non normative examples:

Selectors profile

Specification

CSS level 1

Accepts

type selectors  
class selectors  
ID selectors  
:link, :visited and :active pseudo-classes  
descendant combinator  
::first-line and ::first-letter pseudo-elements

Excludes

universal selector  
attribute selectors  
:hover and :focus pseudo-classes  
:target pseudo-class  
:lang() pseudo-class  
all UI element states pseudo-classes  
all structural pseudo-classes  
negation pseudo-class  
all UI element fragments pseudo-elements  
::before and ::after pseudo-elements  
child combinators  
sibling combinators

namespaces

Extra constraints

only one class selector allowed per sequence of simple selectors

  
  

Selectors profile

Specification

CSS level 2

Accepts

type selectors  
universal selector  
attribute presence and values selectors  
class selectors  
ID selectors  
:link, :visited, :active, :hover, :focus, :lang() and :first-child pseudo-classes  
descendant combinator  
child combinator  
adjacent sibling combinator  
::first-line and ::first-letter pseudo-elements  
::before and ::after pseudo-elements

Excludes

content selectors  
substring matching attribute selectors  
:target pseudo-classes  
all UI element states pseudo-classes  
all structural pseudo-classes other than :first-child  
negation pseudo-class  
all UI element fragments pseudo-elements  
general sibling combinators

namespaces

Extra constraints

more than one class selector per sequence of simple selectors (CSS1 constraint) allowed

In CSS, selectors express pattern matching rules that determine which style rules apply to elements in the document tree.

The following selector (CSS level 2) will **match** all anchors `a` with attribute `name` set inside a section 1 header `h1`:

    h1 a[name]

All CSS declarations attached to such a selector are applied to elements matching it.

Selectors profile

Specification

STTS 3

Accepts

type selectors  
universal selectors  
attribute selectors  
class selectors  
ID selectors  
all structural pseudo-classes  
all combinators

namespaces

Excludes

non-accepted pseudo-classes  
pseudo-elements  

Extra constraints

some selectors and combinators are not allowed in fragment descriptions on the right side of STTS declarations.

Selectors can be used in STTS 3 in two different manners:

1.  a selection mechanism equivalent to CSS selection mechanism: declarations attached to a given selector are applied to elements matching that selector,
2.  fragment descriptions that appear on the right side of declarations.

<span id="Conformance"></span>13. Conformance and requirements
--------------------------------------------------------------

This section defines conformance with the present specification only.

The inability of a user agent to implement part of this specification due to the limitations of a particular device (e.g., non interactive user agents will probably not implement dynamic pseudo-classes because they make no sense without interactivity) does not imply non-conformance.

All specifications reusing Selectors must contain a [Profile](#profiling) listing the subset of Selectors it accepts or excludes, and describing the constraints it adds to the current specification.

Invalidity is caused by a parsing error, e.g. an unrecognized token or a token which is not allowed at the current parsing point.

User agents must observe the rules for handling parsing errors:

-   a simple selector containing an undeclared namespace prefix is invalid
-   a selector containing an invalid simple selector, an invalid combinator or an invalid token is invalid.
-   a group of selectors containing an invalid selector is invalid.

Specifications reusing Selectors must define how to handle parsing errors. (In the case of CSS, the entire rule in which the selector is used is dropped.)

<span id="Tests"></span>14. Tests
---------------------------------

This specification has [a test suite](http://www.w3.org/Style/CSS/Test/CSS3/Selectors/current/) allowing user agents to verify their basic conformance to the specification. This test suite does not pretend to be exhaustive and does not cover all possible combined cases of Selectors.

<span id="ACKS"></span>15. Acknowledgements
-------------------------------------------

The CSS working group would like to thank everyone who has sent comments on this specification over the years.

The working group would like to extend special thanks to Donna McManus, Justin Baker, Joel Sklar, and Molly Ives Brower who perfermed the final editorial review.

<span id="references">16. References</span>
-------------------------------------------

\[CSS1\]   
<span id="refsCSS1"></span> Bert Bos, Håkon Wium Lie; "Cascading Style Sheets, level 1", W3C Recommendation, 17 Dec 1996, revised 11 Jan 1999

(`http://www.w3.org/TR/REC-CSS1`)

\[CSS21\]   
<span id="refsCSS21"></span> Bert Bos, Tantek Çelik, Ian Hickson, Håkon Wium Lie, editors; "Cascading Style Sheets, level 2 revision 1", W3C Working Draft, 13 June 2005

(`http://www.w3.org/TR/CSS21`)

\[CWWW\]   
<span id="refsCWWW"></span> Martin J. Dürst, François Yergeau, Misha Wolf, Asmus Freytag, Tex Texin, editors; "Character Model for the World Wide Web", W3C Recommendation, 15 February 2005

(`http://www.w3.org/TR/charmod/`)

\[FLEX\]   
<span id="refsFLEX"></span> "Flex: The Lexical Scanner Generator", Version 2.3.7, ISBN 1882114213

\[HTML4\]   
<span id="refsHTML4"></span> Dave Ragget, Arnaud Le Hors, Ian Jacobs, editors; "HTML 4.01 Specification", W3C Recommendation, 24 December 1999

([`http://www.w3.org/TR/html4/`](http://www.w3.org/TR/html4/))

\[MATH\]   
<span id="refsMATH"></span> Patrick Ion, Robert Miner, editors; "Mathematical Markup Language (MathML) 1.01", W3C Recommendation, revision of 7 July 1999

(`http://www.w3.org/TR/REC-MathML/`)

\[RFC3066\]   
<span id="refsRFC3066"></span> H. Alvestrand; "Tags for the Identification of Languages", Request for Comments 3066, January 2001

([`http://www.ietf.org/rfc/rfc3066.txt`](http://www.ietf.org/rfc/rfc3066.txt))

\[STTS\]   
<span id="refsSTTS"></span> Daniel Glazman; "Simple Tree Transformation Sheets 3", Electricité de France, submission to the W3C, 11 November 1998

(`http://www.w3.org/TR/NOTE-STTS3`)

\[SVG\]   
<span id="refsSVG"></span> Jon Ferraiolo, 藤沢 淳, Dean Jackson, editors; "Scalable Vector Graphics (SVG) 1.1 Specification", W3C Recommendation, 14 January 2003

(`http://www.w3.org/TR/SVG/`)

\[UNICODE\]  
<span id="refsUNICODE"></span> [The Unicode Standard, Version 4.1](http://www.unicode.org/versions/Unicode4.1.0/), The Unicode Consortium. Boston, MA, Addison-Wesley, March 2005. ISBN 0-321-18578-1, as amended by [Unicode 4.0.1](http://www.unicode.org/versions/Unicode4.0.1/) and [Unicode 4.1.0](http://www.unicode.org/versions/Unicode4.1.0/).

(`http://www.unicode.org/versions/`)

\[XML10\]   
<span id="refsXML10"></span> Tim Bray, Jean Paoli, C. M. Sperberg-McQueen, Eve Maler, François Yergeau, editors; "Extensible Markup Language (XML) 1.0 (Third Edition)", W3C Recommendation, 4 February 2004

([`http://www.w3.org/TR/REC-xml/`](http://www.w3.org/TR/REC-xml/))

\[XMLNAMES\]   
<span id="refsXMLNAMES"></span> Tim Bray, Dave Hollander, Andrew Layman, editors; "Namespaces in XML", W3C Recommendation, 14 January 1999

([`http://www.w3.org/TR/REC-xml-names/`](http://www.w3.org/TR/REC-xml-names/))

\[YACC\]   
<span id="refsYACC"></span> S. C. Johnson; "YACC — Yet another compiler compiler", Technical Report, Murray Hill, 1975
