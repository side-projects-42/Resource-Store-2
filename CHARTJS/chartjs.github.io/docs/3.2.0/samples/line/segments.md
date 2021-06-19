<a href="/docs/3.2.0/" class="home-link router-link-active"><img src="/docs/3.2.0/favicon.ico" alt="Chart.js" class="logo" /> <span class="site-name can-hide">Chart.js</span></a>

<a href="/docs/3.2.0/" class="nav-link">Home</a>

<a href="/docs/3.2.0/api/" class="nav-link">API</a>

<a href="/docs/3.2.0/samples/" class="nav-link router-link-active">Samples</a>

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

<a href="/docs/3.2.0/samples/" class="nav-link router-link-active">Samples</a>

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

-   Bar Charts <span class="arrow right"></span>

-   Line Charts <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/line/line.html" class="sidebar-link">Line Chart</a>
    -   <a href="/docs/3.2.0/samples/line/multi-axis.html" class="sidebar-link">Multi Axis Line Chart</a>
    -   <a href="/docs/3.2.0/samples/line/stepped.html" class="sidebar-link">Stepped Line Charts</a>
    -   <a href="/docs/3.2.0/samples/line/interpolation.html" class="sidebar-link">Interpolation Modes</a>
    -   <a href="/docs/3.2.0/samples/line/styling.html" class="sidebar-link">Line Styling</a>
    -   <a href="/docs/3.2.0/samples/line/segments.html" class="active sidebar-link">Line Segment Styling</a>

-   Other charts <span class="arrow right"></span>

-   Area charts <span class="arrow right"></span>

-   Scales <span class="arrow right"></span>

-   Scale Options <span class="arrow right"></span>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#line-segment-styling" class="header-anchor">#</a> Line Segment Styling
================================================================================

config

segmentUtils

genericOptions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/line/segments.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: { labels: Utils.months({count: 7}), datasets: \[{ label: 'My First Dataset', data: \[65, 59, NaN, 48, 56, 57, 40\], borderColor: 'rgb(75, 192, 192)', segment: { borderColor: ctx =&gt; skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)'), borderDash: ctx =&gt; skipped(ctx, \[6, 6\]), } }\] }, options: genericOptions };

    const config = {
      type: 'line',
      data: {
        labels: Utils.months({count: 7}),
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, NaN, 48, 56, 57, 40],
          borderColor: 'rgb(75, 192, 192)',
          segment: {
            borderColor: ctx => skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)'),
            borderDash: ctx => skipped(ctx, [6, 6]),
          }
        }]
      },
      options: genericOptions
    };

const skipped = (ctx, value) =&gt; ctx.p0.skip || ctx.p1.skip ? value : undefined; const down = (ctx, value) =&gt; ctx.p0.parsed.y &gt; ctx.p1.parsed.y ? value : undefined;

    const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
    const down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

const genericOptions = { fill: false, interaction: { intersect: false }, radius: 0, };

    const genericOptions = {
      fill: false,
      interaction: {
        intersect: false
      },
      radius: 0,
    };

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/line/styling.html" class="prev">Line Styling</a> </span> <span class="next"> [Bubble](/docs/3.2.0/samples/other-charts/bubble.html) → </span>
