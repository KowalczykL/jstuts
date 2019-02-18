var express = require('express');
var router = express.Router();

// Require controller modules.
//var book_controller = require('../controllers/bookController');
//var author_controller = require('../controllers/authorController');
//var genre_controller = require('../controllers/genreController');
//var book_instance_controller = require('../controllers/bookinstanceController');
var invoice_controller = require('../controllers/invoiceController');

/// INVOICE ROUTES ///

// GET INVOICE home page.
//router.get('/invoice', invoice_controller.index);


router.get('/', function(req, res, next) {
  res.send('BASE');
});



router.get('/invoice', function(req, res, next) {
  res.send('You\'re so cool');
});





router.get('/invoice/222', invoice_controller.index);


module.exports = router;
