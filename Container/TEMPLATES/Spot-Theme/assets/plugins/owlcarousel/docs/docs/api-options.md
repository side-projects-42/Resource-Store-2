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

Options
-------

> List including all options from built-in plugins video, lazyload, autoheight and animate.

#### items

Type: `Number`  
Default: `3`

The number of items you want to see on the screen.

------------------------------------------------------------------------

#### margin

Type: `Number`  
Default: `0`

margin-right(px) on item.

------------------------------------------------------------------------

#### loop

Type: `Boolean`  
Default: `false`

Infinity loop. Duplicate last and first items to get loop illusion.

------------------------------------------------------------------------

#### center

Type: `Boolean`  
Default: `false`

Center item. Works well with even an odd number of items.

------------------------------------------------------------------------

#### mouseDrag

Type: `Boolean`  
Default: `true`

Mouse drag enabled.

------------------------------------------------------------------------

#### touchDrag

Type: `Boolean`  
Default: `true`

Touch drag enabled.

------------------------------------------------------------------------

#### pullDrag

Type: `Boolean`  
Default: `true`

Stage pull to edge.

------------------------------------------------------------------------

#### freeDrag

Type: `Boolean`  
Default: `false`

Item pull to edge.

------------------------------------------------------------------------

#### stagePadding

Type: `Number`  
Default: `0`

Padding left and right on stage (can see neighbours).

------------------------------------------------------------------------

#### merge

Type: `Boolean`  
Default: `false`

Merge items. Looking for data-merge='{number}' inside item..

------------------------------------------------------------------------

#### mergeFit

Type: `Boolean`  
Default: `true`

Fit merged items if screen is smaller than items value.

------------------------------------------------------------------------

#### autoWidth

Type: `Boolean`  
Default: `false`

Set non grid content. Try using width style on divs.

------------------------------------------------------------------------

#### startPosition

Type: `Number/String`  
Default: `0`

Start position or URL Hash string like '\#id'.

------------------------------------------------------------------------

#### URLhashListener

Type: `Boolean`  
Default: `false`

Listen to url hash changes. data-hash on items is required.

------------------------------------------------------------------------

#### nav

Type: `Boolean`  
Default: `false`

Show next/prev buttons.

------------------------------------------------------------------------

#### rewind

Type: `Boolean`  
Default: `true`

Go backwards when the boundary has reached.

------------------------------------------------------------------------

#### navText

Type: `Array`  
Default: `[&#x27;next&#x27;,&#x27;prev&#x27;]`

HTML allowed.

------------------------------------------------------------------------

#### navElement

Type: `String`  
Default: `div`

DOM element type for a single directional navigation link.

------------------------------------------------------------------------

#### slideBy

Type: `Number/String`  
Default: `1`

Navigation slide by x. 'page' string can be set to slide by page.

------------------------------------------------------------------------

#### slideTransition

