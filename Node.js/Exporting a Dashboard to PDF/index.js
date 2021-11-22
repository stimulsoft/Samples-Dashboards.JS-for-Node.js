// Stimulsoft dashboards module
var Stimulsoft = require('stimulsoft-dashboards-js');
console.log("Stimulsoft dashboards loaded");

// Loading fonts
Stimulsoft.Base.StiFontCollection.addOpentypeFontFile("Roboto-Black.ttf");
console.log("Font loaded");

// Creating new dashboard
var report = Stimulsoft.Report.StiReport.createNewDashboard();
console.log("New dashboard created");

// Loading dashboard template
report.loadFile("Dashboard.mrt");
console.log("Dashboard template loaded");

// Export to PDF
report.exportDocumentAsync((pdfData) => {
    // Converting Array into buffer
    var buffer = Buffer.from(pdfData);

    // File System module
    var fs = require('fs');

    // Saving string with rendered dashboard in PDF into a file
    fs.writeFileSync('./Dashboard.pdf', buffer);
    console.log("Dashboard saved into PDF-file.");
}, Stimulsoft.Report.StiExportFormat.Pdf);
