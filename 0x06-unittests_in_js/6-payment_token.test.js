const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve data object', function (done) {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
