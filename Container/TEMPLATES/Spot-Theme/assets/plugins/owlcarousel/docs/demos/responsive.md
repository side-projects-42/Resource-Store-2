### [owl.carousel.js](/OwlCarousel2/)

<span id="toggle-nav" class="right"> </span>

-   [Home](/OwlCarousel2/index.html)
-   [Demos](/OwlCarousel2/demos/demos.html)
-   [Docs](/OwlCarousel2/docs/started-welcome.html)
-   [Download](https://github.com/OwlCarousel2/OwlCarousel2/archive/2.3.4.zip) <span class="download"></span>

Responsive
==========

#### 1

#### 2

#### 3

#### 4

#### 5

#### 6

#### 7

#### 8

#### 9

#### 10

#### 11

#### 12

### Overview

> Responsive option can be used for setting breakpoints and additional options within. Try changing your browser width to see what happens with Items and Navigations.

#### About responsive option

Setting of the responsive is very simple. Structure of responsive option:

    responsive : {
        // breakpoint from 0 up
        0 : {
            option1 : value,
            option2 : value,
            ...
        },
        // breakpoint from 480 up
        480 : {
            option1 : value,
            option2 : value,
            ...
        },
        // breakpoint from 768 up
        768 : {
            option1 : value,
            option2 : value,
            ...
        }
    }

### Key facts:

-   Each breakpoint key can be a Number value (like in example) or a string: '480'.
-   Owl has an in-built sort option but it’s best to set from the smallest screens to the widest.
-   Responsive options **always** overwrite top level settings.
-   As default, the responsive option is set to true so carousel always tries to fit the wrapper (even if media queries are not support IE7/IE8 etc).
-   If you have non flexible layout then set `responsive:false`.

### Live Example

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })

------------------------------------------------------------------------

### Responsive related options:

#### responsiveClass

Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.

#### responsiveBaseElement

As default all responsive breakpoints are corresponding with `window` width. This option gives you an opportunity to change it to your own class/id like `responsiveBaseElement:".myCustomWrapper"`

#### responsiveRefreshRate

What this does is wait 200ms after you changed the browser width and performs refresh actions (calculating widths/ cloning items etc.) Default refresh rate is 200ms. I think this rate is optimal but you can change it if it’s to slow for you.

As not every option is able to use responsive abilities, here’s a full list of responsive options.

#### List of responsive options

-   items
-   loop
-   center
-   mouseDrag
-   touchDrag
-   pullDrag
-   freeDrag
-   margin
-   stagePadding
-   merge
-   mergeFit
-   autoWidth
-   autoHeight
-   nav
-   navRewind
-   slideBy
-   dots
-   dotsEach
-   autoplay
-   autoplayTimeout
-   smartSpeed
-   fluidSpeed
-   autoplaySpeed
-   navSpeed
-   dotsSpeed
-   dragEndSpeed
-   responsiveRefreshRate
-   animateOut
-   animateIn
-   fallbackEasing
-   callbacks
-   info
-   and all events

#### List of responsive only on load

-   startPosition
-   URLhashListener
-   navText
-   dotsData
-   lazyLoad
-   lazyContent
-   autoplayHoverPause
-   responsiveBaseElement
-   responsiveClass
-   video
-   videoHeight
-   videoWidth
-   nestedItemSelector
-   itemElement
-   stageElement
-   navContainer
-   dotsContainer
-   and all classes options

##### [David Deutsch](/OwlCarousel2/docs/support-contact.html) <a href="https://twitter.com/share?url=https://github.com/OwlCarousel2/OwlCarousel2&amp;text=Owl%20Carousel%20-%20This%20is%20so%20awesome!%20" id="custom-tweet-button"></a>
