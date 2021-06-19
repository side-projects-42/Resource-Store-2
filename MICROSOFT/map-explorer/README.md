Map Explorer
============

Map Explorer application demonstrates how to use the new Windows Phone 8 Map control replacing the Bing Maps control used in Windows 7, as well as how to use new map-related features, such as address search, locationing, and routes. Map Explorer is a simple Silverlight application which enables the user to change properties of the map component to see the effect on shown map.

The example has been developed with Silverlight for Windows Phone devices and tested to work on Lumia devices with Windows Phone 8.

![Screenshot](doc/screenshots/MapExplorer_screenshot_1.png?raw=true)

This example application is hosted in GitHub: https://github.com/Microsoft/map-explorer

For more information on implementation and porting, visit Lumia Developer’s Library: http://developer.nokia.com/Resources/Library/Lumia/\#!code-examples/map-explorer.html

What’s new
----------

Version 1.1.0.0: Support for downloading maps. Mapping APIs T&C compliance.

1. Usage
--------

This is a simple build-and-run solution. Learn about Map properties and Map related features by trying out the application.

2. Prerequisites
----------------

-   C\# basics
-   Windows 8
-   Microsoft Visual Studio Express for Windows Phone 2012

3. Project structure and implementation
---------------------------------------

3.1 Folders
-----------

-   The root folder contains the project file, the license information and this file (release\_notes.txt).
-   `MapExplorer`: Root folder for the implementation files.  
-   `Assets`: Graphic assets like icons and tiles.
-   `Properties`: Application property files.
-   `Resources`: Application resources.

3.2 Important files and classes
-------------------------------

<table style="width:99%;"><colgroup><col style="width: 26%" /><col style="width: 73%" /></colgroup><thead><tr class="header"><th>File</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>MainPage.xaml</code></td><td>The main page of the application with its most important component, the map.</td></tr><tr class="even"><td><code>MainPage.xaml.cs</code></td><td>The code-behind file of the main page.</td></tr></tbody></table>

<table style="width:98%;"><colgroup><col style="width: 28%" /><col style="width: 70%" /></colgroup><thead><tr class="header"><th>Class</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>MainPage</code></td><td>This class is responsible for all the map related functionality of the app.</td></tr></tbody></table>

3.3 Used APIs/Windows Phone Components
--------------------------------------

-   Microsoft.Phone.Maps.Controls
-   Microsoft.Phone.Maps.Services
-   System.Device.Location
-   Windows.Devices.Geolocation

4. Compatibility
----------------

-   Windows Phone 8

Tested to work on Nokia Lumia 820 and Nokia Lumia 920. Developed with Microsoft Visual Studio Express for Windows Phone 2012.

4.1 Required Capabilities
-------------------------

-   `ID_CAP_LOCATION`
-   `ID_CAP_MAP`
-   `ID_CAP_NETWORKING`
-   `ID_CAP_SENSORS`

4.2 Known Issues
----------------

None.

5. Building, installing, and running the application
----------------------------------------------------

5.1 Preparations
----------------

Make sure you have the following installed: \* Windows 8 \* Windows Phone SDK 8.0

5.2 Using the WINDOWS PHONE 8 SDK
---------------------------------

1.  Open the SLN file: File &gt; Open Project, select the file MapExplorer.sln
2.  Select the target ‘Emulator WVGA’.
3.  Press F5 to build the project and run it on the Windows Phone Emulator.

5.3 Deploying to Windows Phone 8
--------------------------------

Please see official documentation for deploying and testing applications on Windows Phone devices: http://msdn.microsoft.com/en-us/library/gg588378%28v=vs.92%29.aspx

6. License
----------

See the license text file delivered with this project. The license file is also available online at https://github.com/Microsoft/map-explorer/blob/master/Licence.txt

7. Related documentation
------------------------

An article “Guide to the Maps” published on Nokia Lumia Developer’s Library (http://www.developer.nokia.com/Resources/Library/Lumia/\#!guide-to-the-maps.html) describes the properties and usage of map control and map-related features in detail using MapExplorer as an example.

8. Version history
------------------

-   1.1.0.0 Support for downloading maps. Mapping APIs T&C compliance.
-   1.0.0.0 First release.
