<!--
#
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
# 
# http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
#
-->
Cordova iOS
=============================================================
CordovaLib is a static library that enables users to include Cordova in their iOS application projects easily, and also create new Cordova based iOS application projects.
<br />

Pre-requisites
-------------------------------------------------------------
Make sure you have installed the latest released iOS SDK which comes with Xcode 4. Download it at [http://developer.apple.com/ios](http://developer.apple.com/ios).
<br />

Build and install the Installer Package
-------------------------------------------------------------
You don't need to do this if you downloaded the installer from [http://incubator.apache.org/cordova/](http://incubator.apache.org/cordova/), this is only for developers that need to compile the source.

1. Launch **"Terminal.app"**
2. Navigate to the folder where the Makefile is
3. Type in **"make"** then press Enter
4. **make** will require you to install [Homebrew](http://mxcl.github.com/homebrew/), [wkhtmltopdf](http://code.google.com/p/wkhtmltopdf/) and [Markdown](http://daringfireball.net/projects/markdown/), in that order - you will have to agree to install them manually, we don't install them automatically. Note for **wkhtmltopdf**, follow the instructions exactly - you'll have to install version **0.9.9** through **make install-wkhtmltopdf**, NOT **brew install wkhtmltopdf**

<br />

The installer should build "CordovaInstaller.dmg" into the **dist** folder, mount the .dmg, then:

1. Quit Xcode
2. Launch "CordovaInstaller.pkg" from the mounted .dmg, to install CordovaLib, the Cordova framework and the Cordova Xcode Templates.

**NOTE:** For 2.0.0, the use of Xcode Templates has been removed. If you don't plan on using older Cordova versions, you should run the uninstaller first.

<br />

Create a Cordova project
-------------------------------------------------------------

1. Copy the **bin** subfolder (included in the distribution) to a location on your hard drive.
2. Follow the instructions in the [**Command-Line Usage** section](http://docs.phonegap.com/en/edge/guide_command-line_index.md.html#Command-Line%20Usage) of [http://docs.phonegap.com](http://docs.phonegap.com)

The docs should also have been included in the distribution.

<br />

Uninstalling CordovaLib, Cordova.framework and the Xcode Templates
--------------------------------------------------------------------

**NOTE:** For 2.0.0, the use of Xcode Templates has been removed. If you don't plan on using older Cordova versions, you should run the uninstaller first.

Use the "Uninstall Cordova" app included in the Cordova iOS DMG file, OR:

1. Launch "Terminal.app"
2. Navigate to the folder where Makefile is (this folder)
3. Type in "make uninstall" then press Enter

<br />

**NOTE:** 

It will ask you to confirm whether you want to delete the installed CordovaLib directory (just in case you made changes there) as well as the Cordova framework. It will not ask for confirmation in deleting the installed Xcode templates.

Unit Tests
--------------------------------------------------------------------
1. **Create** a new Cordova-based Application project
2. **Download** the code from the **[mobile-spec](https://github.com/apache/incubator-cordova-mobile-spec)** and put all of it in the root of your **www** folder
3. **Modify cordova.js** to point to your correct cordova-X.X.X.js version
4. **Run** the project

<br />

Installer Notes
-------------------------------------------------------------
This installer will only install items under your home folder (signified by ~)

Items that will be installed:

1. Xcode global var in _~/Library/Preferences/com.apple.Xcode.plist _ (which will be listed under Xcode Preferences -> Source Trees)
2. CordovaLib Xcode static library project under _~/Documents/CordovaLib_

<br />

To uninstall:

Delete the files listed above, or use the "Uninstall Cordova" app included in the Cordova iOS DMG file.

FAQ
---

**1. In Xcode 4 (for Cordova versions lesser than 2.0.0) , I get an error that "The Start Page 'www/index.html' was not found."?**

This is a known issue with the Xcode 4 Template - we can't specify a folder reference. You need to build the project at least once, then go to the folder where your project is in, and drag and drop in the __www__ folder, then add it as a __folder reference__ (will end up as a __blue__ folder, not yellow), then run the project again. Check your project warnings as well for clues.

**2. When I run the Installer, the installation fails?** 

Usually it's a folder permissions issue with the templates folder, changed by other third-party installers. You can trouble-shoot using the [instructions here](https://issues.apache.org/jira/browse/CB-270).

**3. When I add Plugins, they are not found or won't compile?** 

Check your Xcode Console Log for clues.

This can be because of:

1. You did not add the plugin mapping in __Cordova.plist/Plugins__ (contact the plugin creator for the proper mapping). The __key__ is the service name used in the JavaScript interface and the __value__ is the classname used in the Objective-C interface. Often the key and value are the same.
2. You did _not_ add the plugin code as a "group" (__yellow__ folder) but added it as a "folder reference" (blue folder) 
3. You are having #import problems - see the [Upgrading Cordova iOS](http://docs.phonegap.com/en/edge/guide_upgrading_index.md.html) document

<br />  

**4. I get this error in my Xcode Console Log - 'ERROR whitelist rejection: url='http://&lt;MYHOSTNAME&gt;/'**

This error occurs because of the new white-list feature in version 1.1.

You will have to add any hosts your app uses or connects to (hostnames/IP addresses only, **without** the protocol nor the path) in __Cordova.plist/ExternalHosts__. Wildcards are supported.

This includes external http/https/ftp/ftps links in:

1. HTML anchor tags
2. connections in JavaScript (i.e through XMLHttpRequest)
3. connections through Objective-C plugins 
  
<br />

**5. How do I effectively upgrade my project?**

Starting with Cordova 1.4, follow the instructions in the [**"Upgrading Cordova iOS"** document](http://docs.phonegap.com/en/edge/guide_upgrading_index.md.html).

<br />

**6. I've got 'symbol not found' errors during runtime? Usually it's because I'm deploying to an iOS 3.x device.**

With version 0.9.6, we implemented the W3C Media Capture API, which requires use of some iOS 4 APIs and frameworks. If you are deploying to an iOS 3.x device, you will need to "weak/optional" link three frameworks: __UIKit__, __CoreMedia__, and __AVFoundation__. 

If you get a "Symbol not found: _NSConcreteGlobalBlock_", you will have to weak link libSystem through a command-line option. 

This is because the LLVM compiler strong links NSConcreteGlobalBlock, but gcc weak links (correctly). Add a linker flag in "Other Linker Flags" in your project target: _"-weak-lSystem"_

Starting with version 1.1, when creating a new project, the weak-linking is added through a linker flag so you will not need to do this manually.

**7. How do I override the location of the start page www/index.html?** 

Starting with Cordova **1.4**, you can set this directly in the function **application:didFinishLaunchingWithOptions:** in your project's **AppDelegate.m** file.

Modify these lines appropriately:

1. self.viewController.wwwFolderName = @"www";
2. self.viewController.startPage = @"index.html";

**8. What's the difference between the two templates?**

Note that Xcode template support has  been removed in 2.0.0.

The CordovaLib static library is only used by the older subproject-based template. The Xcode 4 template uses Cordova.framework (a static framework) because of Xcode 4's template limitations. Both are based off the same code, just packaged differently.

Staring with 2.0.0, you must create projects [using the command line](http://docs.phonegap.com/en/edge/guide_command-line_index.md.html#Command-Line%20Usage):

<br />

**9. In the sub-project based Cordova project, I want to have a project-specific copy of CordovaLib for my project, not a global one. How do I do this?** 

In your project, there should be a _CordovaBuildSettings.xcconfig_ file. Modify the _CORDOVALIB_ variable in the file to point to your project specific CordovaLib folder. You can use relative paths, off $(PROJECT_DIR).

**10. In a .framework based Cordova project (only supported in Cordova versions lesser than 2.0.0), I want to have a project-specific copy of Cordova.framework for my project, not a global one. How do I do this?** 

Remove the existing Cordova.framework from your project, and drag and drop your own Cordova.framework in, that's all there is to it. To compile your own version of Cordova.framework, go to _~/Documents/CordovaLib_ and run the Xcode project with the _UniversalFramework_ target. You might need to modify the _USER_FRAMEWORK_SEARCH_PATHS_ in your project as well.

**11. I've got other Cordova-specific issues not covered here?**

Do a search in the Apache JIRA Issue Tracker [Apache JIRA](https://issues.apache.org/jira/browse/CB) or the [Wiki](http://wiki.apache.org/cordova/).      

**12. On an iOS 3.2 iPad, and launching an iPhone only app, when I use the Media Capture API, the user interface shown is iPad sized, not iPhone sized?**

You must delete the *~ipad.png images from **Capture.bundle** if they want to build an iPhone only app and have captureAudio() display properly on an iPad. This additional fix is just for iPad running iOS 3.2 - if the requested *~ipad.png is not available it returns the iPhone sized image.  

**13. I get this linker error: "ld: warning: ignoring file libCordova.a, file was built for archive which is not the architecture being linked (armv7)"** 

In your project's Build Settings, set **"Build for Active Architecture Only"** to **NO**. This has been fixed in Cordova 1.2 for newly created projects. This is usually because Xcode 4 will only build for armv7 by default, and not armv6.

**14. I get this runtime error/crash: "dyld: Symbol not found: _NSURLIsExcludedFromBackupKey"** 

 A. Older iOS versions than 5.1 do not have this symbol defined. You need to add the constant value and weak link the CoreFoundation framework:

 1. Add this line to your AppDelegate.m: 

        extern NSString * const NSURLIsExcludedFromBackupKey _attribute_((weak_import));
        
 2. Add a new value for "Other Linker Flags" in your project's Build Settings:
 
         -weak_framework CoreFoundation



BUGS?
-----
File them at the [Cordova Issue Tracker](https://issues.apache.org/jira/browse/CB)      
<br />

MORE INFO
----------
* [http://incubator.apache.org/cordova/](http://incubator.apache.org/cordova/)

<br />
