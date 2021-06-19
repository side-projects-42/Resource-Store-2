\#{extends 'main.html' /}

[Forums](@%7BForums.index%7D) → [${forum.name}](<@%7BForums.show(forum.id)%7D>)

# New topic

by ${connected.name}

Subject <span class="error">\#{error 'subject' /}</span>

Content

${flash.content}

or <a href="@%7BForums.show(forum.id)%7D" class="action">cancel</a>
