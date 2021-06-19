\#{extends './main.html' /}

- <a href="@%7Bindex(categoryItem.code)%7D" class="${categoryItem.code == category ? &#39;selected&#39; : &#39;&#39;}">${categoryItem}</a>

\#{if filterTags.size()}

Tagged with \#{list items:filterTags, as:'tag'} ${tag}${tag_isLast ? '' : ','} \#{/list}   [(remove this filter)](<@%7BApplication.index(category,%20null)%7D>)

\#{/if} \#{include 'Application/joblist.html' /}

## Tags

- \#{if filterTags.contains(tag.code)} <a href="@%7BApplication.index(category,%20filterTags.remove(tag.code).join(&#39;,&#39;)%20?:%20null)%7D" class="selected">${tag}</a> \#{/if} \#{else} [${tag}](@%7BApplication.index(category,%20filterTags.add(tag.code).join(','))%7D) \#{/else}
