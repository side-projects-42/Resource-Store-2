### [owl.carousel.js](/OwlCarousel2/)

<span id="toggle-nav" class="right"> </span>

-   [Home](/OwlCarousel2/index.html)
-   [Demos](/OwlCarousel2/demos/demos.html)
-   [Docs](/OwlCarousel2/docs/started-welcome.html)
-   [Download](https://github.com/OwlCarousel2/OwlCarousel2/archive/2.3.4.zip) <span class="download"></span>

Video
=====

<a href="https://vimeo.com/23924346" class="owl-video"></a>

<a href="https://www.youtube.com/watch?v=JpxsRwnRwCQ" class="owl-video"></a>

<a href="https://www.youtube.com/watch?v=FBu_jxT1PkA" class="owl-video"></a>

<a href="https://www.youtube.com/watch?v=oy18DJwy5lI" class="owl-video"></a>

<a href="https://www.youtube.com/watch?v=H3jLkJrhHKQ" class="owl-video"></a>

<a href="https://www.youtube.com/watch?v=g3J4VxWIM6s" class="owl-video"></a>

<a href="https://www.youtube.com/watch?v=0fhoIate4qI" class="owl-video"></a>

<a href="https://www.youtube.com/watch?v=EF_kj2ojZaE" class="owl-video"></a>

### Overview

Enable video option:

    video:true

To add video into carousel just put `<a class="owl-video" href="_straight URL from YouTube, Vimeo, or vzaar"></a>`.

A tag is not mandatory, it can be any other tag but "owl-video" and href with url link is required.

Additional video options:

    videoWidth: false, // Default false; Type: Boolean/Number
    videoHeight: false, // Default false; Type: Boolean/Number

### Setup

        $('.owl-carousel').owlCarousel({
            items:1,
            merge:true,
            loop:true,
            margin:10,
            video:true,
            lazyLoad:true,
            center:true,
            responsive:{
                480:{
                    items:2
                },
                600:{
                    items:4
                }
            }
        })

### html

    <div class="owl-carousel owl-theme">
        <div class="item-video" data-merge="3"><a class="owl-video" href="https://vimeo.com/23924346"></a></div>
        <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ"></a></div>
        <div class="item-video" data-merge="2"><a class="owl-video" href="https://www.youtube.com/watch?v=FBu_jxT1PkA"></a></div>
        <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=oy18DJwy5lI"></a></div>
        <div class="item-video" data-merge="2"><a class="owl-video" href="https://www.youtube.com/watch?v=H3jLkJrhHKQ"></a></div>
        <div class="item-video" data-merge="3"><a class="owl-video" href="https://www.youtube.com/watch?v=g3J4VxWIM6s"></a></div>
        <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=0fhoIate4qI"></a></div>
        <div class="item-video" data-merge="2"><a class="owl-video" href="https://www.youtube.com/watch?v=EF_kj2ojZaE"></a></div>
    </div>

##### [David Deutsch](/OwlCarousel2/docs/support-contact.html) <a href="https://twitter.com/share?url=https://github.com/OwlCarousel2/OwlCarousel2&amp;text=Owl%20Carousel%20-%20This%20is%20so%20awesome!%20" id="custom-tweet-button"></a>
