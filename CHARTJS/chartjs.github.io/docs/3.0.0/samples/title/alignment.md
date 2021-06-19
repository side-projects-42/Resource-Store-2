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

-   Scale Options <span class="arrow right"></span>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/samples/title/alignment.html" class="active sidebar-link">Alignment</a>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

<a href="#alignment" class="header-anchor">#</a> Alignment
==========================================================

This sample show how to configure the alignment of the chart title

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/title/alignment.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { plugins: { title: { display: true, text: 'Chart Title', } } } };

    const config = {
      type: 'line',
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Chart Title',
          }
        }
      }
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: -100, max: 100}; const data = { labels: Utils.months({count: DATA\_COUNT}), datasets: \[ { label: 'Dataset 1', data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
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
      ]
    };

const actions = \[ { name: 'Title Alignment: start', handler(chart) { chart.options.plugins.title.align = 'start'; chart.update(); } }, { name: 'Title Alignment: center (default)', handler(chart) { chart.options.plugins.title.align = 'center'; chart.update(); } }, { name: 'Title Alignment: end', handler(chart) { chart.options.plugins.title.align = 'end'; chart.update(); } }, \];

    const actions = [
      {
        name: 'Title Alignment: start',
        handler(chart) {
          chart.options.plugins.title.align = 'start';
          chart.update();
        }
      },
      {
        name: 'Title Alignment: center (default)',
        handler(chart) {
          chart.options.plugins.title.align = 'center';
          chart.update();
        }
      },
      {
        name: 'Title Alignment: end',
        handler(chart) {
          chart.options.plugins.title.align = 'end';
          chart.update();
        }
      },
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 8:04:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/samples/legend/point-style.html" class="prev">Point Style</a> </span> <span class="next"> [Position](/docs/3.0.0/samples/tooltip/position.html) → </span>
