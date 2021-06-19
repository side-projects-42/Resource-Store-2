<a href="/docs/3.2.0/" class="home-link router-link-active"><img src="/docs/3.2.0/favicon.ico" alt="Chart.js" class="logo" /> <span class="site-name can-hide">Chart.js</span></a>

<a href="/docs/3.2.0/" class="nav-link">Home</a>

<a href="/docs/3.2.0/api/" class="nav-link">API</a>

<a href="/docs/3.2.0/samples/" class="nav-link">Samples</a>

<span class="title">Ecosystem</span> <span class="arrow down"></span>

<span class="title">Ecosystem</span> <span class="arrow right"></span>

-   Awesome
    <span class="sr-only">(opens new window)</span>
-   Slack
    <span class="sr-only">(opens new window)</span>
-   Stack Overflow
    <span class="sr-only">(opens new window)</span>

GitHub

<span class="sr-only">(opens new window)</span>

<a href="/docs/3.2.0/" class="nav-link">Home</a>

<a href="/docs/3.2.0/api/" class="nav-link">API</a>

<a href="/docs/3.2.0/samples/" class="nav-link">Samples</a>

<span class="title">Ecosystem</span> <span class="arrow down"></span>

<span class="title">Ecosystem</span> <span class="arrow right"></span>

-   Awesome
    <span class="sr-only">(opens new window)</span>
-   Slack
    <span class="sr-only">(opens new window)</span>
-   Stack Overflow
    <span class="sr-only">(opens new window)</span>

GitHub

<span class="sr-only">(opens new window)</span>

-   <a href="/docs/3.2.0/" class="sidebar-link">Chart.js</a>
-   Getting Started <span class="arrow right"></span>

-   General <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/general/data-structures.html" class="sidebar-link">Data structures</a>
    -   <a href="/docs/3.2.0/general/accessibility.html" class="sidebar-link">Accessibility</a>
    -   <a href="/docs/3.2.0/general/options.html" class="active sidebar-link">Options</a>
    -   <a href="/docs/3.2.0/general/colors.html" class="sidebar-link">Colors</a>
    -   <a href="/docs/3.2.0/general/fonts.html" class="sidebar-link">Fonts</a>
    -   <a href="/docs/3.2.0/general/padding.html" class="sidebar-link">Padding</a>
    -   <a href="/docs/3.2.0/general/performance.html" class="sidebar-link">Performance</a>

-   Configuration <span class="arrow right"></span>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#options" class="header-anchor">#</a> Options
======================================================

<a href="#option-resolution" class="header-anchor">#</a> Option resolution
--------------------------------------------------------------------------

Options are resolved from top to bottom, using a context dependent route.

### <a href="#chart-level-options" class="header-anchor">#</a> Chart level options

-   options
-   overrides\[`config.type`\]
-   defaults

### <a href="#dataset-level-options" class="header-anchor">#</a> Dataset level options

`dataset.type` defaults to `config.type`, if not specified.

-   dataset
-   options.datasets\[`dataset.type`\]
-   options
-   overrides\[`config.type`\].datasets\[`dataset.type`\]
-   defaults.datasets\[`dataset.type`\]
-   defaults

### <a href="#dataset-animation-options" class="header-anchor">#</a> Dataset animation options

-   dataset.animation
-   options.datasets\[`dataset.type`\].animation
-   options.animation
-   overrides\[`config.type`\].datasets\[`dataset.type`\].animation
-   defaults.datasets\[`dataset.type`\].animation
-   defaults.animation

### <a href="#dataset-element-level-options" class="header-anchor">#</a> Dataset element level options

Each scope is looked up with `elementType` prefix in the option name first, then wihtout the prefix. For example, `radius` for `point` element is looked up using `pointRadius` and if that does not hit, then `radius`.

-   dataset
-   options.datasets\[`dataset.type`\]
-   options.datasets\[`dataset.type`\].elements\[`elementType`\]
-   options.elements\[`elementType`\]
-   options
-   overrides\[`config.type`\].datasets\[`dataset.type`\]
-   overrides\[`config.type`\].datasets\[`dataset.type`\].elements\[`elementType`\]
-   defaults.datasets\[`dataset.type`\]
-   defaults.datasets\[`dataset.type`\].elements\[`elementType`\]
-   defaults.elements\[`elementType`\]
-   defaults

