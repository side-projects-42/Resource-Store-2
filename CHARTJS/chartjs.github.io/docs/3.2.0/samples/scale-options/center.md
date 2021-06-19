<a href="/docs/3.2.0/" class="home-link router-link-active"><img src="/docs/3.2.0/favicon.ico" alt="Chart.js" class="logo" /> <span class="site-name can-hide">Chart.js</span></a>

<a href="/docs/3.2.0/" class="nav-link">Home</a>

<a href="/docs/3.2.0/api/" class="nav-link">API</a>

<a href="/docs/3.2.0/samples/" class="nav-link router-link-active">Samples</a>

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

<a href="/docs/3.2.0/samples/" class="nav-link router-link-active">Samples</a>

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

-   Bar Charts <span class="arrow right"></span>

-   Line Charts <span class="arrow right"></span>

-   Other charts <span class="arrow right"></span>

-   Area charts <span class="arrow right"></span>

-   Scales <span class="arrow right"></span>

-   Scale Options <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/scale-options/grid.html" class="sidebar-link">Grid Configuration</a>
    -   <a href="/docs/3.2.0/samples/scale-options/ticks.html" class="sidebar-link">Tick Configuration</a>
    -   <a href="/docs/3.2.0/samples/scale-options/titles.html" class="sidebar-link">Title Configuration</a>
    -   <a href="/docs/3.2.0/samples/scale-options/center.html" class="active sidebar-link">Center Positioning</a>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#center-positioning" class="header-anchor">#</a> Center Positioning
============================================================================

This sample show how to place the axis in the center of the chart area, instead of at the edges.

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/scale-options/center.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'scatter', data: data, options: { responsive: true, plugins: { title: { display: true, text: 'Axis Center Positioning' } }, scales: { x: { min: -100, max: 100, }, y: { min: -100, max: 100, } } }, };

    const config = {
      type: 'scatter',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Axis Center Positioning'
          }
        },
        scales: {
          x: {
            min: -100,
            max: 100,
          },
          y: {
            min: -100,
            max: 100,
          }
        }
      },
    };

const DATA\_COUNT = 6; const NUMBER\_CFG = {count: DATA\_COUNT, min: -100, max: 100}; const data = { datasets: \[ { label: 'Dataset 1', data: Utils.points(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: 'Dataset 2', data: Utils.points(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), } \] };

    const DATA_COUNT = 6;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
    const data = {
      datasets: [
        {
          label: 'Dataset 1',
          data: Utils.points(NUMBER_CFG),
          fill: false,
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        },
        {
          label: 'Dataset 2',
          data: Utils.points(NUMBER_CFG),
          fill: false,
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        }
      ]
    };

const actions = \[ { name: 'Default Positions', handler(chart) { chart.options.scales.x.position = 'bottom'; chart.options.scales.y.position = 'left'; chart.update(); } }, { name: 'Position: center', handler(chart) { chart.options.scales.x.position = 'center'; chart.options.scales.y.position = 'center'; chart.update(); } }, { name: 'Position: Vertical: x=-60, Horizontal: y=30', handler(chart) { chart.options.scales.x.position = {y: 30}; chart.options.scales.y.position = {x: -60}; chart.update(); } }, \];

    const actions = [
      {
        name: 'Default Positions',
        handler(chart) {
          chart.options.scales.x.position = 'bottom';
          chart.options.scales.y.position = 'left';
          chart.update();
        }
      },
      {
        name: 'Position: center',
        handler(chart) {
          chart.options.scales.x.position = 'center';
          chart.options.scales.y.position = 'center';
          chart.update();
        }
      },
      {
        name: 'Position: Vertical: x=-60, Horizontal: y=30',
        handler(chart) {
          chart.options.scales.x.position = {y: 30};
          chart.options.scales.y.position = {x: -60};
          chart.update();
        }
      },
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/scale-options/titles.html" class="prev">Title Configuration</a> </span> <span class="next"> [Position](/docs/3.2.0/samples/legend/position.html) → </span>
