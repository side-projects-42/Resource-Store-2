### Stacked Area

### Code Snippet

            var myDataValues = [ 
                {category:"5/1/2010", values:2000, expenses:3700, revenue:2200}, 
                {category:"5/2/2010", values:50, expenses:9100, revenue:100}, 
                {category:"5/3/2010", values:400, expenses:1100, revenue:1500}, 
                {category:"5/4/2010", values:200, expenses:1900, revenue:2800}, 
                {category:"5/5/2010", values:5000, expenses:5000, revenue:2650}
            ];
            
            var mychart = new Y.Chart({dataProvider:myDataValues, stacked:true, render:"#mychart"});
