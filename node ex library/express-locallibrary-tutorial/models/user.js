var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},

  }
);

// Virtual for user's URL
UserSchema
.virtual('url')
.get(function () {
  return '/invoices/user/' + this._id;
});




//Export model
module.exports = mongoose.model('User', UserSchema);
