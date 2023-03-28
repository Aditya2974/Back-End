var http = require('http')

// Application has access to http module hence we are able to create a   server.
var dt = require('./myfirstmodule');
var url = require('url');
// Create a Server object 
http.createServer(function (req, res) {  // req => represents the rquest from the client as an object.
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  //res.write("The date and time are currently: " + dt.myDateTime()); // write response to the client

  var q = url.parse(req.url, true).query;

  var text = q.year + " " + q.month;
  
  res.end(text); // end response
}).listen(8080);  // Server object listens on port 8080


// We can also create and object of the file system:

var fs = require('fs');
