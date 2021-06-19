### Navigation

-   [next](atom_reader.html "Atom feed reader")
-   [previous](hello_world_server.html "“Hello world” HTTP server") |
-   [cpp-netlib v0.11.2](../../contents.html) »
-   [Examples](../../examples.html) »

<span id="id1"></span>

“Hello world” HTTP client<a href="#hello-world-http-client" class="headerlink" title="Permalink to this headline">¶</a>
=======================================================================================================================

Since we have a “Hello World” HTTP server, let’s then create an HTTP client to access that server. This client will be similar to the HTTP client we made earlier in the documentation.

The code<a href="#the-code" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------

We want to create a simple HTTP client that just makes a request to the HTTP server that we created earlier. This really simple client will look like this:

    #include <boost/network/protocol/http/client.hpp>
    #include <string>
    #include <sstream>
    #include <iostream>

    namespace http = boost::network::http;

    int main(int argc, char * argv[]) {
        if (argc != 3) {
            std::cerr << "Usage: " << argv[0] << " address port" << std::endl;
            return 1;
        }

        try {
            http::client client;
            std::ostringstream url;
            url << "http://" << argv[1] << ":" << argv[2] << "/";
            http::client::request request(url.str());
            http::client::response response =
                client.get(request);
            std::cout << body(response) << std::endl;
        } catch (std::exception & e) {
            std::cerr << e.what() << std::endl;
            return 1;
        }
        return 0;
    }

Building and running the client<a href="#building-and-running-the-client" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------------------------------------------

Just like with the HTTP Server and HTTP client example before, we can build this example by doing the following on the shell:

    $ cd ~/cpp-netlib-build
    $ make hello_world_client

This example can be run from the command line as follows:

    $ ./example/hello_world_client http://127.0.0.1:8000

Note

This assumes that you have the `hello_world_server` running on localhost port 8000.

Diving into the code<a href="#diving-into-the-code" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------------------------------

All this example shows is how easy it is to write an HTTP client that connects to an HTTP server, and gets the body of the response. The relevant lines are:

    http::client client;
    http::client::request request(url.str());
    http::client::response response =
        client.get(request);
    std::cout << body(response) << std::endl;

You can then imagine using this in an XML-RPC client, where you can craft the XML-RPC request as payload which you can pass as the body to a request, then perform the request via HTTP:

    http::client client;
    http::client::request request("http://my.webservice.com/");
    http::client::response =
        client.post(request, some_xml_string, "application/xml");
    std::data = body(response);

The next set of examples show some more practical applications using the `cpp-netlib` HTTP client.

### [Table Of Contents](../../contents.html)

-   <a href="#" class="reference internal">“Hello world” HTTP client</a>
    -   <a href="#the-code" class="reference internal">The code</a>
    -   <a href="#building-and-running-the-client" class="reference internal">Building and running the client</a>
    -   <a href="#diving-into-the-code" class="reference internal">Diving into the code</a>

#### Previous topic

[“Hello world” HTTP server](hello_world_server.html "previous chapter")

#### Next topic

[Atom feed reader](atom_reader.html "next chapter")

### Quick search

Enter search terms or a module, class or function name.

### Navigation

-   [next](atom_reader.html "Atom feed reader")
-   [previous](hello_world_server.html "“Hello world” HTTP server") |
-   [cpp-netlib v0.11.2](../../contents.html) »
-   [Examples](../../examples.html) »

© Copyright 2008-2014, Glyn Matthews, Dean Michael Berris; 2013 Google, Inc.. Last updated on Mar 29, 2016. Created using [Sphinx](http://sphinx-doc.org/) 1.3.6.
