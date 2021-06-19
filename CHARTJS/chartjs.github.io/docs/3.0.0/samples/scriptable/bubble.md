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

-   Scriptable Options <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/samples/scriptable/bar.html" class="sidebar-link">Bar Chart</a>
    -   <a href="/docs/3.0.0/samples/scriptable/bubble.html" class="active sidebar-link">Bubble Chart</a>
    -   <a href="/docs/3.0.0/samples/scriptable/pie.html" class="sidebar-link">Pie Chart</a>
    -   <a href="/docs/3.0.0/samples/scriptable/line.html" class="sidebar-link">Line Chart</a>
    -   <a href="/docs/3.0.0/samples/scriptable/polar.html" class="sidebar-link">Polar Area Chart</a>
    -   <a href="/docs/3.0.0/samples/scriptable/radar.html" class="sidebar-link">Radar Chart</a>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

<a href="#bubble-chart" class="header-anchor">#</a> Bubble Chart
================================================================

options

data

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/scriptable/bubble.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

function channelValue(x, y, values) { return x &lt; 0 && y &lt; 0 ? values\[0\] : x &lt; 0 ? values\[1\] : y &lt; 0 ? values\[2\] : values\[3\]; } function colorize(opaque, context) { var value = context.raw; var x = value.x / 100; var y = value.y / 100; var r = channelValue(x, y, \[250, 150, 50, 0\]); var g = channelValue(x, y, \[0, 50, 150, 250\]); var b = channelValue(x, y, \[0, 150, 150, 250\]); var a = opaque ? 1 : 0.5 \* value.v / 1000; return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'; } const config = { type: 'bubble', data: data, options: { aspectRatio: 1, plugins: { legend: false, tooltip: false, }, elements: { point: { backgroundColor: colorize.bind(null, false), borderColor: colorize.bind(null, true), borderWidth: function(context) { return Math.min(Math.max(1, context.datasetIndex + 1), 8); }, hoverBackgroundColor: 'transparent', hoverBorderColor: function(context) { return Utils.color(context.datasetIndex); }, hoverBorderWidth: function(context) { return Math.round(8 \* context.raw.v / 1000); }, radius: function(context) { var size = context.chart.width; var base = Math.abs(context.raw.v) / 1000; return (size / 24) \* base; } } } } };

    function channelValue(x, y, values) {
      return x < 0 && y < 0 ? values[0] : x < 0 ? values[1] : y < 0 ? values[2] : values[3];
    }
    function colorize(opaque, context) {
      var value = context.raw;
      var x = value.x / 100;
      var y = value.y / 100;
      var r = channelValue(x, y, [250, 150, 50, 0]);
      var g = channelValue(x, y, [0, 50, 150, 250]);
      var b = channelValue(x, y, [0, 150, 150, 250]);
      var a = opaque ? 1 : 0.5 * value.v / 1000;
      return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    }
    const config = {
      type: 'bubble',
      data: data,
      options: {
        aspectRatio: 1,
        plugins: {
          legend: false,
          tooltip: false,
        },
        elements: {
          point: {
            backgroundColor: colorize.bind(null, false),
            borderColor: colorize.bind(null, true),
            borderWidth: function(context) {
              return Math.min(Math.max(1, context.datasetIndex + 1), 8);
            },
            hoverBackgroundColor: 'transparent',
            hoverBorderColor: function(context) {
              return Utils.color(context.datasetIndex);
            },
            hoverBorderWidth: function(context) {
              return Math.round(8 * context.raw.v / 1000);
            },
            radius: function(context) {
              var size = context.chart.width;
              var base = Math.abs(context.raw.v) / 1000;
              return (size / 24) * base;
            }
          }
        }
      }
    };

function generateData() { var data = \[\]; var i; for (i = 0; i &lt; DATA\_COUNT; ++i) { data.push({ x: Utils.rand(MIN\_XY, MAX\_XY), y: Utils.rand(MIN\_XY, MAX\_XY), v: Utils.rand(0, 1000) }); } return data; } const data = { datasets: \[{ data: generateData() }, { data: generateData() }\] };

    function generateData() {
      var data = [];
      var i;
      for (i = 0; i < DATA_COUNT; ++i) {
        data.push({
          x: Utils.rand(MIN_XY, MAX_XY),
          y: Utils.rand(MIN_XY, MAX_XY),
          v: Utils.rand(0, 1000)
        });
      }
      return data;
    }
    const data = {
      datasets: [{
        data: generateData()
      }, {
        data: generateData()
      }]
    };

const DATA\_COUNT = 16; const MIN\_XY = -150; const MAX\_XY = 100; Utils.srand(110); const actions = \[ { name: 'Randomize', handler(chart) { chart.data.datasets.forEach(dataset =&gt; { dataset.data = generateData(); }); chart.update(); } }, \];

    const DATA_COUNT = 16;
    const MIN_XY = -150;
    const MAX_XY = 100;
    Utils.srand(110);
    const actions = [
      {
        name: 'Randomize',
        handler(chart) {
          chart.data.datasets.forEach(dataset => {
            dataset.data = generateData();
          });
          chart.update();
        }
      },
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 8:04:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/samples/scriptable/bar.html" class="prev">Bar Chart</a> </span> <span class="next"> [Pie Chart](/docs/3.0.0/samples/scriptable/pie.html) → </span>
