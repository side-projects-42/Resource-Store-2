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
    -   <a href="/docs/3.0.0/configuration/interactions.html" class="active sidebar-link">Interactions</a>
    -   <a href="/docs/3.0.0/configuration/canvas-background.html" class="sidebar-link">Canvas background</a>
    -   <a href="/docs/3.0.0/configuration/animations.html" class="sidebar-link">Animations</a>
    -   <a href="/docs/3.0.0/configuration/layout.html" class="sidebar-link">Layout</a>
    -   <a href="/docs/3.0.0/configuration/legend.html" class="sidebar-link">Legend</a>
    -   <a href="/docs/3.0.0/configuration/title.html" class="sidebar-link">Title</a>
    -   <a href="/docs/3.0.0/configuration/tooltip.html" class="sidebar-link">Tooltip</a>
    -   <a href="/docs/3.0.0/configuration/elements.html" class="sidebar-link">Elements</a>
    -   <a href="/docs/3.0.0/configuration/decimation.html" class="sidebar-link">Data Decimation</a>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#interactions" class="header-anchor">#</a> Interactions
================================================================

Namespace: `options.interaction`, the global interaction configuration is at `Chart.defaults.interaction`. To configure which events trigger chart interactions, see [events](/docs/3.0.0/configuration/events.html#events).

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>mode</code></td><td><code>string</code></td><td><code>'nearest'</code></td><td>Sets which elements appear in the interaction. See <a href="/docs/3.0.0/configuration/modes.html#interaction-modes">Interaction Modes</a> for details.</td></tr><tr class="even"><td><code>intersect</code></td><td><code>boolean</code></td><td><code>true</code></td><td>if true, the interaction mode only applies when the mouse position intersects an item on the chart.</td></tr><tr class="odd"><td><code>axis</code></td><td><code>string</code></td><td><code>'x'</code></td><td>Can be set to <code>'x'</code>, <code>'y'</code>, or <code>'xy'</code> to define which directions are used in calculating distances. Defaults to <code>'x'</code> for <code>'index'</code> mode and <code>'xy'</code> in <code>dataset</code> and <code>'nearest'</code> modes.</td></tr></tbody></table>

By default, these options apply to both the hover and tooltip interactions. The same options can be set in the `options.hover` namespace, in which case they will only affect the hover interaction. Similarly, the options can be set in the `options.plugins.tooltip` namespace to independently configure the tooltip interactions.

<a href="#events" class="header-anchor">#</a> Events
----------------------------------------------------

The following properties define how the chart interacts with events. Namespace: `options`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>events</code></td><td><code>string[]</code></td><td><code>['mousemove', 'mouseout', 'click', 'touchstart',                       'touchmove']</code></td><td>The <code>events</code> option defines the browser events that the chart should listen to for tooltips and hovering. <a href="#event-option">more...</a></td></tr><tr class="even"><td><code>onHover</code></td><td><code>function</code></td><td><code>null</code></td><td>Called when any of the events fire. Passed the event, an array of active elements (bars, points, etc), and the chart.</td></tr><tr class="odd"><td><code>onClick</code></td><td><code>function</code></td><td><code>null</code></td><td>Called if the event is of type <code>'mouseup'</code> or <code>'click'</code>. Passed the event, an array of active elements, and the chart.</td></tr></tbody></table>

### <a href="#event-option" class="header-anchor">#</a> Event Option

For example, to have the chart only respond to click events, you could do:

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            // This chart will not respond to mousemove, etc
            events: ['click']
        }
    });

### <a href="#converting-events-to-data-values" class="header-anchor">#</a> Converting Events to Data Values

A common occurrence is taking an event, such as a click, and finding the data coordinates on the chart where the event occurred. Chart.js provides helpers that make this a straightforward process.

    const chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            onClick: (e) => {
                const canvasPosition = Chart.helpers.getRelativePosition(e, chart);
                // Substitute the appropriate scale IDs
                const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
                const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
            }
        }
    });

<a href="#modes" class="header-anchor">#</a> Modes
--------------------------------------------------

When configuring the interaction with the graph via `interaction`, `hover` or `tooltips`, a number of different modes are available.

`options.hover` and `options.plugins.tooltip` extend from `options.interaction`. So if `mode`, `intersect` or any other common settings are configured only in `options.interaction`, both hover and tooltips obey that.

The modes are detailed below and how they behave in conjunction with the `intersect` setting.

### <a href="#point" class="header-anchor">#</a> point

Finds all of the items that intersect the point.

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            interaction: {
                mode: 'point'
            }
        }
    });

### <a href="#nearest" class="header-anchor">#</a> nearest

Gets the items that are at the nearest distance to the point. The nearest item is determined based on the distance to the center of the chart item (point, bar). You can use the `axis` setting to define which directions are used in distance calculation. If `intersect` is true, this is only triggered when the mouse position intersects an item in the graph. This is very useful for combo charts where points are hidden behind bars.

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            interaction: {
                mode: 'nearest'
            }
        }
    });

### <a href="#index" class="header-anchor">#</a> index

Finds item at the same index. If the `intersect` setting is true, the first intersecting item is used to determine the index in the data. If `intersect` false the nearest item, in the x direction, is used to determine the index.

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            interaction: {
                mode: 'index'
            }
        }
    });

To use index mode in a chart like the horizontal bar chart, where we search along the y direction, you can use the `axis` setting introduced in v2.7.0. By setting this value to `'y'` on the y direction is used.

    var chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            interaction: {
                mode: 'index',
                axis: 'y'
            }
        }
    });

### <a href="#dataset" class="header-anchor">#</a> dataset

Finds items in the same dataset. If the `intersect` setting is true, the first intersecting item is used to determine the index in the data. If `intersect` false the nearest item is used to determine the index.

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            interaction: {
                mode: 'dataset'
            }
        }
    });

### <a href="#x" class="header-anchor">#</a> x

Returns all items that would intersect based on the `X` coordinate of the position only. Would be useful for a vertical cursor implementation. Note that this only applies to cartesian charts.

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            interaction: {
                mode: 'x'
            }
        }
    });

### <a href="#y" class="header-anchor">#</a> y

Returns all items that would intersect based on the `Y` coordinate of the position. This would be useful for a horizontal cursor implementation. Note that this only applies to cartesian charts.

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            interaction: {
                mode: 'y'
            }
        }
    });

<span class="prefix">Last Updated:</span> <span class="time">3/30/2021, 10:32:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/configuration/locale.html" class="prev">Locale</a> </span> <span class="next"> [Canvas background](/docs/3.0.0/configuration/canvas-background.html) → </span>
