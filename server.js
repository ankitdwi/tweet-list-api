var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Tweet = require('./api/models/tweetListModel'), //created model loading here
  bodyParser = require('body-parser');
var uristring =   process.env.MONGOLAB_URI || 'mongodb://localhost/Tweetdb';

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//Mongodb connect
mongoose.connect(uristring);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/tweetListRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);


console.log('Tweet list RESTful API server started on: ' + port);

