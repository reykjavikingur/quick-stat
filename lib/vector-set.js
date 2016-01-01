var _ = require('underscore');
var Set = require('./set');

function VectorSet(order) {
	this._sets = [];
	while (this._sets.length < order) {
		this._sets.push(new Set());
	}
}

_.extend(VectorSet.prototype, {

	sample: function sample(value) {
		for (var i = 0; i < this._sets.length; i++) {
			this._sets[i].sample(value[i]);
		}
	},

	count: function count() {
		return this._sets[0].count();
	},

	mean: function mean() {
		return _.map(this._sets, function(set) {
			return set.mean();
		});
	}

});

module.exports = VectorSet;