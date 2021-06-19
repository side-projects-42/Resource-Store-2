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
        -   <a href="/docs/3.2.0/api/classes/animator.html" class="active sidebar-link">Animator</a>
        -   <a href="/docs/3.2.0/api/classes/baseplatform.html" class="sidebar-link">BasePlatform</a>
        -   <a href="/docs/3.2.0/api/classes/basicplatform.html" class="sidebar-link">BasicPlatform</a>
        -   <a href="/docs/3.2.0/api/classes/chart.html" class="sidebar-link">Chart</a>
        -   <a href="/docs/3.2.0/api/classes/datasetcontroller.html" class="sidebar-link">DatasetController</a>
        -   <a href="/docs/3.2.0/api/classes/domplatform.html" class="sidebar-link">DomPlatform</a>
        -   <a href="/docs/3.2.0/api/classes/scale.html" class="sidebar-link">Scale</a>

    -   Interfaces <span class="arrow right"></span>

<a href="#class-animator" class="header-anchor">#</a> Class: Animator
=====================================================================

<a href="#constructors" class="header-anchor">#</a> Constructors
----------------------------------------------------------------

### <a href="#constructor" class="header-anchor">#</a> constructor

\+ **new Animator**(): <a href="/docs/3.2.0/api/classes/animator.html" class="router-link-exact-active router-link-active"><em>Animator</em></a>

**Returns:** <a href="/docs/3.2.0/api/classes/animator.html" class="router-link-exact-active router-link-active"><em>Animator</em></a>

<a href="#methods" class="header-anchor">#</a> Methods
------------------------------------------------------

### <a href="#add" class="header-anchor">#</a> add

▸ **add**(`chart`: [*Chart*](/docs/3.2.0/api/classes/chart.html)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;, `items`: readonly [*Animation*](/docs/3.2.0/api/classes/animation.html)\[\]): *void*

#### <a href="#parameters" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chart</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/chart.html"><em>Chart</em></a>&lt;<em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em>, (number | <a href="/docs/3.2.0/api/interfaces/scatterdatapoint.html"><em>ScatterDataPoint</em></a> | <a href="/docs/3.2.0/api/interfaces/bubbledatapoint.html"><em>BubbleDataPoint</em></a>)[], unknown&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>items</code></td><td style="text-align: left;">readonly <a href="/docs/3.2.0/api/classes/animation.html"><em>Animation</em></a>[]</td></tr></tbody></table>

**Returns:** *void*

Defined in: [animation.d.ts:20 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L20)

------------------------------------------------------------------------

### <a href="#has" class="header-anchor">#</a> has

▸ **has**(`chart`: [*Chart*](/docs/3.2.0/api/classes/chart.html)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;): *boolean*

#### <a href="#parameters-2" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chart</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/chart.html"><em>Chart</em></a>&lt;<em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em>, (number | <a href="/docs/3.2.0/api/interfaces/scatterdatapoint.html"><em>ScatterDataPoint</em></a> | <a href="/docs/3.2.0/api/interfaces/bubbledatapoint.html"><em>BubbleDataPoint</em></a>)[], unknown&gt;</td></tr></tbody></table>

**Returns:** *boolean*

Defined in: [animation.d.ts:21 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L21)

------------------------------------------------------------------------

### <a href="#listen" class="header-anchor">#</a> listen

▸ **listen**(`chart`: [*Chart*](/docs/3.2.0/api/classes/chart.html)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;, `event`: *complete* | *progress*, `cb`: (`event`: [*AnimationEvent*](/docs/3.2.0/api/interfaces/animationevent.html)) =&gt; *void*): *void*

#### <a href="#parameters-3" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chart</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/chart.html"><em>Chart</em></a>&lt;<em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em>, (number | <a href="/docs/3.2.0/api/interfaces/scatterdatapoint.html"><em>ScatterDataPoint</em></a> | <a href="/docs/3.2.0/api/interfaces/bubbledatapoint.html"><em>BubbleDataPoint</em></a>)[], unknown&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>event</code></td><td style="text-align: left;"><em>complete</em> | <em>progress</em></td></tr><tr class="odd"><td style="text-align: left;"><code>cb</code></td><td style="text-align: left;">(<code>event</code>: <a href="/docs/3.2.0/api/interfaces/animationevent.html"><em>AnimationEvent</em></a>) =&gt; <em>void</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [animation.d.ts:19 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L19)

------------------------------------------------------------------------

### <a href="#remove" class="header-anchor">#</a> remove

▸ **remove**(`chart`: [*Chart*](/docs/3.2.0/api/classes/chart.html)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;): *boolean*

#### <a href="#parameters-4" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chart</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/chart.html"><em>Chart</em></a>&lt;<em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em>, (number | <a href="/docs/3.2.0/api/interfaces/scatterdatapoint.html"><em>ScatterDataPoint</em></a> | <a href="/docs/3.2.0/api/interfaces/bubbledatapoint.html"><em>BubbleDataPoint</em></a>)[], unknown&gt;</td></tr></tbody></table>

**Returns:** *boolean*

Defined in: [animation.d.ts:25 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L25)

------------------------------------------------------------------------

### <a href="#running" class="header-anchor">#</a> running

▸ **running**(`chart`: [*Chart*](/docs/3.2.0/api/classes/chart.html)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;): *boolean*

#### <a href="#parameters-5" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chart</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/chart.html"><em>Chart</em></a>&lt;<em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em>, (number | <a href="/docs/3.2.0/api/interfaces/scatterdatapoint.html"><em>ScatterDataPoint</em></a> | <a href="/docs/3.2.0/api/interfaces/bubbledatapoint.html"><em>BubbleDataPoint</em></a>)[], unknown&gt;</td></tr></tbody></table>

**Returns:** *boolean*

Defined in: [animation.d.ts:23 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L23)

------------------------------------------------------------------------

### <a href="#start" class="header-anchor">#</a> start

▸ **start**(`chart`: [*Chart*](/docs/3.2.0/api/classes/chart.html)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;): *void*

#### <a href="#parameters-6" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chart</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/chart.html"><em>Chart</em></a>&lt;<em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em>, (number | <a href="/docs/3.2.0/api/interfaces/scatterdatapoint.html"><em>ScatterDataPoint</em></a> | <a href="/docs/3.2.0/api/interfaces/bubbledatapoint.html"><em>BubbleDataPoint</em></a>)[], unknown&gt;</td></tr></tbody></table>

**Returns:** *void*

Defined in: [animation.d.ts:22 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L22)

------------------------------------------------------------------------

### <a href="#stop" class="header-anchor">#</a> stop

▸ **stop**(`chart`: [*Chart*](/docs/3.2.0/api/classes/chart.html)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;): *void*

#### <a href="#parameters-7" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chart</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/chart.html"><em>Chart</em></a>&lt;<em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em>, (number | <a href="/docs/3.2.0/api/interfaces/scatterdatapoint.html"><em>ScatterDataPoint</em></a> | <a href="/docs/3.2.0/api/interfaces/bubbledatapoint.html"><em>BubbleDataPoint</em></a>)[], unknown&gt;</td></tr></tbody></table>

**Returns:** *void*

Defined in: [animation.d.ts:24 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L24)

<span class="prev"> ← <a href="/docs/3.2.0/api/classes/animations.html" class="prev">Animations</a> </span> <span class="next"> [BasePlatform](/docs/3.2.0/api/classes/baseplatform.html) → </span>
