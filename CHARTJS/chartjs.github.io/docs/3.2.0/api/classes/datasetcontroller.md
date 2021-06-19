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
        -   <a href="/docs/3.2.0/api/classes/datasetcontroller.html" class="active sidebar-link">DatasetController</a>
        -   <a href="/docs/3.2.0/api/classes/domplatform.html" class="sidebar-link">DomPlatform</a>
        -   <a href="/docs/3.2.0/api/classes/scale.html" class="sidebar-link">Scale</a>

    -   Interfaces <span class="arrow right"></span>

<a href="#class-datasetcontroller-ttype-telement-tdatasetelement-tparseddata" class="header-anchor">#</a> Class: DatasetController&lt;TType, TElement, TDatasetElement, TParsedData&gt;
=======================================================================================================================================================================================

<a href="#type-parameters" class="header-anchor">#</a> Type parameters
----------------------------------------------------------------------

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th><th style="text-align: left;">Default</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>TType</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/#charttype"><em>ChartType</em></a></td><td style="text-align: left;"><a href="/docs/3.2.0/api/#charttype"><em>ChartType</em></a></td></tr><tr class="even"><td style="text-align: left;"><code>TElement</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/#element"><em>Element</em></a></td><td style="text-align: left;"><a href="/docs/3.2.0/api/#element"><em>Element</em></a></td></tr><tr class="odd"><td style="text-align: left;"><code>TDatasetElement</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/#element"><em>Element</em></a></td><td style="text-align: left;"><a href="/docs/3.2.0/api/#element"><em>Element</em></a></td></tr><tr class="even"><td style="text-align: left;"><code>TParsedData</code></td><td style="text-align: left;">-</td><td style="text-align: left;"><a href="/docs/3.2.0/api/#parseddatatype"><em>ParsedDataType</em></a>&lt;TType&gt;</td></tr></tbody></table>

<a href="#hierarchy" class="header-anchor">#</a> Hierarchy
----------------------------------------------------------

-   **DatasetController**

    ↳ [*DoughnutController*](/docs/3.2.0/api/interfaces/doughnutcontroller.html)

<a href="#constructors" class="header-anchor">#</a> Constructors
----------------------------------------------------------------

### <a href="#constructor" class="header-anchor">#</a> constructor

\+ **new DatasetController**&lt;TType, TElement, TDatasetElement, TParsedData&gt;(`chart`: [*Chart*](/docs/3.2.0/api/classes/chart.html)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;, `datasetIndex`: *number*): <a href="/docs/3.2.0/api/classes/datasetcontroller.html" class="router-link-exact-active router-link-active"><em>DatasetController</em></a>&lt;TType, TElement, TDatasetElement, TParsedData&gt;

#### <a href="#type-parameters-2" class="header-anchor">#</a> Type parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th><th style="text-align: left;">Default</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>TType</code></td><td style="text-align: left;"><em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em></td><td style="text-align: left;"><em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em></td></tr><tr class="even"><td style="text-align: left;"><code>TElement</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/#element"><em>Element</em></a>&lt;{}, {}, TElement&gt;</td><td style="text-align: left;"><a href="/docs/3.2.0/api/#element"><em>Element</em></a>&lt;{}, {}&gt;</td></tr><tr class="odd"><td style="text-align: left;"><code>TDatasetElement</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/#element"><em>Element</em></a>&lt;{}, {}, TDatasetElement&gt;</td><td style="text-align: left;"><a href="/docs/3.2.0/api/#element"><em>Element</em></a>&lt;{}, {}&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>TParsedData</code></td><td style="text-align: left;">-</td><td style="text-align: left;"><a href="/docs/3.2.0/api/#parseddatatype"><em>ParsedDataType</em></a>&lt;TType&gt;</td></tr></tbody></table>

