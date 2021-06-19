\#{extends 'main.html' /} \#{set title:'Posts tagged with ' + tag /} \*{\*\*\*\*\*\*\*\*\* Title \*\*\*\*\*\*\*\*\* }\* \#{if posts.size() &gt; 1}

### There are ${posts.size()} posts tagged '${tag}'

\#{/if} \#{elseif posts}

### There is 1 post tagged '${tag}'

\#{/elseif} \#{else}

### No post tagged '${tag}'

\#{/else} \*{\*\*\*\*\*\*\*\*\* Posts list \*\*\*\*\*\*\*\*\*}\*

\#{list items:posts, as:'post'} \#{display post:post, as:'teaser' /} \#{/list}
