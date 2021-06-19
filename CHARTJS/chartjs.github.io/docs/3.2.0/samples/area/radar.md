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

    -   <a href="/docs/3.2.0/samples/area/line-boundaries.html" class="sidebar-link">Line Chart Boundaries</a>
    -   <a href="/docs/3.2.0/samples/area/line-datasets.html" class="sidebar-link">Line Chart Datasets</a>
    -   <a href="/docs/3.2.0/samples/area/line-drawtime.html" class="sidebar-link">Line Chart drawTime</a>
    -   <a href="/docs/3.2.0/samples/area/line-stacked.html" class="sidebar-link">Line Chart Stacked</a>
    -   <a href="/docs/3.2.0/samples/area/radar.html" class="active sidebar-link">Radar Chart Stacked</a>

-   Scales <span class="arrow right"></span>

-   Scale Options <span class="arrow right"></span>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#radar-chart-stacked" class="header-anchor">#</a> Radar Chart Stacked
==============================================================================

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/area/radar.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'radar', data: data, options: { plugins: { filler: { propagate: false }, 'samples-filler-analyser': { target: 'chart-analyser' } }, interaction: { intersect: false } } };

    const config = {
      type: 'radar',
      data: data,
      options: {
        plugins: {
          filler: {
            propagate: false
          },
          'samples-filler-analyser': {
            target: 'chart-analyser'
          }
        },
        interaction: {
          intersect: false
        }
      }
    };

const inputs = { min: 8, max: 16, count: 8, decimals: 2, continuity: 1 }; const generateLabels = () =&gt; { return Utils.months({count: inputs.count}); }; const generateData = () =&gt; { const values = Utils.numbers(inputs); inputs.from = values; return values; }; const labels = Utils.months({count: 8}); const data = { labels: generateLabels(), datasets: \[ { label: 'D0', data: generateData(), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red), }, { label: 'D1', data: generateData(), borderColor: Utils.CHART\_COLORS.orange, hidden: true, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.orange), fill: '-1' }, { label: 'D2', data: generateData(), borderColor: Utils.CHART\_COLORS.yellow, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.yellow), fill: 1 }, { label: 'D3', data: generateData(), borderColor: Utils.CHART\_COLORS.green, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.green), fill: false }, { label: 'D4', data: generateData(), borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue), fill: '-1' }, { label: 'D5', data: generateData(), borderColor: Utils.CHART\_COLORS.purple, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.purple), fill: '-1' }, { label: 'D6', data: generateData(), borderColor: Utils.CHART\_COLORS.grey, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.grey), fill: {value: 85} } \] };

    const inputs = {
      min: 8,
      max: 16,
      count: 8,
      decimals: 2,
      continuity: 1
    };
    const generateLabels = () => {
      return Utils.months({count: inputs.count});
    };
    const generateData = () => {
      const values = Utils.numbers(inputs);
      inputs.from = values;
      return values;
    };
    const labels = Utils.months({count: 8});
    const data = {
      labels: generateLabels(),
      datasets: [
        {
          label: 'D0',
          data: generateData(),
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red),
        },
        {
          label: 'D1',
          data: generateData(),
          borderColor: Utils.CHART_COLORS.orange,
          hidden: true,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.orange),
          fill: '-1'
        },
        {
          label: 'D2',
          data: generateData(),
          borderColor: Utils.CHART_COLORS.yellow,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.yellow),
          fill: 1
        },
        {
          label: 'D3',
          data: generateData(),
          borderColor: Utils.CHART_COLORS.green,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green),
          fill: false
        },
        {
          label: 'D4',
          data: generateData(),
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue),
          fill: '-1'
        },
        {
          label: 'D5',
          data: generateData(),
          borderColor: Utils.CHART_COLORS.purple,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.purple),
          fill: '-1'
        },
        {
          label: 'D6',
          data: generateData(),
          borderColor: Utils.CHART_COLORS.grey,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.grey),
          fill: {value: 85}
        }
      ]
    };

let smooth = false; let propagate = false; const actions = \[ { name: 'Randomize', handler(chart) { inputs.from = \[\]; chart.data.datasets.forEach(dataset =&gt; { dataset.data = generateData(); }); chart.update(); } }, { name: 'Propagate', handler(chart) { propagate = !propagate; chart.options.plugins.filler.propagate = propagate; chart.update(); } }, { name: 'Smooth', handler(chart) { smooth = !smooth; chart.options.elements.line.tension = smooth ? 0.4 : 0; chart.update(); } } \];

    let smooth = false;
    let propagate = false;
    const actions = [
      {
        name: 'Randomize',
        handler(chart) {
          inputs.from = [];
          chart.data.datasets.forEach(dataset => {
            dataset.data = generateData();
          });
          chart.update();
        }
      },
      {
        name: 'Propagate',
        handler(chart) {
          propagate = !propagate;
          chart.options.plugins.filler.propagate = propagate;
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

<span class="prev"> ← <a href="/docs/3.2.0/samples/area/line-stacked.html" class="prev">Line Chart Stacked</a> </span> <span class="next"> [Linear Scale - Min-Max](/docs/3.2.0/samples/scales/linear-min-max.html) → </span>
