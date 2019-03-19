var express = require('express');
var router = express.Router();

// Require controller modules.
//var book_controller = require('../controllers/bookController');
//var author_controller = require('../controllers/authorController');
//var genre_controller = require('../controllers/genreController');
//var book_instance_controller = require('../controllers/bookinstanceController');
var invoice_controller = require('../controllers/invoiceController');
var item_controller = require('../controllers/itemController');
var supplier_controller = require('../controllers/supplierController');
var user_controller = require('../controllers/userController');

/// INVOICE ROUTES ///

router.get('/invoice/create', invoice_controller.invoice_create_get);
// uncomment after method creation
router.post('/invoice/create', invoice_controller.invoice_create_post);

// GET request to delete Book.
router.get('/invoice/:id/delete', invoice_controller.invoice_delete_get);

// POST request to delete Book.
router.post('/invoice/:id/delete', invoice_controller.invoice_delete_post);


router.get('/invoice/:id/pay', invoice_controller.invoice_pay_get);


router.post('/invoice/:id/pay', invoice_controller.invoice_pay_post);


router.get('/invoice/:id', invoice_controller.invoice_detail);

router.get('/', invoice_controller.index);

router.get('/invoice', invoice_controller.invoice_list);

//router.get('/invoice/unpayed', function(req, res, next) {
//  res.send('/invoice/unpayed');
//});





/// ITEM ROUTES ///

router.get('/item/create', item_controller.item_create_get);
router.post('/item/create', item_controller.item_create_post);

router.get('/item/:id', item_controller.item_detail);

router.get('/item', item_controller.item_list);






/// SUPPLIER ROUTES ///

router.get('/supplier', supplier_controller.supplier_list);


/// USER ROUTES ///

router.get('/user', user_controller.user_list);

module.exports = router;
