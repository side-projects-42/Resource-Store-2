### Navigation

-   [next](../references.html "References")
-   [previous](http_response.html "HTTP Response") |
-   [cpp-netlib v0.11.2](../contents.html) »
-   [Reference Manual](../reference.html) »

HTTP Server API<a href="#http-server-api" class="headerlink" title="Permalink to this headline">¶</a>
=====================================================================================================

General<a href="#general" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------

`cpp-netlib` includes and implements and asynchronous HTTP server implementation that you can use and embed in your own applications. The HTTP Server implementation:

> -   **Cannot be copied.** This means you may have to store instances of the HTTP Server in dynamic memory if you intend to use them as function parameters or pass them around in smart pointers of by reference.
> -   **Assume that requests made are independent of each other.** None of the HTTP Server implementations support request pipelining (yet) so a single connection only deals with a single request.
> -   **The Handler instance is invoked asynchronously**. This means the I/O thread used to handle network-related events are free to handle only the I/O related events. This enables the server to scale better as to the number of concurrent connections it can handle.
> -   **The Handler is able to schedule asynchronous actions on the thread pool associated with the server.** This allows handlers to perform multiple asynchronous computations that later on perform writes to the connection.
> -   **The Handler is able to control the (asynchronous) writes to and reads from the HTTP connection.** Because the connection is available to the Handler, that means it can write out chunks of data at a time or stream data through the connection continuously.

The Handler concept for the HTTP Server is described by the following table:

------------------------------------------------------------------------

**Legend:**

H  
The Handler type.

h  
An instance of H.

Req  
A type that models the Request Concept.

ConnectionPtr  
A type that models the Connection Pointer Concept.

req  
An instance of Req.

conn  
An instance of ConncetionPtr.

<table><colgroup><col style="width: 24%" /><col style="width: 17%" /><col style="width: 59%" /></colgroup><thead><tr class="header"><th>Construct</th><th>Return Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code class="docutils literal">h(req, conn)</code></td><td><code class="docutils literal">void</code></td><td>Handle the request; conn is a shared pointer which exposes functions for writing to and reading from the connection.</td></tr></tbody></table>

------------------------------------------------------------------------

The HTTP Server is meant to allow for better scalability in terms of the number of concurrent connections and for performing asynchronous actions within the handlers. The HTTP Server implementation is available from a single user-facing template named `server`. This template takes in a single template parameter which is the type of the Handler to be called once a request has been parsed from a connection.

An instance of Handler is taken as a reference to the constructor of the server instance.

Warning

The HTTP Server implementation does not perform any synchronization on the calls to the Handler invocation. This means if your handler contains or maintains internal state, you are responsible for implementing your own synchronization on accesses to the internal state of the Handler.

The general pattern for using the `server` template is shown below:

    struct handler;
    typedef boost::network::http::server<handler> http_server;

    struct handler {
        void operator()(
            http_server::request const & req,
            http_server::connection_ptr connection
        ) {
            // handle the request here, and use the connection to
            // either read more data or write data out to the client
        }
    };

API Documentation<a href="#api-documentation" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------------------------

The following sections assume that the following file has been included:

    #include <boost/network/include/http/server.hpp>
    #include <boost/network/utils/thread_pool.hpp>

And that the following typedef’s have been put in place:

    struct handler_type;
    typedef boost::network::http::server<handler_type> http_server;

    struct handler_type {
        void operator()(http_server::request const & request,
                        http_server::connection_ptr connection) {
            // do something here
        }
    };

### Constructor<a href="#constructor" class="headerlink" title="Permalink to this headline">¶</a>

`explicit http_server(options)`  
Construct an HTTP server instance passing in a `server_options<Tag, Handler>` instance.

### Server Options<a href="#server-options" class="headerlink" title="Permalink to this headline">¶</a>

<span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options" class="target"></span>*template* &lt;class *Tag*, class *Handler*&gt;  
<span id="boost::network::http::server_options"></span>*struct* ``` boost::network::http::``server_options ```<a href="#_CPPv2N5boost7network4http14server_optionsE" class="headerlink" title="Permalink to this definition">¶</a>  
The options supported by an HTTP Server’s constructor.

Public Functions

<span id="boost::network::http::server_options::server_options__HandlerR"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1abf9af18765187285cc6bde1337d5f8b3" class="target"></span>`server_options`<span class="sig-paren">(</span>Handler &*handler*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="headerlink" title="Permalink to this definition">¶</a>  
A single-argument constructor that takes a Handler, and sets all options to defaults.

<span id="boost::network::http::server_options::server_options"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a12d3f97e677f5976756f4b433fb32eb2" class="target"></span>`server_options`<span class="sig-paren">(</span><span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsEv" class="headerlink" title="Permalink to this definition">¶</a>  
Disabled default constructor for the options class.

