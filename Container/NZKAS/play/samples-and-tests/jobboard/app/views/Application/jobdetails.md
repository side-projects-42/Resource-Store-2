\#{extends 'Application/main.html' /}

## ${job.title} \#{if job.place} - <span class="place">${job.place}</span> \#{/if}

\#{if job.company.logo?.get()}

![](<@%7BApplication.companyLogo(job.company.id)%7D>)

\#{/if} \#{if job.company.website}

[${job.company.website}]($%7Bjob.company.website%7D)

\#{/if} \#{if job.tags}

Tagged \#{list items:job.tags, as:'tag'} <span class="tag">${tag}${tag_isLast ? '' : ','}</span> \#{/list}

\#{/if}

${new net.sf.textile4j.Textile().process(job.detail)}

[Back to jobs list](<@%7BApplication.index()%7D>)
