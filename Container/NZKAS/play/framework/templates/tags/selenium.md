\#{verbatim}

${\_arg ?: 'Tests'}

\#{list items:\_body.toString().split('\\n'), as:'command'} %{ if(command.trim().startsWith('//') || command.trim().startsWith('\#')) { %}

${command}

%{ } else { def parts = play.test.Helpers.seleniumCommand(command); }% %{ if(parts && parts\[0\]) { }%

${parts\[0\] ?: ''}

${parts\[1\] ?: ''}

${parts\[2\] ?: ''}

%{ } }% %{ } }% \#{/list}

\#{/verbatim}
