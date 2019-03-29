var express = require('express');
var router = express.Router();

// Require controller modules.
//var book_controller = require('../controllers/bookController');
//var author_controller = require('../controllers/authorController');
//var genre_controller = require('../controllers/genreController');
//var book_instance_controller = require('../controllers/bookinstanceController');
//var invoice_controller = require('../controllers/invoiceController');
//var task_controller = require('../controllers/taskController');
var todoList_controller = require('../controllers/todoListController');

router.get('/tasks', todoList_controller.task_list_get);
router.post('/tasks', todoList_controller.task_create_post);

router.get('/tasks/:taskId', todoList_controller.task_read_get);
router.put('/tasks/:taskId', todoList_controller.task_update_put);
router.delete('/tasks/:taskId', todoList_controller.task_delete_delete);

module.exports = router;
