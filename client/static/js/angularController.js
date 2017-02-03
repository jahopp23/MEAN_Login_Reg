logApp.controller('usersController', ['userFactory', function(userFactory){
	console.log("the Users Controller has been loaded.")
	var self = this;

	this.register = function(){
		console.log(self.regUser);
		userFactory.register(self.regUser, function(data){
			console.log(data);

		}, function(error){
			console.log(error);
		})
	}
}])