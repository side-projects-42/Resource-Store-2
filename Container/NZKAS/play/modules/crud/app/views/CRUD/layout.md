# [&{'crud.title'}](<@%7BCRUD.index()%7D>)

\#{if request.actionMethod != 'index'}

\#{crud.navigation /}

\#{/if} \#{if flash.success}

${flash.success}

\#{/if} \#{if flash.error || error}

${error ?: flash.error}

\#{/if}

\#{doLayout /}

Generated by the Play CRUD module. [Learn how to customize it !](http://www.playframework.org/documentation/1.1/crud)