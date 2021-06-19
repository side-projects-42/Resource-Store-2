\#{extends 'main.html' /} \#{set title:'Register' /}

# Register

\#{form @saveUser()} \#{field 'user.username'}

**Username:** \* <span class="error">${field.error}</span>

\#{/field} \#{field 'user.name'}

**Real name:** \* <span class="error">${field.error}</span>

\#{/field} \#{field 'user.password'}

**Password:** \* <span class="error">${field.error}</span>

\#{/field} \#{field 'verifyPassword'}

**Verify password:** \* <span class="error">${field.error}</span>

\#{/field}

[Cancel](<@%7Bindex()%7D>)

\#{/form}
