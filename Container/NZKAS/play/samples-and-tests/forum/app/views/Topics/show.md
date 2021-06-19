\#{extends 'main.html' /}

[Forums](@%7BForums.index%7D) → [${topic.forum.name}](<@%7BForums.show(topic.forum.id)%7D>)

# ${topic.subject}

**\#{pluralize size:topic.postsCount, word:'post' /} by \#{pluralize size:topic.voicesCount, word:'user' /}**

\#{pagination page:page ?: 1, size:topic.postsCount /} \#{list items:topic.getPosts(page ?: 1, pageSize), as:'post'} \#{showPost post /} \#{/list} \#{if connected}

<a href="@%7BTopics.reply(topic.forum.id,%20topic.id)%7D" class="action">Reply</a>

\#{/if} \#{if connected?.admin}

Administrator options

## Delete this topic

\#{/if}