#### <a href="#parameters" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chart</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/chart.html"><em>Chart</em></a>&lt;<em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em>, (number | <a href="/docs/3.2.0/api/interfaces/scatterdatapoint.html"><em>ScatterDataPoint</em></a> | <a href="/docs/3.2.0/api/interfaces/bubbledatapoint.html"><em>BubbleDataPoint</em></a>)[], unknown&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>datasetIndex</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** <a href="/docs/3.2.0/api/classes/datasetcontroller.html" class="router-link-exact-active router-link-active"><em>DatasetController</em></a>&lt;TType, TElement, TDatasetElement, TParsedData&gt;

Defined in: [index.esm.d.ts:532 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L532)

<a href="#properties" class="header-anchor">#</a> Properties
------------------------------------------------------------

### <a href="#cachedmeta" class="header-anchor">#</a> \_cachedMeta

• `Readonly` **\_cachedMeta**: [*ChartMeta*](/docs/3.2.0/api/interfaces/chartmeta.html)&lt;TElement, TDatasetElement&gt;

Defined in: [index.esm.d.ts:537 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L537)

------------------------------------------------------------------------

### <a href="#chart" class="header-anchor">#</a> chart

• `Readonly` **chart**: [*Chart*](/docs/3.2.0/api/classes/chart.html)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;

Defined in: [index.esm.d.ts:535 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L535)

------------------------------------------------------------------------

### <a href="#enableoptionsharing" class="header-anchor">#</a> enableOptionSharing

• **enableOptionSharing**: *boolean*

Defined in: [index.esm.d.ts:538 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L538)

------------------------------------------------------------------------

### <a href="#index" class="header-anchor">#</a> index

• `Readonly` **index**: *number*

Defined in: [index.esm.d.ts:536 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L536)

<a href="#methods" class="header-anchor">#</a> Methods
------------------------------------------------------

### <a href="#addelements" class="header-anchor">#</a> addElements

▸ **addElements**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:554 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L554)

------------------------------------------------------------------------

### <a href="#applystack" class="header-anchor">#</a> applyStack

▸ `Protected`**applyStack**(`scale`: [*Scale*](/docs/3.2.0/api/classes/scale.html)&lt;[*CoreScaleOptions*](/docs/3.2.0/api/interfaces/corescaleoptions.html)&gt;, `parsed`: *unknown*\[\]): *number*

#### <a href="#parameters-2" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>scale</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/scale.html"><em>Scale</em></a>&lt;<a href="/docs/3.2.0/api/interfaces/corescaleoptions.html"><em>CoreScaleOptions</em></a>&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>parsed</code></td><td style="text-align: left;"><em>unknown</em>[]</td></tr></tbody></table>

**Returns:** *number*

Defined in: [index.esm.d.ts:590 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L590)

------------------------------------------------------------------------

### <a href="#buildorupdateelements" class="header-anchor">#</a> buildOrUpdateElements

▸ **buildOrUpdateElements**(`resetNewElements?`: *boolean*): *void*

#### <a href="#parameters-3" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>resetNewElements?</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:555 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L555)

------------------------------------------------------------------------

### <a href="#configure" class="header-anchor">#</a> configure

▸ **configure**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:552 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L552)

------------------------------------------------------------------------

### <a href="#draw" class="header-anchor">#</a> draw

▸ **draw**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:547 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L547)

------------------------------------------------------------------------

### <a href="#getallparsedvalues" class="header-anchor">#</a> getAllParsedValues

▸ **getAllParsedValues**(`scale`: [*Scale*](/docs/3.2.0/api/classes/scale.html)&lt;[*CoreScaleOptions*](/docs/3.2.0/api/interfaces/corescaleoptions.html)&gt;): *number*\[\]

#### <a href="#parameters-4" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>scale</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/scale.html"><em>Scale</em></a>&lt;<a href="/docs/3.2.0/api/interfaces/corescaleoptions.html"><em>CoreScaleOptions</em></a>&gt;</td></tr></tbody></table>

**Returns:** *number*\[\]

