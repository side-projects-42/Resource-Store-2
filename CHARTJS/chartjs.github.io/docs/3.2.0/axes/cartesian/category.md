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
    -   Cartesian <span class="arrow down"></span>

        -   <a href="/docs/3.2.0/axes/cartesian/" class="sidebar-link">Cartesian Axes</a>
        -   <a href="/docs/3.2.0/axes/cartesian/category.html" class="active sidebar-link">Category Axis</a>
        -   <a href="/docs/3.2.0/axes/cartesian/linear.html" class="sidebar-link">Linear Axis</a>
        -   <a href="/docs/3.2.0/axes/cartesian/logarithmic.html" class="sidebar-link">Logarithmic Axis</a>
        -   <a href="/docs/3.2.0/axes/cartesian/time.html" class="sidebar-link">Time Cartesian Axis</a>
        -   <a href="/docs/3.2.0/axes/cartesian/timeseries.html" class="sidebar-link">Time Series Axis</a>

    -   Radial <span class="arrow right"></span>

    -   <a href="/docs/3.2.0/axes/labelling.html" class="sidebar-link">Labeling Axes</a>
    -   <a href="/docs/3.2.0/axes/styling.html" class="sidebar-link">Styling</a>

-   Developers <span class="arrow right"></span>

<a href="#category-axis" class="header-anchor">#</a> Category Axis
==================================================================

If the global configuration is used, labels are drawn from one of the label arrays included in the chart data. If only `data.labels` is defined, this will be used. If `data.xLabels` is defined and the axis is horizontal, this will be used. Similarly, if `data.yLabels` is defined and the axis is vertical, this property will be used. Using both `xLabels` and `yLabels` together can create a chart that uses strings for both the X and Y axes.

Specifying any of the settings above defines the x-axis as `type: 'category'` if not defined otherwise. For more fine-grained control of category labels, it is also possible to add `labels` as part of the category axis definition. Doing so does not apply the global defaults.

<a href="#category-axis-definition" class="header-anchor">#</a> Category Axis Definition
----------------------------------------------------------------------------------------

Globally:

    let chart = new Chart(ctx, {
        type: ...
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: ...
        }
    });

As part of axis definition:

    let chart = new Chart(ctx, {
        type: ...
        data: ...
        options: {
            scales: {
                x: {
                    type: 'category',
                    labels: ['January', 'February', 'March', 'April', 'May', 'June']
                }
            }
        }
    });

<a href="#configuration-options" class="header-anchor">#</a> Configuration Options
----------------------------------------------------------------------------------

### <a href="#category-axis-specific-options" class="header-anchor">#</a> Category Axis specific options

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>min</code></td><td><code>string</code>|<code>number</code></td><td>The minimum item to display. <a href="#min-max-configuration">more...</a></td></tr><tr class="even"><td><code>max</code></td><td><code>string</code>|<code>number</code></td><td>The maximum item to display. <a href="#min-max-configuration">more...</a></td></tr><tr class="odd"><td><code>labels</code></td><td><code>string[]</code>|<code>string[][]</code></td><td>An array of labels to display. When an individual label is an array of strings, each item is rendered on a new line.</td></tr></tbody></table>

### <a href="#common-options-to-all-cartesian-axes" class="header-anchor">#</a> Common options to all cartesian axes

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>bounds</code></td><td><code>string</code></td><td><code>'ticks'</code></td><td>Determines the scale bounds. <a href="/docs/3.2.0/axes/cartesian/#scale-bounds">more...</a></td></tr><tr class="even"><td><code>position</code></td><td><code>string</code></td><td></td><td>Position of the axis. <a href="/docs/3.2.0/axes/cartesian/#axis-position">more...</a></td></tr><tr class="odd"><td><code>axis</code></td><td><code>string</code></td><td></td><td>Which type of axis this is. Possible values are: <code>'x'</code>, <code>'y'</code>. If not set, this is inferred from the first character of the ID which should be <code>'x'</code> or <code>'y'</code>.</td></tr><tr class="even"><td><code>offset</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to <code>true</code> for a bar chart by default.</td></tr><tr class="odd"><td><code>title</code></td><td><code>object</code></td><td></td><td>Scale title configuration. <a href="/docs/3.2.0/axes/labelling.html#scale-title-configuration">more...</a></td></tr></tbody></table>

