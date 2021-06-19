(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{514:function(n,t,a){"use strict";a.r(t);var e=a(4),o=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"line-chart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#line-chart"}},[this._v("#")]),this._v(" Line Chart")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:2>\nconst DATA_COUNT = 12;\nUtils.srand(110);\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = generateData();\n      });\n      chart.update();\n    }\n  },\n];\n// </block:setup>\n\n// <block:data:1>\nfunction generateData() {\n  return Utils.numbers({\n    count: DATA_COUNT,\n    min: 0,\n    max: 100\n  });\n}\n\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [{\n    data: generateData()\n  }]\n};\n// </block:data>\n\n// <block:options:0>\nfunction getLineColor(ctx) {\n  return Utils.color(ctx.datasetIndex);\n}\n\nfunction alternatePointStyles(ctx) {\n  var index = ctx.dataIndex;\n  return index % 2 === 0 ? 'circle' : 'rect';\n}\n\nfunction makeHalfAsOpaque(ctx) {\n  return Utils.transparentize(getLineColor(ctx));\n}\n\nfunction adjustRadiusBasedOnData(ctx) {\n  var v = ctx.parsed.y;\n  return v < 10 ? 5\n    : v < 25 ? 7\n    : v < 50 ? 9\n    : v < 75 ? 11\n    : 15;\n}\n\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    plugins: {\n      legend: false,\n      tooltip: true,\n    },\n    elements: {\n      line: {\n        fill: false,\n        backgroundColor: getLineColor,\n        borderColor: getLineColor,\n      },\n      point: {\n        backgroundColor: getLineColor,\n        hoverBackgroundColor: makeHalfAsOpaque,\n        radius: adjustRadiusBasedOnData,\n        pointStyle: alternatePointStyles,\n        hoverRadius: 15,\n      }\n    }\n  }\n};\n// </block:options>\n\nmodule.exports = {\n  actions,\n  config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);