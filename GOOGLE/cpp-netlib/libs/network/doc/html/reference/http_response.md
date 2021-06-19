### Navigation

-   [next](http_server.html "HTTP Server API")
-   [previous](http_request.html "HTTP Request") |
-   [cpp-netlib v0.11.2](../contents.html) »
-   [Reference Manual](../reference.html) »

HTTP Response<a href="#http-response" class="headerlink" title="Permalink to this headline">¶</a>
=================================================================================================

This part of the documentation talks about the publicly accessible API of the HTTP Response objects. This section details the <a href="#response-concept" class="reference internal">Response Concept</a> requirements, the implemented and required <a href="#directives" class="reference internal">Directives</a>, <a href="#modifiers" class="reference internal">Modifiers</a>, and <a href="#wrappers" class="reference internal">Wrappers</a> that work with the HTTP Response objects.

Note

The HTTP server response object is a POD type, which doesn’t support any of the following details. There are only a few fields available in the HTTP server response type, which can be seen in `boost/network/protocol/http/impl/response.ipp`.

Response Concept<a href="#response-concept" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------------

A type models the Response Concept if it models the <a href="../in_depth/message.html#message-concept" class="reference external">Message Concept</a> and also supports the following constructs.

**Legend**

<table><tbody><tr class="odd"><td>R:</td><td>The response type.</td></tr><tr class="even"><td>r:</td><td>An instance of R.</td></tr><tr class="odd"><td>S:</td><td>The string type.</td></tr><tr class="even"><td>s,e,g:</td><td>Instances of S.</td></tr><tr class="odd"><td>P:</td><td>The port type.</td></tr><tr class="even"><td>p:</td><td>An instance of P.</td></tr><tr class="odd"><td>V:</td><td>The version type.</td></tr><tr class="even"><td>v:</td><td>An instance of v.</td></tr><tr class="odd"><td>T:</td><td>The status type.</td></tr><tr class="even"><td>t:</td><td>An instance of T.</td></tr><tr class="odd"><td>M:</td><td>The status message type.</td></tr><tr class="even"><td>m:</td><td>An instance of M.</td></tr><tr class="odd"><td>U:</td><td>An unsigned 16-bit int.</td></tr><tr class="even"><td>u:</td><td>An instance of U.</td></tr></tbody></table>

Note

In the table below, the namespace `traits` is an alias for `boost::network::http::traits`.

<table><colgroup><col style="width: 49%" /><col style="width: 13%" /><col style="width: 38%" /></colgroup><thead><tr class="header"><th>Construct</th><th>Result</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code class="docutils literal">R::string_type</code></td><td><code class="docutils literal">S</code></td><td>The nested <code class="docutils literal">string_type</code> type.</td></tr><tr class="even"><td><code class="docutils literal">traits::version&lt;R&gt;::type</code></td><td><code class="docutils literal">V</code></td><td>The version type associated with R.</td></tr><tr class="odd"><td><code class="docutils literal">traits::status&lt;R&gt;::type</code></td><td><code class="docutils literal">T</code></td><td>The status type associated with R.</td></tr><tr class="even"><td><code class="docutils literal">traits::status_message&lt;R&gt;::type</code></td><td><code class="docutils literal">M</code></td><td>The status message type associated with R.</td></tr><tr class="odd"><td><code class="docutils literal">r &lt;&lt; version(v)</code></td><td><code class="docutils literal">R&amp;</code></td><td>Sets the version of <code class="docutils literal">r</code>.</td></tr><tr class="even"><td><code class="docutils literal">r &lt;&lt; status(t)</code></td><td><code class="docutils literal">R&amp;</code></td><td>Sets the status of <code class="docutils literal">r</code>.</td></tr><tr class="odd"><td><code class="docutils literal">r &lt;&lt; status_message(m)</code></td><td><code class="docutils literal">R&amp;</code></td><td>Sets the status message of <code class="docutils literal">r</code>.</td></tr><tr class="even"><td><code class="docutils literal">version(r, v)</code></td><td><code class="docutils literal">void</code></td><td>Sets the version of <code class="docutils literal">r</code>.</td></tr><tr class="odd"><td><code class="docutils literal">status(r, t)</code></td><td><code class="docutils literal">void</code></td><td>Sets the status of <code class="docutils literal">r</code>.</td></tr><tr class="even"><td><code class="docutils literal">status_message(r, m)</code></td><td><code class="docutils literal">void</code></td><td>Sets the status message of <code class="docutils literal">r</code>.</td></tr><tr class="odd"><td><code class="docutils literal">S e = version(r)</code></td><td><strong>NA</strong></td><td>Get the version of <code class="docutils literal">r</code>.</td></tr><tr class="even"><td><code class="docutils literal">U u = status(r)</code></td><td><strong>NA</strong></td><td>Get the status of <code class="docutils literal">r</code>.</td></tr><tr class="odd"><td><code class="docutils literal">S g = status_message(r)</code></td><td><strong>NA</strong></td><td>Get the status message of <code class="docutils literal">r</code>.</td></tr></tbody></table>

