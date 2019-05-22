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

        var userInput = req.body;

        var userScores = userInput.scores;

        var friendName = '';
        var friendImage = '';
        var friendDifference = 5000
        

        for (let i = 0; i < people.length; i++) {
            var diff = 0;
            for (let k = 0; k < userScores.length; k++) {
                diff += Math.abs(people[i].scores[k] - userScores[k]);
            };

            if (diff < friendDifference) {
                friendDifference = diff;
                friendName = people[i].name;
                friendImage = people[i].photo;
            };
        }

        people.push(userInput);

        res.json({ status: 'OK', friendName: friendName, friendImage: friendImage, friendDifference: friendDifference });
    })
};
