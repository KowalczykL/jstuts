var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var InvoiceSchema = new Schema(
  {
	  supplier: { type: Schema.Types.ObjectId, ref: 'Supplier', required: true },
	  payable_to: {type: Date},
	  is_paid: {type: Boolean},
	  who_paid: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	  item: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
	  value: {type: Number, required: true}
	  
  }
);

// Virtual for invoice's URL
InvoiceSchema
.virtual('url')
.get(function () {
  return '/invoices/invoice/' + this._id;
});




//Export model
module.exports = mongoose.model('Invoice', InvoiceSchema);
