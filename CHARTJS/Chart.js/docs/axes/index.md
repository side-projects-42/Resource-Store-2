Axes
====

Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X-axis and 1 or more Y-axis to map points onto the 2-dimensional canvas. These axes are known as [‘cartesian axes’](./cartesian/).

In a radial chart, such as a radar chart or a polar area chart, there is a single axis that maps points in the angular and radial directions. These are known as [‘radial axes’](./radial/).

Scales in Chart.js &gt;v2.0 are significantly more powerful, but also different than those of v1.0.

-   Multiple X & Y axes are supported.
-   A built-in label auto-skip feature detects would-be overlapping ticks and labels and removes every nth label to keep things displaying normally.
-   Scale titles are supported.
-   New scale types can be extended without writing an entirely new chart type.

Default scales
--------------

The default `scaleId`’s for carterian charts are `'x'` and `'y'`. For radial charts: `'r'`. Each dataset is mapped to a scale for each axis (x, y or r) it requires. The scaleId’s that a dataset is mapped to, is determined by the `xAxisID`, `yAxisID` or `rAxisID`. If the ID for an axis is not specified, first scale for that axis is used. If no scale for an axis is found, a new scale is created.

Some examples:

The following chart will have `'x'` and `'y'` scales:

    let chart = new Chart(ctx, {
      type: "line",
    });

The following chart will have scales `'x'` and `'myScale'`:

    let chart = new Chart(ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            data: [1, 2, 3],
          },
        ],
      },
      options: {
        scales: {
          myScale: {
            type: "logarithmic",
            position: "right", // `axis` is determined by the position as `'y'`
          },
        },
      },
    });

The following chart will have scales `'xAxis'` and `'yAxis'`:

    let chart = new Chart(ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            yAxisID: "yAxis",
          },
        ],
      },
      options: {
        scales: {
          xAxis: {
            // The axis for this scale is determined from the first letter of the id as `'x'`
            // It is recommended to specify `position` and / or `axis` explicitly.
            type: "time",
          },
        },
      },
    });

The following chart will have `'r'` scale:

    let chart = new Chart(ctx, {
      type: "radar",
    });

The following chart will have `'myScale'` scale:

    let chart = new Chart(ctx, {
      type: "radar",
      scales: {
        myScale: {
          axis: "r",
        },
      },
    });

Common Configuration
--------------------

!!!include(axes/\_common.md)!!!

Tick Configuration
------------------

!!!include(axes/\_common\_ticks.md)!!!

Axis Range Settings
-------------------

Given the number of axis range settings, it is important to understand how they all interact with each other.

The `suggestedMax` and `suggestedMin` settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behaviour.

    let minDataValue = Math.min(mostNegativeValue, options.suggestedMin);
    let maxDataValue = Math.max(mostPositiveValue, options.suggestedMax);

In this example, the largest positive value is 50, but the data maximum is expanded out to 100. However, because the lowest data value is below the `suggestedMin` setting, it is ignored.

    let chart = new Chart(ctx, {
      type: "line",
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
          y: {
            suggestedMin: 50,
            suggestedMax: 100,
          },
        },
      },
    });

In contrast to the `suggested*` settings, the `min` and `max` settings set explicit ends to the axes. When these are set, some data points may not be visible.

Stacking
--------

By default data is not stacked. If the `stacked` option of the value scale (y-axis on horizontal chart) is `true`, positive and negative values are stacked separately. Additionally a `stack` option can be defined per dataset to further divide into stack groups [more…](../general/data-structures/#dataset-configuration). For some charts, you might want to stack positive and negative values together. That can be achieved by specifying `stacked: 'single'`.

Callbacks
---------

There are a number of config callbacks that can be used to change parameters in the scale at different points in the update process. The options are supplied at the top level of the axis options.

Namespace: `options.scales[scaleId]`

<table style="width:99%;"><colgroup><col style="width: 26%" /><col style="width: 8%" /><col style="width: 65%" /></colgroup><thead><tr class="header"><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>beforeUpdate</code></td><td><code>axis</code></td><td>Callback called before the update process starts.</td></tr><tr class="even"><td><code>beforeSetDimensions</code></td><td><code>axis</code></td><td>Callback that runs before dimensions are set.</td></tr><tr class="odd"><td><code>afterSetDimensions</code></td><td><code>axis</code></td><td>Callback that runs after dimensions are set.</td></tr><tr class="even"><td><code>beforeDataLimits</code></td><td><code>axis</code></td><td>Callback that runs before data limits are determined.</td></tr><tr class="odd"><td><code>afterDataLimits</code></td><td><code>axis</code></td><td>Callback that runs after data limits are determined.</td></tr><tr class="even"><td><code>beforeBuildTicks</code></td><td><code>axis</code></td><td>Callback that runs before ticks are created.</td></tr><tr class="odd"><td><code>afterBuildTicks</code></td><td><code>axis</code></td><td>Callback that runs after ticks are created. Useful for filtering ticks.</td></tr><tr class="even"><td><code>beforeTickToLabelConversion</code></td><td><code>axis</code></td><td>Callback that runs before ticks are converted into strings.</td></tr><tr class="odd"><td><code>afterTickToLabelConversion</code></td><td><code>axis</code></td><td>Callback that runs after ticks are converted into strings.</td></tr><tr class="even"><td><code>beforeCalculateTickRotation</code></td><td><code>axis</code></td><td>Callback that runs before tick rotation is determined.</td></tr><tr class="odd"><td><code>afterCalculateTickRotation</code></td><td><code>axis</code></td><td>Callback that runs after tick rotation is determined.</td></tr><tr class="even"><td><code>beforeFit</code></td><td><code>axis</code></td><td>Callback that runs before the scale fits to the canvas.</td></tr><tr class="odd"><td><code>afterFit</code></td><td><code>axis</code></td><td>Callback that runs after the scale fits to the canvas.</td></tr><tr class="even"><td><code>afterUpdate</code></td><td><code>axis</code></td><td>Callback that runs at the end of the update process.</td></tr></tbody></table>

### Updating Axis Defaults

The default configuration for a scale can be easily changed. All you need to do is set the new options to `Chart.defaults.scales[type]`.

For example, to set the minimum value of 0 for all linear scales, you would do the following. Any linear scales created after this time would now have a minimum of 0.

    Chart.defaults.scales.linear.min = 0;

Creating New Axes
-----------------

To create a new axis, see the [developer docs](../developers/axes.md).
