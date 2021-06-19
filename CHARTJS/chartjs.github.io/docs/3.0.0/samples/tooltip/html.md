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

-   Tooltip <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/samples/tooltip/position.html" class="sidebar-link">Position</a>
    -   <a href="/docs/3.0.0/samples/tooltip/interactions.html" class="sidebar-link">Interaction Modes</a>
    -   <a href="/docs/3.0.0/samples/tooltip/point-style.html" class="sidebar-link">Point Style</a>
    -   <a href="/docs/3.0.0/samples/tooltip/content.html" class="sidebar-link">Custom Tooltip Content</a>
    -   <a href="/docs/3.0.0/samples/tooltip/html.html" class="active sidebar-link">External HTML Tooltip</a>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

<a href="#external-html-tooltip" class="header-anchor">#</a> External HTML Tooltip
==================================================================================

This sample shows how to use the external tooltip functionality to generate an HTML tooltip.

config

setup

external

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/tooltip/html.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { interaction: { mode: 'index', intersect: false, }, plugins: { title: { display: true, text: 'Chart.js Line Chart - External Tooltips' }, tooltip: { enabled: false, position: 'nearest', external: externalTooltipHandler } } } };

    const config = {
      type: 'line',
      data: data,
      options: {
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart - External Tooltips'
          },
          tooltip: {
            enabled: false,
            position: 'nearest',
            external: externalTooltipHandler
          }
        }
      }
    };

const DATA\_COUNT = 7; const NUMBER\_CFG = {count: DATA\_COUNT, min: -100, max: 100, decimals: 0}; const data = { labels: Utils.months({count: DATA\_COUNT}), datasets: \[ { label: 'Dataset 1', data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: 'Dataset 2', data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), }, \] };

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100, decimals: 0};
    const data = {
      labels: Utils.months({count: DATA_COUNT}),
      datasets: [
        {
          label: 'Dataset 1',
          data: Utils.numbers(NUMBER_CFG),
          fill: false,
          borderColor: Utils.CHART_COLORS.red,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        },
        {
          label: 'Dataset 2',
          data: Utils.numbers(NUMBER_CFG),
          fill: false,
          borderColor: Utils.CHART_COLORS.blue,
          backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        },
      ]
    };

