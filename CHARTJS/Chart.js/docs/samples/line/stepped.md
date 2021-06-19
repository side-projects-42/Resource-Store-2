Stepped Line Charts
===================

\`\`\`js chart-editor // const actions = \[ { name: “Step: false (default)”, handler: (chart) =&gt; { chart.data.datasets.forEach((dataset) =&gt; { dataset.stepped = false; }); chart.update(); }, }, { name: “Step: true”, handler: (chart) =&gt; { chart.data.datasets.forEach((dataset) =&gt; { dataset.stepped = true; }); chart.update(); }, }, { name: “Step: before”, handler: (chart) =&gt; { chart.data.datasets.forEach((dataset) =&gt; { dataset.stepped = “before”; }); chart.update(); }, }, { name: “Step: after”, handler: (chart) =&gt; { chart.data.datasets.forEach((dataset) =&gt; { dataset.stepped = “after”; }); chart.update(); }, }, { name: “Step: middle”, handler: (chart) =&gt; { chart.data.datasets.forEach((dataset) =&gt; { dataset.stepped = “middle”; }); chart.update(); }, },\]; //

// const data = { labels: \[“Day 1”, “Day 2”, “Day 3”, “Day 4”, “Day 5”, “Day 6”\], datasets: \[ { label: “Dataset”, data: Utils.numbers({ count: 6, min: -100, max: 100 }), borderColor: Utils.CHART\_COLORS.red, fill: false, stepped: true, }, \], }; //

// const config = { type: “line”, data: data, options: { responsive: true, interaction: { intersect: false, axis: “x”, }, plugins: { title: { display: true, text: (ctx) =&gt; “Step” + ctx.chart.data.datasets\[0\].stepped + " Interpolation", }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
