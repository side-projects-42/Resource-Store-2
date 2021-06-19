jQuery Flipster
===============

[![](http://api.libscore.com/badge/$.fn.flipster.svg)](http://libscore.com/#$.fn.flipster) [Default Settings (Coverflow)](#demo-default) [Carousel](#demo-carousel) [Wheel](#demo-wheel) [Flat](#demo-flat)

jQuery Flipster is a CSS3 3D transform-based jQuery plugin built to replicate the familiar 'cover flow' effect, but also supports a variety of styles. Not only is it gorgeous to look at, Flipster is also:

-   **Responsive** Automatically centers and scales to fit the area provided.
-   **Touch Friendly** Swipe between items on touch devices without interrupting scroll.
-   **Lightweight** Javascript and CSS combined are only 5kb gzipped (13kb without gzip). Only dependency is jQuery.
-   **Customizable** Four built in styles (coverflow, carousel, wheel and flat) with plenty of options to configure Flipster the way you want

But don't take our word for it. Check out the demos below, or [download from GitHub](https://github.com/drien/jquery-flipster) to try it yourself.

Default Settings (Coverflow)
----------------------------

-   ![](img/text1.gif)
-   ![](img/text2.gif)
-   ![](img/text3.gif)
-   ![](img/text4.gif)
-   ![](img/text5.gif)
-   ![](img/text6.gif)
-   ![](img/text7.gif)
-   ![](img/text8.gif)
-   ![](img/text9.gif)
-   ![](img/text10.gif)

    $("#coverflow").flipster();

Flipster Carousel
-----------------

-   ![](img/text1.gif)
-   ![](img/text2.gif)
-   ![](img/text3.gif)
-   ![](img/text4.gif)
-   ![](img/text5.gif)
-   ![](img/text6.gif)
-   ![](img/text7.gif)
-   ![](img/text8.gif)
-   ![](img/text9.gif)
-   ![](img/text10.gif)
-   ![](img/text11.gif)
-   ![](img/text12.gif)
-   ![](img/text13.gif)
-   ![](img/text14.gif)

    $("#carousel").flipster({
        style: 'carousel',
        spacing: -0.5,
        nav: true,
        buttons: true,
    });

Flipster Wheel
--------------

-   ![](img/text1.gif)
-   ![](img/text2.gif)
-   ![](img/text3.gif)
-   ![](img/text4.gif)
-   ![](img/text5.gif)
-   ![](img/text6.gif)
-   ![](img/text7.gif)
-   ![](img/text8.gif)
-   ![](img/text9.gif)
-   ![](img/text10.gif)
-   ![](img/text11.gif)
-   ![](img/text12.gif)
-   ![](img/text13.gif)
-   ![](img/text14.gif)

    $("#wheel").flipster({
        style: 'wheel',
        spacing: 0
    });

Flipster Flat
-------------

-   ![](img/text1.gif)
-   ![](img/text2.gif)
-   ![](img/text3.gif)
-   ![](img/text4.gif)
-   ![](img/text5.gif)
-   ![](img/text6.gif)
-   ![](img/text7.gif)
-   ![](img/text8.gif)
-   ![](img/text9.gif)
-   ![](img/text10.gif)

    $("#flat").flipster({
        style: 'flat',
        spacing: -0.25
    });

[![Fork me on GitHub](https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67)](https://github.com/drien/jquery-flipster/)
