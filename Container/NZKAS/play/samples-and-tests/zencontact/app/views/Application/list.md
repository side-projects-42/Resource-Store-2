\#{extends 'main.html' /} \#{set title:'List' /}

Name

First name

Birth date

Email

\#{list contacts, as:'contact'}

${contact.name}

${contact.firstname}

${contact.birthdate?.format('yyyy-MM-dd')}

${contact.email}

[&gt;](<@%7Bform(contact.id)%7D>)

\#{/list}

\#{form @save()}

\#{/form}
