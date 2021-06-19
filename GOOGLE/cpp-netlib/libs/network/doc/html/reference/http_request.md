### Navigation

-   [next](http_response.html "HTTP Response")
-   [previous](http_client.html "HTTP Client API") |
-   [cpp-netlib v0.11.2](../contents.html) »
-   [Reference Manual](../reference.html) »

HTTP Request<a href="#http-request" class="headerlink" title="Permalink to this headline">¶</a>
===============================================================================================

This part of the documentation talks about the publicly accessible API of the HTTP Request objects. This section details the <a href="#request-concepts" class="reference internal">Request Concepts</a> requirements, the implemented and required <a href="#directives" class="reference internal">Directives</a>, <a href="#modifiers" class="reference internal">Modifiers</a>, and <a href="#wrappers" class="reference internal">Wrappers</a> that work with the HTTP Request objects.

Request Concepts<a href="#request-concepts" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------------

There are two generally supported Request Concepts implemented in the library. The first of two is the <a href="#normal-client-request-concept" class="reference internal">Normal Client Request Concept</a> and the second is the <a href="#pod-server-request-concept" class="reference internal">Pod Server Request Concept</a>.

The <a href="#normal-client-request-concept" class="reference internal">Normal Client Request Concept</a> is what the HTTP Client interface requires. All operations performed internally by the HTTP Client abide by the interface required by this concept definition.

The <a href="#pod-server-request-concept" class="reference internal">Pod Server Request Concept</a> is as the name suggests what the HTTP Server implementation requires from Request Objects.

Switching on whether the Request concept chooses either of the <a href="#normal-client-request-concept" class="reference internal">Normal Client Request Concept</a> or the <a href="#pod-server-request-concept" class="reference internal">Pod Server Request Concept</a> is done through the nested `tag` type and whether that tag derives from the root tag `pod`. Simply, if the Request type’s nested `tag` type derives from `boost::network::tags::pod` then it chooses to enforce the <a href="#pod-server-request-concept" class="reference internal">Pod Server Request Concept</a>, otherwise it chooses the <a href="#normal-client-request-concept" class="reference internal">Normal Client Request Concept</a>.

### Normal Client Request Concept<a href="#normal-client-request-concept" class="headerlink" title="Permalink to this headline">¶</a>

A type models the Normal Client Request Concept if it models the <a href="../in_depth/message.html#message-concept" class="reference external">Message Concept</a> and also supports the following constructs.

**Legend**

<table><tbody><tr class="odd"><td>R:</td><td>The request type.</td></tr><tr class="even"><td>r:</td><td>An instance of R.</td></tr><tr class="odd"><td>S:</td><td>The string type.</td></tr><tr class="even"><td>s:</td><td>An instance of S.</td></tr><tr class="odd"><td>P:</td><td>The port type.</td></tr><tr class="even"><td>p:</td><td>An instance of P.</td></tr></tbody></table>

<table><colgroup><col style="width: 30%" /><col style="width: 17%" /><col style="width: 53%" /></colgroup><thead><tr class="header"><th>Construct</th><th>Result</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code class="docutils literal">R::string_type</code></td><td><code class="docutils literal">S</code></td><td>The nested <code class="docutils literal">string_type</code> type.</td></tr><tr class="even"><td><code class="docutils literal">R::port_type</code></td><td><code class="docutils literal">P</code></td><td>The nested <code class="docutils literal">port_type</code> type.</td></tr><tr class="odd"><td><code class="docutils literal">R r(s)</code></td><td><strong>NA</strong></td><td>Construct a Request with an <code class="docutils literal">s</code> provided. This treats <code class="docutils literal">s</code> as the URI to where the request is destined for.</td></tr><tr class="even"><td><code class="docutils literal">host(request)</code></td><td>Convertible to <code class="docutils literal">S</code></td><td>Return the host to where the request is destined for.</td></tr><tr class="odd"><td><code class="docutils literal">port(request)</code></td><td>Convertible to <code class="docutils literal">P</code></td><td>Return the port to where the request is destined for.</td></tr><tr class="even"><td><code class="docutils literal">path(request)</code></td><td>Convertible to <code class="docutils literal">S</code></td><td>Return the path included in the URI.</td></tr><tr class="odd"><td><code class="docutils literal">query(request)</code></td><td>Convertible to <code class="docutils literal">S</code></td><td>Return the query part of the URI.</td></tr><tr class="even"><td><code class="docutils literal">anchor(request)</code></td><td>Convertible to <code class="docutils literal">S</code></td><td>Return the anchor part of the URI.</td></tr><tr class="odd"><td><code class="docutils literal">protocol(request)</code></td><td>Convertible to <code class="docutils literal">S</code></td><td>Return the protocol/scheme part of the URI.</td></tr><tr class="even"><td><code class="docutils literal">r &lt;&lt; uri(s)</code></td><td><code class="docutils literal">R&amp;</code></td><td>Set the URI of the request.</td></tr><tr class="odd"><td><code class="docutils literal">uri(r, s)</code></td><td><code class="docutils literal">void</code></td><td>Set the URI of the request.</td></tr></tbody></table>

