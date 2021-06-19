### DevtoolsExtended extensions

Action

Name

Enabled

URL

Remove

<span class="edit">Edit</span> <span class="save">Save</span>

<a href="" class="extensionInfo-downloadURL" title="Hint for finding this extension; right click open in new window">↡</a>

<span class="remove">Remove</span> <span class="cancel">Cancel</span>

No extensions defined

Add Extension

These extensions are [chrome devtools extensions](http://developer.chrome.com/extensions/devtools.html) with two differences:

1.  HTML files must include this `.js` files:

        <script src='chrome-extension://ggimboaoffjaeoblofehalflljohnfbl/WebInspectorKit/Source/devtools/front_end/devtools_extension_api.js'></script>

    These files mimic code injected into devtools extension .html files.

2.  More features are available:
    -   remote debug protocol
    -   ExtensionItemSelector

Load these extensions as normal Chrome devtools extensions and put the URL `chrome-extension://id/path-to-html` in the table above.

------------------------------------------------------------------------

### Remote Debugging

Remote port number:

------------------------------------------------------------------------

### Debugging Communications to chrome.devtools Extension

Console Tracing Options For Debugging This Extension

Trace connection events  
Trace messages  
Trace Warning IO  
Trace chrome.\* adapters

<span id="warnReload" class="hidden warning">To Complete Options Update, Please click `reload` the chrome://extensions page</span>
