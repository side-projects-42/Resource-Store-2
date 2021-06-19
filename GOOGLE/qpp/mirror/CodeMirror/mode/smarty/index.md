CodeMirror: Smarty mode
=======================

### Default settings (Smarty 2, **{** and **}** delimiters)

{extends file=“parent.tpl”} {include file=“template.tpl”} {\* some example Smarty content \*} {if isset($name) && <span class="math inline">$name == 'Blog'} This is a {$</span>var}. {<span class="math inline">$integer = 451}, {$</span>array\[\] = “a”}, {<span class="math inline">$stringvar = "string"} {assign var='bob' value=$</span>var.prop} {elseif $name == $foo} {function name=menu level=0} {foreach $data as <span class="math inline">$entry} {if is\\\_array($</span>entry)} - {<span class="math inline">$entry@key} {menu data=$</span>entry level=<span class="math inline">$level+1} {else} {$</span>entry} {/if} {/foreach} {/function} {/if}

### Smarty 2, custom delimiters

{–extends file=“parent.tpl”–} {–include file=“template.tpl”–} {–\* some example Smarty content \*–} {–if isset($name) && <span class="math inline">$name == 'Blog'--} This is a {--$</span>var–}. {–<span class="math inline">$integer = 451--}, {--$</span>array\[\] = “a”–}, {–<span class="math inline">$stringvar = "string"--} {--assign var='bob' value=$</span>var.prop–} {–elseif $name == $foo–} {–function name=menu level=0–} {–foreach $data as <span class="math inline">$entry--} {--if is\\\_array($</span>entry)–} - {–<span class="math inline">$entry@key--} {--menu data=$</span>entry level=<span class="math inline">$level+1--} {--else--} {--$</span>entry–} {–/if–} {–/foreach–} {–/function–} {–/if–}

### Smarty 3

Nested tags {$foo={counter one=1 two={inception}}+3} are now valid in Smarty 3.

{assign var=foo value=\[1,2,3\]} {assign var=foo value=\[‘y’=&gt;‘yellow’,‘b’=&gt;‘blue’\]} {assign var=foo value=\[1,\[9,8\],3\]} {<span class="math inline">*foo*=</span>bar+2} {\* a comment \*} {<span class="math inline">$foo.bar=1} {\\\* another comment \\\*} {$</span>foo = myfunct((<span class="math inline">*x*+</span>y)\*3)} {<span class="math inline">*foo* = *strlen*(</span>bar)} {<span class="math inline">$foo.bar.baz=1}, {$</span>foo\[\]=1} Smarty “dot” syntax (note: embedded {} are used to address ambiguities): {$foo.a.b.c} =&gt; <span class="math inline">$foo\\\['a'\\\]\\\['b'\\\]\\\['c'\\\] {$</span>foo.a.$b.c} =&gt; <span class="math inline">$foo\\\['a'\\\]\\\[$</span>b\]\[‘c’\] {<span class="math inline">$foo.a.{$</span>b+4}.c} =&gt; <span class="math inline">$foo\\\['a'\\\]\\\[$</span>b+4\]\[‘c’\] {<span class="math inline">$foo.a.{$</span>b.c}} =&gt; <span class="math inline">$foo\\\['a'\\\]\\\[$</span>b\[‘c’\]\] {<span class="math inline">$object-&gt;method1($</span>x)-&gt;method2($y)}

A plain text/Smarty version 2 or 3 mode, which allows for custom delimiter tags.

**MIME types defined:** `text/x-smarty`
