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

-   Configuration <span class="arrow right"></span>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/axes/" class="sidebar-link">Axes</a>
    -   Cartesian <span class="arrow down"></span>

        -   <a href="/docs/3.0.0/axes/cartesian/" class="sidebar-link">Cartesian Axes</a>
        -   <a href="/docs/3.0.0/axes/cartesian/category.html" class="sidebar-link">Category Axis</a>
        -   <a href="/docs/3.0.0/axes/cartesian/linear.html" class="active sidebar-link">Linear Axis</a>
        -   <a href="/docs/3.0.0/axes/cartesian/logarithmic.html" class="sidebar-link">Logarithmic Axis</a>
        -   <a href="/docs/3.0.0/axes/cartesian/time.html" class="sidebar-link">Time Cartesian Axis</a>
        -   <a href="/docs/3.0.0/axes/cartesian/timeseries.html" class="sidebar-link">Time Series Axis</a>

    -   Radial <span class="arrow right"></span>

    -   <a href="/docs/3.0.0/axes/labelling.html" class="sidebar-link">Labeling Axes</a>
    -   <a href="/docs/3.0.0/axes/styling.html" class="sidebar-link">Styling</a>

-   Developers <span class="arrow right"></span>

<a href="#linear-axis" class="header-anchor">#</a> Linear Axis
==============================================================

The linear scale is used to chart numerical data. It can be placed on either the x or y-axis. The scatter chart type automatically configures a line chart to use one of these scales for the x-axis. As the name suggests, linear interpolation is used to determine where a value lies on the axis.

<a href="#configuration-options" class="header-anchor">#</a> Configuration Options
----------------------------------------------------------------------------------

### <a href="#linear-axis-specific-options" class="header-anchor">#</a> Linear Axis specific options

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>beginAtZero</code></td><td><code>boolean</code></td><td>if true, scale will include 0 if it is not already included.</td></tr><tr class="even"><td><code>grace</code></td><td><code>number</code>|<code>string</code></td><td>Percentage (string ending with <code>%</code>) or amount (number) for added room in the scale range above and below data. <a href="#grace">more...</a></td></tr></tbody></table>

### <a href="#common-options-to-all-cartesian-axes" class="header-anchor">#</a> Common options to all cartesian axes

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>bounds</code></td><td><code>string</code></td><td><code>'ticks'</code></td><td>Determines the scale bounds. <a href="/docs/3.0.0/axes/cartesian/#scale-bounds">more...</a></td></tr><tr class="even"><td><code>position</code></td><td><code>string</code></td><td></td><td>Position of the axis. <a href="/docs/3.0.0/axes/cartesian/#axis-position">more...</a></td></tr><tr class="odd"><td><code>axis</code></td><td><code>string</code></td><td></td><td>Which type of axis this is. Possible values are: <code>'x'</code>, <code>'y'</code>. If not set, this is inferred from the first character of the ID which should be <code>'x'</code> or <code>'y'</code>.</td></tr><tr class="even"><td><code>offset</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to <code>true</code> for a bar chart by default.</td></tr><tr class="odd"><td><code>title</code></td><td><code>object</code></td><td></td><td>Scale title configuration. <a href="/docs/3.0.0/axes/labelling.html#scale-title-configuration">more...</a></td></tr></tbody></table>

