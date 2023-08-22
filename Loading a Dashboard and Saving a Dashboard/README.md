# Loading a Dashboard and Saving a Dashboard

This example illustrates loading of the dashboard, and saving to the file.

### Installation and running
Use npm to install requred modules:

    $ npm install
Run Sample:

    $ node index

### Step by step

Stimulsoft Dashboards.JS module loading:

    var Stimulsoft = require('stimulsoft-dashboards-js');

Creating new dashboard:

    var report = Stimulsoft.Report.StiReport.createNewDashboard();

Loading sample dashboard template:

    report.loadFile("Dashboard.mrt");

Save dashboard to file

    report.saveFile("Dashboard2.mrt");
