(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{505:function(n,t,e){"use strict";e.r(t);var r=e(7),o=Object(r.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"programmatic-event-triggers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#programmatic-event-triggers"}},[this._v("#")]),this._v(" Programmatic Event Triggers")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:hover:0>\nfunction triggerHover(chart) {\n  if (chart.getActiveElements().length > 0) {\n    chart.setActiveElements([]);\n  } else {\n    chart.setActiveElements([\n      {\n        datasetIndex: 0,\n        index: 0,\n      }, {\n        datasetIndex: 1,\n        index: 0,\n      }\n    ]);\n  }\n  chart.update();\n}\n// </block:hover>\n\n// <block:tooltip:1>\nfunction triggerTooltip(chart) {\n  const tooltip = chart.tooltip;\n  if (tooltip.getActiveElements().length > 0) {\n    tooltip.setActiveElements([], {x: 0, y: 0});\n  } else {\n    const chartArea = chart.chartArea;\n    tooltip.setActiveElements([\n      {\n        datasetIndex: 0,\n        index: 2,\n      }, {\n        datasetIndex: 1,\n        index: 2,\n      }\n    ],\n    {\n      x: (chartArea.left + chartArea.right) / 2,\n      y: (chartArea.top + chartArea.bottom) / 2,\n    });\n  }\n\n  chart.update();\n}\n// </block:tooltip>\n\n// <block:actions:2>\nconst actions = [\n  {\n    name: 'Trigger Hover',\n    handler: triggerHover\n  },\n  {\n    name: 'Trigger Tooltip',\n    handler: triggerTooltip\n  }\n];\n// </block:actions>\n\n// <block:setup:4>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n      hoverBorderWidth: 5,\n      hoverBorderColor: 'green',\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n      hoverBorderWidth: 5,\n      hoverBorderColor: 'green',\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:3>\nconst config = {\n  type: 'bar',\n  data: data,\n  options: {\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);