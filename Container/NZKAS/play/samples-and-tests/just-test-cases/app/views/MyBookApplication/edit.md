\#{extends 'main.html' /} \#{set title:'Edit Test' /} \#{ifError 'testObj.version'} \#{error 'testObj.version'/} \#{/ifError} \#{ifErrors}

# Oops...

\#{errors}

${error.raw()}

\#{/errors} \#{/ifErrors} \#{form @save(testObj?.id) , id:'creationForm', enctype:'multipart/form-data' } \#{field 'testObj.text'}

Text <span class="error">${field.error}</span>

\#{/} \#{/form}
