Pie
===

\`\`\`js chart-editor // const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = Utils.numbers({ count: chart.data.labels.length, min: 0, max: 100, }); }); chart.update(); }, }, { name: “Add Dataset”, handler(chart) { const data = chart.data; const newDataset = { label: “Dataset” + (data.datasets.length + 1), backgroundColor: \[\], data: \[\], };

      for (let i = 0; i < data.labels.length; i++) {
        newDataset.data.push(Utils.numbers({ count: 1, min: 0, max: 100 }));

        const colorIndex = i % Object.keys(Utils.CHART_COLORS).length;
        newDataset.backgroundColor.push(
          Object.values(Utils.CHART_COLORS)[colorIndex]
        );
      }

      chart.data.datasets.push(newDataset);
      chart.update();
    },

}, { name: “Add Data”, handler(chart) { const data = chart.data; if (data.datasets.length &gt; 0) { data.labels.push(“data \#” + (data.labels.length + 1));

        for (var index = 0; index < data.datasets.length; ++index) {
          data.datasets[index].data.push(Utils.rand(0, 100));
        }

        chart.update();
      }
    },

}, { name: “Remove Dataset”, handler(chart) { chart.data.datasets.pop(); chart.update(); }, }, { name: “Remove Data”, handler(chart) { chart.data.labels.splice(-1, 1); // remove the label first

      chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
      });

      chart.update();
    },

}, \]; //

// const DATA\_COUNT = 5; const NUMBER\_CFG = { count: DATA\_COUNT, min: 0, max: 100 };

const data = { labels: \[“Red”, “Orange”, “Yellow”, “Green”, “Blue”\], datasets: \[ { label: “Dataset 1”, data: Utils.numbers(NUMBER\_CFG), backgroundColor: Object.values(Utils.CHART\_COLORS), }, \], }; //

// const config = { type: “pie”, data: data, options: { responsive: true, plugins: { legend: { position: “top”, }, title: { display: true, text: “Chart.js Pie Chart”, }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
