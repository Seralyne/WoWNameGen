var express = require('express')
var serveStatic = require('serve-static')
const hostname = '127.0.0.1';
const port = 3000;


var app = express();

app.use(serveStatic('web', {index: ["index.html"]}))


app.listen(port, () => {


console.log("Server running on https://localhost:" + port + ". Press Ctrl-C while in the terminal window (that's this one!) to close it again. ")

var url = 'http://localhost:' + port;
var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
require('child_process').exec(start + ' ' + url);


})

