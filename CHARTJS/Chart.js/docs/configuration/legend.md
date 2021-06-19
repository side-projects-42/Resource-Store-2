Legend
======

The chart legend displays data about the datasets that are appearing on the chart.

Configuration options
---------------------

Namespace: `options.plugins.legend`, the global options for the chart legend is defined in `Chart.defaults.plugins.legend`.

<table style="width:97%;"><colgroup><col style="width: 7%" /><col style="width: 5%" /><col style="width: 7%" /><col style="width: 78%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>display</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Is the legend shown?</td></tr><tr class="even"><td><code>position</code></td><td><code>string</code></td><td><code>'top'</code></td><td>Position of the legend. <a href="#position">more…</a></td></tr><tr class="odd"><td><code>align</code></td><td><code>string</code></td><td><code>'center'</code></td><td>Alignment of the legend. <a href="#align">more…</a></td></tr><tr class="even"><td><code>maxHeight</code></td><td><code>number</code></td><td></td><td>Maximum height of the legend, in pixels</td></tr><tr class="odd"><td><code>maxWidth</code></td><td><code>number</code></td><td></td><td>Maximum width of the legend, in pixels</td></tr><tr class="even"><td><code>fullSize</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Marks that this box should take the full width/height of the canvas (moving other boxes). This is unlikely to need to be changed in day-to-day use.</td></tr><tr class="odd"><td><code>onClick</code></td><td><code>function</code></td><td></td><td>A callback that is called when a click event is registered on a label item. Arguments: <code>[event, legendItem, legend]</code>.</td></tr><tr class="even"><td><code>onHover</code></td><td><code>function</code></td><td></td><td>A callback that is called when a ‘mousemove’ event is registered on top of a label item. Arguments: <code>[event, legendItem, legend]</code>.</td></tr><tr class="odd"><td><code>onLeave</code></td><td><code>function</code></td><td></td><td>A callback that is called when a ‘mousemove’ event is registered outside of a previously hovered label item. Arguments: <code>[event, legendItem, legend]</code>.</td></tr><tr class="even"><td><code>reverse</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Legend will show datasets in reverse order.</td></tr><tr class="odd"><td><code>labels</code></td><td><code>object</code></td><td></td><td>See the <a href="#legend-label-configuration">Legend Label Configuration</a> section below.</td></tr><tr class="even"><td><code>rtl</code></td><td><code>boolean</code></td><td></td><td><code>true</code> for rendering the legends from right to left.</td></tr><tr class="odd"><td><code>textDirection</code></td><td><code>string</code></td><td>canvas’ default</td><td>This will force the text direction <code>'rtl'</code> or <code>'ltr'</code> on the canvas for rendering the legend, regardless of the css specified on the canvas</td></tr><tr class="even"><td><code>title</code></td><td><code>object</code></td><td></td><td>See the <a href="#legend-title-configuration">Legend Title Configuration</a> section below.</td></tr></tbody></table>

Position
--------

Position of the legend. Options are:

-   `'top'`
-   `'left'`
-   `'bottom'`
-   `'right'`
-   `'chartArea'`

When using the `'chartArea'` option the legend position is at the moment not configurable, it will always be on the left side of the chart in the middle.

Align
-----

Alignment of the legend. Options are:

-   `'start'`
-   `'center'`
-   `'end'`

Defaults to `'center'` for unrecognized values.

Legend Label Configuration
--------------------------

Namespace: `options.plugins.legend.labels`

<table style="width:98%;"><colgroup><col style="width: 14%" /><col style="width: 11%" /><col style="width: 8%" /><col style="width: 65%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>boxWidth</code></td><td><code>number</code></td><td><code>40</code></td><td>Width of coloured box.</td></tr><tr class="even"><td><code>boxHeight</code></td><td><code>number</code></td><td><code>font.size</code></td><td>Height of the coloured box.</td></tr><tr class="odd"><td><code>color</code></td><td><a href="../general/colors.md"><code>Color</code></a></td><td><code>Chart.defaults.color</code></td><td>Color of label and the strikethrough.</td></tr><tr class="even"><td><code>font</code></td><td><code>Font</code></td><td><code>Chart.defaults.font</code></td><td>See <a href="../general/fonts.md">Fonts</a></td></tr><tr class="odd"><td><code>padding</code></td><td><code>number</code></td><td><code>10</code></td><td>Padding between rows of colored boxes.</td></tr><tr class="even"><td><code>generateLabels</code></td><td><code>function</code></td><td></td><td>Generates legend items for each thing in the legend. Default implementation returns the text + styling for the color box. See <a href="#legend-item-interface">Legend Item</a> for details.</td></tr><tr class="odd"><td><code>filter</code></td><td><code>function</code></td><td><code>null</code></td><td>Filters legend items out of the legend. Receives 2 parameters, a <a href="#legend-item-interface">Legend Item</a> and the chart data.</td></tr><tr class="even"><td><code>sort</code></td><td><code>function</code></td><td><code>null</code></td><td>Sorts legend items. Receives 3 parameters, two <a href="#legend-item-interface">Legend Items</a> and the chart data.</td></tr><tr class="odd"><td><a href="elements.md#point-styles"><code>pointStyle</code></a></td><td><code>string</code>|<code>Image</code></td><td><code>'circle'</code></td><td>If specified, this style of point is used for the legend. Only used if <code>usePointStyle</code> is true.</td></tr><tr class="even"><td><code>textAlign</code></td><td><code>string</code></td><td><code>'center'</code></td><td>Horizontal alignment of the label text. Options are: <code>'left'</code>, <code>'right'</code> or <code>'center'</code>.</td></tr><tr class="odd"><td><code>usePointStyle</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Label style will match corresponding point style (size is based on the minimum value between boxWidth and font.size).</td></tr></tbody></table>

