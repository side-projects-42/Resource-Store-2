\#{extends 'CRUD/layout.html' /} \#{set title:messages.get('crud.show.title', type.modelName) /}

## &{'crud.show.title', type.modelName}

\#{form action:@save(object.\_key()), enctype:'multipart/form-data'} \#{crud.form /}

\#{/form}

\#{form @delete(object.\_key())}

\#{/form}
