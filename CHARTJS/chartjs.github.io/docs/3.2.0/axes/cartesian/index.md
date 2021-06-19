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
    -   Cartesian <span class="arrow down"></span>

        -   <a href="/docs/3.2.0/axes/cartesian/" class="active sidebar-link">Cartesian Axes</a>
        -   <a href="/docs/3.2.0/axes/cartesian/category.html" class="sidebar-link">Category Axis</a>
        -   <a href="/docs/3.2.0/axes/cartesian/linear.html" class="sidebar-link">Linear Axis</a>
        -   <a href="/docs/3.2.0/axes/cartesian/logarithmic.html" class="sidebar-link">Logarithmic Axis</a>
        -   <a href="/docs/3.2.0/axes/cartesian/time.html" class="sidebar-link">Time Cartesian Axis</a>
        -   <a href="/docs/3.2.0/axes/cartesian/timeseries.html" class="sidebar-link">Time Series Axis</a>

    -   Radial <span class="arrow right"></span>

    -   <a href="/docs/3.2.0/axes/labelling.html" class="sidebar-link">Labeling Axes</a>
    -   <a href="/docs/3.2.0/axes/styling.html" class="sidebar-link">Styling</a>

-   Developers <span class="arrow right"></span>

<a href="#cartesian-axes" class="header-anchor">#</a> Cartesian Axes
====================================================================

Axes that follow a cartesian grid are known as 'Cartesian Axes'. Cartesian axes are used for line, bar, and bubble charts. Four cartesian axes are included in Chart.js by default.

-   [linear](/docs/3.2.0/axes/cartesian/linear.html)
-   [logarithmic](/docs/3.2.0/axes/cartesian/logarithmic.html)
-   [category](/docs/3.2.0/axes/cartesian/category.html)
-   [time](/docs/3.2.0/axes/cartesian/time.html)
-   [timeseries](/docs/3.2.0/axes/cartesian/timeseries.html)

<a href="#visual-components" class="header-anchor">#</a> Visual Components
--------------------------------------------------------------------------

A cartesian axis is composed of visual components that can be individually configured. These components are:

-   [border](#border)
-   [grid lines](#grid-lines)
-   [tick](#ticks-and-tick-marks)
-   [tick mark](#ticks-and-tick-marks)
-   [title](#title)

### <a href="#border" class="header-anchor">#</a> Border

The axis border is drawn at the edge of the axis, beside the chart area. In the image below, it is drawn in red.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/axes/cartesian/index.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data, options: { scales: { x: { grid: { borderColor: 'red' } } } } };

    const config = {
      type: 'line',
      data,
      options: {
        scales: {
          x: {
            grid: {
              borderColor: 'red'
            }
          }
        }
      }
    };

const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[{ label: 'My First dataset', backgroundColor: 'rgba(54, 162, 235, 0.5)', borderColor: 'rgb(54, 162, 235)', borderWidth: 1, data: \[10, 20, 30, 40, 50, 0, 5\], }\] };

    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        data: [10, 20, 30, 40, 50, 0, 5],
      }]
    };

### <a href="#grid-lines" class="header-anchor">#</a> Grid lines

The grid lines for an axis are drawn on the chart area. In the image below, they are red.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/axes/cartesian/index.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data, options: { scales: { x: { grid: { color: 'red', borderColor: 'grey', tickColor: 'grey' } } } } };

    const config = {
      type: 'line',
      data,
      options: {
        scales: {
          x: {
            grid: {
              color: 'red',
              borderColor: 'grey',
              tickColor: 'grey'
            }
          }
        }
      }
    };

const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[{ label: 'My First dataset', backgroundColor: 'rgba(54, 162, 235, 0.5)', borderColor: 'rgb(54, 162, 235)', borderWidth: 1, data: \[10, 20, 30, 40, 50, 0, 5\], }\] };

    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        data: [10, 20, 30, 40, 50, 0, 5],
      }]
    };

### <a href="#ticks-and-tick-marks" class="header-anchor">#</a> Ticks and Tick Marks

Ticks represent data values on the axis that appear as labels. The tick mark is the extension of the grid line from the axis border to the label. In this example, the tick mark is drawn in red while the tick label is drawn in blue.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/axes/cartesian/index.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data, options: { scales: { x: { grid: { tickColor: 'red' }, ticks: { color: 'blue', } } } } };

    const config = {
      type: 'line',
      data,
      options: {
        scales: {
          x: {
            grid: {
              tickColor: 'red'
            },
            ticks: {
              color: 'blue',
            }
          }
        }
      }
    };

