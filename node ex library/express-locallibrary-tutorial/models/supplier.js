var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var SupplierSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},

  }
);

// Virtual for supplier's URL
SupplierSchema
.virtual('url')
.get(function () {
  return '/invoices/supplier/' + this._id;
});



//Export model
module.exports = mongoose.model('Supplier', SupplierSchema);
