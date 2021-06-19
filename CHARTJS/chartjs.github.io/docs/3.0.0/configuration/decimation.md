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

-   Configuration <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/configuration/" class="sidebar-link">Configuration</a>
    -   <a href="/docs/3.0.0/configuration/responsive.html" class="sidebar-link">Responsive Charts</a>
    -   <a href="/docs/3.0.0/configuration/device-pixel-ratio.html" class="sidebar-link">Device Pixel Ratio</a>
    -   <a href="/docs/3.0.0/configuration/locale.html" class="sidebar-link">Locale</a>
    -   <a href="/docs/3.0.0/configuration/interactions.html" class="sidebar-link">Interactions</a>
    -   <a href="/docs/3.0.0/configuration/canvas-background.html" class="sidebar-link">Canvas background</a>
    -   <a href="/docs/3.0.0/configuration/animations.html" class="sidebar-link">Animations</a>
    -   <a href="/docs/3.0.0/configuration/layout.html" class="sidebar-link">Layout</a>
    -   <a href="/docs/3.0.0/configuration/legend.html" class="sidebar-link">Legend</a>
    -   <a href="/docs/3.0.0/configuration/title.html" class="sidebar-link">Title</a>
    -   <a href="/docs/3.0.0/configuration/tooltip.html" class="sidebar-link">Tooltip</a>
    -   <a href="/docs/3.0.0/configuration/elements.html" class="sidebar-link">Elements</a>
    -   <a href="/docs/3.0.0/configuration/decimation.html" class="active sidebar-link">Data Decimation</a>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#data-decimation" class="header-anchor">#</a> Data Decimation
======================================================================

The decimation plugin can be used with line charts to automatically decimate data at the start of the chart lifecycle. Before enabling this plugin, review the [requirements](#requirements) to ensure that it will work with the chart you want to create.

<a href="#configuration-options" class="header-anchor">#</a> Configuration Options
----------------------------------------------------------------------------------

Namespace: `options.plugins.decimation`, the global options for the plugin are defined in `Chart.defaults.plugins.decimation`.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>enabled</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Is decimation enabled?</td></tr><tr class="even"><td><code>algorithm</code></td><td><code>string</code></td><td><code>'min-max'</code></td><td>Decimation algorithm to use. See the <a href="#decimation-algorithms">more...</a></td></tr><tr class="odd"><td><code>samples</code></td><td><code>number</code></td><td></td><td>If the <code>'lttb'</code> algorithm is used, this is the number of samples in the output dataset. Defaults to the canvas width to pick 1 sample per pixel.</td></tr></tbody></table>

<a href="#decimation-algorithms" class="header-anchor">#</a> Decimation Algorithms
----------------------------------------------------------------------------------

Decimation algorithm to use for data. Options are:

-   `'lttb'`
-   `'min-max'`

### <a href="#largest-triangle-three-bucket-lttb-decimation" class="header-anchor">#</a> Largest Triangle Three Bucket (LTTB) Decimation

[LTTB <span class="sr-only">(opens new window)</span>](https://github.com/sveinn-steinarsson/flot-downsample) decimation reduces the number of data points significantly. This is most useful for showing trends in data using only a few data points.

### <a href="#min-max-decimation" class="header-anchor">#</a> Min/Max Decimation

[Min/max <span class="sr-only">(opens new window)</span>](https://digital.ni.com/public.nsf/allkb/F694FFEEA0ACF282862576020075F784) decimation will preserve peaks in your data but could require up to 4 points for each pixel. This type of decimation would work well for a very noisy signal where you need to see data peaks.

<a href="#requirements" class="header-anchor">#</a> Requirements
----------------------------------------------------------------

To use the decimation plugin, the following requirements must be met:

1.  The dataset must have an `indexAxis` of `'x'`
2.  The dataset must be a line
3.  The X axis for the dataset must be either a `'linear'` or `'time'` type axis
4.  The dataset object must be mutable. The plugin stores the original data as `dataset._data` and then defines a new `data` property on the dataset.

<span class="prefix">Last Updated:</span> <span class="time">3/30/2021, 10:32:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/configuration/elements.html" class="prev">Elements</a> </span> <span class="next"> [Line Chart](/docs/3.0.0/charts/line.html) → </span>
