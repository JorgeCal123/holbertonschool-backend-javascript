const { expect } = require('chai');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  const consoleSpy = sinon.spy(console, 'log');
  it('validates usage of Utils.calculateNumber', () => {
    const result = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(result.calledWith('SUM', 100, 20)).to.be.true;
    expect(result.alwaysReturned(10)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    result.restore();
    consoleSpy.restore();
  });
});
