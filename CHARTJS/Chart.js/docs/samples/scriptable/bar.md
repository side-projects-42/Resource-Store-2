Bar Chart
=========

\`\`\`js chart-editor // var DATA\_COUNT = 16; Utils.srand(110);

const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = generateData(); }); chart.update(); }, },\]; //

// function generateData() { return Utils.numbers({ count: DATA\_COUNT, min: -100, max: 100, }); }

const data = { labels: Utils.months({ count: DATA\_COUNT }), datasets: \[ { data: generateData(), }, \], }; //

// function colorize(opaque) { return (ctx) =&gt; { var v = ctx.parsed.y; var c = v &lt; -50 ? “\#D60000” : v &lt; 0 ? “\#F46300” : v &lt; 50 ? “\#0358B6” : “\#44DE28”;

    return opaque ? c : Utils.transparentize(c, 1 - Math.abs(v / 150));

}; }

const config = { type: “bar”, data: data, options: { plugins: { legend: false, }, elements: { bar: { backgroundColor: colorize(false), borderColor: colorize(true), borderWidth: 2, }, }, }, }; //

module.exports = { actions, config, }; \`\`\`
