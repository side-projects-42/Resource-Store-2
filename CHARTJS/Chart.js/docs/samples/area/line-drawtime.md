Line Chart drawTime
===================

\`\`\`js chart-editor // const inputs = { min: -100, max: 100, count: 8, decimals: 2, continuity: 1, };

const generateLabels = () =&gt; { return Utils.months({ count: inputs.count }); };

Utils.srand(3); const generateData = () =&gt; Utils.numbers(inputs); //

// const data = { labels: generateLabels(), datasets: \[ { label: “Dataset 1”, data: generateData(), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.CHART\_COLORS.red, fill: true, }, { label: “Dataset 2”, data: generateData(), borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue), fill: true, }, \], }; //

// let smooth = false;

const actions = \[ { name: “drawTime: beforeDatasetDraw (default)”, handler: (chart) =&gt; { chart.options.plugins.filler.drawTime = “beforeDatasetDraw”; chart.update(); }, }, { name: “drawTime: beforeDatasetsDraw”, handler: (chart) =&gt; { chart.options.plugins.filler.drawTime = “beforeDatasetsDraw”; chart.update(); }, }, { name: “drawTime: beforeDraw”, handler: (chart) =&gt; { chart.options.plugins.filler.drawTime = “beforeDraw”; chart.update(); }, }, { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = generateData(); }); chart.update(); }, }, { name: “Smooth”, handler(chart) { smooth = !smooth; chart.options.elements.line.tension = smooth ? 0.4 : 0; chart.update(); }, },\]; //

// const config = { type: “line”, data: data, options: { plugins: { filler: { propagate: false, }, title: { display: true, text: (ctx) =&gt; “drawTime:” + ctx.chart.options.plugins.filler.drawTime, }, }, pointBackgroundColor: “\#fff”, radius: 10, interaction: { intersect: false, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
