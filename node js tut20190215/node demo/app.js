var express = require("express");
var app = express();
var port = 3000;
 
 var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
 var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://puszatek:puszatek1@ds143474.mlab.com:43474/db_libr_tut");
 
 var name2Schema = new mongoose.Schema({
	 // 1 - 
  name: String,
  //lastName: String,
  //xxx: String,
});
 // 2 - this is where collection name in db come from, auto ads 's' at the end
var Supplier = mongoose.model("User", name2Schema); 
 
 
 
app.get("/", (req, res) => {
res.sendFile(__dirname + "/index.html");
});
 
 app.post("/addname", (req, res) => {
	console.log("REQ"+req.body[0]); 
	
	 // 3 - 
  var myData = new Supplier(req.body);
  console.log("myData.."+myData);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
 
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
