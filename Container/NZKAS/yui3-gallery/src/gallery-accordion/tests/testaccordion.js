
// Create new YUI instance, and populate it with the required modules
YUI({
    combine: false, 
    debug: true, 
    filter:"RAW"
}).use("gallery-accordion", 'test', 'console', 'event-simulate', function(Y) {
    
    var that = this;

    /**
     * Create an Accordion from markup, animation enabled.
     * Accordion's content box already has items, which will be added to accordion authomatically 
     */
    
    this.accordion1 = new Y.Accordion( {
        boundingBox: "#bb1",
        contentBox: "#acc1",
        useAnimation: true,
        collapseOthersOnExpand: true
    });


    this.accordion2 = new Y.Accordion( {
        boundingBox: "#bb2",
        contentBox: "#acc2",
        useAnimation: false,
        collapseOthersOnExpand: false
    });

    /**
     * Set some params just before adding items in the accordion
     */
    this.accordion1.on( "beforeItemAdd", function( attrs ){
        var item, id;
        
        item = attrs.item;
        id = item.get( "contentBox" ).get( "id" );

        if( id === "item2" ){
            item.set( "label", "Label2" ); // there is no label in markup for this item, so we set it here
        } else if( id === "item3" ){
            item.set( "label", "Label3, overwritten" ); // we overwrite the label from markup
        }
    }, this );

    
    var testBuildFromMarkup = new Y.Test.Case({
                    
        name: "Test accordion, build from markup",
        
        testItemsCount: function(){
            var items = that.accordion1.get( "items" );
            Y.Assert.areEqual( 4, items.length, "Accordion must have 4 items");
        },
        
        testItemsExpandedStatus: function(){
            var items, expanded0, expanded1, expanded2, expanded3,
                item0, item1, item2, item3;
                
            items = that.accordion1.get( "items" );
            
            item0 = items[0];
            item1 = items[1];
            item2 = items[2];
            item3 = items[3];
            
            expanded0 = item0.get( "expanded" );
            expanded1 = item1.get( "expanded" );
            expanded2 = item2.get( "expanded" );
            expanded3 = item3.get( "expanded" );
            
            
            Y.Assert.areSame( true, expanded0, "Item 0 must be expanded");
            Y.Assert.areSame( true, expanded1, "Item 1 must be expanded");
            Y.Assert.areSame( true, expanded2, "Item 2 must be expanded");
            Y.Assert.areSame( true, expanded3, "Item 3 must be expanded");
        },
        
        testItemsAlwaysVisibleStatus: function(){
            var items, av1, av2, av3, av4,
                item1, item2, item3, item4;
                
            items = that.accordion1.get( "items" );
            
            item1 = items[0];
            item2 = items[1];
            item3 = items[2];
            item4 = items[3];
            
            av1 = item1.get( "alwaysVisible" );
            av2 = item2.get( "alwaysVisible" );
            av3 = item3.get( "alwaysVisible" );
            av4 = item4.get( "alwaysVisible" );
            
            
            Y.Assert.areSame( true, av1 , "Item 1 must be always visible");
            Y.Assert.areSame( true, av2 , "Item 2 must be always visible");
            Y.Assert.areSame( false, av3 , "Item 3 must be not always visible");
            Y.Assert.areSame( true, av4 , "Item 4 must be always visible");
        },
        
        testItemsContentHeight: function(){
            var items, ch1, ch2, ch3, ch4,
                item1, item2, item3, item4;

            items = that.accordion1.get( "items" );

            item1 = items[0];
            item2 = items[1];
            item3 = items[2];
            item4 = items[3];

            ch1 = item1.get( "contentHeight" );
            ch2 = item2.get( "contentHeight" );
            ch3 = item3.get( "contentHeight" );
            ch4 = item4.get( "contentHeight" );


            Y.Assert.areSame( "fixed", ch1.method, "Item 1 content height must be fixed");
            Y.Assert.areSame( 150, ch1.height, "Item 1 content height must be fixed, 150px");
            Y.Assert.areSame( "stretch", ch2.method, "Item 2 content height must be stretched");
            Y.Assert.areSame( "auto", ch3.method, "Item 3 content height must be auto");
            Y.Assert.areSame( "stretch", ch4.method, "Item 4 content height must be stretched");
        },

        testManuallySwitchingAttrs: function(){
            var items, item1, item3;
                
            items = that.accordion1.get( "items" );
            
            item1 = items[0];
            item3 = items[2];
            
            item1.set( "expanded", false );
            Y.Assert.areSame( false, item1.get( "alwaysVisible" ), "After collapsing, alwaysvisible must be false also");
            
            this.wait(function(){
                item1.set( "alwaysVisible", true );
                
                Y.Assert.areSame( true, item1.get( "alwaysVisible" ), "Always visible must be true");
                Y.Assert.areSame( true, item1.get( "expanded" ), "Expanded must be true");
                Y.Assert.areSame( false, item3.get( "expanded" ), "Item3 - expanded also must be false");
                
                
                item3.set( "alwaysVisisble", false ); // nothing to do
                Y.Assert.areSame( false, item3.get( "alwaysVisible" ), "alwaysVisible must be false");
                Y.Assert.areSame( false, item3.get( "expanded" ), "expanded must be false");

            }, 1000);
        },
            
        testManuallySwitchingAttrs2: function(){
            var items, item2;
                
            items = that.accordion1.get( "items" );
            
            item2 = items[1];
            
            item2.set( "alwaysVisible", false );
            Y.Assert.areSame( false, item2.get( "alwaysVisible" ), "alwaysvisible must be false");
            Y.Assert.areSame( true, item2.get( "expanded" ), "expanded must be true");
        },
        
        
        testExpandedFalse: function(){
            var items, item2;
                
            items = that.accordion1.get( "items" );
            
            item2 = items[2];
            
            item2.set( "alwaysVisible", true );
            Y.Assert.areSame( true, item2.get( "alwaysVisible" ), "alwaysvisible must be true");
            Y.Assert.areSame( true, item2.get( "expanded" ), "expanded must be true");
            
            this.wait(function(){
                item2.set( "expanded", false );
                
                Y.Assert.areSame( false, item2.get( "alwaysVisible" ), "Always visible must be false");
                Y.Assert.areSame( false, item2.get( "expanded" ), "Expanded must be false");

            }, 1000);
        },
        
        
        testExpandedTrue: function(){
            var items, item1, item2;
                
            items = that.accordion1.get( "items" );
            
            item1 = items[1];
            item2 = items[2];
            
            item2.set( "expanded", true );
            Y.Assert.areSame( false, item2.get( "alwaysVisible" ), "alwaysvisible must be false");
            Y.Assert.areSame( true, item2.get( "expanded" ), "expanded must be true");
            
            this.wait(function(){
                item1.set( "expanded", true );
                
                Y.Assert.areSame( false, item1.get( "alwaysVisible" ), "Always visible must be false");
                Y.Assert.areSame( true, item1.get( "expanded" ), "Expanded must be true");
                
                Y.Assert.areSame( false, item2.get( "alwaysVisible" ), "Always visible must be false");
                Y.Assert.areSame( false, item2.get( "expanded" ), "Expanded must be false");

            }, 2000);
        }
    });
        
        
    var testInsertRemoveItems = new Y.Test.Case({
        
        testRemoveItemByIndex: function(){
            var items, item0, item3;
            
            items = that.accordion1.get( "items" );
            
            item0 = items[ 0 ];
            item3 = that.accordion1.removeItem( 3 );
            
            items = that.accordion1.get( "items" );
            
            Y.Assert.areSame( 3, items.length, "There must  be 3 items" );
            
            
            // insert item3 before item0 - it will become the first item
            that.accordion1.addItem( item3, item0 );

            items = that.accordion1.get( "items" );

            Y.Assert.areSame( item3, items[ 0 ], "The items must be identical" );
        }
    });
    
    
    var testUserInteractions = new Y.Test.Case( {
        
        testClickExpand: function(){
            var item3, header;
            
            item3 = that.accordion1.getItem( 3 );
            header = Y.Node.getDOMNode(item3.getStdModNode( Y.WidgetStdMod.HEADER ));
            
            Y.Event.simulate( header, "click" );
            Y.Assert.areSame( true, item3.get( "expanded" ), "Item3 must be exapnded now" );
        },
        
        testClickAlwaysVisible: function(){
            var item2, item3, iconAlwaysVisible;
            
            item2 = that.accordion1.getItem( 2 );
            item3 = that.accordion1.getItem( 3 );
            
            iconAlwaysVisible = Y.Node.getDOMNode(item2.get( "iconAlwaysVisible" ));

            Y.Event.simulate( iconAlwaysVisible, "click" );
            
            Y.Assert.areSame( true, item2.get( "expanded" ), "Item3 must be exapnded now" );
            Y.Assert.areSame( true, item2.get( "alwaysVisible" ), "Item3 must be always visible" );

            Y.Assert.areSame( false, item3.get( "expanded" ), "Item3 must be collapsed now" );
        }
        
    });
        
        
    var testContentManipulation = new Y.Test.Case( {
        
        testContentHeightChange: function(){
            var height, item2, body;

            item2 = that.accordion1.getItem( 2 );
            body = item2.getStdModNode( Y.WidgetStdMod.BODY );
            
            item2.set( "contentHeight", {
                 method: "fixed",
                 height: 30
              } );
                
            this.wait( function(){
                height = body.getStyle( "height" );
                Y.Assert.areEqual( "30px", height, "The body height must be 30px" );
            }, 1000 );
        }
        
    });
    
    
    var testAddItemsFromScript = new Y.Test.Case( {
        
        testAddItemDynamically: function(){
            var item1, newItem;
            
            item1 = that.accordion1.getItem( 1 );
            
            newItem = new Y.AccordionItem( {
                label: "Item, added from script",
                expanded: true,
                contentBox: "dynamicContentBox",
                contentHeight: {
                    method: "fixed",
                    height: 30
                }
            } );

            newItem.set( "bodyContent", "This is the body of the item, added dynamically to accordion, after the first item." );
            
            that.accordion1.addItem( newItem, item1 );
            
            Y.Assert.areEqual( 1, that.accordion1.getItemIndex( newItem ), "The index must be 1" );
            Y.Assert.areEqual( true, newItem.get( "expanded" ), "The item must be expanded" );
            Y.Assert.areEqual( false, newItem.get( "alwaysVisible" ), "The item must be not always visible" );
        }
    });
    
    
    var testCollapse = new Y.Test.Case( {
        
        testCollapseOthers: function(){
            var items, item;
            
            that.accordion1.set( "collapseOthersOnExpand", false );
            
            items = that.accordion1.get( "items" );
            
            Y.Array.some( items, function( item, index, items ) {
                if( index === 4 ){
                    return true;
                }
                
                item.set( "alwaysVisible", false );
                item.set( "expanded", true );
                
                return false;
            });
            
            items[ 4 ].set( "expanded", true );
            
            Y.Array.each( items, function( item, index, items ) {
                Y.Assert.areEqual( true, item.get( "expanded" ), "The item must be expanded" );
            });
        },
        
        testDoNotCollapseOthers: function(){
            var items, item4;

            items = that.accordion1.get( "items" );
            item4 = items[ 4 ];
            
            that.accordion1.set( "useAnimation", false );
            item4.set( "expanded", false );
            
            that.accordion1.set( "useAnimation", true );
            item4.set( "expanded", true );
            
            Y.Array.each( items, function( item, index, items ) {
                Y.Assert.areEqual( true, item.get( "expanded" ), "The item must be expanded" );
            });
            
            that.accordion1.set( "collapseOthersOnExpand", true );

        }
    });


    var testClosable = new Y.Test.Case( {
           testCloseItem: function(){
               var items, item4, iconClose;

               items = that.accordion1.get( "items" );
               item4 = items[ 4 ];

               item4.set( "closable", true );
               iconClose = item4.get( "iconClose" );

               Y.Event.simulate(  Y.Node.getDOMNode(iconClose), "click" );

               items = that.accordion1.get( "items" );
               Y.Assert.areEqual( 4, items.length, "There must be 4 items" );
           }
    });


    var testLabelChange = new Y.Test.Case( {
           testLabelChange: function(){
               var items, item1, nodeLabel, newLabel = "Label, changed dynamically";

               items = that.accordion1.get( "items" );
               item1 = items[ 1 ];

               item1.set( "label", newLabel );
               nodeLabel = item1.get( "nodeLabel" );

               Y.Assert.areEqual( newLabel, nodeLabel.get( "innerHTML" ),
                    "Label must be : " + newLabel );
           }
    });

    
    var testDataAttr = new Y.Test.Case({
        testLabel: function(){
            var items, item1, label, labelFromMarkup = "Label 5, overwritten";

            items = that.accordion2.get( "items" );
            item1 = items[ 0 ];

            label = item1.get( "label" );
            
            Y.Assert.areEqual( labelFromMarkup, label,
                "Label must be : " + labelFromMarkup );
        },

        testExpanded: function(){
            var items, item1, item2, item3;

            items = that.accordion2.get( "items" );

            item1 = items[ 0 ];
            item2 = items[ 1 ];
            item3 = items[ 2 ];

            Y.Assert.areEqual( true, item1.get( "expanded" ), "Item1 must be expanded." );
            Y.Assert.areEqual( true, item2.get( "expanded" ), "Item2 must be expanded." );
            Y.Assert.areEqual( true, item3.get( "expanded" ), "Item3 must be expanded." );
        },

        testAlwaysVisible: function(){
            var items, item2;

            items = that.accordion2.get( "items" );

            item2 = items[ 1 ];

            Y.Assert.areEqual( true, item2.get( "alwaysVisible" ), "Item2 must be always visible." );
        },

        testClosable: function(){
            var items, item3;

            items = that.accordion2.get( "items" );

            item3 = items[ 2 ];

            Y.Assert.areEqual( true, item3.get( "closable" ), "Item3 must be closable." );
        },

        testContentHeight: function(){
            var items, item1, item2, item3, body, height, method;

            items = that.accordion2.get( "items" );

            item1 = items[ 0 ];
            item2 = items[ 1 ];
            item3 = items[ 2 ];

            method = item1.get( "contentHeight" ).method;
            Y.Assert.areEqual( "auto", method, "Content height of item1 must be set as auto." );

            method = item2.get( "contentHeight" ).method;
            Y.Assert.areEqual( "stretch", method, "Content height of item2 must be stretched." );


            body = item3.getStdModNode( Y.WidgetStdMod.BODY );
            height = body.getStyle( "height" );
            Y.Assert.areEqual( "180px", height, "Content height of item3 must be 180px." );
        }
    });

    //////////////////////////////////////////////////////////////////////////////////////
    
    var console = new Y.Console({
        verbose : false,
        printTimeout: 0,
        newestOnTop : false,

        entryTemplate: '<pre class="{entry_class} {cat_class} {src_class}">'+
                '<span class="{entry_cat_class}">{label}</span>'+
                '<span class="{entry_content_class}">{message}</span>'+
        '</pre>'
    }).render();

    
    Y.Test.Runner.add(testBuildFromMarkup);
    Y.Test.Runner.add(testInsertRemoveItems);
    Y.Test.Runner.add(testUserInteractions);
    Y.Test.Runner.add(testContentManipulation);
    Y.Test.Runner.add(testAddItemsFromScript);
    Y.Test.Runner.add(testCollapse);
    Y.Test.Runner.add(testClosable);
    Y.Test.Runner.add(testLabelChange);
    Y.Test.Runner.add(testDataAttr);

    this.accordion1.after( "render", function(){
        Y.Test.Runner.run();
    }, this );
    
    // render accordion widgets
    this.accordion1.render();
    this.accordion2.render();
});

//////////////////////////////////////////////////////////////////////////////////////////
