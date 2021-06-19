Elements
========

While chart types provide settings to configure the styling of each dataset, you sometimes want to style **all datasets the same way**. A common example would be to stroke all of the bars in a bar chart with the same colour but change the fill per dataset. Options can be configured for four different types of elements: **[arc](#arc-configuration)**, **[lines](#line-configuration)**, **[points](#point-configuration)**, and **[bars](#bar-configuration)**. When set, these options apply to all objects of that type unless specifically overridden by the configuration attached to a dataset.

Global Configuration
--------------------

The element options can be specified per chart or globally. The global options for elements are defined in `Chart.defaults.elements`. For example, to set the border width of all bar charts globally you would do:

    Chart.defaults.elements.bar.borderWidth = 2;

Point Configuration
-------------------

Point elements are used to represent the points in a line, radar or bubble chart.

Namespace: `options.elements.point`, global point options: `Chart.defaults.elements.point`.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>radius</code></td><td><code>number</code></td><td><code>3</code></td><td>Point radius.</td></tr><tr class="even"><td><a href="#point-styles"><code>pointStyle</code></a></td><td><code>string</code>|<code>Image</code></td><td><code>'circle'</code></td><td>Point style.</td></tr><tr class="odd"><td><code>rotation</code></td><td><code>number</code></td><td><code>0</code></td><td>Point rotation (in degrees).</td></tr><tr class="even"><td><code>backgroundColor</code></td><td><a href="../general/colors.md"><code>Color</code></a></td><td><code>Chart.defaults.backgroundColor</code></td><td>Point fill color.</td></tr><tr class="odd"><td><code>borderWidth</code></td><td><code>number</code></td><td><code>1</code></td><td>Point stroke width.</td></tr><tr class="even"><td><code>borderColor</code></td><td><a href="../general/colors.md"><code>Color</code></a></td><td><code>'Chart.defaults.borderColor</code></td><td>Point stroke color.</td></tr><tr class="odd"><td><code>hitRadius</code></td><td><code>number</code></td><td><code>1</code></td><td>Extra radius added to point radius for hit detection.</td></tr><tr class="even"><td><code>hoverRadius</code></td><td><code>number</code></td><td><code>4</code></td><td>Point radius when hovered.</td></tr><tr class="odd"><td><code>hoverBorderWidth</code></td><td><code>number</code></td><td><code>1</code></td><td>Stroke width when hovered.</td></tr></tbody></table>

### Point Styles

The following values are supported:

-   `'circle'`
-   `'cross'`
-   `'crossRot'`
-   `'dash'`
-   `'line'`
-   `'rect'`
-   `'rectRounded'`
-   `'rectRot'`
-   `'star'`
-   `'triangle'`

If the value is an image, that image is drawn on the canvas using [drawImage](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawImage).

Line Configuration
------------------

Line elements are used to represent the line in a line chart.

Namespace: `options.elements.line`, global line options: `Chart.defaults.elements.line`.

<table style="width:98%;"><colgroup><col style="width: 11%" /><col style="width: 14%" /><col style="width: 15%" /><col style="width: 57%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>tension</code></td><td><code>number</code></td><td><code>0</code></td><td>Bézier curve tension (<code>0</code> for no Bézier curves).</td></tr><tr class="even"><td><code>backgroundColor</code></td><td><a href="/general/colors.md"><code>Color</code></a></td><td><code>Chart.defaults.backgroundColor</code></td><td>Line fill color.</td></tr><tr class="odd"><td><code>borderWidth</code></td><td><code>number</code></td><td><code>3</code></td><td>Line stroke width.</td></tr><tr class="even"><td><code>borderColor</code></td><td><a href="/general/colors.md"><code>Color</code></a></td><td><code>Chart.defaults.borderColor</code></td><td>Line stroke color.</td></tr><tr class="odd"><td><code>borderCapStyle</code></td><td><code>string</code></td><td><code>'butt'</code></td><td>Line cap style. See <a href="https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap">MDN</a>.</td></tr><tr class="even"><td><code>borderDash</code></td><td><code>number[]</code></td><td><code>[]</code></td><td>Line dash. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash">MDN</a>.</td></tr><tr class="odd"><td><code>borderDashOffset</code></td><td><code>number</code></td><td><code>0.0</code></td><td>Line dash offset. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset">MDN</a>.</td></tr><tr class="even"><td><code>borderJoinStyle</code></td><td><code>string</code></td><td><code>'miter'</code></td><td>Line join style. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin">MDN</a>.</td></tr><tr class="odd"><td><code>capBezierPoints</code></td><td><code>boolean</code></td><td><code>true</code></td><td><code>true</code> to keep Bézier control inside the chart, <code>false</code> for no restriction.</td></tr><tr class="even"><td><code>cubicInterpolationMode</code></td><td><code>string</code></td><td><code>'default'</code></td><td>Interpolation mode to apply. <a href="/charts/line.md/#cubicinterpolationmode">See more…</a></td></tr><tr class="odd"><td><code>fill</code></td><td><code>boolean</code>|<code>string</code></td><td><code>false</code></td><td>How to fill the area under the line. See <a href="/charts/area.md#filling-modes">area charts</a>.</td></tr><tr class="even"><td><code>stepped</code></td><td><code>boolean</code></td><td><code>false</code></td><td><code>true</code> to show the line as a stepped line (<code>tension</code> will be ignored).</td></tr></tbody></table>

Bar Configuration
-----------------

Bar elements are used to represent the bars in a bar chart.

Namespace: `options.elements.bar`, global bar options: `Chart.defaults.elements.bar`.

<table style="width:99%;"><colgroup><col style="width: 16%" /><col style="width: 16%" /><col style="width: 17%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backgroundColor</code></td><td><a href="/general/colors.md"><code>Color</code></a></td><td><code>Chart.defaults.backgroundColor</code></td><td>Bar fill color.</td></tr><tr class="even"><td><code>borderWidth</code></td><td><code>number</code></td><td><code>0</code></td><td>Bar stroke width.</td></tr><tr class="odd"><td><code>borderColor</code></td><td><a href="/general/colors.md"><code>Color</code></a></td><td><code>Chart.defaults.borderColor</code></td><td>Bar stroke color.</td></tr><tr class="even"><td><code>borderSkipped</code></td><td><code>string</code></td><td><code>'start'</code></td><td>Skipped (excluded) border: <code>'start'</code>, <code>'end'</code>, <code>'bottom'</code>, <code>'left'</code>, <code>'top'</code> or <code>'right'</code>.</td></tr><tr class="odd"><td><code>borderRadius</code></td><td><code>number</code>|<code>object</code></td><td><code>0</code></td><td>The bar border radius (in pixels).</td></tr><tr class="even"><td><a href="#point-styles"><code>pointStyle</code></a></td><td><code>string</code>|<code>Image</code></td><td><code>'circle'</code></td><td>Style of the point for legend.</td></tr></tbody></table>

Arc Configuration
-----------------

Arcs are used in the polar area, doughnut and pie charts.

Namespace: `options.elements.arc`, global arc options: `Chart.defaults.elements.arc`.

<table style="width:98%;"><colgroup><col style="width: 22%" /><col style="width: 27%" /><col style="width: 30%" /><col style="width: 19%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>angle</code> - for polar only</td><td><code>number</code></td><td><code>circumference / (arc count)</code></td><td>Arc angle to cover.</td></tr><tr class="even"><td><code>backgroundColor</code></td><td><a href="/general/colors.md"><code>Color</code></a></td><td><code>Chart.defaults.backgroundColor</code></td><td>Arc fill color.</td></tr><tr class="odd"><td><code>borderAlign</code></td><td><code>string</code></td><td><code>'center'</code></td><td>Arc stroke alignment.</td></tr><tr class="even"><td><code>borderColor</code></td><td><a href="/general/colors.md"><code>Color</code></a></td><td><code>'#fff'</code></td><td>Arc stroke color.</td></tr><tr class="odd"><td><code>borderWidth</code></td><td><code>number</code></td><td><code>2</code></td><td>Arc stroke width.</td></tr></tbody></table>
