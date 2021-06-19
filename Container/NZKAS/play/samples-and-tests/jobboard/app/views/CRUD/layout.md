\#{extends 'main.html' /}

# \#{if session.'company-name'} [${session.'company-name'} (Edit my company profile)](<@%7BCompanies.show(session.'company-id')%7D>) - \#{/if} [Logout](<@%7BAdministration.logout()%7D>)

\#{if request.actionMethod != 'index'}

\#{crud.navigation /}

\#{/if} \#{if flash.success}

${flash.success}

\#{/if} \#{if flash.error}

${flash.error}

\#{/if}

\#{doLayout /}
