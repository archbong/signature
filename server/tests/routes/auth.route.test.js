const request = require('request');
const { describe, it } = require('mocha');
const expect = require('chai').expect;

describe('Sign up routes test', () => {
  const options = {
    url: `${process.env.API_BASE_URL}/api/v1/auth/signup`,
    method: "POSY"
  }

  it('POST error on signup route', (done) => {
    request(options, (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.equal(500);
      }
      done();
    })
  })

  describe('Sign in route', () => {
    const options = {
      url: `${process.env.API_BASE_URL}/api/v1/signin`,
      method: "GET"
    }

    it('POST error on signin route', (done) => {
      request(options, (err, res, body) => {
        if (err) {
          expect(res.statusCode).to.equal(500);
        }
        done();
      })
    })
  })
})

