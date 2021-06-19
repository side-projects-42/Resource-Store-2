(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{525:function(n,t,o){"use strict";o.r(t);var e=o(3),i=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"point-style"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#point-style"}},[this._v("#")]),this._v(" Point Style")]),this._v(" "),t("p",[this._v("This sample shows how to use the dataset point style in the tooltip instead of a rectangle to identify each dataset.")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Toggle Tooltip Point Style',\n    handler(chart) {\n      chart.options.plugins.tooltip.usePointStyle = !chart.options.plugins.tooltip.usePointStyle;\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Triangles',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n      pointStyle: 'triangle',\n      pointRadius: 6,\n    },\n    {\n      label: 'Circles',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n      pointStyle: 'circle',\n      pointRadius: 6,\n    },\n    {\n      label: 'Stars',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.green,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),\n      pointStyle: 'star',\n      pointRadius: 6,\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    interaction: {\n      mode: 'index',\n    },\n    plugins: {\n      title: {\n        display: true,\n        text: (ctx) => 'Tooltip point style: ' + ctx.chart.options.plugins.tooltip.usePointStyle,\n      },\n      tooltip: {\n        usePointStyle: true,\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);