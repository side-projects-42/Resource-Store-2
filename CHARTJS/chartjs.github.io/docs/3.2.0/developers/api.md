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

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/developers/" class="sidebar-link">Developers</a>
    -   <a href="/docs/3.2.0/developers/api.html" class="active sidebar-link">API</a>
    -   <a href="/docs/3.2.0/api/" class="sidebar-link">TypeDoc</a>
    -   <a href="/docs/3.2.0/developers/updates.html" class="sidebar-link">Updating Charts</a>
    -   <a href="/docs/3.2.0/developers/plugins.html" class="sidebar-link">Plugins</a>
    -   <a href="/docs/3.2.0/developers/charts.html" class="sidebar-link">New Charts</a>
    -   <a href="/docs/3.2.0/developers/axes.html" class="sidebar-link">New Axes</a>
    -   <a href="/docs/3.2.0/developers/contributing.html" class="sidebar-link">Contributing</a>
    -   <a href="/docs/3.2.0/developers/publishing.html" class="sidebar-link">Publishing an extension</a>

<a href="#api" class="header-anchor">#</a> API
==============================================

For each chart, there are a set of global prototype methods on the shared chart type which you may find useful. These are available on all charts created with Chart.js, but for the examples, let's use a line chart we've made.

    // For example:
    var myLineChart = new Chart(ctx, config);

<a href="#destroy" class="header-anchor">#</a> .destroy()
---------------------------------------------------------

Use this to destroy any chart instances that are created. This will clean up any references stored to the chart object within Chart.js, along with any associated event listeners attached by Chart.js. This must be called before the canvas is reused for a new chart.

    // Destroys a specific chart instance
    myLineChart.destroy();

<a href="#update-mode" class="header-anchor">#</a> .update(mode?)
-----------------------------------------------------------------

Triggers an update of the chart. This can be safely called after updating the data object. This will update all scales, legends, and then re-render the chart.

    myLineChart.data.datasets[0].data[2] = 50; // Would update the first dataset's value of 'March' to be 50
    myLineChart.update(); // Calling update now animates the position of March from 90 to 50.

A `mode` string can be provided to indicate transition configuration should be used. Core calls this method using any of `'active'`, `'hide'`, `'reset'`, `'resize'`, `'show'` or `undefined`. `'none'` is also a supported mode for skipping animations for single update. Please see [animations](/docs/3.2.0/configuration/animations.html) docs for more details.

Example:

    myChart.update('active');

See [Updating Charts](/docs/3.2.0/developers/updates.html) for more details.

<a href="#reset" class="header-anchor">#</a> .reset()
-----------------------------------------------------

Reset the chart to its state before the initial animation. A new animation can then be triggered using `update`.

    myLineChart.reset();

<a href="#render" class="header-anchor">#</a> .render()
-------------------------------------------------------

Triggers a redraw of all chart elements. Note, this does not update elements for new data. Use `.update()` in that case.

<a href="#stop" class="header-anchor">#</a> .stop()
---------------------------------------------------

Use this to stop any current animation. This will pause the chart during any current animation frame. Call `.render()` to re-animate.

    // Stops the charts animation loop at its current frame
    myLineChart.stop();
    // => returns 'this' for chainability

<a href="#resize-width-height" class="header-anchor">#</a> .resize(width?, height?)
-----------------------------------------------------------------------------------

Use this to manually resize the canvas element. This is run each time the canvas container is resized, but you can call this method manually if you change the size of the canvas nodes container element.

