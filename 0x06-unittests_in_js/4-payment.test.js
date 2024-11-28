const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utill.calculateNumber', () => {
    const utilSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(utilSpy.calledOnceWith('SUM', 100, 20)).to.be.true;
    utilSpy.restore();
  });

  it('should stup Utils.calculateNumber', () => {
    const utilStup = sinon.stub(Utils, 'calculateNumber');
    const logSpy = sinon.spy(console, 'log');
    utilStup.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(utilStup.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(logSpy.calledOnceWith('The total is: 10')).to.be.true;
    utilStup.restore();
    logSpy.restore();
  });
});
