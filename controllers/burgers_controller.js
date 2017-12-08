var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
	burger.selectAll('burgers', function(result) {
		res.render('index', {burgers: result});
	});
});

router.post('/api/burger', function(req, res) {
	var name = req.body.burger_name;
	burger.insertOne('burgers', 'burger_name', name, function(result) {
		console.log(`Row inserted at id ${result.insertId}`);
		res.status(200).end();
	});
});

router.put('/api/:burger', function(req, res) {
	var id = req.params.burger;
	burger.updateOne('burgers', 'devoured', 1, 'id', id, function(result) {
		console.log('Result: ', result.message);
		console.log('Rows updated: ' + result.affectedRows);
		res.status(200).end();
	});
});

module.exports = router;