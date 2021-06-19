(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{453:function(t,e,a){"use strict";a.r(e);var s=a(7),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axes"}},[t._v("#")]),t._v(" Axes")]),t._v(" "),a("p",[t._v("Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X-axis and 1 or more Y-axis to map points onto the 2-dimensional canvas. These axes are known as "),a("a",{attrs:{href:"./cartesian/index#cartesian-axes"}},[t._v("'cartesian axes'")]),t._v(".")]),t._v(" "),a("p",[t._v("In a radial chart, such as a radar chart or a polar area chart, there is a single axis that maps points in the angular and radial directions. These are known as "),a("a",{attrs:{href:"./radial/index#radial-axes"}},[t._v("'radial axes'")]),t._v(".")]),t._v(" "),a("p",[t._v("Scales in Chart.js >v2.0 are significantly more powerful, but also different than those of v1.0.")]),t._v(" "),a("ul",[a("li",[t._v("Multiple X & Y axes are supported.")]),t._v(" "),a("li",[t._v("A built-in label auto-skip feature detects would-be overlapping ticks and labels and removes every nth label to keep things displaying normally.")]),t._v(" "),a("li",[t._v("Scale titles are supported.")]),t._v(" "),a("li",[t._v("New scale types can be extended without writing an entirely new chart type.")])]),t._v(" "),a("h2",{attrs:{id:"common-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-configuration"}},[t._v("#")]),t._v(" Common Configuration")]),t._v(" "),a("h3",{attrs:{id:"common-options-to-all-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-options-to-all-axes"}},[t._v("#")]),t._v(" Common options to all axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("type")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("alignToPixels")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Align pixel values to device pixels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("backgroundColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Background color of the scale area.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("display")])]),t._v(" "),a("td",[a("code",[t._v("boolean")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Controls the axis global visibility (visible when "),a("code",[t._v("true")]),t._v(", hidden when "),a("code",[t._v("false")]),t._v("). When "),a("code",[t._v("display: 'auto'")]),t._v(", the axis is visible only if at least one associated dataset is visible.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("grid")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Grid line configuration. "),a("RouterLink",{attrs:{to:"/axes/styling.html#grid-line-configuration"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("min")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User defined minimum number for the scale, overrides minimum value from data. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("max")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User defined maximum number for the scale, overrides maximum value from data. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("reverse")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Reverse the scale.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("stacked")])]),t._v(" "),a("td",[a("code",[t._v("boolean")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Should the data be stacked. "),a("RouterLink",{attrs:{to:"/axes/#stacking"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("suggestedMax")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Adjustment used when calculating the maximum data value. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("suggestedMin")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Adjustment used when calculating the minimum data value. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ticks")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Tick configuration. "),a("RouterLink",{attrs:{to:"/axes/#tick-configuration"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("weight")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("The weight used to sort the axis. Higher weights are further away from the chart area.")])])])]),t._v(" "),a("h2",{attrs:{id:"tick-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tick-configuration"}},[t._v("#")]),t._v(" Tick Configuration")]),t._v(" "),a("h3",{attrs:{id:"common-tick-options-to-all-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-tick-options-to-all-axes"}},[t._v("#")]),t._v(" Common tick options to all axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId].ticks")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Scriptable")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("callback")])]),t._v(" "),a("td",[a("code",[t._v("function")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Returns the string representation of the tick value as it should be displayed on the chart. See "),a("RouterLink",{attrs:{to:"/axes/labelling.html#creating-custom-tick-formats"}},[t._v("callback")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("display")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, show tick labels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("color")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.color")])]),t._v(" "),a("td",[t._v("Color of ticks.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("font")])]),t._v(" "),a("td",[a("code",[t._v("Font")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.font")])]),t._v(" "),a("td",[t._v("See "),a("RouterLink",{attrs:{to:"/general/fonts.html"}},[t._v("Fonts")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("major")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("{}")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/axes/styling.html#major-tick-configuration"}},[t._v("Major ticks configuration")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("padding")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("3")])]),t._v(" "),a("td",[t._v("Sets the offset of the tick labels from the axis")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("textStrokeColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("``")]),t._v(" "),a("td",[t._v("The color of the stroke around the text.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("textStrokeWidth")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Stroke width around the text.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("z")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("z-index of tick layer. Useful when ticks are drawn on chart area. Values <= 0 are drawn under datasets, > 0 on top.")])])])]),t._v(" "),a("h2",{attrs:{id:"axis-range-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axis-range-settings"}},[t._v("#")]),t._v(" Axis Range Settings")]),t._v(" "),a("p",[t._v("Given the number of axis range settings, it is important to understand how they all interact with each other.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("suggestedMax")]),t._v(" and "),a("code",[t._v("suggestedMin")]),t._v(" settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behaviour.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" minDataValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mostNegativeValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("suggestedMin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" maxDataValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mostPositiveValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("suggestedMax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("In this example, the largest positive value is 50, but the data maximum is expanded out to 100. However, because the lowest data value is below the "),a("code",[t._v("suggestedMin")]),t._v(" setting, it is ignored.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" chart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        datasets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'First dataset'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        labels"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'January'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'February'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'March'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'April'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        scales"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                suggestedMin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                suggestedMax"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("In contrast to the "),a("code",[t._v("suggested*")]),t._v(" settings, the "),a("code",[t._v("min")]),t._v(" and "),a("code",[t._v("max")]),t._v(" settings set explicit ends to the axes. When these are set, some data points may not be visible.")]),t._v(" "),a("h2",{attrs:{id:"stacking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stacking"}},[t._v("#")]),t._v(" Stacking")]),t._v(" "),a("p",[t._v("By default data is not stacked. If the "),a("code",[t._v("stacked")]),t._v(" option of the value scale (y-axis on horizontal chart) is "),a("code",[t._v("true")]),t._v(", positive and negative values are stacked separately. Additionally a "),a("code",[t._v("stack")]),t._v(" option can be defined per dataset to further divide into stack groups "),a("RouterLink",{attrs:{to:"/general/data-structures/#dataset-configuration"}},[t._v("more...")]),t._v(".\nFor some charts, you might want to stack positive and negative values together. That can be achieved by specifying "),a("code",[t._v("stacked: 'single'")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"callbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#callbacks"}},[t._v("#")]),t._v(" Callbacks")]),t._v(" "),a("p",[t._v("There are a number of config callbacks that can be used to change parameters in the scale at different points in the update process. The options are supplied at the top level of the axis options.")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Arguments")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("beforeUpdate")])]),t._v(" "),a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[t._v("Callback called before the update process starts.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("beforeSetDimensions")])]),t._v(" "),a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[t._v("Callback that runs before dimensions are set.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("afterSetDimensions")])]),t._v(" "),a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[t._v("Callback that runs after dimensions are set.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("beforeDataLimits")])]),t._v(" "),a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[t._v("Callback that runs before data limits are determined.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("afterDataLimits")])]),t._v(" "),a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[t._v("Callback that runs after data limits are determined.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("beforeBuildTicks")])]),t._v(" "),a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[t._v("Callback that runs before ticks are created.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("afterBuildTicks")])]),t._v(" "),a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[t._v("Callback that runs after ticks are created. Useful for filtering ticks.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("beforeTickToLabelConversion")])]),t._v(" "),a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[t._v("Callback that runs before ticks are converted into strings.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("afterTickToLabelConversion")])]),t._v(" "),a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[t._v("Callback that runs after ticks are converted into strings.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("beforeCalculateTickRotation")])]),t._v(" "),a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[t._v("Callback that runs before tick rotation is determined.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("afterCalculateTickRotation")])]),t._v(" "),a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[t._v("Callback that runs after tick rotation is determined.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("beforeFit")])]),t._v(" "),a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[t._v("Callback that runs before the scale fits to the canvas.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("afterFit")])]),t._v(" "),a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[t._v("Callback that runs after the scale fits to the canvas.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("afterUpdate")])]),t._v(" "),a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[t._v("Callback that runs at the end of the update process.")])])])]),t._v(" "),a("h3",{attrs:{id:"updating-axis-defaults"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating-axis-defaults"}},[t._v("#")]),t._v(" Updating Axis Defaults")]),t._v(" "),a("p",[t._v("The default configuration for a scale can be easily changed. All you need to do is set the new options to "),a("code",[t._v("Chart.defaults.scales[type]")]),t._v(".")]),t._v(" "),a("p",[t._v("For example, to set the minimum value of 0 for all linear scales, you would do the following. Any linear scales created after this time would now have a minimum of 0.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaults"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scales"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("min "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"creating-new-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-new-axes"}},[t._v("#")]),t._v(" Creating New Axes")]),t._v(" "),a("p",[t._v("To create a new axis, see the "),a("RouterLink",{attrs:{to:"/developers/axes.html"}},[t._v("developer docs")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);