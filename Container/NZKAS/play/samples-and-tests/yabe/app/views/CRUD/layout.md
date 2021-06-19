\#{extends 'admin.html' /} \#{set 'moreStyles'} \#{/set}

\#{if flash.success}

${flash.success}

\#{/if} \#{if flash.error || error}

${error ?: flash.error}

\#{/if}

\#{doLayout /}
