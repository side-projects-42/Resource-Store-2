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
        -   <a href="/docs/3.2.0/api/classes/chart.html" class="active sidebar-link">Chart</a>
        -   <a href="/docs/3.2.0/api/classes/datasetcontroller.html" class="sidebar-link">DatasetController</a>
        -   <a href="/docs/3.2.0/api/classes/domplatform.html" class="sidebar-link">DomPlatform</a>
        -   <a href="/docs/3.2.0/api/classes/scale.html" class="sidebar-link">Scale</a>

    -   Interfaces <span class="arrow right"></span>

<a href="#class-chart-ttype-tdata-tlabel" class="header-anchor">#</a> Class: Chart&lt;TType, TData, TLabel&gt;
==============================================================================================================

<a href="#type-parameters" class="header-anchor">#</a> Type parameters
----------------------------------------------------------------------

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th><th style="text-align: left;">Default</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>TType</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/#charttype"><em>ChartType</em></a></td><td style="text-align: left;"><a href="/docs/3.2.0/api/#charttype"><em>ChartType</em></a></td></tr><tr class="even"><td style="text-align: left;"><code>TData</code></td><td style="text-align: left;">-</td><td style="text-align: left;">TType[]</td></tr><tr class="odd"><td style="text-align: left;"><code>TLabel</code></td><td style="text-align: left;">-</td><td style="text-align: left;"><em>unknown</em></td></tr></tbody></table>

<a href="#constructors" class="header-anchor">#</a> Constructors
----------------------------------------------------------------

### <a href="#constructor" class="header-anchor">#</a> constructor

