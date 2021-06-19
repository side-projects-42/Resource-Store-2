RAPIDXML Manual
===============

### Version 1.13

*Copyright (C) 2006, 2009 Marcin Kalicinski*  
*See accompanying file [license.txt](license.txt) for license information.*

------------------------------------------------------------------------

Table of Contents
-----------------

<a href="#namespacerapidxml_1what_is_rapidxml" class="toc1">1. What is RapidXml?</a>  
<a href="#namespacerapidxml_1dependencies_and_compatibility" class="toc2">1.1 Dependencies And Compatibility</a>  
<a href="#namespacerapidxml_1character_types_and_encodings" class="toc2">1.2 Character Types And Encodings</a>  
<a href="#namespacerapidxml_1error_handling" class="toc2">1.3 Error Handling</a>  
<a href="#namespacerapidxml_1memory_allocation" class="toc2">1.4 Memory Allocation</a>  
<a href="#namespacerapidxml_1w3c_compliance" class="toc2">1.5 W3C Compliance</a>  
<a href="#namespacerapidxml_1api_design" class="toc2">1.6 API Design</a>  
<a href="#namespacerapidxml_1reliability" class="toc2">1.7 Reliability</a>  
<a href="#namespacerapidxml_1acknowledgements" class="toc2">1.8 Acknowledgements</a>  
<a href="#namespacerapidxml_1two_minute_tutorial" class="toc1">2. Two Minute Tutorial</a>  
<a href="#namespacerapidxml_1parsing" class="toc2">2.1 Parsing</a>  
<a href="#namespacerapidxml_1accessing_dom_tree" class="toc2">2.2 Accessing The DOM Tree</a>  
<a href="#namespacerapidxml_1modifying_dom_tree" class="toc2">2.3 Modifying The DOM Tree</a>  
<a href="#namespacerapidxml_1printing" class="toc2">2.4 Printing XML</a>  
<a href="#namespacerapidxml_1differences" class="toc1">3. Differences From Regular XML Parsers</a>  
<a href="#namespacerapidxml_1lifetime_of_source_text" class="toc2">3.1 Lifetime Of Source Text</a>  
<a href="#namespacerapidxml_1ownership_of_strings" class="toc2">3.2 Ownership Of Strings</a>  
<a href="#namespacerapidxml_1destructive_non_destructive" class="toc2">3.3 Destructive Vs Non-Destructive Mode</a>  
<a href="#namespacerapidxml_1performance" class="toc1">4. Performance</a>  
<a href="#namespacerapidxml_1performance_charts" class="toc2">4.1 Comparison With Other Parsers</a>  
<a href="#namespacerapidxml_1reference" class="toc1">5. Reference</a>

1. What is RapidXml?
--------------------

