Datatable Tests
===============

To test the performance of various datatables, look at the following sections in the code:

    //large or small dataset.
    data: large,

    //---------------------------------------------
    // Special instructions
    //---------------------------------------------

    _should: {
        ignore: {
        //ignore following tests (good to do if you are doing a large dataset)
            testBaseDatatable: true,
            testXYDatatable: true,
            testXDatatable: true,
            testYDatatable_FixedCol: true,
            testYDatatable_AutoCol: true,
            testXYDatatable_BigHeaders: false
        }
    }
        

Toggle `data` from `large` to `small` to get a different sized dataset. The `ignore` object determines which table to load. If testing performance, it is recommended that you only enable 1 table at a time.

------------------------------------------------------------------------

------------------------------------------------------------------------

### Test Results

### Base Datatable

### Scrolling XY Datatable (Set columnwidths)

A general XY scrolling datatable. Column widths are provided for all columns, table width and height is provided.

### Scrolling X Datatable (Auto Columns)

A X-scrolling datatable. Column A and B have specified widths. The rest of the columns do not have any widths specified. Only a height of 200px is specified.

### Scrolling Y Datatable

A Y-scrolling datatable. Column widths are provided for all columns, table height is provided. Since all cols have specified width, you may see this table overflowing past its container div (the blue div in the background).

### Scrolling Datatable with no ColumnWidth

A Y-scrolling datatable, where only the first 2 columns have a specified width. Only the table height is provided.

### Scrolling Datatable with Big Headers

A XY-scrolling datatable, where only the first 2 columns have a specified width. Table height and width is provided. The table headers are of larger width than the table contents
