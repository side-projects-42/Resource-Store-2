### Navigation

-   [next](simple_wget.html "Simple wget")
-   [previous](../../examples.html "Examples") |
-   [cpp-netlib v0.11.2](../../contents.html) »
-   [Examples](../../examples.html) »

<span id="id1"></span>

HTTP client<a href="#http-client" class="headerlink" title="Permalink to this headline">¶</a>
=============================================================================================

The first code example is the simplest thing you can do with the `cpp-netlib`. The application is a simple HTTP client, which can be found in the subdirectory `libs/network/example/http_client.cpp`. All this example doing is creating and sending an HTTP request to a server and printing the response body.

The code<a href="#the-code" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------

Without further ado, the code to do this is as follows:

    #include <boost/network/protocol/http/client.hpp>
    #include <iostream>

    int main(int argc, char *argv[]) {
        using namespace boost::network;

        if (argc != 2) {
            std::cout << "Usage: " << argv[0] << " [url]" << std::endl;
            return 1;
        }

        http::client client;
        http::client::request request(argv[1]);
        request << header("Connection", "close");
        http::client::response response = client.get(request);
        std::cout << body(response) << std::endl;

        return 0;
    }

Running the example<a href="#running-the-example" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------------------

You can then run this to get the <a href="http://www.boost.org/" class="reference external">Boost</a> website:

    $ cd ~/cpp-netlib-build
    $ make http_client
    $ ./example/http_client http://www.boost.org/

Note

The instructions for all these examples assume that `cpp-netlib` is build outside the source tree, according to <a href="http://www.cmake.org/Wiki/CMake_FAQ#What_is_an_.22out-of-source.22_build.3F" class="reference external">CMake conventions</a>. For the sake of consistency we assume that this is in the `~/cpp-netlib-build` directory.

Diving into the code<a href="#diving-into-the-code" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------------------------------

Since this is the first example, each line will be presented and explained in detail.

    #include <boost/network/protocol/http/client.hpp>

All the code needed for the HTTP client resides in this header.

    http::client client;

First we create a `client` object. The `client` abstracts all the connection and protocol logic. The default HTTP client is version 1.1, as specified in <a href="http://www.w3.org/Protocols/rfc2616/rfc2616.html" class="reference external">RFC 2616</a>.

    http::client::request request(argv[1]);

Next, we create a `request` object, with a URI string passed as a constructor argument.

    request << header("Connection", "close");

`cpp-netlib` makes use of stream syntax and *directives* to allow developers to build complex message structures with greater flexibility and clarity. Here, we add the HTTP header “Connection: close” to the request in order to signal that the connection will be closed after the request has completed.

    http::client::response response = client.get(request);

Once we’ve built the request, we then make an HTTP GET request throught the `http::client` from which an `http::response` is returned. `http::client` supports all common HTTP methods: GET, POST, HEAD, DELETE.

    std::cout << body(response) << std::endl;

Finally, though we don’t do any error checking, the response body is printed to the console using the `body` directive.

That’s all there is to the HTTP client. In fact, it’s possible to compress this to a single line:

    std::cout << body(http::client().get(http::request("http://www.boost.org/")));

The next example will introduce the `uri` class.

### [Table Of Contents](../../contents.html)

-   <a href="#" class="reference internal">HTTP client</a>
    -   <a href="#the-code" class="reference internal">The code</a>
    -   <a href="#running-the-example" class="reference internal">Running the example</a>
    -   <a href="#diving-into-the-code" class="reference internal">Diving into the code</a>

#### Previous topic

[Examples](../../examples.html "previous chapter")

#### Next topic

[Simple wget](simple_wget.html "next chapter")

### Quick search

Enter search terms or a module, class or function name.

### Navigation

-   [next](simple_wget.html "Simple wget")
-   [previous](../../examples.html "Examples") |
-   [cpp-netlib v0.11.2](../../contents.html) »
-   [Examples](../../examples.html) »

© Copyright 2008-2014, Glyn Matthews, Dean Michael Berris; 2013 Google, Inc.. Last updated on Mar 29, 2016. Created using [Sphinx](http://sphinx-doc.org/) 1.3.6.
