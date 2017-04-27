//load modules

var express = require("express");
var body-parser = require("body-parser");
var path = require("path");

// declare the server
var app = express();

//delcare port 
var PORT = 8080;

//middleware
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//create routes, get post
//start server