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

-   Bar Charts <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/samples/bar/vertical.html" class="sidebar-link">Vertical Bar Chart</a>
    -   <a href="/docs/3.0.0/samples/bar/horizontal.html" class="sidebar-link">Horizontal Bar Chart</a>
    -   <a href="/docs/3.0.0/samples/bar/stacked.html" class="sidebar-link">Stacked Bar Chart</a>
    -   <a href="/docs/3.0.0/samples/bar/stacked-groups.html" class="active sidebar-link">Stacked Bar Chart with Groups</a>
    -   <a href="/docs/3.0.0/samples/bar/floating.html" class="sidebar-link">Floating Bars</a>
    -   <a href="/docs/3.0.0/samples/bar/border-radius.html" class="sidebar-link">Bar Chart Border Radius</a>

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

-   Advanced <span class="arrow right"></span>

<a href="#stacked-bar-chart-with-groups" class="header-anchor">#</a> Stacked Bar Chart with Groups
==================================================================================================

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/bar/stacked-groups.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'bar', data: data, options: { plugins: { title: { display: true, text: 'Chart.js Bar Chart - Stacked' }, }, responsive: true, interaction: { intersect: false, }, scales: { x: { stacked: true, }, y: { stacked: true } } } };

    const config = {
      type: 'bar',
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked'
          },
        },
        responsive: true,
        interaction: {
          intersect: false,
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

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: -100, max: 100}; const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[ { label: 'Dataset 1', data: Utils.numbers(NUMBER\_CFG), backgroundColor: Utils.CHART\_COLORS.red, stack: 'Stack 0', }, { label: 'Dataset 2', data: Utils.numbers(NUMBER\_CFG), backgroundColor: Utils.CHART\_COLORS.blue, stack: 'Stack 0', }, { label: 'Dataset 3', data: Utils.numbers(NUMBER\_CFG), backgroundColor: Utils.CHART\_COLORS.green, stack: 'Stack 1', }, \] };

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
          stack: 'Stack 0',
        },
        {
          label: 'Dataset 2',
          data: Utils.numbers(NUMBER_CFG),
          backgroundColor: Utils.CHART_COLORS.blue,
          stack: 'Stack 0',
        },
        {
          label: 'Dataset 3',
          data: Utils.numbers(NUMBER_CFG),
          backgroundColor: Utils.CHART_COLORS.green,
          stack: 'Stack 1',
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

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 8:04:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/samples/bar/stacked.html" class="prev">Stacked Bar Chart</a> </span> <span class="next"> [Floating Bars](/docs/3.0.0/samples/bar/floating.html) → </span>
