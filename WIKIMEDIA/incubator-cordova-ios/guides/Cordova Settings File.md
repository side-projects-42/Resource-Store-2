Cordova Settings File
=====================

The **Cordova.plist settings file** controls various settings of Cordova. This is application wide, and not set per CDVViewController instance.

1.  A list of **Plugins** allowed to be used in a CDVViewController (set in the Plugins dictionary - key is the servicename used in JavaScript, and the value is the Objective-C class for the plugin that is a CDVPlugin sub-class)
2.  A **white-list** of hosts (with no scheme nor path, hostnames or IP addresses only) that Cordova is allowed to connect to (set in the ExternalHosts array - wildcards allowed)
3.  Various **other** settings (defaults err on not breaking existing apps)

    1.  **UIWebViewBounce (boolean, defaults to YES)** - set to NO if you don’t want the WebView to rubber-band

    2.  **TopActivityIndicator (string, defaults to ‘gray’)** - this is the top spinning throbber in the status/battery bar, valid values are “whiteLarge”, “white” and “gray”

    3.  **EnableLocation (boolean, defaults to NO)** - set to YES, to initialize the Geolocation plugin at start-up (so the fix on your location can be more accurate)

    4.  **EnableViewportScale (boolean, defaults to NO)** - set to YES to prevent viewport scaling through a meta tag

    5.  **AutoHideSplashScreen (boolean, defaults to YES)** - set to NO to control when the splashscreen is hidden through a JavaScript API

    6.  **ShowSplashScreenSpinner (boolean, defaults to YES)** - set to NO to hide the splash-screen spinner

    7.  **MediaPlaybackRequiresUserAction (boolean, defaults to NO)** - set to YES to not allow autoplayed HTML5 video

    8.  **AllowInlineMediaPlayback (boolean, defaults to NO)** - set to YES to allow inline HTML5 media playback, also, the video element in the HTML document must also include the webkit-playsinline attribute

    9.  **OpenAllWhitelistURLsInWebView (boolean, defaults to NO)** - set to YES to open all white-listed URLs in the main WebView

    10. **BackupWebStorage (boolean, defaults to YES)** - set to NO to prevent the backup of localStorage and WebSQL databases to the Documents/Backups folder. This was a fix for this [Apple bug](http://phonegap.com/2012/04/18/ios-5-1-and-the-embedded-uiwebview-with-cordova/)
