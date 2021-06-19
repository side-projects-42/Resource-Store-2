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
    -   <a href="/docs/3.2.0/samples/legend/events.html" class="active sidebar-link">Events</a>
    -   <a href="/docs/3.2.0/samples/legend/html.html" class="sidebar-link">HTML Legend</a>

-   Title <span class="arrow right"></span>

-   Tooltip <span class="arrow right"></span>

-   Scriptable Options <span class="arrow right"></span>

-   Animations <span class="arrow right"></span>

-   Advanced <span class="arrow right"></span>

-   Plugins <span class="arrow right"></span>

<a href="#events" class="header-anchor">#</a> Events
====================================================

This sample demonstrates how to use the event hooks to highlight chart elements.

config

handleHover

handleLeave

data

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/samples/legend/events.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'pie', data: data, options: { plugins: { legend: { onHover: handleHover, onLeave: handleLeave } } } };

    const config = {
      type: 'pie',
      data: data,
      options: {
        plugins: {
          legend: {
            onHover: handleHover,
            onLeave: handleLeave
          }
        }
      }
    };

// Append '4d' to the colors (alpha channel), except for the hovered index function handleHover(evt, item, legend) { legend.chart.data.datasets\[0\].backgroundColor.forEach((color, index, colors) =&gt; { colors\[index\] = index === item.index || color.length === 9 ? color : color + '4D'; }); legend.chart.update(); }

    // Append '4d' to the colors (alpha channel), except for the hovered index
    function handleHover(evt, item, legend) {
      legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
        colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
      });
      legend.chart.update();
    }

// Removes the alpha channel from background colors function handleLeave(evt, item, legend) { legend.chart.data.datasets\[0\].backgroundColor.forEach((color, index, colors) =&gt; { colors\[index\] = color.length === 9 ? color.slice(0, -2) : color; }); legend.chart.update(); }

    // Removes the alpha channel from background colors
    function handleLeave(evt, item, legend) {
      legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
        colors[index] = color.length === 9 ? color.slice(0, -2) : color;
      });
      legend.chart.update();
    }

const data = { labels: \['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'\], datasets: \[{ label: '\# of Votes', data: \[12, 19, 3, 5, 2, 3\], borderWidth: 1, backgroundColor: \['\#CB4335', '\#1F618D', '\#F1C40F', '\#27AE60', '\#884EA0', '\#D35400'\], }\] };

    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: ['#CB4335', '#1F618D', '#F1C40F', '#27AE60', '#884EA0', '#D35400'],
      }]
    };

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/samples/legend/point-style.html" class="prev">Point Style</a> </span> <span class="next"> [HTML Legend](/docs/3.2.0/samples/legend/html.html) → </span>
