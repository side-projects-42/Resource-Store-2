<a href="/docs/3.2.0/" class="home-link router-link-active"><img src="/docs/3.2.0/favicon.ico" alt="Chart.js" class="logo" /> <span class="site-name can-hide">Chart.js</span></a>

<a href="/docs/3.2.0/" class="nav-link">Home</a>

<a href="/docs/3.2.0/api/" class="nav-link router-link-active">API</a>

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

<a href="/docs/3.2.0/api/" class="nav-link router-link-active">API</a>

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

-   API <span class="arrow down"></span>

    -   <a href="/docs/3.2.0/api/" class="sidebar-link">Exports</a>
    -   Enumerations <span class="arrow right"></span>

    -   Classes <span class="arrow down"></span>

        -   <a href="/docs/3.2.0/api/classes/animation.html" class="sidebar-link">Animation</a>
        -   <a href="/docs/3.2.0/api/classes/animations.html" class="sidebar-link">Animations</a>
        -   <a href="/docs/3.2.0/api/classes/animator.html" class="sidebar-link">Animator</a>
        -   <a href="/docs/3.2.0/api/classes/baseplatform.html" class="sidebar-link">BasePlatform</a>
        -   <a href="/docs/3.2.0/api/classes/basicplatform.html" class="sidebar-link">BasicPlatform</a>
        -   <a href="/docs/3.2.0/api/classes/chart.html" class="sidebar-link">Chart</a>
        -   <a href="/docs/3.2.0/api/classes/datasetcontroller.html" class="sidebar-link">DatasetController</a>
        -   <a href="/docs/3.2.0/api/classes/domplatform.html" class="active sidebar-link">DomPlatform</a>
        -   <a href="/docs/3.2.0/api/classes/scale.html" class="sidebar-link">Scale</a>

    -   Interfaces <span class="arrow right"></span>

<a href="#class-domplatform" class="header-anchor">#</a> Class: DomPlatform
===========================================================================

<a href="#hierarchy" class="header-anchor">#</a> Hierarchy
----------------------------------------------------------

-   [*BasePlatform*](/docs/3.2.0/api/classes/baseplatform.html)

    ↳ **DomPlatform**

<a href="#constructors" class="header-anchor">#</a> Constructors
----------------------------------------------------------------

### <a href="#constructor" class="header-anchor">#</a> constructor

\+ **new DomPlatform**(): <a href="/docs/3.2.0/api/classes/domplatform.html" class="router-link-exact-active router-link-active"><em>DomPlatform</em></a>

**Returns:** <a href="/docs/3.2.0/api/classes/domplatform.html" class="router-link-exact-active router-link-active"><em>DomPlatform</em></a>

Inherited from: [BasePlatform](/docs/3.2.0/api/classes/baseplatform.html)

<a href="#methods" class="header-anchor">#</a> Methods
------------------------------------------------------

### <a href="#acquirecontext" class="header-anchor">#</a> acquireContext

▸ **acquireContext**(`canvas`: HTMLCanvasElement, `options?`: CanvasRenderingContext2DSettings): CanvasRenderingContext2D

