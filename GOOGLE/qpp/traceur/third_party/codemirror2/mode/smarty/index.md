CodeMirror: Smarty mode
=======================

{extends file=“parent.tpl”} {include file=“template.tpl”} {\* some example Smarty content \*} {if isset($name) && <span class="math inline">$name == 'Blog'} This is a {$</span>var}. {<span class="math inline">$integer = 451}, {$</span>array\[\] = “a”}, {<span class="math inline">$stringvar = "string"} {assign var='bob' value=$</span>var.prop} {elseif $name == $foo} {function name=menu level=0} {foreach $data as <span class="math inline">$entry} {if is\\\_array($</span>entry)} - {<span class="math inline">$entry@key} {menu data=$</span>entry level=<span class="math inline">$level+1} {else} {$</span>entry} {/if} {/foreach} {/function} {/if}

{–extends file=“parent.tpl”–} {–include file=“template.tpl”–} {–\* some example Smarty content \*–} {–if isset($name) && <span class="math inline">$name == 'Blog'--} This is a {--$</span>var–}. {–<span class="math inline">$integer = 451--}, {--$</span>array\[\] = “a”–}, {–<span class="math inline">$stringvar = "string"--} {--assign var='bob' value=$</span>var.prop–} {–elseif $name == $foo–} {–function name=menu level=0–} {–foreach $data as <span class="math inline">$entry--} {--if is\\\_array($</span>entry)–} - {–<span class="math inline">$entry@key--} {--menu data=$</span>entry level=<span class="math inline">$level+1--} {--else--} {--$</span>entry–} {–/if–} {–/foreach–} {–/function–} {–/if–}

A plain text/Smarty mode which allows for custom delimiter tags (defaults to **{** and **}**).

**MIME types defined:** `text/x-smarty`
