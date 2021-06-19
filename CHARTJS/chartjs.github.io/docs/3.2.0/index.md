<a href="/docs/3.2.0/" class="home-link router-link-exact-active router-link-active"><img src="/docs/3.2.0/favicon.ico" alt="Chart.js" class="logo" /> <span class="site-name can-hide">Chart.js</span></a>

<a href="/docs/3.2.0/" class="nav-link router-link-exact-active router-link-active">Home</a>

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

<a href="/docs/3.2.0/" class="nav-link router-link-exact-active router-link-active">Home</a>

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

-   <a href="/docs/3.2.0/" class="active sidebar-link">Chart.js</a>
-   Getting Started <span class="arrow right"></span>

-   General <span class="arrow right"></span>

-   Configuration <span class="arrow right"></span>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#chart-js" class="header-anchor">#</a> Chart.js
========================================================

[![slack](https://img.shields.io/badge/slack-chartjs-blue.svg?style=flat-square&maxAge=3600) <span class="sr-only">(opens new window)</span>](https://chartjs-slack.herokuapp.com/)

<a href="#installation" class="header-anchor">#</a> Installation
----------------------------------------------------------------

You can get the latest version of Chart.js from [npm <span class="sr-only">(opens new window)</span>](https://npmjs.com/package/chart.js), the [GitHub releases <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/releases/latest), or use a [Chart.js CDN <span class="sr-only">(opens new window)</span>](https://www.jsdelivr.com/package/npm/chart.js). Detailed installation instructions can be found on the [installation](/docs/3.2.0/getting-started/installation.html) page.

<a href="#creating-a-chart" class="header-anchor">#</a> Creating a Chart
------------------------------------------------------------------------

It's easy to get started with Chart.js. All that's required is the script included in your page along with a single `<canvas>` node to render the chart.

In this example, we create a bar chart for a single dataset and render that in our page. You can see all the ways to use Chart.js in the [usage documentation](/docs/3.2.0/getting-started/usage.html).

    <canvas id="myChart" width="400" height="400"></canvas>
    <script>
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    </script>

<a href="#contributing" class="header-anchor">#</a> Contributing
----------------------------------------------------------------

Before submitting an issue or a pull request to the project, please take a moment to look over the [contributing guidelines](/docs/3.2.0/developers/contributing.html) first.

For support using Chart.js, please post questions with the [`chartjs` tag on Stack Overflow <span class="sr-only">(opens new window)</span>](https://stackoverflow.com/questions/tagged/chartjs).

<a href="#license" class="header-anchor">#</a> License
------------------------------------------------------

Chart.js is available under the [MIT license <span class="sr-only">(opens new window)</span>](https://opensource.org/licenses/MIT).

Documentation is copyright © 2014-2021 Chart.js contributors.

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="next"> [Getting Started](/docs/3.2.0/getting-started/) → </span>
