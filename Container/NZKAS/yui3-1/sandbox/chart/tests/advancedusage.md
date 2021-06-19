Chart with Multiple Axes
========================

This content will be replaced by an instance of a Flash player.

**Note:** There is currently no finalized API for the charts package. The files and classes used to create this example are temporary JavaScript wrappers used to display and test the functionality of the current state of the charts package. The draft API will be announced when the first beta of the Charts component is released.

### Getting Started

In the previous examples, we have created chart applications using the SimpleChart class. The advantage to using such a class is that it makes it easy to instantiate a chart with very little code. SimpleChart uses composition to build a chart with several different classes. If you want or need more control and flexibility in creating a chart application, you can use these individual classes to create your own custom chart. In the following example, we are going to create a chart with two vertical axes and two line graphs.

### The Building Blocks

A Cartesian chart, in its purest form, consists of a graph and two axes. To build our application, we'll use the following classes:

-   Chart: Aggregates and manages layout for the different pieces of a Cartesian chart.
-   Axis: Creates a horizontal or vertical axis to use in a Cartesian chart.
-   LineGraph: Create a line graph for a Cartesian chart.

### Styles

As with the previous examples, we'll start by defining the styles for our chart. Since we are using the individual classes, we'll create a style hash for each object.

        // Create application level styles
        var chartstyles = {
            chart:{
                padding:{left:20, top:20, bottom:10, right:20}
            },
            background:{
                fillColor:0x000000,
                borderColor:0xff0000,
                borderWidth:2
            }
        };

        // Create data 
        var mydata = getData();

        // Create bottom axis styles
        var bottomaxisstyles = {
            label:{
                fontName:"Georgia",
                fontSize:11,
                color:0xBDD7EB,
                rotation:-45,
                margin:{top:5},
            },
            dataFormat:{
                pattern:"%b %d, %yyyy"
            },
            majorTicks:{
                color:0xBDD7EB
            },
            line:{
                color:0xBDD7EB
            }
        };  

        // Create left axis styles
        var leftaxisstyles = {
            label:{
                fontName:"Georgia",
                fontSize:11,
                color:0x5577AF,
                margin:{right:5},
            },
            dataFormat:{
                prefix:"$",
                decimalPlaces:0
            },
            majorTicks:{
                color:0xBDD7EB
            },
            line:{
                color:0xBDD7EB
            }
        };

        // Create right axis styles
        var rightaxisstyles = 
        {
            label:{
                fontName:"Georgia",
                fontSize:11,
                color:0xFF0000,
                margin:{left:5},
            },
            dataFormat:{
                prefix:"$",
                decimalPlaces:0
            },
            majorTicks:{
                color:0xBDD7EB
            },
            line:{
                color:0xBDD7EB
            }
        };
        
        // Add expense graph styles
        var expensegraphstyles = 
        {
            color:0x5577AF,
            weight:"2"
        };

        // Add revenue graph styles
        var revenuegraphstyles = 
        {
            color:0xFF0000,
            weight:"2"
        }

### Create the Chart Application

Now, we'll create an instance of `Y.Chart`, assigning the swf url and the application-level style object through the config argument:

        var mychart = new Y.Chart("#testdiv", {swfurl:"../build/chart/assets/cartesiancanvas.swf", styles:chartstyles});
        mychart.setDataProvider(mydata);

### Creating the Axes

Now, we'll create two vertical (y) axes and a horizontal axis (x), and add the key names corresponding to the data that should be associated with each axis (more than one key can be added to each axis, but we are only using one per axis in this example):

        var mybottomaxis = new Y.Axis(mychart, {axisType:"Time", styles:bottomaxisstyles});
        var myleftaxis = new Y.Axis(mychart, {axisType:"Numeric", styles:leftaxisstyles});
        var myrightaxis = new Y.Axis(mychart, {axisType:"Numeric", styles:rightaxisstyles});

        mybottomaxis.addKey("date");
        myleftaxis.addKey("expenses");
        myrightaxis.addKey("revenue");

### Adding Graphs

Now, we will create two graph instances, assigning the appropriate axes, keys and style objects to each one:

        var myexpensegraph = new Y.LineGraph(mychart, {xaxis:mybottomaxis, yaxis:myleftaxis, xkey:"date", ykey:"expenses", styles:expensegraphstyles});
        var myrevenuegraph = new Y.LineGraph(mychart, {xaxis:mybottomaxis, yaxis:myrightaxis, xkey:"date", ykey:"revenue", styles:revenuegraphstyles});

### Putting It All Together

All that is left is to add each component to the application canvas, using the appropriate "add" method:

        mychart.addBottomItem(mybottomaxis);
        mychart.addLeftItem(myleftaxis);
        mychart.addRightItem(myrightaxis);
        mychart.addCenterItem(myexpensegraph);
        mychart.addCenterItem(myrevenuegraph);
