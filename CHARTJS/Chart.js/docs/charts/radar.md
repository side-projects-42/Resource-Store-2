Radar Chart
===========

A radar chart is a way of showing multiple data points and the variation between them.

They are often useful for comparing the points of two or more different data sets.

\`\`\`js chart-editor // const data = { labels: \[ “Eating”, “Drinking”, “Sleeping”, “Designing”, “Coding”, “Cycling”, “Running”, \], datasets: \[ { label: “My First Dataset”, data: \[65, 59, 90, 81, 56, 55, 40\], fill: true, backgroundColor: “rgba(255, 99, 132, 0.2)”, borderColor: “rgb(255, 99, 132)”, pointBackgroundColor: “rgb(255, 99, 132)”, pointBorderColor: “\#fff”, pointHoverBackgroundColor: “\#fff”, pointHoverBorderColor: “rgb(255, 99, 132)”, }, { label: “My Second Dataset”, data: \[28, 48, 40, 19, 96, 27, 100\], fill: true, backgroundColor: “rgba(54, 162, 235, 0.2)”, borderColor: “rgb(54, 162, 235)”, pointBackgroundColor: “rgb(54, 162, 235)”, pointBorderColor: “\#fff”, pointHoverBackgroundColor: “\#fff”, pointHoverBorderColor: “rgb(54, 162, 235)”, }, \], }; //

// const config = { type: “radar”, data: data, options: { elements: { line: { borderWidth: 3, }, }, }, }; //

module.exports = { actions: \[\], config: config, }; \`\`\`

Dataset Properties
------------------

Namespaces:

-   `data.datasets[index]` - options for this dataset only
-   `options.datasets.line` - options for all line datasets
-   `options.elements.line` - options for all [line elements](../configuration/elements.md#line-configuration)
-   `options.elements.point` - options for all [point elements](../configuration/elements.md#point-configuration)
-   `options` - options for the whole chart

The radar chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colour of a line is generally set this way.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;"><a href="../general/options.md#scriptable-options">Scriptable</a></th><th style="text-align: center;"><a href="../general/options.md#indexable-options">Indexable</a></th><th>Default</th></tr></thead><tbody><tr class="odd"><td><a href="#line-styling"><code>backgroundColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#line-styling"><code>borderCapStyle</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'butt'</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>borderColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#line-styling"><code>borderDash</code></a></td><td><code>number[]</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>[]</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>borderDashOffset</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>0.0</code></td></tr><tr class="even"><td><a href="#line-styling"><code>borderJoinStyle</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'miter'</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>borderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>3</code></td></tr><tr class="even"><td><a href="#line-styling"><code>hoverBackgroundColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>hoverBorderCapStyle</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#line-styling"><code>hoverBorderColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>hoverBorderDash</code></a></td><td><code>number[]</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#line-styling"><code>hoverBorderDashOffset</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>hoverBorderJoinStyle</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#line-styling"><code>hoverBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#general"><code>clip</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#data-structure"><code>data</code></a></td><td><code>number[]</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><strong>required</strong></td></tr><tr class="odd"><td><a href="#line-styling"><code>fill</code></a></td><td><code>boolean</code>|<code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>false</code></td></tr><tr class="even"><td><a href="#general"><code>label</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>''</code></td></tr><tr class="odd"><td><a href="#general"><code>order</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>0</code></td></tr><tr class="even"><td><a href="#line-styling"><code>tension</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#point-styling"><code>pointBackgroundColor</code></a></td><td><code>Color</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#point-styling"><code>pointBorderColor</code></a></td><td><code>Color</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="odd"><td><a href="#point-styling"><code>pointBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>1</code></td></tr><tr class="even"><td><a href="#point-styling"><code>pointHitRadius</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>1</code></td></tr><tr class="odd"><td><a href="#interactions"><code>pointHoverBackgroundColor</code></a></td><td><code>Color</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#interactions"><code>pointHoverBorderColor</code></a></td><td><code>Color</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#interactions"><code>pointHoverBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>1</code></td></tr><tr class="even"><td><a href="#interactions"><code>pointHoverRadius</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>4</code></td></tr><tr class="odd"><td><a href="#point-styling"><code>pointRadius</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>3</code></td></tr><tr class="even"><td><a href="#point-styling"><code>pointRotation</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#point-styling"><code>pointStyle</code></a></td><td><code>string</code>|<code>Image</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'circle'</code></td></tr><tr class="even"><td><a href="#line-styling"><code>spanGaps</code></a></td><td><code>boolean</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr></tbody></table>

All these values, if `undefined`, fallback to the scopes described in [option resolution](../general/options)

### General

<table style="width:99%;"><colgroup><col style="width: 2%" /><col style="width: 97%" /></colgroup><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>clip</code></td><td>How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. <code>0</code> = clip at chartArea. Clipping can also be configured per side: <code>clip: {left: 5, top: false, right: -2, bottom: 0}</code></td></tr><tr class="even"><td><code>label</code></td><td>The label for the dataset which appears in the legend and tooltips.</td></tr><tr class="odd"><td><code>order</code></td><td>The drawing order of dataset.</td></tr></tbody></table>

### Point Styling

The style of each point can be controlled with the following properties:

<table style="width:99%;"><colgroup><col style="width: 23%" /><col style="width: 76%" /></colgroup><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>pointBackgroundColor</code></td><td>The fill color for points.</td></tr><tr class="even"><td><code>pointBorderColor</code></td><td>The border color for points.</td></tr><tr class="odd"><td><code>pointBorderWidth</code></td><td>The width of the point border in pixels.</td></tr><tr class="even"><td><code>pointHitRadius</code></td><td>The pixel size of the non-displayed point that reacts to mouse events.</td></tr><tr class="odd"><td><code>pointRadius</code></td><td>The radius of the point shape. If set to 0, the point is not rendered.</td></tr><tr class="even"><td><code>pointRotation</code></td><td>The rotation of the point in degrees.</td></tr><tr class="odd"><td><code>pointStyle</code></td><td>Style of the point. <a href="../configuration/elements#point-styles">more…</a></td></tr></tbody></table>

All these values, if `undefined`, fallback first to the dataset options then to the associated [`elements.point.*`](../configuration/elements.md#point-configuration) options.

### Line Styling

The style of the line can be controlled with the following properties:

<table><colgroup><col style="width: 12%" /><col style="width: 88%" /></colgroup><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backgroundColor</code></td><td>The line fill color.</td></tr><tr class="even"><td><code>borderCapStyle</code></td><td>Cap style of the line. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap">MDN</a>.</td></tr><tr class="odd"><td><code>borderColor</code></td><td>The line color.</td></tr><tr class="even"><td><code>borderDash</code></td><td>Length and spacing of dashes. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash">MDN</a>.</td></tr><tr class="odd"><td><code>borderDashOffset</code></td><td>Offset for line dashes. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset">MDN</a>.</td></tr><tr class="even"><td><code>borderJoinStyle</code></td><td>Line joint style. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin">MDN</a>.</td></tr><tr class="odd"><td><code>borderWidth</code></td><td>The line width (in pixels).</td></tr><tr class="even"><td><code>fill</code></td><td>How to fill the area under the line. See <a href="area.md">area charts</a>.</td></tr><tr class="odd"><td><code>tension</code></td><td>Bezier curve tension of the line. Set to 0 to draw straight lines.</td></tr><tr class="even"><td><code>spanGaps</code></td><td>If true, lines will be drawn between points with no or null data. If false, points with <code>null</code> data will create a break in the line.</td></tr></tbody></table>

If the value is `undefined`, `spanGaps` fallback to the associated [chart configuration options](#configuration-options). The rest of the values fallback to the associated [`elements.line.*`](../configuration/elements.md#line-configuration) options.

### Interactions

The interaction with each point can be controlled with the following properties:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>pointHoverBackgroundColor</code></td><td>Point background color when hovered.</td></tr><tr class="even"><td><code>pointHoverBorderColor</code></td><td>Point border color when hovered.</td></tr><tr class="odd"><td><code>pointHoverBorderWidth</code></td><td>Border width of point when hovered.</td></tr><tr class="even"><td><code>pointHoverRadius</code></td><td>The radius of the point when hovered.</td></tr></tbody></table>

Scale Options
-------------

The radar chart supports only a single scale. The options for this scale are defined in the `scales.r` property, which can be referenced from the [Linear Radial Axis page](../axes/radial/linear).

    options = {
      scales: {
        r: {
          angleLines: {
            display: false,
          },
          suggestedMin: 50,
          suggestedMax: 100,
        },
      },
    };

Default Options
---------------

It is common to want to apply a configuration setting to all created radar charts. The global radar chart settings are stored in `Chart.overrides.radar`. Changing the global options only affects charts created after the change. Existing charts are not changed.

Data Structure
--------------

The `data` property of a dataset for a radar chart is specified as an array of numbers. Each point in the data array corresponds to the label at the same index.

    data: [20, 10];

For a radar chart, to provide context of what each point means, we include an array of strings that show around each point in the chart.

    data: {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [{
            data: [20, 10, 4, 2]
        }]
    }

Internal data format
--------------------

`{x, y}`
