const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    logSpy.restore();
  });

  it('should call Utill.calculateNumber 120, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(logSpy.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('should call Utill.calculateNumber 10, 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(logSpy.calledOnceWith('The total is: 20')).to.be.true;
  });
});
