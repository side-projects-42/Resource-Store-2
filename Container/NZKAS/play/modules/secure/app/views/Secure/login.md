\#{extends 'Secure/layout.html' /}

# &{'secure.title'}

\#{form @authenticate()} \#{if flash.error}

&{flash.error}

\#{/if} \#{if flash.success}

&{flash.success}

\#{/if}

&{'secure.username'}

&{'secure.password'}

&{'secure.remember'}

\#{/form}
