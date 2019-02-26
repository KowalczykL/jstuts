const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

//var Book = require('../models/book');
//var Author = require('../models/author');
//var Genre = require('../models/genre');
//var BookInstance = require('../models/bookinstance');
var Invoice = require('../models/invoice');
var Supplier = require('../models/supplier');
var Item = require('../models/item');
var User = require('../models/user');

var async = require('async');


exports.user_list = function(req, res, next) {
	
	User.find()
	.sort([['name', 'ascending']])
    .exec(function (err, list_users) {	
      if (err) { return next(err); }
        //Successful, so render
        console.log(list_users);
	      res.render('user_list', { title: 'User List', user_list: list_users });
    });
};












