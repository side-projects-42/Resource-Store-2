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

-   General <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/general/data-structures.html" class="sidebar-link">Data structures</a>
    -   <a href="/docs/3.0.0/general/accessibility.html" class="sidebar-link">Accessibility</a>
    -   <a href="/docs/3.0.0/general/options.html" class="sidebar-link">Options</a>
    -   <a href="/docs/3.0.0/general/colors.html" class="active sidebar-link">Colors</a>
    -   <a href="/docs/3.0.0/general/fonts.html" class="sidebar-link">Fonts</a>
    -   <a href="/docs/3.0.0/general/padding.html" class="sidebar-link">Padding</a>
    -   <a href="/docs/3.0.0/general/performance.html" class="sidebar-link">Performance</a>

-   Configuration <span class="arrow right"></span>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#colors" class="header-anchor">#</a> Colors
====================================================

When supplying colors to Chart options, you can use a number of formats. You can specify the color as a string in hexadecimal, RGB, or HSL notations. If a color is needed, but not specified, Chart.js will use the global default color. There are 3 color options, stored at `Chart.defaults`, to set:

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backgroundColor</code></td><td><code>Color</code></td><td><code>rgba(0, 0, 0, 0.1)</code></td><td>Background color.</td></tr><tr class="even"><td><code>borderColor</code></td><td><code>Color</code></td><td><code>rgba(0, 0, 0, 0.1)</code></td><td>Border color.</td></tr><tr class="odd"><td><code>color</code></td><td><code>Color</code></td><td><code>#666</code></td><td>Font color.</td></tr></tbody></table>

You can also pass a [CanvasGradient <span class="sr-only">(opens new window)</span>](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient) object. You will need to create this before passing to the chart, but using it you can achieve some interesting effects.

<a href="#patterns-and-gradients" class="header-anchor">#</a> Patterns and Gradients
------------------------------------------------------------------------------------

An alternative option is to pass a [CanvasPattern <span class="sr-only">(opens new window)</span>](https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern) or [CanvasGradient <span class="sr-only">(opens new window)</span>](https://developer.mozilla.org/en/docs/Web/API/CanvasGradient) object instead of a string colour.

For example, if you wanted to fill a dataset with a pattern from an image you could do the following.

    var img = new Image();
    img.src = 'https://example.com/my_image.png';
    img.onload = function() {
        var ctx = document.getElementById('canvas').getContext('2d');
        var fillPattern = ctx.createPattern(img, 'repeat');
        var chart = new Chart(ctx, {
            data: {
                labels: ['Item 1', 'Item 2', 'Item 3'],
                datasets: [{
                    data: [10, 20, 30],
                    backgroundColor: fillPattern
                }]
            }
        });
    };

Using pattern fills for data graphics can help viewers with vision deficiencies (e.g. color-blindness or partial sight) to [more easily understand your data <span class="sr-only">(opens new window)</span>](http://betweentwobrackets.com/data-graphics-and-colour-vision/).

Using the [Patternomaly <span class="sr-only">(opens new window)</span>](https://github.com/ashiguruma/patternomaly) library you can generate patterns to fill datasets.

    var chartData = {
        datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: [
                pattern.draw('square', '#ff6384'),
                pattern.draw('circle', '#36a2eb'),
                pattern.draw('diamond', '#cc65fe'),
                pattern.draw('triangle', '#ffce56')
            ]
        }],
        labels: ['Red', 'Blue', 'Purple', 'Yellow']
    };

<span class="prefix">Last Updated:</span> <span class="time">3/30/2021, 10:32:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/general/options.html" class="prev">Options</a> </span> <span class="next"> [Fonts](/docs/3.0.0/general/fonts.html) → </span>
