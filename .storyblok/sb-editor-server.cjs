var http = require("node:http");

var finalhandler = require("finalhandler");
var serveStatic = require("serve-static");

var serve = serveStatic("./.storyblok");

var server = http.createServer(function (req, res) {
	var done = finalhandler(req, res);
	serve(req, res, done);
});

server.listen(8000);
console.log("open storyblok on http://localhost:8000");
