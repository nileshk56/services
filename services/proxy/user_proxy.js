var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('connected');
});

var user_service = require("../services/user_service");
var u = new user_service();

function user_proxy()
{
}

user_proxy.prototype.getUserName = function(){
	return "Hello " + u.getUserName();
}

user_proxy.prototype.get_users = function(callback) {
	client.hgetall('frameworks', function(err, data) {
		if(data) {
			callback(data);	    	
		} else {
			u.get_users(function(data){
				client.hmset('get_users', data);
				callback(data);	
			});		
		}
	});
}

user_proxy.prototype.get_users_reset_cache = function(callback) {
	u.get_users(function(data){
		client.hmset('get_users', data);
	});
}

module.exports = user_proxy;
