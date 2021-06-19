### Navigation

-   [next](whats_new.html "What’s New")
-   [previous](contents.html "Contents") |
-   [cpp-netlib v0.11.2](contents.html) »

Straightforward network programming in modern C++

Getting cpp-netlib<a href="#getting-cpp-netlib" class="headerlink" title="Permalink to this headline">¶</a>
===========================================================================================================

You can find out more about the `cpp-netlib` project at <a href="http://cpp-netlib.org/" class="reference external">http://cpp-netlib.org/</a>.

**Download**

You can get the latest official version of the library from the official project website at:

> <a href="http://cpp-netlib.org/" class="reference external">http://cpp-netlib.org/</a>

This version of `cpp-netlib` is tagged as cpp-netlib-0.11.0 in the <a href="http://github.com/" class="reference external">GitHub</a> repository. You can find more information about the progress of the development by checking our <a href="http://github.com/" class="reference external">GitHub</a> project page at:

> <a href="http://github.com/cpp-netlib/cpp-netlib" class="reference external">http://github.com/cpp-netlib/cpp-netlib</a>

**Support**

You can ask questions, join the discussion, and report issues to the developers mailing list by joining via:

> <a href="https://groups.google.com/group/cpp-netlib" class="reference external">https://groups.google.com/group/cpp-netlib</a>

You can also file issues on the <a href="http://github.com/" class="reference external">Github</a> issue tracker at:

> <a href="http://github.com/cpp-netlib/cpp-netlib/issues" class="reference external">http://github.com/cpp-netlib/cpp-netlib/issues</a>

We are a growing community and we are happy to accept new contributions and ideas.

C++ Network Library<a href="#c-network-library" class="headerlink" title="Permalink to this headline">¶</a>
===========================================================================================================

`cpp-netlib` is a library collection that provides application layer protocol support using modern C++ techniques. It is light-weight, fast, portable and is intended to be as easy to configure as possible.

Hello, world!<a href="#hello-world" class="headerlink" title="Permalink to this headline">¶</a>
===============================================================================================

The `cpp-netlib` allows developers to write fast, portable network applications with the minimum of fuss.

An HTTP server-client example can be written in tens of lines of code. The client is as simple as this:

    using namespace boost::network;
    using namespace boost::network::http;

    client::request request_("http://127.0.0.1:8000/");
    request_ << header("Connection", "close");
    client client_;
    client::response response_ = client_.get(request_);
    std::string body_ = body(response_);

And the corresponding server code is listed below:

    namespace http = boost::network::http;

    struct handler;
    typedef http::server<handler> http_server;

    struct handler {
        void operator() (http_server::request const &request,
                         http_server::response &response) {
            response = http_server::response::stock_reply(
                http_server::response::ok, "Hello, world!");
        }

        void log(http_server::string_type const &info) {
            std::cerr << "ERROR: " << info << '\n';
        }
    };

    int main(int arg, char * argv[]) {
        handler handler_;
        http_server::options options(handler_);
        http_server server_(
            options.address("0.0.0.0")
                   .port("8000"));
        server_.run();
    }

Want to learn more?<a href="#want-to-learn-more" class="headerlink" title="Permalink to this headline">¶</a>
============================================================================================================

> -   <a href="getting_started.html#getting-started" class="reference internal"><span>Take a look at the getting started guide</span></a>
> -   <a href="examples.html#examples" class="reference internal"><span>Learn from some simple examples</span></a>
> -   <a href="whats_new.html#whats-new" class="reference internal"><span>Find out what’s new</span></a>
> -   <a href="reference.html#reference" class="reference internal"><span>Discover more through the full reference</span></a>
> -   <a href="contents.html#contents" class="reference internal"><span>Full table of contents</span></a>

Warning

Be aware that not all features are stable. The generic message design is under review and the URI and HTTP client implementation will continue to undergo refactoring. Future versions will include support for other network protocols.

### [Table Of Contents](contents.html)

-   <a href="#" class="reference internal">Getting cpp-netlib</a>
-   <a href="#c-network-library" class="reference internal">C++ Network Library</a>
-   <a href="#hello-world" class="reference internal">Hello, world!</a>
-   <a href="#want-to-learn-more" class="reference internal">Want to learn more?</a>

#### Previous topic

[Contents](contents.html "previous chapter")

#### Next topic

[What’s New](whats_new.html "next chapter")

### Quick search

Enter search terms or a module, class or function name.

### Navigation

-   [next](whats_new.html "What’s New")
-   [previous](contents.html "Contents") |
-   [cpp-netlib v0.11.2](contents.html) »

© Copyright 2008-2014, Glyn Matthews, Dean Michael Berris; 2013 Google, Inc.. Last updated on Mar 29, 2016. Created using [Sphinx](http://sphinx-doc.org/) 1.3.6.
