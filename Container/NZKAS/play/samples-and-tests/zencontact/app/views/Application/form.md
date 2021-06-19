\#{extends 'main.html' /} \#{set title:'Form' /} \#{form @save()}

Name: <span class="error">${errors.forKey('contact.name')}</span>

First name: <span class="error">${errors.forKey('contact.firstname')}</span>

Birth date: <span class="error">${errors.forKey('contact.birthdate')}</span>

Email: <span class="error">${errors.forKey('contact.email')}</span>

[Cancel](<@%7Blist()%7D>) or

\#{/form}
