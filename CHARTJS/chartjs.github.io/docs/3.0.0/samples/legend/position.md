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

-   Legend <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/samples/legend/position.html" class="active sidebar-link">Position</a>
    -   <a href="/docs/3.0.0/samples/legend/title.html" class="sidebar-link">Alignment and Title Position</a>
    -   <a href="/docs/3.0.0/samples/legend/point-style.html" class="sidebar-link">Point Style</a>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

<a href="#position" class="header-anchor">#</a> Position
========================================================

This sample show how to change the position of the chart legend.

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/legend/position.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, };

    const config = {
      type: 'line',
      data: data,
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: -100, max: 100}; const data = { labels: Utils.months({count: DATA\_COUNT}), datasets: \[ { label: 'Dataset 1', data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
    const data = {
      labels: Utils.months({count: DATA_COUNT}),
      datasets: [
        {
          label: 'Dataset 1',
          data: Utils.numbers(NUMBER_CFG),
          fill: false,
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        },
      ]
    };

const actions = \[ { name: 'Position: top', handler(chart) { chart.options.plugins.legend.position = 'top'; chart.update(); } }, { name: 'Position: right', handler(chart) { chart.options.plugins.legend.position = 'right'; chart.update(); } }, { name: 'Position: bottom', handler(chart) { chart.options.plugins.legend.position = 'bottom'; chart.update(); } }, { name: 'Position: left', handler(chart) { chart.options.plugins.legend.position = 'left'; chart.update(); } }, \];

    const actions = [
      {
        name: 'Position: top',
        handler(chart) {
          chart.options.plugins.legend.position = 'top';
          chart.update();
        }
      },
      {
        name: 'Position: right',
        handler(chart) {
          chart.options.plugins.legend.position = 'right';
          chart.update();
        }
      },
      {
        name: 'Position: bottom',
        handler(chart) {
          chart.options.plugins.legend.position = 'bottom';
          chart.update();
        }
      },
      {
        name: 'Position: left',
        handler(chart) {
          chart.options.plugins.legend.position = 'left';
          chart.update();
        }
      },
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 8:04:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/samples/scale-options/center.html" class="prev">Center Positioning</a> </span> <span class="next"> [Alignment and Title Position](/docs/3.0.0/samples/legend/title.html) → </span>