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
    -   <a href="/docs/3.2.0/configuration/canvas-background.html" class="active sidebar-link">Canvas background</a>
    -   <a href="/docs/3.2.0/configuration/animations.html" class="sidebar-link">Animations</a>
    -   <a href="/docs/3.2.0/configuration/layout.html" class="sidebar-link">Layout</a>
    -   <a href="/docs/3.2.0/configuration/legend.html" class="sidebar-link">Legend</a>
    -   <a href="/docs/3.2.0/configuration/title.html" class="sidebar-link">Title</a>
    -   <a href="/docs/3.2.0/configuration/tooltip.html" class="sidebar-link">Tooltip</a>
    -   <a href="/docs/3.2.0/configuration/elements.html" class="sidebar-link">Elements</a>
    -   <a href="/docs/3.2.0/configuration/decimation.html" class="sidebar-link">Data Decimation</a>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#canvas-background" class="header-anchor">#</a> Canvas background
==========================================================================

In some use cases you would want a background image or color over the whole canvas. There is no built-in support for this, the way you can achieve this is by writing a custom plugin.

In the two example plugins underneath here you can see how you can draw a color or image to the canvas as background. This way of giving the chart a background is only necessary if you want to export the chart with that specific background. For normal use you can set the background more easily with [CSS <span class="sr-only">(opens new window)</span>](https://www.w3schools.com/cssref/css3_pr_background.asp).

config

setup

plugin

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/configuration/canvas-background.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'doughnut', data: data, plugins: \[plugin\], };

    const config = {
      type: 'doughnut',
      data: data,
      plugins: [plugin],
    };

const data = { labels: \[ 'Red', 'Blue', 'Yellow' \], datasets: \[{ label: 'My First Dataset', data: \[300, 50, 100\], backgroundColor: \[ 'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)' \], hoverOffset: 4 }\] };

    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

// Note: changes to the plugin code is not reflected to the chart, because the plugin is loaded at chart construction time and editor changes only trigger an chart.update(). const plugin = { id: 'custom\_canvas\_background\_color', beforeDraw: (chart) =&gt; { const ctx = chart.canvas.getContext('2d'); ctx.save(); ctx.globalCompositeOperation = 'destination-over'; ctx.fillStyle = 'lightGreen'; ctx.fillRect(0, 0, chart.width, chart.height); ctx.restore(); } };

    // Note: changes to the plugin code is not reflected to the chart, because the plugin is loaded at chart construction time and editor changes only trigger an chart.update().
    const plugin = {
      id: 'custom_canvas_background_color',
      beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = 'lightGreen';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      }
    };

config

setup

plugin

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/configuration/canvas-background.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'doughnut', data: data, plugins: \[plugin\], };

    const config = {
      type: 'doughnut',
      data: data,
      plugins: [plugin],
    };

const data = { labels: \[ 'Red', 'Blue', 'Yellow' \], datasets: \[{ label: 'My First Dataset', data: \[300, 50, 100\], backgroundColor: \[ 'rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)' \], hoverOffset: 4 }\] };

    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

// Note: changes to the plugin code is not reflected to the chart, because the plugin is loaded at chart construction time and editor changes only trigger an chart.update(). const image = new Image(); image.src = 'https://www.chartjs.org/img/chartjs-logo.svg'; const plugin = { id: 'custom\_canvas\_background\_image', beforeDraw: (chart) =&gt; { if (image.complete) { const ctx = chart.ctx; const {top, left, width, height} = chart.chartArea; const x = left + width / 2 - image.width / 2; const y = top + height / 2 - image.height / 2; ctx.drawImage(image, x, y); } else { image.onload = () =&gt; chart.draw(); } } };

    // Note: changes to the plugin code is not reflected to the chart, because the plugin is loaded at chart construction time and editor changes only trigger an chart.update().
    const image = new Image();
    image.src = 'https://www.chartjs.org/img/chartjs-logo.svg';
    const plugin = {
      id: 'custom_canvas_background_image',
      beforeDraw: (chart) => {
        if (image.complete) {
          const ctx = chart.ctx;
          const {top, left, width, height} = chart.chartArea;
          const x = left + width / 2 - image.width / 2;
          const y = top + height / 2 - image.height / 2;
          ctx.drawImage(image, x, y);
        } else {
          image.onload = () => chart.draw();
        }
      }
    };

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/configuration/interactions.html" class="prev">Interactions</a> </span> <span class="next"> [Animations](/docs/3.2.0/configuration/animations.html) → </span>
