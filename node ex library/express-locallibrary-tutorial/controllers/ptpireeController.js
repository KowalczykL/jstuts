var Ptpiree = require('../models/ptpireeModel');



stringToPtpiree = function(inputLine)
    {
let lines = inputLine.split(';');

let newPtpiree = new Ptpiree;

newPtpiree.line1 = lines[0];
newPtpiree.line2 = lines[1];
newPtpiree.line3 = lines[2];
newPtpiree.line4 = lines[3];
newPtpiree.date =  lines[4];
newPtpiree.nr_of_hrs = lines[5];
newPtpiree.values = '';

    }