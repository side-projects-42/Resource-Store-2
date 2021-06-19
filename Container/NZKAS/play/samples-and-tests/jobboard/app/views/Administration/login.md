\#{extends 'main.html' /}

## Administration, login

\#{form @Administration.authenticate()} \#{if flash.error}

${flash.error}

\#{/if} Email Password \#{/form}
