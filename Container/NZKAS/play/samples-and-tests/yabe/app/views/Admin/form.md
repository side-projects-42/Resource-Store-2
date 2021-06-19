\#{extends 'admin.html' /} \#{ifnot post?.id}

### Write, a new post

\#{/ifnot} \#{else}

### Edit, this post

\#{/else} \#{form @save(post?.id)} \#{ifErrors}

Please correct these errors.

\#{/ifErrors}

\#{field 'title'} Post title: \#{/field}

\#{field 'content'} Write here:

${post?.content}

\#{/field}

\#{field 'tags'} Enter some tags: \#{/field}

\#{/form}
