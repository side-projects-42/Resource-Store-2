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
    -   <a href="/docs/3.0.0/configuration/legend.html" class="active sidebar-link">Legend</a>
    -   <a href="/docs/3.0.0/configuration/title.html" class="sidebar-link">Title</a>
    -   <a href="/docs/3.0.0/configuration/tooltip.html" class="sidebar-link">Tooltip</a>
    -   <a href="/docs/3.0.0/configuration/elements.html" class="sidebar-link">Elements</a>
    -   <a href="/docs/3.0.0/configuration/decimation.html" class="sidebar-link">Data Decimation</a>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#legend" class="header-anchor">#</a> Legend
====================================================

The chart legend displays data about the datasets that are appearing on the chart.

<a href="#configuration-options" class="header-anchor">#</a> Configuration options
----------------------------------------------------------------------------------

Namespace: `options.plugins.legend`, the global options for the chart legend is defined in `Chart.defaults.plugins.legend`.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>display</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Is the legend shown?</td></tr><tr class="even"><td><code>position</code></td><td><code>string</code></td><td><code>'top'</code></td><td>Position of the legend. <a href="#position">more...</a></td></tr><tr class="odd"><td><code>align</code></td><td><code>string</code></td><td><code>'center'</code></td><td>Alignment of the legend. <a href="#align">more...</a></td></tr><tr class="even"><td><code>maxHeight</code></td><td><code>number</code></td><td></td><td>Maximum height of the legend, in pixels</td></tr><tr class="odd"><td><code>maxWidth</code></td><td><code>number</code></td><td></td><td>Maximum width of the legend, in pixels</td></tr><tr class="even"><td><code>fullSize</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Marks that this box should take the full width/height of the canvas (moving other boxes). This is unlikely to need to be changed in day-to-day use.</td></tr><tr class="odd"><td><code>onClick</code></td><td><code>function</code></td><td></td><td>A callback that is called when a click event is registered on a label item. Arguments: <code>[event, legendItem, legend]</code>.</td></tr><tr class="even"><td><code>onHover</code></td><td><code>function</code></td><td></td><td>A callback that is called when a 'mousemove' event is registered on top of a label item. Arguments: <code>[event, legendItem, legend]</code>.</td></tr><tr class="odd"><td><code>onLeave</code></td><td><code>function</code></td><td></td><td>A callback that is called when a 'mousemove' event is registered outside of a previously hovered label item. Arguments: <code>[event, legendItem, legend]</code>.</td></tr><tr class="even"><td><code>reverse</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Legend will show datasets in reverse order.</td></tr><tr class="odd"><td><code>labels</code></td><td><code>object</code></td><td></td><td>See the <a href="#legend-label-configuration">Legend Label Configuration</a> section below.</td></tr><tr class="even"><td><code>rtl</code></td><td><code>boolean</code></td><td></td><td><code>true</code> for rendering the legends from right to left.</td></tr><tr class="odd"><td><code>textDirection</code></td><td><code>string</code></td><td>canvas' default</td><td>This will force the text direction <code>'rtl'</code> or <code>'ltr'</code> on the canvas for rendering the legend, regardless of the css specified on the canvas</td></tr><tr class="even"><td><code>title</code></td><td><code>object</code></td><td></td><td>See the <a href="#legend-title-configuration">Legend Title Configuration</a> section below.</td></tr></tbody></table>

<a href="#position" class="header-anchor">#</a> Position
--------------------------------------------------------

Position of the legend. Options are:

-   `'top'`
-   `'left'`
-   `'bottom'`
-   `'right'`
-   `'chartArea'`

When using the `'chartArea'` option the legend position is at the moment not configurable, it will always be on the left side of the chart in the middle.

<a href="#align" class="header-anchor">#</a> Align
--------------------------------------------------

Alignment of the legend. Options are:

-   `'start'`
-   `'center'`
-   `'end'`

Defaults to `'center'` for unrecognized values.

<a href="#legend-label-configuration" class="header-anchor">#</a> Legend Label Configuration
--------------------------------------------------------------------------------------------