const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[{ label: 'My First dataset', backgroundColor: 'rgba(54, 162, 235, 0.5)', borderColor: 'rgb(54, 162, 235)', borderWidth: 1, data: \[10, 20, 30, 40, 50, 0, 5\], }\] };

    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        data: [10, 20, 30, 40, 50, 0, 5],
      }]
    };

### <a href="#title" class="header-anchor">#</a> Title

The title component of the axis is used to label the data. In the example below, it is shown in red.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/axes/cartesian/index.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data, options: { scales: { x: { title: { color: 'red', display: true, text: 'Month' } } } } };

    const config = {
      type: 'line',
      data,
      options: {
        scales: {
          x: {
            title: {
              color: 'red',
              display: true,
              text: 'Month'
            }
          }
        }
      }
    };

const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[{ label: 'My First dataset', backgroundColor: 'rgba(54, 162, 235, 0.5)', borderColor: 'rgb(54, 162, 235)', borderWidth: 1, data: \[10, 20, 30, 40, 50, 0, 5\], }\] };

    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        data: [10, 20, 30, 40, 50, 0, 5],
      }]
    };

<a href="#common-configuration" class="header-anchor">#</a> Common Configuration
--------------------------------------------------------------------------------

### <a href="#common-options-to-all-cartesian-axes" class="header-anchor">#</a> Common options to all cartesian axes

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>bounds</code></td><td><code>string</code></td><td><code>'ticks'</code></td><td>Determines the scale bounds. <a href="/docs/3.2.0/axes/cartesian/#scale-bounds">more...</a></td></tr><tr class="even"><td><code>position</code></td><td><code>string</code></td><td></td><td>Position of the axis. <a href="/docs/3.2.0/axes/cartesian/#axis-position">more...</a></td></tr><tr class="odd"><td><code>axis</code></td><td><code>string</code></td><td></td><td>Which type of axis this is. Possible values are: <code>'x'</code>, <code>'y'</code>. If not set, this is inferred from the first character of the ID which should be <code>'x'</code> or <code>'y'</code>.</td></tr><tr class="even"><td><code>offset</code></td><td><code>boolean</code></td><td><code>false</code></td><td>If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to <code>true</code> for a bar chart by default.</td></tr><tr class="odd"><td><code>title</code></td><td><code>object</code></td><td></td><td>Scale title configuration. <a href="/docs/3.2.0/axes/labelling.html#scale-title-configuration">more...</a></td></tr></tbody></table>

### <a href="#common-options-to-all-axes" class="header-anchor">#</a> Common options to all axes

