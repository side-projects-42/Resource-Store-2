Updating the template project
-----------------------------

1.  Generate the tagged JavaScript file from the **cordova-js** repo
2.  Delete the **cordova-X.X.X.js** file in **templates/project/www**
3.  Copy the file from (1) into **templates/project/www**
4.  Rename the file in (3) to **cordova-X.X.X.js** where X.X.X is the current Cordova version
5.  Update the **&lt;script&gt;** tag reference for the **templates/project/www/index.html** file to point to (4)
