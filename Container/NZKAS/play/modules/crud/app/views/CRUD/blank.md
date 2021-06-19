\#{extends 'CRUD/layout.html' /} \#{set title:messages.get('crud.blank.title', type.modelName) /}

## &{'crud.blank.title', type.modelName}

\#{form action:@create(), enctype:'multipart/form-data'} \#{crud.form /}

\#{/form}
