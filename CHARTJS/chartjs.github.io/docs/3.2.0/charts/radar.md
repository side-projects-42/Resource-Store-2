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
    -   <a href="/docs/3.2.0/charts/radar.html" class="active sidebar-link">Radar Chart</a>
    -   <a href="/docs/3.2.0/charts/doughnut.html" class="sidebar-link">Doughnut and Pie Charts</a>
    -   <a href="/docs/3.2.0/charts/polar.html" class="sidebar-link">Polar Area Chart</a>
    -   <a href="/docs/3.2.0/charts/bubble.html" class="sidebar-link">Bubble Chart</a>
    -   <a href="/docs/3.2.0/charts/scatter.html" class="sidebar-link">Scatter Chart</a>
    -   <a href="/docs/3.2.0/charts/area.html" class="sidebar-link">Area Chart</a>
    -   <a href="/docs/3.2.0/charts/mixed.html" class="sidebar-link">Mixed Chart Types</a>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#radar-chart" class="header-anchor">#</a> Radar Chart
==============================================================

A radar chart is a way of showing multiple data points and the variation between them.

They are often useful for comparing the points of two or more different data sets.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/charts/radar.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'radar', data: data, options: { elements: { line: { borderWidth: 3 } } }, };

    const config = {
      type: 'radar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      },
    };

