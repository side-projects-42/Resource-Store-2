\#{extends 'CRUD/layout.html' /}

## &{'crud.blank.title', type.modelName}

\#{form @create()} \#{crud.form fields:superadmin ? \['title', 'place', 'detail', 'category', 'company', 'tags'\] : \['title', 'place', 'detail', 'category', 'tags'\]} \#{/crud.form}

\#{/form}
