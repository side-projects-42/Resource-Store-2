\#{extends 'main.html' /}

# Validation sample 3

\#{ifErrors}

## Oops, please correct these errors

\#{/ifErrors} \#{form @Sample3.handleSubmit()}

User informations

Desired username : <span class="error">\#{error 'username' /}</span>

First name : <span class="error">\#{error 'firstname' /}</span>

Last name : <span class="error">\#{error 'lastname' /}</span>

Age : <span class="error">\#{error 'age' /}</span>

Password

Password : <span class="error">\#{error 'password' /}</span>

Confirm password : <span class="error">\#{error 'passwordConfirm' /}</span>

Email

Email address : <span class="error">\#{error 'email' /}</span>

Confirm email address : <span class="error">\#{error 'emailConfirm' /}</span>

Conditions

Checking this box indicates that you accept terms of use. If you do not accept these terms, do not use this website :

I accept terms of use : <span class="error">\#{ifError 'termsOfUse'}Please accept terms of use\#{/ifError}</span>

\#{/form}
