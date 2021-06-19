### [owl.carousel.js](/OwlCarousel2/)

<span id="toggle-nav" class="right"> </span>

-   [Home](/OwlCarousel2/index.html)
-   [Demos](/OwlCarousel2/demos/demos.html)
-   [Docs](/OwlCarousel2/docs/started-welcome.html)
-   [Download](https://github.com/OwlCarousel2/OwlCarousel2/archive/2.3.4.zip) <span class="download"></span>

Merge
=====

#### 1

#### 2

#### 3

#### 4

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

### Overview

Merge option requires `data-merge="number_items_to_merge"` on any child element (can be nested as well). There is a sibling option called `mergeFit` which fits merged elements to screen size.

See item 6 on breakpoint below and above `1000px` screen width.

### Setup

    $('.owl-carousel').owlCarousel({
        items:5,
        loop:true,
        margin:10,
        merge:true,
        responsive:{
            678:{
                mergeFit:true
            },
            1000:{
                mergeFit:false
            }
        }
    });

### html

    <div class="owl-carousel owl-theme">
        <div class="item" data-merge="1"><h2>1</h2></div>
        <div class="item" data-merge="2"><h2>2</h2></div>
        <div class="item" data-merge="1"><h2>3</h2></div>
        <div class="item" data-merge="3"><h2>4</h2></div>
        <div class="item" data-merge="6"><h2>6</h2></div>
        <div class="item" data-merge="2"><h2>7</h2></div>
        <div class="item" data-merge="1"><h2>8</h2></div>
        <div class="item" data-merge="3"><h2>9</h2></div>
        <div class="item"><h2>10</h2></div>
        <div class="item"><h2>11</h2></div>
        <div class="item" data-merge="2"><h2>12</h2></div>
        <div class="item"><h2>13</h2></div>
        <div class="item"><h2>14</h2></div>
        <div class="item"><h2>15</h2></div>
    </div>

##### [David Deutsch](/OwlCarousel2/docs/support-contact.html) <a href="https://twitter.com/share?url=https://github.com/OwlCarousel2/OwlCarousel2&amp;text=Owl%20Carousel%20-%20This%20is%20so%20awesome!%20" id="custom-tweet-button"></a>
