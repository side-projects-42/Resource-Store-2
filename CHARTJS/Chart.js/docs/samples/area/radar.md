Radar Chart Stacked
===================

\`\`\`js chart-editor // const inputs = { min: 8, max: 16, count: 8, decimals: 2, continuity: 1, };

const generateLabels = () =&gt; { return Utils.months({ count: inputs.count }); };

const generateData = () =&gt; { const values = Utils.numbers(inputs); inputs.from = values; return values; };

const labels = Utils.months({ count: 8 }); const data = { labels: generateLabels(), datasets: \[ { label: “D0”, data: generateData(), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red), }, { label: “D1”, data: generateData(), borderColor: Utils.CHART\_COLORS.orange, hidden: true, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.orange), fill: “-1”, }, { label: “D2”, data: generateData(), borderColor: Utils.CHART\_COLORS.yellow, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.yellow), fill: 1, }, { label: “D3”, data: generateData(), borderColor: Utils.CHART\_COLORS.green, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.green), fill: false, }, { label: “D4”, data: generateData(), borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue), fill: “-1”, }, { label: “D5”, data: generateData(), borderColor: Utils.CHART\_COLORS.purple, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.purple), fill: “-1”, }, { label: “D6”, data: generateData(), borderColor: Utils.CHART\_COLORS.grey, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.grey), fill: { value: 85 }, }, \], }; //

// let smooth = false; let propagate = false;

const actions = \[ { name: “Randomize”, handler(chart) { inputs.from = \[\]; chart.data.datasets.forEach((dataset) =&gt; { dataset.data = generateData(); }); chart.update(); }, }, { name: “Propagate”, handler(chart) { propagate = !propagate; chart.options.plugins.filler.propagate = propagate; chart.update(); }, }, { name: “Smooth”, handler(chart) { smooth = !smooth; chart.options.elements.line.tension = smooth ? 0.4 : 0; chart.update(); }, },\]; //

// const config = { type: “radar”, data: data, options: { plugins: { filler: { propagate: false, }, “samples-filler-analyser”: { target: “chart-analyser”, }, }, interaction: { intersect: false, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
