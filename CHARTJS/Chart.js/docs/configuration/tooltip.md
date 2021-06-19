Tooltip
=======

Tooltip Configuration
---------------------

Namespace: `options.plugins.tooltip`, the global options for the chart tooltips is defined in `Chart.defaults.plugins.tooltip`.

<table style="width:99%;"><colgroup><col style="width: 8%" /><col style="width: 13%" /><col style="width: 9%" /><col style="width: 69%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>enabled</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Are on-canvas tooltips enabled?</td></tr><tr class="even"><td><code>external</code></td><td><code>function</code></td><td><code>null</code></td><td>See <a href="#external-custom-tooltips">external tooltip</a> section.</td></tr><tr class="odd"><td><code>mode</code></td><td><code>string</code></td><td><code>interaction.mode</code></td><td>Sets which elements appear in the tooltip. <a href="interactions.md#modes">more…</a>.</td></tr><tr class="even"><td><code>intersect</code></td><td><code>boolean</code></td><td><code>interaction.intersect</code></td><td>If true, the tooltip mode applies only when the mouse position intersects with an element. If false, the mode will be applied at all times.</td></tr><tr class="odd"><td><code>position</code></td><td><code>string</code></td><td><code>'average'</code></td><td>The mode for positioning the tooltip. <a href="#position-modes">more…</a></td></tr><tr class="even"><td><code>callbacks</code></td><td><code>object</code></td><td></td><td>See the <a href="#tooltip-callbacks">callbacks section</a>.</td></tr><tr class="odd"><td><code>itemSort</code></td><td><code>function</code></td><td></td><td>Sort tooltip items. <a href="#sort-callback">more…</a></td></tr><tr class="even"><td><code>filter</code></td><td><code>function</code></td><td></td><td>Filter tooltip items. <a href="#filter-callback">more…</a></td></tr><tr class="odd"><td><code>backgroundColor</code></td><td><a href="../general/colors.md"><code>Color</code></a></td><td><code>'rgba(0, 0, 0, 0.8)'</code></td><td>Background color of the tooltip.</td></tr><tr class="even"><td><code>titleColor</code></td><td><a href="../general/colors.md"><code>Color</code></a></td><td><code>'#fff'</code></td><td>Color of title text.</td></tr><tr class="odd"><td><code>titleFont</code></td><td><code>Font</code></td><td><code>{weight: 'bold'}</code></td><td>See <a href="../general/fonts.md">Fonts</a>.</td></tr><tr class="even"><td><code>titleAlign</code></td><td><code>string</code></td><td><code>'left'</code></td><td>Horizontal alignment of the title text lines. <a href="#text-alignment">more…</a></td></tr><tr class="odd"><td><code>titleSpacing</code></td><td><code>number</code></td><td><code>2</code></td><td>Spacing to add to top and bottom of each title line.</td></tr><tr class="even"><td><code>titleMarginBottom</code></td><td><code>number</code></td><td><code>6</code></td><td>Margin to add on bottom of title section.</td></tr><tr class="odd"><td><code>bodyColor</code></td><td><a href="../general/colors.md"><code>Color</code></a></td><td><code>'#fff'</code></td><td>Color of body text.</td></tr><tr class="even"><td><code>bodyFont</code></td><td><code>Font</code></td><td><code>{}</code></td><td>See <a href="../general/fonts.md">Fonts</a>.</td></tr><tr class="odd"><td><code>bodyAlign</code></td><td><code>string</code></td><td><code>'left'</code></td><td>Horizontal alignment of the body text lines. <a href="#text-alignment">more…</a></td></tr><tr class="even"><td><code>bodySpacing</code></td><td><code>number</code></td><td><code>2</code></td><td>Spacing to add to top and bottom of each tooltip item.</td></tr><tr class="odd"><td><code>footerColor</code></td><td><a href="../general/colors.md"><code>Color</code></a></td><td><code>'#fff'</code></td><td>Color of footer text.</td></tr><tr class="even"><td><code>footerFont</code></td><td><code>Font</code></td><td><code>{weight: 'bold'}</code></td><td>See <a href="../general/fonts.md">Fonts</a>.</td></tr><tr class="odd"><td><code>footerAlign</code></td><td><code>string</code></td><td><code>'left'</code></td><td>Horizontal alignment of the footer text lines. <a href="#text-alignment">more…</a></td></tr><tr class="even"><td><code>footerSpacing</code></td><td><code>number</code></td><td><code>2</code></td><td>Spacing to add to top and bottom of each footer line.</td></tr><tr class="odd"><td><code>footerMarginTop</code></td><td><code>number</code></td><td><code>6</code></td><td>Margin to add before drawing the footer.</td></tr><tr class="even"><td><code>padding</code></td><td><a href="../general/padding.md"><code>Padding</code></a></td><td><code>6</code></td><td>Padding inside the tooltip.</td></tr><tr class="odd"><td><code>caretPadding</code></td><td><code>number</code></td><td><code>2</code></td><td>Extra distance to move the end of the tooltip arrow away from the tooltip point.</td></tr><tr class="even"><td><code>caretSize</code></td><td><code>number</code></td><td><code>5</code></td><td>Size, in px, of the tooltip arrow.</td></tr><tr class="odd"><td><code>cornerRadius</code></td><td><code>number</code></td><td><code>6</code></td><td>Radius of tooltip corner curves.</td></tr><tr class="even"><td><code>multiKeyBackground</code></td><td><a href="../general/colors.md"><code>Color</code></a></td><td><code>'#fff'</code></td><td>Color to draw behind the colored boxes when multiple items are in the tooltip.</td></tr><tr class="odd"><td><code>displayColors</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, color boxes are shown in the tooltip.</td></tr><tr class="even"><td><code>boxWidth</code></td><td><code>number</code></td><td><code>bodyFont.size</code></td><td>Width of the color box if displayColors is true.</td></tr><tr class="odd"><td><code>boxHeight</code></td><td><code>number</code></td><td><code>bodyFont.size</code></td><td>Height of the color box if displayColors is true.</td></tr><tr class="even"><td><code>usePointStyle</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Use the corresponding point style (from dataset options) instead of color boxes, ex: star, triangle etc. (size is based on the minimum value between boxWidth and boxHeight).</td></tr><tr class="odd"><td><code>borderColor</code></td><td><a href="../general/colors.md"><code>Color</code></a></td><td><code>'rgba(0, 0, 0, 0)'</code></td><td>Color of the border.</td></tr><tr class="even"><td><code>borderWidth</code></td><td><code>number</code></td><td><code>0</code></td><td>Size of the border.</td></tr><tr class="odd"><td><code>rtl</code></td><td><code>boolean</code></td><td></td><td><code>true</code> for rendering the tooltip from right to left.</td></tr><tr class="even"><td><code>textDirection</code></td><td><code>string</code></td><td>canvas’ default</td><td>This will force the text direction <code>'rtl' or 'ltr</code> on the canvas for rendering the tooltips, regardless of the css specified on the canvas</td></tr><tr class="odd"><td><code>xAlign</code></td><td><code>string</code></td><td><code>undefined</code></td><td>Position of the tooltip caret in the X direction. <a href="#tooltip-alignment">more</a></td></tr><tr class="even"><td><code>yAlign</code></td><td><code>string</code></td><td><code>undefined</code></td><td>Position of the tooltip caret in the Y direction. <a href="#tooltip-alignment">more</a></td></tr></tbody></table>

