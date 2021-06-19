\#{extends 'main.html' /}

[Users](@%7BUsers.index%7D) →

# ${user.name}

\#{pluralize size:user.postsCount, word:'post' /} in \#{pluralize size:user.topicsCount, word:'topic' /}

\#{if user.recentsPosts}

## Recents posts ...

\#{list items:user.recentsPosts, as:'post'} \#{showPost arg:post, showTopic:true /} \#{/list} \#{/if} \#{else}

## No post by this user

\#{/else}
