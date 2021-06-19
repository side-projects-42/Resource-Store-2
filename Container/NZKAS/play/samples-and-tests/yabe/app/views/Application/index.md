\#{extends 'main.html' /} \#{set title:'Home' /} \#{if frontPost} \#{display post:frontPost, as:'home' /} \#{if olderPosts.size()}

### Older posts <span class="from">from this blog</span>

\#{list items:olderPosts, as:'oldPost'} \#{display post:oldPost, as:'teaser' /} \#{/list}

\#{/if} \#{/if} \#{else}

There is currently nothing to read here.

\#{/else}
