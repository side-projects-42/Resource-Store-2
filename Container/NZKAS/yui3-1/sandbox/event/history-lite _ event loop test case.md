1

<a href="#page=2" id="next" title="click this or press →">next page →</a>

This page attempts to induce the [history-lite](http://yuilibrary.com/gallery/show/history-lite) module to fire the `history-lite:change` the event continously. On Safari 4 and Firefox 3 on Mac OS X Snow-Leopard, I’ve only been able to do this when the browser back button takes the user back to the original landing page.

Open the console, and [reload](index.html) the page with no anchor parameters and no `#` character in the location URL. When the page is first loaded, the `draw_anchor` function is called in [site.js](site.js) – it draws the page number based any `page=` anchor values in the URL. If there are none, the page number defaults to `1`.

Press → or click the `next` link to increase the page value. The history-lite module's `add` method gets called every time the value of the page is changed – a second parameter value of `true` is passed to `add` to indicate I don’t want the `history-lite:change` event to fire …

Now click the browser back button until the URL returns to its original state, without any anchor parameters. At this point, glancing at the console, it appears the `history-lite:change` event fires continuously.
