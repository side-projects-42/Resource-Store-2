Weekly Planner
==============

This example application demonstrates how to build custom user interface controls for Windows Phone using Microsoft Silverlight.

![App design](/doc/WP7_weekly_planner.png?raw=true)

This example application is hosted in GitHub: https://github.com/Microsoft/weekly-planner-wp

Developed with: \* Microsoft Visual Studio 2010 Express for Windows Phone \* Microsoft Visual Studio Express for Windows Phone 2012.

Compatible with:

-   Windows Phone 7
-   Windows Phone 8

Tested to work on:

-   Nokia Lumia 820
-   Nokia Lumia 920

Instructions
------------

Make sure you have the following installed:

-   Windows 8
-   Windows Phone SDK 8.0
-   Latest NuGet Package Manager (&gt;2.7.1) from https://nuget.org/ to enable NuGet Package Restore

To build and run the sample:

-   Open the SLN file
    -   File &gt; Open Project, select the file wpweeklyplanner.sln
-   Depending on whether you want to run the WP7 or WP8 version of the application, select either wprestaurantapp\_WP7 or wprestaurantapp\_WP8 as a StartUp Project.  
-   Select the target, for example ‘Emulator WVGA’.
-   Press F5 to build the project and run it on the Windows Phone Emulator.

To deploy the sample on Windows Phone device: \* See the official documentation for deploying and testing applications on Windows Phone devices at http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

About the implementation
------------------------

Important folders:

<table style="width:99%;"><colgroup><col style="width: 35%" /><col style="width: 64%" /></colgroup><thead><tr class="header"><th>Folder</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>/</td><td>Contains the project file, the license information and this file (README.md)</td></tr><tr class="even"><td>wpweeklyplanner_WP7</td><td>Root folder for the WP7 implementation files.</td></tr><tr class="odd"><td>wpweeklyplanner_WP8</td><td>Root folder for the WP8 implementation files.</td></tr><tr class="even"><td>wpweeklyplanner_WP7/Content</td><td>Graphic files.</td></tr><tr class="odd"><td>wpweeklyplanner_WP7/Properties</td><td>WP7 Application property files.</td></tr><tr class="even"><td>wpweeklyplanner_WP7/SampleData</td><td>Application sample data.</td></tr><tr class="odd"><td>wpweeklyplanner_WP7/Themes</td><td>Application specific theming.</td></tr><tr class="even"><td>wpweeklyplanner_WP7/ViewModels</td><td>ViewModels of the application.</td></tr><tr class="odd"><td>wpweeklyplanner_WP8/Content</td><td>Graphic files.</td></tr><tr class="even"><td>wpweeklyplanner_WP8/Properties</td><td>WP8 Application property files.</td></tr></tbody></table>

Important files:

<table style="width:99%;"><colgroup><col style="width: 26%" /><col style="width: 73%" /></colgroup><thead><tr class="header"><th>File</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>MainPage.xaml.cs</td><td>Class responsible for displaying the pivot view of the application.</td></tr><tr class="even"><td>WeeklyGrid.cs</td><td>Custom control based on System.Windows.Controls.Control. Describes the view of a single day.</td></tr><tr class="odd"><td>EventViewModel.cs</td><td>View model class describing a single event saved by the user.</td></tr><tr class="even"><td>MainViewModel.cs</td><td>View model class responsible for loading event data from disk and maintaining clipboard.</td></tr><tr class="odd"><td>WeeklyEvent.cs</td><td>Custom control based on System.Windows.Controls.Button that visualises a single event saved by the user in the grid of a single day.</td></tr></tbody></table>

Known issues
------------

No known issues.

License
-------

See the license file delivered with this project. The license is also available online at https://github.com/Microsoft/weekly-planner-wp/blob/master/License.txt

Version history
---------------

-   1.3.0 Add support for 720p resolution and NuGet package restore.
-   1.2.0 Bug fixes and changes based on reviews
-   1.1.0 Bug fixes and changes based on reviews; published on the Nokia Developer website.
-   1.0.1 Support for Windows Phone OS version 7.1
-   1.0.0 First version.
