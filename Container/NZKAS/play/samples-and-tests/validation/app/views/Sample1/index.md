\#{extends 'main.html' /}

# Validation sample 1

\#{ifErrors}

## Oops, please correct these errors

- ${error}

\#{/ifErrors} \#{form @Sample1.handleSubmit()}

User informations

Desired username :

First name :

Last name :

Age :

Password

Password :

Confirm password :

Email

Email address :

Confirm email address :

Conditions

Checking this box indicates that you accept terms of use. If you do not accept these terms, do not use this website :

I accept terms of use :

\#{/form}