Directives<a href="#directives" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------

This section details the provided directives that are provided by `cpp-netlib`. The section was written to assume that an appropriately constructed response instance is either of the following:

    boost::network::http::basic_response<
      boost::network::http::tags::http_default_8bit_udp_resolve
    > response;

    // or

    boost::network::http::basic_response<
      boost::network::http::tags::http_server
    > response;

The section also assumes that there following using namespace declaration is in effect:

    using namespace boost::network;

Directives are meant to be used in the following manner:

    response << directive(...);

Warning

There are four versions of directives, those that are applicable to messages that support narrow strings (`std::string`), those that are applicable to messages that support wide strings (`std::wstring`), those that are applicable to messages that support future-wrapped narrow and wide strings (`boost::shared_future<std::string>` and `boost::shared_future<std::wstring>`).

The `cpp-netlib` implementation still does not convert wide strings into UTF-8 encoded narrow strings. This will be implemented in subsequent library releases.

For now all the implemented directives are listed, even if some of them still do not implement things correctly.

*unspecified* `source(std::string                       const                       &                       source_)`  
Create a source directive with a `std::string` as a parameter, to be set as the source of the response.

*unspecified* `source(std::wstring                       const                       &                       source_)`  
Create a source directive with a `std::wstring` as a parameter, to be set as the source of the response.

*unspecified* `source(boost::shared_future<std::string>                       const                       &                       source_)`  
Create a source directive with a `boost::shared_future<std::string>` as a parameter, to be set as the source of the response.

*unspecified* `source(boost::shared_future<std::wstring>                       const                       &                       source_)`  
Create a source directive with a `boost::shared_future<std::wstring>` as a parameter, to be set as the source of the response.

*unspecified* `destination(std::string                       const                       &                       source_)`  
Create a destination directive with a `std::string` as a parameter, to be set as the destination of the response.

*unspecified* `destination(std::wstring                       const                       &                       source_)`  
Create a destination directive with a `std::wstring` as a parameter, to be set as the destination of the response.

*unspecified* `destination(boost::shared_future<std::string>                       const                       &                       destination_)`  
Create a destination directive with a `boost::shared_future<std::string>` as a parameter, to be set as the destination of the response.

*unspecified* `destination(boost::shared_future<std::wstring>                       const                       &                       destination_)`  
Create a destination directive with a `boost::shared_future<std::wstring>` as a parameter, to be set as the destination of the response.

*unspecified* `header(std::string                       const                       &                       name,                       std::string                       const                       &                       value)`  
Create a header directive that will add the given name and value pair to the headers already associated with the response. In this case the name and values are both `std::string`.

*unspecified* `header(std::wstring                       const                       &                       name,                       std::wstring                       const                       &                       value)`  
Create a header directive that will add the given name and value pair to the headers already associated with the response. In this case the name and values are both `std::wstring`.

*unspecified* `remove_header(std::string                       const                       &                       name)`  
Create a remove\_header directive that will remove all the occurences of the given name from the headers already associated with the response. In this case the name of the header is of type `std::string`.

*unspecified* `remove_header(std::wstring                       const                       &                       name)`  
Create a remove\_header directive that will remove all the occurences of the given name from the headers already associated with the response. In this case the name of the header is of type `std::wstring`.

*unspecified* `body(std::string                       const                       &                       body_)`  
Create a body directive that will set the response’s body to the given parameter. In this case the type of the body is an `std::string`.

*unspecified* `body(std::wstring                       const                       &                       body_)`  
Create a body directive that will set the response’s body to the given parameter. In this case the type of the body is an `std::wstring`.

*unspecified* `body(boost::shared_future<std::string>                       const                       &                       body_)`  
Create a body directive that will set the response’s body to the given parameter. In this case the type of the body is an `boost::shared_future<std::string>`.

*unspecified* `body(boost::shared_future<std::wstring>                       const                       &                       body_)`  
Create a body directive that will set the response’s body to the given parameter. In this case the type of the body is an `boost::shared_future<std::wstring>`.

*unspecified* `version(std::string                       const                       &                       version_)`  
Create a version directive that will set the response’s version to the given parameter. In this case the type of the version is an `std::string`.

Note that this version includes the full `"HTTP/"` string.

