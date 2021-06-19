# REPL

%{if (action.contains("java")) { %}

## -Java

%{ } else{ }%

## -Scala

%{ } }% \#{navigation /} \#{if (action.contains("java"))}

- Beanshell does not like generics
- JPA ehanced code is not visible, therefore  
  use findAll(User.class) instead of User.findAll()  
  find(User.class) instead of User.find() etc.

\#{/if}

${script}

\#{list results}

${\_}

\#{/list}

\#{if error}

### Oops, ${error.message}

%{if (script.split('\\n').size()&gt;=2) { if (action.contains("java")) { try { %}

${script.split('\\n')\[error.getErrorLineNumber()-2\]}

%{ } catch (NullPointerException ex) { %}

${trace}

%{ } }% %{ } else{ try { }%

${script.split('\\n')\[error.line-3\]}

%{ } catch (Exception ex) { }%

${trace}

%{ } }% %{ } }% %{ } else{ }%

${script}

%{ } }%

\#{/if}
