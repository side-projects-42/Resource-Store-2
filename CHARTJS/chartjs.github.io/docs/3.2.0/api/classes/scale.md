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
        -   <a href="/docs/3.2.0/api/classes/domplatform.html" class="sidebar-link">DomPlatform</a>
        -   <a href="/docs/3.2.0/api/classes/scale.html" class="active sidebar-link">Scale</a>

    -   Interfaces <span class="arrow right"></span>

<a href="#class-scale-o" class="header-anchor">#</a> Class: Scale&lt;O&gt;
==========================================================================

<a href="#type-parameters" class="header-anchor">#</a> Type parameters
----------------------------------------------------------------------

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th><th style="text-align: left;">Default</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>O</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/corescaleoptions.html"><em>CoreScaleOptions</em></a></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/corescaleoptions.html"><em>CoreScaleOptions</em></a></td></tr></tbody></table>

<a href="#hierarchy" class="header-anchor">#</a> Hierarchy
----------------------------------------------------------

-   [*Element*](/docs/3.2.0/api/#element)&lt;{}, O&gt;

-   [*LayoutItem*](/docs/3.2.0/api/interfaces/layoutitem.html)

    ↳ **Scale**

    ↳↳ [*TimeScale*](/docs/3.2.0/api/interfaces/timescale.html)

    ↳↳ [*RadialLinearScale*](/docs/3.2.0/api/interfaces/radiallinearscale.html)

<a href="#constructors" class="header-anchor">#</a> Constructors
----------------------------------------------------------------

### <a href="#constructor" class="header-anchor">#</a> constructor

\+ **new Scale**&lt;O&gt;(`cfg`: { `chart`: [*Chart*](/docs/3.2.0/api/classes/chart.html)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt; ; `ctx`: CanvasRenderingContext2D ; `id`: *string* ; `type`: *string* }): <a href="/docs/3.2.0/api/classes/scale.html" class="router-link-exact-active router-link-active"><em>Scale</em></a>&lt;O&gt;

#### <a href="#type-parameters-2" class="header-anchor">#</a> Type parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th><th style="text-align: left;">Default</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>O</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/corescaleoptions.html"><em>CoreScaleOptions</em></a></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/corescaleoptions.html"><em>CoreScaleOptions</em></a></td></tr></tbody></table>

#### <a href="#parameters" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>cfg</code></td><td style="text-align: left;"><em>object</em></td></tr><tr class="even"><td style="text-align: left;"><code>cfg.chart</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/classes/chart.html"><em>Chart</em></a>&lt;<em>bar</em> | <em>line</em> | <em>scatter</em> | <em>bubble</em> | <em>pie</em> | <em>doughnut</em> | <em>polarArea</em> | <em>radar</em>, (number | <a href="/docs/3.2.0/api/interfaces/scatterdatapoint.html"><em>ScatterDataPoint</em></a> | <a href="/docs/3.2.0/api/interfaces/bubbledatapoint.html"><em>BubbleDataPoint</em></a>)[], unknown&gt;</td></tr><tr class="odd"><td style="text-align: left;"><code>cfg.ctx</code></td><td style="text-align: left;">CanvasRenderingContext2D</td></tr><tr class="even"><td style="text-align: left;"><code>cfg.id</code></td><td style="text-align: left;"><em>string</em></td></tr><tr class="odd"><td style="text-align: left;"><code>cfg.type</code></td><td style="text-align: left;"><em>string</em></td></tr></tbody></table>

**Returns:** <a href="/docs/3.2.0/api/classes/scale.html" class="router-link-exact-active router-link-active"><em>Scale</em></a>&lt;O&gt;

Inherited from: Element&lt;{}, O&gt;.constructor

Defined in: [index.esm.d.ts:1257 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1257)

<a href="#properties" class="header-anchor">#</a> Properties
------------------------------------------------------------

### <a href="#active" class="header-anchor">#</a> active

• `Readonly` **active**: *boolean*

Inherited from: Element.active

Defined in: [element.d.ts:6 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/element.d.ts#L6)

------------------------------------------------------------------------

### <a href="#axis" class="header-anchor">#</a> axis

• **axis**: *string*

Defined in: [index.esm.d.ts:1160 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1160)

------------------------------------------------------------------------

### <a href="#bottom" class="header-anchor">#</a> bottom

• **bottom**: *number*

Bottom edge of the item. Set by layout system and cannot be used in update

Inherited from: [LayoutItem](/docs/3.2.0/api/interfaces/layoutitem.html).[bottom](/docs/3.2.0/api/interfaces/layoutitem.html#bottom)

Defined in: [layout.d.ts:41 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/layout.d.ts#L41)

------------------------------------------------------------------------

### <a href="#chart" class="header-anchor">#</a> chart

• `Readonly` **chart**: [*Chart*](/docs/3.2.0/api/classes/chart.html)&lt;*bar* | *line* | *scatter* | *bubble* | *pie* | *doughnut* | *polarArea* | *radar*, (number | [*ScatterDataPoint*](/docs/3.2.0/api/interfaces/scatterdatapoint.html) | [*BubbleDataPoint*](/docs/3.2.0/api/interfaces/bubbledatapoint.html))\[\], unknown&gt;

Defined in: [index.esm.d.ts:1150 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1150)

------------------------------------------------------------------------

### <a href="#ctx" class="header-anchor">#</a> ctx

• `Readonly` **ctx**: CanvasRenderingContext2D

Defined in: [index.esm.d.ts:1149 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1149)

------------------------------------------------------------------------

### <a href="#fullsize" class="header-anchor">#</a> fullSize

• **fullSize**: *boolean*

if true, and the item is horizontal, then push vertical boxes down

Inherited from: [LayoutItem](/docs/3.2.0/api/interfaces/layoutitem.html).[fullSize](/docs/3.2.0/api/interfaces/layoutitem.html#fullsize)

Defined in: [layout.d.ts:17 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/layout.d.ts#L17)

------------------------------------------------------------------------

### <a href="#height" class="header-anchor">#</a> height

• **height**: *number*

Height of item. Must be valid after update()

Inherited from: [LayoutItem](/docs/3.2.0/api/interfaces/layoutitem.html).[height](/docs/3.2.0/api/interfaces/layoutitem.html#height)

Defined in: [layout.d.ts:25 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/layout.d.ts#L25)

------------------------------------------------------------------------

### <a href="#id" class="header-anchor">#</a> id

• `Readonly` **id**: *string*

Defined in: [index.esm.d.ts:1147 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1147)

------------------------------------------------------------------------

### <a href="#labelrotation" class="header-anchor">#</a> labelRotation

• **labelRotation**: *number*

Defined in: [index.esm.d.ts:1161 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1161)

------------------------------------------------------------------------

### <a href="#left" class="header-anchor">#</a> left

• **left**: *number*

Left edge of the item. Set by layout system and cannot be used in update

Inherited from: [LayoutItem](/docs/3.2.0/api/interfaces/layoutitem.html).[left](/docs/3.2.0/api/interfaces/layoutitem.html#left)

Defined in: [layout.d.ts:29 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/layout.d.ts#L29)

------------------------------------------------------------------------

### <a href="#max" class="header-anchor">#</a> max

• **max**: *number*

Defined in: [index.esm.d.ts:1163 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1163)

------------------------------------------------------------------------

### <a href="#maxheight" class="header-anchor">#</a> maxHeight

• **maxHeight**: *number*

Defined in: [index.esm.d.ts:1153 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1153)

------------------------------------------------------------------------

### <a href="#maxwidth" class="header-anchor">#</a> maxWidth

• **maxWidth**: *number*

Defined in: [index.esm.d.ts:1152 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1152)

------------------------------------------------------------------------

### <a href="#min" class="header-anchor">#</a> min

• **min**: *number*

Defined in: [index.esm.d.ts:1162 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1162)

------------------------------------------------------------------------

### <a href="#options" class="header-anchor">#</a> options

• `Readonly` **options**: O

Inherited from: Element.options

Defined in: [element.d.ts:7 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/element.d.ts#L7)

------------------------------------------------------------------------

### <a href="#paddingbottom" class="header-anchor">#</a> paddingBottom

• **paddingBottom**: *number*

Defined in: [index.esm.d.ts:1156 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1156)

------------------------------------------------------------------------

### <a href="#paddingleft" class="header-anchor">#</a> paddingLeft

• **paddingLeft**: *number*

Defined in: [index.esm.d.ts:1157 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1157)

------------------------------------------------------------------------

### <a href="#paddingright" class="header-anchor">#</a> paddingRight

• **paddingRight**: *number*

Defined in: [index.esm.d.ts:1158 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1158)

------------------------------------------------------------------------

### <a href="#paddingtop" class="header-anchor">#</a> paddingTop

• **paddingTop**: *number*

Defined in: [index.esm.d.ts:1155 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1155)

------------------------------------------------------------------------

### <a href="#position" class="header-anchor">#</a> position

• **position**: [*LayoutPosition*](/docs/3.2.0/api/#layoutposition)

The position of the item in the chart layout. Possible values are

Inherited from: [LayoutItem](/docs/3.2.0/api/interfaces/layoutitem.html).[position](/docs/3.2.0/api/interfaces/layoutitem.html#position)

Defined in: [layout.d.ts:9 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/layout.d.ts#L9)

------------------------------------------------------------------------

### <a href="#right" class="header-anchor">#</a> right

• **right**: *number*

Right edge of the item. Set by layout system and cannot be used in update

Inherited from: [LayoutItem](/docs/3.2.0/api/interfaces/layoutitem.html).[right](/docs/3.2.0/api/interfaces/layoutitem.html#right)

Defined in: [layout.d.ts:37 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/layout.d.ts#L37)

------------------------------------------------------------------------

### <a href="#ticks" class="header-anchor">#</a> ticks

• **ticks**: [*Tick*](/docs/3.2.0/api/interfaces/tick.html)\[\]

Defined in: [index.esm.d.ts:1164 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1164)

------------------------------------------------------------------------

### <a href="#top" class="header-anchor">#</a> top

• **top**: *number*

Top edge of the item. Set by layout system and cannot be used in update

Inherited from: [LayoutItem](/docs/3.2.0/api/interfaces/layoutitem.html).[top](/docs/3.2.0/api/interfaces/layoutitem.html#top)

Defined in: [layout.d.ts:33 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/layout.d.ts#L33)

------------------------------------------------------------------------

### <a href="#type" class="header-anchor">#</a> type

• `Readonly` **type**: *string*

Defined in: [index.esm.d.ts:1148 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1148)

------------------------------------------------------------------------

### <a href="#weight" class="header-anchor">#</a> weight

• **weight**: *number*

The weight used to sort the item. Higher weights are further away from the chart area

Inherited from: [LayoutItem](/docs/3.2.0/api/interfaces/layoutitem.html).[weight](/docs/3.2.0/api/interfaces/layoutitem.html#weight)

Defined in: [layout.d.ts:13 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/layout.d.ts#L13)

------------------------------------------------------------------------

### <a href="#width" class="header-anchor">#</a> width

• **width**: *number*

Width of item. Must be valid after update()

Inherited from: [LayoutItem](/docs/3.2.0/api/interfaces/layoutitem.html).[width](/docs/3.2.0/api/interfaces/layoutitem.html#width)

Defined in: [layout.d.ts:21 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/layout.d.ts#L21)

------------------------------------------------------------------------

### <a href="#x" class="header-anchor">#</a> x

• `Readonly` **x**: *number*

Inherited from: Element.x

Defined in: [element.d.ts:4 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/element.d.ts#L4)

------------------------------------------------------------------------

### <a href="#y" class="header-anchor">#</a> y

• `Readonly` **y**: *number*

Inherited from: Element.y

Defined in: [element.d.ts:5 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/element.d.ts#L5)

<a href="#methods" class="header-anchor">#</a> Methods
------------------------------------------------------

### <a href="#afterbuildticks" class="header-anchor">#</a> afterBuildTicks

▸ **afterBuildTicks**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1244 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1244)

------------------------------------------------------------------------

### <a href="#aftercalculatelabelrotation" class="header-anchor">#</a> afterCalculateLabelRotation

▸ **afterCalculateLabelRotation**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1250 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1250)

------------------------------------------------------------------------

### <a href="#afterdatalimits" class="header-anchor">#</a> afterDataLimits

▸ **afterDataLimits**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1241 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1241)

------------------------------------------------------------------------

### <a href="#afterfit" class="header-anchor">#</a> afterFit

▸ **afterFit**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1253 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1253)

------------------------------------------------------------------------

### <a href="#aftersetdimensions" class="header-anchor">#</a> afterSetDimensions

▸ **afterSetDimensions**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1238 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1238)

------------------------------------------------------------------------

### <a href="#afterticktolabelconversion" class="header-anchor">#</a> afterTickToLabelConversion

▸ **afterTickToLabelConversion**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1247 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1247)

------------------------------------------------------------------------

### <a href="#afterupdate" class="header-anchor">#</a> afterUpdate

▸ **afterUpdate**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1235 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1235)

------------------------------------------------------------------------

### <a href="#beforebuildticks" class="header-anchor">#</a> beforeBuildTicks

▸ **beforeBuildTicks**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1242 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1242)

------------------------------------------------------------------------

### <a href="#beforecalculatelabelrotation" class="header-anchor">#</a> beforeCalculateLabelRotation

▸ **beforeCalculateLabelRotation**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1248 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1248)

------------------------------------------------------------------------

### <a href="#beforedatalimits" class="header-anchor">#</a> beforeDataLimits

▸ **beforeDataLimits**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1239 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1239)

------------------------------------------------------------------------

### <a href="#beforefit" class="header-anchor">#</a> beforeFit

▸ **beforeFit**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1251 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1251)

------------------------------------------------------------------------

### <a href="#beforelayout" class="header-anchor">#</a> beforeLayout

▸ `Optional`**beforeLayout**(): *void*

Called before the layout process starts

**Returns:** *void*

Inherited from: [LayoutItem](/docs/3.2.0/api/interfaces/layoutitem.html)

Defined in: [layout.d.ts:46 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/layout.d.ts#L46)

------------------------------------------------------------------------

### <a href="#beforesetdimensions" class="header-anchor">#</a> beforeSetDimensions

▸ **beforeSetDimensions**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1236 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1236)

------------------------------------------------------------------------

### <a href="#beforeticktolabelconversion" class="header-anchor">#</a> beforeTickToLabelConversion

▸ **beforeTickToLabelConversion**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1245 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1245)

------------------------------------------------------------------------

### <a href="#beforeupdate" class="header-anchor">#</a> beforeUpdate

▸ **beforeUpdate**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1233 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1233)

------------------------------------------------------------------------

### <a href="#buildticks" class="header-anchor">#</a> buildTicks

▸ **buildTicks**(): [*Tick*](/docs/3.2.0/api/interfaces/tick.html)\[\]

**Returns:** [*Tick*](/docs/3.2.0/api/interfaces/tick.html)\[\]

Defined in: [index.esm.d.ts:1243 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1243)

------------------------------------------------------------------------

### <a href="#calculatelabelrotation" class="header-anchor">#</a> calculateLabelRotation

▸ **calculateLabelRotation**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1249 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1249)

------------------------------------------------------------------------

### <a href="#configure" class="header-anchor">#</a> configure

▸ **configure**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1234 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1234)

------------------------------------------------------------------------

### <a href="#determinedatalimits" class="header-anchor">#</a> determineDataLimits

▸ **determineDataLimits**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1240 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1240)

------------------------------------------------------------------------

### <a href="#draw" class="header-anchor">#</a> draw

▸ **draw**(`chartArea`: [*ChartArea*](/docs/3.2.0/api/interfaces/chartarea.html)): *void*

Draws the element

#### <a href="#parameters-2" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chartArea</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/chartarea.html"><em>ChartArea</em></a></td></tr></tbody></table>

**Returns:** *void*

Inherited from: [LayoutItem](/docs/3.2.0/api/interfaces/layoutitem.html)

Defined in: [layout.d.ts:50 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/layout.d.ts#L50)

------------------------------------------------------------------------

### <a href="#drawgrid" class="header-anchor">#</a> drawGrid

▸ **drawGrid**(`chartArea`: [*ChartArea*](/docs/3.2.0/api/interfaces/chartarea.html)): *void*

#### <a href="#parameters-3" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chartArea</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/chartarea.html"><em>ChartArea</em></a></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:1169 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1169)

------------------------------------------------------------------------

### <a href="#drawlabels" class="header-anchor">#</a> drawLabels

▸ **drawLabels**(`chartArea`: [*ChartArea*](/docs/3.2.0/api/interfaces/chartarea.html)): *void*

#### <a href="#parameters-4" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chartArea</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/chartarea.html"><em>ChartArea</em></a></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:1168 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1168)

------------------------------------------------------------------------

### <a href="#drawtitle" class="header-anchor">#</a> drawTitle

▸ **drawTitle**(`chartArea`: [*ChartArea*](/docs/3.2.0/api/interfaces/chartarea.html)): *void*

#### <a href="#parameters-5" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>chartArea</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/chartarea.html"><em>ChartArea</em></a></td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:1167 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1167)

------------------------------------------------------------------------

### <a href="#fit" class="header-anchor">#</a> fit

▸ **fit**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1252 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1252)

------------------------------------------------------------------------

### <a href="#generateticklabels" class="header-anchor">#</a> generateTickLabels

▸ **generateTickLabels**(`ticks`: [*Tick*](/docs/3.2.0/api/interfaces/tick.html)\[\]): *void*

#### <a href="#parameters-6" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>ticks</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/tick.html"><em>Tick</em></a>[]</td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:1246 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1246)

------------------------------------------------------------------------

### <a href="#getbasepixel" class="header-anchor">#</a> getBasePixel

▸ **getBasePixel**(): *number*

Returns the pixel for the minimum chart value The coordinate (0, 0) is at the upper-left corner of the canvas

**Returns:** *number*

Defined in: [index.esm.d.ts:1225 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1225)

------------------------------------------------------------------------

### <a href="#getbasevalue" class="header-anchor">#</a> getBaseValue

▸ **getBaseValue**(): *number*

**Returns:** *number*

Defined in: [index.esm.d.ts:1219 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1219)

------------------------------------------------------------------------

### <a href="#getdecimalforpixel" class="header-anchor">#</a> getDecimalForPixel

▸ **getDecimalForPixel**(`pixel`: *number*): *number*

#### <a href="#parameters-7" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>pixel</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *number*

Defined in: [index.esm.d.ts:1175 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1175)

------------------------------------------------------------------------

### <a href="#getlabelforvalue" class="header-anchor">#</a> getLabelForValue

▸ **getLabelForValue**(`value`: *number*): *string*

Used to get the label to display in the tooltip for the given value

#### <a href="#parameters-8" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>value</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *string*

Defined in: [index.esm.d.ts:1195 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1195)

------------------------------------------------------------------------

### <a href="#getlabels" class="header-anchor">#</a> getLabels

▸ **getLabels**(): *string*\[\]

**Returns:** *string*\[\]

Defined in: [index.esm.d.ts:1232 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1232)

------------------------------------------------------------------------

### <a href="#getlinewidthforvalue" class="header-anchor">#</a> getLineWidthForValue

▸ **getLineWidthForValue**(`value`: *number*): *number*

Returns the grid line width at given value

#### <a href="#parameters-9" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>value</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *number*

Defined in: [index.esm.d.ts:1200 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1200)

------------------------------------------------------------------------

### <a href="#getmatchingvisiblemetas" class="header-anchor">#</a> getMatchingVisibleMetas

▸ **getMatchingVisibleMetas**(`type?`: *string*): [*ChartMeta*](/docs/3.2.0/api/interfaces/chartmeta.html)&lt;[*Element*](/docs/3.2.0/api/#element)&lt;{}, {}&gt;, [*Element*](/docs/3.2.0/api/#element)&lt;{}, {}&gt;&gt;\[\]

#### <a href="#parameters-10" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>type?</code></td><td style="text-align: left;"><em>string</em></td></tr></tbody></table>

**Returns:** [*ChartMeta*](/docs/3.2.0/api/interfaces/chartmeta.html)&lt;[*Element*](/docs/3.2.0/api/#element)&lt;{}, {}&gt;, [*Element*](/docs/3.2.0/api/#element)&lt;{}, {}&gt;&gt;\[\]

Defined in: [index.esm.d.ts:1165 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1165)

------------------------------------------------------------------------

### <a href="#getminmax" class="header-anchor">#</a> getMinMax

▸ **getMinMax**(`canStack`: *boolean*): *object*

#### <a href="#parameters-11" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>canStack</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

**Returns:** *object*

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>max</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>min</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

Defined in: [index.esm.d.ts:1230 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1230)

------------------------------------------------------------------------

### <a href="#getpadding" class="header-anchor">#</a> getPadding

▸ `Optional`**getPadding**(): [*ChartArea*](/docs/3.2.0/api/interfaces/chartarea.html)

Returns an object with padding on the edges

**Returns:** [*ChartArea*](/docs/3.2.0/api/interfaces/chartarea.html)

Inherited from: [LayoutItem](/docs/3.2.0/api/interfaces/layoutitem.html)

Defined in: [layout.d.ts:54 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/layout.d.ts#L54)

------------------------------------------------------------------------

### <a href="#getpixelfordecimal" class="header-anchor">#</a> getPixelForDecimal

▸ **getPixelForDecimal**(`decimal`: *number*): *number*

Utility for getting the pixel location of a percentage of scale The coordinate (0, 0) is at the upper-left corner of the canvas

#### <a href="#parameters-12" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>decimal</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *number*

Defined in: [index.esm.d.ts:1182 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1182)

------------------------------------------------------------------------

### <a href="#getpixelfortick" class="header-anchor">#</a> getPixelForTick

▸ **getPixelForTick**(`index`: *number*): *number*

Returns the location of the tick at the given index The coordinate (0, 0) is at the upper-left corner of the canvas

#### <a href="#parameters-13" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>index</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *number*

Defined in: [index.esm.d.ts:1189 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1189)

------------------------------------------------------------------------

### <a href="#getpixelforvalue" class="header-anchor">#</a> getPixelForValue

▸ **getPixelForValue**(`value`: *number*, `index`: *number*): *number*

Returns the location of the given data point. Value can either be an index or a numerical value The coordinate (0, 0) is at the upper-left corner of the canvas

#### <a href="#parameters-14" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>value</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>index</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *number*

Defined in: [index.esm.d.ts:1209 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1209)

------------------------------------------------------------------------

### <a href="#getprops" class="header-anchor">#</a> getProps

▸ **getProps**&lt;P&gt;(`props`: \[P\], `final?`: *boolean*): *Pick*&lt;{}, P&gt;

#### <a href="#type-parameters-3" class="header-anchor">#</a> Type parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>P</code></td><td style="text-align: left;"><em>never</em></td></tr></tbody></table>

#### <a href="#parameters-15" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>props</code></td><td style="text-align: left;">[P]</td></tr><tr class="even"><td style="text-align: left;"><code>final?</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

**Returns:** *Pick*&lt;{}, P&gt;

Inherited from: Element.getProps

Defined in: [element.d.ts:11 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/element.d.ts#L11)

▸ **getProps**&lt;P, P2&gt;(`props`: \[P, P2\], `final?`: *boolean*): *Pick*&lt;{}, P | P2&gt;

#### <a href="#type-parameters-4" class="header-anchor">#</a> Type parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>P</code></td><td style="text-align: left;"><em>never</em></td></tr><tr class="even"><td style="text-align: left;"><code>P2</code></td><td style="text-align: left;"><em>never</em></td></tr></tbody></table>

#### <a href="#parameters-16" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>props</code></td><td style="text-align: left;">[P, P2]</td></tr><tr class="even"><td style="text-align: left;"><code>final?</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

**Returns:** *Pick*&lt;{}, P | P2&gt;

Inherited from: Element.getProps

Defined in: [element.d.ts:12 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/element.d.ts#L12)

▸ **getProps**&lt;P, P2, P3&gt;(`props`: \[P, P2, P3\], `final?`: *boolean*): *Pick*&lt;{}, P | P2 | P3&gt;

#### <a href="#type-parameters-5" class="header-anchor">#</a> Type parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>P</code></td><td style="text-align: left;"><em>never</em></td></tr><tr class="even"><td style="text-align: left;"><code>P2</code></td><td style="text-align: left;"><em>never</em></td></tr><tr class="odd"><td style="text-align: left;"><code>P3</code></td><td style="text-align: left;"><em>never</em></td></tr></tbody></table>

#### <a href="#parameters-17" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>props</code></td><td style="text-align: left;">[P, P2, P3]</td></tr><tr class="even"><td style="text-align: left;"><code>final?</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

**Returns:** *Pick*&lt;{}, P | P2 | P3&gt;

Inherited from: Element.getProps

Defined in: [element.d.ts:13 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/element.d.ts#L13)

▸ **getProps**&lt;P, P2, P3, P4&gt;(`props`: \[P, P2, P3, P4\], `final?`: *boolean*): *Pick*&lt;{}, P | P2 | P3 | P4&gt;

#### <a href="#type-parameters-6" class="header-anchor">#</a> Type parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>P</code></td><td style="text-align: left;"><em>never</em></td></tr><tr class="even"><td style="text-align: left;"><code>P2</code></td><td style="text-align: left;"><em>never</em></td></tr><tr class="odd"><td style="text-align: left;"><code>P3</code></td><td style="text-align: left;"><em>never</em></td></tr><tr class="even"><td style="text-align: left;"><code>P4</code></td><td style="text-align: left;"><em>never</em></td></tr></tbody></table>

#### <a href="#parameters-18" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>props</code></td><td style="text-align: left;">[P, P2, P3, P4]</td></tr><tr class="even"><td style="text-align: left;"><code>final?</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

**Returns:** *Pick*&lt;{}, P | P2 | P3 | P4&gt;

Inherited from: Element.getProps

Defined in: [element.d.ts:17 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/element.d.ts#L17)

▸ **getProps**&lt;P, P2, P3, P4, P5&gt;(`props`: \[P, P2, P3, P4, P5\], `final?`: *boolean*): *Pick*&lt;{}, P | P2 | P3 | P4 | P5&gt;

#### <a href="#type-parameters-7" class="header-anchor">#</a> Type parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>P</code></td><td style="text-align: left;"><em>never</em></td></tr><tr class="even"><td style="text-align: left;"><code>P2</code></td><td style="text-align: left;"><em>never</em></td></tr><tr class="odd"><td style="text-align: left;"><code>P3</code></td><td style="text-align: left;"><em>never</em></td></tr><tr class="even"><td style="text-align: left;"><code>P4</code></td><td style="text-align: left;"><em>never</em></td></tr><tr class="odd"><td style="text-align: left;"><code>P5</code></td><td style="text-align: left;"><em>never</em></td></tr></tbody></table>

#### <a href="#parameters-19" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>props</code></td><td style="text-align: left;">[P, P2, P3, P4, P5]</td></tr><tr class="even"><td style="text-align: left;"><code>final?</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

**Returns:** *Pick*&lt;{}, P | P2 | P3 | P4 | P5&gt;

Inherited from: Element.getProps

Defined in: [element.d.ts:21 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/element.d.ts#L21)

▸ **getProps**(`props`: *never*\[\], `final?`: *boolean*): *object*

#### <a href="#parameters-20" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>props</code></td><td style="text-align: left;"><em>never</em>[]</td></tr><tr class="even"><td style="text-align: left;"><code>final?</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

**Returns:** *object*

Inherited from: Element.getProps

Defined in: [element.d.ts:25 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/element.d.ts#L25)

------------------------------------------------------------------------

### <a href="#getticks" class="header-anchor">#</a> getTicks

▸ **getTicks**(): [*Tick*](/docs/3.2.0/api/interfaces/tick.html)\[\]

**Returns:** [*Tick*](/docs/3.2.0/api/interfaces/tick.html)\[\]

Defined in: [index.esm.d.ts:1231 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1231)

------------------------------------------------------------------------

### <a href="#getuserbounds" class="header-anchor">#</a> getUserBounds

▸ **getUserBounds**(): *object*

**Returns:** *object*

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>max</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>maxDefined</code></td><td style="text-align: left;"><em>boolean</em></td></tr><tr class="odd"><td style="text-align: left;"><code>min</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>minDefined</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

Defined in: [index.esm.d.ts:1229 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1229)

------------------------------------------------------------------------

### <a href="#getvalueforpixel" class="header-anchor">#</a> getValueForPixel

▸ **getValueForPixel**(`pixel`: *number*): *number*

Used to get the data value from a given pixel. This is the inverse of getPixelForValue The coordinate (0, 0) is at the upper-left corner of the canvas

#### <a href="#parameters-21" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>pixel</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *number*

Defined in: [index.esm.d.ts:1217 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1217)

------------------------------------------------------------------------

### <a href="#hasvalue" class="header-anchor">#</a> hasValue

▸ **hasValue**(): *boolean*

**Returns:** *boolean*

Inherited from: Element.hasValue

Defined in: [element.d.ts:10 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/element.d.ts#L10)

------------------------------------------------------------------------

### <a href="#init" class="header-anchor">#</a> init

▸ **init**(`options`: O): *void*

#### <a href="#parameters-22" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>options</code></td><td style="text-align: left;">O</td></tr></tbody></table>

**Returns:** *void*

Defined in: [index.esm.d.ts:1227 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1227)

------------------------------------------------------------------------

### <a href="#isfullsize" class="header-anchor">#</a> isFullSize

▸ **isFullSize**(): *boolean*

**Returns:** *boolean*

Defined in: [index.esm.d.ts:1255 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1255)

------------------------------------------------------------------------

### <a href="#ishorizontal" class="header-anchor">#</a> isHorizontal

▸ **isHorizontal**(): *boolean*

returns true if the layout item is horizontal (ie. top or bottom)

**Returns:** *boolean*

Inherited from: [LayoutItem](/docs/3.2.0/api/interfaces/layoutitem.html)

Defined in: [layout.d.ts:58 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/layout.d.ts#L58)

------------------------------------------------------------------------

### <a href="#parse" class="header-anchor">#</a> parse

▸ **parse**(`raw`: *unknown*, `index`: *number*): *unknown*

#### <a href="#parameters-23" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>raw</code></td><td style="text-align: left;"><em>unknown</em></td></tr><tr class="even"><td style="text-align: left;"><code>index</code></td><td style="text-align: left;"><em>number</em></td></tr></tbody></table>

**Returns:** *unknown*

Defined in: [index.esm.d.ts:1228 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1228)

------------------------------------------------------------------------

### <a href="#setdimensions" class="header-anchor">#</a> setDimensions

▸ **setDimensions**(): *void*

**Returns:** *void*

Defined in: [index.esm.d.ts:1237 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/index.esm.d.ts#L1237)

------------------------------------------------------------------------

### <a href="#tooltipposition" class="header-anchor">#</a> tooltipPosition

▸ **tooltipPosition**(`useFinalPosition?`: *boolean*): [*Point*](/docs/3.2.0/api/interfaces/point.html)

#### <a href="#parameters-24" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>useFinalPosition?</code></td><td style="text-align: left;"><em>boolean</em></td></tr></tbody></table>

**Returns:** [*Point*](/docs/3.2.0/api/interfaces/point.html)

Inherited from: Element.tooltipPosition

Defined in: [element.d.ts:9 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/element.d.ts#L9)

------------------------------------------------------------------------

### <a href="#update" class="header-anchor">#</a> update

▸ **update**(`width`: *number*, `height`: *number*, `margins?`: [*ChartArea*](/docs/3.2.0/api/interfaces/chartarea.html)): *void*

Takes two parameters: width and height.

#### <a href="#parameters-25" class="header-anchor">#</a> Parameters:

<table><thead><tr class="header"><th style="text-align: left;">Name</th><th style="text-align: left;">Type</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>width</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="even"><td style="text-align: left;"><code>height</code></td><td style="text-align: left;"><em>number</em></td></tr><tr class="odd"><td style="text-align: left;"><code>margins?</code></td><td style="text-align: left;"><a href="/docs/3.2.0/api/interfaces/chartarea.html"><em>ChartArea</em></a></td></tr></tbody></table>

**Returns:** *void*

Inherited from: [LayoutItem](/docs/3.2.0/api/interfaces/layoutitem.html)

Defined in: [layout.d.ts:64 <span class="sr-only">(opens new window)</span>](https://github.com/chartjs/Chart.js/blob/0f1d07a/types/layout.d.ts#L64)

<span class="prev"> ← <a href="/docs/3.2.0/api/classes/domplatform.html" class="prev">DomPlatform</a> </span> <span class="next"> [ActiveDataPoint](/docs/3.2.0/api/interfaces/activedatapoint.html) → </span>
