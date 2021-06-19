Chart Area Border
=================

\`\`\`js chart-editor // const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100 }; const labels = Utils.months({ count: 7 }); const data = { labels: labels, datasets: \[ { label: “Dataset 1”, data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: “Dataset 2”, data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), }, \], }; //

// const chartAreaBorder = { id: “chartAreaBorder”, beforeDraw(chart, args, options) { const { ctx, chartArea: { left, top, width, height }, } = chart; ctx.save(); ctx.strokeStyle = options.borderColor; ctx.lineWidth = options.borderWidth; ctx.setLineDash(options.borderDash || \[\]); ctx.lineDashOffset = options.borderDashOffset; ctx.strokeRect(left, top, width, height); ctx.restore(); }, }; //

// const config = { type: “line”, data: data, options: { plugins: { chartAreaBorder: { borderColor: “red”, borderWidth: 2, borderDash: \[5, 5\], borderDashOffset: 2, }, }, }, plugins: \[chartAreaBorder\], }; //

module.exports = { config: config, }; \`\`\`
