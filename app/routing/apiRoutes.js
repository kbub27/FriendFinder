//SET THE DEPENDENCY HERE
var Path = require('path');
//REQUIRE MY ARRAY OF FRIENDS FROM FRIENDS.JS
var people = require('../data/friends.js');

module.exports = function (app) {
    // GRAB THE PEOPLE LIST
    app.get('/api/friendslist', function (req, res) {
        res.json(people);
    });

    app.post('/api/friendslist', function (req, res) {
        console.log(req.body);
        res.send(req.body);
    })
};
