\#{extends 'CRUD/layout.html' /}

## &{'crud.show.title', type.modelName}

\#{form @save(object.id)} \#{crud.form fields:superadmin ? \['title', 'place', 'category', 'company', 'tags', 'online', 'detail'\] : \['title', 'place', 'category', 'tags', 'online', 'detail', \] /}

\#{/form}

\#{form @delete(object.id)}

\#{/form}