<span id="boost::network::http::server_options::server_options__server_optionsCR"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1ab069a731d77d61983ca5ad4ece7013d7" class="target"></span>`server_options`<span class="sig-paren">(</span>*const* <a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a>&<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsERK14server_options" class="headerlink" title="Permalink to this definition">¶</a>  
Copy constructor for the options class.

<span id="boost::network::http::server_options::assign-operator__server_optionsCR"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1aa71091762f0383f71aa7904d65165542" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`operator=`<span class="sig-paren">(</span>*const* <a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a>&<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_optionsaSERK14server_options" class="headerlink" title="Permalink to this definition">¶</a>  
Copy assignment for the options class.

<span id="boost::network::http::server_options::server_options__server_optionsRR"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1aaa73f2c3bfd7541f4a89c9eb3be0f13b" class="target"></span>`server_options`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a>&&<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsERR14server_options" class="headerlink" title="Permalink to this definition">¶</a>  
Move constructor for the options class.

<span id="boost::network::http::server_options::assign-operator__server_optionsRR"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a0fcba71831c2a2bcdf6337534abe9afd" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`operator=`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a>&&<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_optionsaSERR14server_options" class="headerlink" title="Permalink to this definition">¶</a>  
Move assignment for the options class.

<span id="boost::network::http::server_options::~server_options"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a20ee60d6d7468be2e49b184984a39f15" class="target"></span>`~server_options`<span class="sig-paren">(</span><span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_optionsD0Ev" class="headerlink" title="Permalink to this definition">¶</a>  
Destructor for the options class.

<span id="boost::network::http::server_options::context__std::shared_ptr:ssl_context:"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1afc6ec13db274b337a7067bb657c10a8f" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`context`<span class="sig-paren">(</span>std::shared\_ptr&lt;ssl\_context&gt; *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options7contextENSt10shared_ptrI11ssl_contextEE" class="headerlink" title="Permalink to this definition">¶</a>  
Sets the SSL context for the server. Default is nullptr.

<span id="boost::network::http::server_options::io_service__std::shared_ptr:asio::io_service:"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1ac1b9b3d37160070ce0e4a716a0591998" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`io_service`<span class="sig-paren">(</span>std::shared\_ptr&lt;asio::io\_service&gt; *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options10io_serviceENSt10shared_ptrIN4asio10io_serviceEEE" class="headerlink" title="Permalink to this definition">¶</a>  
Provides an Asio io\_service for the server. Default is nullptr.

<span id="boost::network::http::server_options::address__string_type"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a19ad2b3bebc165f268e6ad9273096e53" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`address`<span class="sig-paren">(</span>string\_type *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options7addressE11string_type" class="headerlink" title="Permalink to this definition">¶</a>  
Sets the address to listen to for the server. Default is localhost.

<span id="boost::network::http::server_options::port__string_typeCR"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a013f7f63ae3497a4d644cb28cfd8be96" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`port`<span class="sig-paren">(</span>string\_type *const* &*v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options4portER11string_type" class="headerlink" title="Permalink to this definition">¶</a>  
Set the port to listen to for the server. Default is 80.

<span id="boost::network::http::server_options::reuse_address__b"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a5420b1d37c24e15d688555e370d41e10" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`reuse_address`<span class="sig-paren">(</span>bool *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options13reuse_addressEb" class="headerlink" title="Permalink to this definition">¶</a>  
Set whether to reuse the address (SO\_REUSE\_ADDR). Default is false.

<span id="boost::network::http::server_options::report_aborted__b"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1aa556226ef13f57eba098e28031201070" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`report_aborted`<span class="sig-paren">(</span>bool *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options14report_abortedEb" class="headerlink" title="Permalink to this definition">¶</a>  
Set whether to report aborted connections. Default is false.

<span id="boost::network::http::server_options::non_blocking_io__b"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1acb8fe8f75308f5aff44243f8a50d8764" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`non_blocking_io`<span class="sig-paren">(</span>bool *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options15non_blocking_ioEb" class="headerlink" title="Permalink to this definition">¶</a>  
Set whether to use non-blocking IO. Default is true.

<span id="boost::network::http::server_options::linger__b"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a40e9a857b04b10237164cf71b6c15b73" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`linger`<span class="sig-paren">(</span>bool *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options6lingerEb" class="headerlink" title="Permalink to this definition">¶</a>  
Set whether sockets linger (SO\_LINGER). Default is true.

<span id="boost::network::http::server_options::linger_timeout__s"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a108484ab86498c54173887b32861cf7f" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`linger_timeout`<span class="sig-paren">(</span>size\_t *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options14linger_timeoutE6size_t" class="headerlink" title="Permalink to this definition">¶</a>  
Set the linger timeout. Default is 0.

