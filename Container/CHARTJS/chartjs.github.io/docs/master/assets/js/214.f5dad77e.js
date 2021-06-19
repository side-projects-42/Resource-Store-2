(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{497:function(n,t,a){"use strict";a.r(t);var s=a(3),e=Object(s.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"radar-skip-points"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#radar-skip-points"}},[this._v("#")]),this._v(" Radar skip points")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach((dataset, i) => {\n        const data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});\n\n        if (i === 0) {\n          data[0] = null;\n        } else if (i === 1) {\n          data[Number.parseInt(data.length / 2, 10)] = null;\n        } else {\n          data[data.length - 1] = null;\n        }\n\n        dataset.data = data;\n      });\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst dataFirstSkip = Utils.numbers(NUMBER_CFG);\nconst dataMiddleSkip = Utils.numbers(NUMBER_CFG);\nconst dataLastSkip = Utils.numbers(NUMBER_CFG);\n\ndataFirstSkip[0] = null;\ndataMiddleSkip[Number.parseInt(dataMiddleSkip.length / 2, 10)] = null;\ndataLastSkip[dataLastSkip.length - 1] = null;\n\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Skip first dataset',\n      data: dataFirstSkip,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Skip mid dataset',\n      data: dataMiddleSkip,\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    },\n    {\n      label: 'Skip last dataset',\n      data: dataLastSkip,\n      borderColor: Utils.CHART_COLORS.green,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'radar',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      title: {\n        display: true,\n        text: 'Chart.js Radar Skip Points Chart'\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config\n};\n"}})],1)}),[],!1,null,null,null);t.default=e.exports}}]);