Namespace: `options.plugins.legend.labels`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>boxWidth</code></td><td><code>number</code></td><td><code>40</code></td><td>Width of coloured box.</td></tr><tr class="even"><td><code>boxHeight</code></td><td><code>number</code></td><td><code>font.size</code></td><td>Height of the coloured box.</td></tr><tr class="odd"><td><code>color</code></td><td><a href="/docs/3.0.0/general/colors.html"><code>Color</code></a></td><td><code>Chart.defaults.color</code></td><td>Color of label and the strikethrough.</td></tr><tr class="even"><td><code>font</code></td><td><code>Font</code></td><td><code>Chart.defaults.font</code></td><td>See <a href="/docs/3.0.0/general/fonts.html">Fonts</a></td></tr><tr class="odd"><td><code>padding</code></td><td><code>number</code></td><td><code>10</code></td><td>Padding between rows of colored boxes.</td></tr><tr class="even"><td><code>generateLabels</code></td><td><code>function</code></td><td></td><td>Generates legend items for each thing in the legend. Default implementation returns the text + styling for the color box. See <a href="#legend-item-interface">Legend Item</a> for details.</td></tr><tr class="odd"><td><code>filter</code></td><td><code>function</code></td><td><code>null</code></td><td>Filters legend items out of the legend. Receives 2 parameters, a <a href="#legend-item-interface">Legend Item</a> and the chart data.</td></tr><tr class="even"><td><code>sort</code></td><td><code>function</code></td><td><code>null</code></td><td>Sorts legend items. Receives 3 parameters, two <a href="#legend-item-interface">Legend Items</a> and the chart data.</td></tr><tr class="odd"><td><code>pointStyle</code></td><td></td><td></td><td>If specified, this style of point is used for the legend. Only used if <code>usePointStyle</code> is true.</td></tr><tr class="even"><td><code>textAlign</code></td><td><code>string</code></td><td><code>'center'</code></td><td>Horizontal alignment of the label text. Options are: <code>'left'</code>, <code>'right'</code> or <code>'center'</code>.</td></tr><tr class="odd"><td><code>usePointStyle</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Label style will match corresponding point style (size is based on the minimum value between boxWidth and font.size).</td></tr></tbody></table>

<a href="#legend-title-configuration" class="header-anchor">#</a> Legend Title Configuration
--------------------------------------------------------------------------------------------

Namespace: `options.plugins.legend.title`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>color</code></td><td><a href="/docs/3.0.0/general/colors.html"><code>Color</code></a></td><td><code>Chart.defaults.color</code></td><td>Color of text.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Is the legend title displayed.</td></tr><tr class="odd"><td><code>font</code></td><td><code>Font</code></td><td><code>Chart.defaults.font</code></td><td>See <a href="/docs/3.0.0/general/fonts.html">Fonts</a></td></tr><tr class="even"><td><code>padding</code></td><td><a href="/docs/3.0.0/general/padding.html"><code>Padding</code></a></td><td><code>0</code></td><td>Padding around the title.</td></tr><tr class="odd"><td><code>text</code></td><td><code>string</code></td><td></td><td>The string title.</td></tr></tbody></table>

<a href="#legend-item-interface" class="header-anchor">#</a> Legend Item Interface
----------------------------------------------------------------------------------

Items passed to the legend `onClick` function are the ones returned from `labels.generateLabels`. These items must implement the following interface.

    {
        // Label that will be displayed
        text: string,
        // Index of the associated dataset
        datasetIndex: number,
        // Fill style of the legend box
        fillStyle: Color,
        // If true, this item represents a hidden dataset. Label will be rendered with a strike-through effect
        hidden: boolean,
        // For box border. See https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap
        lineCap: string,
        // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
        lineDash: number[],
        // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
        lineDashOffset: number,
        // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
        lineJoin: string,
        // Width of box border
        lineWidth: number,
        // Stroke style of the legend box
        strokeStyle: Color,
        // Point style of the legend box (only used if usePointStyle is true)
        pointStyle: string | Image,
        // Rotation of the point in degrees (only used if usePointStyle is true)
        rotation: number
    }

<a href="#example" class="header-anchor">#</a> Example
------------------------------------------------------

The following example will create a chart with the legend enabled and turn all of the text red in color.

    var chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'rgb(255, 99, 132)'
                    }
                }
            }
        }
    });

<a href="#custom-on-click-actions" class="header-anchor">#</a> Custom On Click Actions
--------------------------------------------------------------------------------------

It can be common to want to trigger different behaviour when clicking an item in the legend. This can be easily achieved using a callback in the config object.

The default legend click handler is:

    function(e, legendItem, legend) {
        const index = legendItem.datasetIndex;
        const ci = legend.chart;
        if (ci.isDatasetVisible(index)) {
            ci.hide(index);
            legendItem.hidden = true;
        } else {
            ci.show(index);
            legendItem.hidden = false;
        }
    }

Lets say we wanted instead to link the display of the first two datasets. We could change the click handler accordingly.

    var defaultLegendClickHandler = Chart.defaults.plugins.legend.onClick;
    var newLegendClickHandler = function (e, legendItem, legend) {
        var index = legendItem.datasetIndex;
        if (index > 1) {
            // Do the original logic
            defaultLegendClickHandler(e, legendItem);
        } else {
            let ci = legend.chart;
            [
                ci.getDatasetMeta(0),
                ci.getDatasetMeta(1)
            ].forEach(function(meta) {
                meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
            });
            ci.update();
        }
    };
    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            plugins: {
                legend: {
                    onClick: newLegendClickHandler
                }
            }
        }
    });

Now when you click the legend in this chart, the visibility of the first two datasets will be linked together.

<span class="prefix">Last Updated:</span> <span class="time">3/30/2021, 10:32:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/configuration/layout.html" class="prev">Layout</a> </span> <span class="next"> [Title](/docs/3.0.0/configuration/title.html) → </span>
