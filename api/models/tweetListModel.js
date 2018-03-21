'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TweetSchema = new Schema({
  name: {
    type: String,
    default: "NA"
  },
  email: {
    type: String,
    default: "NA"
  },
  img: {
    type: String,
    default: 'assets/profile.jpg'
  },
  desc: {
    type: String,
    default: "NA"
  },
});

module.exports = mongoose.model('Tweet', TweetSchema);