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

-   Other charts <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/other-charts/bubble.html" class="sidebar-link">Bubble</a>
    -   <a href="/docs/3.2.0/samples/other-charts/scatter.html" class="sidebar-link">Scatter</a>
    -   <a href="/docs/3.2.0/samples/other-charts/scatter-multi-axis.html" class="sidebar-link">Scatter - Multi axis</a>
    -   <a href="/docs/3.2.0/samples/other-charts/doughnut.html" class="sidebar-link">Doughnut</a>
    -   <a href="/docs/3.2.0/samples/other-charts/pie.html" class="sidebar-link">Pie</a>
    -   <a href="/docs/3.2.0/samples/other-charts/multi-series-pie.html" class="active sidebar-link">Multi Series Pie</a>
    -   <a href="/docs/3.2.0/samples/other-charts/polar-area.html" class="sidebar-link">Polar area</a>
    -   <a href="/docs/3.2.0/samples/other-charts/radar.html" class="sidebar-link">Radar</a>
    -   <a href="/docs/3.2.0/samples/other-charts/radar-skip-points.html" class="sidebar-link">Radar skip points</a>
    -   <a href="/docs/3.2.0/samples/other-charts/combo-bar-line.html" class="sidebar-link">Combo bar/line</a>
    -   <a href="/docs/3.2.0/samples/other-charts/stacked-bar-line.html" class="sidebar-link">Stacked bar/line</a>

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

<a href="#multi-series-pie" class="header-anchor">#</a> Multi Series Pie
========================================================================

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/other-charts/multi-series-pie.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'pie', data: data, options: { responsive: true, plugins: { legend: { labels: { generateLabels: function(chart) { // Get the default label list const original = Chart.overrides.pie.plugins.legend.labels.generateLabels; const labelsOriginal = original.call(this, chart); // Build an array of colors used in the datasets of the chart var datasetColors = chart.data.datasets.map(function(e) { return e.backgroundColor; }); datasetColors = datasetColors.flat(); // Modify the color and hide state of each label labelsOriginal.forEach(label =&gt; { // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index label.datasetIndex = (label.index - label.index % 2) / 2; // The hidden state must match the dataset's hidden state label.hidden = !chart.isDatasetVisible(label.datasetIndex); // Change the color to match the dataset label.fillStyle = datasetColors\[label.index\]; }); return labelsOriginal; } }, onClick: function(mouseEvent, legendItem, legend) { // toggle the visibility of the dataset from what it currently is legend.chart.getDatasetMeta( legendItem.datasetIndex ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex); legend.chart.update(); } }, tooltip: { callbacks: { label: function(context) { const labelIndex = (context.datasetIndex \* 2) + context.dataIndex; return context.chart.data.labels\[labelIndex\] + ': ' + context.formattedValue; } } } } }, };

    const config = {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              generateLabels: function(chart) {
                // Get the default label list
                const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
                const labelsOriginal = original.call(this, chart);
                // Build an array of colors used in the datasets of the chart
                var datasetColors = chart.data.datasets.map(function(e) {
                  return e.backgroundColor;
                });
                datasetColors = datasetColors.flat();
                // Modify the color and hide state of each label
                labelsOriginal.forEach(label => {
                  // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
                  label.datasetIndex = (label.index - label.index % 2) / 2;
                  // The hidden state must match the dataset's hidden state
                  label.hidden = !chart.isDatasetVisible(label.datasetIndex);
                  // Change the color to match the dataset
                  label.fillStyle = datasetColors[label.index];
                });
                return labelsOriginal;
              }
            },
            onClick: function(mouseEvent, legendItem, legend) {
              // toggle the visibility of the dataset from what it currently is
              legend.chart.getDatasetMeta(
                legendItem.datasetIndex
              ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
              legend.chart.update();
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
                return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
              }
            }
          }
        }
      },
    };

const DATA\_COUNT = 5; const NUMBER\_CFG = {count: DATA\_COUNT, min: 0, max: 100}; const labels = Utils.months({count: 7}); const data = { labels: \['Overall Yay', 'Overall Nay', 'Group A Yay', 'Group A Nay', 'Group B Yay', 'Group B Nay', 'Group C Yay', 'Group C Nay'\], datasets: \[ { backgroundColor: \['\#AAA', '\#777'\], data: \[21, 79\] }, { backgroundColor: \['hsl(0, 100%, 60%)', 'hsl(0, 100%, 35%)'\], data: \[33, 67\] }, { backgroundColor: \['hsl(100, 100%, 60%)', 'hsl(100, 100%, 35%)'\], data: \[20, 80\] }, { backgroundColor: \['hsl(180, 100%, 60%)', 'hsl(180, 100%, 35%)'\], data: \[10, 90\] } \] };

    const DATA_COUNT = 5;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
    const labels = Utils.months({count: 7});
    const data = {
      labels: ['Overall Yay', 'Overall Nay', 'Group A Yay', 'Group A Nay', 'Group B Yay', 'Group B Nay', 'Group C Yay', 'Group C Nay'],
      datasets: [
        {
          backgroundColor: ['#AAA', '#777'],
          data: [21, 79]
        },
        {
          backgroundColor: ['hsl(0, 100%, 60%)', 'hsl(0, 100%, 35%)'],
          data: [33, 67]
        },
        {
          backgroundColor: ['hsl(100, 100%, 60%)', 'hsl(100, 100%, 35%)'],
          data: [20, 80]
        },
        {
          backgroundColor: ['hsl(180, 100%, 60%)', 'hsl(180, 100%, 35%)'],
          data: [10, 90]
        }
      ]
    };

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/other-charts/pie.html" class="prev">Pie</a> </span> <span class="next"> [Polar area](/docs/3.2.0/samples/other-charts/polar-area.html) → </span>
