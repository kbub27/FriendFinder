var Path = require('path');

module.exports = function(app) {

	// DEFAULT TO HOME PAGE
	app.get('/', function(req, res) {
		res.sendFile(Path.join(__dirname, '../public/home.html'));
	});

	// ROUTE TO SURVEY PAGE
	app.get('/survey', function(req, res) {
		res.sendFile(Path.join(__dirname, '../public/survey.html'));
	});
};
