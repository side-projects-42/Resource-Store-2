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

Events
------

> Events are provided by Owl Carousel in strategic code locations. This gives you the ability to listen for any changes and perform your own actions.

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function(event) {
        ...
    })

You could also trigger events by yourself to control Owl Carousel:

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

### Callbacks

Instead of attaching an event handler you can also just add a callback to the options of Owl Carousel.

    $('.owl-carousel').owlCarousel({
        onDragged: callback
    });
    function callback(event) {
        ...
    }

### Data

Each event passes very useful information within the [event object](https://api.jquery.com/category/events/event-object/) . Based on the example above:

    function callback(event) {
        // Provided by the core
        var element   = event.target;         // DOM element, in this example .owl-carousel
        var name      = event.type;           // Name of the event, in this example dragged
        var namespace = event.namespace;      // Namespace of the event, in this example owl.carousel
        var items     = event.item.count;     // Number of items
        var item      = event.item.index;     // Position of the current item
        // Provided by the navigation plugin
        var pages     = event.page.count;     // Number of pages
        var page      = event.page.index;     // Position of the current page
        var size      = event.page.size;      // Number of items per page
    }

### Carousel

#### initialize.owl.carousel

Type: `attachable`  
Callback: `onInitialize`  

When the plugin initializes.

------------------------------------------------------------------------

#### initialized.owl.carousel

Type: `attachable`  
Callback: `onInitialized`  

When the plugin has initialized.

------------------------------------------------------------------------

#### resize.owl.carousel

Type: `attachable`  
Callback: `onResize`  

When the plugin gets resized.

------------------------------------------------------------------------

#### resized.owl.carousel

Type: `attachable`  
Callback: `onResized`  

When the plugin has resized.

------------------------------------------------------------------------

#### refresh.owl.carousel

Type: `attachable, cancelable, triggerable`  
Callback: `onRefresh`  
Parameter: `[event, speed]`  

When the internal state of the plugin needs update.

------------------------------------------------------------------------

#### refreshed.owl.carousel

Type: `attachable`  
Callback: `onRefreshed`  

When the internal state of the plugin has updated.

------------------------------------------------------------------------

#### drag.owl.carousel

Type: `attachable`  
Callback: `onDrag`  

When the dragging of an item is started.

------------------------------------------------------------------------

#### dragged.owl.carousel

Type: `attachable`  
Callback: `onDragged`  

When the dragging of an item has finished.

------------------------------------------------------------------------

#### translate.owl.carousel

Type: `attachable`  
Callback: `onTranslate`  

When the translation of the stage starts.

------------------------------------------------------------------------

#### translated.owl.carousel

Type: `attachable`  
Callback: `onTranslated`  

When the translation of the stage has finished.

------------------------------------------------------------------------

#### change.owl.carousel

Type: `attachable`  
Callback: `onChange`  
Parameter: `property`  

When a property is going to change its value.

------------------------------------------------------------------------

#### changed.owl.carousel

Type: `attachable`  
Callback: `onChanged`  
Parameter: `property`  

When a property has changed its value.

------------------------------------------------------------------------

#### next.owl.carousel

Type: `triggerable`  
Parameter: `[speed]`  

Goes to next item.

------------------------------------------------------------------------

#### prev.owl.carousel

Type: `triggerable`  
Parameter: `[speed]`  

Goes to previous item.

------------------------------------------------------------------------

#### to.owl.carousel

Type: `triggerable`  
Parameter: `[position, speed]`  

Goes to position.

------------------------------------------------------------------------

#### destroy.owl.carousel

Type: `triggerable`  

Destroys carousel.

------------------------------------------------------------------------

#### replace.owl.carousel

Type: `triggerable`  
Parameter: `data`  

Removes current content and add a new one passed in the parameter.

------------------------------------------------------------------------

#### add.owl.carousel

Type: `triggerable`  
Parameter: `[data, position]`  

Adds a new item on a given position.

------------------------------------------------------------------------

#### remove.owl.carousel

Type: `triggerable`  
Parameter: `position`  

Removes an item from a given position.

------------------------------------------------------------------------

### Lazy

#### load.owl.lazy

Type: `attachable`  
Callback: `onLoadLazy`  

When lazy image loads.

------------------------------------------------------------------------

#### loaded.owl.lazy

Type: `attachable`  
Callback: `onLoadedLazy`  

When lazy image has loaded.

------------------------------------------------------------------------

### Autoplay

#### play.owl.autoplay

Type: `triggerable`  
Parameter: `[timeout, speed]`  

Runs autoplay.

------------------------------------------------------------------------

#### stop.owl.autoplay

Type: `triggerable`  

Stops autoplay.

------------------------------------------------------------------------

### Video

#### stop.owl.video

Type: `attachable`  
Callback: `onStopVideo`  

When video has unloaded.

------------------------------------------------------------------------

#### play.owl.video

Type: `attachable`  
Callback: `onPlayVideo`  

When video has loaded.

------------------------------------------------------------------------

##### [David Deutsch](/OwlCarousel2/docs/support-contact.html) <a href="https://twitter.com/share?url=https://github.com/OwlCarousel2/OwlCarousel2&amp;text=Owl%20Carousel%20-%20This%20is%20so%20awesome!%20" id="custom-tweet-button"></a>
