<a href="/docs/3.0.0/" class="home-link router-link-active"><img src="/docs/3.0.0/favicon.ico" alt="Chart.js" class="logo" /> <span class="site-name can-hide">Chart.js</span></a>

<a href="/docs/3.0.0/" class="nav-link">Home</a>

<a href="/docs/3.0.0/api/" class="nav-link">API</a>

<a href="/docs/3.0.0/samples/" class="nav-link router-link-active">Samples</a>

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

<a href="/docs/3.0.0/samples/" class="nav-link router-link-active">Samples</a>

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

-   Scale Options <span class="arrow right"></span>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/samples/tooltip/position.html" class="sidebar-link">Position</a>
    -   <a href="/docs/3.0.0/samples/tooltip/interactions.html" class="sidebar-link">Interaction Modes</a>
    -   <a href="/docs/3.0.0/samples/tooltip/point-style.html" class="active sidebar-link">Point Style</a>
    -   <a href="/docs/3.0.0/samples/tooltip/content.html" class="sidebar-link">Custom Tooltip Content</a>
    -   <a href="/docs/3.0.0/samples/tooltip/html.html" class="sidebar-link">External HTML Tooltip</a>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

<a href="#point-style" class="header-anchor">#</a> Point Style
==============================================================

This sample shows how to use the dataset point style in the tooltip instead of a rectangle to identify each dataset.

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/tooltip/point-style.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { interaction: { mode: 'index', }, plugins: { title: { display: true, text: (ctx) =&gt; 'Tooltip point style: ' + ctx.chart.options.plugins.tooltip.usePointStyle, }, tooltip: { usePointStyle: true, } } } };

    const config = {
      type: 'line',
      data: data,
      options: {
        interaction: {
          mode: 'index',
        },
        plugins: {
          title: {
            display: true,
            text: (ctx) => 'Tooltip point style: ' + ctx.chart.options.plugins.tooltip.usePointStyle,
          },
          tooltip: {
            usePointStyle: true,
          }
        }
      }
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: -100, max: 100}; const data = { labels: Utils.months({count: DATA\_COUNT}), datasets: \[ { label: 'Triangles', data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), pointStyle: 'triangle', pointRadius: 6, }, { label: 'Circles', data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), pointStyle: 'circle', pointRadius: 6, }, { label: 'Stars', data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.green, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.green, 0.5), pointStyle: 'star', pointRadius: 6, } \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
    const data = {
      labels: Utils.months({count: DATA_COUNT}),
      datasets: [
        {
          label: 'Triangles',
          data: Utils.numbers(NUMBER_CFG),
          fill: false,
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
          pointStyle: 'triangle',
          pointRadius: 6,
        },
        {
          label: 'Circles',
          data: Utils.numbers(NUMBER_CFG),
          fill: false,
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
          pointStyle: 'circle',
          pointRadius: 6,
        },
        {
          label: 'Stars',
          data: Utils.numbers(NUMBER_CFG),
          fill: false,
          borderColor: Utils.CHART_COLORS.green,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
          pointStyle: 'star',
          pointRadius: 6,
        }
      ]
    };

const actions = \[ { name: 'Toggle Tooltip Point Style', handler(chart) { chart.options.plugins.tooltip.usePointStyle = !chart.options.plugins.tooltip.usePointStyle; chart.update(); } }, \];

    const actions = [
      {
        name: 'Toggle Tooltip Point Style',
        handler(chart) {
          chart.options.plugins.tooltip.usePointStyle = !chart.options.plugins.tooltip.usePointStyle;
          chart.update();
        }
      },
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 8:04:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/samples/tooltip/interactions.html" class="prev">Interaction Modes</a> </span> <span class="next"> [Custom Tooltip Content](/docs/3.0.0/samples/tooltip/content.html) → </span>