### Pod Server Request Concept<a href="#pod-server-request-concept" class="headerlink" title="Permalink to this headline">¶</a>

A type models the Pod Server Request Concept if it models the <a href="../in_depth/message.html#message-concept" class="reference external">Message Concept</a> and also supports the following constructs.

**Legend**

<table><tbody><tr class="odd"><td>R:</td><td>The request type.</td></tr><tr class="even"><td>r:</td><td>An instance of R.</td></tr><tr class="odd"><td>S:</td><td>The string type.</td></tr><tr class="even"><td>I:</td><td>An unsigned 8 bit integer.</td></tr><tr class="odd"><td>V:</td><td>The vector type for headers.</td></tr></tbody></table>

<table style="width:101%;"><colgroup><col style="width: 41%" /><col style="width: 11%" /><col style="width: 49%" /></colgroup><thead><tr class="header"><th>Construct</th><th>Result</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code class="docutils literal">R::string_type</code></td><td><code class="docutils literal">S</code></td><td>The nested <code class="docutils literal">string_type</code> type.</td></tr><tr class="even"><td><code class="docutils literal">R::headers_container_type</code></td><td><code class="docutils literal">V</code></td><td>The nested <code class="docutils literal">headers_container_type</code> type.</td></tr><tr class="odd"><td><code class="docutils literal">r.source</code></td><td><code class="docutils literal">S</code></td><td>The nested source of the request.</td></tr><tr class="even"><td><code class="docutils literal">r.method</code></td><td><code class="docutils literal">S</code></td><td>The method of the request.</td></tr><tr class="odd"><td><code class="docutils literal">r.destination</code></td><td><code class="docutils literal">S</code></td><td>The destination of the request. This is normally the URI of the request.</td></tr><tr class="even"><td><code class="docutils literal">r.version_major</code></td><td><code class="docutils literal">I</code></td><td>The major version number part of the request.</td></tr><tr class="odd"><td><code class="docutils literal">r.version_minor</code></td><td><code class="docutils literal">I</code></td><td>The minor version number part of the request.</td></tr><tr class="even"><td><code class="docutils literal">r.headers</code></td><td><code class="docutils literal">V</code></td><td>The vector of headers.</td></tr><tr class="odd"><td><code class="docutils literal">r.body</code></td><td><code class="docutils literal">S</code></td><td>The body of the request.</td></tr></tbody></table>

Directives<a href="#directives" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------

This section details the provided directives that are provided by `cpp-netlib`. The section was written to assume that an appropriately constructed request instance is either of the following:

    boost::network::http::basic_request<
      boost::network::http::tags::http_default_8bit_udp_resolve
    > request;

    // or

    boost::network::http::basic_request<
      boost::network::http::tags::http_server
    > request;

The section also assumes that there following using namespace declaration is in effect:

    using namespace boost::network;

Directives are meant to be used in the following manner:

    request << directive(...);

Warning

There are two versions of directives, those that are applicable to messages that support narrow strings (`std::string`) and those that are applicable to messages that support wide strings (`std::wstring`). The `cpp-netlib` implementation still does not convert wide strings into UTF-8 encoded narrow strings. This will be implemented in subsequent library releases.

For now all the implemented directives are listed, even if some of them still do not implement things correctly.

*unspecified* `source(std::string                       const                       &                       source_)`  
Create a source directive with a `std::string` as a parameter, to be set as the source of the request.

*unspecified* `source(std::wstring                       const                       &                       source_)`  
Create a source directive with a `std::wstring` as a parameter, to be set as the source of the request.

*unspecified* `destination(std::string                       const                       &                       source_)`  
Create a destination directive with a `std::string` as a parameter, to be set as the destination of the request.

*unspecified* `destination(std::wstring                       const                       &                       source_)`  
Create a destination directive with a `std::wstring` as a parameter, to be set as the destination of the request.

*unspecified* `header(std::string                       const                       &                       name,                       std::string                       const                       &                       value)`  
Create a header directive that will add the given name and value pair to the headers already associated with the request. In this case the name and values are both `std::string`.

*unspecified* `header(std::wstring                       const                       &                       name,                       std::wstring                       const                       &                       value)`  
Create a header directive that will add the given name and value pair to the headers already associated with the request. In this case the name and values are both `std::wstring`.

*unspecified* `remove_header(std::string                       const                       &                       name)`  
Create a remove\_header directive that will remove all the occurences of the given name from the headers already associated with the request. In this case the name of the header is of type `std::string`.

