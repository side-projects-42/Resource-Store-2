\#{extends 'CRUD/layout.html' /}

## &{'crud.list.title', type.name}

\#{crud.search /}

\#{crud.table fields:\['name', 'email'\] /}

\#{crud.pagination /}

[&{'crud.add', type.modelName}](<@%7Bblank()%7D>)
