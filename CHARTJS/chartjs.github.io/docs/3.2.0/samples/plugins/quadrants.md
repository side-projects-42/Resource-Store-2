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

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/plugins/chart-area-border.html" class="sidebar-link">Chart Area Border</a>
    -   <a href="/docs/3.2.0/samples/plugins/quadrants.html" class="active sidebar-link">Quadrants</a>

<a href="#quadrants" class="header-anchor">#</a> Quadrants
==========================================================

config

plugin

data

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/plugins/quadrants.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'scatter', data: data, options: { plugins: { quadrants: { topLeft: Utils.CHART\_COLORS.red, topRight: Utils.CHART\_COLORS.blue, bottomRight: Utils.CHART\_COLORS.green, bottomLeft: Utils.CHART\_COLORS.yellow, } } }, plugins: \[quadrants\] };

    const config = {
      type: 'scatter',
      data: data,
      options: {
        plugins: {
          quadrants: {
            topLeft: Utils.CHART_COLORS.red,
            topRight: Utils.CHART_COLORS.blue,
            bottomRight: Utils.CHART_COLORS.green,
            bottomLeft: Utils.CHART_COLORS.yellow,
          }
        }
      },
      plugins: [quadrants]
    };

const quadrants = { id: 'quadrants', beforeDraw(chart, args, options) { const {ctx, chartArea: {left, top, right, bottom}, scales: {x, y}} = chart; const midX = x.getPixelForValue(0); const midY = y.getPixelForValue(0); ctx.save(); ctx.fillStyle = options.topLeft; ctx.fillRect(left, top, midX - left, midY - top); ctx.fillStyle = options.topRight; ctx.fillRect(midX, top, right - midX, midY - top); ctx.fillStyle = options.bottomRight; ctx.fillRect(midX, midY, right - midX, bottom - midY); ctx.fillStyle = options.bottomLeft; ctx.fillRect(left, midY, midX - left, bottom - midY); ctx.restore(); } };

    const quadrants = {
      id: 'quadrants',
      beforeDraw(chart, args, options) {
        const {ctx, chartArea: {left, top, right, bottom}, scales: {x, y}} = chart;
        const midX = x.getPixelForValue(0);
        const midY = y.getPixelForValue(0);
        ctx.save();
        ctx.fillStyle = options.topLeft;
        ctx.fillRect(left, top, midX - left, midY - top);
        ctx.fillStyle = options.topRight;
        ctx.fillRect(midX, top, right - midX, midY - top);
        ctx.fillStyle = options.bottomRight;
        ctx.fillRect(midX, midY, right - midX, bottom - midY);
        ctx.fillStyle = options.bottomLeft;
        ctx.fillRect(left, midY, midX - left, bottom - midY);
        ctx.restore();
      }
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: -100, max: 100}; const data = { datasets: \[ { label: 'Dataset 1', data: Utils.points(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: 'Dataset 2', data: Utils.points(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), } \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
    const data = {
      datasets: [
        {
          label: 'Dataset 1',
          data: Utils.points(NUMBER_CFG),
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        },
        {
          label: 'Dataset 2',
          data: Utils.points(NUMBER_CFG),
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        }
      ]
    };

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/plugins/chart-area-border.html" class="prev">Chart Area Border</a> </span>
