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

-   Line Charts <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/line/line.html" class="sidebar-link">Line Chart</a>
    -   <a href="/docs/3.2.0/samples/line/multi-axis.html" class="sidebar-link">Multi Axis Line Chart</a>
    -   <a href="/docs/3.2.0/samples/line/stepped.html" class="sidebar-link">Stepped Line Charts</a>
    -   <a href="/docs/3.2.0/samples/line/interpolation.html" class="active sidebar-link">Interpolation Modes</a>
    -   <a href="/docs/3.2.0/samples/line/styling.html" class="sidebar-link">Line Styling</a>
    -   <a href="/docs/3.2.0/samples/line/segments.html" class="sidebar-link">Line Segment Styling</a>

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

-   Plugins <span class="arrow right"></span>

<a href="#interpolation-modes" class="header-anchor">#</a> Interpolation Modes
==============================================================================

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/line/interpolation.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { responsive: true, plugins: { title: { display: true, text: 'Chart.js Line Chart - Cubic interpolation mode' }, }, interaction: { intersect: false, }, scales: { x: { display: true, title: { display: true } }, y: { display: true, title: { display: true, text: 'Value' }, suggestedMin: -10, suggestedMax: 200 } } }, };

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart - Cubic interpolation mode'
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value'
            },
            suggestedMin: -10,
            suggestedMax: 200
          }
        }
      },
    };

const DATA\_COUNT = 12; const labels = \[\]; for (let i = 0; i &lt; DATA\_COUNT; ++i) { labels.push(i.toString()); } const datapoints = \[0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170\]; const data = { labels: labels, datasets: \[ { label: 'Cubic interpolation (monotone)', data: datapoints, borderColor: Utils.CHART\_COLORS.red, fill: false, cubicInterpolationMode: 'monotone', tension: 0.4 }, { label: 'Cubic interpolation', data: datapoints, borderColor: Utils.CHART\_COLORS.blue, fill: false, tension: 0.4 }, { label: 'Linear interpolation (default)', data: datapoints, borderColor: Utils.CHART\_COLORS.green, fill: false } \] };

    const DATA_COUNT = 12;
    const labels = [];
    for (let i = 0; i < DATA_COUNT; ++i) {
      labels.push(i.toString());
    }
    const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Cubic interpolation (monotone)',
          data: datapoints,
          borderColor: Utils.CHART_COLORS.red,
          fill: false,
          cubicInterpolationMode: 'monotone',
          tension: 0.4
        }, {
          label: 'Cubic interpolation',
          data: datapoints,
          borderColor: Utils.CHART_COLORS.blue,
          fill: false,
          tension: 0.4
        }, {
          label: 'Linear interpolation (default)',
          data: datapoints,
          borderColor: Utils.CHART_COLORS.green,
          fill: false
        }
      ]
    };

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/line/stepped.html" class="prev">Stepped Line Charts</a> </span> <span class="next"> [Line Styling](/docs/3.2.0/samples/line/styling.html) → </span>
