### Navigation

-   [next](hello_world_server.html "“Hello world” HTTP server")
-   [previous](http_client.html "HTTP client") |
-   [cpp-netlib v0.11.2](../../contents.html) »
-   [Examples](../../examples.html) »

<span id="id1"></span>

Simple wget<a href="#simple-wget" class="headerlink" title="Permalink to this headline">¶</a>
=============================================================================================

This example is a very simple implementation of a `wget` style clone. It’s very similar to the previous example, but introduces the `uri` class.

The code<a href="#the-code" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------

    #include <boost/network/protocol/http/client.hpp>
    #include <boost/network/uri.hpp>
    #include <string>
    #include <fstream>
    #include <iostream>

    namespace http = boost::network::http;
    namespace uri = boost::network::uri;

    namespace {
    std::string get_filename(const uri::uri &url) {
        std::string path = uri::path(url);
        std::size_t index = path.find_last_of('/');
        std::string filename = path.substr(index + 1);
        return filename.empty()? "index.html" : filename;
    }
    } // namespace

    int
    main(int argc, char *argv[]) {
        if (argc != 2) {
            std::cerr << "Usage: " << argv[0] << " url" << std::endl;
            return 1;
        }

        try {
            http::client client;
            http::client::request request(argv[1]);
            http::client::response response = client.get(request);

            std::string filename = get_filename(request.uri());
            std::cout << "Saving to: " << filename << std::endl;
            std::ofstream ofs(filename.c_str());
            ofs << static_cast<std::string>(body(response)) << std::endl;
        }
        catch (std::exception &e) {
            std::cerr << e.what() << std::endl;
            return 1;
        }

        return 0;
    }

Running the example<a href="#running-the-example" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------------------

You can then run this to copy the <a href="http://www.boost.org/" class="reference external">Boost</a> website:

    $ cd ~/cpp-netlib-build
    $ make simple_wget
    $ ./example/simple_wget http://www.boost.org/
    $ cat index.html

Diving into the code<a href="#diving-into-the-code" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------------------------------

As with `wget`, this example simply makes an HTTP request to the specified resource, and saves it on the filesystem. If the file name is not specified, it names the resultant file as `index.html`.

The new thing to note here is use of the `uri` class. The `uri` takes a string as a constructor argument and parses it. The `uri` parser is fully-compliant with <a href="http://www.ietf.org/rfc/rfc3986.txt" class="reference external">RFC 3986</a>. The URI is provided in the following header:

    #include <boost/network/uri.hpp>

Most of the rest of the code is familiar from the previous example. To retrieve the URI resource’s file name, the following function is provided:

    std::string get_filename(const uri::uri &url) {
        std::string path = uri::path(url);
        std::size_t index = path.find_last_of('/');
        std::string filename = path.substr(index + 1);
        return filename.empty()? "index.html" : filename;
    }

The `uri` interface provides access to its different components: `scheme`, `user_info`, `host`, `port`, `path`, `query` and `fragment`. The code above takes the URI path to determine the resource name.

Next we’ll develop a simple client/server application using `http::server` and `http::client`.

### [Table Of Contents](../../contents.html)

-   <a href="#" class="reference internal">Simple wget</a>
    -   <a href="#the-code" class="reference internal">The code</a>
    -   <a href="#running-the-example" class="reference internal">Running the example</a>
    -   <a href="#diving-into-the-code" class="reference internal">Diving into the code</a>

#### Previous topic

[HTTP client](http_client.html "previous chapter")

#### Next topic

[“Hello world” HTTP server](hello_world_server.html "next chapter")

### Quick search

Enter search terms or a module, class or function name.

### Navigation

-   [next](hello_world_server.html "“Hello world” HTTP server")
-   [previous](http_client.html "HTTP client") |
-   [cpp-netlib v0.11.2](../../contents.html) »
-   [Examples](../../examples.html) »

© Copyright 2008-2014, Glyn Matthews, Dean Michael Berris; 2013 Google, Inc.. Last updated on Mar 29, 2016. Created using [Sphinx](http://sphinx-doc.org/) 1.3.6.
