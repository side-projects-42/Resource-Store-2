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
    -   <a href="/docs/3.2.0/developers/api.html" class="sidebar-link">API</a>
    -   <a href="/docs/3.2.0/api/" class="sidebar-link">TypeDoc</a>
    -   <a href="/docs/3.2.0/developers/updates.html" class="sidebar-link">Updating Charts</a>
    -   <a href="/docs/3.2.0/developers/plugins.html" class="active sidebar-link">Plugins</a>
    -   <a href="/docs/3.2.0/developers/charts.html" class="sidebar-link">New Charts</a>
    -   <a href="/docs/3.2.0/developers/axes.html" class="sidebar-link">New Axes</a>
    -   <a href="/docs/3.2.0/developers/contributing.html" class="sidebar-link">Contributing</a>
    -   <a href="/docs/3.2.0/developers/publishing.html" class="sidebar-link">Publishing an extension</a>

<a href="#plugins" class="header-anchor">#</a> Plugins
======================================================

Plugins are the most efficient way to customize or change the default behavior of a chart. They have been introduced at [version 2.1.0 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/releases/tag/2.1.0) (global plugins only) and extended at [version 2.5.0 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/releases/tag/v2.5.0) (per chart plugins and options).

<a href="#using-plugins" class="header-anchor">#</a> Using plugins
------------------------------------------------------------------

Plugins can be shared between chart instances:

    var plugin = { /* plugin implementation */ };
    // chart1 and chart2 use "plugin"
    var chart1 = new Chart(ctx, {
        plugins: [plugin]
    });
    var chart2 = new Chart(ctx, {
        plugins: [plugin]
    });
    // chart3 doesn't use "plugin"
    var chart3 = new Chart(ctx, {});

Plugins can also be defined directly in the chart `plugins` config (a.k.a. *inline plugins*):

WARNING

*inline* plugins are not registered. Some plugins require registering, i.e. can't be used *inline*.

    var chart = new Chart(ctx, {
        plugins: [{
            beforeInit: function(chart, args, options) {
                //..
            }
        }]
    });

However, this approach is not ideal when the customization needs to apply to many charts.

<a href="#global-plugins" class="header-anchor">#</a> Global plugins
--------------------------------------------------------------------

Plugins can be registered globally to be applied on all charts (a.k.a. *global plugins*):

    Chart.register({
        // plugin implementation
    });

WARNING

*inline* plugins can't be registered globally.

<a href="#configuration" class="header-anchor">#</a> Configuration
------------------------------------------------------------------

### <a href="#plugin-id" class="header-anchor">#</a> Plugin ID

Plugins must define a unique id in order to be configurable.

This id should follow the [npm package name convention <span class="sr-only">(opens new window)</span>](https://docs.npmjs.com/files/package.json#name):

-   can't start with a dot or an underscore
-   can't contain any non-URL-safe characters
-   can't contain uppercase letters
-   should be something short, but also reasonably descriptive

If a plugin is intended to be released publicly, you may want to check the [registry <span class="sr-only">(opens new window)</span>](https://www.npmjs.com/search?q=chartjs-plugin-) to see if there's something by that name already. Note that in this case, the package name should be prefixed by `chartjs-plugin-` to appear in Chart.js plugin registry.

### <a href="#plugin-options" class="header-anchor">#</a> Plugin options

Plugin options are located under the `options.plugins` config and are scoped by the plugin ID: `options.plugins.{plugin-id}`.

    var chart = new Chart(ctx, {
        options: {
            foo: { ... },           // chart 'foo' option
            plugins: {
                p1: {
                    foo: { ... },   // p1 plugin 'foo' option
                    bar: { ... }
                },
                p2: {
                    foo: { ... },   // p2 plugin 'foo' option
                    bla: { ... }
                }
            }
        }
    });

#### <a href="#disable-plugins" class="header-anchor">#</a> Disable plugins

To disable a global plugin for a specific chart instance, the plugin options must be set to `false`:

    Chart.register({
        id: 'p1',
        // ...
    });
    var chart = new Chart(ctx, {
        options: {
            plugins: {
                p1: false   // disable plugin 'p1' for this instance
            }
        }
    });

To disable all plugins for a specific chart instance, set `options.plugins` to `false`:

    var chart = new Chart(ctx, {
        options: {
            plugins: false // all plugins are disabled for this instance
        }
    });

<a href="#plugin-core-api" class="header-anchor">#</a> Plugin Core API
----------------------------------------------------------------------

Read more about the [existing plugin extension hooks](../api/interfaces/plugin).

### <a href="#chart-initialization" class="header-anchor">#</a> Chart Initialization

Plugins are notified during the initialization process. These hooks can be used to setup data needed for the plugin to operate.

![Chart.js init flowchart](/docs/3.2.0/assets/img/init_flowchart.6fe3a3b2.png)

### <a href="#chart-update" class="header-anchor">#</a> Chart Update

Plugins are notified during throughout the update process.

![Chart.js update flowchart](/docs/3.2.0/assets/img/update_flowchart.0556691d.png)

### <a href="#rendering" class="header-anchor">#</a> Rendering

Plugins can interact with the chart throughout the render process. The rendering process is documented in the flowchart below. Each of the green processes is a plugin notification. The red lines indicate how cancelling part of the render process can occur when a plugin returns `false` from a hook. Not all hooks are cancelable, however, in general most `before*` hooks can be cancelled.

![Chart.js render pipeline flowchart](/docs/3.2.0/assets/img/render_flowchart.64fdd67d.png)

### <a href="#event-handling" class="header-anchor">#</a> Event Handling

Plugins can interact with the chart during the event handling process. The event handling flow is documented in the flowchart below. Each of the green processes is a plugin notification. If a plugin makes changes that require a re-render, the plugin can set `args.changed` to `true` to indicate that a render is needed. The built-in tooltip plugin uses this method to indicate when the tooltip has changed.

![Chart.js event handling flowchart](/docs/3.2.0/assets/img/event_flowchart.83015c7a.png)

<span class="prefix">Last Updated:</span> <span class="time">4/24/2021, 8:12:18 PM</span>

<span class="prev"> ← <a href="/docs/3.2.0/developers/updates.html" class="prev">Updating Charts</a> </span> <span class="next"> [New Charts](/docs/3.2.0/developers/charts.html) → </span>
