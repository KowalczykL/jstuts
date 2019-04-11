var express = require('express');
var router = express.Router();



var test_controller = require('../controllers/testController');
var ptpireeController = require('../controllers/ptpireeController');


/* GET listing. */


router.get('/', test_controller.index);

router.get('/tests', function(req, res, next) {
  res.send('/tests');
});

router.get('/cookie', test_controller.cookie);

router.get('/ptpiree', ptpireeController.csv_to_conslog);









module.exports = router;
