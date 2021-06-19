### [owl.carousel.js](/OwlCarousel2/)

<span id="toggle-nav" class="right"> </span>

-   [Home](/OwlCarousel2/index.html)
-   [Demos](/OwlCarousel2/demos/demos.html)
-   [Docs](/OwlCarousel2/docs/started-welcome.html)
-   [Download](https://github.com/OwlCarousel2/OwlCarousel2/archive/2.3.4.zip) <span class="download"></span>

API
===

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

Classes
-------

This is an example of how html is rendered. With the following options you can change almost every class the way you want

    <div class="owl-carousel owl-theme owl-loaded">
        <div class="owl-stage-outer">
            <div class="owl-stage">
                <div class="owl-item">...</div>
                <div class="owl-item">...</div>
                <div class="owl-item">...</div>
            </div>
        </div>
        <div class="owl-nav">
            <div class="owl-prev">prev</div>
            <div class="owl-next">next</div>
        </div>
        <div class="owl-dots">
            <div class="owl-dot active"><span></span></div>
            <div class="owl-dot"><span></span></div>
            <div class="owl-dot"><span></span></div>
        </div>
    </div>

### Options

#### refreshClass

Type: `String`  
Default: `owl-refresh`

Class during refresh.

------------------------------------------------------------------------

#### loadingClass

Type: `String`  
Default: `owl-loading`

Class during load.

------------------------------------------------------------------------

#### loadedClass

Type: `String`  
Default: `owl-loaded`

Class after load.

------------------------------------------------------------------------

#### rtlClass

Type: `String`  
Default: `owl-rtl`

Class for right to left mode.

------------------------------------------------------------------------

#### dragClass

Type: `String`  
Default: `owl-drag`

Class for mouse drag mode.

------------------------------------------------------------------------

#### grabClass

Type: `String`  
Default: `owl-grab`

Class during mouse drag.

------------------------------------------------------------------------

#### stageClass

Type: `String`  
Default: `owl-stage`

Stage class.

------------------------------------------------------------------------

#### stageOuterClass

Type: `String`  
Default: `owl-stage-outer`

Stage outer class.

------------------------------------------------------------------------

#### navContainerClass

Type: `String`  
Default: `owl-nav`

Navigation container class.

------------------------------------------------------------------------

#### navClass

Type: `Array`  
Default: `[&#x27;owl-prev&#x27;,&#x27;owl-next&#x27;]`

Navigation buttons classes.

------------------------------------------------------------------------

#### dotClass

Type: `String`  
Default: `owl-dot`

Dot Class.

------------------------------------------------------------------------

#### dotsClass

Type: `String`  
Default: `owl-dots`

Dots container class.

------------------------------------------------------------------------

#### autoHeightClass

Type: `String`  
Default: `owl-height`

Auto height class.

------------------------------------------------------------------------

#### responsiveClass

Type: `String|Boolean`  
Default: `false`

Optional helper class. Add '&lt;responsiveClass&gt;-&lt;breakpoint&gt;' class to main element. Can be used to stylize content on given breakpoint.

------------------------------------------------------------------------

### Next Step

#### [Events](api-events.html)

##### [David Deutsch](/OwlCarousel2/docs/support-contact.html) <a href="https://twitter.com/share?url=https://github.com/OwlCarousel2/OwlCarousel2&amp;text=Owl%20Carousel%20-%20This%20is%20so%20awesome!%20" id="custom-tweet-button"></a>
