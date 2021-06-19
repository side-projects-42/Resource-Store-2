Customized Simple Chart
=======================

This content will be replaced by an instance of a Flash player.

  

**Note:** There is currently no finalized API for the charts package. The files and classes used to create this example are temporary JavaScript wrappers used to display and test the functionality of the current state of the charts package. The draft API will be announced when the first beta of the Charts component is released.

### Getting Started

In this example, we will change the SimpleChart's default data keys and customize multiple styles. Let's start by creating a data source. We will change the item and value keys to "day" and "hours", respectively. We will need to specify these keys in our SimpleChart constructor later in the code.

        var myData = {
            id:"myData", 
            data: [
                {day:"Monday", hours:37}, 
                {day:"Tuesday", hours:91}, 
                {day:"Wednesday", hours:11}, 
                {day:"Thursday", hours:19}, 
                {day:"Friday", hours:70}
            ]
        };                  

### Creating styles

Next, we'll create a style hash that we will use to customize the following chart styles:

-   Chart background: fill color, border color and border width
-   Chart padding
-   Graph color
-   X-axis:
    -   Line color
    -   Major ticks color
    -   Label:
        -   Color
        -   Font name
        -   Font size
        -   Rotation
        -   Top margin
-   Y-axis:
    -   Line color
    -   Major ticks color
    -   Label:
        -   Color
        -   Font name
        -   Font size
        -   Right margin

The following code will accomplish that:

        var myStyles = {
            background:{fillColor:0x22327A,borderColor:0x000000, borderWidth:5},
            chart:{
                padding:{bottom:25, left:25, right:25, top:25}
            },
            graphstyles:{
                color:0x7ECAFF,
                weight:"4"
            },
            xaxisstyles:{
                line:{color:0x7ECAFF},
                majorTicks:{color:0x7ECAFF},
                label:{
                    color:0x7ECAFF, 
                    fontName:"lucida grande", 
                    fontSize:15,
                    rotation:-45,
                    margin:{top:4}
                },
            },
            yaxisstyles:{
                line:{color:0x7ECAFF},
                majorTicks:{color:0x7ECAFF},
                label:{
                    color:0x7ECAFF, 
                    fontName:"lucida grande", 
                    fontSize:15,
                    margin:{right:4}
                },

            }
        }

Most styles are self-explanatory; it is important to note, however, that the label margin style is used to create a space between labels and their axis.

### Creating the chart.

Finally, let's construct our simple chart instance, defining the axis data keys and the styles in the optional configuration parameter of the constructor. We will also pass the key ids when setting the data source for the chart.

    var mychart = new Y.SimpleChart("#testdiv", "line", {swfurl:"../build/chart/assets/cartesiancanvas.swf", xaxisprops:{key:"day"}, yaxisprops:{key:"hours"}, styles:myStyles});                   
    mychart.setData(myData.data, "day", "hours");
