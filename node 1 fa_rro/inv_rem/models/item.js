var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var ItemSchema = new Schema(
  {
    item_name: {type: String, required: true, max: 100},

  }
);

// Virtual for supplier's URL
ItemSchema
.virtual('url')
.get(function () {
  return '/catalog/item/' + this._id;
});

//Export model
module.exports = mongoose.model('Item', ItemSchema);
