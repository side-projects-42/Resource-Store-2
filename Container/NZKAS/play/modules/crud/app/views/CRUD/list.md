\#{extends 'CRUD/layout.html' /} \#{set title:messages.get('crud.list.title', type.name) /}

## &{'crud.list.title', type.name}

\#{crud.search /}

\#{crud.table /}

\#{crud.pagination /}

[&{'crud.add', type.modelName}](<@%7Bblank()%7D>)
