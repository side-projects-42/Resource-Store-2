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

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/axes/" class="sidebar-link">Axes</a>
    -   Cartesian <span class="arrow right"></span>

    -   Radial <span class="arrow down"></span>

        -   <a href="/docs/3.2.0/axes/radial/linear.html" class="active sidebar-link">Linear Radial Axis</a>

    -   <a href="/docs/3.2.0/axes/labelling.html" class="sidebar-link">Labeling Axes</a>
    -   <a href="/docs/3.2.0/axes/styling.html" class="sidebar-link">Styling</a>

-   Developers <span class="arrow right"></span>

<a href="#linear-radial-axis" class="header-anchor">#</a> Linear Radial Axis
============================================================================

The linear radial scale is used to chart numerical data. As the name suggests, linear interpolation is used to determine where a value lies in relation to the center of the axis.

The following additional configuration options are provided by the radial linear scale.

<a href="#configuration-options" class="header-anchor">#</a> Configuration Options
----------------------------------------------------------------------------------

### <a href="#linear-radial-axis-specific-options" class="header-anchor">#</a> Linear Radial Axis specific options

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>animate</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Whether to animate scaling the chart from the centre</td></tr><tr class="even"><td><code>angleLines</code></td><td><code>object</code></td><td></td><td>Angle line configuration. <a href="#angle-line-options">more...</a></td></tr><tr class="odd"><td><code>beginAtZero</code></td><td><code>boolean</code></td><td><code>false</code></td><td>if true, scale will include 0 if it is not already included.</td></tr><tr class="even"><td><code>pointLabels</code></td><td><code>object</code></td><td></td><td>Point label configuration. <a href="#point-label-options">more...</a></td></tr><tr class="odd"><td><code>startAngle</code></td><td><code>number</code></td><td><code>0</code></td><td>Starting angle of the scale. In degrees, 0 is at top.</td></tr></tbody></table>

### <a href="#common-options-to-all-axes" class="header-anchor">#</a> Common options to all axes

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>type</code></td><td><code>string</code></td><td></td><td>Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.</td></tr><tr class="even"><td><code>alignToPixels</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Align pixel values to device pixels.</td></tr><tr class="odd"><td><code>backgroundColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td></td><td>Background color of the scale area.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code>|<code>string</code></td><td><code>true</code></td><td>Controls the axis global visibility (visible when <code>true</code>, hidden when <code>false</code>). When <code>display: 'auto'</code>, the axis is visible only if at least one associated dataset is visible.</td></tr><tr class="odd"><td><code>grid</code></td><td><code>object</code></td><td></td><td>Grid line configuration. <a href="/docs/3.2.0/axes/styling.html#grid-line-configuration">more...</a></td></tr><tr class="even"><td><code>min</code></td><td><code>number</code></td><td></td><td>User defined minimum number for the scale, overrides minimum value from data. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="odd"><td><code>max</code></td><td><code>number</code></td><td></td><td>User defined maximum number for the scale, overrides maximum value from data. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="even"><td><code>reverse</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Reverse the scale.</td></tr><tr class="odd"><td><code>stacked</code></td><td><code>boolean</code>|<code>string</code></td><td><code>false</code></td><td>Should the data be stacked. <a href="/docs/3.2.0/axes/#stacking">more...</a></td></tr><tr class="even"><td><code>suggestedMax</code></td><td><code>number</code></td><td></td><td>Adjustment used when calculating the maximum data value. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="odd"><td><code>suggestedMin</code></td><td><code>number</code></td><td></td><td>Adjustment used when calculating the minimum data value. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="even"><td><code>ticks</code></td><td><code>object</code></td><td></td><td>Tick configuration. <a href="/docs/3.2.0/axes/#tick-configuration">more...</a></td></tr><tr class="odd"><td><code>weight</code></td><td><code>number</code></td><td><code>0</code></td><td>The weight used to sort the axis. Higher weights are further away from the chart area.</td></tr></tbody></table>

<a href="#tick-configuration" class="header-anchor">#</a> Tick Configuration
----------------------------------------------------------------------------

### <a href="#linear-radial-axis-specific-tick-options" class="header-anchor">#</a> Linear Radial Axis specific tick options

Namespace: `options.scales[scaleId].ticks`

