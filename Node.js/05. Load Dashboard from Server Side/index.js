var http = require("http");
var fs = require('fs');

// Stimulsoft Dashboards module
var Stimulsoft = require("stimulsoft-dashboards-js");

function accept(req, res) {
	//Send index.html
	if (req.url == "/") {
		res.writeHeader(200, { "Content-Type": "text/html" });
		res.end(fs.readFileSync("index.html"));
	}
	//Send style.css
	else if (req.url == "/stimulsoft.viewer.office2013.whiteblue.css") {
		res.writeHeader(200, { "Content-Type": "text/css" });
		res.end(fs.readFileSync("node_modules/stimulsoft-dashboards-js/Css/stimulsoft.viewer.office2013.whiteblue.css"));
	}
	//Send reports.js
	else if (req.url == "/stimulsoft.reports.js") {
		res.writeHeader(200, { "Content-Type": "text/javascript" });
		res.end(fs.readFileSync("node_modules/stimulsoft-dashboards-js/Scripts/stimulsoft.reports.js"));
	}
	//Send dashboards.js
	else if (req.url == "/stimulsoft.dashboards.js") {
		res.writeHeader(200, { "Content-Type": "text/javascript" });
		res.end(fs.readFileSync("node_modules/stimulsoft-dashboards-js/Scripts/stimulsoft.dashboards.js"));
	}
	//Send viewer.js
	else if (req.url == "/stimulsoft.viewer.js") {
		res.writeHeader(200, { "Content-Type": "text/javascript" });
		res.end(fs.readFileSync("node_modules/stimulsoft-dashboards-js/Scripts/stimulsoft.viewer.js"));
	}
	//Send dashboard
	else if (req.url == "/getDashboard") {
		// Creating new dashboard
		var report = Stimulsoft.Report.StiReport.createNewDashboard();
		// Loading dashboard template
		report.loadFile("Dashboard.mrt");

		// Saving dashboard to JSON string
		var dashboardJson = report.saveToJsonString();

		//Send dashboard
		res.end(dashboardJson);
	}
}

console.log("Static file server running at http://localhost:" + 8888 + "/\nCTRL + C to shutdown");
//The HTTP server run on port 8888
http.createServer(accept).listen(8888);