Namespace: `options.scales[scaleId]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>type</code></td><td><code>string</code></td><td></td><td>Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.</td></tr><tr class="even"><td><code>alignToPixels</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Align pixel values to device pixels.</td></tr><tr class="odd"><td><code>backgroundColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td></td><td>Background color of the scale area.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code>|<code>string</code></td><td><code>true</code></td><td>Controls the axis global visibility (visible when <code>true</code>, hidden when <code>false</code>). When <code>display: 'auto'</code>, the axis is visible only if at least one associated dataset is visible.</td></tr><tr class="odd"><td><code>grid</code></td><td><code>object</code></td><td></td><td>Grid line configuration. <a href="/docs/3.2.0/axes/styling.html#grid-line-configuration">more...</a></td></tr><tr class="even"><td><code>min</code></td><td><code>number</code></td><td></td><td>User defined minimum number for the scale, overrides minimum value from data. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="odd"><td><code>max</code></td><td><code>number</code></td><td></td><td>User defined maximum number for the scale, overrides maximum value from data. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="even"><td><code>reverse</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Reverse the scale.</td></tr><tr class="odd"><td><code>stacked</code></td><td><code>boolean</code>|<code>string</code></td><td><code>false</code></td><td>Should the data be stacked. <a href="/docs/3.2.0/axes/#stacking">more...</a></td></tr><tr class="even"><td><code>suggestedMax</code></td><td><code>number</code></td><td></td><td>Adjustment used when calculating the maximum data value. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="odd"><td><code>suggestedMin</code></td><td><code>number</code></td><td></td><td>Adjustment used when calculating the minimum data value. <a href="/docs/3.2.0/axes/#axis-range-settings">more...</a></td></tr><tr class="even"><td><code>ticks</code></td><td><code>object</code></td><td></td><td>Tick configuration. <a href="/docs/3.2.0/axes/#tick-configuration">more...</a></td></tr><tr class="odd"><td><code>weight</code></td><td><code>number</code></td><td><code>0</code></td><td>The weight used to sort the axis. Higher weights are further away from the chart area.</td></tr></tbody></table>

### <a href="#axis-position" class="header-anchor">#</a> Axis Position

An axis can either be positioned at the edge of the chart, at the center of the chart area, or dynamically with respect to a data value.

To position the axis at the edge of the chart, set the `position` option to one of: `'top'`, `'left'`, `'bottom'`, `'right'`. To position the axis at the center of the chart area, set the `position` option to `'center'`. In this mode, either the `axis` option is specified or the axis ID starts with the letter 'x' or 'y'. To position the axis with respect to a data value, set the `position` option to an object such as:

    {
        x: -20
    }

This will position the axis at a value of -20 on the axis with ID "x". For cartesian axes, only 1 axis may be specified.

### <a href="#scale-bounds" class="header-anchor">#</a> Scale Bounds

The `bounds` property controls the scale boundary strategy (bypassed by `min`/`max` options).

-   `'data'`: makes sure data are fully visible, labels outside are removed
-   `'ticks'`: makes sure ticks are fully visible, data outside are truncated

### <a href="#tick-configuration" class="header-anchor">#</a> Tick Configuration

### <a href="#common-tick-options-to-all-cartesian-axes" class="header-anchor">#</a> Common tick options to all cartesian axes

Namespace: `options.scales[scaleId].ticks`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>align</code></td><td><code>string</code></td><td><code>'center'</code></td><td>The tick alignment along the axis. Can be <code>'start'</code>, <code>'center'</code>, or <code>'end'</code>.</td></tr><tr class="even"><td><code>crossAlign</code></td><td><code>string</code></td><td><code>'near'</code></td><td>The tick alignment perpendicular to the axis. Can be <code>'near'</code>, <code>'center'</code>, or <code>'far'</code>. See <a href="/docs/3.2.0/axes/cartesian/#tick-alignment">Tick Alignment</a></td></tr><tr class="odd"><td><code>sampleSize</code></td><td><code>number</code></td><td><code>ticks.length</code></td><td>The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.</td></tr><tr class="even"><td><code>autoSkip</code></td><td><code>boolean</code></td><td><code>true</code></td><td>If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to <code>maxRotation</code> before skipping any. Turn <code>autoSkip</code> off to show all labels no matter what.</td></tr><tr class="odd"><td><code>autoSkipPadding</code></td><td><code>number</code></td><td><code>3</code></td><td>Padding between the ticks on the horizontal axis when <code>autoSkip</code> is enabled.</td></tr><tr class="even"><td><code>labelOffset</code></td><td><code>number</code></td><td><code>0</code></td><td>Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis). <em>Note: this can cause labels at the edges to be cropped by the edge of the canvas</em></td></tr><tr class="odd"><td><code>maxRotation</code></td><td><code>number</code></td><td><code>50</code></td><td>Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. <em>Note: Only applicable to horizontal scales.</em></td></tr><tr class="even"><td><code>minRotation</code></td><td><code>number</code></td><td><code>0</code></td><td>Minimum rotation for tick labels. <em>Note: Only applicable to horizontal scales.</em></td></tr><tr class="odd"><td><code>mirror</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Flips tick labels around axis, displaying the labels inside the chart instead of outside. <em>Note: Only applicable to vertical scales.</em></td></tr><tr class="even"><td><code>padding</code></td><td><code>number</code></td><td><code>0</code></td><td>Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.</td></tr></tbody></table>

### <a href="#common-tick-options-to-all-axes" class="header-anchor">#</a> Common tick options to all axes

Namespace: `options.scales[scaleId].ticks`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th style="text-align: center;">Scriptable</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>backdropColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td><code>'rgba(255, 255, 255, 0.75)'</code></td><td>Color of label backdrops.</td></tr><tr class="even"><td><code>backdropPadding</code></td><td><a href="/docs/3.2.0/general/padding.html"><code>Padding</code></a></td><td style="text-align: center;">Yes</td><td><code>2</code></td><td>Padding of label backdrop.</td></tr><tr class="odd"><td><code>callback</code></td><td><code>function</code></td><td style="text-align: center;"></td><td></td><td>Returns the string representation of the tick value as it should be displayed on the chart. See <a href="/docs/3.2.0/axes/labelling.html#creating-custom-tick-formats">callback</a>.</td></tr><tr class="even"><td><code>display</code></td><td><code>boolean</code></td><td style="text-align: center;"></td><td><code>true</code></td><td>If true, show tick labels.</td></tr><tr class="odd"><td><code>color</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td><code>Chart.defaults.color</code></td><td>Color of ticks.</td></tr><tr class="even"><td><code>font</code></td><td><code>Font</code></td><td style="text-align: center;">Yes</td><td><code>Chart.defaults.font</code></td><td>See <a href="/docs/3.2.0/general/fonts.html">Fonts</a></td></tr><tr class="odd"><td><code>major</code></td><td><code>object</code></td><td style="text-align: center;"></td><td><code>{}</code></td><td><a href="/docs/3.2.0/axes/styling.html#major-tick-configuration">Major ticks configuration</a>.</td></tr><tr class="even"><td><code>padding</code></td><td><code>number</code></td><td style="text-align: center;"></td><td><code>3</code></td><td>Sets the offset of the tick labels from the axis</td></tr><tr class="odd"><td><code>showLabelBackdrop</code></td><td><code>boolean</code></td><td style="text-align: center;">Yes</td><td><code>true</code> for radial scale, <code>false</code> otherwise</td><td>If true, draw a background behind the tick labels.</td></tr><tr class="even"><td><code>textStrokeColor</code></td><td><a href="/docs/3.2.0/general/colors.html"><code>Color</code></a></td><td style="text-align: center;">Yes</td><td>``</td><td>The color of the stroke around the text.</td></tr><tr class="odd"><td><code>textStrokeWidth</code></td><td><code>number</code></td><td style="text-align: center;">Yes</td><td><code>0</code></td><td>Stroke width around the text.</td></tr><tr class="even"><td><code>z</code></td><td><code>number</code></td><td style="text-align: center;"></td><td><code>0</code></td><td>z-index of tick layer. Useful when ticks are drawn on chart area. Values &lt;= 0 are drawn under datasets, &gt; 0 on top.</td></tr></tbody></table>

### <a href="#tick-alignment" class="header-anchor">#</a> Tick Alignment

The alignment of ticks is primarily controlled using two settings on the tick configuration object: `align` and `crossAlign`. The `align` setting configures how labels align with the tick mark along the axis direction (i.e. horizontal for a horizontal axis and vertical for a vertical axis). The `crossAlign` setting configures how labels align with the tick mark in the perpendicular direction (i.e. vertical for a horizontal axis and horizontal for a vertical axis). In the example below, the `crossAlign` setting is used to left align the labels on the Y axis.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/axes/cartesian/index.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'bar', data, options: { indexAxis: 'y', scales: { y: { ticks: { crossAlign: 'far', } } } } };

    const config = {
      type: 'bar',
      data,
      options: {
        indexAxis: 'y',
        scales: {
          y: {
            ticks: {
              crossAlign: 'far',
            }
          }
        }
      }
    };

const labels = Utils.months({count: 7}); const data = { labels: labels, datasets: \[{ label: 'My First dataset', backgroundColor: \[ 'rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(201, 203, 207, 0.2)' \], borderColor: \[ 'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)' \], borderWidth: 1, data: \[65, 59, 80, 81, 56, 55, 40\], }\] };

    const labels = Utils.months({count: 7});
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
      }]
    };

Note

The `crossAlign` setting is only effective when these preconditions are met:

-   tick rotation is `0`
-   axis position is `'top'`, '`left'`, `'bottom'` or `'right'`

