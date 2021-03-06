Highlight.js
============

[![Build Status](https://travis-ci.org/isagalaev/highlight.js.svg?branch=master)](https://travis-ci.org/isagalaev/highlight.js)

Highlight.js is a syntax highlighter written in JavaScript. It works in the browser as well as on the server. It works with pretty much any markup, doesn’t depend on any framework and has automatic language detection.

Getting Started
---------------

The bare minimum for using highlight.js on a web page is linking to the library along with one of the styles and calling [`initHighlightingOnLoad`](http://highlightjs.readthedocs.io/en/latest/api.html#inithighlightingonload):

    <link rel="stylesheet" href="/path/to/styles/default.css">
    <script src="/path/to/highlight.pack.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>

This will find and highlight code inside of `<pre><code>` tags; it tries to detect the language automatically. If automatic detection doesn’t work for you, you can specify the language in the `class` attribute:

    <pre><code class="html">...</code></pre>

The list of supported language classes is available in the [class reference](http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html). Classes can also be prefixed with either `language-` or `lang-`.

To disable highlighting altogether use the `nohighlight` class:

    <pre><code class="nohighlight">...</code></pre>

Custom Initialization
---------------------

When you need a bit more control over the initialization of highlight.js, you can use the [`highlightBlock`](http://highlightjs.readthedocs.io/en/latest/api.html#highlightblock-block) and [`configure`](http://highlightjs.readthedocs.io/en/latest/api.html#configure-options) functions. This allows you to control *what* to highlight and *when*.

Here’s an equivalent way to calling [`initHighlightingOnLoad`](http://highlightjs.readthedocs.io/en/latest/api.html#inithighlightingonload) using jQuery:

    $(document).ready(function() {
      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    });

You can use any tags instead of `<pre><code>` to mark up your code. If you don’t use a container that preserve line breaks you will need to configure highlight.js to use the `<br>` tag:

    hljs.configure({useBR: true});

    $('div.code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

For other options refer to the documentation for [`configure`](http://highlightjs.readthedocs.io/en/latest/api.html#configure-options).

Web Workers
-----------

You can run highlighting inside a web worker to avoid freezing the browser window while dealing with very big chunks of code.

In your main script:

    addEventListener('load', function() {
      var code = document.querySelector('#code');
      var worker = new Worker('worker.js');
      worker.onmessage = function(event) { code.innerHTML = event.data; }
      worker.postMessage(code.textContent);
    })

In worker.js:

    onmessage = function(event) {
      importScripts('<path>/highlight.pack.js');
      var result = self.hljs.highlightAuto(event.data);
      postMessage(result.value);
    }

Getting the Library
-------------------

You can get highlight.js as a hosted, or custom-build, browser script or as a server module. Right out of the box the browser script supports both AMD and CommonJS, so if you wish you can use RequireJS or Browserify without having to build from source. The server module also works perfectly fine with Browserify, but there is the option to use a build specific to browsers rather than something meant for a server. Head over to the [download page](https://highlightjs.org/download/) for all the options.

**Don’t link to GitHub directly.** The library is not supposed to work straight from the source, it requires building. If none of the pre-packaged options work for you refer to the [building documentation](http://highlightjs.readthedocs.io/en/latest/building-testing.html).

**The CDN-hosted package doesn’t have all the languages.** Otherwise it’d be too big. If you don’t see the language you need in the [“Common” section](https://highlightjs.org/download/), it can be added manually:

    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/go.min.js"></script>

**On Almond.** You need to use the optimizer to give the module a name. For example:

    r.js -o name=hljs paths.hljs=/path/to/highlight out=highlight.js

License
-------

Highlight.js is released under the BSD License. See [LICENSE](https://github.com/isagalaev/highlight.js/blob/master/LICENSE) file for details.

Links
-----

The official site for the library is at <a href="https://highlightjs.org/" class="uri">https://highlightjs.org/</a>.

Further in-depth documentation for the API and other topics is at <a href="http://highlightjs.readthedocs.io/" class="uri">http://highlightjs.readthedocs.io/</a>.

Authors and contributors are listed in the [AUTHORS.en.txt](https://github.com/isagalaev/highlight.js/blob/master/AUTHORS.en.txt) file.