<table><colgroup><col style="width: 20%" /><col style="width: 20%" /><col style="width: 20%" /><col style="width: 20%" /><col style="width: 20%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Scriptable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>count</code></td><td><code>number</code></td><td>Yes</td><td><code>undefined</code></td><td>The number of ticks to generate. If specified, this overrides the automatic generation.</td></tr><tr class="even"><td><code>format</code></td><td><code>object</code></td><td>Yes</td><td></td><td>The <code>Intl.NumberFormat</code><span class="sr-only">(opens new window)</span> options used by the default label formatter</td></tr><tr class="odd"><td><code>maxTicksLimit</code></td><td><code>number</code></td><td>Yes</td><td><code>11</code></td><td>Maximum number of ticks and gridlines to show.</td></tr><tr class="even"><td><code>precision</code></td><td><code>number</code></td><td>Yes</td><td></td><td>if defined and <code>stepSize</code> is not specified, the step size will be rounded to this many decimal places.</td></tr><tr class="odd"><td><code>stepSize</code></td><td><code>number</code></td><td>Yes</td><td></td><td>User defined fixed step size for the scale. <a href="#step-size">more...</a></td></tr></tbody></table>

### <a href="#common-tick-options-to-all-axes" class="header-anchor">#</a> Common tick options to all axes

Namespace: `options.scales[scaleId].ticks`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;">Scriptable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backdropColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td><code>'rgba(255, 255, 255, 0.75)'</code></td><td>Color of label backdrops.</td></tr><tr class="even"><td><code>backdropPadding</code></td><td><a href="/docs/3.2.0/general/padding.html"><code>Padding</code></a></td><td style="text-align: center;">Yes</td><td><code>2</code></td><td>Padding of label backdrop.</td></tr><tr class="odd"><td><code>callback</code></td><td><code>function</code></td><td style="text-align: center;"></td><td></td><td>Returns the string representation of the tick value as it should be displayed on the chart. See <a href="/docs/3.2.0/axes/labelling.html#creating-custom-tick-formats">callback</a>.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code></td><td style="text-align: center;"></td><td><code>true</code></td><td>If true, show tick labels.</td></tr><tr class="odd"><td><code>color</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td><code>Chart.defaults.color</code></td><td>Color of ticks.</td></tr><tr class="even"><td><code>font</code></td><td><code>Font</code></td><td style="text-align: center;">Yes</td><td><code>Chart.defaults.font</code></td><td>See <a href="/docs/3.2.0/general/fonts.html">Fonts</a></td></tr><tr class="odd"><td><code>major</code></td><td><code>object</code></td><td style="text-align: center;"></td><td><code>{}</code></td><td><a href="/docs/3.2.0/axes/styling.html#major-tick-configuration">Major ticks configuration</a>.</td></tr><tr class="even"><td><code>padding</code></td><td><code>number</code></td><td style="text-align: center;"></td><td><code>3</code></td><td>Sets the offset of the tick labels from the axis</td></tr><tr class="odd"><td><code>showLabelBackdrop</code></td><td><code>boolean</code></td><td style="text-align: center;">Yes</td><td><code>true</code> for radial scale, <code>false</code> otherwise</td><td>If true, draw a background behind the tick labels.</td></tr><tr class="even"><td><code>textStrokeColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td>``</td><td>The color of the stroke around the text.</td></tr><tr class="odd"><td><code>textStrokeWidth</code></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td><code>0</code></td><td>Stroke width around the text.</td></tr><tr class="even"><td><code>z</code></td><td><code>number</code></td><td style="text-align: center;"></td><td><code>0</code></td><td>z-index of tick layer. Useful when ticks are drawn on chart area. Values &lt;= 0 are drawn under datasets, &gt; 0 on top.</td></tr></tbody></table>