<span id="boost::network::http::server_options::receive_buffer_size__asio::socket_base::receive_buffer_size"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a71efee670efa9e4cba556ce8df027ca1" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`receive_buffer_size`<span class="sig-paren">(</span>asio::socket\_base::receive\_buffer\_size *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options19receive_buffer_sizeEN4asio11socket_base19receive_buffer_sizeE" class="headerlink" title="Permalink to this definition">¶</a>  
Set the socket receive buffer size. Unset by default.

<span id="boost::network::http::server_options::send_buffer_size__asio::socket_base::send_buffer_size"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a2a8d88b07101fe17574fc1da9dc9c7ac" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`send_buffer_size`<span class="sig-paren">(</span>asio::socket\_base::send\_buffer\_size *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options16send_buffer_sizeEN4asio11socket_base16send_buffer_sizeE" class="headerlink" title="Permalink to this definition">¶</a>  
Set the send buffer size. Unset by default.

<span id="boost::network::http::server_options::receive_low_watermark__asio::socket_base::receive_low_watermark"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a49557100cb665c40c112cde0af9e19ee" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`receive_low_watermark`<span class="sig-paren">(</span>asio::socket\_base::receive\_low\_watermark *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options21receive_low_watermarkEN4asio11socket_base21receive_low_watermarkE" class="headerlink" title="Permalink to this definition">¶</a>  
Set the socket receive low watermark. Unset by default.

<span id="boost::network::http::server_options::send_low_watermark__asio::socket_base::send_low_watermark"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1ad4d000db7c9f42d9c61fc8c788d8b832" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`send_low_watermark`<span class="sig-paren">(</span>asio::socket\_base::send\_low\_watermark *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options18send_low_watermarkEN4asio11socket_base18send_low_watermarkE" class="headerlink" title="Permalink to this definition">¶</a>  
Set the socket send low watermark. Unset by default.

<span id="boost::network::http::server_options::thread_pool__std::shared_ptr:utils::thread_pool:"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a228ccc0a29ad4ae785119f75682e6ed0" class="target"></span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &`thread_pool`<span class="sig-paren">(</span>std::shared\_ptr&lt;utils::thread\_pool&gt; *v*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options11thread_poolENSt10shared_ptrIN5utils11thread_poolEEE" class="headerlink" title="Permalink to this definition">¶</a>  
Set the thread-pool to use. Default is nullptr.

<span id="boost::network::http::server_options::io_service"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1ad75c89b4b43c83ca4b49ab9b1a680ee0" class="target"></span>std::shared\_ptr&lt;asio::io\_service&gt; `io_service`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options10io_serviceEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns the provided Asio io\_service.

<span id="boost::network::http::server_options::address"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a4580c0b0a27c31b371fcb0318dabb831" class="target"></span>string\_type `address`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options7addressEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns the address to listen on.

<span id="boost::network::http::server_options::port"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a983e7457901b56b74749e537e9628790" class="target"></span>string\_type `port`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options4portEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns the port to listen on.

<span id="boost::network::http::server_options::handler"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1aadeeb4a853489e80f0f0df97350f56c5" class="target"></span>Handler &`handler`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options7handlerEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns a reference to the provided handler.

<span id="boost::network::http::server_options::reuse_address"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1ade26cd4c50c3533db9897222da26cf72" class="target"></span>bool `reuse_address`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options13reuse_addressEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns whether to reuse the address.

<span id="boost::network::http::server_options::report_aborted"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a9cd725f59857166d35ea9b09f96cefa5" class="target"></span>bool `report_aborted`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options14report_abortedEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns whether to report aborted connections.

<span id="boost::network::http::server_options::non_blocking_io"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a89716aacbb765c6fc99120d98743ad3c" class="target"></span>bool `non_blocking_io`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options15non_blocking_ioEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns whether to perform non-blocking IO.

<span id="boost::network::http::server_options::linger"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1ac8f981bf13f92b7d2ef24ee04c6ab797" class="target"></span>bool `linger`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options6lingerEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns whether to linger.

<span id="boost::network::http::server_options::linger_timeout"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a05a6c4fe5caf2636373006ad4f80a837" class="target"></span>size\_t `linger_timeout`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options14linger_timeoutEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns the linger timeout.

<span id="boost::network::http::server_options::receive_buffer_size"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a90fb005458e5bb74d5b5cb330b462a44" class="target"></span>boost::optional&lt;asio::socket\_base::receive\_buffer\_size&gt; `receive_buffer_size`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options19receive_buffer_sizeEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns the optional receive buffer size.

<span id="boost::network::http::server_options::send_buffer_size"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a13d296d0b69f81d6ec8bf2b745eec9ff" class="target"></span>boost::optional&lt;asio::socket\_base::send\_buffer\_size&gt; `send_buffer_size`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options16send_buffer_sizeEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns the optional send buffer size.

