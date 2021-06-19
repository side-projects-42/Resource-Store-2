\#{extends 'main.html' /}

# Login

Email

Password

\#{if flash.notconfirmed}

<a href="@%7BApplication.resendConfirmation(flash.notconfirmed)%7D" class="action">Resend a confirmation email</a>

\#{/if}
