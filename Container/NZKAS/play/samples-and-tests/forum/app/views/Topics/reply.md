\#{extends 'main.html' /}

[Forums](@%7BForums.index%7D) → [${topic.forum.name}](<@%7BForums.show(topic.forum.id)%7D>) → [${topic.subject}](<@%7BTopics.show(topic.forum.id,%20topic.id)%7D>)

# Reply to «${topic.subject}»

by ${connected.name}

or <a href="@%7BTopics.show(topic.forum.id,%20topic.id)%7D" class="action">cancel</a>
