Title
=====

The chart title defines text to draw at the top of the chart.

Title Configuration
-------------------

Namespace: `options.plugins.title`, the global options for the chart title is defined in `Chart.defaults.plugins.title`.

<table style="width:98%;"><colgroup><col style="width: 3%" /><col style="width: 13%" /><col style="width: 8%" /><col style="width: 21%" /><col style="width: 53%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th style="text-align: center;"><a href="../general/options.md#scriptable-options">Scriptable</a></th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>align</code></td><td><code>string</code></td><td><code>'center'</code></td><td style="text-align: center;">Yes</td><td>Alignment of the title. <a href="#align">more…</a></td></tr><tr class="even"><td><code>color</code></td><td><a href="../general/colors.md"><code>Color</code></a></td><td><code>Chart.defaults.color</code></td><td style="text-align: center;">Yes</td><td>Color of text.</td></tr><tr class="odd"><td><code>display</code></td><td><code>boolean</code></td><td><code>false</code></td><td style="text-align: center;">Yes</td><td>Is the title shown?</td></tr><tr class="even"><td><code>fullSize</code></td><td><code>boolean</code></td><td><code>true</code></td><td style="text-align: center;">Yes</td><td>Marks that this box should take the full width/height of the canvas. If <code>false</code>, the box is sized and placed above/beside the chart area.</td></tr><tr class="odd"><td><code>position</code></td><td><code>string</code></td><td><code>'top'</code></td><td style="text-align: center;">Yes</td><td>Position of title. <a href="#position">more…</a></td></tr><tr class="even"><td><code>font</code></td><td><code>Font</code></td><td><code>{weight: 'bold'}</code></td><td style="text-align: center;">Yes</td><td>See <a href="../general/fonts.md">Fonts</a></td></tr><tr class="odd"><td><code>padding</code></td><td><a href="../general/padding.md"><code>Padding</code></a></td><td><code>10</code></td><td style="text-align: center;">Yes</td><td>Padding to apply around the title. Only <code>top</code> and <code>bottom</code> are implemented.</td></tr><tr class="even"><td><code>text</code></td><td><code>string</code>|<code>string[]</code></td><td><code>''</code></td><td style="text-align: center;">Yes</td><td>Title text to display. If specified as an array, text is rendered on multiple lines.</td></tr></tbody></table>

### Position

Possible title position values are:

-   `'top'`
-   `'left'`
-   `'bottom'`
-   `'right'`

Align
-----

Alignment of the title. Options are:

-   `'start'`
-   `'center'`
-   `'end'`

Example Usage
-------------

The example below would enable a title of ‘Custom Chart Title’ on the chart that is created.

    var chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Custom Chart Title",
          },
        },
      },
    });

This example shows how to specify separate top and bottom title text padding:

    var chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        plugins: {
          title: {
            display: true,
            text: "Custom Chart Title",
            padding: {
              top: 10,
              bottom: 30,
            },
          },
        },
      },
    });
