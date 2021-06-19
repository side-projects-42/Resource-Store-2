\#{extends 'CRUD/layout.html' /}

## &{'crud.list.title', type.name}

\#{crud.search /}

\#{crud.table fields:superadmin ? \['title', 'company', 'postedAt', 'online'\] : \['title', 'postedAt', 'online'\], sort: \['title', 'company', 'postedAt'\]} \#{crud.custom 'postedAt'} ${object.postedAt.since()} \#{/crud.custom} \#{crud.custom 'company'} [${object.company}](@%7BCompanies.show(object.company.id)%7D) \#{/crud.custom} \#{crud.custom 'online'} \#{if object.online} <span class="online">Online</span> \#{/if} \#{else} <span class="offline">Offline</span> \#{/else} \#{/crud.custom} \#{/crud.table}

\#{crud.pagination /}

[&{'crud.add', type.modelName}](<@%7Bblank()%7D>)
