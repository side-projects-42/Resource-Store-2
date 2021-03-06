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

-   Tooltip <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/tooltip/position.html" class="sidebar-link">Position</a>
    -   <a href="/docs/3.2.0/samples/tooltip/interactions.html" class="sidebar-link">Interaction Modes</a>
    -   <a href="/docs/3.2.0/samples/tooltip/point-style.html" class="sidebar-link">Point Style</a>
    -   <a href="/docs/3.2.0/samples/tooltip/content.html" class="active sidebar-link">Custom Tooltip Content</a>
    -   <a href="/docs/3.2.0/samples/tooltip/html.html" class="sidebar-link">External HTML Tooltip</a>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#custom-tooltip-content" class="header-anchor">#</a> Custom Tooltip Content
====================================================================================

This sample shows how to use the tooltip callbacks to add additional content to the tooltip.

config

setup

footer

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/tooltip/content.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { interaction: { intersect: false, mode: 'index', }, plugins: { tooltip: { callbacks: { footer: footer, } } } } };

    const config = {
      type: 'line',
      data: data,
      options: {
        interaction: {
          intersect: false,
          mode: 'index',
        },
        plugins: {
          tooltip: {
            callbacks: {
              footer: footer,
            }
          }
        }
      }
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: -100, max: 100, decimals: 0}; const data = { labels: Utils.months({count: DATA\_COUNT}), datasets: \[ { label: 'Dataset 1', data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: 'Dataset 2', data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), }, \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100, decimals: 0};
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
        },
      ]
    };

const footer = (tooltipItems) =&gt; { let sum = 0; tooltipItems.forEach(function(tooltipItem) { sum += tooltipItem.parsed.y; }); return 'Sum: ' + sum; };

    const footer = (tooltipItems) => {
      let sum = 0;
      tooltipItems.forEach(function(tooltipItem) {
        sum += tooltipItem.parsed.y;
      });
      return 'Sum: ' + sum;
    };

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ??? <a href="/docs/3.2.0/samples/tooltip/point-style.html" class="prev">Point Style</a> </span> <span class="next"> [External HTML Tooltip](/docs/3.2.0/samples/tooltip/html.html) ??? </span>
