var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    fname: {
      type: String,
      required: true,
      trim: true
    },
    lname: {
      type: String,
      required: true,
      trim: true
    }
  });

var User = mongoose.model('User', UserSchema);
module.exports = User;