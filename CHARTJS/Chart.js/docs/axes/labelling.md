Labeling Axes
=============

When creating a chart, you want to tell the viewer what data they are viewing. To do this, you need to label the axis.

Scale Title Configuration
-------------------------

Namespace: `options.scales[scaleId].title`, it defines options for the scale title. Note that this only applies to cartesian axes.

<table style="width:98%;"><colgroup><col style="width: 6%" /><col style="width: 22%" /><col style="width: 14%" /><col style="width: 56%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>display</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If true, display the axis title.</td></tr><tr class="even"><td><code>align</code></td><td><code>string</code></td><td><code>'center'</code></td><td>Alignment of the axis title. Possible options are <code>'start'</code>, <code>'center'</code> and <code>'end'</code></td></tr><tr class="odd"><td><code>text</code></td><td><code>string</code>|<code>string[]</code></td><td><code>''</code></td><td>The text for the title. (i.e. “# of People” or “Response Choices”).</td></tr><tr class="even"><td><code>color</code></td><td><a href="../general/colors.md"><code>Color</code></a></td><td><code>Chart.defaults.color</code></td><td>Color of label.</td></tr><tr class="odd"><td><code>font</code></td><td><code>Font</code></td><td><code>Chart.defaults.font</code></td><td>See <a href="../general/fonts.md">Fonts</a></td></tr><tr class="even"><td><code>padding</code></td><td><a href="../general/padding.md"><code>Padding</code></a></td><td><code>4</code></td><td>Padding to apply around scale labels. Only <code>top</code> and <code>bottom</code> are implemented.</td></tr></tbody></table>

Creating Custom Tick Formats
----------------------------

It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign (‘$’). To do this, you need to override the `ticks.callback` method in the axis configuration.

The method receiver 3 arguments:

-   `value` - the tick value in the **internal data format** of the associated scale.
-   `index` - the tick index in the ticks array.
-   `ticks` - the array containing all of the [tick objects](../api/interfaces/tick).

The call to the method is scoped to the scale. `this` inside the method is the scale object.

If the callback returns `null` or `undefined` the associated grid line will be hidden.

The [category axis](../axes/cartesian/category), which is the default x-axis for line and bar charts, uses the `index` as internal data format. For accessing the label, use `this.getLabelForValue(value)`. [API: getLabelForValue](../api/classes/scale.html#getlabelforvalue)

In the following example, every label of the Y-axis would be displayed with a dollar sign at the front.

    var chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return "$" + value;
              },
            },
          },
        },
      },
    });

Related samples:

-   [Tick configuration sample](../samples/scale-options/ticks)
