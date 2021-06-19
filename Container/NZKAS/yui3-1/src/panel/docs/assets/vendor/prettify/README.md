<span class="small">Languages : [CH](README-zh-Hans.html)</span>

Javascript code prettifier
==========================

Setup
-----

1.  [Download](http://code.google.com/p/google-code-prettify/downloads/list) a distribution
2.  Include the script and stylesheets in your document (you will need to make sure the css and js file are on your server, and adjust the paths in the `script` and `link` tag)

        <link href="prettify.css" type="text/css" rel="stylesheet" />
        <script type="text/javascript" src="prettify.js"></script>

3.  Add `onload="prettyPrint()"` to your document's body tag.
4.  Modify the stylesheet to get the coloring you prefer

Usage
-----

Put code snippets in `<pre class="prettyprint">...</pre>` or `<code class="prettyprint">...</code>` and it will automatically be pretty printed.

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>The original</th><th>Prettier</th></tr></thead><tbody><tr class="odd"><td><pre style="border: 1px solid #888;padding: 2px"><code>class Voila {
public:
  // Voila
  static const string VOILA = &quot;Voila&quot;;

  // will not interfere with embedded tags.
}</code></pre></td><td><pre class="prettyprint"><code>class Voila {
public:
  // Voila
  static const string VOILA = &quot;Voila&quot;;

  // will not interfere with embedded tags.
}</code></pre></td></tr></tbody></table>

FAQ
---

### Which languages does it work for?

The comments in `prettify.js` are authoritative but the lexer should work on a number of languages including C and friends, Java, Python, Bash, SQL, HTML, XML, CSS, Javascript, and Makefiles. It works passably on Ruby, PHP, VB, and Awk and a decent subset of Perl and Ruby, but, because of commenting conventions, doesn't work on Smalltalk, or CAML-like languages.

LISPy languages are supported via an extension: [`lang-lisp.js`](http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-lisp.js).

And similarly for [`CSS`](http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-css.js), [`Haskell`](http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-hs.js), [`Lua`](http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-lua.js), [`OCAML, SML, F#`](http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-ml.js), [`Visual Basic`](http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-vb.js), [`SQL`](http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-sql.js), [`Protocol Buffers`](http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-proto.js), and [`WikiText`](http://code.google.com/p/google-code-prettify/source/browse/trunk/src/lang-wiki.js)..

If you'd like to add an extension for your favorite language, please look at `src/lang-lisp.js` and file an [issue](http://code.google.com/p/google-code-prettify/issues/list) including your language extension, and a testcase.

### How do I specify which language my code is in?

You don't need to specify the language since `prettyprint()` will guess. You can specify a language by specifying the language extension along with the `prettyprint` class like so:

    <pre class="prettyprint lang-html">
      The lang-* class specifies the language file extensions.
      File extensions supported by default include
        "bsh", "c", "cc", "cpp", "cs", "csh", "cyc", "cv", "htm", "html",
        "java", "js", "m", "mxml", "perl", "pl", "pm", "py", "rb", "sh",
        "xhtml", "xml", "xsl".
    </pre>

### It doesn't work on `<obfuscated code sample>`?

Yes. Prettifying obfuscated code is like putting lipstick on a pig — i.e. outside the scope of this tool.

### Which browsers does it work with?

It's been tested with IE 6, Firefox 1.5 & 2, and Safari 2.0.4. Look at [the test page](tests/prettify_test.html) to see if it works in your browser.

### What's changed?

See the [change log](CHANGES.html)

### Why doesn't Prettyprinting of strings work on WordPress?

Apparently wordpress does "smart quoting" which changes close quotes. This causes end quotes to not match up with open quotes.

This breaks prettifying as well as copying and pasting of code samples. See [WordPress's help center](http://wordpress.org/support/topic/125038) for info on how to stop smart quoting of code snippets.

### How do I put line numbers in my code?

You can use the `linenums` class to turn on line numbering. If your code doesn't start at line number 1, you can add a colon and a line number to the end of that class as in `linenums:52`.

For example

    <pre class="prettyprint linenums:4"
    >// This is line 4.
    foo();
    bar();
    baz();
    boo();
    far();
    faz();
    <pre>

produces

    // This is line 4.
    foo();
    bar();
    baz();
    boo();
    far();
    faz();

### How do I prevent a portion of markup from being marked as code?

You can use the `nocode` class to identify a span of markup that is not code.

    <pre class=prettyprint>
    int x = foo();  /* This is a comment  <span class="nocode">This is not code</span>
      Continuation of comment */
    int y = bar();
    </pre>

produces

    int x = foo();  /* This is a comment  This is not code
      Continuation of comment */
    int y = bar();

For a more complete example see the issue22 [testcase](tests/prettify_test.html#issue22).

### I get an error message "a is not a function" or "opt\_whenDone is not a function"

If you are calling `prettyPrint` via an event handler, wrap it in a function. Instead of doing

> `addEventListener('load', prettyPrint, false);`

wrap it in a closure like

> `addEventListener('load', function (event) { prettyPrint() }, false);`

so that the browser does not pass an event object to `prettyPrint` which will confuse it.  
  
  

Last modified: Wed Jul 19 13:56:00 PST 2010
