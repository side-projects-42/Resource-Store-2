Linear Axis
===========

The linear scale is used to chart numerical data. It can be placed on either the x or y-axis. The scatter chart type automatically configures a line chart to use one of these scales for the x-axis. As the name suggests, linear interpolation is used to determine where a value lies on the axis.

Configuration Options
---------------------

### Linear Axis specific options

Namespace: `options.scales[scaleId]`

<table style="width:99%;"><colgroup><col style="width: 8%" /><col style="width: 11%" /><col style="width: 80%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>beginAtZero</code></td><td><code>boolean</code></td><td>if true, scale will include 0 if it is not already included.</td></tr><tr class="even"><td><code>grace</code></td><td><code>number</code>|<code>string</code></td><td>Percentage (string ending with <code>%</code>) or amount (number) for added room in the scale range above and below data. <a href="#grace">more…</a></td></tr></tbody></table>

!!!include(axes/cartesian/\_common.md)!!!

!!!include(axes/\_common.md)!!!

Tick Configuration
------------------

### Linear Axis specific tick options

Namespace: `options.scales[scaleId].ticks`

<table style="width:98%;"><colgroup><col style="width: 7%" /><col style="width: 3%" /><col style="width: 4%" /><col style="width: 5%" /><col style="width: 79%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Scriptable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>count</code></td><td><code>number</code></td><td>Yes</td><td><code>undefined</code></td><td>The number of ticks to generate. If specified, this overrides the automatic generation.</td></tr><tr class="even"><td><code>format</code></td><td><code>object</code></td><td>Yes</td><td></td><td>The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat"><code>Intl.NumberFormat</code></a> options used by the default label formatter</td></tr><tr class="odd"><td><code>maxTicksLimit</code></td><td><code>number</code></td><td>Yes</td><td><code>11</code></td><td>Maximum number of ticks and gridlines to show.</td></tr><tr class="even"><td><code>precision</code></td><td><code>number</code></td><td>Yes</td><td></td><td>if defined and <code>stepSize</code> is not specified, the step size will be rounded to this many decimal places.</td></tr><tr class="odd"><td><code>stepSize</code></td><td><code>number</code></td><td>Yes</td><td></td><td>User-defined fixed step size for the scale. <a href="#step-size">more…</a></td></tr></tbody></table>

!!!include(axes/cartesian/\_common\_ticks.md)!!!

!!!include(axes/\_common\_ticks.md)!!!

Step Size
---------

If set, the scale ticks will be enumerated by multiple of `stepSize`, having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm.

This example sets up a chart with a y axis that creates ticks at `0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5`.

    let options = {
      scales: {
        y: {
          max: 5,
          min: 0,
          ticks: {
            stepSize: 0.5,
          },
        },
      },
    };

Grace
-----

If the value is string ending with `%`, its treat as percentage. If number, its treat as value. The value is added to the maximum data value and subtracted from the minimum data. This extends the scale range as if the data values were that much greater.

\`\`\`js chart-editor // const labels = Utils.months({ count: 7 }); const data = { labels: \[“Positive”, “Negative”\], datasets: \[ { data: \[100, -50\], backgroundColor: “rgb(255, 99, 132)”, }, \], }; //

// const config = { type: “bar”, data, options: { scales: { y: { type: “linear”, grace: “5%”, }, }, plugins: { legend: false, }, }, }; //

module.exports = { actions: \[\], config: config, }; \`\`\`

Internal data format
--------------------

Internally, the linear scale uses numeric data
