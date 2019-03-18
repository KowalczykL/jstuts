const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var path = require('path');
//var Book = require('../models/book');
//var Author = require('../models/author');
//var Genre = require('../models/genre');
//var BookInstance = require('../models/bookinstance');
//var Invoice = require('../models/invoice');
//var Supplier = require('../models/supplier');
//var Item = require('../models/item');
//var User = require('../models/user');

//var async = require('async');


exports.index = function(req, res) {
//console.log(req);
//console.log(path.join(global.appRoot, "public//index.html"));
  //res.render("index");
  res.sendFile(path.join(global.appPublic, "html/index.html"));
  //console.log(path.join(global.appRoot, "public//index.html"));
};
