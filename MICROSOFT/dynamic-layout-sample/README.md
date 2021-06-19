Dynamic Layout Sample
=====================

An example application demonstrating how to create a dynamic layouts for different size of resolutions and physical screens on Windows Phone 8 platform.

The application presents a number of items on the main page. Layout and size of the items depends on a style applied to the items, the style depending on the resolution of the device. A default style is always loaded and as it’s name suggests, it defines a universal style suitable for presenting items in all supported resolutions. In devices with 1080p resolution an additional style is loaded at runtime. This 1080p style overrides some details of the default style, optimizing the layout for a large display with 1080p resolution.

This example application is hosted in GitHub: https://github.com/Microsoft/dynamic-layout-sample

Additional documentation available at Lumia Developer’s Library: http://developer.nokia.com/Resources/Library/Lumia/\#!code-examples/dynamic-layout-sample.html

Developed with Microsoft Visual Studio Express for Windows Phone 2012.

Compatible with:

-   Windows Phone 8

Tested to work on:

-   Nokia Lumia 925
-   Nokia Lumia 1520

Instructions
------------

Make sure you have the following installed:

-   Windows 8
-   Windows Phone SDK 8.0
-   NuGet Package Manager (https://nuget.org/), Visual Studio extension to install and update third-party libraries and tools in Visual Studio

To build and run the sample:

-   Open the SLN file
    -   File &gt; Open Project, select the file DynamicLayoutSample.sln
-   Install Windows Phone Toolkit for the project.
    -   Right click References in Solution Explorer -&gt; select Manage NuGet Packages
    -   Search for ‘wptoolkit’ and install the ‘Windows Phone toolkit’ package
-   Select the target ‘Emulator WVGA’ / ‘Emulator 720P’. As there is no dedicated 1080P emulator available, the application uses ‘Emulator 720P’ to emulate 1080P resolution as they share the same aspect ratio.
-   Press F5 to build the project and run it on the Windows Phone Emulator.

To deploy the sample on Windows Phone 8 device: \* See the official documentation for deploying and testing applications on Windows Phone devices at http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

About the implementation
------------------------

Important folders:

<table style="width:99%;"><colgroup><col style="width: 35%" /><col style="width: 64%" /></colgroup><thead><tr class="header"><th>Folder</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>/</td><td>Contains the project file, the license information and this file (README.md)</td></tr><tr class="even"><td>DynamicLayoutSample</td><td>Root folder for the implementation files.</td></tr><tr class="odd"><td>DynamicLayoutSample/Assets</td><td>Graphic assets like icons and tiles.</td></tr><tr class="even"><td>DynamicLayoutSample/Properties</td><td>Application property files.</td></tr><tr class="odd"><td>DynamicLayoutSample/Resources</td><td>Application resources.</td></tr><tr class="even"><td>DynamicLayoutSample/SampleData</td><td>Sample model data.</td></tr><tr class="odd"><td>DynamicLayoutSample/Themes</td><td>Different style definitions for rendering sample items.</td></tr></tbody></table>

Important files:

<table style="width:99%;"><colgroup><col style="width: 26%" /><col style="width: 73%" /></colgroup><thead><tr class="header"><th>File</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>SampleDataItemTemplate.xaml</td><td>Defines the layout of a list item.</td></tr><tr class="even"><td>SampleDataItemStyleDefault.xaml</td><td>Defines styles determining each element’s look and feel.</td></tr><tr class="odd"><td>SampleDataItemStyle1080p.xaml</td><td>Redefines styles with 1080p optimized versions.</td></tr><tr class="even"><td>StyleSelector.cs</td><td>Determines which styles are used at runtime.</td></tr><tr class="odd"><td>ScreenSizeHelper.cs</td><td>Determines the device’s screen size at runtime.</td></tr></tbody></table>

Important classes:

<table><thead><tr class="header"><th>Class</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>MainPage</td><td>The UI of this example application.</td></tr></tbody></table>

Additional information on adapting to 1080p resolution and large displays can be found from Nokia Lumia Developer’s Library: http://developer.nokia.com/Resources/Library/Lumia/

Known issues
------------

No known issues.

License
-------

See the license file delivered with this project.

Version history
---------------

-   1.0 First public release