### Position Modes

Possible modes are:

-   `'average'`
-   `'nearest'`

`'average'` mode will place the tooltip at the average position of the items displayed in the tooltip. `'nearest'` will place the tooltip at the position of the element closest to the event position.

New modes can be defined by adding functions to the `Chart.Tooltip.positioners` map.

Example:

    /**
     * Custom positioner
     * @function Tooltip.positioners.myCustomPositioner
     * @param elements {Chart.Element[]} the tooltip elements
     * @param eventPosition {Point} the position of the event in canvas coordinates
     * @returns {Point} the tooltip position
     */
    const tooltipPlugin = Chart.registry.getPlugin("tooltip");
    tooltipPlugin.positioners.myCustomPositioner = function (
      elements,
      eventPosition
    ) {
      /** @type {Tooltip} */
      var tooltip = this;

      /* ... */

      return {
        x: 0,
        y: 0,
      };
    };

### Tooltip Alignment

The `xAlign` and `yAlign` options define the position of the tooltip caret. If these parameters are unset, the optimal caret position is determined.

The following values for the `xAlign` setting are supported.

-   `'left'`
-   `'center'`
-   `'right'`

The following values for the `yAlign` setting are supported.

-   `'top'`
-   `'center'`
-   `'bottom'`

### Text Alignment

The `titleAlign`, `bodyAlign` and `footerAlign` options define the horizontal position of the text lines with respect to the tooltip box. The following values are supported.

-   `'left'` (default)
-   `'right'`
-   `'center'`

These options are only applied to text lines. Color boxes are always aligned to the left edge.

### Sort Callback

