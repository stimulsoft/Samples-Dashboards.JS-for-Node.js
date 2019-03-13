// Stimulsoft Dashboards module
var Stimulsoft = require('stimulsoft-dashboards-js');
console.log("Stimulsoft Dashboards loaded");

// Creating new dashboard
var report = Stimulsoft.Report.StiReport.createNewDashboard();
console.log("New dashboard created");

// Loading dashboard template
report.loadFile("DashboardChristmas.mrt");
console.log("Dashboard template loaded");

//Export to Excel
var stream = Stimulsoft.Dashboard.Export.StiDashboardExportTools.exportToStream(report, new Stimulsoft.Dashboard.Export.Settings.StiExcelDashboardExportSettings());

//Converting to buffer    
var buffer = Buffer.from(stream.toArray())

// File System module
var fs = require('fs');

//Saving to a file
fs.writeFileSync('./DashboardChristmas.xlsx', buffer);
console.log("Dashboard saved into Excel-file.");