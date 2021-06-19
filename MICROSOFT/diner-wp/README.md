Diner
=====

This example application demonstrates how to build a simple application based on panorama control for Windows Phone using Microsoft Silverlight.

Support for Windows Phone 8 was made according to guidelines given in article http://www.developer.nokia.com/Resources/Library/Lumia/\#!co-development-and-porting-guide.html. The solution consists of two top-level projects sharing the same source code, one targeting WP 7 and the other targeting WP 8. Bing Maps control is used in WP 7 project and the new Map control introduced in Windows Phone is used in WP 8 project.

This example application is hosted in GitHub: https://github.com/Microsoft/diner-wp

Developed with:

-   Microsoft Visual Studio 2010 Express for Windows Phone
-   Microsoft Visual Studio Express for Windows Phone 2012.

Compatible with:

-   Windows Phone 7
-   Windows Phone 8

Tested to work on:

-   Samsung Omnia 7
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
    -   File &gt; Open Project, select the file wprestaurantapp.sln
-   Install Windows Phone Toolkit for the project.
    -   Right click solution wprestaurantapp in Solution Explorer -&gt; select Manage NuGet Packages for Solution
    -   Search for ‘wptoolkit’ and install the ‘Windows Phone toolkit’ package
-   Depending on whether you want to run the WP7 or WP8 version of the application, select either wprestaurantapp\_WP7 or wprestaurantapp\_WP8 as a StartUp Project.  
-   Select the target, for example ‘Emulator WVGA’.
-   Press F5 to build the project and run it on the Windows Phone Emulator.

To deploy the sample on Windows Phone device: \* See the official documentation for deploying and testing applications on Windows Phone devices at http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

About the implementation
------------------------

Important folders:

<table style="width:99%;"><colgroup><col style="width: 35%" /><col style="width: 64%" /></colgroup><thead><tr class="header"><th>Folder</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>/</td><td>Contains the project file, the license information and this file (README.md)</td></tr><tr class="even"><td>wprestaurantapp_WP75</td><td>Root folder for the WP7 implementation files.</td></tr><tr class="odd"><td>wprestaurantapp_WP8</td><td>Root folder for the WP8 implementation files.</td></tr><tr class="even"><td>wprestaurantapp_WP75/content</td><td>Graphic files.</td></tr><tr class="odd"><td>wprestaurantapp_WP75/Properties</td><td>WP7 Application property files.</td></tr><tr class="even"><td>wprestaurantapp_WP75/SampleData</td><td>Sample data file.</td></tr><tr class="odd"><td>wprestaurantapp_WP75/ViewModels</td><td>ViewModel implementation files.</td></tr><tr class="even"><td>wprestaurantapp_WP8/Properties</td><td>WP8 Application property files.</td></tr></tbody></table>

Important files:

<table style="width:99%;"><colgroup><col style="width: 26%" /><col style="width: 73%" /></colgroup><thead><tr class="header"><th>File</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>MainPage.xaml.cs</td><td>Class responsible for displaying the panorama view of the application.</td></tr><tr class="even"><td>MainViewModel.cs</td><td>Class responsible for loading restaurant data from disc.</td></tr><tr class="odd"><td>RestaurantData.cs</td><td>Class describing the restaurant properties shown.</td></tr></tbody></table>

Known issues
------------

No known issues.

License
-------

See the license file delivered with this project.

Version history
---------------

-   1.5.0 Support for 720p resolution and NuGet package restore.
-   1.4.0 Using Pushpin from WPToolkit for WP 8.
-   1.3.0 Support for Windows Phone 8.
-   1.2.0 Bug fixes and changes based on reviews; published on the Nokia Developer website.
-   1.1.1 Support for Windows Phone OS version 7.1.
-   1.1.0 New feature: modifying existing reservations.
-   1.0.0 First version.
