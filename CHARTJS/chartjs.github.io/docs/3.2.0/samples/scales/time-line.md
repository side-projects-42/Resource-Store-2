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

-   Scales <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/scales/linear-min-max.html" class="sidebar-link">Linear Scale - Min-Max</a>
    -   <a href="/docs/3.2.0/samples/scales/linear-min-max-suggested.html" class="sidebar-link">Linear Scale - Suggested Min-Max</a>
    -   <a href="/docs/3.2.0/samples/scales/linear-step-size.html" class="sidebar-link">Linear Scale - Step Size</a>
    -   <a href="/docs/3.2.0/samples/scales/log.html" class="sidebar-link">Log Scale</a>
    -   <a href="/docs/3.2.0/samples/scales/time-line.html" class="active sidebar-link">Time Scale</a>
    -   <a href="/docs/3.2.0/samples/scales/time-max-span.html" class="sidebar-link">Time Scale - Max Span</a>
    -   <a href="/docs/3.2.0/samples/scales/time-combo.html" class="sidebar-link">Time Scale - Combo Chart</a>

-   Scale Options <span class="arrow right"></span>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#time-scale" class="header-anchor">#</a> Time Scale
============================================================

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/scales/time-line.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { plugins: { title: { text: 'Chart.js Time Scale', display: true } }, scales: { x: { type: 'time', time: { // Luxon format string tooltipFormat: 'DD T' }, title: { display: true, text: 'Date' } }, y: { title: { display: true, text: 'value' } } }, }, };

    const config = {
      type: 'line',
      data: data,
      options: {
        plugins: {
          title: {
            text: 'Chart.js Time Scale',
            display: true
          }
        },
        scales: {
          x: {
            type: 'time',
            time: {
              // Luxon format string
              tooltipFormat: 'DD T'
            },
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'value'
            }
          }
        },
      },
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: 0, max: 100}; const data = { labels: \[ // Date Objects Utils.newDate(0), Utils.newDate(1), Utils.newDate(2), Utils.newDate(3), Utils.newDate(4), Utils.newDate(5), Utils.newDate(6) \], datasets: \[{ label: 'My First dataset', backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), borderColor: Utils.CHART\_COLORS.red, fill: false, data: Utils.numbers(NUMBER\_CFG), }, { label: 'My Second dataset', backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), borderColor: Utils.CHART\_COLORS.blue, fill: false, data: Utils.numbers(NUMBER\_CFG), }, { label: 'Dataset with point data', backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.green, 0.5), borderColor: Utils.CHART\_COLORS.green, fill: false, data: \[{ x: Utils.newDateString(0), y: Utils.rand(0, 100) }, { x: Utils.newDateString(5), y: Utils.rand(0, 100) }, { x: Utils.newDateString(7), y: Utils.rand(0, 100) }, { x: Utils.newDateString(15), y: Utils.rand(0, 100) }\], }\] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
    const data = {
      labels: [ // Date Objects
        Utils.newDate(0),
        Utils.newDate(1),
        Utils.newDate(2),
        Utils.newDate(3),
        Utils.newDate(4),
        Utils.newDate(5),
        Utils.newDate(6)
      ],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        borderColor: Utils.CHART_COLORS.red,
        fill: false,
        data: Utils.numbers(NUMBER_CFG),
      }, {
        label: 'My Second dataset',
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        borderColor: Utils.CHART_COLORS.blue,
        fill: false,
        data: Utils.numbers(NUMBER_CFG),
      }, {
        label: 'Dataset with point data',
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
        borderColor: Utils.CHART_COLORS.green,
        fill: false,
        data: [{
          x: Utils.newDateString(0),
          y: Utils.rand(0, 100)
        }, {
          x: Utils.newDateString(5),
          y: Utils.rand(0, 100)
        }, {
          x: Utils.newDateString(7),
          y: Utils.rand(0, 100)
        }, {
          x: Utils.newDateString(15),
          y: Utils.rand(0, 100)
        }],
      }]
    };

const actions = \[ { name: 'Randomize', handler(chart) { chart.data.datasets.forEach(dataset =&gt; { dataset.data.forEach(function(dataObj, j) { const newVal = Utils.rand(0, 100); if (typeof dataObj === 'object') { dataObj.y = newVal; } else { dataset.data\[j\] = newVal; } }); }); chart.update(); } }, \];

    const actions = [
      {
        name: 'Randomize',
        handler(chart) {
          chart.data.datasets.forEach(dataset => {
            dataset.data.forEach(function(dataObj, j) {
              const newVal = Utils.rand(0, 100);
              if (typeof dataObj === 'object') {
                dataObj.y = newVal;
              } else {
                dataset.data[j] = newVal;
              }
            });
          });
          chart.update();
        }
      },
    ];

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/scales/log.html" class="prev">Log Scale</a> </span> <span class="next"> [Time Scale - Max Span](/docs/3.2.0/samples/scales/time-max-span.html) → </span>
