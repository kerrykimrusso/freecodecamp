// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

let TimestampController = require('./api/timestamp/TimestampController');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
}); 

app.get('/timestamp/:time', TimestampController.getTimestamp);

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
}); 