*unspecified* `version(std::wstring                       const                       &                       version_)`  
Create a version directive that will set the response’s version to the given parameter. In this case the type of the version is an `std::wstring`.

Note that this version includes the full `"HTTP/"` string.

*unspecified* `version(boost::shared_future<std::string>                       const                       &                       version_)`  
Create a version directive that will set the response’s version to the given parameter. In this case the type of the version is an `boost::shared_future<std::string>`.

Note that this version includes the full `"HTTP/"` string.

*unspecified* `version(boost::shared_future<std::wstring>                       const                       &                       version_)`  
Create a version directive that will set the response’s version to the given parameter. In this case the type of the version is an `boost::shared_future<std::wstring>`.

Note that this version includes the full `"HTTP/"` string.

*unspecified* `status_message(std::string                       const                       &                       status_message_)`  
Create a status\_message directive that will set the response’s status\_message to the given parameter. In this case the type of the status\_message is an `std::string`.

Note that this status\_message includes the full `"HTTP/"` string.

*unspecified* `status_message(std::wstring                       const                       &                       status_message_)`  
Create a status\_message directive that will set the response’s status\_message to the given parameter. In this case the type of the status\_message is an `std::wstring`.

Note that this status\_message includes the full `"HTTP/"` string.

*unspecified* `status_message(boost::shared_future<std::string>                       const                       &                       status_message_)`  
Create a status\_message directive that will set the response’s status\_message to the given parameter. In this case the type of the status\_message is an `boost::shared_future<std::string>`.

Note that this status\_message includes the full `"HTTP/"` string.

*unspecified* `status_message(boost::shared_future<std::wstring>                       const                       &                       status_message_)`  
Create a status\_message directive that will set the response’s status\_message to the given parameter. In this case the type of the status\_message is an `boost::shared_future<std::wstring>`.

Note that this status\_message includes the full `"HTTP/"` string.

*unspecified* `status(boost::uint16_t                       status_)`  
Create a status directive that will set the response’s status to the given parameter. In this case the type of `status_` is `boost::uint16_t`.

*unspecified* `status(boost::shared_future<boost::uint16_t>                       const                       &                       status_)`  
Create a status directive that will set the response’s status to the given parameter. In this case the type of `status_` is `boost::shared_future<boost::uint16_t>`.

Modifiers<a href="#modifiers" class="headerlink" title="Permalink to this headline">¶</a>
-----------------------------------------------------------------------------------------

This section details the provided modifiers that are provided by `cpp-netlib`.

`template                       <class                       Tag>                       inline                       void                       source(basic_response<Tag>                       &                       response,                       typename                       string<Tag>::type                       const                       &                       source_)`  
Modifies the source of the given `response`. The type of `source_` is dependent on the `Tag` specialization of `basic_response`.

`template                       <class                       Tag>                       inline                       void                       source(basic_response<Tag>                       &                       response,                       boost::shared_future<typename                       string<Tag>::type>                       const                       &                       source_)`  
Modifies the source of the given `response`. The type of `source_` is dependent on the `Tag` specialization of `basic_response`.

`template                       <class                       Tag>                       inline                       void                       destination(basic_response<Tag>                       &                       response,                       typename                       string<Tag>::type                       const                       &                       destination_)`  
Modifies the destination of the given `response`. The type of `destination_` is dependent on the `Tag` specialization of `basic_response`.

`template                       <class                       Tag>                       inline                       void                       destination(basic_response<Tag>                       &                       response,                       boost::shared_future<typename                       string<Tag>::type>                       const                       &                       destination_)`  
Modifies the destination of the given `response`. The type of `destination_` is dependent on the `Tag` specialization of `basic_response`.

`template                       <class                       Tag>                       inline                       void                       add_header(basic_response<Tag>                       &                       response,                       typename                       string<Tag>::type                       const                       &                       name,                       typename                       string<Tag>::type                       const                       &                       value)`  
Adds a header to the given `response`. The type of the `name` and `value` parameters are dependent on the `Tag` specialization of `basic_response`.

`template                       <class                       Tag>                       inline                       void                       remove_header(basic_response<Tag>                       &                       response,                       typename                       string<Tag>::type                       const                       &                       name)`  
Removes a header from the given `response`. The type of the `name` parameter is dependent on the `Tag` specialization of `basic_response`.

`template                       <class                       Tag>                       inline                       void                       headers(basic_response<Tag>                       &                       response,                       typename                       headers_container<basic_response<Tag>                       >::type                       const                       &                       headers_)`  
Sets the whole headers contained in `response` as the given parameter `headers_`.

`template                       <class                       Tag>                       inline                       void                       headers(basic_response<Tag>                       &                       response,                       boost::shared_future<typename                       headers_container<basic_response<Tag>                       >::type>                       const                       &                       headers_)`  
Sets the whole headers contained in `response` as the given parameter `headers_`.

