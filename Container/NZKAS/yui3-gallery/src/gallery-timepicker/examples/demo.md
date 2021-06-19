Demo
----

Time:

About The Timepicker
====================

This is based on the very slick time picker by [Maxime Haineault](http://haineault.com/media/jquery/ui-timepickr/page/). Its a YUI 3 widget and currently requires [YUI 3 beta 1](http://developer.yahoo.com/yui/3/)

### Useage

#### YUI instance

Add the YUI seed file & and the widget sources to your page:

    <!-- css -->       
    <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/combo?3.0.0/build/cssreset/reset-min.css&3.0.0/build/cssfonts/fonts-min.css">
    <link rel="stylesheet" href="timepicker.css" type="text/css" />  

        
    <!-- YUI Seed -->
    <script src="http://yui.yahooapis.com/3.0.0/build/yui/yui-min.js" type="text/javascript"></script>  

    <!-- Widget Source-->
    <script src="timepickerwidget.js" type="text/javascript"></script>      
                

Then create a YUI instance:

    YUI().use('timepicker', function(Y){
        
    });
                

#### Using the widget

Create a form...

                    <form>

                        <label for="time">Time: </label><input type="text" name="time" value="2:45AM" id="time">
                        <div id ="cb" >
                        </div>

                        <p><input type="submit" value="Continue &rarr;" /></p>

                    </form>
                

And write your script...

                    YUI().use('timepicker', function(Y){
                    //instantiate and identify the contentBox
                    var picker = new Y.Saw.Timepicker({contentBox: '#cb'});
                    picker.render();
                    
                    //hide
                    picker.hide();
                    
                    //show
                    picker.show();
                    
                    //set am or pm with class constants
                    picker.set('time.ampm', picker.AM);
                    
                    //subscribe to events to do cool stuff:
                    picker.subscribe('timechange', function(data){
                        //fires when the time changes
                        
                        //put the 12 hour string into the input. s24hour is also available
                        Y.get('#time').set('value' ,data.s12hour);
                        
                        //the data object also has members for hour, minute, ampm. Ampm is
                        //an int identified by picker.AM or picker.PM
                    });

                    picker.subscribe('cellclick', function(e){
                        //fires when a cell is clicked.
                       this.hide(); 
                    },picker);
                });
                

Available configuration properties. (sorry for the lack of formatting, in a hurry right now

                    Timepicker.ATTRS = {

                        delay:{
                            value:15
                        },
                        
                        time:{
                            value:{
                                hour:0,
                                minute:0,
                                ampm:AM
                            }
                        },

                        strings: {
                            value: {
                                am : "AM",
                                pm : "PM",
                                seperator : ':'
                            }
                        }
                    };
                
