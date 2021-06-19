Quadrants
=========

\`\`\`js chart-editor // const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100 }; const data = { datasets: \[ { label: “Dataset 1”, data: Utils.points(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: “Dataset 2”, data: Utils.points(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), }, \], }; //

// const quadrants = { id: “quadrants”, beforeDraw(chart, args, options) { const { ctx, chartArea: { left, top, right, bottom }, scales: { x, y }, } = chart; const midX = x.getPixelForValue(0); const midY = y.getPixelForValue(0); ctx.save(); ctx.fillStyle = options.topLeft; ctx.fillRect(left, top, midX - left, midY - top); ctx.fillStyle = options.topRight; ctx.fillRect(midX, top, right - midX, midY - top); ctx.fillStyle = options.bottomRight; ctx.fillRect(midX, midY, right - midX, bottom - midY); ctx.fillStyle = options.bottomLeft; ctx.fillRect(left, midY, midX - left, bottom - midY); ctx.restore(); }, }; //

// const config = { type: “scatter”, data: data, options: { plugins: { quadrants: { topLeft: Utils.CHART\_COLORS.red, topRight: Utils.CHART\_COLORS.blue, bottomRight: Utils.CHART\_COLORS.green, bottomLeft: Utils.CHART\_COLORS.yellow, }, }, }, plugins: [quadrants](#quadrants), }; //

const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = Utils.points(NUMBER\_CFG); }); chart.update(); }, },\];

module.exports = { actions, config, }; \`\`\`
