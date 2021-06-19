Alignment and Title Position
============================

This sample show how to configure the alignment and title position of the chart legend.

\`\`\`js chart-editor // const actions = \[ { name: “Title Position: start”, handler(chart) { chart.options.plugins.legend.align = “start”; chart.options.plugins.legend.title.position = “start”; chart.update(); }, }, { name: “Title Position: center (default)”, handler(chart) { chart.options.plugins.legend.align = “center”; chart.options.plugins.legend.title.position = “center”; chart.update(); }, }, { name: “Title Position: end”, handler(chart) { chart.options.plugins.legend.align = “end”; chart.options.plugins.legend.title.position = “end”; chart.update(); }, },\]; //

// const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100 }; const data = { labels: Utils.months({ count: DATA\_COUNT }), datasets: \[ { label: “Dataset 1”, data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, \], }; //

// const config = { type: “line”, data: data, options: { plugins: { legend: { title: { display: true, text: “Legend Title”, }, }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
