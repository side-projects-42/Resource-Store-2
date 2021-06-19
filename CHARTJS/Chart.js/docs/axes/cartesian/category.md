Category Axis
=============

If the global configuration is used, labels are drawn from one of the label arrays included in the chart data. If only `data.labels` is defined, this will be used. If `data.xLabels` is defined and the axis is horizontal, this will be used. Similarly, if `data.yLabels` is defined and the axis is vertical, this property will be used. Using both `xLabels` and `yLabels` together can create a chart that uses strings for both the X and Y axes.

Specifying any of the settings above defines the x-axis as `type: 'category'` if not defined otherwise. For more fine-grained control of category labels, it is also possible to add `labels` as part of the category axis definition. Doing so does not apply the global defaults.

Category Axis Definition
------------------------

Globally:

    let chart = new Chart(ctx, {
        type: ...
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: ...
        }
    });

As part of axis definition:

    let chart = new Chart(ctx, {
        type: ...
        data: ...
        options: {
            scales: {
                x: {
                    type: 'category',
                    labels: ['January', 'February', 'March', 'April', 'May', 'June']
                }
            }
        }
    });

Configuration Options
---------------------

### Category Axis specific options

Namespace: `options.scales[scaleId]`

<table style="width:99%;"><colgroup><col style="width: 5%" /><col style="width: 16%" /><col style="width: 78%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>min</code></td><td><code>string</code>|<code>number</code></td><td>The minimum item to display. <a href="#min-max-configuration">more…</a></td></tr><tr class="even"><td><code>max</code></td><td><code>string</code>|<code>number</code></td><td>The maximum item to display. <a href="#min-max-configuration">more…</a></td></tr><tr class="odd"><td><code>labels</code></td><td><code>string[]</code>|<code>string[][]</code></td><td>An array of labels to display. When an individual label is an array of strings, each item is rendered on a new line.</td></tr></tbody></table>

!!!include(axes/cartesian/\_common.md)!!!

!!!include(axes/\_common.md)!!!

Tick Configuration
------------------

!!!include(axes/cartesian/\_common\_ticks.md)!!!

!!!include(axes/\_common\_ticks.md)!!!

Min Max Configuration
---------------------

For both the `min` and `max` properties, the value must be `string` in the `labels` array or `numeric` value as an index of a label in that array. In the example below, the x axis would only display “March” through “June”.

    let chart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            data: [10, 20, 30, 40, 50, 60],
          },
        ],
        labels: ["January", "February", "March", "April", "May", "June"],
      },
      options: {
        scales: {
          x: {
            min: "March",
          },
        },
      },
    });

Internal data format
--------------------

Internally category scale uses label indices
