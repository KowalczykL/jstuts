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


exports.supplier_list = function(req, res, next) {
	
	Supplier.find()
	.sort([['name', 'ascending']])
    .exec(function (err, list_suppliers) {	
      if (err) { return next(err); }
        //Successful, so render
        console.log(list_suppliers);
	      res.render('supplier_list', { title: 'Supplier List', supplier_list: list_suppliers });
    });
};

// Display detail page for a specific Genre.
exports.item_detail = function(req, res, next) {

    async.parallel({
        item: function(callback) {
            Item.findById(req.params.id)
              .exec(callback);
        },

        item_invoices: function(callback) {
          Invoice.find({ 'item': req.params.id })
          .exec(callback);
        },

    }, function(err, results) {
        if (err) { return next(err); }
        if (results.genre==null) { // No results.
            var err = new Error('Item not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('item_detail', { title: 'Item Detail', item: results.item, item_invoices: results.item_invoices } );
    });

};







exports.item_create_get = function(req, res, next) {     
  res.render('item_form', { title: 'Create Item' });
};

exports.item_create_post =  [
   
  // Validate that the name field is not empty.
  body('name', 'Item name required').isLength({ min: 1 }).trim(),
  
  // Sanitize (trim and escape) the name field.
  sanitizeBody('name').trim().escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {

    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a genre object with escaped and trimmed data.
    var item = new Item(
      { name: req.body.name }
    );


    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
      res.render('item_form', { title: 'Create Item', item: item, errors: errors.array()});
    return;
    }
    else {
      // Data from form is valid.
      // Check if Genre with same name already exists.
      Item.findOne({ 'name': req.body.name })
        .exec( function(err, found_item) {
           if (err) { return next(err); }

           if (found_item) {
             // Genre exists, redirect to its detail page.
             res.redirect(found_item.url);
           }
           else {

             item.save(function (err) {
               if (err) { return next(err); }
               // Genre saved. Redirect to genre detail page.
               res.redirect(item.url);
             });

           }

         });
    }
  }
];
