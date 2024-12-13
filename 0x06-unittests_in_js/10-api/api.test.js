const request = require('request');
const { expect } = require('chai');

describe('integration tests', function () {
  it('pass with 200 status', function (done) {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      if (err) {
        done(err);
      } else {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Payment methods for cart 12');
        done();
      }
    });
  });

  it('should fail with 404 status', function (done) {
    request.get('http://localhost:7865/cart/hello', (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

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

  it('should return json object', function (done) {
    request.get('http://localhost:7865/available_payments', (err, res, body) => {
      if (err) {
        done(err);
      } else {
        expect(res.statusCode).to.be.equal(200);
        const data = JSON.parse(body);
        expect(data).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          }
        });
        done();
      }
    });
  });

  it('should login with route /login', function (done) {
    request.post('http://localhost:7865/login', {
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        userName: 'Betty'
      })
    }, function (err, res, body) {
      if (err) {
        done(err);
      } else {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal(`Welcome Betty`);
        done();
      }
    });
  });
});
