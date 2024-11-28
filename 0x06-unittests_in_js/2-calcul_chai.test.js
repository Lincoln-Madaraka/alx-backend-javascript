const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sum', () => {
    it('should return 0', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  
    it('should return 4', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    
    it('should round b', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    
    it('should round a', () => {
      expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
    });
    
    it('should round a and b', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    
    it('should round numbers with 0.5 correctly', () => {
      expect(calculateNumber('SUM', 5.5, 4.5)).to.equal(11);
    });
    
    it('should round negative number as well', () => {
      expect(calculateNumber('SUM', -3.5, 5)).to.equal(2);
    });
  
    it('should round negative number in a and b', () => {
      expect(calculateNumber('SUM', -3.5, -3.6)).to.equal(-7);
    });
  });

  describe('substract', () => {
    it('should return 0', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  
    it('should return 2', () => {
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    });
    
    it('should round b', () => {
      expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equal(3);
    });
    
    it('should round a', () => {
      expect(calculateNumber('SUBTRACT', 3, 1.2)).to.equal(2);
    });
    
    it('should round a and b', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });
    
  });

  describe('divide', () => {
    it('should return .25', () => {
      expect(calculateNumber('DIVIDE', 1, 4)).to.equal(.25);
    });
    
    it('should round b', () => {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(.25);
    });
    
    it('should round a', () => {
      expect(calculateNumber('DIVIDE', 1.2, 4)).to.equal(.25);
    });
    
    it('should round a and b', () => {
      expect(calculateNumber('DIVIDE', 1.2, 2.3)).to.equal(.5);
    });
    
    it('should round numbers with 0.5 correctly', () => {
      expect(calculateNumber('DIVIDE', 5.5, 60.4)).to.equal(.1);
    });
    
    it('should round negative number as well', () => {
      expect(calculateNumber('DIVIDE', -10, 5)).to.equal(-2);
    });

    it('should return Error if divided by 0', () => {
      expect(calculateNumber('DIVIDE', 3, 0)).to.equal('Error');
    });

    it('should return Error if divided by a number rounded to 0', () => {
      expect(calculateNumber('DIVIDE', 3, .2)).to.equal('Error');
    });
  });
});
