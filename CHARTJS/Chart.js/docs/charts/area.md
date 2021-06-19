Area Chart
==========

Both [line](./line.md) and [radar](./radar.md) charts support a `fill` option on the dataset object which can be used to create space between two datasets or a dataset and a boundary, i.e. the scale `origin`, `start,` or `end` (see [filling modes](#filling-modes)).

:::tip Note This feature is implemented by the [`filler` plugin](https://github.com/chartjs/Chart.js/blob/master/src/plugins/plugin.filler.js). :::

Filling modes
-------------

<table><thead><tr class="header"><th style="text-align: left;">Mode</th><th style="text-align: left;">Type</th><th style="text-align: left;">Values</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;">Absolute dataset index</td><td style="text-align: left;"><code>number</code></td><td style="text-align: left;"><code>1</code>, <code>2</code>, <code>3</code>, …</td></tr><tr class="even"><td style="text-align: left;">Relative dataset index</td><td style="text-align: left;"><code>string</code></td><td style="text-align: left;"><code>'-1'</code>, <code>'-2'</code>, <code>'+1'</code>, …</td></tr><tr class="odd"><td style="text-align: left;">Boundary</td><td style="text-align: left;"><code>string</code></td><td style="text-align: left;"><code>'start'</code>, <code>'end'</code>, <code>'origin'</code></td></tr><tr class="even"><td style="text-align: left;">Disabled <sup>1</sup></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;"><code>false</code></td></tr><tr class="odd"><td style="text-align: left;">Stacked value below</td><td style="text-align: left;"><code>string</code></td><td style="text-align: left;"><code>'stack'</code></td></tr><tr class="even"><td style="text-align: left;">Axis value</td><td style="text-align: left;"><code>object</code></td><td style="text-align: left;"><code>{ value: number; }</code></td></tr></tbody></table>

> <sup>1</sup> for backward compatibility, `fill: true` is equivalent to `fill: 'origin'`  

### Example

    new Chart(ctx, {
      data: {
        datasets: [
          { fill: "origin" }, // 0: fill to 'origin'
          { fill: "+2" }, // 1: fill to dataset 3
          { fill: 1 }, // 2: fill to dataset 1
          { fill: false }, // 3: no fill
          { fill: "-2" }, // 4: fill to dataset 2
          { fill: { value: 25 } }, // 5: fill to axis value 25
        ],
      },
    });

If you need to support multiple colors when filling from one dataset to another, you may specify an object with the following option :

<table style="width:98%;"><colgroup><col style="width: 4%" /><col style="width: 21%" /><col style="width: 73%" /></colgroup><thead><tr class="header"><th style="text-align: left;">Param</th><th style="text-align: left;">Type</th><th style="text-align: left;">Description</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>target</code></td><td style="text-align: left;"><code>number</code>, <code>string</code>, <code>boolean</code>, <code>object</code></td><td style="text-align: left;">The accepted values are the same as the filling mode values, so you may use absolute and relative dataset indexes and/or boundaries.</td></tr><tr class="even"><td style="text-align: left;"><code>above</code></td><td style="text-align: left;"><code>Color</code></td><td style="text-align: left;">If no color is set, the default color will be the background color of the chart.</td></tr><tr class="odd"><td style="text-align: left;"><code>below</code></td><td style="text-align: left;"><code>Color</code></td><td style="text-align: left;">Same as the above.</td></tr></tbody></table>

### Example with multiple colors

    new Chart(ctx, {
      data: {
        datasets: [
          {
            fill: {
              target: "origin",
              above: "rgb(255, 0, 0)", // Area will be red above the origin
              below: "rgb(0, 0, 255)", // And blue below the origin
            },
          },
        ],
      },
    });

Configuration
-------------

Namespace: `options.plugins.filler`

<table style="width:98%;"><colgroup><col style="width: 16%" /><col style="width: 6%" /><col style="width: 12%" /><col style="width: 64%" /></colgroup><thead><tr class="header"><th style="text-align: left;">Option</th><th style="text-align: left;">Type</th><th style="text-align: left;">Default</th><th style="text-align: left;">Description</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>drawTime</code></td><td style="text-align: left;"><code>string</code></td><td style="text-align: left;"><code>beforeDatasetDraw</code></td><td style="text-align: left;">Filler draw time. Supported values: <code>'beforeDraw'</code>, <code>'beforeDatasetDraw'</code>, <code>'beforeDatasetsDraw'</code></td></tr><tr class="even"><td style="text-align: left;"><a href="#propagate"><code>propagate</code></a></td><td style="text-align: left;"><code>boolean</code></td><td style="text-align: left;"><code>true</code></td><td style="text-align: left;">Fill propagation when target is hidden.</td></tr></tbody></table>

### propagate

`propagate` takes a `boolean` value (default: `true`).

If `true`, the fill area will be recursively extended to the visible target defined by the `fill` value of hidden dataset targets:

#### Example using propagate

    new Chart(ctx, {
      data: {
        datasets: [
          { fill: "origin" }, // 0: fill to 'origin'
          { fill: "-1" }, // 1: fill to dataset 0
          { fill: 1 }, // 2: fill to dataset 1
          { fill: false }, // 3: no fill
          { fill: "-2" }, // 4: fill to dataset 2
        ],
      },
      options: {
        plugins: {
          filler: {
            propagate: true,
          },
        },
      },
    });

`propagate: true`: -if dataset 2 is hidden, dataset 4 will fill to dataset 1 -if dataset 2 and 1 are hidden, dataset 4 will fill to `'origin'`

`propagate: false`: -if dataset 2 and/or 4 are hidden, dataset 4 will not be filled
