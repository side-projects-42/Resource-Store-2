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

    -   <a href="/docs/3.2.0/samples/advanced/data-decimation.html" class="sidebar-link">Data Decimation</a>
    -   <a href="/docs/3.2.0/samples/advanced/progress-bar.html" class="sidebar-link">Animation Progress Bar</a>
    -   <a href="/docs/3.2.0/samples/advanced/radial-gradient.html" class="sidebar-link">Radial Gradient</a>
    -   <a href="/docs/3.2.0/samples/advanced/linear-gradient.html" class="active sidebar-link">Linear Gradient</a>
    -   <a href="/docs/3.2.0/samples/advanced/programmatic-events.html" class="sidebar-link">Programmatic Event Triggers</a>
    -   <a href="/docs/3.2.0/samples/advanced/derived-axis-type.html" class="sidebar-link">Derived Axis Type</a>
    -   <a href="/docs/3.2.0/samples/advanced/derived-chart-type.html" class="sidebar-link">Derived Chart Type</a>

-   Plugins <span class="arrow right"></span>

<a href="#linear-gradient" class="header-anchor">#</a> Linear Gradient
======================================================================

getGradient

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/advanced/linear-gradient.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

let width, height, gradient; function getGradient(ctx, chartArea) { const chartWidth = chartArea.right - chartArea.left; const chartHeight = chartArea.bottom - chartArea.top; if (gradient === null || width !== chartWidth || height !== chartHeight) { // Create the gradient because this is either the first render // or the size of the chart has changed width = chartWidth; height = chartHeight; gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top); gradient.addColorStop(0, Utils.CHART\_COLORS.blue); gradient.addColorStop(0.5, Utils.CHART\_COLORS.yellow); gradient.addColorStop(1, Utils.CHART\_COLORS.red); } return gradient; }

    let width, height, gradient;
    function getGradient(ctx, chartArea) {
      const chartWidth = chartArea.right - chartArea.left;
      const chartHeight = chartArea.bottom - chartArea.top;
      if (gradient === null || width !== chartWidth || height !== chartHeight) {
        // Create the gradient because this is either the first render
        // or the size of the chart has changed
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, Utils.CHART_COLORS.blue);
        gradient.addColorStop(0.5, Utils.CHART_COLORS.yellow);
        gradient.addColorStop(1, Utils.CHART_COLORS.red);
      }
      return gradient;
    }

const config = { type: 'line', data: data, options: { responsive: true, plugins: { legend: { position: 'top', }, } }, };

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        }
      },
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: -100, max: 100}; const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[ { label: 'Dataset 1', data: Utils.numbers(NUMBER\_CFG), borderColor: function(context) { const chart = context.chart; const {ctx, chartArea} = chart; if (!chartArea) { // This case happens on initial chart load return null; } return getGradient(ctx, chartArea); }, }, \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: Utils.numbers(NUMBER_CFG),
          borderColor: function(context) {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
            if (!chartArea) {
              // This case happens on initial chart load
              return null;
            }
            return getGradient(ctx, chartArea);
          },
        },
      ]
    };

const actions = \[ { name: 'Randomize', handler(chart) { chart.data.datasets.forEach(dataset =&gt; { dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100}); }); chart.update(); } }, { name: 'Add Data', handler(chart) { const data = chart.data; if (data.datasets.length &gt; 0) { data.labels = Utils.months({count: data.labels.length + 1}); for (var index = 0; index &lt; data.datasets.length; ++index) { data.datasets\[index\].data.push(Utils.rand(-100, 100)); } chart.update(); } } }, { name: 'Remove Data', handler(chart) { chart.data.labels.splice(-1, 1); // remove the label first chart.data.datasets.forEach(dataset =&gt; { dataset.data.pop(); }); chart.update(); } } \];

    const actions = [
      {
        name: 'Randomize',
        handler(chart) {
          chart.data.datasets.forEach(dataset => {
            dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
          });
          chart.update();
        }
      },
      {
        name: 'Add Data',
        handler(chart) {
          const data = chart.data;
          if (data.datasets.length > 0) {
            data.labels = Utils.months({count: data.labels.length + 1});
            for (var index = 0; index < data.datasets.length; ++index) {
              data.datasets[index].data.push(Utils.rand(-100, 100));
            }
            chart.update();
          }
        }
      },
      {
        name: 'Remove Data',
        handler(chart) {
          chart.data.labels.splice(-1, 1); // remove the label first
          chart.data.datasets.forEach(dataset => {
            dataset.data.pop();
          });
          chart.update();
        }
      }
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/advanced/radial-gradient.html" class="prev">Radial Gradient</a> </span> <span class="next"> [Programmatic Event Triggers](/docs/3.2.0/samples/advanced/programmatic-events.html) → </span>
