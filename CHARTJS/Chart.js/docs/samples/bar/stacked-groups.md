Stacked Bar Chart with Groups
=============================

\`\`\`js chart-editor // const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = Utils.numbers({ count: chart.data.labels.length, min: -100, max: 100, }); }); chart.update(); }, },\]; //

// const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100 };

const labels = Utils.months({ count: 7 }); const data = { labels: labels, datasets: \[ { label: “Dataset 1”, data: Utils.numbers(NUMBER\_CFG), backgroundColor: Utils.CHART\_COLORS.red, stack: “Stack 0”, }, { label: “Dataset 2”, data: Utils.numbers(NUMBER\_CFG), backgroundColor: Utils.CHART\_COLORS.blue, stack: “Stack 0”, }, { label: “Dataset 3”, data: Utils.numbers(NUMBER\_CFG), backgroundColor: Utils.CHART\_COLORS.green, stack: “Stack 1”, }, \], }; //

// const config = { type: “bar”, data: data, options: { plugins: { title: { display: true, text: “Chart.js Bar Chart - Stacked”, }, }, responsive: true, interaction: { intersect: false, }, scales: { x: { stacked: true, }, y: { stacked: true, }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
