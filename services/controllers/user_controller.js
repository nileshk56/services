var user_proxy = require("../proxy/user_proxy");
var f = new user_proxy();

exports.home = function(req, res){
	res.send(f.getUserName());
};
