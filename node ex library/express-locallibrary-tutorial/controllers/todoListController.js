var TaskTodo = require('../models/todoListModel');

exports.task_list_get = function(req, res) {
    TaskTodo.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };


  exports.task_create_post = function(req, res) {
    var new_task = new TaskTodo(req.body);
    new_task.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };


  exports.task_read_get = function(req, res) {
    TaskTodo.findById(req.params.taskId, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };


  exports.task_update_put = function(req, res) {
    TaskTodo.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };


  exports.task_delete_delete = function(req, res) {
    TaskTodo.remove({
      _id: req.params.taskId
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };