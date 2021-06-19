\#{extends 'main.html' /}

# Users

\#{pluralize size:nbUsers, word:'user' /}

\#{pagination page:page ?: 1, size:nbUsers /}

User name

Posts

\#{list items:users, as:'user'}

[${user.name}](<@%7BUsers.show(user.id)%7D>)

${user.postsCount}

\#{/list}
