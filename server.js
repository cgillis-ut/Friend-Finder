//load modules

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// declare the server
var app = express();

//delcare port 
var PORT = process.env.PORT || 8080;

//middleware
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

//create routes, get post
//start server
app.listen(8080, function(){
	console.log("app is running");
	console.log()
});