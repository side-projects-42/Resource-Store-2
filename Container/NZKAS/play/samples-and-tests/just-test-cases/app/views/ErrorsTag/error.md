\#{extends 'main.html' /}

# Errors tag

%{ error_count = 0 }%

### \#errors tag

\#{errors} \#errors.errors present  
\#errors(${error\_index}).error: ${error}  
\#errors(${error}).error_index: ${error\_index}  
\#errors(${error}).error_isFirst: ${error\_isFirst}  
\#errors(${error}).error_isLast: ${error\_isLast}  
\#errors(${error}).error_parity: ${error_parity}

%{ error_count += 1 }% \#{/errors} \#errors.count: ${error_count}

---

%{ error_count = 0 }%

### \#errors field1 tag

\#{errors 'field1'} \#errors(field1).errors present  
\#errors(field1,${error\_index}).error: ${error}  
\#errors(field1,${error}).error_index: ${error\_index}  
\#errors(field1,${error}).error_isFirst: ${error\_isFirst}  
\#errors(field1,${error}).error_isLast: ${error\_isLast}  
\#errors(field1,${error}).error_parity: ${error_parity}

%{ error_count += 1 }% \#{/errors} \#errors(field1).count: ${error_count}

---

%{ error_count = 0 }%

### \#errors field:field1 tag (with named parameter)

\#{errors field:'field1'} \#errors(field:field1).errors present  
\#errors(field:field1,${error\_index}).error: ${error}  
\#errors(field:field1,${error}).error_index: ${error\_index}  
\#errors(field:field1,${error}).error_isFirst: ${error\_isFirst}  
\#errors(field:field1,${error}).error_isLast: ${error\_isLast}  
\#errors(field:field1,${error}).error_parity: ${error_parity}

%{ error_count += 1 }% \#{/errors} \#errors(field:field1).count: ${error_count}

---

%{ error_count = 0 }%

### \#errors field2 tag

\#{errors 'field2'} \#errors(field2).errors present  
\#errors(field2,${error\_index}).error: ${error}  
\#errors(field2,${error}).error_index: ${error\_index}  
\#errors(field2,${error}).error_isFirst: ${error\_isFirst}  
\#errors(field2,${error}).error_isLast: ${error\_isLast}  
\#errors(field2,${error}).error_parity: ${error_parity}

%{ error_count += 1 }% \#{/errors} \#errors(field2).count: ${error_count}

---

%{ error_count = 0 }%

### \#errors field2 tag (with named parameter)

\#{errors field:'field2'} \#errors(field:field2).errors present  
\#errors(field:field2,${error\_index}).error: ${error}  
\#errors(field:field2,${error}).error_index: ${error\_index}  
\#errors(field:field2,${error}).error_isFirst: ${error\_isFirst}  
\#errors(field:field2,${error}).error_isLast: ${error\_isLast}  
\#errors(field:field2,${error}).error_parity: ${error_parity}

%{ error_count += 1 }% \#{/errors} \#errors(field:field2).count: ${error_count}

---

### errorClass tag

\#errorClass field1: \#{errorClass 'field1' /};  
\#errorClass field2: \#{errorClass 'field2' /};

---

### error tag

\#error field1: \#{error 'field1' /};  
\#error field2: \#{error 'field2' /};

---

### ifErrors tag

\#{ifErrors} \#iferrors present  
\#{/ifErrors}

### ifError tag

\#{ifError 'field1'} \#iferror field1 present  
\#{/ifError} \#{ifError 'field2'} \#iferror field2 present  
\#{/ifError}
