Universal Language Selector jQuery library
==========================================

[![Test status](https://github.com/wikimedia/jquery.uls/actions/workflows/node-test.yml/badge.svg)](https://github.com/wikimedia/jquery.uls/actions/workflows/node-test.yml) [![Lint status](https://github.com/wikimedia/jquery.uls/actions/workflows/node-lint.yml/badge.svg)](https://github.com/wikimedia/jquery.uls/actions/workflows/node-lint.yml)

This is a [Wikimedia Foundation project](https://www.mediawiki.org/wiki/Project_Milkshake).

![Universal Language Selector](https://upload.wikimedia.org/wikipedia/commons/a/a1/UniversalLanguageSelector-Compact.png "Universal Language Selector")

Quick start
-----------

    git clone https://github.com/wikimedia/jquery.uls.git

Documentation
-------------

The quick and easy way to learn usage of jquery.uls is trying out the examples/index.html in webserver. Try it online at http://thottingal.in/projects/js/jquery.uls/examples/

The jquery.uls provides a jQuery extension `$.fn.uls` that can be attached to a trigger element. When you click on the trigger element, the language selector is shown.

The trigger can be a link, button or any valid jQuery element.

Example:

    $(".uls-trigger").uls();

To use the selected language, you need define a selection handler:

    $(".uls-trigger").uls({
      onSelect: function (language) {
        // language is a IETF language tag in lowercase, for example: en, fi, ku-latn
        // Your selection handler code goes here.
      },
    });

You can provide a quick list of likely useful languages, for example based on Geo IP or recently selected languages:

    $( '.uls-trigger' ).uls( {
      onSelect: function( language ) { ... },
      quickList: [ 'en', 'ml', 'hi' ] // Can be a function returning an array too.
    } );

jquery.uls knows about 500 languages. You can specify a subset of those languages:

    $( '.uls-trigger' ).uls( {
      onSelect: function( language ) { ... },
      languages: { languageCode1: languageName, languageCode2: languageName2, .... },
    } );

*All options*

<table style="width:99%;"><colgroup><col style="width: 5%" /><col style="width: 94%" /></colgroup><thead><tr class="header"><th>Option</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>left</td><td>DEPRECATED: use onPosition</td></tr><tr class="even"><td>top</td><td>DEPRECATED: use onPosition</td></tr><tr class="odd"><td>onSelect</td><td>Callback function when user selects a language.</td></tr><tr class="even"><td>onCancel</td><td>Callback function when the dialog is closed without selecting a language.</td></tr><tr class="odd"><td>onReady</td><td>Callback function when ULS has initialized.</td></tr><tr class="even"><td>onVisible</td><td>Callback function when ULS dialog is shown.</td></tr><tr class="odd"><td>onPosition</td><td>Callback for positioning the dialog. It should return an object with any of the keys <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code>.</td></tr><tr class="even"><td>languages</td><td>List of selectable languages. Defaults to all known languages.</td></tr><tr class="odd"><td>menuWidth</td><td>Override the automatic choice of menu width. One of narrow, medium, wide (1, 2, 4 columns respectively).</td></tr><tr class="even"><td>ulsPurpose</td><td>A string that will identify this instance of ULS. It’s useful if you have several instances of ULS in your web application and you want to have a unique identifier for each of them.</td></tr><tr class="odd"><td>quicklist</td><td>List of suggested languages. Defaults to empty list.</td></tr><tr class="even"><td>showRegions</td><td>Regions to be shown in the language selector. Defaults to [ WW, AM, EU, ME, AF, AS, PA ]</td></tr><tr class="odd"><td>languageDecorator</td><td>Callback function to be called when a language link is prepared - for custom decoration. Arguments: (a) the $language - the language link jQuery object (b) languageCode. The function can do any styling, changing properties etc on the passed link. See examples/decorator.html for example usage.</td></tr><tr class="even"><td>noResultsTemplate</td><td>A jQuery object or a function that returns a jQuery object. This will be used as the template to display when no results found from the search. The function will receive the current search query as argument</td></tr><tr class="odd"><td>itemsPerColumn</td><td>Number of languages per column. Default is 8</td></tr><tr class="even"><td>groupByRegion</td><td>Whether to group languages by the regions: true of false. Default value depends on the menu width.</td></tr><tr class="odd"><td>searchAPI</td><td>API URL. Parameter query with the user query is appened to it.</td></tr></tbody></table>

Features
--------

jquery.uls has an elaborative language information collection and it is based on https://github.com/wikimedia/language-data.git. It knows about

1.  The script in which a language is written.
2.  The script code
3.  The language code
4.  The regions in which the language is spoken
5.  The autonym - language name written in its own script
6.  The directionality of the text

With all these information the search becomes very effective. An advanced usage of jquery.uls can be tried out from Wikimedia sites. For example, see the language icon at the top of https://mediawiki.org or the cog icon near to the languages list in Wikipedia in any language.

More details
------------

-   Technical design - https://www.mediawiki.org/wiki/Universal\_Language\_Selector/Design
-   UX Design https://www.mediawiki.org/wiki/Universal\_Language\_Selector/Design

How to build and test jquery.uls
--------------------------------

First, get a copy of the git repo by running:

    git clone git://github.com/wikimedia/jquery.uls.git

Make sure you have `grunt` installed by testing:

    grunt -version

If not, run:

    npm install

To run tests locally, run `grunt test`. This will run the tests in PhantomJS.

You can also run the tests in a browser by navigating to the `test/` directory, but first run `grunt` to install the submodules.

Updating language-data
----------------------

From the main repo directory, run:

    ./scripts/fetch-language-data.sh

Coding style
------------

Please follow [MediaWiki coding conventions](https://www.mediawiki.org/wiki/Manual:Coding_conventions/JavaScript)
