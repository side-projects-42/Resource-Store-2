\#{field 'object.' + \_name} &{\_name}

${params\[field.name\]?.escape()?.raw() ?: field.error?.message == 'validation.required' ? '' : \_value?.escape()?.raw()}

\#{ifError field.name} <span class="error">${field.error.raw()}</span> \#{/ifError} \#{/field}