<span id="boost::network::http::server_options::receive_low_watermark"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a2278ed6da4e3d861347dfeaccb50e4ba" class="target"></span>boost::optional&lt;asio::socket\_base::receive\_low\_watermark&gt; `receive_low_watermark`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options21receive_low_watermarkEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns the optional receive low watermark.

<span id="boost::network::http::server_options::send_low_watermark"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a38065fc14fc53235c4f2392ea2004080" class="target"></span>boost::optional&lt;asio::socket\_base::send\_low\_watermark&gt; `send_low_watermark`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options18send_low_watermarkEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns the optional send low watermark.

<span id="boost::network::http::server_options::thread_pool"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1ab2bb3645ef3be04b01606b0484599129" class="target"></span>std::shared\_ptr&lt;utils::thread\_pool&gt; `thread_pool`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options11thread_poolEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns a pointer to the provided thread pool.

<span id="boost::network::http::server_options::context"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a7acb5bb27b3fa928500b37192389460c" class="target"></span>std::shared\_ptr&lt;ssl\_context&gt; `context`<span class="sig-paren">(</span><span class="sig-paren">)</span> const<a href="#_CPPv2N5boost7network4http14server_options7contextEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns a pointer to the provided context.

<span id="boost::network::http::server_options::swap__server_optionsR"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server__options_1a194e0cc3d88ffd2bebc843aa4003db3b" class="target"></span>void `swap`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http14server_options14server_optionsER7Handler" class="reference internal" title="boost::network::http::server_options::server_options">server_options</a> &*other*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http14server_options4swapER14server_options" class="headerlink" title="Permalink to this definition">¶</a>  
Swap implementation for the server options.

### Public Members<a href="#public-members" class="headerlink" title="Permalink to this headline">¶</a>

<span id="cppnetlibstructboost_1_1network_1_1http_1_1server" class="target"></span>*template* &lt;*class* Handler&gt;  
<span id="boost::network::http::server"></span>*struct* ``` boost::network::http::``server ```<a href="#_CPPv2N5boost7network4http6serverE" class="headerlink" title="Permalink to this definition">¶</a>  
The main HTTP Server template implementing an asynchronous HTTP service.

Usage Example:

    handler_type handler;
    http_server::options options(handler);
    options.thread_pool(
        std::make_shared<boost::network::utils::thread_pool>());
    http_server server(options.address("localhost").port("8000"));

Inherits from boost::network::http::async\_server\_base&lt; tags::http\_server, Handler &gt;

Public Types

<span id="boost::network::http::server::server_base"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server_1a4e5f2b1783c4e797d7aacffdc9126770" class="target"></span>*typedef* async\_server\_base&lt;tags::http\_server, Handler&gt; `server_base`<a href="#_CPPv2N5boost7network4http6server11server_baseE" class="headerlink" title="Permalink to this definition">¶</a>  
A convenience typedef for the base of this type, implementing most of the internal details.

<span id="boost::network::http::server::options"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1server_1aa7880be8e651d6af16efaff526f37ac7" class="target"></span>*typedef* <a href="#_CPPv2N5boost7network4http14server_optionsE" class="reference internal" title="boost::network::http::server_options">server_options</a>&lt;tags::http\_server, Handler&gt; `options`<a href="#_CPPv2N5boost7network4http6server7optionsE" class="headerlink" title="Permalink to this definition">¶</a>  
The options supported by the server.

<span id="boost::network::http::async_server_base::request"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__server__base_1aa1bd7e517b6fcbb07e39c5260b90131d" class="target"></span>*typedef* basic\_request&lt;tags::http\_server&gt; `request`<a href="#_CPPv2N5boost7network4http17async_server_base7requestE" class="headerlink" title="Permalink to this definition">¶</a>  
The request type for this server.

<span id="boost::network::http::async_server_base::string_type"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__server__base_1a0a882e6c5e76a26efc950c894ef2c145" class="target"></span>*typedef* string&lt;tags::http\_server&gt;::type `string_type`<a href="#_CPPv2N5boost7network4http17async_server_base11string_typeE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_server_base::response_header"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__server__base_1a6e17d4d32a618f4849e85ff1caa8e7c4" class="target"></span>*typedef* boost::network::http::response\_header&lt;tags::http\_server&gt;::type `response_header`<a href="#_CPPv2N5boost7network4http17async_server_base15response_headerE" class="headerlink" title="Permalink to this definition">¶</a>  
The header type for this server.

<span id="boost::network::http::async_server_base::connection"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__server__base_1adb74643848806fae5e8940a300cf1143" class="target"></span>*typedef* <a href="#_CPPv2N5boost7network4http16async_connectionE" class="reference internal" title="boost::network::http::async_connection">async_connection</a>&lt;tags::http\_server, Handler&gt; `connection`<a href="#_CPPv2N5boost7network4http17async_server_base10connectionE" class="headerlink" title="Permalink to this definition">¶</a>  
The connection type for this server.

