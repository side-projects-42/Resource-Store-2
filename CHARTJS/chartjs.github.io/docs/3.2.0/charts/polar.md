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
    -   <a href="/docs/3.2.0/charts/bar.html" class="sidebar-link">Bar Chart</a>
    -   <a href="/docs/3.2.0/charts/radar.html" class="sidebar-link">Radar Chart</a>
    -   <a href="/docs/3.2.0/charts/doughnut.html" class="sidebar-link">Doughnut and Pie Charts</a>
    -   <a href="/docs/3.2.0/charts/polar.html" class="active sidebar-link">Polar Area Chart</a>
    -   <a href="/docs/3.2.0/charts/bubble.html" class="sidebar-link">Bubble Chart</a>
    -   <a href="/docs/3.2.0/charts/scatter.html" class="sidebar-link">Scatter Chart</a>
    -   <a href="/docs/3.2.0/charts/area.html" class="sidebar-link">Area Chart</a>
    -   <a href="/docs/3.2.0/charts/mixed.html" class="sidebar-link">Mixed Chart Types</a>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#polar-area-chart" class="header-anchor">#</a> Polar Area Chart
========================================================================

Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.

This type of chart is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/charts/polar.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'polarArea', data: data, options: {} };

    const config = {
      type: 'polarArea',
      data: data,
      options: {}
    };

const data = { labels: \[ 'Red', 'Green', 'Yellow', 'Grey', 'Blue' \], datasets: \[{ label: 'My First Dataset', data: \[11, 16, 7, 3, 14\], backgroundColor: \[ 'rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(255, 205, 86)', 'rgb(201, 203, 207)', 'rgb(54, 162, 235)' \] }\] };

    const data = {
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
    };

<a href="#dataset-properties" class="header-anchor">#</a> Dataset Properties
----------------------------------------------------------------------------

Namespaces:

-   `data.datasets[index]` - options for this dataset only
-   `options.datasets.polarArea` - options for all polarArea datasets
-   `options.elements.arc` - options for all [arc elements](/docs/3.2.0/configuration/elements.html#arc-configuration)
-   `options` - options for the whole chart

The following options can be included in a polar area chart dataset to configure options for that specific dataset.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;"><a href="/docs/3.2.0/general/options.html#scriptable-options">Scriptable</a></th><th style="text-align: center;"><a href="/docs/3.2.0/general/options.html#indexable-options">Indexable</a></th><th>Default</th></tr></thead><tbody><tr class="odd"><td><a href="#styling"><code>backgroundColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#border-alignment"><code>borderAlign</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'center'</code></td></tr><tr class="odd"><td><a href="#styling"><code>borderColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'#fff'</code></td></tr><tr class="even"><td><a href="#styling"><code>borderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>2</code></td></tr><tr class="odd"><td><a href="#general"><code>clip</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#data-structure"><code>data</code></a></td><td><code>number[]</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><strong>required</strong></td></tr><tr class="odd"><td><a href="#interations"><code>hoverBackgroundColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#interactions"><code>hoverBorderColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#interactions"><code>hoverBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr></tbody></table>

All these values, if `undefined`, fallback to the scopes described in [option resolution](../general/options)

### <a href="#general" class="header-anchor">#</a> General

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>clip</code></td><td>How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. <code>0</code> = clip at chartArea. Clipping can also be configured per side: <code>clip: {left: 5, top: false, right: -2, bottom: 0}</code></td></tr></tbody></table>

### <a href="#styling" class="header-anchor">#</a> Styling

The style of each arc can be controlled with the following properties:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backgroundColor</code></td><td>arc background color.</td></tr><tr class="even"><td><code>borderColor</code></td><td>arc border color.</td></tr><tr class="odd"><td><code>borderWidth</code></td><td>arc border width (in pixels).</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated [`elements.arc.*`](/docs/3.2.0/configuration/elements.html#arc-configuration) options.

### <a href="#border-alignment" class="header-anchor">#</a> Border Alignment

The following values are supported for `borderAlign`.

-   `'center'` (default)
-   `'inner'`

When `'center'` is set, the borders of arcs next to each other will overlap. When `'inner'` is set, it is guaranteed that all the borders do not overlap.

### <a href="#interactions" class="header-anchor">#</a> Interactions

The interaction with each arc can be controlled with the following properties:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>hoverBackgroundColor</code></td><td>arc background color when hovered.</td></tr><tr class="even"><td><code>hoverBorderColor</code></td><td>arc border color when hovered.</td></tr><tr class="odd"><td><code>hoverBorderWidth</code></td><td>arc border width when hovered (in pixels).</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated [`elements.arc.*`](/docs/3.2.0/configuration/elements.html#arc-configuration) options.

<a href="#config-options" class="header-anchor">#</a> Config Options
--------------------------------------------------------------------

These are the customisation options specific to Polar Area charts. These options are looked up on access, and form together with the [global chart default options](#default-options) the options of the chart.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>animation.animateRotate</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, the chart will animate in with a rotation animation. This property is in the <code>options.animation</code> object.</td></tr><tr class="even"><td><code>animation.animateScale</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, will animate scaling the chart from the center outwards.</td></tr></tbody></table>

The polar area chart uses the [radialLinear](/docs/3.2.0/axes/radial/linear.html) scale. Additional configuration is provided via the scale.

<a href="#default-options" class="header-anchor">#</a> Default Options
----------------------------------------------------------------------

We can also change these default values for each PolarArea type that is created, this object is available at `Chart.overrides.polarArea`. Changing the global options only affects charts created after the change. Existing charts are not changed.

For example, to configure all new polar area charts with `animateScale = false` you would do:

    Chart.overrides.polarArea.animation.animateScale = false;

<a href="#data-structure" class="header-anchor">#</a> Data Structure
--------------------------------------------------------------------

For a polar area chart, datasets need to contain an array of data points. The data points should be a number, Chart.js will total all of the numbers and calculate the relative proportion of each.

You also need to specify an array of labels so that tooltips appear correctly for each slice.

    data = {
        datasets: [{
            data: [10, 20, 30]
        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    };

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/charts/doughnut.html" class="prev">Doughnut and Pie Charts</a> </span> <span class="next"> [Bubble Chart](/docs/3.2.0/charts/bubble.html) → </span>
