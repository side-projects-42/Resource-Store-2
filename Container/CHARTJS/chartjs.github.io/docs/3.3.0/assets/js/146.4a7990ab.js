(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{425:function(t,e,o){"use strict";o.r(e);var r=o(4),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"elements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#elements"}},[t._v("#")]),t._v(" Elements")]),t._v(" "),o("p",[t._v("While chart types provide settings to configure the styling of each dataset, you sometimes want to style "),o("strong",[t._v("all datasets the same way")]),t._v(". A common example would be to stroke all of the bars in a bar chart with the same colour but change the fill per dataset. Options can be configured for four different types of elements: "),o("strong",[o("a",{attrs:{href:"#arc-configuration"}},[t._v("arc")])]),t._v(", "),o("strong",[o("a",{attrs:{href:"#line-configuration"}},[t._v("lines")])]),t._v(", "),o("strong",[o("a",{attrs:{href:"#point-configuration"}},[t._v("points")])]),t._v(", and "),o("strong",[o("a",{attrs:{href:"#bar-configuration"}},[t._v("bars")])]),t._v(". When set, these options apply to all objects of that type unless specifically overridden by the configuration attached to a dataset.")]),t._v(" "),o("h2",{attrs:{id:"global-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#global-configuration"}},[t._v("#")]),t._v(" Global Configuration")]),t._v(" "),o("p",[t._v("The element options can be specified per chart or globally. The global options for elements are defined in "),o("code",[t._v("Chart.defaults.elements")]),t._v(". For example, to set the border width of all bar charts globally you would do:")]),t._v(" "),o("div",{staticClass:"language-javascript extra-class"},[o("pre",{pre:!0,attrs:{class:"language-javascript"}},[o("code",[t._v("Chart"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaults"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elements"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("borderWidth "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),o("h2",{attrs:{id:"point-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#point-configuration"}},[t._v("#")]),t._v(" Point Configuration")]),t._v(" "),o("p",[t._v("Point elements are used to represent the points in a line, radar or bubble chart.")]),t._v(" "),o("p",[t._v("Namespace: "),o("code",[t._v("options.elements.point")]),t._v(", global point options: "),o("code",[t._v("Chart.defaults.elements.point")]),t._v(".")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Type")]),t._v(" "),o("th",[t._v("Default")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("radius")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",[o("code",[t._v("3")])]),t._v(" "),o("td",[t._v("Point radius.")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#point-styles"}},[o("code",[t._v("pointStyle")])])]),t._v(" "),o("td",[o("code",[t._v("string")]),t._v("|"),o("code",[t._v("Image")])]),t._v(" "),o("td",[o("code",[t._v("'circle'")])]),t._v(" "),o("td",[t._v("Point style.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("rotation")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",[o("code",[t._v("0")])]),t._v(" "),o("td",[t._v("Point rotation (in degrees).")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("backgroundColor")])]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/general/colors.html"}},[o("code",[t._v("Color")])])],1),t._v(" "),o("td",[o("code",[t._v("Chart.defaults.backgroundColor")])]),t._v(" "),o("td",[t._v("Point fill color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderWidth")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",[o("code",[t._v("1")])]),t._v(" "),o("td",[t._v("Point stroke width.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderColor")])]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/general/colors.html"}},[o("code",[t._v("Color")])])],1),t._v(" "),o("td",[o("code",[t._v("'Chart.defaults.borderColor")])]),t._v(" "),o("td",[t._v("Point stroke color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("hitRadius")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",[o("code",[t._v("1")])]),t._v(" "),o("td",[t._v("Extra radius added to point radius for hit detection.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("hoverRadius")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",[o("code",[t._v("4")])]),t._v(" "),o("td",[t._v("Point radius when hovered.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("hoverBorderWidth")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",[o("code",[t._v("1")])]),t._v(" "),o("td",[t._v("Stroke width when hovered.")])])])]),t._v(" "),o("h3",{attrs:{id:"point-styles"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#point-styles"}},[t._v("#")]),t._v(" Point Styles")]),t._v(" "),o("p",[t._v("The following values are supported:")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("'circle'")])]),t._v(" "),o("li",[o("code",[t._v("'cross'")])]),t._v(" "),o("li",[o("code",[t._v("'crossRot'")])]),t._v(" "),o("li",[o("code",[t._v("'dash'")])]),t._v(" "),o("li",[o("code",[t._v("'line'")])]),t._v(" "),o("li",[o("code",[t._v("'rect'")])]),t._v(" "),o("li",[o("code",[t._v("'rectRounded'")])]),t._v(" "),o("li",[o("code",[t._v("'rectRot'")])]),t._v(" "),o("li",[o("code",[t._v("'star'")])]),t._v(" "),o("li",[o("code",[t._v("'triangle'")])])]),t._v(" "),o("p",[t._v("If the value is an image, that image is drawn on the canvas using "),o("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawImage",target:"_blank",rel:"noopener noreferrer"}},[t._v("drawImage"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"line-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#line-configuration"}},[t._v("#")]),t._v(" Line Configuration")]),t._v(" "),o("p",[t._v("Line elements are used to represent the line in a line chart.")]),t._v(" "),o("p",[t._v("Namespace: "),o("code",[t._v("options.elements.line")]),t._v(", global line options: "),o("code",[t._v("Chart.defaults.elements.line")]),t._v(".")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Type")]),t._v(" "),o("th",[t._v("Default")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("tension")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",[o("code",[t._v("0")])]),t._v(" "),o("td",[t._v("Bézier curve tension ("),o("code",[t._v("0")]),t._v(" for no Bézier curves).")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("backgroundColor")])]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/general/colors.html"}},[o("code",[t._v("Color")])])],1),t._v(" "),o("td",[o("code",[t._v("Chart.defaults.backgroundColor")])]),t._v(" "),o("td",[t._v("Line fill color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderWidth")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",[o("code",[t._v("3")])]),t._v(" "),o("td",[t._v("Line stroke width.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderColor")])]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/general/colors.html"}},[o("code",[t._v("Color")])])],1),t._v(" "),o("td",[o("code",[t._v("Chart.defaults.borderColor")])]),t._v(" "),o("td",[t._v("Line stroke color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderCapStyle")])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",[o("code",[t._v("'butt'")])]),t._v(" "),o("td",[t._v("Line cap style. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderDash")])]),t._v(" "),o("td",[o("code",[t._v("number[]")])]),t._v(" "),o("td",[o("code",[t._v("[]")])]),t._v(" "),o("td",[t._v("Line dash. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderDashOffset")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",[o("code",[t._v("0.0")])]),t._v(" "),o("td",[t._v("Line dash offset. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderJoinStyle")])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",[o("code",[t._v("'miter'")])]),t._v(" "),o("td",[t._v("Line join style. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("capBezierPoints")])]),t._v(" "),o("td",[o("code",[t._v("boolean")])]),t._v(" "),o("td",[o("code",[t._v("true")])]),t._v(" "),o("td",[o("code",[t._v("true")]),t._v(" to keep Bézier control inside the chart, "),o("code",[t._v("false")]),t._v(" for no restriction.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("cubicInterpolationMode")])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",[o("code",[t._v("'default'")])]),t._v(" "),o("td",[t._v("Interpolation mode to apply. "),o("RouterLink",{attrs:{to:"/charts/line.md/#cubicinterpolationmode"}},[t._v("See more...")])],1)]),t._v(" "),o("tr",[o("td",[o("code",[t._v("fill")])]),t._v(" "),o("td",[o("code",[t._v("boolean")]),t._v("|"),o("code",[t._v("string")])]),t._v(" "),o("td",[o("code",[t._v("false")])]),t._v(" "),o("td",[t._v("How to fill the area under the line. See "),o("RouterLink",{attrs:{to:"/charts/area.html#filling-modes"}},[t._v("area charts")]),t._v(".")],1)]),t._v(" "),o("tr",[o("td",[o("code",[t._v("stepped")])]),t._v(" "),o("td",[o("code",[t._v("boolean")])]),t._v(" "),o("td",[o("code",[t._v("false")])]),t._v(" "),o("td",[o("code",[t._v("true")]),t._v(" to show the line as a stepped line ("),o("code",[t._v("tension")]),t._v(" will be ignored).")])])])]),t._v(" "),o("h2",{attrs:{id:"bar-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bar-configuration"}},[t._v("#")]),t._v(" Bar Configuration")]),t._v(" "),o("p",[t._v("Bar elements are used to represent the bars in a bar chart.")]),t._v(" "),o("p",[t._v("Namespace: "),o("code",[t._v("options.elements.bar")]),t._v(", global bar options: "),o("code",[t._v("Chart.defaults.elements.bar")]),t._v(".")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Type")]),t._v(" "),o("th",[t._v("Default")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("backgroundColor")])]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/general/colors.html"}},[o("code",[t._v("Color")])])],1),t._v(" "),o("td",[o("code",[t._v("Chart.defaults.backgroundColor")])]),t._v(" "),o("td",[t._v("Bar fill color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderWidth")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",[o("code",[t._v("0")])]),t._v(" "),o("td",[t._v("Bar stroke width.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderColor")])]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/general/colors.html"}},[o("code",[t._v("Color")])])],1),t._v(" "),o("td",[o("code",[t._v("Chart.defaults.borderColor")])]),t._v(" "),o("td",[t._v("Bar stroke color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderSkipped")])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",[o("code",[t._v("'start'")])]),t._v(" "),o("td",[t._v("Skipped (excluded) border: "),o("code",[t._v("'start'")]),t._v(", "),o("code",[t._v("'end'")]),t._v(", "),o("code",[t._v("'bottom'")]),t._v(", "),o("code",[t._v("'left'")]),t._v(", "),o("code",[t._v("'top'")]),t._v(" or "),o("code",[t._v("'right'")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderRadius")])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v("|"),o("code",[t._v("object")])]),t._v(" "),o("td",[o("code",[t._v("0")])]),t._v(" "),o("td",[t._v("The bar border radius (in pixels).")])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#point-styles"}},[o("code",[t._v("pointStyle")])])]),t._v(" "),o("td",[o("code",[t._v("string")]),t._v("|"),o("code",[t._v("Image")])]),t._v(" "),o("td",[o("code",[t._v("'circle'")])]),t._v(" "),o("td",[t._v("Style of the point for legend.")])])])]),t._v(" "),o("h2",{attrs:{id:"arc-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arc-configuration"}},[t._v("#")]),t._v(" Arc Configuration")]),t._v(" "),o("p",[t._v("Arcs are used in the polar area, doughnut and pie charts.")]),t._v(" "),o("p",[t._v("Namespace: "),o("code",[t._v("options.elements.arc")]),t._v(", global arc options: "),o("code",[t._v("Chart.defaults.elements.arc")]),t._v(".")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Type")]),t._v(" "),o("th",[t._v("Default")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("angle")]),t._v(" - for polar only")]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",[o("code",[t._v("circumference / (arc count)")])]),t._v(" "),o("td",[t._v("Arc angle to cover.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("backgroundColor")])]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/general/colors.html"}},[o("code",[t._v("Color")])])],1),t._v(" "),o("td",[o("code",[t._v("Chart.defaults.backgroundColor")])]),t._v(" "),o("td",[t._v("Arc fill color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderAlign")])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",[o("code",[t._v("'center'")])]),t._v(" "),o("td",[t._v("Arc stroke alignment.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderColor")])]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/general/colors.html"}},[o("code",[t._v("Color")])])],1),t._v(" "),o("td",[o("code",[t._v("'#fff'")])]),t._v(" "),o("td",[t._v("Arc stroke color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderWidth")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",[o("code",[t._v("2")])]),t._v(" "),o("td",[t._v("Arc stroke width.")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);