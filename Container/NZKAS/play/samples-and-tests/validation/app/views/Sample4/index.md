\#{extends 'main.html' /}

# Validation sample 4

\#{ifErrors}

## Oops, please correct these errors

\#{/ifErrors} \#{form @Sample4.handleSubmit()}

User informations

Desired username : <span class="error">\#{error 'user.username' /}</span>

First name : <span class="error">\#{error 'user.firstname' /}</span>

Last name : <span class="error">\#{error 'user.lastname' /}</span>

Age : <span class="error">\#{error 'user.age' /}</span>

Password

Password : <span class="error">\#{error 'user.password' /}</span>

Confirm password : <span class="error">\#{error 'user.passwordConfirm' /}</span>

Email

Email address : <span class="error">\#{error 'user.email' /}</span>

Confirm email address : <span class="error">\#{error 'user.emailConfirm' /}</span>

Conditions

Checking this box indicates that you accept terms of use. If you do not accept these terms, do not use this website :

I accept terms of use : <span class="error">\#{ifError 'user.termsOfUse'}Please accept terms of use\#{/ifError}</span>

\#{/form}