[RapidXml](http://rapidxml.sourceforge.net) is an attempt to create the fastest XML DOM parser possible, while retaining useability, portability and reasonable W3C compatibility. It is an in-situ parser written in C++, with parsing speed approaching that of `strlen()` function executed on the same data.

Entire parser is contained in a single header file, so no building or linking is neccesary. To use it you just need to copy `rapidxml.hpp` file to a convenient place (such as your project directory), and include it where needed. You may also want to use printing functions contained in header `rapidxml_print.hpp`.

### 1.1 Dependencies And Compatibility

RapidXml has *no dependencies* other than a very small subset of standard C++ library (`<cassert>`, `<cstdlib>`, `<new>` and `<exception>`, unless exceptions are disabled). It should compile on any reasonably conformant compiler, and was tested on Visual C++ 2003, Visual C++ 2005, Visual C++ 2008, gcc 3, gcc 4, and Comeau 4.3.3. Care was taken that no warnings are produced on these compilers, even with highest warning levels enabled.

### 1.2 Character Types And Encodings

RapidXml is character type agnostic, and can work both with narrow and wide characters. Current version does not fully support UTF-16 or UTF-32, so use of wide characters is somewhat incapacitated. However, it should succesfully parse `wchar_t` strings containing UTF-16 or UTF-32 if endianness of the data matches that of the machine. UTF-8 is fully supported, including all numeric character references, which are expanded into appropriate UTF-8 byte sequences (unless you enable parse\_no\_utf8 flag).

Note that RapidXml performs no decoding - strings returned by name() and value() functions will contain text encoded using the same encoding as source file. Rapidxml understands and expands the following character references: `&apos; &amp; &quot; &lt; &gt;               &#...;` Other character references are not expanded.

### 1.3 Error Handling

By default, RapidXml uses C++ exceptions to report errors. If this behaviour is undesirable, RAPIDXML\_NO\_EXCEPTIONS can be defined to suppress exception code. See [parse\_error](#classrapidxml_1_1parse__error) class and [parse\_error\_handler()](#namespacerapidxml_ff5d67f74437199d316d2b2660653ae1_1ff5d67f74437199d316d2b2660653ae1) function for more information.

### 1.4 Memory Allocation

RapidXml uses a special memory pool object to allocate nodes and attributes, because direct allocation using `new` operator would be far too slow. Underlying memory allocations performed by the pool can be customized by use of [memory\_pool::set\_allocator()](#classrapidxml_1_1memory__pool_c0a55a6ef0837dca67572e357100d78a_1c0a55a6ef0837dca67572e357100d78a) function. See class [memory\_pool](#classrapidxml_1_1memory__pool) for more information.

### 1.5 W3C Compliance

RapidXml is not a W3C compliant parser, primarily because it ignores DOCTYPE declarations. There is a number of other, minor incompatibilities as well. Still, it can successfully parse and produce complete trees of all valid XML files in W3C conformance suite (over 1000 files specially designed to find flaws in XML processors). In destructive mode it performs whitespace normalization and character entity substitution for a small set of built-in entities.

### 1.6 API Design

RapidXml API is minimalistic, to reduce code size as much as possible, and facilitate use in embedded environments. Additional convenience functions are provided in separate headers: `rapidxml_utils.hpp` and `rapidxml_print.hpp`. Contents of these headers is not an essential part of the library, and is currently not documented (otherwise than with comments in code).

### 1.7 Reliability

RapidXml is very robust and comes with a large harness of unit tests. Special care has been taken to ensure stability of the parser no matter what source text is thrown at it. One of the unit tests produces 100,000 randomly corrupted variants of XML document, which (when uncorrupted) contains all constructs recognized by RapidXml. RapidXml passes this test when it correctly recognizes that errors have been introduced, and does not crash or loop indefinitely.

Another unit test puts RapidXml head-to-head with another, well estabilished XML parser, and verifies that their outputs match across a wide variety of small and large documents.

Yet another test feeds RapidXml with over 1000 test files from W3C compliance suite, and verifies that correct results are obtained. There are also additional tests that verify each API function separately, and test that various parsing modes work as expected.

### 1.8 Acknowledgements

I would like to thank Arseny Kapoulkine for his work on [pugixml](http://code.google.com/p/pugixml), which was an inspiration for this project. Additional thanks go to Kristen Wegner for creating [pugxml](http://www.codeproject.com/soap/pugxml.asp), from which pugixml was derived. Janusz Wohlfeil kindly ran RapidXml speed tests on hardware that I did not have access to, allowing me to expand performance comparison table.

2. Two Minute Tutorial
----------------------

### 2.1 Parsing

The following code causes RapidXml to parse a zero-terminated string named `text`:

    using namespace rapidxml;
    xml_document<> doc;    // character type defaults to char
    doc.parse<0>(text);    // 0 means default parse flags

`doc` object is now a root of DOM tree containing representation of the parsed XML. Because all RapidXml interface is contained inside namespace `rapidxml`, users must either bring contents of this namespace into scope, or fully qualify all the names. Class [xml\_document](#classrapidxml_1_1xml__document) represents a root of the DOM hierarchy. By means of public inheritance, it is also an [xml\_node](#classrapidxml_1_1xml__node) and a [memory\_pool](#classrapidxml_1_1memory__pool). Template parameter of [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function is used to specify parsing flags, with which you can fine-tune behaviour of the parser. Note that flags must be a compile-time constant.

### 2.2 Accessing The DOM Tree

To access the DOM tree, use methods of [xml\_node](#classrapidxml_1_1xml__node) and [xml\_attribute](#classrapidxml_1_1xml__attribute) classes:

    cout << "Name of my first node is: " << doc.first_node()->name() << "\n";
    xml_node<> *node = doc.first_node("foobar");
    cout << "Node foobar has value " << node->value() << "\n";
    for (xml_attribute<> *attr = node->first_attribute();
         attr; attr = attr->next_attribute())
    {
        cout << "Node foobar has attribute " << attr->name() << " ";
        cout << "with value " << attr->value() << "\n";
    }

### 2.3 Modifying The DOM Tree

DOM tree produced by the parser is fully modifiable. Nodes and attributes can be added/removed, and their contents changed. The below example creates a HTML document, whose sole contents is a link to google.com website:

    xml_document<> doc;
    xml_node<> *node = doc.allocate_node(node_element, "a", "Google");
    doc.append_node(node);
    xml_attribute<> *attr = doc.allocate_attribute("href", "google.com");
    node->append_attribute(attr);

One quirk is that nodes and attributes *do not own* the text of their names and values. This is because normally they only store pointers to the source text. So, when assigning a new name or value to the node, care must be taken to ensure proper lifetime of the string. The easiest way to achieve it is to allocate the string from the [xml\_document](#classrapidxml_1_1xml__document) memory pool. In the above example this is not necessary, because we are only assigning character constants. But the code below uses [memory\_pool::allocate\_string()](#classrapidxml_1_1memory__pool_69729185bc59b0875192d667c47b8859_169729185bc59b0875192d667c47b8859) function to allocate node name (which will have the same lifetime as the document), and assigns it to a new node:

    xml_document<> doc;
    char *node_name = doc.allocate_string(name);        // Allocate string and copy name into it
    xml_node<> *node = doc.allocate_node(node_element, node_name);  // Set node name to node_name

Check [Reference](#namespacerapidxml_1reference) section for description of the entire interface.

### 2.4 Printing XML

You can print `xml_document` and `xml_node` objects into an XML string. Use [print()](#namespacerapidxml_b94d570fc4c4ab2423813cd0243326b1_1b94d570fc4c4ab2423813cd0243326b1) function or operator &lt;&lt;, which are defined in `rapidxml_print.hpp` header.

    using namespace rapidxml;
    xml_document<> doc;    // character type defaults to char
    // ... some code to fill the document

    // Print to stream using operator <<
    std::cout << doc;   

    // Print to stream using print function, specifying printing flags
    print(std::cout, doc, 0);   // 0 means default printing flags

    // Print to string using output iterator
    std::string s;
    print(std::back_inserter(s), doc, 0);

    // Print to memory buffer using output iterator
    char buffer[4096];                      // You are responsible for making the buffer large enough!
    char *end = print(buffer, doc, 0);      // end contains pointer to character after last printed character
    *end = 0;                               // Add string terminator after XML

3. Differences From Regular XML Parsers
---------------------------------------

RapidXml is an *in-situ parser*, which allows it to achieve very high parsing speed. In-situ means that parser does not make copies of strings. Instead, it places pointers to the *source text* in the DOM hierarchy.

### 3.1 Lifetime Of Source Text

In-situ parsing requires that source text lives at least as long as the document object. If source text is destroyed, names and values of nodes in DOM tree will become destroyed as well. Additionally, whitespace processing, character entity translation, and zero-termination of strings require that source text be modified during parsing (but see non-destructive mode). This makes the text useless for further processing once it was parsed by RapidXml.

In many cases however, these are not serious issues.

### 3.2 Ownership Of Strings

Nodes and attributes produced by RapidXml do not own their name and value strings. They merely hold the pointers to them. This means you have to be careful when setting these values manually, by using [xml\_base::name(const Ch \*)](#classrapidxml_1_1xml__base_e099c291e104a0d277307fe71f5e0f9e_1e099c291e104a0d277307fe71f5e0f9e) or [xml\_base::value(const Ch \*)](#classrapidxml_1_1xml__base_18c7469acdca771de9b4f3054053029c_118c7469acdca771de9b4f3054053029c) functions. Care must be taken to ensure that lifetime of the string passed is at least as long as lifetime of the node/attribute. The easiest way to achieve it is to allocate the string from [memory\_pool](#classrapidxml_1_1memory__pool) owned by the document. Use [memory\_pool::allocate\_string()](#classrapidxml_1_1memory__pool_69729185bc59b0875192d667c47b8859_169729185bc59b0875192d667c47b8859) function for this purpose.

### 3.3 Destructive Vs Non-Destructive Mode

By default, the parser modifies source text during the parsing process. This is required to achieve character entity translation, whitespace normalization, and zero-termination of strings.

In some cases this behaviour may be undesirable, for example if source text resides in read only memory, or is mapped to memory directly from file. By using appropriate parser flags (parse\_non\_destructive), source text modifications can be disabled. However, because RapidXml does in-situ parsing, it obviously has the following side-effects:

-   no whitespace normalization is done
-   no entity reference translation is done
-   names and values are not zero-terminated, you must use [xml\_base::name\_size()](#classrapidxml_1_1xml__base_0dae694c8f7e4d89f1003e2f3a15a43c_10dae694c8f7e4d89f1003e2f3a15a43c) and [xml\_base::value\_size()](#classrapidxml_1_1xml__base_aed5ae791b7164c1ee5e649198cbb3db_1aed5ae791b7164c1ee5e649198cbb3db) functions to tell where they end

4. Performance
--------------

RapidXml achieves its speed through use of several techniques:

-   In-situ parsing. When building DOM tree, RapidXml does not make copies of string data, such as node names and values. Instead, it stores pointers to interior of the source text.
-   Use of template metaprogramming techniques. This allows it to move much of the work to compile time. Through magic of the templates, C++ compiler generates a separate copy of parsing code for any combination of parser flags you use. In each copy, all possible decisions are made at compile time and all unused code is omitted.
-   Extensive use of lookup tables for parsing.
-   Hand-tuned C++ with profiling done on several most popular CPUs.

This results in a very small and fast code: a parser which is custom tailored to exact needs with each invocation.

### 4.1 Comparison With Other Parsers

The table below compares speed of RapidXml to some other parsers, and to `strlen()` function executed on the same data. On a modern CPU (as of 2007), you can expect parsing throughput to be close to 1 GB/s. As a rule of thumb, parsing speed is about 50-100x faster than Xerces DOM, 30-60x faster than TinyXml, 3-12x faster than pugxml, and about 5% - 30% faster than pugixml, the fastest XML parser I know of.

-   The test file is a real-world, 50kB large, moderately dense XML file.
-   All timing is done by using RDTSC instruction present in Pentium-compatible CPUs.
-   No profile-guided optimizations are used.
-   All parsers are running in their fastest modes.
-   The results are given in CPU cycles per character, so frequency of CPUs is irrelevant.
-   The results are minimum values from a large number of runs, to minimize effects of operating system activity, task switching, interrupt handling etc.
-   A single parse of the test file takes about 1/10th of a millisecond, so with large number of runs there is a good chance of hitting at least one no-interrupt streak, and obtaining undisturbed results.

<table><thead><tr class="header"><th>Platform</th><th>Compiler</th><th>strlen()</th><th>RapidXml</th><th>pugixml 0.3</th><th>pugxml</th><th>TinyXml</th></tr></thead><tbody><tr class="odd"><td>Pentium 4</td><td>MSVC 8.0</td><td>2.5</td><td>5.4</td><td>7.0</td><td>61.7</td><td>298.8</td></tr><tr class="even"><td>Pentium 4</td><td>gcc 4.1.1</td><td>0.8</td><td>6.1</td><td>9.5</td><td>67.0</td><td>413.2</td></tr><tr class="odd"><td>Core 2</td><td>MSVC 8.0</td><td>1.0</td><td>4.5</td><td>5.0</td><td>24.6</td><td>154.8</td></tr><tr class="even"><td>Core 2</td><td>gcc 4.1.1</td><td>0.6</td><td>4.6</td><td>5.4</td><td>28.3</td><td>229.3</td></tr><tr class="odd"><td>Athlon XP</td><td>MSVC 8.0</td><td>3.1</td><td>7.7</td><td>8.0</td><td>25.5</td><td>182.6</td></tr><tr class="even"><td>Athlon XP</td><td>gcc 4.1.1</td><td>0.9</td><td>8.2</td><td>9.2</td><td>33.7</td><td>265.2</td></tr><tr class="odd"><td>Pentium 3</td><td>MSVC 8.0</td><td>2.0</td><td>6.3</td><td>7.0</td><td>30.9</td><td>211.9</td></tr><tr class="even"><td>Pentium 3</td><td>gcc 4.1.1</td><td>1.0</td><td>6.7</td><td>8.9</td><td>35.3</td><td>316.0</td></tr></tbody></table>

*(\*) All results are in CPU cycles per character of source text*

5. Reference
------------

This section lists all classes, functions, constants etc. and describes them in detail.

class template [rapidxml::memory\_pool](#classrapidxml_1_1memory__pool)

constructor [memory\_pool()](#classrapidxml_1_1memory__pool_f8fb3c8f1a564f8045c40bcd07a89866_1f8fb3c8f1a564f8045c40bcd07a89866)

destructor [~memory\_pool()](#classrapidxml_1_1memory__pool_6f8c7990d9ec1ed2acf6558b238570eb_16f8c7990d9ec1ed2acf6558b238570eb)

function [allocate\_node(node\_type type, const Ch \*name=0, const Ch \*value=0, std::size\_t name\_size=0, std::size\_t value\_size=0)](#classrapidxml_1_1memory__pool_750ba3c610b129ac057d817509d08f41_1750ba3c610b129ac057d817509d08f41)

function [allocate\_attribute(const Ch \*name=0, const Ch \*value=0, std::size\_t name\_size=0, std::size\_t value\_size=0)](#classrapidxml_1_1memory__pool_462de142669e0ff649e8e615b82bf457_1462de142669e0ff649e8e615b82bf457)

function [allocate\_string(const Ch \*source=0, std::size\_t size=0)](#classrapidxml_1_1memory__pool_69729185bc59b0875192d667c47b8859_169729185bc59b0875192d667c47b8859)

function [clone\_node(const xml\_node&lt; Ch &gt; \*source, xml\_node&lt; Ch &gt; \*result=0)](#classrapidxml_1_1memory__pool_95c49fcb056e9103ec906a59e3e01d76_195c49fcb056e9103ec906a59e3e01d76)

function [clear()](#classrapidxml_1_1memory__pool_c8bb3912a3ce86b15842e79d0b421204_1c8bb3912a3ce86b15842e79d0b421204)

function [set\_allocator(alloc\_func \*af, free\_func \*ff)](#classrapidxml_1_1memory__pool_c0a55a6ef0837dca67572e357100d78a_1c0a55a6ef0837dca67572e357100d78a)

class [rapidxml::parse\_error](#classrapidxml_1_1parse__error)

constructor [parse\_error(const char \*what, void \*where)](#classrapidxml_1_1parse__error_4dd8d1bdbd9221df4dcb90cafaee3332_14dd8d1bdbd9221df4dcb90cafaee3332)

function [what() const](#classrapidxml_1_1parse__error_ff06f49065b54a8a86e02e9a2441a8ba_1ff06f49065b54a8a86e02e9a2441a8ba)

function [where() const](#classrapidxml_1_1parse__error_377be7d201d95221c318682c35377aca_1377be7d201d95221c318682c35377aca)

class template [rapidxml::xml\_attribute](#classrapidxml_1_1xml__attribute)

constructor [xml\_attribute()](#classrapidxml_1_1xml__attribute_d5464aadf08269a886b730993525db34_1d5464aadf08269a886b730993525db34)

function [document() const](#classrapidxml_1_1xml__attribute_77aea7d8d996ba4f6bd61cc478a4e72d_177aea7d8d996ba4f6bd61cc478a4e72d)

function [previous\_attribute(const Ch \*name=0, std::size\_t name\_size=0, bool case\_sensitive=true) const](#classrapidxml_1_1xml__attribute_5c4a98d2b75f9b41b12c110108fd55ab_15c4a98d2b75f9b41b12c110108fd55ab)

function [next\_attribute(const Ch \*name=0, std::size\_t name\_size=0, bool case\_sensitive=true) const](#classrapidxml_1_1xml__attribute_1b8a814d0d3a7165396b08433eee8a91_11b8a814d0d3a7165396b08433eee8a91)

class template [rapidxml::xml\_base](#classrapidxml_1_1xml__base)

constructor [xml\_base()](#classrapidxml_1_1xml__base_23630d2c130a9e0e3f3afa7584a9b218_123630d2c130a9e0e3f3afa7584a9b218)

function [name() const](#classrapidxml_1_1xml__base_622eade29fdf7806d3ef93ac4d90e707_1622eade29fdf7806d3ef93ac4d90e707)

function [name\_size() const](#classrapidxml_1_1xml__base_0dae694c8f7e4d89f1003e2f3a15a43c_10dae694c8f7e4d89f1003e2f3a15a43c)

function [value() const](#classrapidxml_1_1xml__base_c54fa4987fb503916a7b541eb15c9c7f_1c54fa4987fb503916a7b541eb15c9c7f)

function [value\_size() const](#classrapidxml_1_1xml__base_aed5ae791b7164c1ee5e649198cbb3db_1aed5ae791b7164c1ee5e649198cbb3db)

function [name(const Ch \*name, std::size\_t size)](#classrapidxml_1_1xml__base_4e7e23d06d48126c65b1f6266acfba5c_14e7e23d06d48126c65b1f6266acfba5c)

function [name(const Ch \*name)](#classrapidxml_1_1xml__base_e099c291e104a0d277307fe71f5e0f9e_1e099c291e104a0d277307fe71f5e0f9e)

function [value(const Ch \*value, std::size\_t size)](#classrapidxml_1_1xml__base_d9640aa3f5374673cb72a5289b6c91eb_1d9640aa3f5374673cb72a5289b6c91eb)

function [value(const Ch \*value)](#classrapidxml_1_1xml__base_18c7469acdca771de9b4f3054053029c_118c7469acdca771de9b4f3054053029c)

function [parent() const](#classrapidxml_1_1xml__base_798e8df7ea53ade4d9f0701017dce80e_1798e8df7ea53ade4d9f0701017dce80e)

class template [rapidxml::xml\_document](#classrapidxml_1_1xml__document)

constructor [xml\_document()](#classrapidxml_1_1xml__document_6ce266cc52d549c42abe3a3d5e8af9ba_16ce266cc52d549c42abe3a3d5e8af9ba)

function [parse(Ch \*text)](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c)

function [clear()](#classrapidxml_1_1xml__document_c8bb3912a3ce86b15842e79d0b421204_1c8bb3912a3ce86b15842e79d0b421204)

class template [rapidxml::xml\_node](#classrapidxml_1_1xml__node)

constructor [xml\_node(node\_type type)](#classrapidxml_1_1xml__node_34c55af3504549a475e5b9dfcaa6adf5_134c55af3504549a475e5b9dfcaa6adf5)

function [type() const](#classrapidxml_1_1xml__node_975e86937621ae4afe6a423219de30d0_1975e86937621ae4afe6a423219de30d0)

function [document() const](#classrapidxml_1_1xml__node_77aea7d8d996ba4f6bd61cc478a4e72d_177aea7d8d996ba4f6bd61cc478a4e72d)

function [first\_node(const Ch \*name=0, std::size\_t name\_size=0, bool case\_sensitive=true) const](#classrapidxml_1_1xml__node_7823e36687669e59c2afdf66334ef35a_17823e36687669e59c2afdf66334ef35a)

function [last\_node(const Ch \*name=0, std::size\_t name\_size=0, bool case\_sensitive=true) const](#classrapidxml_1_1xml__node_fcb6e2209b591a36d2dadba20d2bc7cc_1fcb6e2209b591a36d2dadba20d2bc7cc)

function [previous\_sibling(const Ch \*name=0, std::size\_t name\_size=0, bool case\_sensitive=true) const](#classrapidxml_1_1xml__node_ac2f6886c0107e9d5f156e9542546df6_1ac2f6886c0107e9d5f156e9542546df6)

function [next\_sibling(const Ch \*name=0, std::size\_t name\_size=0, bool case\_sensitive=true) const](#classrapidxml_1_1xml__node_b3ead2cefecc03a813836203e3f6f38f_1b3ead2cefecc03a813836203e3f6f38f)

function [first\_attribute(const Ch \*name=0, std::size\_t name\_size=0, bool case\_sensitive=true) const](#classrapidxml_1_1xml__node_5810a09f82f8d53efbe9456286dcec83_15810a09f82f8d53efbe9456286dcec83)

function [last\_attribute(const Ch \*name=0, std::size\_t name\_size=0, bool case\_sensitive=true) const](#classrapidxml_1_1xml__node_16953d66751b5b949ee4ee2d9c0bc63a_116953d66751b5b949ee4ee2d9c0bc63a)

function [type(node\_type type)](#classrapidxml_1_1xml__node_a78759bfa429fa2ab6bc5fe617cfa3cf_1a78759bfa429fa2ab6bc5fe617cfa3cf)

function [prepend\_node(xml\_node&lt; Ch &gt; \*child)](#classrapidxml_1_1xml__node_0c39df6617e709eb2fba11300dea63f2_10c39df6617e709eb2fba11300dea63f2)

function [append\_node(xml\_node&lt; Ch &gt; \*child)](#classrapidxml_1_1xml__node_86de2e22276826089b7baed2599f8dee_186de2e22276826089b7baed2599f8dee)

function [insert\_node(xml\_node&lt; Ch &gt; \*where, xml\_node&lt; Ch &gt; \*child)](#classrapidxml_1_1xml__node_780972a57fc447250ab47cc8f421b65e_1780972a57fc447250ab47cc8f421b65e)

function [remove\_first\_node()](#classrapidxml_1_1xml__node_9a31d861e1bddc710839c551a5d2b3a4_19a31d861e1bddc710839c551a5d2b3a4)

function [remove\_last\_node()](#classrapidxml_1_1xml__node_87addf2bc127ee31aa4b5295d3c9b530_187addf2bc127ee31aa4b5295d3c9b530)

function [remove\_node(xml\_node&lt; Ch &gt; \*where)](#classrapidxml_1_1xml__node_9316463a2201631e7e2062b17729f9cd_19316463a2201631e7e2062b17729f9cd)

function [remove\_all\_nodes()](#classrapidxml_1_1xml__node_0218147d13e41d5fa60ced4e7a7e9726_10218147d13e41d5fa60ced4e7a7e9726)

function [prepend\_attribute(xml\_attribute&lt; Ch &gt; \*attribute)](#classrapidxml_1_1xml__node_f6dffa513da74cc0be71a7ba84f8265e_1f6dffa513da74cc0be71a7ba84f8265e)

function [append\_attribute(xml\_attribute&lt; Ch &gt; \*attribute)](#classrapidxml_1_1xml__node_8fbd4f5ef7169d493da9f8d87ac04b77_18fbd4f5ef7169d493da9f8d87ac04b77)

function [insert\_attribute(xml\_attribute&lt; Ch &gt; \*where, xml\_attribute&lt; Ch &gt; \*attribute)](#classrapidxml_1_1xml__node_070d5888b0557fe06a5b24961de1b988_1070d5888b0557fe06a5b24961de1b988)

function [remove\_first\_attribute()](#classrapidxml_1_1xml__node_4eea4a7f6cb484ca9944f7eafe6e1843_14eea4a7f6cb484ca9944f7eafe6e1843)

function [remove\_last\_attribute()](#classrapidxml_1_1xml__node_37d87c4d5d89fa0cf05b72ee8d4cba3b_137d87c4d5d89fa0cf05b72ee8d4cba3b)

function [remove\_attribute(xml\_attribute&lt; Ch &gt; \*where)](#classrapidxml_1_1xml__node_c75154db2e768c0e5b541fc8cd0775ab_1c75154db2e768c0e5b541fc8cd0775ab)

function [remove\_all\_attributes()](#classrapidxml_1_1xml__node_59e6ad4cfd5e8096c052e71d79561eda_159e6ad4cfd5e8096c052e71d79561eda)

namespace [rapidxml](#namespacerapidxml)

enum [node\_type](#namespacerapidxml_6a276b85e2da28c5f9c3dbce61c55682_16a276b85e2da28c5f9c3dbce61c55682)

function [parse\_error\_handler(const char \*what, void \*where)](#namespacerapidxml_ff5d67f74437199d316d2b2660653ae1_1ff5d67f74437199d316d2b2660653ae1)

function [print(OutIt out, const xml\_node&lt; Ch &gt; &node, int flags=0)](#namespacerapidxml_b94d570fc4c4ab2423813cd0243326b1_1b94d570fc4c4ab2423813cd0243326b1)

function [print(std::basic\_ostream&lt; Ch &gt; &out, const xml\_node&lt; Ch &gt; &node, int flags=0)](#namespacerapidxml_13bc37d6d1047acb0efdbc1689221a5e_113bc37d6d1047acb0efdbc1689221a5e)

function [operator&lt;&lt;(std::basic\_ostream&lt; Ch &gt; &out, const xml\_node&lt; Ch &gt; &node)](#namespacerapidxml_5619b38000d967fb223b2b0a8c17463a_15619b38000d967fb223b2b0a8c17463a)

constant [parse\_no\_data\_nodes](#namespacerapidxml_87e8bbab53702cf3b438bd553c10b6b9_187e8bbab53702cf3b438bd553c10b6b9)

constant [parse\_no\_element\_values](#namespacerapidxml_97e2c4fdc04fae17126f9971a4fc993e_197e2c4fdc04fae17126f9971a4fc993e)

constant [parse\_no\_string\_terminators](#namespacerapidxml_9cae3801e70437cbc410c24bf6be691c_19cae3801e70437cbc410c24bf6be691c)

constant [parse\_no\_entity\_translation](#namespacerapidxml_7223b7815c4fb8b42e6e4e77e1ea6b97_17223b7815c4fb8b42e6e4e77e1ea6b97)

constant [parse\_no\_utf8](#namespacerapidxml_ccde57f6054857ee4042a1b4d98c83b9_1ccde57f6054857ee4042a1b4d98c83b9)

constant [parse\_declaration\_node](#namespacerapidxml_52e2c934ad9c845a5f4cc49570470556_152e2c934ad9c845a5f4cc49570470556)

constant [parse\_comment\_nodes](#namespacerapidxml_0f7479dacbc868456d07897a8c072784_10f7479dacbc868456d07897a8c072784)

constant [parse\_doctype\_node](#namespacerapidxml_8e187746ba1ca04f107951ad32df962e_18e187746ba1ca04f107951ad32df962e)

constant [parse\_pi\_nodes](#namespacerapidxml_1c20b2b2b75711cd76423e119c49f830_11c20b2b2b75711cd76423e119c49f830)

constant [parse\_validate\_closing\_tags](#namespacerapidxml_a5daff9d61c7d4eaf98e4d42efe628ee_1a5daff9d61c7d4eaf98e4d42efe628ee)

constant [parse\_trim\_whitespace](#namespacerapidxml_ac1f06b1afd47b812732fb521b146fd9_1ac1f06b1afd47b812732fb521b146fd9)

constant [parse\_normalize\_whitespace](#namespacerapidxml_88f95d4e275ba01408fefde83078651b_188f95d4e275ba01408fefde83078651b)

constant [parse\_default](#namespacerapidxml_45751cf2f38fd6915f35b3122b46d5b6_145751cf2f38fd6915f35b3122b46d5b6)

constant [parse\_non\_destructive](#namespacerapidxml_a97ba1a0a79a6d66f4eef3612508d943_1a97ba1a0a79a6d66f4eef3612508d943)

constant [parse\_fastest](#namespacerapidxml_398c5476e76102f8bd76c10bb0abbe10_1398c5476e76102f8bd76c10bb0abbe10)

constant [parse\_full](#namespacerapidxml_b4f2515265facb42291570307924bd57_1b4f2515265facb42291570307924bd57)

constant [print\_no\_indenting](#namespacerapidxml_b08b8d4293c203b69ed6c5ae77ac1907_1b08b8d4293c203b69ed6c5ae77ac1907)

------------------------------------------------------------------------

### class template rapidxml::memory\_pool

Defined in [rapidxml.hpp](rapidxml.hpp)  
Base class for [xml\_document](#classrapidxml_1_1xml__document)

#### Description

This class is used by the parser to create new nodes and attributes, without overheads of dynamic memory allocation. In most cases, you will not need to use this class directly. However, if you need to create nodes manually or modify names/values of nodes, you are encouraged to use [memory\_pool](#classrapidxml_1_1memory__pool) of relevant [xml\_document](#classrapidxml_1_1xml__document) to allocate the memory. Not only is this faster than allocating them by using `new` operator, but also their lifetime will be tied to the lifetime of document, possibly simplyfing memory management.

Call [allocate\_node()](#classrapidxml_1_1memory__pool_750ba3c610b129ac057d817509d08f41_1750ba3c610b129ac057d817509d08f41) or [allocate\_attribute()](#classrapidxml_1_1memory__pool_462de142669e0ff649e8e615b82bf457_1462de142669e0ff649e8e615b82bf457) functions to obtain new nodes or attributes from the pool. You can also call [allocate\_string()](#classrapidxml_1_1memory__pool_69729185bc59b0875192d667c47b8859_169729185bc59b0875192d667c47b8859) function to allocate strings. Such strings can then be used as names or values of nodes without worrying about their lifetime. Note that there is no `free()` function – all allocations are freed at once when [clear()](#classrapidxml_1_1memory__pool_c8bb3912a3ce86b15842e79d0b421204_1c8bb3912a3ce86b15842e79d0b421204) function is called, or when the pool is destroyed.

It is also possible to create a standalone [memory\_pool](#classrapidxml_1_1memory__pool), and use it to allocate nodes, whose lifetime will not be tied to any document.

Pool maintains `RAPIDXML_STATIC_POOL_SIZE` bytes of statically allocated memory. Until static memory is exhausted, no dynamic memory allocations are done. When static memory is exhausted, pool allocates additional blocks of memory of size `RAPIDXML_DYNAMIC_POOL_SIZE` each, by using global `new[]` and `delete[]` operators. This behaviour can be changed by setting custom allocation routines. Use [set\_allocator()](#classrapidxml_1_1memory__pool_c0a55a6ef0837dca67572e357100d78a_1c0a55a6ef0837dca67572e357100d78a) function to set them.

Allocations for nodes, attributes and strings are aligned at `RAPIDXML_ALIGNMENT` bytes. This value defaults to the size of pointer on target architecture.

To obtain absolutely top performance from the parser, it is important that all nodes are allocated from a single, contiguous block of memory. Otherwise, cache misses when jumping between two (or more) disjoint blocks of memory can slow down parsing quite considerably. If required, you can tweak `RAPIDXML_STATIC_POOL_SIZE`, `RAPIDXML_DYNAMIC_POOL_SIZE` and `RAPIDXML_ALIGNMENT` to obtain best wasted memory to performance compromise. To do it, define their values before [rapidxml.hpp](#rapidxml_8hpp) file is included.

#### Parameters

Ch  
Character type of created nodes.

### constructor memory\_pool::memory\_pool

#### Synopsis

`memory_pool();`

#### Description

Constructs empty pool with default allocator functions.

### destructor memory\_pool::~memory\_pool

#### Synopsis

`~memory_pool();`

#### Description

Destroys pool and frees all the memory. This causes memory occupied by nodes allocated by the pool to be freed. Nodes allocated from the pool are no longer valid.

### function memory\_pool::allocate\_node

#### Synopsis

`xml_node<Ch>* allocate_node(node_type type, const Ch *name=0, const       Ch *value=0, std::size_t name_size=0, std::size_t value_size=0);`

#### Description

Allocates a new node from the pool, and optionally assigns name and value to it. If the allocation request cannot be accomodated, this function will throw `std::bad_alloc`. If exceptions are disabled by defining RAPIDXML\_NO\_EXCEPTIONS, this function will call [rapidxml::parse\_error\_handler()](#namespacerapidxml_ff5d67f74437199d316d2b2660653ae1_1ff5d67f74437199d316d2b2660653ae1) function.

#### Parameters

type  
Type of node to create.

name  
Name to assign to the node, or 0 to assign no name.

value  
Value to assign to the node, or 0 to assign no value.

name\_size  
Size of name to assign, or 0 to automatically calculate size from name string.

value\_size  
Size of value to assign, or 0 to automatically calculate size from value string.

#### Returns

Pointer to allocated node. This pointer will never be NULL.

### function memory\_pool::allocate\_attribute

#### Synopsis

`xml_attribute<Ch>* allocate_attribute(const Ch *name=0, const Ch       *value=0, std::size_t name_size=0, std::size_t value_size=0);`

#### Description

Allocates a new attribute from the pool, and optionally assigns name and value to it. If the allocation request cannot be accomodated, this function will throw `std::bad_alloc`. If exceptions are disabled by defining RAPIDXML\_NO\_EXCEPTIONS, this function will call [rapidxml::parse\_error\_handler()](#namespacerapidxml_ff5d67f74437199d316d2b2660653ae1_1ff5d67f74437199d316d2b2660653ae1) function.

#### Parameters

name  
Name to assign to the attribute, or 0 to assign no name.

value  
Value to assign to the attribute, or 0 to assign no value.

name\_size  
Size of name to assign, or 0 to automatically calculate size from name string.

value\_size  
Size of value to assign, or 0 to automatically calculate size from value string.

#### Returns

Pointer to allocated attribute. This pointer will never be NULL.

### function memory\_pool::allocate\_string

#### Synopsis

`Ch* allocate_string(const Ch *source=0, std::size_t size=0);`

#### Description

Allocates a char array of given size from the pool, and optionally copies a given string to it. If the allocation request cannot be accomodated, this function will throw `std::bad_alloc`. If exceptions are disabled by defining RAPIDXML\_NO\_EXCEPTIONS, this function will call [rapidxml::parse\_error\_handler()](#namespacerapidxml_ff5d67f74437199d316d2b2660653ae1_1ff5d67f74437199d316d2b2660653ae1) function.

#### Parameters

source  
String to initialize the allocated memory with, or 0 to not initialize it.

size  
Number of characters to allocate, or zero to calculate it automatically from source string length; if size is 0, source string must be specified and null terminated.

#### Returns

Pointer to allocated char array. This pointer will never be NULL.

### function memory\_pool::clone\_node

#### Synopsis

`xml_node<Ch>* clone_node(const xml_node< Ch > *source,       xml_node< Ch > *result=0);`

#### Description

Clones an [xml\_node](#classrapidxml_1_1xml__node) and its hierarchy of child nodes and attributes. Nodes and attributes are allocated from this memory pool. Names and values are not cloned, they are shared between the clone and the source. Result node can be optionally specified as a second parameter, in which case its contents will be replaced with cloned source node. This is useful when you want to clone entire document.

#### Parameters

source  
Node to clone.

result  
Node to put results in, or 0 to automatically allocate result node

#### Returns

Pointer to cloned node. This pointer will never be NULL.

### function memory\_pool::clear

#### Synopsis

`void clear();`

#### Description

Clears the pool. This causes memory occupied by nodes allocated by the pool to be freed. Any nodes or strings allocated from the pool will no longer be valid.

### function memory\_pool::set\_allocator

#### Synopsis

`void set_allocator(alloc_func *af, free_func *ff);`

#### Description

Sets or resets the user-defined memory allocation functions for the pool. This can only be called when no memory is allocated from the pool yet, otherwise results are undefined. Allocation function must not return invalid pointer on failure. It should either throw, stop the program, or use `longjmp()` function to pass control to other place of program. If it returns invalid pointer, results are undefined.

User defined allocation functions must have the following forms:  
`void *allocate(std::size_t size);          void free(void *pointer);`

#### Parameters

af  
Allocation function, or 0 to restore default function

ff  
Free function, or 0 to restore default function

### class rapidxml::parse\_error

Defined in [rapidxml.hpp](rapidxml.hpp)

#### Description

Parse error exception. This exception is thrown by the parser when an error occurs. Use [what()](#classrapidxml_1_1parse__error_ff06f49065b54a8a86e02e9a2441a8ba_1ff06f49065b54a8a86e02e9a2441a8ba) function to get human-readable error message. Use [where()](#classrapidxml_1_1parse__error_377be7d201d95221c318682c35377aca_1377be7d201d95221c318682c35377aca) function to get a pointer to position within source text where error was detected.

If throwing exceptions by the parser is undesirable, it can be disabled by defining RAPIDXML\_NO\_EXCEPTIONS macro before [rapidxml.hpp](#rapidxml_8hpp) is included. This will cause the parser to call [rapidxml::parse\_error\_handler()](#namespacerapidxml_ff5d67f74437199d316d2b2660653ae1_1ff5d67f74437199d316d2b2660653ae1) function instead of throwing an exception. This function must be defined by the user.

This class derives from `std::exception` class.

### constructor parse\_error::parse\_error

#### Synopsis

`parse_error(const char *what, void *where);`

#### Description

Constructs parse error.

### function parse\_error::what

#### Synopsis

`virtual const char* what() const;`

#### Description

Gets human readable description of error.

#### Returns

Pointer to null terminated description of the error.

### function parse\_error::where

#### Synopsis

`Ch* where() const;`

#### Description

Gets pointer to character data where error happened. Ch should be the same as char type of [xml\_document](#classrapidxml_1_1xml__document) that produced the error.

#### Returns

Pointer to location within the parsed string where error occured.

### class template rapidxml::xml\_attribute

Defined in [rapidxml.hpp](rapidxml.hpp)  
Inherits from [xml\_base](#classrapidxml_1_1xml__base)

#### Description

Class representing attribute node of XML document. Each attribute has name and value strings, which are available through [name()](#classrapidxml_1_1xml__base_622eade29fdf7806d3ef93ac4d90e707_1622eade29fdf7806d3ef93ac4d90e707) and [value()](#classrapidxml_1_1xml__base_c54fa4987fb503916a7b541eb15c9c7f_1c54fa4987fb503916a7b541eb15c9c7f) functions (inherited from [xml\_base](#classrapidxml_1_1xml__base)). Note that after parse, both name and value of attribute will point to interior of source text used for parsing. Thus, this text must persist in memory for the lifetime of attribute.

#### Parameters

Ch  
Character type to use.

### constructor xml\_attribute::xml\_attribute

#### Synopsis

`xml_attribute();`

#### Description

Constructs an empty attribute with the specified type. Consider using [memory\_pool](#classrapidxml_1_1memory__pool) of appropriate [xml\_document](#classrapidxml_1_1xml__document) if allocating attributes manually.

### function xml\_attribute::document

#### Synopsis

`xml_document<Ch>* document() const;`

#### Description

Gets document of which attribute is a child.

#### Returns

Pointer to document that contains this attribute, or 0 if there is no parent document.

### function xml\_attribute::previous\_attribute

#### Synopsis

`xml_attribute<Ch>* previous_attribute(const Ch *name=0, std::size_t       name_size=0, bool case_sensitive=true) const;`

#### Description

Gets previous attribute, optionally matching attribute name.

#### Parameters

name  
Name of attribute to find, or 0 to return previous attribute regardless of its name; this string doesn’t have to be zero-terminated if name\_size is non-zero

name\_size  
Size of name, in characters, or 0 to have size calculated automatically from string

case\_sensitive  
Should name comparison be case-sensitive; non case-sensitive comparison works properly only for ASCII characters

#### Returns

Pointer to found attribute, or 0 if not found.

### function xml\_attribute::next\_attribute

#### Synopsis

`xml_attribute<Ch>* next_attribute(const Ch *name=0, std::size_t       name_size=0, bool case_sensitive=true) const;`

#### Description

Gets next attribute, optionally matching attribute name.

#### Parameters

name  
Name of attribute to find, or 0 to return next attribute regardless of its name; this string doesn’t have to be zero-terminated if name\_size is non-zero

name\_size  
Size of name, in characters, or 0 to have size calculated automatically from string

case\_sensitive  
Should name comparison be case-sensitive; non case-sensitive comparison works properly only for ASCII characters

#### Returns

Pointer to found attribute, or 0 if not found.

### class template rapidxml::xml\_base

Defined in [rapidxml.hpp](rapidxml.hpp)  
Base class for [xml\_attribute](#classrapidxml_1_1xml__attribute) [xml\_node](#classrapidxml_1_1xml__node)

#### Description

Base class for [xml\_node](#classrapidxml_1_1xml__node) and [xml\_attribute](#classrapidxml_1_1xml__attribute) implementing common functions: [name()](#classrapidxml_1_1xml__base_622eade29fdf7806d3ef93ac4d90e707_1622eade29fdf7806d3ef93ac4d90e707), [name\_size()](#classrapidxml_1_1xml__base_0dae694c8f7e4d89f1003e2f3a15a43c_10dae694c8f7e4d89f1003e2f3a15a43c), [value()](#classrapidxml_1_1xml__base_c54fa4987fb503916a7b541eb15c9c7f_1c54fa4987fb503916a7b541eb15c9c7f), [value\_size()](#classrapidxml_1_1xml__base_aed5ae791b7164c1ee5e649198cbb3db_1aed5ae791b7164c1ee5e649198cbb3db) and [parent()](#classrapidxml_1_1xml__base_798e8df7ea53ade4d9f0701017dce80e_1798e8df7ea53ade4d9f0701017dce80e).

#### Parameters

Ch  
Character type to use

### constructor xml\_base::xml\_base

#### Synopsis

`xml_base();`

### function xml\_base::name

#### Synopsis

`Ch* name() const;`

#### Description

Gets name of the node. Interpretation of name depends on type of node. Note that name will not be zero-terminated if [rapidxml::parse\_no\_string\_terminators](#namespacerapidxml_9cae3801e70437cbc410c24bf6be691c_19cae3801e70437cbc410c24bf6be691c) option was selected during parse.

Use [name\_size()](#classrapidxml_1_1xml__base_0dae694c8f7e4d89f1003e2f3a15a43c_10dae694c8f7e4d89f1003e2f3a15a43c) function to determine length of the name.

#### Returns

Name of node, or empty string if node has no name.

### function xml\_base::name\_size

#### Synopsis

`std::size_t name_size() const;`

#### Description

Gets size of node name, not including terminator character. This function works correctly irrespective of whether name is or is not zero terminated.

#### Returns

Size of node name, in characters.

### function xml\_base::value

#### Synopsis

`Ch* value() const;`

#### Description

Gets value of node. Interpretation of value depends on type of node. Note that value will not be zero-terminated if [rapidxml::parse\_no\_string\_terminators](#namespacerapidxml_9cae3801e70437cbc410c24bf6be691c_19cae3801e70437cbc410c24bf6be691c) option was selected during parse.

Use [value\_size()](#classrapidxml_1_1xml__base_aed5ae791b7164c1ee5e649198cbb3db_1aed5ae791b7164c1ee5e649198cbb3db) function to determine length of the value.

#### Returns

Value of node, or empty string if node has no value.

### function xml\_base::value\_size

#### Synopsis

`std::size_t value_size() const;`

#### Description

Gets size of node value, not including terminator character. This function works correctly irrespective of whether value is or is not zero terminated.

#### Returns

Size of node value, in characters.

### function xml\_base::name

#### Synopsis

`void name(const Ch *name, std::size_t size);`

#### Description

Sets name of node to a non zero-terminated string. See [Ownership Of Strings](#namespacerapidxml_1ownership_of_strings) .

Note that node does not own its name or value, it only stores a pointer to it. It will not delete or otherwise free the pointer on destruction. It is reponsibility of the user to properly manage lifetime of the string. The easiest way to achieve it is to use [memory\_pool](#classrapidxml_1_1memory__pool) of the document to allocate the string - on destruction of the document the string will be automatically freed.

Size of name must be specified separately, because name does not have to be zero terminated. Use [name(const Ch \*)](#classrapidxml_1_1xml__base_e099c291e104a0d277307fe71f5e0f9e_1e099c291e104a0d277307fe71f5e0f9e) function to have the length automatically calculated (string must be zero terminated).

#### Parameters

name  
Name of node to set. Does not have to be zero terminated.

size  
Size of name, in characters. This does not include zero terminator, if one is present.

### function xml\_base::name

#### Synopsis

`void name(const Ch *name);`

#### Description

Sets name of node to a zero-terminated string. See also [Ownership Of Strings](#namespacerapidxml_1ownership_of_strings) and [xml\_node::name(const Ch \*, std::size\_t)](#classrapidxml_1_1xml__base_4e7e23d06d48126c65b1f6266acfba5c_14e7e23d06d48126c65b1f6266acfba5c).

#### Parameters

name  
Name of node to set. Must be zero terminated.

### function xml\_base::value

#### Synopsis

`void value(const Ch *value, std::size_t size);`

#### Description

Sets value of node to a non zero-terminated string. See [Ownership Of Strings](#namespacerapidxml_1ownership_of_strings) .

Note that node does not own its name or value, it only stores a pointer to it. It will not delete or otherwise free the pointer on destruction. It is reponsibility of the user to properly manage lifetime of the string. The easiest way to achieve it is to use [memory\_pool](#classrapidxml_1_1memory__pool) of the document to allocate the string - on destruction of the document the string will be automatically freed.

Size of value must be specified separately, because it does not have to be zero terminated. Use [value(const Ch \*)](#classrapidxml_1_1xml__base_18c7469acdca771de9b4f3054053029c_118c7469acdca771de9b4f3054053029c) function to have the length automatically calculated (string must be zero terminated).

If an element has a child node of type node\_data, it will take precedence over element value when printing. If you want to manipulate data of elements using values, use parser flag [rapidxml::parse\_no\_data\_nodes](#namespacerapidxml_87e8bbab53702cf3b438bd553c10b6b9_187e8bbab53702cf3b438bd553c10b6b9) to prevent creation of data nodes by the parser.

#### Parameters

value  
value of node to set. Does not have to be zero terminated.

size  
Size of value, in characters. This does not include zero terminator, if one is present.

### function xml\_base::value

#### Synopsis

`void value(const Ch *value);`

#### Description

Sets value of node to a zero-terminated string. See also [Ownership Of Strings](#namespacerapidxml_1ownership_of_strings) and [xml\_node::value(const Ch \*, std::size\_t)](#classrapidxml_1_1xml__base_d9640aa3f5374673cb72a5289b6c91eb_1d9640aa3f5374673cb72a5289b6c91eb).

#### Parameters

value  
Vame of node to set. Must be zero terminated.

### function xml\_base::parent

#### Synopsis

`xml_node<Ch>* parent() const;`

#### Description

Gets node parent.

#### Returns

Pointer to parent node, or 0 if there is no parent.

### class template rapidxml::xml\_document

Defined in [rapidxml.hpp](rapidxml.hpp)  
Inherits from [xml\_node](#classrapidxml_1_1xml__node) [memory\_pool](#classrapidxml_1_1memory__pool)

#### Description

This class represents root of the DOM hierarchy. It is also an [xml\_node](#classrapidxml_1_1xml__node) and a [memory\_pool](#classrapidxml_1_1memory__pool) through public inheritance. Use [parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function to build a DOM tree from a zero-terminated XML text string. [parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function allocates memory for nodes and attributes by using functions of [xml\_document](#classrapidxml_1_1xml__document), which are inherited from [memory\_pool](#classrapidxml_1_1memory__pool). To access root node of the document, use the document itself, as if it was an [xml\_node](#classrapidxml_1_1xml__node).

#### Parameters

Ch  
Character type to use.

### constructor xml\_document::xml\_document

#### Synopsis

`xml_document();`

#### Description

Constructs empty XML document.

### function xml\_document::parse

#### Synopsis

`void parse(Ch *text);`

#### Description

Parses zero-terminated XML string according to given flags. Passed string will be modified by the parser, unless [rapidxml::parse\_non\_destructive](#namespacerapidxml_a97ba1a0a79a6d66f4eef3612508d943_1a97ba1a0a79a6d66f4eef3612508d943) flag is used. The string must persist for the lifetime of the document. In case of error, [rapidxml::parse\_error](#classrapidxml_1_1parse__error) exception will be thrown.

If you want to parse contents of a file, you must first load the file into the memory, and pass pointer to its beginning. Make sure that data is zero-terminated.

Document can be parsed into multiple times. Each new call to parse removes previous nodes and attributes (if any), but does not clear memory pool.

#### Parameters

text  
XML data to parse; pointer is non-const to denote fact that this data may be modified by the parser.

### function xml\_document::clear

#### Synopsis

`void clear();`

#### Description

Clears the document by deleting all nodes and clearing the memory pool. All nodes owned by document pool are destroyed.

### class template rapidxml::xml\_node

Defined in [rapidxml.hpp](rapidxml.hpp)  
Inherits from [xml\_base](#classrapidxml_1_1xml__base)  
Base class for [xml\_document](#classrapidxml_1_1xml__document)

#### Description

Class representing a node of XML document. Each node may have associated name and value strings, which are available through [name()](#classrapidxml_1_1xml__base_622eade29fdf7806d3ef93ac4d90e707_1622eade29fdf7806d3ef93ac4d90e707) and [value()](#classrapidxml_1_1xml__base_c54fa4987fb503916a7b541eb15c9c7f_1c54fa4987fb503916a7b541eb15c9c7f) functions. Interpretation of name and value depends on type of the node. Type of node can be determined by using [type()](#classrapidxml_1_1xml__node_975e86937621ae4afe6a423219de30d0_1975e86937621ae4afe6a423219de30d0) function.

Note that after parse, both name and value of node, if any, will point interior of source text used for parsing. Thus, this text must persist in the memory for the lifetime of node.

#### Parameters

Ch  
Character type to use.

### constructor xml\_node::xml\_node

#### Synopsis

`xml_node(node_type type);`

#### Description

Constructs an empty node with the specified type. Consider using [memory\_pool](#classrapidxml_1_1memory__pool) of appropriate document to allocate nodes manually.

#### Parameters

type  
Type of node to construct.

### function xml\_node::type

#### Synopsis

`node_type type() const;`

#### Description

Gets type of node.

#### Returns

Type of node.

### function xml\_node::document

#### Synopsis

`xml_document<Ch>* document() const;`

#### Description

Gets document of which node is a child.

#### Returns

Pointer to document that contains this node, or 0 if there is no parent document.

### function xml\_node::first\_node

#### Synopsis

`xml_node<Ch>* first_node(const Ch *name=0, std::size_t name_size=0,       bool case_sensitive=true) const;`

#### Description

Gets first child node, optionally matching node name.

#### Parameters

name  
Name of child to find, or 0 to return first child regardless of its name; this string doesn’t have to be zero-terminated if name\_size is non-zero

name\_size  
Size of name, in characters, or 0 to have size calculated automatically from string

case\_sensitive  
Should name comparison be case-sensitive; non case-sensitive comparison works properly only for ASCII characters

#### Returns

Pointer to found child, or 0 if not found.

### function xml\_node::last\_node

#### Synopsis

`xml_node<Ch>* last_node(const Ch *name=0, std::size_t name_size=0,       bool case_sensitive=true) const;`

#### Description

Gets last child node, optionally matching node name. Behaviour is undefined if node has no children. Use [first\_node()](#classrapidxml_1_1xml__node_7823e36687669e59c2afdf66334ef35a_17823e36687669e59c2afdf66334ef35a) to test if node has children.

#### Parameters

name  
Name of child to find, or 0 to return last child regardless of its name; this string doesn’t have to be zero-terminated if name\_size is non-zero

name\_size  
Size of name, in characters, or 0 to have size calculated automatically from string

case\_sensitive  
Should name comparison be case-sensitive; non case-sensitive comparison works properly only for ASCII characters

#### Returns

Pointer to found child, or 0 if not found.

### function xml\_node::previous\_sibling

#### Synopsis

`xml_node<Ch>* previous_sibling(const Ch *name=0, std::size_t       name_size=0, bool case_sensitive=true) const;`

#### Description

Gets previous sibling node, optionally matching node name. Behaviour is undefined if node has no parent. Use [parent()](#classrapidxml_1_1xml__base_798e8df7ea53ade4d9f0701017dce80e_1798e8df7ea53ade4d9f0701017dce80e) to test if node has a parent.

#### Parameters

name  
Name of sibling to find, or 0 to return previous sibling regardless of its name; this string doesn’t have to be zero-terminated if name\_size is non-zero

name\_size  
Size of name, in characters, or 0 to have size calculated automatically from string

case\_sensitive  
Should name comparison be case-sensitive; non case-sensitive comparison works properly only for ASCII characters

#### Returns

Pointer to found sibling, or 0 if not found.

### function xml\_node::next\_sibling

#### Synopsis

`xml_node<Ch>* next_sibling(const Ch *name=0, std::size_t       name_size=0, bool case_sensitive=true) const;`

#### Description

Gets next sibling node, optionally matching node name. Behaviour is undefined if node has no parent. Use [parent()](#classrapidxml_1_1xml__base_798e8df7ea53ade4d9f0701017dce80e_1798e8df7ea53ade4d9f0701017dce80e) to test if node has a parent.

#### Parameters

name  
Name of sibling to find, or 0 to return next sibling regardless of its name; this string doesn’t have to be zero-terminated if name\_size is non-zero

name\_size  
Size of name, in characters, or 0 to have size calculated automatically from string

case\_sensitive  
Should name comparison be case-sensitive; non case-sensitive comparison works properly only for ASCII characters

#### Returns

Pointer to found sibling, or 0 if not found.

### function xml\_node::first\_attribute

#### Synopsis

`xml_attribute<Ch>* first_attribute(const Ch *name=0, std::size_t       name_size=0, bool case_sensitive=true) const;`

#### Description

Gets first attribute of node, optionally matching attribute name.

#### Parameters

name  
Name of attribute to find, or 0 to return first attribute regardless of its name; this string doesn’t have to be zero-terminated if name\_size is non-zero

name\_size  
Size of name, in characters, or 0 to have size calculated automatically from string

case\_sensitive  
Should name comparison be case-sensitive; non case-sensitive comparison works properly only for ASCII characters

#### Returns

Pointer to found attribute, or 0 if not found.

### function xml\_node::last\_attribute

#### Synopsis

`xml_attribute<Ch>* last_attribute(const Ch *name=0, std::size_t       name_size=0, bool case_sensitive=true) const;`

#### Description

Gets last attribute of node, optionally matching attribute name.

#### Parameters

name  
Name of attribute to find, or 0 to return last attribute regardless of its name; this string doesn’t have to be zero-terminated if name\_size is non-zero

name\_size  
Size of name, in characters, or 0 to have size calculated automatically from string

case\_sensitive  
Should name comparison be case-sensitive; non case-sensitive comparison works properly only for ASCII characters

#### Returns

Pointer to found attribute, or 0 if not found.

### function xml\_node::type

#### Synopsis

`void type(node_type type);`

#### Description

Sets type of node.

#### Parameters

type  
Type of node to set.

### function xml\_node::prepend\_node

#### Synopsis

`void prepend_node(xml_node< Ch > *child);`

#### Description

Prepends a new child node. The prepended child becomes the first child, and all existing children are moved one position back.

#### Parameters

child  
Node to prepend.

### function xml\_node::append\_node

#### Synopsis

`void append_node(xml_node< Ch > *child);`

#### Description

Appends a new child node. The appended child becomes the last child.

#### Parameters

child  
Node to append.

### function xml\_node::insert\_node

#### Synopsis

`void insert_node(xml_node< Ch > *where, xml_node< Ch >       *child);`

#### Description

Inserts a new child node at specified place inside the node. All children after and including the specified node are moved one position back.

#### Parameters

where  
Place where to insert the child, or 0 to insert at the back.

child  
Node to insert.

### function xml\_node::remove\_first\_node

#### Synopsis

`void remove_first_node();`

#### Description

Removes first child node. If node has no children, behaviour is undefined. Use [first\_node()](#classrapidxml_1_1xml__node_7823e36687669e59c2afdf66334ef35a_17823e36687669e59c2afdf66334ef35a) to test if node has children.

### function xml\_node::remove\_last\_node

#### Synopsis

`void remove_last_node();`

#### Description

Removes last child of the node. If node has no children, behaviour is undefined. Use [first\_node()](#classrapidxml_1_1xml__node_7823e36687669e59c2afdf66334ef35a_17823e36687669e59c2afdf66334ef35a) to test if node has children.

### function xml\_node::remove\_node

#### Synopsis

`void remove_node(xml_node< Ch > *where);`

#### Description

Removes specified child from the node.

### function xml\_node::remove\_all\_nodes

#### Synopsis

`void remove_all_nodes();`

#### Description

Removes all child nodes (but not attributes).

### function xml\_node::prepend\_attribute

#### Synopsis

`void prepend_attribute(xml_attribute< Ch > *attribute);`

#### Description

Prepends a new attribute to the node.

#### Parameters

attribute  
Attribute to prepend.

### function xml\_node::append\_attribute

#### Synopsis

`void append_attribute(xml_attribute< Ch > *attribute);`

#### Description

Appends a new attribute to the node.

#### Parameters

attribute  
Attribute to append.

### function xml\_node::insert\_attribute

#### Synopsis

`void insert_attribute(xml_attribute< Ch > *where, xml_attribute<       Ch > *attribute);`

#### Description

Inserts a new attribute at specified place inside the node. All attributes after and including the specified attribute are moved one position back.

#### Parameters

where  
Place where to insert the attribute, or 0 to insert at the back.

attribute  
Attribute to insert.

### function xml\_node::remove\_first\_attribute

#### Synopsis

`void remove_first_attribute();`

#### Description

Removes first attribute of the node. If node has no attributes, behaviour is undefined. Use [first\_attribute()](#classrapidxml_1_1xml__node_5810a09f82f8d53efbe9456286dcec83_15810a09f82f8d53efbe9456286dcec83) to test if node has attributes.

### function xml\_node::remove\_last\_attribute

#### Synopsis

`void remove_last_attribute();`

#### Description

Removes last attribute of the node. If node has no attributes, behaviour is undefined. Use [first\_attribute()](#classrapidxml_1_1xml__node_5810a09f82f8d53efbe9456286dcec83_15810a09f82f8d53efbe9456286dcec83) to test if node has attributes.

### function xml\_node::remove\_attribute

#### Synopsis

`void remove_attribute(xml_attribute< Ch > *where);`

#### Description

Removes specified attribute from node.

#### Parameters

where  
Pointer to attribute to be removed.

### function xml\_node::remove\_all\_attributes

#### Synopsis

`void remove_all_attributes();`

#### Description

Removes all attributes of node.

### enum node\_type

#### Description

Enumeration listing all node types produced by the parser. Use [xml\_node::type()](#classrapidxml_1_1xml__node_975e86937621ae4afe6a423219de30d0_1975e86937621ae4afe6a423219de30d0) function to query node type.

#### Values

node\_document  
A document node. Name and value are empty.

node\_element  
An element node. Name contains element name. Value contains text of first data node.

node\_data  
A data node. Name is empty. Value contains data text.

node\_cdata  
A CDATA node. Name is empty. Value contains data text.

node\_comment  
A comment node. Name is empty. Value contains comment text.

node\_declaration  
A declaration node. Name and value are empty. Declaration parameters (version, encoding and standalone) are in node attributes.

node\_doctype  
A DOCTYPE node. Name is empty. Value contains DOCTYPE text.

node\_pi  
A PI node. Name contains target. Value contains instructions.

### function parse\_error\_handler

#### Synopsis

`void rapidxml::parse_error_handler(const char *what, void *where);`

#### Description

When exceptions are disabled by defining RAPIDXML\_NO\_EXCEPTIONS, this function is called to notify user about the error. It must be defined by the user.

This function cannot return. If it does, the results are undefined.

A very simple definition might look like that: void rapidxml::parse\_error\_handler(const char \*what, void \*where) { std::cout &lt;&lt; “Parse error:” &lt;&lt; what &lt;&lt; “\\n”; std::abort(); }

#### Parameters

what  
Human readable description of the error.

where  
Pointer to character data where error was detected.

### function print

#### Synopsis

`OutIt rapidxml::print(OutIt out, const xml_node< Ch > &node,       int flags=0);`

#### Description

Prints XML to given output iterator.

#### Parameters

out  
Output iterator to print to.

node  
Node to be printed. Pass xml\_document to print entire document.

flags  
Flags controlling how XML is printed.

#### Returns

Output iterator pointing to position immediately after last character of printed text.

### function print

#### Synopsis

`std::basic_ostream<Ch>& rapidxml::print(std::basic_ostream<       Ch > &out, const xml_node< Ch > &node, int flags=0);`

#### Description

Prints XML to given output stream.

#### Parameters

out  
Output stream to print to.

node  
Node to be printed. Pass xml\_document to print entire document.

flags  
Flags controlling how XML is printed.

#### Returns

Output stream.

### function operator&lt;&lt;

#### Synopsis

`std::basic_ostream<Ch>&       rapidxml::operator<<(std::basic_ostream< Ch > &out, const       xml_node< Ch > &node);`

#### Description

Prints formatted XML to given output stream. Uses default printing flags. Use [print()](#namespacerapidxml_b94d570fc4c4ab2423813cd0243326b1_1b94d570fc4c4ab2423813cd0243326b1) function to customize printing process.

#### Parameters

out  
Output stream to print to.

node  
Node to be printed.

#### Returns

Output stream.

### constant parse\_no\_data\_nodes

#### Synopsis

`const int parse_no_data_nodes = 0x1;`

#### Description

Parse flag instructing the parser to not create data nodes. Text of first data node will still be placed in value of parent element, unless [rapidxml::parse\_no\_element\_values](#namespacerapidxml_97e2c4fdc04fae17126f9971a4fc993e_197e2c4fdc04fae17126f9971a4fc993e) flag is also specified. Can be combined with other flags by use of | operator.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_no\_element\_values

#### Synopsis

`const int parse_no_element_values = 0x2;`

#### Description

Parse flag instructing the parser to not use text of first data node as a value of parent element. Can be combined with other flags by use of | operator. Note that child data nodes of element node take precendence over its value when printing. That is, if element has one or more child data nodes *and* a value, the value will be ignored. Use [rapidxml::parse\_no\_data\_nodes](#namespacerapidxml_87e8bbab53702cf3b438bd553c10b6b9_187e8bbab53702cf3b438bd553c10b6b9) flag to prevent creation of data nodes if you want to manipulate data using values of elements.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_no\_string\_terminators

#### Synopsis

`const int parse_no_string_terminators = 0x4;`

#### Description

Parse flag instructing the parser to not place zero terminators after strings in the source text. By default zero terminators are placed, modifying source text. Can be combined with other flags by use of | operator.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_no\_entity\_translation

#### Synopsis

`const int parse_no_entity_translation = 0x8;`

#### Description

Parse flag instructing the parser to not translate entities in the source text. By default entities are translated, modifying source text. Can be combined with other flags by use of | operator.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_no\_utf8

#### Synopsis

`const int parse_no_utf8 = 0x10;`

#### Description

Parse flag instructing the parser to disable UTF-8 handling and assume plain 8 bit characters. By default, UTF-8 handling is enabled. Can be combined with other flags by use of | operator.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_declaration\_node

#### Synopsis

`const int parse_declaration_node = 0x20;`

#### Description

Parse flag instructing the parser to create XML declaration node. By default, declaration node is not created. Can be combined with other flags by use of | operator.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_comment\_nodes

#### Synopsis

`const int parse_comment_nodes = 0x40;`

#### Description

Parse flag instructing the parser to create comments nodes. By default, comment nodes are not created. Can be combined with other flags by use of | operator.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_doctype\_node

#### Synopsis

`const int parse_doctype_node = 0x80;`

#### Description

Parse flag instructing the parser to create DOCTYPE node. By default, doctype node is not created. Although W3C specification allows at most one DOCTYPE node, RapidXml will silently accept documents with more than one. Can be combined with other flags by use of | operator.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_pi\_nodes

#### Synopsis

`const int parse_pi_nodes = 0x100;`

#### Description

Parse flag instructing the parser to create PI nodes. By default, PI nodes are not created. Can be combined with other flags by use of | operator.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_validate\_closing\_tags

#### Synopsis

`const int parse_validate_closing_tags = 0x200;`

#### Description

Parse flag instructing the parser to validate closing tag names. If not set, name inside closing tag is irrelevant to the parser. By default, closing tags are not validated. Can be combined with other flags by use of | operator.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_trim\_whitespace

#### Synopsis

`const int parse_trim_whitespace = 0x400;`

#### Description

Parse flag instructing the parser to trim all leading and trailing whitespace of data nodes. By default, whitespace is not trimmed. This flag does not cause the parser to modify source text. Can be combined with other flags by use of | operator.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_normalize\_whitespace

#### Synopsis

`const int parse_normalize_whitespace = 0x800;`

#### Description

Parse flag instructing the parser to condense all whitespace runs of data nodes to a single space character. Trimming of leading and trailing whitespace of data is controlled by [rapidxml::parse\_trim\_whitespace](#namespacerapidxml_ac1f06b1afd47b812732fb521b146fd9_1ac1f06b1afd47b812732fb521b146fd9) flag. By default, whitespace is not normalized. If this flag is specified, source text will be modified. Can be combined with other flags by use of | operator.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_default

#### Synopsis

`const int parse_default = 0;`

#### Description

Parse flags which represent default behaviour of the parser. This is always equal to 0, so that all other flags can be simply ored together. Normally there is no need to inconveniently disable flags by anding with their negated (~) values. This also means that meaning of each flag is a *negation* of the default setting. For example, if flag name is [rapidxml::parse\_no\_utf8](#namespacerapidxml_ccde57f6054857ee4042a1b4d98c83b9_1ccde57f6054857ee4042a1b4d98c83b9), it means that utf-8 is *enabled* by default, and using the flag will disable it.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_non\_destructive

#### Synopsis

`const int parse_non_destructive = parse_no_string_terminators |       parse_no_entity_translation;`

#### Description

A combination of parse flags that forbids any modifications of the source text. This also results in faster parsing. However, note that the following will occur:

-   names and values of nodes will not be zero terminated, you have to use [xml\_base::name\_size()](#classrapidxml_1_1xml__base_0dae694c8f7e4d89f1003e2f3a15a43c_10dae694c8f7e4d89f1003e2f3a15a43c) and [xml\_base::value\_size()](#classrapidxml_1_1xml__base_aed5ae791b7164c1ee5e649198cbb3db_1aed5ae791b7164c1ee5e649198cbb3db) functions to determine where name and value ends
-   entities will not be translated
-   whitespace will not be normalized

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_fastest

#### Synopsis

`const int parse_fastest = parse_non_destructive | parse_no_data_nodes;`

#### Description

A combination of parse flags resulting in fastest possible parsing, without sacrificing important data.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant parse\_full

#### Synopsis

`const int parse_full = parse_declaration_node | parse_comment_nodes |       parse_doctype_node | parse_pi_nodes | parse_validate_closing_tags;`

#### Description

A combination of parse flags resulting in largest amount of data being extracted. This usually results in slowest parsing.

See [xml\_document::parse()](#classrapidxml_1_1xml__document_8338ce6042e7b04d5a42144fb446b69c_18338ce6042e7b04d5a42144fb446b69c) function.

### constant print\_no\_indenting

#### Synopsis

`const int print_no_indenting = 0x1;`

#### Description

Printer flag instructing the printer to suppress indenting of XML. See [print()](#namespacerapidxml_b94d570fc4c4ab2423813cd0243326b1_1b94d570fc4c4ab2423813cd0243326b1) function.
