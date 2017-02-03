var mongoose = require('mongoose'); 
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({

	first_name: {
		type: String,
		required: true

	},
	last_name: {
		type: String, 
		required: [true, "Last name required."]

	},
	username: {
		type: String,
		required: true,
		unique: true,
		minlength: [5, "Username must be 5 characters."]

	},
	password: {
		type: String,
		required: [true, "Password Required."],
		minlength: [4, "Password must be 4 characters."]
	}
});

UserSchema.methods.generateHash = function(password){
	   return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}
UserSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
}
UserSchema.pre('save', function(done){
	this.password = this.generateHash(this.password);
	done();
})

mongoose.model('User', UserSchema); 
