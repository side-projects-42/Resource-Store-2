AudioRecorder
=============

AudioRecorder example application demonstrates how to record and play audio on Windows Phone 8 devices. XNA Framework Audio API and Windows Audio Session API (WASAPI) are covered by the application.

![Main page](/doc/audio_recorder_main_page_small.png?raw=true)  ![Audio files page](/doc/audio_recorder_files_page_small.png?raw=true)

This example application is hosted in GitHub: https://github.com/Microsoft/audio-recorder

Developed with:

-   Microsoft Visual Studio Express for Windows Phone 2012.

Compatible with:

-   Windows Phone 8

Tested to work on:

-   Nokia Lumia 920
-   Nokia Lumia 925
-   Nokia Lumia 1520

Instructions
------------

Make sure you have the following installed:

-   Windows 8
-   Windows Phone SDK 8.0

To build and run the sample:

-   Open the SLN file
    -   File &gt; Open Project, select the file AudioRecorder.sln
-   Select the target, for example ‘Emulator WXGA’.
-   Press F5 to build the project and run it on the Windows Phone Emulator.

To deploy the sample on Windows Phone device: \* See the official documentation for deploying and testing applications on Windows Phone devices at http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

About the implementation
------------------------

Important folders:

<table style="width:99%;"><colgroup><col style="width: 35%" /><col style="width: 64%" /></colgroup><thead><tr class="header"><th>Folder</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>/</td><td>Contains the project file, the license information and this file (README.md)</td></tr><tr class="even"><td>AudioRecorder</td><td>Root folder for the implementation files.</td></tr><tr class="odd"><td>AudioRecorder/Assets</td><td>Graphic assets like icons and tiles.</td></tr><tr class="even"><td>AudioRecorder/Properties</td><td>Application property files.</td></tr><tr class="odd"><td>AudioRecorder/Resources</td><td>Application resources.</td></tr><tr class="even"><td>WasapiAudioComp</td><td>Root folder of Windows Phone Runtime component for WASAPI implementation files.</td></tr></tbody></table>

Important classes:

<table><thead><tr class="header"><th>File</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>MainPage</td><td>This class is the main UI of the app.</td></tr><tr class="even"><td>AudioManager</td><td>Handles all the UI related audio actions.</td></tr><tr class="odd"><td>XnaAudio</td><td>Handles the recording and playback of audio using XNA Audio API.</td></tr><tr class="even"><td>WasapiAudio</td><td>Handles the audio capturing and rendering using WASAPI.</td></tr></tbody></table>

For more information about audio handling in Windows Phone 8 devices, see an article available at http://developer.nokia.com/Community/Wiki/Audio\_recording\_and\_playback\_options\_in\_Windows\_Phone.

Known issues
------------

No known issues.

License
-------

See the license file delivered with this project. The license is also available online at https://github.com/Microsoft/audio-recorder/blob/master/License.txt

Version history
---------------

-   0.3.0.0 Added 720p resolution support and yet another missing dependency fix.
-   0.2.0.0 Added a missing dependency affecting others than ARM device builds.
-   0.1.0.0 First beta release.
