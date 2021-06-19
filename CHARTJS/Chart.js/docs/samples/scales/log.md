Log Scale
=========

\`\`\`js chart-editor // const logNumbers = (num) =&gt; { const data = \[\];

for (let i = 0; i &lt; num; ++i) { data.push( Math.ceil(Math.random() \* 10.0) *Math.pow(10, Math.ceil(Math.random()* 5)) ); }

return data; };

const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = logNumbers(chart.data.labels.length); }); chart.update(); }, },\]; //

// const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: 0, max: 100 };

const labels = Utils.months({ count: 7 }); const data = { labels: labels, datasets: \[ { label: “Dataset 1”, data: logNumbers(DATA\_COUNT), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.CHART\_COLORS.red, fill: false, }, \], }; //

// const config = { type: “line”, data: data, options: { responsive: true, plugins: { title: { display: true, text: “Chart.js Line Chart - Logarithmic”, }, }, scales: { x: { display: true, }, y: { display: true, type: “logarithmic”, }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
