Title Configuration
===================

This sample shows how to configure the title of an axis including alignment, font, and color.

\`\`\`js chart-editor // const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: 0, max: 100 }; const data = { labels: Utils.months({ count: DATA\_COUNT }), datasets: \[ { label: “Dataset 1”, data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: “Dataset 2”, data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), }, \], }; //

// const config = { type: “line”, data: data, options: { responsive: true, scales: { x: { display: true, title: { display: true, text: “Month”, color: “\#911”, font: { family: “Comic Sans MS”, size: 20, weight: “bold”, lineHeight: 1.2, }, padding: { top: 20, left: 0, right: 0, bottom: 0 }, }, }, y: { display: true, title: { display: true, text: “Value”, color: “\#191”, font: { family: “Times”, size: 20, style: “normal”, lineHeight: 1.2, }, padding: { top: 30, left: 0, right: 0, bottom: 0 }, }, }, }, }, }; //

module.exports = { actions: \[\], config: config, }; \`\`\`
