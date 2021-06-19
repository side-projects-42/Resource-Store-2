(window.webpackJsonp = window.webpackJsonp || []).push([
  [226],
  {
    551: function (n, t, a) {
      "use strict";
      a.r(t);
      var e = a(7),
        s = Object(e.a)(
          {},
          function () {
            var n = this.$createElement,
              t = this._self._c || n;
            return t(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": this.$parent.slotKey } },
              [
                t("h1", { attrs: { id: "linear-scale-step-size" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#linear-scale-step-size" },
                    },
                    [this._v("#")]
                  ),
                  this._v(" Linear Scale - Step Size"),
                ]),
                this._v(" "),
                t("chart-editor", {
                  attrs: {
                    code: "// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Dataset',\n    handler(chart) {\n      const data = chart.data;\n      const dsColor = Utils.namedColor(chart.data.datasets.length);\n      const newDataset = {\n        label: 'Dataset ' + (data.datasets.length + 1),\n        backgroundColor: dsColor,\n        borderColor: dsColor,\n        data: Utils.numbers({count: data.labels.length, min: 0, max: 100}),\n      };\n      chart.data.datasets.push(newDataset);\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Data',\n    handler(chart) {\n      const data = chart.data;\n      if (data.datasets.length > 0) {\n        data.labels = Utils.months({count: data.labels.length + 1});\n\n        for (var index = 0; index < data.datasets.length; ++index) {\n          data.datasets[index].data.push(Utils.rand(0, 100));\n        }\n\n        chart.update();\n      }\n    }\n  },\n  {\n    name: 'Remove Dataset',\n    handler(chart) {\n      chart.data.datasets.pop();\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove Data',\n    handler(chart) {\n      chart.data.labels.splice(-1, 1); // remove the label first\n\n      chart.data.datasets.forEach(dataset => {\n        dataset.data.pop();\n      });\n\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.CHART_COLORS.red,\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.CHART_COLORS.blue,\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      tooltip: {\n        mode: 'index',\n        intersect: false\n      },\n      title: {\n        display: true,\n        text: 'Chart.js Line Chart'\n      }\n    },\n    hover: {\n      mode: 'index',\n      intersec: false\n    },\n    scales: {\n      x: {\n        title: {\n          display: true,\n          text: 'Month'\n        }\n      },\n      y: {\n        title: {\n          display: true,\n          text: 'Value'\n        },\n        min: 0,\n        max: 100,\n        ticks: {\n          // forces step size to be 50 units\n          stepSize: 50\n        }\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n",
                  },
                }),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = s.exports;
    },
  },
]);