### Navigation

-   [next](getting_started.html "Getting Started")
-   [previous](index.html "Getting cpp-netlib") |
-   [cpp-netlib v0.11.2](contents.html) »

<span id="whats-new"></span>

What’s New<a href="#what-s-new" class="headerlink" title="Permalink to this headline">¶</a>
===========================================================================================

`cpp-netlib` 0.12<a href="#cpp-netlib-0-12" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------------

-   Added a code of conduct.
-   Add TLS SNI hostname support in the HTTP Client options.
-   Changes based on Coverity reports.
-   Replace std::bind with lambdas.
-   Use std::shared\_ptr instead of boost::shared\_ptr.
-   Use standalone Asio instead of Boost.Asio.
-   No Boost library (shared or static) dependencies.
-   Use doxygen for documentation, integrated with Breathe to Sphinx.
-   Require C++11 for builds, removes support for non-C++11 compilers.
-   Update documentation for hello\_world\_server
-   Use googletest for tests
-   Fix XCode-generated debug binaries caused by URI parser complexity
-   Remove synchronous client implementation.
-   Remove support for connection keepalive (only supported in synchronous client).
-   Disable SSLv3 by default.
-   Use sanitisers in continuous integration (address and thread sanitiser).
-   Update minimum Boost to 1.57. Always use shared libs from Boost.

`cpp-netlib` 0.11<a href="#cpp-netlib-0-11" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------------

### v0.11.2<a href="#v0-11-2" class="headerlink" title="Permalink to this headline">¶</a>

