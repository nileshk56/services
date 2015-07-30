var user_service = require("../services/user_service");
var u = new user_service();

function user_proxy()
{
}

user_proxy.prototype.getUserName = function(){
	return "Hello " + u.getUserName();
}

module.exports = user_proxy;