const getOrCreateTooltip = (chart) =&gt; { let tooltipEl = chart.canvas.parentNode.querySelector('div'); if (!tooltipEl) { tooltipEl = document.createElement('div'); tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)'; tooltipEl.style.borderRadius = '3px'; tooltipEl.style.color = 'white'; tooltipEl.style.opacity = 1; tooltipEl.style.pointerEvents = 'none'; tooltipEl.style.position = 'absolute'; tooltipEl.style.transform = 'translate(-50%, 0)'; tooltipEl.style.transition = 'all .1s ease'; const table = document.createElement('table'); table.style.margin = '0px'; tooltipEl.appendChild(table); chart.canvas.parentNode.appendChild(tooltipEl); } return tooltipEl; }; const externalTooltipHandler = (context) =&gt; { // Tooltip Element const {chart, tooltip} = context; const tooltipEl = getOrCreateTooltip(chart); // Hide if no tooltip if (tooltip.opacity === 0) { tooltipEl.style.opacity = 0; return; } // Set Text if (tooltip.body) { const titleLines = tooltip.title || \[\]; const bodyLines = tooltip.body.map(b =&gt; b.lines); const tableHead = document.createElement('thead'); titleLines.forEach(title =&gt; { const tr = document.createElement('tr'); tr.style.borderWidth = 0; const th = document.createElement('th'); th.style.borderWidth = 0; const text = document.createTextNode(title); th.appendChild(text); tr.appendChild(th); tableHead.appendChild(tr); }); const tableBody = document.createElement('tbody'); bodyLines.forEach((body, i) =&gt; { const colors = tooltip.labelColors\[i\]; const span = document.createElement('span'); span.style.background = colors.backgroundColor; span.style.borderColor = colors.borderColor; span.style.borderWidth = '2px'; span.style.marginRight = '10px'; span.style.height = '10px'; span.style.width = '10px'; span.style.display = 'inline-block'; const tr = document.createElement('tr'); tr.style.backgroundColor = 'inherit'; tr.style.borderWidth = 0; const td = document.createElement('td'); td.style.borderWidth = 0; const text = document.createTextNode(body); td.appendChild(span); td.appendChild(text); tr.appendChild(td); tableBody.appendChild(tr); }); const tableRoot = tooltipEl.querySelector('table'); // Remove old children while (tableRoot.firstChild) { tableRoot.firstChild.remove(); } // Add new children tableRoot.appendChild(tableHead); tableRoot.appendChild(tableBody); } const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas; // Display, position, and set styles for font tooltipEl.style.opacity = 1; tooltipEl.style.left = positionX + tooltip.caretX + 'px'; tooltipEl.style.top = positionY + tooltip.caretY + 'px'; tooltipEl.style.font = tooltip.options.bodyFont.string; tooltipEl.style.padding = tooltip.padding + 'px ' + tooltip.padding + 'px'; };

    const getOrCreateTooltip = (chart) => {
      let tooltipEl = chart.canvas.parentNode.querySelector('div');
      if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
        tooltipEl.style.borderRadius = '3px';
        tooltipEl.style.color = 'white';
        tooltipEl.style.opacity = 1;
        tooltipEl.style.pointerEvents = 'none';
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.transform = 'translate(-50%, 0)';
        tooltipEl.style.transition = 'all .1s ease';
        const table = document.createElement('table');
        table.style.margin = '0px';
        tooltipEl.appendChild(table);
        chart.canvas.parentNode.appendChild(tooltipEl);
      }
      return tooltipEl;
    };
    const externalTooltipHandler = (context) => {
      // Tooltip Element
      const {chart, tooltip} = context;
      const tooltipEl = getOrCreateTooltip(chart);
      // Hide if no tooltip
      if (tooltip.opacity === 0) {
        tooltipEl.style.opacity = 0;
        return;
      }
      // Set Text
      if (tooltip.body) {
        const titleLines = tooltip.title || [];
        const bodyLines = tooltip.body.map(b => b.lines);
        const tableHead = document.createElement('thead');
        titleLines.forEach(title => {
          const tr = document.createElement('tr');
          tr.style.borderWidth = 0;
          const th = document.createElement('th');
          th.style.borderWidth = 0;
          const text = document.createTextNode(title);
          th.appendChild(text);
          tr.appendChild(th);
          tableHead.appendChild(tr);
        });
        const tableBody = document.createElement('tbody');
        bodyLines.forEach((body, i) => {
          const colors = tooltip.labelColors[i];
          const span = document.createElement('span');
          span.style.background = colors.backgroundColor;
          span.style.borderColor = colors.borderColor;
          span.style.borderWidth = '2px';
          span.style.marginRight = '10px';
          span.style.height = '10px';
          span.style.width = '10px';
          span.style.display = 'inline-block';
          const tr = document.createElement('tr');
          tr.style.backgroundColor = 'inherit';
          tr.style.borderWidth = 0;
          const td = document.createElement('td');
          td.style.borderWidth = 0;
          const text = document.createTextNode(body);
          td.appendChild(span);
          td.appendChild(text);
          tr.appendChild(td);
          tableBody.appendChild(tr);
        });
        const tableRoot = tooltipEl.querySelector('table');
        // Remove old children
        while (tableRoot.firstChild) {
          tableRoot.firstChild.remove();
        }
        // Add new children
        tableRoot.appendChild(tableHead);
        tableRoot.appendChild(tableBody);
      }
      const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;
      // Display, position, and set styles for font
      tooltipEl.style.opacity = 1;
      tooltipEl.style.left = positionX + tooltip.caretX + 'px';
      tooltipEl.style.top = positionY + tooltip.caretY + 'px';
      tooltipEl.style.font = tooltip.options.bodyFont.string;
      tooltipEl.style.padding = tooltip.padding + 'px ' + tooltip.padding + 'px';
    };

<span class="prefix">Last Updated:</span> <span class="time">4/2/2021, 8:04:39 AM</span>

<span class="prev"> ← <a href="/docs/3.0.0/samples/tooltip/content.html" class="prev">Custom Tooltip Content</a> </span> <span class="next"> [Bar Chart](/docs/3.0.0/samples/scriptable/bar.html) → </span>
