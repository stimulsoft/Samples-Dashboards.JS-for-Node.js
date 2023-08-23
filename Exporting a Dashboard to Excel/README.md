# Exporting a Dashboard to Excel

This example illustrates loading of the dashboard, data rendering and storing the result to the Excel-file.

### Installation and running
Use npm to install requred modules:

    $ npm install
    
Run Sample:

    $ node index

### Step by step
Stimulsoft Dashboards.JS module loading:

    var Stimulsoft = require('stimulsoft-dashboards-js');

Creating new dashboard:

    var report = Stimulsoft.Report.StiReport.createNewDashboard();

Loading sample dashboard template:

    report.loadFile("Dashboard.mrt");

Export to Excel:

    report.exportDocumentAsync((data) => {
        // Converting Array into buffer
        var buffer = Buffer.from(data)

        // File System module
        var fs = require('fs');

        //Saving to a file
        fs.writeFileSync('./Dashboard.xlsx', buffer);
    }, Stimulsoft.Report.StiExportFormat.Excel2007);


