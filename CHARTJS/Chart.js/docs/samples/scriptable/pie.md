Pie Chart
=========

\`\`\`js chart-editor // const DATA\_COUNT = 5; Utils.srand(110);

const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = generateData(); }); chart.update(); }, }, { name: “Toggle Doughnut View”, handler(chart) { if (chart.options.cutout) { chart.options.cutout = 0; } else { chart.options.cutout = “50%”; } chart.update(); }, },\]; //

// function generateData() { return Utils.numbers({ count: DATA\_COUNT, min: -100, max: 100, }); }

const data = { datasets: \[ { data: generateData(), }, \], }; //

// function colorize(opaque, hover, ctx) { var v = ctx.parsed; var c = v &lt; -50 ? “\#D60000” : v &lt; 0 ? “\#F46300” : v &lt; 50 ? “\#0358B6” : “\#44DE28”;

var opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150);

return opaque ? c : Utils.transparentize(c, opacity); }

function hoverColorize(ctx) { return colorize(false, true, ctx); }

const config = { type: “pie”, data: data, options: { plugins: { legend: false, tooltip: false, }, elements: { arc: { backgroundColor: colorize.bind(null, false, false), hoverBackgroundColor: hoverColorize, }, }, }, }; //

module.exports = { actions, config, }; \`\`\`