### <a href="#scale-options" class="header-anchor">#</a> Scale options

-   options.scales
-   overrides\[`config.type`\].scales
-   defaults.scales
-   defaults.scale

### <a href="#plugin-options" class="header-anchor">#</a> Plugin options

A plugin can provide `additionalOptionScopes` array of paths to additionally look for its options in. For root scope, use empty string: `''`. Most core plugins also take options from root scope.

-   options.plugins\[`plugin.id`\]
-   (options.\[`...plugin.additionalOptionScopes`\])
-   overrides\[`config.type`\].plugins\[`plugin.id`\]
-   defaults.plugins\[`plugin.id`\]
-   (defaults.\[`...plugin.additionalOptionScopes`\])

<a href="#scriptable-options" class="header-anchor">#</a> Scriptable Options
----------------------------------------------------------------------------

Scriptable options also accept a function which is called for each of the underlying data values and that takes the unique argument `context` representing contextual information (see [option context](/docs/3.2.0/general/options.html#option-context)). A resolver is passed as second parameter, that can be used to access other options in the same context.

Note

The `context` argument should be validated in the scriptable function, because the function can be invoked in different contexts. The `type` field is a good candidate for this validation.

Example:

    color: function(context) {
        var index = context.dataIndex;
        var value = context.dataset.data[index];
        return value < 0 ? 'red' :  // draw negative values in red
            index % 2 ? 'blue' :    // else, alternate values in blue and green
            'green';
    },
    borderColor: function(context, options) {
        var color = options.color; // resolve the value of another scriptable option: 'red', 'blue' or 'green'
        return Chart.helpers.color(color).lighten(0.2);
    }

<a href="#indexable-options" class="header-anchor">#</a> Indexable Options
--------------------------------------------------------------------------

Indexable options also accept an array in which each item corresponds to the element at the same index. Note that if there are less items than data, the items are looped over. In many cases, using a [function](#scriptable-options) is more appropriate if supported.

Example:

    color: [
        'red',    // color for data at index 0
        'blue',   // color for data at index 1
        'green',  // color for data at index 2
        'black',  // color for data at index 3
        //...
    ]

<a href="#option-context" class="header-anchor">#</a> Option Context
--------------------------------------------------------------------

The option context is used to give contextual information when resolving options and currently only applies to [scriptable options](#scriptable-options). The object is preserved, so it can be used to store and pass information between calls.

There are multiple levels of context objects:

-   `chart`
    -   `dataset`
        -   `data`
    -   `scale`
        -   `tick`
    -   `tooltip`

Each level inherits its parent(s) and any contextual information stored in the parent is available through the child.

The context object contains the following properties:

### <a href="#chart" class="header-anchor">#</a> chart

-   `chart`: the associated chart
-   `type`: `'chart'`

### <a href="#dataset" class="header-anchor">#</a> dataset

In addition to [chart](#chart)

-   `active`: true if element is active (hovered)
-   `dataset`: dataset at index `datasetIndex`
-   `datasetIndex`: index of the current dataset
-   `index`: same as `datasetIndex`
-   `mode`: the update mode
-   `type`: `'dataset'`

### <a href="#data" class="header-anchor">#</a> data

In addition to [dataset](#dataset)

-   `active`: true if element is active (hovered)
-   `dataIndex`: index of the current data
-   `parsed`: the parsed data values for the given `dataIndex` and `datasetIndex`
-   `raw`: the raw data values for the given `dataIndex` and `datasetIndex`
-   `element`: the element (point, arc, bar, etc.) for this data
-   `index`: same as `dataIndex`
-   `type`: `'data'`

### <a href="#scale" class="header-anchor">#</a> scale

In addition to [chart](#chart)

-   `scale`: the associated scale
-   `type`: `'scale'`

### <a href="#tick" class="header-anchor">#</a> tick

In addition to [scale](#scale)

-   `tick`: the associated tick object
-   `index`: tick index
-   `type`: `'tick'`

### <a href="#tooltip" class="header-anchor">#</a> tooltip

In addition to [chart](#chart)

-   `tooltip`: the tooltip object
-   `tooltipItems`: the items the tooltip is displaying

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/general/accessibility.html" class="prev">Accessibility</a> </span> <span class="next"> [Colors](/docs/3.2.0/general/colors.html) → </span>
