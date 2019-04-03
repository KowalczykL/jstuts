var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var TaskSchema = new Schema(
  {
	  name: {type: String},
	  source: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	  executor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	  description: {type: String},
  }
);






//Export model
module.exports = mongoose.model('Task', TaskSchema);
