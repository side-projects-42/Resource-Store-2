Radar Chart
===========

\`\`\`js chart-editor // const DATA\_COUNT = 7; Utils.srand(110);

const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = generateData(); }); chart.update(); }, },\]; //

// function generateData() { return Utils.numbers({ count: DATA\_COUNT, min: 0, max: 100, }); }

const data = { labels: \[ \[“Eating”, “Dinner”\], \[“Drinking”, “Water”\], “Sleeping”, \[“Designing”, “Graphics”\], “Coding”, “Cycling”, “Running”, \], datasets: \[ { data: generateData(), }, \], }; //

// function getLineColor(ctx) { return Utils.color(ctx.datasetIndex); }

function alternatePointStyles(ctx) { var index = ctx.dataIndex; return index % 2 === 0 ? “circle” : “rect”; }

function makeHalfAsOpaque(ctx) { return Utils.transparentize(getLineColor(ctx)); }

function make20PercentOpaque(ctx) { return Utils.transparentize(getLineColor(ctx), 0.8); }

function adjustRadiusBasedOnData(ctx) { var v = ctx.parsed.y; return v &lt; 10 ? 5 : v &lt; 25 ? 7 : v &lt; 50 ? 9 : v &lt; 75 ? 11 : 15; }

const config = { type: “radar”, data: data, options: { plugins: { legend: false, tooltip: false, }, elements: { line: { backgroundColor: make20PercentOpaque, borderColor: getLineColor, }, point: { backgroundColor: getLineColor, hoverBackgroundColor: makeHalfAsOpaque, radius: adjustRadiusBasedOnData, pointStyle: alternatePointStyles, hoverRadius: 15, }, }, }, }; //

module.exports = { actions, config, }; \`\`\`
