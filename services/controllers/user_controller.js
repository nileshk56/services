var user_proxy = require("../proxy/user_proxy");
var f = new user_proxy();

exports.home = function(req, res){
	f.get_users(function(data){
		res.json(data);
	});
};
