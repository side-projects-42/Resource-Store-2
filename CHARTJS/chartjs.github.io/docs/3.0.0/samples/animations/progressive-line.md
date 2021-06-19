<a href="/docs/3.0.0/" class="home-link router-link-active"><img src="/docs/3.0.0/favicon.ico" alt="Chart.js" class="logo" /> <span class="site-name can-hide">Chart.js</span></a>

<a href="/docs/3.0.0/" class="nav-link">Home</a>

<a href="/docs/3.0.0/api/" class="nav-link">API</a>

<a href="/docs/3.0.0/samples/" class="nav-link router-link-active">Samples</a>

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

<a href="/docs/3.0.0/samples/" class="nav-link router-link-active">Samples</a>

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

-   Line Charts <span class="arrow right"></span>

-   Other charts <span class="arrow right"></span>

-   Area charts <span class="arrow right"></span>

-   Scales <span class="arrow right"></span>

-   Scale Options <span class="arrow right"></span>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/samples/animations/delay.html" class="sidebar-link">Delay</a>
    -   <a href="/docs/3.0.0/samples/animations/drop.html" class="sidebar-link">Drop</a>
    -   <a href="/docs/3.0.0/samples/animations/loop.html" class="sidebar-link">Loop</a>
    -   <a href="/docs/3.0.0/samples/animations/progressive-line.html" class="active sidebar-link">Progressive Line</a>

-   Advanced <span class="arrow right"></span>

<a href="#progressive-line" class="header-anchor">#</a> Progressive Line
========================================================================

config

animation

data

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/animations/progressive-line.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: { datasets: \[{ borderColor: Utils.CHART\_COLORS.red, borderWidth: 1, radius: 0, data: data, }, { borderColor: Utils.CHART\_COLORS.blue, borderWidth: 1, radius: 0, data: data2, }\] }, options: { animation, interaction: { intersect: false }, plugins: { legend: false }, scales: { x: { type: 'linear' } } } };

    const config = {
      type: 'line',
      data: {
        datasets: [{
          borderColor: Utils.CHART_COLORS.red,
          borderWidth: 1,
          radius: 0,
          data: data,
        },
        {
          borderColor: Utils.CHART_COLORS.blue,
          borderWidth: 1,
          radius: 0,
          data: data2,
        }]
      },
      options: {
        animation,
        interaction: {
          intersect: false
        },
        plugins: {
          legend: false
        },
        scales: {
          x: {
            type: 'linear'
          }
        }
      }
    };

const totalDuration = 10000; const delayBetweenPoints = totalDuration / data.length; const previousY = (ctx) =&gt; ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data\[ctx.index - 1\].getProps(\['y'\], true).y; const animation = { x: { type: 'number', easing: 'linear', duration: delayBetweenPoints, from: NaN, // the point is initially skipped delay(ctx) { if (ctx.type !== 'data' || ctx.xStarted) { return 0; } ctx.xStarted = true; return ctx.index \* delayBetweenPoints; } }, y: { type: 'number', easing: 'linear', duration: delayBetweenPoints, from: previousY, delay(ctx) { if (ctx.type !== 'data' || ctx.yStarted) { return 0; } ctx.yStarted = true; return ctx.index \* delayBetweenPoints; } } };

    const totalDuration = 10000;
    const delayBetweenPoints = totalDuration / data.length;
    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    const animation = {
      x: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: NaN, // the point is initially skipped
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.xStarted) {
            return 0;
          }
          ctx.xStarted = true;
          return ctx.index * delayBetweenPoints;
        }
      },
      y: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.yStarted) {
            return 0;
          }
          ctx.yStarted = true;
          return ctx.index * delayBetweenPoints;
        }
      }
    };

const data = \[\]; const data2 = \[\]; let prev = 100; let prev2 = 80; for (let i = 0; i &lt; 1000; i++) { prev += 5 - Math.random() \* 10; data.push({x: i, y: prev}); prev2 += 5 - Math.random() \* 10; data2.push({x: i, y: prev2}); }

    const data = [];
    const data2 = [];
    let prev = 100;
    let prev2 = 80;
    for (let i = 0; i < 1000; i++) {
      prev += 5 - Math.random() * 10;
      data.push({x: i, y: prev});
      prev2 += 5 - Math.random() * 10;
      data2.push({x: i, y: prev2});
    }

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 8:04:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/samples/animations/loop.html" class="prev">Loop</a> </span> <span class="next"> [Animation Progress Bar](/docs/3.0.0/samples/advanced/progress-bar.html) → </span>
