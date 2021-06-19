\#{if flash.error}

**${flash.error}**

\#{/if} \#{if flash.success}

**${flash.success}**

\#{/if}

<table><tbody><tr class="odd"><td>Username:</td><td></td></tr><tr class="even"><td>Password:</td><td></td></tr></tbody></table>

${person?.userName}

${person?.password}

${person?.role}