\+ **new Chart**&lt;TType, TData, TLabel&gt;(`item`: [*ChartItem*](/docs/3.2.0/api/#chartitem), `config`: [*ChartConfiguration*](/docs/3.2.0/api/interfaces/chartconfiguration.html)&lt;TType, TData, TLabel&gt;): <a href="/docs/3.2.0/api/classes/chart.html" class="router-link-exact-active router-link-active"><em>Chart</em></a>&lt;TType, TData, TLabel&gt;

#### <a href="#type-parameters-2" class="header-anchor">#</a> Type parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th><th style="text-align: left;">Default</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>TType</code></td><td style="text-align: left;"><em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em></td><td style="text-align: left;"><em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em></td></tr><tr class="even"><td style="text-align: left;"><code>TData</code></td><td style="text-align: left;">-</td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/charttyperegistry.html"><em>ChartTypeRegistry</em></a>[TType][<em>defaultDataPoint</em>][]</td></tr><tr class="odd"><td style="text-align: left;"><code>TLabel</code></td><td style="text-align: left;">-</td><td style="text-align: left;"><em>unknown</em></td></tr></tbody></table>

#### <a href="#parameters" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>item</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/#chartitem"><em>ChartItem</em></a></td></tr><tr class="even"><td style="text-align: left;"><code>config</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/chartconfiguration.html"><em>ChartConfiguration</em></a>&lt;TType, TData, TLabel&gt;</td></tr></tbody></table>

**Returns:** <a href="/docs/3.2.0/api/classes/chart.html" class="router-link-exact-active router-link-active"><em>Chart</em></a>&lt;TType, TData, TLabel&gt;

Defined in: [index.esm.d.ts:455 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L455)

<a href="#properties" class="header-anchor">#</a> Properties
------------------------------------------------------------

### <a href="#aspectratio" class="header-anchor">#</a> aspectRatio

• `Readonly` **aspectRatio**: *number*

Defined in: [index.esm.d.ts:447 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L447)

------------------------------------------------------------------------

### <a href="#attached" class="header-anchor">#</a> attached

• `Readonly` **attached**: *boolean*

Defined in: [index.esm.d.ts:452 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L452)

------------------------------------------------------------------------

### <a href="#boxes" class="header-anchor">#</a> boxes

• `Readonly` **boxes**: [*LayoutItem*](/docs/3.2.0/api/interfaces/layoutitem.html)\[\]

Defined in: [index.esm.d.ts:448 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L448)

------------------------------------------------------------------------

### <a href="#canvas" class="header-anchor">#</a> canvas

• `Readonly` **canvas**: HTMLCanvasElement

Defined in: [index.esm.d.ts:442 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L442)

------------------------------------------------------------------------

### <a href="#chartarea" class="header-anchor">#</a> chartArea

• `Readonly` **chartArea**: [*ChartArea*](/docs/3.2.0/api/interfaces/chartarea.html)

Defined in: [index.esm.d.ts:450 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L450)

------------------------------------------------------------------------

### <a href="#config" class="header-anchor">#</a> config

• `Readonly` **config**: [*ChartConfiguration*](/docs/3.2.0/api/interfaces/chartconfiguration.html)&lt;TType, TData, TLabel&gt;

Defined in: [index.esm.d.ts:444 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L444)

------------------------------------------------------------------------

### <a href="#ctx" class="header-anchor">#</a> ctx

• `Readonly` **ctx**: CanvasRenderingContext2D

Defined in: [index.esm.d.ts:443 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L443)

------------------------------------------------------------------------

### <a href="#currentdevicepixelratio" class="header-anchor">#</a> currentDevicePixelRatio

• `Readonly` **currentDevicePixelRatio**: *number*

Defined in: [index.esm.d.ts:449 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L449)

------------------------------------------------------------------------

### <a href="#data" class="header-anchor">#</a> data

• **data**: [*ChartData*](/docs/3.2.0/api/interfaces/chartdata.html)&lt;TType, TData, TLabel&gt;

Defined in: [index.esm.d.ts:454 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L454)

------------------------------------------------------------------------

### <a href="#height" class="header-anchor">#</a> height

• `Readonly` **height**: *number*

Defined in: [index.esm.d.ts:446 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L446)

------------------------------------------------------------------------

### <a href="#id" class="header-anchor">#</a> id

• `Readonly` **id**: *string*

Defined in: [index.esm.d.ts:441 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L441)

------------------------------------------------------------------------

### <a href="#options" class="header-anchor">#</a> options

• **options**: *DeepPartial*&lt;[*CoreChartOptions*](/docs/3.2.0/api/interfaces/corechartoptions.html)&lt;TType&gt; & [*ElementChartOptions*](/docs/3.2.0/api/interfaces/elementchartoptions.html) & [*PluginChartOptions*](/docs/3.2.0/api/interfaces/pluginchartoptions.html)&lt;TType&gt; & [*DatasetChartOptions*](/docs/3.2.0/api/#datasetchartoptions)&lt;TType&gt; & [*ScaleChartOptions*](/docs/3.2.0/api/#scalechartoptions)&lt;TType&gt; & [*ChartTypeRegistry*](/docs/3.2.0/api/interfaces/charttyperegistry.html)\[TType\]\[*chartOptions*\]&gt;

Defined in: [index.esm.d.ts:455 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L455)

------------------------------------------------------------------------

### <a href="#platform" class="header-anchor">#</a> platform

• `Readonly` **platform**: [*BasePlatform*](/docs/3.2.0/api/classes/baseplatform.html)

Defined in: [index.esm.d.ts:440 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L440)

------------------------------------------------------------------------

### <a href="#scales" class="header-anchor">#</a> scales

• `Readonly` **scales**: *object*

#### <a href="#type-declaration" class="header-anchor">#</a> Type declaration:

Defined in: [index.esm.d.ts:451 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L451)

------------------------------------------------------------------------

### <a href="#width" class="header-anchor">#</a> width

• `Readonly` **width**: *number*

Defined in: [index.esm.d.ts:445 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L445)

------------------------------------------------------------------------

### <a href="#defaults" class="header-anchor">#</a> defaults

▪ `Static` `Readonly` **defaults**: [*Defaults*](/docs/3.2.0/api/interfaces/defaults.html)

Defined in: [index.esm.d.ts:494 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L494)

------------------------------------------------------------------------

### <a href="#instances" class="header-anchor">#</a> instances

▪ `Static` `Readonly` **instances**: *object*

#### <a href="#type-declaration-2" class="header-anchor">#</a> Type declaration:

Defined in: [index.esm.d.ts:497 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L497)

------------------------------------------------------------------------

### <a href="#overrides" class="header-anchor">#</a> overrides

▪ `Static` `Readonly` **overrides**: [*Overrides*](/docs/3.2.0/api/#overrides)

Defined in: [index.esm.d.ts:495 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L495)

------------------------------------------------------------------------

### <a href="#registry" class="header-anchor">#</a> registry

▪ `Static` `Readonly` **registry**: [*Registry*](/docs/3.2.0/api/interfaces/registry.html)

Defined in: [index.esm.d.ts:498 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L498)

------------------------------------------------------------------------

### <a href="#version" class="header-anchor">#</a> version

▪ `Static` `Readonly` **version**: *string*

Defined in: [index.esm.d.ts:496 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L496)

<a href="#methods" class="header-anchor">#</a> Methods
------------------------------------------------------

### <a href="#bindevents" class="header-anchor">#</a> bindEvents

▸ **bindEvents**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:488 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L488)

------------------------------------------------------------------------

### <a href="#buildorupdatecontrollers" class="header-anchor">#</a> buildOrUpdateControllers

▸ **buildOrUpdateControllers**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:465 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L465)

------------------------------------------------------------------------

### <a href="#buildorupdatescales" class="header-anchor">#</a> buildOrUpdateScales

▸ **buildOrUpdateScales**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:464 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L464)

------------------------------------------------------------------------

### <a href="#clear" class="header-anchor">#</a> clear

▸ **clear**(): <a href="/docs/3.2.0/api/classes/chart.html" class="router-link-exact-active router-link-active"><em>Chart</em></a>&lt;TType, TData, TLabel&gt;

**Returns:** <a href="/docs/3.2.0/api/classes/chart.html" class="router-link-exact-active router-link-active"><em>Chart</em></a>&lt;TType, TData, TLabel&gt;

Defined in: [index.esm.d.ts:459 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L459)

------------------------------------------------------------------------

### <a href="#destroy" class="header-anchor">#</a> destroy

▸ **destroy**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:486 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L486)

