\#{extends 'CRUD/layout.html' /} \#{set title:messages.get('crud.title') /}

## &{'crud.index.title'}

&{'crud.index.objectType'}

&{'crud.index.action'}

\#{crud.types}

[&{type.name}]($%7Btype.listAction%7D)

[&{'crud.index.add', type}]($%7Btype.blankAction%7D)

\#{/crud.types}
