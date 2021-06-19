%{ // Eval fields tags def fieldsHandler = \[:\] if(\_body) { \_body.setProperty('fieldsHandler', fieldsHandler); }% \#{doBody as:'skip' /} %{ } }%

%{ if(\_fields) { }% %{ \_fields.each() { }%

%{ if(!\_sort || \_sort.contains(it)) { }% <a href="@%7Blist().remove(&#39;page&#39;).add(&#39;search&#39;,%20params.search).add(&#39;orderBy&#39;,%20it).add(&#39;order&#39;,%20(_caller.orderBy%20==%20it%20&amp;&amp;%20_caller.order%20==%20&#39;ASC&#39;%20?%20&#39;DESC&#39;%20:%20&#39;ASC&#39;))%7D" class="${_caller.orderBy == it ? (_caller.order == &#39;DESC&#39; ? &#39;crudSortedDesc&#39; : &#39;crudSortedAsc&#39;) : &#39;&#39;}">&amp;{it}</a> %{ } else { }% &{it} %{ } }%

%{ } }% %{ } else { }%

<a href="@%7Blist().remove(&#39;page&#39;).add(&#39;search&#39;,%20params.search).add(&#39;order&#39;,%20(_caller.order%20==%20&#39;DESC&#39;%20?%20&#39;ASC&#39;%20:%20&#39;DESC&#39;))%7D" class="${_caller.order == &#39;DESC&#39; ? &#39;crudSortedDesc&#39; : &#39;crudSortedAsc&#39;}">&amp;{\_caller.type.name}</a>

%{ } }%

%{ \_caller.objects.eachWithIndex() { object, k -&gt; }%

%{ if(\_fields) { }% %{ \_fields.eachWithIndex() { field, i -&gt; }%

%{ if(fieldsHandler\[field\]) { }% %{ def handler = fieldsHandler\[field\]; handler.setProperty('object', object); }% \#{doBody body:handler /} %{ handler.setProperty('object', null); }% %{ } else { }% %{ if(i == 0) { }% [${object\[field\]?.toString()?.escape()?.raw() ?: '(no value)'}](<@%7Bshow(object._key())%7D>) %{ } else { }% %{ if(\_caller.type.getField(field).type == 'file') { }% %{ if(object\[field\]) { }% <a href="@%7Battachment(object.id,%20field)%7D" class="currentAttachment">${object[field].filename} (${object[field].get().size().formatSize()})</a> %{ } else { }% %{ } }% %{ } else { }% ${object\[field\]?.escape()?.raw()} %{ } }% %{ } }% %{ } }%

%{ } }% %{ } else { }% %{ if(fieldsHandler\['default'\]) { }% %{ def handler = fieldsHandler\['default'\]; handler.setProperty('object', object); }% \#{doBody body:handler /} %{ } else { }%

[${object.toString()?.escape()?.raw() ?: '(no value)'}](<@%7Bshow(object._key())%7D>)

%{ } }% %{ } }%

%{ } }%
