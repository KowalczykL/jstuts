var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PpeSchema = new Schema
(
    {
        number: { type: String},
        tariff: { type: String},
        creation_date: { type: Date},
        status: { type: String},       

    }
);

//Export model
module.exports = mongoose.model('Ppe', PpeSchema);








