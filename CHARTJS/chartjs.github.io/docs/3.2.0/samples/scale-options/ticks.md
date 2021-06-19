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
    -   <a href="/docs/3.2.0/samples/scale-options/ticks.html" class="active sidebar-link">Tick Configuration</a>
    -   <a href="/docs/3.2.0/samples/scale-options/titles.html" class="sidebar-link">Title Configuration</a>
    -   <a href="/docs/3.2.0/samples/scale-options/center.html" class="sidebar-link">Center Positioning</a>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#tick-configuration" class="header-anchor">#</a> Tick Configuration
============================================================================

This sample shows how to use different tick features to control how tick labels are shown on the X axis. These features include:

-   Multi-line labels
-   Filtering labels
-   Changing the tick color
-   Changing the tick alignment for the X axis

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/scale-options/ticks.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { responsive: true, plugins: { title: { display: true, text: 'Chart with Tick Configuration' } }, scales: { x: { ticks: { // For a category axis, the val is the index so the lookup via getLabelForValue is needed callback: function(val, index) { // Hide the label of every 2nd dataset return index % 2 === 0 ? this.getLabelForValue(val) : ''; }, color: 'red', } } } }, };

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart with Tick Configuration'
          }
        },
        scales: {
          x: {
            ticks: {
              // For a category axis, the val is the index so the lookup via getLabelForValue is needed
              callback: function(val, index) {
                // Hide the label of every 2nd dataset
                return index % 2 === 0 ? this.getLabelForValue(val) : '';
              },
              color: 'red',
            }
          }
        }
      },
    };

const DATA\_COUNT = 12; const NUMBER\_CFG = {count: DATA\_COUNT, min: 0, max: 100}; const data = { labels: \[\['June', '2015'\], 'July', 'August', 'September', 'October', 'November', 'December', \['January', '2016'\], 'February', 'March', 'April', 'May'\], datasets: \[ { label: 'Dataset 1', data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: 'Dataset 2', data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), } \] };

    const DATA_COUNT = 12;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
    const data = {
      labels: [['June', '2015'], 'July', 'August', 'September', 'October', 'November', 'December', ['January', '2016'], 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Dataset 1',
          data: Utils.numbers(NUMBER_CFG),
          fill: false,
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        },
        {
          label: 'Dataset 2',
          data: Utils.numbers(NUMBER_CFG),
          fill: false,
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        }
      ]
    };

const actions = \[ { name: 'Alignment: start', handler(chart) { chart.options.scales.x.ticks.align = 'start'; chart.update(); } }, { name: 'Alignment: center (default)', handler(chart) { chart.options.scales.x.ticks.align = 'center'; chart.update(); } }, { name: 'Alignment: end', handler(chart) { chart.options.scales.x.ticks.align = 'end'; chart.update(); } }, \];

    const actions = [
      {
        name: 'Alignment: start',
        handler(chart) {
          chart.options.scales.x.ticks.align = 'start';
          chart.update();
        }
      },
      {
        name: 'Alignment: center (default)',
        handler(chart) {
          chart.options.scales.x.ticks.align = 'center';
          chart.update();
        }
      },
      {
        name: 'Alignment: end',
        handler(chart) {
          chart.options.scales.x.ticks.align = 'end';
          chart.update();
        }
      },
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/scale-options/grid.html" class="prev">Grid Configuration</a> </span> <span class="next"> [Title Configuration](/docs/3.2.0/samples/scale-options/titles.html) → </span>
