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
-   Getting Started <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/getting-started/" class="sidebar-link">Getting Started</a>
    -   <a href="/docs/3.2.0/getting-started/installation.html" class="sidebar-link">Installation</a>
    -   <a href="/docs/3.2.0/getting-started/integration.html" class="sidebar-link">Integration</a>
    -   <a href="/docs/3.2.0/getting-started/usage.html" class="active sidebar-link">Usage</a>
    -   <a href="/docs/3.2.0/getting-started/v3-migration.html" class="sidebar-link">3.x Migration Guide</a>

-   General <span class="arrow right"></span>

-   Configuration <span class="arrow right"></span>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#usage" class="header-anchor">#</a> Usage
==================================================

Chart.js can be used with ES6 modules, plain JavaScript, and module loaders.

<a href="#creating-a-chart" class="header-anchor">#</a> Creating a Chart
------------------------------------------------------------------------

To create a chart, we need to instantiate the `Chart` class. To do this, we need to pass in the node, jQuery instance, or 2d context of the canvas of where we want to draw the chart. Here's an example.

    <canvas id="myChart" width="400" height="400"></canvas>

    // Any of the following formats may be used
    var ctx = document.getElementById('myChart');
    var ctx = document.getElementById('myChart').getContext('2d');
    var ctx = $('#myChart');
    var ctx = 'myChart';

Once you have the element or context, you're ready to instantiate a pre-defined chart-type or create your own!

The following example instantiates a bar chart showing the number of votes for different colors and the y-axis starting at 0.

    <canvas id="myChart" width="400" height="400"></canvas>
    <script>
    var ctx = document.getElementById('myChart');
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

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/getting-started/integration.html" class="prev">Integration</a> </span> <span class="next"> [3.x Migration Guide](/docs/3.2.0/getting-started/v3-migration.html) → </span>
