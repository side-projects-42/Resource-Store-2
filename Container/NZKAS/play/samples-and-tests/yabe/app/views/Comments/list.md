\#{extends 'CRUD/layout.html' /}

## &{'crud.list.title', type.name}

\#{crud.search /}

\#{crud.table fields:\['content', 'post', 'author'\]} \#{crud.custom 'content'} [${object.content.length() &gt; 50 ? object.content\[0..50\] + '…' : object.content}](<@%7BComments.show(object.id)%7D>) \#{/crud.custom} \#{/crud.table}

\#{crud.pagination /}

[&{'crud.add', type.modelName}](<@%7Bblank()%7D>)
