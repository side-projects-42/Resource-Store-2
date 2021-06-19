Time Cartesian Axis
===================

The time scale is used to display times and dates. Data are spread according to the amount of time between data points. When building its ticks, it will automatically calculate the most comfortable unit base on the size of the scale.

Date Adapters
-------------

The time scale **requires** both a date library and a corresponding adapter to be present. Please choose from the [available adapters](https://github.com/chartjs/awesome#adapters).

Data Sets
---------

### Input Data

See [data structures](../../general/data-structures.md).

### Date Formats

When providing data for the time scale, Chart.js uses timestamps defined as milliseconds since the epoch (midnight January 1, 1970, UTC) internally. However, Chart.js also supports all of the formats that your chosen date adapter accepts. You should use timestamps if you’d like to set `parsing: false` for better performance.

Configuration Options
---------------------

### Time Axis specific options

Namespace: `options.scales[scaleId]`

<table style="width:97%;"><colgroup><col style="width: 7%" /><col style="width: 7%" /><col style="width: 5%" /><col style="width: 78%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>adapters.date</code></td><td><code>object</code></td><td><code>{}</code></td><td>Options for adapter for external date library if that adapter needs or supports options</td></tr><tr class="even"><td><code>bounds</code></td><td><code>string</code></td><td><code>'data'</code></td><td>Determines the scale bounds. <a href="./index.md#scale-bounds">more…</a></td></tr><tr class="odd"><td><code>ticks.source</code></td><td><code>string</code></td><td><code>'auto'</code></td><td>How ticks are generated. <a href="#ticks-source">more…</a></td></tr><tr class="even"><td><code>time.displayFormats</code></td><td><code>object</code></td><td></td><td>Sets how different time units are displayed. <a href="#display-formats">more…</a></td></tr><tr class="odd"><td><code>time.isoWeekday</code></td><td><code>boolean</code>|<code>number</code></td><td><code>false</code></td><td>If <code>boolean</code> and true and the unit is set to ‘week’, then the first day of the week will be Monday. Otherwise, it will be Sunday. If <code>number</code>, the index of the first day of the week (0 - Sunday, 6 - Saturday)</td></tr><tr class="even"><td><code>time.parser</code></td><td><code>string</code>|<code>function</code></td><td></td><td>Custom parser for dates. <a href="#parser">more…</a></td></tr><tr class="odd"><td><code>time.round</code></td><td><code>string</code></td><td><code>false</code></td><td>If defined, dates will be rounded to the start of this unit. See <a href="#time-units">Time Units</a> below for the allowed units.</td></tr><tr class="even"><td><code>time.tooltipFormat</code></td><td><code>string</code></td><td></td><td>The format string to use for the tooltip.</td></tr><tr class="odd"><td><code>time.unit</code></td><td><code>string</code></td><td><code>false</code></td><td>If defined, will force the unit to be a certain type. See <a href="#time-units">Time Units</a> section below for details.</td></tr><tr class="even"><td><code>time.stepSize</code></td><td><code>number</code></td><td><code>1</code></td><td>The number of units between grid lines.</td></tr><tr class="odd"><td><code>time.minUnit</code></td><td><code>string</code></td><td><code>'millisecond'</code></td><td>The minimum display format to be used for a time unit.</td></tr></tbody></table>

!!!include(axes/cartesian/\_common.md)!!!

!!!include(axes/\_common.md)!!!

#### Time Units

The following time measurements are supported. The names can be passed as strings to the `time.unit` config option to force a certain unit.

-   `'millisecond'`
-   `'second'`
-   `'minute'`
-   `'hour'`
-   `'day'`
-   `'week'`
-   `'month'`
-   `'quarter'`
-   `'year'`

For example, to create a chart with a time scale that always displayed units per month, the following config could be used.

    var chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        scales: {
          x: {
            type: "time",
            time: {
              unit: "month",
            },
          },
        },
      },
    });

#### Display Formats

You may specify a map of display formats with a key for each unit:

-   `millisecond`
-   `second`
-   `minute`
-   `hour`
-   `day`
-   `week`
-   `month`
-   `quarter`
-   `year`

The format string used as a value depends on the date adapter you chose to use.

For example, to set the display format for the `quarter` unit to show the month and year, the following config might be passed to the chart constructor.

    var chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        scales: {
          x: {
            type: "time",
            time: {
              displayFormats: {
                quarter: "MMM YYYY",
              },
            },
          },
        },
      },
    });

#### Ticks Source

The `ticks.source` property controls the ticks generation.

-   `'auto'`: generates “optimal” ticks based on scale size and time options
-   `'data'`: generates ticks from data (including labels from data `{x|y}` objects)
-   `'labels'`: generates ticks from user given `labels` ONLY

#### Parser

If this property is defined as a string, it is interpreted as a custom format to be used by the date adapter to parse the date.

If this is a function, it must return a type that can be handled by your date adapter’s `parse` method.

Internal data format
--------------------

Internally time scale uses milliseconds since epoch
