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

-   Configuration <span class="arrow right"></span>

-   Chart Types <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/charts/line.html" class="sidebar-link">Line Chart</a>
    -   <a href="/docs/3.2.0/charts/bar.html" class="active sidebar-link">Bar Chart</a>
    -   <a href="/docs/3.2.0/charts/radar.html" class="sidebar-link">Radar Chart</a>
    -   <a href="/docs/3.2.0/charts/doughnut.html" class="sidebar-link">Doughnut and Pie Charts</a>
    -   <a href="/docs/3.2.0/charts/polar.html" class="sidebar-link">Polar Area Chart</a>
    -   <a href="/docs/3.2.0/charts/bubble.html" class="sidebar-link">Bubble Chart</a>
    -   <a href="/docs/3.2.0/charts/scatter.html" class="sidebar-link">Scatter Chart</a>
    -   <a href="/docs/3.2.0/charts/area.html" class="sidebar-link">Area Chart</a>
    -   <a href="/docs/3.2.0/charts/mixed.html" class="sidebar-link">Mixed Chart Types</a>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#bar-chart" class="header-anchor">#</a> Bar Chart
==========================================================

A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/charts/bar.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'bar', data: data, options: { scales: { y: { beginAtZero: true } } }, };

    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };

const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[{ label: 'My First Dataset', data: \[65, 59, 80, 81, 56, 55, 40\], backgroundColor: \[ 'rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(201, 203, 207, 0.2)' \], borderColor: \[ 'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)' \], borderWidth: 1 }\] };

    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };

<a href="#dataset-properties" class="header-anchor">#</a> Dataset Properties
----------------------------------------------------------------------------

Namespaces:

