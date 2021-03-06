Filter Explorer for Windows 8.1 and Windows Phone 8.1
=====================================================

Filter Explorer is a Lumia example application which demonstrates some of the image editing capabilities and performance of the Lumia Imaging SDK by allowing the user to apply a number of filter layers to existing photos.

This example application is hosted in GitHub: https://github.com/Microsoft/filter-explorer/

Developed with Microsoft Visual Studio Express 2013 for Windows.

Compatible with:

-   Windows RT 8.1

Tested to work on:

-   Nokia Lumia 2520
-   Windows 8.1 x86 desktop
-   Windows Phone 8.1 emulator

For more information on implementation, visit Lumia Developer’s Library: http://go.microsoft.com/fwlink/?LinkId=528373

Instructions
------------

Make sure you have the following installed:

-   Windows 8.1
-   Visual Studio Express 2013 for Windows
-   Nuget 2.7 or later

To build and run the code sample:

1.  Open the SLN file: File &gt; Open Project, select the solution (.sln postfix) file
2.  For the
    -   Windows 8.1 (tablet/desktop) version, set ‘FilterExplorer.Windows’ as StartUp project, select platform ‘x86’ and target ‘Simulator’.
    -   Windows Phone 8.1 version, set ‘FilterExplorer.WindowsPhone’ as StartUp project, select platform ‘x86’ and target ‘Emulator’.
3.  Press F5 to build the project and run it.

If the project does not compile on the first attempt it’s possible that you did not have the required packages yet. With Nuget 2.7 or later the missing packages are fetched automatically when build process is invoked, so try building again. If some packages cannot be found there should be an error stating this in the Output panel in Visual Studio Express.

For Windows 8.1, in addition to building and running from source, you can download and install a pre-compiled test build package:

1.  Download the “FilterExplorer\_\*\_Test.zip” to the target device and uncompress it
2.  Go to folder “FilterExplorer\_\*\_Test”
3.  Right click on file “Add-AppDevPackage.ps1” and select “Run with PowerShell”
4.  Read and accept all prompts (certificate installs etc.)
5.  Application should now be installed (“Filter Explorer”)

For Windows Phone 8.1, in addition to building and running from source, you can download and install a pre-compiled test build package:

1.  Download the "FilterExplorer\_\*\_.appx to your computer
2.  Install the package to your Windows Phone 8.1 device with the Windows Phone Application Deployment (8.1) tool (comes with the Windows Phone development SDK)

For more information on deploying and testing applications see: http://msdn.microsoft.com/library/windows/apps/hh441469.aspx

About the implementation
------------------------

<table style="width:99%;"><colgroup><col style="width: 35%" /><col style="width: 64%" /></colgroup><thead><tr class="header"><th>Folder</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>/</td><td>Contains the project file, the license information and this file (README.md)</td></tr><tr class="even"><td>FilterExplorer</td><td>Root folder for the implementation files.</td></tr><tr class="odd"><td>FilterExplorer.Shared/Commands</td><td>MVVM commands.</td></tr><tr class="even"><td>FilterExplorer.Shared/Converters</td><td>XAML binding converters</td></tr><tr class="odd"><td>FilterExplorer.Shared/Filters</td><td>Filter wrappers.</td></tr><tr class="even"><td>FilterExplorer.Shared/Models</td><td>MVVM models.</td></tr><tr class="odd"><td>FilterExplorer.Shared/Strings</td><td>Localization files.</td></tr><tr class="even"><td>FilterExplorer.Shared/Utilities</td><td>Utility classes.</td></tr><tr class="odd"><td>FilterExplorer.Shared/ViewModels</td><td>MVVM viewmodels.</td></tr><tr class="even"><td>FilterExplorer.Windows/Assets</td><td>Graphic assets like icons and tiles for the Windows version.</td></tr><tr class="odd"><td>FilterExplorer.Windows/Views</td><td>MVVM views for the Windows version.</td></tr><tr class="even"><td>FilterExplorer.WindowsPhone/Assets</td><td>Graphic assets like icons and tiles for the Windows Phone version.</td></tr><tr class="odd"><td>FilterExplorer.WindowsPhone/Views</td><td>MVVM views for the Windows Phone version.</td></tr></tbody></table>

Important classes:

<table style="width:99%;"><colgroup><col style="width: 31%" /><col style="width: 68%" /></colgroup><thead><tr class="header"><th>Class</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>Filters.Filters</td><td>Imaging SDK filters are wrapped in application specific filters.</td></tr><tr class="even"><td>Models.FilteredPhotoModel</td><td>Contains PhotoModel and adds rendering loaded images with filters.</td></tr><tr class="odd"><td>Models.PhotoModel</td><td>Handles reading image file contents.</td></tr><tr class="even"><td>Models.SessionModel</td><td>Contains the user session.</td></tr></tbody></table>

Known issues
------------

None.

License
-------

See the license text file delivered with this project: https://github.com/Microsoft/filter-explorer/blob/master/License.txt

Version history
---------------

-   2.0: Second public release of Filter Explorer for Windows
    -   Added Windows Phone 8.1 support
    -   Updated to latest Lumia Imaging SDK
-   1.0: First public release of Filter Explorer for Windows