You can call `.resize()` with no parameters to have the chart take the size of its container element, or you can pass explicit dimensions (e.g., for [printing](/docs/3.2.0/configuration/responsive.html#printing-resizable-charts)).

    // Resizes & redraws to fill its container element
    myLineChart.resize();
    // => returns 'this' for chainability
    // With an explicit size:
    myLineChart.resize(width, height);

<a href="#clear" class="header-anchor">#</a> .clear()
-----------------------------------------------------

Will clear the chart canvas. Used extensively internally between animation frames, but you might find it useful.

    // Will clear the canvas that myLineChart is drawn on
    myLineChart.clear();
    // => returns 'this' for chainability

<a href="#tobase64image-type-quality" class="header-anchor">#</a> .toBase64Image(type?, quality?)
-------------------------------------------------------------------------------------------------

This returns a base 64 encoded string of the chart in its current state.

    myLineChart.toBase64Image();
    // => returns png data url of the image on the canvas
    myLineChart.toBase64Image('image/jpeg', 1)
    // => returns a jpeg data url in the highest quality of the canvas

<a href="#getelementsateventformode-e-mode-options-usefinalposition" class="header-anchor">#</a> .getElementsAtEventForMode(e, mode, options, useFinalPosition)
---------------------------------------------------------------------------------------------------------------------------------------------------------------

Calling `getElementsAtEventForMode(e, mode, options, useFinalPosition)` on your Chart instance passing an event and a mode will return the elements that are found. The `options` and `useFinalPosition` arguments are passed through to the handlers.

To get an item that was clicked on, `getElementsAtEventForMode` can be used.

    function clickHandler(evt) {
        const points = myChart.getElementAtEventForMode(evt, 'nearest', { intersect: true }, true);
        if (points.length) {
            const firstPoint = points[0];
            var label = myChart.data.labels[firstPoint.index];
            var value = myChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
        }
    }

<a href="#getdatasetmeta-index" class="header-anchor">#</a> .getDatasetMeta(index)
----------------------------------------------------------------------------------

Looks for the dataset that matches the current index and returns that metadata. This returned data has all of the metadata that is used to construct the chart.

The `data` property of the metadata will contain information about each point, bar, etc. depending on the chart type.

Extensive examples of usage are available in the [Chart.js tests <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/tree/master/test).

    var meta = myChart.getDatasetMeta(0);
    var x = meta.data[0].x;

<a href="#setdatasetvisibility-datasetindex-visibility" class="header-anchor">#</a> setDatasetVisibility(datasetIndex, visibility)
----------------------------------------------------------------------------------------------------------------------------------

Sets the visibility for a given dataset. This can be used to build a chart legend in HTML. During click on one of the HTML items, you can call `setDatasetVisibility` to change the appropriate dataset.

    chart.setDatasetVisibility(1, false); // hides dataset at index 1
    chart.update(); // chart now renders with dataset hidden

<a href="#toggledatavisibility-index" class="header-anchor">#</a> toggleDataVisibility(index)
---------------------------------------------------------------------------------------------

Toggles the visibility of an item in all datasets. A dataset needs to explicitly support this feature for it to have an effect. From internal chart types, doughnut / pie, polar area, and bar use this.

    chart.toggleDataVisibility(2); // toggles the item in all datasets, at index 2
    chart.update(); // chart now renders with item hidden

<a href="#getdatavisibility-index" class="header-anchor">#</a> getDataVisibility(index)
---------------------------------------------------------------------------------------

Returns the stored visibility state of an data index for all datasets. Set by [toggleDataVisibility](#toggleDataVisibility). A dataset controller should use this method to determine if an item should not be visible.

    var visible = chart.getDataVisibility(2);

<a href="#hide-datasetindex" class="header-anchor">#</a> hide(datasetIndex)
---------------------------------------------------------------------------

Sets the visibility for the given dataset to false. Updates the chart and animates the dataset with `'hide'` mode. This animation can be configured under the `hide` key in animation options. Please see [animations](/docs/3.2.0/configuration/animations.html) docs for more details.

    chart.hide(1); // hides dataset at index 1 and does 'hide' animation.

<a href="#show-datasetindex" class="header-anchor">#</a> show(datasetIndex)
---------------------------------------------------------------------------

Sets the visibility for the given dataset to true. Updates the chart and animates the dataset with `'show'` mode. This animation can be configured under the `show` key in animation options. Please see [animations](/docs/3.2.0/configuration/animations.html) docs for more details.

    chart.show(1); // shows dataset at index 1 and does 'show' animation.

<a href="#setactiveelements-activeelements" class="header-anchor">#</a> setActiveElements(activeElements)
---------------------------------------------------------------------------------------------------------

Sets the active (hovered) elements for the chart. See the "Programmatic Events" sample file to see this in action.

    chart.setActiveElements([
        {datasetIndex: 0, index: 1},
    ]);

<a href="#static-getchart-key" class="header-anchor">#</a> Static: getChart(key)
--------------------------------------------------------------------------------

Finds the chart instance from the given key. If the key is a `string`, it is interpreted as the ID of the Canvas node for the Chart. The key can also be a `CanvasRenderingContext2D` or an `HTMLDOMElement`. This will return `undefined` if no Chart is found. To be found, the chart must have previously been created.

    const chart = Chart.getChart("canvas-id");

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/developers/" class="prev router-link-active">Developers</a> </span> <span class="next"> [TypeDoc](/docs/3.2.0/api/) → </span>
