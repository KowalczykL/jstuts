const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');
var Invoice = require('../models/invoice');

var async = require('async');

// Handle book delete on POST.
exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};
