# Using a Custom Font

This example demonstrates adding a custom font, loading of the dashboard, data rendering and storing the result to the PDF-document.

### Installation and running
Use npm to install requred modules:

    $ npm install
    
Run Sample:

    $ npm start

### Step by step
Stimulsoft Dashboards.JS module loading:

    var Stimulsoft = require('stimulsoft-dashboards-js');

Adding custom font:

    Stimulsoft.Base.StiFontCollection.addFontFile('./Font/LongCang-Regular.ttf');

Creating new dashboard:

    var report = Stimulsoft.Report.StiReport.createNewDashboard();

Loading sample report template:

    report.loadFile("Dashboard.mrt");

Export to PDF:

	report.exportDocumentAsync((pdfData) => {
        // Converting Array into buffer
        var buffer = Buffer.from(pdfData);

        // File System module
        var fs = require('fs');

        // Saving string with rendered dashboard in PDF into a file
        fs.writeFileSync('./Dashboard.pdf', buffer);
    }, Stimulsoft.Report.StiExportFormat.Pdf);
