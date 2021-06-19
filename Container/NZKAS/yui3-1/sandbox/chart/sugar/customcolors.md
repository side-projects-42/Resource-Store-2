### Multiple Series

### Code Snippet

            var myDataValues = [ 
                {date:"5/1/2010", values:2000, expenses:3700, revenue:2200}, 
                {date:"5/2/2010", values:50, expenses:9100, revenue:100}, 
                {date:"5/3/2010", values:400, expenses:1100, revenue:1500}, 
                {date:"5/4/2010", values:200, expenses:1900, revenue:2800}, 
                {date:"5/5/2010", values:5000, expenses:5000, revenue:2650}
            ];
            
            var mychart = new Y.Chart({dataProvider:myDataValues, 
                                                axes:{
                                                    financials:{
                                                        keys:["revenue", "expenses"],
                                                        position:"left",
                                                        type:"numeric",
                                                        styles:{
                                                            majorTicks:{
                                                                display:"inside",
                                                                length:3,
                                                                color:"#333"
                                                            },
                                                            line:{color:"#333"},
                                                            rotation:0,
                                                            margin:{right:5},
                                                            majorUnit:{count:11},
                                                            roundingUnit:100
                                                        }
                                                    },
                                                    dateRange:{
                                                        keys:["date"],
                                                        position:"bottom",
                                                        type:"time",
                                                        styles:{
                                                            majorTicks:{
                                                                display:"outside",
                                                                length:3,
                                                                color:"#333"
                                                            },
                                                            line:{color:"#333"},
                                                            rotation:-45,
                                                            margin:{top:5},
                                                            majorUnit:{count:10}
                                                        }
                                                    }
                                                },
                                                seriesCollection: [
                                                 {
                                                        type:"combo",
                                                        xAxis:"dateRange",
                                                        yAxis:"financials",
                                                        xKey:"date",
                                                        yKey:"revenue",
                                                        xDisplayName:"Date",
                                                        yDisplayName:"Deductions",
                                                        marker: {
                                                            fill: {
                                                                color: "#cc33cc"
                                                            },
                                                            border: {
                                                                color: "#330066",
                                                                weight: 1
                                                            },
                                                            width:9,
                                                            height:9
                                                        },
                                                        line: {color: "#cc33cc"}
                                                    },
                                                    {
                                                        type:"combo",
                                                        xAxis:"dateRange",
                                                        yAxis:"financials",
                                                        xKey:"date",
                                                        yKey:"expenses",
                                                        dataTip:{
                                                            show:"mouseenter",
                                                            hide:"mouseleave"
                                                        },
                                                        marker:{
                                                            fill: {
                                                                color:"#00ff66" 
                                                            },
                                                            width:9, 
                                                            height:9,
                                                            border: {
                                                                weight:"1",
                                                                color: "#006633"
                                                            }
                                                        },
                                                        line: {
                                                            color: "#00ff66"
                                                        }
                                                    }
                                                ],
                                                render:"#mychart"});
