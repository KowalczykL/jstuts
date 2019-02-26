var express = require('express');
var router = express.Router();



var test_controller = require('../controllers/testController');



/* GET listing. */


router.get('/', test_controller.index);

router.get('/tests', function(req, res, next) {
  res.send('/tests');
});

router.get('/cookie', test_controller.cookie);











module.exports = router;
