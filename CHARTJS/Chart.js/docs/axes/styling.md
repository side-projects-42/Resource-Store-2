# Styling

There are a number of options to allow styling an axis. There are settings to control [grid lines](#grid-line-configuration) and [ticks](#tick-configuration).

## Grid Line Configuration

Namespace: `options.scales[scaleId].grid`, it defines options for the grid lines that run perpendicular to the axis.

| Name                   | Type                            | Scriptable | Indexable | Default                      | Description                                                                                                                                                  |
| ---------------------- | ------------------------------- | :--------: | :-------: | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `borderColor`          | [`Color`](../general/colors.md) |            |           | `Chart.defaults.borderColor` | The color of the border line.                                                                                                                                |
| `borderWidth`          | `number`                        |            |           | `1`                          | The width of the border line.                                                                                                                                |
| `borderDash`           | `number[]`                      |            |           | `[]`                         | Length and spacing of dashes on grid lines. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).                |
| `borderDashOffset`     | `number`                        |    Yes     |           | `0.0`                        | Offset for line dashes. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).                                 |
| `circular`             | `boolean`                       |            |           | `false`                      | If true, gridlines are circular (on radar chart only).                                                                                                       |
| `color`                | [`Color`](../general/colors.md) |    Yes     |    Yes    | `Chart.defaults.borderColor` | The color of the grid lines. If specified as an array, the first color applies to the first grid line, the second to the second grid line, and so on.        |
| `display`              | `boolean`                       |            |           | `true`                       | If false, do not display grid lines for this axis.                                                                                                           |
| `drawBorder`           | `boolean`                       |            |           | `true`                       | If true, draw a border at the edge between the axis and the chart area.                                                                                      |
| `drawOnChartArea`      | `boolean`                       |            |           | `true`                       | If true, draw lines on the chart area inside the axis lines. This is useful when there are multiple axes and you need to control which grid lines are drawn. |
| `drawTicks`            | `boolean`                       |            |           | `true`                       | If true, draw lines beside the ticks in the axis area beside the chart.                                                                                      |
| `lineWidth`            | `number`                        |    Yes     |    Yes    | `1`                          | Stroke width of grid lines.                                                                                                                                  |
| `offset`               | `boolean`                       |            |           | `false`                      | If true, grid lines will be shifted to be between labels. This is set to `true` for a bar chart by default.                                                  |
| `tickBorderDash`       | `number[]`                      |            |           |                              | Length and spacing of the tick mark line. If not set, defaults to the grid line `borderDash` value.                                                          |
| `tickBorderDashOffset` | `number`                        |    Yes     |    Yes    |                              | Offset for the line dash of the tick mark. If unset, defaults to the grid line `borderDashOffset` value                                                      |
| `tickColor`            | [`Color`](../general/colors.md) |    Yes     |    Yes    |                              | Color of the tick line. If unset, defaults to the grid line color.                                                                                           |
| `tickLength`           | `number`                        |            |           | `8`                          | Length in pixels that the grid lines will draw into the axis area.                                                                                           |
| `tickWidth`            | `number`                        |    Yes     |    Yes    |                              | Width of the tick mark in pixels. If unset, defaults to the grid line width.                                                                                 |
| `z`                    | `number`                        |            |           | `0`                          | z-index of gridline layer. Values &lt;= 0 are drawn under datasets, &gt; 0 on top.                                                                           |

The scriptable context is described in [Options](../general/options.md#tick) section.

## Tick Configuration

!!!include(axes/\_common_ticks.md)!!!

The scriptable context is described in [Options](../general/options.md#tick) section.

## Major Tick Configuration

Namespace: `options.scales[scaleId].ticks.major`, it defines options for the major tick marks that are generated by the axis.

| Name      | Type      | Default | Description                                                                                                                                       |
| --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enabled` | `boolean` | `false` | If true, major ticks are generated. A major tick will affect autoskipping and `major` will be defined on ticks in the scriptable options context. |