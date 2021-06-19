### Multiple Series with a multi-dimension array for data provider.

### Code Snippet

            var myDataValues = [ 
                ["5/1/2010", "5/2/2010", "5/3/2010", "5/4/2010", "5/5/2010"], 
                [2000, 50, 400, 200, 5000], 
                [3700, 9100, 1100, 1900, 5000], 
                [2200, 100, 1500, 2800, 2650]
            ];
            
            var mychart = new Y.Chart({dataProvider:myDataValues, render:"#mychart"});
