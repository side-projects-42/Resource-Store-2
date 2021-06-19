\#{form action:@list().remove('page'), method:'GET'} \#{if \_fields} \#{/if} \#{if \_caller.params.search} ([&{'crud.list.totalSize', \_caller.totalCount}](<@%7Blist()%7D>)) \#{/if} \#{/form}
