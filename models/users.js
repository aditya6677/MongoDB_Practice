var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    uname: {
      type: String,
      required: true,
      trim: true
    },
    pass: {
      type: String,
      required: true,
    }
  });

var User = mongoose.model('User', UserSchema);
module.exports = User;