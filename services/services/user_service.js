var User = require("../models/users_model.js");

function user_service()
{
	this.first_name = "Nilesh";
	this.last_name = "Kangane";
}

user_service.prototype.getUserName = function(userId){
	return this.first_name + " " + this.last_name;
}


module.exports = user_service;
