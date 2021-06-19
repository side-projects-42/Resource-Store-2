Line Chart
==========

\`\`\`js chart-editor // const DATA\_COUNT = 12; Utils.srand(110);

const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = generateData(); }); chart.update(); }, },\]; //

// function generateData() { return Utils.numbers({ count: DATA\_COUNT, min: 0, max: 100, }); }

const data = { labels: Utils.months({ count: DATA\_COUNT }), datasets: \[ { data: generateData(), }, \], }; //

// function getLineColor(ctx) { return Utils.color(ctx.datasetIndex); }

function alternatePointStyles(ctx) { var index = ctx.dataIndex; return index % 2 === 0 ? “circle” : “rect”; }

function makeHalfAsOpaque(ctx) { return Utils.transparentize(getLineColor(ctx)); }

function adjustRadiusBasedOnData(ctx) { var v = ctx.parsed.y; return v &lt; 10 ? 5 : v &lt; 25 ? 7 : v &lt; 50 ? 9 : v &lt; 75 ? 11 : 15; }

const config = { type: “line”, data: data, options: { plugins: { legend: false, tooltip: true, }, elements: { line: { fill: false, backgroundColor: getLineColor, borderColor: getLineColor, }, point: { backgroundColor: getLineColor, hoverBackgroundColor: makeHalfAsOpaque, radius: adjustRadiusBasedOnData, pointStyle: alternatePointStyles, hoverRadius: 15, }, }, }, }; //

module.exports = { actions, config, }; \`\`\`
