Options
=======

The plugin options can be changed at 2 different levels and with the following priority:

-   per chart: `options.plugins.deferred.*`
-   globally: `Chart.defaults.global.plugins.deferred.*`

Available options:

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th></tr></thead><tbody><tr class="odd"><td><a href="#delay"><code>delay</code></a></td><td><code>Number</code></td><td><code>0</code></td></tr><tr class="even"><td><a href="#xoffset"><code>xOffset</code></a></td><td><code>Number/String</code></td><td><code>0</code></td></tr><tr class="odd"><td><a href="#yoffset"><code>yOffset</code></a></td><td><code>Number/String</code></td><td><code>0</code></td></tr></tbody></table>

> **Note:** default options defer the chart loading until the first line of pixels of the canvas appears in the viewport

`delay`
-------

Number of milliseconds to delay the loading after the chart is considered inside the viewport.

`xOffset`
---------

Number of pixels (or percent of the canvas width) from which the chart is considered inside the viewport.

`yOffset`
---------

Number of pixels (or percent of the canvas height) from which the chart is considered inside the viewport.
