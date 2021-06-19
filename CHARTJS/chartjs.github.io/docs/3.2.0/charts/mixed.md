<a href="/docs/3.2.0/" class="home-link router-link-active"><img src="/docs/3.2.0/favicon.ico" alt="Chart.js" class="logo" /> <span class="site-name can-hide">Chart.js</span></a>

<a href="/docs/3.2.0/" class="nav-link">Home</a>

<a href="/docs/3.2.0/api/" class="nav-link">API</a>

<a href="/docs/3.2.0/samples/" class="nav-link">Samples</a>

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

<a href="/docs/3.2.0/samples/" class="nav-link">Samples</a>

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

-   <a href="/docs/3.2.0/" class="sidebar-link">Chart.js</a>
-   Getting Started <span class="arrow right"></span>

-   General <span class="arrow right"></span>

-   Configuration <span class="arrow right"></span>

-   Chart Types <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/charts/line.html" class="sidebar-link">Line Chart</a>
    -   <a href="/docs/3.2.0/charts/bar.html" class="sidebar-link">Bar Chart</a>
    -   <a href="/docs/3.2.0/charts/radar.html" class="sidebar-link">Radar Chart</a>
    -   <a href="/docs/3.2.0/charts/doughnut.html" class="sidebar-link">Doughnut and Pie Charts</a>
    -   <a href="/docs/3.2.0/charts/polar.html" class="sidebar-link">Polar Area Chart</a>
    -   <a href="/docs/3.2.0/charts/bubble.html" class="sidebar-link">Bubble Chart</a>
    -   <a href="/docs/3.2.0/charts/scatter.html" class="sidebar-link">Scatter Chart</a>
    -   <a href="/docs/3.2.0/charts/area.html" class="sidebar-link">Area Chart</a>
    -   <a href="/docs/3.2.0/charts/mixed.html" class="active sidebar-link">Mixed Chart Types</a>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#mixed-chart-types" class="header-anchor">#</a> Mixed Chart Types
==========================================================================

With Chart.js, it is possible to create mixed charts that are a combination of two or more different chart types. A common example is a bar chart that also includes a line dataset.

When creating a mixed chart, we specify the chart type on each dataset.

    var mixedChart = new Chart(ctx, {
        data: {
            datasets: [{
                type: 'bar',
                label: 'Bar Dataset',
                data: [10, 20, 30, 40]
            }, {
                type: 'line',
                label: 'Line Dataset',
                data: [50, 50, 50, 50],
            }],
            labels: ['January', 'February', 'March', 'April']
        },
        options: options
    });

At this point, we have a chart rendering how we'd like. It's important to note that the default options for the charts are only considered at the dataset level and are not merged at the chart level in this case.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/charts/mixed.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'scatter', data: data, options: { scales: { y: { beginAtZero: true } } } };

    const config = {
      type: 'scatter',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

const data = { labels: \[ 'January', 'February', 'March', 'April' \], datasets: \[{ type: 'bar', label: 'Bar Dataset', data: \[10, 20, 30, 40\], borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.2)' }, { type: 'line', label: 'Line Dataset', data: \[50, 50, 50, 50\], fill: false, borderColor: 'rgb(54, 162, 235)' }\] };

    const data = {
      labels: [
        'January',
        'February',
        'March',
        'April'
      ],
      datasets: [{
        type: 'bar',
        label: 'Bar Dataset',
        data: [10, 20, 30, 40],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)'
      }, {
        type: 'line',
        label: 'Line Dataset',
        data: [50, 50, 50, 50],
        fill: false,
        borderColor: 'rgb(54, 162, 235)'
      }]
    };

<a href="#drawing-order" class="header-anchor">#</a> Drawing order
------------------------------------------------------------------

By default, datasets are drawn such that the first one is top-most. This can be altered by specifying `order` option to datasets. `order` defaults to `0`. Note that this also affects stacking, legend, and tooltip. So it's essentially the same as reordering the datasets.

    var mixedChart = new Chart(ctx, {
       type: 'bar',
       data: {
           datasets: [{
               label: 'Bar Dataset',
               data: [10, 20, 30, 40],
               // this dataset is drawn below
               order: 2
           }, {
               label: 'Line Dataset',
               data: [10, 10, 10, 10],
               type: 'line',
               // this dataset is drawn on top
               order: 1
           }],
           labels: ['January', 'February', 'March', 'April']
       },
       options: options
    });

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/charts/area.html" class="prev">Area Chart</a> </span> <span class="next"> [Axes](/docs/3.2.0/axes/) → </span>