-   Support a source\_port setting for connections made by the client per-request.
-   Allow using cpp-netlib without OpenSSL.
-   Fix build breakage for Visual Studio 2015.
-   Add more options for HTTP client use of SSL/TLS options/ciphers.
-   Made client\_get\_timeout\_test less flaky.
-   Fixes to URI encoding issues with multibyte strings.
-   Make cpp-netlib not crash on unstable networks.
-   Allow parsing empty query parameters (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/499" class="reference external">#499</a>).
-   CMake build changes to simplify dependencies on cppnetlib-client-connections.
-   Handle EOF correctly (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/496" class="reference external">#496</a>).
-   Fix fileserver example to chunk data correctly.
-   Copy hostname to avoid dangling reference to a temporary request object. (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/482" class="reference external">#482</a>)
-   Catch exceptions in parse\_headers to avoid propagating issues in parsing upwards.
-   Fix some GCC warnings on signed/unsigned comparison.
-   Support environment variable-based peer verification (via OpenSSL).
-   Support IPv6 connections.
-   Support certificate-based verification, and option to always verify hosts.

### v0.11.1<a href="#v0-11-1" class="headerlink" title="Permalink to this headline">¶</a>

-   Add support for request timeouts.
-   Build configuration fixes.
-   Support for Travis CI in-project config.
-   Make the response parser more flexible to support older/ad-hoc servers that don’t have standard format responses.
-   Fix some instability in the client destructor.
-   MSVC 2010 specific fixes.

### v0.11.0<a href="#v0-11-0" class="headerlink" title="Permalink to this headline">¶</a>

-   Fix thread leak in DNS resolution failure (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/245" class="reference external">#245</a>)
-   Remove unsupported client\_fwd.hpp header (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/277" class="reference external">#277</a>)
-   Remove support for header-only usage (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/129" class="reference external">#129</a>) – this means that the BOOST\_NETWORK\_NO\_LIB option is no longer actually supported.
-   Deprecate Synchronous Client implementations (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/279" class="reference external">#279</a>)
-   Support streaming body chunks for PUT/POST client requests (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/27" class="reference external">#27</a>)
-   Fix non-case-sensitive header parsing for some client tags (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/313" class="reference external">#313</a>)
-   Remove unsupported Jamfiles from the whole project (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/316" class="reference external">#316</a>)
-   Add `make                         install` for Linux and OS X (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/285" class="reference external">#285</a>)
-   Fix incorrect Body processing (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/69" class="reference external">#69</a>)
-   Support chunked transfer encoding from HTTP responses (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/86" class="reference external">#86</a>)
-   Make OS X Clang builds use C++11 and libc++.
-   Update Boost requirement to 1.54.0.
-   Experimental Base64 encoding/decoding library (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/287" class="reference external">#287</a>)
-   *Known test failure:* OS X Xcode Clang 5.0 + Boost 1.54.0 + libc++ don’t play well with Boost.Serialization issues, mitigate test breakage but `cpp-netlib-utils_base64_test` still fails in this platform. (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/287" class="reference external">#287</a>)
-   Provide a client option to always validate peers for HTTPS requests made by the client. (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/349" class="reference external">#349</a>)
-   Back-port fix for <a href="https://github.com/cpp-netlib/cpp-netlib/issues/163" class="reference external">#163</a> for improved URI parsing.
-   Added support for client-side certificates and private keys (<a href="https://github.com/cpp-netlib/cpp-netlib/pull/361" class="reference external">#361</a>).

`cpp-netlib` 0.10<a href="#cpp-netlib-0-10" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------------

### v0.10.1<a href="#v0-10-1" class="headerlink" title="Permalink to this headline">¶</a>

-   Documentation updates (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/182" class="reference external">#182</a>, <a href="https://github.com/cpp-netlib/cpp-netlib/issues/265" class="reference external">#265</a>, <a href="https://github.com/cpp-netlib/cpp-netlib/issues/194" class="reference external">#194</a>, <a href="https://github.com/cpp-netlib/cpp-netlib/issues/233" class="reference external">#233</a>, <a href="https://github.com/cpp-netlib/cpp-netlib/issues/255" class="reference external">#255</a>)
-   Fix issue with async server inadvertently stopping from listening when accepting a connection fails. (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/172" class="reference external">#172</a>)
-   Allow overriding and ultimately removing defaulted headers from HTTP requests. (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/263" class="reference external">#263</a>)
-   Add -Wall to the base rule for GCC builds. (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/264" class="reference external">#264</a>)
-   Make the server implementation throw on startup errors. (<a href="https://github.com/cpp-netlib/cpp-netlib/issues/166" class="reference external">#166</a>)

### v0.10.0<a href="#v0-10-0" class="headerlink" title="Permalink to this headline">¶</a>

-   Added support for more HTTP status codes (206, 408, 412, 416, 507).
-   Refactored the parser for chunked encoding.
-   Fixed parsing chunked encoding if the response body has `<chunk>CLRF<hex>CLRF<data>`.
-   Added librt dependency on Linux.
-   Check the callback in the asynchronous client before calling it.
-   Fixed issues <a href="https://github.com/cpp-netlib/cpp-netlib/issues/110" class="reference external">#110</a>, <a href="https://github.com/cpp-netlib/cpp-netlib/issues/168" class="reference external">#168</a>, <a href="https://github.com/cpp-netlib/cpp-netlib/issues/213" class="reference external">#213</a>.

`cpp-netlib` 0.9<a href="#cpp-netlib-0-9" class="headerlink" title="Permalink to this headline">¶</a>
-----------------------------------------------------------------------------------------------------

### v0.9.5<a href="#v0-9-5" class="headerlink" title="Permalink to this headline">¶</a>

-   Removed dependency on Boost.Parameter from HTTP client and server.
-   Fixed for Clang error on Twitter example.
-   Added source port to the request (HTTP server).
-   Updated CMake config for MSVC 2010/2012.
-   Now support chunked content encoding in client response parsing.
-   Fixed bug with client not invoking callback when a request fails.

### v0.9.4<a href="#v0-9-4" class="headerlink" title="Permalink to this headline">¶</a>

-   Lots of URI fixes.
-   Fixed async\_server’s request handler so it doesn’t make copies of the supplied handler.
-   Fix for issue <a href="https://github.com/cpp-netlib/cpp-netlib/issues/73" class="reference external">#73</a> regarding SSL connections ending in short read errors.
-   Final C++03-only release.

### v0.9.3<a href="#v0-9-3" class="headerlink" title="Permalink to this headline">¶</a>

-   URI, HTTP client and HTTP server are now built as static libraries (`libcppnetlib-uri.a`, `libcppnetlib-client-connections.a` and `libcppnetlib-server-parsers.a` on Linux and `cppnetlib-uri.lib`, `cppnetlib-client-connections.lib` and `cppnetlib-server-parsers.lib` on Windows).
-   Updated URI parser.
-   A new URI builder.
-   URI support for IPv6 RFC 2732.
-   Fixed issues <a href="https://github.com/cpp-netlib/cpp-netlib/issues/67" class="reference external">#67</a>, <a href="https://github.com/cpp-netlib/cpp-netlib/issues/72" class="reference external">#72</a>, <a href="https://github.com/cpp-netlib/cpp-netlib/issues/78" class="reference external">#78</a>, <a href="https://github.com/cpp-netlib/cpp-netlib/issues/79" class="reference external">#79</a>, <a href="https://github.com/cpp-netlib/cpp-netlib/issues/80" class="reference external">#80</a>, <a href="https://github.com/cpp-netlib/cpp-netlib/issues/81" class="reference external">#81</a>, <a href="https://github.com/cpp-netlib/cpp-netlib/issues/82" class="reference external">#82</a>, <a href="https://github.com/cpp-netlib/cpp-netlib/issues/83" class="reference external">#83</a>.
-   New examples for the HTTP client, including an Atom feed, an RSS feed and a very simple client that uses the Twitter Search API.

### v0.9.2<a href="#v0-9-2" class="headerlink" title="Permalink to this headline">¶</a>

-   Critial bug fixes to v0.9.1.

### v0.9.1<a href="#v0-9-1" class="headerlink" title="Permalink to this headline">¶</a>

-   Introduced macro `BOOST_NETWORK_DEFAULT_TAG` to allow for programmatically defining the default flag to use throughout the compilation unit.
-   Support for streaming body handlers when performing HTTP client operations. See documentation for HTTP client interface for more information.
-   Numerous bug fixes from v0.9.0.
-   Google, Inc. contributions.

### v0.9.0<a href="#v0-9-0" class="headerlink" title="Permalink to this headline">¶</a>

-   **IMPORTANT BREAKING CHANGE**: By default all compile-time heavy parser implementations are now compiled to external static libraries. In order to use `cpp-netlib` in header-only mode, users must define the preprocessor macro `BOOST_NETWORK_NO_LIB` before including any `cpp-netlib` header. This breaks code that relied on the version 0.8.x line where the library is strictly header-only.
-   Fix issue \#41: Introduce a macro `BOOST_NETWORK_HTTP_CLIENT_DEFAULT_TAG` which makes the default HTTP client use `tags::http_async_8bit_udp_resolve` as the tag.
-   Fix issue \#40: Write the status line and headers in a single buffer write instead of two writes.
-   More consistent message API for client and server messages (request and response objects).
-   Refactoring of internal implementations to allow better separation of concerns and more manageable coding/documentation.
-   Client and server constructors that support Boost.Parameter named parameters.
-   Client and server constructors now take in an optional reference to a Boost.Asio `io_service` to use internally.
-   Documentation updates to reflect new APIs.

`cpp-netlib` 0.8<a href="#cpp-netlib-0-8" class="headerlink" title="Permalink to this headline">¶</a>
-----------------------------------------------------------------------------------------------------

-   Updates to URI unit tests and documentation.
-   More documentation, covering the HTTP Client and HTTP Server APIs
-   Asynchronous HTTP Server that now supports running request handlers on a different thread pool.
-   An initial thread pool implementation, using Boost.Asio underneath.
-   Adding a ready(…) wrapper to check whether a response object returned by the asynchronous client in 0.7 already has all the parts available.
-   Some attempts at lowering compile time costs.

`cpp-netlib` 0.7<a href="#cpp-netlib-0-7" class="headerlink" title="Permalink to this headline">¶</a>
-----------------------------------------------------------------------------------------------------

-   Radical documentation overhaul
-   Asynchronous HTTP client
-   Tag dispatch overhaul, using Boost.MPL
-   HTTP Client Facade refactoring
-   Bug fixes for HTTP 1.1 response parsing
-   Minimized code repetition with some header macro’s
-   Configurable HTTPS support in the library with `BOOST_NETWORK_ENABLE_HTTPS`

`cpp-netlib` 0.6<a href="#cpp-netlib-0-6" class="headerlink" title="Permalink to this headline">¶</a>
-----------------------------------------------------------------------------------------------------

-   Many fixes for MSVC compiler

`cpp-netlib` 0.5<a href="#cpp-netlib-0-5" class="headerlink" title="Permalink to this headline">¶</a>
-----------------------------------------------------------------------------------------------------

-   An embeddable HTTP 1.1 server
-   An HTTP 1.1 client upgraded to support HTTPS
-   An updated URI parser implementation
-   An asynchronous HTTP 1.1 client
-   An HTTP 1.1 client that supports streaming function handlers

### [Table Of Contents](contents.html)

-   <a href="#" class="reference internal">What’s New</a>
    -   <a href="#cpp-netlib-0-12" class="reference internal"><code class="docutils literal">cpp-netlib</code> 0.12</a>
    -   <a href="#cpp-netlib-0-11" class="reference internal"><code class="docutils literal">cpp-netlib</code> 0.11</a>
        -   <a href="#v0-11-2" class="reference internal">v0.11.2</a>
        -   <a href="#v0-11-1" class="reference internal">v0.11.1</a>
        -   <a href="#v0-11-0" class="reference internal">v0.11.0</a>
    -   <a href="#cpp-netlib-0-10" class="reference internal"><code class="docutils literal">cpp-netlib</code> 0.10</a>
        -   <a href="#v0-10-1" class="reference internal">v0.10.1</a>
        -   <a href="#v0-10-0" class="reference internal">v0.10.0</a>
    -   <a href="#cpp-netlib-0-9" class="reference internal"><code class="docutils literal">cpp-netlib</code> 0.9</a>
        -   <a href="#v0-9-5" class="reference internal">v0.9.5</a>
        -   <a href="#v0-9-4" class="reference internal">v0.9.4</a>
        -   <a href="#v0-9-3" class="reference internal">v0.9.3</a>
        -   <a href="#v0-9-2" class="reference internal">v0.9.2</a>
        -   <a href="#v0-9-1" class="reference internal">v0.9.1</a>
        -   <a href="#v0-9-0" class="reference internal">v0.9.0</a>
    -   <a href="#cpp-netlib-0-8" class="reference internal"><code class="docutils literal">cpp-netlib</code> 0.8</a>
    -   <a href="#cpp-netlib-0-7" class="reference internal"><code class="docutils literal">cpp-netlib</code> 0.7</a>
    -   <a href="#cpp-netlib-0-6" class="reference internal"><code class="docutils literal">cpp-netlib</code> 0.6</a>
    -   <a href="#cpp-netlib-0-5" class="reference internal"><code class="docutils literal">cpp-netlib</code> 0.5</a>

#### Previous topic

[Getting cpp-netlib](index.html "previous chapter")

#### Next topic

[Getting Started](getting_started.html "next chapter")

### Quick search

Enter search terms or a module, class or function name.

### Navigation

-   [next](getting_started.html "Getting Started")
-   [previous](index.html "Getting cpp-netlib") |
-   [cpp-netlib v0.11.2](contents.html) »

© Copyright 2008-2014, Glyn Matthews, Dean Michael Berris; 2013 Google, Inc.. Last updated on Mar 29, 2016. Created using [Sphinx](http://sphinx-doc.org/) 1.3.6.
