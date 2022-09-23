const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber: ', function () {
	describe('output sum', function () {
		it('SUM', function () {
			assert.equal(calculateNumber("SUM", 1, 1), 2);
			assert.equal(calculateNumber("SUM", 1, 1.2), 2);
			assert.equal(calculateNumber("SUM", 1.3, 1), 2);
			assert.equal(calculateNumber("SUM", 1.7, 1), 3);
			assert.equal(calculateNumber("SUM", -1.3, 1.3), 0);
			assert.equal(calculateNumber("SUM", -1.3, -1.3), -2);
		});
	});
	describe("output subtract", function () {
		it('SUBTRACT', function() {
			assert.equal(calculateNumber("SUBTRACT", 1.3, 1.8), -1);
			assert.equal(calculateNumber("SUBTRACT", 1.3, 1.3), 0);
			assert.equal(calculateNumber("SUBTRACT", 1.3, -1.3), 2);
			assert.equal(calculateNumber("SUBTRACT", -1.3, 1.3), -2);
			assert.equal(calculateNumber("SUBTRACT", -1.3, -1.3), 0);
			assert.equal(calculateNumber("SUBTRACT", 0.2, 0.4), 0);
		});
	});
	describe("Divide the first value whit the second", function () {
		it('DIVIDE', function() {
			assert.equal(calculateNumber("DIVIDE", 1, 1), 1);
			assert.equal(calculateNumber("DIVIDE", 1.7, 1.2), 2);
			assert.equal(calculateNumber("DIVIDE", 1.3, 1.8), 0.5);
			assert.equal(calculateNumber("DIVIDE", 4.3, 1.8), 2);
			assert.equal(calculateNumber("DIVIDE", 1.3, 1.3), 1);
			assert.equal(calculateNumber("DIVIDE", -1.3, 1.2), -1);
			assert.equal(calculateNumber("DIVIDE", 1.3, 0), "Error");
			assert.equal(calculateNumber("DIVIDE", -1.3, 0), "Error");
			assert.equal(calculateNumber("DIVIDE", 0, 1), 0);
		});
	});
});