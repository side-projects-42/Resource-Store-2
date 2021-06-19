CodeMirror: SPARQL mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">SPARQL</a>

SPARQL mode
-----------

PREFIX a: &lt;http://www.w3.org/2000/10/annotation-ns\#&gt; PREFIX dc: &lt;http://purl.org/dc/elements/1.1/&gt; PREFIX foaf: &lt;http://xmlns.com/foaf/0.1/&gt; \# Comment! SELECT ?given ?family WHERE { ?annot a:annotates &lt;http://www.w3.org/TR/rdf-sparql-query/&gt; . ?annot dc:creator ?c . OPTIONAL {?c foaf:given ?given ; foaf:family ?family } . FILTER isBlank(?c) }

**MIME types defined:** `application/x-sparql-query`.
