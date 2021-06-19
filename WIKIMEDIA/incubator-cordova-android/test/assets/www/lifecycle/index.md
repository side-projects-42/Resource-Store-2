Events
======

#### Platform: <span id="platform">  </span>, Version: <span id="version"> </span>

#### UUID: <span id="uuid">  </span>, Name: <span id="name"> </span>

#### Width: <span id="width">  </span>, Height: <span id="height">  </span>, Color Depth: <span id="colorDepth"></span>

#### Test 1

Press "Home" button, then return to this app to see pause/resume.  
There should be "Running" entries between pause and resume since app continues to run in the background.

#### Test 2

Press "Load new page" button to load a new Cordova page.  
When returning, you should see

-   Page2: onunload
-   Page1: onload
-   Page1: Running

#### Info for event testing:

<a href="index2.html" class="btn large">Load new page</a> <a href="javascript:" class="btn large">Clear status</a>
