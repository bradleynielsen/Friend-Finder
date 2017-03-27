var friendData = require('../data/user-data.js');

// get the friend array from the datafile on line 1
module.exports = function(app) {
  app.get('api/users', function (request, response){
    response.json(friendData);
  })

  // app.post('api/users'), function (request, response) {
  //
  // }

}
