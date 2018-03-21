var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Tweet = require('./api/models/tweetListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//Mongodb connect
mongoose.connect(uristring, function (err, res) {
  if (err) {
      console.log('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
      console.log('Succeeded connected to: ' + uristring);
  }
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/tweetListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Tweet list RESTful API server started on: ' + port);

