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

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/samples/advanced/progress-bar.html" class="sidebar-link">Animation Progress Bar</a>
    -   <a href="/docs/3.0.0/samples/advanced/radial-gradient.html" class="sidebar-link">Radial Gradient</a>
    -   <a href="/docs/3.0.0/samples/advanced/linear-gradient.html" class="sidebar-link">Linear Gradient</a>
    -   <a href="/docs/3.0.0/samples/advanced/programmatic-events.html" class="sidebar-link">Programmatic Event Triggers</a>
    -   <a href="/docs/3.0.0/samples/advanced/derived-axis-type.html" class="active sidebar-link">Derived Axis Type</a>
    -   <a href="/docs/3.0.0/samples/advanced/derived-chart-type.html" class="sidebar-link">Derived Chart Type</a>

<a href="#derived-axis-type" class="header-anchor">#</a> Derived Axis Type
==========================================================================

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/advanced/derived-axis-type.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data, options: { responsive: true, scales: { x: { display: true, }, y: { display: true, type: 'log2', } } } };

    const config = {
      type: 'line',
      data,
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,
            type: 'log2',
          }
        }
      }
    };

const DATA\_COUNT = 12; const NUMBER\_CFG = {count: DATA\_COUNT, min: 0, max: 1000}; const labels = Utils.months({count: DATA\_COUNT}); const data = { labels: labels, datasets: \[ { label: 'My First dataset', data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), fill: false, } \], };

    const DATA_COUNT = 12;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 1000};
    const labels = Utils.months({count: DATA_COUNT});
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'My First dataset',
          data: Utils.numbers(NUMBER_CFG),
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
          fill: false,
        }
      ],
    };

<a href="#log2-axis-implementation" class="header-anchor">#</a> Log2 axis implementation
----------------------------------------------------------------------------------------

    import {Scale, LinearScale} from 'chart.js';
    export default class Log2Axis extends Scale {
      constructor(cfg) {
        super(cfg);
        this._startValue = undefined;
        this._valueRange = 0;
      }
      parse(raw, index) {
        const value = LinearScale.prototype.parse.apply(this, [raw, index]);
        return isFinite(value) && value > 0 ? value : null;
      }
      determineDataLimits() {
        const {min, max} = this.getMinMax(true);
        this.min = isFinite(min) ? Math.max(0, min) : null;
        this.max = isFinite(max) ? Math.max(0, max) : null;
      }
      buildTicks() {
        const ticks = [];
        let power = Math.floor(Math.log2(this.min));
        let maxPower = Math.ceil(Math.log2(this.max));
        while (power <= maxPower) {
          ticks.push({value: Math.pow(2, power)});
          power += 1;
        }
        this.min = ticks[0].value;
        this.max = ticks[ticks.length - 1].value;
        return ticks;
      }
      /**
       * @protected
       */
      configure() {
        const start = this.min;
        super.configure();
        this._startValue = Math.log2(start);
        this._valueRange = Math.log2(this.max) - Math.log2(start);
      }
      getPixelForValue(value) {
        if (value === undefined || value === 0) {
          value = this.min;
        }
        return this.getPixelForDecimal(value === this.min ? 0
          : (Math.log2(value) - this._startValue) / this._valueRange);
      }
      getValueForPixel(pixel) {
        const decimal = this.getDecimalForPixel(pixel);
        return Math.pow(2, this._startValue + decimal * this._valueRange);
      }
    }
    Log2Axis.id = 'log2';
    Log2Axis.defaults = {};
    // The derived axis is registered like this:
    // Chart.register(Log2Axis);

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 8:04:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/samples/advanced/programmatic-events.html" class="prev">Programmatic Event Triggers</a> </span> <span class="next"> [Derived Chart Type](/docs/3.0.0/samples/advanced/derived-chart-type.html) → </span>
