Line Chart Boundaries
=====================

\`\`\`js chart-editor // const inputs = { min: -100, max: 100, count: 8, decimals: 2, continuity: 1, };

const generateLabels = () =&gt; { return Utils.months({ count: inputs.count }); };

const generateData = () =&gt; Utils.numbers(inputs); //

// const data = { labels: generateLabels(), datasets: \[ { label: “Dataset”, data: generateData(), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red), fill: false, }, \], }; //

// let smooth = false;

const actions = \[ { name: “Fill: false (default)”, handler: (chart) =&gt; { chart.data.datasets.forEach((dataset) =&gt; { dataset.fill = false; }); chart.update(); }, }, { name: “Fill: origin”, handler: (chart) =&gt; { chart.data.datasets.forEach((dataset) =&gt; { dataset.fill = “origin”; }); chart.update(); }, }, { name: “Fill: start”, handler: (chart) =&gt; { chart.data.datasets.forEach((dataset) =&gt; { dataset.fill = “start”; }); chart.update(); }, }, { name: “Fill: end”, handler: (chart) =&gt; { chart.data.datasets.forEach((dataset) =&gt; { dataset.fill = “end”; }); chart.update(); }, }, { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = generateData(); }); chart.update(); }, }, { name: “Smooth”, handler(chart) { smooth = !smooth; chart.options.elements.line.tension = smooth ? 0.4 : 0; chart.update(); }, },\]; //

// const config = { type: “line”, data: data, options: { plugins: { filler: { propagate: false, }, title: { display: true, text: (ctx) =&gt; “Fill:” + ctx.chart.data.datasets\[0\].fill, }, }, interaction: { intersect: false, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
