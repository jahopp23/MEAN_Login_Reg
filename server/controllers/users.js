var mongoose = require('mongoose');  
var User = mongoose.model('User'); 

module.exports = function(){
	console.log("Users Controller has been loaded...");
	return {

		create: function(req, res){
			    console.log(req.body); 
			    var newUser = new User(req.body);
			    newUser.save(function(err, data){
				        if(err){

					            console.log("***New User Error***")
					            console.log(err);
					            res.status(422);
					            res.json(err);
				}

				else{
					      console.log(data);
					      res.json(data);
				}
			})
		},

		login: function(req, res){
			    console.log(req.body);
			    var user = User.findOne({username: req.body.username}, function(err, data){
			    	     if(data == null){
			    	     	// if(err){
			    	     		console.log("Inside If Data Err");

			    	     		res.status(422);

			    	     		res.json({data:
                                                        {errors:
                                                                  { login: 
                                                                          {message: "Invalid Login Credentials"}}}})
			    	     	}
			    	     	else if(data && data.validPassword(req.body.password)){
			    	     		    console.log("Inside Else If Data Error.");
			    	     		    console.log(data);
			    	     		    res.json({_id: data._id});
			    	     	}
			    	     	else{
			    	     		    console.log("Final Else executed....error-free.")
			    	     		    res.status(422);
			    	     		    res.json({data:
			    	     		                        {errors: 
			    	     		                                { login:
			    	     		                                        {message:"Invalid Login Credentials."}}}})
			    	     	}
			    	     
			    });
			
		}
	}
}();