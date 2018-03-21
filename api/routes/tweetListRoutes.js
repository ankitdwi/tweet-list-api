'use strict';
module.exports = function(app) {
  var tweetList = require('../controllers/tweetListController');

  // Routes
  app.route('/list')
    .get(tweetList.list_all_tweets)
};