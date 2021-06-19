# ${test}

${results.passed ? 'SUCCESS' : 'FAILED'}

\#{list items:results.results, as:'result'}

${result.name}

\#{if result.error} **${result.error}** \#{if result.sourceInfos}

${result.sourceInfos} :

${play.utils.Utils.open(result.sourceFile, result.sourceLine) ? ('[').raw() : ''} ${result.sourceCode} ${play.utils.Utils.open(result.sourceFile, result.sourceLine) ? '](<'%20+%20play.utils.Utils.open(result.sourceFile,%20result.sourceLine)%20+%20'>)'.raw() : ''}

\#{/if} \#{if result.trace} [Show trace](#)

    ${result.trace.raw()}

\#{/if} \#{/if} \#{else} Ok \#{/else}

${result.time} ms

\#{/list}
