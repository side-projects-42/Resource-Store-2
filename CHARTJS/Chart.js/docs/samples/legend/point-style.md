Point Style
===========

This sample show how to use the dataset point style in the legend instead of a rectangle to identify each dataset..

\`\`\`js chart-editor // const actions = \[ { name: “Toggle Point Style”, handler(chart) { chart.options.plugins.legend.labels.usePointStyle = !chart.options.plugins.legend.labels.usePointStyle; chart.update(); }, },\]; //

// const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100 }; const data = { labels: Utils.months({ count: DATA\_COUNT }), datasets: \[ { label: “Dataset 1”, data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), borderWidth: 1, pointStyle: “rectRot”, pointRadius: 5, pointBorderColor: “rgb(0, 0, 0)”, }, \], }; //

// const config = { type: “line”, data: data, options: { plugins: { legend: { labels: { usePointStyle: true, }, }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
