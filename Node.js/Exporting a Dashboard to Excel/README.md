# Exporting a Dashboard to Excel

This example illustrates loading of the dashboard, data rendering and storing the result to the Excel-file.

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

Loading sample dashboard template:

    report.loadFile("DashboardChristmas.mrt");

Export to Excel

    var stream = Stimulsoft.Dashboard.Export.StiDashboardExportTools.exportToStream(report, new Stimulsoft.Dashboard.Export.Settings.StiExcelDashboardExportSettings());

Converting to buffer
    
    var buffer = Buffer.from(stream.toArray())

Loading File System module:

    var fs = require('fs');

Saving to a file:

    fs.writeFileSync('./DashboardChristmas.xlsx', buffer);