Defined in: [index.esm.d.ts:541 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L541)

------------------------------------------------------------------------

### <a href="#getdataset" class="header-anchor">#</a> getDataset

▸ **getDataset**(): [*ChartDataset*](/docs/3.2.0/api/#chartdataset)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\]&gt;

**Returns:** [*ChartDataset*](/docs/3.2.0/api/#chartdataset)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\]&gt;

Defined in: [index.esm.d.ts:549 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L549)

------------------------------------------------------------------------

### <a href="#getlabelandvalue" class="header-anchor">#</a> getLabelAndValue

▸ `Protected`**getLabelAndValue**(`index`: *number*): *object*

#### <a href="#parameters-5" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>index</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *object*

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>label</code></td><td style="text-align: left;"><em>string</em></td></tr><tr class="even"><td style="text-align: left;"><code>value</code></td><td style="text-align: left;"><em>string</em></td></tr></tbody></table>

Defined in: [index.esm.d.ts:542 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L542)

------------------------------------------------------------------------

### <a href="#getmaxoverflow" class="header-anchor">#</a> getMaxOverflow

▸ `Protected`**getMaxOverflow**(): *number* | *boolean*

**Returns:** *number* | *boolean*

Defined in: [index.esm.d.ts:546 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L546)

------------------------------------------------------------------------

### <a href="#getmeta" class="header-anchor">#</a> getMeta

▸ **getMeta**(): [*ChartMeta*](/docs/3.2.0/api/interfaces/chartmeta.html)&lt;TElement, TDatasetElement&gt;

**Returns:** [*ChartMeta*](/docs/3.2.0/api/interfaces/chartmeta.html)&lt;TElement, TDatasetElement&gt;

Defined in: [index.esm.d.ts:550 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L550)

------------------------------------------------------------------------

### <a href="#getminmax" class="header-anchor">#</a> getMinMax

▸ `Protected`**getMinMax**(`scale`: [*Scale*](/docs/3.2.0/api/classes/scale.html)&lt;[*CoreScaleOptions*](/docs/3.2.0/api/interfaces/corescaleoptions.html)&gt;, `canStack?`: *boolean*): *object*

#### <a href="#parameters-6" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>scale</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/scale.html"><em>Scale</em></a>&lt;<a href="/docs/3.2.0/api/interfaces/corescaleoptions.html"><em>CoreScaleOptions</em></a>&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>canStack?</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

**Returns:** *object*

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>max</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>min</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

Defined in: [index.esm.d.ts:597 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L597)

------------------------------------------------------------------------

### <a href="#getparsed" class="header-anchor">#</a> getParsed

▸ `Protected`**getParsed**(`index`: *number*): TParsedData

#### <a href="#parameters-7" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>index</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** TParsedData

Defined in: [index.esm.d.ts:589 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L589)

------------------------------------------------------------------------

### <a href="#getscaleforid" class="header-anchor">#</a> getScaleForId

▸ **getScaleForId**(`scaleID`: *string*): [*Scale*](/docs/3.2.0/api/classes/scale.html)&lt;[*CoreScaleOptions*](/docs/3.2.0/api/interfaces/corescaleoptions.html)&gt;

#### <a href="#parameters-8" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>scaleID</code></td><td style="text-align: left;"><em>string</em></td></tr></tbody></table>

**Returns:** [*Scale*](/docs/3.2.0/api/classes/scale.html)&lt;[*CoreScaleOptions*](/docs/3.2.0/api/interfaces/corescaleoptions.html)&gt;

Defined in: [index.esm.d.ts:551 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L551)

------------------------------------------------------------------------

### <a href="#getsharedoptions" class="header-anchor">#</a> getSharedOptions

▸ `Protected`**getSharedOptions**(`options`: *Record*&lt;string, unknown&gt;): *Record*&lt;string, unknown&gt;

Utility for checking if the options are shared and should be animated separately.

#### <a href="#parameters-9" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>options</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;</td></tr></tbody></table>

**Returns:** *Record*&lt;string, unknown&gt;

Defined in: [index.esm.d.ts:564 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L564)

------------------------------------------------------------------------

### <a href="#getstyle" class="header-anchor">#</a> getStyle

▸ **getStyle**(`index`: *number*, `active`: *boolean*): *Record*&lt;string, unknown&gt;

#### <a href="#parameters-10" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>index</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>active</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

**Returns:** *Record*&lt;string, unknown&gt;

Defined in: [index.esm.d.ts:557 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L557)

------------------------------------------------------------------------

### <a href="#includeoptions" class="header-anchor">#</a> includeOptions

▸ `Protected`**includeOptions**(`mode`: *resize* | *reset* | *none* | *hide* | *show* | *normal* | *active*, `sharedOptions`: *Record*&lt;string, unknown&gt;): *boolean*

Utility for determining if `options` should be included in the updated properties

#### <a href="#parameters-11" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>mode</code></td><td style="text-align: left;"><em>resize</em> | <em>reset</em> | <em>none</em> | <em>hide</em> | <em>show</em> | <em>normal</em> | <em>active</em></td></tr><tr class="even"><td style="text-align: left;"><code>sharedOptions</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;</td></tr></tbody></table>

**Returns:** *boolean*

Defined in: [index.esm.d.ts:569 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L569)

------------------------------------------------------------------------

### <a href="#initialize" class="header-anchor">#</a> initialize

▸ **initialize**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:553 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L553)

------------------------------------------------------------------------

### <a href="#linkscales" class="header-anchor">#</a> linkScales

▸ **linkScales**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:540 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L540)