<span id="boost::network::http::async_server_base::connection_ptr"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__server__base_1aa5d60a85c8e7c6e0efd07a8b6aba8ed1" class="target"></span>*typedef* std::shared\_ptr&lt;<a href="#_CPPv2N5boost7network4http17async_server_base10connectionE" class="reference internal" title="boost::network::http::async_server_base::connection">connection</a>&gt; `connection_ptr`<a href="#_CPPv2N5boost7network4http17async_server_base14connection_ptrE" class="headerlink" title="Permalink to this definition">¶</a>  
Defines the type for the connection pointer.

Public Functions

<span id="boost::network::http::async_server_base::run"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__server__base_1a563d465032ede2e194f6647be88c5ffb" class="target"></span>void `run`<span class="sig-paren">(</span><span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http17async_server_base3runEv" class="headerlink" title="Permalink to this definition">¶</a>  
Listens to the correct port and runs the server’s event loop. This can be run on multiple threads, as in the example below:

Example: handler\_type handler; http\_server::options options(handler); options.thread\_pool( std::make\_shared&lt;boost::network::utils::thread\_pool&gt;()); http\_server server(options.address(“localhost”).port(“8000”));

// Run in three threads including the current thread. std::thread t1(\[&server\] { server.run() }); std::thread t2(\[&server\] { server.run() }); server.run(); t1.join(); t2.join();

<span id="boost::network::http::async_server_base::stop"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__server__base_1a4b88de42b3096338a92e2e0c55c6dea0" class="target"></span>void `stop`<span class="sig-paren">(</span><span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http17async_server_base4stopEv" class="headerlink" title="Permalink to this definition">¶</a>  
Stops the HTTP server acceptor and waits for all pending request handlers to finish.

<span id="boost::network::http::async_server_base::listen"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__server__base_1a4a4ff11175f853eaecf9fd901e85f901" class="target"></span>void `listen`<span class="sig-paren">(</span><span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http17async_server_base6listenEv" class="headerlink" title="Permalink to this definition">¶</a>  
Explicitly listens on the configured host and port. May be called multiple times but only takes effect once.

### Connection Object<a href="#connection-object" class="headerlink" title="Permalink to this headline">¶</a>

<span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection" class="target"></span>*template* &lt;*class* Tag, *class* Handler&gt;  
<span id="boost::network::http::async_connection"></span>*struct* ``` boost::network::http::``async_connection ```<a href="#_CPPv2N5boost7network4http16async_connectionE" class="headerlink" title="Permalink to this definition">¶</a>  
Inherits from std::enable\_shared\_from\_this&lt; async\_connection&lt; Tag, Handler &gt; &gt;

Public Types

<span id="boost::network::http::async_connection::status_t"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3ed" class="target"></span>*enum* `status_t`<a href="#_CPPv2N5boost7network4http16async_connection8status_tE" class="headerlink" title="Permalink to this definition">¶</a>  
The set of known status codes for HTTP server responses.

*Values:*

