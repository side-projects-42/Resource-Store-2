Interaction Modes
=================

This sample shows how to use the tooltip position mode setting.

\`\`\`js chart-editor // const actions = \[ { name: “Mode: index”, handler(chart) { chart.options.interaction.axis = “xy”; chart.options.interaction.mode = “index”; chart.update(); }, }, { name: “Mode: dataset”, handler(chart) { chart.options.interaction.axis = “xy”; chart.options.interaction.mode = “dataset”; chart.update(); }, }, { name: “Mode: point”, handler(chart) { chart.options.interaction.axis = “xy”; chart.options.interaction.mode = “point”; chart.update(); }, }, { name: “Mode: nearest”, handler(chart) { chart.options.interaction.axis = “xy”; chart.options.interaction.mode = “nearest”; chart.update(); }, }, { name: “Mode: x”, handler(chart) { chart.options.interaction.mode = “x”; chart.update(); }, }, { name: “Mode: y”, handler(chart) { chart.options.interaction.mode = “y”; chart.update(); }, }, { name: “Toggle Intersect”, handler(chart) { chart.options.interaction.intersect = !chart.options.interaction.intersect; chart.update(); }, },\]; //

// const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100 }; const data = { labels: Utils.months({ count: DATA\_COUNT }), datasets: \[ { label: “Dataset 1”, data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: “Dataset 2”, data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), }, \], }; //

// const config = { type: “line”, data: data, options: { interaction: { intersect: false, mode: “index”, }, plugins: { title: { display: true, text: (ctx) =&gt; { const { intersect, mode } = ctx.chart.options.interaction; return “Mode:” + mode + “, intersect:” + intersect; }, }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
