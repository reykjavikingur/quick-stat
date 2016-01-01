var _ = require('underscore');

function Set() {
	this._sum = 0;
	this._count = 0;
	this._sqrSum = 0;
}

_.extend(Set.prototype, {

	sample: function sample(value) {
		this._count++;
		this._sum += value;
		this._sqrSum += value * value;
		if (this._count < 2) {
			this._min = value;
			this._max = value;
		} else {
			this._min = Math.min(this._min, value);
			this._max = Math.max(this._max, value);
		}
	},

	count: function count() {
		return this._count;
	},

	mean: function mean() {
		return this._sum / this._count;
	},

	variance: function variance() {
		var sqrMean = this._sqrSum / this._count;
		var mean = this.mean();
		var meanSqrd = mean * mean;
		return sqrMean - meanSqrd;
	},

	min: function min() {
		return this._min;
	},

	max: function max() {
		return this._max;
	}

});

module.exports = Set;