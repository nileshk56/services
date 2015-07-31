require("../models/users_model.js");
var mongoose = require('mongoose'), 
User = mongoose.model('User');
console.log(User);
function user_service()
{
	this.first_name = "Nilesh";
	this.last_name = "Kangane";
}

user_service.prototype.getUserName = function(userId){
	return this.first_name + " " + this.last_name;
};

user_service.prototype.get_users = function(callback){
	User.find(function(err, user){
		return callback(user);		
	});
};

module.exports = user_service;