------------------------------------------------------------------------

### <a href="#parse" class="header-anchor">#</a> parse

▸ **parse**(`start`: *number*, `count`: *number*): *void*

#### <a href="#parameters-12" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>start</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>count</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:585 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L585)

------------------------------------------------------------------------

### <a href="#parsearraydata" class="header-anchor">#</a> parseArrayData

▸ `Protected`**parseArrayData**(`meta`: [*ChartMeta*](/docs/3.2.0/api/interfaces/chartmeta.html)&lt;TElement, TDatasetElement&gt;, `data`: *Record*&lt;string, unknown&gt;\[\], `start`: *number*, `count`: *number*): *Record*&lt;string, unknown&gt;\[\]

#### <a href="#parameters-13" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>meta</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/chartmeta.html"><em>ChartMeta</em></a>&lt;TElement, TDatasetElement&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>data</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;[]</td></tr><tr class="odd"><td style="text-align: left;"><code>start</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>count</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *Record*&lt;string, unknown&gt;\[\]

Defined in: [index.esm.d.ts:587 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L587)

------------------------------------------------------------------------

### <a href="#parseobjectdata" class="header-anchor">#</a> parseObjectData

▸ `Protected`**parseObjectData**(`meta`: [*ChartMeta*](/docs/3.2.0/api/interfaces/chartmeta.html)&lt;TElement, TDatasetElement&gt;, `data`: *Record*&lt;string, unknown&gt;\[\], `start`: *number*, `count`: *number*): *Record*&lt;string, unknown&gt;\[\]

#### <a href="#parameters-14" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>meta</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/chartmeta.html"><em>ChartMeta</em></a>&lt;TElement, TDatasetElement&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>data</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;[]</td></tr><tr class="odd"><td style="text-align: left;"><code>start</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>count</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *Record*&lt;string, unknown&gt;\[\]

Defined in: [index.esm.d.ts:588 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L588)

------------------------------------------------------------------------

### <a href="#parseprimitivedata" class="header-anchor">#</a> parsePrimitiveData

▸ `Protected`**parsePrimitiveData**(`meta`: [*ChartMeta*](/docs/3.2.0/api/interfaces/chartmeta.html)&lt;TElement, TDatasetElement&gt;, `data`: *Record*&lt;string, unknown&gt;\[\], `start`: *number*, `count`: *number*): *Record*&lt;string, unknown&gt;\[\]

