const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('test calculateNumber', () => {
  it('should return 0', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });

  it('should return 4', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  
  it('should round b', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  
  it('should round a', () => {
    assert.equal(calculateNumber(1.2, 3), 4);
  });
  
  it('should round a and b', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  
  it('should round numbers with 0.5 correctly', () => {
    assert.equal(calculateNumber(5.5, 4.5), 11);
  });
  
  it('should round negative number as well', () => {
    assert.equal(calculateNumber(-3.5, 5), 2);
  });

  it('should round negative number in a and b', () => {
    assert.equal(calculateNumber(-3.5, -3.6), -7);
  });
});
