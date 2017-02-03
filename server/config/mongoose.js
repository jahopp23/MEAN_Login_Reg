var mongoose = require("mongoose");
var path = require('path');
var fs = require('fs');

mongoose.connect("mongodb://localhost/loginRegistration");


var models_path = path.join(__dirname + '/../models');
console.log("Model Path:  ", models_path);

fs.readdirSync(models_path).forEach(function(file){
	 if(file.indexOf('.js')>0){
	 	  require(models_path + '/' + file);
	 }
})