const data = { labels: \[ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' \], datasets: \[{ label: 'My First Dataset', data: \[65, 59, 90, 81, 56, 55, 40\], fill: true, backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgb(255, 99, 132)', pointBackgroundColor: 'rgb(255, 99, 132)', pointBorderColor: '\#fff', pointHoverBackgroundColor: '\#fff', pointHoverBorderColor: 'rgb(255, 99, 132)' }, { label: 'My Second Dataset', data: \[28, 48, 40, 19, 96, 27, 100\], fill: true, backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgb(54, 162, 235)', pointBackgroundColor: 'rgb(54, 162, 235)', pointBorderColor: '\#fff', pointHoverBackgroundColor: '\#fff', pointHoverBorderColor: 'rgb(54, 162, 235)' }\] };

    const data = {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }, {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    };

<a href="#dataset-properties" class="header-anchor">#</a> Dataset Properties
----------------------------------------------------------------------------

Namespaces:

-   `data.datasets[index]` - options for this dataset only
-   `options.datasets.line` - options for all line datasets
-   `options.elements.line` - options for all [line elements](/docs/3.2.0/configuration/elements.html#line-configuration)
-   `options.elements.point` - options for all [point elements](/docs/3.2.0/configuration/elements.html#point-configuration)
-   `options` - options for the whole chart

The radar chart allows a number of properties to be specified for each dataset. These are used to set display properties for a specific dataset. For example, the colour of a line is generally set this way.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;"><a href="/docs/3.2.0/general/options.html#scriptable-options">Scriptable</a></th><th style="text-align: center;"><a href="/docs/3.2.0/general/options.html#indexable-options">Indexable</a></th><th>Default</th></tr></thead><tbody><tr class="odd"><td><a href="#line-styling"><code>backgroundColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#line-styling"><code>borderCapStyle</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'butt'</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>borderColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#line-styling"><code>borderDash</code></a></td><td><code>number[]</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>[]</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>borderDashOffset</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>0.0</code></td></tr><tr class="even"><td><a href="#line-styling"><code>borderJoinStyle</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>'miter'</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>borderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>3</code></td></tr><tr class="even"><td><a href="#line-styling"><code>hoverBackgroundColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>hoverBorderCapStyle</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#line-styling"><code>hoverBorderColor</code></a></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>hoverBorderDash</code></a></td><td><code>number[]</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#line-styling"><code>hoverBorderDashOffset</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#line-styling"><code>hoverBorderJoinStyle</code></a></td><td><code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#line-styling"><code>hoverBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#general"><code>clip</code></a></td><td><code>number</code>|<code>object</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#data-structure"><code>data</code></a></td><td><code>number[]</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><strong>required</strong></td></tr><tr class="odd"><td><a href="#line-styling"><code>fill</code></a></td><td><code>boolean</code>|<code>string</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">-</td><td><code>false</code></td></tr><tr class="even"><td><a href="#general"><code>label</code></a></td><td><code>string</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>''</code></td></tr><tr class="odd"><td><a href="#general"><code>order</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>0</code></td></tr><tr class="even"><td><a href="#line-styling"><code>tension</code></a></td><td><code>number</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#point-styling"><code>pointBackgroundColor</code></a></td><td><code>Color</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="even"><td><a href="#point-styling"><code>pointBorderColor</code></a></td><td><code>Color</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'rgba(0, 0, 0, 0.1)'</code></td></tr><tr class="odd"><td><a href="#point-styling"><code>pointBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>1</code></td></tr><tr class="even"><td><a href="#point-styling"><code>pointHitRadius</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>1</code></td></tr><tr class="odd"><td><a href="#interactions"><code>pointHoverBackgroundColor</code></a></td><td><code>Color</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="even"><td><a href="#interactions"><code>pointHoverBorderColor</code></a></td><td><code>Color</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>undefined</code></td></tr><tr class="odd"><td><a href="#interactions"><code>pointHoverBorderWidth</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>1</code></td></tr><tr class="even"><td><a href="#interactions"><code>pointHoverRadius</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>4</code></td></tr><tr class="odd"><td><a href="#point-styling"><code>pointRadius</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>3</code></td></tr><tr class="even"><td><a href="#point-styling"><code>pointRotation</code></a></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>0</code></td></tr><tr class="odd"><td><a href="#point-styling"><code>pointStyle</code></a></td><td><code>string</code>|<code>Image</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>'circle'</code></td></tr><tr class="even"><td><a href="#line-styling"><code>spanGaps</code></a></td><td><code>boolean</code></td><td style="text-align: center;">-</td><td style="text-align: center;">-</td><td><code>undefined</code></td></tr></tbody></table>

All these values, if `undefined`, fallback to the scopes described in [option resolution](../general/options)

### <a href="#general" class="header-anchor">#</a> General

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>clip</code></td><td>How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. <code>0</code> = clip at chartArea. Clipping can also be configured per side: <code>clip: {left: 5, top: false, right: -2, bottom: 0}</code></td></tr><tr class="even"><td><code>label</code></td><td>The label for the dataset which appears in the legend and tooltips.</td></tr><tr class="odd"><td><code>order</code></td><td>The drawing order of dataset.</td></tr></tbody></table>

### <a href="#point-styling" class="header-anchor">#</a> Point Styling

The style of each point can be controlled with the following properties:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>pointBackgroundColor</code></td><td>The fill color for points.</td></tr><tr class="even"><td><code>pointBorderColor</code></td><td>The border color for points.</td></tr><tr class="odd"><td><code>pointBorderWidth</code></td><td>The width of the point border in pixels.</td></tr><tr class="even"><td><code>pointHitRadius</code></td><td>The pixel size of the non-displayed point that reacts to mouse events.</td></tr><tr class="odd"><td><code>pointRadius</code></td><td>The radius of the point shape. If set to 0, the point is not rendered.</td></tr><tr class="even"><td><code>pointRotation</code></td><td>The rotation of the point in degrees.</td></tr><tr class="odd"><td><code>pointStyle</code></td><td>Style of the point. <a href="../configuration/elements#point-styles">more...</a></td></tr></tbody></table>

All these values, if `undefined`, fallback first to the dataset options then to the associated [`elements.point.*`](/docs/3.2.0/configuration/elements.html#point-configuration) options.

### <a href="#line-styling" class="header-anchor">#</a> Line Styling

The style of the line can be controlled with the following properties:

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backgroundColor</code></td><td>The line fill color.</td></tr><tr class="even"><td><code>borderCapStyle</code></td><td>Cap style of the line. See MDN<span class="sr-only">(opens new window)</span>.</td></tr><tr class="odd"><td><code>borderColor</code></td><td>The line color.</td></tr><tr class="even"><td><code>borderDash</code></td><td>Length and spacing of dashes. See MDN<span class="sr-only">(opens new window)</span>.</td></tr><tr class="odd"><td><code>borderDashOffset</code></td><td>Offset for line dashes. See MDN<span class="sr-only">(opens new window)</span>.</td></tr><tr class="even"><td><code>borderJoinStyle</code></td><td>Line joint style. See MDN<span class="sr-only">(opens new window)</span>.</td></tr><tr class="odd"><td><code>borderWidth</code></td><td>The line width (in pixels).</td></tr><tr class="even"><td><code>fill</code></td><td>How to fill the area under the line. See <a href="/docs/3.2.0/charts/area.html">area charts</a>.</td></tr><tr class="odd"><td><code>tension</code></td><td>Bezier curve tension of the line. Set to 0 to draw straight lines.</td></tr><tr class="even"><td><code>spanGaps</code></td><td>If true, lines will be drawn between points with no or null data. If false, points with <code>null</code> data will create a break in the line.</td></tr></tbody></table>

If the value is `undefined`, `spanGaps` fallback to the associated [chart configuration options](#configuration-options). The rest of the values fallback to the associated [`elements.line.*`](/docs/3.2.0/configuration/elements.html#line-configuration) options.

### <a href="#interactions" class="header-anchor">#</a> Interactions

The interaction with each point can be controlled with the following properties:

<table><thead><tr class="header"><th>Name</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>pointHoverBackgroundColor</code></td><td>Point background color when hovered.</td></tr><tr class="even"><td><code>pointHoverBorderColor</code></td><td>Point border color when hovered.</td></tr><tr class="odd"><td><code>pointHoverBorderWidth</code></td><td>Border width of point when hovered.</td></tr><tr class="even"><td><code>pointHoverRadius</code></td><td>The radius of the point when hovered.</td></tr></tbody></table>

<a href="#scale-options" class="header-anchor">#</a> Scale Options
------------------------------------------------------------------

The radar chart supports only a single scale. The options for this scale are defined in the `scale` property. The options for this scale are defined in the `scale` property, which can be referenced from the [Linear Radial Axis page](../axes/radial/linear).

    options = {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 50,
                suggestedMax: 100
            }
        }
    };

<a href="#default-options" class="header-anchor">#</a> Default Options
----------------------------------------------------------------------

It is common to want to apply a configuration setting to all created radar charts. The global radar chart settings are stored in `Chart.overrides.radar`. Changing the global options only affects charts created after the change. Existing charts are not changed.

<a href="#data-structure" class="header-anchor">#</a> Data Structure
--------------------------------------------------------------------

The `data` property of a dataset for a radar chart is specified as an array of numbers. Each point in the data array corresponds to the label at the same index.

    data: [20, 10]

For a radar chart, to provide context of what each point means, we include an array of strings that show around each point in the chart.

    data: {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [{
            data: [20, 10, 4, 2]
        }]
    }

<a href="#internal-data-format" class="header-anchor">#</a> Internal data format
--------------------------------------------------------------------------------

`{x, y}`

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/charts/bar.html" class="prev">Bar Chart</a> </span> <span class="next"> [Doughnut and Pie Charts](/docs/3.2.0/charts/doughnut.html) → </span>
