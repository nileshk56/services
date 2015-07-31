
module.exports = function(app) {
	var users = require('./controllers/user_controller');	
	app.get('/', users.home);

};
