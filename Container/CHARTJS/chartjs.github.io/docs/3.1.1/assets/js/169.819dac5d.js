(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{496:function(a,t,s){"use strict";s.r(t);var n=s(7),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"performance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[a._v("#")]),a._v(" Performance")]),a._v(" "),s("p",[a._v("Chart.js charts are rendered on "),s("code",[a._v("canvas")]),a._v(" elements, which makes rendering quite fast. For large datasets or performance sensitive applications, you may wish to consider the tips below.")]),a._v(" "),s("h2",{attrs:{id:"data-structure-and-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-structure-and-format"}},[a._v("#")]),a._v(" Data structure and format")]),a._v(" "),s("h3",{attrs:{id:"parsing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsing"}},[a._v("#")]),a._v(" Parsing")]),a._v(" "),s("p",[a._v("Provide prepared data in the internal format accepted by the dataset and scales, and set "),s("code",[a._v("parsing: false")]),a._v(". See "),s("RouterLink",{attrs:{to:"/general/data-structures.html"}},[a._v("Data structures")]),a._v(" for more information.")],1),a._v(" "),s("h3",{attrs:{id:"data-normalization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-normalization"}},[a._v("#")]),a._v(" Data normalization")]),a._v(" "),s("p",[a._v("Chart.js is fastest if you provide data with indices that are unique, sorted, and consistent across datasets and provide the "),s("code",[a._v("normalized: true")]),a._v(" option to let Chart.js know that you have done so. Even without this option, it can sometimes still be faster to provide sorted data.")]),a._v(" "),s("h3",{attrs:{id:"decimation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decimation"}},[a._v("#")]),a._v(" Decimation")]),a._v(" "),s("p",[a._v("Decimating your data will achieve the best results. When there is a lot of data to display on the graph, it doesn't make sense to show tens of thousands of data points on a graph that is only a few hundred pixels wide.")]),a._v(" "),s("p",[a._v("The "),s("RouterLink",{attrs:{to:"/configuration/decimation.html"}},[a._v("decimation plugin")]),a._v(" can be used with line charts to decimate data before the chart is rendered. This will provide the best performance since it will reduce the memory needed to render the chart.")],1),a._v(" "),s("p",[a._v("Line charts are able to do "),s("a",{attrs:{href:"#automatic-data-decimation-during-draw"}},[a._v("automatic data decimation during draw")]),a._v(", when certain conditions are met. You should still consider decimating data yourself before passing it in for maximum performance since the automatic decimation occurs late in the chart life cycle.")]),a._v(" "),s("h2",{attrs:{id:"tick-calculation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tick-calculation"}},[a._v("#")]),a._v(" Tick Calculation")]),a._v(" "),s("h3",{attrs:{id:"rotation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rotation"}},[a._v("#")]),a._v(" Rotation")]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/axes/cartesian/#tick-configuration"}},[a._v("Specify a rotation value")]),a._v(" by setting "),s("code",[a._v("minRotation")]),a._v(" and "),s("code",[a._v("maxRotation")]),a._v(" to the same value, which avoids the chart from having to automatically determine a value to use.")],1),a._v(" "),s("h3",{attrs:{id:"sampling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sampling"}},[a._v("#")]),a._v(" Sampling")]),a._v(" "),s("p",[a._v("Set the "),s("RouterLink",{attrs:{to:"/axes/cartesian/#tick-configuration"}},[s("code",[a._v("ticks.sampleSize")])]),a._v(" option. This will determine how large your labels are by looking at only a subset of them in order to render axes more quickly. This works best if there is not a large variance in the size of your labels.")],1),a._v(" "),s("h2",{attrs:{id:"disable-animations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-animations"}},[a._v("#")]),a._v(" Disable Animations")]),a._v(" "),s("p",[a._v("If your charts have long render times, it is a good idea to disable animations. Doing so will mean that the chart needs to only be rendered once during an update instead of multiple times. This will have the effect of reducing CPU usage and improving general page performance.\nLine charts use Path2D caching when animations are disabled and Path2D is available.")]),a._v(" "),s("p",[a._v("To disable animations")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'line'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    options"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        animation"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"specify-min-and-max-for-scales"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specify-min-and-max-for-scales"}},[a._v("#")]),a._v(" Specify "),s("code",[a._v("min")]),a._v(" and "),s("code",[a._v("max")]),a._v(" for scales")]),a._v(" "),s("p",[a._v("If you specify the "),s("code",[a._v("min")]),a._v(" and "),s("code",[a._v("max")]),a._v(", the scale does not have to compute the range from the data.")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'line'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    options"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        scales"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            x"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                type"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'time'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                min"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'2019-01-01'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                max"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'2019-12-31'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            y"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                type"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'linear'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                min"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n                max"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"parallel-rendering-with-web-workers-chromium-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parallel-rendering-with-web-workers-chromium-only"}},[a._v("#")]),a._v(" Parallel rendering with web workers (Chromium only)")]),a._v(" "),s("p",[a._v("Chromium (Chrome: version 69, Edge: 79, Opera: 56) added the ability to "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen",target:"_blank",rel:"noopener noreferrer"}},[a._v("transfer rendering control of a canvas"),s("OutboundLink")],1),a._v(" to a web worker. Web workers can use the "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas",target:"_blank",rel:"noopener noreferrer"}},[a._v("OffscreenCanvas API"),s("OutboundLink")],1),a._v(" to render from a web worker onto canvases in the DOM. Chart.js is a canvas-based library and supports rendering in a web worker - just pass an OffscreenCanvas into the Chart constructor instead of a Canvas element. Note that as of today, this API is only supported in Chromium based browsers.")]),a._v(" "),s("p",[a._v("By moving all Chart.js calculations onto a separate thread, the main thread can be freed up for other uses. Some tips and tricks when using Chart.js in a web worker:")]),a._v(" "),s("ul",[s("li",[a._v("Transferring data between threads can be expensive, so ensure that your config and data objects are as small as possible. Try generating them on the worker side if you can (workers can make HTTP requests!) or passing them to your worker as ArrayBuffers, which can be transferred quickly from one thread to another.")]),a._v(" "),s("li",[a._v("You can't transfer functions between threads, so if your config object includes functions you'll have to strip them out before transferring and then add them back later.")]),a._v(" "),s("li",[a._v("You can't access the DOM from worker threads, so Chart.js plugins that use the DOM (including any mouse interactions) will likely not work.")]),a._v(" "),s("li",[a._v("Ensure that you have a fallback if you support browsers other than the most modern Chromium browsers.")]),a._v(" "),s("li",[a._v("Resizing the chart must be done manually. See an example in the worker code below.")])]),a._v(" "),s("p",[a._v("Example main thread code:")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" canvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HTMLCanvasElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" offscreenCanvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("transferControlToOffscreen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" worker "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Worker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'worker.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nworker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("postMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("canvas"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" offscreenCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("offscreenCanvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Example worker code, in "),s("code",[a._v("worker.js")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("onmessage")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" chart "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Resizing the chart must be done manually, since OffscreenCanvas does not include event listeners.")]),a._v("\n    canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("resize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"line-charts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#line-charts"}},[a._v("#")]),a._v(" Line Charts")]),a._v(" "),s("h3",{attrs:{id:"leave-bezier-curves-disabled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leave-bezier-curves-disabled"}},[a._v("#")]),a._v(" Leave Bézier curves disabled")]),a._v(" "),s("p",[a._v("If you are drawing lines on your chart, disabling Bézier curves will improve render times since drawing a straight line is more performant than a Bézier curve. Bézier curves are disabled by default.")]),a._v(" "),s("h3",{attrs:{id:"automatic-data-decimation-during-draw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automatic-data-decimation-during-draw"}},[a._v("#")]),a._v(" Automatic data decimation during draw")]),a._v(" "),s("p",[a._v("Line element will automatically decimate data, when "),s("code",[a._v("tension")]),a._v(", "),s("code",[a._v("stepped")]),a._v(", and "),s("code",[a._v("borderDash")]),a._v(" are left set to their default values ("),s("code",[a._v("false")]),a._v(", "),s("code",[a._v("0")]),a._v(", and "),s("code",[a._v("[]")]),a._v(" respectively). This improves rendering speed by skipping drawing of invisible line segments.")]),a._v(" "),s("h3",{attrs:{id:"enable-spangaps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-spangaps"}},[a._v("#")]),a._v(" Enable spanGaps")]),a._v(" "),s("p",[a._v("If you have a lot of data points, it can be more performant to enable "),s("code",[a._v("spanGaps")]),a._v(". This disables segmentation of the line, which can be an unneeded step.")]),a._v(" "),s("p",[a._v("To enable "),s("code",[a._v("spanGaps")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'line'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        datasets"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            spanGaps"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// enable for a single dataset")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    options"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        spanGaps"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// enable for all datasets")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"disable-line-drawing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-line-drawing"}},[a._v("#")]),a._v(" Disable Line Drawing")]),a._v(" "),s("p",[a._v("If you have a lot of data points, it can be more performant to disable rendering of the line for a dataset and only draw points. Doing this means that there is less to draw on the canvas which will improve render performance.")]),a._v(" "),s("p",[a._v("To disable lines:")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'line'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        datasets"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            showLine"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// disable for a single dataset")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    options"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        showLine"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// disable for all datasets")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"disable-point-drawing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-point-drawing"}},[a._v("#")]),a._v(" Disable Point Drawing")]),a._v(" "),s("p",[a._v("If you have a lot of data points, it can be more performant to disable rendering of the points for a dataset and only draw line. Doing this means that there is less to draw on the canvas which will improve render performance.")]),a._v(" "),s("p",[a._v("To disable point drawing:")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'line'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        datasets"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            pointRadius"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// disable for a single dataset")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    options"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        datasets"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            line"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                pointRadius"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// disable for all `'line'` datasets")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        elements"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            point"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                radius"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// default to disabled in all datasets")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"when-transpiling-with-babel-consider-using-loose-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-transpiling-with-babel-consider-using-loose-mode"}},[a._v("#")]),a._v(" When transpiling with Babel, consider using "),s("code",[a._v("loose")]),a._v(" mode")]),a._v(" "),s("p",[a._v("Babel 7.9 changed the way classes are constructed. It is slow, unless used with "),s("code",[a._v("loose")]),a._v(" mode.\n"),s("a",{attrs:{href:"https://github.com/babel/babel/issues/11356",target:"_blank",rel:"noopener noreferrer"}},[a._v("More information"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);