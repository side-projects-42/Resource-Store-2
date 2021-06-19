Custom Tooltip Content
======================

This sample shows how to use the tooltip callbacks to add additional content to the tooltip.

\`\`\`js chart-editor // const footer = (tooltipItems) =&gt; { let sum = 0;

tooltipItems.forEach(function (tooltipItem) { sum += tooltipItem.parsed.y; }); return “Sum:” + sum; };

//

// const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100, decimals: 0 }; const data = { labels: Utils.months({ count: DATA\_COUNT }), datasets: \[ { label: “Dataset 1”, data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: “Dataset 2”, data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), }, \], }; //

// const config = { type: “line”, data: data, options: { interaction: { intersect: false, mode: “index”, }, plugins: { tooltip: { callbacks: { footer: footer, }, }, }, }, }; //

module.exports = { actions: \[\], config: config, }; \`\`\`
