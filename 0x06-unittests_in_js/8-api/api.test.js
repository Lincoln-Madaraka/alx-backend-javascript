const request = require('request');
const { expect } = require('chai');

describe('integration tests', function () {
  it('pass with 200 status', function (done) {
    request.get('http://localhost:7865/', (err, res, body) => {
      if (err) {
        done(err);
      } else {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome to the payment system');
        done();
      }
    });
  });
});