<span id="boost::network::http::async_connection::ok"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda1083caceea420870157c5aee09d412fa" class="target"></span>`ok` = 200<a href="#_CPPv2N5boost7network4http16async_connection2okE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::created"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda854de7b51c1ac8a15b4f66a01c82363f" class="target"></span>`created` = 201<a href="#_CPPv2N5boost7network4http16async_connection7createdE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::accepted"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3edaaed5c0ab063ea8e8f79e4c8cd3cfac70" class="target"></span>`accepted` = 202<a href="#_CPPv2N5boost7network4http16async_connection8acceptedE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::no_content"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda98dda05b7f976355d2fceb0de289bb29" class="target"></span>`no_content` = 204<a href="#_CPPv2N5boost7network4http16async_connection10no_contentE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::partial_content"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3edaa8ed180697c0aadbec91ad8fd34823a4" class="target"></span>`partial_content` = 206<a href="#_CPPv2N5boost7network4http16async_connection15partial_contentE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::multiple_choices"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda557eeb830f2f03deb38dd0e446d6c247" class="target"></span>`multiple_choices` = 300<a href="#_CPPv2N5boost7network4http16async_connection16multiple_choicesE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::moved_permanently"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3edacfa18818dbf6414fa92b8c9ad7d5a278" class="target"></span>`moved_permanently` = 301<a href="#_CPPv2N5boost7network4http16async_connection17moved_permanentlyE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::moved_temporarily"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda2f4addabfe0b4b44a5d687a3363398b5" class="target"></span>`moved_temporarily` = 302<a href="#_CPPv2N5boost7network4http16async_connection17moved_temporarilyE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::not_modified"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3edabf55ac10b68ef5229bc51c52b805a460" class="target"></span>`not_modified` = 304<a href="#_CPPv2N5boost7network4http16async_connection12not_modifiedE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::bad_request"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda3e550baf02168f757e8f5fe45960313b" class="target"></span>`bad_request` = 400<a href="#_CPPv2N5boost7network4http16async_connection11bad_requestE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::unauthorized"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3edae44b8427a3c71d5689550b69f4fb9721" class="target"></span>`unauthorized` = 401<a href="#_CPPv2N5boost7network4http16async_connection12unauthorizedE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::forbidden"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda991d134964473e55b793004bab665950" class="target"></span>`forbidden` = 403<a href="#_CPPv2N5boost7network4http16async_connection9forbiddenE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::not_found"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3edae265ff1108dccaca109c7639ac668651" class="target"></span>`not_found` = 404<a href="#_CPPv2N5boost7network4http16async_connection9not_foundE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::not_supported"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda83ca89d8e6813c3bf6eedf14b5b92505" class="target"></span>`not_supported` = 405<a href="#_CPPv2N5boost7network4http16async_connection13not_supportedE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::not_acceptable"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda00d37c53db64e07c5ae2de0d360aa929" class="target"></span>`not_acceptable` = 406<a href="#_CPPv2N5boost7network4http16async_connection14not_acceptableE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::request_timeout"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3edacf91665a06c9b6158808d9c8fb9191d5" class="target"></span>`request_timeout` = 408<a href="#_CPPv2N5boost7network4http16async_connection15request_timeoutE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::precondition_failed"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda4256dbcb6dbba5e307c59ce608643cea" class="target"></span>`precondition_failed` = 412<a href="#_CPPv2N5boost7network4http16async_connection19precondition_failedE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::unsatisfiable_range"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda34603321665cccdbe65a09625a3aac8a" class="target"></span>`unsatisfiable_range` = 416<a href="#_CPPv2N5boost7network4http16async_connection19unsatisfiable_rangeE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::internal_server_error"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda9c474588f7b987c762fcac64a9506a76" class="target"></span>`internal_server_error` = 500<a href="#_CPPv2N5boost7network4http16async_connection21internal_server_errorE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::not_implemented"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3edaffdf2a669971c41b6cd2400f16360e8d" class="target"></span>`not_implemented` = 501<a href="#_CPPv2N5boost7network4http16async_connection15not_implementedE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::bad_gateway"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda0c538d7c0b5a79c3e0fe28c33409c316" class="target"></span>`bad_gateway` = 502<a href="#_CPPv2N5boost7network4http16async_connection11bad_gatewayE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::service_unavailable"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda98feb6aef7d9d1096c9af9d36e15e8c7" class="target"></span>`service_unavailable` = 503<a href="#_CPPv2N5boost7network4http16async_connection19service_unavailableE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::space_unavailable"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a6e0311ff1c74e9b3d0278738a721e3eda13fe0d3cb21095cbe6d27ae1792f182d" class="target"></span>`space_unavailable` = 507<a href="#_CPPv2N5boost7network4http16async_connection17space_unavailableE" class="headerlink" title="Permalink to this definition">¶</a>

<span id="boost::network::http::async_connection::connection_ptr"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1ac70117f7bd7af5d07abddf29863ad84c" class="target"></span>*typedef* std::shared\_ptr&lt;<a href="#_CPPv2N5boost7network4http16async_connectionE" class="reference internal" title="boost::network::http::async_connection">async_connection</a>&gt; `connection_ptr`<a href="#_CPPv2N5boost7network4http16async_connection14connection_ptrE" class="headerlink" title="Permalink to this definition">¶</a>  
The connection pointer type.

<span id="boost::network::http::async_connection::input_range"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a576ba8888c4152529c235a8dab8b5da4" class="target"></span>*typedef* iterator\_range&lt;buffer\_type::const\_iterator&gt; `input_range`<a href="#_CPPv2N5boost7network4http16async_connection11input_rangeE" class="headerlink" title="Permalink to this definition">¶</a>  
The input range taken by `read` callbacks. Typically a range of `char`s.

<span id="boost::network::http::async_connection::read_callback_function"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1ac2c0d82bd4219924fc5d4f8c673dd89a" class="target"></span>*typedef* std::function&lt;void<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http16async_connection11input_rangeE" class="reference internal" title="boost::network::http::async_connection::input_range">input_range</a>, std::error\_code, std::size\_t, <a href="#_CPPv2N5boost7network4http16async_connection14connection_ptrE" class="reference internal" title="boost::network::http::async_connection::connection_ptr">connection_ptr</a><span class="sig-paren">)</span>&gt; `read_callback_function`<a href="#_CPPv2N5boost7network4http16async_connection22read_callback_functionE" class="headerlink" title="Permalink to this definition">¶</a>  
Type required for `read` callbacks. Takes an input range, an error code, the number of bytes read, and a connection pointer.