#### <a href="#parameters-15" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>meta</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/chartmeta.html"><em>ChartMeta</em></a>&lt;TElement, TDatasetElement&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>data</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;[]</td></tr><tr class="odd"><td style="text-align: left;"><code>start</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>count</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *Record*&lt;string, unknown&gt;\[\]

Defined in: [index.esm.d.ts:586 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L586)

------------------------------------------------------------------------

### <a href="#removehoverstyle" class="header-anchor">#</a> removeHoverStyle

▸ **removeHoverStyle**(`element`: TElement, `datasetIndex`: *number*, `index`: *number*): *void*

#### <a href="#parameters-16" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>element</code></td><td style="text-align: left;">TElement</td></tr><tr class="even"><td style="text-align: left;"><code>datasetIndex</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="odd"><td style="text-align: left;"><code>index</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:582 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L582)

------------------------------------------------------------------------

### <a href="#reset" class="header-anchor">#</a> reset

▸ **reset**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:548 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L548)

------------------------------------------------------------------------

### <a href="#resolvedataelementoptions" class="header-anchor">#</a> resolveDataElementOptions

▸ `Protected`**resolveDataElementOptions**(`index`: *number*, `mode`: *resize* | *reset* | *none* | *hide* | *show* | *normal* | *active*): *Record*&lt;string, unknown&gt;

#### <a href="#parameters-17" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>index</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>mode</code></td><td style="text-align: left;"><em>resize</em> | <em>reset</em> | <em>none</em> | <em>hide</em> | <em>show</em> | <em>normal</em> | <em>active</em></td></tr></tbody></table>

**Returns:** *Record*&lt;string, unknown&gt;

Defined in: [index.esm.d.ts:559 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L559)

------------------------------------------------------------------------

### <a href="#resolvedatasetelementoptions" class="header-anchor">#</a> resolveDatasetElementOptions

▸ `Protected`**resolveDatasetElementOptions**(`mode`: *resize* | *reset* | *none* | *hide* | *show* | *normal* | *active*): *Record*&lt;string, unknown&gt;

#### <a href="#parameters-18" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>mode</code></td><td style="text-align: left;"><em>resize</em> | <em>reset</em> | <em>none</em> | <em>hide</em> | <em>show</em> | <em>normal</em> | <em>active</em></td></tr></tbody></table>

**Returns:** *Record*&lt;string, unknown&gt;

Defined in: [index.esm.d.ts:558 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L558)

------------------------------------------------------------------------

### <a href="#sethoverstyle" class="header-anchor">#</a> setHoverStyle

▸ **setHoverStyle**(`element`: TElement, `datasetIndex`: *number*, `index`: *number*): *void*

#### <a href="#parameters-19" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>element</code></td><td style="text-align: left;">TElement</td></tr><tr class="even"><td style="text-align: left;"><code>datasetIndex</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="odd"><td style="text-align: left;"><code>index</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:583 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L583)

------------------------------------------------------------------------

### <a href="#update" class="header-anchor">#</a> update

▸ **update**(`mode`: *resize* | *reset* | *none* | *hide* | *show* | *normal* | *active*): *void*

#### <a href="#parameters-20" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>mode</code></td><td style="text-align: left;"><em>resize</em> | <em>reset</em> | <em>none</em> | <em>hide</em> | <em>show</em> | <em>normal</em> | <em>active</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:544 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L544)

------------------------------------------------------------------------

### <a href="#updateelement" class="header-anchor">#</a> updateElement

▸ `Protected`**updateElement**(`element`: TElement | TDatasetElement, `index`: *number*, `properties`: *Record*&lt;string, unknown&gt;, `mode`: *resize* | *reset* | *none* | *hide* | *show* | *normal* | *active*): *void*

Utility for updating an element with new properties, using animations when appropriate.

