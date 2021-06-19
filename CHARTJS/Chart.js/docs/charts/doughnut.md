Doughnut and Pie Charts
=======================

Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.

They are excellent at showing the relational proportions between data.

Pie and doughnut charts are effectively the same class in Chart.js, but have one different default value - their `cutout`. This equates to what portion of the inner should be cut out. This defaults to `0` for pie charts, and `'50%'` for doughnuts.

They are also registered under two aliases in the `Chart` core. Other than their different default value, and different alias, they are exactly the same.

::: tab Doughnut

\`\`\`js chart-editor // const data = { labels: \[“Red”, “Blue”, “Yellow”\], datasets: \[ { label: “My First Dataset”, data: \[300, 50, 100\], backgroundColor: \[ “rgb(255, 99, 132)”, “rgb(54, 162, 235)”, “rgb(255, 205, 86)”, \], hoverOffset: 4, }, \], }; //

// const config = { type: “doughnut”, data: data, }; //

module.exports = { actions: \[\], config: config, }; \`\`\`

:::tab Pie

\`\`\`js chart-editor // const data = { labels: \[“Red”, “Blue”, “Yellow”\], datasets: \[ { label: “My First Dataset”, data: \[300, 50, 100\], backgroundColor: \[ “rgb(255, 99, 132)”, “rgb(54, 162, 235)”, “rgb(255, 205, 86)”, \], hoverOffset: 4, }, \], }; //

// const config = { type: “pie”, data: data, }; //

module.exports = { actions: \[\], config: config, }; \`\`\`

:::

::::

Dataset Properties
------------------

Namespaces:

-   `data.datasets[index]` - options for this dataset only
-   `options.datasets.doughnut` - options for all doughnut datasets
-   `options.datasets.pie` - options for all pie datasets
-   `options.elements.arc` - options for all [arc elements](../configuration/elements.md#arc-configuration)
-   `options` - options for the whole chart

The doughnut/pie chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colours of the dataset’s arcs are generally set this way.

<table style="width:98%;"><colgroup><col style="width: 19%" /><col style="width: 15%" /><col style="width: 27%" /><col style="width: 26%" /><col style="width: 11%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;"><a href="../general/options.md#scriptable-options">Scriptable</a></th><th style="text-align: center;"><a href="../general/options.md#indexable-options">Indexable</a></th><th>Default</th></tr></thead><tbody><tr class="odd"><td><a href="#styling"><code>backgroundColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#border-alignment"><code>borderAlign</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'center'</code></td></tr><tr class="odd"><td><a href="#styling"><code>borderColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'#fff'</code></td></tr><tr class="even"><td><a href="#border-radius"><code>borderRadius</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#styling"><code>borderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>2</code></td></tr><tr class="even"><td><a href="#general"><code>circumference</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#general"><code>clip</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#data-structure"><code>data</code></a></td><td><code>number[]</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><strong>required</strong></td></tr><tr class="odd"><td><a href="#interations"><code>hoverBackgroundColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#interactions"><code>hoverBorderColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#interactions"><code>hoverBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#interactions"><code>hoverOffset</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#styling"><code>offset</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="even"><td><a href="#general"><code>rotation</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td>[<code>spacing](#styling)                   |</code>number<code>|                           -                            |                          -                           |</code>0<code>| | [</code>weight<code>](#styling)                   |</code>number<code>|                           -                            |                          -                           |</code>1`</td><td></td><td style="text-align: center;"></td><td style="text-align: center;"></td><td></td></tr></tbody></table>

All these values, if `undefined`, fallback to the scopes described in [option resolution](../general/options)

### General

<table style="width:99%;"><colgroup><col style="width: 5%" /><col style="width: 94%" /></colgroup><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>circumference</code></td><td>Per-dataset override for the sweep that the arcs cover</td></tr><tr class="even"><td><code>clip</code></td><td>How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. <code>0</code> = clip at chartArea. Clipping can also be configured per side: <code>clip: {left: 5, top: false, right: -2, bottom: 0}</code></td></tr><tr class="odd"><td><code>rotation</code></td><td>Per-dataset override for the starting angle to draw arcs from</td></tr></tbody></table>

