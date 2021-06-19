### [owl.carousel.js](/OwlCarousel2/)

<span id="toggle-nav" class="right"> </span>

-   [Home](/OwlCarousel2/index.html)
-   [Demos](/OwlCarousel2/demos/demos.html)
-   [Docs](/OwlCarousel2/docs/started-welcome.html)
-   [Download](https://github.com/OwlCarousel2/OwlCarousel2/archive/2.3.4.zip) <span class="download"></span>

Animate
=======

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

To get fade out effect just set:

    animateOut: 'fadeOut'

> `fadeOut` value is the only built-in CSS animate style. However there are tons of additional CSS animations that you can use in Owl. Simply download [animate.css](https://daneden.github.io/animate.css/) library and you are ready to extend Owl with new fancy transitions.

### Important

Animate functions work only with one item and only in browsers that support perspective property.

### How to use additional animation from `animate.css` library

1.  [Download animate.css](https://daneden.github.io/animate.css/)
2.  Include animate.css into header.
3.  Set `animateOut` and `animateIn` options with the style names you picked.

<!-- -->

    $('.custom1').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450
    });

Example with slideOutDown and flipInX

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

### How does it work?

Before animation starts three classes are added to each item:

-   .animated - added on both In and Out item - ive included this class from Animate.css into Owl core CSS file.
-   .owl-animated-out - only on Out item - use it to change z-index
-   .owl-animated-in - only on In item - use it to change z-index
-   .classNameOut - only on Out item - this is your custom animation class from options.
-   .classNameIn - only on In item - this is your custom animation class from options.

Part of owl.carousel.css:

    /* Feel free to change duration  */ 
    .animated  {
      -webkit-animation-duration : 1000 ms  ;
      animation-duration : 1000 ms  ;
      -webkit-animation-fill-mode : both  ;
      animation-fill-mode : both  ;
    }  
    /* .owl-animated-out - only for current item */ 
    /* This is very important class. Use z-index if you want move Out item above In item */ 
    .owl-animated-out {
      z-index : 1 
       }
    /* .owl-animated-in - only for upcoming item
    /* This is very important class. Use z-index if you want move In item above Out item */ 
    .owl-animated-in {
      z-index : 0 
       }
    /* .fadeOut is style taken from Animation.css and this is how it looks in owl.carousel.css:  */ 
    .fadeOut  {
      -webkit-animation-name : fadeOut  ;
      animation-name : fadeOut  ;
    }  
    @-webkit-keyframes  fadeOut  {
      0% {
        opacity : 1   ;
      }  
      100% {
        opacity : 0   ;
      }  
    }
    @keyframes  fadeOut  {
      0% {
        opacity : 1   ;
      }  
      100% {
        opacity : 0   ;
      }  
    }

##### [David Deutsch](/OwlCarousel2/docs/support-contact.html) <a href="https://twitter.com/share?url=https://github.com/OwlCarousel2/OwlCarousel2&amp;text=Owl%20Carousel%20-%20This%20is%20so%20awesome!%20" id="custom-tweet-button"></a>
