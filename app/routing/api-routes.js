

var path = require("path");

// Load datafile
var friendData = require('../data/friend-data.js');


// get the friend array from the datafile
module.exports = function(app) {

  app.get('/api/friends', function (request, response){
    response.json(friendData);
    console.log(friendData);
  })

  app.post('api/friends', function (request, response) {

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    // give the request body a name
    var userData = request.body;

    // get the scores from the name
    var userScores = userData.scores;

    // to hold the difference between the user and friends
    var totalDifference = 0;

    // loop over all friends
    for (var i = 0; i < friends.length; i++) {
      console.log(frineds[i].name);
      totalDifference = 0;

      // nested loop over the scores; for this itteration,
      // we will compare the current i with the itteration of j
      for( j = 0 ; j < friends[i].socres[j] ; j++) {

        // add to the total difference : the absolute value of the difference,
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        // if this itteration's totalDifference is less than the standing bestMatch then...
        if (totalDifference <= bestMatch.friendDifference) {
          // set the bestMatch to be the new friendDifference
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    // push the new user data to the array of friends
    friends.push(userData);

    // send the json of the best match to be displayed for the next view
    res.json(bestMatch);
  });
};
