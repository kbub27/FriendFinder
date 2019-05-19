//SET DEPENDENCIES HERE
var express = require('express');
var Path = require('path');
var bodyParser = require('body-parser');

// SET UP APP AND PORT FOR LOCAL AND HEROKU
var app = express();
var PORT = process.env.PORT || 8080;

// MAKE SURE THAT THE CSS FOLDER CAN BE SEEN SO WE HAVE STYLE ON OUR PAGE.
app.use(express.static(Path.join(__dirname, './app/public')));

// MIDDLE WARE FOR PARSE-ING RESPONSES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// REQUIRE THE PATH TO THE FILES THAT WE NEED.
require(Path.join(__dirname, './app/routing/apiRoutes'))(app);
require(Path.join(__dirname, './app/routing/htmlRoutes'))(app);

// START THE APP LISTENING TO OUR PORT.
app.listen(PORT, function() {
  console.log('App is currently listening on PORT: ' + PORT);
});