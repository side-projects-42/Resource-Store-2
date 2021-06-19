(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{522:function(n,e,o){"use strict";o.r(e);var t=o(7),a=Object(t.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[this._v("#")]),this._v(" Events")]),this._v(" "),e("p",[this._v("This sample demonstrates how to use the event hooks to highlight chart elements.")]),this._v(" "),e("chart-editor",{attrs:{code:"\n// <block:data:3>\nconst data = {\n  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],\n  datasets: [{\n    label: '# of Votes',\n    data: [12, 19, 3, 5, 2, 3],\n    borderWidth: 1,\n    backgroundColor: ['#CB4335', '#1F618D', '#F1C40F', '#27AE60', '#884EA0', '#D35400'],\n  }]\n};\n// </block:data>\n\n// <block:handleHover:1>\n// Append '4d' to the colors (alpha channel), except for the hovered index\nfunction handleHover(evt, item, legend) {\n  legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {\n    colors[index] = index === item.index || color.length === 9 ? color : color + '4D';\n  });\n  legend.chart.update();\n}\n// </block:handleHover>\n\n// <block:handleLeave:2>\n// Removes the alpha channel from background colors\nfunction handleLeave(evt, item, legend) {\n  legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {\n    colors[index] = color.length === 9 ? color.slice(0, -2) : color;\n  });\n  legend.chart.update();\n}\n// </block:handleLeave>\n\n// <block:config:0>\nconst config = {\n  type: 'pie',\n  data: data,\n  options: {\n    plugins: {\n      legend: {\n        onHover: handleHover,\n        onLeave: handleLeave\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  config\n};\n"}})],1)}),[],!1,null,null,null);e.default=a.exports}}]);