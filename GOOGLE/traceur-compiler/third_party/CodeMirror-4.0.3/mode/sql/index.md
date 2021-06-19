CodeMirror: SQL Mode for CodeMirror

[<img src="../../doc/logo.png" id="logo" />](http://codemirror.net)

-   [Home](../../index.html)
-   [Manual](../../doc/manual.html)
-   [Code](https://github.com/marijnh/codemirror)

<!-- -->

-   [Language modes](../index.html)
-   <a href="#" class="active">SQL Mode for CodeMirror</a>

SQL Mode for CodeMirror
-----------------------

– SQL Mode for CodeMirror SELECT SQL\_NO\_CACHE DISTINCT <span class="citation" data-cites="var1">@var1</span> AS \`val1\`, @‘val2’, <span class="citation" data-cites="global">@global</span>.’sql\_mode’, 1.1 AS \`float\_val\`, .14 AS \`another\_float\`, 0.09e3 AS \`int\_with\_esp\`, 0xFA5 AS \`hex\`, x’fa5’ AS \`hex2\`, 0b101 AS \`bin\`, b’101’ AS \`bin2\`, DATE ‘1994-01-01’ AS \`sql\_date\`, { T “1994-01-01” } AS \`odbc\_date\`, ‘my string’, \_utf8’your string’, N’her string’, TRUE, FALSE, UNKNOWN FROM DUAL – space needed after ‘–’ \# 1 line comment /\* multiline comment! \*/ LIMIT 1 OFFSET 0;

**MIME types defined:** `text/x-sql`, `text/x-mysql`, `text/x-mariadb`, `text/x-cassandra`, `text/x-plsql`, `text/x-mssql`, `text/x-hive`.
