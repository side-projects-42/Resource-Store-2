\#{extends 'main.html' /} \#{set title:'Basic Chat room' /}

# Ajax, using active refresh — You are now chatting as ${user} [Leave the chat room](<@%7Bleave(user)%7D>)

\#{list events} \#{if \_.type == 'message'}

## ${\_.user}

${\_.text}

\#{/if} \#{if \_.type == 'join'}

${\_.user} joined the room

\#{/if} \#{if \_.type == 'leave'}

${\_.user} left the room

\#{/if} \#{/list}

\#{form @say(user)} \#{/}