Public Functions

*template* &lt;*class* Range&gt;  
<span id="boost::network::http::async_connection::set_headers__Range"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a487c70a079c736b8469032ad5e1dabd2" class="target"></span>void `set_headers`<span class="sig-paren">(</span>Range *headers*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http16async_connection11set_headersE5Range" class="headerlink" title="Permalink to this definition">¶</a>  
A call to set\_headers takes a Range where each element models the Header concept. This Range will be linearized onto a buffer, which is then sent as soon as the first call to `write` or `flush` commences.

**Pre**  
Headers have not been sent yet.

**Post**  
Headers have been linearized to a buffer, and assumed to have been sent already when the function exits.

**Parameters**  
- `headers` -

    A range of Header objects to write out.

**Exceptions**  
- `std::logic_error` -

    when the precondition is violated.

<span id="boost::network::http::async_connection::set_status__status_t"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1abacc8b9cfa159ad40b955bb5d1e2fa16" class="target"></span>void `set_status`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http16async_connection8status_tE" class="reference internal" title="boost::network::http::async_connection::status_t">status_t</a> *new\_status*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http16async_connection10set_statusE8status_t" class="headerlink" title="Permalink to this definition">¶</a>  
Sets the status of the response.

**Pre**  
Headers have not been sent.

**Post**  
Status is set on the response.

**Parameters**  
- `new_status` -

    The new status for this response.

**Exceptions**  
- `std::logic_error` -

    when the precondition is violated.

*template* &lt;*class* Range&gt;  
<span id="boost::network::http::async_connection::write__RangeCR"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1afcee98fa25e64164a1570da0ed8447e8" class="target"></span>void `write`<span class="sig-paren">(</span>Range *const* &*range*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http16async_connection5writeER5Range" class="headerlink" title="Permalink to this definition">¶</a>  
Writes a given range of bytes out in order.

Even though this function looks synchronous, all it does is schedules asynchronous writes to the connection as soon as the range is serialised into appropriately sized buffers.

To use in your handler, it would look like:

Example:

    connection->write("Hello, world!\n");
    std::string sample = "I have a string!";
    connection->write(sample);

Note that if you want to send custom status and headers, you MUST call set\_status and/or set\_headers before any calls to write.

**Post**  
Status and headers have been sent, contents in the range have been serialized.

**Parameters**  
- `range` -

    A Boost.Range `Single Pass Range` of char’s for writing.

**Exceptions**  
- `std::system_error` -

    The encountered underlying error in previous operations.

*template* &lt;*class* Range, *class* Callback&gt;  
<span id="boost::network::http::async_connection::write__RangeCR.CallbackCR"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a76ff807e8802e5297462057e5d619f50" class="target"></span>disable\_if&lt;is\_base\_of&lt;asio::const\_buffer, *typename* Range::value\_type&gt;, void&gt;::type `write`<span class="sig-paren">(</span>Range *const* &*range*, Callback *const* &*callback*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http16async_connection5writeER5RangeR8Callback" class="headerlink" title="Permalink to this definition">¶</a>  
Writes a given range out and schedules a completion callback to be invoked when the writes are done. This works similarly to write above.

This overload is useful for writing streaming applications that send out chunks of data at a time, or for writing data that may not all fit in memory at once.

**Post**  
Status and headers have been sent, contents in the range have been serialized and scheduled for writing through the socket.

**Parameters**  
- `range` -

    A Boost.Range `Single Pass Range` of char’s for writing.

-   `callback` -

    A function of type `void(std::error_code)`.

**Exceptions**  
- `std::system_error` -

    The encountered underlying error in previous operations.

*template* &lt;*class* ConstBufferSeq, *class* Callback&gt;  
<span id="boost::network::http::async_connection::write__ConstBufferSeqCR.CallbackCR"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1afa1f4657a1664e67618c25c0fcb484ec" class="target"></span>enable\_if&lt;is\_base\_of&lt;asio::const\_buffer, *typename* ConstBufferSeq::value\_type&gt;, void&gt;::type `write`<span class="sig-paren">(</span>ConstBufferSeq *const* &*seq*, Callback *const* &*callback*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http16async_connection5writeER14ConstBufferSeqR8Callback" class="headerlink" title="Permalink to this definition">¶</a>  
Writes a given set of `asio::const_buffer`s out using a more efficient implementation.

**Parameters**  
- `seq` -

    A sequence of `asio::const_buffer` objects.

-   `callback` -

    A function of type `void(std::error_code)`.

