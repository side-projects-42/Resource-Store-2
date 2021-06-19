\#{extends 'main.html' /} \#{set title:post.title /}

- <span id="previous">[${post.previous().title}](<@%7BApplication.show(post.previous().id)%7D>)</span>
- <span id="next">[${post.next().title}](<@%7BApplication.show(post.next().id)%7D>)</span>

\#{if flash.success}

${flash.success}

\#{/if} \#{display post:post, as:'full' /}

### Post a comment

\#{form @Application.postComment(post.id)} \#{ifErrors}

${errors\[0\]}

\#{/ifErrors}

Your name:

Your message:

${params.content}

Please type the code below: ![](<@%7BApplication.captcha(randomID)%7D>)

\#{/form}
