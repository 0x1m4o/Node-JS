var http = require('http');
var myModules = require('./myModules');

// Date Time using custome modules
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World! ' + myModules.dateTime());
// }).listen(8080);


// For Looping using custom modules
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var response = '';
  for (let index = 0; index < myModules.peoples.length; index++) {
    const people = myModules.peoples[index];
    response += `Hello ${people.name} with age of ${people.age}<br>`;
  }

  res.end(response);
}).listen(8080);