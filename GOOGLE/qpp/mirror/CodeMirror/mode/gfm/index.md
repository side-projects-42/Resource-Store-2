CodeMirror: GFM mode
====================

GitHub Flavored Markdown ======================== Everything from markdown plus GFM features: \#\# URL autolinking Underscores\_are\_allowed\_between\_words. \#\# Fenced code blocks (and syntax highlighting) \`\`\`javascript for (var i = 0; i &lt; items.length; i++) { console.log(items\[i\], i); // log them } \`\`\` \#\# Task Lists - \[ \] Incomplete task list item - \[x\] \*\*Completed\*\* task list item \#\# A bit of GitHub spice \* SHA: be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2 \* User@SHA ref: mojombo@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2 \* User/Project@SHA: mojombo/god@be6a8cc1c1ecfe9489fb51e4869af15a13fc2cd2 \* \\\#Num: \#1 \* User/\#Num: mojombo\#1 \* User/Project\#Num: mojombo/god\#1 See http://github.github.com/github-flavored-markdown/.

Optionally depends on other modes for properly highlighted code blocks.

**Parsing/Highlighting Tests:** [normal](../../test/index.html#gfm_*), [verbose](../../test/index.html#verbose,gfm_*).
