CodeMirror: Julia mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">Julia</a>

Julia mode
----------

\#numbers 1234 1234im .234 .234im 2.23im 2.3f3 23e2 0x234 \#strings ‘a’ “asdf” r“regex” b“bytestring” """ multiline string """ \#identifiers a as123 function\_name! \#literal identifier multiples 3x 4\[1, 2, 3\] \#dicts and indexing x=\[1, 2, 3\] x\[end-1\] x={“julia”=&gt;“language of technical computing”} \#exception handling try f() catch <span class="citation" data-cites="printf">@printf</span> “Error” finally g() end \#types immutable Color{T&lt;:Number} r::T g::T b::T end \#functions function change!(x::Vector{Float64}) for i = 1:length(x) x\[i\] \*= 2 end end \#function invocation f(‘b’, (2, 3)…) \#operators |= &= ^= \\- %= \*= += -= &lt;= &gt;= != == % \* + - &lt; &gt; ! = | & ^ \\ ? ~ : $ &lt;: .&lt; .&gt; &lt;&lt; &lt;&lt;= &gt;&gt; &gt;&gt;&gt;&gt; &gt;&gt;= &gt;&gt;&gt;= &lt;&lt;= &lt;&lt;&lt;= .&lt;= .&gt;= .== -&gt; // in … // := .//= .\*= ./= .^= .%= .+= .-= \\= \\\\= || === && |= .|= &lt;: &gt;: |&gt; &lt;| :: x ? y : z \#macros <span class="citation" data-cites="spawnat">@spawnat</span> 2 1+1 <span class="citation" data-cites="eval">@eval</span>(:x) \#keywords and operators if else elseif while for begin let end do try catch finally return break continue global local const export import importall using function macro module baremodule type immutable quote true false enumerate

**MIME types defined:** `text/x-julia`.
