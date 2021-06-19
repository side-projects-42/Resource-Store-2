Logarithmic Axis
================

The logarithmic scale is used to chart numerical data. It can be placed on either the x or y-axis. As the name suggests, logarithmic interpolation is used to determine where a value lies on the axis.

Configuration Options
---------------------

!!!include(axes/cartesian/\_common.md)!!!

!!!include(axes/\_common.md)!!!

Tick Configuration
------------------

### Logarithmic Axis specific options

Namespace: `options.scales[scaleId]`

<table style="width:99%;"><colgroup><col style="width: 4%" /><col style="width: 4%" /><col style="width: 3%" /><col style="width: 88%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>format</code></td><td><code>object</code></td><td></td><td>The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"><code>Intl.NumberFormat</code></a> options used by the default label formatter</td></tr></tbody></table>

!!!include(axes/cartesian/\_common\_ticks.md)!!!

!!!include(axes/\_common\_ticks.md)!!!

Internal data format
--------------------

Internally, the logarithmic scale uses numeric data.
