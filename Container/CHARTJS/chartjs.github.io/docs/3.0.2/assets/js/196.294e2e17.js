(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{510:function(n,t,e){"use strict";e.r(t);var i=e(27),o=Object(i.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"alignment-and-title-position"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alignment-and-title-position"}},[this._v("#")]),this._v(" Alignment and Title Position")]),this._v(" "),t("p",[this._v("This sample show how to configure the alignment and title position of the chart legend.")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Title Position: start',\n    handler(chart) {\n      chart.options.plugins.legend.align = 'start';\n      chart.options.plugins.legend.title.position = 'start';\n      chart.update();\n    }\n  },\n  {\n    name: 'Title Position: center (default)',\n    handler(chart) {\n      chart.options.plugins.legend.align = 'center';\n      chart.options.plugins.legend.title.position = 'center';\n      chart.update();\n    }\n  },\n  {\n    name: 'Title Position: end',\n    handler(chart) {\n      chart.options.plugins.legend.align = 'end';\n      chart.options.plugins.legend.title.position = 'end';\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      fill: false,\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      legend: {\n        title: {\n          display: true,\n          text: 'Legend Title',\n        }\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);