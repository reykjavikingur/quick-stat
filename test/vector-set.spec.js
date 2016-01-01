var should = require('should');
var qs = require('../index');
var VectorSet = qs.VectorSet;

describe('VectorSet', function() {

	it('should be a function', function() {
		should(VectorSet).be.a.Function();
	});

	describe('constructor', function() {

		var vset;

		beforeEach(function() {
			vset = new VectorSet(2);
		});

		it('should work', function() {
			should(vset).be.ok;
		});

		describe('count', function() {
			it('should have initial count of 0', function() {
				should(vset.count()).eql(0);
			});
		});

		describe('sample [5,6]', function() {
			beforeEach(function() {
				vset.sample([5, 6]);
			});
			it('should have count of 1', function() {
				should(vset.count()).eql(1);
			});
			it('should have mean of [5,6]', function() {
				should(vset.mean()).eql([5, 6]);
			});
		});

		describe('sample [5,6], [9,3]', function() {
			beforeEach(function() {
				vset.sample([5, 6]);
				vset.sample([9, 3]);
			});
			describe('count', function() {
				it('should be 2', function() {
					should(vset.count()).eql(2);
				});
			});
			describe('mean', function() {
				it('should be correct', function() {
					should(vset.mean()).eql([7, 4.5]);
				});
			});
		});

	});

});