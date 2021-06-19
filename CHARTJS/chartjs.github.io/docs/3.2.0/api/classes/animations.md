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
        -   <a href="/docs/3.2.0/api/classes/animations.html" class="active sidebar-link">Animations</a>
        -   <a href="/docs/3.2.0/api/classes/animator.html" class="sidebar-link">Animator</a>
        -   <a href="/docs/3.2.0/api/classes/baseplatform.html" class="sidebar-link">BasePlatform</a>
        -   <a href="/docs/3.2.0/api/classes/basicplatform.html" class="sidebar-link">BasicPlatform</a>
        -   <a href="/docs/3.2.0/api/classes/chart.html" class="sidebar-link">Chart</a>
        -   <a href="/docs/3.2.0/api/classes/datasetcontroller.html" class="sidebar-link">DatasetController</a>
        -   <a href="/docs/3.2.0/api/classes/domplatform.html" class="sidebar-link">DomPlatform</a>
        -   <a href="/docs/3.2.0/api/classes/scale.html" class="sidebar-link">Scale</a>

    -   Interfaces <span class="arrow right"></span>

<a href="#class-animations" class="header-anchor">#</a> Class: Animations
=========================================================================

<a href="#constructors" class="header-anchor">#</a> Constructors
----------------------------------------------------------------

### <a href="#constructor" class="header-anchor">#</a> constructor

\+ **new Animations**(`chart`: [*Chart*](/docs/3.2.0/api/classes/chart.html)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;, `animations`: *Record*&lt;string, unknown&gt;): <a href="/docs/3.2.0/api/classes/animations.html" class="router-link-exact-active router-link-active"><em>Animations</em></a>

#### <a href="#parameters" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chart</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/chart.html"><em>Chart</em></a>&lt;<em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em>, (number | <a href="/docs/3.2.0/api/interfaces/scatterdatapoint.html"><em>ScatterDataPoint</em></a> | <a href="/docs/3.2.0/api/interfaces/bubbledatapoint.html"><em>BubbleDataPoint</em></a>)[], unknown&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>animations</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;</td></tr></tbody></table>

**Returns:** <a href="/docs/3.2.0/api/classes/animations.html" class="router-link-exact-active router-link-active"><em>Animations</em></a>

Defined in: [animation.d.ts:28 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L28)

<a href="#methods" class="header-anchor">#</a> Methods
------------------------------------------------------

### <a href="#configure" class="header-anchor">#</a> configure

▸ **configure**(`animations`: *Record*&lt;string, unknown&gt;): *void*

#### <a href="#parameters-2" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>animations</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;</td></tr></tbody></table>

**Returns:** *void*

Defined in: [animation.d.ts:30 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L30)

------------------------------------------------------------------------

### <a href="#update" class="header-anchor">#</a> update

▸ **update**(`target`: *Record*&lt;string, unknown&gt;, `values`: *Record*&lt;string, unknown&gt;): *boolean*

#### <a href="#parameters-3" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>target</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>values</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;</td></tr></tbody></table>

**Returns:** *boolean*

Defined in: [animation.d.ts:31 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L31)

<span class="prev"> ← <a href="/docs/3.2.0/api/classes/animation.html" class="prev">Animation</a> </span> <span class="next"> [Animator](/docs/3.2.0/api/classes/animator.html) → </span>
