var express = require("express");
var router = express.Router();

var todoItems = [
			{id:1,name: 'zainn'},
			{id:2,name: 'rojib'},
			{id:3,name: 'fauzi'}
		];

router.get("/",function(req,res){
	res.render('index',{
		title : 'apps expressjs',
		items : todoItems
	}); //merender view engine 
});

router.post("/add",function(req,res){
	var newList = req.body.newList;

	todoItems.push({
		id: todoItems.length+1,
		name: newList
	});
	res.redirect("/");
});

module.exports = router;