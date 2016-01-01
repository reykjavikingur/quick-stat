var should = require('should');
var qs = require('../index');
var Set = qs.Set;

describe('Set', function() {

	describe('constructor', function() {

		var set;

		beforeEach(function() {
			set = new Set();
		});

		it('should work', function() {
			should(set).be.ok;
		});

		describe('initial count', function() {
			it('should be zero', function() {
				should(set.count()).eql(0);
			});
		});

		describe('sample 5', function() {
			beforeEach(function() {
				set.sample(5);
			});
			describe('count', function() {
				it('should be 1', function() {
					should(set.count()).eql(1);
				});
			});
			describe('mean', function() {
				it('should be 5', function() {
					should(set.mean()).eql(5);
				});
			});
			describe('variance', function() {
				it('should be 0', function() {
					should(set.variance()).eql(0);
				});
			});
			describe('min', function() {
				it('should be 5', function() {
					should(set.min()).eql(5);
				});
			});
			describe('max', function() {
				it('should be 5', function() {
					should(set.max()).eql(5);
				});
			});
		});

		describe('sample 5, 6', function() {
			beforeEach(function() {
				set.sample(5);
				set.sample(6);
			});
			describe('count', function() {
				it('should be 2', function() {
					should(set.count()).eql(2);
				});
			});
			describe('mean', function() {
				it('should be 5.5', function() {
					should(set.mean()).eql(5.5);
				});
			});
			describe('variance', function() {
				it('should be 0.25', function() {
					should(set.variance()).eql(0.25);
				});
			});
			describe('min', function() {
				it('should be 5', function() {
					should(set.min()).eql(5);
				});
			});
			describe('max', function() {
				it('should be 6', function() {
					should(set.max()).eql(6);
				});
			});
		});

	});

});