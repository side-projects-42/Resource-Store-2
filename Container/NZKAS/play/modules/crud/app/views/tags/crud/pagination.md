%{ nbPages = \_caller.count.page(controllers.CRUD.getPageSize()) }%

&{'crud.list.size', \_caller.count, \_caller.type.name}

\#{if nbPages &gt; 1}

%{ limit = (\_limit != null ? \_limit : 10) start = \_caller.page - (int)(limit/2) + (limit % 2 ? 0 : 1) end = \_caller.page + (int)(limit/2) if(start &lt; 1){ extra = 1 - start end = (end + extra &lt; nbPages ? end + extra : nbPages) start = 1 }else if(end &gt; nbPages){ extra = end - nbPages start = (start - extra &gt; 1 ? start - extra : 1) end = nbPages } }% \#{if \_caller.page &gt; 1} <span class="previous"> \#{a @list().add('page', \_caller.page-1).add('search', \_caller.params.search).add('orderBy', \_caller.orderBy).add('order', \_caller.order)}&{'crud.pagination.previous'}\#{/a} </span> \#{/if} \#{if start &gt; 1} <span class="first"> \#{a @list().add('page', 1).add('search', \_caller.params.search).add('orderBy', \_caller.orderBy).add('order', \_caller.order)}&{'crud.pagination.first'}\#{/a} </span> \#{/if} %{ for (i in start..end) { }% <span class="page"> \#{if \_caller.page == i} **${i}** \#{/if} \#{else} \#{a @list().add('page', i).add('search', \_caller.params.search).add('orderBy', \_caller.orderBy).add('order', \_caller.order)}${i}\#{/a} \#{/else} </span> %{ } }% \#{if end &lt; nbPages} <span class="last"> \#{a @list().add('page', nbPages).add('search', \_caller.params.search).add('orderBy', \_caller.orderBy).add('order', \_caller.order)}&{'crud.pagination.last'}\#{/a} </span> \#{/if} \#{if \_caller.page &lt; nbPages} <span class="next"> \#{a @list().add('page', \_caller.page+1).add('search', \_caller.params.search).add('orderBy', \_caller.orderBy).add('order', \_caller.order)}&{'crud.pagination.next'}\#{/a} </span> \#{/if}

\#{/if}