-   `data.datasets[index]` - options for this dataset only
-   `options.datasets.bar` - options for all bar datasets
-   `options.elements.bar` - options for all [bar elements](/docs/3.2.0/configuration/elements.html#bar-configuration)
-   `options` - options for the whole chart

The bar chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the color of the bars is generally set this way. Only the `data` option needs to be specified in the dataset namespace.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;"><a href="/docs/3.2.0/general/options.html#scriptable-options">Scriptable</a></th><th style="text-align: center;"><a href="/docs/3.2.0/general/options.html#indexable-options">Indexable</a></th><th>Default</th></tr></thead><tbody><tr class="odd"><td><a href="#styling"><code>backgroundColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#general"><code>base</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td></td></tr><tr class="odd"><td><a href="#barpercentage"><code>barPercentage</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>0.9</code></td></tr><tr class="even"><td><a href="#barthickness"><code>barThickness</code></a></td><td><code>number</code>|<code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td></td></tr><tr class="odd"><td><a href="#styling"><code>borderColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#borderskipped"><code>borderSkipped</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'start'</code></td></tr><tr class="odd"><td><a href="#borderwidth"><code>borderWidth</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="even"><td><a href="#borderradius"><code>borderRadius</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#categorypercentage"><code>categoryPercentage</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>0.8</code></td></tr><tr class="even"><td><a href="#general"><code>clip</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td></td></tr><tr class="odd"><td><a href="#data-structure"><code>data</code></a></td><td><code>object</code>|<code>object[]</code>| <code>number[]</code>|<code>string[]</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><strong>required</strong></td></tr><tr class="even"><td><a href="#general"><code>grouped</code></a></td><td><code>boolean</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>true</code></td></tr><tr class="odd"><td><a href="#interactions"><code>hoverBackgroundColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td></td></tr><tr class="even"><td><a href="#interactions"><code>hoverBorderColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td></td></tr><tr class="odd"><td><a href="#interactions"><code>hoverBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>1</code></td></tr><tr class="even"><td><a href="#interactions"><code>hoverBorderRadius</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#general"><code>indexAxis</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>'x'</code></td></tr><tr class="even"><td><a href="#maxbarthickness"><code>maxBarThickness</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td></td></tr><tr class="odd"><td><a href="#styling"><code>minBarLength</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td></td></tr><tr class="even"><td><a href="#general"><code>label</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>''</code></td></tr><tr class="odd"><td><a href="#general"><code>order</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>0</code></td></tr><tr class="even"><td><a href="/docs/3.2.0/configuration/elements.html#point-styles"><code>pointStyle</code></a></td><td><code>string</code>|<code>Image</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'circle'</code></td></tr><tr class="odd"><td><a href="#general"><code>skipNull</code></a></td><td><code>boolean</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td></td></tr><tr class="even"><td><a href="#general"><code>stack</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>'bar'</code></td></tr><tr class="odd"><td><a href="#general"><code>xAxisID</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td>first x axis</td></tr><tr class="even"><td><a href="#general"><code>yAxisID</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td>first y axis</td></tr></tbody></table>

All these values, if `undefined`, fallback to the scopes described in [option resolution](../general/options)

### <a href="#example-dataset-configuration" class="header-anchor">#</a> Example dataset configuration

    data: {
        datasets: [{
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: [10, 20, 30, 40, 50, 60, 70]
        }]
    };

### <a href="#general" class="header-anchor">#</a> General

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>base</code></td><td>Base value for the bar in data units along the value axis. If not set, defaults to the value axis base value.</td></tr><tr class="even"><td><code>clip</code></td><td>How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. <code>0</code> = clip at chartArea. Clipping can also be configured per side: <code>clip: {left: 5, top: false, right: -2, bottom: 0}</code></td></tr><tr class="odd"><td><code>grouped</code></td><td>Should the bars be grouped on index axis. When <code>true</code>, all the datasets at same index value will be placed next to each other centering on that index value. When <code>false</code>, each bar is placed on its actual index-axis value.</td></tr><tr class="even"><td><code>indexAxis</code></td><td>The base axis of the dataset. <code>'x'</code> for vertical bars and <code>'y'</code> for horizontal bars.</td></tr><tr class="odd"><td><code>label</code></td><td>The label for the dataset which appears in the legend and tooltips.</td></tr><tr class="even"><td><code>order</code></td><td>The drawing order of dataset. Also affects order for stacking, tooltip, and legend.</td></tr><tr class="odd"><td><code>skipNull</code></td><td>If <code>true</code>, null or undefined values will not be used for spacing calculations when determining bar size.</td></tr><tr class="even"><td><code>stack</code></td><td>The ID of the group to which this dataset belongs to (when stacked, each group will be a separate stack). <a href="#stacked-bar-charts">more</a></td></tr><tr class="odd"><td><code>xAxisID</code></td><td>The ID of the x-axis to plot this dataset on.</td></tr><tr class="even"><td><code>yAxisID</code></td><td>The ID of the y-axis to plot this dataset on.</td></tr></tbody></table>

### <a href="#styling" class="header-anchor">#</a> Styling

The style of each bar can be controlled with the following properties:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backgroundColor</code></td><td>The bar background color.</td></tr><tr class="even"><td><code>borderColor</code></td><td>The bar border color.</td></tr><tr class="odd"><td><a href="#borderskipped"><code>borderSkipped</code></a></td><td>The edge to skip when drawing bar.</td></tr><tr class="even"><td><a href="#borderwidth"><code>borderWidth</code></a></td><td>The bar border width (in pixels).</td></tr><tr class="odd"><td><a href="#borderradius"><code>borderRadius</code></a></td><td>The bar border radius (in pixels).</td></tr><tr class="even"><td><code>minBarLength</code></td><td>Set this to ensure that bars have a minimum length in pixels.</td></tr><tr class="odd"><td><code>pointStyle</code></td><td>Style of the point for legend. <a href="/docs/3.2.0/configuration/elements.html#point-styles">more...</a></td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated [`elements.bar.*`](/docs/3.2.0/configuration/elements.html#bar-configuration) options.

#### <a href="#borderskipped" class="header-anchor">#</a> borderSkipped

This setting is used to avoid drawing the bar stroke at the base of the fill, or disable the border radius. In general, this does not need to be changed except when creating chart types that derive from a bar chart.

Note

For negative bars in a vertical chart, `top` and `bottom` are flipped. Same goes for `left` and `right` in a horizontal chart.

Options are:

-   `'start'`
-   `'end'`
-   `'bottom'`
-   `'left'`
-   `'top'`
-   `'right'`
-   `false`

#### <a href="#borderwidth" class="header-anchor">#</a> borderWidth

If this value is a number, it is applied to all sides of the rectangle (left, top, right, bottom), except [`borderSkipped`](#borderskipped). If this value is an object, the `left` property defines the left border width. Similarly, the `right`, `top`, and `bottom` properties can also be specified. Omitted borders and [`borderSkipped`](#borderskipped) are skipped.

#### <a href="#borderradius" class="header-anchor">#</a> borderRadius

If this value is a number, it is applied to all corners of the rectangle (topLeft, topRight, bottomLeft, bottomRight), except corners touching the [`borderSkipped`](#borderskipped). If this value is an object, the `topLeft` property defines the top-left corners border radius. Similarly, the `topRight`, `bottomLeft`, and `bottomRight` properties can also be specified. Omitted corners and those touching the [`borderSkipped`](#borderskipped) are skipped. For example if the `top` border is skipped, the border radius for the corners `topLeft` and `topRight` will be skipped as well.

Stacked Charts

When the border radius is supplied as a number and the chart is stacked, the radius will only be applied to the bars that are at the edges of the stack or where the bar is floating. The object syntax can be used to override this behavior.

### <a href="#interactions" class="header-anchor">#</a> Interactions

The interaction with each bar can be controlled with the following properties:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>hoverBackgroundColor</code></td><td>The bar background color when hovered.</td></tr><tr class="even"><td><code>hoverBorderColor</code></td><td>The bar border color when hovered.</td></tr><tr class="odd"><td><code>hoverBorderWidth</code></td><td>The bar border width when hovered (in pixels).</td></tr><tr class="even"><td><code>hoverBorderRadius</code></td><td>The bar border radius when hovered (in pixels).</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated [`elements.bar.*`](/docs/3.2.0/configuration/elements.html#bar-configuration) options.

### <a href="#barpercentage" class="header-anchor">#</a> barPercentage

Percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other. [more...](#barpercentage-vs-categorypercentage)

### <a href="#categorypercentage" class="header-anchor">#</a> categoryPercentage

Percent (0-1) of the available width each category should be within the sample width. [more...](#barpercentage-vs-categorypercentage)

### <a href="#barthickness" class="header-anchor">#</a> barThickness

If this value is a number, it is applied to the width of each bar, in pixels. When this is enforced, `barPercentage` and `categoryPercentage` are ignored.

If set to `'flex'`, the base sample widths are calculated automatically based on the previous and following samples so that they take the full available widths without overlap. Then, bars are sized using `barPercentage` and `categoryPercentage`. There is no gap when the percentage options are 1. This mode generates bars with different widths when data are not evenly spaced.

If not set (default), the base sample widths are calculated using the smallest interval that prevents bar overlapping, and bars are sized using `barPercentage` and `categoryPercentage`. This mode always generates bars equally sized.

### <a href="#maxbarthickness" class="header-anchor">#</a> maxBarThickness

Set this to ensure that bars are not sized thicker than this.

<a href="#scale-configuration" class="header-anchor">#</a> Scale Configuration
------------------------------------------------------------------------------

The bar chart sets unique default values for the following configuration from the associated `scale` options:

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>offset</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, extra space is added to both edges and the axis is scaled to fit into the chart area.</td></tr><tr class="even"><td><code>grid.offset</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, the bars for a particular data point fall between the grid lines. The grid line will move to the left by one half of the tick interval. If false, the grid line will go right down the middle of the bars. <a href="#offsetgridlines">more...</a></td></tr></tbody></table>

### <a href="#example-scale-configuration" class="header-anchor">#</a> Example scale configuration

    options = {
        scales: {
            x: {
                grid: {
                  offset: true
                }
            }
        }
    };

### <a href="#offset-grid-lines" class="header-anchor">#</a> Offset Grid Lines

If true, the bars for a particular data point fall between the grid lines. The grid line will move to the left by one half of the tick interval, which is the space between the grid lines. If false, the grid line will go right down the middle of the bars. This is set to true for a category scale in a bar chart while false for other scales or chart types by default.

<a href="#default-options" class="header-anchor">#</a> Default Options
----------------------------------------------------------------------

It is common to want to apply a configuration setting to all created bar charts. The global bar chart settings are stored in `Chart.overrides.bar`. Changing the global options only affects charts created after the change. Existing charts are not changed.

<a href="#barpercentage-vs-categorypercentage" class="header-anchor">#</a> barPercentage vs categoryPercentage
--------------------------------------------------------------------------------------------------------------

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

<a href="#data-structure" class="header-anchor">#</a> Data Structure
--------------------------------------------------------------------

All of the supported [data structures](/docs/3.2.0/general/data-structures.html) can be used with bar charts.

<a href="#stacked-bar-chart" class="header-anchor">#</a> Stacked Bar Chart
--------------------------------------------------------------------------

Bar charts can be configured into stacked bar charts by changing the settings on the X and Y axes to enable stacking. Stacked bar charts can be used to show how one data series is made up of a number of smaller pieces.

    var stackedBar = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true
                }
            }
        }
    });

<a href="#horizontal-bar-chart" class="header-anchor">#</a> Horizontal Bar Chart
--------------------------------------------------------------------------------

A horizontal bar chart is a variation on a vertical bar chart. It is sometimes used to show trend data, and the comparison of multiple data sets side by side. To achieve this you will have to set the `indexAxis` property in the options object to `'y'`. The default for this property is `'x'` and thus will show vertical bars.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/charts/bar.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'bar', data, options: { indexAxis: 'y', } };

    const config = {
      type: 'bar',
      data,
      options: {
        indexAxis: 'y',
      }
    };

const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[{ axis: 'y', label: 'My First Dataset', data: \[65, 59, 80, 81, 56, 55, 40\], fill: false, backgroundColor: \[ 'rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(201, 203, 207, 0.2)' \], borderColor: \[ 'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)' \], borderWidth: 1 }\] };

    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [{
        axis: 'y',
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };

### <a href="#horizontal-bar-chart-config-options" class="header-anchor">#</a> Horizontal Bar Chart config Options

The configuration options for the horizontal bar chart are the same as for the [bar chart](#scale-configuration). However, any options specified on the x-axis in a bar chart, are applied to the y-axis in a horizontal bar chart.

<a href="#internal-data-format" class="header-anchor">#</a> Internal data format
--------------------------------------------------------------------------------

`{x, y, _custom}` where `_custom` is an optional object defining stacked bar properties: `{start, end, barStart, barEnd, min, max}`. `start` and `end` are the input values. Those two are repeated in `barStart` (closer to origin), `barEnd` (further from origin), `min` and `max`.

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/charts/line.html" class="prev">Line Chart</a> </span> <span class="next"> [Radar Chart](/docs/3.2.0/charts/radar.html) → </span>
