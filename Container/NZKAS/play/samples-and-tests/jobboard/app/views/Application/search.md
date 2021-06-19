\#{extends './main.html' /}

\#{if jobs} ${jobs.size()} job${jobs.size().pluralize()} match your request. \#{/if} \#{else} No jobs found. \#{/else}   [(Cancel)](<@%7BApplication.index(category,%20null)%7D>)

\#{if jobs} \#{include 'Application/joblist.html' /} \#{/if}
