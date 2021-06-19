### Navigation

-   [next](hello_world_client.html "“Hello world” HTTP client")
-   [previous](simple_wget.html "Simple wget") |
-   [cpp-netlib v0.11.2](../../contents.html) »
-   [Examples](../../examples.html) »

<span id="id1"></span>

“Hello world” HTTP server<a href="#hello-world-http-server" class="headerlink" title="Permalink to this headline">¶</a>
=======================================================================================================================

Now that we’ve seen how we can deal with request and response objects from the client side, we’ll see how we can then use the same abstractions on the server side. In this example we’re going to create a simple HTTP Server in C++ using `cpp-netlib`.

The code<a href="#the-code" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------

The `cpp-netlib` provides the framework to develop embedded HTTP servers. For this example, the server is configured to return a simple response to any HTTP request.

    #include <boost/network/protocol/http/server.hpp>
    #include <iostream>

    namespace http = boost::network::http;

    struct hello_world;
    typedef http::server<hello_world> server;

    struct hello_world {
        void operator()(server::request const &request, server::response &response) {
            server::string_type ip = source(request);
            unsigned int port = request.source_port;
            std::ostringstream data;
            data << "Hello, " << ip << ':' << port << '!';
            response = server::response::stock_reply(server::response::ok, data.str());
        }
        void log(const server::string_type& message) {
            std::cerr << "ERROR: " << message << std::endl;
        }
    };

    int main(int argc, char *argv[]) {

        if (argc != 3) {
            std::cerr << "Usage: " << argv[0] << " address port" << std::endl;
            return 1;
        }

        try {
            hello_world handler;
            server::options options(handler);
            server server_(options.address(argv[1]).port(argv[2]));
            server_.run();
        }
        catch (std::exception &e) {
            std::cerr << e.what() << std::endl;
            return 1;
        }

        return 0;
    }

This is about a straightforward as server programming will get in C++.

Building and running the server<a href="#building-and-running-the-server" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------------------------------------------

Just like with the HTTP client, we can build this example by doing the following on the shell:

    $ cd ~/cpp-netlib-build
    $ make hello_world_server

The first two arguments to the `server` constructor are the host and the port on which the server will listen. The third argument is the the handler object defined previously. This example can be run from a command line as follows:

    $ ./example/hello_world_server 0.0.0.0 8000

Note

If you’re going to run the server on port 80, you may have to run it as an administrator.

Diving into the code<a href="#diving-into-the-code" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------------------------------

Let’s take a look at the code listing above in greater detail.

    #include <boost/network/protocol/http/server.hpp>

This header contains all the code needed to develop an HTTP server with `cpp-netlib`.

    struct hello_world;
    typedef http::server<hello_world> server;

    struct hello_world {
        void operator()(server::request const &request, server::response &response) {
            server::string_type ip = source(request);
            unsigned int port = request.source_port;
            std::ostringstream data;
            data << "Hello, " << ip << ':' << port << '!';
            response = server::response::stock_reply(server::response::ok, data.str());
        }
        void log(const server::string_type& message) {
            std::cerr << "ERROR: " << message << std::endl;
        }
    };

`hello_world` is a functor class which handles HTTP requests. All the operator does here is return an HTTP response with HTTP code 200 and the body `"Hello,                     <ip>:<port>!"`. The `<ip>` in this case would be the IP address of the client that made the request and `<port>` the clients port.

There are a number of pre-defined stock replies differentiated by status code with configurable bodies. All the supported enumeration values for the response status codes can be found in `boost/network/protocol/http/impl/response.ipp`.

    hello_world handler;
    server::options options(handler);
    server server_(options.address(argv[1]).port(argv[2]));
    server_.run();

The `server` constructor requires an object of the `options` class, this object stores all needed options, especially the host and the port on which the server will listen. The `options` constructor’s single argument is the handler object defined previously.

Note

In this example, the server is specifically made to be single-threaded. In a multi-threaded server, you would invoke the `hello_world::run` member method in a set of threads. In a multi-threaded environment you would also make sure that the handler does all the necessary synchronization for shared resources across threads. The handler is passed by reference to the server constructor and you should ensure that any calls to the `operator()` overload are thread-safe.

### [Table Of Contents](../../contents.html)

-   <a href="#" class="reference internal">“Hello world” HTTP server</a>
    -   <a href="#the-code" class="reference internal">The code</a>
    -   <a href="#building-and-running-the-server" class="reference internal">Building and running the server</a>
    -   <a href="#diving-into-the-code" class="reference internal">Diving into the code</a>

#### Previous topic

[Simple wget](simple_wget.html "previous chapter")

#### Next topic

[“Hello world” HTTP client](hello_world_client.html "next chapter")

### Quick search

Enter search terms or a module, class or function name.

### Navigation

-   [next](hello_world_client.html "“Hello world” HTTP client")
-   [previous](simple_wget.html "Simple wget") |
-   [cpp-netlib v0.11.2](../../contents.html) »
-   [Examples](../../examples.html) »

© Copyright 2008-2014, Glyn Matthews, Dean Michael Berris; 2013 Google, Inc.. Last updated on Mar 29, 2016. Created using [Sphinx](http://sphinx-doc.org/) 1.3.6.