### <a href="#axis-id" class="header-anchor">#</a> Axis ID

The properties `dataset.xAxisID` or `dataset.yAxisID` have to match to `scales` property. This is especially needed if multi-axes charts are used.

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                // This dataset appears on the first axis
                yAxisID: 'first-y-axis'
            }, {
                // This dataset appears on the second axis
                yAxisID: 'second-y-axis'
            }]
        },
        options: {
            scales: {
                'first-y-axis': {
                    type: 'linear'
                },
                'second-y-axis': {
                    type: 'linear'
                }]
            }
        }
    });

<a href="#creating-multiple-axes" class="header-anchor">#</a> Creating Multiple Axes
------------------------------------------------------------------------------------

With cartesian axes, it is possible to create multiple X and Y axes. To do so, you can add multiple configuration objects to the `xAxes` and `yAxes` properties. When adding new axes, it is important to ensure that you specify the type of the new axes as default types are **not** used in this case.

In the example below, we are creating two Y axes. We then use the `yAxisID` property to map the datasets to their correct axes.

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data: [20, 50, 100, 75, 25, 0],
                label: 'Left dataset',
                // This binds the dataset to the left y axis
                yAxisID: 'left-y-axis'
            }, {
                data: [0.1, 0.5, 1.0, 2.0, 1.5, 0],
                label: 'Right dataset',
                // This binds the dataset to the right y axis
                yAxisID: 'right-y-axis'
            }],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        options: {
            scales: {
                'left-y-axis': {
                    type: 'linear',
                    position: 'left'
                },
                'right-y-axis': {
                    type: 'linear',
                    position: 'right'
                }]
            }
        }
    });

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/axes/" class="prev router-link-active">Axes</a> </span> <span class="next"> [Category Axis](/docs/3.2.0/axes/cartesian/category.html) → </span>
