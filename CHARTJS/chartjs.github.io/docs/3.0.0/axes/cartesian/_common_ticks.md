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

### <a href="#common-tick-options-to-all-cartesian-axes" class="header-anchor">#</a> Common tick options to all cartesian axes

Namespace: `options.scales[scaleId].ticks`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>align</code></td><td><code>string</code></td><td><code>'center'</code></td><td>The tick alignment along the axis. Can be <code>'start'</code>, <code>'center'</code>, or <code>'end'</code>.</td></tr><tr class="even"><td><code>crossAlign</code></td><td><code>string</code></td><td><code>'near'</code></td><td>The tick alignment perpendicular to the axis. Can be <code>'near'</code>, <code>'center'</code>, or <code>'far'</code>. See <a href="./index#tick-alignment">Tick Alignment</a></td></tr><tr class="odd"><td><code>sampleSize</code></td><td><code>number</code></td><td><code>ticks.length</code></td><td>The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.</td></tr><tr class="even"><td><code>autoSkip</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to <code>maxRotation</code> before skipping any. Turn <code>autoSkip</code> off to show all labels no matter what.</td></tr><tr class="odd"><td><code>autoSkipPadding</code></td><td><code>number</code></td><td><code>3</code></td><td>Padding between the ticks on the horizontal axis when <code>autoSkip</code> is enabled.</td></tr><tr class="even"><td><code>labelOffset</code></td><td><code>number</code></td><td><code>0</code></td><td>Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis). <em>Note: this can cause labels at the edges to be cropped by the edge of the canvas</em></td></tr><tr class="odd"><td><code>maxRotation</code></td><td><code>number</code></td><td><code>50</code></td><td>Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. <em>Note: Only applicable to horizontal scales.</em></td></tr><tr class="even"><td><code>minRotation</code></td><td><code>number</code></td><td><code>0</code></td><td>Minimum rotation for tick labels. <em>Note: Only applicable to horizontal scales.</em></td></tr><tr class="odd"><td><code>mirror</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Flips tick labels around axis, displaying the labels inside the chart instead of outside. <em>Note: Only applicable to vertical scales.</em></td></tr><tr class="even"><td><code>padding</code></td><td><code>number</code></td><td><code>0</code></td><td>Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.</td></tr></tbody></table>

<span class="prefix">Last Updated:</span> <span class="time">3/30/2021, 10:32:39 AM</span>
