Data Decimation
===============

The decimation plugin can be used with line charts to automatically decimate data at the start of the chart lifecycle. Before enabling this plugin, review the [requirements](#requirements) to ensure that it will work with the chart you want to create.

Configuration Options
---------------------

Namespace: `options.plugins.decimation`, the global options for the plugin are defined in `Chart.defaults.plugins.decimation`.

<table style="width:99%;"><colgroup><col style="width: 6%" /><col style="width: 5%" /><col style="width: 6%" /><col style="width: 82%" /></colgroup><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>enabled</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Is decimation enabled?</td></tr><tr class="even"><td><code>algorithm</code></td><td><code>string</code></td><td><code>'min-max'</code></td><td>Decimation algorithm to use. See the <a href="#decimation-algorithms">more…</a></td></tr><tr class="odd"><td><code>samples</code></td><td><code>number</code></td><td></td><td>If the <code>'lttb'</code> algorithm is used, this is the number of samples in the output dataset. Defaults to the canvas width to pick 1 sample per pixel.</td></tr></tbody></table>

Decimation Algorithms
---------------------

Decimation algorithm to use for data. Options are:

-   `'lttb'`
-   `'min-max'`

### Largest Triangle Three Bucket (LTTB) Decimation

[LTTB](https://github.com/sveinn-steinarsson/flot-downsample) decimation reduces the number of data points significantly. This is most useful for showing trends in data using only a few data points.

### Min/Max Decimation

[Min/max](https://digital.ni.com/public.nsf/allkb/F694FFEEA0ACF282862576020075F784) decimation will preserve peaks in your data but could require up to 4 points for each pixel. This type of decimation would work well for a very noisy signal where you need to see data peaks.

Requirements
------------

To use the decimation plugin, the following requirements must be met:

1.  The dataset must have an [`indexAxis`](../charts/line.md#general) of `'x'`
2.  The dataset must be a line
3.  The X axis for the dataset must be either a [`'linear'`](../axes/cartesian/linear.md) or [`'time'`](../axes/cartesian/time.md) type axis
4.  Data must not need parsing, i.e. [`parsing`](../general/data-structures.md#dataset-configuration) must be `false`
5.  The dataset object must be mutable. The plugin stores the original data as `dataset._data` and then defines a new `data` property on the dataset.

Related Samples
---------------

-   [Data Decimation Sample](../samples/advanced/data-decimation)
