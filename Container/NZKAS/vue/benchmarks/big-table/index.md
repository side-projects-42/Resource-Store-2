Rendering Dynamic Big Table
===========================

Reference: [insin/ui-lib-samples/large-datasets](http://insin.github.io/ui-lib-samples/large-datasets/index.html)

{{ rows }} x {{ cols }}, {{ optimized ? 'with' : 'without' }} optimization. {{ msg }}

Disable optimization Enable optimization (Object.freeze) Unmount Rerender with fresh data

**Filter Data**: <span v-if="filter"> — Filtering **{{ filter }}** over {{ dataPoints }} data points, {{ visibleCount() }} found. </span>

<table><tbody><tr class="odd"><td>{{ row.id }}</td><td>{{ item.value }}</td></tr></tbody></table>
