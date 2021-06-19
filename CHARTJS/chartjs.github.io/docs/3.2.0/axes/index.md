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

    -   <a href="/docs/3.2.0/axes/" class="active sidebar-link">Axes</a>
    -   Cartesian <span class="arrow right"></span>

    -   Radial <span class="arrow right"></span>

    -   <a href="/docs/3.2.0/axes/labelling.html" class="sidebar-link">Labeling Axes</a>
    -   <a href="/docs/3.2.0/axes/styling.html" class="sidebar-link">Styling</a>

-   Developers <span class="arrow right"></span>

<a href="#axes" class="header-anchor">#</a> Axes
================================================

Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X-axis and 1 or more Y-axis to map points onto the 2-dimensional canvas. These axes are known as ['cartesian axes'](/docs/3.2.0/axes/cartesian/).

In a radial chart, such as a radar chart or a polar area chart, there is a single axis that maps points in the angular and radial directions. These are known as ['radial axes'](/docs/3.2.0/axes/radial/).

Scales in Chart.js &gt;v2.0 are significantly more powerful, but also different than those of v1.0.

-   Multiple X & Y axes are supported.
-   A built-in label auto-skip feature detects would-be overlapping ticks and labels and removes every nth label to keep things displaying normally.
-   Scale titles are supported.
-   New scale types can be extended without writing an entirely new chart type.

<a href="#common-configuration" class="header-anchor">#</a> Common Configuration
--------------------------------------------------------------------------------

### <a href="#common-options-to-all-axes" class="header-anchor">#</a> Common options to all axes

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>type</code></td><td><code>string</code></td><td></td><td>Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.</td></tr><tr class="even"><td><code>alignToPixels</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Align pixel values to device pixels.</td></tr><tr class="odd"><td><code>backgroundColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td></td><td>Background color of the scale area.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code>|<code>string</code></td><td><code>true</code></td><td>Controls the axis global visibility (visible when <code>true</code>, hidden when <code>false</code>). When <code>display: 'auto'</code>, the axis is visible only if at least one associated dataset is visible.</td></tr><tr class="odd"><td><code>grid</code></td><td><code>object</code></td><td></td><td>Grid line configuration. <a href="/docs/3.2.0/axes/styling.html#grid-line-configuration">more...</a></td></tr><tr class="even"><td><code>min</code></td><td><code>number</code></td><td></td><td>User defined minimum number for the scale, overrides minimum value from data. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="odd"><td><code>max</code></td><td><code>number</code></td><td></td><td>User defined maximum number for the scale, overrides maximum value from data. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="even"><td><code>reverse</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Reverse the scale.</td></tr><tr class="odd"><td><code>stacked</code></td><td><code>boolean</code>|<code>string</code></td><td><code>false</code></td><td>Should the data be stacked. <a href="/docs/3.2.0/axes/#stacking">more...</a></td></tr><tr class="even"><td><code>suggestedMax</code></td><td><code>number</code></td><td></td><td>Adjustment used when calculating the maximum data value. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="odd"><td><code>suggestedMin</code></td><td><code>number</code></td><td></td><td>Adjustment used when calculating the minimum data value. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="even"><td><code>ticks</code></td><td><code>object</code></td><td></td><td>Tick configuration. <a href="/docs/3.2.0/axes/#tick-configuration">more...</a></td></tr><tr class="odd"><td><code>weight</code></td><td><code>number</code></td><td><code>0</code></td><td>The weight used to sort the axis. Higher weights are further away from the chart area.</td></tr></tbody></table>

<a href="#tick-configuration" class="header-anchor">#</a> Tick Configuration
----------------------------------------------------------------------------

### <a href="#common-tick-options-to-all-axes" class="header-anchor">#</a> Common tick options to all axes

Namespace: `options.scales[scaleId].ticks`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;">Scriptable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backdropColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td><code>'rgba(255, 255, 255, 0.75)'</code></td><td>Color of label backdrops.</td></tr><tr class="even"><td><code>backdropPadding</code></td><td><a href="/docs/3.2.0/general/padding.html"><code>Padding</code></a></td><td style="text-align: center;">Yes</td><td><code>2</code></td><td>Padding of label backdrop.</td></tr><tr class="odd"><td><code>callback</code></td><td><code>function</code></td><td style="text-align: center;"></td><td></td><td>Returns the string representation of the tick value as it should be displayed on the chart. See <a href="/docs/3.2.0/axes/labelling.html#creating-custom-tick-formats">callback</a>.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code></td><td style="text-align: center;"></td><td><code>true</code></td><td>If true, show tick labels.</td></tr><tr class="odd"><td><code>color</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td><code>Chart.defaults.color</code></td><td>Color of ticks.</td></tr><tr class="even"><td><code>font</code></td><td><code>Font</code></td><td style="text-align: center;">Yes</td><td><code>Chart.defaults.font</code></td><td>See <a href="/docs/3.2.0/general/fonts.html">Fonts</a></td></tr><tr class="odd"><td><code>major</code></td><td><code>object</code></td><td style="text-align: center;"></td><td><code>{}</code></td><td><a href="/docs/3.2.0/axes/styling.html#major-tick-configuration">Major ticks configuration</a>.</td></tr><tr class="even"><td><code>padding</code></td><td><code>number</code></td><td style="text-align: center;"></td><td><code>3</code></td><td>Sets the offset of the tick labels from the axis</td></tr><tr class="odd"><td><code>showLabelBackdrop</code></td><td><code>boolean</code></td><td style="text-align: center;">Yes</td><td><code>true</code> for radial scale, <code>false</code> otherwise</td><td>If true, draw a background behind the tick labels.</td></tr><tr class="even"><td><code>textStrokeColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td>``</td><td>The color of the stroke around the text.</td></tr><tr class="odd"><td><code>textStrokeWidth</code></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td><code>0</code></td><td>Stroke width around the text.</td></tr><tr class="even"><td><code>z</code></td><td><code>number</code></td><td style="text-align: center;"></td><td><code>0</code></td><td>z-index of tick layer. Useful when ticks are drawn on chart area. Values &lt;= 0 are drawn under datasets, &gt; 0 on top.</td></tr></tbody></table>

