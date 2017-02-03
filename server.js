var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("./server/config/mongoose.js");
 
var app = express(); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/client"));
app.use(express.static(__dirname + "/bower_components"));

var routeSetter = require('./server/config/routes.js')(app)

app.listen(8000, function(){
	console.log("Running on 8000");
})

