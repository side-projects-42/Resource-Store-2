Bar Chart Border Radius
=======================

\`\`\`js chart-editor // const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = Utils.numbers({ count: chart.data.labels.length, min: -100, max: 100, }); }); chart.update(); }, },\]; //

// const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100 };

const labels = Utils.months({ count: 7 }); const data = { labels: labels, datasets: \[ { label: “Fully Rounded”, data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), borderWidth: 2, borderRadius: Number.MAX\_VALUE, borderSkipped: false, }, { label: “Small Radius”, data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), borderWidth: 2, borderRadius: 5, borderSkipped: false, }, \], }; //

// const config = { type: “bar”, data: data, options: { responsive: true, plugins: { legend: { position: “top”, }, title: { display: true, text: “Chart.js Bar Chart”, }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
