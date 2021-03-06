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

-   Other charts <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/samples/other-charts/bubble.html" class="sidebar-link">Bubble</a>
    -   <a href="/docs/3.0.0/samples/other-charts/scatter.html" class="sidebar-link">Scatter</a>
    -   <a href="/docs/3.0.0/samples/other-charts/scatter-multi-axis.html" class="sidebar-link">Scatter - Multi axis</a>
    -   <a href="/docs/3.0.0/samples/other-charts/doughnut.html" class="sidebar-link">Doughnut</a>
    -   <a href="/docs/3.0.0/samples/other-charts/pie.html" class="sidebar-link">Pie</a>
    -   <a href="/docs/3.0.0/samples/other-charts/multi-series-pie.html" class="sidebar-link">Multi Series Pie</a>
    -   <a href="/docs/3.0.0/samples/other-charts/polar-area.html" class="sidebar-link">Polar area</a>
    -   <a href="/docs/3.0.0/samples/other-charts/radar.html" class="active sidebar-link">Radar</a>
    -   <a href="/docs/3.0.0/samples/other-charts/radar-skip-points.html" class="sidebar-link">Radar skip points</a>
    -   <a href="/docs/3.0.0/samples/other-charts/combo-bar-line.html" class="sidebar-link">Combo bar/line</a>

-   Area charts <span class="arrow right"></span>

-   Scales <span class="arrow right"></span>

-   Scale Options <span class="arrow right"></span>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

<a href="#radar" class="header-anchor">#</a> Radar
==================================================

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/other-charts/radar.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'radar', data: data, options: { responsive: true, plugins: { title: { display: true, text: 'Chart.js Radar Chart' } } }, };

    const config = {
      type: 'radar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Radar Chart'
          }
        }
      },
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: 0, max: 100}; const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[ { label: 'Dataset 1', data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: 'Dataset 2', data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), } \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: Utils.numbers(NUMBER_CFG),
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        },
        {
          label: 'Dataset 2',
          data: Utils.numbers(NUMBER_CFG),
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        }
      ]
    };

const actions = \[ { name: 'Randomize', handler(chart) { chart.data.datasets.forEach(dataset =&gt; { dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100}); }); chart.update(); } }, { name: 'Add Dataset', handler(chart) { const data = chart.data; const dsColor = Utils.namedColor(chart.data.datasets.length); const newDataset = { label: 'Dataset ' + (data.datasets.length + 1), backgroundColor: Utils.transparentize(dsColor, 0.5), borderColor: dsColor, data: Utils.numbers({count: data.labels.length, min: 0, max: 100}), }; chart.data.datasets.push(newDataset); chart.update(); } }, { name: 'Add Data', handler(chart) { const data = chart.data; if (data.datasets.length &gt; 0) { data.labels = Utils.months({count: data.labels.length + 1}); for (var index = 0; index &lt; data.datasets.length; ++index) { data.datasets\[index\].data.push(Utils.rand(0, 100)); } chart.update(); } } }, { name: 'Remove Dataset', handler(chart) { chart.data.datasets.pop(); chart.update(); } }, { name: 'Remove Data', handler(chart) { chart.data.labels.splice(-1, 1); // remove the label first chart.data.datasets.forEach(dataset =&gt; { dataset.data.pop(); }); chart.update(); } } \];

    const actions = [
      {
        name: 'Randomize',
        handler(chart) {
          chart.data.datasets.forEach(dataset => {
            dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});
          });
          chart.update();
        }
      },
      {
        name: 'Add Dataset',
        handler(chart) {
          const data = chart.data;
          const dsColor = Utils.namedColor(chart.data.datasets.length);
          const newDataset = {
            label: 'Dataset ' + (data.datasets.length + 1),
            backgroundColor: Utils.transparentize(dsColor, 0.5),
            borderColor: dsColor,
            data: Utils.numbers({count: data.labels.length, min: 0, max: 100}),
          };
          chart.data.datasets.push(newDataset);
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
              data.datasets[index].data.push(Utils.rand(0, 100));
            }
            chart.update();
          }
        }
      },
      {
        name: 'Remove Dataset',
        handler(chart) {
          chart.data.datasets.pop();
          chart.update();
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

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 8:04:39 AM</span>

<span class="prev"> ??? <a href="/docs/3.0.0/samples/other-charts/polar-area.html" class="prev">Polar area</a> </span> <span class="next"> [Radar skip points](/docs/3.0.0/samples/other-charts/radar-skip-points.html) ??? </span>