<a href="#axis-range-settings" class="header-anchor">#</a> Axis Range Settings
------------------------------------------------------------------------------

Given the number of axis range settings, it is important to understand how they all interact with each other.

The `suggestedMax` and `suggestedMin` settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behaviour.

    let minDataValue = Math.min(mostNegativeValue, options.suggestedMin);
    let maxDataValue = Math.max(mostPositiveValue, options.suggestedMax);

In this example, the largest positive value is 50, but the data maximum is expanded out to 100. However, because the lowest data value is below the `suggestedMin` setting, it is ignored.

    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'First dataset',
                data: [0, 20, 40, 50]
            }],
            labels: ['January', 'February', 'March', 'April']
        },
        options: {
            scales: {
                y: {
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }
        }
    });

In contrast to the `suggested*` settings, the `min` and `max` settings set explicit ends to the axes. When these are set, some data points may not be visible.

<a href="#stacking" class="header-anchor">#</a> Stacking
--------------------------------------------------------

By default data is not stacked. If the `stacked` option of the value scale (y-axis on horizontal chart) is `true`, positive and negative values are stacked separately. Additionally a `stack` option can be defined per dataset to further divide into stack groups [more...](/docs/3.2.0/general/data-structures/#dataset-configuration). For some charts, you might want to stack positive and negative values together. That can be achieved by specifying `stacked: 'single'`.

<a href="#callbacks" class="header-anchor">#</a> Callbacks
----------------------------------------------------------

There are a number of config callbacks that can be used to change parameters in the scale at different points in the update process. The options are supplied at the top level of the axis options.

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>beforeUpdate</code></td><td><code>axis</code></td><td>Callback called before the update process starts.</td></tr><tr class="even"><td><code>beforeSetDimensions</code></td><td><code>axis</code></td><td>Callback that runs before dimensions are set.</td></tr><tr class="odd"><td><code>afterSetDimensions</code></td><td><code>axis</code></td><td>Callback that runs after dimensions are set.</td></tr><tr class="even"><td><code>beforeDataLimits</code></td><td><code>axis</code></td><td>Callback that runs before data limits are determined.</td></tr><tr class="odd"><td><code>afterDataLimits</code></td><td><code>axis</code></td><td>Callback that runs after data limits are determined.</td></tr><tr class="even"><td><code>beforeBuildTicks</code></td><td><code>axis</code></td><td>Callback that runs before ticks are created.</td></tr><tr class="odd"><td><code>afterBuildTicks</code></td><td><code>axis</code></td><td>Callback that runs after ticks are created. Useful for filtering ticks.</td></tr><tr class="even"><td><code>beforeTickToLabelConversion</code></td><td><code>axis</code></td><td>Callback that runs before ticks are converted into strings.</td></tr><tr class="odd"><td><code>afterTickToLabelConversion</code></td><td><code>axis</code></td><td>Callback that runs after ticks are converted into strings.</td></tr><tr class="even"><td><code>beforeCalculateTickRotation</code></td><td><code>axis</code></td><td>Callback that runs before tick rotation is determined.</td></tr><tr class="odd"><td><code>afterCalculateTickRotation</code></td><td><code>axis</code></td><td>Callback that runs after tick rotation is determined.</td></tr><tr class="even"><td><code>beforeFit</code></td><td><code>axis</code></td><td>Callback that runs before the scale fits to the canvas.</td></tr><tr class="odd"><td><code>afterFit</code></td><td><code>axis</code></td><td>Callback that runs after the scale fits to the canvas.</td></tr><tr class="even"><td><code>afterUpdate</code></td><td><code>axis</code></td><td>Callback that runs at the end of the update process.</td></tr></tbody></table>

### <a href="#updating-axis-defaults" class="header-anchor">#</a> Updating Axis Defaults

The default configuration for a scale can be easily changed. All you need to do is set the new options to `Chart.defaults.scales[type]`.

For example, to set the minimum value of 0 for all linear scales, you would do the following. Any linear scales created after this time would now have a minimum of 0.

    Chart.defaults.scales.linear.min = 0;

<a href="#creating-new-axes" class="header-anchor">#</a> Creating New Axes
--------------------------------------------------------------------------

To create a new axis, see the [developer docs](/docs/3.2.0/developers/axes.html).

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/charts/mixed.html" class="prev">Mixed Chart Types</a> </span> <span class="next"> [Cartesian Axes](/docs/3.2.0/axes/cartesian/) → </span>
