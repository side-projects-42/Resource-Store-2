### [owl.carousel.js](/OwlCarousel2/)

<span id="toggle-nav" class="right"> </span>

-   [Home](/OwlCarousel2/index.html)
-   [Demos](/OwlCarousel2/demos/demos.html)
-   [Docs](/OwlCarousel2/docs/started-welcome.html)
-   [Download](https://github.com/OwlCarousel2/OwlCarousel2/archive/2.3.4.zip) <span class="download"></span>

Getting Started
===============

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

Installation
------------

------------------------------------------------------------------------

### Include CSS

First, include two CSS files into your HTML head:

    <link rel="stylesheet" href="owlcarousel/owl.carousel.min.css">
    <link rel="stylesheet" href="owlcarousel/owl.theme.default.min.css">

> `owl.carousel.css` file is required and should be included before any \*.js files.

Second `owl.theme.default.css` file is optional and feel free to edit it. However, it is required if you'd like the default nav controls like dots or next buttons. Inside the source package you can also find [SCSS](http://sass-lang.com/) files for easy generation of your own themes.

### Include JS

Yep, include jQuery and `owl.carousel.min.js` into the footer.

    <script src="jquery.min.js"></script>
    <script src="owlcarousel/owl.carousel.min.js"></script>

### Set HTML

You don't need any special markup. All you need is to wrap your divs(owl works with any type element a/img/span..) inside the container element `<div class="owl-carousel">`. Class "owl-carousel" is mandatory to apply proper styles that come from owl.carousel.css file. If you want the default nav controls like dots or buttons, you must also include the "owl-theme" class on that same div.

    <!-- Set up your HTML -->
    <div class="owl-carousel">
      <div> Your Content </div>
      <div> Your Content </div>
      <div> Your Content </div>
      <div> Your Content </div>
      <div> Your Content </div>
      <div> Your Content </div>
      <div> Your Content </div>
    </div>

### Call the plugin

Now call the Owl initializer function and your carousel is ready.

    $(document).ready(function(){
      $(".owl-carousel").owlCarousel();
    });

> See [demos](/OwlCarousel2/demos/demos.html) for customisation and options usage.

### Next Step

#### [FAQ](started-faq.html)

##### [David Deutsch](/OwlCarousel2/docs/support-contact.html) <a href="https://twitter.com/share?url=https://github.com/OwlCarousel2/OwlCarousel2&amp;text=Owl%20Carousel%20-%20This%20is%20so%20awesome!%20" id="custom-tweet-button"></a>
