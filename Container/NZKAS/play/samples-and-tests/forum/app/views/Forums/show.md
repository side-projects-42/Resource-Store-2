\#{extends 'main.html' /}

[Forums](@%7BForums.index%7D) →

# ${forum.name}

**\#{pluralize size:forum.postsCount, word:'post' /} in \#{pluralize size:forum.topicsCount, word:'topic' /}**

\#{if connected}

<a href="@%7BTopics.post(forum.id)%7D" class="action">Post a new topic</a>

\#{/if} \#{pagination page:page ?: 1, size:forum.topicsCount /}

Topics

Posts

Views

Last Post

\#{list items:forum.getTopics(page ?: 1, pageSize), as:'topic'}

[${topic.subject}](<@%7BTopics.show(topic.forum.id,%20topic.id)%7D>) \#{if topic.postsCount &gt; pageSize}  <a href="@%7BTopics.show(topic.forum.id,%20topic.id,%20topic.postsCount.page(pageSize))%7D" class="last">last page</a> \#{/if}

${topic.postsCount}

${topic.views}

${topic.lastPost.postedAt.since()}  
by **${forum.lastPost.postedBy.name}\*\* ([view](<@%7BTopics.show(topic.forum.id,%20topic.id,%20topic.postsCount.page(pageSize))%7D>))

\#{/list}

\#{if connected?.admin}

Administrator options

## Delete this forum

\#{/if}