Legend Title Configuration
--------------------------

Namespace: `options.plugins.legend.title`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>color</code></td><td><a href="../general/colors.md"><code>Color</code></a></td><td><code>Chart.defaults.color</code></td><td>Color of text.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Is the legend title displayed.</td></tr><tr class="odd"><td><code>font</code></td><td><code>Font</code></td><td><code>Chart.defaults.font</code></td><td>See <a href="../general/fonts.md">Fonts</a></td></tr><tr class="even"><td><code>padding</code></td><td><a href="../general/padding.md"><code>Padding</code></a></td><td><code>0</code></td><td>Padding around the title.</td></tr><tr class="odd"><td><code>text</code></td><td><code>string</code></td><td></td><td>The string title.</td></tr></tbody></table>

Legend Item Interface
---------------------

Items passed to the legend `onClick` function are the ones returned from `labels.generateLabels`. These items must implement the following interface.

    {
        // Label that will be displayed
        text: string,

        // Border radius of the legend item.
        // Introduced in 3.1.0
        borderRadius?: number | BorderRadius,

        // Index of the associated dataset
        datasetIndex: number,

        // Fill style of the legend box
        fillStyle: Color,

        // Text color
        fontColor: Color,

        // If true, this item represents a hidden dataset. Label will be rendered with a strike-through effect
        hidden: boolean,

        // For box border. See https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap
        lineCap: string,

        // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
        lineDash: number[],

        // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
        lineDashOffset: number,

        // For box border. See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
        lineJoin: string,

        // Width of box border
        lineWidth: number,

        // Stroke style of the legend box
        strokeStyle: Color,

        // Point style of the legend box (only used if usePointStyle is true)
        pointStyle: string | Image,

        // Rotation of the point in degrees (only used if usePointStyle is true)
        rotation: number
    }

Example
-------

The following example will create a chart with the legend enabled and turn all of the text red in color.

    var chart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              color: "rgb(255, 99, 132)",
            },
          },
        },
      },
    });

Custom On Click Actions
-----------------------

It can be common to want to trigger different behaviour when clicking an item in the legend. This can be easily achieved using a callback in the config object.

The default legend click handler is:

    function(e, legendItem, legend) {
        const index = legendItem.datasetIndex;
        const ci = legend.chart;
        if (ci.isDatasetVisible(index)) {
            ci.hide(index);
            legendItem.hidden = true;
        } else {
            ci.show(index);
            legendItem.hidden = false;
        }
    }

Lets say we wanted instead to link the display of the first two datasets. We could change the click handler accordingly.

    var defaultLegendClickHandler = Chart.defaults.plugins.legend.onClick;
    var pieDoughnutLegendClickHandler =
      Chart.controllers.doughnut.overrides.plugins.legend.onClick;
    var newLegendClickHandler = function (e, legendItem, legend) {
      var index = legendItem.datasetIndex;
      var type = legend.chart.config.type;

      if (index > 1) {
        // Do the original logic
        if (type === "pie" || type === "doughnut") {
          pieDoughnutLegendClickHandler(e, legendItem, legend);
        } else {
          defaultLegendClickHandler(e, legendItem, legend);
        }
      } else {
        let ci = legend.chart;
        [ci.getDatasetMeta(0), ci.getDatasetMeta(1)].forEach(function (meta) {
          meta.hidden =
            meta.hidden === null ? !ci.data.datasets[index].hidden : null;
        });
        ci.update();
      }
    };

    var chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        plugins: {
          legend: {
            onClick: newLegendClickHandler,
          },
        },
      },
    });

Now when you click the legend in this chart, the visibility of the first two datasets will be linked together.