Allows sorting of [tooltip items](#tooltip-item-context). Must implement at minimum a function that can be passed to [Array.prototype.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). This function can also accept a third parameter that is the data object passed to the chart.

### Filter Callback

Allows filtering of [tooltip items](#tooltip-item-context). Must implement at minimum a function that can be passed to [Array.prototype.filter](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). This function can also accept a fourth parameter that is the data object passed to the chart.

Tooltip Callbacks
-----------------

Namespace: `options.plugins.tooltip.callbacks`, the tooltip has the following callbacks for providing text. For all functions, `this` will be the tooltip object created from the `Tooltip` constructor.

Namespace: `data.datasets[].tooltip.callbacks`, items marked with `Yes` in the column `Dataset override` can be overridden per dataset.

All functions are called with the same arguments: a [tooltip item context](#tooltip-item-context). All functions must return either a string or an array of strings. Arrays of strings are treated as multiple lines of text.

<table style="width:97%;"><colgroup><col style="width: 5%" /><col style="width: 7%" /><col style="width: 5%" /><col style="width: 80%" /></colgroup><thead><tr class="header"><th>Name</th><th>Arguments</th><th>Dataset override</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>beforeTitle</code></td><td><code>TooltipItem[], object</code></td><td></td><td>Returns the text to render before the title.</td></tr><tr class="even"><td><code>title</code></td><td><code>TooltipItem[], object</code></td><td></td><td>Returns text to render as the title of the tooltip.</td></tr><tr class="odd"><td><code>afterTitle</code></td><td><code>TooltipItem[], object</code></td><td></td><td>Returns text to render after the title.</td></tr><tr class="even"><td><code>beforeBody</code></td><td><code>TooltipItem[], object</code></td><td></td><td>Returns text to render before the body section.</td></tr><tr class="odd"><td><code>beforeLabel</code></td><td><code>TooltipItem, object</code></td><td>Yes</td><td>Returns text to render before an individual label. This will be called for each item in the tooltip.</td></tr><tr class="even"><td><code>label</code></td><td><code>TooltipItem, object</code></td><td>Yes</td><td>Returns text to render for an individual item in the tooltip. <a href="#label-callback">more…</a></td></tr><tr class="odd"><td><code>labelColor</code></td><td><code>TooltipItem, Chart</code></td><td>Yes</td><td>Returns the colors to render for the tooltip item. <a href="#label-color-callback">more…</a></td></tr><tr class="even"><td><code>labelTextColor</code></td><td><code>TooltipItem, Chart</code></td><td>Yes</td><td>Returns the colors for the text of the label for the tooltip item.</td></tr><tr class="odd"><td><code>labelPointStyle</code></td><td><code>TooltipItem, Chart</code></td><td>Yes</td><td>Returns the point style to use instead of color boxes if usePointStyle is true (object with values <code>pointStyle</code> and <code>rotation</code>). Default implementation uses the point style from the dataset points. <a href="#label-point-style-callback">more…</a></td></tr><tr class="even"><td><code>afterLabel</code></td><td><code>TooltipItem, object</code></td><td>Yes</td><td>Returns text to render after an individual label.</td></tr><tr class="odd"><td><code>afterBody</code></td><td><code>TooltipItem[], object</code></td><td></td><td>Returns text to render after the body section.</td></tr><tr class="even"><td><code>beforeFooter</code></td><td><code>TooltipItem[], object</code></td><td></td><td>Returns text to render before the footer section.</td></tr><tr class="odd"><td><code>footer</code></td><td><code>TooltipItem[], object</code></td><td></td><td>Returns text to render as the footer of the tooltip.</td></tr><tr class="even"><td><code>afterFooter</code></td><td><code>TooltipItem[], object</code></td><td></td><td>Text to render after the footer section.</td></tr></tbody></table>

### Label Callback

The `label` callback can change the text that displays for a given data point. A common example to show a unit. The example below puts a `'$'` before every row.

    var chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                var label = context.dataset.label || "";

                if (label) {
                  label += ": ";
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(context.parsed.y);
                }
                return label;
              },
            },
          },
        },
      },
    });

### Label Color Callback

For example, to return a red box with a blue dashed border that has a border radius for each item in the tooltip you could do:

    var chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              labelColor: function (context) {
                return {
                  borderColor: "rgb(0, 0, 255)",
                  backgroundColor: "rgb(255, 0, 0)",
                  borderWidth: 2,
                  borderDash: [2, 2],
                  borderRadius: 2,
                };
              },
              labelTextColor: function (context) {
                return "#543453";
              },
            },
          },
        },
      },
    });

### Label Point Style Callback

For example, to draw triangles instead of the regular color box for each item in the tooltip you could do:

    var chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        plugins: {
          tooltip: {
            usePointStyle: true,
            callbacks: {
              labelPointStyle: function (context) {
                return {
                  pointStyle: "triangle",
                  rotation: 0,
                };
              },
            },
          },
        },
      },
    });

### Tooltip Item Context

