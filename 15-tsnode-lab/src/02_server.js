"use strict";
exports.__esModule = true;
var http = require("http");
var hostname = process.env.HOST || '127.0.0.1';
var port = parseInt(process.env.PORT || '9000');
var server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('Hello ');
        res.write('from NodeJS ');
        res.write('and Express');
        res.end("!!!");
    }
});
server.on('error', function (e) {
    if (e.code === 'EADDRINUSE') {
        setTimeout(function () {
            console.log("Restarting the server: http://".concat(hostname, ":").concat(port));
            server.close();
            startServer();
        }, 3000);
    }
});
function startServer() {
    server.listen(port, hostname, function () {
        console.log("Server running on: http://".concat(hostname, ":").concat(port));
    });
}
startServer();
