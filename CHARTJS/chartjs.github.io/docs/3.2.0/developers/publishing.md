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

-   Developers <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/developers/" class="sidebar-link">Developers</a>
    -   <a href="/docs/3.2.0/developers/api.html" class="sidebar-link">API</a>
    -   <a href="/docs/3.2.0/api/" class="sidebar-link">TypeDoc</a>
    -   <a href="/docs/3.2.0/developers/updates.html" class="sidebar-link">Updating Charts</a>
    -   <a href="/docs/3.2.0/developers/plugins.html" class="sidebar-link">Plugins</a>
    -   <a href="/docs/3.2.0/developers/charts.html" class="sidebar-link">New Charts</a>
    -   <a href="/docs/3.2.0/developers/axes.html" class="sidebar-link">New Axes</a>
    -   <a href="/docs/3.2.0/developers/contributing.html" class="sidebar-link">Contributing</a>
    -   <a href="/docs/3.2.0/developers/publishing.html" class="active sidebar-link">Publishing an extension</a>

<a href="#publishing-an-extension" class="header-anchor">#</a> Publishing an extension
======================================================================================

If you are planning on publishing an extension for Chart.js, here are a some pointers.

<a href="#awesome" class="header-anchor">#</a> Awesome
------------------------------------------------------

You'd probably want your extension to be listed in the [awesome <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/awesome).

Note the minimum extension age requirement of 30 days.

<a href="#esm" class="header-anchor">#</a> ESM
----------------------------------------------

If you are utilizing ESM, you probably still want to publish an UMD bundle of your extension. Because Chart.js v3 is tree shakeable, the interface is a bit different. UMD package's global `Chart` includes everything, while ESM package exports all the things separately. Fortunately, most of the exports can be mapped automatically by the bundlers.

But not the helpers.

In UMD, helpers are available through `Chart.helpers`. In ESM, they are imported from `chart.js/helpers`.

For example `import {isNullOrUndef} from 'chart.js/helpers'` is available at `Chart.helpers.isNullOrUndef` for UMD.

### <a href="#rollup" class="header-anchor">#</a> Rollup

`output.globals` can be used to convert the helpers.

    module.exports = {
      // ...
      output: {
        globals: {
          'chart.js': 'Chart',
          'chart.js/helpers': 'Chart.helpers'
        }
      }
    };

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/developers/contributing.html" class="prev">Contributing</a> </span>
