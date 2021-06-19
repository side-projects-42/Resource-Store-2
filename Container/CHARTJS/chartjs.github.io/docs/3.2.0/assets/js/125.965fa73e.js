(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{449:function(t,e,a){"use strict";a.r(e);var o=a(7),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linear-axis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linear-axis"}},[t._v("#")]),t._v(" Linear Axis")]),t._v(" "),a("p",[t._v("The linear scale is used to chart numerical data. It can be placed on either the x or y-axis. The scatter chart type automatically configures a line chart to use one of these scales for the x-axis. As the name suggests, linear interpolation is used to determine where a value lies on the axis.")]),t._v(" "),a("h2",{attrs:{id:"configuration-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration Options")]),t._v(" "),a("h3",{attrs:{id:"linear-axis-specific-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linear-axis-specific-options"}},[t._v("#")]),t._v(" Linear Axis specific options")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("beginAtZero")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[t._v("if true, scale will include 0 if it is not already included.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("grace")])]),t._v(" "),a("td",[a("code",[t._v("number")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("Percentage (string ending with "),a("code",[t._v("%")]),t._v(") or amount (number) for added room in the scale range above and below data. "),a("a",{attrs:{href:"#grace"}},[t._v("more...")])])])])]),t._v(" "),a("h3",{attrs:{id:"common-options-to-all-cartesian-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-options-to-all-cartesian-axes"}},[t._v("#")]),t._v(" Common options to all cartesian axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("bounds")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("'ticks'")])]),t._v(" "),a("td",[t._v("Determines the scale bounds. "),a("RouterLink",{attrs:{to:"/axes/cartesian/#scale-bounds"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("position")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Position of the axis. "),a("RouterLink",{attrs:{to:"/axes/cartesian/#axis-position"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("axis")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Which type of axis this is. Possible values are: "),a("code",[t._v("'x'")]),t._v(", "),a("code",[t._v("'y'")]),t._v(". If not set, this is inferred from the first character of the ID which should be "),a("code",[t._v("'x'")]),t._v(" or "),a("code",[t._v("'y'")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("offset")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to "),a("code",[t._v("true")]),t._v(" for a bar chart by default.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("title")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Scale title configuration. "),a("RouterLink",{attrs:{to:"/axes/labelling.html#scale-title-configuration"}},[t._v("more...")])],1)])])]),t._v(" "),a("h3",{attrs:{id:"common-options-to-all-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-options-to-all-axes"}},[t._v("#")]),t._v(" Common options to all axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("type")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("alignToPixels")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Align pixel values to device pixels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("backgroundColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Background color of the scale area.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("display")])]),t._v(" "),a("td",[a("code",[t._v("boolean")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Controls the axis global visibility (visible when "),a("code",[t._v("true")]),t._v(", hidden when "),a("code",[t._v("false")]),t._v("). When "),a("code",[t._v("display: 'auto'")]),t._v(", the axis is visible only if at least one associated dataset is visible.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("grid")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Grid line configuration. "),a("RouterLink",{attrs:{to:"/axes/styling.html#grid-line-configuration"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("min")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User defined minimum number for the scale, overrides minimum value from data. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("max")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User defined maximum number for the scale, overrides maximum value from data. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("reverse")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Reverse the scale.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("stacked")])]),t._v(" "),a("td",[a("code",[t._v("boolean")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Should the data be stacked. "),a("RouterLink",{attrs:{to:"/axes/#stacking"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("suggestedMax")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Adjustment used when calculating the maximum data value. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("suggestedMin")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Adjustment used when calculating the minimum data value. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ticks")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Tick configuration. "),a("RouterLink",{attrs:{to:"/axes/#tick-configuration"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("weight")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("The weight used to sort the axis. Higher weights are further away from the chart area.")])])])]),t._v(" "),a("h2",{attrs:{id:"tick-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tick-configuration"}},[t._v("#")]),t._v(" Tick Configuration")]),t._v(" "),a("h3",{attrs:{id:"linear-axis-specific-tick-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linear-axis-specific-tick-options"}},[t._v("#")]),t._v(" Linear Axis specific tick options")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId].ticks")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Scriptable")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("count")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("undefined")])]),t._v(" "),a("td",[t._v("The number of ticks to generate. If specified, this overrides the automatic generation.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("format")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Intl.NumberFormat")]),a("OutboundLink")],1),t._v(" options used by the default label formatter")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("maxTicksLimit")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("11")])]),t._v(" "),a("td",[t._v("Maximum number of ticks and gridlines to show.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("precision")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("if defined and "),a("code",[t._v("stepSize")]),t._v(" is not specified, the step size will be rounded to this many decimal places.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("stepSize")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User-defined fixed step size for the scale. "),a("a",{attrs:{href:"#step-size"}},[t._v("more...")])])])])]),t._v(" "),a("h3",{attrs:{id:"common-tick-options-to-all-cartesian-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-tick-options-to-all-cartesian-axes"}},[t._v("#")]),t._v(" Common tick options to all cartesian axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId].ticks")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("align")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("'center'")])]),t._v(" "),a("td",[t._v("The tick alignment along the axis. Can be "),a("code",[t._v("'start'")]),t._v(", "),a("code",[t._v("'center'")]),t._v(", or "),a("code",[t._v("'end'")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("crossAlign")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("'near'")])]),t._v(" "),a("td",[t._v("The tick alignment perpendicular to the axis. Can be "),a("code",[t._v("'near'")]),t._v(", "),a("code",[t._v("'center'")]),t._v(", or "),a("code",[t._v("'far'")]),t._v(". See "),a("RouterLink",{attrs:{to:"/axes/cartesian/#tick-alignment"}},[t._v("Tick Alignment")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("sampleSize")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("ticks.length")])]),t._v(" "),a("td",[t._v("The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("autoSkip")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to "),a("code",[t._v("maxRotation")]),t._v(" before skipping any. Turn "),a("code",[t._v("autoSkip")]),t._v(" off to show all labels no matter what.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("autoSkipPadding")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("3")])]),t._v(" "),a("td",[t._v("Padding between the ticks on the horizontal axis when "),a("code",[t._v("autoSkip")]),t._v(" is enabled.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("labelOffset")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis). "),a("em",[t._v("Note: this can cause labels at the edges to be cropped by the edge of the canvas")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("maxRotation")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("50")])]),t._v(" "),a("td",[t._v("Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. "),a("em",[t._v("Note: Only applicable to horizontal scales.")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("minRotation")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Minimum rotation for tick labels. "),a("em",[t._v("Note: Only applicable to horizontal scales.")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mirror")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Flips tick labels around axis, displaying the labels inside the chart instead of outside. "),a("em",[t._v("Note: Only applicable to vertical scales.")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("padding")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.")])])])]),t._v(" "),a("h3",{attrs:{id:"common-tick-options-to-all-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-tick-options-to-all-axes"}},[t._v("#")]),t._v(" Common tick options to all axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId].ticks")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Scriptable")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("backdropColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("'rgba(255, 255, 255, 0.75)'")])]),t._v(" "),a("td",[t._v("Color of label backdrops.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("backdropPadding")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/padding.html"}},[a("code",[t._v("Padding")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("2")])]),t._v(" "),a("td",[t._v("Padding of label backdrop.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("callback")])]),t._v(" "),a("td",[a("code",[t._v("function")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Returns the string representation of the tick value as it should be displayed on the chart. See "),a("RouterLink",{attrs:{to:"/axes/labelling.html#creating-custom-tick-formats"}},[t._v("callback")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("display")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, show tick labels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("color")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.color")])]),t._v(" "),a("td",[t._v("Color of ticks.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("font")])]),t._v(" "),a("td",[a("code",[t._v("Font")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.font")])]),t._v(" "),a("td",[t._v("See "),a("RouterLink",{attrs:{to:"/general/fonts.html"}},[t._v("Fonts")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("major")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("{}")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/axes/styling.html#major-tick-configuration"}},[t._v("Major ticks configuration")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("padding")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("3")])]),t._v(" "),a("td",[t._v("Sets the offset of the tick labels from the axis")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("showLabelBackdrop")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("true")]),t._v(" for radial scale, "),a("code",[t._v("false")]),t._v(" otherwise")]),t._v(" "),a("td",[t._v("If true, draw a background behind the tick labels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("textStrokeColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("``")]),t._v(" "),a("td",[t._v("The color of the stroke around the text.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("textStrokeWidth")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Stroke width around the text.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("z")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("z-index of tick layer. Useful when ticks are drawn on chart area. Values <= 0 are drawn under datasets, > 0 on top.")])])])]),t._v(" "),a("h2",{attrs:{id:"step-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-size"}},[t._v("#")]),t._v(" Step Size")]),t._v(" "),a("p",[t._v("If set, the scale ticks will be enumerated by multiple of "),a("code",[t._v("stepSize")]),t._v(", having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm.")]),t._v(" "),a("p",[t._v("This example sets up a chart with a y axis that creates ticks at "),a("code",[t._v("0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    scales"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            min"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            ticks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                stepSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"grace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grace"}},[t._v("#")]),t._v(" Grace")]),t._v(" "),a("p",[t._v("If the value is string ending with "),a("code",[t._v("%")]),t._v(", its treat as percentage. If number, its treat as value.\nThe value is added to the maximum data value and subtracted from the minimum data. This extends the scale range as if the data values were that much greater.")]),t._v(" "),a("chart-editor",{attrs:{code:"// <block:setup:1>\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: ['Positive', 'Negative'],\n  datasets: [{\n    data: [100, -50],\n    backgroundColor: 'rgb(255, 99, 132)'\n  }],\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'bar',\n  data,\n  options: {\n    scales: {\n      y: {\n        type: 'linear',\n        grace: '5%'\n      }\n    },\n    plugins: {\n      legend: false\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),a("h2",{attrs:{id:"internal-data-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internal-data-format"}},[t._v("#")]),t._v(" Internal data format")]),t._v(" "),a("p",[t._v("Internally, the linear scale uses numeric data")])],1)}),[],!1,null,null,null);e.default=s.exports}}]);