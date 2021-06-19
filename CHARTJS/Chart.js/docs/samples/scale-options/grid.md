Grid Configuration
==================

This sample shows how to use scriptable grid options for an axis to control styling. In this case, the Y axis grid lines are colored based on their value. In addition, booleans are provided to toggle different parts of the X axis grid visibility.

\`\`\`js chart-editor // const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = Utils.numbers({ count: chart.data.labels.length, min: -100, max: 100, }); }); chart.update(); }, },\]; //

// const DATA\_COUNT = 7; const data = { labels: Utils.months({ count: DATA\_COUNT }), datasets: \[ { label: “Dataset 1”, data: \[10, 30, 39, 20, 25, 34, -10\], fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: “Dataset 2”, data: \[18, 33, 22, 19, 11, -39, 30\], fill: false, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), }, \], }; //

// // Change these settings to change the display for different parts of the X axis // grid configuiration const DISPLAY = true; const BORDER = true; const CHART\_AREA = true; const TICKS = true;

const config = { type: “line”, data: data, options: { responsive: true, plugins: { title: { display: true, text: “Grid Line Settings”, }, }, scales: { x: { grid: { display: DISPLAY, drawBorder: BORDER, drawOnChartArea: CHART\_AREA, drawTicks: TICKS, }, }, y: { grid: { drawBorder: false, color: function (context) { if (context.tick.value &gt; 0) { return Utils.CHART\_COLORS.green; } else if (context.tick.value &lt; 0) { return Utils.CHART\_COLORS.red; }

            return "#000000";
          },
        },
      },
    },

}, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
