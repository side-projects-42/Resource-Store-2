CodeMirror: TiddlyWiki mode
===========================

!TiddlyWiki Formatting \* Rendered versions can be found at: http://www.tiddlywiki.com/\#Reference |!Option | !Syntax | |bold font | ‘’bold’’ | |italic type | //italic// | |underlined text | \_\_underlined\_\_ | |strikethrough text | –strikethrough– | |superscript text | super^<sup>script</sup>^ | |subscript text | sub<s>script</s> | |highlighted text | @<span class="citation" data-cites="highlighted">@highlighted</span>@@ | |preformatted text | {{{preformatted}}} | !Block Elements &lt;&lt;&lt; !Heading 1 !!Heading 2 !!!Heading 3 !!!!Heading 4 !!!!!Heading 5 &lt;&lt;&lt; !!Lists &lt;&lt;&lt; \* unordered list, level 1 \*\* unordered list, level 2 \*\*\* unordered list, level 3 \# ordered list, level 1 \#\# ordered list, level 2 \#\#\# unordered list, level 3 ; definition list, term : definition list, description &lt;&lt;&lt; !!Blockquotes &lt;&lt;&lt; &gt; blockquote, level 1 &gt;&gt; blockquote, level 2 &gt;&gt;&gt; blockquote, level 3 &gt; blockquote &lt;&lt;&lt; !!Preformatted Text &lt;&lt;&lt; {{{ preformatted (e.g. code) }}} &lt;&lt;&lt; !!Code Sections &lt;&lt;&lt; {{{ Text style code }}} //{{{ JS styled code. TiddlyWiki mixed mode should support highlighter switching in the future. //}}} XML styled code. TiddlyWiki mixed mode should support highlighter switching in the future. &lt;&lt;&lt; !!Tables &lt;&lt;&lt; |CssClass|k |!heading column 1|!heading column 2| |row 1, column 1|row 1, column 2| |row 2, column 1|row 2, column 2| |&gt;|COLSPAN| |ROWSPAN| … | |~| … | |CssProperty:value;…| … | |caption|c ‘’Annotation:’’ \* The {{{&gt;}}} marker creates a “colspan”, causing the current cell to merge with the one to the right. \* The {{{~}}} marker creates a “rowspan”, causing the current cell to merge with the one above. &lt;&lt;&lt; !!Images /% TODO %/ cf. \[\[TiddlyWiki.com|http://www.tiddlywiki.com/\#EmbeddedImages\]\] !Hyperlinks \* \[\[WikiWords|WikiWord\]\] are automatically transformed to hyperlinks to the respective tiddler \*\* the automatic transformation can be suppressed by preceding the respective WikiWord with a tilde ({{{~}}}): {{{~WikiWord}}} \* \[\[PrettyLinks\]\] are enclosed in square brackets and contain the desired tiddler name: {{{\[\[tiddler name\]\]}}} \*\* optionally, a custom title or description can be added, separated by a pipe character ({{{|}}}): {{{\[\[title|target\]\]}}}  
’‘’N.B.:’’’ In this case, the target can also be any website (i.e. URL). !Custom Styling \* {{{@<span class="citation" data-cites="CssProperty:value">@CssProperty:value</span>;CssProperty:value;…@@}}}  
‘’N.B.:’’ CSS color definitions should use lowercase letters to prevent the inadvertent creation of WikiWords. \*

`{{customCssClass{...}}}`

\* raw HTML can be inserted by enclosing the respective code in HTML tags: {{{

…

}}} !Special Markers \* {{{  
}}} forces a manual line break \* {{{—-}}} creates a horizontal ruler \* \[\[HTML entities|http://www.tiddlywiki.com/\#HtmlEntities\]\] \* \[\[HTML entities local|HtmlEntities\]\] \* {{{&lt;&gt;}}} calls the respective \[\[macro|Macros\]\] \* To hide text within a tiddler so that it is not displayed, it can be wrapped in {{{/%}}} and {{{%/}}}.  
This can be a useful trick for hiding drafts or annotating complex markup. \* To prevent wiki markup from taking effect for a particular section, that section can be enclosed in three double quotes: e.g. {{{""“WikiWord”""}}}.

TiddlyWiki mode supports a single configuration.

**MIME types defined:** `text/x-tiddlywiki`.