### <a href="#common-options-to-all-axes" class="header-anchor">#</a> Common options to all axes

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>type</code></td><td><code>string</code></td><td></td><td>Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.</td></tr><tr class="even"><td><code>alignToPixels</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Align pixel values to device pixels.</td></tr><tr class="odd"><td><code>backgroundColor</code></td><td><a href="/docs/3.0.0/axes/general/colors.html"><code>Color</code></a></td><td></td><td>Background color of the scale area.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code>|<code>string</code></td><td><code>true</code></td><td>Controls the axis global visibility (visible when <code>true</code>, hidden when <code>false</code>). When <code>display: 'auto'</code>, the axis is visible only if at least one associated dataset is visible.</td></tr><tr class="odd"><td><code>grid</code></td><td><code>object</code></td><td></td><td>Grid line configuration. <a href="/docs/3.0.0/axes/cartesian/styling.html#grid-line-configuration">more...</a></td></tr><tr class="even"><td><code>min</code></td><td><code>number</code></td><td></td><td>User defined minimum number for the scale, overrides minimum value from data. <a href="/docs/3.0.0/axes/cartesian/#axis-range-settings">more...</a></td></tr><tr class="odd"><td><code>max</code></td><td><code>number</code></td><td></td><td>User defined maximum number for the scale, overrides maximum value from data. <a href="/docs/3.0.0/axes/cartesian/#axis-range-settings">more...</a></td></tr><tr class="even"><td><code>reverse</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Reverse the scale.</td></tr><tr class="odd"><td><code>stacked</code></td><td><code>boolean</code>|<code>string</code></td><td><code>false</code></td><td>Should the data be stacked. <a href="/docs/3.0.0/axes/cartesian/#stacking">more...</a></td></tr><tr class="even"><td><code>suggestedMax</code></td><td><code>number</code></td><td></td><td>Adjustment used when calculating the maximum data value. <a href="/docs/3.0.0/axes/cartesian/#axis-range-settings">more...</a></td></tr><tr class="odd"><td><code>suggestedMin</code></td><td><code>number</code></td><td></td><td>Adjustment used when calculating the minimum data value. <a href="/docs/3.0.0/axes/cartesian/#axis-range-settings">more...</a></td></tr><tr class="even"><td><code>ticks</code></td><td><code>object</code></td><td></td><td>Tick configuration. <a href="#tick-configuration">more...</a></td></tr><tr class="odd"><td><code>weight</code></td><td><code>number</code></td><td><code>0</code></td><td>The weight used to sort the axis. Higher weights are further away from the chart area.</td></tr></tbody></table>

<a href="#tick-configuration" class="header-anchor">#</a> Tick Configuration
----------------------------------------------------------------------------

### <a href="#linear-axis-specific-tick-options" class="header-anchor">#</a> Linear Axis specific tick options

Namespace: `options.scales[scaleId].ticks`

<table><colgroup><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>count</code></td><td><code>number</code></td><td><code>undefined</code></td><td>The number of ticks to generate. If specified, this overrides the automatic generation.</td></tr><tr class="even"><td><code>format</code></td><td><code>object</code></td><td></td><td>The <code>Intl.NumberFormat</code><span class="sr-only">(opens new window)</span> options used by the default label formatter</td></tr><tr class="odd"><td><code>maxTicksLimit</code></td><td><code>number</code></td><td><code>11</code></td><td>Maximum number of ticks and gridlines to show.</td></tr><tr class="even"><td><code>precision</code></td><td><code>number</code></td><td></td><td>if defined and <code>stepSize</code> is not specified, the step size will be rounded to this many decimal places.</td></tr><tr class="odd"><td><code>stepSize</code></td><td><code>number</code></td><td></td><td>User-defined fixed step size for the scale. <a href="#step-size">more...</a></td></tr></tbody></table>

### <a href="#common-tick-options-to-all-cartesian-axes" class="header-anchor">#</a> Common tick options to all cartesian axes

Namespace: `options.scales[scaleId].ticks`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>align</code></td><td><code>string</code></td><td><code>'center'</code></td><td>The tick alignment along the axis. Can be <code>'start'</code>, <code>'center'</code>, or <code>'end'</code>.</td></tr><tr class="even"><td><code>crossAlign</code></td><td><code>string</code></td><td><code>'near'</code></td><td>The tick alignment perpendicular to the axis. Can be <code>'near'</code>, <code>'center'</code>, or <code>'far'</code>. See <a href="./index#tick-alignment">Tick Alignment</a></td></tr><tr class="odd"><td><code>sampleSize</code></td><td><code>number</code></td><td><code>ticks.length</code></td><td>The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.</td></tr><tr class="even"><td><code>autoSkip</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to <code>maxRotation</code> before skipping any. Turn <code>autoSkip</code> off to show all labels no matter what.</td></tr><tr class="odd"><td><code>autoSkipPadding</code></td><td><code>number</code></td><td><code>3</code></td><td>Padding between the ticks on the horizontal axis when <code>autoSkip</code> is enabled.</td></tr><tr class="even"><td><code>labelOffset</code></td><td><code>number</code></td><td><code>0</code></td><td>Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis). <em>Note: this can cause labels at the edges to be cropped by the edge of the canvas</em></td></tr><tr class="odd"><td><code>maxRotation</code></td><td><code>number</code></td><td><code>50</code></td><td>Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. <em>Note: Only applicable to horizontal scales.</em></td></tr><tr class="even"><td><code>minRotation</code></td><td><code>number</code></td><td><code>0</code></td><td>Minimum rotation for tick labels. <em>Note: Only applicable to horizontal scales.</em></td></tr><tr class="odd"><td><code>mirror</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Flips tick labels around axis, displaying the labels inside the chart instead of outside. <em>Note: Only applicable to vertical scales.</em></td></tr><tr class="even"><td><code>padding</code></td><td><code>number</code></td><td><code>0</code></td><td>Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.</td></tr></tbody></table>

