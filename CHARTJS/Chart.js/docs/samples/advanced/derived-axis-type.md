Derived Axis Type
=================

\`\`\`js chart-editor // const DATA\_COUNT = 12; const NUMBER\_CFG = { count: DATA\_COUNT, min: 0, max: 1000 }; const labels = Utils.months({ count: DATA\_COUNT }); const data = { labels: labels, datasets: \[ { label: “My First dataset”, data: Utils.numbers(NUMBER\_CFG), borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), fill: false, }, \], }; //

// const config = { type: “line”, data, options: { responsive: true, scales: { x: { display: true, }, y: { display: true, type: “log2”, }, }, }, };

//

module.exports = { actions: \[\], config: config, }; \`\`\`

Log2 axis implementation
------------------------

&lt;&lt;&lt; @/docs/scripts/log2.js
