# Using with Express

This example illustrates how to use Stimulsoft Dashboards.JS in conjunction with the Express framework.

### Installation and running
Use npm to install requred modules:

    $ npm install

Run Sample:

    $ npm start

### Step by step server.js

Configure Express Server:
   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;
   ```
   
Set up a route to serve the Stimulsoft Dashboards.JS viewer and designer page:
   ```javascript
    app.get('/viewer', (req, res) => {
        res.sendFile(__dirname + '/viewer.html');
    });

    app.get('/designer', (req, res) => {
        res.sendFile(__dirname + '/designer.html');
    });
    ```

Set up a route to serve the necessary Stimulsoft Dashboards.js scripts:
    ```javascript
    app.get('/stimulsoft.reports.js', (req, res) => {
        res.sendFile(__dirname + "/node_modules/stimulsoft-dashboards-js/Scripts/stimulsoft.reports.js");
    });

    app.get('/stimulsoft.dashboards.js', (req, res) => {
        res.sendFile(__dirname + "/node_modules/stimulsoft-dashboards-js/Scripts/stimulsoft.dashboards.js");
    });

    app.get('/stimulsoft.viewer.js', (req, res) => {
        res.sendFile(__dirname + "/node_modules/stimulsoft-dashboards-js/Scripts/stimulsoft.viewer.js");
    });

    app.get('/stimulsoft.designer.js', (req, res) => {
        res.sendFile(__dirname + "/node_modules/stimulsoft-dashboards-js/Scripts/stimulsoft.designer.js");
    });
    ```

In your Express route handler, load the report definition:
    ```javascript
    app.get('/dashboard', (req, res) => {
        res.sendFile(__dirname + '/SampleDashboard.mrt');
    });
   ```

Start the server by adding the following code at the end of the file:
   ```javascript
   app.listen(port, () => {
       console.log(`Server running on port ${port}`);
   });
   ```

### Step by step Viewer page
Add the following code to the HTML file to include the required Stimulsoft Dashboards.js libraries and initialize the viewer:
   ```html
    <script src="stimulsoft.reports.js"></script>
    <script src="stimulsoft.dashboards.js"></script>
    <script src="stimulsoft.viewer.js"></script>
   ```

Add the following code to the HTML file to script tag:
Set full screen mode for the viewer:
    ```javascript
    var options = new Stimulsoft.Viewer.StiViewerOptions();
    options.appearance.fullScreenMode = true;
    ```

Create the dashboard viewer with specified options:
    ```javascript
    var viewer = new Stimulsoft.Viewer.StiViewer(options, "StiViewer", false);
    ```

Render Viewer:
    ```javascript    
    viewer.renderHtml("viewer");
    ```

Create a new dashboard instance:
    ```javascript
    var report = Stimulsoft.Report.StiReport.createNewDashboard();
    ```

Load dashboard from url:
    ```javascript
    report.loadFile('/dashboard');
    ```

Show dashboard template in the viewer:
    ```javascript
    viewer.report = report;
    ```

### Step by step Designer page
Add the following code to the HTML file to include the required Stimulsoft Dashboards.js libraries and initialize the viewer:
   ```html
    <script src="stimulsoft.reports.js"></script>
    <script src="stimulsoft.dashboards.js"></script>
    <script src="stimulsoft.viewer.js"></script>
    <script src="stimulsoft.designer.js"></script>
   ```

Add the following code to the HTML file to script tag:
Set full screen mode for the designer:
    ```javascript
    var options = new Stimulsoft.Designer.StiDesignerOptions();
    options.appearance.fullScreenMode = true;
    ```

Create the dashboard viewer with specified options:
    ```javascript
    var designer = new Stimulsoft.Designer.StiDesigner(options, 'StiDesigner', false);
    ```

Render Designer:
    ```javascript    
    designer.renderHtml("designer");
    ```

Create a new dashboard instance:
    ```javascript
    var report = Stimulsoft.Report.StiReport.createNewDashboard();
    ```

Load dashboard from url:
    ```javascript
    report.loadFile('/dashboard');
    ```

Edit dashboard template in the designer:
    ```javascript
    designer.report = report;
    ```