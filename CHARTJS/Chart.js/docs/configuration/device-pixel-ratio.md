Device Pixel Ratio
==================

By default the chart’s canvas will use a 1:1 pixel ratio, unless the physical display has a higher pixel ratio (e.g. Retina displays).

For applications where a chart will be converted to a bitmap, or printed to a higher DPI medium it can be desirable to render the chart at a higher resolution than the default.

Setting `devicePixelRatio` to a value other than 1 will force the canvas size to be scaled by that amount, relative to the container size. There should be no visible difference on screen; the difference will only be visible when the image is zoomed or printed.

Configuration Options
---------------------

Namespace: `options`

<table style="width:98%;"><colgroup><col style="width: 18%" /><col style="width: 8%" /><col style="width: 25%" /><col style="width: 47%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>devicePixelRatio</code></td><td><code>number</code></td><td><code>window.devicePixelRatio</code></td><td>Override the window’s default devicePixelRatio.</td></tr></tbody></table>
