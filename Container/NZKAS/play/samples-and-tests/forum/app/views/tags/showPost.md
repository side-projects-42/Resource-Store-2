${\_arg.postedAt.format('MM/dd, yyyy hh:mma')} [${\_arg.postedBy.name}](@%7BUsers.show(\_arg.postedBy.id)%7D)

\#{pluralize size:\_arg.postedBy.postsCount, word:'post' /}

\#{if \_showTopic}

Posted in [${\_caller.post.topic.forum.name} - ${\_caller.post.topic.subject}](<@%7BTopics.show(_caller.post.topic.forum.id,%20_caller.post.topic.id)%7D>)

\#{/if} ${\_arg.content.nl2br().raw()}

---
