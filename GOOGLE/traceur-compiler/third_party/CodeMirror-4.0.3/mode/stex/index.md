CodeMirror: sTeX mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">sTeX</a>

sTeX mode
---------

\\begin{module}\[id=bbt-size\] \\importmodule\[balanced-binary-trees\]{balanced-binary-trees} \\importmodule\[\\KWARCslides{dmath/en/cardinality}\]{cardinality} \\begin{frame} \\frametitle{Size Lemma for Balanced Trees} \\begin{itemize} \\item \\begin{assertion}\[id=size-lemma,type=lemma\] Let <span class="math inline">$G=\\\\tup{V,E}$</span> be a \\termref\[cd=binary-trees\]{balanced binary tree} of \\termref\[cd=graph-depth,name=vertex-depth\]{depth}<span class="math inline">$n&gt;i$</span>, then the set <span class="math inline">$\\\\defeq{\\\\livar{V}i}{\\\\setst{\\\\inset{v}{V}}{\\\\gdepth{v} = i}}$</span> of \\termref\[cd=graphs-intro,name=node\]{nodes} at \\termref\[cd=graph-depth,name=vertex-depth\]{depth} <span class="math inline">*i*</span> has \\termref\[cd=cardinality,name=cardinality\]{cardinality} <span class="math inline">$\\\\power2i$</span>. \\end{assertion} \\item \\begin{sproof}\[id=size-lemma-pf,proofend=,for=size-lemma\]{via induction over the depth <span class="math inline">*i*</span>.} \\begin{spfcases}{We have to consider two cases} \\begin{spfcase}{<span class="math inline">*i* = 0</span>} \\begin{spfstep}\[display=flow\] then <span class="math inline">$\\\\livar{V}i=\\\\set{\\\\livar{v}r}$</span>, where <span class="math inline">$\\\\livar{v}r$</span> is the root, so <span class="math inline">$\\\\eq{\\\\card{\\\\livar{V}0},\\\\card{\\\\set{\\\\livar{v}r}},1,\\\\power20}$</span>. \\end{spfstep} \\end{spfcase} \\begin{spfcase}{<span class="math inline">$i&gt;0$</span>} \\begin{spfstep}\[display=flow\] then <span class="math inline">$\\\\livar{V}{i-1}$</span> contains <span class="math inline">$\\\\power2{i-1}$</span> vertexes \\begin{justification}\[method=byIH\](IH)\\end{justification} \\end{spfstep} \\begin{spfstep} By the \\begin{justification}\[method=byDef\]definition of a binary tree\\end{justification}, each <span class="math inline">$\\\\inset{v}{\\\\livar{V}{i-1}}$</span> is a leaf or has two children that are at depth <span class="math inline">*i*</span>. \\end{spfstep} \\begin{spfstep} As <span class="math inline">*G*</span> is \\termref\[cd=balanced-binary-trees,name=balanced-binary-tree\]{balanced} and <span class="math inline">$\\\\gdepth{G}=n&gt;i$</span>, <span class="math inline">$\\\\livar{V}{i-1}$</span> cannot contain leaves. \\end{spfstep} \\begin{spfstep}\[type=conclusion\] Thus <span class="math inline">$\\\\eq{\\\\card{\\\\livar{V}i},{\\\\atimes\\\[cdot\\\]{2,\\\\card{\\\\livar{V}{i-1}}}},{\\\\atimes\\\[cdot\\\]{2,\\\\power2{i-1}}},\\\\power2i}$</span>. \\end{spfstep} \\end{spfcase} \\end{spfcases} \\end{sproof} \\item \\begin{assertion}\[id=fbbt,type=corollary\] A fully balanced tree of depth <span class="math inline">*d*</span> has <span class="math inline">$\\\\power2{d+1}-1$</span> nodes. \\end{assertion} \\item \\begin{sproof}\[for=fbbt,id=fbbt-pf\]{} \\begin{spfstep} Let <span class="math inline">$\\\\defeq{G}{\\\\tup{V,E}}$</span> be a fully balanced tree \\end{spfstep} \\begin{spfstep} Then <span class="math inline">$\\\\card{V}=\\\\Sumfromto{i}1d{\\\\power2i}= \\\\power2{d+1}-1$</span>. \\end{spfstep} \\end{sproof} \\end{itemize} \\end{frame} \\begin{note} \\begin{omtext}\[type=conclusion,for=binary-tree\] This shows that balanced binary trees grow in breadth very quickly, a consequence of this is that they are very shallow (and this compute very fast), which is the essence of the next result. \\end{omtext} \\end{note} \\end{module} %%% Local Variables: %%% mode: LaTeX %%% TeX-master: “all” %%% End: \\end{document}

**MIME types defined:** `text/x-stex`.

**Parsing/Highlighting Tests:** [normal](../../test/index.html#stex_*), [verbose](../../test/index.html#verbose,stex_*).
