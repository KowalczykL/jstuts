var Obj = require('../models/ppeModel');

exports.create_list_get = function(req, res) {
    Obj.find({}, function(err, obj) {
      if (err)
        res.send(err);
      res.json(obj);
    });
  };


  exports.create_create_post = function(req, res) {
    var new_obj = new Obj(req.body);
    new_obj.save(function(err, obj) {
      if (err)
        res.send(err);
      res.json(obj);
    });
  };


  exports.create_read_get = function(req, res) {
    Obj.findById(req.params.objId, function(err, obj) {
      if (err)
        res.send(err);
      res.json(obj);
    });
  };


  exports.create_update_put = function(req, res) {
    Obj.findOneAndUpdate({_id: req.params.objId}, req.body, {new: true}, function(err, obj) {
      if (err)
        res.send(err);
      res.json(obj);
    });
  };


  exports.create_delete_delete = function(req, res) {
    Obj.remove({
      _id: req.params.objId
    }, function(err, obj) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };