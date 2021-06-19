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

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#radial-axes" class="header-anchor">#</a> Radial Axes
==============================================================

Radial axes are used specifically for the radar and polar area chart types. These axes overlay the chart area, rather than being positioned on one of the edges. One radial axis is included by default in Chart.js.

-   [radialLinear](/docs/3.2.0/axes/radial/linear.html)

<a href="#visual-components" class="header-anchor">#</a> Visual Components
--------------------------------------------------------------------------

A radial axis is composed of visual components that can be individually configured. These components are:

-   [angle lines](#angle-lines)
-   [grid lines](#grid-lines)
-   [point labels](#point-labels)
-   [ticks](#ticks)

### <a href="#angle-lines" class="header-anchor">#</a> Angle Lines

The grid lines for an axis are drawn on the chart area. They stretch out from the center towards the edge of the canvas. In the example below, they are red.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/axes/radial/index.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'radar', data, options: { scales: { r: { angleLines: { color: 'red' } } } } };

    const config = {
      type: 'radar',
      data,
      options: {
        scales: {
          r: {
            angleLines: {
              color: 'red'
            }
          }
        }
      }
    };

const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[{ label: 'My First dataset', backgroundColor: 'rgba(54, 162, 235, 0.5)', borderColor: 'rgb(54, 162, 235)', borderWidth: 1, data: \[10, 20, 30, 40, 50, 0, 5\], }\] };

    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        data: [10, 20, 30, 40, 50, 0, 5],
      }]
    };

### <a href="#grid-lines" class="header-anchor">#</a> Grid Lines

The grid lines for an axis are drawn on the chart area. In the example below, they are red.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/axes/radial/index.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'radar', data, options: { scales: { r: { grid: { color: 'red' } } } } };

    const config = {
      type: 'radar',
      data,
      options: {
        scales: {
          r: {
            grid: {
              color: 'red'
            }
          }
        }
      }
    };

const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[{ label: 'My First dataset', backgroundColor: 'rgba(54, 162, 235, 0.5)', borderColor: 'rgb(54, 162, 235)', borderWidth: 1, data: \[10, 20, 30, 40, 50, 0, 5\], }\] };

    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        data: [10, 20, 30, 40, 50, 0, 5],
      }]
    };

### <a href="#point-labels" class="header-anchor">#</a> Point Labels

The point labels indicate the value for each angle line. In the example below, they are red.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/axes/radial/index.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'radar', data, options: { scales: { r: { pointLabels: { color: 'red' } } } } };

    const config = {
      type: 'radar',
      data,
      options: {
        scales: {
          r: {
            pointLabels: {
              color: 'red'
            }
          }
        }
      }
    };

const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[{ label: 'My First dataset', backgroundColor: 'rgba(54, 162, 235, 0.5)', borderColor: 'rgb(54, 162, 235)', borderWidth: 1, data: \[10, 20, 30, 40, 50, 0, 5\], }\] };

    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        data: [10, 20, 30, 40, 50, 0, 5],
      }]
    };

### <a href="#ticks" class="header-anchor">#</a> Ticks

The ticks are used to label values based on how far they are from the center of the axis. In the example below, they are red.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/axes/radial/index.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'radar', data, options: { scales: { r: { ticks: { color: 'red' } } } } };

    const config = {
      type: 'radar',
      data,
      options: {
        scales: {
          r: {
            ticks: {
              color: 'red'
            }
          }
        }
      }
    };

const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[{ label: 'My First dataset', backgroundColor: 'rgba(54, 162, 235, 0.5)', borderColor: 'rgb(54, 162, 235)', borderWidth: 1, data: \[10, 20, 30, 40, 50, 0, 5\], }\] };

    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        data: [10, 20, 30, 40, 50, 0, 5],
      }]
    };

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>
