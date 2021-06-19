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
    -   <a href="/docs/3.2.0/configuration/responsive.html" class="sidebar-link">Responsive Charts</a>
    -   <a href="/docs/3.2.0/configuration/device-pixel-ratio.html" class="active sidebar-link">Device Pixel Ratio</a>
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

<a href="#device-pixel-ratio" class="header-anchor">#</a> Device Pixel Ratio
============================================================================

By default the chart's canvas will use a 1:1 pixel ratio, unless the physical display has a higher pixel ratio (e.g. Retina displays).

For applications where a chart will be converted to a bitmap, or printed to a higher DPI medium it can be desirable to render the chart at a higher resolution than the default.

Setting `devicePixelRatio` to a value other than 1 will force the canvas size to be scaled by that amount, relative to the container size. There should be no visible difference on screen; the difference will only be visible when the image is zoomed or printed.

<a href="#configuration-options" class="header-anchor">#</a> Configuration Options
----------------------------------------------------------------------------------

Namespace: `options`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>devicePixelRatio</code></td><td><code>number</code></td><td><code>window.devicePixelRatio</code></td><td>Override the window's default devicePixelRatio.</td></tr></tbody></table>

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/configuration/responsive.html" class="prev">Responsive Charts</a> </span> <span class="next"> [Locale](/docs/3.2.0/configuration/locale.html) → </span>
