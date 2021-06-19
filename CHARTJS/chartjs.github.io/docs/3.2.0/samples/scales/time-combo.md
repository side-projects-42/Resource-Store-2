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
    -   <a href="/docs/3.2.0/samples/scales/linear-min-max-suggested.html" class="sidebar-link">Linear Scale - Suggested Min-Max</a>
    -   <a href="/docs/3.2.0/samples/scales/linear-step-size.html" class="sidebar-link">Linear Scale - Step Size</a>
    -   <a href="/docs/3.2.0/samples/scales/log.html" class="sidebar-link">Log Scale</a>
    -   <a href="/docs/3.2.0/samples/scales/time-line.html" class="sidebar-link">Time Scale</a>
    -   <a href="/docs/3.2.0/samples/scales/time-max-span.html" class="sidebar-link">Time Scale - Max Span</a>
    -   <a href="/docs/3.2.0/samples/scales/time-combo.html" class="active sidebar-link">Time Scale - Combo Chart</a>

-   Scale Options <span class="arrow right"></span>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#time-scale-combo-chart" class="header-anchor">#</a> Time Scale - Combo Chart
======================================================================================

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/scales/time-combo.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { plugins: { title: { text: 'Chart.js Combo Time Scale', display: true } }, scales: { x: { type: 'time', display: true, offset: true, time: { unit: 'day' } }, }, }, };

    const config = {
      type: 'line',
      data: data,
      options: {
        plugins: {
          title: {
            text: 'Chart.js Combo Time Scale',
            display: true
          }
        },
        scales: {
          x: {
            type: 'time',
            display: true,
            offset: true,
            time: {
              unit: 'day'
            }
          },
        },
      },
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: 0, max: 100}; const labels = \[\]; for (let i = 0; i &lt; DATA\_COUNT; ++i) { labels.push(Utils.newDate(i)); } const data = { labels: labels, datasets: \[{ type: 'bar', label: 'Dataset 1', backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), borderColor: Utils.CHART\_COLORS.red, data: Utils.numbers(NUMBER\_CFG), }, { type: 'bar', label: 'Dataset 2', backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), borderColor: Utils.CHART\_COLORS.blue, data: Utils.numbers(NUMBER\_CFG), }, { type: 'line', label: 'Dataset 3', backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.green, 0.5), borderColor: Utils.CHART\_COLORS.green, fill: false, data: Utils.numbers(NUMBER\_CFG), }\] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
    const labels = [];
    for (let i = 0; i < DATA_COUNT; ++i) {
      labels.push(Utils.newDate(i));
    }
    const data = {
      labels: labels,
      datasets: [{
        type: 'bar',
        label: 'Dataset 1',
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        borderColor: Utils.CHART_COLORS.red,
        data: Utils.numbers(NUMBER_CFG),
      }, {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        borderColor: Utils.CHART_COLORS.blue,
        data: Utils.numbers(NUMBER_CFG),
      }, {
        type: 'line',
        label: 'Dataset 3',
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
        borderColor: Utils.CHART_COLORS.green,
        fill: false,
        data: Utils.numbers(NUMBER_CFG),
      }]
    };

const actions = \[ { name: 'Randomize', handler(chart) { chart.data.datasets.forEach(dataset =&gt; { dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100}); }); chart.update(); } }, \];

    const actions = [
      {
        name: 'Randomize',
        handler(chart) {
          chart.data.datasets.forEach(dataset => {
            dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});
          });
          chart.update();
        }
      },
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/scales/time-max-span.html" class="prev">Time Scale - Max Span</a> </span> <span class="next"> [Grid Configuration](/docs/3.2.0/samples/scale-options/grid.html) → </span>
