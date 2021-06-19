NFC Talk
========

NFC Talk application demonstrates connection initiation by tapping devices together or by searching for nearby devices over Bluetooth, using the Windows Phone 8 Proximity API, the Windows.Networking.Proximity.PeerFinder and related classes.

![Screenshot 1](/doc/nfc_talk_ss_tap_small.png?raw=true)  ![Screenshot 2](/doc/nfc_talk_ss_chat_small.png?raw=true)

The example has been developed with XAML for Windows Phone devices and tested to work on Lumia devices with Windows Phone 8.

This example application is hosted in GitHub: https://github.com/Microsoft/nfc-talk

For more information on implementation and porting, visit Lumia Developer’s Library: http://developer.nokia.com/Resources/Library/Lumia/\#!code-examples/nfc-talk.html

1. Instructions
---------------

This is a simple build-and-run solution. Learn about Proximity API usage for opening communication channels to application instances on other devices by trying out the application.

To build the application you need to have Windows 8 and Windows Phone SDK 8.0 or later installed.

Using the Windows Phone 8 SDK:

1.  Open the SLN file: File &gt; Open Project, select the file `NFCTalk.sln`
2.  Select the target ‘Device’.
3.  Press F5 to build the project and run it on the device.

Please see the official documentation for deploying and testing applications on Windows Phone devices: http://msdn.microsoft.com/en-us/library/gg588378%28v=vs.92%29.aspx

2. Implementation
-----------------

**Important files and classes:**

<table style="width:99%;"><colgroup><col style="width: 25%" /><col style="width: 74%" /></colgroup><thead><tr class="header"><th style="text-align: left;">File</th><th style="text-align: left;">Description</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><code>MainPage.xaml(.cs)</code></td><td style="text-align: left;">The main page of the application.</td></tr><tr class="even"><td style="text-align: left;"><code>TalkPage.xaml(.cs)</code></td><td style="text-align: left;">The page that is used to chat with peer.</td></tr><tr class="odd"><td style="text-align: left;"><code>SettingsPage.cs</code></td><td style="text-align: left;">The page that is used to configure chat name.</td></tr><tr class="even"><td style="text-align: left;"><code>PeersPage.cs</code></td><td style="text-align: left;">The page that is used to show a list of detected remote peers.</td></tr><tr class="odd"><td style="text-align: left;"><code>Communication.cs</code></td><td style="text-align: left;">Class that encapsulates the usage of the Proximity API.</td></tr></tbody></table>

**Required capabilities:**

-   ID\_CAP\_NETWORKING
-   ID\_CAP\_PROXIMITY

3. License
----------

See the license text file delivered with this project. The license file is also available online at https://github.com/Microsoft/nfc-talk/blob/master/Licence.txt

4. Version history
------------------

-   Version 1.1: Peer browsing support (also for NFC-less devices).
-   Version 1.0: The first release.
