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

        -   <a href="/docs/3.2.0/api/classes/animation.html" class="active sidebar-link">Animation</a>
        -   <a href="/docs/3.2.0/api/classes/animations.html" class="sidebar-link">Animations</a>
        -   <a href="/docs/3.2.0/api/classes/animator.html" class="sidebar-link">Animator</a>
        -   <a href="/docs/3.2.0/api/classes/baseplatform.html" class="sidebar-link">BasePlatform</a>
        -   <a href="/docs/3.2.0/api/classes/basicplatform.html" class="sidebar-link">BasicPlatform</a>
        -   <a href="/docs/3.2.0/api/classes/chart.html" class="sidebar-link">Chart</a>
        -   <a href="/docs/3.2.0/api/classes/datasetcontroller.html" class="sidebar-link">DatasetController</a>
        -   <a href="/docs/3.2.0/api/classes/domplatform.html" class="sidebar-link">DomPlatform</a>
        -   <a href="/docs/3.2.0/api/classes/scale.html" class="sidebar-link">Scale</a>

    -   Interfaces <span class="arrow right"></span>

<a href="#class-animation" class="header-anchor">#</a> Class: Animation
=======================================================================

<a href="#constructors" class="header-anchor">#</a> Constructors
----------------------------------------------------------------

### <a href="#constructor" class="header-anchor">#</a> constructor

\+ **new Animation**(`cfg`: *Record*&lt;string, unknown&gt;, `target`: *Record*&lt;string, unknown&gt;, `prop`: *string*, `to?`: *unknown*): <a href="/docs/3.2.0/api/classes/animation.html" class="router-link-exact-active router-link-active"><em>Animation</em></a>

#### <a href="#parameters" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>cfg</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>target</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;</td></tr><tr class="odd"><td style="text-align: left;"><code>prop</code></td><td style="text-align: left;"><em>string</em></td></tr><tr class="even"><td style="text-align: left;"><code>to?</code></td><td style="text-align: left;"><em>unknown</em></td></tr></tbody></table>

**Returns:** <a href="/docs/3.2.0/api/classes/animation.html" class="router-link-exact-active router-link-active"><em>Animation</em></a>

Defined in: [animation.d.ts:4 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L4)

<a href="#methods" class="header-anchor">#</a> Methods
------------------------------------------------------

### <a href="#active" class="header-anchor">#</a> active

▸ **active**(): *boolean*

**Returns:** *boolean*

Defined in: [animation.d.ts:6 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L6)

------------------------------------------------------------------------

### <a href="#cancel" class="header-anchor">#</a> cancel

▸ **cancel**(): *void*

**Returns:** *void*

Defined in: [animation.d.ts:8 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L8)

------------------------------------------------------------------------

### <a href="#tick" class="header-anchor">#</a> tick

▸ **tick**(`date`: *number*): *void*

#### <a href="#parameters-2" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>date</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [animation.d.ts:9 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L9)

------------------------------------------------------------------------

### <a href="#update" class="header-anchor">#</a> update

▸ **update**(`cfg`: *Record*&lt;string, unknown&gt;, `to`: *unknown*, `date`: *number*): *void*

#### <a href="#parameters-3" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>cfg</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>to</code></td><td style="text-align: left;"><em>unknown</em></td></tr><tr class="odd"><td style="text-align: left;"><code>date</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [animation.d.ts:7 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/animation.d.ts#L7)

<span class="prev"> ← <a href="/docs/3.2.0/api/enums/updatemodeenum.html" class="prev">UpdateModeEnum</a> </span> <span class="next"> [Animations](/docs/3.2.0/api/classes/animations.html) → </span>
