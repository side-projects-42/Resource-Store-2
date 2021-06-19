Delay
=====

\`\`\`js chart-editor // const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = Utils.numbers({ count: chart.data.labels.length, min: -100, max: 100, }); }); chart.update(); }, },\]; //

// const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100 };

const labels = Utils.months({ count: 7 }); const data = { labels: labels, datasets: \[ { label: “Dataset 1”, data: Utils.numbers(NUMBER\_CFG), backgroundColor: Utils.CHART\_COLORS.red, }, { label: “Dataset 2”, data: Utils.numbers(NUMBER\_CFG), backgroundColor: Utils.CHART\_COLORS.blue, }, { label: “Dataset 3”, data: Utils.numbers(NUMBER\_CFG), backgroundColor: Utils.CHART\_COLORS.green, }, \], }; //

// var delayed; const config = { type: “bar”, data: data, options: { animation: { onComplete: () =&gt; { delayed = true; }, delay: (context) =&gt; { let delay = 0; if (context.type === “data” && context.mode === “default” && !delayed) { delay = context.dataIndex \* 300 + context.datasetIndex \* 100; } return delay; }, }, scales: { x: { stacked: true, }, y: { stacked: true, }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
