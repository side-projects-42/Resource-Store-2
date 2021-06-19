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

-   Line Charts <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/samples/line/line.html" class="sidebar-link">Line Chart</a>
    -   <a href="/docs/3.0.0/samples/line/multi-axis.html" class="sidebar-link">Multi Axis Line Chart</a>
    -   <a href="/docs/3.0.0/samples/line/stepped.html" class="sidebar-link">Stepped Line Charts</a>
    -   <a href="/docs/3.0.0/samples/line/interpolation.html" class="sidebar-link">Interpolation Modes</a>
    -   <a href="/docs/3.0.0/samples/line/styling.html" class="active sidebar-link">Line Styling</a>

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

<a href="#line-styling" class="header-anchor">#</a> Line Styling
================================================================

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/line/styling.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { responsive: true, plugins: { title: { display: true, text: 'Chart.js Line Chart' }, }, interaction: { mode: 'index', intersect: false }, scales: { x: { display: true, title: { display: true, text: 'Month' } }, y: { display: true, title: { display: true, text: 'Value' } } } }, };

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          },
        },
        interaction: {
          mode: 'index',
          intersect: false
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      },
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: -100, max: 100}; const labels = Utils.months({count: DATA\_COUNT}); const data = { labels: labels, datasets: \[ { label: 'Unfilled', fill: false, backgroundColor: Utils.CHART\_COLORS.blue, borderColor: Utils.CHART\_COLORS.blue, data: Utils.numbers(NUMBER\_CFG), }, { label: 'Dashed', fill: false, backgroundColor: Utils.CHART\_COLORS.green, borderColor: Utils.CHART\_COLORS.green, borderDash: \[5, 5\], data: Utils.numbers(NUMBER\_CFG), }, { label: 'Filled', backgroundColor: Utils.CHART\_COLORS.red, borderColor: Utils.CHART\_COLORS.red, data: Utils.numbers(NUMBER\_CFG), fill: true, } \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
    const labels = Utils.months({count: DATA_COUNT});
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Unfilled',
          fill: false,
          backgroundColor: Utils.CHART_COLORS.blue,
          borderColor: Utils.CHART_COLORS.blue,
          data: Utils.numbers(NUMBER_CFG),
        }, {
          label: 'Dashed',
          fill: false,
          backgroundColor: Utils.CHART_COLORS.green,
          borderColor: Utils.CHART_COLORS.green,
          borderDash: [5, 5],
          data: Utils.numbers(NUMBER_CFG),
        }, {
          label: 'Filled',
          backgroundColor: Utils.CHART_COLORS.red,
          borderColor: Utils.CHART_COLORS.red,
          data: Utils.numbers(NUMBER_CFG),
          fill: true,
        }
      ]
    };

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 8:04:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/samples/line/interpolation.html" class="prev">Interpolation Modes</a> </span> <span class="next"> [Bubble](/docs/3.0.0/samples/other-charts/bubble.html) → </span>