`template                       <class                       Tag>                       inline                       void                       clear_headers(basic_response<Tag>                       &                       response)`  
Removes all headers from the given `response`.

`template                       <class                       Tag>                       inline                       void                       body(basic_response<Tag>                       &                       response,                       typename                       string<Tag>::type                       const                       &                       body_)`  
Modifies the body of the given `response`. The type of `body_` is dependent on the `Tag` specialization of `basic_response`.

`template                       <class                       Tag>                       inline                       void                       body(basic_response<Tag>                       &                       response,                       boost::shared_future<typename                       string<Tag>::type>                       const                       &                       body_)`  
Modifies the body of the given `response`. The type of `body_` is dependent on the `Tag` specialization of `basic_response`.

`template                       <class                       Tag>                       inline                       void                       version(basic_response<Tag>                       &                       response,                       typename                       traits::version<basic_response<Tag>                       >::type                       const                       &                       version_)`  
Modifies the version of the given `response`. The type of `version_` is dependent on the `Tag` specialization of `basic_response`.

`template                       <class                       Tag>                       inline                       void                       status(basic_response<Tag>                       &                       response,                       typename                       traits::status<basic_response<Tag>                       >::type                       const                       &                       status_)`  
Modifies the status of the given `response`. The type of `status_` is dependent on the `Tag` specialization of `basic_response`.

`template                       <class                       Tag>                       inline                       void                       status_message(basic_response<Tag>                       &                       response,                       typename                       traits::status_message<basic_response<Tag>                       >::type                       const                       &                       status_message_)`  
Modifies the status message of the given `response`. The type of `status_message_` is dependent on the `Tag` specialization of `basic_response`.

Wrappers<a href="#wrappers" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------

This section details the provided response wrappers that come with `cpp-netlib`. Wrappers are used to convert a message into a different type, usually providing accessor operations to retrieve just part of the message. This section assumes that the following using namespace directives are in effect:

    using namespace boost::network;
    using namespace boost::network::http;

`template                       <class                       Tag>` *unspecified* `source(basic_response<Tag>                       const                       &                       response)`  
Returns a wrapper convertible to `typename                       string<Tag>::type` that provides the source of a given response.

`template                       <class                       Tag>` *unspecified* `destination(basic_response<Tag>                       const                       &                       response)`  
Returns a wrapper convertible to `typename                       string<Tag>::type` that provides the destination of a given response.

`template                       <class                       Tag>` *unspecified* `headers(basic_response<Tag>                       const                       &                       response)`  
Returns a wrapper convertible to `typename                       headers_range<basic_response<Tag>                       >::type` or `typename                       basic_response<Tag>::headers_container_type` that provides the headers of a given response.

`template                       <class                       Tag>` *unspecified* `body(basic_response<Tag>                       const                       &                       response)`  
Returns a wrapper convertible to `typename                       string<Tag>::type` that provides the body of a given response.

`template                       <class                       Tag>` *unspecified* `version(basic_response<Tag>                       const                       &                       response)`  
Returns a wrapper convertible to `typename                       string<Tag>::type` that provides the version of the given response.

`template                       <class                       Tag>` *unspecified* `status(basic_response<Tag>                       const                       &                       response)`  
Returns a wrapper convertible to `typename                       boost::uint16_t` that provides the status of the given response.

`template                       <class                       Tag>` *unspecified* `status_message(basic_response<Tag>                       const                       &                       response)`  
Returns a wrapper convertible to `typename                       string<Tag>::type` that provides the status message of the given response.

### [Table Of Contents](../contents.html)

-   <a href="#" class="reference internal">HTTP Response</a>
    -   <a href="#response-concept" class="reference internal">Response Concept</a>
    -   <a href="#directives" class="reference internal">Directives</a>
    -   <a href="#modifiers" class="reference internal">Modifiers</a>
    -   <a href="#wrappers" class="reference internal">Wrappers</a>

#### Previous topic

[HTTP Request](http_request.html "previous chapter")

#### Next topic

[HTTP Server API](http_server.html "next chapter")

### Quick search

Enter search terms or a module, class or function name.

### Navigation

-   [next](http_server.html "HTTP Server API")
-   [previous](http_request.html "HTTP Request") |
-   [cpp-netlib v0.11.2](../contents.html) »
-   [Reference Manual](../reference.html) »

© Copyright 2008-2014, Glyn Matthews, Dean Michael Berris; 2013 Google, Inc.. Last updated on Mar 29, 2016. Created using [Sphinx](http://sphinx-doc.org/) 1.3.6.
