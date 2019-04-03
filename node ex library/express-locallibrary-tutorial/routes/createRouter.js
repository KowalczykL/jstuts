var express = require('express');
var router = express.Router();

var create_controller = require('../controllers/createController');

router.get('/create', create_controller.create_list_get);
router.post('/create', create_controller.create_create_post);

router.get('/create/:createId', create_controller.create_read_get);
router.put('/create/:createId', create_controller.create_update_put);
router.delete('/create/:createId', create_controller.create_delete_delete);

module.exports = router;