*unspecified* `remove_header(std::wstring                       const                       &                       name)`  
Create a remove\_header directive that will remove all the occurences of the given name from the headers already associated with the request. In this case the name of the header is of type `std::wstring`.

*unspecified* `body(std::string                       const                       &                       body_)`  
Create a body directive that will set the request’s body to the given parameter. In this case the type of the body is an `std::string`.

*unspecified* `body(std::wstring                       const                       &                       body_)`  
Create a body directive that will set the request’s body to the given parameter. In this case the type of the body is an `std::wstring`.

Modifiers<a href="#modifiers" class="headerlink" title="Permalink to this headline">¶</a>
-----------------------------------------------------------------------------------------

This section details the provided modifiers that are provided by `cpp-netlib`.

`template                       <class                       Tag>                       inline                       void                       source(basic_request<Tag>                       &                       request,                       typename                       string<Tag>::type                       const                       &                       source_)`  
Modifies the source of the given `request`. The type of `source_` is dependent on the `Tag` specialization of `basic_request`.

`template                       <class                       Tag>                       inline                       void                       destination(basic_request<Tag>                       &                       request,                       typename                       string<Tag>::type                       const                       &                       destination_)`  
Modifies the destination of the given `request`. The type of `destination_` is dependent on the `Tag` specialization of `basic_request`.

`template                       <class                       Tag>                       inline                       void                       add_header(basic_request<Tag>                       &                       request,                       typename                       string<Tag>::type                       const                       &                       name,                       typename                       string<Tag>::type                       const                       &                       value)`  
Adds a header to the given `request`. The type of the `name` and `value` parameters are dependent on the `Tag` specialization of `basic_request`.

`template                       <class                       Tag>                       inline                       void                       remove_header(basic_request<Tag>                       &                       request,                       typename                       string<Tag>::type                       const                       &                       name)`  
Removes a header from the given `request`. The type of the `name` parameter is dependent on the `Tag` specialization of `basic_request`.

`template                       <class                       Tag>                       inline                       void                       clear_headers(basic_request<Tag>                       &                       request)`  
Removes all headers from the given `request`.

`template                       <class                       Tag>                       inline                       void                       body(basic_request<Tag>                       &                       request,                       typename                       string<Tag>::type                       const                       &                       body_)`  
Modifies the body of the given `request`. The type of `body_` is dependent on the `Tag` specialization of `basic_request`.

Wrappers<a href="#wrappers" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------

This section details the provided request wrappers that come with `cpp-netlib`. Wrappers are used to convert a message into a different type, usually providing accessor operations to retrieve just part of the message. This section assumes that the following using namespace directives are in effect:

    using namespace boost::network;
    using namespace boost::network::http;

`template                       <class                       Tag>` *unspecified* `source(basic_request<Tag>                       const                       &                       request)`  
Returns a wrapper convertible to `typename                       string<Tag>::type` that provides the source of a given request.

`template                       <class                       Tag>` *unspecified* `destination(basic_request<Tag>                       const                       &                       request)`  
Returns a wrapper convertible to `typename                       string<Tag>::type` that provides the destination of a given request.

`template                       <class                       Tag>` *unspecified* `headers(basic_request<Tag>                       const                       &                       request)`  
Returns a wrapper convertible to `typename                       headers_range<basic_request<Tag>                       >::type` or `typename                       basic_request<Tag>::headers_container_type` that provides the headers of a given request.

`template                       <class                       Tag>` *unspecified* `body(basic_request<Tag>                       const                       &                       request)`  
Returns a wrapper convertible to `typename                       string<Tag>::type` that provides the body of a given request.

### [Table Of Contents](../contents.html)

-   <a href="#" class="reference internal">HTTP Request</a>
    -   <a href="#request-concepts" class="reference internal">Request Concepts</a>
        -   <a href="#normal-client-request-concept" class="reference internal">Normal Client Request Concept</a>
        -   <a href="#pod-server-request-concept" class="reference internal">Pod Server Request Concept</a>
    -   <a href="#directives" class="reference internal">Directives</a>
    -   <a href="#modifiers" class="reference internal">Modifiers</a>
    -   <a href="#wrappers" class="reference internal">Wrappers</a>

#### Previous topic

[HTTP Client API](http_client.html "previous chapter")

#### Next topic

[HTTP Response](http_response.html "next chapter")

### Quick search

Enter search terms or a module, class or function name.

### Navigation

-   [next](http_response.html "HTTP Response")
-   [previous](http_client.html "HTTP Client API") |
-   [cpp-netlib v0.11.2](../contents.html) »
-   [Reference Manual](../reference.html) »

© Copyright 2008-2014, Glyn Matthews, Dean Michael Berris; 2013 Google, Inc.. Last updated on Mar 29, 2016. Created using [Sphinx](http://sphinx-doc.org/) 1.3.6.
