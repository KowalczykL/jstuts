var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MeterSchema = new Schema
(
    {
        number: { type: Number},
        multiplicand: { type: Number},
        loses_percentage: { type: Number},
        zones_number: { type: Number},      

    }
);

//Export model
module.exports = mongoose.model('Meter', MeterSchema);