<a href="/docs/3.0.0/" class="home-link router-link-active"><img src="/docs/3.0.0/favicon.ico" alt="Chart.js" class="logo" /> <span class="site-name can-hide">Chart.js</span></a>

<a href="/docs/3.0.0/" class="nav-link">Home</a>

<a href="/docs/3.0.0/api/" class="nav-link">API</a>

<a href="/docs/3.0.0/samples/" class="nav-link">Samples</a>

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

<a href="/docs/3.0.0/" class="nav-link">Home</a>

<a href="/docs/3.0.0/api/" class="nav-link">API</a>

<a href="/docs/3.0.0/samples/" class="nav-link">Samples</a>

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

-   <a href="/docs/3.0.0/" class="sidebar-link">Chart.js</a>
-   Getting Started <span class="arrow right"></span>

-   General <span class="arrow right"></span>

-   Configuration <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/configuration/" class="sidebar-link">Configuration</a>
    -   <a href="/docs/3.0.0/configuration/responsive.html" class="sidebar-link">Responsive Charts</a>
    -   <a href="/docs/3.0.0/configuration/device-pixel-ratio.html" class="sidebar-link">Device Pixel Ratio</a>
    -   <a href="/docs/3.0.0/configuration/locale.html" class="active sidebar-link">Locale</a>
    -   <a href="/docs/3.0.0/configuration/interactions.html" class="sidebar-link">Interactions</a>
    -   <a href="/docs/3.0.0/configuration/canvas-background.html" class="sidebar-link">Canvas background</a>
    -   <a href="/docs/3.0.0/configuration/animations.html" class="sidebar-link">Animations</a>
    -   <a href="/docs/3.0.0/configuration/layout.html" class="sidebar-link">Layout</a>
    -   <a href="/docs/3.0.0/configuration/legend.html" class="sidebar-link">Legend</a>
    -   <a href="/docs/3.0.0/configuration/title.html" class="sidebar-link">Title</a>
    -   <a href="/docs/3.0.0/configuration/tooltip.html" class="sidebar-link">Tooltip</a>
    -   <a href="/docs/3.0.0/configuration/elements.html" class="sidebar-link">Elements</a>
    -   <a href="/docs/3.0.0/configuration/decimation.html" class="sidebar-link">Data Decimation</a>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#locale" class="header-anchor">#</a> Locale
====================================================

For applications where the numbers of ticks on scales must be formatted accordingly with a language sensitive number formatting, you can enable this kind of formatting by setting the `locale` option.

The locale is a string that is a [Unicode BCP 47 locale identifier <span class="sr-only">(opens new window)</span>](https://www.unicode.org/reports/tr35/tr35.html#BCP_47_Conformance).

A Unicode BCP 47 locale identifier consists of

1.  a language code,
2.  (optionally) a script code,
3.  (optionally) a region (or country) code,
4.  (optionally) one or more variant codes, and
5.  (optionally) one or more extension sequences,

with all present components separated by hyphens.

By default the chart is using the default locale of the platform which is running on.

<a href="#configuration-options" class="header-anchor">#</a> Configuration Options
----------------------------------------------------------------------------------

Namespace: `options`

<table><colgroup><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>locale</code></td><td><code>string</code></td><td><code>undefined</code></td><td>a string with a BCP 47 language tag, leveraging on INTL NumberFormat<span class="sr-only">(opens new window)</span>.</td></tr></tbody></table>

<span class="prefix">Last Updated:</span> <span class="time">3/30/2021, 10:32:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/configuration/device-pixel-ratio.html" class="prev">Device Pixel Ratio</a> </span> <span class="next"> [Interactions](/docs/3.0.0/configuration/interactions.html) → </span>
