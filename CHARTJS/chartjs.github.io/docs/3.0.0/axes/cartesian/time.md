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
        -   <a href="/docs/3.0.0/axes/cartesian/linear.html" class="sidebar-link">Linear Axis</a>
        -   <a href="/docs/3.0.0/axes/cartesian/logarithmic.html" class="sidebar-link">Logarithmic Axis</a>
        -   <a href="/docs/3.0.0/axes/cartesian/time.html" class="active sidebar-link">Time Cartesian Axis</a>
        -   <a href="/docs/3.0.0/axes/cartesian/timeseries.html" class="sidebar-link">Time Series Axis</a>

    -   Radial <span class="arrow right"></span>

    -   <a href="/docs/3.0.0/axes/labelling.html" class="sidebar-link">Labeling Axes</a>
    -   <a href="/docs/3.0.0/axes/styling.html" class="sidebar-link">Styling</a>

-   Developers <span class="arrow right"></span>

<a href="#time-cartesian-axis" class="header-anchor">#</a> Time Cartesian Axis
==============================================================================

The time scale is used to display times and dates. Data are spread according to the amount of time between data points. When building its ticks, it will automatically calculate the most comfortable unit base on the size of the scale.

<a href="#date-adapters" class="header-anchor">#</a> Date Adapters
------------------------------------------------------------------

The time scale **requires** both a date library and a corresponding adapter to be present. Please choose from the [available adapters <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/awesome#adapters).

<a href="#data-sets" class="header-anchor">#</a> Data Sets
----------------------------------------------------------

### <a href="#input-data" class="header-anchor">#</a> Input Data

See [data structures](/docs/3.0.0/general/data-structures.html).

### <a href="#date-formats" class="header-anchor">#</a> Date Formats

When providing data for the time scale, Chart.js uses timestamps defined as milliseconds since the epoch (midnight January 1, 1970, UTC) internally. However, Chart.js also supports all of the formats that your chosen date adapter accepts. You should use timestamps if you'd like to set `parsing: false` for better performance.

<a href="#configuration-options" class="header-anchor">#</a> Configuration Options
----------------------------------------------------------------------------------

### <a href="#time-axis-specific-options" class="header-anchor">#</a> Time Axis specific options

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>adapters.date</code></td><td><code>object</code></td><td><code>{}</code></td><td>Options for adapter for external date library if that adapter needs or supports options</td></tr><tr class="even"><td><code>bounds</code></td><td><code>string</code></td><td><code>'data'</code></td><td>Determines the scale bounds. <a href="/docs/3.0.0/axes/cartesian/#scale-bounds">more...</a></td></tr><tr class="odd"><td><code>ticks.source</code></td><td><code>string</code></td><td><code>'auto'</code></td><td>How ticks are generated. <a href="#ticks-source">more...</a></td></tr><tr class="even"><td><code>time.displayFormats</code></td><td><code>object</code></td><td></td><td>Sets how different time units are displayed. <a href="#display-formats">more...</a></td></tr><tr class="odd"><td><code>time.isoWeekday</code></td><td><code>boolean</code>|<code>number</code></td><td><code>false</code></td><td>If <code>boolean</code> and true and the unit is set to 'week', then the first day of the week will be Monday. Otherwise, it will be Sunday. If <code>number</code>, the index of the first day of the week (0 - Sunday, 6 - Saturday)</td></tr><tr class="even"><td><code>time.parser</code></td><td><code>string</code>|<code>function</code></td><td></td><td>Custom parser for dates. <a href="#parser">more...</a></td></tr><tr class="odd"><td><code>time.round</code></td><td><code>string</code></td><td><code>false</code></td><td>If defined, dates will be rounded to the start of this unit. See <a href="#time-units">Time Units</a> below for the allowed units.</td></tr><tr class="even"><td><code>time.tooltipFormat</code></td><td><code>string</code></td><td></td><td>The format string to use for the tooltip.</td></tr><tr class="odd"><td><code>time.unit</code></td><td><code>string</code></td><td><code>false</code></td><td>If defined, will force the unit to be a certain type. See <a href="#time-units">Time Units</a> section below for details.</td></tr><tr class="even"><td><code>time.stepSize</code></td><td><code>number</code></td><td><code>1</code></td><td>The number of units between grid lines.</td></tr><tr class="odd"><td><code>time.minUnit</code></td><td><code>string</code></td><td><code>'millisecond'</code></td><td>The minimum display format to be used for a time unit.</td></tr></tbody></table>

### <a href="#common-options-to-all-cartesian-axes" class="header-anchor">#</a> Common options to all cartesian axes

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>bounds</code></td><td><code>string</code></td><td><code>'ticks'</code></td><td>Determines the scale bounds. <a href="/docs/3.0.0/axes/cartesian/#scale-bounds">more...</a></td></tr><tr class="even"><td><code>position</code></td><td><code>string</code></td><td></td><td>Position of the axis. <a href="/docs/3.0.0/axes/cartesian/#axis-position">more...</a></td></tr><tr class="odd"><td><code>axis</code></td><td><code>string</code></td><td></td><td>Which type of axis this is. Possible values are: <code>'x'</code>, <code>'y'</code>. If not set, this is inferred from the first character of the ID which should be <code>'x'</code> or <code>'y'</code>.</td></tr><tr class="even"><td><code>offset</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to <code>true</code> for a bar chart by default.</td></tr><tr class="odd"><td><code>title</code></td><td><code>object</code></td><td></td><td>Scale title configuration. <a href="/docs/3.0.0/axes/labelling.html#scale-title-configuration">more...</a></td></tr></tbody></table>

### <a href="#common-options-to-all-axes" class="header-anchor">#</a> Common options to all axes

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>type</code></td><td><code>string</code></td><td></td><td>Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.</td></tr><tr class="even"><td><code>alignToPixels</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Align pixel values to device pixels.</td></tr><tr class="odd"><td><code>backgroundColor</code></td><td><a href="/docs/3.0.0/axes/general/colors.html"><code>Color</code></a></td><td></td><td>Background color of the scale area.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code>|<code>string</code></td><td><code>true</code></td><td>Controls the axis global visibility (visible when <code>true</code>, hidden when <code>false</code>). When <code>display: 'auto'</code>, the axis is visible only if at least one associated dataset is visible.</td></tr><tr class="odd"><td><code>grid</code></td><td><code>object</code></td><td></td><td>Grid line configuration. <a href="/docs/3.0.0/axes/cartesian/styling.html#grid-line-configuration">more...</a></td></tr><tr class="even"><td><code>min</code></td><td><code>number</code></td><td></td><td>User defined minimum number for the scale, overrides minimum value from data. <a href="/docs/3.0.0/axes/cartesian/#axis-range-settings">more...</a></td></tr><tr class="odd"><td><code>max</code></td><td><code>number</code></td><td></td><td>User defined maximum number for the scale, overrides maximum value from data. <a href="/docs/3.0.0/axes/cartesian/#axis-range-settings">more...</a></td></tr><tr class="even"><td><code>reverse</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Reverse the scale.</td></tr><tr class="odd"><td><code>stacked</code></td><td><code>boolean</code>|<code>string</code></td><td><code>false</code></td><td>Should the data be stacked. <a href="/docs/3.0.0/axes/cartesian/#stacking">more...</a></td></tr><tr class="even"><td><code>suggestedMax</code></td><td><code>number</code></td><td></td><td>Adjustment used when calculating the maximum data value. <a href="/docs/3.0.0/axes/cartesian/#axis-range-settings">more...</a></td></tr><tr class="odd"><td><code>suggestedMin</code></td><td><code>number</code></td><td></td><td>Adjustment used when calculating the minimum data value. <a href="/docs/3.0.0/axes/cartesian/#axis-range-settings">more...</a></td></tr><tr class="even"><td><code>ticks</code></td><td><code>object</code></td><td></td><td>Tick configuration. <a href="#tick-configuration">more...</a></td></tr><tr class="odd"><td><code>weight</code></td><td><code>number</code></td><td><code>0</code></td><td>The weight used to sort the axis. Higher weights are further away from the chart area.</td></tr></tbody></table>

#### <a href="#time-units" class="header-anchor">#</a> Time Units

The following time measurements are supported. The names can be passed as strings to the `time.unit` config option to force a certain unit.

-   `'millisecond'`
-   `'second'`
-   `'minute'`
-   `'hour'`
-   `'day'`
-   `'week'`
-   `'month'`
-   `'quarter'`
-   `'year'`

For example, to create a chart with a time scale that always displayed units per month, the following config could be used.

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month'
                    }
                }
            }
        }
    });

