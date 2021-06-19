\#{if jobs.size() == 0}

No jobs ...

\#{/if} \#{else}

- [${job.title}](<@%7BApplication.jobdetails(job.id)%7D>) at <span class="company">${job.company}</span> \#{if job.place} - <span class="place">${job.place}</span> \#{/if}

\#{/else}