Called at chart construction time, returns a context2d instance implementing the [W3C Canvas 2D Context API standard <span class="sr-only">(opens new window)</span>](https://www.w3.org/TR/2dcontext/).

#### <a href="#parameters" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th><th style="text-align: left;">Description</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>canvas</code></td><td style="text-align: left;">HTMLCanvasElement</td><td style="text-align: left;">The canvas from which to acquire context (platform specific)</td></tr><tr class="even"><td style="text-align: left;"><code>options?</code></td><td style="text-align: left;">CanvasRenderingContext2DSettings</td><td style="text-align: left;">The chart options</td></tr></tbody></table>

**Returns:** CanvasRenderingContext2D

Inherited from: [BasePlatform](/docs/3.2.0/api/classes/baseplatform.html)

Defined in: [index.esm.d.ts:1907 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1907)

------------------------------------------------------------------------

### <a href="#addeventlistener" class="header-anchor">#</a> addEventListener

▸ **addEventListener**(`chart`: [*Chart*](/docs/3.2.0/api/classes/chart.html)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;, `type`: *string*, `listener`: (`e`: [*ChartEvent*](/docs/3.2.0/api/interfaces/chartevent.html)) =&gt; *void*): *void*

Registers the specified listener on the given chart.

#### <a href="#parameters-2" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th><th style="text-align: left;">Description</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chart</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/chart.html"><em>Chart</em></a>&lt;<em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em>, (number | <a href="/docs/3.2.0/api/interfaces/scatterdatapoint.html"><em>ScatterDataPoint</em></a> | <a href="/docs/3.2.0/api/interfaces/bubbledatapoint.html"><em>BubbleDataPoint</em></a>)[], unknown&gt;</td><td style="text-align: left;">Chart from which to listen for event</td></tr><tr class="even"><td style="text-align: left;"><code>type</code></td><td style="text-align: left;"><em>string</em></td><td style="text-align: left;">The (<a href="/docs/3.2.0/api/interfaces/chartevent.html">ChartEvent</a>) type to listen for</td></tr><tr class="odd"><td style="text-align: left;"><code>listener</code></td><td style="text-align: left;">(<code>e</code>: <a href="/docs/3.2.0/api/interfaces/chartevent.html"><em>ChartEvent</em></a>) =&gt; <em>void</em></td><td style="text-align: left;">Receives a notification (an object that implements the <a href="/docs/3.2.0/api/interfaces/chartevent.html">ChartEvent</a> interface) when an event of the specified type occurs.</td></tr></tbody></table>

**Returns:** *void*

Inherited from: [BasePlatform](/docs/3.2.0/api/classes/baseplatform.html)

Defined in: [index.esm.d.ts:1925 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1925)

------------------------------------------------------------------------

### <a href="#getdevicepixelratio" class="header-anchor">#</a> getDevicePixelRatio

▸ **getDevicePixelRatio**(): *number*

**Returns:** *number*

the current devicePixelRatio of the device this platform is connected to.

Inherited from: [BasePlatform](/docs/3.2.0/api/classes/baseplatform.html)

Defined in: [index.esm.d.ts:1936 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1936)

------------------------------------------------------------------------

### <a href="#getmaximumsize" class="header-anchor">#</a> getMaximumSize

▸ **getMaximumSize**(`canvas`: HTMLCanvasElement, `width?`: *number*, `height?`: *number*, `aspectRatio?`: *number*): *object*

#### <a href="#parameters-3" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th><th style="text-align: left;">Description</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>canvas</code></td><td style="text-align: left;">HTMLCanvasElement</td><td style="text-align: left;">The canvas for which to calculate the maximum size</td></tr><tr class="even"><td style="text-align: left;"><code>width?</code></td><td style="text-align: left;"><em>number</em></td><td style="text-align: left;">-</td></tr><tr class="odd"><td style="text-align: left;"><code>height?</code></td><td style="text-align: left;"><em>number</em></td><td style="text-align: left;">-</td></tr><tr class="even"><td style="text-align: left;"><code>aspectRatio?</code></td><td style="text-align: left;"><em>number</em></td><td style="text-align: left;">-</td></tr></tbody></table>

**Returns:** *object*

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>height</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>width</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

the maximum size available.

Inherited from: [BasePlatform](/docs/3.2.0/api/classes/baseplatform.html)

Defined in: [index.esm.d.ts:1944 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1944)

------------------------------------------------------------------------

### <a href="#isattached" class="header-anchor">#</a> isAttached

▸ **isAttached**(`canvas`: HTMLCanvasElement): *boolean*

#### <a href="#parameters-4" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>canvas</code></td><td style="text-align: left;">HTMLCanvasElement</td></tr></tbody></table>

**Returns:** *boolean*

true if the canvas is attached to the platform, false if not.

Inherited from: [BasePlatform](/docs/3.2.0/api/classes/baseplatform.html)

Defined in: [index.esm.d.ts:1949 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1949)

------------------------------------------------------------------------

### <a href="#releasecontext" class="header-anchor">#</a> releaseContext

▸ **releaseContext**(`context`: CanvasRenderingContext2D): *boolean*

Called at chart destruction time, releases any resources associated to the context previously returned by the acquireContext() method.

#### <a href="#parameters-5" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th><th style="text-align: left;">Description</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>context</code></td><td style="text-align: left;">CanvasRenderingContext2D</td><td style="text-align: left;">The context2d instance</td></tr></tbody></table>

**Returns:** *boolean*

true if the method succeeded, else false

Inherited from: [BasePlatform](/docs/3.2.0/api/classes/baseplatform.html)

Defined in: [index.esm.d.ts:1917 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1917)

------------------------------------------------------------------------

### <a href="#removeeventlistener" class="header-anchor">#</a> removeEventListener

▸ **removeEventListener**(`chart`: [*Chart*](/docs/3.2.0/api/classes/chart.html)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;, `type`: *string*, `listener`: (`e`: [*ChartEvent*](/docs/3.2.0/api/interfaces/chartevent.html)) =&gt; *void*): *void*

Removes the specified listener previously registered with addEventListener.

#### <a href="#parameters-6" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th><th style="text-align: left;">Description</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chart</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/chart.html"><em>Chart</em></a>&lt;<em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em>, (number | <a href="/docs/3.2.0/api/interfaces/scatterdatapoint.html"><em>ScatterDataPoint</em></a> | <a href="/docs/3.2.0/api/interfaces/bubbledatapoint.html"><em>BubbleDataPoint</em></a>)[], unknown&gt;</td><td style="text-align: left;">Chart from which to remove the listener</td></tr><tr class="even"><td style="text-align: left;"><code>type</code></td><td style="text-align: left;"><em>string</em></td><td style="text-align: left;">The (<a href="/docs/3.2.0/api/interfaces/chartevent.html">ChartEvent</a>) type to remove</td></tr><tr class="odd"><td style="text-align: left;"><code>listener</code></td><td style="text-align: left;">(<code>e</code>: <a href="/docs/3.2.0/api/interfaces/chartevent.html"><em>ChartEvent</em></a>) =&gt; <em>void</em></td><td style="text-align: left;">The listener function to remove from the event target.</td></tr></tbody></table>

**Returns:** *void*

Inherited from: [BasePlatform](/docs/3.2.0/api/classes/baseplatform.html)

Defined in: [index.esm.d.ts:1932 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1932)

<span class="prev"> ← <a href="/docs/3.2.0/api/classes/datasetcontroller.html" class="prev">DatasetController</a> </span> <span class="next"> [Scale](/docs/3.2.0/api/classes/scale.html) → </span>
