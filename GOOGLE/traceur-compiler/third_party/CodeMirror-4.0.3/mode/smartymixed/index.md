CodeMirror: Smarty mixed mode

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">Smarty mixed</a>

Smarty mixed mode
-----------------

{\*\* \* <span class="citation" data-cites="brief">@brief</span> Smarty mixed mode \* <span class="citation" data-cites="author">@author</span> Ruslan Osmanov \* <span class="citation" data-cites="date">@date</span> 29.06.2013 \*}

{\* Multiline smarty \* comment, no {$variables} here \*} {literal} {literal} is just an HTML text.

{/literal} {extends file=“parent.tpl”} {include file=“template.tpl”} {\* some example Smarty content \*} {if isset($name) && <span class="math inline">$name == 'Blog'} This is a {$</span>var}. {<span class="math inline">$integer = 4511}, {$</span>array\[\] = “a”}, {<span class="math inline">$stringvar = "string"} {$</span>integer = 4512} {<span class="math inline">$array\\\[\\\] = "a"} {$</span>stringvar = “string”} {assign var=‘bob’ value=$var.prop} {elseif $name == $foo} {function name=menu level=0} {foreach $data as <span class="math inline">$entry} {if is\\\_array($</span>entry)} - {<span class="math inline">$entry@key} {menu data=$</span>entry level=<span class="math inline">$level+1} {else} {$</span>entry} {\* One \* Two \* Three \*} {/if} {/foreach} {/function} {/if}

The Smarty mixed mode depends on the Smarty and HTML mixed modes. HTML mixed mode itself depends on XML, JavaScript, and CSS modes.

It takes the same options, as Smarty and HTML mixed modes.

**MIME types defined:** `text/x-smarty`.
