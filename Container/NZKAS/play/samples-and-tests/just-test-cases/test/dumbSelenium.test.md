\#{selenium 'Test the test'} open('/') assertTextPresent('It works') type('name', 'COUCOU') assertValue('name', 'COUCOU') open('/application/index2') assertTextPresent('/index2') \#{/selenium}
