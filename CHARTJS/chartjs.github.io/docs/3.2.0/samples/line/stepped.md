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
    -   <a href="/docs/3.2.0/samples/line/stepped.html" class="active sidebar-link">Stepped Line Charts</a>
    -   <a href="/docs/3.2.0/samples/line/interpolation.html" class="sidebar-link">Interpolation Modes</a>
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

<a href="#stepped-line-charts" class="header-anchor">#</a> Stepped Line Charts
==============================================================================

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/line/stepped.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { responsive: true, interaction: { intersect: false, axis: 'x' }, plugins: { title: { display: true, text: (ctx) =&gt; 'Step ' + ctx.chart.data.datasets\[0\].stepped + ' Interpolation', } } } };

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        interaction: {
          intersect: false,
          axis: 'x'
        },
        plugins: {
          title: {
            display: true,
            text: (ctx) => 'Step ' + ctx.chart.data.datasets[0].stepped + ' Interpolation',
          }
        }
      }
    };

const data = { labels: \['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'\], datasets: \[ { label: 'Dataset', data: Utils.numbers({count: 6, min: -100, max: 100}), borderColor: Utils.CHART\_COLORS.red, fill: false, stepped: true, } \] };

    const data = {
      labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
      datasets: [
        {
          label: 'Dataset',
          data: Utils.numbers({count: 6, min: -100, max: 100}),
          borderColor: Utils.CHART_COLORS.red,
          fill: false,
          stepped: true,
        }
      ]
    };

const actions = \[ { name: 'Step: false (default)', handler: (chart) =&gt; { chart.data.datasets.forEach(dataset =&gt; { dataset.stepped = false; }); chart.update(); } }, { name: 'Step: true', handler: (chart) =&gt; { chart.data.datasets.forEach(dataset =&gt; { dataset.stepped = true; }); chart.update(); } }, { name: 'Step: before', handler: (chart) =&gt; { chart.data.datasets.forEach(dataset =&gt; { dataset.stepped = 'before'; }); chart.update(); } }, { name: 'Step: after', handler: (chart) =&gt; { chart.data.datasets.forEach(dataset =&gt; { dataset.stepped = 'after'; }); chart.update(); } }, { name: 'Step: middle', handler: (chart) =&gt; { chart.data.datasets.forEach(dataset =&gt; { dataset.stepped = 'middle'; }); chart.update(); } } \];

    const actions = [
      {
        name: 'Step: false (default)',
        handler: (chart) => {
          chart.data.datasets.forEach(dataset => {
            dataset.stepped = false;
          });
          chart.update();
        }
      },
      {
        name: 'Step: true',
        handler: (chart) => {
          chart.data.datasets.forEach(dataset => {
            dataset.stepped = true;
          });
          chart.update();
        }
      },
      {
        name: 'Step: before',
        handler: (chart) => {
          chart.data.datasets.forEach(dataset => {
            dataset.stepped = 'before';
          });
          chart.update();
        }
      },
      {
        name: 'Step: after',
        handler: (chart) => {
          chart.data.datasets.forEach(dataset => {
            dataset.stepped = 'after';
          });
          chart.update();
        }
      },
      {
        name: 'Step: middle',
        handler: (chart) => {
          chart.data.datasets.forEach(dataset => {
            dataset.stepped = 'middle';
          });
          chart.update();
        }
      }
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/line/multi-axis.html" class="prev">Multi Axis Line Chart</a> </span> <span class="next"> [Interpolation Modes](/docs/3.2.0/samples/line/interpolation.html) → </span>