### <a href="#common-options-to-all-axes" class="header-anchor">#</a> Common options to all axes

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>type</code></td><td><code>string</code></td><td></td><td>Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.</td></tr><tr class="even"><td><code>alignToPixels</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Align pixel values to device pixels.</td></tr><tr class="odd"><td><code>backgroundColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td></td><td>Background color of the scale area.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code>|<code>string</code></td><td><code>true</code></td><td>Controls the axis global visibility (visible when <code>true</code>, hidden when <code>false</code>). When <code>display: 'auto'</code>, the axis is visible only if at least one associated dataset is visible.</td></tr><tr class="odd"><td><code>grid</code></td><td><code>object</code></td><td></td><td>Grid line configuration. <a href="/docs/3.2.0/axes/styling.html#grid-line-configuration">more...</a></td></tr><tr class="even"><td><code>min</code></td><td><code>number</code></td><td></td><td>User defined minimum number for the scale, overrides minimum value from data. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="odd"><td><code>max</code></td><td><code>number</code></td><td></td><td>User defined maximum number for the scale, overrides maximum value from data. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="even"><td><code>reverse</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Reverse the scale.</td></tr><tr class="odd"><td><code>stacked</code></td><td><code>boolean</code>|<code>string</code></td><td><code>false</code></td><td>Should the data be stacked. <a href="/docs/3.2.0/axes/#stacking">more...</a></td></tr><tr class="even"><td><code>suggestedMax</code></td><td><code>number</code></td><td></td><td>Adjustment used when calculating the maximum data value. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="odd"><td><code>suggestedMin</code></td><td><code>number</code></td><td></td><td>Adjustment used when calculating the minimum data value. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="even"><td><code>ticks</code></td><td><code>object</code></td><td></td><td>Tick configuration. <a href="/docs/3.2.0/axes/#tick-configuration">more...</a></td></tr><tr class="odd"><td><code>weight</code></td><td><code>number</code></td><td><code>0</code></td><td>The weight used to sort the axis. Higher weights are further away from the chart area.</td></tr></tbody></table>

<a href="#tick-configuration" class="header-anchor">#</a> Tick Configuration
----------------------------------------------------------------------------

### <a href="#common-tick-options-to-all-cartesian-axes" class="header-anchor">#</a> Common tick options to all cartesian axes

Namespace: `options.scales[scaleId].ticks`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>align</code></td><td><code>string</code></td><td><code>'center'</code></td><td>The tick alignment along the axis. Can be <code>'start'</code>, <code>'center'</code>, or <code>'end'</code>.</td></tr><tr class="even"><td><code>crossAlign</code></td><td><code>string</code></td><td><code>'near'</code></td><td>The tick alignment perpendicular to the axis. Can be <code>'near'</code>, <code>'center'</code>, or <code>'far'</code>. See <a href="/docs/3.2.0/axes/cartesian/#tick-alignment">Tick Alignment</a></td></tr><tr class="odd"><td><code>sampleSize</code></td><td><code>number</code></td><td><code>ticks.length</code></td><td>The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.</td></tr><tr class="even"><td><code>autoSkip</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to <code>maxRotation</code> before skipping any. Turn <code>autoSkip</code> off to show all labels no matter what.</td></tr><tr class="odd"><td><code>autoSkipPadding</code></td><td><code>number</code></td><td><code>3</code></td><td>Padding between the ticks on the horizontal axis when <code>autoSkip</code> is enabled.</td></tr><tr class="even"><td><code>labelOffset</code></td><td><code>number</code></td><td><code>0</code></td><td>Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis). <em>Note: this can cause labels at the edges to be cropped by the edge of the canvas</em></td></tr><tr class="odd"><td><code>maxRotation</code></td><td><code>number</code></td><td><code>50</code></td><td>Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. <em>Note: Only applicable to horizontal scales.</em></td></tr><tr class="even"><td><code>minRotation</code></td><td><code>number</code></td><td><code>0</code></td><td>Minimum rotation for tick labels. <em>Note: Only applicable to horizontal scales.</em></td></tr><tr class="odd"><td><code>mirror</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Flips tick labels around axis, displaying the labels inside the chart instead of outside. <em>Note: Only applicable to vertical scales.</em></td></tr><tr class="even"><td><code>padding</code></td><td><code>number</code></td><td><code>0</code></td><td>Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.</td></tr></tbody></table>

