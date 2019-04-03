var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReadingSchema = new Schema
(
    {
        ppe: { type: Schema.Types.ObjectId, ref: 'Ppe', required: true },
        meter: { type: Schema.Types.ObjectId, ref: 'Meter', required: true },
        value: {type: Number},
        creation_date: { type: Date},
        origin_file: { type: String},      

    }
);

//Export model
module.exports = mongoose.model('Reading', ReadingSchema);