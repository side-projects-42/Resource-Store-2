# Console

## -DB

\#{navigation /}

%{ if (connection != null) { }%

${query}

\#{list results}

${\_}

\#{/list}

\#{if error}

### Oops, ${error.message}

\#{/if}

### Connection parameters

#### Holdability

${connection.getHoldability()}

#### AutoCommit

${connection.getAutoCommit()}

#### Db product name

${connection.getMetaData().getDatabaseProductName()}

#### Db driver

${connection.getMetaData().getURL()}

#### Db version

${connection.getMetaData().getDatabaseMajorVersion()}.${connection.getMetaData().getDatabaseMinorVersion()} %{ } else { }% No Database was configured %{ } }%
