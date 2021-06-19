\#{extends 'main.html' /} \#{set title:'Home' /}

- \#{a @MyBookApplication.edit(entry.id)}${entry.text}\#{/a}
