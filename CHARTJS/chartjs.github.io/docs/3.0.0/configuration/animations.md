<a href="/docs/3.0.0/" class="home-link router-link-active"><img src="/docs/3.0.0/favicon.ico" alt="Chart.js" class="logo" /> <span class="site-name can-hide">Chart.js</span></a>

<a href="/docs/3.0.0/" class="nav-link">Home</a>

<a href="/docs/3.0.0/api/" class="nav-link">API</a>

<a href="/docs/3.0.0/samples/" class="nav-link">Samples</a>

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

<a href="/docs/3.0.0/" class="nav-link">Home</a>

<a href="/docs/3.0.0/api/" class="nav-link">API</a>

<a href="/docs/3.0.0/samples/" class="nav-link">Samples</a>

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

-   <a href="/docs/3.0.0/" class="sidebar-link">Chart.js</a>
-   Getting Started <span class="arrow right"></span>

-   General <span class="arrow right"></span>

-   Configuration <span class="arrow down"></span>

    -   <a href="/docs/3.0.0/configuration/" class="sidebar-link">Configuration</a>
    -   <a href="/docs/3.0.0/configuration/responsive.html" class="sidebar-link">Responsive Charts</a>
    -   <a href="/docs/3.0.0/configuration/device-pixel-ratio.html" class="sidebar-link">Device Pixel Ratio</a>
    -   <a href="/docs/3.0.0/configuration/locale.html" class="sidebar-link">Locale</a>
    -   <a href="/docs/3.0.0/configuration/interactions.html" class="sidebar-link">Interactions</a>
    -   <a href="/docs/3.0.0/configuration/canvas-background.html" class="sidebar-link">Canvas background</a>
    -   <a href="/docs/3.0.0/configuration/animations.html" class="active sidebar-link">Animations</a>
    -   <a href="/docs/3.0.0/configuration/layout.html" class="sidebar-link">Layout</a>
    -   <a href="/docs/3.0.0/configuration/legend.html" class="sidebar-link">Legend</a>
    -   <a href="/docs/3.0.0/configuration/title.html" class="sidebar-link">Title</a>
    -   <a href="/docs/3.0.0/configuration/tooltip.html" class="sidebar-link">Tooltip</a>
    -   <a href="/docs/3.0.0/configuration/elements.html" class="sidebar-link">Elements</a>
    -   <a href="/docs/3.0.0/configuration/decimation.html" class="sidebar-link">Data Decimation</a>

-   Chart Types <span class="arrow right"></span>

-   Axes <span class="arrow right"></span>

-   Developers <span class="arrow right"></span>

<a href="#animations" class="header-anchor">#</a> Animations
============================================================

Chart.js animates charts out of the box. A number of options are provided to configure how the animation looks and how long it takes.

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/configuration/animations.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { animations: { tension: { duration: 1000, easing: 'linear', from: 1, to: 0, loop: true } }, scales: { y: { // defining min and max so hiding the dataset does not change scale range min: 0, max: 100 } } } };

    const config = {
      type: 'line',
      data: data,
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: { // defining min and max so hiding the dataset does not change scale range
            min: 0,
            max: 100
          }
        }
      }
    };

const data = { labels: \['January', 'February', 'March', 'April', 'May', 'June', 'July'\], datasets: \[{ label: 'Looping tension', data: \[65, 59, 80, 81, 26, 55, 40\], fill: false, borderColor: 'rgb(75, 192, 192)', }\] };

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Looping tension',
        data: [65, 59, 80, 81, 26, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      }]
    };

config

setup

<a href="https://github.com/chartjs/Chart.js/blob/master/docs/configuration/animations.md" class="code-editor-tool fab fa-github fa-lg" title="View on GitHub"></a>

const config = { type: 'line', data: data, options: { transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } } } };

    const config = {
      type: 'line',
      data: data,
      options: {
        transitions: {
          show: {
            animations: {
              x: {
                from: 0
              },
              y: {
                from: 0
              }
            }
          },
          hide: {
            animations: {
              x: {
                to: 0
              },
              y: {
                to: 0
              }
            }
          }
        }
      }
    };

const data = { labels: \['January', 'February', 'March', 'April', 'May', 'June', 'July'\], datasets: \[{ label: 'Try hiding me', data: \[65, 59, 80, 81, 26, 55, 40\], fill: false, borderColor: 'rgb(75, 192, 192)', }\] };

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Try hiding me',
        data: [65, 59, 80, 81, 26, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      }]
    };

<a href="#animation-configuration" class="header-anchor">#</a> Animation configuration
--------------------------------------------------------------------------------------

