### Simple Implementation using a multi-dimensional array for a data provider

### Code Snippet

        YUI().use('infographics', function (Y) 
        {
            var myDataValues = [
                ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                [2000, 1500, 400, 200, 5000]
            ];
            
            var mychart = new Y.Chart({dataProvider:myDataValues, render:"#mychart"});
        });
