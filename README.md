# Node.js samples for Stimulsoft Dashboards.JS

#### This repository contains the source code of the examples of usage Stimulsoft Dashboards.JS data visualization tool in the Node.js applications, using JavaScript data engine. The dashboard builder and examples are fully compatible with Node.js 14 and higher.

## Overview
There is available a set of examples of using Stimulsoft Dashboards.JS in Node.js, for each example, there is a full set of necessary files (Roboto-Black.ttf to render the dashboard, the test dashboard file Dashboard.mrt etc.)
  
* [Creating a Table then Adding Two Filters and Exporting to Excel](https://github.com/stimulsoft/Samples-Dashboards.JS-for-Node.js/tree/master/Creating%20a%20Table%20then%20Adding%20Two%20Filters%20and%20Exporting%20to%20Excel)  
This example illustrates how to add a filter to the table element in the dashboard and store the result in the Excel file.
  
* [Exporting a Dashboard to Excel](https://github.com/stimulsoft/Samples-Dashboards.JS-for-Node.js/tree/master/Exporting%20a%20Dashboard%20to%20Excel)  
This example allows you to download the dashboard, render it and export it to Excel format.
  
* [Exporting a Dashboard to PDF](https://github.com/stimulsoft/Samples-Dashboards.JS-for-Node.js/tree/master/Exporting%20a%20Dashboard%20to%20PDF)  
This example contains code to render a dashboard to a PDF document.
  
* [Loading a Dashboard and Saving a Dashboard](https://github.com/stimulsoft/Samples-Dashboards.JS-for-Node.js/tree/master/Loading%20a%20Dashboard%20and%20Saving%20a%20Dashboard)  
This simple example shows the steps to download the dashboard, its rendering and saving in mdc format.
  
* [Loading a Dashboard from the Server-Side](https://github.com/stimulsoft/Samples-Dashboards.JS-for-Node.js/tree/master/Loading%20a%20Dashboard%20from%20the%20Server-Side)  
This example shows how to use Node.js server side to work with a dashboard.
  
* [Starting SQL adapters from the HTTP server](https://github.com/stimulsoft/Samples-Dashboards.JS-for-Node.js/tree/master/Starting%20SQL%20adapters%20from%20the%20HTTP%20server)  
This example demonstrates the implementation of connections to different databases (MySQL, Firebird, MSSQL and PostgreSQL). Adapters files are in a directory with an example.
  
* [Supply Custom Headers for Json Database](https://github.com/stimulsoft/Samples-Dashboards.JS-for-Node.js/tree/master/Supply%20Custom%20Headers%20for%20Json%20Database)  
This example illustrates loading of the dashboard that uses JSON database from some web-server and accessible only by suppliing custom HTTP header.

* [Using with Express](https://github.com/stimulsoft/Samples-Dashboards.JS-for-Node.js/tree/master/Using%20with%20Express)  
This example illustrates how to use Stimulsoft Dashboards.JS in conjunction with the Express framework.

## Running samples
To run the examples, open the required folder with the example and run the following commands in the console:
* use `npm install` to install requred modules;
* use `node index` to run sample.

## Connect to SQL databases
Since pure JavaScript does not have built-in methods for working with remote databases, this functionality is implemented using server-side code. Therefore, Stimulsoft Dashboards.JS product contains server data adapters implemented using PHP, Node.js, ASP.NET, Java, .NET Core technologies.
* [DataAdapters.JS](https://github.com/stimulsoft/DataAdapters.JS)

## Other JS dashboard components
Many examples for other platforms and technologies are collected in separate repositories:
* [HTML / JS](https://github.com/stimulsoft/Samples-Dashboards.JS-for-HTML)
* [Angular / AngularJS](https://github.com/stimulsoft/Samples-Dashboards.JS-for-Angular)
* [React](https://github.com/stimulsoft/Samples-Dashboards.JS-for-React)
* [Vue.js](https://github.com/stimulsoft/Samples-Dashboards.JS-for-Vue.js)

## About Stimulsoft Dashboards.JS
Stimulsoft Dashboards.JS is a robust dashboard development tool designed for JavaScript-based applications. This product offers a powerful engine for data processing and visualization, along with an intuitive dashboard designer and an interactive viewer to review finalized documents. Dashboards.JS is compatible with any HTML5 and JavaScript supported web browser, making it suitable for creating dashboards. Furthermore, it easily integrates with React, Vue.js, Node.js apps and projects, and can be utilized both on the client-side and the server-side.

## Useful links
* [Live Demo](http://demo.stimulsoft.com/#Js)
* [Product Page](https://www.stimulsoft.com/en/products/dashboards-js)
* [Free Download](https://www.stimulsoft.com/en/downloads)
* [NPM](https://www.npmjs.com/package/stimulsoft-dashboards-js)
* [Documentation](https://www.stimulsoft.com/en/documentation/online/programming-manual/index.html?reports_js.htm)
* [License](LICENSE.md)
