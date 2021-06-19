![](@%7B'/public/playmanual/logo.png'%7D)

## Play ${play.version}

## Browse ${module ? '('+module.capitalizeWords()+')' : ''}

- <span id="gotoc">[Documentation home](/@documentation)</span>
- <span id="gotoc">[${module ? module.capitalizeWords() + ' — ' : ''}Table of contents](home)</span>

\#{if modules}

## Installed modules

- [${module.capitalizeWords()}](modules/$%7Bmodule%7D/home) \#{if apis.contains(module)} — [Browse API](/@api/-$%7Bmodule%7D/index.html) \#{/if}

\#{/if}

## Contents

## Search

Get help with google

${html.raw()}