#### <a href="#parameters-21" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>element</code></td><td style="text-align: left;">TElement | TDatasetElement</td></tr><tr class="even"><td style="text-align: left;"><code>index</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="odd"><td style="text-align: left;"><code>properties</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>mode</code></td><td style="text-align: left;"><em>resize</em> | <em>reset</em> | <em>none</em> | <em>hide</em> | <em>show</em> | <em>normal</em> | <em>active</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:575 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L575)

------------------------------------------------------------------------

### <a href="#updateelements" class="header-anchor">#</a> updateElements

▸ **updateElements**(`elements`: TElement\[\], `start`: *number*, `count`: *number*, `mode`: *resize* | *reset* | *none* | *hide* | *show* | *normal* | *active*): *void*

#### <a href="#parameters-22" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>elements</code></td><td style="text-align: left;">TElement[]</td></tr><tr class="even"><td style="text-align: left;"><code>start</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="odd"><td style="text-align: left;"><code>count</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>mode</code></td><td style="text-align: left;"><em>resize</em> | <em>reset</em> | <em>none</em> | <em>hide</em> | <em>show</em> | <em>normal</em> | <em>active</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:543 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L543)

------------------------------------------------------------------------

### <a href="#updateindex" class="header-anchor">#</a> updateIndex

▸ **updateIndex**(`datasetIndex`: *number*): *void*

#### <a href="#parameters-23" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>datasetIndex</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:545 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L545)

------------------------------------------------------------------------

### <a href="#updaterangefromparsed" class="header-anchor">#</a> updateRangeFromParsed

▸ `Protected`**updateRangeFromParsed**(`range`: { `max`: *number* ; `min`: *number* }, `scale`: [*Scale*](/docs/3.2.0/api/classes/scale.html)&lt;[*CoreScaleOptions*](/docs/3.2.0/api/interfaces/corescaleoptions.html)&gt;, `parsed`: *unknown*\[\], `stack`: *string* | *boolean*): *void*

#### <a href="#parameters-24" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>range</code></td><td style="text-align: left;"><em>object</em></td></tr><tr class="even"><td style="text-align: left;"><code>range.max</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="odd"><td style="text-align: left;"><code>range.min</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>scale</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/scale.html"><em>Scale</em></a>&lt;<a href="/docs/3.2.0/api/interfaces/corescaleoptions.html"><em>CoreScaleOptions</em></a>&gt;</td></tr><tr class="odd"><td style="text-align: left;"><code>parsed</code></td><td style="text-align: left;"><em>unknown</em>[]</td></tr><tr class="even"><td style="text-align: left;"><code>stack</code></td><td style="text-align: left;"><em>string</em> | <em>boolean</em></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:591 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L591)

------------------------------------------------------------------------

### <a href="#updatesharedoptions" class="header-anchor">#</a> updateSharedOptions

▸ `Protected`**updateSharedOptions**(`sharedOptions`: *Record*&lt;string, unknown&gt;, `mode`: *resize* | *reset* | *none* | *hide* | *show* | *normal* | *active*, `newOptions`: *Record*&lt;string, unknown&gt;): *void*

Utility to animate the shared options, that are potentially affecting multiple elements.

#### <a href="#parameters-25" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>sharedOptions</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;</td></tr><tr class="even"><td style="text-align: left;"><code>mode</code></td><td style="text-align: left;"><em>resize</em> | <em>reset</em> | <em>none</em> | <em>hide</em> | <em>show</em> | <em>normal</em> | <em>active</em></td></tr><tr class="odd"><td style="text-align: left;"><code>newOptions</code></td><td style="text-align: left;"><em>Record</em>&lt;string, unknown&gt;</td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:581 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L581)

<span class="prev"> ← <a href="/docs/3.2.0/api/classes/chart.html" class="prev">Chart</a> </span> <span class="next"> [DomPlatform](/docs/3.2.0/api/classes/domplatform.html) → </span>
