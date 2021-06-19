### [owl.carousel.js](/OwlCarousel2/)

<span id="toggle-nav" class="right"> </span>

-   [Home](/OwlCarousel2/index.html)
-   [Demos](/OwlCarousel2/demos/demos.html)
-   [Docs](/OwlCarousel2/docs/started-welcome.html)
-   [Download](https://github.com/OwlCarousel2/OwlCarousel2/archive/2.3.4.zip) <span class="download"></span>

Development
===========

-   Getting Started
-   [Welcome](started-welcome.html)
-   [Installation](started-installation.html)
-   [FAQ](started-faq.html)

<!-- -->

-   API
-   [Options](api-options.html)
-   [Classes](api-classes.html)
-   [Events](api-events.html)

<!-- -->

-   Development
-   [Built-in Plugins](dev-buildin-plugins.html)
-   [Plugin API](dev-plugin-api.html)
-   [Sass Styles](dev-styles.html)
-   [External Libs](dev-external.html)

<!-- -->

-   Support
-   [Contributing](support-contributing.html)
-   [Changelog](support-changelog.html)
-   [Contact](support-contact.html)

Plugin API
----------

> Plugin API allows you to extend carousel object constructor and use internal functions and variables. Use callback events to communicate between host and plugin.

Plugin scaffolding:

    /**
     * Plugin Name
     * @since 2.0.0
     */
    ;(function ( $, window, document, undefined ) {
        PluginName = function(scope){
            this.owl = scope;
            this.owl._options = $.extend({}, PluginName.Defaults, this.owl.options);
            //link callback events with owl carousel here
        }
        PluginName.Defaults = {
            optionName: 'value',
            optionName2: 'value'
        }
        //methods:
        PluginName.prototype.method = function(){
        }
        //destroy:
        AutoHeight.prototype.destroy = function(){
            //events here
        };
        $.fn.owlCarousel.Constructor.Plugins['pluginName'] = PluginName;
    })( window.Zepto || window.jQuery, window,  document );

##### [David Deutsch](/OwlCarousel2/docs/support-contact.html) <a href="https://twitter.com/share?url=https://github.com/OwlCarousel2/OwlCarousel2&amp;text=Owl%20Carousel%20-%20This%20is%20so%20awesome!%20" id="custom-tweet-button"></a>
