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

-   Legend <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/samples/legend/position.html" class="sidebar-link">Position</a>
    -   <a href="/docs/3.2.0/samples/legend/title.html" class="sidebar-link">Alignment and Title Position</a>
    -   <a href="/docs/3.2.0/samples/legend/point-style.html" class="sidebar-link">Point Style</a>
    -   <a href="/docs/3.2.0/samples/legend/events.html" class="sidebar-link">Events</a>
    -   <a href="/docs/3.2.0/samples/legend/html.html" class="active sidebar-link">HTML Legend</a>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#html-legend" class="header-anchor">#</a> HTML Legend
==============================================================

This example shows how to create a custom HTML legend using a plugin and connect it to the chart in lieu of the default on-canvas legend.

plugin

data

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/legend/html.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const getOrCreateLegendList = (chart, id) =&gt; { const legendContainer = document.getElementById(id); let listContainer = legendContainer.querySelector('ul'); if (!listContainer) { listContainer = document.createElement('ul'); listContainer.style.display = 'flex'; listContainer.style.flexDirection = 'row'; listContainer.style.margin = 0; listContainer.style.padding = 0; legendContainer.appendChild(listContainer); } return listContainer; }; const htmlLegendPlugin = { id: 'htmlLegend', afterUpdate(chart, args, options) { const ul = getOrCreateLegendList(chart, options.containerID); // Remove old legend items while (ul.firstChild) { ul.firstChild.remove(); } // Reuse the built-in legendItems generator const items = chart.options.plugins.legend.labels.generateLabels(chart); items.forEach(item =&gt; { const li = document.createElement('li'); li.style.alignItems = 'center'; li.style.cursor = 'pointer'; li.style.display = 'flex'; li.style.flexDirection = 'row'; li.style.marginLeft = '10px'; li.onclick = () =&gt; { chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex)); chart.update(); }; // Color box const boxSpan = document.createElement('span'); boxSpan.style.background = item.fillStyle; boxSpan.style.borderColor = item.strokeStyle; boxSpan.style.borderWidth = item.lineWidth + 'px'; boxSpan.style.display = 'inline-block'; boxSpan.style.height = '20px'; boxSpan.style.marginRight = '10px'; boxSpan.style.width = '20px'; // Text const textContainer = document.createElement('p'); textContainer.style.color = item.fontColor; textContainer.style.margin = 0; textContainer.style.padding = 0; textContainer.style.textDecoration = item.hidden ? 'line-through' : ''; const text = document.createTextNode(item.text); textContainer.appendChild(text); li.appendChild(boxSpan); li.appendChild(textContainer); ul.appendChild(li); }); } };

    const getOrCreateLegendList = (chart, id) => {
      const legendContainer = document.getElementById(id);
      let listContainer = legendContainer.querySelector('ul');
      if (!listContainer) {
        listContainer = document.createElement('ul');
        listContainer.style.display = 'flex';
        listContainer.style.flexDirection = 'row';
        listContainer.style.margin = 0;
        listContainer.style.padding = 0;
        legendContainer.appendChild(listContainer);
      }
      return listContainer;
    };
    const htmlLegendPlugin = {
      id: 'htmlLegend',
      afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList(chart, options.containerID);
        // Remove old legend items
        while (ul.firstChild) {
          ul.firstChild.remove();
        }
        // Reuse the built-in legendItems generator
        const items = chart.options.plugins.legend.labels.generateLabels(chart);
        items.forEach(item => {
          const li = document.createElement('li');
          li.style.alignItems = 'center';
          li.style.cursor = 'pointer';
          li.style.display = 'flex';
          li.style.flexDirection = 'row';
          li.style.marginLeft = '10px';
          li.onclick = () => {
            chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
            chart.update();
          };
          // Color box
          const boxSpan = document.createElement('span');
          boxSpan.style.background = item.fillStyle;
          boxSpan.style.borderColor = item.strokeStyle;
          boxSpan.style.borderWidth = item.lineWidth + 'px';
          boxSpan.style.display = 'inline-block';
          boxSpan.style.height = '20px';
          boxSpan.style.marginRight = '10px';
          boxSpan.style.width = '20px';
          // Text
          const textContainer = document.createElement('p');
          textContainer.style.color = item.fontColor;
          textContainer.style.margin = 0;
          textContainer.style.padding = 0;
          textContainer.style.textDecoration = item.hidden ? 'line-through' : '';
          const text = document.createTextNode(item.text);
          textContainer.appendChild(text);
          li.appendChild(boxSpan);
          li.appendChild(textContainer);
          ul.appendChild(li);
        });
      }
    };

const NUM\_DATA = 7; const NUM\_CFG = {count: NUM\_DATA, min: 0, max: 100}; const data = { labels: Utils.months({count: NUM\_DATA}), datasets: \[ { label: 'Dataset: 1', data: Utils.numbers(NUM\_CFG), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), fill: false, }, { label: 'Dataset: 1', data: Utils.numbers(NUM\_CFG), borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), fill: false, }, \], };

    const NUM_DATA = 7;
    const NUM_CFG = {count: NUM_DATA, min: 0, max: 100};
    const data = {
      labels: Utils.months({count: NUM_DATA}),
      datasets: [
        {
          label: 'Dataset: 1',
          data: Utils.numbers(NUM_CFG),
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
          fill: false,
        },
        {
          label: 'Dataset: 1',
          data: Utils.numbers(NUM_CFG),
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
          fill: false,
        },
      ],
    };

const config = { type: 'line', data: data, options: { plugins: { htmlLegend: { // ID of the container to put the legend in containerID: 'legend-container', }, legend: { display: false, } } }, plugins: \[htmlLegendPlugin\], };

    const config = {
      type: 'line',
      data: data,
      options: {
        plugins: {
          htmlLegend: {
            // ID of the container to put the legend in
            containerID: 'legend-container',
          },
          legend: {
            display: false,
          }
        }
      },
      plugins: [htmlLegendPlugin],
    };

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/legend/events.html" class="prev">Events</a> </span> <span class="next"> [Alignment](/docs/3.2.0/samples/title/alignment.html) → </span>
