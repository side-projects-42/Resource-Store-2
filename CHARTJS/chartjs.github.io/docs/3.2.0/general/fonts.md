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
    -   <a href="/docs/3.2.0/general/fonts.html" class="active sidebar-link">Fonts</a>
    -   <a href="/docs/3.2.0/general/padding.html" class="sidebar-link">Padding</a>
    -   <a href="/docs/3.2.0/general/performance.html" class="sidebar-link">Performance</a>

-   Configuration <span class="arrow right"></span>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#fonts" class="header-anchor">#</a> Fonts
==================================================

There are special global settings that can change all of the fonts on the chart. These options are in `Chart.defaults.font`. The global font settings only apply when more specific options are not included in the config.

For example, in this chart the text will all be red except for the labels in the legend.

    Chart.defaults.font.size = 16;
    let chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            plugins: {
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    });

<table><colgroup><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /><col style="width: 25%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>family</code></td><td><code>string</code></td><td><code>"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"</code></td><td>Default font family for all text, follows CSS font-family options.</td></tr><tr class="even"><td><code>size</code></td><td><code>number</code></td><td><code>12</code></td><td>Default font size (in px) for text. Does not apply to radialLinear scale point labels.</td></tr><tr class="odd"><td><code>style</code></td><td><code>string</code></td><td><code>'normal'</code></td><td>Default font style. Does not apply to tooltip title or footer. Does not apply to chart title. Follows CSS font-style options (i.e. normal, italic, oblique, initial, inherit).</td></tr><tr class="even"><td><code>weight</code></td><td><code>string</code></td><td><code>undefined</code></td><td>Default font weight (boldness). (see MDN<span class="sr-only">(opens new window)</span>).</td></tr><tr class="odd"><td><code>lineHeight</code></td><td><code>number</code>|<code>string</code></td><td><code>1.2</code></td><td>Height of an individual line of text (see MDN<span class="sr-only">(opens new window)</span>).</td></tr></tbody></table>

<a href="#missing-fonts" class="header-anchor">#</a> Missing Fonts
------------------------------------------------------------------

If a font is specified for a chart that does exist on the system, the browser will not apply the font when it is set. If you notice odd fonts appearing in your charts, check that the font you are applying exists on your system. See [issue 3318 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/issues/3318) for more details.

<a href="#loading-fonts" class="header-anchor">#</a> Loading Fonts
------------------------------------------------------------------

If a font is not cached and needs to be loaded, charts that use the font will need to be updated once the font is loaded. This can be accomplished using the [Font Loading APIs <span class="sr-only">(opens new window)</span>](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Font_Loading_API). See [issue 8020 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/issues/8020) for more details.

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/general/colors.html" class="prev">Colors</a> </span> <span class="next"> [Padding](/docs/3.2.0/general/padding.html) → </span>
