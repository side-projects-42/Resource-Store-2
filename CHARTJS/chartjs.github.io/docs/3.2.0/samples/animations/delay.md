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

-   Animations <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/animations/delay.html" class="active sidebar-link">Delay</a>
    -   <a href="/docs/3.2.0/samples/animations/drop.html" class="sidebar-link">Drop</a>
    -   <a href="/docs/3.2.0/samples/animations/loop.html" class="sidebar-link">Loop</a>
    -   <a href="/docs/3.2.0/samples/animations/progressive-line.html" class="sidebar-link">Progressive Line</a>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#delay" class="header-anchor">#</a> Delay
==================================================

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/animations/delay.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

var delayed; const config = { type: 'bar', data: data, options: { animation: { onComplete: () =&gt; { delayed = true; }, delay: (context) =&gt; { let delay = 0; if (context.type === 'data' && context.mode === 'default' && !delayed) { delay = context.dataIndex \* 300 + context.datasetIndex \* 100; } return delay; }, }, scales: { x: { stacked: true, }, y: { stacked: true } } } };

    var delayed;
    const config = {
      type: 'bar',
      data: data,
      options: {
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
      }
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: -100, max: 100}; const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[ { label: 'Dataset 1', data: Utils.numbers(NUMBER\_CFG), backgroundColor: Utils.CHART\_COLORS.red, }, { label: 'Dataset 2', data: Utils.numbers(NUMBER\_CFG), backgroundColor: Utils.CHART\_COLORS.blue, }, { label: 'Dataset 3', data: Utils.numbers(NUMBER\_CFG), backgroundColor: Utils.CHART\_COLORS.green, }, \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: Utils.numbers(NUMBER_CFG),
          backgroundColor: Utils.CHART_COLORS.red,
        },
        {
          label: 'Dataset 2',
          data: Utils.numbers(NUMBER_CFG),
          backgroundColor: Utils.CHART_COLORS.blue,
        },
        {
          label: 'Dataset 3',
          data: Utils.numbers(NUMBER_CFG),
          backgroundColor: Utils.CHART_COLORS.green,
        },
      ]
    };

const actions = \[ { name: 'Randomize', handler(chart) { chart.data.datasets.forEach(dataset =&gt; { dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100}); }); chart.update(); } }, \];

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
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/scriptable/radar.html" class="prev">Radar Chart</a> </span> <span class="next"> [Drop](/docs/3.2.0/samples/animations/drop.html) → </span>
