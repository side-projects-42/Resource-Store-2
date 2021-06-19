\#{extends 'main.html' /} \#{set title:'Sign in' /}

## The Play's Chat demonstration

\#{form @enterDemo()} \#{if flash.error}

${flash.error}

\#{/if}

Choose a nick name

Demonstration Ajax, active refresh Ajax, long polling WebSocket

\#{/form}
