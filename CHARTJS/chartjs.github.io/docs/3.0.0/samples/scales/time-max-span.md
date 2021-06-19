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

-   Scales <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/samples/scales/linear-min-max.html" class="sidebar-link">Linear Scale - Min-Max</a>
    -   <a href="/docs/3.0.0/samples/scales/linear-min-max-suggested.html" class="sidebar-link">Linear Scale - Suggested Min-Max</a>
    -   <a href="/docs/3.0.0/samples/scales/linear-step-size.html" class="sidebar-link">Linear Scale - Step Size</a>
    -   <a href="/docs/3.0.0/samples/scales/log.html" class="sidebar-link">Log Scale</a>
    -   <a href="/docs/3.0.0/samples/scales/time-line.html" class="sidebar-link">Time Scale</a>
    -   <a href="/docs/3.0.0/samples/scales/time-max-span.html" class="active sidebar-link">Time Scale - Max Span</a>
    -   <a href="/docs/3.0.0/samples/scales/time-combo.html" class="sidebar-link">Time Scale - Combo Chart</a>

-   Scale Options <span class="arrow right"></span>

-   Legend <span class="arrow right"></span>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

<a href="#time-scale-max-span" class="header-anchor">#</a> Time Scale - Max Span
================================================================================

config

setup

actions

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/scales/time-max-span.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { spanGaps: 1000 \* 60 \* 60 \* 24 \* 2, // 2 days responsive: true, interaction: { mode: 'nearest', }, plugins: { title: { display: true, text: 'Chart.js Time - spanGaps: 172800000 (2 days in ms)' }, }, scales: { x: { type: 'time', display: true, title: { display: true, text: 'Date' }, ticks: { autoSkip: false, maxRotation: 0, major: { enabled: true }, // color: function(context) { // return context.tick && context.tick.major ? '\#FF0000' : 'rgba(0,0,0,0.1)'; // }, font: function(context) { if (context.tick && context.tick.major) { return { style: 'bold', }; } } } }, y: { display: true, title: { display: true, text: 'value' } } } }, };

    const config = {
      type: 'line',
      data: data,
      options: {
        spanGaps: 1000 * 60 * 60 * 24 * 2, // 2 days
        responsive: true,
        interaction: {
          mode: 'nearest',
        },
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Time - spanGaps: 172800000 (2 days in ms)'
          },
        },
        scales: {
          x: {
            type: 'time',
            display: true,
            title: {
              display: true,
              text: 'Date'
            },
            ticks: {
              autoSkip: false,
              maxRotation: 0,
              major: {
                enabled: true
              },
              // color: function(context) {
              //   return context.tick && context.tick.major ? '#FF0000' : 'rgba(0,0,0,0.1)';
              // },
              font: function(context) {
                if (context.tick && context.tick.major) {
                  return {
                    style: 'bold',
                  };
                }
              }
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'value'
            }
          }
        }
      },
    };

const data = { datasets: \[{ label: 'Dataset with string point data', backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), borderColor: Utils.CHART\_COLORS.red, fill: false, data: \[{ x: Utils.newDateString(0), y: Utils.rand(0, 100) }, { x: Utils.newDateString(2), y: Utils.rand(0, 100) }, { x: Utils.newDateString(4), y: Utils.rand(0, 100) }, { x: Utils.newDateString(6), y: Utils.rand(0, 100) }\], }, { label: 'Dataset with date object point data', backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), borderColor: Utils.CHART\_COLORS.blue, fill: false, data: \[{ x: Utils.newDate(0), y: Utils.rand(0, 100) }, { x: Utils.newDate(2), y: Utils.rand(0, 100) }, { x: Utils.newDate(5), y: Utils.rand(0, 100) }, { x: Utils.newDate(6), y: Utils.rand(0, 100) }\] }\] };

    const data = {
      datasets: [{
        label: 'Dataset with string point data',
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        borderColor: Utils.CHART_COLORS.red,
        fill: false,
        data: [{
          x: Utils.newDateString(0),
          y: Utils.rand(0, 100)
        }, {
          x: Utils.newDateString(2),
          y: Utils.rand(0, 100)
        }, {
          x: Utils.newDateString(4),
          y: Utils.rand(0, 100)
        }, {
          x: Utils.newDateString(6),
          y: Utils.rand(0, 100)
        }],
      }, {
        label: 'Dataset with date object point data',
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        borderColor: Utils.CHART_COLORS.blue,
        fill: false,
        data: [{
          x: Utils.newDate(0),
          y: Utils.rand(0, 100)
        }, {
          x: Utils.newDate(2),
          y: Utils.rand(0, 100)
        }, {
          x: Utils.newDate(5),
          y: Utils.rand(0, 100)
        }, {
          x: Utils.newDate(6),
          y: Utils.rand(0, 100)
        }]
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

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 8:04:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/samples/scales/time-line.html" class="prev">Time Scale</a> </span> <span class="next"> [Time Scale - Combo Chart](/docs/3.0.0/samples/scales/time-combo.html) → </span>
