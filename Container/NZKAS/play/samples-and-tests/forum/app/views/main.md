\#{if connected}

Welcome <a href="@%7BUsers.show(connected.id)%7D" class="connectedUser">${connected.name}</a> ([Logout](@%7BApplication.logout%7D))

\#{/if} \#{else}

Still not a member ? [Signup](@%7BApplication.signup%7D). Or if you already have an account, just [Login](@%7BApplication.login%7D).

\#{/else}

- <a href="@%7BForums.index%7D" class="${request?.controller == &#39;Forums&#39; || request?.controller == &#39;Topics&#39; ? &#39;selected&#39; : &#39;&#39;}">Forums</a>
- <a href="@%7BUsers.index%7D" class="${request?.controller == &#39;Users&#39; ? &#39;selected&#39; : &#39;&#39;}">Users</a>

\#{if flash?.error}

${flash.error}

\#{/if} \#{if flash?.success}

${flash.success}

\#{/if} \#{doLayout /}

Just a sample application made with [Play!](http://www.playframework.org)
