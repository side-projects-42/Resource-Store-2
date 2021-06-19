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

-   Configuration <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/configuration/" class="active sidebar-link">Configuration</a>
    -   <a href="/docs/3.2.0/configuration/responsive.html" class="sidebar-link">Responsive Charts</a>
    -   <a href="/docs/3.2.0/configuration/device-pixel-ratio.html" class="sidebar-link">Device Pixel Ratio</a>
    -   <a href="/docs/3.2.0/configuration/locale.html" class="sidebar-link">Locale</a>
    -   <a href="/docs/3.2.0/configuration/interactions.html" class="sidebar-link">Interactions</a>
    -   <a href="/docs/3.2.0/configuration/canvas-background.html" class="sidebar-link">Canvas background</a>
    -   <a href="/docs/3.2.0/configuration/animations.html" class="sidebar-link">Animations</a>
    -   <a href="/docs/3.2.0/configuration/layout.html" class="sidebar-link">Layout</a>
    -   <a href="/docs/3.2.0/configuration/legend.html" class="sidebar-link">Legend</a>
    -   <a href="/docs/3.2.0/configuration/title.html" class="sidebar-link">Title</a>
    -   <a href="/docs/3.2.0/configuration/tooltip.html" class="sidebar-link">Tooltip</a>
    -   <a href="/docs/3.2.0/configuration/elements.html" class="sidebar-link">Elements</a>
    -   <a href="/docs/3.2.0/configuration/decimation.html" class="sidebar-link">Data Decimation</a>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#configuration" class="header-anchor">#</a> Configuration
==================================================================

The configuration is used to change how the chart behaves. There are properties to control styling, fonts, the legend, etc.

<a href="#global-configuration" class="header-anchor">#</a> Global Configuration
--------------------------------------------------------------------------------

This concept was introduced in Chart.js 1.0 to keep configuration [DRY <span class="sr-only">(opens new window)</span>](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), and allow for changing options globally across chart types, avoiding the need to specify options for each instance, or the default for a particular chart type.

Chart.js merges the options object passed to the chart with the global configuration using chart type defaults and scales defaults appropriately. This way you can be as specific as you would like in your individual chart configuration, while still changing the defaults for all chart types where applicable. The global general options are defined in `Chart.defaults`. The defaults for each chart type are discussed in the documentation for that chart type.

The following example would set the interaction mode to 'nearest' for all charts where this was not overridden by the chart type defaults or the options passed to the constructor on creation.

    Chart.defaults.interaction.mode = 'nearest';
    // Interaction mode is set to nearest because it was not overridden here
    var chartInteractionModeNearest = new Chart(ctx, {
        type: 'line',
        data: data
    });
    // This chart would have the interaction mode that was passed in
    var chartDifferentInteractionMode = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            interaction: {
                // Overrides the global setting
                mode: 'index'
            }
        }
    });

<a href="#dataset-configuration" class="header-anchor">#</a> Dataset Configuration
----------------------------------------------------------------------------------

Options may be configured directly on the dataset. The dataset options can be changed at multiple different levels. See [options](/docs/3.2.0/general/options.html#dataset-level-options) for details on how the options are resolved.

The following example would set the `showLine` option to 'false' for all line datasets except for those overridden by options passed to the dataset on creation.

    // Do not show lines for all datasets by default
    Chart.defaults.datasets.line.showLine = false;
    // This chart would show a line only for the third dataset
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data: [0, 0],
            }, {
                data: [0, 1]
            }, {
                data: [1, 0],
                showLine: true // overrides the `line` dataset default
            }, {
                type: 'scatter', // 'line' dataset default does not affect this dataset since it's a 'scatter'
                data: [1, 1]
            }]
        }
    });

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/general/performance.html" class="prev">Performance</a> </span> <span class="next"> [Responsive Charts](/docs/3.2.0/configuration/responsive.html) → </span>
