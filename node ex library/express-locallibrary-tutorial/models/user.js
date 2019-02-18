var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    user_name: {type: String, required: true, max: 100},

  }
);

// Virtual for user's URL
UserSchema
.virtual('url')
.get(function () {
  return '/catalog/user/' + this._id;
});




//Export model
module.exports = mongoose.model('User', UserSchema);
