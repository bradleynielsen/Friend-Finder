// =====================
// DEPENDENCIES
// =====================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



// =====================
// EXPRESS CONFIGURATION
// =====================

// basic setup
const app = express();
const PORT = process.env.PORT || 8080;


// bodyParser
app.use(bodyParser.json()); // "Returns middleware that only parses json"
app.use(bodyParser.urlencoded({extended: true})); //"Returns middleware that only parses urlencoded bodies"
app.use(bodyParser.text()); // "Returns middleware that only parses text"
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// External routing config files
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);


// Listener to open the express service
app.listen(PORT, function() {
  console.log("Express initializing");

  console.log("Listener locked");
  console.log("Express scanning on port" + PORT);


})
