var express = require('express');
var router = express.Router();



var test_controller = require('../controllers/testController');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('index');
});

router.get('/tests', function(req, res, next) {
  res.send('/tests');
});

router.get('/cookie', function(req, res, next) {
  res.send('/cookie');
});











module.exports = router;
