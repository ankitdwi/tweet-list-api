'use strict';

var mongoose = require('mongoose'),
  Tweet = mongoose.model('Tweets');

exports.list_all_tweets = function(req, res) {
    Tweet.find({}, function(err, tweet) {
    if (err)
      res.send(err);
    res.json(tweet);
  });
};

