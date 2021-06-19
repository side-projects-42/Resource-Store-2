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

-   Scales <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/scales/linear-min-max.html" class="sidebar-link">Linear Scale - Min-Max</a>
    -   <a href="/docs/3.2.0/samples/scales/linear-min-max-suggested.html" class="active sidebar-link">Linear Scale - Suggested Min-Max</a>
    -   <a href="/docs/3.2.0/samples/scales/linear-step-size.html" class="sidebar-link">Linear Scale - Step Size</a>
    -   <a href="/docs/3.2.0/samples/scales/log.html" class="sidebar-link">Log Scale</a>
    -   <a href="/docs/3.2.0/samples/scales/time-line.html" class="sidebar-link">Time Scale</a>
    -   <a href="/docs/3.2.0/samples/scales/time-max-span.html" class="sidebar-link">Time Scale - Max Span</a>
    -   <a href="/docs/3.2.0/samples/scales/time-combo.html" class="sidebar-link">Time Scale - Combo Chart</a>

-   Scale Options <span class="arrow right"></span>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#linear-scale-suggested-min-max" class="header-anchor">#</a> Linear Scale - Suggested Min-Max
======================================================================================================

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/scales/linear-min-max-suggested.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { responsive: true, plugins: { title: { display: true, text: 'Suggested Min and Max Settings' } }, scales: { y: { // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin) suggestedMin: 30, // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax) suggestedMax: 50, } } }, };

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Suggested Min and Max Settings'
          }
        },
        scales: {
          y: {
            // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
            suggestedMin: 30,
            // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
            suggestedMax: 50,
          }
        }
      },
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: 0, max: 100}; const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[ { label: 'Dataset 1', data: \[10, 30, 39, 20, 25, 34, -10\], borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.CHART\_COLORS.red, }, { label: 'Dataset 2', data: \[18, 33, 22, 19, 11, 39, 30\], borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.CHART\_COLORS.blue, } \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [10, 30, 39, 20, 25, 34, -10],
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.CHART_COLORS.red,
        },
        {
          label: 'Dataset 2',
          data: [18, 33, 22, 19, 11, 39, 30],
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.CHART_COLORS.blue,
        }
      ]
    };

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/scales/linear-min-max.html" class="prev">Linear Scale - Min-Max</a> </span> <span class="next"> [Linear Scale - Step Size](/docs/3.2.0/samples/scales/linear-step-size.html) → </span>
