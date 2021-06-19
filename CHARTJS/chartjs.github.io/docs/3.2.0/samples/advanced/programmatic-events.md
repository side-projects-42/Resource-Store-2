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

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/advanced/data-decimation.html" class="sidebar-link">Data Decimation</a>
    -   <a href="/docs/3.2.0/samples/advanced/progress-bar.html" class="sidebar-link">Animation Progress Bar</a>
    -   <a href="/docs/3.2.0/samples/advanced/radial-gradient.html" class="sidebar-link">Radial Gradient</a>
    -   <a href="/docs/3.2.0/samples/advanced/linear-gradient.html" class="sidebar-link">Linear Gradient</a>
    -   <a href="/docs/3.2.0/samples/advanced/programmatic-events.html" class="active sidebar-link">Programmatic Event Triggers</a>
    -   <a href="/docs/3.2.0/samples/advanced/derived-axis-type.html" class="sidebar-link">Derived Axis Type</a>
    -   <a href="/docs/3.2.0/samples/advanced/derived-chart-type.html" class="sidebar-link">Derived Chart Type</a>

-   Plugins <span class="arrow right"></span>

<a href="#programmatic-event-triggers" class="header-anchor">#</a> Programmatic Event Triggers
==============================================================================================

hover

tooltip

actions

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/advanced/programmatic-events.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

function triggerHover(chart) { if (chart.getActiveElements().length &gt; 0) { chart.setActiveElements(\[\]); } else { chart.setActiveElements(\[ { datasetIndex: 0, index: 0, }, { datasetIndex: 1, index: 0, } \]); } chart.update(); }

    function triggerHover(chart) {
      if (chart.getActiveElements().length > 0) {
        chart.setActiveElements([]);
      } else {
        chart.setActiveElements([
          {
            datasetIndex: 0,
            index: 0,
          }, {
            datasetIndex: 1,
            index: 0,
          }
        ]);
      }
      chart.update();
    }

function triggerTooltip(chart) { const tooltip = chart.tooltip; if (tooltip.getActiveElements().length &gt; 0) { tooltip.setActiveElements(\[\], {x: 0, y: 0}); } else { const chartArea = chart.chartArea; tooltip.setActiveElements(\[ { datasetIndex: 0, index: 2, }, { datasetIndex: 1, index: 2, } \], { x: (chartArea.left + chartArea.right) / 2, y: (chartArea.top + chartArea.bottom) / 2, }); } chart.update(); }

    function triggerTooltip(chart) {
      const tooltip = chart.tooltip;
      if (tooltip.getActiveElements().length > 0) {
        tooltip.setActiveElements([], {x: 0, y: 0});
      } else {
        const chartArea = chart.chartArea;
        tooltip.setActiveElements([
          {
            datasetIndex: 0,
            index: 2,
          }, {
            datasetIndex: 1,
            index: 2,
          }
        ],
        {
          x: (chartArea.left + chartArea.right) / 2,
          y: (chartArea.top + chartArea.bottom) / 2,
        });
      }
      chart.update();
    }

const actions = \[ { name: 'Trigger Hover', handler: triggerHover }, { name: 'Trigger Tooltip', handler: triggerTooltip } \];

    const actions = [
      {
        name: 'Trigger Hover',
        handler: triggerHover
      },
      {
        name: 'Trigger Tooltip',
        handler: triggerTooltip
      }
    ];

const config = { type: 'bar', data: data, options: { }, };

    const config = {
      type: 'bar',
      data: data,
      options: {
      },
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: -100, max: 100}; const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[ { label: 'Dataset 1', data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), hoverBorderWidth: 5, hoverBorderColor: 'green', }, { label: 'Dataset 2', data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), hoverBorderWidth: 5, hoverBorderColor: 'green', } \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: Utils.numbers(NUMBER_CFG),
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
          hoverBorderWidth: 5,
          hoverBorderColor: 'green',
        },
        {
          label: 'Dataset 2',
          data: Utils.numbers(NUMBER_CFG),
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
          hoverBorderWidth: 5,
          hoverBorderColor: 'green',
        }
      ]
    };

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/advanced/linear-gradient.html" class="prev">Linear Gradient</a> </span> <span class="next"> [Derived Axis Type](/docs/3.2.0/samples/advanced/derived-axis-type.html) → </span>
