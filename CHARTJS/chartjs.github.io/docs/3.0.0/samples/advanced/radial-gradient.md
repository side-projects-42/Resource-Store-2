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

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/samples/advanced/progress-bar.html" class="sidebar-link">Animation Progress Bar</a>
    -   <a href="/docs/3.0.0/samples/advanced/radial-gradient.html" class="active sidebar-link">Radial Gradient</a>
    -   <a href="/docs/3.0.0/samples/advanced/linear-gradient.html" class="sidebar-link">Linear Gradient</a>
    -   <a href="/docs/3.0.0/samples/advanced/programmatic-events.html" class="sidebar-link">Programmatic Event Triggers</a>
    -   <a href="/docs/3.0.0/samples/advanced/derived-axis-type.html" class="sidebar-link">Derived Axis Type</a>
    -   <a href="/docs/3.0.0/samples/advanced/derived-chart-type.html" class="sidebar-link">Derived Chart Type</a>

<a href="#radial-gradient" class="header-anchor">#</a> Radial Gradient
======================================================================

createRadialGradient3

config

data

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/advanced/radial-gradient.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

function createRadialGradient3(context, c1, c2, c3) { const chartArea = context.chart.chartArea; if (!chartArea) { // This case happens on initial chart load return null; } const chartWidth = chartArea.right - chartArea.left; const chartHeight = chartArea.bottom - chartArea.top; if (width !== chartWidth || height !== chartHeight) { cache.clear(); } var gradient = cache.get(c1 + c2 + c3); if (!gradient) { // Create the gradient because this is either the first render // or the size of the chart has changed width = chartWidth; height = chartHeight; const centerX = (chartArea.left + chartArea.right) / 2; const centerY = (chartArea.top + chartArea.bottom) / 2; const r = Math.min( (chartArea.right - chartArea.left) / 2, (chartArea.bottom - chartArea.top) / 2 ); var ctx = context.chart.ctx; gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, r); gradient.addColorStop(0, c1); gradient.addColorStop(0.5, c2); gradient.addColorStop(1, c3); cache.set(c1 + c2 + c3, gradient); } return gradient; }

    function createRadialGradient3(context, c1, c2, c3) {
      const chartArea = context.chart.chartArea;
      if (!chartArea) {
        // This case happens on initial chart load
        return null;
      }
      const chartWidth = chartArea.right - chartArea.left;
      const chartHeight = chartArea.bottom - chartArea.top;
      if (width !== chartWidth || height !== chartHeight) {
        cache.clear();
      }
      var gradient = cache.get(c1 + c2 + c3);
      if (!gradient) {
        // Create the gradient because this is either the first render
        // or the size of the chart has changed
        width = chartWidth;
        height = chartHeight;
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;
        const r = Math.min(
          (chartArea.right - chartArea.left) / 2,
          (chartArea.bottom - chartArea.top) / 2
        );
        var ctx = context.chart.ctx;
        gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, r);
        gradient.addColorStop(0, c1);
        gradient.addColorStop(0.5, c2);
        gradient.addColorStop(1, c3);
        cache.set(c1 + c2 + c3, gradient);
      }
      return gradient;
    }

const config = { type: 'polarArea', data: data, options: { plugins: { legend: false, tooltip: false, }, elements: { arc: { backgroundColor: function(context) { let c = colors\[context.dataIndex\]; if (!c) { return; } if (context.active) { c = helpers.getHoverColor(c); } const mid = helpers.color(c).desaturate(0.2).darken(0.2).rgbString(); const start = helpers.color(c).lighten(0.2).rotate(270).rgbString(); const end = helpers.color(c).lighten(0.1).rgbString(); return createRadialGradient3(context, start, mid, end); }, } } } };

    const config = {
      type: 'polarArea',
      data: data,
      options: {
        plugins: {
          legend: false,
          tooltip: false,
        },
        elements: {
          arc: {
            backgroundColor: function(context) {
              let c = colors[context.dataIndex];
              if (!c) {
                return;
              }
              if (context.active) {
                c = helpers.getHoverColor(c);
              }
              const mid = helpers.color(c).desaturate(0.2).darken(0.2).rgbString();
              const start = helpers.color(c).lighten(0.2).rotate(270).rgbString();
              const end = helpers.color(c).lighten(0.1).rgbString();
              return createRadialGradient3(context, start, mid, end);
            },
          }
        }
      }
    };

function generateData() { return Utils.numbers({ count: DATA\_COUNT, min: 0, max: 100 }); } const data = { labels: Utils.months({count: DATA\_COUNT}), datasets: \[{ data: generateData() }\] };

    function generateData() {
      return Utils.numbers({
        count: DATA_COUNT,
        min: 0,
        max: 100
      });
    }
    const data = {
      labels: Utils.months({count: DATA_COUNT}),
      datasets: [{
        data: generateData()
      }]
    };

const DATA\_COUNT = 5; Utils.srand(110); const chartColors = Utils.CHART\_COLORS; const colors = \[chartColors.red, chartColors.orange, chartColors.yellow, chartColors.green, chartColors.blue\]; const cache = new Map(); let width = null; let height = null; const actions = \[ { name: 'Randomize', handler(chart) { chart.data.datasets.forEach(dataset =&gt; { dataset.data = generateData(); }); chart.update(); } }, \];

    const DATA_COUNT = 5;
    Utils.srand(110);
    const chartColors = Utils.CHART_COLORS;
    const colors = [chartColors.red, chartColors.orange, chartColors.yellow, chartColors.green, chartColors.blue];
    const cache = new Map();
    let width = null;
    let height = null;
    const actions = [
      {
        name: 'Randomize',
        handler(chart) {
          chart.data.datasets.forEach(dataset => {
            dataset.data = generateData();
          });
          chart.update();
        }
      },
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 8:04:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/samples/advanced/progress-bar.html" class="prev">Animation Progress Bar</a> </span> <span class="next"> [Linear Gradient](/docs/3.0.0/samples/advanced/linear-gradient.html) → </span>