### <a href="#common-tick-options-to-all-axes" class="header-anchor">#</a> Common tick options to all axes

Namespace: `options.scales[scaleId].ticks`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;">Scriptable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backdropColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td><code>'rgba(255, 255, 255, 0.75)'</code></td><td>Color of label backdrops.</td></tr><tr class="even"><td><code>backdropPadding</code></td><td><a href="/docs/3.2.0/general/padding.html"><code>Padding</code></a></td><td style="text-align: center;">Yes</td><td><code>2</code></td><td>Padding of label backdrop.</td></tr><tr class="odd"><td><code>callback</code></td><td><code>function</code></td><td style="text-align: center;"></td><td></td><td>Returns the string representation of the tick value as it should be displayed on the chart. See <a href="/docs/3.2.0/axes/labelling.html#creating-custom-tick-formats">callback</a>.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code></td><td style="text-align: center;"></td><td><code>true</code></td><td>If true, show tick labels.</td></tr><tr class="odd"><td><code>color</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td><code>Chart.defaults.color</code></td><td>Color of ticks.</td></tr><tr class="even"><td><code>font</code></td><td><code>Font</code></td><td style="text-align: center;">Yes</td><td><code>Chart.defaults.font</code></td><td>See <a href="/docs/3.2.0/general/fonts.html">Fonts</a></td></tr><tr class="odd"><td><code>major</code></td><td><code>object</code></td><td style="text-align: center;"></td><td><code>{}</code></td><td><a href="/docs/3.2.0/axes/styling.html#major-tick-configuration">Major ticks configuration</a>.</td></tr><tr class="even"><td><code>padding</code></td><td><code>number</code></td><td style="text-align: center;"></td><td><code>3</code></td><td>Sets the offset of the tick labels from the axis</td></tr><tr class="odd"><td><code>showLabelBackdrop</code></td><td><code>boolean</code></td><td style="text-align: center;">Yes</td><td><code>true</code> for radial scale, <code>false</code> otherwise</td><td>If true, draw a background behind the tick labels.</td></tr><tr class="even"><td><code>textStrokeColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td>``</td><td>The color of the stroke around the text.</td></tr><tr class="odd"><td><code>textStrokeWidth</code></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td><code>0</code></td><td>Stroke width around the text.</td></tr><tr class="even"><td><code>z</code></td><td><code>number</code></td><td style="text-align: center;"></td><td><code>0</code></td><td>z-index of tick layer. Useful when ticks are drawn on chart area. Values &lt;= 0 are drawn under datasets, &gt; 0 on top.</td></tr></tbody></table>

<a href="#min-max-configuration" class="header-anchor">#</a> Min Max Configuration
----------------------------------------------------------------------------------

For both the `min` and `max` properties, the value must be `string` in the `labels` array or `numeric` value as an index of a label in that array. In the example below, the x axis would only display "March" through "June".

    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data: [10, 20, 30, 40, 50, 60]
            }],
            labels: ['January', 'February', 'March', 'April', 'May', 'June']
        },
        options: {
            scales: {
                x: {
                    min: 'March'
                }
            }
        }
    });

<a href="#internal-data-format" class="header-anchor">#</a> Internal data format
--------------------------------------------------------------------------------

Internally category scale uses label indices

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/axes/cartesian/" class="prev router-link-active">Cartesian Axes</a> </span> <span class="next"> [Linear Axis](/docs/3.2.0/axes/cartesian/linear.html) → </span>
