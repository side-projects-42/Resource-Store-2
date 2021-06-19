Line Styling
============

\`\`\`js chart-editor // const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100 };

const labels = Utils.months({ count: DATA\_COUNT }); const data = { labels: labels, datasets: \[ { label: “Unfilled”, fill: false, backgroundColor: Utils.CHART\_COLORS.blue, borderColor: Utils.CHART\_COLORS.blue, data: Utils.numbers(NUMBER\_CFG), }, { label: “Dashed”, fill: false, backgroundColor: Utils.CHART\_COLORS.green, borderColor: Utils.CHART\_COLORS.green, borderDash: \[5, 5\], data: Utils.numbers(NUMBER\_CFG), }, { label: “Filled”, backgroundColor: Utils.CHART\_COLORS.red, borderColor: Utils.CHART\_COLORS.red, data: Utils.numbers(NUMBER\_CFG), fill: true, }, \], }; //

// const config = { type: “line”, data: data, options: { responsive: true, plugins: { title: { display: true, text: “Chart.js Line Chart”, }, }, interaction: { mode: “index”, intersect: false, }, scales: { x: { display: true, title: { display: true, text: “Month”, }, }, y: { display: true, title: { display: true, text: “Value”, }, }, }, }, }; //

module.exports = { actions: \[\], config: config, }; \`\`\`
