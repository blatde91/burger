var connection = require('./connection.js');

var orm = {
	selectAll: function(callback) {
		var query = `SELECT * FROM burgers`;
		connection.query(query, function(err, result) {
			if (err) throw err;
			callback(result);
		});
	},

	insertOne: function(burgerName, callback) {
		var query = `INSERT INTO burgers (burger_name, devoured) VALUES ('${burgerName}', 0)`;
		connection.query(query, function(err, result) {
			if (err) throw err;
			callback(result);
		});
	},

	updateOne: function(burgerId, devoured, callback) {
		var query = `UPDATE burgers SET devoured = ${devoured} WHERE id = ${burgerId}`;
		connection.query(query,  function(err, result) {
			if (err) throw err;
			callback(result);
		});
	}
}

module.exports = orm;