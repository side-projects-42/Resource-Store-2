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

    -   Radial <span class="arrow right"></span>

    -   <a href="/docs/3.2.0/axes/labelling.html" class="sidebar-link">Labeling Axes</a>
    -   <a href="/docs/3.2.0/axes/styling.html" class="active sidebar-link">Styling</a>

-   Developers <span class="arrow right"></span>

<a href="#styling" class="header-anchor">#</a> Styling
======================================================

There are a number of options to allow styling an axis. There are settings to control [grid lines](#grid-line-configuration) and [ticks](#tick-configuration).

<a href="#grid-line-configuration" class="header-anchor">#</a> Grid Line Configuration
--------------------------------------------------------------------------------------

Namespace: `options.scales[scaleId].grid`, it defines options for the grid lines that run perpendicular to the axis.

<table style="width:100%;"><colgroup><col style="width: 16%" /><col style="width: 16%" /><col style="width: 16%" /><col style="width: 16%" /><col style="width: 16%" /><col style="width: 16%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;">Scriptable</th><th style="text-align: center;">Indexable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>borderColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;"></td><td style="text-align: center;"></td><td><code>Chart.defaults.borderColor</code></td><td>The color of the border line.</td></tr><tr class="even"><td><code>borderWidth</code></td><td><code>number</code></td><td style="text-align: center;"></td><td style="text-align: center;"></td><td><code>1</code></td><td>The width of the border line.</td></tr><tr class="odd"><td><code>borderDash</code></td><td><code>number[]</code></td><td style="text-align: center;"></td><td style="text-align: center;"></td><td><code>[]</code></td><td>Length and spacing of dashes on grid lines. See MDN<span class="sr-only">(opens new window)</span>.</td></tr><tr class="even"><td><code>borderDashOffset</code></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;"></td><td><code>0.0</code></td><td>Offset for line dashes. See MDN<span class="sr-only">(opens new window)</span>.</td></tr><tr class="odd"><td><code>circular</code></td><td><code>boolean</code></td><td style="text-align: center;"></td><td style="text-align: center;"></td><td><code>false</code></td><td>If true, gridlines are circular (on radar chart only).</td></tr><tr class="even"><td><code>color</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>Chart.defaults.borderColor</code></td><td>The color of the grid lines. If specified as an array, the first color applies to the first grid line, the second to the second grid line, and so on.</td></tr><tr class="odd"><td><code>display</code></td><td><code>boolean</code></td><td style="text-align: center;"></td><td style="text-align: center;"></td><td><code>true</code></td><td>If false, do not display grid lines for this axis.</td></tr><tr class="even"><td><code>drawBorder</code></td><td><code>boolean</code></td><td style="text-align: center;"></td><td style="text-align: center;"></td><td><code>true</code></td><td>If true, draw a border at the edge between the axis and the chart area.</td></tr><tr class="odd"><td><code>drawOnChartArea</code></td><td><code>boolean</code></td><td style="text-align: center;"></td><td style="text-align: center;"></td><td><code>true</code></td><td>If true, draw lines on the chart area inside the axis lines. This is useful when there are multiple axes and you need to control which grid lines are drawn.</td></tr><tr class="even"><td><code>drawTicks</code></td><td><code>boolean</code></td><td style="text-align: center;"></td><td style="text-align: center;"></td><td><code>true</code></td><td>If true, draw lines beside the ticks in the axis area beside the chart.</td></tr><tr class="odd"><td><code>lineWidth</code></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td><code>1</code></td><td>Stroke width of grid lines.</td></tr><tr class="even"><td><code>offset</code></td><td><code>boolean</code></td><td style="text-align: center;"></td><td style="text-align: center;"></td><td><code>false</code></td><td>If true, grid lines will be shifted to be between labels. This is set to <code>true</code> for a bar chart by default.</td></tr><tr class="odd"><td><code>tickBorderDash</code></td><td><code>number[]</code></td><td style="text-align: center;"></td><td style="text-align: center;"></td><td></td><td>Length and spacing of the tick mark line. If not set, defaults to the grid line <code>borderDash</code> value.</td></tr><tr class="even"><td><code>tickBorderDashOffset</code></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td></td><td>Offset for the line dash of the tick mark. If unset, defaults to the grid line <code>borderDashOffset</code> value</td></tr><tr class="odd"><td><code>tickColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td></td><td>Color of the tick line. If unset, defaults to the grid line color.</td></tr><tr class="even"><td><code>tickLength</code></td><td><code>number</code></td><td style="text-align: center;"></td><td style="text-align: center;"></td><td><code>8</code></td><td>Length in pixels that the grid lines will draw into the axis area.</td></tr><tr class="odd"><td><code>tickWidth</code></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td style="text-align: center;">Yes</td><td></td><td>Width of the tick mark in pixels. If unset, defaults to the grid line width.</td></tr><tr class="even"><td><code>z</code></td><td><code>number</code></td><td style="text-align: center;"></td><td style="text-align: center;"></td><td><code>0</code></td><td>z-index of gridline layer. Values &lt;= 0 are drawn under datasets, &gt; 0 on top.</td></tr></tbody></table>

The scriptable context is described in [Options](/docs/3.2.0/general/options.html#tick) section.

<a href="#tick-configuration" class="header-anchor">#</a> Tick Configuration
----------------------------------------------------------------------------

### <a href="#common-tick-options-to-all-axes" class="header-anchor">#</a> Common tick options to all axes

Namespace: `options.scales[scaleId].ticks`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;">Scriptable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backdropColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td><code>'rgba(255, 255, 255, 0.75)'</code></td><td>Color of label backdrops.</td></tr><tr class="even"><td><code>backdropPadding</code></td><td><a href="/docs/3.2.0/general/padding.html"><code>Padding</code></a></td><td style="text-align: center;">Yes</td><td><code>2</code></td><td>Padding of label backdrop.</td></tr><tr class="odd"><td><code>callback</code></td><td><code>function</code></td><td style="text-align: center;"></td><td></td><td>Returns the string representation of the tick value as it should be displayed on the chart. See <a href="/docs/3.2.0/axes/labelling.html#creating-custom-tick-formats">callback</a>.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code></td><td style="text-align: center;"></td><td><code>true</code></td><td>If true, show tick labels.</td></tr><tr class="odd"><td><code>color</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td><code>Chart.defaults.color</code></td><td>Color of ticks.</td></tr><tr class="even"><td><code>font</code></td><td><code>Font</code></td><td style="text-align: center;">Yes</td><td><code>Chart.defaults.font</code></td><td>See <a href="/docs/3.2.0/general/fonts.html">Fonts</a></td></tr><tr class="odd"><td><code>major</code></td><td><code>object</code></td><td style="text-align: center;"></td><td><code>{}</code></td><td><a href="/docs/3.2.0/axes/styling.html#major-tick-configuration">Major ticks configuration</a>.</td></tr><tr class="even"><td><code>padding</code></td><td><code>number</code></td><td style="text-align: center;"></td><td><code>3</code></td><td>Sets the offset of the tick labels from the axis</td></tr><tr class="odd"><td><code>showLabelBackdrop</code></td><td><code>boolean</code></td><td style="text-align: center;">Yes</td><td><code>true</code> for radial scale, <code>false</code> otherwise</td><td>If true, draw a background behind the tick labels.</td></tr><tr class="even"><td><code>textStrokeColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td>``</td><td>The color of the stroke around the text.</td></tr><tr class="odd"><td><code>textStrokeWidth</code></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td><code>0</code></td><td>Stroke width around the text.</td></tr><tr class="even"><td><code>z</code></td><td><code>number</code></td><td style="text-align: center;"></td><td><code>0</code></td><td>z-index of tick layer. Useful when ticks are drawn on chart area. Values &lt;= 0 are drawn under datasets, &gt; 0 on top.</td></tr></tbody></table>

The scriptable context is described in [Options](/docs/3.2.0/general/options.html#tick) section.

<a href="#major-tick-configuration" class="header-anchor">#</a> Major Tick Configuration
----------------------------------------------------------------------------------------

Namespace: `options.scales[scaleId].ticks.major`, it defines options for the major tick marks that are generated by the axis.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>enabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If true, major ticks are generated. A major tick will affect autoskipping and <code>major</code> will be defined on ticks in the scriptable options context.</td></tr></tbody></table>

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/axes/labelling.html" class="prev">Labeling Axes</a> </span> <span class="next"> [Developers](/docs/3.2.0/developers/) → </span>
