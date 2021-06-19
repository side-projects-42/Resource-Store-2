Simple Chart with TimeAxis and Formatted Labels
===============================================

This content will be replaced by an instance of a Flash player.

  

**Note:** There is currently no finalized API for the charts package. The files and classes used to create this example are temporary JavaScript wrappers used to display and test the functionality of the current state of the charts package. The draft API will be announced when the first beta of the Charts component is released.

### Getting Started

In this example, we are going to create a simple chart with a time axis and a numeric axis. We will specify the number of labels on the x-axis and format the string values of all axes' labels. Axis types are specified in the xaxisprops property of the constructor's config argument and label formatting is determined by axis style properties.

We will start by creating a simple chart, just as in the other examples. As before, we will customize the basic styles of our chart. Only, this time, we will include the following axis styles:

-   dataFormat: Allows us to specify a token pattern for displaying the string data in our axis labels.
-   majorUnit: Hash of properties that determine how many labels will appear on a given axis.

### Label Formatting

We will format labels on our axes using the axis dataFormat style. This style is interpreted based on the axis type.

-   **NumericAxis** accepts the following:
    -   **prefix**: value to prepend the label
    -   **decimalPlaces**: number of decimal places to show
    -   **suffix**: value that follows the label
-   **TimeAxis** currently supports strftime formatting.

The following style object formats our labels as necessary:

        yaxisstyles:{
            dataFormat:{
                prefix:"$", 
                decimalPlaces:2
            }
        },
        xaxisstyles:{
            dataFormat:{pattern:"%a %b %d, %Y"}
        }

### Specifying Labels per Axis

Currently, the chart package allows you to specify labels using the `majorUnit` axis style. The majorUnit style offers the following:

-   determinant: specifies how the axis will calculate label count. Possible values are:
    -   "count": the number of labels are specified by the value of the count property.
    -   "distance": the number of label are determined by the total length on the axis and the distance between labels.
-   count: number of labels to appear on an axis. This value is used when the determinant is set to "count".
-   distance: distance between labels. This value is used when the determinant is set to "distance".

<!-- -->

        xaxisstyles:{
            majorUnit:{
                determinant:"count",
                count:10
            }
        }

### Creating the Chart

Now, we will create a SimpleChart instance, specifying the swf url, the X-axis type and the appropriate axis and data keys.

    var mychart = new Y.SimpleChart("#testdiv", "line", {swfurl:"../build/chart/assets/cartesiancanvas.swf", xaxisprops:{key:"date", type:"Time"}, yaxisprops:{key:"expenses"}, styles:myStyles});      
    mychart.setData(myData, "date", "expenses");
