// Stimulsoft Dashboards module
var Stimulsoft = require('stimulsoft-dashboards-js');
console.log("Stimulsoft Dashboards loaded");

// Creating new dashboard
var report = Stimulsoft.Report.StiReport.createNewDashboard();
console.log("New dashboard created");

// Loading dashboard template
report.loadFile("Dashboard.mrt");
console.log("Dashboard template loaded");

// Export to Excel
report.exportDocumentAsync((data) => {
    // Converting Array into buffer
    var buffer = Buffer.from(data)

    // File System module
    var fs = require('fs');

    //Saving to a file
    fs.writeFileSync('./Dashboard.xlsx', buffer);
    console.log("Dashboard saved into Excel-file.");
}, Stimulsoft.Report.StiExportFormat.Excel2007);