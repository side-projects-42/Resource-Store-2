\#{extends 'main.html' /} \#{set title:'Home' /}

# Facebook!

The example is configured with a key corresponding to the loisant.org domain. Facebook will no accept redirection to other domains (such as localhost) To test it, you need to either map 127.0.0.1 to loisant.org in your /etc/hosts, either replace the configuration to an application that you created on Facebook.

\#{if me}

### You're ${me.get("name")} on Facebook

\#{/if} \#{else} [login](<@%7Bauth()%7D>) \#{/else}
