Linear Radial Axis
==================

The linear radial scale is used to chart numerical data. As the name suggests, linear interpolation is used to determine where a value lies in relation to the center of the axis.

The following additional configuration options are provided by the radial linear scale.

Configuration Options
---------------------

### Linear Radial Axis specific options

Namespace: `options.scales[scaleId]`

<table style="width:98%;"><colgroup><col style="width: 14%" /><col style="width: 10%" /><col style="width: 7%" /><col style="width: 67%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>animate</code></td><td><code>boolean</code></td><td><code>true</code></td><td>Whether to animate scaling the chart from the centre</td></tr><tr class="even"><td><code>angleLines</code></td><td><code>object</code></td><td></td><td>Angle line configuration. <a href="#angle-line-options">more…</a></td></tr><tr class="odd"><td><code>beginAtZero</code></td><td><code>boolean</code></td><td><code>false</code></td><td>if true, scale will include 0 if it is not already included.</td></tr><tr class="even"><td><code>pointLabels</code></td><td><code>object</code></td><td></td><td>Point label configuration. <a href="#point-label-options">more…</a></td></tr><tr class="odd"><td><code>startAngle</code></td><td><code>number</code></td><td><code>0</code></td><td>Starting angle of the scale. In degrees, 0 is at top.</td></tr></tbody></table>

!!!include(axes/\_common.md)!!!

Tick Configuration
------------------

### Linear Radial Axis specific tick options

Namespace: `options.scales[scaleId].ticks`

<table style="width:98%;"><colgroup><col style="width: 7%" /><col style="width: 3%" /><col style="width: 4%" /><col style="width: 5%" /><col style="width: 79%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Scriptable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>count</code></td><td><code>number</code></td><td>Yes</td><td><code>undefined</code></td><td>The number of ticks to generate. If specified, this overrides the automatic generation.</td></tr><tr class="even"><td><code>format</code></td><td><code>object</code></td><td>Yes</td><td></td><td>The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"><code>Intl.NumberFormat</code></a> options used by the default label formatter</td></tr><tr class="odd"><td><code>maxTicksLimit</code></td><td><code>number</code></td><td>Yes</td><td><code>11</code></td><td>Maximum number of ticks and gridlines to show.</td></tr><tr class="even"><td><code>precision</code></td><td><code>number</code></td><td>Yes</td><td></td><td>if defined and <code>stepSize</code> is not specified, the step size will be rounded to this many decimal places.</td></tr><tr class="odd"><td><code>stepSize</code></td><td><code>number</code></td><td>Yes</td><td></td><td>User defined fixed step size for the scale. <a href="#step-size">more…</a></td></tr></tbody></table>

!!!include(axes/\_common\_ticks.md)!!!

The scriptable context is described in [Options](../../general/options.md#tick) section.

Axis Range Settings
-------------------

Given the number of axis range settings, it is important to understand how they all interact with each other.

The `suggestedMax` and `suggestedMin` settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behaviour.

    let minDataValue = Math.min(mostNegativeValue, options.ticks.suggestedMin);
    let maxDataValue = Math.max(mostPositiveValue, options.ticks.suggestedMax);

In this example, the largest positive value is 50, but the data maximum is expanded out to 100. However, because the lowest data value is below the `suggestedMin` setting, it is ignored.

    let chart = new Chart(ctx, {
      type: "radar",
      data: {
        datasets: [
          {
            label: "First dataset",
            data: [0, 20, 40, 50],
          },
        ],
        labels: ["January", "February", "March", "April"],
      },
      options: {
        scales: {
          r: {
            suggestedMin: 50,
            suggestedMax: 100,
          },
        },
      },
    });

In contrast to the `suggested*` settings, the `min` and `max` settings set explicit ends to the axes. When these are set, some data points may not be visible.

Step Size
---------

If set, the scale ticks will be enumerated by multiple of `stepSize`, having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm.

This example sets up a chart with a y axis that creates ticks at `0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5`.

    let options = {
      scales: {
        r: {
          max: 5,
          min: 0,
          ticks: {
            stepSize: 0.5,
          },
        },
      },
    };

Angle Line Options
------------------

The following options are used to configure angled lines that radiate from the center of the chart to the point labels. Namespace: `options.scales[scaleId].angleLines`

<table style="width:98%;"><colgroup><col style="width: 7%" /><col style="width: 14%" /><col style="width: 6%" /><col style="width: 11%" /><col style="width: 60%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Scriptable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>display</code></td><td><code>boolean</code></td><td></td><td><code>true</code></td><td>if true, angle lines are shown.</td></tr><tr class="even"><td><code>color</code></td><td><a href="../../general/colors.md"><code>Color</code></a></td><td>Yes</td><td><code>Chart.defaults.borderColor</code></td><td>Color of angled lines.</td></tr><tr class="odd"><td><code>lineWidth</code></td><td><code>number</code></td><td>Yes</td><td><code>1</code></td><td>Width of angled lines.</td></tr><tr class="even"><td><code>borderDash</code></td><td><code>number[]</code></td><td>Yes<sup>1</sup></td><td><code>[]</code></td><td>Length and spacing of dashes on angled lines. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash">MDN</a>.</td></tr><tr class="odd"><td><code>borderDashOffset</code></td><td><code>number</code></td><td>Yes</td><td><code>0.0</code></td><td>Offset for line dashes. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset">MDN</a>.</td></tr></tbody></table>

1.  the `borderDash` setting only accepts a static value or a function. Passing an array of arrays is not supported.

The scriptable context is described in [Options](../../general/options.md#scale) section.

Point Label Options
-------------------

The following options are used to configure the point labels that are shown on the perimeter of the scale. Namespace: `options.scales[scaleId].pointLabels`

<table style="width:97%;"><colgroup><col style="width: 8%" /><col style="width: 17%" /><col style="width: 4%" /><col style="width: 10%" /><col style="width: 57%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Scriptable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backdropColor</code></td><td><a href="../../general/colors.md"><code>Color</code></a></td><td><code>true</code></td><td><code>undefined</code></td><td>Background color of the point label.</td></tr><tr class="even"><td><code>backdropPadding</code></td><td><a href="../../general/padding.md"><code>Padding</code></a></td><td></td><td><code>2</code></td><td>Padding of label backdrop.</td></tr><tr class="odd"><td><code>display</code></td><td><code>boolean</code></td><td></td><td><code>true</code></td><td>if true, point labels are shown.</td></tr><tr class="even"><td><code>callback</code></td><td><code>function</code></td><td></td><td></td><td>Callback function to transform data labels to point labels. The default implementation simply returns the current string.</td></tr><tr class="odd"><td><code>color</code></td><td><a href="../../general/colors.md"><code>Color</code></a></td><td>Yes</td><td><code>Chart.defaults.color</code></td><td>Color of label.</td></tr><tr class="even"><td><code>font</code></td><td><code>Font</code></td><td>Yes</td><td><code>Chart.defaults.font</code></td><td>See <a href="../../general/fonts.md">Fonts</a></td></tr><tr class="odd"><td><code>padding</code></td><td><code>number</code></td><td>Yes</td><td>5</td><td>Padding between chart and point labels.</td></tr></tbody></table>

The scriptable context is described in [Options](../../general/options.md#scale) section.

Internal data format
--------------------

Internally, the linear radial scale uses numeric data
