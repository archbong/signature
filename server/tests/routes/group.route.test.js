const request = require('request');
const { describe, it } = require('mocha');
const expect = require('chai').expect;

describe('Group routes test', () => {
  const options = {
    url: `${process.env.API_BASE_URL}/api/v1/groups`,
    method: "GET"
  }

  it('GET all group route', (done) => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200)
      done();
    })
  })

  describe('GET Single group route', () => {
    const options = {
      url: `${process.env.API_BASE_URL}/api/v1/groups/`,
      method: "GET"
    }

    it('Get group by groupId route', (done) => {
      request(options, (err, res, body) => {
        expect(res.statusCode).to.equal(200)
        done();
      })
    })

    describe('POST group route', () => {
      const options = {
        url: `${process.env.API_BASE_URL}/api/v1/groups`,
        method: "POST"
      }
  
      it('POST error on new group route', (done) => {
        request(options, (err, res, body) => {
          if (err) {
            expect(res.statusCode).to.equal(500);
          }
          done();
        })
      })
    })

    describe('Updating a group route', (done) => {
      const options = {
        url: `${process.env.API_BASE_URL}/api/v1/groups/650b16ed9a019b17f99a6853`,
        method: "PUT"
      }
      it('PUT error on group by groupId route', (done) => {
        request(options, (err, res, body) => {
          if (err) {
            expect(res.statusCode).to.equal(500);
          }
          done();
        })
      })
    })
  })

  describe('Deleting a group route', (done) => {
    const options = {
      url: `${process.env.API_BASE_URL}/api/v1/groups/${process.env.groupID}`,
      method: "DELETE"
    }
    it('Delete error group by groupId route', (done) => {
      request(options, (err, res, body) => {
        if (err) {
          expect(res.statusCode).to.equal(500);
        }
        done();
      })
    })
  })
})

