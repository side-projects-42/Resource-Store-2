### Navigation

-   [next](http_request.html "HTTP Request")
-   [previous](../reference.html "Reference Manual") |
-   [cpp-netlib v0.11.2](../contents.html) »
-   [Reference Manual](../reference.html) »

HTTP Client API<a href="#http-client-api" class="headerlink" title="Permalink to this headline">¶</a>
=====================================================================================================

General<a href="#general" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------

`cpp-netlib` includes and implements a number of HTTP clients that you can use and embed in your own applications. All of the HTTP client implementations:

> -   **Cannot be copied.** This means you may have to store instances of the clients in dynamic memory if you intend to use them as function parameters or pass them around in smart pointers or by reference.
> -   **Assume that requests made are independent of each other.** There currently is no cookie or session management system built-in to cpp-netlib’s HTTP client implementations.

The HTTP clients all share the same API, but the internals are documented in terms of what is different and what to expect with the different implementations.

Features<a href="#features" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------

The HTTP client implementation supports requesting secure HTTP (HTTPS) content only in the following situations:

> -   **Client libraries are built with \`\`BOOST\_NETWORK\_ENABLE\_HTTPS\`\`.** This tells the implementation to use HTTPS-specific code to handle HTTPS-based content when making connections associated with HTTPS URI’s. This requires a dependency on <a href="http://www.openssl.org/" class="reference external">OpenSSL</a>.
> -   **The \`\`BOOST\_NETWORK\_ENABLE\_HTTPS\`\` macro is set when compiling user code.** It is best to define this either at compile-time of all code using the library, or before including any of the client headers.

To use the client implementations that support HTTPS URIs, you may explicitly do the following:

    #define BOOST_NETWORK_ENABLE_HTTPS
    #include <boost/network/include/http/client.hpp>

This forces HTTPS support to be enabled and forces a dependency on <a href="http://www.openssl.org/" class="reference external">OpenSSL</a>. This dependency is imposed by <a href="http://www.boost.org/libs/asio" class="reference external">Boost.Asio</a>

Client Implementation<a href="#client-implementation" class="headerlink" title="Permalink to this headline">¶</a>
-----------------------------------------------------------------------------------------------------------------

There is a single user-facing template class named `basic_client` which takes three template parameters:

> -   **Tag** - which static tag you choose that defines the behavior of the client.
> -   **http\_version\_major** - an unsigned int that defines the HTTP major version number, this directly affects the HTTP messages sent by the client.
> -   **http\_version\_minor** - an unsigned int that defines the HTTP minor version number.

In the above table the tags follow a pattern for describing the behavior introduced by the tags. This pattern is shown below:

> &lt;protocol&gt;\_&lt;modifier&gt;\_&lt;character-width&gt;\_&lt;resolve-strategy&gt;

For example, the tag `http_default_8bit_tcp_resolve` indicates the protocol `http`, a modifier `default`, a character width of `8bit`, and a resolve strategy of `tcp_resolve`.

The client is implemented as an <a href="http://en.wikipedia.org/wiki/Active_object" class="reference external">Active Object</a>. This means that the client has and manages its own lifetime thread, and returns values that are asynchronously filled in. The response object encapsulates futures which get filled in once the values are available.

Note

The client objects are thread safe, and can be shared across many threads. Each request starts a sequence of asynchronous operations dedicated to that request. The client does not re-cycle connections and uses a one-request-one-connection model.

When a client object is destroyed, it waits for all pending asynchronous operations to finish. Errors encountered during operations on retrieving data from the response objects cause exceptions to be thrown – therefore it is best that if a client object is constructed, it should outlive the response object or be outside the try-catch block handling the errors from operations on responses. In code, usage should look like the following:

    http::client client;
    try {
      http::client::response response = client.get("http://www.example.com/");
      std::cout << body(response);
    } catch (std::exception& e) {
      // deal with exceptions here
    }

A common mistake is to declare the client inside the try block which invokes undefined behavior when errors arise from the handling of response objects. Previous examples cited by the documentation showed the short version of the code which didn’t bother moving the `http::client` object outside of the same `try` block where the request/response objects are being used.

Member Functions<a href="#member-functions" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------------

In this section we assume that the following typedef is in effect:

    typedef boost::network::http::basic_client<
        boost::network::http::tags::http_default_8bit_udp_resolve
        , 1
        , 1
        >
        client;

Also, that code using the HTTP client will have use the following header:

    #include <boost/network/include/http/client.hpp>

### Constructors<a href="#constructors" class="headerlink" title="Permalink to this headline">¶</a>

The client implementation can be default constructed, or customized at initialization.

`client()`  
Default constructor.

`explicit client(client::options const &)`  
Constructor taking a `client_options<Tag>` object. The following table shows the options you can set on a `client_options<Tag>` instance.

### Client Options<a href="#client-options" class="headerlink" title="Permalink to this headline">¶</a>

<span id="cppnetlibclassboost_1_1network_1_1http_1_1client__options" class="target"></span>*template* &lt;class *Tag*&gt;  
<span id="boost::network::http::client_options"></span>*class* ``` boost::network::http::``client_options ```<a href="#_CPPv2N5boost7network4http14client_optionsE" class="headerlink" title="Permalink to this definition">¶</a>  
Public Functions

<span id="boost::network::http::client_options::client_options"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1client__options_1a86694f2abd05ea19710356b2316521db" class="target"></span>`client_options`<span class="sig-paren">(</span><span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14client_options14client_optionsEv" class="headerlink" title="Permalink to this definition">¶</a>  
Set all the options to default.

<span id="boost::network::http::client_options::cache_resolved__b"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1client__options_1aba352b068fa1c56d5523579b3a6c95b7" class="target"></span><a href="#_CPPv2N5boost7network4http14client_options14client_optionsEv" class="reference internal" title="boost::network::http::client_options::client_options">client_options</a> &`cache_resolved`<span class="sig-paren">(</span>bool *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14client_options14cache_resolvedEb" class="headerlink" title="Permalink to this definition">¶</a>  
Specify whether the client should cache resolved endpoints.

Default: false.

<span id="boost::network::http::client_options::follow_redirects__b"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1client__options_1abf23a249d6452a1c01aefa5442dc6169" class="target"></span><a href="#_CPPv2N5boost7network4http14client_options14client_optionsEv" class="reference internal" title="boost::network::http::client_options::client_options">client_options</a> &`follow_redirects`<span class="sig-paren">(</span>bool *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14client_options16follow_redirectsEb" class="headerlink" title="Permalink to this definition">¶</a>  
Specify whether the client should follow redirects.

Default: false.

<span id="boost::network::http::client_options::openssl_certificate__string_typeCR"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1client__options_1a82bc1d5a8ea7a3afbd0fee4b9f4ed036" class="target"></span><a href="#_CPPv2N5boost7network4http14client_options14client_optionsEv" class="reference internal" title="boost::network::http::client_options::client_options">client_options</a> &`openssl_certificate`<span class="sig-paren">(</span>string\_type *const* &*v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14client_options19openssl_certificateER11string_type" class="headerlink" title="Permalink to this definition">¶</a>  
Set the filename of the certificate to load for the SSL connection for verification.

<span id="boost::network::http::client_options::openssl_verify_path__string_typeCR"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1client__options_1a1ff45cc952acd9602a1a3dd55785645e" class="target"></span><a href="#_CPPv2N5boost7network4http14client_options14client_optionsEv" class="reference internal" title="boost::network::http::client_options::client_options">client_options</a> &`openssl_verify_path`<span class="sig-paren">(</span>string\_type *const* &*v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14client_options19openssl_verify_pathER11string_type" class="headerlink" title="Permalink to this definition">¶</a>  
Set the directory for which the certificate authority files are located.

<span id="boost::network::http::client_options::openssl_certificate_file__string_typeCR"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1client__options_1ada9794a5f1811fa0aac203a0d63b5bba" class="target"></span><a href="#_CPPv2N5boost7network4http14client_options14client_optionsEv" class="reference internal" title="boost::network::http::client_options::client_options">client_options</a> &`openssl_certificate_file`<span class="sig-paren">(</span>string\_type *const* &*v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14client_options24openssl_certificate_fileER11string_type" class="headerlink" title="Permalink to this definition">¶</a>  
Set the filename of the certificate to use for client-side SSL session establishment.

<span id="boost::network::http::client_options::openssl_private_key_file__string_typeCR"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1client__options_1a452eb90ab82b64e3bf19283c7d67014a" class="target"></span><a href="#_CPPv2N5boost7network4http14client_options14client_optionsEv" class="reference internal" title="boost::network::http::client_options::client_options">client_options</a> &`openssl_private_key_file`<span class="sig-paren">(</span>string\_type *const* &*v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14client_options24openssl_private_key_fileER11string_type" class="headerlink" title="Permalink to this definition">¶</a>  
Set the filename of the private key to use for client-side SSL session establishment.

<span id="boost::network::http::client_options::openssl_ciphers__string_typeCR"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1client__options_1afb67676c01d280c98734aba73a99fabf" class="target"></span><a href="#_CPPv2N5boost7network4http14client_options14client_optionsEv" class="reference internal" title="boost::network::http::client_options::client_options">client_options</a> &`openssl_ciphers`<span class="sig-paren">(</span>string\_type *const* &*v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14client_options15openssl_ciphersER11string_type" class="headerlink" title="Permalink to this definition">¶</a>  
Set the ciphers to support for SSL negotiation.

<span id="boost::network::http::client_options::openssl_sni_hostname__string_typeCR"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1client__options_1afce001d16222b4100cfd8807dbc9938f" class="target"></span><a href="#_CPPv2N5boost7network4http14client_options14client_optionsEv" class="reference internal" title="boost::network::http::client_options::client_options">client_options</a> &`openssl_sni_hostname`<span class="sig-paren">(</span>string\_type *const* &*v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14client_options20openssl_sni_hostnameER11string_type" class="headerlink" title="Permalink to this definition">¶</a>  
Set the hostname for SSL SNI hostname support.

<span id="boost::network::http::client_options::openssl_options__l"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1client__options_1a8ac8cb6c6ee4a8f40cab38918c6c111a" class="target"></span><a href="#_CPPv2N5boost7network4http14client_options14client_optionsEv" class="reference internal" title="boost::network::http::client_options::client_options">client_options</a> &`openssl_options`<span class="sig-paren">(</span>long *o*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14client_options15openssl_optionsEl" class="headerlink" title="Permalink to this definition">¶</a>  
Set the raw OpenSSL options to use for HTTPS requests.

<span id="boost::network::http::client_options::io_service__std::shared_ptr:asio::io_service:"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1client__options_1aed3966637aa1a8008d1f4a0b2a0c72f7" class="target"></span><a href="#_CPPv2N5boost7network4http14client_options14client_optionsEv" class="reference internal" title="boost::network::http::client_options::client_options">client_options</a> &`io_service`<span class="sig-paren">(</span>std::shared\_ptr&lt;asio::io\_service&gt; *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14client_options10io_serviceENSt10shared_ptrIN4asio10io_serviceEEE" class="headerlink" title="Permalink to this definition">¶</a>  
Provide an `asio::io_service` hosted in a shared pointer.

<span id="boost::network::http::client_options::always_verify_peer__b"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1client__options_1afe678ecb12a05ea5c1b7ba24dcc7286d" class="target"></span><a href="#_CPPv2N5boost7network4http14client_options14client_optionsEv" class="reference internal" title="boost::network::http::client_options::client_options">client_options</a> &`always_verify_peer`<span class="sig-paren">(</span>bool *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14client_options18always_verify_peerEb" class="headerlink" title="Permalink to this definition">¶</a>  
Set whether we always verify the peer on the other side of the HTTPS connection.

Default: true.

<span id="boost::network::http::client_options::timeout__i"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1client__options_1a93127811abd1fe2d6e5f39e05d697c29" class="target"></span><a href="#_CPPv2N5boost7network4http14client_options14client_optionsEv" class="reference internal" title="boost::network::http::client_options::client_options">client_options</a> &`timeout`<span class="sig-paren">(</span>int *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14client_options7timeoutEi" class="headerlink" title="Permalink to this definition">¶</a>  
Set an overall timeout for HTTP requests.

To use the above supported named parameters, you’ll have code that looks like the following:

    using namespace boost::network::http; // parameters are in this namespace
    client::options options;
    options.follow_redirects(true)
           .cache_resolved(true)
           .io_service(boost::make_shared<boost::asio::io_service>())
           .openssl_certificate("/tmp/my-cert")
           .openssl_verify_path("/tmp/ca-certs")
           .timeout(10);
    client client_(options);
    // use client_ as normal from here on out.

### HTTP Methods<a href="#http-methods" class="headerlink" title="Permalink to this headline">¶</a>

The client implementation supports various HTTP methods. The following constructs assume that a client has been properly constructed named `client_` and that there is an appropriately constructed request object named `request_` and that there is an appropriately constructed response object named `response_` like the following:

    using namespace boost::network::http;  // parameters are here
    client client_();
    client::request request_("http://cpp-netib.github.com/");
    client::response response_;

<span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client" class="target"></span>*template* &lt;*class* Tag, unsigned *version\_major*, unsigned *version\_minor*&gt;  
<span id="boost::network::http::basic_client"></span>*class* ``` boost::network::http::``basic_client ```<a href="#_CPPv2N5boost7network4http12basic_clientE" class="headerlink" title="Permalink to this definition">¶</a>  
Basic Client API.

This template defines an HTTP client object that is non-copyable and is implemented depending on the `Tag` parameter. It also hard-codes the version of HTTP to support.

**Template Parameters**  
- `Tag` -

    The Tag type used to determine certain traits of the implementation. We use the Tag as an input to other template metafunctions to determine things like the string type, whether to use TCP or UDP for the resolver, etc.

-   `version_major` -

    The HTTP major version.

-   `version_minor` -

    The HTTP minor version.

Inherits from boost::network::http::basic\_client\_facade&lt; Tag, version\_major, version\_minor &gt;

Public Types

<span id="boost::network::http::basic_client::tag_type"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client_1a483ed2fd706b2c8b6b9e2f094a751566" class="target"></span>*typedef* Tag `tag_type`<a href="#_CPPv2N5boost7network4http12basic_client8tag_typeE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::basic_client::options"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client_1af467cac98f0d5c36968c4797790cdc6e" class="target"></span>*typedef* <a href="#_CPPv2N5boost7network4http14client_optionsE" class="reference internal" title="boost::network::http::client_options">client_options</a>&lt;Tag&gt; `options`<a href="#_CPPv2N5boost7network4http12basic_client7optionsE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::basic_client_facade::string_type"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1a76c78d521b58d2abad39db9363e55d9a" class="target"></span>*typedef* string&lt;Tag&gt;::type `string_type`<a href="#_CPPv2N5boost7network4http19basic_client_facade11string_typeE" class="headerlink" title="Permalink to this definition">¶</a>  
The type to use for strings associated with this client. Typically resolves to `std::string`.

<span id="boost::network::http::basic_client_facade::request"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1a467d347dfe2fd9f2e7fd4cd0db593236" class="target"></span>*typedef* basic\_request&lt;Tag&gt; `request`<a href="#_CPPv2N5boost7network4http19basic_client_facade7requestE" class="headerlink" title="Permalink to this definition">¶</a>  
The request type. This models the HTTP Request concept.

<span id="boost::network::http::basic_client_facade::response"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1a938acb3c2000ca0da774d0cc6ebccf45" class="target"></span>*typedef* basic\_response&lt;Tag&gt; `response`<a href="#_CPPv2N5boost7network4http19basic_client_facade8responseE" class="headerlink" title="Permalink to this definition">¶</a>  
The response type. This models the HTTP Response concept.

<span id="boost::network::http::basic_client_facade::body_callback_function_type"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1ade75b031a45f27cbf65c67579cb75e2c" class="target"></span>*typedef* std::function&lt;void<span class="sig-paren">(</span>iterator\_range&lt;char *const* \*&gt; *const*&, std::error\_code *const*&<span class="sig-paren">)</span>&gt; `body_callback_function_type`<a href="#_CPPv2N5boost7network4http19basic_client_facade27body_callback_function_typeE" class="headerlink" title="Permalink to this definition">¶</a>  
This callback is invoked with a range representing part of the response’s body as it comes in. In case of errors, the second argument is an error code.

<span id="boost::network::http::basic_client_facade::body_generator_function_type"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1a072d6ad63d747c62a9f99a8af77aae90" class="target"></span>*typedef* std::function&lt;bool<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http19basic_client_facade11string_typeE" class="reference internal" title="boost::network::http::basic_client_facade::string_type">string_type</a>&<span class="sig-paren">)</span>&gt; `body_generator_function_type`<a href="#_CPPv2N5boost7network4http19basic_client_facade28body_generator_function_typeE" class="headerlink" title="Permalink to this definition">¶</a>  
Functions that model this signature will be used to generate part of the body while the request is being performed. This allows users to provide a generator function that will generate the body of the request piece-wise.

Implementations should return `true` if there is more to the body of the request, and `false` otherwise.

Public Functions

<span id="boost::network::http::basic_client::basic_client__optionsCR"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client_1ab9dd2f520d3134a162147f021a89eee4" class="target"></span>`basic_client`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http12basic_client7optionsE" class="reference internal" title="boost::network::http::basic_client::options">options</a> *const* &*options*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http12basic_client12basic_clientER7options" class="headerlink" title="Permalink to this definition">¶</a>  
This constructor takes a single options argument of type <a href="#cppnetlibclassboost_1_1network_1_1http_1_1client__options" class="reference internal"><span>client_options</span></a>. See boost/network/protocol/http/client/options.hpp for more details.

<span id="boost::network::http::basic_client::basic_client"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client_1a6b2c55e5ed7b909832118f11ec81b39f" class="target"></span>`basic_client`<span class="sig-paren">(</span><span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http12basic_client12basic_clientEv" class="headerlink" title="Permalink to this definition">¶</a>  
This default constructor sets up the default options.

<span id="boost::network::http::basic_client_facade::head__requestCR"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1a32cf25ea4bcc8ff108b96f41a769bfe2" class="target"></span><a href="#_CPPv2N5boost7network4http19basic_client_facade8responseE" class="reference internal" title="boost::network::http::basic_client_facade::response">response</a> `head`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http19basic_client_facade7requestE" class="reference internal" title="boost::network::http::basic_client_facade::request">request</a> *const* &*request*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http19basic_client_facade4headER7request" class="headerlink" title="Permalink to this definition">¶</a>  
Perform a HEAD request.

<span id="boost::network::http::basic_client_facade::get__requestCR.body_callback_function_type"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1a0f5bb208454697b056444b0c4f413120" class="target"></span><a href="#_CPPv2N5boost7network4http19basic_client_facade8responseE" class="reference internal" title="boost::network::http::basic_client_facade::response">response</a> `get`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http19basic_client_facade7requestE" class="reference internal" title="boost::network::http::basic_client_facade::request">request</a> *const* &*request*, <a href="#_CPPv2N5boost7network4http19basic_client_facade27body_callback_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_callback_function_type">body_callback_function_type</a> *body\_handler*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http19basic_client_facade3getER7request27body_callback_function_type" class="headerlink" title="Permalink to this definition">¶</a>  
Perform a GET request.

**Return**  
A response object.

**Parameters**  
- `request` -

    The request object including the URI and headers.

-   `body_handler` -

    If provided, a callback invoked for parts of the response’s body.

**Exceptions**  
- `std::exception` -

    May throw exceptions on errors, derived from `std::exception`.

<span id="boost::network::http::basic_client_facade::post__request.string_typeCR.string_typeCR.body_callback_function_type.body_generator_function_type"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1a00c4a3923f313c9ec06c54cce9747d2e" class="target"></span><a href="#_CPPv2N5boost7network4http19basic_client_facade8responseE" class="reference internal" title="boost::network::http::basic_client_facade::response">response</a> `post`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http19basic_client_facade7requestE" class="reference internal" title="boost::network::http::basic_client_facade::request">request</a> *request*, <a href="#_CPPv2N5boost7network4http19basic_client_facade11string_typeE" class="reference internal" title="boost::network::http::basic_client_facade::string_type">string_type</a> *const* &*body*, <a href="#_CPPv2N5boost7network4http19basic_client_facade11string_typeE" class="reference internal" title="boost::network::http::basic_client_facade::string_type">string_type</a> *const* &*content\_type*, <a href="#_CPPv2N5boost7network4http19basic_client_facade27body_callback_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_callback_function_type">body_callback_function_type</a> *body\_handler*, <a href="#_CPPv2N5boost7network4http19basic_client_facade28body_generator_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_generator_function_type">body_generator_function_type</a> *body\_generator*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http19basic_client_facade4postE7requestR11string_typeR11string_type27body_callback_function_type28body_generator_function_type" class="headerlink" title="Permalink to this definition">¶</a>  
Perform a POST request.

**Return**  
A response object.

**Parameters**  
- `request` -

    A copy of the request object including the URI and headers.

-   `body` -

    The whole contents of the body. If provided, this overrides the body in the `request`.

-   `content_type` -

    The content type for the request. This overrides the content type in the `request`.

-   `body_handler` -

    The callback invoked for parts of the response body as they come in.

-   `body_generator` -

    If provided, is invoked to generate parts of the request’s body as it is being sent.

**Exceptions**  
- `std::exception` -

    May throw exceptions on errors, derived from `std::exception`.

<span id="boost::network::http::basic_client_facade::post__requestCR.body_generator_function_type.body_callback_function_type"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1a65534f48fd4fc2f59a1849fbfaf85700" class="target"></span><a href="#_CPPv2N5boost7network4http19basic_client_facade8responseE" class="reference internal" title="boost::network::http::basic_client_facade::response">response</a> `post`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http19basic_client_facade7requestE" class="reference internal" title="boost::network::http::basic_client_facade::request">request</a> *const* &*request*, <a href="#_CPPv2N5boost7network4http19basic_client_facade28body_generator_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_generator_function_type">body_generator_function_type</a> *body\_generator*, <a href="#_CPPv2N5boost7network4http19basic_client_facade27body_callback_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_callback_function_type">body_callback_function_type</a> *body\_handler*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http19basic_client_facade4postER7request28body_generator_function_type27body_callback_function_type" class="headerlink" title="Permalink to this definition">¶</a>  
Perform a POST request.

**Return**  
A response object.

**Parameters**  
- `request` -

    The request including the URI and headers.

-   `body_generator` -

    The function to call to generate part of the body while the request is being performed.

-   `callback` -

    If provided, the function to call for parts of the response’s body as they come in.

**Exceptions**  
- `std::exception` -

    May throw exceptions derived from std::exception in case of errors.

<span id="boost::network::http::basic_client_facade::post__requestCR.body_callback_function_type.body_generator_function_type"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1a848ceb7014c9ba5c5e7d11ad64c7110d" class="target"></span><a href="#_CPPv2N5boost7network4http19basic_client_facade8responseE" class="reference internal" title="boost::network::http::basic_client_facade::response">response</a> `post`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http19basic_client_facade7requestE" class="reference internal" title="boost::network::http::basic_client_facade::request">request</a> *const* &*request*, <a href="#_CPPv2N5boost7network4http19basic_client_facade27body_callback_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_callback_function_type">body_callback_function_type</a> *body\_handler*, <a href="#_CPPv2N5boost7network4http19basic_client_facade28body_generator_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_generator_function_type">body_generator_function_type</a> *body\_generator*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http19basic_client_facade4postER7request27body_callback_function_type28body_generator_function_type" class="headerlink" title="Permalink to this definition">¶</a>  
Perform a POST request.

**Return**  
A response object.

**Parameters**  
- `request` -

    The request including the URI and headers.

-   `body_generator` -

    The function to call to generate part of the body while the request is being performed.

-   `callback` -

    If provided, the function to call for parts of the response’s body as they come in.

**Exceptions**  
- `std::exception` -

    May throw exceptions derived from std::exception in case of errors.

<span id="boost::network::http::basic_client_facade::post__requestCR.string_typeCR.body_callback_function_type.body_generator_function_type"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1ab92a0133f3a4836b1e95d8babc39663a" class="target"></span><a href="#_CPPv2N5boost7network4http19basic_client_facade8responseE" class="reference internal" title="boost::network::http::basic_client_facade::response">response</a> `post`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http19basic_client_facade7requestE" class="reference internal" title="boost::network::http::basic_client_facade::request">request</a> *const* &*request*, <a href="#_CPPv2N5boost7network4http19basic_client_facade11string_typeE" class="reference internal" title="boost::network::http::basic_client_facade::string_type">string_type</a> *const* &*body*, <a href="#_CPPv2N5boost7network4http19basic_client_facade27body_callback_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_callback_function_type">body_callback_function_type</a> *body\_handler*, <a href="#_CPPv2N5boost7network4http19basic_client_facade28body_generator_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_generator_function_type">body_generator_function_type</a> *body\_generator*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http19basic_client_facade4postER7requestR11string_type27body_callback_function_type28body_generator_function_type" class="headerlink" title="Permalink to this definition">¶</a>  
Perform a POST request.

**Return**  
A response object.

**Parameters**  
- `request` -

    The request object including the URI and headers.

-   `body` -

    The whole contents of the body.

-   `body_handler` -

    The callback invoked for parts of the response body as they come in.

-   `body_generator` -

    If provided, is invoked to generate parts of the request’s body as it is being sent.

**Exceptions**  
- `std::exception` -

    May throw exceptions on errors, derived from `std::exception`.

<span id="boost::network::http::basic_client_facade::put__request.string_typeCR.string_typeCR.body_callback_function_type.body_generator_function_type"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1ab50f01d265ed427e6d09be61a3202da7" class="target"></span><a href="#_CPPv2N5boost7network4http19basic_client_facade8responseE" class="reference internal" title="boost::network::http::basic_client_facade::response">response</a> `put`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http19basic_client_facade7requestE" class="reference internal" title="boost::network::http::basic_client_facade::request">request</a> *request*, <a href="#_CPPv2N5boost7network4http19basic_client_facade11string_typeE" class="reference internal" title="boost::network::http::basic_client_facade::string_type">string_type</a> *const* &*body*, <a href="#_CPPv2N5boost7network4http19basic_client_facade11string_typeE" class="reference internal" title="boost::network::http::basic_client_facade::string_type">string_type</a> *const* &*content\_type*, <a href="#_CPPv2N5boost7network4http19basic_client_facade27body_callback_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_callback_function_type">body_callback_function_type</a> *body\_handler*, <a href="#_CPPv2N5boost7network4http19basic_client_facade28body_generator_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_generator_function_type">body_generator_function_type</a> *body\_generator*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http19basic_client_facade3putE7requestR11string_typeR11string_type27body_callback_function_type28body_generator_function_type" class="headerlink" title="Permalink to this definition">¶</a>  
Perform a PUT request.

**Return**  
A response object.

**Parameters**  
- `request` -

    A copy of the request object including the URI and headers.

-   `body` -

    The whole contents of the body. If provided, this overrides the body in the `request`.

-   `content_type` -

    The content type for the request. This overrides the content type in the `request`.

-   `body_handler` -

    The callback invoked for parts of the response body as they come in.

-   `body_generator` -

    If provided, is invoked to generate parts of the request’s body as it is being sent.

**Exceptions**  
- `std::exception` -

    May throw exceptions on errors, derived from `std::exception`.

<span id="boost::network::http::basic_client_facade::put__requestCR.body_callback_function_type.body_generator_function_type"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1a190dc9aec44d5e02bb2983b848fd639c" class="target"></span><a href="#_CPPv2N5boost7network4http19basic_client_facade8responseE" class="reference internal" title="boost::network::http::basic_client_facade::response">response</a> `put`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http19basic_client_facade7requestE" class="reference internal" title="boost::network::http::basic_client_facade::request">request</a> *const* &*request*, <a href="#_CPPv2N5boost7network4http19basic_client_facade27body_callback_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_callback_function_type">body_callback_function_type</a> *callback*, <a href="#_CPPv2N5boost7network4http19basic_client_facade28body_generator_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_generator_function_type">body_generator_function_type</a> *body\_generator*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http19basic_client_facade3putER7request27body_callback_function_type28body_generator_function_type" class="headerlink" title="Permalink to this definition">¶</a>  
Perform a PUT request.

**Return**  
A response object.

**Parameters**  
- `request` -

    The request including the URI and headers.

-   `callback` -

    If provided, the function to call for parts of the response’s body as they come in.

-   `body_generator` -

    The function to call to generate part of the body while the request is being performed.

**Exceptions**  
- `std::exception` -

    May throw exceptions derived from std::exception in case of errors.

<span id="boost::network::http::basic_client_facade::put__requestCR.string_type.body_callback_function_type.body_generator_function_type"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1a261a3012fbee4237ca631ad17407af8b" class="target"></span><a href="#_CPPv2N5boost7network4http19basic_client_facade8responseE" class="reference internal" title="boost::network::http::basic_client_facade::response">response</a> `put`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http19basic_client_facade7requestE" class="reference internal" title="boost::network::http::basic_client_facade::request">request</a> *const* &*request*, <a href="#_CPPv2N5boost7network4http19basic_client_facade11string_typeE" class="reference internal" title="boost::network::http::basic_client_facade::string_type">string_type</a> *body*, <a href="#_CPPv2N5boost7network4http19basic_client_facade27body_callback_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_callback_function_type">body_callback_function_type</a> *body\_handler*, <a href="#_CPPv2N5boost7network4http19basic_client_facade28body_generator_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_generator_function_type">body_generator_function_type</a> *body\_generator*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http19basic_client_facade3putER7request11string_type27body_callback_function_type28body_generator_function_type" class="headerlink" title="Permalink to this definition">¶</a>  
Perform a POST request.

**Return**  
A response object.

**Parameters**  
- `request` -

    The request object including the URI and headers.

-   `body` -

    The whole contents of the body.

-   `body_handler` -

    The callback invoked for parts of the response body as they come in.

-   `body_generator` -

    If provided, is invoked to generate parts of the request’s body as it is being sent.

**Exceptions**  
- `std::exception` -

    May throw exceptions on errors, derived from `std::exception`.

<span id="boost::network::http::basic_client_facade::delete___requestCR.body_callback_function_type"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1ababa4526386fb237c957d69a4137fc27" class="target"></span><a href="#_CPPv2N5boost7network4http19basic_client_facade8responseE" class="reference internal" title="boost::network::http::basic_client_facade::response">response</a> `delete_`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http19basic_client_facade7requestE" class="reference internal" title="boost::network::http::basic_client_facade::request">request</a> *const* &*request*, <a href="#_CPPv2N5boost7network4http19basic_client_facade27body_callback_function_typeE" class="reference internal" title="boost::network::http::basic_client_facade::body_callback_function_type">body_callback_function_type</a> *body\_handler*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http19basic_client_facade7delete_ER7request27body_callback_function_type" class="headerlink" title="Permalink to this definition">¶</a>  
Perform a DELETE request.

**Return**  
A response object.

**Parameters**  
- `request` -

    The request object including the URI and the headers.

-   `body_handler` -

    The callback invoked for parts of the response body as they come in, if provided.

**Exceptions**  
- `std::exception` -

    May throw exceptions on errors, derived from `std::exception`.

<span id="boost::network::http::basic_client_facade::clear_resolved_cache"></span><span id="cppnetlibclassboost_1_1network_1_1http_1_1basic__client__facade_1ab1be5f08266664c6f967d70ccf29ff4d" class="target"></span>void `clear_resolved_cache`<span class="sig-paren">(</span><span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http19basic_client_facade20clear_resolved_cacheEv" class="headerlink" title="Permalink to this definition">¶</a>  
Clears the cache of resolved endpoints.

<span id="boost::network::http::client"></span><span id="cppnetlibprotocol_2http_2client_8hpp_1a0bafd7b8229c83638dc38eb646ce9ed0" class="target"></span>*typedef* <a href="#_CPPv2N5boost7network4http12basic_clientE" class="reference internal" title="boost::network::http::basic_client">basic_client</a>&lt;BOOST\_NETWORK\_HTTP\_CLIENT\_DEFAULT\_TAG, 1, 1&gt; ``` boost::network::http::``client ```<a href="#_CPPv2N5boost7network4http6clientE" class="headerlink" title="Permalink to this definition">¶</a>  
The default HTTP client type is an asynchronous UDP-resolving HTTP/1.1 client.

### Streaming Body Handler<a href="#streaming-body-handler" class="headerlink" title="Permalink to this headline">¶</a>

As of v0.9.1 the library now offers a way to support a streaming body callback function in all HTTP requests that expect a body part (GET, PUT, POST, DELETE). A convenience macro is also provided to make callback handlers easier to write. This macro is called `BOOST_NETWORK_HTTP_BODY_CALLBACK` which allows users to write the following code to easily create functions or function objects that are compatible with the callback function requirements.

An example of how to use the macro is shown below:

    struct body_handler {
        explicit body_handler(std::string & body)
        : body(body) {}

        BOOST_NETWORK_HTTP_BODY_CALLBACK(operator(), range, error) {
            // in here, range is the Boost.Range iterator_range, and error is
            // the Boost.System error code.
            if (!error)
                body.append(boost::begin(range), boost::end(range));
        }

        std::string & body;
    };

    // somewhere else
    std::string some_string;
    response_ = client_.get(request("http://cpp-netlib.github.com/"),
                            body_handler(some_string));

You can also use if for standalone functions instead if you don’t want or need to create a function object.

    BOOST_NETWORK_HTTP_BODY_CALLBACK(print_body, range, error) {
        if (!error)
            std::cout << "Received " << boost::distance(range) << "bytes."
                      << std::endl;
        else
            std::cout << "Error: " << error << std::endl;
    }

    // somewhere else
    response_ = client_.get(request("http://cpp-netlib.github.com/"),
                            print_body);

The `BOOST_NETWORK_HTTP_BODY_CALLBACK` macro is defined in `boost/network/protocol/http/client/macros.hpp`.

### [Table Of Contents](../contents.html)

-   <a href="#" class="reference internal">HTTP Client API</a>
    -   <a href="#general" class="reference internal">General</a>
    -   <a href="#features" class="reference internal">Features</a>
    -   <a href="#client-implementation" class="reference internal">Client Implementation</a>
    -   <a href="#member-functions" class="reference internal">Member Functions</a>
        -   <a href="#constructors" class="reference internal">Constructors</a>
        -   <a href="#client-options" class="reference internal">Client Options</a>
        -   <a href="#http-methods" class="reference internal">HTTP Methods</a>
        -   <a href="#streaming-body-handler" class="reference internal">Streaming Body Handler</a>

#### Previous topic

[Reference Manual](../reference.html "previous chapter")

#### Next topic

[HTTP Request](http_request.html "next chapter")

### Quick search

Enter search terms or a module, class or function name.

### Navigation

-   [next](http_request.html "HTTP Request")
-   [previous](../reference.html "Reference Manual") |
-   [cpp-netlib v0.11.2](../contents.html) »
-   [Reference Manual](../reference.html) »

© Copyright 2008-2014, Glyn Matthews, Dean Michael Berris; 2013 Google, Inc.. Last updated on Mar 29, 2016. Created using [Sphinx](http://sphinx-doc.org/) 1.3.6.
