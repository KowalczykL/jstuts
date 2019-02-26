const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

//var Book = require('../models/book');
//var Author = require('../models/author');
//var Genre = require('../models/genre');
//var BookInstance = require('../models/bookinstance');
//var Invoice = require('../models/invoice');
//var Supplier = require('../models/supplier');
//var Items = require('../models/item');
//var Users = require('../models/user');

var async = require('async');

exports.index = function(req, res) { 
	console.log("cookie test -- START");
	res.cookie("userData", "users");
	res.send("<a href = /tests/cookie/>tests/cookie</a>"+
	"<br>"+
	"<a href = />RETURN</a>");
	
	
	
  //res.send();
  };


exports.cookie = function(req, res) { 
	console.log("cookie test -- START");
	res.cookie("userData", "users");
	res.send(req.cookies);
	
	
	
  //res.send();
  };




//// Handle book delete on POST.
//exports.index = function(req, res) {   
    
    //async.parallel({
        //invoice_count: function(callback) {
            //Invoice.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        //},
        //suppliers_count: function(callback) {
            //Supplier.countDocuments({}, callback);
        //},
        //items_count: function(callback) {
            //Items.countDocuments({}, callback);
        //},
        //users_count: function(callback) {
            //Users.countDocuments({}, callback);
        //},
        
    //}, function(err, results) {
        //res.render('invoice_index', { title: 'Local Library Home', error: err, data: results });
    //});
//};


//exports.invoice_detail = function(req, res, next) {

    //async.parallel({
        //invoice: function(callback) {

            //Invoice.findById(req.params.id)
              //.populate('supplier')
              //.populate('who_paid')
              //.populate('item')                           
              //.exec(callback);
        //},
        ////book_instance: function(callback) {
////
        ////  BookInstance.find({ 'book': req.params.id })
        ////  .exec(callback);
        ////},
    //}, function(err, results) {
        //if (err) { return next(err); }
        //if (results.invoice==null) { // No results.
            //var err = new Error('Book not found');
            //err.status = 404;
            //return next(err);
        //}
        //// Successful, so render.
        //console.log('test console'+results.invoice.who_paid);
        //res.render('invoice_detail', { title: 'Invoice', invoice: results.invoice } );
    //});

//};







// Handle book delete on POST.
//exports.invoice_list = function(req, res, next) {
	
	//Invoice.find()
	//.populate('item')
	//.populate('supplier')
	//.sort([['item', 'ascending']])
    //.exec(function (err, list_invoices) {	
      //if (err) { return next(err); }
        ////Successful, so render
	      //res.render('invoice_list', { title: 'Invoice List', invoice_list: list_invoices });
    //});
//};






