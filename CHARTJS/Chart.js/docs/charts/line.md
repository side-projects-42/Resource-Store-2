Line Chart
==========

A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets.

\`\`\`js chart-editor // const labels = Utils.months({ count: 7 }); const data = { labels: labels, datasets: \[ { label: “My First Dataset”, data: \[65, 59, 80, 81, 56, 55, 40\], fill: false, borderColor: “rgb(75, 192, 192)”, tension: 0.1, }, \], }; //

// const config = { type: “line”, data: data, }; //

module.exports = { actions: \[\], config: config, }; \`\`\`

Dataset Properties
------------------

Namespaces:

-   `data.datasets[index]` - options for this dataset only
-   `options.datasets.line` - options for all line datasets
-   `options.elements.line` - options for all [line elements](../configuration/elements.md#line-configuration)
-   `options.elements.point` - options for all [point elements](../configuration/elements.md#point-configuration)
-   `options` - options for the whole chart

The line chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colour of a line is generally set this way.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;"><a href="../general/options.md#scriptable-options">Scriptable</a></th><th style="text-align: center;"><a href="../general/options.md#indexable-options">Indexable</a></th><th>Default</th></tr></thead><tbody><tr class="odd"><td><a href="#line-styling"><code>backgroundColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#line-styling"><code>borderCapStyle</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'butt'</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>borderColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#line-styling"><code>borderDash</code></a></td><td><code>number[]</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>[]</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>borderDashOffset</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>0.0</code></td></tr><tr class="even"><td><a href="#line-styling"><code>borderJoinStyle</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'miter'</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>borderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>3</code></td></tr><tr class="even"><td><a href="#general"><code>clip</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#cubicinterpolationmode"><code>cubicInterpolationMode</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'default'</code></td></tr><tr class="even"><td><a href="#data-structure"><code>data</code></a></td><td><code>object</code>|<code>object[]</code>| <code>number[]</code>|<code>string[]</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><strong>required</strong></td></tr><tr class="odd"><td><a href="#line-styling"><code>fill</code></a></td><td><code>boolean</code>|<code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>false</code></td></tr><tr class="even"><td><a href="#line-styling"><code>hoverBackgroundColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>hoverBorderCapStyle</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#line-styling"><code>hoverBorderColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>hoverBorderDash</code></a></td><td><code>number[]</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#line-styling"><code>hoverBorderDashOffset</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>hoverBorderJoinStyle</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#line-styling"><code>hoverBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#general"><code>indexAxis</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>'x'</code></td></tr><tr class="even"><td><a href="#general"><code>label</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>''</code></td></tr><tr class="odd"><td><a href="#general"><code>order</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>0</code></td></tr><tr class="even"><td><a href="#point-styling"><code>pointBackgroundColor</code></a></td><td><code>Color</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="odd"><td><a href="#point-styling"><code>pointBorderColor</code></a></td><td><code>Color</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#point-styling"><code>pointBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>1</code></td></tr><tr class="odd"><td><a href="#point-styling"><code>pointHitRadius</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>1</code></td></tr><tr class="even"><td><a href="#interactions"><code>pointHoverBackgroundColor</code></a></td><td><code>Color</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#interactions"><code>pointHoverBorderColor</code></a></td><td><code>Color</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#interactions"><code>pointHoverBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>1</code></td></tr><tr class="odd"><td><a href="#interactions"><code>pointHoverRadius</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>4</code></td></tr><tr class="even"><td><a href="#point-styling"><code>pointRadius</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>3</code></td></tr><tr class="odd"><td><a href="#point-styling"><code>pointRotation</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="even"><td><a href="#point-styling"><code>pointStyle</code></a></td><td><code>string</code>|<code>Image</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'circle'</code></td></tr><tr class="odd"><td><a href="#segment"><code>segment</code></a></td><td><code>object</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#line-styling"><code>showLine</code></a></td><td><code>boolean</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>true</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>spanGaps</code></a></td><td><code>boolean</code>|<code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#general"><code>stack</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>'line'</code></td></tr><tr class="odd"><td><a href="#stepped"><code>stepped</code></a></td><td><code>boolean</code>|<code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>false</code></td></tr><tr class="even"><td><a href="#line-styling"><code>tension</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#general"><code>xAxisID</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td>first x axis</td></tr><tr class="even"><td><a href="#general"><code>yAxisID</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td>first y axis</td></tr></tbody></table>

All these values, if `undefined`, fallback to the scopes described in [option resolution](../general/options)

### General

<table style="width:99%;"><colgroup><col style="width: 4%" /><col style="width: 95%" /></colgroup><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>clip</code></td><td>How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. <code>0</code> = clip at chartArea. Clipping can also be configured per side: <code>clip: {left: 5, top: false, right: -2, bottom: 0}</code></td></tr><tr class="even"><td><code>indexAxis</code></td><td>The base axis of the dataset. <code>'x'</code> for horizontal lines and <code>'y'</code> for vertical lines.</td></tr><tr class="odd"><td><code>label</code></td><td>The label for the dataset which appears in the legend and tooltips.</td></tr><tr class="even"><td><code>order</code></td><td>The drawing order of dataset. Also affects order for stacking, tooltip, and legend.</td></tr><tr class="odd"><td><code>stack</code></td><td>The ID of the group to which this dataset belongs to (when stacked, each group will be a separate stack). <a href="#stacked-area-charts">more</a></td></tr><tr class="even"><td><code>xAxisID</code></td><td>The ID of the x-axis to plot this dataset on.</td></tr><tr class="odd"><td><code>yAxisID</code></td><td>The ID of the y-axis to plot this dataset on.</td></tr></tbody></table>

### Point Styling

The style of each point can be controlled with the following properties:

<table style="width:99%;"><colgroup><col style="width: 23%" /><col style="width: 76%" /></colgroup><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>pointBackgroundColor</code></td><td>The fill color for points.</td></tr><tr class="even"><td><code>pointBorderColor</code></td><td>The border color for points.</td></tr><tr class="odd"><td><code>pointBorderWidth</code></td><td>The width of the point border in pixels.</td></tr><tr class="even"><td><code>pointHitRadius</code></td><td>The pixel size of the non-displayed point that reacts to mouse events.</td></tr><tr class="odd"><td><code>pointRadius</code></td><td>The radius of the point shape. If set to 0, the point is not rendered.</td></tr><tr class="even"><td><code>pointRotation</code></td><td>The rotation of the point in degrees.</td></tr><tr class="odd"><td><code>pointStyle</code></td><td>Style of the point. <a href="../configuration/elements.md#point-styles">more…</a></td></tr></tbody></table>

All these values, if `undefined`, fallback first to the dataset options then to the associated [`elements.point.*`](../configuration/elements.md#point-configuration) options.

### Line Styling

The style of the line can be controlled with the following properties:

<table style="width:99%;"><colgroup><col style="width: 6%" /><col style="width: 93%" /></colgroup><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backgroundColor</code></td><td>The line fill color.</td></tr><tr class="even"><td><code>borderCapStyle</code></td><td>Cap style of the line. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap">MDN</a>.</td></tr><tr class="odd"><td><code>borderColor</code></td><td>The line color.</td></tr><tr class="even"><td><code>borderDash</code></td><td>Length and spacing of dashes. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash">MDN</a>.</td></tr><tr class="odd"><td><code>borderDashOffset</code></td><td>Offset for line dashes. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset">MDN</a>.</td></tr><tr class="even"><td><code>borderJoinStyle</code></td><td>Line joint style. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin">MDN</a>.</td></tr><tr class="odd"><td><code>borderWidth</code></td><td>The line width (in pixels).</td></tr><tr class="even"><td><code>fill</code></td><td>How to fill the area under the line. See <a href="area.md">area charts</a>.</td></tr><tr class="odd"><td><code>tension</code></td><td>Bezier curve tension of the line. Set to 0 to draw straightlines. This option is ignored if monotone cubic interpolation is used.</td></tr><tr class="even"><td><code>showLine</code></td><td>If false, the line is not drawn for this dataset.</td></tr><tr class="odd"><td><code>spanGaps</code></td><td>If true, lines will be drawn between points with no or null data. If false, points with <code>null</code> data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.</td></tr></tbody></table>

If the value is `undefined`, `showLine` and `spanGaps` fallback to the associated [chart configuration options](#configuration-options). The rest of the values fallback to the associated [`elements.line.*`](../configuration/elements.md#line-configuration) options.

### Interactions

The interaction with each point can be controlled with the following properties:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>pointHoverBackgroundColor</code></td><td>Point background color when hovered.</td></tr><tr class="even"><td><code>pointHoverBorderColor</code></td><td>Point border color when hovered.</td></tr><tr class="odd"><td><code>pointHoverBorderWidth</code></td><td>Border width of point when hovered.</td></tr><tr class="even"><td><code>pointHoverRadius</code></td><td>The radius of the point when hovered.</td></tr></tbody></table>

### cubicInterpolationMode

The following interpolation modes are supported.

-   `'default'`
-   `'monotone'`

The `'default'` algorithm uses a custom weighted cubic interpolation, which produces pleasant curves for all types of datasets.

The `'monotone'` algorithm is more suited to `y = f(x)` datasets: it preserves monotonicity (or piecewise monotonicity) of the dataset being interpolated, and ensures local extremums (if any) stay at input data points.

If left untouched (`undefined`), the global `options.elements.line.cubicInterpolationMode` property is used.

### Segment

Line segment styles can be overridden by scriptable options in the `segment` object. Currently all of the `border*` and `backgroundColor` options are supported. The segment styles are resolved for each section of the line between each point. `undefined` fallbacks to main line styles.

Context for the scriptable segment contains the following properties:

-   `type`: `'segment'`
-   `p0`: first point element
-   `p1`: second point element

[Example usage](../samples/line/segments.md)

### Stepped

The following values are supported for `stepped`.

-   `false`: No Step Interpolation (default)
-   `true`: Step-before Interpolation (eq. `'before'`)
-   `'before'`: Step-before Interpolation
-   `'after'`: Step-after Interpolation
-   `'middle'`: Step-middle Interpolation

If the `stepped` value is set to anything other than false, `tension` will be ignored.

Default Options
---------------

It is common to want to apply a configuration setting to all created line charts. The global line chart settings are stored in `Chart.overrides.line`. Changing the global options only affects charts created after the change. Existing charts are not changed.

For example, to configure all line charts with `spanGaps = true` you would do:

    Chart.overrides.line.spanGaps = true;

Data Structure
--------------

All of the supported [data structures](../general/data-structures.md) can be used with line charts.

Stacked Area Chart
------------------

Line charts can be configured into stacked area charts by changing the settings on the y-axis to enable stacking. Stacked area charts can be used to show how one data trend is made up of a number of smaller pieces.

    var stackedLine = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            stacked: true,
          },
        },
      },
    });

Vertical Line Chart
-------------------

A vertical line chart is a variation on the horizontal line chart. To achieve this you will have to set the `indexAxis` property in the options object to `'y'`. The default for this property is `'x'` and thus will show horizontal lines.

\`\`\`js chart-editor // const labels = Utils.months({ count: 7 }); const data = { labels: labels, datasets: \[ { axis: “y”, label: “My First Dataset”, data: \[65, 59, 80, 81, 56, 55, 40\], fill: false, backgroundColor: \[ “rgba(255, 99, 132, 0.2)”, “rgba(255, 159, 64, 0.2)”, “rgba(255, 205, 86, 0.2)”, “rgba(75, 192, 192, 0.2)”, “rgba(54, 162, 235, 0.2)”, “rgba(153, 102, 255, 0.2)”, “rgba(201, 203, 207, 0.2)”, \], borderColor: \[ “rgb(255, 99, 132)”, “rgb(255, 159, 64)”, “rgb(255, 205, 86)”, “rgb(75, 192, 192)”, “rgb(54, 162, 235)”, “rgb(153, 102, 255)”, “rgb(201, 203, 207)”, \], borderWidth: 1, }, \], }; //

// const config = { type: “line”, data: data, options: { indexAxis: “y”, scales: { x: { beginAtZero: true, }, }, }, }; //

module.exports = { actions: \[\], config: config, }; \`\`\`

### Config Options

The configuration options for the vertical line chart are the same as for the [line chart](#configuration-options). However, any options specified on the x-axis in a line chart, are applied to the y-axis in a vertical line chart.

Internal data format
--------------------

`{x, y}`