------------------------------------------------------------------------

### <a href="#draw" class="header-anchor">#</a> draw

▸ **draw**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:469 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L469)

------------------------------------------------------------------------

### <a href="#ensurescaleshaveids" class="header-anchor">#</a> ensureScalesHaveIDs

▸ **ensureScalesHaveIDs**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:463 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L463)

------------------------------------------------------------------------

### <a href="#getactiveelements" class="header-anchor">#</a> getActiveElements

▸ **getActiveElements**(): [*ActiveElement*](/docs/3.2.0/api/interfaces/activeelement.html)\[\]

**Returns:** [*ActiveElement*](/docs/3.2.0/api/interfaces/activeelement.html)\[\]

Defined in: [index.esm.d.ts:483 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L483)

------------------------------------------------------------------------

### <a href="#getdatavisibility" class="header-anchor">#</a> getDataVisibility

▸ **getDataVisibility**(`index`: *number*): *boolean*

#### <a href="#parameters-2" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>index</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *boolean*

Defined in: [index.esm.d.ts:479 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L479)

------------------------------------------------------------------------

### <a href="#getdatasetmeta" class="header-anchor">#</a> getDatasetMeta

▸ **getDatasetMeta**(`datasetIndex`: *number*): [*ChartMeta*](/docs/3.2.0/api/interfaces/chartmeta.html)&lt;[*Element*](/docs/3.2.0/api/#element)&lt;{}, {}&gt;, [*Element*](/docs/3.2.0/api/#element)&lt;{}, {}&gt;&gt;

#### <a href="#parameters-3" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>datasetIndex</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** [*ChartMeta*](/docs/3.2.0/api/interfaces/chartmeta.html)&lt;[*Element*](/docs/3.2.0/api/#element)&lt;{}, {}&gt;, [*Element*](/docs/3.2.0/api/#element)&lt;{}, {}&gt;&gt;

Defined in: [index.esm.d.ts:474 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L474)

------------------------------------------------------------------------

### <a href="#getelementsateventformode" class="header-anchor">#</a> getElementsAtEventForMode

▸ **getElementsAtEventForMode**(`e`: Event, `mode`: *string*, `options`: [*InteractionOptions*](/docs/3.2.0/api/interfaces/interactionoptions.html), `useFinalPosition`: *boolean*): [*InteractionItem*](/docs/3.2.0/api/interfaces/interactionitem.html)\[\]

#### <a href="#parameters-4" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>e</code></td><td style="text-align: left;">Event</td></tr><tr class="even"><td style="text-align: left;"><code>mode</code></td><td style="text-align: left;"><em>string</em></td></tr><tr class="odd"><td style="text-align: left;"><code>options</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/interactionoptions.html"><em>InteractionOptions</em></a></td></tr><tr class="even"><td style="text-align: left;"><code>useFinalPosition</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

**Returns:** [*InteractionItem*](/docs/3.2.0/api/interfaces/interactionitem.html)\[\]

Defined in: [index.esm.d.ts:471 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L471)

------------------------------------------------------------------------

### <a href="#getsortedvisibledatasetmetas" class="header-anchor">#</a> getSortedVisibleDatasetMetas

▸ **getSortedVisibleDatasetMetas**(): [*ChartMeta*](/docs/3.2.0/api/interfaces/chartmeta.html)&lt;[*Element*](/docs/3.2.0/api/#element)&lt;{}, {}&gt;, [*Element*](/docs/3.2.0/api/#element)&lt;{}, {}&gt;&gt;\[\]

**Returns:** [*ChartMeta*](/docs/3.2.0/api/interfaces/chartmeta.html)&lt;[*Element*](/docs/3.2.0/api/#element)&lt;{}, {}&gt;, [*Element*](/docs/3.2.0/api/#element)&lt;{}, {}&gt;&gt;\[\]

Defined in: [index.esm.d.ts:473 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L473)

------------------------------------------------------------------------

### <a href="#getvisibledatasetcount" class="header-anchor">#</a> getVisibleDatasetCount

▸ **getVisibleDatasetCount**(): *number*

**Returns:** *number*

Defined in: [index.esm.d.ts:475 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L475)

------------------------------------------------------------------------

### <a href="#hide" class="header-anchor">#</a> hide

▸ **hide**(`datasetIndex`: *number*): *void*

#### <a href="#parameters-5" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>datasetIndex</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:480 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L480)

------------------------------------------------------------------------

### <a href="#isdatasetvisible" class="header-anchor">#</a> isDatasetVisible

▸ **isDatasetVisible**(`datasetIndex`: *number*): *boolean*

#### <a href="#parameters-6" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>datasetIndex</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *boolean*

Defined in: [index.esm.d.ts:476 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L476)

------------------------------------------------------------------------

### <a href="#notifyplugins" class="header-anchor">#</a> notifyPlugins

▸ **notifyPlugins**(`hook`: *string*, `args?`: *Record*&lt;string, unknown&gt;): *boolean* | *void*

#### <a href="#parameters-7" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>hook</code></td><td style="text-align: left;"><em>string</em></td></tr><tr class="even"><td style="text-align: left;"><code>args?</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;</td></tr></tbody></table>

**Returns:** *boolean* | *void*

Defined in: [index.esm.d.ts:492 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L492)

------------------------------------------------------------------------

### <a href="#render" class="header-anchor">#</a> render

▸ **render**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:468 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L468)

------------------------------------------------------------------------

### <a href="#reset" class="header-anchor">#</a> reset

▸ **reset**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:466 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L466)

------------------------------------------------------------------------

### <a href="#resize" class="header-anchor">#</a> resize

▸ **resize**(`width?`: *number*, `height?`: *number*): *void*

#### <a href="#parameters-8" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>width?</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>height?</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:462 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L462)

------------------------------------------------------------------------

### <a href="#setactiveelements" class="header-anchor">#</a> setActiveElements

▸ **setActiveElements**(`active`: [*ActiveDataPoint*](/docs/3.2.0/api/interfaces/activedatapoint.html)\[\]): *void*

#### <a href="#parameters-9" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>active</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/activedatapoint.html"><em>ActiveDataPoint</em></a>[]</td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:484 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L484)

------------------------------------------------------------------------

### <a href="#setdatasetvisibility" class="header-anchor">#</a> setDatasetVisibility

▸ **setDatasetVisibility**(`datasetIndex`: *number*, `visible`: *boolean*): *void*

#### <a href="#parameters-10" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>datasetIndex</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>visible</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:477 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L477)

------------------------------------------------------------------------

### <a href="#show" class="header-anchor">#</a> show

▸ **show**(`datasetIndex`: *number*): *void*

#### <a href="#parameters-11" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>datasetIndex</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:481 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L481)

------------------------------------------------------------------------

### <a href="#stop" class="header-anchor">#</a> stop

▸ **stop**(): <a href="/docs/3.2.0/api/classes/chart.html" class="router-link-exact-active router-link-active"><em>Chart</em></a>&lt;TType, TData, TLabel&gt;

**Returns:** <a href="/docs/3.2.0/api/classes/chart.html" class="router-link-exact-active router-link-active"><em>Chart</em></a>&lt;TType, TData, TLabel&gt;

Defined in: [index.esm.d.ts:460 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L460)

------------------------------------------------------------------------

### <a href="#tobase64image" class="header-anchor">#</a> toBase64Image

▸ **toBase64Image**(`type?`: *string*, `quality?`: *unknown*): *string*

#### <a href="#parameters-12" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>type?</code></td><td style="text-align: left;"><em>string</em></td></tr><tr class="even"><td style="text-align: left;"><code>quality?</code></td><td style="text-align: left;"><em>unknown</em></td></tr></tbody></table>

**Returns:** *string*

Defined in: [index.esm.d.ts:487 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L487)

------------------------------------------------------------------------

### <a href="#toggledatavisibility" class="header-anchor">#</a> toggleDataVisibility

▸ **toggleDataVisibility**(`index`: *number*): *void*

#### <a href="#parameters-13" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>index</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:478 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L478)

------------------------------------------------------------------------

### <a href="#unbindevents" class="header-anchor">#</a> unbindEvents

▸ **unbindEvents**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:489 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L489)

