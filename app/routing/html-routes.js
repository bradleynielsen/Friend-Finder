//so we can deal with the filesystem
var path = require("path");


module.exports = function(app) {
  //when the route hits "/survey", then get the survey.html file and load it
  app.get("/survey", function(request, response){
    response.sendFile(path.join(__dirname +"/../public/survey.html"));
  });

  //default to home for a "/" route
  app.use(function(request, response){
    response.sendFile(path.join(__dirname + "/../public/home.html"));
  });

};
