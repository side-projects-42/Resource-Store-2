### Navigation

-   [next](examples.html "Examples")
-   [previous](whats_new.html "What’s New") |
-   [cpp-netlib v0.11.2](contents.html) »

<span id="id1"></span>

Getting Started<a href="#getting-started" class="headerlink" title="Permalink to this headline">¶</a>
=====================================================================================================

Downloading an official release<a href="#downloading-an-official-release" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------------------------------------------

You can find links to the latest official release from the project’s official website:

> <a href="http://cpp-netlib.org/" class="reference external">http://cpp-netlib.org/</a>

All previous stable versions of `cpp-netlib` can be downloaded from <a href="http://github.com/cpp-netlib/cpp-netlib/downloads" class="reference external">Github</a> from this url:

> <a href="http://github.com/cpp-netlib/cpp-netlib/downloads" class="reference external">http://github.com/cpp-netlib/cpp-netlib/downloads</a>

Each release is available as gzipped (Using the command `tar xzf                     cpp-netlib.tar.gz`) or bzipped (Using `tar xjf                     cpp-netlib.tar.bz2`) tarball, or as a zipfile (`unzip                     cpp-netlib.zip`, or on Windows using a tool such as <a href="http://www.7-zip.org/" class="reference external">7zip</a>).

Downloading a development version<a href="#downloading-a-development-version" class="headerlink" title="Permalink to this headline">¶</a>
-----------------------------------------------------------------------------------------------------------------------------------------

The `cpp-netlib` uses <a href="http://git-scm.com/" class="reference external">Git</a> for source control, so to use any development versions Git must be installed on your system.

Using the command line, the command to get the latest code is:

    shell$ git clone git://github.com/cpp-netlib/cpp-netlib.git

This should be enough information get to started. To do more complex things with Git, such as pulling changes or checking out a new branch, refer to the <a href="http://git-scm.com/documentation" class="reference external">Git documentation</a>.

Note

Previous versions of `cpp-netlib` referred to the *mikhailberis* repository as the main development repository. This account is still valid, but not always up-to-date. In the interest of consistency, the main repository has been changed to *cpp-netlib*.

Windows users need to use <a href="http://code.google.com/p/msysgit/downloads/list" class="reference external">msysGit</a>, and to invoke the command above from a shell.

For fans of <a href="http://subversion.tigris.org/" class="reference external">Subversion</a>, the same code can be checked out from <a href="http://svn.github.com/cpp-netlib/cpp-netlib.git" class="reference external">http://svn.github.com/cpp-netlib/cpp-netlib.git</a>.

Note

The `cpp-netlib` project is hosted on <a href="http://github.com/cpp-netlib/cpp-netlib/downloads" class="reference external">GitHub</a> and follows the prescribed development model for <a href="http://github.com/cpp-netlib/cpp-netlib/downloads" class="reference external">GitHub</a> based projects. This means in case you want to submit patches, you will have to create a fork of the project (read up on <a href="http://help.github.com/forking/" class="reference external">forking</a>) and then submit a pull request (read up on submitting <a href="http://help.github.com/pull-requests/" class="reference external">pull requests</a>).

Getting Boost<a href="#getting-boost" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------

`cpp-netlib` depends on <a href="http://www.boost.org/doc/libs/release/more/getting_started/index.html" class="reference external">Boost</a>. It should work for any version of Boost above 1.50.0. If Boost is not installed on your system, the latest package can be found on the <a href="http://www.boost.org/users/download/" class="reference external">Boost web-site</a>. The environment variable `BOOST_ROOT` must be defined, which must be the full path name of the top directory of the Boost distribution. Although Boost is mostly header only, applications built using `cpp-netlib` still requires linking with <a href="http://www.boost.org/libs/system/index.html" class="reference external">Boost.System</a>, <a href="http://www.boost.org/libs/date_time/index.html" class="reference external">Boost.Date_time</a>, and <a href="http://www.boost.org/libs/regex/index.html" class="reference external">Boost.Regex</a>.

Note

You can follow the steps in the <a href="http://www.boost.org/doc/libs/release/more/getting_started/index.html" class="reference external">Boost Getting Started</a> guide to install Boost into your development system.

Warning

There is a known incompatibility between `cpp-netlib` and Boost 1.46.1 on some compilers. It is not recommended to use `cpp-netlib` with Boost 1.46.1. Some have reported though that Boost 1.47.0 and `cpp-netlib` work together better.

