
How it works -> [link](https://github.com/stimulsoft/DataAdapters.JS).  
  
# Starting SQL Adapters from the HTTP Server

This example demonstrates the implementation of connections to different databases (MySQL, Firebird, MSSQL and PostgreSQL). Adapters files are in a directory with an example. You can include adapters into your projects without changes.

### Installation and running
Use npm to install requred modules:

    $ npm install
    
Run Sample:

    $ node start

And on the client side, you need to specify the URL of this host that handles requests:
```js
StiOptions.WebServer.url = "http://localhost:9615";
```

### Step by step

Loading required modules:

    var http = require('http');
    var adapter = require("stimulsoft-data-adapter");

Main function for work with adapter, it collect data from responce and run adapter with received command:

    function accept(request, response) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
        response.setHeader("Cache-Control", "no-cache");

        var data = "";
        request.on('data', function (buffer) {
            data += buffer;
        });

        request.on('end', function () {
            var command = adapter.getCommand(data);
            adapter.process(command, function (result) {
                var responseData = adapter.getResponse(result);
                response.end(responseData);
            });
        });
    }

Starting DataAdapter:

    http.createServer(accept).listen(9615);
