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

-   Scale Options <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/scale-options/grid.html" class="active sidebar-link">Grid Configuration</a>
    -   <a href="/docs/3.2.0/samples/scale-options/ticks.html" class="sidebar-link">Tick Configuration</a>
    -   <a href="/docs/3.2.0/samples/scale-options/titles.html" class="sidebar-link">Title Configuration</a>
    -   <a href="/docs/3.2.0/samples/scale-options/center.html" class="sidebar-link">Center Positioning</a>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#grid-configuration" class="header-anchor">#</a> Grid Configuration
============================================================================

This sample shows how to use scriptable grid options for an axis to control styling. In this case, the Y axis grid lines are colored based on their value. In addition, booleans are provided to toggle different parts of the X axis grid visibility.

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/scale-options/grid.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

// Change these settings to change the display for different parts of the X axis // grid configuiration const DISPLAY = true; const BORDER = true; const CHART\_AREA = true; const TICKS = true; const config = { type: 'line', data: data, options: { responsive: true, plugins: { title: { display: true, text: 'Grid Line Settings' } }, scales: { x: { grid: { display: DISPLAY, drawBorder: BORDER, drawOnChartArea: CHART\_AREA, drawTicks: TICKS, } }, y: { grid: { drawBorder: false, color: function(context) { if (context.tick.value &gt; 0) { return Utils.CHART\_COLORS.green; } else if (context.tick.value &lt; 0) { return Utils.CHART\_COLORS.red; } return '\#000000'; }, }, } } }, };

    // Change these settings to change the display for different parts of the X axis
    // grid configuiration
    const DISPLAY = true;
    const BORDER = true;
    const CHART_AREA = true;
    const TICKS = true;
    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Grid Line Settings'
          }
        },
        scales: {
          x: {
            grid: {
              display: DISPLAY,
              drawBorder: BORDER,
              drawOnChartArea: CHART_AREA,
              drawTicks: TICKS,
            }
          },
          y: {
            grid: {
              drawBorder: false,
              color: function(context) {
                if (context.tick.value > 0) {
                  return Utils.CHART_COLORS.green;
                } else if (context.tick.value < 0) {
                  return Utils.CHART_COLORS.red;
                }
                return '#000000';
              },
            },
          }
        }
      },
    };

const DATA\_COUNT = 7; const data = { labels: Utils.months({count: DATA\_COUNT}), datasets: \[ { label: 'Dataset 1', data: \[10, 30, 39, 20, 25, 34, -10\], fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: 'Dataset 2', data: \[18, 33, 22, 19, 11, -39, 30\], fill: false, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), } \] };

    const DATA_COUNT = 7;
    const data = {
      labels: Utils.months({count: DATA_COUNT}),
      datasets: [
        {
          label: 'Dataset 1',
          data: [10, 30, 39, 20, 25, 34, -10],
          fill: false,
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        },
        {
          label: 'Dataset 2',
          data: [18, 33, 22, 19, 11, -39, 30],
          fill: false,
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        }
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

<span class="prev"> ← <a href="/docs/3.2.0/samples/scales/time-combo.html" class="prev">Time Scale - Combo Chart</a> </span> <span class="next"> [Tick Configuration](/docs/3.2.0/samples/scale-options/ticks.html) → </span>
