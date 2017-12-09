
var orm = require('../config/orm.js');
var burger = {
	selectAll: function(callback) {
		orm.selectAll(function(result) {
			callback(result);
		})
	},

	insertOne: function(burgerName, callback) {
		orm.insertOne(burgerName, function(result) {
			callback(result);
		})
	},

	updateOne: function(burgerId, devoured, callback) {
		orm.updateOne(burgerId, devoured, function(result) {
			callback(result);
		})
	}
}

module.exports = burger;