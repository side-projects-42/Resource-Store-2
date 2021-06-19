\#{extends 'admin.html' /}

### Welcome ${user}, you have written ${posts.size() ?: 'no'} ${posts.pluralize('post', 'posts')} so far

\#{list items:posts, as:'post'}

[${post.title}](<@%7Bform(post.id)%7D>)

\#{/list}

[+ write a new post](<@%7Bform()%7D>)
