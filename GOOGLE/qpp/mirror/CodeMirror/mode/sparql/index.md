CodeMirror: SPARQL mode
=======================

PREFIX a: &lt;http://www.w3.org/2000/10/annotation-ns\#&gt; PREFIX dc: &lt;http://purl.org/dc/elements/1.1/&gt; PREFIX foaf: &lt;http://xmlns.com/foaf/0.1/&gt; \# Comment! SELECT ?given ?family WHERE { ?annot a:annotates &lt;http://www.w3.org/TR/rdf-sparql-query/&gt; . ?annot dc:creator ?c . OPTIONAL {?c foaf:given ?given ; foaf:family ?family } . FILTER isBlank(?c) }

**MIME types defined:** `application/x-sparql-query`.
