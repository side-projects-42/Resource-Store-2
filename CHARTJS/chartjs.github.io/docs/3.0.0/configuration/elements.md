<a href="/docs/3.0.0/" class="home-link router-link-active"><img src="/docs/3.0.0/favicon.ico" alt="Chart.js" class="logo" /> <span class="site-name can-hide">Chart.js</span></a>

<a href="/docs/3.0.0/" class="nav-link">Home</a>

<a href="/docs/3.0.0/api/" class="nav-link">API</a>

<a href="/docs/3.0.0/samples/" class="nav-link">Samples</a>

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

<a href="/docs/3.0.0/" class="nav-link">Home</a>

<a href="/docs/3.0.0/api/" class="nav-link">API</a>

<a href="/docs/3.0.0/samples/" class="nav-link">Samples</a>

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

-   <a href="/docs/3.0.0/" class="sidebar-link">Chart.js</a>
-   Getting Started <span class="arrow right"></span>

-   General <span class="arrow right"></span>

-   Configuration <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/configuration/" class="sidebar-link">Configuration</a>
    -   <a href="/docs/3.0.0/configuration/responsive.html" class="sidebar-link">Responsive Charts</a>
    -   <a href="/docs/3.0.0/configuration/device-pixel-ratio.html" class="sidebar-link">Device Pixel Ratio</a>
    -   <a href="/docs/3.0.0/configuration/locale.html" class="sidebar-link">Locale</a>
    -   <a href="/docs/3.0.0/configuration/interactions.html" class="sidebar-link">Interactions</a>
    -   <a href="/docs/3.0.0/configuration/canvas-background.html" class="sidebar-link">Canvas background</a>
    -   <a href="/docs/3.0.0/configuration/animations.html" class="sidebar-link">Animations</a>
    -   <a href="/docs/3.0.0/configuration/layout.html" class="sidebar-link">Layout</a>
    -   <a href="/docs/3.0.0/configuration/legend.html" class="sidebar-link">Legend</a>
    -   <a href="/docs/3.0.0/configuration/title.html" class="sidebar-link">Title</a>
    -   <a href="/docs/3.0.0/configuration/tooltip.html" class="sidebar-link">Tooltip</a>
    -   <a href="/docs/3.0.0/configuration/elements.html" class="active sidebar-link">Elements</a>
    -   <a href="/docs/3.0.0/configuration/decimation.html" class="sidebar-link">Data Decimation</a>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#elements" class="header-anchor">#</a> Elements
========================================================