#### <a href="#display-formats" class="header-anchor">#</a> Display Formats

You may specify a map of display formats with a key for each unit:

-   `millisecond`
-   `second`
-   `minute`
-   `hour`
-   `day`
-   `week`
-   `month`
-   `quarter`
-   `year`

The format string used as a value depends on the date adapter you chose to use.

For example, to set the display format for the `quarter` unit to show the month and year, the following config might be passed to the chart constructor.

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        displayFormats: {
                            quarter: 'MMM YYYY'
                        }
                    }
                }
            }
        }
    });

#### <a href="#ticks-source" class="header-anchor">#</a> Ticks Source

The `ticks.source` property controls the ticks generation.

-   `'auto'`: generates "optimal" ticks based on scale size and time options
-   `'data'`: generates ticks from data (including labels from data `{x|y}` objects)
-   `'labels'`: generates ticks from user given `labels` ONLY

#### <a href="#parser" class="header-anchor">#</a> Parser

If this property is defined as a string, it is interpreted as a custom format to be used by the date adapter to parse the date.

If this is a function, it must return a type that can be handled by your date adapter's `parse` method.

<a href="#internal-data-format" class="header-anchor">#</a> Internal data format
--------------------------------------------------------------------------------

Internally time scale uses milliseconds since epoch

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 7:48:50 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/axes/cartesian/logarithmic.html" class="prev">Logarithmic Axis</a> </span> <span class="next"> [Time Series Axis](/docs/3.0.0/axes/cartesian/timeseries.html) → </span>
