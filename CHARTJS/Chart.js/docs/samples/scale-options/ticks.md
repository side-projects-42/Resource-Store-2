Tick Configuration
==================

This sample shows how to use different tick features to control how tick labels are shown on the X axis. These features include:

-   Multi-line labels
-   Filtering labels
-   Changing the tick color
-   Changing the tick alignment for the X axis

\`\`\`js chart-editor // const actions = \[ { name: “Alignment: start”, handler(chart) { chart.options.scales.x.ticks.align = “start”; chart.update(); }, }, { name: “Alignment: center (default)”, handler(chart) { chart.options.scales.x.ticks.align = “center”; chart.update(); }, }, { name: “Alignment: end”, handler(chart) { chart.options.scales.x.ticks.align = “end”; chart.update(); }, },\]; //

// const DATA\_COUNT = 12; const NUMBER\_CFG = { count: DATA\_COUNT, min: 0, max: 100 }; const data = { labels: \[ \[“June”, “2015”\], “July”, “August”, “September”, “October”, “November”, “December”, \[“January”, “2016”\], “February”, “March”, “April”, “May”, \], datasets: \[ { label: “Dataset 1”, data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: “Dataset 2”, data: Utils.numbers(NUMBER\_CFG), fill: false, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), }, \], }; //

// const config = { type: “line”, data: data, options: { responsive: true, plugins: { title: { display: true, text: “Chart with Tick Configuration”, }, }, scales: { x: { ticks: { // For a category axis, the val is the index so the lookup via getLabelForValue is needed callback: function (val, index) { // Hide the label of every 2nd dataset return index % 2 === 0 ? this.getLabelForValue(val) : "“; }, color:”red", }, }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
