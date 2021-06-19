Line Chart Datasets
===================

\`\`\`js chart-editor // const inputs = { min: 20, max: 80, count: 8, decimals: 2, continuity: 1, };

const generateLabels = () =&gt; { return Utils.months({ count: inputs.count }); };

const generateData = () =&gt; Utils.numbers(inputs);

Utils.srand(42); //

// const data = { labels: generateLabels(), datasets: \[ { label: “D0”, data: generateData(), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red), hidden: true, }, { label: “D1”, data: generateData(), borderColor: Utils.CHART\_COLORS.orange, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.orange), fill: “-1”, }, { label: “D2”, data: generateData(), borderColor: Utils.CHART\_COLORS.yellow, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.yellow), hidden: true, fill: 1, }, { label: “D3”, data: generateData(), borderColor: Utils.CHART\_COLORS.green, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.green), fill: “-1”, }, { label: “D4”, data: generateData(), borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue), fill: “-1”, }, { label: “D5”, data: generateData(), borderColor: Utils.CHART\_COLORS.grey, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.grey), fill: “+2”, }, { label: “D6”, data: generateData(), borderColor: Utils.CHART\_COLORS.purple, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.purple), fill: false, }, { label: “D7”, data: generateData(), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red), fill: 8, }, { label: “D8”, data: generateData(), borderColor: Utils.CHART\_COLORS.orange, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.orange), fill: “end”, hidden: true, }, { label: “D9”, data: generateData(), borderColor: Utils.CHART\_COLORS.yellow, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.yellow), fill: { above: “blue”, below: “red”, target: { value: 350 } }, }, \], }; //

// let smooth = false; let propagate = false;

const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = generateData(); }); chart.update(); }, }, { name: “Propagate”, handler(chart) { propagate = !propagate; chart.options.plugins.filler.propagate = propagate; chart.update(); }, }, { name: “Smooth”, handler(chart) { smooth = !smooth; chart.options.elements.line.tension = smooth ? 0.4 : 0; chart.update(); }, },\]; //

// const config = { type: “line”, data: data, options: { scales: { y: { stacked: true, }, }, plugins: { filler: { propagate: false, }, “samples-filler-analyser”: { target: “chart-analyser”, }, }, interaction: { intersect: false, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
