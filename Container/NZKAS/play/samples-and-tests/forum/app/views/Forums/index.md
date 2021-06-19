\#{extends 'main.html' /}

# Forums

**\#{pluralize size:postsCount, word:'post' /} in \#{pluralize size:topicsCount, word:'topic' /}**

Forum

Last post

\#{list items:forums, as:'forum'}

[${forum.name}](<@%7BForums.show(forum.id)%7D>)

\#{pluralize size:forum.postsCount, word:'post' /} in \#{pluralize size:forum.topicsCount, word:'topic' /}

${forum.description}

\#{if forum.lastPost} ${forum.lastPost.postedAt.since()}  
by **${forum.lastPost.postedBy.name}\*\* ([view](<@%7BTopics.show(forum.id,%20forum.lastPost.topic.id,%20forum.lastPost.topic.postsCount.page(pageSize))%7D>)) \#{/if} \#{else} No post \#{/else}

\#{/list}

\#{if connected?.admin}

Administrator options

## Create a new forum

<span class="error">\#{error 'name' /}</span> Set a description

${flash.description}

---

\#{/if}
