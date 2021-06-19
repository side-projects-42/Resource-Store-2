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
-   Getting Started <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/getting-started/" class="sidebar-link">Getting Started</a>
    -   <a href="/docs/3.2.0/getting-started/installation.html" class="sidebar-link">Installation</a>
    -   <a href="/docs/3.2.0/getting-started/integration.html" class="active sidebar-link">Integration</a>
    -   <a href="/docs/3.2.0/getting-started/usage.html" class="sidebar-link">Usage</a>
    -   <a href="/docs/3.2.0/getting-started/v3-migration.html" class="sidebar-link">3.x Migration Guide</a>

-   General <span class="arrow right"></span>

-   Configuration <span class="arrow right"></span>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#integration" class="header-anchor">#</a> Integration
==============================================================

Chart.js can be integrated with plain JavaScript or with different module loaders. The examples below show how to load Chart.js in different systems.

<a href="#script-tag" class="header-anchor">#</a> Script Tag
------------------------------------------------------------

    <script src="path/to/chartjs/dist/chart.js"></script>
    <script>
        var myChart = new Chart(ctx, {...});
    </script>

<a href="#common-js" class="header-anchor">#</a> Common JS
----------------------------------------------------------

    var Chart = require('chart.js');
    var myChart = new Chart(ctx, {...});

<a href="#bundlers-webpack-rollup-etc" class="header-anchor">#</a> Bundlers (Webpack, Rollup, etc.)
---------------------------------------------------------------------------------------------------

Chart.js 3 is tree-shakeable, so it is necessary to import and register the controllers, elements, scales and plugins you are going to use.

For all available imports see the example below.

    import {
      Chart,
      ArcElement,
      LineElement,
      BarElement,
      PointElement,
      BarController,
      BubbleController,
      DoughnutController,
      LineController,
      PieController,
      PolarAreaController,
      RadarController,
      ScatterController,
      CategoryScale,
      LinearScale,
      LogarithmicScale,
      RadialLinearScale,
      TimeScale,
      TimeSeriesScale,
      Decimation,
      Filler,
      Legend,
      Title,
      Tooltip
    } from 'chart.js';
    Chart.register(
      ArcElement,
      LineElement,
      BarElement,
      PointElement,
      BarController,
      BubbleController,
      DoughnutController,
      LineController,
      PieController,
      PolarAreaController,
      RadarController,
      ScatterController,
      CategoryScale,
      LinearScale,
      LogarithmicScale,
      RadialLinearScale,
      TimeScale,
      TimeSeriesScale,
      Decimation,
      Filler,
      Legend,
      Title,
      Tooltip
    );
    var myChart = new Chart(ctx, {...});

A short registration format is also available to quickly register everything.

    import { Chart, registerables } from 'chart.js';
    Chart.register(...registerables);

And finally there is an separate path to do just the above for you, in one line:

    import Chart from 'chart.js/auto';

<a href="#require-js" class="header-anchor">#</a> Require JS
------------------------------------------------------------

**Important:** RequireJS [can **not** load CommonJS module as is <span class="sr-only">(opens new window)</span>](https://requirejs.org/docs/commonjs.html#intro), so be sure to require one of the UMD builds instead (i.e. `dist/chart.js`, `dist/chart.min.js`, etc.).

    require(['path/to/chartjs/dist/chart.min.js'], function(Chart){
        var myChart = new Chart(ctx, {...});
    });

**Note:** in order to use the time scale, you need to make sure [one of the available date adapters <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/awesome#adapters) and corresponding date library are fully loaded **after** requiring Chart.js. For this you can use nested requires:

    require(['chartjs'], function(Chart) {
        require(['moment'], function() {
            require(['chartjs-adapter-moment'], function() {
                new Chart(ctx, {...});
            });
        });
    });

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/getting-started/installation.html" class="prev">Installation</a> </span> <span class="next"> [Usage](/docs/3.2.0/getting-started/usage.html) → </span>
