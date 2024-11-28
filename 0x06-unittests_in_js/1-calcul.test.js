const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sum', () => {
    it('should return 0', () => {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
  
    it('should return 4', () => {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    
    it('should round b', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    
    it('should round a', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3), 4);
    });
    
    it('should round a and b', () => {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    
    it('should round numbers with 0.5 correctly', () => {
      assert.equal(calculateNumber('SUM', 5.5, 4.5), 11);
    });
    
    it('should round negative number as well', () => {
      assert.equal(calculateNumber('SUM', -3.5, 5), 2);
    });
  
    it('should round negative number in a and b', () => {
      assert.equal(calculateNumber('SUM', -3.5, -3.6), -7);
    });
  });

  describe('substract', () => {
    it('should return 0', () => {
      assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  
    it('should return 2', () => {
      assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
    });
    
    it('should round b', () => {
      assert.equal(calculateNumber('SUBTRACT', 3.7, 1), 3);
    });
    
    it('should round a', () => {
      assert.equal(calculateNumber('SUBTRACT', 3, 1.2), 2);
    });
    
    it('should round a and b', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });
    
  });

  describe('divide', () => {
    it('should return .25', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 4), .25);
    });
    
    it('should round b', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 3.7), .25);
    });
    
    it('should round a', () => {
      assert.equal(calculateNumber('DIVIDE', 1.2, 4), .25);
    });
    
    it('should round a and b', () => {
      assert.equal(calculateNumber('DIVIDE', 1.2, 2.3), .5);
    });
    
    it('should round numbers with 0.5 correctly', () => {
      assert.equal(calculateNumber('DIVIDE', 5.5, 60.4), .1);
    });
    
    it('should round negative number as well', () => {
      assert.equal(calculateNumber('DIVIDE', -10, 5), -2);
    });

    it('should return Error if divided by 0', () => {
      assert.equal(calculateNumber('DIVIDE', 3, 0), 'Error');
    });

    it('should return Error if divided by a number rounded to 0', () => {
      assert.equal(calculateNumber('DIVIDE', 3, .2), 'Error');
    });
  });
});
