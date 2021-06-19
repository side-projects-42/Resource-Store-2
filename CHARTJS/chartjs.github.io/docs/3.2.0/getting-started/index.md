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

    -   <a href="/docs/3.2.0/getting-started/" class="active sidebar-link">Getting Started</a>
    -   <a href="/docs/3.2.0/getting-started/installation.html" class="sidebar-link">Installation</a>
    -   <a href="/docs/3.2.0/getting-started/integration.html" class="sidebar-link">Integration</a>
    -   <a href="/docs/3.2.0/getting-started/usage.html" class="sidebar-link">Usage</a>
    -   <a href="/docs/3.2.0/getting-started/v3-migration.html" class="sidebar-link">3.x Migration Guide</a>

-   General <span class="arrow right"></span>

-   Configuration <span class="arrow right"></span>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#getting-started" class="header-anchor">#</a> Getting Started
======================================================================

Let's get started using Chart.js!

First, we need to have a canvas in our page. It's recommended to give the chart its own container for [responsiveness](/docs/3.2.0/configuration/responsive.html).

    <div>
      <canvas id="myChart"></canvas>
    </div>

Now that we have a canvas we can use, we need to include Chart.js in our page.

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

Now, we can create a chart. We add a script to our page:

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/getting-started/index.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data, options: {} };

    const config = {
      type: 'line',
      data,
      options: {}
    };

const labels = \[ 'January', 'February', 'March', 'April', 'May', 'June', \]; const data = { labels: labels, datasets: \[{ label: 'My First dataset', backgroundColor: 'rgb(255, 99, 132)', borderColor: 'rgb(255, 99, 132)', data: \[0, 10, 5, 2, 20, 30, 45\], }\] };

    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };

Finally, render the chart using our configuration:

    <script>
      // === include 'setup' then 'config' above ===
      var myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
    </script>

It's that easy to get started using Chart.js! From here you can explore the many options that can help you customise your charts with scales, tooltips, labels, colors, custom actions, and much more.

All our examples are [available online](/docs/3.2.0/samples/) but you can also download the `Chart.js.zip` archive attached to every [release <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/releases) to experiment with our samples locally from the `/samples` folder.

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/" class="prev router-link-active">Chart.js</a> </span> <span class="next"> [Installation](/docs/3.2.0/getting-started/installation.html) → </span>
