Multi Axis Line Chart
=====================

\`\`\`js chart-editor // const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = Utils.numbers({ count: chart.data.labels.length, min: -100, max: 100, }); }); chart.update(); }, },\]; //

// const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100 };

const labels = Utils.months({ count: 7 }); const data = { labels: labels, datasets: \[ { label: “Dataset 1”, data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), yAxisID: “y”, }, { label: “Dataset 2”, data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), yAxisID: “y1”, }, \], }; //

// const config = { type: “line”, data: data, options: { responsive: true, interaction: { mode: “index”, intersect: false, }, stacked: false, plugins: { title: { display: true, text: “Chart.js Line Chart - Multi Axis”, }, }, scales: { y: { type: “linear”, display: true, position: “left”, }, y1: { type: “linear”, display: true, position: “right”,

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    },

}, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
