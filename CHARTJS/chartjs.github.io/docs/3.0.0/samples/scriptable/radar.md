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

-   Scriptable Options <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/samples/scriptable/bar.html" class="sidebar-link">Bar Chart</a>
    -   <a href="/docs/3.0.0/samples/scriptable/bubble.html" class="sidebar-link">Bubble Chart</a>
    -   <a href="/docs/3.0.0/samples/scriptable/pie.html" class="sidebar-link">Pie Chart</a>
    -   <a href="/docs/3.0.0/samples/scriptable/line.html" class="sidebar-link">Line Chart</a>
    -   <a href="/docs/3.0.0/samples/scriptable/polar.html" class="sidebar-link">Polar Area Chart</a>
    -   <a href="/docs/3.0.0/samples/scriptable/radar.html" class="active sidebar-link">Radar Chart</a>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

<a href="#radar-chart" class="header-anchor">#</a> Radar Chart
==============================================================

options

data

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/scriptable/radar.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

function getLineColor(ctx) { return Utils.color(ctx.datasetIndex); } function alternatePointStyles(ctx) { var index = ctx.dataIndex; return index % 2 === 0 ? 'circle' : 'rect'; } function makeHalfAsOpaque(ctx) { return Utils.transparentize(getLineColor(ctx)); } function make20PercentOpaque(ctx) { return Utils.transparentize(getLineColor(ctx), 0.8); } function adjustRadiusBasedOnData(ctx) { var v = ctx.parsed.y; return v &lt; 10 ? 5 : v &lt; 25 ? 7 : v &lt; 50 ? 9 : v &lt; 75 ? 11 : 15; } const config = { type: 'radar', data: data, options: { plugins: { legend: false, tooltip: false, }, elements: { line: { backgroundColor: make20PercentOpaque, borderColor: getLineColor, }, point: { backgroundColor: getLineColor, hoverBackgroundColor: makeHalfAsOpaque, radius: adjustRadiusBasedOnData, pointStyle: alternatePointStyles, hoverRadius: 15, } } } };

    function getLineColor(ctx) {
      return Utils.color(ctx.datasetIndex);
    }
    function alternatePointStyles(ctx) {
      var index = ctx.dataIndex;
      return index % 2 === 0 ? 'circle' : 'rect';
    }
    function makeHalfAsOpaque(ctx) {
      return Utils.transparentize(getLineColor(ctx));
    }
    function make20PercentOpaque(ctx) {
      return Utils.transparentize(getLineColor(ctx), 0.8);
    }
    function adjustRadiusBasedOnData(ctx) {
      var v = ctx.parsed.y;
      return v < 10 ? 5
        : v < 25 ? 7
        : v < 50 ? 9
        : v < 75 ? 11
        : 15;
    }
    const config = {
      type: 'radar',
      data: data,
      options: {
        plugins: {
          legend: false,
          tooltip: false,
        },
        elements: {
          line: {
            backgroundColor: make20PercentOpaque,
            borderColor: getLineColor,
          },
          point: {
            backgroundColor: getLineColor,
            hoverBackgroundColor: makeHalfAsOpaque,
            radius: adjustRadiusBasedOnData,
            pointStyle: alternatePointStyles,
            hoverRadius: 15,
          }
        }
      }
    };

function generateData() { return Utils.numbers({ count: DATA\_COUNT, min: 0, max: 100 }); } const data = { labels: \[\['Eating', 'Dinner'\], \['Drinking', 'Water'\], 'Sleeping', \['Designing', 'Graphics'\], 'Coding', 'Cycling', 'Running'\], datasets: \[{ data: generateData() }\] };

    function generateData() {
      return Utils.numbers({
        count: DATA_COUNT,
        min: 0,
        max: 100
      });
    }
    const data = {
      labels: [['Eating', 'Dinner'], ['Drinking', 'Water'], 'Sleeping', ['Designing', 'Graphics'], 'Coding', 'Cycling', 'Running'],
      datasets: [{
        data: generateData()
      }]
    };

const DATA\_COUNT = 7; Utils.srand(110); const actions = \[ { name: 'Randomize', handler(chart) { chart.data.datasets.forEach(dataset =&gt; { dataset.data = generateData(); }); chart.update(); } }, \];

    const DATA_COUNT = 7;
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
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 8:04:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/samples/scriptable/polar.html" class="prev">Polar Area Chart</a> </span> <span class="next"> [Delay](/docs/3.0.0/samples/animations/delay.html) → </span>
