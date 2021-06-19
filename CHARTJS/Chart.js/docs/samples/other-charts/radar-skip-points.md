Radar skip points
=================

\`\`\`js chart-editor // const actions = \[ { name: “Randomize”, handler(chart) { chart.data.datasets.forEach((dataset, i) =&gt; { const data = Utils.numbers({ count: chart.data.labels.length, min: 0, max: 100, });

        if (i === 0) {
          data[0] = null;
        } else if (i === 1) {
          data[Number.parseInt(data.length / 2, 10)] = null;
        } else {
          data[data.length - 1] = null;
        }

        dataset.data = data;
      });
      chart.update();
    },

}, \]; //

// const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: 0, max: 100 };

const labels = Utils.months({ count: 7 }); const dataFirstSkip = Utils.numbers(NUMBER\_CFG); const dataMiddleSkip = Utils.numbers(NUMBER\_CFG); const dataLastSkip = Utils.numbers(NUMBER\_CFG);

dataFirstSkip\[0\] = null; dataMiddleSkip\[Number.parseInt(dataMiddleSkip.length / 2, 10)\] = null; dataLastSkip\[dataLastSkip.length - 1\] = null;

const data = { labels: labels, datasets: \[ { label: “Skip first dataset”, data: dataFirstSkip, borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.red, 0.5), }, { label: “Skip mid dataset”, data: dataMiddleSkip, borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), }, { label: “Skip last dataset”, data: dataLastSkip, borderColor: Utils.CHART\_COLORS.green, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.green, 0.5), }, \], }; //

// const config = { type: “radar”, data: data, options: { responsive: true, plugins: { title: { display: true, text: “Chart.js Radar Skip Points Chart”, }, }, }, }; //

module.exports = { actions: actions, config: config, }; \`\`\`
