var express = require("express");
var path = require("path");
/*var router = express.Router();*/
var bodyparser = require("body-parser");

var app = express();
//port server
app.set('port',process.env.PORT || 9999);

//bodyparser
app.use(bodyparser());

//view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//routing 
app.get("/",function(req,res){
	res.render('index',{
		title : 'apps expressjs',
		items : [
			{id:1,name: 'zainn'},
			{id:2,name: 'rojib'},
			{id:3,name: 'fauzi'}
		]
	}); //merender view engine 
});
/*module.exports = router;*/

app.listen(app.get('port'),function(req,res){
	console.log("Server is running on port "+app.get('port'));
});