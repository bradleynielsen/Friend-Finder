// load the data from the file containing the friend info
var friends = require("../data/friends.js");


module.exports = function(app) {

  // express api call to return the contents of the friends variable, which just returns the json exported in friends.js
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // this will update the friends array and compare with the other friends to see what is the best match
  app.post("/api/friends", function(req, res) {

    // set defaults for the bestmatch placeholder
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    // grab the request data body and hand it to a variable
    var userData = req.body;

    // grab the scores child from the userdata json
    var userScores = userData.scores;

    // init the score for comparing the user and friends
    var totalDifference = 0;


    // start looping over the array of friends held in friends.js
    for (var i = 0; i < friends.length; i++) {


      console.log(friends[i].name);

      // reset a new score
      totalDifference = 0;

      // loop over the scores children, j,   for the current iteration of the loop, i
      for (var j = 0; j < friends[i].scores[j]; j++) {

        // build the score from absolute vaulues of the distance away from the user's score away from the firends score
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        if (totalDifference <= bestMatch.friendDifference) {

          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    friends.push(userData);

    // send back a json for the modal
    res.json(bestMatch);

  });

};
