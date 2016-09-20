var express = require("express");
var path = require("path");
/*var router = express.Router();*/
var bodyparser = require("body-parser");

var app = express();
//port server
app.set('port',process.env.PORT || 9999);

//bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//asset
app.use("/bootstrap",express.static(__dirname+'/bower_components/bootstrap/dist'));
app.use(express.static(path.join(__dirname+'/bower_components/')));

var todoItems = [
			{id:1,name: 'zainn'},
			{id:2,name: 'rojib'},
			{id:3,name: 'fauzi'}
		];

//routing 
app.get("/",function(req,res){
	res.render('index',{
		title : 'apps expressjs',
		items : todoItems
	}); //merender view engine 
});

app.post("/add",function(req,res){
	var newList = req.body.newList;

	todoItems.push({
		id: todoItems.length+1,
		name: newList
	});
	res.redirect("/");
});

app.listen(app.get('port'),function(req,res){
	console.log("Server is running on port "+app.get('port'));
});