Getting CMake<a href="#getting-cmake" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------

The `cpp-netlib` uses <a href="http://www.cmake.org/" class="reference external">CMake</a> to generate platform-specific build files. If you intend to run the test suite, you can follow the instructions below. Otherwise, you don’t need CMake to use `cpp-netlib` in your project. The `cpp-netlib` requires CMake version 2.8 or higher.

Let’s assume that you have unpacked the `cpp-netlib` at the top of your HOME directory. On Unix-like systems you will typically be able to change into your HOME directory using the command `cd                     ~`. This sample below assumes that the `~/cpp-netlib` directory exists, and is the top-level directory of the `cpp-netlib` release.

Building with CMake<a href="#building-with-cmake" class="headerlink" title="Permalink to this headline">¶</a>
-------------------------------------------------------------------------------------------------------------

To build the tests that come with `cpp-netlib`, we first need to configure the build system to use our compiler of choice. This is done by running the `cmake` command at the top-level directory of `cpp-netlib` with additional parameters:

    $ mkdir ~/cpp-netlib-build
    $ cd ~/cpp-netlib-build
    $ cmake -DCMAKE_BUILD_TYPE=Debug \
    >       -DCMAKE_C_COMPILER=gcc   \
    >       -DCMAKE_CXX_COMPILER=g++ \
    >       ../cpp-netlib

Note

While it’s not compulsory, it’s recommended that `cpp-netlib` is built outside the source directory. For the purposes of documentation, we’ll assume that all builds are done in `~/cpp-netlib-build`.

If you intend to use the SSL support when using the HTTP client libraries in `cpp-netlib`, you may need to build it with <a href="http://www.openssl.org/" class="reference external">OpenSSL</a> installed or at least available to CMake. If you have the development headers for <a href="http://www.openssl.org/" class="reference external">OpenSSL</a> installed on your system when you build `cpp-netlib`, CMake will be able to detect it and set the `BOOST_NETWORK_ENABLE_HTTPS` macro when building the library to support HTTPS URIs.

One example for building the library with <a href="http://www.openssl.org/" class="reference external">OpenSSL</a> support with a custom (non-installed) version of <a href="http://www.openssl.org/" class="reference external">OpenSSL</a> is by doing the following:

    $ cmake -DCMAKE_BUILD_TYPE=Debug \
    >       -DCMAKE_C_COMPILER=clang \
    >       -DCMAKE_CXX_COMPILER=clang++ \
    >       -DOPENSSL_ROOT_DIR=/Users/dberris/homebrew/Cellar/openssl/1.0.1f
    >       ../cpp-netlib

You can also use a different root directory for the <a href="http://www.boost.org/doc/libs/release/more/getting_started/index.html" class="reference external">Boost</a> project by using the `-DBOOST_ROOT` configuration option to CMake. This is useful if you intend to build the library with a specific version of Boost that you’ve built in a separate directory:

    $ cmake -DCMAKE_BUILD_TYPE=Debug \
    >       -DCMAKE_C_COMPILER=clang \
    >       -DCMAKE_CXX_COMPILER=clang++ \
    >       -DOPENSSL_ROOT_DIR=/Users/dberris/homebrew/Cellar/openssl/1.0.1f \
    >       -DBOOST_ROOT=/Users/dberris/Source/boost_1_55_0
    >       ../cpp-netlib

### Building on Linux<a href="#building-on-linux" class="headerlink" title="Permalink to this headline">¶</a>

On Linux, this will generate the appropriate Makefiles that will enable you to build and run the tests and examples that come with `cpp-netlib`. To build the tests, you can run `make` in the same top-level directory of `~/cpp-netlib-build`:

    $ make

Note

Just like with traditional GNU Make, you can add the `-j` parameter to specify how many parallel builds to run. In case you’re in a sufficiently powerful system and would like to parallelize the build into 4 jobs, you can do this with:

    make -j4

As a caveat, `cpp-netlib` is heavy on template metaprogramming and will require a lot of computing and memory resources to build the individual tests. Do this at the risk of <a href="http://en.wikipedia.org/wiki/Thrashing_(computer_science)" class="reference external">thrashing</a> your system. However, this compile-time burden is much reduced in recent versions.

Once the build has completed, you can now run the test suite by issuing:

    $ make test

You can install `cpp-netlib` by issuing:

    $ sudo make install

By default this installs `cpp-netlib` into `/usr/local`.

Note

