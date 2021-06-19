Simple Chart
============

This content will be replaced by an instance of a Flash player.

**Note:** There is currently no finalized API for the charts package. The files and classes used to create this example are temporary JavaScript wrappers used to display and test the functionality of the current state of the charts package. The draft API will be announced when the first beta of the Charts component is released.

### Getting Started

SimpleChart is a wrapper for classes in the charts package. It contains a number of simple sugar methods that enable the user to create a chart application with just a few lines of code. All that is necessary to build a chart is an array of key/value pairs as a data source and a few calls specifying the type of chart to construct. We'll start this example by creating a data source:

        var myData = {
            id:"myData", 
            data: [
                {item:"Item 1", value:37}, {item:"Item 2", value:91}, {item:"Item 3", value:11}, {item:"Item 4", value:19}, {item:"Item 5", value:70}
            ]
        };                  

By default, the horizontal and vertical keys for the chart data source must be "item" and "value", respectively. Of course, these can be modified, but we'll look into that in later examples.

### Instantiating the Chart

All we have to do now is to instantiate a chart instance, specify the url of the swf and assign the data source to it. The chart constructor takes up to 3 parameters:

-   **parent**: The parent element or the name of the parent element in which to render the chart.
-   **type**: The type of graph. This is optional and the default value is "line".
-   **config**: A hash of configuration properties. (also optional)

The chart's `setData` method associates the data source we created above with our chart:

        var mychart = new Y.SimpleChart("#testdiv", "line", {swfurl:"../build/chart/assets/cartesiancanvas.swf"});                  
        mychart.setData(myData.data, "item", "value");

**Note:** By default, the swf url for a chart is pulled from the YUI3 build directory. Since our chart assets are in the sandbox directory, we need to specify the url in the swfurl property of the chart constructor's config argument.
