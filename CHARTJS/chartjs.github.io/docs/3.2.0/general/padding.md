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

-   General <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/general/data-structures.html" class="sidebar-link">Data structures</a>
    -   <a href="/docs/3.2.0/general/accessibility.html" class="sidebar-link">Accessibility</a>
    -   <a href="/docs/3.2.0/general/options.html" class="sidebar-link">Options</a>
    -   <a href="/docs/3.2.0/general/colors.html" class="sidebar-link">Colors</a>
    -   <a href="/docs/3.2.0/general/fonts.html" class="sidebar-link">Fonts</a>
    -   <a href="/docs/3.2.0/general/padding.html" class="active sidebar-link">Padding</a>
    -   <a href="/docs/3.2.0/general/performance.html" class="sidebar-link">Performance</a>

-   Configuration <span class="arrow right"></span>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#padding" class="header-anchor">#</a> Padding
======================================================

Padding values in Chart options can be supplied in couple of different formats.

<a href="#number" class="header-anchor">#</a> Number
----------------------------------------------------

If this value is a number, it is applied to all sides (left, top, right, bottom).

For example, defining a 20px padding to all sides of chart:

    let chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            layout: {
                padding: 20
            }
        }
    });

<a href="#top-left-bottom-right-object" class="header-anchor">#</a> {top, left, bottom, right} object
-----------------------------------------------------------------------------------------------------

If this value is an object, the `left` property defines the left padding. Similarly the `right`, `top` and `bottom` properties can also be specified. Omitted properties default to `0`.

Lets say you wanted to add 50px of padding to the left side of the chart canvas, you would do:

    let chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            layout: {
                padding: {
                    left: 50
                }
            }
        }
    });

<a href="#x-y-object" class="header-anchor">#</a> {x, y} object
---------------------------------------------------------------

This is a shorthand for defining left/right and top/bottom to same values.

For example, 10px left / right and 4px top / bottom padding on a Radial Linear Axis [tick backdropPadding](/docs/3.2.0/axes/radial/linear.html#linear-radial-axis-specific-tick-options):

    let chart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: {
            scales: {
              r: {
                ticks: {
                  backdropPadding: {
                      x: 10,
                      y: 4
                  }
                }
            }
        }
    });

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/general/fonts.html" class="prev">Fonts</a> </span> <span class="next"> [Performance](/docs/3.2.0/general/performance.html) → </span>
