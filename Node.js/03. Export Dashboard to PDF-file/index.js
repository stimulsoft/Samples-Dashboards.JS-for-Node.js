// Stimulsoft dashboards module
var Stimulsoft = require('stimulsoft-dashboards-js');
console.log("Stimulsoft dashboards loaded");

// Creating new dashboard
var report = Stimulsoft.Report.StiReport.createNewDashboard();
console.log("New dashboard created");

// Loading dashboard template
report.loadFile("DashboardChristmas.mrt");
console.log("Dashboard template loaded");

// Export to PDF
var stream = Stimulsoft.Dashboard.Export.StiDashboardExportTools.exportToStream(report, new Stimulsoft.Dashboard.Export.Settings.StiPdfDashboardExportSettings());

// Converting to buffer
var buffer = Buffer.from(stream.toArray())

// File System module
var fs = require('fs');

// Saving string with rendered dashboard in PDF into a file
fs.writeFileSync('./DashboardChristmas.pdf', buffer);
console.log("Dashboard saved into PDF-file.");