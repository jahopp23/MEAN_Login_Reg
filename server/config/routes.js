var users = require("./../controllers/users.js"); 

module.exports = function(app){
	  console.log("Routes Imported");
	  app.post('/users', users.create);
	  app.post('/login', users.login);
}