The tooltip items passed to the tooltip callbacks implement the following interface.

    {
        // The chart the tooltip is being shown on
        chart: Chart

        // Label for the tooltip
        label: string,

        // Parsed data values for the given `dataIndex` and `datasetIndex`
        parsed: object,

        // Raw data values for the given `dataIndex` and `datasetIndex`
        raw: object,

        // Formatted value for the tooltip
        formattedValue: string,

        // The dataset the item comes from
        dataset: object

        // Index of the dataset the item comes from
        datasetIndex: number,

        // Index of this data item in the dataset
        dataIndex: number,

        // The chart element (point, arc, bar, etc.) for this tooltip item
        element: Element,
    }

External (Custom) Tooltips
--------------------------

External tooltips allow you to hook into the tooltip rendering process so that you can render the tooltip in your own custom way. Generally this is used to create an HTML tooltip instead of an on-canvas tooltip. The `external` option takes a function which is passed a context parameter containing the `chart` and `tooltip`. You can enable external tooltips in the global or chart configuration like so:

    var myPieChart = new Chart(ctx, {
      type: "pie",
      data: data,
      options: {
        plugins: {
          tooltip: {
            // Disable the on-canvas tooltip
            enabled: false,

            external: function (context) {
              // Tooltip Element
              var tooltipEl = document.getElementById("chartjs-tooltip");

              // Create element on first render
              if (!tooltipEl) {
                tooltipEl = document.createElement("div");
                tooltipEl.id = "chartjs-tooltip";
                tooltipEl.innerHTML = "<table></table>";
                document.body.appendChild(tooltipEl);
              }

              // Hide if no tooltip
              var tooltipModel = context.tooltip;
              if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = 0;
                return;
              }

              // Set caret Position
              tooltipEl.classList.remove("above", "below", "no-transform");
              if (tooltipModel.yAlign) {
                tooltipEl.classList.add(tooltipModel.yAlign);
              } else {
                tooltipEl.classList.add("no-transform");
              }

              function getBody(bodyItem) {
                return bodyItem.lines;
              }

              // Set Text
              if (tooltipModel.body) {
                var titleLines = tooltipModel.title || [];
                var bodyLines = tooltipModel.body.map(getBody);

                var innerHtml = "<thead>";

                titleLines.forEach(function (title) {
                  innerHtml += "<tr><th>" + title + "</th></tr>";
                });
                innerHtml += "</thead><tbody>";

                bodyLines.forEach(function (body, i) {
                  var colors = tooltipModel.labelColors[i];
                  var style = "background:" + colors.backgroundColor;
                  style += "; border-color:" + colors.borderColor;
                  style += "; border-width: 2px";
                  var span = '<span style="' + style + '"></span>';
                  innerHtml += "<tr><td>" + span + body + "</td></tr>";
                });
                innerHtml += "</tbody>";

                var tableRoot = tooltipEl.querySelector("table");
                tableRoot.innerHTML = innerHtml;
              }

              var position = context.chart.canvas.getBoundingClientRect();
              var bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

              // Display, position, and set styles for font
              tooltipEl.style.opacity = 1;
              tooltipEl.style.position = "absolute";
              tooltipEl.style.left =
                position.left + window.pageXOffset + tooltipModel.caretX + "px";
              tooltipEl.style.top =
                position.top + window.pageYOffset + tooltipModel.caretY + "px";
              tooltipEl.style.font = bodyFont.string;
              tooltipEl.style.padding =
                tooltipModel.padding + "px " + tooltipModel.padding + "px";
              tooltipEl.style.pointerEvents = "none";
            },
          },
        },
      },
    });

See [samples](/samples/tooltip/html.md) for examples on how to get started with external tooltips.

Tooltip Model
-------------

The tooltip model contains parameters that can be used to render the tooltip.

    {
        // The items that we are rendering in the tooltip. See Tooltip Item Interface section
        dataPoints: TooltipItem[],

        // Positioning
        xAlign: string,
        yAlign: string,

        // X and Y properties are the top left of the tooltip
        x: number,
        y: number,
        width: number,
        height: number,
        // Where the tooltip points to
        caretX: number,
        caretY: number,

        // Body
        // The body lines that need to be rendered
        // Each object contains 3 parameters
        // before: string[] // lines of text before the line with the color square
        // lines: string[], // lines of text to render as the main item with color square
        // after: string[], // lines of text to render after the main lines
        body: object[],
        // lines of text that appear after the title but before the body
        beforeBody: string[],
        // line of text that appear after the body and before the footer
        afterBody: string[],

        // Title
        // lines of text that form the title
        title: string[],

        // Footer
        // lines of text that form the footer
        footer: string[],

        // colors to render for each item in body[]. This is the color of the squares in the tooltip
        labelColors: Color[],
        labelTextColors: Color[],

        // 0 opacity is a hidden tooltip
        opacity: number,

        // tooltip options
        options : Object
    }
