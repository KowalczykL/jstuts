const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');
var Invoice = require('../models/invoice');
var Supplier = require('../models/supplier');
var Item = require('../models/item');
var User = require('../models/user');

var async = require('async');


exports.invoice_create_get = function(req, res, next) { 
      
    // Get all authors and genres, which we can use for adding to our book.
    async.parallel({
        suppliers: function(callback) {
            Supplier.find(callback);
        },
        items: function(callback) {
            Item.find(callback);
        },
        users: function(callback) {
            User.find(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        res.render('invoice_form', { title: 'Create Invoice', suppliers: results.suppliers, items: results.items, users: results.users });
    });
    
};	

exports.invoice_create_post = [	

    // Validate fields.
    body('supplier', 'Supplier must not be empty.').isLength({ min: 1 }).trim(),
    body('payable_to', 'Payable to must not be empty.').isLength({ min: 1 }).trim(),
    body('item', 'Item must not be empty.').isLength({ min: 1 }).trim(),
    //body('user', 'User must not be empty').isLength({ min: 1 }).trim(),

    // Sanitize fields (using wildcard).
    sanitizeBody('*').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {
        
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create an object with escaped and trimmed data.
        var invoice = new Invoice(
          { supplier: req.body.supplier,
            payable_to: req.body.payable_to,
            item: req.body.item,
            value: req.body.value
           });

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages.

            // Get all authors and genres for form.
    async.parallel({
        suppliers: function(callback) {
            Supplier.find(callback);
        },
        items: function(callback) {
            Item.find(callback);
        },
        users: function(callback) {
            User.find(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        res.render('invoice_form', { title: 'Create Invoice', suppliers: results.suppliers, items: results.items, users: results.users, invoice: invoice, errors: errors.array() });
            });
            return;
        }
        else {
            // Data from form is valid. Save invoice.
            invoice.save(function (err) {
                if (err) { return next(err); }
                   //successful - redirect to new book record.
                   res.redirect(invoice.url);
                });
        }
    }
];


exports.invoice_delete_get = function(req, res, next) {

    async.parallel({
        invoice: function(callback) {

            Invoice.findById(req.params.id)
              .populate('supplier')
              .populate('who_paid')
              .populate('item')                           
              .exec(callback);
        },
        //book_instance: function(callback) {
//
        //  BookInstance.find({ 'book': req.params.id })
        //  .exec(callback);
        //},
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.invoice==null) { // No results.
            var err = new Error('Book not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        //console.log('test console'+results.invoice.who_paid);
        res.render('invoice_delete', { title: 'Delete Invoice', invoice: results.invoice } );
    });

};


exports.invoice_delete_post = function(req, res, next) {

            // Author has no books. Delete object and redirect to the list of authors.
            Invoice.findByIdAndDelete(req.body.invoiceid, function deleteInvoice(err) {
                if (err) { return next(err); }
                // Success - go to author list
                res.redirect('/invoices/invoice')
            })
    
    
};













exports.index = function(req, res) {   
    
    async.parallel({
        invoice_count: function(callback) {
            Invoice.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        suppliers_count: function(callback) {
            Supplier.countDocuments({}, callback);
        },
        items_count: function(callback) {
            Item.countDocuments({}, callback);
        },
        users_count: function(callback) {
            User.countDocuments({}, callback);
        },
        
    }, function(err, results) {
        res.render('invoice_index', { title: 'Invoice module Home', error: err, data: results });
    });
};


exports.invoice_detail = function(req, res, next) {

    async.parallel({
        invoice: function(callback) {

            Invoice.findById(req.params.id)
              .populate('supplier')
              .populate('who_paid')
              .populate('item')                           
              .exec(callback);
        },
        //book_instance: function(callback) {
//
        //  BookInstance.find({ 'book': req.params.id })
        //  .exec(callback);
        //},
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.invoice==null) { // No results.
            var err = new Error('Book not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        //console.log('test console'+results.invoice.who_paid);
        res.render('invoice_detail', { title: 'Invoice', invoice: results.invoice } );
    });

};


exports.invoice_list = function(req, res, next) {
	//console.log(req.query.is_paid);
	Invoice.find()
	.populate('item')
	.populate('supplier')
	.sort([['item', 'ascending']])
    .exec(function (err, list_invoices) {	
      if (err) { return next(err); }
        //Successful, so render
        //console.log(list_invoices);
	      res.render('invoice_list', { title: 'Invoice List', invoice_list: list_invoices });
    });
};



exports.invoice_pay_get = function(req, res) {
    res.send('NOT IMPLEMENTED: invoice_pay_get');
};

exports.invoice_pay_post = function(req, res) {
    res.send('NOT IMPLEMENTED: invoice_pay_post');
};
