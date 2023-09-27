# Loading a Dashboard from the Server-Side

### Installation and running
Use npm to install requred modules:

    $ npm install
	
Run Sample:

    $ npm start

### Step by step
Required and Stimulsoft Dashboards.JS modules loading:

    var http = require("http");
    var fs = require('fs');

    // Stimulsoft Dashboards module
    var Stimulsoft = require('stimulsoft-dashboards-js');

Define the accept() function that will process requests to the server and output the desired result at a specific URL address - an HTML page, script and style files, a dashboard template:

    function accept(req, res) {
	    //Send index.html
	    if (req.url == "/") {
		    res.writeHeader(200, { "Content-Type": "text/html" });
		    res.end(fs.readFileSync("index.html"));
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

Start the server and specify the required port, in this case, 8888:

    console.log("Static file server running at http://localhost:" + 8888 + "/\nCTRL + C to shutdown");
    //The HTTP server run on port 8888
    http.createServer(accept).listen(8888);
