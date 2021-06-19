### [owl.carousel.js](/OwlCarousel2/)

<span id="toggle-nav" class="right"> </span>

-   [Home](/OwlCarousel2/index.html)
-   [Demos](/OwlCarousel2/demos/demos.html)
-   [Docs](/OwlCarousel2/docs/started-welcome.html)
-   [Download](https://github.com/OwlCarousel2/OwlCarousel2/archive/2.3.4.zip) <span class="download"></span>

Url Hash Navigation
===================

#### 0

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

#### 13

#### 14

#### 15

------------------------------------------------------------------------

<a href="#zero" class="button secondary url">zero</a> <a href="#three" class="button secondary url">three</a> <a href="#five" class="button secondary url">five</a> <a href="#seven" class="button secondary url">seven</a> <a href="#ten" class="button secondary url">ten</a>

### Overview

> URLhashListener option is listening for url hash change and is looking for slide with the same data name e.g. `data-hash="zero"`

Also `startPosition` option accept string: `'URLHash'`. This will load corresponding items on startup. Browser history back button is also affected.

### Setup

        $('.owl-carousel').owlCarousel({
            items:4,
            loop:false,
            center:true,
            margin:10,
            URLhashListener:true,
            autoplayHoverPause:true,
            startPosition: 'URLHash'
        });

##### [David Deutsch](/OwlCarousel2/docs/support-contact.html) <a href="https://twitter.com/share?url=https://github.com/OwlCarousel2/OwlCarousel2&amp;text=Owl%20Carousel%20-%20This%20is%20so%20awesome!%20" id="custom-tweet-button"></a>
