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
    -   <a href="/docs/3.2.0/samples/area/line-stacked.html" class="active sidebar-link">Line Chart Stacked</a>
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

<a href="#line-chart-stacked" class="header-anchor">#</a> Line Chart Stacked
============================================================================

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/area/line-stacked.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { responsive: true, plugins: { title: { display: true, text: (ctx) =&gt; 'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked }, tooltip: { mode: 'index' }, }, interaction: { mode: 'nearest', axis: 'x', intersect: false }, scales: { x: { title: { display: true, text: 'Month' } }, y: { stacked: true, title: { display: true, text: 'Value' } } } } };

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: (ctx) => 'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked
          },
          tooltip: {
            mode: 'index'
          },
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: -100, max: 100}; const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[ { label: 'My First dataset', data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.CHART\_COLORS.red, fill: true }, { label: 'My Second dataset', data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.CHART\_COLORS.blue, fill: true }, { label: 'My Third dataset', data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.green, backgroundColor: Utils.CHART\_COLORS.green, fill: true }, { label: 'My Fourth dataset', data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.yellow, backgroundColor: Utils.CHART\_COLORS.yellow, fill: true } \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'My First dataset',
          data: Utils.numbers(NUMBER_CFG),
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.CHART_COLORS.red,
          fill: true
        },
        {
          label: 'My Second dataset',
          data: Utils.numbers(NUMBER_CFG),
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.CHART_COLORS.blue,
          fill: true
        },
        {
          label: 'My Third dataset',
          data: Utils.numbers(NUMBER_CFG),
          borderColor: Utils.CHART_COLORS.green,
          backgroundColor: Utils.CHART_COLORS.green,
          fill: true
        },
        {
          label: 'My Fourth dataset',
          data: Utils.numbers(NUMBER_CFG),
          borderColor: Utils.CHART_COLORS.yellow,
          backgroundColor: Utils.CHART_COLORS.yellow,
          fill: true
        }
      ]
    };

const actions = \[ { name: 'Stacked: true', handler: (chart) =&gt; { chart.options.scales.y.stacked = true; chart.update(); } }, { name: 'Stacked: false (default)', handler: (chart) =&gt; { chart.options.scales.y.stacked = false; chart.update(); } }, { name: 'Stacked Single', handler: (chart) =&gt; { chart.options.scales.y.stacked = 'single'; chart.update(); } }, { name: 'Randomize', handler(chart) { chart.data.datasets.forEach(dataset =&gt; { dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100}); }); chart.update(); } }, { name: 'Add Dataset', handler(chart) { const data = chart.data; const dsColor = Utils.namedColor(chart.data.datasets.length); const newDataset = { label: 'Dataset ' + (data.datasets.length + 1), backgroundColor: dsColor, borderColor: dsColor, fill: true, data: Utils.numbers({count: data.labels.length, min: -100, max: 100}), }; chart.data.datasets.push(newDataset); chart.update(); } }, { name: 'Add Data', handler(chart) { const data = chart.data; if (data.datasets.length &gt; 0) { data.labels = Utils.months({count: data.labels.length + 1}); for (var index = 0; index &lt; data.datasets.length; ++index) { data.datasets\[index\].data.push(Utils.rand(-100, 100)); } chart.update(); } } }, { name: 'Remove Dataset', handler(chart) { chart.data.datasets.pop(); chart.update(); } }, { name: 'Remove Data', handler(chart) { chart.data.labels.splice(-1, 1); // remove the label first chart.data.datasets.forEach(dataset =&gt; { dataset.data.pop(); }); chart.update(); } } \];

    const actions = [
      {
        name: 'Stacked: true',
        handler: (chart) => {
          chart.options.scales.y.stacked = true;
          chart.update();
        }
      },
      {
        name: 'Stacked: false (default)',
        handler: (chart) => {
          chart.options.scales.y.stacked = false;
          chart.update();
        }
      },
      {
        name: 'Stacked Single',
        handler: (chart) => {
          chart.options.scales.y.stacked = 'single';
          chart.update();
        }
      },
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
        name: 'Add Dataset',
        handler(chart) {
          const data = chart.data;
          const dsColor = Utils.namedColor(chart.data.datasets.length);
          const newDataset = {
            label: 'Dataset ' + (data.datasets.length + 1),
            backgroundColor: dsColor,
            borderColor: dsColor,
            fill: true,
            data: Utils.numbers({count: data.labels.length, min: -100, max: 100}),
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
              data.datasets[index].data.push(Utils.rand(-100, 100));
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

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/area/line-drawtime.html" class="prev">Line Chart drawTime</a> </span> <span class="next"> [Radar Chart Stacked](/docs/3.2.0/samples/area/radar.html) → </span>