The scriptable context is described in [Options](/docs/3.2.0/general/options.html#tick) section.

<a href="#axis-range-settings" class="header-anchor">#</a> Axis Range Settings
------------------------------------------------------------------------------

Given the number of axis range settings, it is important to understand how they all interact with each other.

The `suggestedMax` and `suggestedMin` settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behaviour.

    let minDataValue = Math.min(mostNegativeValue, options.ticks.suggestedMin);
    let maxDataValue = Math.max(mostPositiveValue, options.ticks.suggestedMax);

In this example, the largest positive value is 50, but the data maximum is expanded out to 100. However, because the lowest data value is below the `suggestedMin` setting, it is ignored.

    let chart = new Chart(ctx, {
        type: 'radar',
        data: {
            datasets: [{
                label: 'First dataset',
                data: [0, 20, 40, 50]
            }],
            labels: ['January', 'February', 'March', 'April']
        },
        options: {
            scales: {
                r: {
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }
        }
    });

In contrast to the `suggested*` settings, the `min` and `max` settings set explicit ends to the axes. When these are set, some data points may not be visible.

<a href="#step-size" class="header-anchor">#</a> Step Size
----------------------------------------------------------

If set, the scale ticks will be enumerated by multiple of `stepSize`, having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm.

This example sets up a chart with a y axis that creates ticks at `0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5`.

    let options = {
        scales: {
            r: {
                max: 5,
                min: 0,
                ticks: {
                    stepSize: 0.5
                }
            }
        }
    };

<a href="#angle-line-options" class="header-anchor">#</a> Angle Line Options
----------------------------------------------------------------------------

The following options are used to configure angled lines that radiate from the center of the chart to the point labels. Namespace: `options.scales[scaleId].angleLines`

<table><colgroup><col style="width: 20%" /><col style="width: 20%" /><col style="width: 20%" /><col style="width: 20%" /><col style="width: 20%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Scriptable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>display</code></td><td><code>boolean</code></td><td></td><td><code>true</code></td><td>if true, angle lines are shown.</td></tr><tr class="even"><td><code>color</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td>Yes</td><td><code>Chart.defaults.borderColor</code></td><td>Color of angled lines.</td></tr><tr class="odd"><td><code>lineWidth</code></td><td><code>number</code></td><td>Yes</td><td><code>1</code></td><td>Width of angled lines.</td></tr><tr class="even"><td><code>borderDash</code></td><td><code>number[]</code></td><td>Yes<sup>1</sup></td><td><code>[]</code></td><td>Length and spacing of dashes on angled lines. See MDN<span class="sr-only">(opens new window)</span>.</td></tr><tr class="odd"><td><code>borderDashOffset</code></td><td><code>number</code></td><td>Yes</td><td><code>0.0</code></td><td>Offset for line dashes. See MDN<span class="sr-only">(opens new window)</span>.</td></tr></tbody></table>

1.  the `borderDash` setting only accepts a static value or a function. Passing an array of arrays is not supported.

The scriptable context is described in [Options](/docs/3.2.0/general/options.html#scale) section.

<a href="#point-label-options" class="header-anchor">#</a> Point Label Options
------------------------------------------------------------------------------

The following options are used to configure the point labels that are shown on the perimeter of the scale. Namespace: `options.scales[scaleId].pointLabels`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Scriptable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backdropColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td><code>true</code></td><td><code>undefined</code></td><td>Background color of the point label.</td></tr><tr class="even"><td><code>backdropPadding</code></td><td><a href="/docs/3.2.0/general/padding.html"><code>Padding</code></a></td><td></td><td><code>2</code></td><td>Padding of label backdrop.</td></tr><tr class="odd"><td><code>display</code></td><td><code>boolean</code></td><td></td><td><code>true</code></td><td>if true, point labels are shown.</td></tr><tr class="even"><td><code>callback</code></td><td><code>function</code></td><td></td><td></td><td>Callback function to transform data labels to point labels. The default implementation simply returns the current string.</td></tr><tr class="odd"><td><code>color</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td>Yes</td><td><code>Chart.defaults.color</code></td><td>Color of label.</td></tr><tr class="even"><td><code>font</code></td><td><code>Font</code></td><td>Yes</td><td><code>Chart.defaults.font</code></td><td>See <a href="/docs/3.2.0/axes/radial/general/fonts.html">Fonts</a></td></tr><tr class="odd"><td><code>padding</code></td><td><code>number</code></td><td>Yes</td><td>5</td><td>Padding between chart and point labels.</td></tr></tbody></table>

The scriptable context is described in [Options](/docs/3.2.0/general/options.html#scale) section.

<a href="#internal-data-format" class="header-anchor">#</a> Internal data format
--------------------------------------------------------------------------------

Internally, the linear radial scale uses numeric data

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/axes/cartesian/timeseries.html" class="prev">Time Series Axis</a> </span> <span class="next"> [Labeling Axes](/docs/3.2.0/axes/labelling.html) → </span>
