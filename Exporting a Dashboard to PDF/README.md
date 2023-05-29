# Exporting a Dashboard to PDF

This example illustrates loading of the dashboard, data rendering and storing the result to the PDF-document.

### Installation and running
Use npm to install requred modules:

    $ npm install
Run Sample:

    $ node index

### Step by step
Stimulsoft DashboardS module loading:

    var Stimulsoft = require('stimulsoft-dashboards-js');

Creating new dashboard:

    var report = Stimulsoft.Report.StiReport.createNewDashboard();

Loading sample report template:

    report.loadFile("DashboardChristmas.mrt");

Export to PDF

	var stream = Stimulsoft.Dashboard.Export.StiDashboardExportTools.exportToStream(report, new Stimulsoft.Dashboard.Export.Settings.StiPdfDashboardExportSettings());

Converting to buffer:

    var buffer = Buffer.from(stream.toArray())

Loading File System module:

    var fs = require('fs');

Saving string with rendered report in PDF form into a file:

    fs.writeFileSync('./DashboardChristmas.pdf', buffer);
