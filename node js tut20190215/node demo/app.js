var express = require("express");
var app = express();
var port = 3000;
 
 var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
 var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://puszatek:puszatek1@ds143474.mlab.com:43474/db_libr_tut");
 
var nameSchema = new mongoose.Schema({
	
	
	
	  //supplier: { type: Schema.Types.ObjectId, ref: 'Supplier', required: true },
	  payable_to: String,
	  is_paid: String,
	  //who_paid: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	  item: String,
	  value: String,
    
    
    
});
var User = mongoose.model("Invoice", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    console.log(myData);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
