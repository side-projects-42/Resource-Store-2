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

-   Line Charts <span class="arrow right"></span>

-   Other charts <span class="arrow right"></span>

-   Area charts <span class="arrow right"></span>

-   Scales <span class="arrow right"></span>

-   Scale Options <span class="arrow right"></span>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/advanced/data-decimation.html" class="sidebar-link">Data Decimation</a>
    -   <a href="/docs/3.2.0/samples/advanced/progress-bar.html" class="sidebar-link">Animation Progress Bar</a>
    -   <a href="/docs/3.2.0/samples/advanced/radial-gradient.html" class="sidebar-link">Radial Gradient</a>
    -   <a href="/docs/3.2.0/samples/advanced/linear-gradient.html" class="sidebar-link">Linear Gradient</a>
    -   <a href="/docs/3.2.0/samples/advanced/programmatic-events.html" class="sidebar-link">Programmatic Event Triggers</a>
    -   <a href="/docs/3.2.0/samples/advanced/derived-axis-type.html" class="sidebar-link">Derived Axis Type</a>
    -   <a href="/docs/3.2.0/samples/advanced/derived-chart-type.html" class="active sidebar-link">Derived Chart Type</a>

-   Plugins <span class="arrow right"></span>

<a href="#derived-chart-type" class="header-anchor">#</a> Derived Chart Type
============================================================================

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/advanced/derived-chart-type.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'derivedBubble', data: data, options: { responsive: true, plugins: { title: { display: true, text: 'Derived Chart Type' }, } } };

    const config = {
      type: 'derivedBubble',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Derived Chart Type'
          },
        }
      }
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: -100, max: 100, rmin: 1, rmax: 20}; const data = { datasets: \[ { label: 'My First dataset', backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), borderColor: Utils.CHART\_COLORS.blue, borderWidth: 1, boxStrokeStyle: 'red', data: Utils.bubbles(NUMBER\_CFG) } \], };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100, rmin: 1, rmax: 20};
    const data = {
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
          borderColor: Utils.CHART_COLORS.blue,
          borderWidth: 1,
          boxStrokeStyle: 'red',
          data: Utils.bubbles(NUMBER_CFG)
        }
      ],
    };

<a href="#derivedbubble-implementation" class="header-anchor">#</a> DerivedBubble Implementation
------------------------------------------------------------------------------------------------

    import {Chart, BubbleController} from 'chart.js';
    class Custom extends BubbleController {
      draw() {
        // Call bubble controller method to draw all the points
        super.draw(arguments);
        // Now we can do some custom drawing for this dataset.
        // Here we'll draw a box around the first point in each dataset,
        // using `boxStrokeStyle` dataset option for color
        var meta = this.getMeta();
        var pt0 = meta.data[0];
        const {x, y} = pt0.getProps(['x', 'y']);
        const {radius} = pt0.options;
        var ctx = this.chart.ctx;
        ctx.save();
        ctx.strokeStyle = this.options.boxStrokeStyle;
        ctx.lineWidth = 1;
        ctx.strokeRect(x - radius, y - radius, 2 * radius, 2 * radius);
        ctx.restore();
      }
    }
    Custom.id = 'derivedBubble';
    Custom.defaults = {
      // Custom defaults. Bubble defaults are inherited.
      boxStrokeStyle: 'red'
    };
    // Overrides are only inherited, but not merged if defined
    // Custom.overrides = Chart.overrides.bubble;
    // Stores the controller so that the chart initialization routine can look it up
    Chart.register(Custom);

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/advanced/derived-axis-type.html" class="prev">Derived Axis Type</a> </span> <span class="next"> [Chart Area Border](/docs/3.2.0/samples/plugins/chart-area-border.html) → </span>
