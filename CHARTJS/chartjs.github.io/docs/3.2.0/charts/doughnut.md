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
    -   <a href="/docs/3.2.0/charts/doughnut.html" class="active sidebar-link">Doughnut and Pie Charts</a>
    -   <a href="/docs/3.2.0/charts/polar.html" class="sidebar-link">Polar Area Chart</a>
    -   <a href="/docs/3.2.0/charts/bubble.html" class="sidebar-link">Bubble Chart</a>
    -   <a href="/docs/3.2.0/charts/scatter.html" class="sidebar-link">Scatter Chart</a>
    -   <a href="/docs/3.2.0/charts/area.html" class="sidebar-link">Area Chart</a>
    -   <a href="/docs/3.2.0/charts/mixed.html" class="sidebar-link">Mixed Chart Types</a>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#doughnut-and-pie-charts" class="header-anchor">#</a> Doughnut and Pie Charts
======================================================================================

Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data.

They are excellent at showing the relational proportions between data.

Pie and doughnut charts are effectively the same class in Chart.js, but have one different default value - their `cutout`. This equates to what portion of the inner should be cut out. This defaults to `0` for pie charts, and `'50%'` for doughnuts.

They are also registered under two aliases in the `Chart` core. Other than their different default value, and different alias, they are exactly the same.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/charts/doughnut.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'doughnut', data: data, };

    const config = {
      type: 'doughnut',
      data: data,
    };

const data = { labels: \[ 'Red', 'Blue', 'Yellow' \], datasets: \[{ label: 'My First Dataset', data: \[300, 50, 100\], backgroundColor: \[ 'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)' \], hoverOffset: 4 }\] };

    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/charts/doughnut.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'pie', data: data, };

    const config = {
      type: 'pie',
      data: data,
    };

const data = { labels: \[ 'Red', 'Blue', 'Yellow' \], datasets: \[{ label: 'My First Dataset', data: \[300, 50, 100\], backgroundColor: \[ 'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)' \], hoverOffset: 4 }\] };

    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

<a href="#dataset-properties" class="header-anchor">#</a> Dataset Properties
----------------------------------------------------------------------------

Namespaces:

