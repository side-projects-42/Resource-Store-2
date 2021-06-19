\#{form @save()} \#{/form}

\#{ifnot project.company} No company \#{/ifnot} \#{else} ${project.company} \#{/else}

${project.companies?.size()} in map -- ${project.companies}

\#{errors}

${error}

\#{/errors}
