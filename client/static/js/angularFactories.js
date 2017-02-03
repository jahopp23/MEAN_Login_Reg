logApp.factory('userFactory', function($http){
	console.log("User Factory has been loaded..");
	var factory = {};

	factory.register = function(user, callback, errorCallback){
		console.log(user);
		$http.post('/users', callback, errorCallback)
	}

	return factory;
})