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

-   Area charts <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/area/line-boundaries.html" class="active sidebar-link">Line Chart Boundaries</a>
    -   <a href="/docs/3.2.0/samples/area/line-datasets.html" class="sidebar-link">Line Chart Datasets</a>
    -   <a href="/docs/3.2.0/samples/area/line-drawtime.html" class="sidebar-link">Line Chart drawTime</a>
    -   <a href="/docs/3.2.0/samples/area/line-stacked.html" class="sidebar-link">Line Chart Stacked</a>
    -   <a href="/docs/3.2.0/samples/area/radar.html" class="sidebar-link">Radar Chart Stacked</a>

-   Scales <span class="arrow right"></span>

-   Scale Options <span class="arrow right"></span>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#line-chart-boundaries" class="header-anchor">#</a> Line Chart Boundaries
==================================================================================

data

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/area/line-boundaries.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const data = { labels: generateLabels(), datasets: \[ { label: 'Dataset', data: generateData(), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red), fill: false } \] };

    const data = {
      labels: generateLabels(),
      datasets: [
        {
          label: 'Dataset',
          data: generateData(),
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),
          fill: false
        }
      ]
    };

const config = { type: 'line', data: data, options: { plugins: { filler: { propagate: false, }, title: { display: true, text: (ctx) =&gt; 'Fill: ' + ctx.chart.data.datasets\[0\].fill } }, interaction: { intersect: false, } }, };

    const config = {
      type: 'line',
      data: data,
      options: {
        plugins: {
          filler: {
            propagate: false,
          },
          title: {
            display: true,
            text: (ctx) => 'Fill: ' + ctx.chart.data.datasets[0].fill
          }
        },
        interaction: {
          intersect: false,
        }
      },
    };

const inputs = { min: -100, max: 100, count: 8, decimals: 2, continuity: 1 }; const generateLabels = () =&gt; { return Utils.months({count: inputs.count}); }; const generateData = () =&gt; (Utils.numbers(inputs));

    const inputs = {
      min: -100,
      max: 100,
      count: 8,
      decimals: 2,
      continuity: 1
    };
    const generateLabels = () => {
      return Utils.months({count: inputs.count});
    };
    const generateData = () => (Utils.numbers(inputs));

let smooth = false; const actions = \[ { name: 'Fill: false (default)', handler: (chart) =&gt; { chart.data.datasets.forEach(dataset =&gt; { dataset.fill = false; }); chart.update(); } }, { name: 'Fill: origin', handler: (chart) =&gt; { chart.data.datasets.forEach(dataset =&gt; { dataset.fill = 'origin'; }); chart.update(); } }, { name: 'Fill: start', handler: (chart) =&gt; { chart.data.datasets.forEach(dataset =&gt; { dataset.fill = 'start'; }); chart.update(); } }, { name: 'Fill: end', handler: (chart) =&gt; { chart.data.datasets.forEach(dataset =&gt; { dataset.fill = 'end'; }); chart.update(); } }, { name: 'Randomize', handler(chart) { chart.data.datasets.forEach(dataset =&gt; { dataset.data = generateData(); }); chart.update(); } }, { name: 'Smooth', handler(chart) { smooth = !smooth; chart.options.elements.line.tension = smooth ? 0.4 : 0; chart.update(); } } \];

    let smooth = false;
    const actions = [
      {
        name: 'Fill: false (default)',
        handler: (chart) => {
          chart.data.datasets.forEach(dataset => {
            dataset.fill = false;
          });
          chart.update();
        }
      },
      {
        name: 'Fill: origin',
        handler: (chart) => {
          chart.data.datasets.forEach(dataset => {
            dataset.fill = 'origin';
          });
          chart.update();
        }
      },
      {
        name: 'Fill: start',
        handler: (chart) => {
          chart.data.datasets.forEach(dataset => {
            dataset.fill = 'start';
          });
          chart.update();
        }
      },
      {
        name: 'Fill: end',
        handler: (chart) => {
          chart.data.datasets.forEach(dataset => {
            dataset.fill = 'end';
          });
          chart.update();
        }
      },
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
        name: 'Smooth',
        handler(chart) {
          smooth = !smooth;
          chart.options.elements.line.tension = smooth ? 0.4 : 0;
          chart.update();
        }
      }
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/other-charts/stacked-bar-line.html" class="prev">Stacked bar/line</a> </span> <span class="next"> [Line Chart Datasets](/docs/3.2.0/samples/area/line-datasets.html) → </span>
