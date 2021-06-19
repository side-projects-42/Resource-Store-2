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

-   General <span class="arrow right"></span>

-   Configuration <span class="arrow right"></span>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/axes/" class="sidebar-link">Axes</a>
    -   Cartesian <span class="arrow right"></span>

    -   Radial <span class="arrow right"></span>

    -   <a href="/docs/3.2.0/axes/labelling.html" class="active sidebar-link">Labeling Axes</a>
    -   <a href="/docs/3.2.0/axes/styling.html" class="sidebar-link">Styling</a>

-   Developers <span class="arrow right"></span>

<a href="#labeling-axes" class="header-anchor">#</a> Labeling Axes
==================================================================

When creating a chart, you want to tell the viewer what data they are viewing. To do this, you need to label the axis.

<a href="#scale-title-configuration" class="header-anchor">#</a> Scale Title Configuration
------------------------------------------------------------------------------------------

Namespace: `options.scales[scaleId].title`, it defines options for the scale title. Note that this only applies to cartesian axes.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>display</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If true, display the axis title.</td></tr><tr class="even"><td><code>align</code></td><td><code>string</code></td><td><code>'center'</code></td><td>Alignment of the axis title. Possible options are <code>'start'</code>, <code>'center'</code> and <code>'end'</code></td></tr><tr class="odd"><td><code>text</code></td><td><code>string</code>|<code>string[]</code></td><td><code>''</code></td><td>The text for the title. (i.e. "# of People" or "Response Choices").</td></tr><tr class="even"><td><code>color</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td><code>Chart.defaults.color</code></td><td>Color of label.</td></tr><tr class="odd"><td><code>font</code></td><td><code>Font</code></td><td><code>Chart.defaults.font</code></td><td>See <a href="/docs/3.2.0/general/fonts.html">Fonts</a></td></tr><tr class="even"><td><code>padding</code></td><td><a href="/docs/3.2.0/general/padding.html"><code>Padding</code></a></td><td><code>4</code></td><td>Padding to apply around scale labels. Only <code>top</code> and <code>bottom</code> are implemented.</td></tr></tbody></table>

<a href="#creating-custom-tick-formats" class="header-anchor">#</a> Creating Custom Tick Formats
------------------------------------------------------------------------------------------------

It is also common to want to change the tick marks to include information about the data type. For example, adding a dollar sign ('$'). To do this, you need to override the `ticks.callback` method in the axis configuration.

The method receiver 3 arguments:

-   `value` - the tick value in the **internal data format** of the associated scale.
-   `index` - the tick index in the ticks array.
-   `ticks` - the array containing all of the [tick objects](../api/interfaces/tick).

The call to the method is scoped to the scale. `this` inside the method is the scale object.

If the callback returns `null` or `undefined` the associated grid line will be hidden.

TIP

The [category axis](../axes/cartesian/category), which is the default x-axis for line and bar charts, uses the `index` as internal data format. For accessing the label, use `this.getLabelForValue(value)`. [API: getLabelForValue](/docs/3.2.0/api/classes/scale.html#getlabelforvalue)

In the following example, every label of the Y-axis would be displayed with a dollar sign at the front.

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, values) {
                            return '$' + value;
                        }
                    }
                }
            }
        }
    });

Related samples:

-   [Tick configuration sample](../samples/scale-options/ticks)

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/axes/radial/linear.html" class="prev">Linear Radial Axis</a> </span> <span class="next"> [Styling](/docs/3.2.0/axes/styling.html) → </span>