### <a href="#common-tick-options-to-all-axes" class="header-anchor">#</a> Common tick options to all axes

Namespace: `options.scales[scaleId].ticks`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;">Scriptable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>callback</code></td><td><code>function</code></td><td style="text-align: center;"></td><td></td><td>Returns the string representation of the tick value as it should be displayed on the chart. See <a href="/docs/3.0.0/axes/axes/labelling.html#creating-custom-tick-formats">callback</a>.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code></td><td style="text-align: center;"></td><td><code>true</code></td><td>If true, show tick labels.</td></tr><tr class="odd"><td><code>color</code></td><td><a href="/docs/3.0.0/axes/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td><code>Chart.defaults.color</code></td><td>Color of ticks.</td></tr><tr class="even"><td><code>font</code></td><td><code>Font</code></td><td style="text-align: center;">Yes</td><td><code>Chart.defaults.font</code></td><td>See <a href="/docs/3.0.0/axes/general/fonts.html">Fonts</a></td></tr><tr class="odd"><td><code>major</code></td><td><code>object</code></td><td style="text-align: center;"></td><td><code>{}</code></td><td><a href="/docs/3.0.0/axes/cartesian/styling.html#major-tick-configuration">Major ticks configuration</a>.</td></tr><tr class="even"><td><code>padding</code></td><td><code>number</code></td><td style="text-align: center;"></td><td><code>3</code></td><td>Sets the offset of the tick labels from the axis</td></tr><tr class="odd"><td><code>textStrokeColor</code></td><td><a href="/docs/3.0.0/axes/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td>``</td><td>The color of the stroke around the text.</td></tr><tr class="even"><td><code>textStrokeWidth</code></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td><code>0</code></td><td>Stroke width around the text.</td></tr><tr class="odd"><td><code>z</code></td><td><code>number</code></td><td style="text-align: center;"></td><td><code>0</code></td><td>z-index of tick layer. Useful when ticks are drawn on chart area. Values &lt;= 0 are drawn under datasets, &gt; 0 on top.</td></tr></tbody></table>

<a href="#step-size" class="header-anchor">#</a> Step Size
----------------------------------------------------------

If set, the scale ticks will be enumerated by multiple of `stepSize`, having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm.

This example sets up a chart with a y axis that creates ticks at `0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5`.

    let options = {
        scales: {
            y: {
                max: 5,
                min: 0,
                ticks: {
                    stepSize: 0.5
                }
            }
        }
    };

<a href="#grace" class="header-anchor">#</a> Grace
--------------------------------------------------

If the value is string ending with `%`, its treat as percentage. If number, its treat as value. The value is added to the maximum data value and subtracted from the minimum data. This extends the scale range as if the data values were that much greater.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/axes/cartesian/linear.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'bar', data, options: { scales: { y: { type: 'linear', grace: '5%' } }, plugins: { legend: false } } };

    const config = {
      type: 'bar',
      data,
      options: {
        scales: {
          y: {
            type: 'linear',
            grace: '5%'
          }
        },
        plugins: {
          legend: false
        }
      }
    };

const labels = Utils.months({count: 7}); const data = { labels: \['Positive', 'Negative'\], datasets: \[{ data: \[100, -50\], backgroundColor: 'rgb(255, 99, 132)' }\], };

    const labels = Utils.months({count: 7});
    const data = {
      labels: ['Positive', 'Negative'],
      datasets: [{
        data: [100, -50],
        backgroundColor: 'rgb(255, 99, 132)'
      }],
    };

<a href="#internal-data-format" class="header-anchor">#</a> Internal data format
--------------------------------------------------------------------------------

Internally, the linear scale uses numeric data

<span class="prefix">Last Updated:</span> <span class="time">3/30/2021, 10:32:39 AM</span>

<span class="prev"> ??? <a href="/docs/3.0.0/axes/cartesian/category.html" class="prev">Category Axis</a> </span> <span class="next"> [Logarithmic Axis](/docs/3.0.0/axes/cartesian/logarithmic.html) ??? </span>
