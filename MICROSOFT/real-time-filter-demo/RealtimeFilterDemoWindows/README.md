Real-time Filter Demo for Windows and Windows Phone 8.1
=======================================================

A Microsoft example application demonstrating the use of the Lumia Imaging SDK for real-time image effects. The effects are applied to the stream received from the camera and shown in the viewfinder. This app does not support capturing photos.

This example application is hosted in GitHub: https://github.com/Microsoft/real-time-filter-demo/

Developed with Microsoft Visual Studio Express 2013 for Windows.

Compatible with:

-   Windows RT 8.1

Tested to work on:

-   Nokia Lumia 2520
-   Windows 8.1 x86 desktop
-   Windows Phone 8.1 emulator

For more information on implementation, visit Lumia Developer’s Library: http://go.microsoft.com/fwlink/?LinkId=528377

Instructions
------------

Make sure you have the following installed:

-   Windows 8.1
-   Visual Studio Express 2013 for Windows
-   Nuget 2.7 or later

To build and run the code sample:

1.  Open the SLN file: File &gt; Open Project, select the solution (.sln postfix) file
2.  For the
    -   Windows 8.1 (tablet/desktop) version, set ‘RealtimeFilterDemo.Windows’ as StartUp project, select platform ‘x86’ and target ‘Simulator’.
    -   Windows Phone 8.1 version, set ‘RealtimeFilterDemo.WindowsPhone’ as StartUp project, select platform ‘x86’ and target ‘Emulator’.
3.  Press F5 to build the project and run it.

If the project does not compile on the first attempt it’s possible that you did not have the required packages yet. With Nuget 2.7 or later the missing packages are fetched automatically when build process is invoked, so try building again. If some packages cannot be found there should be an error stating this in the Output panel in Visual Studio Express.

For Windows 8.1, in addition to building and running from source, you can download and install a pre-compiled test build package:

1.  Download the “RealtimeFilterDemo\_\*\_Test.zip” to the target device and uncompress it
2.  Go to folder “RealtimeFilterDemo\_\*\_Test”
3.  Right click on file “Add-AppDevPackage.ps1” and select “Run with PowerShell”
4.  Read and accept all prompts (certificate installs etc.)
5.  Application should now be installed (“Real-time Filter Demo”)

For Windows Phone 8.1, in addition to building and running from source, you can download and install a pre-compiled test build package:

1.  Download the "RealtimeFilterDemo\_\*\_.appx to your computer
2.  Install the package to your Windows Phone 8.1 device with the Windows Phone Application Deployment (8.1) tool (comes with the Windows Phone development SDK)

For more information on deploying and testing applications see: http://msdn.microsoft.com/library/windows/apps/hh441469.aspx

About the implementation
------------------------

<table style="width:99%;"><colgroup><col style="width: 35%" /><col style="width: 64%" /></colgroup><thead><tr class="header"><th>Folder</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>/</td><td>Contains the project file, the license information and this file (README.md)</td></tr><tr class="even"><td>RealtimeFilterDemo</td><td>Root folder for the implementation files.</td></tr><tr class="odd"><td>RealtimeFilterDemo.Shared</td><td>Shared code for both Windows and Windows Phone versions.</td></tr><tr class="even"><td>RealtimeFilterDemo.Shared/Common</td><td>Helper classes generated automatically by Visual Studio.</td></tr><tr class="odd"><td>RealtimeFilterDemo.Windows</td><td>Windows specific view code and project meta data.</td></tr><tr class="even"><td>RealtimeFilterDemo.WindowsPhone</td><td>Windows Phone specific view code and project meta data.</td></tr></tbody></table>

Important classes:

<table style="width:99%;"><colgroup><col style="width: 31%" /><col style="width: 68%" /></colgroup><thead><tr class="header"><th>Class</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>RealtimeFilterDemo.MainPageViewModel</td><td>Contains camera handling and filtered bitmap rendering code.</td></tr></tbody></table>

Known issues
------------

None.

License
-------

See the license text file delivered with this project: https://github.com/Microsoft/real-time-filter-demo/blob/master/Licence.txt

Version history
---------------

-   2.0: First public release of Real-time Filter Demo for Windows
