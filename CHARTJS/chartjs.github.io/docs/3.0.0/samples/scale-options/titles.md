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

-   Other charts <span class="arrow right"></span>

-   Area charts <span class="arrow right"></span>

-   Scales <span class="arrow right"></span>

-   Scale Options <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/samples/scale-options/grid.html" class="sidebar-link">Grid Configuration</a>
    -   <a href="/docs/3.0.0/samples/scale-options/ticks.html" class="sidebar-link">Tick Configuration</a>
    -   <a href="/docs/3.0.0/samples/scale-options/titles.html" class="active sidebar-link">Title Configuration</a>
    -   <a href="/docs/3.0.0/samples/scale-options/center.html" class="sidebar-link">Center Positioning</a>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

<a href="#title-configuration" class="header-anchor">#</a> Title Configuration
==============================================================================

This sample shows how to configure the title of an axis including alignment, font, and color.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/scale-options/titles.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { responsive: true, scales: { x: { display: true, title: { display: true, text: 'Month', color: '\#911', font: { family: 'Comic Sans MS', size: 20, style: 'bold', lineHeight: 1.2, }, padding: {top: 20, left: 0, right: 0, bottom: 0} } }, y: { display: true, title: { display: true, text: 'Value', color: '\#191', font: { family: 'Times', size: 20, style: 'normal', lineHeight: 1.2, }, padding: {top: 30, left: 0, right: 0, bottom: 0} } } } }, };

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Month',
              color: '#911',
              font: {
                family: 'Comic Sans MS',
                size: 20,
                style: 'bold',
                lineHeight: 1.2,
              },
              padding: {top: 20, left: 0, right: 0, bottom: 0}
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value',
              color: '#191',
              font: {
                family: 'Times',
                size: 20,
                style: 'normal',
                lineHeight: 1.2,
              },
              padding: {top: 30, left: 0, right: 0, bottom: 0}
            }
          }
        }
      },
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: 0, max: 100}; const data = { labels: Utils.months({count: DATA\_COUNT}), datasets: \[ { label: 'Dataset 1', data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: 'Dataset 2', data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), } \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
    const data = {
      labels: Utils.months({count: DATA_COUNT}),
      datasets: [
        {
          label: 'Dataset 1',
          data: Utils.numbers(NUMBER_CFG),
          fill: false,
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        },
        {
          label: 'Dataset 2',
          data: Utils.numbers(NUMBER_CFG),
          fill: false,
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        }
      ]
    };

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 8:04:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/samples/scale-options/ticks.html" class="prev">Tick Configuration</a> </span> <span class="next"> [Center Positioning](/docs/3.0.0/samples/scale-options/center.html) → </span>
