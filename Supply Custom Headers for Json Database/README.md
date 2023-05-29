# Exporting a Dashboard to PDF

This example illustrates loading of the dashboard that uses json database from some web-server and accessible only by suppliing custom HTTP header. That dashboard is rendered and result is stored to the pdf-file.

### Installation and running
Use npm to install requred modules:

    $ npm install
Run Sample:

    $ npm start

### Step by step
Stimulsoft DashboardS module loading:

    var Stimulsoft = require('stimulsoft-dashboards-js');

Creating new dashboard:

    var report = Stimulsoft.Report.StiReport.createNewDashboard();

Add onBeginProcessData event handler and set necessary headers:

    report.onBeginProcessData = function (args) {
        args.headers.push({key: "X-Auth-Token", value: "*YOUR TOKEN*"});
    });

Loading sample report template:

    report.loadFile("DBSsimp.mrt");

Export to PDF

	var stream = Stimulsoft.Dashboard.Export.StiDashboardExportTools.exportToStream(report, new Stimulsoft.Dashboard.Export.Settings.StiPdfDashboardExportSettings());

Converting to buffer:

    var buffer = Buffer.from(stream.toArray())

Loading File System module:

    var fs = require('fs');

Saving string with rendered report in PDF form into a file:

    fs.writeFileSync('./Dashboard.pdf', buffer);
