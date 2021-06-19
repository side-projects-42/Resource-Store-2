\#{extends 'CRUD/layout.html' /}

## &{'crud.show.title', type.modelName}

\#{form action:@save(object.id), enctype:'multipart/form-data'} \#{crud.form} \#{crud.custom 'tags'} &{'tags'}

\#{list items:models.Tag.findAll(), as:'tag'} <span id="${tag.id}" class="tag ${object.tags.contains(tag) ? 'selected' : ''}" onclick="toggle(this)">${tag}</span> \#{/list}

\#{/crud.custom} \#{/crud.form}

\#{/form}

\#{form @delete(object.id)}

\#{/form}
