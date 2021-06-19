CodeMirror: Erlang mode
=======================

%% -\*- mode: erlang; erlang-indent-level: 2 -\*- %%% Created : 7 May 2012 by mats cronqvist %% @doc %% Demonstrates how to print a record. %% @end -module('ex'). -author('mats cronqvist'). -export(\[demo/0, rec\_info/1\]). -record(demo,{a="One",b="Two",c="Three",d="Four"}). rec\_info(demo) -&gt; record\_info(fields,demo). demo() -&gt; expand\_recs(?MODULE,\#demo{a="A",b="BB"}). expand\_recs(M,List) when is\_list(List) -&gt; \[expand\_recs(M,L)||L&lt;-List\]; expand\_recs(M,Tup) when is\_tuple(Tup) -&gt; case tuple\_size(Tup) of L when L &lt; 1 -&gt; Tup; L -&gt; try Fields = M:rec\_info(element(1,Tup)), L = length(Fields)+1, lists:zip(Fields,expand\_recs(M,tl(tuple\_to\_list(Tup)))) catch \_:\_ -&gt; list\_to\_tuple(expand\_recs(M,tuple\_to\_list(Tup))) end end; expand\_recs(\_,Term) -&gt; Term.

**MIME types defined:** `text/x-erlang`.
