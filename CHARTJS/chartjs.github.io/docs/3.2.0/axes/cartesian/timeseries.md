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

-   Axes <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/axes/" class="sidebar-link">Axes</a>
    -   Cartesian <span class="arrow down"></span>

        -   <a href="/docs/3.2.0/axes/cartesian/" class="sidebar-link">Cartesian Axes</a>
        -   <a href="/docs/3.2.0/axes/cartesian/category.html" class="sidebar-link">Category Axis</a>
        -   <a href="/docs/3.2.0/axes/cartesian/linear.html" class="sidebar-link">Linear Axis</a>
        -   <a href="/docs/3.2.0/axes/cartesian/logarithmic.html" class="sidebar-link">Logarithmic Axis</a>
        -   <a href="/docs/3.2.0/axes/cartesian/time.html" class="sidebar-link">Time Cartesian Axis</a>
        -   <a href="/docs/3.2.0/axes/cartesian/timeseries.html" class="active sidebar-link">Time Series Axis</a>

    -   Radial <span class="arrow right"></span>

    -   <a href="/docs/3.2.0/axes/labelling.html" class="sidebar-link">Labeling Axes</a>
    -   <a href="/docs/3.2.0/axes/styling.html" class="sidebar-link">Styling</a>

-   Developers <span class="arrow right"></span>

<a href="#time-series-axis" class="header-anchor">#</a> Time Series Axis
========================================================================

The time series scale extends from the time scale and supports all the same options. However, for the time series scale, each data point is spread equidistant.

<a href="#example" class="header-anchor">#</a> Example
------------------------------------------------------

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                x: {
                    type: 'timeseries',
                }
            }
        }
    });

<a href="#more-details" class="header-anchor">#</a> More details
----------------------------------------------------------------

Please see [the time scale documentation](/docs/3.2.0/axes/cartesian/time.html) for all other details.

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/axes/cartesian/time.html" class="prev">Time Cartesian Axis</a> </span> <span class="next"> [Linear Radial Axis](/docs/3.2.0/axes/radial/linear.html) → </span>
