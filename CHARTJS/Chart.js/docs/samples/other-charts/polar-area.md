Polar area
==========

\`\`\`js chart-editor // const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset) =&gt; { dataset.data = Utils.numbers({ count: chart.data.labels.length, min: 0, max: 100, }); }); chart.update(); }, }, { name: “Add Data”, handler(chart) { const data = chart.data; if (data.datasets.length &gt; 0) { data.labels.push(“data \#” + (data.labels.length + 1));

        for (var index = 0; index < data.datasets.length; ++index) {
          data.datasets[index].data.push(Utils.rand(0, 100));
        }

        chart.update();
      }
    },

}, { name: “Remove Data”, handler(chart) { chart.data.labels.splice(-1, 1); // remove the label first

      chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
      });

      chart.update();
    },

}, \]; //

// const DATA\_COUNT = 5; const NUMBER\_CFG = { count: DATA\_COUNT, min: 0, max: 100 };

const labels = \[“Red”, “Orange”, “Yellow”, “Green”, “Blue”\]; const data = { labels: labels, datasets: \[ { label: “Dataset 1”, data: Utils.numbers(NUMBER\_CFG), backgroundColor: \[ Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), Utils.transparentize(Utils.CHART\_COLORS.orange, 0.5), Utils.transparentize(Utils.CHART\_COLORS.yellow, 0.5), Utils.transparentize(Utils.CHART\_COLORS.green, 0.5), Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), \], }, \], }; //

// const config = { type: “polarArea”, data: data, options: { responsive: true, plugins: { legend: { position: “top”, }, title: { display: true, text: “Chart.js Polar Area Chart”, }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
