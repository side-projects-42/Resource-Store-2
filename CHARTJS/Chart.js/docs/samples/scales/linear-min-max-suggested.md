Linear Scale - Suggested Min-Max
================================

\`\`\`js chart-editor // const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: 0, max: 100 };

const labels = Utils.months({ count: 7 }); const data = { labels: labels, datasets: \[ { label: “Dataset 1”, data: \[10, 30, 39, 20, 25, 34, -10\], borderColor: Utils.CHART\_COLORS.red, backgroundColor: Utils.CHART\_COLORS.red, }, { label: “Dataset 2”, data: \[18, 33, 22, 19, 11, 39, 30\], borderColor: Utils.CHART\_COLORS.blue, backgroundColor: Utils.CHART\_COLORS.blue, }, \], }; //

// const config = { type: “line”, data: data, options: { responsive: true, plugins: { title: { display: true, text: “Suggested Min and Max Settings”, }, }, scales: { y: { // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin) suggestedMin: 30,

        // the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
        suggestedMax: 50,
      },
    },

}, }; //

module.exports = { config: config, }; \`\`\`
