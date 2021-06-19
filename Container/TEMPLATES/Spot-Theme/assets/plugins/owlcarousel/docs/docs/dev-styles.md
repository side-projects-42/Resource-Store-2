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

Using Sass
----------

> Owl uses the Sass pre-processor to build CSS for all main modules and themes. If you don’t know Sass, have a look at their [website](http://sass-lang.com/) and you’ll love it. Owl uses a faster adaptation of Sass written in C, [libsass](http://libsass.org/) (via [grunt-sass](https://github.com/sindresorhus/grunt-sass) ), that doesn't require a Ruby dependency for our build process.

To build the CSS from its Sass source, it’s required to have:

-   [Node.js](https://nodejs.org/)
-   [Grunt](http://gruntjs.com/)

Check this [tutorial](https://benfrain.com/lightning-fast-sass-compiling-with-libsass-node-sass-and-grunt-sass/) to learn how to use Sass and libsass in Grunt environment.

### SCSS Files included

Source files can be found on [Github Project](https://github.com/OwlCarousel2/OwlCarousel2)

    src/
    └── scss/
        ├── _mixins.scss
        ├── _theme.scss
        ├── owl.carousel.scss
        ├── owl.animate.scss
        ├── owl.autoheight.scss
        ├── owl.lazyload.scss
        ├── owl.video.scss
        ├── owl.theme.default.scss
        └── owl.theme.green.scss

### \_mixins.scss

\_mixins contain basic snippets generators for CSS3 cross-browser styles.

### \_theme.scss

Scss structure for theme. Use owl.carousel.default.scss to change variables and generate new styles.

### owl.carousel.scss

Core file to handle basic styles and override some unnecessary browsers behaviors. You shouldn’t change this file unless you have to.

### owl.\[pluginname\].scss

Styles for modules.

### owl.theme.\*.scss

Theme files for dots and navigations buttons. Use `owl.theme.default.scss` to upgrade to your own styles or create a new theme.

##### [David Deutsch](/OwlCarousel2/docs/support-contact.html) <a href="https://twitter.com/share?url=https://github.com/OwlCarousel2/OwlCarousel2&amp;text=Owl%20Carousel%20-%20This%20is%20so%20awesome!%20" id="custom-tweet-button"></a>