<span id="boost::network::http::async_connection::read__read_callback_function"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1aa37ecedf061f0cbb25b158918b112e34" class="target"></span>void `read`<span class="sig-paren">(</span><a href="#_CPPv2N5boost7network4http16async_connection22read_callback_functionE" class="reference internal" title="boost::network::http::async_connection::read_callback_function">read_callback_function</a> *callback*<span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http16async_connection4readE22read_callback_function" class="headerlink" title="Permalink to this definition">¶</a>  
Schedules an asynchronous read from the connection. This is generally useful for handling POST/PUT or other requests that may have data coming in through the HTTP request’s body in a streaming manner.

To use this function, the caller needs to provide a callback that handles a chunk of data at a time. The signature of the function (lambda or actual function pointer) should be of the following form:

    void(input_range, error_code, size_t, connection_ptr)

**Parameters**  
- `callback` -

    Invoked when the read has data ready for processing.

**Exceptions**  
- `std::system_error` -

    The underlying error encountered in previous operations.

<span id="boost::network::http::async_connection::socket"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a41131ae961524e54f450dd0b7a0a6615" class="target"></span>boost::network::stream\_handler &`socket`<span class="sig-paren">(</span><span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http16async_connection6socketEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns a reference to the underlying socket.

<span id="boost::network::http::async_connection::thread_pool"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a514951b24c7ea036d2c2125cb3f7eb03" class="target"></span>utils::thread\_pool &`thread_pool`<span class="sig-paren">(</span><span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http16async_connection11thread_poolEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns a reference to the thread\_pool running this handler.

<span id="boost::network::http::async_connection::has_error"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a42972c58a62eb4412f4daf8bdf482a5d" class="target"></span>bool `has_error`<span class="sig-paren">(</span><span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http16async_connection9has_errorEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns whether or not there were errors encountered in previous operations.

<span id="boost::network::http::async_connection::error"></span><span id="cppnetlibstructboost_1_1network_1_1http_1_1async__connection_1a0bd241fd109c6534dfbf073d8bd7988e" class="target"></span>optional&lt;std::system\_error&gt; `error`<span class="sig-paren">(</span><span class="sig-paren">)</span><a href="#_CPPv2N5boost7network4http16async_connection5errorEv" class="headerlink" title="Permalink to this definition">¶</a>  
Returns the most recent error encountered.

Adding SSL support to the HTTP Server<a href="#adding-ssl-support-to-the-http-server" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------------------------------------------------------

In order to setup SSL support for an Asynchronous Server, it is best to start from a regular Asynchronous Server (see above). Once this server is setup, SSL can be enabled by adding a <a href="http://www.boost.org/doc/libs/1_55_0/doc/html/boost_asio/reference/ssl__context.html" class="reference external">Boost.Asio.Ssl.Context</a> to the options. The settings that can be used are defined in the link.

    // Initialize SSL context
    std::shared_ptr<asio::ssl::context> ctx =
        std::make_shared<asio::ssl::context>(asio::ssl::context::sslv23);
    ctx->set_options(
                asio::ssl::context::default_workarounds
                | asio::ssl::context::no_sslv3
                | asio::ssl::context::single_dh_use);

    // Set keys
    ctx->set_password_callback(password_callback);
    ctx->use_certificate_chain_file("server.pem");
    ctx->use_private_key_file("server.pem", asio::ssl::context::pem);
    ctx->use_tmp_dh_file("dh512.pem");

    handler_type handler;
    http_server::options options(handler);
    options.thread_pool(std::make_shared<boost::network::utils::thread_pool>(2));
    http_server server(options.address("127.0.0.1").port("8442").context(ctx));

    std::string password_callback(std::size_t max_length, asio::ssl::context_base::password_purpose purpose) {
        return std::string("test");
    }

### [Table Of Contents](../contents.html)

-   <a href="#" class="reference internal">HTTP Server API</a>
    -   <a href="#general" class="reference internal">General</a>
    -   <a href="#api-documentation" class="reference internal">API Documentation</a>
        -   <a href="#constructor" class="reference internal">Constructor</a>
        -   <a href="#server-options" class="reference internal">Server Options</a>
        -   <a href="#public-members" class="reference internal">Public Members</a>
        -   <a href="#connection-object" class="reference internal">Connection Object</a>
    -   <a href="#adding-ssl-support-to-the-http-server" class="reference internal">Adding SSL support to the HTTP Server</a>

#### Previous topic

[HTTP Response](http_response.html "previous chapter")

#### Next topic

[References](../references.html "next chapter")

### Quick search

Enter search terms or a module, class or function name.

### Navigation

-   [next](../references.html "References")
-   [previous](http_response.html "HTTP Response") |
-   [cpp-netlib v0.11.2](../contents.html) »
-   [Reference Manual](../reference.html) »

© Copyright 2008-2014, Glyn Matthews, Dean Michael Berris; 2013 Google, Inc.. Last updated on Mar 29, 2016. Created using [Sphinx](http://sphinx-doc.org/) 1.3.6.