------------------------------------------------------------------------

### <a href="#update" class="header-anchor">#</a> update

▸ **update**(`mode?`: *resize* | *reset* | *none* | *hide* | *show* | *normal* | *active*): *void*

#### <a href="#parameters-14" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>mode?</code></td><td style="text-align: left;"><em>resize</em> | <em>reset</em> | <em>none</em> | <em>hide</em> | <em>show</em> | <em>normal</em> | <em>active</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:467 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L467)

------------------------------------------------------------------------

### <a href="#updatehoverstyle" class="header-anchor">#</a> updateHoverStyle

▸ **updateHoverStyle**(`items`: [*Element*](/docs/3.2.0/api/#element)&lt;{}, {}&gt;, `mode`: *dataset*, `enabled`: *boolean*): *void*

#### <a href="#parameters-15" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>items</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/#element"><em>Element</em></a>&lt;{}, {}&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>mode</code></td><td style="text-align: left;"><em>dataset</em></td></tr><tr class="odd"><td style="text-align: left;"><code>enabled</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:490 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L490)

------------------------------------------------------------------------

### <a href="#getchart" class="header-anchor">#</a> getChart

▸ `Static`**getChart**(`key`: *string* | HTMLCanvasElement | CanvasRenderingContext2D): <a href="/docs/3.2.0/api/classes/chart.html" class="router-link-exact-active router-link-active"><em>Chart</em></a>&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;

#### <a href="#parameters-16" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>key</code></td><td style="text-align: left;"><em>string</em> | HTMLCanvasElement | CanvasRenderingContext2D</td></tr></tbody></table>

**Returns:** <a href="/docs/3.2.0/api/classes/chart.html" class="router-link-exact-active router-link-active"><em>Chart</em></a>&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;

Defined in: [index.esm.d.ts:499 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L499)

------------------------------------------------------------------------

### <a href="#register" class="header-anchor">#</a> register

▸ `Static`**register**(...`items`: [*ChartComponentLike*](/docs/3.2.0/api/#chartcomponentlike)\[\]): *void*

#### <a href="#parameters-17" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>...items</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/#chartcomponentlike"><em>ChartComponentLike</em></a>[]</td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:500 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L500)

------------------------------------------------------------------------

### <a href="#unregister" class="header-anchor">#</a> unregister

▸ `Static`**unregister**(...`items`: [*ChartComponentLike*](/docs/3.2.0/api/#chartcomponentlike)\[\]): *void*

#### <a href="#parameters-18" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>...items</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/#chartcomponentlike"><em>ChartComponentLike</em></a>[]</td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:501 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L501)

<span class="prev"> ← <a href="/docs/3.2.0/api/classes/basicplatform.html" class="prev">BasicPlatform</a> </span> <span class="next"> [DatasetController](/docs/3.2.0/api/classes/datasetcontroller.html) → </span>
