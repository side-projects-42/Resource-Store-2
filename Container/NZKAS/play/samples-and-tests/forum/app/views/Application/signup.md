\#{extends 'main.html' /}

# Signup

We will send you an email for confirmation

Email <span class="error">\#{error 'email' /}</span>

Display name \#{error 'name' /}

Password

Enter your desired password twice. It must be at least 5 characters.

<span class="error">\#{error 'password' /}</span>

<span class="error">\#{error 'password2' /}</span>
