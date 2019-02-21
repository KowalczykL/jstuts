var express = require('express');
var router = express.Router();

// Require controller modules.
//var book_controller = require('../controllers/bookController');
//var author_controller = require('../controllers/authorController');
//var genre_controller = require('../controllers/genreController');
//var book_instance_controller = require('../controllers/bookinstanceController');
var invoice_controller = require('../controllers/invoiceController');
var item_controller = require('../controllers/itemController');

/// INVOICE ROUTES ///

// GET INVOICE home page.
//router.get('/invoice', invoice_controller.index);

// GET request for one Book.
router.get('/invoice/:id', invoice_controller.invoice_detail);


router.get('/', invoice_controller.index);

router.get('/invoice', invoice_controller.invoice_list);

router.get('/invoice/unpayed', function(req, res, next) {
  res.send('/invoice/unpayed');
});

/// ITEM ROUTES ///
// Items section  --  item_controller.item_...


// GET request for one Genre.
router.get('/item/:id', item_controller.item_detail);

router.get('/item', item_controller.item_list);

router.get('/item/create', item_controller.item_create_get);

router.post('/item/create', item_controller.item_create_post);



module.exports = router;
