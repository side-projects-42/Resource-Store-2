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

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

### <a href="#common-options-to-all-axes" class="header-anchor">#</a> Common options to all axes

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>type</code></td><td><code>string</code></td><td></td><td>Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.</td></tr><tr class="even"><td><code>alignToPixels</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Align pixel values to device pixels.</td></tr><tr class="odd"><td><code>backgroundColor</code></td><td><a href="/docs/3.0.0/general/colors.html"><code>Color</code></a></td><td></td><td>Background color of the scale area.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code>|<code>string</code></td><td><code>true</code></td><td>Controls the axis global visibility (visible when <code>true</code>, hidden when <code>false</code>). When <code>display: 'auto'</code>, the axis is visible only if at least one associated dataset is visible.</td></tr><tr class="odd"><td><code>grid</code></td><td><code>object</code></td><td></td><td>Grid line configuration. <a href="/docs/3.0.0/axes/styling.html#grid-line-configuration">more...</a></td></tr><tr class="even"><td><code>min</code></td><td><code>number</code></td><td></td><td>User defined minimum number for the scale, overrides minimum value from data. <a href="/docs/3.0.0/axes/#axis-range-settings">more...</a></td></tr><tr class="odd"><td><code>max</code></td><td><code>number</code></td><td></td><td>User defined maximum number for the scale, overrides maximum value from data. <a href="/docs/3.0.0/axes/#axis-range-settings">more...</a></td></tr><tr class="even"><td><code>reverse</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Reverse the scale.</td></tr><tr class="odd"><td><code>stacked</code></td><td><code>boolean</code>|<code>string</code></td><td><code>false</code></td><td>Should the data be stacked. <a href="/docs/3.0.0/axes/#stacking">more...</a></td></tr><tr class="even"><td><code>suggestedMax</code></td><td><code>number</code></td><td></td><td>Adjustment used when calculating the maximum data value. <a href="/docs/3.0.0/axes/#axis-range-settings">more...</a></td></tr><tr class="odd"><td><code>suggestedMin</code></td><td><code>number</code></td><td></td><td>Adjustment used when calculating the minimum data value. <a href="/docs/3.0.0/axes/#axis-range-settings">more...</a></td></tr><tr class="even"><td><code>ticks</code></td><td><code>object</code></td><td></td><td>Tick configuration. <a href="#tick-configuration">more...</a></td></tr><tr class="odd"><td><code>weight</code></td><td><code>number</code></td><td><code>0</code></td><td>The weight used to sort the axis. Higher weights are further away from the chart area.</td></tr></tbody></table>

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 7:48:50 AM</span>
