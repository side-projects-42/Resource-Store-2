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

-   Other charts <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/other-charts/bubble.html" class="sidebar-link">Bubble</a>
    -   <a href="/docs/3.2.0/samples/other-charts/scatter.html" class="sidebar-link">Scatter</a>
    -   <a href="/docs/3.2.0/samples/other-charts/scatter-multi-axis.html" class="sidebar-link">Scatter - Multi axis</a>
    -   <a href="/docs/3.2.0/samples/other-charts/doughnut.html" class="sidebar-link">Doughnut</a>
    -   <a href="/docs/3.2.0/samples/other-charts/pie.html" class="sidebar-link">Pie</a>
    -   <a href="/docs/3.2.0/samples/other-charts/multi-series-pie.html" class="sidebar-link">Multi Series Pie</a>
    -   <a href="/docs/3.2.0/samples/other-charts/polar-area.html" class="sidebar-link">Polar area</a>
    -   <a href="/docs/3.2.0/samples/other-charts/radar.html" class="sidebar-link">Radar</a>
    -   <a href="/docs/3.2.0/samples/other-charts/radar-skip-points.html" class="active sidebar-link">Radar skip points</a>
    -   <a href="/docs/3.2.0/samples/other-charts/combo-bar-line.html" class="sidebar-link">Combo bar/line</a>
    -   <a href="/docs/3.2.0/samples/other-charts/stacked-bar-line.html" class="sidebar-link">Stacked bar/line</a>

-   Area charts <span class="arrow right"></span>

-   Scales <span class="arrow right"></span>

-   Scale Options <span class="arrow right"></span>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#radar-skip-points" class="header-anchor">#</a> Radar skip points
==========================================================================

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/other-charts/radar-skip-points.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'radar', data: data, options: { responsive: true, plugins: { title: { display: true, text: 'Chart.js Radar Skip Points Chart' } } }, };

    const config = {
      type: 'radar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Radar Skip Points Chart'
          }
        }
      },
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: 0, max: 100}; const labels = Utils.months({count: 7}); const dataFirstSkip = Utils.numbers(NUMBER\_CFG); const dataMiddleSkip = Utils.numbers(NUMBER\_CFG); const dataLastSkip = Utils.numbers(NUMBER\_CFG); dataFirstSkip\[0\] = null; dataMiddleSkip\[Number.parseInt(dataMiddleSkip.length / 2, 10)\] = null; dataLastSkip\[dataLastSkip.length - 1\] = null; const data = { labels: labels, datasets: \[ { label: 'Skip first dataset', data: dataFirstSkip, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: 'Skip mid dataset', data: dataMiddleSkip, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), }, { label: 'Skip last dataset', data: dataLastSkip, borderColor: Utils.CHART\_COLORS.green, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.green, 0.5), } \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
    const labels = Utils.months({count: 7});
    const dataFirstSkip = Utils.numbers(NUMBER_CFG);
    const dataMiddleSkip = Utils.numbers(NUMBER_CFG);
    const dataLastSkip = Utils.numbers(NUMBER_CFG);
    dataFirstSkip[0] = null;
    dataMiddleSkip[Number.parseInt(dataMiddleSkip.length / 2, 10)] = null;
    dataLastSkip[dataLastSkip.length - 1] = null;
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Skip first dataset',
          data: dataFirstSkip,
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        },
        {
          label: 'Skip mid dataset',
          data: dataMiddleSkip,
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        },
        {
          label: 'Skip last dataset',
          data: dataLastSkip,
          borderColor: Utils.CHART_COLORS.green,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
        }
      ]
    };

const actions = \[ { name: 'Randomize', handler(chart) { chart.data.datasets.forEach((dataset, i) =&gt; { const data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100}); if (i === 0) { data\[0\] = null; } else if (i === 1) { data\[Number.parseInt(data.length / 2, 10)\] = null; } else { data\[data.length - 1\] = null; } dataset.data = data; }); chart.update(); } } \];

    const actions = [
      {
        name: 'Randomize',
        handler(chart) {
          chart.data.datasets.forEach((dataset, i) => {
            const data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});
            if (i === 0) {
              data[0] = null;
            } else if (i === 1) {
              data[Number.parseInt(data.length / 2, 10)] = null;
            } else {
              data[data.length - 1] = null;
            }
            dataset.data = data;
          });
          chart.update();
        }
      }
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/other-charts/radar.html" class="prev">Radar</a> </span> <span class="next"> [Combo bar/line](/docs/3.2.0/samples/other-charts/combo-bar-line.html) → </span>
