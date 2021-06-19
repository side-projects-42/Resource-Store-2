Floating Bars
=============

\`\`\`js chart-editor // const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = chart.data.labels.map(() =&gt; { return \[Utils.rand(-100, 100), Utils.rand(-100, 100)\]; }); }); chart.update(); }, },\]; //

// const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100 };

const labels = Utils.months({ count: 7 }); const data = { labels: labels, datasets: \[ { label: “Dataset 1”, data: labels.map(() =&gt; { return \[Utils.rand(-100, 100), Utils.rand(-100, 100)\]; }), backgroundColor: Utils.CHART\_COLORS.red, }, { label: “Dataset 2”, data: labels.map(() =&gt; { return \[Utils.rand(-100, 100), Utils.rand(-100, 100)\]; }), backgroundColor: Utils.CHART\_COLORS.blue, }, \], }; //

// const config = { type: “bar”, data: data, options: { responsive: true, plugins: { legend: { position: “top”, }, title: { display: true, text: “Chart.js Floating Bar Chart”, }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
