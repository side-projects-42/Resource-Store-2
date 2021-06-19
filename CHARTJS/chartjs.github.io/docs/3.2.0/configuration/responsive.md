<a href="/docs/3.2.0/" class="home-link router-link-active"><img src="/docs/3.2.0/favicon.ico" alt="Chart.js" class="logo" /> <span class="site-name can-hide">Chart.js</span></a>

<a href="/docs/3.2.0/" class="nav-link">Home</a>

<a href="/docs/3.2.0/api/" class="nav-link">API</a>

<a href="/docs/3.2.0/samples/" class="nav-link">Samples</a>

<span class="title">Ecosystem</span> <span class="arrow down"></span>

<span class="title">Ecosystem</span> <span class="arrow right"></span>

-   Awesome
    <span class="sr-only">(opens new window)</span>
-   Slack
    <span class="sr-only">(opens new window)</span>
-   Stack Overflow
    <span class="sr-only">(opens new window)</span>

GitHub

<span class="sr-only">(opens new window)</span>

<a href="/docs/3.2.0/" class="nav-link">Home</a>

<a href="/docs/3.2.0/api/" class="nav-link">API</a>

<a href="/docs/3.2.0/samples/" class="nav-link">Samples</a>

<span class="title">Ecosystem</span> <span class="arrow down"></span>

<span class="title">Ecosystem</span> <span class="arrow right"></span>

-   Awesome
    <span class="sr-only">(opens new window)</span>
-   Slack
    <span class="sr-only">(opens new window)</span>
-   Stack Overflow
    <span class="sr-only">(opens new window)</span>

GitHub

<span class="sr-only">(opens new window)</span>

-   <a href="/docs/3.2.0/" class="sidebar-link">Chart.js</a>
-   Getting Started <span class="arrow right"></span>

-   General <span class="arrow right"></span>

-   Configuration <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/configuration/" class="sidebar-link">Configuration</a>
    -   <a href="/docs/3.2.0/configuration/responsive.html" class="active sidebar-link">Responsive Charts</a>
    -   <a href="/docs/3.2.0/configuration/device-pixel-ratio.html" class="sidebar-link">Device Pixel Ratio</a>
    -   <a href="/docs/3.2.0/configuration/locale.html" class="sidebar-link">Locale</a>
    -   <a href="/docs/3.2.0/configuration/interactions.html" class="sidebar-link">Interactions</a>
    -   <a href="/docs/3.2.0/configuration/canvas-background.html" class="sidebar-link">Canvas background</a>
    -   <a href="/docs/3.2.0/configuration/animations.html" class="sidebar-link">Animations</a>
    -   <a href="/docs/3.2.0/configuration/layout.html" class="sidebar-link">Layout</a>
    -   <a href="/docs/3.2.0/configuration/legend.html" class="sidebar-link">Legend</a>
    -   <a href="/docs/3.2.0/configuration/title.html" class="sidebar-link">Title</a>
    -   <a href="/docs/3.2.0/configuration/tooltip.html" class="sidebar-link">Tooltip</a>
    -   <a href="/docs/3.2.0/configuration/elements.html" class="sidebar-link">Elements</a>
    -   <a href="/docs/3.2.0/configuration/decimation.html" class="sidebar-link">Data Decimation</a>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#responsive-charts" class="header-anchor">#</a> Responsive Charts
==========================================================================

When it comes to changing the chart size based on the window size, a major limitation is that the canvas *render* size (`canvas.width` and `.height`) can **not** be expressed with relative values, contrary to the *display* size (`canvas.style.width` and `.height`). Furthermore, these sizes are independent from each other and thus the canvas *render* size does not adjust automatically based on the *display* size, making the rendering inaccurate.

The following examples **do not work**:

-   `<canvas height="40vh" width="80vw">`: **invalid** values, the canvas doesn't resize (example
    <span class="sr-only">(opens new window)</span>)
-   `<canvas style="height:40vh; width:80vw">`: **invalid** behavior, the canvas is resized but becomes blurry (example
    <span class="sr-only">(opens new window)</span>)

Chart.js provides a [few options](#configuration-options) to enable responsiveness and control the resize behavior of charts by detecting when the canvas *display* size changes and update the *render* size accordingly.

<a href="#configuration-options" class="header-anchor">#</a> Configuration Options
----------------------------------------------------------------------------------

Namespace: `options`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>responsive</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Resizes the chart canvas when its container does (<a href="#important-note">important note...</a>).</td></tr><tr class="even"><td><code>maintainAspectRatio</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Maintain the original canvas aspect ratio <code>(width / height)</code> when resizing.</td></tr><tr class="odd"><td><code>aspectRatio</code></td><td><code>number</code></td><td><code>2</code></td><td>Canvas aspect ratio (i.e. <code>width / height</code>, a value of 1 representing a square canvas). Note that this option is ignored if the height is explicitly defined either as attribute or via the style.</td></tr><tr class="even"><td><code>onResize</code></td><td><code>function</code></td><td><code>null</code></td><td>Called when a resize occurs. Gets passed two arguments: the chart instance and the new size.</td></tr><tr class="odd"><td><code>resizeDelay</code></td><td><code>number</code></td><td><code>0</code></td><td>Delay the resize update by give amount of milliseconds. This can ease the resize process by debouncing update of the elements.</td></tr></tbody></table>

<a href="#important-note" class="header-anchor">#</a> Important Note
--------------------------------------------------------------------

Detecting when the canvas size changes can not be done directly from the `canvas` element. Chart.js uses its parent container to update the canvas *render* and *display* sizes. However, this method requires the container to be **relatively positioned** and **dedicated to the chart canvas only**. Responsiveness can then be achieved by setting relative values for the container size ([example <span class="sr-only">(opens new window)</span>](https://codepen.io/chartjs/pen/YVWZbz)):

    <div class="chart-container" style="position: relative; height:40vh; width:80vw">
        <canvas id="chart"></canvas>
    </div>

The chart can also be programmatically resized by modifying the container size:

    chart.canvas.parentNode.style.height = '128px';
    chart.canvas.parentNode.style.width = '128px';

Note that in order for the above code to correctly resize the chart height, the [`maintainAspectRatio`](#configuration-options) option must also be set to `false`.

<a href="#printing-resizable-charts" class="header-anchor">#</a> Printing Resizable Charts
------------------------------------------------------------------------------------------

CSS media queries allow changing styles when printing a page. The CSS applied from these media queries may cause charts to need to resize. However, the resize won't happen automatically. To support resizing charts when printing, you need to hook the [onbeforeprint <span class="sr-only">(opens new window)</span>](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint) event and manually trigger resizing of each chart.

    function beforePrintHandler () {
        for (var id in Chart.instances) {
            Chart.instances[id].resize();
        }
    }

You may also find that, due to complexities in when the browser lays out the document for printing and when resize events are fired, Chart.js is unable to properly resize for the print layout. To work around this, you can pass an explicit size to `.resize()` then use an [onafterprint <span class="sr-only">(opens new window)</span>](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onafterprint) event to restore the automatic size when done.

    window.addEventListener('beforeprint', () => {
      myChart.resize(600, 600);
    });
    window.addEventListener('afterprint', () => {
      myChart.resize();
    });

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/configuration/" class="prev router-link-active">Configuration</a> </span> <span class="next"> [Device Pixel Ratio](/docs/3.2.0/configuration/device-pixel-ratio.html) → </span>
