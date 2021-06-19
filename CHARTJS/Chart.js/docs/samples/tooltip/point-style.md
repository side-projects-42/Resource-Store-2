Point Style
===========

This sample shows how to use the dataset point style in the tooltip instead of a rectangle to identify each dataset.

\`\`\`js chart-editor // const actions = \[ { name: “Toggle Tooltip Point Style”, handler(chart) { chart.options.plugins.tooltip.usePointStyle = !chart.options.plugins.tooltip.usePointStyle; chart.update(); }, },\]; //

// const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100 }; const data = { labels: Utils.months({ count: DATA\_COUNT }), datasets: \[ { label: “Triangles”, data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), pointStyle: “triangle”, pointRadius: 6, }, { label: “Circles”, data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), pointStyle: “circle”, pointRadius: 6, }, { label: “Stars”, data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.green, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.green, 0.5), pointStyle: “star”, pointRadius: 6, }, \], }; //

// const config = { type: “line”, data: data, options: { interaction: { mode: “index”, }, plugins: { title: { display: true, text: (ctx) =&gt; “Tooltip point style:” + ctx.chart.options.plugins.tooltip.usePointStyle, }, tooltip: { usePointStyle: true, }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
