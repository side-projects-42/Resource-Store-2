### Area Chart

### Code Snippet

            var myDataValues = [ 
                {category:"5/1/2010", values:2000}, 
                {category:"5/2/2010", values:50}, 
                {category:"5/3/2010", values:400}, 
                {category:"5/4/2010", values:200}, 
                {category:"5/5/2010", values:5000}
            ];
            
            var mychart = new Y.Chart({dataProvider:myDataValues, render:"#mychart", showAreaFill:true});
