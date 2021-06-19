Bar Chart
=========

A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.

\`\`\`js chart-editor // const labels = Utils.months({ count: 7 }); const data = { labels: labels, datasets: \[ { label: “My First Dataset”, data: \[65, 59, 80, 81, 56, 55, 40\], backgroundColor: \[ “rgba(255, 99, 132, 0.2)”, “rgba(255, 159, 64, 0.2)”, “rgba(255, 205, 86, 0.2)”, “rgba(75, 192, 192, 0.2)”, “rgba(54, 162, 235, 0.2)”, “rgba(153, 102, 255, 0.2)”, “rgba(201, 203, 207, 0.2)”, \], borderColor: \[ “rgb(255, 99, 132)”, “rgb(255, 159, 64)”, “rgb(255, 205, 86)”, “rgb(75, 192, 192)”, “rgb(54, 162, 235)”, “rgb(153, 102, 255)”, “rgb(201, 203, 207)”, \], borderWidth: 1, }, \], }; //

// const config = { type: “bar”, data: data, options: { scales: { y: { beginAtZero: true, }, }, }, }; //

module.exports = { actions: \[\], config: config, }; \`\`\`

Dataset Properties
------------------

Namespaces:

-   `data.datasets[index]` - options for this dataset only
-   `options.datasets.bar` - options for all bar datasets
-   `options.elements.bar` - options for all [bar elements](../configuration/elements.md#bar-configuration)
-   `options` - options for the whole chart

The bar chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the color of the bars is generally set this way. Only the `data` option needs to be specified in the dataset namespace.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;"><a href="../general/options.md#scriptable-options">Scriptable</a></th><th style="text-align: center;"><a href="../general/options.md#indexable-options">Indexable</a></th><th>Default</th></tr></thead><tbody><tr class="odd"><td><a href="#styling"><code>backgroundColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#general"><code>base</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td></td></tr><tr class="odd"><td><a href="#barpercentage"><code>barPercentage</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>0.9</code></td></tr><tr class="even"><td><a href="#barthickness"><code>barThickness</code></a></td><td><code>number</code>|<code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td></td></tr><tr class="odd"><td><a href="#styling"><code>borderColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#borderskipped"><code>borderSkipped</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'start'</code></td></tr><tr class="odd"><td><a href="#borderwidth"><code>borderWidth</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="even"><td><a href="#borderradius"><code>borderRadius</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#categorypercentage"><code>categoryPercentage</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>0.8</code></td></tr><tr class="even"><td><a href="#general"><code>clip</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td></td></tr><tr class="odd"><td><a href="#data-structure"><code>data</code></a></td><td><code>object</code>|<code>object[]</code>| <code>number[]</code>|<code>string[]</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><strong>required</strong></td></tr><tr class="even"><td><a href="#general"><code>grouped</code></a></td><td><code>boolean</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>true</code></td></tr><tr class="odd"><td><a href="#interactions"><code>hoverBackgroundColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td></td></tr><tr class="even"><td><a href="#interactions"><code>hoverBorderColor</code></a></td><td><a href="../general/colors.md"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td></td></tr><tr class="odd"><td><a href="#interactions"><code>hoverBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>1</code></td></tr><tr class="even"><td><a href="#interactions"><code>hoverBorderRadius</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#general"><code>indexAxis</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>'x'</code></td></tr><tr class="even"><td><a href="#maxbarthickness"><code>maxBarThickness</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td></td></tr><tr class="odd"><td><a href="#styling"><code>minBarLength</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td></td></tr><tr class="even"><td><a href="#general"><code>label</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>''</code></td></tr><tr class="odd"><td><a href="#general"><code>order</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>0</code></td></tr><tr class="even"><td><a href="../configuration/elements.md#point-styles"><code>pointStyle</code></a></td><td><code>string</code>|<code>Image</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'circle'</code></td></tr><tr class="odd"><td><a href="#general"><code>skipNull</code></a></td><td><code>boolean</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td></td></tr><tr class="even"><td><a href="#general"><code>stack</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>'bar'</code></td></tr><tr class="odd"><td><a href="#general"><code>xAxisID</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td>first x axis</td></tr><tr class="even"><td><a href="#general"><code>yAxisID</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td>first y axis</td></tr></tbody></table>

All these values, if `undefined`, fallback to the scopes described in [option resolution](../general/options)

### Example dataset configuration

    data: {
      datasets: [
        {
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [10, 20, 30, 40, 50, 60, 70],
        },
      ];
    }

### General

<table style="width:99%;"><colgroup><col style="width: 4%" /><col style="width: 95%" /></colgroup><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>base</code></td><td>Base value for the bar in data units along the value axis. If not set, defaults to the value axis base value.</td></tr><tr class="even"><td><code>clip</code></td><td>How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. <code>0</code> = clip at chartArea. Clipping can also be configured per side: <code>clip: {left: 5, top: false, right: -2, bottom: 0}</code></td></tr><tr class="odd"><td><code>grouped</code></td><td>Should the bars be grouped on index axis. When <code>true</code>, all the datasets at same index value will be placed next to each other centering on that index value. When <code>false</code>, each bar is placed on its actual index-axis value.</td></tr><tr class="even"><td><code>indexAxis</code></td><td>The base axis of the dataset. <code>'x'</code> for vertical bars and <code>'y'</code> for horizontal bars.</td></tr><tr class="odd"><td><code>label</code></td><td>The label for the dataset which appears in the legend and tooltips.</td></tr><tr class="even"><td><code>order</code></td><td>The drawing order of dataset. Also affects order for stacking, tooltip, and legend.</td></tr><tr class="odd"><td><code>skipNull</code></td><td>If <code>true</code>, null or undefined values will not be used for spacing calculations when determining bar size.</td></tr><tr class="even"><td><code>stack</code></td><td>The ID of the group to which this dataset belongs to (when stacked, each group will be a separate stack). <a href="#stacked-bar-charts">more</a></td></tr><tr class="odd"><td><code>xAxisID</code></td><td>The ID of the x-axis to plot this dataset on.</td></tr><tr class="even"><td><code>yAxisID</code></td><td>The ID of the y-axis to plot this dataset on.</td></tr></tbody></table>

### Styling

The style of each bar can be controlled with the following properties:

<table style="width:99%;"><colgroup><col style="width: 28%" /><col style="width: 71%" /></colgroup><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backgroundColor</code></td><td>The bar background color.</td></tr><tr class="even"><td><code>borderColor</code></td><td>The bar border color.</td></tr><tr class="odd"><td><a href="#borderskipped"><code>borderSkipped</code></a></td><td>The edge to skip when drawing bar.</td></tr><tr class="even"><td><a href="#borderwidth"><code>borderWidth</code></a></td><td>The bar border width (in pixels).</td></tr><tr class="odd"><td><a href="#borderradius"><code>borderRadius</code></a></td><td>The bar border radius (in pixels).</td></tr><tr class="even"><td><code>minBarLength</code></td><td>Set this to ensure that bars have a minimum length in pixels.</td></tr><tr class="odd"><td><code>pointStyle</code></td><td>Style of the point for legend. <a href="../configuration/elements.md#point-styles">more…</a></td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated [`elements.bar.*`](../configuration/elements.md#bar-configuration) options.

#### borderSkipped

This setting is used to avoid drawing the bar stroke at the base of the fill, or disable the border radius. In general, this does not need to be changed except when creating chart types that derive from a bar chart.

:::tip Note For negative bars in a vertical chart, `top` and `bottom` are flipped. Same goes for `left` and `right` in a horizontal chart. :::

Options are:

-   `'start'`
-   `'end'`
-   `'bottom'`
-   `'left'`
-   `'top'`
-   `'right'`
-   `false`

#### borderWidth

If this value is a number, it is applied to all sides of the rectangle (left, top, right, bottom), except [`borderSkipped`](#borderskipped). If this value is an object, the `left` property defines the left border width. Similarly, the `right`, `top`, and `bottom` properties can also be specified. Omitted borders and [`borderSkipped`](#borderskipped) are skipped.

#### borderRadius

If this value is a number, it is applied to all corners of the rectangle (topLeft, topRight, bottomLeft, bottomRight), except corners touching the [`borderSkipped`](#borderskipped). If this value is an object, the `topLeft` property defines the top-left corners border radius. Similarly, the `topRight`, `bottomLeft`, and `bottomRight` properties can also be specified. Omitted corners and those touching the [`borderSkipped`](#borderskipped) are skipped. For example if the `top` border is skipped, the border radius for the corners `topLeft` and `topRight` will be skipped as well.

:::tip Stacked Charts When the border radius is supplied as a number and the chart is stacked, the radius will only be applied to the bars that are at the edges of the stack or where the bar is floating. The object syntax can be used to override this behavior. :::

### Interactions

The interaction with each bar can be controlled with the following properties:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>hoverBackgroundColor</code></td><td>The bar background color when hovered.</td></tr><tr class="even"><td><code>hoverBorderColor</code></td><td>The bar border color when hovered.</td></tr><tr class="odd"><td><code>hoverBorderWidth</code></td><td>The bar border width when hovered (in pixels).</td></tr><tr class="even"><td><code>hoverBorderRadius</code></td><td>The bar border radius when hovered (in pixels).</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated [`elements.bar.*`](../configuration/elements.md#bar-configuration) options.

### barPercentage

Percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other. [more…](#barpercentage-vs-categorypercentage)

### categoryPercentage

Percent (0-1) of the available width each category should be within the sample width. [more…](#barpercentage-vs-categorypercentage)

### barThickness

If this value is a number, it is applied to the width of each bar, in pixels. When this is enforced, `barPercentage` and `categoryPercentage` are ignored.

If set to `'flex'`, the base sample widths are calculated automatically based on the previous and following samples so that they take the full available widths without overlap. Then, bars are sized using `barPercentage` and `categoryPercentage`. There is no gap when the percentage options are 1. This mode generates bars with different widths when data are not evenly spaced.

If not set (default), the base sample widths are calculated using the smallest interval that prevents bar overlapping, and bars are sized using `barPercentage` and `categoryPercentage`. This mode always generates bars equally sized.

### maxBarThickness

Set this to ensure that bars are not sized thicker than this.

Scale Configuration
-------------------

The bar chart sets unique default values for the following configuration from the associated `scale` options:

<table style="width:98%;"><colgroup><col style="width: 4%" /><col style="width: 3%" /><col style="width: 2%" /><col style="width: 89%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>offset</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, extra space is added to both edges and the axis is scaled to fit into the chart area.</td></tr><tr class="even"><td><code>grid.offset</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, the bars for a particular data point fall between the grid lines. The grid line will move to the left by one half of the tick interval. If false, the grid line will go right down the middle of the bars. <a href="#offsetgridlines">more…</a></td></tr></tbody></table>

### Example scale configuration

    options = {
      scales: {
        x: {
          grid: {
            offset: true,
          },
        },
      },
    };

### Offset Grid Lines

If true, the bars for a particular data point fall between the grid lines. The grid line will move to the left by one half of the tick interval, which is the space between the grid lines. If false, the grid line will go right down the middle of the bars. This is set to true for a category scale in a bar chart while false for other scales or chart types by default.

Default Options
---------------

It is common to want to apply a configuration setting to all created bar charts. The global bar chart settings are stored in `Chart.overrides.bar`. Changing the global options only affects charts created after the change. Existing charts are not changed.

barPercentage vs categoryPercentage
-----------------------------------

The following shows the relationship between the bar percentage option and the category percentage option.

    // categoryPercentage: 1.0
    // barPercentage: 1.0
    Bar:        | 1.0 | 1.0 |
    Category:   |    1.0    |
    Sample:     |===========|

    // categoryPercentage: 1.0
    // barPercentage: 0.5
    Bar:          |.5|  |.5|
    Category:  |      1.0     |
    Sample:    |==============|

    // categoryPercentage: 0.5
    // barPercentage: 1.0
    Bar:             |1.0||1.0|
    Category:        |   .5   |
    Sample:     |==================|

Data Structure
--------------

All of the supported [data structures](../general/data-structures.md) can be used with bar charts.

Stacked Bar Chart
-----------------

Bar charts can be configured into stacked bar charts by changing the settings on the X and Y axes to enable stacking. Stacked bar charts can be used to show how one data series is made up of a number of smaller pieces.

    var stackedBar = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    });

Horizontal Bar Chart
--------------------

A horizontal bar chart is a variation on a vertical bar chart. It is sometimes used to show trend data, and the comparison of multiple data sets side by side. To achieve this you will have to set the `indexAxis` property in the options object to `'y'`. The default for this property is `'x'` and thus will show vertical bars.

\`\`\`js chart-editor // const labels = Utils.months({ count: 7 }); const data = { labels: labels, datasets: \[ { axis: “y”, label: “My First Dataset”, data: \[65, 59, 80, 81, 56, 55, 40\], fill: false, backgroundColor: \[ “rgba(255, 99, 132, 0.2)”, “rgba(255, 159, 64, 0.2)”, “rgba(255, 205, 86, 0.2)”, “rgba(75, 192, 192, 0.2)”, “rgba(54, 162, 235, 0.2)”, “rgba(153, 102, 255, 0.2)”, “rgba(201, 203, 207, 0.2)”, \], borderColor: \[ “rgb(255, 99, 132)”, “rgb(255, 159, 64)”, “rgb(255, 205, 86)”, “rgb(75, 192, 192)”, “rgb(54, 162, 235)”, “rgb(153, 102, 255)”, “rgb(201, 203, 207)”, \], borderWidth: 1, }, \], }; //

// const config = { type: “bar”, data, options: { indexAxis: “y”, }, }; //

module.exports = { actions: \[\], config: config, }; \`\`\`

### Horizontal Bar Chart config Options

The configuration options for the horizontal bar chart are the same as for the [bar chart](#scale-configuration). However, any options specified on the x-axis in a bar chart, are applied to the y-axis in a horizontal bar chart.

Internal data format
--------------------

`{x, y, _custom}` where `_custom` is an optional object defining stacked bar properties: `{start, end, barStart, barEnd, min, max}`. `start` and `end` are the input values. Those two are repeated in `barStart` (closer to origin), `barEnd` (further from origin), `min` and `max`.
