CodeMirror: Smarty mode
=======================

### Default settings (Smarty 2, **{** and **}** delimiters)

{extends file="parent.tpl"} {include file="template.tpl"} {\* some example Smarty content \*} {if isset($name) && $name == 'Blog'} This is a {$var}. {$integer = 451}, {$array\[\] = "a"}, {$stringvar = "string"} {assign var='bob' value=$var.prop} {elseif $name == $foo} {function name=menu level=0} {foreach $data as $entry} {if is\_array($entry)} - {$entry@key} {menu data=$entry level=$level+1} {else} {$entry} {/if} {/foreach} {/function} {/if}

  

### Smarty 2, custom delimiters

{--extends file="parent.tpl"--} {--include file="template.tpl"--} {--\* some example Smarty content \*--} {--if isset($name) && $name == 'Blog'--} This is a {--$var--}. {--$integer = 451--}, {--$array\[\] = "a"--}, {--$stringvar = "string"--} {--assign var='bob' value=$var.prop--} {--elseif $name == $foo--} {--function name=menu level=0--} {--foreach $data as $entry--} {--if is\_array($entry)--} - {--$entry@key--} {--menu data=$entry level=$level+1--} {--else--} {--$entry--} {--/if--} {--/foreach--} {--/function--} {--/if--}

  

### Smarty 3

Nested tags {$foo={counter one=1 two={inception}}+3} are now valid in Smarty 3.

{assign var=foo value=\[1,2,3\]} {assign var=foo value=\['y'=&gt;'yellow','b'=&gt;'blue'\]} {assign var=foo value=\[1,\[9,8\],3\]} {$foo=$bar+2} {\* a comment \*} {$foo.bar=1} {\* another comment \*} {$foo = myfunct(($x+$y)\*3)} {$foo = strlen($bar)} {$foo.bar.baz=1}, {$foo\[\]=1} Smarty "dot" syntax (note: embedded {} are used to address ambiguities): {$foo.a.b.c} =&gt; $foo\['a'\]\['b'\]\['c'\] {$foo.a.$b.c} =&gt; $foo\['a'\]\[$b\]\['c'\] {$foo.a.{$b+4}.c} =&gt; $foo\['a'\]\[$b+4\]\['c'\] {$foo.a.{$b.c}} =&gt; $foo\['a'\]\[$b\['c'\]\] {$object-&gt;method1($x)-&gt;method2($y)}

A plain text/Smarty version 2 or 3 mode, which allows for custom delimiter tags.

**MIME types defined:** `text/x-smarty`
