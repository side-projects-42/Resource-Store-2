DrumkitX
========

DrumkitX is a Windows Phone 8 port of the Drumkit XNA example using Direct3D and XAudio for fast graphics and low latency sample playback. This demo app lets you play percussion sounds by tapping the screen. You can record your beats, play them back later and also play drums on top of your latest recording.

This example application is hosted in GitHub: https://github.com/Microsoft/drumkitx

Developed with Microsoft Visual Studio Express for Windows Phone 2012.

Compatible with:

-   Windows Phone 8

Tested to work on:

-   Nokia Lumia 520
-   Nokia Lumia 820
-   Nokia Lumia 920

Instructions
------------

Make sure you have the following installed:

-   Windows 8
-   Windows Phone SDK 8.0

To build and run the sample:

-   Open the SLN file
    -   File &gt; Open Project, select the file DrumkitX.sln
-   Select the target, for example ‘Emulator WVGA 512MB’.
-   Press F5 to build the project and run it on the Windows Phone Emulator.

To deploy the sample on Windows Phone 8 device: \* See the official documentation for deploying and testing applications on Windows Phone devices at http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

About the implementation
------------------------

Important folders:

<table style="width:99%;"><colgroup><col style="width: 35%" /><col style="width: 64%" /></colgroup><thead><tr class="header"><th>Folder</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>/</td><td>Contains the project file, the license information and this file (README.md)</td></tr><tr class="even"><td>DrumkitX</td><td>Root folder for the implementation files.</td></tr><tr class="odd"><td>DrumkitX/DirectXTK</td><td>DirectX ToolKit.</td></tr><tr class="even"><td>DrumkitX/DrumkitX</td><td>DrumkitX Windows Phone managed application implementation.</td></tr><tr class="odd"><td>DrumkitX/DrumkitX/Assets</td><td>Application assets, tiles for example.</td></tr><tr class="even"><td>DrumkitX/DrumkitX/Properties</td><td>Application property files.</td></tr><tr class="odd"><td>DrumkitX/DrumkitX/Resources</td><td>Application resources.</td></tr><tr class="even"><td>DrumkitX/DrumkitXComp</td><td>Native components for DrumkitX application.</td></tr><tr class="odd"><td>DrumkitX/DrumkitXComp/images</td><td>DirectDraw surface files for drumkit graphics.</td></tr><tr class="even"><td>DrumkitX/DrumkitXComp/sounds</td><td>Audio files for drum sounds.</td></tr></tbody></table>

Important files:

<table style="width:99%;"><colgroup><col style="width: 26%" /><col style="width: 73%" /></colgroup><thead><tr class="header"><th>File</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>MainPage.xaml</td><td>The main page of the application with a drawing surface for DirectX graphics.</td></tr><tr class="even"><td>MainPage.xaml.cs</td><td>The code-behind file of the main page bridging managed side with native side.</td></tr></tbody></table>

Important classes:

<table style="width:99%;"><colgroup><col style="width: 31%" /><col style="width: 68%" /></colgroup><thead><tr class="header"><th>Class</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>Direct3DInterop</td><td>Acts as a bridge between the managed and native worlds.</td></tr><tr class="even"><td>DrumkitRenderer</td><td>Responsible of rendering the drumkit and playing the drum sounds.</td></tr><tr class="odd"><td>Recorder.cs</td><td>Records the drum strokes.</td></tr></tbody></table>

You can read more about Direct3D for Windows Phone 8 from http://msdn.microsoft.com/en-us/library/windowsphone/develop/jj207062(v=vs.105).aspx

Another Nokia Developer example on creating DirectX application on Windows Phone is available at http://www.developer.nokia.com/Community/Wiki/DirectX\_on\_Windows\_Phone:\_2D\_Game\_Example\_using\_DirectX\_Toolkit

More information on XAudio2 can be found from http://msdn.microsoft.com/en-us/library/windows/apps/Hh405049 and from an example application http://code.msdn.microsoft.com/windowsapps/Basic-Audio-Sample-9a5bb0b7 demonstrating the use of XAudio2 in an app.

Known issues
------------

No known issues.

License
-------

See the license file delivered with this project. The license is also available online at https://github.com/Microsoft/drumkitx/blob/master/License.txt

Version history
---------------

-   1.1 Support for 720p resolution.
-   1.0 Application tiles and icons. Removed unnecessary capabilities.
-   0.6 Code cleaning, copyrighting and commenting. Button graphics added.
-   0.5 First public beta version
