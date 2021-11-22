# 06. Create Table add Two Filter and Export to Excel

This example illustrates how to add a filter to the table element in the dashboard and store the result in the Excel file.

### Installation and running
Use npm to install requred modules:

    $ npm install
Run Sample:

    $ node index

### Step by step
Stimulsoft Dashboards module loading:

    var Stimulsoft = require('stimulsoft-dashboards-js');

Creating new dashboard:

    var report = Stimulsoft.Report.StiReport.createNewDashboard();

Load and add reg data

    var dataPath = "Demo.xml";
    var data = new Stimulsoft.System.Data.DataSet();
    data.readXmlFile(dataPath);

    report.regData("Demo", "Demo", data);
    report.dictionary.synchronize();

Create new table element

    var tableElement = new Stimulsoft.Dashboard.Components.Table.StiTableElement();
    dashboard.components.add(tableElement);

Add column to table

    var dataBase = new Stimulsoft.Dashboard.Components.Table.StiDimensionColumn();
    dataBase.expression = "Products.ProductID";
    tableElement.columns.add(dataBase);

Add filter to table

    var filter1 = new Stimulsoft.Data.Engine.StiDataFilterRule();
    filter1.condition = Stimulsoft.Data.Engine.StiDataFilterCondition.BeginningWith;
    filter1.path = "Products.ProductID";
    filter1.value = "1";
    tableElement.dataFilters.add(filter1);

Export to Excel

    var stream = Stimulsoft.Dashboard.Export.StiDashboardExportTools.exportToStream(report, new Stimulsoft.Dashboard.Export.Settings.StiExcelDashboardExportSettings());

Converting to buffer
    
    var buffer = Buffer.from(stream.toArray())

Loading File System module:

    var fs = require('fs');

Saving to a file:

    fs.writeFileSync('./DashboardChristmas.xlsx', buffer);