Animation configuration consists of 3 keys.

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Details</th></tr></thead><tbody><tr class="odd"><td>animation</td><td><code>object</code></td><td><a href="#animation">animation</a></td></tr><tr class="even"><td>animations</td><td><code>object</code></td><td><a href="#animations">animations</a></td></tr><tr class="odd"><td>transitions</td><td><code>object</code></td><td><a href="#transitions">transitions</a></td></tr></tbody></table>

These keys can be configured in following paths:

-   \`\` - chart options
-   `datasets[type]` - dataset type options
-   `overrides[type]` - chart type options

These paths are valid under `defaults` for global confuguration and `options` for instance configuration.

<a href="#animation" class="header-anchor">#</a> animation
----------------------------------------------------------

The default configuration is defined here: [core.animations.js](https://github.com/chartjs/Chart.js/blob/master/src/core/core.animations.js)

Namespace: `options.animation`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>duration</code></td><td><code>number</code></td><td><code>1000</code></td><td>The number of milliseconds an animation takes.</td></tr><tr class="even"><td><code>easing</code></td><td><code>string</code></td><td><code>'easeOutQuart'</code></td><td>Easing function to use. <a href="#easing">more...</a></td></tr><tr class="odd"><td><code>delay</code></td><td><code>number</code></td><td><code>undefined</code></td><td>Delay before starting the animations.</td></tr><tr class="even"><td><code>loop</code></td><td><code>boolean</code></td><td><code>undefined</code></td><td>If set to <code>true</code>, the animations loop endlessly.</td></tr></tbody></table>

These defaults can be overridden in `options.animation` or `dataset.animation` and `tooltip.animation`. These keys are also [Scriptable](/docs/3.0.0/general/options.html#scriptable-options).

<a href="#animations-2" class="header-anchor">#</a> animations
--------------------------------------------------------------

Animations options configures which element properties are animated and how. In addition to the main [animation configuration](#animation-configuration), the following options are available:

Namespace: `options.animations[animation]`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>properties</code></td><td><code>string[]</code></td><td><code>key</code></td><td>The property names this configuration applies to. Defaults to the key name of this object.</td></tr><tr class="even"><td><code>type</code></td><td><code>string</code></td><td><code>typeof property</code></td><td>Type of property, determines the interpolator used. Possible values: <code>'number'</code>, <code>'color'</code> and <code>'boolean'</code>. Only really needed for <code>'color'</code>, because <code>typeof</code> does not get that right.</td></tr><tr class="odd"><td><code>from</code></td><td><code>number</code>|<code>Color</code>|<code>boolean</code></td><td><code>undefined</code></td><td>Start value for the animation. Current value is used when <code>undefined</code></td></tr><tr class="even"><td><code>to</code></td><td><code>number</code>|<code>Color</code>|<code>boolean</code></td><td><code>undefined</code></td><td>End value for the animation. Updated value is used when <code>undefined</code></td></tr><tr class="odd"><td><code>fn</code></td><td><code>&lt;T&gt;(from: T, to: T, factor: number) =&gt; T;</code></td><td><code>undefined</code></td><td>Optional custom interpolator, instead of using a predefined interpolator from <code>type</code></td></tr></tbody></table>

### <a href="#default-animations" class="header-anchor">#</a> Default animations

<table><thead><tr class="header"><th>Name</th><th>Option</th><th>Value</th></tr></thead><tbody><tr class="odd"><td><code>numbers</code></td><td><code>properties</code></td><td><code>['x', 'y', 'borderWidth', 'radius', 'tension']</code></td></tr><tr class="even"><td><code>numbers</code></td><td><code>type</code></td><td><code>'number'</code></td></tr><tr class="odd"><td><code>colors</code></td><td><code>properties</code></td><td><code>['color', 'borderColor', 'backgroundColor']</code></td></tr><tr class="even"><td><code>colors</code></td><td><code>type</code></td><td><code>'color'</code></td></tr></tbody></table>

Note

These default animations are overridden by most of the dataset controllers.

<a href="#transitions" class="header-anchor">#</a> transitions
--------------------------------------------------------------

The core transitions are `'active'`, `'hide'`, `'reset'`, `'resize'`, `'show'`. A custom transition can be used by passing a custom `mode` to [update](/docs/3.0.0/developers/api.html#updatemode). Transition extends the main [animation configuration](#animation-configuration) and [animations configuration](#animations-configuration).

### <a href="#default-transitions" class="header-anchor">#</a> Default transitions

Namespace: `options.transitions[mode]`

<table><thead><tr class="header"><th>Mode</th><th>Option</th><th>Value</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>'active'</code></td><td>animation.duration</td><td>400</td><td>Override default duration to 400ms for hover animations</td></tr><tr class="even"><td><code>'resize'</code></td><td>animation.duration</td><td>0</td><td>Override default duration to 0ms (= no animation) for resize</td></tr><tr class="odd"><td><code>'show'</code></td><td>animations.colors</td><td><code>{ type: 'color', properties: ['borderColor',                       'backgroundColor'], from: 'transparent' }</code></td><td>Colors are faded in from transparent when dataset is shown using legend / <a href="/docs/3.0.0/developers/api.html#showdatasetIndex">api</a>.</td></tr><tr class="even"><td><code>'show'</code></td><td>animations.visible</td><td><code>{ type: 'boolean', duration: 0 }</code></td><td>Dataset visiblity is immediately changed to true so the color transition from transparent is visible.</td></tr><tr class="odd"><td><code>'hide'</code></td><td>animations.colors</td><td><code>{ type: 'color', properties: ['borderColor',                       'backgroundColor'], to: 'transparent' }</code></td><td>Colors are faded to transparent when dataset id hidden using legend / <a href="/docs/3.0.0/developers/api.html#hidedatasetIndex">api</a>.</td></tr><tr class="even"><td><code>'hide'</code></td><td>animations.visible</td><td><code>{ type: 'boolean', easing: 'easeInExpo' }</code></td><td>Visibility is changed to false at a very late phase of animation</td></tr></tbody></table>

<a href="#disabling-animation" class="header-anchor">#</a> Disabling animation
------------------------------------------------------------------------------

To disable an animation configuration, the animation node must be set to `false`, with the exception for animation modes which can be disabled by setting the `duration` to `0`.

    chart.options.animation = false; // disables all animations
    chart.options.animations.colors = false; // disables animation defined by the collection of 'colors' properties
    chart.options.animations.x = false; // disables animation defined by the 'x' property
    chart.options.transitions.active.animation.duration = 0; // disables the animation for 'active' mode

<a href="#easing" class="header-anchor">#</a> Easing
----------------------------------------------------

Available options are:

-   `'linear'`
-   `'easeInQuad'`
-   `'easeOutQuad'`
-   `'easeInOutQuad'`
-   `'easeInCubic'`
-   `'easeOutCubic'`
-   `'easeInOutCubic'`
-   `'easeInQuart'`
-   `'easeOutQuart'`
-   `'easeInOutQuart'`
-   `'easeInQuint'`
-   `'easeOutQuint'`
-   `'easeInOutQuint'`
-   `'easeInSine'`
-   `'easeOutSine'`
-   `'easeInOutSine'`
-   `'easeInExpo'`
-   `'easeOutExpo'`
-   `'easeInOutExpo'`
-   `'easeInCirc'`
-   `'easeOutCirc'`
-   `'easeInOutCirc'`
-   `'easeInElastic'`
-   `'easeOutElastic'`
-   `'easeInOutElastic'`
-   `'easeInBack'`
-   `'easeOutBack'`
-   `'easeInOutBack'`
-   `'easeInBounce'`
-   `'easeOutBounce'`
-   `'easeInOutBounce'`

See [Robert Penner's easing equations <span class="sr-only">(opens new window)</span>](http://robertpenner.com/easing/).

<a href="#animation-callbacks" class="header-anchor">#</a> Animation Callbacks
------------------------------------------------------------------------------

The animation configuration provides callbacks which are useful for synchronizing an external draw to the chart animation. The callbacks can be set only at main [animation configuration](#animation-configuration).

Namespace: `options.animation`

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>onProgress</code></td><td><code>function</code></td><td><code>null</code></td><td>Callback called on each step of an animation.</td></tr><tr class="even"><td><code>onComplete</code></td><td><code>function</code></td><td><code>null</code></td><td>Callback called when all animations are completed.</td></tr></tbody></table>

The callback is passed the following object:

    {
        // Chart object
        chart: Chart,
        // Number of animations still in progress
        currentStep: number,
        // Total number of animations at the start of current animation
        numSteps: number,
    }

The following example fills a progress bar during the chart animation.

    var chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            animation: {
                onProgress: function(animation) {
                    progress.value = animation.currentStep / animation.numSteps;
                }
            }
        }
    });

Another example usage of these callbacks can be found on [Github <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/master/samples/advanced/progress-bar.html): this sample displays a progress bar showing how far along the animation is.

<span class="prefix">Last Updated:</span> <span class="time">3/30/2021, 6:19:45 PM</span>

<span class="prev"> ← <a href="/docs/3.0.0/configuration/canvas-background.html" class="prev">Canvas background</a> </span> <span class="next"> [Layout](/docs/3.0.0/configuration/layout.html) → </span>
