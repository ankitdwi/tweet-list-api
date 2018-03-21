'use strict';

var mongoose = require('mongoose'),
  Tweet = mongoose.model('Tweet');

exports.list_all_tweets = function(req, res) {
    Tweet.find({}, function(err, tweet) {
    if (err)
      res.send(err);
    res.json(tweet);
  });
};

