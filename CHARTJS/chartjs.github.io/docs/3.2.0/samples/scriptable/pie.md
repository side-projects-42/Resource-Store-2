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

-   Scriptable Options <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/scriptable/bar.html" class="sidebar-link">Bar Chart</a>
    -   <a href="/docs/3.2.0/samples/scriptable/bubble.html" class="sidebar-link">Bubble Chart</a>
    -   <a href="/docs/3.2.0/samples/scriptable/pie.html" class="active sidebar-link">Pie Chart</a>
    -   <a href="/docs/3.2.0/samples/scriptable/line.html" class="sidebar-link">Line Chart</a>
    -   <a href="/docs/3.2.0/samples/scriptable/polar.html" class="sidebar-link">Polar Area Chart</a>
    -   <a href="/docs/3.2.0/samples/scriptable/radar.html" class="sidebar-link">Radar Chart</a>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#pie-chart" class="header-anchor">#</a> Pie Chart
==========================================================

options

data

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/scriptable/pie.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

function colorize(opaque, hover, ctx) { var v = ctx.parsed; var c = v &lt; -50 ? '\#D60000' : v &lt; 0 ? '\#F46300' : v &lt; 50 ? '\#0358B6' : '\#44DE28'; var opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150); return opaque ? c : Utils.transparentize(c, opacity); } function hoverColorize(ctx) { return colorize(false, true, ctx); } const config = { type: 'pie', data: data, options: { plugins: { legend: false, tooltip: false, }, elements: { arc: { backgroundColor: colorize.bind(null, false, false), hoverBackgroundColor: hoverColorize } } } };

    function colorize(opaque, hover, ctx) {
      var v = ctx.parsed;
      var c = v < -50 ? '#D60000'
        : v < 0 ? '#F46300'
        : v < 50 ? '#0358B6'
        : '#44DE28';
      var opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150);
      return opaque ? c : Utils.transparentize(c, opacity);
    }
    function hoverColorize(ctx) {
      return colorize(false, true, ctx);
    }
    const config = {
      type: 'pie',
      data: data,
      options: {
        plugins: {
          legend: false,
          tooltip: false,
        },
        elements: {
          arc: {
            backgroundColor: colorize.bind(null, false, false),
            hoverBackgroundColor: hoverColorize
          }
        }
      }
    };

function generateData() { return Utils.numbers({ count: DATA\_COUNT, min: -100, max: 100 }); } const data = { datasets: \[{ data: generateData() }\] };

    function generateData() {
      return Utils.numbers({
        count: DATA_COUNT,
        min: -100,
        max: 100
      });
    }
    const data = {
      datasets: [{
        data: generateData()
      }]
    };

const DATA\_COUNT = 5; Utils.srand(110); const actions = \[ { name: 'Randomize', handler(chart) { chart.data.datasets.forEach(dataset =&gt; { dataset.data = generateData(); }); chart.update(); } }, { name: 'Toggle Doughnut View', handler(chart) { if (chart.options.cutout) { chart.options.cutout = 0; } else { chart.options.cutout = '50%'; } chart.update(); } } \];

    const DATA_COUNT = 5;
    Utils.srand(110);
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
      {
        name: 'Toggle Doughnut View',
        handler(chart) {
          if (chart.options.cutout) {
            chart.options.cutout = 0;
          } else {
            chart.options.cutout = '50%';
          }
          chart.update();
        }
      }
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/scriptable/bubble.html" class="prev">Bubble Chart</a> </span> <span class="next"> [Line Chart](/docs/3.2.0/samples/scriptable/line.html) → </span>
