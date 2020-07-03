var http = require('http');
require('dotenv').config()

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end(process.env.TOKEN);
});
server.listen(8080);