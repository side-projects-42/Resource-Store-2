Polar Area Chart
================

\`\`\`js chart-editor // const DATA\_COUNT = 7; Utils.srand(110);

const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = generateData(); }); chart.update(); }, },\]; //

// function generateData() { return Utils.numbers({ count: DATA\_COUNT, min: 0, max: 100, }); }

const data = { labels: Utils.months({ count: DATA\_COUNT }), datasets: \[ { data: generateData(), }, \], }; //

// function colorize(opaque, hover, ctx) { var v = ctx.raw; var c = v &lt; 35 ? “\#D60000” : v &lt; 55 ? “\#F46300” : v &lt; 75 ? “\#0358B6” : “\#44DE28”;

var opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150);

return opaque ? c : Utils.transparentize(c, opacity); }

function hoverColorize(ctx) { return colorize(false, true, ctx); }

const config = { type: “polarArea”, data: data, options: { plugins: { legend: false, tooltip: false, }, elements: { arc: { backgroundColor: colorize.bind(null, false, false), hoverBackgroundColor: hoverColorize, }, }, }, }; //

module.exports = { actions, config, }; \`\`\`
