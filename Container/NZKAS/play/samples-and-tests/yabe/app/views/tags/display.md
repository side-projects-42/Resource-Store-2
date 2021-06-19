\*{ Display a post in one of these modes: 'full', 'home' or 'teaser' }\*

## [${\_post.title}](<@%7BApplication.show(_post.id)%7D>)

<span class="post-author">by ${\_post.author.fullname}</span>, <span class="post-date">${\_post.postedAt.format('dd MMM yy')}</span> \#{if \_as != 'full'} <span class="post-comments">  |  ${\_post.comments.size() ?: 'no'} comment${\_post.comments.size().pluralize()} \#{if \_post.comments} , latest by ${\_post.comments\[-1\].author} \#{/if} </span> \#{/if} \#{elseif \_post.tags} <span class="post-tags"> - Tagged \#{list items:\_post.tags, as:'tag'} [${tag}](@%7BApplication.listTagged(tag.name)%7D)${tag_isLast ? '' : ', '} \#{/list} </span> \#{/elseif}

\#{if \_as != 'teaser'}

Detail:

${\_post.content.nl2br()}

\#{/if}

\#{if \_as == 'full'}

### ${\_post.comments.size() ?: 'no'} comment${\_post.comments.size().pluralize()}

\#{list items:\_post.comments, as:'comment'}

<span class="comment-author">by ${comment.author},</span> <span class="comment-date">${comment.postedAt.format('dd MMM yy')}</span>

Detail:

${comment.content.escape().nl2br()}

\#{/list}

\#{/if}
