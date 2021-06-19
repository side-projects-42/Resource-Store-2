Module Server
=============

Module server is a system for efficient serving of CommonJS modules to web browsers. The core feature is that it supports *incremental loading* of modules and their dependencies with exactly 1 HTTP request per incremental load.

This is a *reference implementation* that has not been battle-tested in production use. See our [presentation from JSConf EU 2012](https://docs.google.com/presentation/d/1Q44eWLI2qvZnmCF5oD2jCw-FFql9dYg36FE5CpbMlw4/preview) for more details.

The serving system implements the following constraints:

-   Requesting a module initiates exactly 1 HTTP request
-   This single requests contains the requested module and all its dependencies.
-   Incremental loading (every module request after the first one) of additional modules only downloads dependencies that have not been requested already.
-   The client does not need to download a dependency tree to decide which additional dependencies to download.

For many web applications serving all JavaScript in a single compiled binary may be a good enough, simple solution, more complex apps with large JS code bases will profit from only downloading code when it is needed. While AMD loaders such as [require.js](http://requirejs.org/) implement incremental loading as well, they often do so through recursive downloading of dependencies which may significantly degrade latency.

Closure compiler supports both compilation of CommonJS and AMD modules. It should thus be possible to use this system as a production frontend for projects that use other systems such as require.js or browserify today.

Source Maps
-----------

By default all JS responses support [source maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) for optimal debugging with Chrome Dev Tools (Don’t forget to activate source map support in the Dev Tools settings). We recommend to deactivate this for production use, if you only want to provide clients access to obfuscated JS

Setup
-----

See [demo-server.js](demo-server.js) for an example server. You may want to adapt this to your individual serving stack (such as as for use within express). We recommend doing actual serving through a caching reverse proxy CDN network for minimal latency.

### Demo

Run `node demo-server.js` then drag [clients/test/demo.html](clients/test/demo.html) to a browser window.

Client
------

[clients/module-client.js](clients/module-client.js) provides the in-browser module loader. It depends on $LAB.js but should be easily adaptable to most JS loaders.

This will get you started:

    <script src="../third-party/LABjs/LAB.src.js"></script>
    <script src="../module-client.js"></script>

    <script>
    window.loadModule = ModuleServer('http://127.0.0.1:1337/');
    </script>

Whenever you want to do an incremental load of a module, replace `require('foo')` with `loadModule('foo', function(foo) { … })` and you are all set.

Compiler
--------

[module-compiler/bin.js](module-compiler/bin.js) is a wrapper around closure compiler for compiling JS for serving with Module Server. Run with –help for usage. It supports watching a directory tree for automatic compilation when you change your sources and it ships with closure compiler for easy installation.

Make sure you have the java binary in your path :)

Example:

    node module-compiler/bin.js  --module_path=./test/fixtures/sample-module --entry_module=app --output_path=../build/

See the [INSTALL](module-compiler/INSTALL.md) instructions.

### Compilation

Create a file called `app.js` (or whatever you like) and require all of your top-level modules in it (the ones you actually want to request from your application). This will ensure that everything gets compiled in one go.

Fine print
----------

Pull requests are very much appreciated. Please sign the [Google Code contributor license agreement](http://code.google.com/legal/individual-cla-v1.0.html) (There is a convenient online form) before submitting.

Author  
[Malte Ubl (Google Inc.)](https://github.com/cramforce)

Copyright  
Copyright © 2012 Google, Inc.

License  
Apache 2.0
