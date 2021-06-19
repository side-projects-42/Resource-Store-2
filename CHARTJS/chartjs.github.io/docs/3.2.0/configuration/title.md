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

-   Configuration <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/configuration/" class="sidebar-link">Configuration</a>
    -   <a href="/docs/3.2.0/configuration/responsive.html" class="sidebar-link">Responsive Charts</a>
    -   <a href="/docs/3.2.0/configuration/device-pixel-ratio.html" class="sidebar-link">Device Pixel Ratio</a>
    -   <a href="/docs/3.2.0/configuration/locale.html" class="sidebar-link">Locale</a>
    -   <a href="/docs/3.2.0/configuration/interactions.html" class="sidebar-link">Interactions</a>
    -   <a href="/docs/3.2.0/configuration/canvas-background.html" class="sidebar-link">Canvas background</a>
    -   <a href="/docs/3.2.0/configuration/animations.html" class="sidebar-link">Animations</a>
    -   <a href="/docs/3.2.0/configuration/layout.html" class="sidebar-link">Layout</a>
    -   <a href="/docs/3.2.0/configuration/legend.html" class="sidebar-link">Legend</a>
    -   <a href="/docs/3.2.0/configuration/title.html" class="active sidebar-link">Title</a>
    -   <a href="/docs/3.2.0/configuration/tooltip.html" class="sidebar-link">Tooltip</a>
    -   <a href="/docs/3.2.0/configuration/elements.html" class="sidebar-link">Elements</a>
    -   <a href="/docs/3.2.0/configuration/decimation.html" class="sidebar-link">Data Decimation</a>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#title" class="header-anchor">#</a> Title
==================================================

The chart title defines text to draw at the top of the chart.

<a href="#title-configuration" class="header-anchor">#</a> Title Configuration
------------------------------------------------------------------------------

Namespace: `options.plugins.title`, the global options for the chart title is defined in `Chart.defaults.plugins.title`.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th style="text-align: center;"><a href="/docs/3.2.0/general/options.html#scriptable-options">Scriptable</a></th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>align</code></td><td><code>string</code></td><td><code>'center'</code></td><td style="text-align: center;">Yes</td><td>Alignment of the title. <a href="#align">more...</a></td></tr><tr class="even"><td><code>color</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td><code>Chart.defaults.color</code></td><td style="text-align: center;">Yes</td><td>Color of text.</td></tr><tr class="odd"><td><code>display</code></td><td><code>boolean</code></td><td><code>false</code></td><td style="text-align: center;">Yes</td><td>Is the title shown?</td></tr><tr class="even"><td><code>fullSize</code></td><td><code>boolean</code></td><td><code>true</code></td><td style="text-align: center;">Yes</td><td>Marks that this box should take the full width/height of the canvas. If <code>false</code>, the box is sized and placed above/beside the chart area.</td></tr><tr class="odd"><td><code>position</code></td><td><code>string</code></td><td><code>'top'</code></td><td style="text-align: center;">Yes</td><td>Position of title. <a href="#position">more...</a></td></tr><tr class="even"><td><code>font</code></td><td><code>Font</code></td><td><code>{weight: 'bold'}</code></td><td style="text-align: center;">Yes</td><td>See <a href="/docs/3.2.0/general/fonts.html">Fonts</a></td></tr><tr class="odd"><td><code>padding</code></td><td><a href="/docs/3.2.0/general/padding.html"><code>Padding</code></a></td><td><code>10</code></td><td style="text-align: center;">Yes</td><td>Padding to apply around the title. Only <code>top</code> and <code>bottom</code> are implemented.</td></tr><tr class="even"><td><code>text</code></td><td><code>string</code>|<code>string[]</code></td><td><code>''</code></td><td style="text-align: center;">Yes</td><td>Title text to display. If specified as an array, text is rendered on multiple lines.</td></tr></tbody></table>

### <a href="#position" class="header-anchor">#</a> Position

Possible title position values are:

-   `'top'`
-   `'left'`
-   `'bottom'`
-   `'right'`

<a href="#align" class="header-anchor">#</a> Align
--------------------------------------------------

Alignment of the title. Options are:

-   `'start'`
-   `'center'`
-   `'end'`

<a href="#example-usage" class="header-anchor">#</a> Example Usage
------------------------------------------------------------------

The example below would enable a title of 'Custom Chart Title' on the chart that is created.

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Custom Chart Title'
                }
            }
        }
    });

This example shows how to specify separate top and bottom title text padding:

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Custom Chart Title',
                    padding: {
                        top: 10,
                        bottom: 30
                    }
                }
            }
        }
    });

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/configuration/legend.html" class="prev">Legend</a> </span> <span class="next"> [Tooltip](/docs/3.2.0/configuration/tooltip.html) → </span>
