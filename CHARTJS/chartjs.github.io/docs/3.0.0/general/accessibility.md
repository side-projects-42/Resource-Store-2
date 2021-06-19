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
    -   <a href="/docs/3.0.0/general/accessibility.html" class="active sidebar-link">Accessibility</a>
    -   <a href="/docs/3.0.0/general/options.html" class="sidebar-link">Options</a>
    -   <a href="/docs/3.0.0/general/colors.html" class="sidebar-link">Colors</a>
    -   <a href="/docs/3.0.0/general/fonts.html" class="sidebar-link">Fonts</a>
    -   <a href="/docs/3.0.0/general/padding.html" class="sidebar-link">Padding</a>
    -   <a href="/docs/3.0.0/general/performance.html" class="sidebar-link">Performance</a>

-   Configuration <span class="arrow right"></span>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#accessibility" class="header-anchor">#</a> Accessibility
==================================================================

Chart.js charts are rendered on user provided `canvas` elements. Thus, it is up to the user to create the `canvas` element in a way that is accessible. The `canvas` element has support in all browsers and will render on screen but the `canvas` content will not be accessible to screen readers.

With `canvas`, the accessibility has to be added with ARIA attributes on the `canvas` element or added using internal fallback content placed within the opening and closing canvas tags.

This [website <span class="sr-only">(opens new window)</span>](http://pauljadam.com/demos/canvas.html) has a more detailed explanation of `canvas` accessibility as well as in depth examples.

<a href="#examples" class="header-anchor">#</a> Examples
--------------------------------------------------------

These are some examples of **accessible** `canvas` elements.

By setting the `role` and `aria-label`, this `canvas` now has an accessible name.

    <canvas id="goodCanvas1" width="400" height="100" aria-label="Hello ARIA World" role="img"></canvas>

This `canvas` element has a text alternative via fallback content.

    <canvas id="okCanvas2" width="400" height="100">
        <p>Hello Fallback World</p>
    </canvas>

These are some bad examples of **inaccessible** `canvas` elements.

This `canvas` element does not have an accessible name or role.

    <canvas id="badCanvas1" width="400" height="100"></canvas>

This `canvas` element has inaccessible fallback content.

    <canvas id="badCanvas2" width="400" height="100">Your browser does not support the canvas element.</canvas>

<span class="prefix">Last Updated:</span> <span class="time">3/30/2021, 10:32:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/general/data-structures.html" class="prev">Data structures</a> </span> <span class="next"> [Options](/docs/3.0.0/general/options.html) → </span>
