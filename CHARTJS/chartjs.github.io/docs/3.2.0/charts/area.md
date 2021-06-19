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

-   Chart Types <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/charts/line.html" class="sidebar-link">Line Chart</a>
    -   <a href="/docs/3.2.0/charts/bar.html" class="sidebar-link">Bar Chart</a>
    -   <a href="/docs/3.2.0/charts/radar.html" class="sidebar-link">Radar Chart</a>
    -   <a href="/docs/3.2.0/charts/doughnut.html" class="sidebar-link">Doughnut and Pie Charts</a>
    -   <a href="/docs/3.2.0/charts/polar.html" class="sidebar-link">Polar Area Chart</a>
    -   <a href="/docs/3.2.0/charts/bubble.html" class="sidebar-link">Bubble Chart</a>
    -   <a href="/docs/3.2.0/charts/scatter.html" class="sidebar-link">Scatter Chart</a>
    -   <a href="/docs/3.2.0/charts/area.html" class="active sidebar-link">Area Chart</a>
    -   <a href="/docs/3.2.0/charts/mixed.html" class="sidebar-link">Mixed Chart Types</a>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#area-chart" class="header-anchor">#</a> Area Chart
============================================================

Both [line](/docs/3.2.0/charts/line.html) and [radar](/docs/3.2.0/charts/radar.html) charts support a `fill` option on the dataset object which can be used to create space between two datasets or a dataset and a boundary, i.e. the scale `origin`, `start,` or `end` (see [filling modes](#filling-modes)).

Note

This feature is implemented by the [`filler` plugin <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/master/src/plugins/plugin.filler.js).

<a href="#filling-modes" class="header-anchor">#</a> Filling modes
------------------------------------------------------------------

<table><thead><tr class="header"><th style="text-align: left;">Mode</th><th style="text-align: left;">Type</th><th style="text-align: left;">Values</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;">Absolute dataset index</td><td style="text-align: left;"><code>number</code></td><td style="text-align: left;"><code>1</code>, <code>2</code>, <code>3</code>, ...</td></tr><tr class="even"><td style="text-align: left;">Relative dataset index</td><td style="text-align: left;"><code>string</code></td><td style="text-align: left;"><code>'-1'</code>, <code>'-2'</code>, <code>'+1'</code>, ...</td></tr><tr class="odd"><td style="text-align: left;">Boundary</td><td style="text-align: left;"><code>string</code></td><td style="text-align: left;"><code>'start'</code>, <code>'end'</code>, <code>'origin'</code></td></tr><tr class="even"><td style="text-align: left;">Disabled <sup>1</sup></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;"><code>false</code></td></tr><tr class="odd"><td style="text-align: left;">Stacked value below</td><td style="text-align: left;"><code>string</code></td><td style="text-align: left;"><code>'stack'</code></td></tr><tr class="even"><td style="text-align: left;">Axis value</td><td style="text-align: left;"><code>object</code></td><td style="text-align: left;"><code>{ value: number; }</code></td></tr></tbody></table>

> <sup>1</sup> for backward compatibility, `fill: true` is equivalent to `fill: 'origin'`  

### <a href="#example" class="header-anchor">#</a> Example

    new Chart(ctx, {
        data: {
            datasets: [
                {fill: 'origin'},      // 0: fill to 'origin'
                {fill: '+2'},          // 1: fill to dataset 3
                {fill: 1},             // 2: fill to dataset 1
                {fill: false},         // 3: no fill
                {fill: '-2'},          // 4: fill to dataset 2
                {fill: {value: 25}}    // 5: fill to axis value 25
            ]
        }
    });

If you need to support multiple colors when filling from one dataset to another, you may specify an object with the following option :

<table><thead><tr class="header"><th style="text-align: left;">Param</th><th style="text-align: left;">Type</th><th style="text-align: left;">Description</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>target</code></td><td style="text-align: left;"><code>number</code>, <code>string</code>, <code>boolean</code>, <code>object</code></td><td style="text-align: left;">The accepted values are the same as the filling mode values, so you may use absolute and relative dataset indexes and/or boundaries.</td></tr><tr class="even"><td style="text-align: left;"><code>above</code></td><td style="text-align: left;"><code>Color</code></td><td style="text-align: left;">If no color is set, the default color will be the background color of the chart.</td></tr><tr class="odd"><td style="text-align: left;"><code>below</code></td><td style="text-align: left;"><code>Color</code></td><td style="text-align: left;">Same as the above.</td></tr></tbody></table>

### <a href="#example-with-multiple-colors" class="header-anchor">#</a> Example with multiple colors

    new Chart(ctx, {
        data: {
            datasets: [
                {
                  fill: {
                    target: 'origin',
                    above: 'rgb(255, 0, 0)',   // Area will be red above the origin
                    below: 'rgb(0, 0, 255)'    // And blue below the origin
                  }
                }
            ]
        }
    });

<a href="#configuration" class="header-anchor">#</a> Configuration
------------------------------------------------------------------

Namespace: `options.plugins.filler`

<table><thead><tr class="header"><th style="text-align: left;">Option</th><th style="text-align: left;">Type</th><th style="text-align: left;">Default</th><th style="text-align: left;">Description</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>drawTime</code></td><td style="text-align: left;"><code>string</code></td><td style="text-align: left;"><code>beforeDatasetDraw</code></td><td style="text-align: left;">Filler draw time. Supported values: <code>'beforeDraw'</code>, <code>'beforeDatasetDraw'</code>, <code>'beforeDatasetsDraw'</code></td></tr><tr class="even"><td style="text-align: left;"><a href="#propagate"><code>propagate</code></a></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;"><code>true</code></td><td style="text-align: left;">Fill propagation when target is hidden.</td></tr></tbody></table>

### <a href="#propagate" class="header-anchor">#</a> propagate

`propagate` takes a `boolean` value (default: `true`).

If `true`, the fill area will be recursively extended to the visible target defined by the `fill` value of hidden dataset targets:

#### <a href="#example-using-propagate" class="header-anchor">#</a> Example using propagate

    new Chart(ctx, {
        data: {
            datasets: [
                {fill: 'origin'},   // 0: fill to 'origin'
                {fill: '-1'},       // 1: fill to dataset 0
                {fill: 1},          // 2: fill to dataset 1
                {fill: false},      // 3: no fill
                {fill: '-2'}        // 4: fill to dataset 2
            ]
        },
        options: {
            plugins: {
                filler: {
                    propagate: true
                }
            }
        }
    });

`propagate: true`: -if dataset 2 is hidden, dataset 4 will fill to dataset 1 -if dataset 2 and 1 are hidden, dataset 4 will fill to `'origin'`

`propagate: false`: -if dataset 2 and/or 4 are hidden, dataset 4 will not be filled

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/charts/scatter.html" class="prev">Scatter Chart</a> </span> <span class="next"> [Mixed Chart Types](/docs/3.2.0/charts/mixed.html) → </span>
