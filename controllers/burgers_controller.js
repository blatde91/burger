var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
	burger.selectAll(function(result) {
		res.render('index', {burgers: result});
	});
});

router.post('/api/burger', function(req, res) {
	burger.insertOne(req.body.burgerName, function(result) {
		console.log(result);
		res.send({
			redirectTo: '/'
		});
	});
});

router.put('/api/burger', function(req, res) {
	var id = req.body.burgerId;
	var dev = req.body.devoured;
	burger.updateOne(id, dev, function(result) {
		console.log('Result: ', result.message);
		console.log('Rows updated: ' + result.affectedRows);
		res.send({
			redirectTo: '/'
		})
	});
});

module.exports = router;