Position
========

This sample show how to change the position of the chart legend.

\`\`\`js chart-editor // const actions = \[ { name: “Position: top”, handler(chart) { chart.options.plugins.legend.position = “top”; chart.update(); }, }, { name: “Position: right”, handler(chart) { chart.options.plugins.legend.position = “right”; chart.update(); }, }, { name: “Position: bottom”, handler(chart) { chart.options.plugins.legend.position = “bottom”; chart.update(); }, }, { name: “Position: left”, handler(chart) { chart.options.plugins.legend.position = “left”; chart.update(); }, },\]; //

// const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100 }; const data = { labels: Utils.months({ count: DATA\_COUNT }), datasets: \[ { label: “Dataset 1”, data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, \], }; //

// const config = { type: “line”, data: data, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
