Back to [Table of contents](/@documentation/home)

Get help with Google:

# ${title}

\#{list items: otherCategories, as: 'category'} \#{if category.value != title} \#{a @PlayDocumentation.cheatSheet(category.key)}${category.value}\#{/a} \#{/if} \#{else} ${category.value} \#{/else}   \#{/list}

![](@%7B'/public/playmanual/logo.png'%7D)

## Play ${play.version}

\#{list items: sheets, as: 'sheet'}

${sheet.raw()}

\#{/list}
