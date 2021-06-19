# [Play, jobs](<@%7BApplication.index()%7D>)

\#{if request.controller == 'Application'}

This is a sample Play application. You can log into the [Administration area](<@%7BAdministration.index()%7D>) with the _admin/admin_ credentials, to create companies, categories, tags and jobs. A company administrator has a restricted access to the admin area. Look at the code to see how we reuse the CRUD module for that ...

<a href="@@%7BApplication.index(null,%20null)%7Dall.xml" id="rss">RSS Jobs feed</a> \#{/if}

\#{doLayout /}
