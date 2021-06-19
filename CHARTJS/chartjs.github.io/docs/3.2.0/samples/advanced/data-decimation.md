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

-   Scale Options <span class="arrow right"></span>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/advanced/data-decimation.html" class="active sidebar-link">Data Decimation</a>
    -   <a href="/docs/3.2.0/samples/advanced/progress-bar.html" class="sidebar-link">Animation Progress Bar</a>
    -   <a href="/docs/3.2.0/samples/advanced/radial-gradient.html" class="sidebar-link">Radial Gradient</a>
    -   <a href="/docs/3.2.0/samples/advanced/linear-gradient.html" class="sidebar-link">Linear Gradient</a>
    -   <a href="/docs/3.2.0/samples/advanced/programmatic-events.html" class="sidebar-link">Programmatic Event Triggers</a>
    -   <a href="/docs/3.2.0/samples/advanced/derived-axis-type.html" class="sidebar-link">Derived Axis Type</a>
    -   <a href="/docs/3.2.0/samples/advanced/derived-chart-type.html" class="sidebar-link">Derived Chart Type</a>

-   Plugins <span class="arrow right"></span>

<a href="#data-decimation" class="header-anchor">#</a> Data Decimation
======================================================================

This example shows how to use the built-in data decimation to reduce the number of points drawn on the graph for improved performance.

decimation

data

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/advanced/data-decimation.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const decimation = { enabled: false, algorithm: 'min-max', };

    const decimation = {
      enabled: false,
      algorithm: 'min-max',
    };

const NUM\_POINTS = 100000; Utils.srand(10); // parseISODate returns a luxon date object to work with in the samples // We will create points every 30s starting from this point in time const start = Utils.parseISODate('2021-04-01T00:00:00Z').toMillis(); const pointData = \[\]; for (let i = 0; i &lt; NUM\_POINTS; ++i) { // Most data will be in the range \[0, 20) but some rare data will be in the range \[0, 100) const max = Math.random() &lt; 0.001 ? 100 : 20; pointData.push({x: start + (i \* 30000), y: Utils.rand(0, max)}); } const data = { datasets: \[{ borderColor: Utils.CHART\_COLORS.red, borderWidth: 1, data: pointData, label: 'Large Dataset', radius: 0, }\] };

    const NUM_POINTS = 100000;
    Utils.srand(10);
    // parseISODate returns a luxon date object to work with in the samples
    // We will create points every 30s starting from this point in time
    const start = Utils.parseISODate('2021-04-01T00:00:00Z').toMillis();
    const pointData = [];
    for (let i = 0; i < NUM_POINTS; ++i) {
      // Most data will be in the range [0, 20) but some rare data will be in the range [0, 100)
      const max = Math.random() < 0.001 ? 100 : 20;
      pointData.push({x: start + (i * 30000), y: Utils.rand(0, max)});
    }
    const data = {
      datasets: [{
        borderColor: Utils.CHART_COLORS.red,
        borderWidth: 1,
        data: pointData,
        label: 'Large Dataset',
        radius: 0,
      }]
    };

const config = { type: 'line', data: data, options: { // Turn off animations and data parsing for performance animation: false, parsing: false, interaction: { mode: 'nearest', axis: 'x', intersect: false }, plugins: { decimation: decimation, }, scales: { x: { type: 'time', ticks: { source: 'auto', // Disabled rotation for performance maxRotation: 0, autoSkip: true, } } } } };

    const config = {
      type: 'line',
      data: data,
      options: {
        // Turn off animations and data parsing for performance
        animation: false,
        parsing: false,
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        },
        plugins: {
          decimation: decimation,
        },
        scales: {
          x: {
            type: 'time',
            ticks: {
              source: 'auto',
              // Disabled rotation for performance
              maxRotation: 0,
              autoSkip: true,
            }
          }
        }
      }
    };

const actions = \[ { name: 'No decimation (default)', handler(chart) { chart.options.plugins.decimation.enabled = false; chart.update(); } }, { name: 'min-max decimation', handler(chart) { chart.options.plugins.decimation.algorithm = 'min-max'; chart.options.plugins.decimation.enabled = true; chart.update(); }, }, { name: 'LTTB decimation (50 samples)', handler(chart) { chart.options.plugins.decimation.algorithm = 'lttb'; chart.options.plugins.decimation.enabled = true; chart.options.plugins.decimation.samples = 50; chart.update(); } }, { name: 'LTTB decimation (500 samples)', handler(chart) { chart.options.plugins.decimation.algorithm = 'lttb'; chart.options.plugins.decimation.enabled = true; chart.options.plugins.decimation.samples = 500; chart.update(); } } \];

    const actions = [
      {
        name: 'No decimation (default)',
        handler(chart) {
          chart.options.plugins.decimation.enabled = false;
          chart.update();
        }
      },
      {
        name: 'min-max decimation',
        handler(chart) {
          chart.options.plugins.decimation.algorithm = 'min-max';
          chart.options.plugins.decimation.enabled = true;
          chart.update();
        },
      },
      {
        name: 'LTTB decimation (50 samples)',
        handler(chart) {
          chart.options.plugins.decimation.algorithm = 'lttb';
          chart.options.plugins.decimation.enabled = true;
          chart.options.plugins.decimation.samples = 50;
          chart.update();
        }
      },
      {
        name: 'LTTB decimation (500 samples)',
        handler(chart) {
          chart.options.plugins.decimation.algorithm = 'lttb';
          chart.options.plugins.decimation.enabled = true;
          chart.options.plugins.decimation.samples = 500;
          chart.update();
        }
      }
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/animations/progressive-line.html" class="prev">Progressive Line</a> </span> <span class="next"> [Animation Progress Bar](/docs/3.2.0/samples/advanced/progress-bar.html) → </span>
