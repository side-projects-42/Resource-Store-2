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

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/developers/" class="sidebar-link">Developers</a>
    -   <a href="/docs/3.2.0/developers/api.html" class="sidebar-link">API</a>
    -   <a href="/docs/3.2.0/api/" class="sidebar-link">TypeDoc</a>
    -   <a href="/docs/3.2.0/developers/updates.html" class="active sidebar-link">Updating Charts</a>
    -   <a href="/docs/3.2.0/developers/plugins.html" class="sidebar-link">Plugins</a>
    -   <a href="/docs/3.2.0/developers/charts.html" class="sidebar-link">New Charts</a>
    -   <a href="/docs/3.2.0/developers/axes.html" class="sidebar-link">New Axes</a>
    -   <a href="/docs/3.2.0/developers/contributing.html" class="sidebar-link">Contributing</a>
    -   <a href="/docs/3.2.0/developers/publishing.html" class="sidebar-link">Publishing an extension</a>

<a href="#updating-charts" class="header-anchor">#</a> Updating Charts
======================================================================

It's pretty common to want to update charts after they've been created. When the chart data or options are changed, Chart.js will animate to the new data values and options.

<a href="#adding-or-removing-data" class="header-anchor">#</a> Adding or Removing Data
--------------------------------------------------------------------------------------

Adding and removing data is supported by changing the data array. To add data, just add data into the data array as seen in this example.

    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }
    function removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }

<a href="#updating-options" class="header-anchor">#</a> Updating Options
------------------------------------------------------------------------

To update the options, mutating the options property in place or passing in a new options object are supported.

-   If the options are mutated in place, other option properties would be preserved, including those calculated by Chart.js.
-   If created as a new object, it would be like creating a new chart with the options - old options would be discarded.

    function updateConfigByMutating(chart) {
        chart.options.plugins.title.text = 'new title';
        chart.update();
    }
    function updateConfigAsNewObject(chart) {
        chart.options = {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Chart.js'
                }
            },
            scales: {
                x: {
                    display: true
                },
                y: {
                    display: true
                }
            }
        };
        chart.update();
    }

Scales can be updated separately without changing other options. To update the scales, pass in an object containing all the customization including those unchanged ones.

Variables referencing any one from `chart.scales` would be lost after updating scales with a new `id` or the changed `type`.

    function updateScales(chart) {
        var xScale = chart.scales.x;
        var yScale = chart.scales.y;
        chart.options.scales = {
            newId: {
                display: true
            },
            y: {
                display: true,
                type: 'logarithmic'
            }
        };
        chart.update();
        // need to update the reference
        xScale = chart.scales.newId;
        yScale = chart.scales.y;
    }

You can also update a specific scale either by its id.

    function updateScale(chart) {
        chart.options.scales.y = {
            type: 'logarithmic'
        };
        chart.update();
    }

Code sample for updating options can be found in [toggle-scale-type.html <span class="sr-only">(opens new window)</span>](https://www.chartjs.org/samples/latest/scales/toggle-scale-type.html).

<a href="#preventing-animations" class="header-anchor">#</a> Preventing Animations
----------------------------------------------------------------------------------

Sometimes when a chart updates, you may not want an animation. To achieve this you can call `update` with `'none'` as mode.

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/api/" class="prev">TypeDoc</a> </span> <span class="next"> [Plugins](/docs/3.2.0/developers/plugins.html) → </span>