### Styling

The style of each arc can be controlled with the following properties:

<table style="width:99%;"><colgroup><col style="width: 8%" /><col style="width: 91%" /></colgroup><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backgroundColor</code></td><td>arc background color.</td></tr><tr class="even"><td><code>borderColor</code></td><td>arc border color.</td></tr><tr class="odd"><td><code>borderWidth</code></td><td>arc border width (in pixels).</td></tr><tr class="even"><td><code>offset</code></td><td>arc offset (in pixels).</td></tr><tr class="odd"><td><code>spacing</code></td><td>Fixed arc offset (in pixels). Similar to <code>offset</code> but applies to all arcs.</td></tr><tr class="even"><td><code>weight</code></td><td>The relative thickness of the dataset. Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated [`elements.arc.*`](../configuration/elements.md#arc-configuration) options.

### Border Alignment

The following values are supported for `borderAlign`.

-   `'center'` (default)
-   `'inner'`

When `'center'` is set, the borders of arcs next to each other will overlap. When `'inner'` is set, it is guaranteed that all borders will not overlap.

### Border Radius

If this value is a number, it is applied to all corners of the arc (outerStart, outerEnd, innerStart, innerRight). If this value is an object, the `outerStart` property defines the outer-start corner’s border radius. Similarly, the `outerEnd`, `innerStart`, and `innerEnd` properties can also be specified.

### Interactions

The interaction with each arc can be controlled with the following properties:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>hoverBackgroundColor</code></td><td>arc background color when hovered.</td></tr><tr class="even"><td><code>hoverBorderColor</code></td><td>arc border color when hovered.</td></tr><tr class="odd"><td><code>hoverBorderWidth</code></td><td>arc border width when hovered (in pixels).</td></tr><tr class="even"><td><code>hoverOffset</code></td><td>arc offset when hovered (in pixels).</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated [`elements.arc.*`](../configuration/elements.md#arc-configuration) options.

Config Options
--------------

These are the customisation options specific to Pie & Doughnut charts. These options are looked up on access, and form together with the global chart configuration the options of the chart.

<table style="width:97%;"><colgroup><col style="width: 10%" /><col style="width: 7%" /><col style="width: 14%" /><col style="width: 66%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>cutout</code></td><td><code>number</code>|<code>string</code></td><td><code>50%</code> - for doughnut, <code>0</code> - for pie</td><td>The portion of the chart that is cut out of the middle. If <code>string</code> and ending with ‘%’, percentage of the chart radius. <code>number</code> is considered to be pixels.</td></tr><tr class="even"><td><code>radius</code></td><td><code>number</code>|<code>string</code></td><td><code>100%</code></td><td>The outer radius of the chart. If <code>string</code> and ending with ‘%’, percentage of the maximum radius. <code>number</code> is considered to be pixels.</td></tr><tr class="odd"><td><code>rotation</code></td><td><code>number</code></td><td>0</td><td>Starting angle to draw arcs from.</td></tr><tr class="even"><td><code>circumference</code></td><td><code>number</code></td><td>360</td><td>Sweep to allow arcs to cover.</td></tr><tr class="odd"><td><code>animation.animateRotate</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, the chart will animate in with a rotation animation. This property is in the <code>options.animation</code> object.</td></tr><tr class="even"><td><code>animation.animateScale</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If true, will animate scaling the chart from the center outwards.</td></tr></tbody></table>

Default Options
---------------

We can also change these default values for each Doughnut type that is created, this object is available at `Chart.overrides.doughnut`. Pie charts also have a clone of these defaults available to change at `Chart.overrides.pie`, with the only difference being `cutout` being set to 0.

Data Structure
--------------

For a pie chart, datasets need to contain an array of data points. The data points should be a number, Chart.js will total all of the numbers and calculate the relative proportion of each.

You also need to specify an array of labels so that tooltips appear correctly.

    data = {
      datasets: [
        {
          data: [10, 20, 30],
        },
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["Red", "Yellow", "Blue"],
    };