As of version 0.9.3, `cpp-netlib` produces three static libraries. Using GCC on Linux these are:

    libcppnetlib-client-connections.a
    libcppnetlib-server-parsers.a
    libcppnetlib-uri.a

Users can find them in `~/cpp-netlib-build/libs/network/src`.

### Building On Windows<a href="#building-on-windows" class="headerlink" title="Permalink to this headline">¶</a>

If you’re using the Microsoft Visual C++ compiler or the Microsoft Visual Studio IDE and you would like to build `cpp-netlib` from within Visual Studio, you can look for the solution and project files as the artifacts of the call to `cmake` – the file should be named `CPP-NETLIB.sln` (the solution) along with a number of project files for Visual Studio.

Note

As of version 0.9.3, `cpp-netlib` produces three static libraries. Using Visual C++ on Windows they are:

    cppnetlib-client-connections.lib
    cppnetlib-server-parsers.lib
    cppnetlib-uri.lib

Users can find them in `~/cpp-netlib-build/libs/network/src`.

Using `cpp-netlib`<a href="#using-cpp-netlib" class="headerlink" title="Permalink to this headline">¶</a>
---------------------------------------------------------------------------------------------------------

### CMake projects<a href="#cmake-projects" class="headerlink" title="Permalink to this headline">¶</a>

Projects using CMake can add the following lines in their `CMakeLists.txt` to be able to use `cpp-netlib`:

    set ( CMAKE_PREFIX_PATH ${CMAKE_PREFIX_PATH} ~/cpp-netlib-build )
    find_package ( cppnetlib 0.11.0 REQUIRED )
    include_directories ( ${CPPNETLIB_INCLUDE_DIRS} )
    target_link_libraries ( MyApplication ${CPPNETLIB_LIBRARIES} )

Note

Setting `CMAKE_PREFIX_PATH` is only required when `cpp-netlib` is not installed to a location that CMake searches. When `cpp-netlib` is installed to the default location (`/usr/local`), `CMake` can find it.

Note

We assume that `MyApplication` is the application that you are building and which depends on `cpp-netlib`.

Reporting Issues, Getting Support<a href="#reporting-issues-getting-support" class="headerlink" title="Permalink to this headline">¶</a>
----------------------------------------------------------------------------------------------------------------------------------------

In case you find yourself stuck or if you’ve found a bug (or you want to just join the discussion) you have a few options to choose from.

For reporting bugs, feature requests, and asking questions about the implementation and/or the documentation, you can go to the GitHub issues page for the project at <a href="http://github.com/cpp-netlib/cpp-netlib/issues" class="reference external">http://github.com/cpp-netlib/cpp-netlib/issues</a>.

You can also opt to join the developers mailing list for a more personal interaction with the developers of the project. You can join the mailing list through <a href="http://groups.google.com/forum/#!forum/cpp-netlib" class="reference external">http://groups.google.com/forum/#!forum/cpp-netlib</a>.

### [Table Of Contents](contents.html)

-   <a href="#" class="reference internal">Getting Started</a>
    -   <a href="#downloading-an-official-release" class="reference internal">Downloading an official release</a>
    -   <a href="#downloading-a-development-version" class="reference internal">Downloading a development version</a>
    -   <a href="#getting-boost" class="reference internal">Getting Boost</a>
    -   <a href="#getting-cmake" class="reference internal">Getting CMake</a>
    -   <a href="#building-with-cmake" class="reference internal">Building with CMake</a>
        -   <a href="#building-on-linux" class="reference internal">Building on Linux</a>
        -   <a href="#building-on-windows" class="reference internal">Building On Windows</a>
    -   <a href="#using-cpp-netlib" class="reference internal">Using <code class="docutils literal">cpp-netlib</code></a>
        -   <a href="#cmake-projects" class="reference internal">CMake projects</a>
    -   <a href="#reporting-issues-getting-support" class="reference internal">Reporting Issues, Getting Support</a>

#### Previous topic

[What’s New](whats_new.html "previous chapter")

#### Next topic

[Examples](examples.html "next chapter")

### Quick search

Enter search terms or a module, class or function name.

### Navigation

-   [next](examples.html "Examples")
-   [previous](whats_new.html "What’s New") |
-   [cpp-netlib v0.11.2](contents.html) »

© Copyright 2008-2014, Glyn Matthews, Dean Michael Berris; 2013 Google, Inc.. Last updated on Mar 29, 2016. Created using [Sphinx](http://sphinx-doc.org/) 1.3.6.
