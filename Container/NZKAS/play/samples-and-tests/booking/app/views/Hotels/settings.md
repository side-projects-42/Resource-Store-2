\#{extends 'main.html' /} \#{set title:'Settings' /}

# Change your password

\#{form @saveSettings()} \#{field 'connected.password'}

**Password:** \* <span class="error">${field.error}</span>

\#{/field} \#{field 'verifyPassword'}

**Verify password:** \* <span class="error">${field.error}</span>

\#{/field}

[Cancel](<@%7Bindex()%7D>)

\#{/form}
