var friendData = require('../data/friend-data.js');

// get the friend array from the datafile on line 1
module.exports = function(app) {
  app.get('api/friends', function (request, response){
    response.json(friendData);
  })

  // app.post('api/friends'), function (request, response) {
  //
  // }

}
