(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{468:function(n,t,e){"use strict";e.r(t);var a=e(3),r=Object(a.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"progressive-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#progressive-line"}},[this._v("#")]),this._v(" Progressive Line")]),this._v(" "),t("chart-editor",{attrs:{code:"\n// <block:data:2>\nconst data = [];\nconst data2 = [];\nlet prev = 100;\nlet prev2 = 80;\nfor (let i = 0; i < 1000; i++) {\n  prev += 5 - Math.random() * 10;\n  data.push({x: i, y: prev});\n  prev2 += 5 - Math.random() * 10;\n  data2.push({x: i, y: prev2});\n}\n// </block:data>\n\n// <block:animation:1>\nconst totalDuration = 10000;\nconst delayBetweenPoints = totalDuration / data.length;\nconst previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;\nconst animation = {\n  x: {\n    type: 'number',\n    easing: 'linear',\n    duration: delayBetweenPoints,\n    from: NaN, // the point is initially skipped\n    delay(ctx) {\n      if (ctx.type !== 'data' || ctx.xStarted) {\n        return 0;\n      }\n      ctx.xStarted = true;\n      return ctx.index * delayBetweenPoints;\n    }\n  },\n  y: {\n    type: 'number',\n    easing: 'linear',\n    duration: delayBetweenPoints,\n    from: previousY,\n    delay(ctx) {\n      if (ctx.type !== 'data' || ctx.yStarted) {\n        return 0;\n      }\n      ctx.yStarted = true;\n      return ctx.index * delayBetweenPoints;\n    }\n  }\n};\n// </block:animation>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: {\n    datasets: [{\n      borderColor: Utils.CHART_COLORS.red,\n      borderWidth: 1,\n      radius: 0,\n      data: data,\n    },\n    {\n      borderColor: Utils.CHART_COLORS.blue,\n      borderWidth: 1,\n      radius: 0,\n      data: data2,\n    }]\n  },\n  options: {\n    animation,\n    interaction: {\n      intersect: false\n    },\n    plugins: {\n      legend: false\n    },\n    scales: {\n      x: {\n        type: 'linear'\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  config\n};\n\n"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);