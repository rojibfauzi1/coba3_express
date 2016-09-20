var express = require("express");
var path = require("path");
/*var router = express.Router();*/
var bodyparser = require("body-parser");

var app = express();
//port server
app.set('port',process.env.PORT || 9999); //process.env == akan mengatur otomatis portnya jika sudah di upload

//bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//asset
app.use("/bootstrap",express.static(__dirname+'/bower_components/bootstrap/dist'));
app.use(express.static(path.join(__dirname+'/bower_components/')));

//routing 
app.use(require('./todo'));

app.listen(app.get('port'),function(req,res){
	console.log("Server is running on port "+app.get('port'));
});