-   `data.datasets[index]` - options for this dataset only
-   `options.datasets.doughnut` - options for all doughnut datasets
-   `options.datasets.pie` - options for all pie datasets
-   `options.elements.arc` - options for all [arc elements](/docs/3.2.0/configuration/elements.html#arc-configuration)
-   `options` - options for the whole chart

The doughnut/pie chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colours of the dataset's arcs are generally set this way.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;"><a href="/docs/3.2.0/general/options.html#scriptable-options">Scriptable</a></th><th style="text-align: center;"><a href="/docs/3.2.0/general/options.html#indexable-options">Indexable</a></th><th>Default</th></tr></thead><tbody><tr class="odd"><td><a href="#styling"><code>backgroundColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#border-alignment"><code>borderAlign</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'center'</code></td></tr><tr class="odd"><td><a href="#styling"><code>borderColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'#fff'</code></td></tr><tr class="even"><td><a href="#border-radius"><code>borderRadius</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#styling"><code>borderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>2</code></td></tr><tr class="even"><td><a href="#general"><code>circumference</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#general"><code>clip</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#data-structure"><code>data</code></a></td><td><code>number[]</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><strong>required</strong></td></tr><tr class="odd"><td><a href="#interations"><code>hoverBackgroundColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#interactions"><code>hoverBorderColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#interactions"><code>hoverBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#interactions"><code>hoverOffset</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#styling"><code>offset</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="even"><td><a href="#general"><code>rotation</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#styling"><code>weight</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>1</code></td></tr></tbody></table>

All these values, if `undefined`, fallback to the scopes described in [option resolution](../general/options)

### <a href="#general" class="header-anchor">#</a> General

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>circumference</code></td><td>Per-dataset override for the sweep that the arcs cover</td></tr><tr class="even"><td><code>clip</code></td><td>How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. <code>0</code> = clip at chartArea. Clipping can also be configured per side: <code>clip: {left: 5, top: false, right: -2, bottom: 0}</code></td></tr><tr class="odd"><td><code>rotation</code></td><td>Per-dataset override for the starting angle to draw arcs from</td></tr></tbody></table>

### <a href="#styling" class="header-anchor">#</a> Styling

The style of each arc can be controlled with the following properties:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backgroundColor</code></td><td>arc background color.</td></tr><tr class="even"><td><code>borderColor</code></td><td>arc border color.</td></tr><tr class="odd"><td><code>borderWidth</code></td><td>arc border width (in pixels).</td></tr><tr class="even"><td><code>offset</code></td><td>arc offset (in pixels).</td></tr><tr class="odd"><td><code>weight</code></td><td>The relative thickness of the dataset. Providing a value for weight will cause the pie or doughnut dataset to be drawn with a thickness relative to the sum of all the dataset weight values.</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated [`elements.arc.*`](/docs/3.2.0/configuration/elements.html#arc-configuration) options.

### <a href="#border-alignment" class="header-anchor">#</a> Border Alignment

The following values are supported for `borderAlign`.

-   `'center'` (default)
-   `'inner'`

When `'center'` is set, the borders of arcs next to each other will overlap. When `'inner'` is set, it is guaranteed that all borders will not overlap.

### <a href="#border-radius" class="header-anchor">#</a> Border Radius

If this value is a number, it is applied to all corners of the arc (outerStart, outerEnd, innerStart, innerRight). If this value is an object, the `outerStart` property defines the outer-start corner's border radius. Similarly, the `outerEnd`, `innerStart`, and `innerEnd` properties can also be specified.

### <a href="#interactions" class="header-anchor">#</a> Interactions

The interaction with each arc can be controlled with the following properties:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>hoverBackgroundColor</code></td><td>arc background color when hovered.</td></tr><tr class="even"><td><code>hoverBorderColor</code></td><td>arc border color when hovered.</td></tr><tr class="odd"><td><code>hoverBorderWidth</code></td><td>arc border width when hovered (in pixels).</td></tr><tr class="even"><td><code>hoverOffset</code></td><td>arc offset when hovered (in pixels).</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated [`elements.arc.*`](/docs/3.2.0/configuration/elements.html#arc-configuration) options.

<a href="#config-options" class="header-anchor">#</a> Config Options
--------------------------------------------------------------------

These are the customisation options specific to Pie & Doughnut charts. These options are looked up on access, and form together with the global chart configuration the options of the chart.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>cutout</code></td><td><code>number</code>|<code>string</code></td><td><code>50%</code> - for doughnut, <code>0</code> - for pie</td><td>The portion of the chart that is cut out of the middle. If <code>string</code> and ending with '%', percentage of the chart radius. <code>number</code> is considered to be pixels.</td></tr><tr class="even"><td><code>radius</code></td><td><code>number</code>|<code>string</code></td><td><code>100%</code></td><td>The outer radius of the chart. If <code>string</code> and ending with '%', percentage of the maximum radius. <code>number</code> is considered to be pixels.</td></tr><tr class="odd"><td><code>rotation</code></td><td><code>number</code></td><td>0</td><td>Starting angle to draw arcs from.</td></tr><tr class="even"><td><code>circumference</code></td><td><code>number</code></td><td>360</td><td>Sweep to allow arcs to cover.</td></tr><tr class="odd"><td><code>animation.animateRotate</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, the chart will animate in with a rotation animation. This property is in the <code>options.animation</code> object.</td></tr><tr class="even"><td><code>animation.animateScale</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If true, will animate scaling the chart from the center outwards.</td></tr></tbody></table>

<a href="#default-options" class="header-anchor">#</a> Default Options
----------------------------------------------------------------------

We can also change these default values for each Doughnut type that is created, this object is available at `Chart.overrides.doughnut`. Pie charts also have a clone of these defaults available to change at `Chart.overrides.pie`, with the only difference being `cutout` being set to 0.

<a href="#data-structure" class="header-anchor">#</a> Data Structure
--------------------------------------------------------------------

For a pie chart, datasets need to contain an array of data points. The data points should be a number, Chart.js will total all of the numbers and calculate the relative proportion of each.

You also need to specify an array of labels so that tooltips appear correctly.

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

<span class="prev"> ← <a href="/docs/3.2.0/charts/radar.html" class="prev">Radar Chart</a> </span> <span class="next"> [Polar Area Chart](/docs/3.2.0/charts/polar.html) → </span>
