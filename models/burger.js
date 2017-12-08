
var orm = require('../config/orm.js');
var burger = {
	selectAll: function (table, callback) {
		orm.selectAll(table, function (result) {
			callback(result);
		})
	},

	insertOne: function (table, col, value, callback) {
		orm.insertOne(table, col, value, function (result) {
			callback(result);
		});
	},

	updateOne: function (table, setColumn, setValue, col, val, callback) {
		orm.updateOne(table, setColumn, setValue, col, val, function (result) {
			callback(result);
		});
	}
}

module.exports = burger;