\#!/bin/bash for i in <span class="math inline">$(curl "https://api.github.com/orgs/chartjs/repos" | grep -oP '"clone\_url":\\s\*"\\K\[^"\]+'); do echo git clone "$</span>i" done

\#!/bin/bash for i in <span class="math inline">$(curl "https://api.github.com/orgs/wikimedia/repos" | grep -oP '"clone\_url":\\s\*"\\K\[^"\]+'); do echo git clone "$</span>i" done

nzakas

CNTX={users}; NAME={wifelette}; PAGE=1 curl “https://api.github.com/<span class="math inline">*CNTX*/</span>NAME/repos?page=$PAGE&per\_page=100” | grep -e ’git\_url\*’ | cut -d " -f 4 | xargs -L1 git clone

find . -empty -type f -print -delete

find . -empty -type d -print -delete

find . ( -name “.git” -o -name “.gitignore” -o -name “.gitmodules” -o -name “.gitattributes” ) -exec rm -rf – {} +

find . ( -name “*SECURITY.txt" -o -name "*RELEASE.txt” -o -name “*CHANGELOG.txt" -o -name "*LICENSE.txt” -o -name “*CONTRIBUTING.txt" -name "*HISTORY.md” -o -name “*LICENSE" -o -name "*SECURITY.md” -o -name “*RELEASE.md" -o -name "*CHANGELOG.md” -o -name “*LICENSE.md" -o -name "*CODE\_OF\_CONDUCT.md” -o -name "\*CONTRIBUTING.md" ) -exec rm -rf – {} +
