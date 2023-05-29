// Stimulsoft dashboards module
var Stimulsoft = require('stimulsoft-dashboards-js');
console.log("Stimulsoft dashboards loaded");

// Creating new dashboard
var report = Stimulsoft.Report.StiReport.createNewDashboard();
console.log("New dashboard created");

// In `onBeginProcessData` event handler add custom HTTP headers
report.onBeginProcessData = function (args) {
    if (
        args.database === "JSON" && 
        args.command === "GetData" && 
        args.pathData && args.pathData.endsWith("/ProtectedDemo.json")
    ) {
        // Add custom header to pass through server protection
        args.headers.push({key: "X-Auth-Token", value: "*YOUR TOKEN*"});
    }
};

// Loading dashboard template
report.loadFile("DBSsimp.mrt");
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
