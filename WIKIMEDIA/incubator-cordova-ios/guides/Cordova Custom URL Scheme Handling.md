Cordova Custom URL Scheme Handling
==================================

For an iOS app, you can add a URL Scheme handler in your app’s Info.plist so that your app launches when another iOS app (like Mobile Safari) launches a URL with your custom scheme.

1.  Register your custom scheme in your app’s Info.plist: the instructions are [here](http://developer.apple.com/library/ios/#documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/AdvancedAppTricks/AdvancedAppTricks.html#//apple_ref/doc/uid/TP40007072-CH7-SW21)
2.  In your JavaScript, add a global function **handleOpenURL** which just takes one parameter, which will be a string containing the URL that was launched. Add your code to parse and handle the URL in that global function. This function will be called always if your app was launched from the custom scheme.

        function handleOpenURL(url) {
            // TODO: parse the url, and do something
        }

3.  In your JavaScript, the global variable **invokeString** will be set with the URL that your app was launched with **if it was first launched with a URL (from a terminated state)**, not from resuming from the background (multi-tasking).

**IMPORTANT NOTE:**

You **cannot** launch any interactive features like alerts in the **handleOpenURL** code, if you do, your app will hang. Similarly, you should not call any Cordova APIs in there, unless you wrap it first in a setTimeout call, with a timeout value of zero:

        function handleOpenUrl(url) {
             // TODO: parse the url, and do something
             setTimeout(function() {
                 // TODO: call some Cordova API here
             }, 0);
        }
