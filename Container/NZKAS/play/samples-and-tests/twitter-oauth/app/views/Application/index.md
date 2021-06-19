\#{extends 'main.html' /} \#{set title:'Home' /} %{ doc = mentions ? mentions.asXml() : \[\] }%

# Useless Twitter Mashup

[Authorize](<@%7BApplication.authenticate()%7D>)

Status:

## Mentions

- ${\_.text.text()}