While chart types provide settings to configure the styling of each dataset, you sometimes want to style **all datasets the same way**. A common example would be to stroke all of the bars in a bar chart with the same colour but change the fill per dataset. Options can be configured for four different types of elements: **[arc](#arc-configuration)**, **[lines](#line-configuration)**, **[points](#point-configuration)**, and **[bars](#bar-configuration)**. When set, these options apply to all objects of that type unless specifically overridden by the configuration attached to a dataset.

<a href="#global-configuration" class="header-anchor">#</a> Global Configuration
--------------------------------------------------------------------------------

The element options can be specified per chart or globally. The global options for elements are defined in `Chart.defaults.elements`. For example, to set the border width of all bar charts globally you would do:

    Chart.defaults.elements.bar.borderWidth = 2;

<a href="#point-configuration" class="header-anchor">#</a> Point Configuration
------------------------------------------------------------------------------

Point elements are used to represent the points in a line, radar or bubble chart.

Namespace: `options.elements.point`, global point options: `Chart.defaults.elements.point`.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>radius</code></td><td><code>number</code></td><td><code>3</code></td><td>Point radius.</td></tr><tr class="even"><td><a href="#point-styles"><code>pointStyle</code></a></td><td><code>string</code>|<code>Image</code></td><td><code>'circle'</code></td><td>Point style.</td></tr><tr class="odd"><td><code>rotation</code></td><td><code>number</code></td><td><code>0</code></td><td>Point rotation (in degrees).</td></tr><tr class="even"><td><code>backgroundColor</code></td><td><a href="/docs/3.0.0/general/colors.html"><code>Color</code></a></td><td><code>Chart.defaults.backgroundColor</code></td><td>Point fill color.</td></tr><tr class="odd"><td><code>borderWidth</code></td><td><code>number</code></td><td><code>1</code></td><td>Point stroke width.</td></tr><tr class="even"><td><code>borderColor</code></td><td><a href="/docs/3.0.0/general/colors.html"><code>Color</code></a></td><td><code>'Chart.defaults.borderColor</code></td><td>Point stroke color.</td></tr><tr class="odd"><td><code>hitRadius</code></td><td><code>number</code></td><td><code>1</code></td><td>Extra radius added to point radius for hit detection.</td></tr><tr class="even"><td><code>hoverRadius</code></td><td><code>number</code></td><td><code>4</code></td><td>Point radius when hovered.</td></tr><tr class="odd"><td><code>hoverBorderWidth</code></td><td><code>number</code></td><td><code>1</code></td><td>Stroke width when hovered.</td></tr></tbody></table>

### <a href="#point-styles" class="header-anchor">#</a> Point Styles

The following values are supported:

-   `'circle'`
-   `'cross'`
-   `'crossRot'`
-   `'dash'`
-   `'line'`
-   `'rect'`
-   `'rectRounded'`
-   `'rectRot'`
-   `'star'`
-   `'triangle'`

If the value is an image, that image is drawn on the canvas using [drawImage <span class="sr-only">(opens new window)</span>](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawImage).

<a href="#line-configuration" class="header-anchor">#</a> Line Configuration
----------------------------------------------------------------------------

Line elements are used to represent the line in a line chart.

Namespace: `options.elements.line`, global line options: `Chart.defaults.elements.line`.

<table><colgroup><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>tension</code></td><td><code>number</code></td><td><code>0</code></td><td>Bézier curve tension (<code>0</code> for no Bézier curves).</td></tr><tr class="even"><td><code>backgroundColor</code></td><td><a href="/docs/3.0.0/general/colors.html"><code>Color</code></a></td><td><code>Chart.defaults.backgroundColor</code></td><td>Line fill color.</td></tr><tr class="odd"><td><code>borderWidth</code></td><td><code>number</code></td><td><code>3</code></td><td>Line stroke width.</td></tr><tr class="even"><td><code>borderColor</code></td><td><a href="/docs/3.0.0/general/colors.html"><code>Color</code></a></td><td><code>Chart.defaults.borderColor</code></td><td>Line stroke color.</td></tr><tr class="odd"><td><code>borderCapStyle</code></td><td><code>string</code></td><td><code>'butt'</code></td><td>Line cap style. See MDN<span class="sr-only">(opens new window)</span>.</td></tr><tr class="even"><td><code>borderDash</code></td><td><code>number[]</code></td><td><code>[]</code></td><td>Line dash. See MDN<span class="sr-only">(opens new window)</span>.</td></tr><tr class="odd"><td><code>borderDashOffset</code></td><td><code>number</code></td><td><code>0.0</code></td><td>Line dash offset. See MDN<span class="sr-only">(opens new window)</span>.</td></tr><tr class="even"><td><code>borderJoinStyle</code></td><td><code>string</code></td><td><code>'miter'</code></td><td>Line join style. See MDN<span class="sr-only">(opens new window)</span>.</td></tr><tr class="odd"><td><code>capBezierPoints</code></td><td><code>boolean</code></td><td><code>true</code></td><td><code>true</code> to keep Bézier control inside the chart, <code>false</code> for no restriction.</td></tr><tr class="even"><td><code>cubicInterpolationMode</code></td><td><code>string</code></td><td><code>'default'</code></td><td>Interpolation mode to apply. <a href="/docs/3.0.0/configuration/charts/line.md/#cubicinterpolationmode">See more...</a></td></tr><tr class="odd"><td><code>fill</code></td><td><code>boolean</code>|<code>string</code></td><td><code>false</code></td><td>How to fill the area under the line. See <a href="/docs/3.0.0/charts/area.html#filling-modes">area charts</a>.</td></tr><tr class="even"><td><code>stepped</code></td><td><code>boolean</code></td><td><code>false</code></td><td><code>true</code> to show the line as a stepped line (<code>tension</code> will be ignored).</td></tr></tbody></table>

<a href="#bar-configuration" class="header-anchor">#</a> Bar Configuration
--------------------------------------------------------------------------

Bar elements are used to represent the bars in a bar chart.

Namespace: `options.elements.bar`, global bar options: `Chart.defaults.elements.bar`.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backgroundColor</code></td><td><a href="/docs/3.0.0/general/colors.html"><code>Color</code></a></td><td><code>Chart.defaults.backgroundColor</code></td><td>Bar fill color.</td></tr><tr class="even"><td><code>borderWidth</code></td><td><code>number</code></td><td><code>0</code></td><td>Bar stroke width.</td></tr><tr class="odd"><td><code>borderColor</code></td><td><a href="/docs/3.0.0/general/colors.html"><code>Color</code></a></td><td><code>Chart.defaults.borderColor</code></td><td>Bar stroke color.</td></tr><tr class="even"><td><code>borderSkipped</code></td><td><code>string</code></td><td><code>'start'</code></td><td>Skipped (excluded) border: <code>'start'</code>, <code>'end'</code>, <code>'bottom'</code>, <code>'left'</code>, <code>'top'</code> or <code>'right'</code>.</td></tr><tr class="odd"><td><code>borderRadius</code></td><td><code>number</code>|<code>object</code></td><td><code>0</code></td><td>The bar border radius (in pixels).</td></tr><tr class="even"><td><a href="#point-styles"><code>pointStyle</code></a></td><td><code>string</code>|<code>Image</code></td><td><code>'circle'</code></td><td>Style of the point for legend.</td></tr></tbody></table>

<a href="#arc-configuration" class="header-anchor">#</a> Arc Configuration
--------------------------------------------------------------------------

Arcs are used in the polar area, doughnut and pie charts.

Namespace: `options.elements.arc`, global arc options: `Chart.defaults.elements.arc`.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>angle</code> - for polar only</td><td><code>number</code></td><td><code>circumference / (arc count)</code></td><td>Arc angle to cover.</td></tr><tr class="even"><td><code>backgroundColor</code></td><td><a href="/docs/3.0.0/general/colors.html"><code>Color</code></a></td><td><code>Chart.defaults.backgroundColor</code></td><td>Arc fill color.</td></tr><tr class="odd"><td><code>borderAlign</code></td><td><code>string</code></td><td><code>'center'</code></td><td>Arc stroke alignment.</td></tr><tr class="even"><td><code>borderColor</code></td><td><a href="/docs/3.0.0/general/colors.html"><code>Color</code></a></td><td><code>'#fff'</code></td><td>Arc stroke color.</td></tr><tr class="odd"><td><code>borderWidth</code></td><td><code>number</code></td><td><code>2</code></td><td>Arc stroke width.</td></tr></tbody></table>

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 7:48:50 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/configuration/tooltip.html" class="prev">Tooltip</a> </span> <span class="next"> [Data Decimation](/docs/3.0.0/configuration/decimation.html) → </span>
