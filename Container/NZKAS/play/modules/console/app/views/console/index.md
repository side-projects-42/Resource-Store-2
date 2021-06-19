# Console

## -Info

\#{navigation /}

\#{list results}

${\_}

\#{/list}

\#{if error}

### Oops, ${error.message}

%{if (script.split('\\n').size()&gt;=2) { if (action == "/beanshell") { %}

${script.split('\\n')\[error.getErrorLineNumber()-2\]}

%{ } else{ }%

${script.split('\\n')\[error.line-2\]}

%{ } }% %{ } else{ }%

${script}

%{ } }%

\#{/if}

### JVM Parameters

#### total memory:

${totalmem}

#### available free memory:

${freemem}

#### number of processors:

${processors}

#### number of threads:

${threads}

%{ if (jobs.size &gt;0) { }%

### Jobs

%{ } }% %{ for(job in jobs) { out.print("

#### "+job.getClass().getName()+"

"); if(job.getClass().isAnnotationPresent(play.jobs.OnApplicationStart.class)) { out.print(" run at application start."); } if(job.getClass().isAnnotationPresent(play.jobs.On.class)) { out.print(" run with cron expression " + job.getClass().getAnnotation(play.jobs.On.class).value() + "."); } if(job.getClass().isAnnotationPresent(play.jobs.Every.class)) { out.print(" run every " + job.getClass().getAnnotation(play.jobs.Every.class).value() + "."); } if(job.lastRun &gt; 0) { out.print(" (last run at " + df.format(new Date(job.lastRun))); if(job.wasError) { out.print(" with error)"); } else { out.print(")"); } } else { out.print(" (has never run)"); } out.print("  
"); } }%

### Scheduler parameters

#### Pool size

${executor.getPoolSize()}

#### Active count

${executor.getActiveCount()}

#### Scheduled task count

${executor.getTaskCount()}

#### Queue size

${executor.getQueue().size()}
