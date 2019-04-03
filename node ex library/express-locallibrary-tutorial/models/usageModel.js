var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsageSchema = new Schema
(
    {
        reading1: { type: Schema.Types.ObjectId, ref: 'Reading', required: true },
        reading2: { type: Schema.Types.ObjectId, ref: 'Reading', required: true },
        net_value: { type: Number},
        gross_value: { type: Number},
        losses_value: { type: Number},    

    }
);

//Export model
module.exports = mongoose.model('Usage', UsageSchema);