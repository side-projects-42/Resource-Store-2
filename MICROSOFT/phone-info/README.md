Phone Info
==========

Phone Info is an example application for retrieving both static and dynamic properties of a Windows Phone device. The methods implemented in `DeviceProperties` class and utilised in this app can be used for adapting your application to wider range of phone models; If a phone does not support a certain non-vital feature of your application, you can gracefully adapt by hiding that feature dynamically. The same applies to optimising your app for different screen resolutions and display sizes.

![Fixed features view on Nokia Lumia 930 (Windows Phone 8.1 version)](/doc/screenshots_wp8_1/pi_fixed_small.png?raw=true)  ![Dynamic features view on Nokia Lumia 930 (Windows Phone 8.1 version)](/doc/screenshots_wp8_1/pi_dynamic_small.png?raw=true)  ![Camera features view Nokia Lumia 930 (Windows Phone 8.1 version)](/doc/screenshots_wp8_1/pi_camera_1_small.png?raw=true)  ![Sensor features view on Nokia Lumia 930 (Windows Phone 8.1 version)](/doc/screenshots_wp8_1/pi_sensors_2_small.png?raw=true)

*Screenshots from Windows Phone 8.1 version running on Nokia Lumia 930.*

This example application is hosted in GitHub: https://github.com/Microsoft/phone-info

This project consists of two Phone Info application versions. See the respective README files for documentation:

-   [Phone Info for Windows Phone 8.1](https://github.com/Microsoft/phone-info/blob/master/PhoneInfoWP8_1/README.md)
-   [Phone Info for Windows Phone 8](https://github.com/Microsoft/phone-info/blob/master/PhoneInfoWP8/README.md)

For more information on the subject, visit Lumia Developer’s Library:

-   http://developer.nokia.com/Resources/Library/Lumia/\#!optimising-for-large-screen-phones.html
-   http://developer.nokia.com/Resources/Library/Lumia/\#!how-to-adapt-to-lumia-phone-hardware-features.html

Features
--------

<table><thead><tr class="header"><th><strong>Feature</strong></th><th><strong>Version 2.0 (WP 8.1)</strong></th><th><strong>Version 1.2 (WP 8.0)</strong></th></tr></thead><tbody><tr class="odd"><td><strong>General information about the phone</strong></td><td></td><td></td></tr><tr class="even"><td>Device name</td><td>X</td><td></td></tr><tr class="odd"><td>Manufacturer</td><td>X</td><td>X</td></tr><tr class="even"><td>Hardware version</td><td>X</td><td>X</td></tr><tr class="odd"><td>Firmware version</td><td>X</td><td>X</td></tr><tr class="even"><td>Operator</td><td></td><td>X</td></tr><tr class="odd"><td><strong>Battery and power</strong></td><td></td><td></td></tr><tr class="even"><td>Battery status information availability</td><td>X</td><td>X</td></tr><tr class="odd"><td>Power source (is connected to charger)</td><td></td><td>X</td></tr><tr class="even"><td>Remaining battery charge</td><td>X</td><td></td></tr><tr class="odd"><td>Power saving mode enabled</td><td>X</td><td></td></tr><tr class="even"><td><strong>Camera</strong></td><td></td><td></td></tr><tr class="odd"><td>Back camera availability</td><td>X</td><td>X</td></tr><tr class="even"><td>Front camera availability</td><td>X</td><td>X</td></tr><tr class="odd"><td>Back camera flash availability</td><td>X</td><td>X</td></tr><tr class="even"><td>Front camera flash availability</td><td>X</td><td>X</td></tr><tr class="odd"><td>Back camera auto focus availability</td><td>X</td><td></td></tr><tr class="even"><td>Back camera photo resolutions</td><td>X</td><td></td></tr><tr class="odd"><td>Front camera photo resolutions</td><td>X</td><td></td></tr><tr class="even"><td>Back camera video resolutions</td><td>X</td><td></td></tr><tr class="odd"><td>Front camera video resolutions</td><td>X</td><td></td></tr><tr class="even"><td><strong>Memory</strong></td><td></td><td></td></tr><tr class="odd"><td>App (current) memory usage</td><td>X</td><td>X</td></tr><tr class="even"><td>App memory usage limit</td><td>X</td><td>X</td></tr><tr class="odd"><td>App memory peak</td><td></td><td>X</td></tr><tr class="even"><td>Device total memory</td><td></td><td>X</td></tr><tr class="odd"><td><strong>Screen and display</strong></td><td></td><td></td></tr><tr class="even"><td>Screen resolution</td><td>X</td><td>X</td></tr><tr class="odd"><td>Raw DPI for width and height</td><td>(Possible, but dropped from interface)</td><td>X</td></tr><tr class="even"><td>Display size</td><td>X</td><td></td></tr><tr class="odd"><td><strong>Sensor availability</strong></td><td></td><td></td></tr><tr class="even"><td>Accelerometer</td><td>X</td><td>X</td></tr><tr class="odd"><td>Compass</td><td>X</td><td>X</td></tr><tr class="even"><td>Gyro</td><td>X</td><td>X</td></tr><tr class="odd"><td>Inclinometer</td><td>X</td><td>X</td></tr><tr class="even"><td>Motion API</td><td></td><td>X</td></tr><tr class="odd"><td>Orientation</td><td>X</td><td>X</td></tr><tr class="even"><td>Proximity (NFC)</td><td>X</td><td>X</td></tr><tr class="odd"><td>SensorCore: Activity monitor API</td><td>X</td><td></td></tr><tr class="even"><td>SensorCore: Place monitor API</td><td>X</td><td></td></tr><tr class="odd"><td>SensorCore: Step counter API</td><td>X</td><td></td></tr><tr class="even"><td>SensorCore: Track point monitor API</td><td>X</td><td></td></tr><tr class="odd"><td><strong>Other harware properties</strong></td><td></td><td></td></tr><tr class="even"><td>Processor core count</td><td>X</td><td></td></tr><tr class="odd"><td>SD card present</td><td>X</td><td>X</td></tr><tr class="even"><td>Vibra availability</td><td>X</td><td>X</td></tr><tr class="odd"><td>FM radio availability</td><td></td><td>X</td></tr><tr class="even"><td><strong>Theme</strong></td><td></td><td></td></tr><tr class="odd"><td>Theme (dark/light)</td><td>X</td><td>X</td></tr><tr class="even"><td>Theme accent color</td><td>X</td><td>X</td></tr></tbody></table>

License
-------

See the license text file delivered with this project. The license file is also available online at https://github.com/Microsoft/phone-info/blob/master/Licence.txt

Version history
---------------

-   Version 2.0: Project ported to support Universal apps for Windows (Phone) 8.1. Support added for many new properties, especially related to camera, battery and SensorCore.
-   Version 1.2: Project name changed from “Hardware Info” to “Phone Info”. New properties added such as screen and display information. Two new Pivot items added and the information shown in the views rearranged.
-   Version 1.1: Refactored the user interface. Characteristics view added.
-   Version 1.0: The initial release.
