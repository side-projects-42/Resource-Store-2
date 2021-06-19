Time Scale - Combo Chart
========================

\`\`\`js chart-editor // const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = Utils.numbers({ count: chart.data.labels.length, min: 0, max: 100, }); }); chart.update(); }, },\]; //

// const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: 0, max: 100 };

const labels = \[\];

for (let i = 0; i &lt; DATA\_COUNT; ++i) { labels.push(Utils.newDate(i)); }

const data = { labels: labels, datasets: \[ { type: “bar”, label: “Dataset 1”, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), borderColor: Utils.CHART\_COLORS.red, data: Utils.numbers(NUMBER\_CFG), }, { type: “bar”, label: “Dataset 2”, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), borderColor: Utils.CHART\_COLORS.blue, data: Utils.numbers(NUMBER\_CFG), }, { type: “line”, label: “Dataset 3”, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.green, 0.5), borderColor: Utils.CHART\_COLORS.green, fill: false, data: Utils.numbers(NUMBER\_CFG), }, \], }; //

// const config = { type: “line”, data: data, options: { plugins: { title: { text: “Chart.js Combo Time Scale”, display: true, }, }, scales: { x: { type: “time”, display: true, offset: true, time: { unit: “day”, }, }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
