const chai = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('request to api', () => {
  let spyConsole;
  beforeEach(() => spyConsole = sinon.spy(console, 'log'));
  afterEach(() => spyConsole.restore());

  it('request to api and values', () => {
    sendPaymentRequestToApi(100, 20);
    chai.expect(spyConsole.calledOnce).to.be.true;
    chai.expect(spyConsole.calledWith('The total is: 120')).to.be.true;
    sendPaymentRequestToApi(10, 10);
    chai.expect(spyConsole.calledOnce).to.be.true;
    chai.expect(spyConsole.calledWith('The total is: 20')).to.be.true;
  });
});
