// Stimulsoft Dashboard module
var Stimulsoft = require('stimulsoft-dashboards-js');
console.log("Stimulsoft Dashboards loaded");

// Creating new dashboard
var report = Stimulsoft.Report.StiReport.createNewDashboard();
console.log("New dashboard created");

// Loading dashboard template
report.loadFile("DashboardChristmas.mrt");
console.log("Dashboard template loaded");

// Save dashboard to file
report.saveFile("DashboardChristmas2.mrt");
console.log("Rendered dashboard saved");