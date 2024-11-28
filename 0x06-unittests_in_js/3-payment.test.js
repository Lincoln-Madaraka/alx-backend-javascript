const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utill.calculateNumber', () => {
    const utilSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(utilSpy.calledOnceWith('SUM', 100, 20)).to.be.true;
    utilSpy.restore();
  });
});
