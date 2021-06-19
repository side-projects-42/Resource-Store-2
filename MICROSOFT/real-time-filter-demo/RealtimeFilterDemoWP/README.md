Filter Explorer for Windows Phone 8
===================================

Filter Explorer application demonstrates some of the image editing capabilities and performance of the Lumia Imaging SDK by allowing you to apply a number of filter layers to existing or newly captured photos.

This example application is hosted in GitHub: https://github.com/Microsoft/filter-explorer

Developed with Microsoft Visual Studio Express for Windows Phone 2012.

Compatible with:

-   Windows Phone 8

Tested to work on:

-   Nokia Lumia 520
-   Nokia Lumia 620
-   Nokia Lumia 820
-   Nokia Lumia 920

For more information on implementation, visit Microsoft Developer’s Library: http://go.microsoft.com/fwlink/?LinkId=528377

Instructions
------------

Make sure you have the following installed:

-   Windows 8
-   Visual Studio Express 2012 for Windows Phone
-   Nuget 2.7 or later

To build and run the sample in emulator

1.  Open the SLN file: File &gt; Open Project, select the solution (.sln postfix) file
2.  Select the target ‘Emulator’ and platform ‘x86’.
3.  Press F5 to build the project and run it.

If the project does not compile on the first attempt it’s possible that you did not have the required packages yet. With Nuget 2.7 or later the missing packages are fetched automatically when build process is invoked, so try building again. If some packages cannot be found there should be an error stating this in the Output panel in Visual Studio Express.

For more information on deploying and testing applications see: http://msdn.microsoft.com/library/windowsphone/develop/ff402565(v=vs.105).aspx

About the implementation
------------------------

<table style="width:99%;"><colgroup><col style="width: 35%" /><col style="width: 64%" /></colgroup><thead><tr class="header"><th>Folder</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>/</td><td>Contains the project file, the license information and this file (README.md)</td></tr><tr class="even"><td>ImageProcessingApp</td><td>Root folder for the implementation files.</td></tr><tr class="odd"><td>ImageProcessingApp/Assets</td><td>Graphic assets like icons and tiles.</td></tr><tr class="even"><td>ImageProcessingApp/Controls</td><td>Custom UI controls.</td></tr><tr class="odd"><td>ImageProcessingApp/Converters</td><td>Utilities to convert various data types in XAML.</td></tr><tr class="even"><td>ImageProcessingApp/Helpers</td><td>Rendering, tombstorning, etc. helpers.</td></tr><tr class="odd"><td>ImageProcessingApp/Models</td><td>Application model.</td></tr><tr class="even"><td>ImageProcessingApp/Pages</td><td>XAML pages.</td></tr><tr class="odd"><td>ImageProcessingApp/Properties</td><td>Application property files.</td></tr><tr class="even"><td>ImageProcessingApp/Resources</td><td>Application resources.</td></tr></tbody></table>

Important classes:

<table style="width:99%;"><colgroup><col style="width: 26%" /><col style="width: 73%" /></colgroup><thead><tr class="header"><th>File</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>Helpers.StreamRenderingHelper</td><td>Helper utilities for fast photo stream rendering.</td></tr><tr class="even"><td>Models.FilterModel</td><td>Different individual filters.</td></tr><tr class="odd"><td>Models.PhotoModel</td><td>Main model class including photo data, editing session and rendering functions.</td></tr><tr class="even"><td>Pages.FilterPage</td><td>Filter selection page.</td></tr><tr class="odd"><td>Pages.PhotoPage</td><td>Main selected photo display/editing page.</td></tr><tr class="even"><td>Pages.StreamPage</td><td>Startup page, displays Camera Roll photos rendered with randomly applied filters.</td></tr></tbody></table>

Known issues
------------

None.

License
-------

See the license text file delivered with this project: https://github.com/Microsoft/filter-explorer/blob/master/License.txt

Version history
---------------

-   2.0: Fifth public release of Filter Explorer
    -   Updated to latest Lumia Imaging SDK
-   1.3: Fourth public release of Filter Explorer
    -   Updated to the latest Nokia Imaging SDK
-   1.2: Third public release of Filter Explorer
    -   Updated to use the latest Nokia Imaging SDK
    -   Using Nuget Package Restore for external libraries
-   1.1: Second public release of Filter Explorer
    -   Updated looks: new green theme
-   1.0: First public release of Filter Explorer
