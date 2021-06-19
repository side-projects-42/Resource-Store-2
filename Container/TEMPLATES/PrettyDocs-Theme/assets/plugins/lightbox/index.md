Lightbox for Bootstrap
======================

Utilizes Bootstraps modal plugin to implement a lightbox gallery - [GitHub](https://github.com/ashleydw/lightbox)

Install
-------

Grab the latest CSS / JS files from the CDN: <https://cdnjs.com/libraries/ekko-lightbox>.

Or, with bower: `bower install ekko-lightbox --save`

Or, download the files directly: <https://github.com/ashleydw/lightbox/tree/master/dist>

  
  

Place this near on your page, probably near the end of the body section:

`$(document).on('click', '[data-toggle="lightbox"]', function(event) {     event.preventDefault();     $(this).ekkoLightbox(); });`  
  

Then simply add `data-toggle` to your anchor tags.

`<a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox">     <img src="https://unsplash.it/600.jpg?image=251" class="img-fluid"> </a>`  
  

Obviously, you need Bootstrap. Made for Bootstrap v4 but \*should\* work with v3.

Options
-------

Options are passed down to the modal object so you can also use any of the [original modal options](http://getbootstrap.com/javascript/#modals-usage).

Pass the options to the calling function as an object, or set defaults using `$.fn.ekkoLightbox.defaults` (excluding modal default options, notable: title, footer, remote)

<table><thead><tr class="header"><th>Name</th><th>type</th><th>default</th><th>description</th><th>data-*</th></tr></thead><tbody><tr class="odd"><td>leftArrow / rightArrow</td><td>html</td><td><code>❮</code> / <code>❯</code></td><td>HTML for the arrows</td><td></td></tr><tr class="even"><td>wrapping</td><td>boolean</td><td><code>true</code></td><td>Whether the gallery should loop or not</td><td></td></tr><tr class="odd"><td>width / height</td><td>integer</td><td></td><td>Force the width / height</td><td><code>data-(width|height)="[0-9]+"</code></td></tr><tr class="even"><td>maxWidth / maxHeight</td><td>integer</td><td>9999</td><td>Limit the container width / height</td><td><code>data-(max-width|max-height)="[0-9]+"</code></td></tr><tr class="odd"><td>alwaysShowClose</td><td>boolean</td><td><code>false</code></td><td>Always show the close button, even if no title is present</td><td></td></tr><tr class="even"><td>loadingMessage</td><td>html</td><td>A fancy loader</td><td>HTML injected for loading</td><td></td></tr><tr class="odd"><td>showArrows</td><td>bool</td><td>true</td><td>Disable the navigation overlay</td><td></td></tr></tbody></table>

`$(this).ekkoLightbox({     alwaysShowClose: true,     onShown: function() {         console.log('Checking our the events huh?');     },     onNavigate: function(direction, itemIndex)         console.log('Navigating '+direction+'. Current item: '+itemIndex);     }     ... });`  
  

The following options are specified per element.

<table><thead><tr class="header"><th>Name</th><th>Description</th><th>Example</th></tr></thead><tbody><tr class="odd"><td>remote</td><td>If you can't/don't want to set the href property of an element</td><td><code>data-remote="http://www...."</code></td></tr><tr class="even"><td>gallery</td><td>For grouping elements</td><td><code>data-gallery="gallery-name"</code></td></tr><tr class="odd"><td>type</td><td>Force the lightbox into image/YouTube mode.</td><td><code>data-type="(image|youtube|vimeo)"</code></td></tr><tr class="even"><td>disable-external-check</td><td>Force the lightbox loading into an iframe.</td><td><code>data-disable-external-check="(true|false)"</code></td></tr></tbody></table>

`<a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="example-gallery" data-type="image">     <img src="https://unsplash.it/600.jpg?image=251" class="img-fluid"> </a>`

Events
------

Events can be hooked into, set the the same as options above.

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>onContentLoaded</td><td>Fired when content (image/video/remote page etc) has been fully loaded.</td></tr><tr class="even"><td>onNavigate</td><td>Fired before navigating a gallery.</td></tr><tr class="odd"><td>onShow/onShown/onHide/onHidden</td><td>Inherited from the bootstrap modal.</td></tr></tbody></table>

Examples
--------

Thanks to <https://unsplash.it/> for the images.

-   [Single Image](#single-image)
-   [Image Gallery](#image-gallery)
-   [Limit Image Size](#limit-size)
-   [Videos](#videos)
-   [Gallery of Videos](#videos-gallery)
-   [Mixed gallery](#mixed-gallery)
-   [Programmatically call](#programatically-call)
-   [Via `data-remote`](#data-remote)
-   [Force type](#force-type)
-   [Hidden elements](#hidden-elements)
-   [Remote content](#remote-content)
-   [Disable wrapping](#no-wrapping)

### Single Image

Note: uses modal plugin title option via `data-title`, and the custom footer tag using `data-footer`

[<img src="https://unsplash.it/600.jpg?image=250" class="img-fluid" />](https://unsplash.it/1200/768.jpg?image=250)

``

### Image Gallery

Galleries are created by adding the `data-gallery` attribute.

<a href="https://unsplash.it/1200/768.jpg?image=251" class="col-sm-4"><img src="https://unsplash.it/600.jpg?image=251" class="img-fluid" /></a> <a href="https://unsplash.it/1200/768.jpg?image=252" class="col-sm-4"><img src="https://unsplash.it/600.jpg?image=252" class="img-fluid" /></a> <a href="https://unsplash.it/1200/768.jpg?image=253" class="col-sm-4"><img src="https://unsplash.it/600.jpg?image=253" class="img-fluid" /></a>

<a href="https://unsplash.it/1200/768.jpg?image=254" class="col-sm-4"><img src="https://unsplash.it/600.jpg?image=254" class="img-fluid" /></a> <a href="https://unsplash.it/1200/768.jpg?image=255" class="col-sm-4"><img src="https://unsplash.it/600.jpg?image=255" class="img-fluid" /></a> <a href="https://unsplash.it/1200/768.jpg?image=256" class="col-sm-4"><img src="https://unsplash.it/600.jpg?image=256" class="img-fluid" /></a>

``

### Limit Image Size

Note: uses modal plugin limiting via `data-max-width` (or `data-max-height`)

[<img src="https://unsplash.it/600.jpg?image=250" class="img-fluid" />](https://unsplash.it/1200/768.jpg?image=250)

``

### Videos

#### YouTube

You can use various YouTube URL formats, the regex used is: `/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/`

[Justin Bieber - Love Yourself](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

[Tame Impala - Elephant (using youtu.be link)](http://youtu.be/b0jqPvpn3sY)

[Justin Bieber - Love Yourself](https://www.youtube.com/watch?v=oyEuk8j8imI&rel=0) (suppress related videos with `&rel=0`)

``

#### Vimeo

You cannot embed Vimeo videos using the standard url (ie http://vimeo.com/80629469); you must link to the embed source (ie player.vimeo.com/video/80629469). This will mean your link url - if the JavaScript fails, will open the full screen player (try opening the first link below in a new tab); the solution to this is to set the lightbox source directly - the second link below does this.

[City Lights - from Colin Rich (using embed link)](http://player.vimeo.com/video/80629469)

[City Lights - from Colin Rich](http://vimeo.com/80629469) (with reccommended `data-remote` setting)

``

#### Instagram

[Instagram](http://instagram.com/p/BRCYe_wD9pV/)

This also works with photos: [Instagram](//instagram.com/p/BRCdyxnjBsA/)

``

#### Forcing width

Set the width of the video

[Taylor Swift - Blank Space (standard)](https://www.youtube.com/watch?v=e-ORhEE9VVg)

[Taylor Swift - Blank Space (640 x 360)](https://www.youtube.com/watch?v=e-ORhEE9VVg)

[Taylor Swift - Blank Space (1280 x 780)](https://www.youtube.com/watch?v=e-ORhEE9VVg)

``

### Gallery of Videos

<a href="http://www.youtube.com/watch?v=k6mFF3VmVAs" class="col-sm-4"><img src="http://i1.ytimg.com/vi/yP11r5n5RNg/mqdefault.jpg" class="img-fluid" /></a> <a href="http://youtu.be/iQ4D273C7Ac" class="col-sm-4"><img src="http://i1.ytimg.com/vi/iQ4D273C7Ac/mqdefault.jpg" class="img-fluid" /></a> <a href="//www.youtube.com/embed/b0jqPvpn3sY" class="col-sm-4"><img src="http://i1.ytimg.com/vi/b0jqPvpn3sY/mqdefault.jpg" class="img-fluid" /></a>

``

### Mixed gallery

<a href="http://www.youtube.com/watch?v=k6mFF3VmVAs" class="col-sm-4"><img src="http://i1.ytimg.com/vi/yP11r5n5RNg/mqdefault.jpg" class="img-fluid" /></a> <a href="https://unsplash.it/1200/768.jpg?image=257" class="col-sm-4"><img src="https://unsplash.it/600.jpg?image=257" class="img-fluid" /></a> <a href="http://vimeo.com/80629469" class="col-sm-4"><img src="http://b.vimeocdn.com/ts/458/070/458070637_200.jpg" class="img-fluid" /></a>

``

### Programmatically call

These two examples are opened via the JavaScript at the bottom of the source.

<a href="https://unsplash.it/1200/768.jpg?image=258" id="open-image" class="col-6"><img src="https://unsplash.it/600.jpg?image=258" class="img-fluid" /></a> <a href="http://youtu.be/iQ4D273C7Ac" id="open-youtube" class="col-6"><img src="http://i1.ytimg.com/vi/iQ4D273C7Ac/mqdefault.jpg" class="img-fluid" /></a>

`` `$('#open-image').click(function (e) {     e.preventDefault();     $(this).ekkoLightbox(); }); $('#open-youtube').click(function (e) {     e.preventDefault();     $(this).ekkoLightbox(); });`

### Via `data-remote`

Neither of these are `<a />` tags, so both rely on the `data-remote` attribute.

<img src="https://unsplash.it/600.jpg?image=259" class="img-fluid col-6" /> <img src="http://i1.ytimg.com/vi/b0jqPvpn3sY/mqdefault.jpg" class="img-fluid col-6" />

``

### Force type

If the images you are linking to have no extension, the lightbox cannot detect that is an image; therefore you need to tell the lightbox what `data-type` it is.

Current allowed types are: `['image', 'youtube', 'vimeo', 'instagram', 'video', 'url']`

[Click here for an image, but with no extension.](https://unsplash.it/1200/768?image=260)

[This link is missing the type attribute, and will iframe the image.](https://unsplash.it/1200/768?image=261)

[This link is linking to a YouTube video, but forcing an image.](http://www.youtube.com/watch?v=b0jqPvpn3sY)

``

### Hidden elements

Facebook style, only show a few images but have a large gallery

<a href="https://unsplash.it/1200/768.jpg?image=263" class="col-4"><img src="https://unsplash.it/600.jpg?image=263" class="img-fluid" /></a> <a href="https://unsplash.it/1200/768.jpg?image=264" class="col-4"><img src="https://unsplash.it/600.jpg?image=264" class="img-fluid" /></a> <a href="https://unsplash.it/1200/768.jpg?image=265" class="col-4"><img src="https://unsplash.it/600.jpg?image=265" class="img-fluid" /></a>

``

### Remote content

Given a URL, that is not an image or video (including unforced types), load the content using an iFrame.

[Bootstrap Docs](http://getbootstrap.com)

``

### Disable wrapping

To disable wrapping, set \`wrapping\` to false when creating a gallery.

<a href="https://unsplash.it/1200/768.jpg?image=251" class="col-sm-4"><img src="https://unsplash.it/600.jpg?image=251" class="img-fluid" /></a> <a href="https://unsplash.it/1200/768.jpg?image=252" class="col-sm-4"><img src="https://unsplash.it/600.jpg?image=252" class="img-fluid" /></a> <a href="https://unsplash.it/1200/768.jpg?image=253" class="col-sm-4"><img src="https://unsplash.it/600.jpg?image=253" class="img-fluid" /></a>

<a href="https://unsplash.it/1200/768.jpg?image=254" class="col-sm-4"><img src="https://unsplash.it/600.jpg?image=254" class="img-fluid" /></a> <a href="https://unsplash.it/1200/768.jpg?image=255" class="col-sm-4"><img src="https://unsplash.it/600.jpg?image=255" class="img-fluid" /></a> <a href="https://unsplash.it/1200/768.jpg?image=256" class="col-sm-4"><img src="https://unsplash.it/600.jpg?image=256" class="img-fluid" /></a>

`$(this).ekkoLightbox({ wrapping: false });`

Built by me, [ashleydw](https://ashleyd.ws)
