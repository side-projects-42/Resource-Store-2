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
    -   <a href="/docs/3.2.0/charts/polar.html" class="sidebar-link">Polar Area Chart</a>
    -   <a href="/docs/3.2.0/charts/bubble.html" class="active sidebar-link">Bubble Chart</a>
    -   <a href="/docs/3.2.0/charts/scatter.html" class="sidebar-link">Scatter Chart</a>
    -   <a href="/docs/3.2.0/charts/area.html" class="sidebar-link">Area Chart</a>
    -   <a href="/docs/3.2.0/charts/mixed.html" class="sidebar-link">Mixed Chart Types</a>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#bubble-chart" class="header-anchor">#</a> Bubble Chart
================================================================

A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/charts/bubble.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'bubble', data: data, options: {} };

    const config = {
      type: 'bubble',
      data: data,
      options: {}
    };

const data = { datasets: \[{ label: 'First Dataset', data: \[{ x: 20, y: 30, r: 15 }, { x: 40, y: 10, r: 10 }\], backgroundColor: 'rgb(255, 99, 132)' }\] };

    const data = {
      datasets: [{
        label: 'First Dataset',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    };

<a href="#dataset-properties" class="header-anchor">#</a> Dataset Properties
----------------------------------------------------------------------------

Namespaces:

-   `data.datasets[index]` - options for this dataset only
-   `options.datasets.bubble` - options for all bubble datasets
-   `options.elements.point` - options for all [point elements](/docs/3.2.0/configuration/elements.html#point-configuration)
-   `options` - options for the whole chart

The bubble chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colour of the bubbles is generally set this way.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;"><a href="/docs/3.2.0/general/options.html#scriptable-options">Scriptable</a></th><th style="text-align: center;"><a href="/docs/3.2.0/general/options.html#indexable-options">Indexable</a></th><th>Default</th></tr></thead><tbody><tr class="odd"><td><a href="#styling"><code>backgroundColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#styling"><code>borderColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="odd"><td><a href="#styling"><code>borderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>3</code></td></tr><tr class="even"><td><a href="#general"><code>clip</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#data-structure"><code>data</code></a></td><td><code>object[]</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><strong>required</strong></td></tr><tr class="even"><td><a href="#interactions"><code>hoverBackgroundColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#interactions"><code>hoverBorderColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#interactions"><code>hoverBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>1</code></td></tr><tr class="odd"><td><a href="#interactions"><code>hoverRadius</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>4</code></td></tr><tr class="even"><td><a href="#interactions"><code>hitRadius</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>1</code></td></tr><tr class="odd"><td><a href="#general"><code>label</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#general"><code>order</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#styling"><code>pointStyle</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'circle'</code></td></tr><tr class="even"><td><a href="#styling"><code>rotation</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#styling"><code>radius</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>3</code></td></tr></tbody></table>

All these values, if `undefined`, fallback to the scopes described in [option resolution](../general/options)

### <a href="#general" class="header-anchor">#</a> General

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>clip</code></td><td>How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. <code>0</code> = clip at chartArea. Clipping can also be configured per side: <code>clip: {left: 5, top: false, right: -2, bottom: 0}</code></td></tr><tr class="even"><td><code>label</code></td><td>The label for the dataset which appears in the legend and tooltips.</td></tr><tr class="odd"><td><code>order</code></td><td>The drawing order of dataset. Also affects order for tooltip and legend.</td></tr></tbody></table>

### <a href="#styling" class="header-anchor">#</a> Styling

The style of each bubble can be controlled with the following properties:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backgroundColor</code></td><td>bubble background color.</td></tr><tr class="even"><td><code>borderColor</code></td><td>bubble border color.</td></tr><tr class="odd"><td><code>borderWidth</code></td><td>bubble border width (in pixels).</td></tr><tr class="even"><td><code>pointStyle</code></td><td>bubble <a href="../configuration/elements#point-styles">shape style</a>.</td></tr><tr class="odd"><td><code>rotation</code></td><td>bubble rotation (in degrees).</td></tr><tr class="even"><td><code>radius</code></td><td>bubble radius (in pixels).</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated [`elements.point.*`](/docs/3.2.0/configuration/elements.html#point-configuration) options.

### <a href="#interactions" class="header-anchor">#</a> Interactions

The interaction with each bubble can be controlled with the following properties:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>hoverBackgroundColor</code></td><td>bubble background color when hovered.</td></tr><tr class="even"><td><code>hoverBorderColor</code></td><td>bubble border color when hovered.</td></tr><tr class="odd"><td><code>hoverBorderWidth</code></td><td>bubble border width when hovered (in pixels).</td></tr><tr class="even"><td><code>hoverRadius</code></td><td>bubble <strong>additional</strong> radius when hovered (in pixels).</td></tr><tr class="odd"><td><code>hitRadius</code></td><td>bubble <strong>additional</strong> radius for hit detection (in pixels).</td></tr></tbody></table>

All these values, if `undefined`, fallback to the associated [`elements.point.*`](/docs/3.2.0/configuration/elements.html#point-configuration) options.

<a href="#default-options" class="header-anchor">#</a> Default Options
----------------------------------------------------------------------

We can also change the default values for the Bubble chart type. Doing so will give all bubble charts created after this point the new defaults. The default configuration for the bubble chart can be accessed at `Chart.overrides.bubble`.

<a href="#data-structure" class="header-anchor">#</a> Data Structure
--------------------------------------------------------------------

Bubble chart datasets need to contain a `data` array of points, each point represented by an object containing the following properties:

    {
        // X Value
        x: number,
        // Y Value
        y: number,
        // Bubble radius in pixels (not scaled).
        r: number
    }

**Important:** the radius property, `r` is **not** scaled by the chart, it is the raw radius in pixels of the bubble that is drawn on the canvas.

<a href="#internal-data-format" class="header-anchor">#</a> Internal data format
--------------------------------------------------------------------------------

`{x, y, _custom}` where `_custom` is the radius.

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/charts/polar.html" class="prev">Polar Area Chart</a> </span> <span class="next"> [Scatter Chart](/docs/3.2.0/charts/scatter.html) → </span>
