const request = require('request');
const { describe, it } = require('mocha');
const expect = require('chai').expect;

describe('User routes test', () => {
  const options = {
    url: `${process.env.API_BASE_URL}/api/v1/users`,
    method: "GET"
  }

  it('GET all user route', (done) => {
    request(options, (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.equal(500);
      }
      expect(res.statusCode).to.equal(200)
      done();

    })
  })

  describe('GET Single user route', () => {
    const options = {
      url: `${process.env.API_BASE_URL}/api/v1/users/650b16ed9a019b17f99a6853`,
      method: "GET"
    }

    it('Get user by userId route', (done) => {
      request(options, (err, res, body) => {
        if (err) {
          expect(res.statusCode).to.equal(500);
        }
        expect(res.statusCode).to.equal(200)
        done();

      })
    })

    describe('POST user route', () => {
      const options = {
        url: `${process.env.API_BASE_URL}/api/v1/users`,
        method: "POST"
      }
  
      it('POST error on new user route', (done) => {
        request(options, (err, res, body) => {
          if (err) {
            expect(res.statusCode).to.equal(500);
          }
          done();
        })
      })
    })

    describe('Updating a user route', (done) => {
      const options = {
        url: `${process.env.API_BASE_URL}/api/v1/users/650b16ed9a019b17f99a6853`,
        method: "PUT"
      }
      it('PUT error on user by userId route', (done) => {
        request(options, (err, res, body) => {
          if (err) {
            expect(res.statusCode).to.equal(500);
          }
          done();
        })
      })
    })
  })

  describe('Deleting a user route', (done) => {
    const options = {
      url: `${process.env.API_BASE_URL}/api/v1/users/${process.env.USERID}`,
      method: "DELETE"
    }
    it('Delete user by userId route', (done) => {
      request(options, (err, res, body) => {
        if (err) {
          expect(res.statusCode).to.equal(500);
        }
        expect(res.statusCode).to.equal(204)
        done();
      })
    })
  })
})

