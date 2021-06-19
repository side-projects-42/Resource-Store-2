(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{568:function(n,t,o){"use strict";o.r(t);var s=o(7),i=Object(s.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"position"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[this._v("#")]),this._v(" Position")]),this._v(" "),t("p",[this._v("This sample shows how to use the tooltip position mode setting.")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:3>\nconst actions = [\n  {\n    name: 'Position: average',\n    handler(chart) {\n      chart.options.plugins.tooltip.position = 'average';\n      chart.update();\n    }\n  },\n  {\n    name: 'Position: nearest',\n    handler(chart) {\n      chart.options.plugins.tooltip.position = 'nearest';\n      chart.update();\n    }\n  },\n  {\n    name: 'Position: bottom (custom)',\n    handler(chart) {\n      chart.options.plugins.tooltip.position = 'bottom';\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:2>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    },\n  ]\n};\n// </block:setup>\n\n// <block:positioner:1>\n// Create a custom tooltip positioner to put at the bottom of the chart area\ncomponents.Tooltip.positioners.bottom = function(items) {\n  const pos = components.Tooltip.positioners.average(items);\n\n  // Happens when nothing is found\n  if (pos === false) {\n    return false;\n  }\n\n  const chart = this._chart;\n\n  return {\n    x: pos.x,\n    y: chart.chartArea.bottom,\n  };\n};\n\n// </block:positioner>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    interaction: {\n      intersect: false,\n      mode: 'index',\n    },\n    plugins: {\n      title: {\n        display: true,\n        text: (ctx) => 'Tooltip position mode: ' + ctx.chart.options.plugins.tooltip.position,\n      },\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);