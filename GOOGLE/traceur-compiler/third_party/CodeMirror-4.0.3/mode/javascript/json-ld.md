CodeMirror: JSON-LD mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">JSON-LD</a>

JSON-LD mode
------------

{ “<span class="citation" data-cites="context">@context</span>”: { “name”: “http://schema.org/name”, “description”: “http://schema.org/description”, “image”: { “<span class="citation" data-cites="id">@id</span>”: “http://schema.org/image”, “<span class="citation" data-cites="type">@type</span>”: “<span class="citation" data-cites="id">@id</span>” }, “geo”: “http://schema.org/geo”, “latitude”: { “<span class="citation" data-cites="id">@id</span>”: “http://schema.org/latitude”, “<span class="citation" data-cites="type">@type</span>”: “xsd:float” }, “longitude”: { “<span class="citation" data-cites="id">@id</span>”: “http://schema.org/longitude”, “<span class="citation" data-cites="type">@type</span>”: “xsd:float” }, “xsd”: “http://www.w3.org/2001/XMLSchema\#” }, “name”: “The Empire State Building”, “description”: “The Empire State Building is a 102-story landmark in New York City.”, “image”: “http://www.civil.usherbrooke.ca/cours/gci215a/empire-state-building.jpg”, “geo”: { “latitude”: “40.75”, “longitude”: “73.98” } }

This is a specialization of the [JavaScript mode](index.html).
