(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{448:function(t,e,a){"use strict";a.r(e);var s=a(7),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cartesian-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cartesian-axes"}},[t._v("#")]),t._v(" Cartesian Axes")]),t._v(" "),a("p",[t._v("Axes that follow a cartesian grid are known as 'Cartesian Axes'. Cartesian axes are used for line, bar, and bubble charts. Four cartesian axes are included in Chart.js by default.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/axes/cartesian/linear.html"}},[t._v("linear")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/axes/cartesian/logarithmic.html"}},[t._v("logarithmic")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/axes/cartesian/category.html"}},[t._v("category")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/axes/cartesian/time.html"}},[t._v("time")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/axes/cartesian/timeseries.html"}},[t._v("timeseries")])],1)]),t._v(" "),a("h2",{attrs:{id:"visual-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visual-components"}},[t._v("#")]),t._v(" Visual Components")]),t._v(" "),a("p",[t._v("A cartesian axis is composed of visual components that can be individually configured. These components are:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#border"}},[t._v("border")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#grid-lines"}},[t._v("grid lines")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#ticks-and-tick-marks"}},[t._v("tick")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#ticks-and-tick-marks"}},[t._v("tick mark")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#title"}},[t._v("title")])])]),t._v(" "),a("h3",{attrs:{id:"border"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#border"}},[t._v("#")]),t._v(" Border")]),t._v(" "),a("p",[t._v("The axis border is drawn at the edge of the axis, beside the chart area. In the image below, it is drawn in red.")]),t._v(" "),a("chart-editor",{attrs:{code:"// <block:setup:1>\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [{\n    label: 'My First dataset',\n    backgroundColor: 'rgba(54, 162, 235, 0.5)',\n    borderColor: 'rgb(54, 162, 235)',\n    borderWidth: 1,\n    data: [10, 20, 30, 40, 50, 0, 5],\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    scales: {\n      x: {\n        grid: {\n          borderColor: 'red'\n        }\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),a("h3",{attrs:{id:"grid-lines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grid-lines"}},[t._v("#")]),t._v(" Grid lines")]),t._v(" "),a("p",[t._v("The grid lines for an axis are drawn on the chart area. In the image below, they are red.")]),t._v(" "),a("chart-editor",{attrs:{code:"// <block:setup:1>\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [{\n    label: 'My First dataset',\n    backgroundColor: 'rgba(54, 162, 235, 0.5)',\n    borderColor: 'rgb(54, 162, 235)',\n    borderWidth: 1,\n    data: [10, 20, 30, 40, 50, 0, 5],\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    scales: {\n      x: {\n        grid: {\n          color: 'red',\n          borderColor: 'grey',\n          tickColor: 'grey'\n        }\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),a("h3",{attrs:{id:"ticks-and-tick-marks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ticks-and-tick-marks"}},[t._v("#")]),t._v(" Ticks and Tick Marks")]),t._v(" "),a("p",[t._v("Ticks represent data values on the axis that appear as labels. The tick mark is the extension of the grid line from the axis border to the label.\nIn this example, the tick mark is drawn in red while the tick label is drawn in blue.")]),t._v(" "),a("chart-editor",{attrs:{code:"// <block:setup:1>\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [{\n    label: 'My First dataset',\n    backgroundColor: 'rgba(54, 162, 235, 0.5)',\n    borderColor: 'rgb(54, 162, 235)',\n    borderWidth: 1,\n    data: [10, 20, 30, 40, 50, 0, 5],\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    scales: {\n      x: {\n        grid: {\n          tickColor: 'red'\n        },\n        ticks: {\n          color: 'blue',\n        }\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),a("h3",{attrs:{id:"title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#title"}},[t._v("#")]),t._v(" Title")]),t._v(" "),a("p",[t._v("The title component of the axis is used to label the data. In the example below, it is shown in red.")]),t._v(" "),a("chart-editor",{attrs:{code:"// <block:setup:1>\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [{\n    label: 'My First dataset',\n    backgroundColor: 'rgba(54, 162, 235, 0.5)',\n    borderColor: 'rgb(54, 162, 235)',\n    borderWidth: 1,\n    data: [10, 20, 30, 40, 50, 0, 5],\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data,\n  options: {\n    scales: {\n      x: {\n        title: {\n          color: 'red',\n          display: true,\n          text: 'Month'\n        }\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),a("h2",{attrs:{id:"common-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-configuration"}},[t._v("#")]),t._v(" Common Configuration")]),t._v(" "),a("h3",{attrs:{id:"common-options-to-all-cartesian-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-options-to-all-cartesian-axes"}},[t._v("#")]),t._v(" Common options to all cartesian axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("bounds")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("'ticks'")])]),t._v(" "),a("td",[t._v("Determines the scale bounds. "),a("RouterLink",{attrs:{to:"/axes/cartesian/#scale-bounds"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("position")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Position of the axis. "),a("RouterLink",{attrs:{to:"/axes/cartesian/#axis-position"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Which type of axis this is. Possible values are: "),a("code",[t._v("'x'")]),t._v(", "),a("code",[t._v("'y'")]),t._v(". If not set, this is inferred from the first character of the ID which should be "),a("code",[t._v("'x'")]),t._v(" or "),a("code",[t._v("'y'")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("offset")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to "),a("code",[t._v("true")]),t._v(" for a bar chart by default.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("title")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Scale title configuration. "),a("RouterLink",{attrs:{to:"/axes/labelling.html#scale-title-configuration"}},[t._v("more...")])],1)])])]),t._v(" "),a("h3",{attrs:{id:"common-options-to-all-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-options-to-all-axes"}},[t._v("#")]),t._v(" Common options to all axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("type")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("alignToPixels")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Align pixel values to device pixels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("backgroundColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Background color of the scale area.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("display")])]),t._v(" "),a("td",[a("code",[t._v("boolean")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Controls the axis global visibility (visible when "),a("code",[t._v("true")]),t._v(", hidden when "),a("code",[t._v("false")]),t._v("). When "),a("code",[t._v("display: 'auto'")]),t._v(", the axis is visible only if at least one associated dataset is visible.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("grid")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Grid line configuration. "),a("RouterLink",{attrs:{to:"/axes/styling.html#grid-line-configuration"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("min")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User defined minimum number for the scale, overrides minimum value from data. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("max")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User defined maximum number for the scale, overrides maximum value from data. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("reverse")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Reverse the scale.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("stacked")])]),t._v(" "),a("td",[a("code",[t._v("boolean")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Should the data be stacked. "),a("RouterLink",{attrs:{to:"/axes/#stacking"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("suggestedMax")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Adjustment used when calculating the maximum data value. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("suggestedMin")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Adjustment used when calculating the minimum data value. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ticks")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Tick configuration. "),a("RouterLink",{attrs:{to:"/axes/#tick-configuration"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("weight")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("The weight used to sort the axis. Higher weights are further away from the chart area.")])])])]),t._v(" "),a("h3",{attrs:{id:"axis-position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axis-position"}},[t._v("#")]),t._v(" Axis Position")]),t._v(" "),a("p",[t._v("An axis can either be positioned at the edge of the chart, at the center of the chart area, or dynamically with respect to a data value.")]),t._v(" "),a("p",[t._v("To position the axis at the edge of the chart, set the "),a("code",[t._v("position")]),t._v(" option to one of: "),a("code",[t._v("'top'")]),t._v(", "),a("code",[t._v("'left'")]),t._v(", "),a("code",[t._v("'bottom'")]),t._v(", "),a("code",[t._v("'right'")]),t._v(".\nTo position the axis at the center of the chart area, set the "),a("code",[t._v("position")]),t._v(" option to "),a("code",[t._v("'center'")]),t._v(". In this mode, either the "),a("code",[t._v("axis")]),t._v(" option is specified or the axis ID starts with the letter 'x' or 'y'.\nTo position the axis with respect to a data value, set the "),a("code",[t._v("position")]),t._v(" option to an object such as:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v('This will position the axis at a value of -20 on the axis with ID "x". For cartesian axes, only 1 axis may be specified.')]),t._v(" "),a("h3",{attrs:{id:"scale-bounds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scale-bounds"}},[t._v("#")]),t._v(" Scale Bounds")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("bounds")]),t._v(" property controls the scale boundary strategy (bypassed by "),a("code",[t._v("min")]),t._v("/"),a("code",[t._v("max")]),t._v(" options).")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("'data'")]),t._v(": makes sure data are fully visible, labels outside are removed")]),t._v(" "),a("li",[a("code",[t._v("'ticks'")]),t._v(": makes sure ticks are fully visible, data outside are truncated")])]),t._v(" "),a("h3",{attrs:{id:"tick-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tick-configuration"}},[t._v("#")]),t._v(" Tick Configuration")]),t._v(" "),a("h3",{attrs:{id:"common-tick-options-to-all-cartesian-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-tick-options-to-all-cartesian-axes"}},[t._v("#")]),t._v(" Common tick options to all cartesian axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId].ticks")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("align")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("'center'")])]),t._v(" "),a("td",[t._v("The tick alignment along the axis. Can be "),a("code",[t._v("'start'")]),t._v(", "),a("code",[t._v("'center'")]),t._v(", or "),a("code",[t._v("'end'")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("crossAlign")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("'near'")])]),t._v(" "),a("td",[t._v("The tick alignment perpendicular to the axis. Can be "),a("code",[t._v("'near'")]),t._v(", "),a("code",[t._v("'center'")]),t._v(", or "),a("code",[t._v("'far'")]),t._v(". See "),a("RouterLink",{attrs:{to:"/axes/cartesian/#tick-alignment"}},[t._v("Tick Alignment")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("sampleSize")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("ticks.length")])]),t._v(" "),a("td",[t._v("The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("autoSkip")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to "),a("code",[t._v("maxRotation")]),t._v(" before skipping any. Turn "),a("code",[t._v("autoSkip")]),t._v(" off to show all labels no matter what.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("autoSkipPadding")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("3")])]),t._v(" "),a("td",[t._v("Padding between the ticks on the horizontal axis when "),a("code",[t._v("autoSkip")]),t._v(" is enabled.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("labelOffset")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis). "),a("em",[t._v("Note: this can cause labels at the edges to be cropped by the edge of the canvas")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("maxRotation")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("50")])]),t._v(" "),a("td",[t._v("Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. "),a("em",[t._v("Note: Only applicable to horizontal scales.")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("minRotation")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Minimum rotation for tick labels. "),a("em",[t._v("Note: Only applicable to horizontal scales.")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mirror")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Flips tick labels around axis, displaying the labels inside the chart instead of outside. "),a("em",[t._v("Note: Only applicable to vertical scales.")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("padding")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.")])])])]),t._v(" "),a("h3",{attrs:{id:"common-tick-options-to-all-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-tick-options-to-all-axes"}},[t._v("#")]),t._v(" Common tick options to all axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId].ticks")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Scriptable")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("backdropColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("'rgba(255, 255, 255, 0.75)'")])]),t._v(" "),a("td",[t._v("Color of label backdrops.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("backdropPadding")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/padding.html"}},[a("code",[t._v("Padding")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("2")])]),t._v(" "),a("td",[t._v("Padding of label backdrop.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("callback")])]),t._v(" "),a("td",[a("code",[t._v("function")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Returns the string representation of the tick value as it should be displayed on the chart. See "),a("RouterLink",{attrs:{to:"/axes/labelling.html#creating-custom-tick-formats"}},[t._v("callback")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("display")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, show tick labels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("color")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.color")])]),t._v(" "),a("td",[t._v("Color of ticks.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("font")])]),t._v(" "),a("td",[a("code",[t._v("Font")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.font")])]),t._v(" "),a("td",[t._v("See "),a("RouterLink",{attrs:{to:"/general/fonts.html"}},[t._v("Fonts")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("major")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("{}")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/axes/styling.html#major-tick-configuration"}},[t._v("Major ticks configuration")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("padding")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("3")])]),t._v(" "),a("td",[t._v("Sets the offset of the tick labels from the axis")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("showLabelBackdrop")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("true")]),t._v(" for radial scale, "),a("code",[t._v("false")]),t._v(" otherwise")]),t._v(" "),a("td",[t._v("If true, draw a background behind the tick labels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("textStrokeColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("``")]),t._v(" "),a("td",[t._v("The color of the stroke around the text.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("textStrokeWidth")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Stroke width around the text.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("z")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("z-index of tick layer. Useful when ticks are drawn on chart area. Values <= 0 are drawn under datasets, > 0 on top.")])])])]),t._v(" "),a("h3",{attrs:{id:"tick-alignment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tick-alignment"}},[t._v("#")]),t._v(" Tick Alignment")]),t._v(" "),a("p",[t._v("The alignment of ticks is primarily controlled using two settings on the tick configuration object: "),a("code",[t._v("align")]),t._v(" and "),a("code",[t._v("crossAlign")]),t._v(". The "),a("code",[t._v("align")]),t._v(" setting configures how labels align with the tick mark along the axis direction (i.e. horizontal for a horizontal axis and vertical for a vertical axis). The "),a("code",[t._v("crossAlign")]),t._v(" setting configures how labels align with the tick mark in the perpendicular direction (i.e. vertical for a horizontal axis and horizontal for a vertical axis). In the example below, the "),a("code",[t._v("crossAlign")]),t._v(" setting is used to left align the labels on the Y axis.")]),t._v(" "),a("chart-editor",{attrs:{code:"// <block:setup:1>\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [{\n    label: 'My First dataset',\n    backgroundColor: [\n      'rgba(255, 99, 132, 0.2)',\n      'rgba(255, 159, 64, 0.2)',\n      'rgba(255, 205, 86, 0.2)',\n      'rgba(75, 192, 192, 0.2)',\n      'rgba(54, 162, 235, 0.2)',\n      'rgba(153, 102, 255, 0.2)',\n      'rgba(201, 203, 207, 0.2)'\n    ],\n    borderColor: [\n      'rgb(255, 99, 132)',\n      'rgb(255, 159, 64)',\n      'rgb(255, 205, 86)',\n      'rgb(75, 192, 192)',\n      'rgb(54, 162, 235)',\n      'rgb(153, 102, 255)',\n      'rgb(201, 203, 207)'\n    ],\n    borderWidth: 1,\n    data: [65, 59, 80, 81, 56, 55, 40],\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'bar',\n  data,\n  options: {\n    indexAxis: 'y',\n    scales: {\n      y: {\n        ticks: {\n          crossAlign: 'far',\n        }\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("crossAlign")]),t._v(" setting is only effective when these preconditions are met:")]),t._v(" "),a("ul",[a("li",[t._v("tick rotation is "),a("code",[t._v("0")])]),t._v(" "),a("li",[t._v("axis position is "),a("code",[t._v("'top'")]),t._v(", '"),a("code",[t._v("left'")]),t._v(", "),a("code",[t._v("'bottom'")]),t._v(" or "),a("code",[t._v("'right'")])])])]),t._v(" "),a("h3",{attrs:{id:"axis-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axis-id"}},[t._v("#")]),t._v(" Axis ID")]),t._v(" "),a("p",[t._v("The properties "),a("code",[t._v("dataset.xAxisID")]),t._v(" or "),a("code",[t._v("dataset.yAxisID")]),t._v(" have to match to "),a("code",[t._v("scales")]),t._v(" property. This is especially needed if multi-axes charts are used.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myChart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        datasets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This dataset appears on the first axis")]),t._v("\n            yAxisID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first-y-axis'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This dataset appears on the second axis")]),t._v("\n            yAxisID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'second-y-axis'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        scales"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first-y-axis'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'linear'")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'second-y-axis'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'linear'")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"creating-multiple-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-multiple-axes"}},[t._v("#")]),t._v(" Creating Multiple Axes")]),t._v(" "),a("p",[t._v("With cartesian axes, it is possible to create multiple X and Y axes. To do so, you can add multiple configuration objects to the "),a("code",[t._v("xAxes")]),t._v(" and "),a("code",[t._v("yAxes")]),t._v(" properties. When adding new axes, it is important to ensure that you specify the type of the new axes as default types are "),a("strong",[t._v("not")]),t._v(" used in this case.")]),t._v(" "),a("p",[t._v("In the example below, we are creating two Y axes. We then use the "),a("code",[t._v("yAxisID")]),t._v(" property to map the datasets to their correct axes.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myChart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        datasets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Left dataset'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This binds the dataset to the left y axis")]),t._v("\n            yAxisID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'left-y-axis'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Right dataset'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This binds the dataset to the right y axis")]),t._v("\n            yAxisID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'right-y-axis'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        labels"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Feb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Apr'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'May'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jun'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        scales"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'left-y-axis'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'linear'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                position"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'left'")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'right-y-axis'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'linear'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                position"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'right'")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);