CodeMirror: LESS mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">LESS</a>

LESS mode
---------

<span class="citation" data-cites="media">@media</span> screen and (device-aspect-ratio: 16/9) { … } <span class="citation" data-cites="media">@media</span> screen and (device-aspect-ratio: 1280/720) { … } <span class="citation" data-cites="media">@media</span> screen and (device-aspect-ratio: 2560/1440) { … } html:lang(fr-be) tr:nth-child(2n+1) /\* represents every odd row of an HTML table \*/ img:nth-of-type(2n+1) { float: right; } img:nth-of-type(2n) { float: left; } body &gt; h2:not(:first-of-type):not(:last-of-type) html|\*:not(:link):not(:visited) \*|\*:not(:hover) p::first-line { text-transform: uppercase } <span class="citation" data-cites="namespace">@namespace</span> foo url(http://www.example.com); foo|h1 { color: blue } /\* first rule \*/ span\[hello=“Ocean”\]\[goodbye=“Land”\] E\[foo\]{ padding:65px; } input\[type=“search”\]::-webkit-search-decoration, input\[type=“search”\]::-webkit-search-cancel-button { -webkit-appearance: none; // Inner-padding issues in Chrome OSX, Safari 5 } button::-moz-focus-inner, input::-moz-focus-inner { // Inner padding and border oddities in FF3/4 padding: 0; border: 0; } .btn { // reset here as of 2.0.3 due to Recess property order border-color: \#ccc; border-color: rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25); } fieldset span button, fieldset span input\[type=“file”\] { font-size:12px; font-family:Arial, Helvetica, sans-serif; } .rounded-corners (<span class="citation" data-cites="radius">@radius</span>: 5px) { border-radius: <span class="citation" data-cites="radius">@radius</span>; -webkit-border-radius: <span class="citation" data-cites="radius">@radius</span>; -moz-border-radius: <span class="citation" data-cites="radius">@radius</span>; } <span class="citation" data-cites="import">@import</span> url(“something.css”); <span class="citation" data-cites="light-blue">@light-blue</span>: hsl(190, 50%, 65%); \#menu { position: absolute; width: 100%; z-index: 3; clear: both; display: block; background-color: <span class="citation" data-cites="blue">@blue</span>; height: 42px; border-top: 2px solid lighten(<span class="citation" data-cites="alpha-blue">@alpha-blue</span>, 20%); border-bottom: 2px solid darken(<span class="citation" data-cites="alpha-blue">@alpha-blue</span>, 25%); .box-shadow(0, 1px, 8px, 0.6); -moz-box-shadow: 0 0 0 \#000; // Because firefox sucks. &.docked { background-color: hsla(210, 60%, 40%, 0.4); } &:hover { background-color: <span class="citation" data-cites="blue">@blue</span>; } \#dropdown { margin: 0 0 0 117px; padding: 0; padding-top: 5px; display: none; width: 190px; border-top: 2px solid <span class="citation" data-cites="medium">@medium</span>; color: <span class="citation" data-cites="highlight">@highlight</span>; border: 2px solid darken(<span class="citation" data-cites="medium">@medium</span>, 25%); border-left-color: darken(<span class="citation" data-cites="medium">@medium</span>, 15%); border-right-color: darken(<span class="citation" data-cites="medium">@medium</span>, 15%); border-top-width: 0; background-color: darken(<span class="citation" data-cites="medium">@medium</span>, 10%); ul { padding: 0px; } li { font-size: 14px; display: block; text-align: left; padding: 0; border: 0; a { display: block; padding: 0px 15px; text-decoration: none; color: white; &:hover { background-color: darken(<span class="citation" data-cites="medium">@medium</span>, 15%); text-decoration: none; } } } .border-radius(5px, bottom); .box-shadow(0, 6px, 8px, 0.5); } }

The LESS mode is a sub-mode of the [CSS mode](index.html) (defined in `css.js`.

**Parsing/Highlighting Tests:** [normal](../../test/index.html#less_*), [verbose](../../test/index.html#verbose,less_*).
