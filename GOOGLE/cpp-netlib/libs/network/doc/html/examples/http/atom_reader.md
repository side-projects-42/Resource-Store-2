### Navigation

-   [next](twitter_search.html "Twitter search")
-   [previous](hello_world_client.html "“Hello world” HTTP client") |
-   [cpp-netlib v0.11.2](../../contents.html) »
-   [Examples](../../examples.html) »

<span id="atom-reader"></span>

Atom feed reader<a href="#atom-feed-reader" class="headerlink" title="Permalink to this headline">¶</a>
=======================================================================================================

The next examples show some simple, more practical applications using the HTTP client. The first one reads a simple <a href="http://en.wikipedia.org/wiki/Atom_(standard)" class="reference external">Atom</a> feed and prints the titles of each entry to the console.

The code<a href="#the-code" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------

    #include "atom.hpp"
    #include <boost/network/protocol/http/client.hpp>
    #include <boost/foreach.hpp>
    #include <iostream>

    int main(int argc, char * argv[]) {
        using namespace boost::network;

        if (argc != 2) {
            std::cout << "Usage: " << argv[0] << " <url>" << std::endl;
            return 1;
        }

        try {
            http::client client;
            http::client::request request(argv[1]);
            request << header("Connection", "close");
            http::client::response response = client.get(request);
            atom::feed feed(response);

            std::cout << "Feed: " << feed.title()
                      << " (" << feed.subtitle() << ")" << std::endl;
            BOOST_FOREACH(const atom::entry &entry, feed) {
                std::cout << entry.title()
                          << " (" << entry.published() << ")" << std::endl;
            }
        }
        catch (std::exception &e) {
            std::cerr << e.what() << std::endl;
        }

        return 0;
    }

Building and running `atom_reader`<a href="#building-and-running-atom-reader" class="headerlink" title="Permalink to this headline">¶</a>
-----------------------------------------------------------------------------------------------------------------------------------------

    $ cd ~/cpp-netlib-build
    $ make atom_reader

And to run the example from the command line to access the feed that lists of all the commits on cpp-netlib’s master branch:

    $ ./example/atom_reader https://github.com/cpp-netlib/cpp-netlib/commits/master.atom

Diving into the code<a href="#diving-into-the-code" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------------------------------

Most of this will now be familiar. The response is passed to the constructor to the `atom::feed` class, which parses the resultant XML. To keep this example as simple as possible, <a href="http://rapidxml.sourceforge.net/" class="reference external">rapidxml</a>, a header-only XML parser library, was used to parse the response.

A similar example using RSS feeds exists in `libs/network/example/rss`.

### [Table Of Contents](../../contents.html)

-   <a href="#" class="reference internal">Atom feed reader</a>
    -   <a href="#the-code" class="reference internal">The code</a>
    -   <a href="#building-and-running-atom-reader" class="reference internal">Building and running <code class="docutils literal">atom_reader</code></a>
    -   <a href="#diving-into-the-code" class="reference internal">Diving into the code</a>

#### Previous topic

[“Hello world” HTTP client](hello_world_client.html "previous chapter")

#### Next topic

[Twitter search](twitter_search.html "next chapter")

### Quick search

Enter search terms or a module, class or function name.

### Navigation

-   [next](twitter_search.html "Twitter search")
-   [previous](hello_world_client.html "“Hello world” HTTP client") |
-   [cpp-netlib v0.11.2](../../contents.html) »
-   [Examples](../../examples.html) »

© Copyright 2008-2014, Glyn Matthews, Dean Michael Berris; 2013 Google, Inc.. Last updated on Mar 29, 2016. Created using [Sphinx](http://sphinx-doc.org/) 1.3.6.