Type: `String`  
Default: \`\`

You can define the transition for the stage you want to use eg. linear.

------------------------------------------------------------------------

#### dots

Type: `Boolean`  
Default: `true`

Show dots navigation.

------------------------------------------------------------------------

#### dotsEach

Type: `Number/Boolean`  
Default: `false`

Show dots each x item.

------------------------------------------------------------------------

#### dotsData

Type: `Boolean`  
Default: `false`

Used by data-dot content.

------------------------------------------------------------------------

#### lazyLoad

Type: `Boolean`  
Default: `false`

Lazy load images. data-src and data-src-retina for highres. Also load images into background inline style if element is not &lt;img&gt;

------------------------------------------------------------------------

#### lazyLoadEager

Type: `Number`  
Default: `0`

Eagerly pre-loads images to the right (and left when loop is enabled) based on how many items you want to preload.

------------------------------------------------------------------------

#### autoplay

Type: `Boolean`  
Default: `false`

Autoplay.

------------------------------------------------------------------------

#### autoplayTimeout

Type: `Number`  
Default: `5000`

Autoplay interval timeout.

------------------------------------------------------------------------

#### autoplayHoverPause

Type: `Boolean`  
Default: `false`

Pause on mouse hover.

------------------------------------------------------------------------

#### smartSpeed

Type: `Number`  
Default: `250`

Speed Calculate. More info to come..

------------------------------------------------------------------------

#### fluidSpeed

Type: `Boolean`  
Default: `Number`

Speed Calculate. More info to come..

------------------------------------------------------------------------

#### autoplaySpeed

Type: `Number/Boolean`  
Default: `false`

autoplay speed.

------------------------------------------------------------------------

#### navSpeed

Type: `Number/Boolean`  
Default: `false`

Navigation speed.

------------------------------------------------------------------------

#### dotsSpeed

Type: `Boolean`  
Default: `Number/Boolean`

Pagination speed.

------------------------------------------------------------------------

#### dragEndSpeed

Type: `Number/Boolean`  
Default: `false`

Drag end speed.

------------------------------------------------------------------------

#### callbacks

Type: `Boolean`  
Default: `true`

Enable callback events.

------------------------------------------------------------------------

#### responsive

Type: `Object`  
Default: `empty object`

Object containing responsive options. Can be set to false to remove responsive capabilities.

------------------------------------------------------------------------

#### responsiveRefreshRate

Type: `Number`  
Default: `200`

Responsive refresh rate.

------------------------------------------------------------------------

#### responsiveBaseElement

Type: `DOM element`  
Default: `window`

Set on any DOM element. If you care about non responsive browser (like ie8) then use it on main wrapper. This will prevent from crazy resizing.

------------------------------------------------------------------------

#### video

Type: `Boolean`  
Default: `false`

Enable fetching YouTube/Vimeo/Vzaar videos.

------------------------------------------------------------------------

#### videoHeight

Type: `Number/Boolean`  
Default: `false`

Set height for videos.

------------------------------------------------------------------------

#### videoWidth

Type: `Number/Boolean`  
Default: `false`

Set width for videos.

------------------------------------------------------------------------

#### animateOut

Type: `String/Boolean`  
Default: `false`

Class for CSS3 animation out.

------------------------------------------------------------------------

#### animateIn

Type: `String/Boolean`  
Default: `false`

Class for CSS3 animation in.

------------------------------------------------------------------------

#### fallbackEasing

Type: `String`  
Default: `swing`

Easing for CSS2 $.animate.

------------------------------------------------------------------------

#### info

Type: `Function`  
Default: `false`

Callback to retrieve basic information (current item/pages/widths). Info function second parameter is Owl DOM object reference.

------------------------------------------------------------------------

#### nestedItemSelector

Type: `String/Class`  
Default: `false`

Use it if owl items are deep nested inside some generated content. E.g 'youritem'. Dont use dot before class name.

------------------------------------------------------------------------

#### itemElement

Type: `String`  
Default: `div`

DOM element type for owl-item.

------------------------------------------------------------------------

#### stageElement

Type: `String`  
Default: `div`

DOM element type for owl-stage.

------------------------------------------------------------------------

#### navContainer

Type: `String/Class/ID/Boolean`  
Default: `false`

Set your own container for nav.

------------------------------------------------------------------------

#### dotsContainer

Type: `String/Class/ID/Boolean`  
Default: `false`

Set your own container for nav.

------------------------------------------------------------------------

#### checkVisible

Type: `Boolean`  
Default: `true`

If you know the carousel will always be visible you can set \`checkVisibility\` to \`false\` to prevent the expensive browser layout forced reflow the $element.is(':visible') does.

------------------------------------------------------------------------

### Next Step

#### [Classes](api-classes.html)

##### [David Deutsch](/OwlCarousel2/docs/support-contact.html) <a href="https://twitter.com/share?url=https://github.com/OwlCarousel2/OwlCarousel2&amp;text=Owl%20Carousel%20-%20This%20is%20so%20awesome!%20" id="custom-tweet-button"></a>
