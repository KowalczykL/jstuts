var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PtpireeSchema = new Schema
(
    {
        
        line1: {type: String},
        line2: {type: String},
        line3: {type: String},
        line4: {type: String},
        date: {type:Date},
        nr_of_hrs: {type: Number},
        status: {type: String, default: '+'},
        values: {type: Array},   
        check_sum: {type: String},  

    }
);

module.exports = mongoose.model('Ptpiree', PtpireeSchema);


